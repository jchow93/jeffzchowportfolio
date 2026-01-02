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
    answer: "The best PMs are resourceful, not well-resourced. \n\nAt ShortTok, I created $700K+ in annual value using a $40/month tool. At Productbot AI, I shipped beta 6 weeks early by implementing OKRs—just frameworks and discipline. I've seen too many PMs default to 'we need more budget' when the real answer is 'we need more clarity.'"
  },
  {
    question: "What's your superpower as a PM?",
    answer: "I get things done by building—I don't wait for engineering bandwidth. At ShortTok, I built automation that created $700K+ in value. I eliminate bottlenecks by coding through them."
  },
  {
    question: "What's the best product decision you've ever made?",
    answer: "Walking away. At Meed Loyalty, we launched a gamified rewards system that got <5% engagement. Instead of doubling down, I killed it and pivoted to a partnership program that drove 20% retention increase. The best product managers know when to stop building."
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
    <section id="faqs" className="px-6 py-20 md:px-10 md:py-32 bg-[#F5F1E8]">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
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

