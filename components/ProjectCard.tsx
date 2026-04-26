"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/contentMapper";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get 3 tags from metrics (these change by persona)
  const tags = project.metrics.slice(0, 3);

  return (
    <article 
      className="group relative cursor-pointer border-b border-gray-200 transition-all hover:bg-gray-50/30"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Collapsed State: Desktop - Image left + Content right, Mobile - Image/Tags top + Description below */}
      {!isExpanded && (
        <div className="px-6 py-8 md:px-10 md:py-10">
          {/* Mobile Layout: Image + Tags on top, Description full width below */}
          <div className="flex flex-col md:hidden space-y-4">
            {/* Top row: Image + Tags */}
            <div className="flex gap-4 items-start">
              {/* Image/Screenshot - Smaller for mobile */}
              <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 128px, 192px"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <span className="text-2xl text-gray-400">{project.company.charAt(0)}</span>
                  </div>
                )}
              </div>

              {/* Tags - Smaller for mobile */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 items-start pt-1">
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Description - Full width on mobile */}
            <div className="space-y-3">
              <p className="text-base leading-relaxed text-gray-700 max-w-none">
                {project.description}
              </p>

              {/* Click hint */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Click to expand case study</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>

          {/* Desktop Layout: Image on left + Content on right (original layout) */}
          <div className="hidden md:flex gap-6">
            {/* Image/Screenshot - Original size for desktop */}
            <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                  sizes="192px"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <span className="text-3xl text-gray-400">{project.company.charAt(0)}</span>
                </div>
              )}
            </div>

            {/* Content - Right side */}
            <div className="flex-1 space-y-4">
              {/* 3 Tags - Original size for desktop */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* 1 Sentence Description */}
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                {project.description}
              </p>

              {/* Click hint */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Click to expand case study</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expanded State: Full Case Study */}
      {isExpanded && (
        <div className="animate-expand px-6 py-8 md:px-10 md:py-10">
          <div className="space-y-6">
            {/* Header with close button */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold leading-tight text-black md:text-3xl">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {project.company} · {project.year}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                className="ml-4 text-2xl text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            {/* Image and Tags side by side */}
            <div className="flex gap-4 md:gap-6 items-start">
              {/* Image if available - Mobile only (desktop image is inside Team & Scope) */}
              {project.image && (
                <div className="relative h-32 w-32 md:hidden flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="128px"
                  />
                </div>
              )}

              {/* Right side: Tags and Team & Scope in a column (desktop) */}
              <div className="flex-1 flex flex-col">
                {/* Tags - Smaller on mobile, original on desktop */}
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 items-start pt-1 md:pt-2">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded-full border border-gray-200 bg-white px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Team & Scope - Desktop only: appears under tags on the right side, with image inside */}
                {(project.teamSize || project.budget || project.stakeholders) && (
                  <div className="hidden md:block mt-4">
                    <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
                      <div className="flex gap-4 md:gap-6 items-start">
                        {/* Image inside Team & Scope container - Desktop only */}
                        {project.image && (
                          <div className="relative h-32 w-32 md:h-48 md:w-48 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                              loading="lazy"
                              sizes="(max-width: 768px) 128px, 192px"
                            />
                          </div>
                        )}
                        
                        {/* Text content */}
                        <div className="flex-1">
                          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                            Team & Scope
                          </h4>
                          <div className="space-y-3">
                            {project.teamSize && (
                              <div>
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Team Size:</span>
                                <p className="text-base text-gray-700 mt-1">{project.teamSize}</p>
                              </div>
                            )}
                            {project.budget && (
                              <div>
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Budget/Scope:</span>
                                <p className="text-base text-gray-700 mt-1">{project.budget}</p>
                              </div>
                            )}
                            {project.stakeholders && project.stakeholders.length > 0 && (
                              <div>
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Key Stakeholders:</span>
                                <p className="text-base text-gray-700 mt-1">{project.stakeholders.join(", ")}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* External Link if available */}
            {project.link && (
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#8BA888] hover:text-[#6B8E6B] transition-colors"
                >
                  → View Project
                </a>
              </div>
            )}

            {/* Full Case Study Content */}
            <div className="space-y-6 border-t border-gray-200 pt-6">
              {/* Team Size and Scope Information - Mobile only */}
              {(project.teamSize || project.budget || project.stakeholders) && (
                <div className="md:hidden bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Team & Scope
                  </h4>
                  <div className="space-y-3">
                    {project.teamSize && (
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Team Size:</span>
                        <p className="text-base text-gray-700 mt-1">{project.teamSize}</p>
                      </div>
                    )}
                    {project.budget && (
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Budget/Scope:</span>
                        <p className="text-base text-gray-700 mt-1">{project.budget}</p>
                      </div>
                    )}
                    {project.stakeholders && project.stakeholders.length > 0 && (
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Key Stakeholders:</span>
                        <p className="text-base text-gray-700 mt-1">{project.stakeholders.join(", ")}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {project.problem && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    The Problem
                  </h4>
                  <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.approach && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    The Approach
                  </h4>
                  <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
                    {project.approach}
                  </p>
                </div>
              )}

              {project.impact && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    The Impact
                  </h4>
                  <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
                    {project.impact}
                  </p>
                </div>
              )}

              {project.fullStory && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    The Story
                  </h4>
                  <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
                    {project.fullStory}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

