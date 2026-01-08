/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(main)/layout.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Sparkles, Home, Briefcase, Images, User, Mail } from 'lucide-react';
import { Footer } from '@/components/public/footer';
import Link from 'next/link';
import { PerformanceTracker } from '@/components/public/performance-tracker';

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: Home
  },
  {
    name: 'Services',
    href: '/services',
    icon: Briefcase
  },
  {
    name: 'Gallery',
    href: '/gallery',
    icon: Images
  },
  {
    name: 'About',
    href: '/about',
    icon: User
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Mail
  },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const trackPhoneCall = () => {
    if (typeof window !== 'undefined') {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'phone_call', {
          event_category: 'contact',
          event_label: '870-530-4289',
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Enhanced Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-forest-500/10 border-b border-forest-100'
          : 'bg-transparent'
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Enhanced Logo - FIXED: Using Link */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center space-x-4 group">
                <div className={`transition-colors duration-300 ${isScrolled ? 'text-forest-800' : 'text-gray-100'}`}>
                  <div className="font-display text-[20px] lg:text-[22px] font-bold leading-tight tracking-tight">
                    Taylor&apos;s Lawn Care
                  </div>
                  <div className="text-sm opacity-90 font-sans tracking-wide">
                    & Landscaping LLC
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Enhanced - FIXED: Using Link */}
            <div className="hidden lg:flex items-center">
              {/* Navigation Items Container */}
              <div className="flex items-center space-x-1">
                {navigation.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={i}
                      className="relative"
                      whileHover="hover"
                      initial="initial"
                    >
                      <Link
                        href={item.href}
                        className={`relative z-10 flex items-center gap-2 px-4 text-[17px] py-3 rounded-xl font-sans font-bold transition-all duration-300 focus-ring ${active
                          ? 'text-forest-600 bg-forest-50 shadow-md shadow-forest-500/10'
                          : isScrolled
                            ? 'text-forest-700 hover:text-forest-600 hover:bg-forest-50/50'
                            : 'text-white hover:text-forest-200 hover:bg-white/10'
                          }`}
                      >
                        <item.icon className={`h-4 w-4 transition-colors ${active ? 'text-forest-500' : ''}`} />
                        {item.name}

                        {active && (
                          <motion.div
                            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-forest-500 rounded-full"
                            layoutId="activeIndicator"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>

                      {/* Hover effect - FIXED: Lower z-index and pointer-events-none */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-linear-to-r from-forest-500/10 to-sky-500/10 opacity-0 pointer-events-none"
                        variants={{
                          initial: { opacity: 0 },
                          hover: { opacity: 1 }
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Enhanced CTA Button - Keep as <a> for tel: links - NOW SEPARATED */}
              <motion.div
                className="relative ml-4"
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href="tel:870-530-4289"
                  onClick={trackPhoneCall}
                  className="flex items-center gap-3 bg-linear-to-r from-forest-500 to-forest-600 text-white px-6 py-3 rounded-xl font-sans font-semibold shadow-lg shadow-forest-500/25 hover:shadow-forest-500/40 transition-all duration-300 focus-ring group"
                >
                  <Phone className="h-4 w-4" />
                  <span className='text-lg'>(870) 530-4289</span>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full pointer-events-none"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </a>
              </motion.div>
            </div>

            {/* Enhanced Mobile menu button */}
            <motion.button
              className={`lg:hidden p-3 rounded-xl transition-colors duration-300 focus-ring ${isScrolled
                ? 'text-forest-700 bg-forest-50 hover:bg-forest-100'
                : 'text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm'
                }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation - Full Screen - FIXED: Using Link */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 z-40 bg-forest-900 h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-forest-700/50 bg-forest-900">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-linear-to-br from-forest-400 to-forest-500 rounded-xl flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-display text-xl font-bold">Taylor&apos;s Lawn Care</div>
                      <div className="text-sm opacity-80">& Landscaping LLC</div>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-white/80 hover:text-white transition-colors bg-forest-800 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>

                {/* Navigation Items - FIXED: Using Link */}
                <div className="flex-1 flex flex-col justify-center px-6 space-y-4 bg-forest-900">
                  {navigation.map((item, index) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-4 p-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${active
                          ? 'bg-white/20 text-white shadow-lg shadow-forest-500/20 border border-forest-400/30'
                          : 'text-white/90 hover:text-white hover:bg-forest-800/80 border border-transparent hover:border-forest-700/50'
                          }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className={`h-5 w-5 ${active ? 'text-forest-300' : 'text-forest-400'}`} />
                        {item.name}
                        {active && (
                          <motion.div
                            className="ml-auto w-2 h-2 bg-forest-300 rounded-full"
                            layoutId="mobileActiveIndicator"
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile CTA - Keep as <a> for tel: links */}
                <div className="p-6 border-t border-forest-700/50 bg-forest-900">
                  <a
                    href="tel:870-530-4289"
                    className="flex items-center justify-center gap-3 bg-linear-to-r from-forest-400 to-forest-500 text-white w-full py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg shadow-forest-500/25 hover:shadow-forest-500/40 transition-all duration-300 border border-forest-400/30"
                    onClick={() => { setMobileMenuOpen(false); trackPhoneCall(); }}
                  >
                    <Phone className="h-5 w-5" />
                    Call Now: (870) 530-4289
                  </a>

                  <p className="text-center text-forest-300 text-sm mt-3">
                    Free Estimates • 24/7 Emergency Service
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Enhanced Floating Action Button - Keep as <a> for tel: links */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 lg:hidden border border-white/50 rounded-2xl"
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        <a
          href="tel:870-530-4289"
          onClick={trackPhoneCall}
          className="bg-linear-to-r from-forest-500 to-forest-600 text-white p-4 rounded-2xl shadow-2xl shadow-forest-500/30 hover:shadow-forest-500/40 transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
        >
          <Phone className="h-6 w-6 relative z-10" />

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 bg-forest-400 rounded-2xl"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full"
            whileHover={{ x: '200%' }}
            transition={{ duration: 0.8 }}
          />
        </a>
      </motion.div>
      <PerformanceTracker />
    </div>
  );
}