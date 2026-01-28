import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professional Tree & Brush Cleanup Services | Taylor's Lawn Care",
    description: "Expert tree trimming, brush removal, and lot clearing in Northeast Arkansas. 25+ years experience with professional equipment and safety-first approach. Free estimates!",
    keywords: [
        "tree trimming Arkansas", "brush removal", "lot clearing", "tree service",
        "storm damage cleanup", "Paragould tree service", "Jonesboro brush removal",
        "tree cleanup", "property clearing", "Northeast Arkansas tree service"
    ].join(", "),
    alternates: {
        canonical: '/services/tree-brush-cleanup',
    },
    openGraph: {
        type: 'website',
        title: "Professional Tree & Brush Cleanup | Taylor's Lawn Care",
        description: "Safe and efficient tree and brush removal for your property.",
        images: ['/tree.jpg'],
    },
};

export default function TreeBrushCleanupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}