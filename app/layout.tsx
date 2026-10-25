
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ShubhTechIN",
    title: "ShubhTechIN | Shubham Surve — Developer Portfolio",
    description:
      "Computer engineering student exploring software development through practical projects and continuous learning.",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShubhTechIN developer portfolio by Shubham Surve",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShubhTechIN | Shubham Surve — Developer Portfolio",
    description:
      "Computer engineering student exploring software development through practical projects and continuous learning.",
    images: ["/og-image.png"],
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
