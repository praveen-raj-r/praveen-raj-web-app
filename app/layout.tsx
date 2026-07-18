import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
