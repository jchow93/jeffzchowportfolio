"use client";

import Image from "next/image";
import Thread from "@/components/Thread";
import { currentStatus, getStatusText } from "@/lib/status";

interface PersonalizationData {
  name: string;
  jobTitle: string;
}

interface HeroSectionProps {
  personalizationData: PersonalizationData | null;
}

export default function HeroSection(_props: HeroSectionProps) {
  const statusText = getStatusText(currentStatus);

  return (
    <section className="relative flex min-h-[86vh] items-center px-6 pb-44 pt-10 md:px-10">
      {/* Brand motif: the thread untangles as it crosses the page */}
      <Thread className="absolute inset-x-0 bottom-4 h-36" />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <div className="field-label mb-6">Product manager · San Francisco Bay Area</div>

          <h1 className="text-4xl font-medium leading-[1.08] text-pine md:text-6xl">
            I’m <span className="font-bold">Jeff Chow</span>, a product manager who designs the{" "}
            <span className="text-filament">workflow</span>, not just the screen.
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="field-label">Currently</span>
            <span
              id="current-role"
              className="inline-block -rotate-2 cursor-default rounded-full bg-filament transition-transform duration-200 ease-out hover:-translate-y-1 hover:rotate-2 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:-rotate-2 motion-reduce:hover:scale-100 px-4 py-1.5 text-sm font-semibold text-white shadow-[0_3px_10px_rgba(217,84,26,0.35)] md:text-base"
            >
              {statusText}
            </span>
          </div>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Before that, Visa, Globality and early-stage AI startups.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#featured-work"
              className="rounded bg-pine px-6 py-3 text-center font-semibold text-mist transition-colors duration-200 hover:bg-[#1D3A30]"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="font-medium text-pine underline underline-offset-4 transition-colors duration-200 hover:text-[#5F7A5A]"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative hidden h-[340px] w-[240px] overflow-hidden rounded-md border border-black/10 bg-gray-100 md:block">
          <Image src="/assets/profile.JPG" alt="Jeff Chow" fill sizes="240px" className="object-cover object-top" priority />
        </div>
      </div>
    </section>
  );
}
