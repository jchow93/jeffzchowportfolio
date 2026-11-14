import type { Metadata } from "next";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

export const metadata: Metadata = {
  title: "Jeff Chow — Builder PM for AI Products",
  description: "I turn complex customer problems into scalable AI products, from 0→1 discovery through 1→10 growth.",
  icons: {
    icon: "/assets/logo.png",
  },
  openGraph: {
    title: "Jeff Chow — Builder PM for AI Products",
    description: "Complex customer problems → scalable AI products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeff Chow — Builder PM for AI Products",
    description: "Complex customer problems → scalable AI products.",
  },
  other: {
    // Preload critical images via link tags
    'link-preload-logo': '/assets/logo.png',
    'link-preload-profile': '/assets/profile.JPG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href="/assets/logo.png"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/profile.JPG"
          fetchPriority="high"
        />
      </head>
      <body>
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
