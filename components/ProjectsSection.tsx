"use client";

import { useEffect, useState, useCallback } from "react";
import { getFeaturedProjects, getFeaturedWork, getAllFeaturedWork, Project, getPersonaFromJobTitle } from "@/lib/contentMapper";
import { logger } from "@/lib/logger";
import ProjectCard from "./ProjectCard";
import LensRack from "./LensRack";
import { LensId, getLens } from "@/lib/lenses";

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
  const [lensId, setLensId] = useState<LensId | null>(null);

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

  // A lens reorders the featured case studies; it never adds or removes any.
  const lens = getLens(lensId);
  const orderedWork = lens
    ? [...featuredWork].sort((a, b) => {
        const rank = (id: string) => (lens.order.indexOf(id) === -1 ? lens.order.length : lens.order.indexOf(id));
        return rank(a.id) - rank(b.id);
      })
    : featuredWork;

  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Featured Work Section - Comes first, personalized by persona */}
        <div id="featured-work" className="mb-20 md:mb-24 scroll-mt-20">
          <div className="mb-12 md:mb-16">
            <div className="field-label mb-4">Selected work</div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-pine md:text-5xl">Four workflows, untangled.</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              Each one starts with what I saw and ends with what changed.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <LensRack lens={lensId} onChange={setLensId} />
            {featuredWork.length > 0 ? (
              <>
                {orderedWork.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} lens={lens} />
                ))}
                {currentPersona === "default" && showAllWork && (
                  <div className="mt-16 border-t border-black/10 pt-12">
                    <div className="mb-8">
                      <div className="field-label mb-2">Earlier work</div>
                      <h3 className="text-3xl font-bold tracking-tight text-pine">More from earlier roles.</h3>
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
                      className="px-6 py-3 border border-pine text-pine font-semibold rounded hover:bg-pine hover:text-mist transition-colors duration-200"
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
                      className="px-6 py-3 border border-pine text-pine font-semibold rounded hover:bg-pine hover:text-mist transition-colors duration-200"
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
          <p className="mx-auto mt-8 max-w-5xl text-sm text-gray-500">
            Some company names and figures are generalized for confidentiality.
          </p>
        </div>

        {/* Featured Projects Section - Same for all personas */}
        <div id="featured-projects" className="scroll-mt-20">
          <div className="mb-12 md:mb-16">
            <div className="field-label mb-4">Side projects</div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-pine md:text-5xl">The workshop</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
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
