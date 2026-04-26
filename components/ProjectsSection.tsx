"use client";

import { useEffect, useState, useCallback } from "react";
import { getFeaturedProjects, getFeaturedWork, getAllFeaturedWork, Project, getPersonaFromJobTitle } from "@/lib/contentMapper";
import { logger } from "@/lib/logger";
import ProjectCard from "./ProjectCard";

interface PersonalizationData {
  name: string;
  jobTitle: string;
}

interface ProjectsSectionProps {
  personalizationData: PersonalizationData | null;
}

export default function ProjectsSection({ personalizationData }: ProjectsSectionProps) {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [featuredWork, setFeaturedWork] = useState<Project[]>([]);
  const [allFeaturedWork, setAllFeaturedWork] = useState<Project[]>([]);
  const [showAllWork, setShowAllWork] = useState(false);
  const [currentPersona, setCurrentPersona] = useState<string>("default");

  // Function to update projects based on persona
  const updateProjectsForPersona = useCallback((jobTitle: string) => {
    const persona = getPersonaFromJobTitle(jobTitle);
    logger.log("ProjectsSection: Updating projects for persona:", persona, "from jobTitle:", jobTitle);
    
    // Track current persona
    setCurrentPersona(persona);
    
    // Reset showAllWork when persona changes
    setShowAllWork(false);
    
    // Featured Projects - Personal projects
    const projects = getFeaturedProjects(persona) || [];
    logger.log("ProjectsSection: Featured projects:", projects?.map?.(p => p.id) || [], "count:", projects?.length || 0);
    if (projects && projects.length > 0) {
      setFeaturedProjects(projects);
    } else {
      // Fallback to default persona if no projects found
      logger.log("ProjectsSection: No projects found for persona, trying default");
      const defaultProjects = getFeaturedProjects("default") || [];
      setFeaturedProjects(defaultProjects);
    }

    // Featured Work - Show filtered projects for persona
    const work = getFeaturedWork(persona) || [];
    logger.log("ProjectsSection: Featured work projects:", work?.map?.(p => p.id) || [], "count:", work?.length || 0);
    setFeaturedWork(work);
    
    // Store all featured work for "View All" functionality (only needed for default persona)
    if (persona === "default") {
      const allWork = getAllFeaturedWork(persona) || [];
      setAllFeaturedWork(allWork);
    } else {
      setAllFeaturedWork([]);
    }
  }, []);

  useEffect(() => {
    // Initial load - get persona from jobTitle - default to "default" if not provided
    const jobTitle = personalizationData?.jobTitle || "Generalist";
    updateProjectsForPersona(jobTitle);

    // Listen for personalization updates from view selector
    const handleUpdate = (event: CustomEvent<PersonalizationData>) => {
      try {
        const data = event.detail;
        if (!data) {
          logger.error("Personalization event missing data");
          return;
        }
        logger.log("ProjectsSection: Personalization update event received:", data);
        updateProjectsForPersona(data.jobTitle || "Generalist");
      } catch (error) {
        logger.error("Error handling personalization update:", error);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("personalizationUpdated", handleUpdate as EventListener);
      return () => window.removeEventListener("personalizationUpdated", handleUpdate as EventListener);
    }
  }, [personalizationData, updateProjectsForPersona]);

  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Featured Work Section - Comes first, personalized by persona */}
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
              <>
                {(showAllWork && allFeaturedWork.length > 0 ? allFeaturedWork : featuredWork).map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
                {/* Show "View All Work" button only for default persona when there are more projects */}
                {currentPersona === "default" && !showAllWork && allFeaturedWork.length > featuredWork.length && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => setShowAllWork(true)}
                      className="px-8 py-4 bg-[#8BA888] text-white font-semibold rounded-lg hover:bg-[#6B8E6B] transition-colors duration-200"
                    >
                      View All Work
                    </button>
                  </div>
                )}
                {/* Show "Show Less" button when all projects are shown (only for default persona) */}
                {currentPersona === "default" && showAllWork && allFeaturedWork.length > featuredWork.length && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => setShowAllWork(false)}
                      className="px-8 py-4 bg-white border-2 border-[#8BA888] text-[#8BA888] font-semibold rounded-lg hover:bg-[#8BA888]/10 transition-colors duration-200"
                    >
                      Show Less
                    </button>
                  </div>
                )}
              </>
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

