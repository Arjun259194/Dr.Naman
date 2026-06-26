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
  title: "Dr. Naman Krishnaatri | MBBS & B.Psych | Mehsana & North Gujarat",
  description: "Experience premium, modern, and personalized health guidance with Dr. Naman Krishnaatri, an MBBS doctor with a Bachelor's in Psychology offering remote medical advice, report reviews, and online consultation.",
  keywords: [
    "Dr. Naman Krishnaatri",
    "MBBS Doctor Mehsana",
    "Doctor in North Gujarat",
    "Online Consultation Doctor",
    "Medical Report Review Gujarat",
    "Second Opinion Doctor India",
    "Prescription Review Online",
    "Bachelor in Psychology Doctor"
  ],
  authors: [{ name: "Dr. Naman Krishnaatri" }],
  openGraph: {
    title: "Dr. Naman Krishnaatri | MBBS & B.Psych",
    description: "Premium personal health guidance and virtual consulting in Mehsana & North Gujarat.",
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
