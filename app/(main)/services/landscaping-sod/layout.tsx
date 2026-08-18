import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Landscaping & Sod Installation in Northeast Arkansas | Taylor's Lawn Care",
    description: "Professional landscaping and sod installation serving Paragould, Jonesboro & Northeast Arkansas. Custom landscape design, garden beds, outdoor living spaces & sod installation. 25+ years experience. Free estimates — call (870) 530-4289!",
    keywords: [
        "landscaping Paragould AR", "sod installation Jonesboro AR", "landscape design Northeast Arkansas",
        "yard transformation Arkansas", "outdoor living spaces Paragould", "garden bed installation",
        "premium sod installation", "professional landscaping Arkansas", "curb appeal landscaping",
        "sod company near me", "landscape contractor Arkansas", "landscaping company Jonesboro",
        "sod installation near me", "lawn transformation", "backyard landscaping Arkansas"
    ].join(", "),
    alternates: {
        canonical: '/services/landscaping-sod',
    },
    openGraph: {
        type: 'website',
        title: "Landscaping & Sod Installation | Taylor's Lawn Care Northeast Arkansas",
        description: "Transform your yard with professional landscape design and premium sod installation. Serving Paragould, Jonesboro & Northeast Arkansas. Free estimates!",
        images: ['/nls1.jpeg'],
    },
};

export default function LandscapingSodLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
