import type { Metadata } from "next";
import { Baskervville, Prompt } from "next/font/google";
import { curly } from "../../data/curly";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Preloader } from "@/components/sections/preloader";

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(curly.seo.siteUrl),
  title: curly.seo.title,
  description: curly.seo.description,
  keywords: [
    "Curly Gabrovo",
    "Кърли Габрово",
    "ресторант Габрово",
    "суши Габрово",
    "бургери Габрово",
  ],
  openGraph: {
    title: curly.seo.title,
    description: curly.seo.description,
    locale: curly.seo.locale,
    type: "website",
    siteName: curly.fullName,
    url: "/",
    images: [
      {
        url: curly.images.hero,
        width: 5120,
        height: 3413,
        alt: "CURly Gabrovo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: curly.seo.title,
    description: curly.seo.description,
    images: [curly.images.hero],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

function RestaurantJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: curly.fullName,
    description: curly.description,
    telephone: curly.contact.phone,
    image: `${curly.seo.siteUrl}${curly.images.hero}`,
    servesCuisine: ["Sushi", "Burger", "Cocktail"],
    address: {
      "@type": "PostalAddress",
      streetAddress: curly.contact.address,
      addressLocality: curly.city,
      postalCode: curly.contact.postalCode,
      addressCountry: "BG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: curly.location.coordinates.lat,
      longitude: curly.location.coordinates.lng,
    },
    url: curly.seo.siteUrl,
    menu: `${curly.seo.siteUrl}/#menu`,
    sameAs: [curly.social.facebook, curly.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="bg"
      className={`${baskervville.variable} ${prompt.variable} h-full`}
    >
      <head>
        <link rel="icon" href="/images/curly/brand/logo.png" type="image/png" />
        <RestaurantJsonLd />
      </head>
      <body className="min-h-full bg-paper text-ink-2">
        <Preloader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
