"use client";

import { Code, Zap, Rocket, TrendingUp } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'I Actually Build Things',
    description: 'When I need to validate an idea, I code it. Cursor became my best friend—I use it to build frontend components, prototypes, and automation systems. Because sometimes the fastest way to know if something works is to just build it yourself.'
  },
  {
    icon: Zap,
    title: 'Scrappy Execution',
    description: 'I built systems that created $700K+ in annual value using a $40/month tool. My philosophy? Do more with less, not more with more. I\'d rather ship something scrappy that works than wait for the perfect solution.'
  },
  {
    icon: Rocket,
    title: '0→1 is My Happy Place',
    description: 'I\'ve shipped products from scratch multiple times—sports platforms in 8 weeks, fraud systems with massive impact, features that hit 78% adoption. There\'s something magical about taking an idea from "what if" to "it works."'
  },
  {
    icon: TrendingUp,
    title: 'Startup Speed, Enterprise Scale',
    description: 'I learned patience and stakeholder management at Visa, then learned to ship fast at startups. Now I bring both: I can navigate corporate politics AND move at startup speed when it matters.'
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
                Hi! You're probably here because you need a PM who can actually ship things, not just talk about shipping things. I get it—there's a difference.
              </p>
              <p>
              You know that moment in meetings when someone says 'we need to validate this idea' and everyone looks around? That's when I pull out Cursor and start coding.
              </p>
              <p>
                I'm the PM who gets impatient waiting for engineering bandwidth, so I build prototypes myself. The one who thinks "what if we just tried it?" instead of "what if we scheduled a meeting to discuss trying it?" I've learned to navigate enterprise politics while building products for Fortune 500 clients and ship startup products—basically, I can handle both the bureaucracy and the chaos.
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

