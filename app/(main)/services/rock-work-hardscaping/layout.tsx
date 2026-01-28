import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professional Rock Work & Hardscaping | Taylor's Lawn Care",
    description: "Expert rock work and hardscaping in Northeast Arkansas. 25+ years experience with retaining walls, stone features, and hardscape to boost curb appeal. Free estimates!",
    keywords: [
        "rock work Arkansas", "hardscaping", "retaining walls", "stone features",
        "landscape rock", "Paragould hardscaping", "Jonesboro rock work",
        "stone installation", "outdoor living", "Northeast Arkansas hardscape"
    ].join(", "),
    alternates: {
        canonical: '/services/rock-work-hardscaping',
    },
    openGraph: {
        type: 'website',
        title: "Professional Rock Work & Hardscaping | Taylor's Lawn Care",
        description: "Beautiful stone features and hardscaping for your outdoor space.",
        images: ['/stone.jpg'],
    },
};

export default function RockWorkHardscapingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}