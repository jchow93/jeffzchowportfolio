"use client";

import { Linkedin, Mail, Github, ExternalLink } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jeffzchow",
    icon: Linkedin,
    description: "Connect with me on LinkedIn"
  },
  {
    name: "Email",
    url: "mailto:jeff@example.com",
    icon: Mail,
    description: "Send me an email"
  },
  {
    name: "GitHub",
    url: "https://github.com/jeffchow",
    icon: Github,
    description: "Check out my code"
  }
];

export default function WhereToFindMeSection() {
  return (
    <section id="contact" className="px-6 py-20 md:px-10 md:py-32 bg-[#FAFAF8]">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
          Where to Find Me
        </h2>
        <p className="mb-12 text-xl text-gray-600 md:text-2xl">
          Let's connect! I'm always open to discussing product opportunities, collaborations, or just chatting about building things.
        </p>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-[#8BA888] hover:shadow-lg transition-all duration-200 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#8BA888]/10 rounded-full flex items-center justify-center group-hover:bg-[#8BA888]/20 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-[#8BA888]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#8BA888] transition-colors duration-200">
                      {link.name}
                    </h3>
                    {!link.url.startsWith("mailto:") && (
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#8BA888] transition-colors duration-200" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-[#8BA888]/10 rounded-lg border border-[#8BA888]/20">
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Prefer a different way to connect?</strong> Feel free to reach out through any of the channels above, or if you have my contact info from elsewhere, that works too! I typically respond within 24-48 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

