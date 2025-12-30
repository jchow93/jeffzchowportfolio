"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What kind of PM are you?",
    answer: "I'm a technical PM who actually builds things. When I need to validate an idea, I code it—I've built productivity systems, QA automation, and frontend components using tools like Cursor. I've shipped products from scratch multiple times (0→1 launches at ShortTok, Artifact Labs, Meed Loyalty) and I'm comfortable with both Fortune 500 processes (Visa, Globality) and startup speed. I believe in scrappy execution—doing more with less, not more with more. At ShortTok, I created $700K+ in annual value using a $40/month tool."
  },
  {
    question: "What's your availability?",
    answer: "I'm currently open to full-time opportunities and product advisory roles. I'm also building Hoolie (a social events app) on nights and weekends. Check my status badge at the top of the page for my current availability."
  },
  {
    question: "What industries have you worked in?",
    answer: "I've worked across fintech/payments (Visa), B2B SaaS and procurement (Globality), blockchain/Web3 (Artifact Labs), gaming (Joystick), F&B/restaurant tech (Meed Loyalty), AI/ML tools (Productbot AI), AI storytelling and video curation (ShortTok), property tech (Starter's Path), and consumer social (Hoolie). I'm comfortable jumping into new industries because product thinking translates across domains—the core skills of user research, prioritization, and execution are universal."
  },
  {
    question: "Do you only work remotely?",
    answer: "I'm open to both remote and hybrid opportunities. I've worked effectively in both distributed teams and in-person environments. I spent time in Hong Kong supporting family while working with Meed Loyalty and Artifact Labs, and I'm now based in the Bay Area. Location is flexible—what matters most is the right opportunity and team."
  },
  {
    question: "What's your approach to product management?",
    answer: "I believe in shipping fast, learning faster. I build prototypes myself when I need to validate ideas quickly—at Productbot AI, I built dashboard prototypes in Cursor that saved 2-3 weeks of engineering discovery time. I focus on user empathy (I've conducted 50+ user interviews across my career), data-driven decisions, and scrappy execution. I've learned to navigate corporate politics at Fortune 500 companies (Visa, Globality) and move at startup speed when it matters. My philosophy: constraints breed clarity, and the best investment is often $0—frameworks and discipline cost nothing but create massive value."
  },
  {
    question: "Can you share examples of your work?",
    answer: "Absolutely! Check out the Featured Work and Featured Projects sections above. Each project includes details about the problem, my approach, and the results. Highlights include: reducing fraud detection time by 97% at Globality, driving Provider NPS from 5 to 40, generating $680K in contracts at Artifact Labs, achieving 78% adoption for a receipt scanning feature at Meed Loyalty, and creating $340K+ in revenue and pipeline at ShortTok. I'm happy to dive deeper on any specific project that interests you."
  }
];

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="px-6 py-20 md:px-10 md:py-32 bg-[#F5F1E8]">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mb-12 text-xl text-gray-600 md:text-2xl">
          Common questions about my background, approach, and availability.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 text-gray-700 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

