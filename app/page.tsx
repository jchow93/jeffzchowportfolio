"use client";

import Navigation from "@/components/Navigation";
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

export default function Home() {
  // The site tells one story to every visitor; the audience switcher was removed.
  const personalizationData: PersonalizationData = { name: "", jobTitle: "Generalist" };

  return (
    <main className="min-h-screen bg-[#F2F5F3] pt-16 md:pt-0">
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

