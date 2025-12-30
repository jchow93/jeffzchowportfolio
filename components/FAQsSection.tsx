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
    answer: "I'm a DJ and music producer (my tracks have hit 750K+ streams). There's something about creating music that mirrors product work—both require understanding emotional arcs, building tension and release, and knowing when to strip things back to the essentials.\n\nI also love cooking, photography, boxing, and calisthenics. I played basketball at Cal Berkeley (practice squad for Women's Varsity), so I'm competitive by nature. That translates into how I approach product—I want to win, but I want to win as a team."
  },
  {
    question: "What's something you believe that most PMs don't?",
    answer: "The best product work often costs $0.\n\nAt ShortTok, I created $700K+ in annual value using a $40/month tool (Cursor). At Productbot AI, I shipped beta 6 weeks early by implementing OKRs—just frameworks and discipline. I've seen too many PMs default to \"we need more budget\" when the real answer is \"we need more clarity.\"\n\nConstraints breed creativity. The best solutions come from asking \"How can we do this with what we have?\" not \"What do we need to buy?\""
  },
  {
    question: "What's your superpower as a PM?",
    answer: "I build products users actually use—not products that launch and die. \n\nAt Productbot AI, we hit daily active usage with beta customers. At Meed Loyalty, 78% adoption (vs 20% target). At Globality, 80% adoption for Glo Insights. These weren't flukes—they came from obsessive user research. \n\nI've conducted 100+ user interviews across my career, and I don't just ask questions—I shadow people during their actual work. I spent weeks in restaurant kitchens, sports press boxes, and procurement offices watching real friction in real time. That's why my products reduce time by 90-97% consistently—I'm not guessing what the problem is. \n\nMy philosophy: spend 2 weeks in the field, then ship something in 8 weeks that people love. Most PMs spend 8 weeks building, then 2 weeks wondering why no one uses it. I do it backwards."
  },
  {
    question: "What's the best product decision you've ever made?",
    answer: "Walking away.\n\nAt Meed Loyalty, we launched a gamified rewards system (points, badges, leaderboards). Within 2 weeks, I realized it wasn't working—<5% engagement, no behavior change.\n\nInstead of doubling down, I killed it and pivoted to a partnership program that connected complementary businesses (restaurants + gyms). That drove 20% retention increase.\n\nThe lesson: The best product managers know when to stop building. Sometimes the right call is \"this isn't working\" and moving on fast. Ego is expensive."
  },
  {
    question: "Why did you leave your last job?",
    answer: "ShortTok deprioritized product strategy in favor of pure engineering velocity. The PM role was eliminated—it wasn't a performance issue, it was a strategic shift.\n\nI learned an important lesson: I need to work at companies where product leadership actively shapes direction, not just executes what founders decide. That's what I'm optimizing for now.\n\nIf you're a founder who sees PMs as \"order takers,\" we're probably not a fit. If you see PMs as strategic partners who push back and bring ideas to the table, let's talk."
  },
  {
    question: "What's your relationship with AI tools?",
    answer: "I'm an AI power user—I built entire systems using Cursor, automated workflows with GitHub Actions, and shipped prototypes that saved weeks of engineering time.\n\nBut here's my hot take: AI tools are only as good as the person using them. I've seen too many PMs generate 50-page PRDs with ChatGPT that no one reads. The tool doesn't replace judgment—it amplifies your existing skillset.\n\nI use AI to move faster, not to avoid thinking. The prototypes I built in Cursor weren't just \"AI-generated code dumps\"—they were solutions to real problems I'd validated through user research. The AI was the implementation tool, not the strategy tool."
  },
  {
    question: "What are you building right now?",
    answer: "I'm building Hoolie—a social events coordination app that eliminates the screenshot-to-group-chat coordination hell. You know the pattern: someone posts an event on Instagram, you screenshot it, text 5 friends, then it dies in the group chat.\n\nI'm leading product and building the frontend (React, Next.js, Tailwind) with a small team. We're launching our PoC in January 2025.\n\n**Transparency:** This is nights and weekends. My primary focus is finding the right full-time role. If I join a company, Hoolie transitions to the team or shuts down—I'm not looking to split my attention. I mention it because it shows I'm a builder who stays sharp, not because I'm hedging my career bets."
  },
  {
    question: "What's something that would surprise people about you?",
    answer: "I played practice squad for Cal Berkeley Women's Varsity Basketball.\n\nYes, really. I got a chance to be part of a D1 team, and am technically a NCAA student athlete. It taught me how to support a team's success without being the star, which is pretty much what being a PM is.\n\nAlso: I once built an RFID system that tracks liquid levels in liquor bottles. It was adapted from... adult diaper technology. Product work is weird sometimes."
  },
  {
    question: "What's your 'North Star' as a PM?",
    answer: "Ship products people actually use.\n\nNot \"ship features and hope.\" Not \"ship and iterate later.\" Ship products people want to use every day.\n\nI measure success by retention, not launches. At Productbot AI, we hit daily active usage and 8.5/10 NPS with beta customers. At Meed Loyalty, we achieved 78% adoption (vs 20% target). At Globality, we hit 80% adoption for Glo Insights.\n\nAdoption is the ultimate validation. If people don't use it, you didn't build the right thing—no matter how clean the code is or how impressive the tech stack.\n\nThat's why I spend so much time in user research. I'd rather spend 2 weeks talking to users than 2 months building the wrong thing."
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

