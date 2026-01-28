/* eslint-disable @typescript-eslint/no-explicit-any */
// components/footer.tsx
'use client';

import { motion } from 'framer-motion';
import { Facebook, Phone, Mail, MapPin, ArrowUp, Star, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-bl from-gray-900 via-gray-800 to-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 lg:gap-8 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Company Info with Logo */}
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1 md:w-[67%] lg:w-full">
              <div className="mb-6">
                <div className="relative h-16 w-48 mb-4 mx-auto lg:mx-0">
                  <Image
                    src="/logo.png"
                    alt="Taylor's Lawn Care & Landscaping"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg text-center lg:text-left">
                  Northeast Arkansas&apos;s most trusted landscaping and drainage experts with 25+ years of experience transforming properties.
                </p>

                {/* Trust Badges */}
                <div className="space-y-1">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-green-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-semibold">98% Recommendation Rate</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-green-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-semibold">Emergency Services Available</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 justify-center lg:justify-start">
                <motion.a
                  href="https://web.facebook.com/TLCLAWN21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-blue-600 rounded-xl transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6"><span className="text-green-500">Quick Links</span></h4>
              <ul className="space-y-0 text-center lg:text-left">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Services', href: '/services' },
                  { name: 'Portfolio', href: '/gallery' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Contact', href: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <motion.div
                      className="text-gray-300 hover:text-green-400 transition-colors text-[17px] font-medium block py-2"
                      whileHover={{ x: 5 }}
                    >
                      <Link href={link.href}>
                        {link.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 text-center lg:text-left"><span className="text-green-500">Contact Us</span></h4>
              <div className="space-y-6 text-gray-300">
                <motion.a
                  href="tel:870-530-4289"
                  onClick={trackPhoneCall}
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-green-600 rounded-xl group-hover:bg-green-500 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-green-400 transition-colors">(870) 530-4289</p>
                    <p className="text-sm text-gray-400">Call us anytime</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:taylorslawncare21@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-green-600 rounded-xl group-hover:bg-green-500 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-green-400 transition-colors">Email Us</p>
                    <p className="text-sm text-gray-400">taylorslawncare21 @gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-start gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-green-600 rounded-xl group-hover:bg-green-500 transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-green-400 transition-colors">Service Area</p>
                    <p className="text-sm text-gray-400">
                      5494 Highway 49<br />
                      South Paragould, AR 72450<br />
                      <span className="text-green-400">Serving Northeast Arkansas</span>
                    </p>
                  </div>
                </motion.div>

                {/* Business Hours */}
                <div className="bg-white/5 rounded-xl text-center lg:text-left p-4 border border-white/10">
                  <p className="font-semibold text-green-400 mb-2">Business Hours</p>
                  <p className="text-sm">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-green-300">Emergency services available</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-lg">
                © {currentYear} Taylor&apos;s Lawn Care & Landscaping LLC. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Proudly serving Northeast Arkansas for over 25 years
              </p>
            </div>
            <div className="flex items-center gap-4">
              <motion.button
                onClick={scrollToTop}
                className="bg-green-600 hover:bg-green-500 text-white p-3 rounded-xl transition-colors flex items-center gap-2 group/scroll"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="h-4 w-4 group-hover/scroll:-translate-y-1 transition-transform" />
                <span className="text-sm font-semibold">Back to Top</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}