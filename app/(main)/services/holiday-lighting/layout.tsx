import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professional Holiday Lighting Installation | Taylor's Lawn Care",
    description: "Expert holiday light installation in Northeast Arkansas. Professional design, installation, and removal starting at $2.50/ft. Create magical holiday displays without the hassle. Free estimates!",
    keywords: [
        "holiday lighting Arkansas", "Christmas light installation", "holiday decorations",
        "professional light hanging", "Paragould Christmas lights", "Jonesboro holiday lighting",
        "holiday light installation", "Christmas decorations", "Northeast Arkansas holiday lighting"
    ].join(", "),
    alternates: {
        canonical: '/services/holiday-lighting',
    },
    openGraph: {
        type: 'website',
        title: "Professional Holiday Lighting | Taylor's Lawn Care",
        description: "Magical holiday displays without the hassle of installation.",
        images: ['/holiday.jpg'],
    },
};

export default function HolidayLightingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}