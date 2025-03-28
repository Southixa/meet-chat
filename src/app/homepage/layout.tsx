import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Landing Page",
  description: "Connect with others face-to-face virtually and collaborate across any device",
};

export default function HomepageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 