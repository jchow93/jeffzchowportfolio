"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "more-than-pm", label: "More Than a PM" },
  { id: "featured-work", label: "Featured Work" },
  { id: "featured-projects", label: "Featured Projects" },
  { id: "about", label: "About" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const viewportHeight = window.innerHeight;
      const scrollPositionForSection = scrollPosition + viewportHeight / 3;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom = scrollPosition + viewportHeight >= documentHeight - 150; // 150px threshold for bottom detection

      // Check if we're at the bottom - if so, activate the last section (contact)
      if (isNearBottom) {
        const lastSection = sections[sections.length - 1];
        const lastElement = document.getElementById(lastSection.id);
        if (lastElement) {
          setActiveSection(lastSection.id);
          return;
        }
      }

      // Check sections in reverse order to prioritize later sections
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionBottom = offsetTop + offsetHeight;
          const sectionTop = offsetTop;
          
          // Check if section is visible in viewport
          // A section is considered active if:
          // 1. The scroll position (with offset) is within the section bounds, OR
          // 2. The section top is above the viewport center and section bottom is below scroll position
          const isInViewport = 
            (scrollPositionForSection >= sectionTop && scrollPositionForSection < sectionBottom) ||
            (scrollPosition >= sectionTop - viewportHeight / 2 && scrollPosition < sectionBottom + viewportHeight / 2);
          
          if (isInViewport) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("jeff.chow93@gmail.com"); // Replace with your email
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const openLinkedIn = () => {
    window.open("https://linkedin.com/in/jeffzchow", "_blank"); // Replace with your LinkedIn URL
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = !isScrolled || isHovered;

  return (
    <nav 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`rounded-full transition-all duration-500 ease-out ${
          isActive
            ? "backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
            : "opacity-50 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl"
        }`}
      >
          {/* Inner Shine Layer - Only visible when active */}
          {isActive && (
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none rounded-full" />
          )}
          
          {/* Content */}
          <div className="relative z-10 px-4 py-6 flex flex-col gap-6 items-center">
          {/* Logo at the top */}
          <button
            onClick={() => scrollToSection("home")}
            className="relative group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8BA888] focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
            aria-label="Home"
            title="Go to Home"
          >
            <div className="p-2 rounded-full transition-all duration-300 hover:bg-gray-300/20 active:scale-95">
              <img
                src="/assets/logo.png"
                alt="Jeff Chow Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <span className="absolute right-12 top-1/2 -translate-y-1/2 ml-2 px-3 py-1 bg-gray-900/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Hi!
            </span>
          </button>

          {/* Divider */}
          <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent" />

          {/* Section Navigation Dots */}
          <div className="flex flex-col gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8BA888] focus:ring-offset-2 focus:ring-offset-transparent rounded-full ${
                  activeSection === section.id ? "scale-125" : ""
                }`}
                aria-label={section.label}
                aria-current={activeSection === section.id ? "page" : undefined}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-[#8BA888] shadow-lg shadow-[#8BA888]/30"
                      : "bg-gray-300 hover:bg-[#8BA888]/50 active:scale-90"
                  }`}
                />
                <span className="absolute right-8 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {section.label}
                </span>
              </button>
            ))}
          </div>

          {/* Bottom Divider */}
          <div className="w-px h-16 bg-gradient-to-t from-gray-300 to-transparent" />

          {/* Email Icon */}
          <button
            onClick={copyEmail}
            className="relative group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8BA888] focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
            aria-label="Copy Email"
            title={emailCopied ? "Copied!" : "Copy Email"}
            aria-pressed={emailCopied}
          >
            <div
              className={`p-2 rounded-full transition-all duration-300 ${
                emailCopied
                  ? "bg-green-500/20"
                  : "bg-gray-300/20 hover:bg-gray-400/30 active:scale-95"
              }`}
            >
              {emailCopied ? (
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              )}
            </div>
            <span className="absolute right-8 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {emailCopied ? "Copied!" : "Email"}
            </span>
          </button>

          {/* LinkedIn Icon */}
          <button
            onClick={openLinkedIn}
            className="relative group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8BA888] focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
            aria-label="LinkedIn"
            title="View LinkedIn Profile"
          >
            <div className="p-2 bg-gray-300/20 rounded-full transition-all duration-300 hover:bg-gray-400/30 active:scale-95">
              <svg
                className="w-5 h-5 text-gray-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <span className="absolute right-8 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              LinkedIn
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

