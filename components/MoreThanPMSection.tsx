"use client";

import { useState } from "react";
import Image from "next/image";

interface CardData {
  id: string;
  icon: string;
  collapsedTitle: string;
  collapsedSubtitle: string;
  expandedTitle: string;
  expandedSubtitle: string;
  body: string;
  image?: string;
  spotifyEmbed?: string;
  spotifyLink?: string;
  soundcloudLink?: string;
}

const cardsData: CardData[] = [
  {
    id: "dj",
    icon: "🎵",
    collapsedTitle: "DJ & Producer",
    collapsedSubtitle: "750K+ streams",
    expandedTitle: "DJ & Producer",
    expandedSubtitle: "750K+ streams across Spotify and SoundCloud",
    body: "I build products like I produce music—understanding emotional arcs, building tension and release, and knowing when to strip back to the essentials.",
    image: "/assets/dj.JPG",
    spotifyLink: "https://open.spotify.com/artist/1f0n7cFsvYawQBuzj6EAfD",
    soundcloudLink: "https://soundcloud.com/thisisroem",
  },
  {
    id: "athlete",
    icon: "💪",
    collapsedTitle: "Athlete",
    collapsedSubtitle: "Cal Basketball, Boxing, Training",
    expandedTitle: "Competitive Athlete",
    expandedSubtitle: "NCAA Practice Squad | Boxing | Calisthenics | Lifting",
    body: "I played practice squad for Cal Women's Basketball at Berkeley—learned to support team success without being the star. Now I channel that competitive drive into boxing, calisthenics, and lifting. Discipline, consistency, pushing limits—same mindset I bring to product work.",
  },
  {
    id: "cooking",
    icon: "🍳",
    collapsedTitle: "Amateur Chef",
    collapsedSubtitle: "Dairy & egg-free experiments",
    expandedTitle: "Amateur Chef",
    expandedSubtitle: "Cooking Without Dairy or Eggs",
    body: "I'm allergic to dairy and eggs, so I've learned to get creative—reimagining recipes, experimenting with substitutes, and iterating until it works. It's a lot like product work: test, learn, adjust, ship.\n\nEvery dish is a prototype. Some fail spectacularly. The ones that work? Worth the iteration.",
  },
  {
    id: "photography",
    icon: "📸",
    collapsedTitle: "Visual Storyteller",
    collapsedSubtitle: "Street & nature photography",
    expandedTitle: "Visual Storyteller",
    expandedSubtitle: "Street & Nature Photography",
    body: "I capture things in the moment—the details most people walk past. Street photography and nature shots that tell a story beyond the frame.\n\nIt's about seeing what others don't. Pattern recognition, timing, composition. Same skills that make me a better PM—noticing the friction everyone else has normalized.",
    image: "/assets/photography.jpg",
  },
];

export default function MoreThanPMSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardClick = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="more-than-pm" className="px-6 py-20 md:px-10 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">More Than a PM</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cardsData.map((card) => {
            const isExpanded = expandedCard === card.id;

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 ease-in-out touch-manipulation ${
                  isExpanded
                    ? "shadow-lg scale-[1.02] min-h-[400px]"
                    : "h-[250px] shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98]"
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(card.id);
                  }
                }}
                aria-expanded={isExpanded}
              >
                {!isExpanded ? (
                  // Collapsed State
                  <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 text-5xl">{card.icon}</div>
                    <h3 className="mb-2 text-xl font-bold text-black">{card.collapsedTitle}</h3>
                    <p className="text-sm text-gray-600">{card.collapsedSubtitle}</p>
                  </div>
                ) : (
                  // Expanded State
                  <div className="animate-expand p-6">
                    <div className="space-y-4">
                      {/* Image if available */}
                      {card.image && (
                        <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-100">
                          <Image
                            src={card.image}
                            alt={card.expandedTitle}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      {/* Title and Subtitle */}
                      <div>
                        <h3 className="mb-1 text-2xl font-bold text-black">{card.expandedTitle}</h3>
                        <p className="text-sm text-gray-600">{card.expandedSubtitle}</p>
                      </div>

                      {/* Body Text */}
                      <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
                        {card.body}
                      </p>

                      {/* Spotify Embed Placeholder */}
                      {card.spotifyEmbed && (
                        <div className="mt-4">
                          <div className="rounded-lg bg-gray-100 p-4 text-center text-sm text-gray-500">
                            [Spotify embed placeholder]
                          </div>
                        </div>
                      )}

                      {/* Links */}
                      {(card.spotifyLink || card.soundcloudLink) && (
                        <div className="mt-4 flex flex-wrap gap-4">
                          {card.spotifyLink && (
                            <a
                              href={card.spotifyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center text-sm font-medium text-[#8BA888] hover:text-[#6B8E6B] transition-colors"
                            >
                              → Listen on Spotify
                            </a>
                          )}
                          {card.soundcloudLink && (
                            <a
                              href={card.soundcloudLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center text-sm font-medium text-[#8BA888] hover:text-[#6B8E6B] transition-colors"
                            >
                              → Listen on SoundCloud
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

