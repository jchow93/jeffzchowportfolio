"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/contentMapper";
import { ThreadLine } from "@/components/Thread";
import { Glasses } from "@/components/LensRack";
import { Lens } from "@/lib/lenses";

interface ProjectCardProps {
  project: Project;
  index: number;
  lens?: Lens | null;
}

const flagshipSteps = [
  ["01", "Map the onboarding work", "Document everything required between signing a customer and starting the pilot."],
  ["02", "Standardize the inputs", "Collect policies and reviewed examples in a consistent format the team can test against."],
  ["03", "Automate the repeated work", "Turn common setup tasks into settings, reusable workflows, and prompt optimization."],
];

/** Impact text is stored as "• line\n• line"; show it as a real list. */
function toLines(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.replace(/^\s*•\s*/, "").trim())
    .filter(Boolean);
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 border-t border-black/10 pt-6 md:grid-cols-[160px_1fr] md:gap-8">
      <h4 className="field-label md:pt-1">{label}</h4>
      <div className="max-w-2xl text-base leading-relaxed text-gray-700">{children}</div>
    </div>
  );
}

export default function ProjectCard({ project, lens }: ProjectCardProps) {
  const lensLine = lens ? project.lenses?.[lens.id] : undefined;
  const [isExpanded, setIsExpanded] = useState(false);
  const isFlagship = project.id === "salient-enterprise-ai";
  const toggle = () => setIsExpanded(!isExpanded);

  return (
    <article className="group relative mb-5 overflow-hidden rounded-md border border-black/10 bg-white/60">
      {/* Summary: always visible, and the control that opens or closes the case study */}
      <div
        className="grid cursor-pointer gap-8 px-6 py-8 transition-colors hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-filament md:grid-cols-[1fr_220px] md:px-10 md:py-10"
        onClick={toggle}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? "Close" : "Open"} case study: ${project.headline || project.title}`}
      >
        <div className="min-w-0">
          <div className="field-label">{project.company}</div>
          <h3 className="mt-2 text-2xl font-bold leading-tight text-pine md:text-3xl">
            {project.headline || project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {project.summary || project.description}
          </p>

          {lens && lensLine && (
            <div key={lens.id} className="animate-expand mt-5 flex max-w-2xl items-start gap-3 rounded-md bg-[#7F9879]/15 px-4 py-3">
              <Glasses frame={lens.frame} worn className="mt-1 h-5 w-10 flex-shrink-0" />
              <p className="text-base leading-relaxed text-pine">
                <span className="field-label mr-2 !text-pine">As {lens.reader}</span>
                {lensLine}
              </p>
            </div>
          )}

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
              <dt className="field-label">When</dt>
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

          <div className="mt-6 text-sm font-medium text-pine underline underline-offset-4">
            {isExpanded ? "Close case study" : "View case study"}
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

      {/* Full case study */}
      {isExpanded && (
        <div className="animate-expand space-y-6 px-6 pb-10 md:px-10">
          {project.role && <Section label="My role">{project.role}</Section>}

          {project.teamSize && <Section label="Team">{project.teamSize}</Section>}

          {project.problem && (
            <Section label="The problem">
              <p className="whitespace-pre-line">{project.problem}</p>
            </Section>
          )}

          {project.approach && (
            <Section label="What I did">
              <p className="whitespace-pre-line">{project.approach}</p>
            </Section>
          )}

          {isFlagship && (
            <div className="rounded-md bg-stage p-6 text-mist md:p-8">
              <div className="field-label mb-5 !text-[#9BABA3]">How the work evolved</div>
              <ol className="grid gap-6 md:grid-cols-3">
                {flagshipSteps.map(([number, title, body]) => (
                  <li key={number} className="border-t border-white/15 pt-4">
                    <div className="mb-3 font-mono text-sm text-[#9BABA3]">{number}</div>
                    <div className="mb-2 font-display text-lg font-bold">{title}</div>
                    <p className="text-sm leading-relaxed text-white/70">{body}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-xs text-white/50">
                Reconstructed strategy model. No customer interface or confidential implementation details shown.
              </p>
            </div>
          )}

          {project.impact && (
            <Section label="What changed">
              <ul className="space-y-2">
                {toLines(project.impact).map((line) => (
                  <li key={line} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-4 flex-shrink-0 bg-filament" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              {project.metricNote && <p className="mt-4 text-sm text-gray-500">{project.metricNote}</p>}
            </Section>
          )}

          {project.fullStory && (
            <Section label="The story">
              <p className="whitespace-pre-line">{project.fullStory}</p>
            </Section>
          )}

          <div className="flex flex-wrap items-center gap-6 border-t border-black/10 pt-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-pine underline underline-offset-4 hover:text-[#5F7A5A]"
              >
                View the project
              </a>
            )}
            <button
              type="button"
              onClick={toggle}
              className="text-sm font-medium text-pine underline underline-offset-4 hover:text-[#5F7A5A]"
            >
              Close case study
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
