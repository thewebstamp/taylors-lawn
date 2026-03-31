// components/affirm-financing-banner.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CreditCard } from 'lucide-react';

export function AffirmFinancingBanner() {
    return (
        <section className="relative w-full overflow-hidden bg-linear-to-br from-gray-900 via-green-800 to-gray-900 py-12 md:py-16 lg:py-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-20 -right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-22">
                <motion.div
                    className="bg-linear-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Left Side - Affirm Logo & Text */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                                <CreditCard className="h-8 w-8 text-green-400" />
                                <div className="relative h-8 w-24">
                                    <Image
                                        src="/affirm-logo.svg"
                                        alt="Affirm"
                                        fill
                                        className="object-contain brightness-0 invert"
                                    />
                                </div>
                            </div>

                            <h3 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white mb-3">
                                <span className='text-white'>Now Offering&nbsp;</span>
                                <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                    Affirm Financing
                                </span>
                            </h3>

                            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
                                Pay over time with flexible payment plans. Get the services you need today and pay at your own pace.
                            </p>

                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-4">
                                <div className="flex items-center gap-2 text-gray-400 text-sm lg:text-[16px]">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                                    <span>No hidden fees</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-sm lg:text-[16px]">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                                    <span>Simple checkout</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-sm lg:text-[16px]">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                                    <span>Instant approval</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}