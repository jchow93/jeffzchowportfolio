import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeff Chow - Product Manager",
  description: "Building products that create measurable impact",
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

