import { logger } from "./logger";

export interface VisitorData {
  name: string;
  jobTitle: string;
  source: string;
}

// Replace with your Google Apps Script webhook URL
const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

// Check if backend URL is configured
const isBackendConfigured = () => {
  return (
    BACKEND_URL &&
    BACKEND_URL !== "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec" &&
    !BACKEND_URL.includes("YOUR_SCRIPT_ID")
  );
};

/**
 * Sanitize user input to prevent XSS and injection attacks
 */
function sanitizeInput(input: string, maxLength: number = 100): string {
  if (!input || typeof input !== "string") {
    return "";
  }
  // Remove any potentially dangerous characters and limit length
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>\"']/g, "") // Remove HTML/script injection characters
    .replace(/\s+/g, " "); // Normalize whitespace
}

/**
 * Validate and sanitize visitor data before sending
 */
function sanitizeVisitorData(data: VisitorData): VisitorData {
  return {
    name: sanitizeInput(data.name, 50),
    jobTitle: sanitizeInput(data.jobTitle, 50),
    source: ["linkedin", "resume", "direct"].includes(data.source)
      ? data.source
      : "direct", // Only allow valid source values
  };
}

export async function sendVisitorData(data: VisitorData): Promise<void> {
  // Skip if backend is not configured
  if (!isBackendConfigured()) {
    logger.log("Backend URL not configured. Skipping visitor data submission.");
    return;
  }

  // Sanitize input data before sending
  const sanitizedData = sanitizeVisitorData(data);

  try {
    // Google Apps Script webhooks may redirect, so we need to handle that
    // Using 'no-cors' mode allows the request to succeed even if we can't read the response
    // This is fine since we're just sending data and don't need to read the response
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      mode: "no-cors", // Prevents CORS errors with Google Apps Script
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: sanitizedData.name || "",
        jobTitle: sanitizedData.jobTitle || "",
        source: sanitizedData.source || "direct",
      }),
    });

    // With 'no-cors' mode, response.ok will always be false and we can't read the response
    // But the request still succeeds and data is sent to the backend
    // This is expected behavior for Google Apps Script webhooks
  } catch (error) {
    // Even with 'no-cors', network errors can still occur
    // Log but don't interrupt user experience - data may still have been sent
    logger.error("Failed to send data to backend:", error);
    // Fail silently - don't interrupt user experience
  }
}

