"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const beyondTheBullets: FAQ[] = [
  {
    question: "What do you do when you're not building products?",
    answer: "I'm a DJ and music producer (750K+ streams). I also love cooking, photography, boxing, and calisthenics. I played practice squad for Cal Berkeley Women's Varsity Basketball—learned to support team success without being the star, which is pretty much what being a PM is."
  },
  {
    question: "What's something you believe that most PMs don't?",
    answer: "The best product work often costs $0. At ShortTok, I created $700K+ in annual value using a $40/month tool. At Productbot AI, I shipped beta 6 weeks early by implementing OKRs—just frameworks and discipline. Constraints breed creativity."
  },
  {
    question: "What's your superpower as a PM?",
    answer: "I build products users actually use—not products that launch and die. I've conducted 100+ user interviews and shadow people during their actual work (restaurant kitchens, sports press boxes, procurement offices). That's why my products reduce time by 90-97% consistently—I'm not guessing what the problem is."
  },
  {
    question: "What's the best product decision you've ever made?",
    answer: "Walking away. At Meed Loyalty, we launched a gamified rewards system that got <5% engagement. Instead of doubling down, I killed it and pivoted to a partnership program that drove 20% retention increase. The best product managers know when to stop building."
  },
  {
    question: "Why did you leave your last job?",
    answer: "ShortTok eliminated the PM role in favor of pure engineering velocity. Not a performance issue—a strategic shift. Now I'm looking for companies where PMs are strategic partners, not order takers."
  },
  {
    question: "What's your relationship with AI tools?",
    answer: "I'm an AI power user—I built entire systems using Cursor and automated workflows that saved weeks of engineering time. But AI tools are only as good as the person using them. I use AI to move faster, not to avoid thinking."
  },
  {
    question: "What are you building right now?",
    answer: "I'm building Hoolie—a social events coordination app that eliminates the screenshot-to-group-chat coordination hell. This is nights and weekends; my primary focus is finding the right full-time role. If I join a company, Hoolie transitions to the team or shuts down."
  },
  {
    question: "What's something that would surprise people about you?",
    answer: "I played practice squad for Cal Berkeley Women's Varsity Basketball—technically a NCAA student athlete. Also: I once built an RFID system that tracks liquid levels in liquor bottles, adapted from adult diaper technology. Product work is weird sometimes."
  },
  {
    question: "What's your 'North Star' as a PM?",
    answer: "Ship products people actually use. I measure success by retention, not launches. At Productbot AI, we hit daily active usage. At Meed Loyalty, 78% adoption (vs 20% target). At Globality, 80% adoption. If people don't use it, you didn't build the right thing."
  }
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

