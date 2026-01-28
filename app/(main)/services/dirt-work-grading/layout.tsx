import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professional Dirt Work & Grading Services | Taylor's Lawn Care",
    description: "Expert dirt work and grading services in Northeast Arkansas. 25+ years heavy equipment experience for precise grading, site preparation, and excavation. Free estimates!",
    keywords: [
        "dirt work Arkansas", "grading services", "excavation", "site preparation",
        "heavy equipment", "Paragould grading", "Jonesboro dirt work",
        "land grading", "earthmoving", "Northeast Arkansas excavation"
    ].join(", "),
    alternates: {
        canonical: '/services/dirt-work-grading',
    },
    openGraph: {
        type: 'website',
        title: "Professional Dirt Work & Grading | Taylor's Lawn Care",
        description: "Precise grading and earthmoving solutions for your property.",
        images: ['/dirt.jpg'],
    },
};

export default function DirtWorkGradingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}