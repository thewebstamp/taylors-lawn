import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professional Services | Taylor's Lawn Care & Landscaping",
    description: "Complete outdoor solutions for Northeast Arkansas: drainage, landscaping, lawn care, fencing, and more. 25+ years experience. Free estimates!",
    keywords: [
        "lawn services", "landscaping services", "drainage solutions", "fencing installation",
        "sprinkler systems", "tree trimming", "holiday lighting", "seasonal cleanup",
        "Paragould", "Jonesboro", "Northeast Arkansas", "professional lawn care"
    ].join(", "),
    alternates: {
        canonical: '/services',
    },
    openGraph: {
        type: 'website',
        title: "Outdoor Services | Taylor's Lawn Care",
        description: "Professional landscaping and outdoor maintenance services for Northeast Arkansas.",
        images: ['/hero.jpg'],
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}