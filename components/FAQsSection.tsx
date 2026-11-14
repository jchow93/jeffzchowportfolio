"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const beyondTheBullets: FAQ[] = [
  {
    question: "What's something you believe that most PMs don't?",
    answer: "The best PMs are resourceful, not merely well-resourced. \n\nSometimes leverage comes from code. Sometimes it comes from a sharper decision, a smaller scope, or a better operating system for the team. At Productbot AI, clearer priorities helped us ship beta six weeks earlier. The common thread is not doing everything yourself—it’s creating enough clarity for the whole team to move."
  },
  {
    question: "What's your superpower as a PM?",
    answer: "I’m good at finding the product hiding inside a messy customer problem. I get close enough to the workflow to understand what actually matters, prototype quickly enough to test the idea, and then turn repeated customer needs into something scalable. My technical fluency helps—but the real advantage is shortening the distance between signal, decision, and action."
  },
  {
    question: "What's the best product decision you've ever made?",
    answer: "Walking away. At Meed Loyalty, we launched a gamified rewards system that got <5% engagement. Instead of doubling down, I killed it and pivoted to a partnership program that drove 20% retention increase. The best product managers know when to stop building."
  },
  {
    question: "How do you decide what not to build in AI?",
    answer: "I ask whether the underlying problem will remain durable as the technology changes. While working on Salient’s compliance product line, coaching looked like an obvious adjacency to interaction analysis—but the human coaching workflow may change as AI agents take on more servicing work. That pushed my thinking toward durable capabilities such as audit intelligence, policy controls, evidence, and remediation workflows that remain valuable regardless of who handles the interaction."
  },
  {
    question: "What changes when a product goes from 0→1 to 1→10?",
    answer: "At 0→1, speed of learning wins. At 1→10, the job becomes pattern recognition: separating what is truly customer-specific from what should become configuration, workflow, or platform capability. The goal is to preserve customer intimacy without turning every new account into a new engineering project."
  },
];

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAnswer = (text: string) => {
    // Simple markdown bold rendering
    return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="faqs" className="bg-mist px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="field-label mb-4">Questions</div>
        <h2 className="mb-10 text-3xl font-bold leading-tight text-pine md:text-5xl">Beyond the resume</h2>

        <div className="max-w-3xl divide-y divide-black/10 border-y border-black/10">
          {beyondTheBullets.map((faq, index) => (
            <div key={index}>
              <button
                id={`faq-${index}`}
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-filament"
                aria-expanded={openIndex === index}
              >
                <span className="font-display text-lg font-bold text-pine">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="animate-expand max-w-2xl whitespace-pre-line pb-6 text-base leading-relaxed text-gray-700">
                  {renderAnswer(faq.answer)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
