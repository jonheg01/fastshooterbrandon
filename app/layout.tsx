import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Tektur, Outfit, Red_Hat_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const label = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-label",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = Red_Hat_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.person}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.person}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.person}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${label.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
