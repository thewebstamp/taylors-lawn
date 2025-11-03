import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Josefin_Sans, Poetsen_One } from 'next/font/google';
import './globals.css';

// Optimized font loading with next/font
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const poetsenOne = Poetsen_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Taylor's Lawn Care & Landscaping | Northeast Arkansas Landscaping & Drainage Experts",
    template: "%s | Taylor's Lawn Care"
  },
  description: "25+ years experience in drainage solutions, landscaping, French drains, sod, sprinkler systems, and fencing. 98% recommended on Facebook. Free estimates! Emergency drainage help available.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
  },
  keywords: [
    "lawn care", "landscaping", "drainage solutions", "French drains", "sprinkler systems",
    "fencing", "Paragould", "Jonesboro", "Northeast Arkansas", "sod installation",
    "tree trimming", "holiday lighting", "emergency drainage", "landscape design",
    "yard drainage", "lawn maintenance", "outdoor lighting", "hardscaping"
  ].join(", "),
  authors: [{ name: "Billy Taylor", url: "https://taylorslawncare21.com" }],
  creator: "Taylor's Lawn Care & Landscaping LLC",
  publisher: "Taylor's Lawn Care & Landscaping LLC",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://taylorslawncare21.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://taylorslawncare21.com',
    siteName: "Taylor's Lawn Care & Landscaping LLC",
    title: "Taylor's Lawn Care & Landscaping | Northeast Arkansas Drainage Experts",
    description: "25+ years experience in drainage solutions, landscaping, French drains, and outdoor services. 98% recommended. Free estimates!",
    images: [
      {
        url: '/hero-new.jpg',
        width: 1200,
        height: 630,
        alt: "Taylor's Lawn Care & Landscaping - Professional Outdoor Services",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Taylor's Lawn Care & Landscaping | Drainage Experts",
    description: "25+ years experience in drainage solutions & landscaping. 98% recommended. Free estimates!",
    images: ['/hero-new.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  name: "Taylor's Lawn Care & Landscaping LLC",
  description: "Professional landscaping and drainage solutions serving Northeast Arkansas with 25+ years of experience.",
  url: 'https://taylorslawncare21.com',
  telephone: '+1-870-530-4289',
  email: 'taylorslawncare21@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5494 Highway 49',
    addressLocality: 'Paragould',
    addressRegion: 'AR',
    postalCode: '72450',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.057,
    longitude: -90.497
  },
  areaServed: [
    "Paragould AR", "Jonesboro AR", "Brookland AR", "Monette AR",
    "Bono AR", "Harrisburg AR", "Trumann AR", "Marmaduke AR",
    "Greene County AR", "Craighead County AR", "Poinsett County AR"
  ],
  serviceType: [
    'French Drain Installation',
    'Landscape Design',
    'Sod Installation',
    'Sprinkler System Installation',
    'Privacy Fencing',
    'Tree Trimming',
    'Drainage Solutions',
    'Holiday Lighting',
    'Snow Removal'
  ],
  openingHours: ['Mo-Sa 08:00-18:00'],
  priceRange: '$$',
  founder: {
    '@type': 'Person',
    name: 'Billy Taylor'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '158',
    bestRating: '5',
    worstRating: '1'
  },
  sameAs: [
    'https://www.facebook.com/TLCLAWN21'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${poetsenOne.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </body>
    </html>
  );
}