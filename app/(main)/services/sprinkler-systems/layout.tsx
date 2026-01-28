import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professional Sprinkler System Installation & Repair | Taylor's Lawn Care",
    description: "Expert sprinkler system installation and repair in Northeast Arkansas. 25+ years experience with smart irrigation systems, maintenance plans, and water-efficient solutions. Free estimates!",
    keywords: [
        "sprinkler system Arkansas", "irrigation installation", "sprinkler repair", "smart irrigation",
        "lawn watering systems", "Paragould sprinklers", "Jonesboro irrigation",
        "sprinkler system installation", "irrigation repair", "Northeast Arkansas sprinklers"
    ].join(", "),
    alternates: {
        canonical: '/services/sprinkler-systems',
    },
    openGraph: {
        type: 'website',
        title: "Professional Sprinkler Systems | Taylor's Lawn Care",
        description: "Efficient watering solutions for a healthy lawn with our expert sprinkler system services.",
        images: ['/sprinkler.jpg'],
    },
};

export default function SprinklerSystemsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}