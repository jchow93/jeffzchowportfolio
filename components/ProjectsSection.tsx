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
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B8E6B]">Discover → Build → Scale</div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-6xl">The work behind the positioning.</h2>
            <p className="max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
              One flagship 1→10 story, followed by focused proof of 0→1 discovery and customer-led product judgment.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            {featuredWork.length > 0 ? (
              <>
                {featuredWork.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
                {currentPersona === "default" && showAllWork && (
                  <div className="mt-16 border-t border-black/10 pt-12">
                    <div className="mb-8">
                      <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6B8E6B]">Earlier work</div>
                      <h3 className="text-3xl font-bold tracking-tight text-black">More range, without diluting the headline.</h3>
                    </div>
                    {allFeaturedWork
                      .filter((project) => !featuredWork.some((featured) => featured.id === project.id))
                      .map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index + featuredWork.length} />
                      ))}
                  </div>
                )}
                {/* Show "View All Work" button only for default persona when there are more projects */}
                {currentPersona === "default" && !showAllWork && allFeaturedWork.length > featuredWork.length && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => setShowAllWork(true)}
                      className="px-8 py-4 bg-[#8BA888] text-white font-semibold rounded-lg hover:bg-[#6B8E6B] transition-colors duration-200"
                    >
                      Browse earlier work
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
          <p className="mx-auto mt-10 max-w-4xl rounded-2xl border border-black/10 bg-white/50 px-5 py-4 text-sm leading-relaxed text-gray-600">
            <strong className="text-gray-800">A note on confidentiality:</strong> Certain company names, interfaces, and commercial figures are anonymized or generalized to honor confidentiality obligations. Outcomes use approved percentages, ranges, and relative improvements where appropriate.
          </p>
        </div>

        {/* Featured Projects Section - Same for all personas */}
        <div id="featured-projects" className="scroll-mt-20">
          <div className="mb-12 md:mb-16">
            <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">The workshop</h2>
            <p className="max-w-3xl text-xl text-gray-600 md:text-2xl">
              Personal experiments where I use the same product instincts on my own ideas.
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
