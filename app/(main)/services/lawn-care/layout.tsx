import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professional Lawn Care Services | Fertilization & Maintenance | Taylor's Lawn Care",
    description: "Expert lawn care services in Northeast Arkansas. 25+ years experience with fertilization, weed control, aeration, and seasonal lawn maintenance. Free estimates!",
    keywords: [
        "lawn care Arkansas", "lawn fertilization", "weed control", "lawn aeration",
        "lawn maintenance", "Paragould lawn care", "Jonesboro lawn care",
        "professional lawn care", "lawn treatment", "Northeast Arkansas lawn care"
    ].join(", "),
    alternates: {
        canonical: '/services/lawn-care',
    },
    openGraph: {
        type: 'website',
        title: "Professional Lawn Care Services | Taylor's Lawn Care",
        description: "Keep your lawn healthy and vibrant year-round with our expert lawn care services.",
        images: ['/hero.jpg'],
    },
};

export default function ProfessionalLawnCareLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}