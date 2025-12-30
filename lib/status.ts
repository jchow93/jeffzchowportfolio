// Status configuration for the hero section status pill
// Update this to reflect your current status

import { Briefcase, CheckCircle2, Coffee } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type StatusType = "working" | "open" | "break";

export interface StatusConfig {
  type: StatusType;
  text: string;
  company?: string; // Optional: if type is "working", include company name
  role?: string; // Optional: if type is "working", include role
}

// Current status - update this as needed
export const currentStatus: StatusConfig = {
  type: "open", // Options: "working" | "open" | "break"
  text: "Open to new opportunities",
  // If type is "working", uncomment and fill in:
  // company: "Company Name",
  // role: "Product Manager",
};

// Status pill styling based on type
export const getStatusStyles = (type: StatusType) => {
  switch (type) {
    case "working":
      return {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
        dot: "bg-blue-500",
      };
    case "open":
      return {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-700",
        dot: "bg-green-500",
      };
    case "break":
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        text: "text-gray-700",
        dot: "bg-gray-500",
      };
    default:
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        text: "text-gray-700",
        dot: "bg-gray-500",
      };
  }
};

// Status icon - always green checkmark
export const getStatusIcon = (): LucideIcon => {
  return CheckCircle2;
};

// Format status text based on type
export const getStatusText = (status: StatusConfig): string => {
  switch (status.type) {
    case "working":
      if (status.company && status.role) {
        return `${status.role} at ${status.company}`;
      } else if (status.company) {
        return `Working at ${status.company}`;
      } else if (status.role) {
        return status.role;
      }
      return "Currently working";
    case "open":
      return status.text || "Open to new opportunities";
    case "break":
      return status.text || "Taking a break";
    default:
      return status.text;
  }
};

