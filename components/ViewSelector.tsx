"use client";

import { useState, useEffect, useRef } from "react";

interface ViewSelectorProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const VIEWS = [
  { value: "General", label: "General", jobTitle: "Generalist" },
  { value: "Founder", label: "Founder", jobTitle: "Founder" },
  { value: "Engineer", label: "Engineer", jobTitle: "Engineer" },
  { value: "Product Leader", label: "Product Leader", jobTitle: "Product Leader" },
  { value: "Designer", label: "Designer", jobTitle: "Designer" },
  { value: "Recruiter", label: "Recruiter", jobTitle: "Recruiter" },
  { value: "Investor", label: "Investor", jobTitle: "Investor" },
];

export default function ViewSelector({ currentView, onViewChange }: ViewSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Check if this is first visit
  useEffect(() => {
    if (typeof window === "undefined" || typeof sessionStorage === "undefined") return;
    
    const hasVisited = sessionStorage.getItem("portfolio_has_visited");
    if (!hasVisited) {
      // Show tooltip after a brief delay
      const timer = setTimeout(() => {
        setShowTooltip(true);
        sessionStorage.setItem("portfolio_has_visited", "true");
        // Auto-hide tooltip after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (typeof document === "undefined") return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setShowTooltip(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleViewSelect = (view: typeof VIEWS[number]) => {
    onViewChange(view.value);
    setIsOpen(false);
    setShowTooltip(false);
  };

  const currentViewLabel = VIEWS.find((v) => v.value === currentView)?.label || "General";

  return (
    <div className="fixed top-6 left-6 md:top-8 md:left-8 z-50" ref={dropdownRef}>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg text-xs md:text-sm font-medium text-gray-700 hover:bg-white hover:shadow-xl transition-all duration-300 touch-manipulation"
          aria-label="Select view"
          aria-expanded={isOpen}
        >
          <span className="text-gray-500 hidden sm:inline">View as:</span>
          <span className="font-semibold">{currentViewLabel}</span>
          <svg
            className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 md:w-52 rounded-lg bg-white border border-gray-200 shadow-xl overflow-hidden transition-all duration-200 ease-out z-50">
            {VIEWS.map((view) => (
              <button
                key={view.value}
                onClick={() => handleViewSelect(view)}
                className={`w-full text-left px-4 py-3 text-sm transition-colors touch-manipulation ${
                  currentView === view.value
                    ? "bg-gray-50 font-semibold text-gray-900"
                    : "text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                }`}
              >
                {view.label}
              </button>
            ))}
          </div>
        )}

        {/* Tooltip on first visit */}
        {showTooltip && (
          <div
            ref={tooltipRef}
            className="absolute top-full left-0 mt-3 w-64 px-4 py-3 rounded-lg bg-gray-900 text-white text-sm shadow-xl transition-opacity duration-300"
          >
            <div className="flex items-start gap-2">
              <span className="text-lg">👆</span>
              <div>
                <p className="font-medium">Switch views to see relevant work</p>
                <p className="text-xs text-gray-300 mt-1">
                  Each view highlights different projects and metrics tailored to your role
                </p>
              </div>
            </div>
            {/* Arrow pointing up */}
            <div className="absolute -top-2 left-6 w-4 h-4 bg-gray-900 rotate-45"></div>
          </div>
        )}
      </div>
    </div>
  );
}

