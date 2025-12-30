"use client";

import { useState } from "react";
import { Project } from "@/lib/contentMapper";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedIndex = String(index + 1).padStart(2, "0");

  // Get industry tags (first 2-3)
  const industryTags = project.industry.slice(0, 3).map((ind) => {
    const tagMap: Record<string, string> = {
      fintech: "Fintech",
      enterprise: "Enterprise",
      "ai-ml": "AI/ML",
      media: "Media",
      startups: "Product",
      procurement: "Operations",
    };
    return tagMap[ind] || ind;
  });

  return (
    <article className="group relative border-b border-gray-200 px-10 py-10 transition-all hover:bg-gray-50/30 md:px-12 md:py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-16">
        {/* Number - Left side */}
        <div className="flex-shrink-0 md:w-16">
          <span className="text-3xl font-bold text-gray-300 transition-colors group-hover:text-gray-400 md:text-4xl">
            {formattedIndex}
          </span>
        </div>

        {/* Content - Right side */}
        <div className="flex-1 space-y-5">
          {/* Title - Story-focused */}
          <h3 className="text-2xl font-bold leading-tight text-black transition-colors group-hover:text-gray-800 md:text-3xl">
            {project.title}
          </h3>

          {/* Key Metrics - Show first 3 metrics */}
          {project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.metrics.slice(0, 3).map((metric, idx) => (
                <span
                  key={idx}
                  className="inline-block rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors group-hover:border-gray-300"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}

          {/* Description - Narrative, not resume-like */}
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            {project.description}
          </p>

          {/* Expanded Details (like mprogano's + expandable) */}
          {project.fullStory && (
            <div className="space-y-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-gray-700"
              >
                <span className="text-xl">{isExpanded ? "−" : "+"}</span>
                <span>{isExpanded ? "Less" : "More"}</span>
              </button>

              {isExpanded && (
                <div className="animate-expand space-y-6 border-t border-gray-200 pt-6">
                  {project.problem && (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                        The Problem
                      </h4>
                      <p className="text-base leading-relaxed text-gray-700">
                        {project.problem}
                      </p>
                    </div>
                  )}

                  {project.approach && (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                        The Approach
                      </h4>
                      <p className="text-base leading-relaxed text-gray-700">
                        {project.approach}
                      </p>
                    </div>
                  )}

                  {project.impact && (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                        The Impact
                      </h4>
                      <p className="text-base leading-relaxed text-gray-700">
                        {project.impact}
                      </p>
                    </div>
                  )}

                  {/* Industry Tags - Moved to expanded section */}
                  {project.industry.length > 0 && (
                    <div>
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Industry
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {industryTags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Company & Year - Bottom */}
          <div className="flex items-center gap-4 pt-1">
            <span className="text-sm text-gray-500">
              {project.company} · {project.year}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

