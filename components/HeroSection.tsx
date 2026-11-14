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

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Currently {statusText}. Before that, Visa, Globality and early-stage AI startups.
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
