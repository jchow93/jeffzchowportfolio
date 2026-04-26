"use client";

import { Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 md:px-10 md:py-32 bg-[#FAFAF8]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl">
          Let's Build Something Together
        </h2>
        <p className="mb-12 text-lg text-gray-600 md:text-xl">
          Whether you're looking for a PM who can ship, a product advisor, or just want to chat about building products—I'd love to hear from you.
        </p>
        
        <div className="flex gap-6 justify-center items-center">
          <a
            href="https://linkedin.com/in/jeffzchow"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#8BA888] hover:shadow-lg transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7 text-[#8BA888]" />
          </a>
          
          <a
            href="mailto:jeff.chow93@gmail.com"
            className="group w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#8BA888] hover:shadow-lg transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-7 h-7 text-[#8BA888]" />
          </a>
        </div>
      </div>
    </section>
  );
}

