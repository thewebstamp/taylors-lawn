/* eslint-disable react-hooks/purity */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Phone, Shield, Clock, ArrowRight, Calendar, Zap, Truck, ThumbsUp, TreeDeciduous, Home, Sparkles, Star, Gift } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HolidayLightingPage() {
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

    const services = [
        {
            title: 'Roof Line Lighting',
            description: 'Professional installation of lights along roof edges and peaks.',
            icon: Sparkles,
            features: ['Secure clips', 'Even spacing', 'Proper power management', 'Weatherproof connections'],
        },
        {
            title: 'Tree & Shrub Lighting',
            description: 'Beautiful wrapping and draping of trees and shrubs with lights.',
            icon: TreeDeciduous,
            features: ['Proper wrapping techniques', 'LED efficiency', 'Color options', 'Balanced coverage'],
        },
        {
            title: 'Custom Light Displays',
            description: 'Unique designs including shapes, patterns, and special effects.',
            icon: Star,
            features: ['Custom design', 'Animation programming', 'Color coordination', 'Theme options'],
        },
        {
            title: 'Commercial Lighting',
            description: 'Large-scale lighting for businesses and commercial properties.',
            icon: Home,
            features: ['Business branding', 'Large area coverage', 'Professional appearance', 'Timed displays'],
        },
        {
            title: 'Complete Package Service',
            description: 'Design, installation, maintenance, and removal all included.',
            icon: Gift,
            features: ['Full service', 'Storage included', 'Year-round maintenance', 'Annual refresh'],
        },
        {
            title: 'Timed & Smart Lighting',
            description: 'Automated systems with timers and smart home integration.',
            icon: Zap,
            features: ['Timer programming', 'Smart controls', 'Energy efficiency', 'Remote operation'],
        }
    ];

    const areasServed = [
        'Paragould', 'Jonesboro', 'Brookland', 'Monette',
        'Bono', 'Harrisburg', 'Trumann', 'Marmaduke',
        'Greene County', 'Craighead County', 'Poinsett County'
    ];

    return (
        <>
            <div className="min-h-screen bg-linear-to-br from-white to-red-50/30">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-25 overflow-hidden min-h-screen flex justify-center items-center bg-linear-to-b from-red-900 to-green-700">
                    <div className="container mx-auto px-4 md:px-8 lg:px-12">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                            {/* Content Column */}
                            <motion.div
                                className="w-full lg:w-1/2 text-center lg:text-left"
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
                                    <span className="text-yellow-400 block mb-2">Magical Holiday Displays</span>
                                    <span className="text-white block">Professional Lighting Installation</span>
                                </motion.h1>

                                {/* Subheadline */}
                                <motion.div
                                    className="text-xl md:text-2xl font-light text-gray-200 mb-8 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.7 }}
                                >
                                    <p>Create stunning holiday displays without the ladder work and frustration.</p>
                                    <p>Starting at <span className='text-[22px] md:text-[26px] font-extrabold text-yellow-400'>$2.50/ft</span></p>
                                    <p><span className='text-[22px] md:text-[26px] font-extrabold text-yellow-400'>10% OFF</span> for Veterans, Military & First Responders <span className='text-[22px] md:text-[26px] font-extrabold text-yellow-400'>15% OFF</span> for Widows.</p>
                                </motion.div>

                                {/* Big CTA Buttons */}
                                <motion.div
                                    className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                >
                                    {/* Call Now Button */}
                                    <a
                                        href="tel:870-530-4289"
                                        onClick={trackPhoneCall}
                                        className="group bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl w-full md:w-auto relative overflow-hidden"
                                    >
                                        <Phone className="h-5 w-5" />
                                        <span className="text-center">
                                            <span className="block text-lg">CALL NOW</span>
                                            <span className="block text-sm opacity-90">(870) 530-4289</span>
                                        </span>
                                        <div className="w-2 h-2 bg-white rounded-full animate-ping absolute right-4"></div>
                                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    </a>

                                    {/* Or Divider */}
                                    <div className="text-white/70 font-semibold">OR</div>

                                    {/* Free Evaluation Button */}
                                    <Link
                                        href="/contact#form"
                                        className="group bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl w-full md:w-auto"
                                    >
                                        <Calendar className="h-5 w-5" />
                                        <span className="text-center">
                                            <span className="block text-lg">FREE DESIGN CONSULTATION</span>
                                            <span className="block text-sm opacity-90">Schedule Online</span>
                                        </span>
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>

                                {/* Trust Indicators */}
                                <motion.div
                                    className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 text-white/80 text-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                                        <span>Professional Installation</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                                        <span>Professional Design</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                                        <span>Install & Removal Included</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Image Column */}
                            <motion.div
                                className="w-full lg:w-1/2 relative order-first lg:order-last"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                {/* Image Carousel */}
                                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                    <motion.div
                                        className="absolute inset-0"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    >
                                        <Image
                                            src="/holiday.jpg"
                                            alt="Professional holiday lighting"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-red-900/20 to-transparent" />
                                    </motion.div>

                                    {/* Twinkling Lights Animation */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                        {Array.from({ length: 20 }, (_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                                                style={{
                                                    left: `${Math.random() * 100}%`,
                                                    top: `${Math.random() * 100}%`,
                                                }}
                                                animate={{
                                                    opacity: [0.3, 1, 0.3],
                                                    scale: [0.8, 1.2, 0.8],
                                                }}
                                                transition={{
                                                    duration: 1 + Math.random(),
                                                    repeat: Infinity,
                                                    delay: Math.random() * 2,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Common Lighting Problems Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-8 lg:px-12">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Common Holiday Lighting Problems
                            </h2>
                            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                DIY holiday lighting often leads to frustration and safety concerns
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    problem: 'Ladder Safety Concerns',
                                    description: 'Risk of falls and injuries during DIY installation.',
                                    icon: '🪜',
                                    urgency: 'SAFETY',
                                    color: 'bg-red-100 text-red-800'
                                },
                                {
                                    problem: 'Uneven or Sloppy Installation',
                                    description: 'Crooked lines, uneven spacing, and messy appearance.',
                                    icon: '📏',
                                    urgency: 'APPEARANCE',
                                    color: 'bg-orange-100 text-orange-800'
                                },
                                {
                                    problem: 'Electrical Issues',
                                    description: 'Overloaded circuits, shorts, and fire hazards.',
                                    icon: '⚡',
                                    urgency: 'DANGER',
                                    color: 'bg-yellow-100 text-yellow-800'
                                },
                                {
                                    problem: 'Weather Damage',
                                    description: 'Lights failing due to moisture and weather exposure.',
                                    icon: '🌧️',
                                    urgency: 'PROTECTION',
                                    color: 'bg-blue-100 text-blue-800'
                                },
                                {
                                    problem: 'Storage & Organization',
                                    description: 'Tangled lights and damaged during storage.',
                                    icon: '📦',
                                    urgency: 'MAINTENANCE',
                                    color: 'bg-gray-100 text-gray-800'
                                },
                                {
                                    problem: 'Time Consumption',
                                    description: 'Hours spent installing, troubleshooting, and taking down.',
                                    icon: '⏰',
                                    urgency: 'CONVENIENCE',
                                    color: 'bg-purple-100 text-purple-800'
                                }
                            ].map((problem, index) => (
                                <motion.div
                                    key={problem.problem}
                                    className="group bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="text-3xl lg:text-4xl">{problem.icon}</div>
                                        <div>
                                            <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${problem.color} mb-2`}>
                                                {problem.urgency}
                                            </span>
                                            <h3 className="text-2xl font-bold text-gray-900">{problem.problem}</h3>
                                        </div>
                                    </div>
                                    <p className="text-black text-xl md:text-[21px] lg:text-[23px] font-light mb-8 leading-relaxed">
                                        {problem.description}
                                    </p>
                                    <div className="pt-6 border-t border-gray-100">
                                        <a
                                            href="tel:870-530-4289"
                                            onClick={trackPhoneCall}
                                            className="text-red-600 hover:text-red-700 font-bold text-lg lg:text-xl flex items-center gap-3"
                                        >
                                            <Phone className="h-5 w-5" />
                                            <span>Get Professional Help →</span>
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Offered Section */}
                <section className="py-20 bg-linear-to-b from-red-50/50 to-white">
                    <div className="container mx-auto px-4 md:px-8 lg:px-12">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Professional Holiday Lighting Services
                            </h2>
                            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Complete solutions for stress-free holiday decorating
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    whileHover={{
                                        y: -8,
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                >
                                    {/* Header */}
                                    <div className="p-8 pb-4 border-b border-gray-100">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="p-4 bg-red-100 rounded-2xl">
                                                <service.icon className="h-8 w-8 text-red-600" />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                        <p className="text-black text-[19.5px] lg:text-[23px] font-light leading-relaxed">{service.description}</p>
                                    </div>

                                    {/* Features */}
                                    <div className="p-8 py-4">
                                        <div className="space-y-4 mb-6">
                                            {service.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center gap-4 text-gray-700">
                                                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0" />
                                                    <span className="text-lg lg:text-xl">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
                                            <motion.a
                                                href="tel:870-530-4289"
                                                onClick={trackPhoneCall}
                                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-3 text-lg"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Phone className="h-5 w-5" />
                                                Get Free Quote
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-20 bg-linear-to-br from-red-50/50 to-green-50/50">
                    <div className="container mx-auto px-4 md:px-8 lg:px-12">
                        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our Holiday Lighting Excellence
                        </h2>

                        {/* Stats Card */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-2xl p-8 lg:px-12 border max-w-4xl mx-auto border-gray-100"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="space-y-8">
                                {[
                                    { label: 'Homes Lit', value: '300+', percent: 100 },
                                    { label: 'Customer Satisfaction', value: '99%', percent: 99 },
                                    { label: 'Perfect Safety Record', value: '100%', percent: 100 }
                                ].map((stat, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-700 text-lg lg:text-[22px] font-semibold">{stat.label}</span>
                                            <span className="text-2xl font-bold text-red-600">{stat.value}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-red-600 h-2 rounded-full transition-all duration-1000"
                                                style={{ width: `${stat.percent}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Areas We Serve</h4>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    {areasServed.map((area) => (
                                        <span key={area} className="px-4 py-2 bg-red-100 text-red-800 text-base font-medium rounded-full">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Early Booking CTA Banner */}
                <section className="py-20 bg-linear-to-r from-red-600/10 to-green-600/10">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <motion.div
                            className="bg-linear-to-r from-red-600 to-green-600 rounded-3xl shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-12 text-white">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-white/20 rounded-2xl">
                                            <Calendar className="h-8 w-8" />
                                        </div>
                                        <span className="text-xl font-bold uppercase tracking-widest">⚠️ BOOKING ALERT</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                        Holiday Slots Fill Fast!
                                    </h2>
                                    <p className="text-gray-50 text-[19.5px] lg:text-[23px] font-light mb-8 opacity-95 leading-relaxed">
                                        Professional lighting installers book up months in advance. Don&apos;t wait until it&apos;s too late!
                                    </p>
                                    <div className="space-y-4 text-lg lg:text-xl">
                                        <div className="flex items-center gap-4">
                                            <Clock className="h-6 w-6" />
                                            <span>Book by October for guaranteed installation</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Truck className="h-6 w-6" />
                                            <span>Limited slots available for November/December</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Shield className="h-6 w-6" />
                                            <span>Early bookings get best installation dates</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-12 bg-white flex flex-col justify-center">
                                    <h3 className="text-[27px] font-bold text-gray-900 mb-8 text-center">Book Your Holiday Lighting Now</h3>

                                    <div className="space-y-6">
                                        <motion.a
                                            href="tel:870-530-4289"
                                            onClick={trackPhoneCall}
                                            className="group bg-linear-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold py-4 px-8 rounded-xl text-[22px] transition-all duration-300 flex items-center justify-center gap-6 shadow-2xl hover:shadow-3xl relative overflow-hidden"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Phone className="h-8 w-8" />
                                            <div className="text-left">
                                                <div className="font-bold">CALL</div>
                                                <div className="text-lg opacity-90">(870) 530-4289</div>
                                            </div>
                                            <div className="absolute right-8 w-3 h-3 bg-white rounded-full animate-ping"></div>
                                        </motion.a>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-gray-200">
                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-700 text-lg">
                                            <div className="flex items-center gap-3">
                                                <ThumbsUp className="h-6 w-6 text-red-600" />
                                                <span>99% Recommended</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock className="h-6 w-6 text-green-600" />
                                                <span>Professional Installation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}