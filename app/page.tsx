"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ViewSelector from "@/components/ViewSelector";
import HeroSection from "@/components/HeroSection";
import MoreThanPMSection from "@/components/MoreThanPMSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQsSection from "@/components/FAQsSection";

export interface PersonalizationData {
  name: string;
  jobTitle: string;
}

// Map view names to job titles
const VIEW_TO_JOB_TITLE: Record<string, string> = {
  General: "Generalist",
  Founder: "Founder",
  Engineer: "Engineer",
  "Product Leader": "Product Leader",
  Designer: "Designer",
  Recruiter: "Recruiter",
  Investor: "Investor",
};

export default function Home() {
  // Start with General view by default
  const [currentView, setCurrentView] = useState("General");
  const [personalizationData, setPersonalizationData] = useState<PersonalizationData>(() => {
    // Initialize with General view
    return {
      name: "",
      jobTitle: "Generalist",
    };
  });

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    const jobTitle = VIEW_TO_JOB_TITLE[view] || "Generalist";
    
    const newData: PersonalizationData = {
      name: "",
      jobTitle,
    };
    
    setPersonalizationData(newData);
    
    // Trigger event for components to update
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("personalizationUpdated", { detail: newData }));
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F1E8] pt-24 md:pt-0">
      <ViewSelector currentView={currentView} onViewChange={handleViewChange} />
      <Navigation />
      <section id="home">
        <HeroSection personalizationData={personalizationData} />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section>
        <ProjectsSection personalizationData={personalizationData} />
      </section>
      <MoreThanPMSection />
      <FAQsSection />
      <ContactSection />
    </main>
  );
}

