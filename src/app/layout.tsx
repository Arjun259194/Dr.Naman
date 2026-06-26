import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantSerif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const interSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Naman Krishnarthi | MD Physician | Mehsana & North Gujarat",
  description: "Experience premium, modern, and personalized healthcare with Dr. Naman Krishnarthi, an MD Physician specializing in internal medicine, virtual consultation, diagnostic care, and holistic wellness.",
  keywords: [
    "Dr. Naman Krishnarthi",
    "MD Physician Mehsana",
    "Doctor in North Gujarat",
    "Online Consultation Doctor",
    "Functional Medicine India",
    "Internal Medicine Mehsana",
    "Personal Physician Gujarat",
    "Prescription Review Online"
  ],
  authors: [{ name: "Dr. Naman Krishnarthi" }],
  openGraph: {
    title: "Dr. Naman Krishnarthi | MD Physician",
    description: "Premium personal healthcare and virtual consulting in Mehsana & North Gujarat.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantSerif.variable} ${interSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-warm-sand text-healing-teal-dark overflow-x-hidden selection:bg-gold-light/30 selection:text-healing-teal-dark">
        {children}
      </body>
    </html>
  );
}
