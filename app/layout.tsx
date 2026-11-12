import type { Metadata, Viewport } from "next";
import { Anybody, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl = "https://shubham-portfolio-mu-puce.vercel.app";

// ShubhTechIN house type, shared with Dropzuu and every later product:
// Anybody (variable width) for display, Hanken Grotesk for reading.
const display = Anybody({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["wdth"],
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shubham Surve | ShubhTechIN",
    template: "%s | ShubhTechIN",
  },
  description:
    "Shubham Surve, computer engineering student in Mumbai. Projects, skills and resume. Open to internships.",
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
    title: "Shubham Surve | ShubhTechIN",
    description:
      "Computer engineering student in Mumbai building Dropzuu and other projects. Open to internships.",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShubhTechIN, the portfolio of Shubham Surve",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Surve | ShubhTechIN",
    description:
      "Computer engineering student in Mumbai building Dropzuu and other projects. Open to internships.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#E3E8E4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
