"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import OnboardingModal from "@/components/OnboardingModal";
import LoadingAnimation from "@/components/LoadingAnimation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQsSection from "@/components/FAQsSection";
import { logger } from "@/lib/logger";

export interface PersonalizationData {
  name: string;
  jobTitle: string;
  industry: string;
}

export default function Home() {
  const [showModal, setShowModal] = useState(true); // Always show modal initially
  const [showLoading, setShowLoading] = useState(false);
  const [personalizationData, setPersonalizationData] = useState<PersonalizationData | null>(null);

  // Safety mechanism: if loading gets stuck for more than 5 seconds, clear it
  useEffect(() => {
    if (showLoading) {
      const safetyTimer = setTimeout(() => {
        logger.warn("Loading screen stuck for >5 seconds, clearing it");
        setShowLoading(false);
      }, 5000);
      return () => clearTimeout(safetyTimer);
    }
  }, [showLoading]);

  const handlePersonalize = (data: {
    name: string;
    jobTitle: string;
    industry: string;
  }) => {
    try {
      setShowLoading(true);
      setShowModal(false);

      // Wait for loading animation
      setTimeout(() => {
        try {
          setShowLoading(false);
          setPersonalizationData(data);
          // Trigger event for components to update
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("personalizationUpdated", { detail: data }));
          }
        } catch (error) {
          logger.error("Error in personalization completion:", error);
          // Ensure loading state is cleared even on error
          setShowLoading(false);
          setPersonalizationData(data);
        }
      }, 2000);
    } catch (error) {
      logger.error("Error in handlePersonalize:", error);
      // Ensure modal closes and loading doesn't get stuck
      setShowModal(false);
      setShowLoading(false);
      setPersonalizationData(data);
    }
  };

  const handleSkip = () => {
    setShowModal(false);
    // Default to Generalist persona when skipped
    const generalistData: PersonalizationData = {
      name: "",
      jobTitle: "Generalist",
      industry: "default",
    };
    setPersonalizationData(generalistData);
    // Trigger event for components to update
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("personalizationUpdated", { detail: generalistData }));
    }
  };

  const handleSwitchToGeneral = () => {
    const generalistData: PersonalizationData = {
      name: "",
      jobTitle: "Generalist",
      industry: "default",
    };
    setPersonalizationData(generalistData);
    // Trigger event for components to update
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("personalizationUpdated", { detail: generalistData }));
    }
  };

  const handleSwitchToPersonalized = () => {
    setShowModal(true);
  };

  // Determine if we're in personalized view
  const isPersonalized = personalizationData && personalizationData.jobTitle !== "Generalist";

  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      {/* Switch View Button - Top Right */}
      <div className="fixed top-8 right-8 z-50">
        <button
          onClick={isPersonalized ? handleSwitchToGeneral : handleSwitchToPersonalized}
          className="relative group px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg text-sm font-medium text-gray-700 hover:bg-white hover:shadow-xl transition-all duration-300"
          aria-label="Switch view"
        >
          Switch View
          <span className="absolute top-full right-0 mt-2 px-3 py-1 bg-gray-900/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Currently: {isPersonalized ? "Personalized View" : "General View"}
          </span>
        </button>
      </div>
      
      <Navigation />
      <OnboardingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onPersonalize={handlePersonalize}
        onSkip={handleSkip}
      />
      <LoadingAnimation isVisible={showLoading} />
      <section id="home">
        <HeroSection personalizationData={personalizationData} />
      </section>
      <ProjectsSection personalizationData={personalizationData} />
      <section id="about">
        <AboutSection />
      </section>
      <FAQsSection />
      <ContactSection />
    </main>
  );
}

