"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/contentMapper";
import { ThreadLine } from "@/components/Thread";

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
      className="group relative mb-5 cursor-pointer overflow-hidden rounded-md border border-black/10 bg-white/60 transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-filament"
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
        <div className="grid gap-8 px-6 py-8 md:grid-cols-[1fr_220px] md:px-10 md:py-10">
          <div className="min-w-0">
            <div className="field-label">{project.company}</div>
            <h3 className="mt-2 text-2xl font-bold leading-tight text-pine md:text-3xl">
              {project.headline || project.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
              {project.summary || project.description}
            </p>

            {project.before && project.after && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="field-label">Before</div>
                  <ThreadLine />
                  <div className="font-mono text-sm text-gray-600">{project.before}</div>
                </div>
                <div>
                  <div className="field-label">After</div>
                  <ThreadLine straight />
                  <div className="font-mono text-sm text-pine">{project.after}</div>
                </div>
              </div>
            )}

            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-black/10 pt-4 sm:grid-cols-3">
              <div>
                <dt className="field-label">Years</dt>
                <dd className="mt-1 text-sm text-pine">{project.year}</dd>
              </div>
              {project.roleTitle && (
                <div>
                  <dt className="field-label">Role</dt>
                  <dd className="mt-1 text-sm text-pine">{project.roleTitle}</dd>
                </div>
              )}
              {project.scope && (
                <div>
                  <dt className="field-label">Scope</dt>
                  <dd className="mt-1 text-sm text-pine">{project.scope}</dd>
                </div>
              )}
            </dl>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-pine underline underline-offset-4">
              View case study
            </div>
          </div>

          {project.image && (
            <div className="relative order-first h-44 overflow-hidden rounded-md bg-gray-100 md:order-last md:h-[220px]">
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 220px"
              />
            </div>
          )}
        </div>
      )}

      {/* Expanded State: Full Case Study */}
      {isExpanded && (
        <div className="animate-expand px-6 py-8 md:px-10 md:py-10">
          <div className="space-y-6">
            {/* Header with close button */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold leading-tight text-pine md:text-3xl">
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
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#7F9879] hover:text-[#5F7A5A] transition-colors"
                >
                  → View Project
                </a>
              </div>
            )}

            {/* Full Case Study Content */}
            <div className="space-y-6 border-t border-gray-200 pt-6">
              {project.role && (
                <div className="rounded-2xl border border-[#7F9879]/30 bg-white/70 p-5 md:p-6">
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#526B52]">My role and ownership</h4>
                  <p className="text-base leading-relaxed text-gray-700">{project.role}</p>
                </div>
              )}

              {isFlagship && (
                <div className="rounded-2xl bg-[#0D1714] p-5 text-white md:p-7">
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
                <div className="rounded-xl border-l-4 border-[#7F9879] bg-[#7F9879]/10 px-4 py-3">
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
