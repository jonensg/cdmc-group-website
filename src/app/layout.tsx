import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CDMC Group - Be Seen. Be Chosen. Master Your Digital Reputation.",
  description: "AI-Driven Social Intelligence & ORM Agency. 18 years of experience in Hong Kong serving Asia with online reputation management, social intelligence, and word-of-mouth marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
