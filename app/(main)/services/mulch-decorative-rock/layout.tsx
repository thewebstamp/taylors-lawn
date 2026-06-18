// app/(main)/services/mulch-decorative-rock/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Mulch & Decorative Rock Installation | Taylor's Lawn Care",
    description: "Professional mulch and decorative rock installation in Northeast Arkansas. 25+ years experience with bed edging, erosion control, and mulch color refresh. Free estimates!",
    keywords: [
        "mulch installation Arkansas", "decorative rock installation", "landscape bed mulch",
        "rock landscaping", "mulch delivery Paragould", "Jonesboro mulch installation",
        "flower bed edging", "erosion control landscaping", "mulch color refresh", "Northeast Arkansas landscaping"
    ].join(", "),
    alternates: {
        canonical: '/services/mulch-decorative-rock',
    },
    openGraph: {
        type: 'website',
        title: "Mulch & Decorative Rock | Taylor's Lawn Care",
        description: "Lock in moisture and boost curb appeal with premium mulch and rock installation.",
        images: ['/1781740860830_1.jpg'],
    },
};

export default function MulchDecorativeRockLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
