import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Drainage Solutions | French Drains & Water Management | Taylor's Lawn Care",
    description: "Expert drainage solutions in Northeast Arkansas. 25+ years experience with French drains, surface drainage, emergency flood relief. Free estimates & lifetime warranty!",
    keywords: [
        "drainage solutions", "French drains Arkansas", "yard drainage", "basement flooding",
        "water drainage", "surface drainage", "emergency drainage", "Paragould drainage",
        "Jonesboro drainage", "Northeast Arkansas drainage", "flood prevention"
    ].join(", "),
    alternates: {
        canonical: '/services/drainage-solution',
    },
    openGraph: {
        type: 'website',
        title: "Professional Drainage Solutions | Taylor's Lawn Care",
        description: "Stop water damage with our expert drainage solutions. French drains, emergency flood relief, and lifetime warranty.",
        images: ['/drainage.jpg'],
    },
};

export default function DrainageSolutionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}