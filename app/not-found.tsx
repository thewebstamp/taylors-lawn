/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { Phone, Home, ArrowRight, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        // Optional: Track 404 errors in analytics
        if (typeof window !== 'undefined') {
            if ((window as any).gtag) {
                (window as any).gtag('event', 'page_not_found', {
                    event_category: 'error',
                    event_label: window.location.pathname,
                });
            }
        }
    }, []);

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
        <div className="min-h-screen bg-linear-to-br from-white to-green-50/30">
            {/* Hero Section - FIXED: Proper centering */}
            <section className="relative flex items-center py-25 lg:py-30 overflow-hidden min-h-screen bg-linear-to-b from-green-900 to-green-700">
                <div className="container mx-auto px-4 md:px-8 lg:px-12 h-full">
                    <div className="h-full flex items-center justify-center">
                        <div className="w-full max-w-4xl mx-auto">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Main Headline */}
                                <motion.h1
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    <span className="text-yellow-400 block mb-2">404 Error</span>
                                    <span className="text-white block">Page Not Found</span>
                                </motion.h1>

                                {/* Subheadline */}
                                <motion.div
                                    className="text-xl md:text-2xl font-light text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.7 }}
                                >
                                    <p>We couldn&apos;t find the page you were looking for.</p>
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div
                                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                >
                                    {/* Home Button */}
                                    <Link
                                        href="/"
                                        className="group bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl w-full md:w-auto"
                                    >
                                        <Home className="h-5 w-5" />
                                        <span>Back to Homepage</span>
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>

                                {/* Trust Indicators */}
                                <motion.div
                                    className="flex flex-wrap items-center justify-center gap-4 mt-8 text-white/80 text-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                                        <span>25+ Years Experience</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                                        <span>Serving Northeast Arkansas</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}