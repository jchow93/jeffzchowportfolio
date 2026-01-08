import type { Metadata } from "next";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

export const metadata: Metadata = {
  title: "Jeff Chow - Product Builder",
  description: "Building products that create measurable impact",
  icons: {
    icon: "/assets/logo.png",
  },
  openGraph: {
    title: "Jeff Chow - Product Builder",
    description: "Building products that create measurable impact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeff Chow - Product Builder",
    description: "Building products that create measurable impact",
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

