import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Meet Landing Page",
  description: "A beautiful landing page for a virtual meeting application",
  icons: {
    icon: "/assets/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${redHatDisplay.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
