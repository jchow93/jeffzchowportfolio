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
    <section id="faqs" className="px-6 py-20 md:px-10 md:py-32 bg-[#F2F5F3]">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-4xl font-bold text-pine md:text-5xl">
          Beyond the Bullets
        </h2>
        <p className="mb-12 text-xl text-gray-600 md:text-2xl">
          The things you won't learn from my resume—passions, beliefs, and the stories behind the work.
        </p>

        <div className="space-y-4">
          {beyondTheBullets.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 text-gray-700 leading-relaxed border-t border-gray-100 whitespace-pre-line">
                  {renderAnswer(faq.answer)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
