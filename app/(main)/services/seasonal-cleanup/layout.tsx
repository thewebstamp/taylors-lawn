import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professional Seasonal Cleanup Services | Taylor's Lawn Care",
    description: "Expert seasonal cleanup in Northeast Arkansas. Fall cleanups, leaf removal, winter preparation, and spring cleanup services. 25+ years experience with thorough service and seasonal expertise. Free estimates!",
    keywords: [
        "seasonal cleanup Arkansas", "leaf removal", "fall cleanup", "spring cleanup",
        "yard cleanup", "Paragould cleanup", "Jonesboro leaf removal",
        "property cleanup", "seasonal maintenance", "Northeast Arkansas yard cleanup"
    ].join(", "),
    alternates: {
        canonical: '/services/seasonal-cleanup',
    },
    openGraph: {
        type: 'website',
        title: "Professional Seasonal Cleanup | Taylor's Lawn Care",
        description: "Keep your property beautiful year-round with our seasonal cleanup services.",
        images: ['/clean.jpg'],
    },
};

export default function SeasonalCleanupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}