"use client";

import { useState } from "react";
import { getSourceFromURL, sendVisitorData, getIndustryFromJobTitle } from "@/lib";
import { logger } from "@/lib/logger";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPersonalize: (data: {
    name: string;
    jobTitle: string;
    industry: string;
  }) => void;
  onSkip: () => void;
}

const JOB_TITLES = [
  { label: "Recruiter", value: "Recruiter" },
  { label: "Engineer", value: "Engineer" },
  { label: "Product Leader", value: "Product Leader" },
  { label: "Designer", value: "Designer" },
  { label: "Founder", value: "Founder" },
  { label: "Other", value: "Other" },
];

export default function OnboardingModal({
  isOpen,
  onClose,
  onPersonalize,
  onSkip,
}: OnboardingModalProps) {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleSkip = () => {
    const source = getSourceFromURL();
    // Track skipped visit with Generalist persona
    sendVisitorData({
      name: "",
      jobTitle: "Generalist",
      source,
    });
    // onSkip will handle setting Generalist persona
    onSkip();
  };

  const handleNext = () => {
    if (step === 1 && firstName.trim()) {
      setStep(2);
    }
  };

  const handleJobTitleSelect = (selectedJobTitle: string) => {
    setJobTitle(selectedJobTitle);
  };

  const handleSubmit = async () => {
    if (!firstName.trim() || !jobTitle.trim()) {
      return;
    }

    const source = getSourceFromURL();
    // Map job title to industry for content personalization
    const industry = getIndustryFromJobTitle(jobTitle);
    logger.log("OnboardingModal: Mapped jobTitle", jobTitle, "to industry", industry);

    // Send to backend (optional - can remove if not needed)
    // Don't await - let it run in background, don't block personalization
    sendVisitorData({ name: firstName, jobTitle, source }).catch((error) => {
      logger.error("Failed to send visitor data:", error);
      // Continue with personalization even if API call fails
    });

    // Trigger personalization (no localStorage - state only)
    // Wrap in try-catch to ensure it always executes
    const personalizationData = { name: firstName, jobTitle, industry };
    logger.log("OnboardingModal: Triggering personalization with data:", personalizationData);
    try {
      onPersonalize(personalizationData);
    } catch (error) {
      logger.error("Error during personalization:", error);
      // Still trigger personalization even if there's an error
      onPersonalize(personalizationData);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleSkip}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleSkip}
          className="absolute right-6 top-6 text-2xl text-gray-400 hover:text-gray-600"
        >
          ×
        </button>

        {step === 1 && (
          <>
            <h3 className="mb-2 text-2xl font-semibold">Let's personalize your experience</h3>
            <p className="mb-4 text-sm text-gray-600">
              I'll use this to surface the case studies most relevant to your role.
            </p>
            <p className="mb-6 text-xs text-gray-500">
              I only use this to personalize your view right now. No trackers, no spam.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && firstName.trim()) {
                    handleNext();
                  }
                }}
                autoFocus
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base focus:border-black focus:outline-none"
              />

              <div className="space-y-3 pt-4">
                <button
                  onClick={handleNext}
                  disabled={!firstName.trim()}
                  className="w-full rounded-lg bg-black px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  Next
                </button>
                <button
                  onClick={handleSkip}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-6 py-3 font-semibold text-gray-600 transition-colors hover:border-gray-300"
                >
                  Skip
                </button>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="mb-2 text-2xl font-semibold">What's your role?</h3>
            <p className="mb-4 text-sm text-gray-600">
              I'll use this to surface the case studies most relevant to your role.
            </p>
            <p className="mb-6 text-xs text-gray-500">
              I only use this to personalize your view right now. No trackers, no spam.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {JOB_TITLES.map((title) => (
                  <button
                    key={title.value}
                    onClick={() => handleJobTitleSelect(title.value)}
                    className={`rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-all ${
                      jobTitle === title.value
                        ? "border-black bg-black text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {title.label}
                  </button>
                ))}
              </div>

              <div className="space-y-3 pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={!jobTitle.trim()}
                  className="w-full rounded-lg bg-black px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  Personalize My Experience
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 rounded-lg border border-gray-200 bg-transparent px-6 py-3 font-semibold text-gray-600 transition-colors hover:border-gray-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSkip}
                    className="flex-1 rounded-lg border border-gray-200 bg-transparent px-6 py-3 font-semibold text-gray-600 transition-colors hover:border-gray-300"
                  >
                    Skip
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

