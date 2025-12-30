export interface PersonalizationData {
  name: string;
  jobTitle: string;
  industry: string;
  hasPersonalized: boolean;
  hasVisited: boolean;
}

// No localStorage - all state is session-only
export function savePersonalization(
  name: string,
  jobTitle: string,
  industry: string
): void {
  // No-op - state is managed in React components
  // Trigger event for components to update
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("personalizationUpdated"));
  }
}

export function loadPersonalization(): PersonalizationData {
  // Always return default - no persistence
  return {
    name: "",
    jobTitle: "",
    industry: "default",
    hasPersonalized: false,
    hasVisited: false,
  };
}

export function clearPersonalization(): void {
  // No-op - no localStorage to clear
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("personalizationUpdated"));
  }
}

export function shouldShowOnboardingModal(): boolean {
  // Always show modal - no localStorage to check
  return true;
}

export function getSourceFromURL(): string {
  if (typeof window === "undefined") return "direct";
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("source") || "direct";
}

