"use client";

import { useEffect, useState } from "react";
import { getFeaturedProjects, getFeaturedWork, Project } from "@/lib/contentMapper";
import { logger } from "@/lib/logger";
import ProjectCard from "./ProjectCard";

interface PersonalizationData {
  name: string;
  jobTitle: string;
  industry: string;
}

interface ProjectsSectionProps {
  personalizationData: PersonalizationData | null;
}

export default function ProjectsSection({ personalizationData }: ProjectsSectionProps) {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [featuredWork, setFeaturedWork] = useState<Project[]>([]);

  useEffect(() => {
    // Featured Projects - Always show Hoolie and portfolio website
    setFeaturedProjects(getFeaturedProjects());

    // Featured Work - Show industry-relevant work projects
    const industry = personalizationData?.industry || "default";
    logger.log("ProjectsSection: Setting featured work for industry:", industry, "from personalizationData:", personalizationData);
    const work = getFeaturedWork(industry);
    logger.log("ProjectsSection: Featured work projects:", work.map(p => p.id));
    setFeaturedWork(work);

    // Listen for personalization updates
    const handleUpdate = (event: CustomEvent<PersonalizationData>) => {
      try {
        const data = event.detail;
        if (!data) {
          logger.error("Personalization event missing data");
          return;
        }
        const industry = data.industry || "default";
        logger.log("ProjectsSection: Personalization update event - industry:", industry);
        const work = getFeaturedWork(industry);
        logger.log("ProjectsSection: Updated featured work projects:", work.map(p => p.id));
        setFeaturedWork(work);
      } catch (error) {
        logger.error("Error handling personalization update:", error);
      }
    };

    window.addEventListener("personalizationUpdated", handleUpdate as EventListener);
    return () => window.removeEventListener("personalizationUpdated", handleUpdate as EventListener);
  }, [personalizationData]);

  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Featured Work Section - Comes first, personalized by industry */}
        <div id="featured-work" className="mb-20 md:mb-24 scroll-mt-20">
          <div className="mb-12 md:mb-16">
            <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">Featured Work</h2>
            <p className="text-4xl font-bold text-gray-600 md:text-5xl">
              A selection of product initiatives that showcase strategic thinking, user empathy, and
              measurable results.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            {featuredWork.length > 0 ? (
              featuredWork.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <p className="py-20 text-center text-gray-500">No projects to display.</p>
            )}
          </div>
        </div>

        {/* Featured Projects Section - Same for all personas */}
        <div id="featured-projects" className="scroll-mt-20">
          <div className="mb-12 md:mb-16">
            <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">Featured Projects</h2>
            <p className="text-4xl font-bold text-gray-600 md:text-5xl">
              Personal projects that demonstrate my approach to building products that adapt to users.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + featuredWork.length} />
              ))
            ) : (
              <p className="py-20 text-center text-gray-500">No projects to display.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

