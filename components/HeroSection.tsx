"use client";

import { useEffect, useState } from "react";
import {
  getPersonaFromJobTitle,
  getPersonaHandshake,
} from "@/lib/contentMapper";
import { currentStatus, getStatusStyles, getStatusText, getStatusIcon } from "@/lib/status";
import { logger } from "@/lib/logger";
import { formatTextWithBold } from "@/lib/textFormatter";
import Image from "next/image";

interface PersonalizationData {
  name: string;
  jobTitle: string;
}

interface HeroSectionProps {
  personalizationData: PersonalizationData | null;
}

export default function HeroSection({ personalizationData }: HeroSectionProps) {
  const [handshake, setHandshake] = useState(
    getPersonaHandshake("default", personalizationData?.jobTitle || "")
  );

  useEffect(() => {
    if (personalizationData) {
      // Detect persona from job title
      const persona = getPersonaFromJobTitle(personalizationData.jobTitle);
      const personaHandshake = getPersonaHandshake(persona, personalizationData.jobTitle);
      setHandshake(personaHandshake);
    } else {
      // Default persona
      setHandshake(getPersonaHandshake("default", ""));
    }

    // Listen for personalization updates
    const handleUpdate = (event: CustomEvent<PersonalizationData>) => {
      try {
        const data = event.detail;
        if (!data) {
          logger.error("Personalization event missing data");
          return;
        }
        const persona = getPersonaFromJobTitle(data.jobTitle);
        const personaHandshake = getPersonaHandshake(persona, data.jobTitle);
        setHandshake(personaHandshake);
      } catch (error) {
        logger.error("Error handling personalization update:", error);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("personalizationUpdated", handleUpdate as EventListener);
      return () => window.removeEventListener("personalizationUpdated", handleUpdate as EventListener);
    }
  }, [personalizationData]);

  const statusStyles = getStatusStyles(currentStatus.type);
  const statusText = getStatusText(currentStatus);
  const StatusIcon = getStatusIcon();

  return (
    <section className="flex min-h-screen items-center justify-center px-6 md:px-10">
      <div className="mx-auto w-full max-w-5xl">
        {/* Desktop: Two-column layout, Mobile: Single column */}
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:gap-12 md:items-start">
          {/* Left Column - Text Content */}
          <div className="flex flex-col">
            {/* Persona-Based Headline */}
            <h2 className="mb-6 text-4xl font-bold text-black md:text-5xl">
              {handshake.headline}
            </h2>

            {/* Greeting */}
            <p className="mb-2 text-xl font-medium text-gray-800 md:text-2xl">
              {formatTextWithBold(handshake.greeting)}
            </p>

            {/* Mobile: Image and Status after greeting */}
            <div className="flex flex-col items-start gap-3 mb-4 w-full md:hidden">
              {/* Profile Photo - Full width on mobile */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-[5px] border border-gray-200 bg-gray-100">
                {/* Placeholder - Replace with your photo */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#8BA888] to-[#6B8E6B] text-white">
                  <span className="text-6xl font-bold">J</span>
                </div>
                <div className="absolute top-[-60px] left-0 right-0 h-[calc(100%+60px)]">
                  {<Image
                    src="/assets/profile.JPG"
                    alt="Jeff Chow"
                    fill
                    className="object-cover object-top"
                    priority
                  />}
                </div>
              </div>

              {/* Status Pill - Full width on mobile */}
              <div className="w-full">
                <div
                  className={`flex items-center justify-center gap-2 rounded-[5px] border px-3 py-2 ${statusStyles.bg} ${statusStyles.border} ${statusStyles.text}`}
                >
                  <StatusIcon className="h-3.5 w-3.5 flex-shrink-0 text-green-600" />
                  <span className="text-xs font-medium leading-tight text-center break-words line-clamp-2">
                    {statusText}
                  </span>
                </div>
              </div>
            </div>

            {/* Intro - One punchy sentence */}
            <p className="mb-4 text-xl leading-relaxed text-gray-700 md:mb-6 md:text-2xl">
              {formatTextWithBold(handshake.intro)}
            </p>

            {/* Body - 3-4 sentences */}
            <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
              {formatTextWithBold(handshake.body)}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center">
              <a
                href="#featured-work"
                className="text-[#8BA888] font-medium underline hover:text-[#6B8E6B] transition-colors duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-[#8BA888] text-white font-semibold rounded-lg hover:bg-[#6B8E6B] transition-colors duration-200 text-center"
              >
                {handshake.cta}
              </a>
            </div>
          </div>

          {/* Right Column - Photo and Status (Desktop only) */}
          <div className="hidden md:flex flex-col items-start gap-3">
            {/* Profile Photo - Vertical Rectangle */}
            <div className="relative h-[427px] w-[299px] overflow-hidden rounded-[5px] border border-gray-200 bg-gray-100">
              {/* Placeholder - Replace with your photo */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#8BA888] to-[#6B8E6B] text-white">
                <span className="text-7xl font-bold">J</span>
              </div>
              {<Image
                  src="/assets/profile.JPG"
                  alt="Jeff Chow"
                  fill
                  className="object-cover object-top"
                  priority
                />}
            </div>

            {/* Status Pill - Same width as photo */}
            <div className="w-[299px]">
              <div
                className={`flex items-center justify-center gap-2 rounded-[5px] border px-3 py-2 ${statusStyles.bg} ${statusStyles.border} ${statusStyles.text}`}
              >
                <StatusIcon className="h-3.5 w-3.5 flex-shrink-0 text-green-600" />
                <span className="text-xs font-medium leading-tight text-center break-words line-clamp-2">
                  {statusText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

