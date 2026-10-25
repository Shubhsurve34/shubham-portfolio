import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://shubham-portfolio-mu-puce.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ShubhTechIN | Shubham Surve — Developer Portfolio",
    template: "%s | ShubhTechIN",
  },
  description:
    "Explore Shubham Surve's computer engineering portfolio, technical skills, projects, and learning journey in software development.",
  applicationName: "ShubhTechIN",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ShubhTechIN",
    title: "ShubhTechIN | Shubham Surve — Developer Portfolio",
    description:
      "Computer engineering student exploring software development through practical projects and continuous learning.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "ShubhTechIN | Shubham Surve — Developer Portfolio",
    description:
      "Computer engineering student exploring software development through practical projects and continuous learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
