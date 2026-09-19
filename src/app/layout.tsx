import type { Metadata, Viewport } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company } from "@/lib/company";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Cathodic Protection EPC Contractor, Kolkata`,
    template: `%s · ${company.name}`,
  },
  description:
    "ISO 9001:2015 certified EPC contractor for cathodic protection. Design, supply, installation, testing, commissioning, monitoring and maintenance of CP systems for underground hydrocarbon pipelines, vessels, tanks and LPG storage bullets across India.",
  keywords: [
    "cathodic protection",
    "corrosion prevention",
    "ICCP system",
    "sacrificial anode",
    "pipeline cathodic protection India",
    "CP monitoring",
    "DCVG survey",
    "close interval potential survey",
    "thermit welding",
    "pin brazing",
    "Kolkata cathodic protection contractor",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: company.url,
    siteName: company.name,
    title: `${company.name} | Expert in Cathodic Protection Systems`,
    description:
      "ISO 9001:2015 certified EPC contractor for cathodic protection of underground hydrocarbon pipelines, vessels, tanks and LPG storage bullets.",
    images: [{ url: "/images/scenes/refinery.png", width: 1079, height: 459 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Expert in Cathodic Protection Systems`,
    description:
      "ISO 9001:2015 certified EPC contractor for cathodic protection systems across India.",
    images: ["/images/scenes/refinery.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, address: true, email: false },
};

export const viewport: Viewport = {
  themeColor: "#42372a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  url: company.url,
  logo: `${company.url}/images/brand/aj-logo.jpg`,
  image: `${company.url}/images/scenes/refinery.png`,
  description:
    "ISO 9001:2015 certified EPC contractor for cathodic protection systems for underground hydrocarbon pipelines, vessels, tanks and LPG storage bullets.",
  foundingDate: "2023-09-21",
  founder: { "@type": "Person", name: company.proprietor },
  telephone: company.phone,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone,
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["en", "hi", "bn"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.postalCode,
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Cathodic protection",
    "Impressed current cathodic protection",
    "Sacrificial anode systems",
    "Pipeline corrosion control",
    "DCVG survey",
    "Close interval potential survey",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body
        className={`${archivo.variable} ${inter.variable} ${plexMono.variable} antialiased`}
      >
        {/* The hero poster is the largest contentful paint on the homepage. */}
        <link rel="preload" as="image" href="/video/hero-poster.jpg" fetchPriority="high" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-bark focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
