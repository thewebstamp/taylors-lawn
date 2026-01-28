import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professional Privacy Fence Installation | Taylor's Lawn Care",
    description: "Expert privacy fence installation in Northeast Arkansas. 25+ years experience with quality materials, expert installation, and 1-year guarantee on workmanship. Free estimates!",
    keywords: [
        "privacy fence Arkansas", "fence installation", "wood fencing", "vinyl fencing",
        "fence contractors", "Paragould fencing", "Jonesboro fence installation",
        "privacy fence installation", "backyard fencing", "Northeast Arkansas fence contractors"
    ].join(", "),
    alternates: {
        canonical: '/services/privacy-fencing',
    },
    openGraph: {
        type: 'website',
        title: "Professional Privacy Fencing | Taylor's Lawn Care",
        description: "Quality privacy fence installation for security and beauty.",
        images: ['/fence.jpg'],
    },
};

export default function PrivacyFencingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}