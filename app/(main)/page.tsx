// app/(main)/page.tsx
'use client';

import { usePathname } from 'next/navigation';
import { ContactSection } from "@/components/public/contact-section";
import { FAQSection } from "@/components/public/faq-section";
import { HeroSection } from "@/components/public/hero-section";
import { PortfolioShowcase } from "@/components/public/portfolio-showcase";
import { ServicesShowcase } from "@/components/public/services-showcase";
import { TrustSection } from "@/components/public/trust-section";
import { useEffect } from 'react';

export default function HomePage() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll position when navigating to this page
    window.scrollTo(0, 0);

    // Force a re-layout to ensure proper scroll position
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, [pathname]);
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <TrustSection />
      <ServicesShowcase />
      <PortfolioShowcase />
      <FAQSection />
      <ContactSection />
    </main>
  );
}