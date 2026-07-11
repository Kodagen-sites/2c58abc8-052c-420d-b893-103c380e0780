import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/content/site-config";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import EditorBridge from "@/components/__kodagen/EditorBridge";
import { FilmGrain, Vignette, ScrollProgress } from "@/components/motion";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getKodagenLiveData } from "@/lib/kodagen-live";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const live = await getKodagenLiveData();
  const title = live.seo?.title || siteConfig.seo.defaultTitle;
  const description =
    live.seo?.description || siteConfig.seo.defaultDescription;
  const keywords = live.seo?.keywords;

  return {
    metadataBase: new URL(siteConfig.seo.siteUrl),
    title: {
      default: title,
      template: `%s — ${siteConfig.company.name}`,
    },
    description,
    ...(keywords && keywords.length ? { keywords } : {}),
    openGraph: {
      title,
      description,
      url: siteConfig.seo.siteUrl,
      siteName: siteConfig.company.name,
      images: [{ url: siteConfig.seo.defaultOgImage }],
      locale: siteConfig.seo.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.seo.defaultOgImage],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.seo.htmlLang}
      className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body className="bg-bg text-white antialiased">
        <Vignette color="#13162e" strength={0.75} />
        <FilmGrain opacity={0.05} />
        <ScrollProgress color="#dbc03d" />
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        <WhatsAppFloat />
        <EditorBridge />
      </body>
    </html>
  );
}
