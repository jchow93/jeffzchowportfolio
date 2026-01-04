import type { Metadata } from "next";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

