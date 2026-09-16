import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://praveen-raj.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Praveen Raj ⚡ Pixels, Code & Big Dreams 🚀 Frontend Engineer",
  description:
    "Experienced Frontend Engineer skilled in React.js, Tailwind CSS, and modern web development.",
  authors: [{ name: "Praveen Raj" }],
  keywords: ["Frontend engineer", "React", "CSS", "JavaScript", "Chennai"],
  alternates: { canonical: BASE_URL },
  verification: {
    google: "nosYX6tKm-AWWpD_Pkktfaq2Cg1XxWcZn3UzSk8WxFw",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Praveen Raj",
    title: "Praveen Raj — Frontend Engineer",
    description:
      "Frontend engineer from Chennai building modern, high-performance web experiences with React, TypeScript, and Tailwind CSS.",
    images: [{ url: "/og", width: 1200, height: 630, alt: "Praveen Raj — Frontend Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen Raj — Frontend Engineer",
    description:
      "Frontend engineer from Chennai building modern, high-performance web experiences with React, TypeScript, and Tailwind CSS.",
    images: ["/og"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
