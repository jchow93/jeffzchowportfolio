"use client";

import { useEffect, useState } from "react";
import {
  getPersonalizedContent,
  getPersonaFromJobTitle,
  getPersonaHandshake,
} from "@/lib/contentMapper";
import { currentStatus, getStatusStyles, getStatusText, getStatusIcon } from "@/lib/status";
import { logger } from "@/lib/logger";
import Image from "next/image";

interface PersonalizationData {
  name: string;
  jobTitle: string;
  industry: string;
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
      const personaHandshake = getPersonaHandshake(
        persona,
        personalizationData.jobTitle
      );
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

    window.addEventListener("personalizationUpdated", handleUpdate as EventListener);
    return () => window.removeEventListener("personalizationUpdated", handleUpdate as EventListener);
  }, [personalizationData]);

  // Combined greeting with intro text
  const combinedGreeting = personalizationData?.name
    ? `Hi ${personalizationData.name}, I'm Jeff—a Product Manager who lives at the intersection of technical precision and creative flow.`
    : "Hi, I'm Jeff—a Product Manager who lives at the intersection of technical precision and creative flow.";

  const statusStyles = getStatusStyles(currentStatus.type);
  const statusText = getStatusText(currentStatus);
  const StatusIcon = getStatusIcon();

  return (
    <section className="flex min-h-screen items-center justify-center px-6 md:px-10">
      <div className="mx-auto w-full max-w-5xl">
        {/* Top Section: Text Content and Photo/Status */}
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:gap-12 md:items-start">
          {/* Left Column - Text Content */}
          <div className="flex flex-col">
            {/* Persona-Based Headline */}
            <h2 className="mb-6 text-4xl font-bold text-black md:text-5xl">
              {handshake.headline}
            </h2>

            {/* Combined Greeting */}
            <p className="mb-6 text-xl leading-relaxed text-gray-700 md:mb-8 md:text-2xl">
              {combinedGreeting}
            </p>

            {/* Persona-Based Subheadline */}
            <p className="mb-8 text-xl leading-relaxed text-gray-600 md:text-2xl">
              {handshake.subheadline}
            </p>

            {/* Key Stats */}
            {handshake.stats && handshake.stats.length > 0 && (
              <div className="space-y-2 mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Key Stats
                </h3>
                <ul className="space-y-1">
                  {handshake.stats.map((stat, index) => (
                    <li key={index} className="text-lg text-gray-700 md:text-xl">
                      • {stat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#featured-work"
                className="px-6 py-3 bg-[#8BA888] text-white font-semibold rounded-lg hover:bg-[#6B8E6B] transition-colors duration-200 text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white border-2 border-[#8BA888] text-[#8BA888] font-semibold rounded-lg hover:bg-[#8BA888]/10 transition-colors duration-200 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column - Photo and Status */}
          <div className="flex flex-col items-start gap-3">
            {/* Profile Photo - Vertical Rectangle (1/3 smaller than 4x) */}
            <div className="relative h-[341px] w-[213px] overflow-hidden rounded-[5px] border border-gray-200 bg-gray-100 md:h-[427px] md:w-[299px]">
              {/* Placeholder - Replace with your photo */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#8BA888] to-[#6B8E6B] text-white">
                <span className="text-6xl font-bold md:text-7xl">J</span>
              </div>
              {/* Uncomment and update path when you have your photo */}
              {/* <Image
                src="/jeff-photo.jpg"
                alt="Jeff Chow"
                fill
                className="object-cover"
                priority
              /> */}
            </div>

            {/* Status Pill - Same width as photo */}
            <div className="w-[213px] md:w-[299px]">
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

