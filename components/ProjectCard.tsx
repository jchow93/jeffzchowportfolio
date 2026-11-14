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
  const isFlagship = project.id === "salient-enterprise-ai";

  // Get 3 tags from metrics (these change by persona)
  const tags = project.metrics.slice(0, 3);

  return (
    <article 
      className={`group relative mb-5 cursor-pointer overflow-hidden border transition-all hover:-translate-y-0.5 hover:shadow-lg ${
        isFlagship ? "rounded-[28px] border-[#8BA888]/40 bg-[#E8EEE4]" : "rounded-[20px] border-black/10 bg-white/45"
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label={`${isExpanded ? "Close" : "Open"} case study: ${project.title}`}
    >
      {/* Collapsed State: Desktop - Image left + Content right, Mobile - Image/Tags top + Description below */}
      {!isExpanded && (
        <div className="px-6 py-8 md:px-10 md:py-10">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              {isFlagship && <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#526B52]">Flagship case study · 1→10</div>}
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-black md:text-3xl">{project.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{project.company} · {project.year}</p>
            </div>
            <span className="text-2xl text-[#6B8E6B] transition-transform group-hover:translate-x-1">↗</span>
          </div>
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
                <span>Open the case study</span>
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
                <span>Open the case study</span>
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
              <span aria-hidden="true" className="ml-4 text-2xl text-gray-400">
                ×
              </span>
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
              {project.role && (
                <div className="rounded-2xl border border-[#8BA888]/30 bg-white/70 p-5 md:p-6">
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#526B52]">My role and ownership</h4>
                  <p className="text-base leading-relaxed text-gray-700">{project.role}</p>
                </div>
              )}

              {isFlagship && (
                <div className="rounded-2xl bg-[#18231D] p-5 text-white md:p-7">
                  <div className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#B8CDB3]">How the work evolved</div>
                  <div className="grid gap-3 md:grid-cols-3">
                    {[
                      ["01", "Map the onboarding work", "Document everything required between signing a customer and starting the pilot."],
                      ["02", "Standardize the inputs", "Collect policies and reviewed examples in a consistent format the team can test against."],
                      ["03", "Automate the repeated work", "Turn common setup tasks into settings, reusable workflows, and prompt optimization."],
                    ].map(([number, title, body]) => (
                      <div key={number} className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <div className="mb-5 text-sm font-bold text-[#B8CDB3]">{number}</div>
                        <div className="mb-2 text-lg font-bold">{title}</div>
                        <p className="text-sm leading-relaxed text-white/70">{body}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl border border-white/15 px-4 py-3 text-sm text-white/75">
                    Potential issue <span className="px-2 text-[#B8CDB3]">→</span> compliance insight <span className="px-2 text-[#B8CDB3]">→</span> review and remediation
                  </div>
                  <p className="mt-3 text-xs text-white/50">Reconstructed strategy model; no customer interface or confidential implementation details shown.</p>
                </div>
              )}
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

              {project.metricNote && (
                <div className="rounded-xl border-l-4 border-[#8BA888] bg-[#8BA888]/10 px-4 py-3">
                  <h4 className="mb-1 text-xs font-bold uppercase tracking-wide text-[#526B52]">About the 95% figure</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{project.metricNote}</p>
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
