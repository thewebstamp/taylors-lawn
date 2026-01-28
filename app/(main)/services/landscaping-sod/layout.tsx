import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Landscaping & Sod Installation | Professional Landscape Design | Taylor's Lawn Care",
    description: "Complete landscape design & sod installation in Northeast Arkansas. 25+ years experience transforming yards. Free design consultation!",
    keywords: [
        "landscaping Paragould", "sod installation Jonesboro", "landscape design Arkansas",
        "yard transformation", "outdoor living spaces", "garden beds", "premium sod",
        "professional landscaping", "curb appeal", "Northeast Arkansas landscaping"
    ].join(", "),
    alternates: {
        canonical: '/services/landscaping-sod',
    },
    openGraph: {
        type: 'website',
        title: "Landscaping & Sod Installation | Taylor's Lawn Care",
        description: "Transform your yard with professional landscape design and premium sod installation.",
        images: ['/sod.jpg'],
    },
};

export default function LandscapingSodLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}