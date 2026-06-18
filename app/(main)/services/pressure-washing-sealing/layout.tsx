// app/(main)/services/pressure-washing-sealing/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Pressure Washing & Driveway Sealing | Taylor's Lawn Care",
    description: "Professional pressure washing and driveway sealing in Northeast Arkansas. 25+ years experience cleaning driveways, patios, siding, and decks, plus sealant protection. Free estimates!",
    keywords: [
        "pressure washing Arkansas", "driveway sealing", "house washing Paragould",
        "patio cleaning Jonesboro", "soft washing siding", "driveway cleaning service",
        "deck and fence cleaning", "concrete cleaning Northeast Arkansas", "exterior power washing", "driveway sealant"
    ].join(", "),
    alternates: {
        canonical: '/services/pressure-washing-sealing',
    },
    openGraph: {
        type: 'website',
        title: "Pressure Washing & Sealing | Taylor's Lawn Care",
        description: "Restore your driveway, patio, and siding, then seal for lasting protection.",
        images: ['/1781740335628.jpg'],
    },
};

export default function PressureWashingSealingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
