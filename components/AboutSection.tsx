"use client";

import { Compass, Layers3, Sparkles, Workflow } from 'lucide-react';

const skills = [
  {
    icon: Compass,
    title: 'Find the real problem',
    description: 'I get close to the workflow—kitchens, operations rooms, enterprise teams—until the question behind the question becomes clear.'
  },
  {
    icon: Sparkles,
    title: 'Make AI trustworthy',
    description: 'The demo is the easy part. I design the evaluation loops, human judgment, and UX that make AI reliable enough to become part of real work.'
  },
  {
    icon: Workflow,
    title: 'Build the first version',
    description: 'I prototype to learn, not to perform. Being technical lets me shorten the distance between a customer insight and something we can put in their hands.'
  },
  {
    icon: Layers3,
    title: 'Turn repeats into product',
    description: 'At 1→10, I look for the common layer beneath customer requests—then turn bespoke delivery into configurable workflows that compound.'
  }
];

export default function AboutSection() {
  return (
    <div className="px-6 py-20 md:px-10 md:py-32 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto">
        {/* Desktop: Two-column layout (text left, cards right), Mobile: Single column */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center mb-16 md:mb-20">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">About Me</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p className="text-lg font-medium text-gray-900">
                I’m a builder PM, but building is only one part of the job.
              </p>
              <p>
                My best work starts inside a messy customer problem: an enterprise workflow that takes weeks, an AI system people don’t trust yet, or a product that works for two customers but won’t survive ten.
              </p>
              <p>
                I move between customer discovery, product strategy, UX, and technical execution to find the product hiding underneath. Sometimes that means a prototype. Sometimes it means saying no to an attractive feature. Increasingly, it means turning repeated customer work into a system that scales.
              </p>
            </div>
          </div>

          {/* Right Column - Cards Grid (Desktop: 2x2, hidden on mobile) */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="bg-[#FAFAF8] p-6 rounded-[20px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-[#8BA888]/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#8BA888]" />
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">{skill.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: 1 card per row (shown only on mobile) */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="bg-[#FAFAF8] p-6 rounded-[20px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#8BA888]/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#8BA888]" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">{skill.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
