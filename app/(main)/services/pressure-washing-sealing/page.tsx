/* eslint-disable react-hooks/purity */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { AffirmFinancingBanner } from '@/components/public/affirm-financing-banner';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Shield, Clock, ArrowRight, Calendar, ThumbsUp, Sparkles, Square, Home, Layers, Wind } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PressureWashingSealingPage() {
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
            title: 'Driveway Pressure Washing',
            description: 'Remove dirt, oil stains, and grime from concrete and asphalt driveways for an instant refresh.',
            icon: Sparkles,
            features: ['Concrete & Asphalt', 'Oil Stain Treatment', 'Professional Equipment', 'Same-Day Results'],
        },
        {
            title: 'Driveway Sealing',
            description: 'Protect your driveway from Arkansas summer heat, UV rays, and storm damage with quality sealant.',
            icon: Shield,
            features: ['UV & Weather Protection', 'Crack Prevention', 'Long-Lasting Finish', 'Enhanced Curb Appeal'],
        },
        {
            title: 'Patio & Walkway Cleaning',
            description: 'Remove algae, mildew, and slip hazards from patios, flagstone, and walkways.',
            icon: Square,
            features: ['Slip-Hazard Removal', 'Algae & Mold Treatment', 'Surface-Safe Cleaning', 'Restores Original Color'],
        },
        {
            title: 'House & Siding Washing',
            description: 'Safe, low-pressure soft-washing for vinyl, brick, and wood siding that lifts dirt without damage.',
            icon: Home,
            features: ['Soft-Wash Technology', 'Mold & Mildew Removal', 'Safe for All Siding', 'Boosts Curb Appeal'],
        },
        {
            title: 'Deck & Fence Cleaning',
            description: 'Remove dirt, mildew, and graying from wood or composite decks and fences.',
            icon: Layers,
            features: ['Wood & Composite Safe', 'Mildew Removal', 'Restores Natural Color', 'Prep for Staining'],
        },
        {
            title: 'Complete Property Wash Package',
            description: 'Driveway, patio, siding, and deck washing bundled together for a full property refresh.',
            icon: Wind,
            features: ['All Services Included', 'Priority Scheduling', 'Best Value', 'Complete Transformation'],
        }
    ];

    const areasServed = [
        'Paragould', 'Jonesboro', 'Brookland', 'Monette',
        'Bono', 'Harrisburg', 'Trumann', 'Marmaduke',
        'Greene County', 'Craighead County', 'Poinsett County'
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Pressure Washing & Driveway Sealing",
                        "url": "https://taylorslawncare21.com/services/pressure-washing-sealing",
                        "description": "Professional pressure washing and driveway sealing services in Northeast Arkansas including patio cleaning, house and siding washing, and deck and fence cleaning.",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Taylor's Lawn Care & Landscaping, LLC",
                            "url": "https://taylorslawncare21.com",
                            "telephone": "870-530-4289"
                        },
                        "areaServed": areasServed.map(area => {
                            if (area.includes('County')) {
                                return { "@type": "AdministrativeArea", "name": area };
                            } else {
                                return { "@type": "City", "name": area };
                            }
                        }),
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Pressure Washing & Sealing Services",
                            "itemListElement": services.map(service => ({
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": service.title,
                                    "description": service.description
                                }
                            }))
                        }
                    }),
                }}
            />

            <div className="min-h-screen bg-linear-to-br from-white to-sky-50/30">
                {/* Hero Section */}
                <section className="relative py-20 lg:pt-25 overflow-hidden min-h-screen flex justify-center items-center bg-linear-to-b from-slate-900 to-sky-700">
                    <div className="container mx-auto px-4 md:px-8 lg:px-22">
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
                                    <span className="text-yellow-400 block mb-2">Restore the Shine</span>
                                    <span className="text-white block">Professional Pressure Washing & Driveway Sealing</span>
                                </motion.h1>

                                {/* Subheadline */}
                                <motion.div
                                    className="text-xl md:text-2xl font-light text-gray-200 mb-8 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.7 }}
                                >
                                    <p>Wash away dirt, mold, and grime, then seal your driveway to protect it from Arkansas summer heat and storms.</p>
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
                                        className="group bg-linear-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl w-full md:w-auto relative overflow-hidden"
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
                                        className="group bg-linear-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl w-full md:w-auto"
                                    >
                                        <Calendar className="h-5 w-5" />
                                        <span className="text-center">
                                            <span className="block text-lg">FREE SURFACE ASSESSMENT</span>
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
                                        <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                                        <span>25+ Years Experience</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                                        <span>Professional Equipment</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                                        <span>Guaranteed Results</span>
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
                                            src="/1781740335628.jpg"
                                            alt="Professional pressure washing and driveway sealing"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-sky-900/20 to-transparent" />
                                    </motion.div>

                                    {/* Spray Droplet Animation */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                        {Array.from({ length: 14 }, (_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute text-xl"
                                                style={{
                                                    left: `${Math.random() * 100}%`,
                                                    top: '-1.5rem',
                                                }}
                                                animate={{
                                                    y: ['0vh', '100vh'],
                                                    x: [0, Math.random() * 20 - 10],
                                                    opacity: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 1.5 + Math.random() * 1.5,
                                                    repeat: Infinity,
                                                    delay: Math.random() * 2,
                                                }}
                                            >
                                                💧
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <AffirmFinancingBanner />

                {/* Common Problems Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-8 lg:px-22">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Common Surface Problems We Solve
                            </h2>
                            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Arkansas heat and humidity take a toll on exterior surfaces fast
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    problem: 'Dirty, Stained Driveways',
                                    description: 'Built-up dirt, tire marks, and grime make driveways look neglected.',
                                    icon: '🚗',
                                    urgency: 'COMMON',
                                    color: 'bg-gray-100 text-gray-800'
                                },
                                {
                                    problem: 'Mold & Mildew Growth',
                                    description: 'Humid summer conditions encourage mold and mildew on shaded surfaces.',
                                    icon: '🦠',
                                    urgency: 'HEALTH',
                                    color: 'bg-green-100 text-green-800'
                                },
                                {
                                    problem: 'Faded, Cracked Sealant',
                                    description: 'UV rays and summer heat break down old driveway sealant over time.',
                                    icon: '☀️',
                                    urgency: 'URGENT',
                                    color: 'bg-amber-100 text-amber-800'
                                },
                                {
                                    problem: 'Algae-Covered Walkways',
                                    description: 'Slick, slippery algae buildup on patios and walkways creates a fall hazard.',
                                    icon: '🌿',
                                    urgency: 'SLIP HAZARD',
                                    color: 'bg-teal-100 text-teal-800'
                                },
                                {
                                    problem: 'Grimy Siding & Walls',
                                    description: 'Dirt and pollen film build up on siding, dulling your home\u2019s curb appeal.',
                                    icon: '🏠',
                                    urgency: 'CURB APPEAL',
                                    color: 'bg-slate-100 text-slate-800'
                                },
                                {
                                    problem: 'Oil Stains & Rust Marks',
                                    description: 'Stubborn stains from vehicles and equipment that regular cleaning won\u2019t remove.',
                                    icon: '🛢️',
                                    urgency: 'STUBBORN',
                                    color: 'bg-orange-100 text-orange-800'
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
                                            className="text-sky-600 hover:text-sky-700 font-bold text-lg lg:text-xl flex items-center gap-3"
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
                <section className="py-20 bg-linear-to-b from-sky-50/50 to-white">
                    <div className="container mx-auto px-4 md:px-8 lg:px-22">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Professional Pressure Washing & Sealing Services
                            </h2>
                            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Complete exterior cleaning and protection for your property
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
                                            <div className="p-4 bg-sky-100 rounded-2xl">
                                                <service.icon className="h-8 w-8 text-sky-600" />
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
                                                    <CheckCircle className="h-5 w-5 text-sky-500 shrink-0" />
                                                    <span className="text-lg lg:text-xl">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
                                            <motion.a
                                                href="tel:870-530-4289"
                                                onClick={trackPhoneCall}
                                                className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-3 text-lg"
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
                <section className="py-20 bg-linear-to-br from-sky-50/50 to-slate-50/50">
                    <div className="container mx-auto px-4 md:px-8 lg:px-22">
                        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our Pressure Washing Excellence
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
                                    { label: 'Properties Washed', value: '600+', percent: 100 },
                                    { label: 'Customer Satisfaction', value: '99%', percent: 99 },
                                    { label: 'Sq Ft Cleaned Annually', value: '500K+ Sq Ft', percent: 100 }
                                ].map((stat, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-700 text-lg lg:text-[22px] font-semibold">{stat.label}</span>
                                            <span className="text-2xl font-bold text-sky-600">{stat.value}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-sky-600 h-2 rounded-full transition-all duration-1000"
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
                                        <span key={area} className="px-4 py-2 bg-sky-100 text-sky-800 text-base font-medium rounded-full">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="py-20 bg-linear-to-r from-sky-600/10 to-slate-600/10">
                    <div className="container mx-auto px-4 md:px-6 lg:px-22">
                        <motion.div
                            className="bg-linear-to-r from-slate-700 to-sky-700 rounded-3xl shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-12 text-white">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-white/20 rounded-2xl">
                                            <Sparkles className="h-8 w-8" />
                                        </div>
                                        <span className="text-xl font-bold uppercase tracking-widest">SUMMER SHINE SPECIAL</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                        Get Your Property Summer-Ready
                                    </h2>
                                    <p className="text-gray-50 text-[19.5px] lg:text-[23px] font-light mb-8 opacity-95 leading-relaxed">
                                        Wash away winter and spring grime before your summer entertaining season, then seal your driveway to protect it from the heat.
                                    </p>
                                    <div className="space-y-4 text-lg lg:text-xl">
                                        <div className="flex items-center gap-4">
                                            <Calendar className="h-6 w-6" />
                                            <span>Schedule your wash now</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Clock className="h-6 w-6" />
                                            <span>Limited summer appointments available</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Shield className="h-6 w-6" />
                                            <span>Protect your property investment</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-12 bg-white flex flex-col justify-center">
                                    <h3 className="text-[27px] font-bold text-gray-900 mb-8 text-center">Schedule Your Wash Today</h3>

                                    <div className="space-y-6">
                                        <motion.a
                                            href="tel:870-530-4289"
                                            onClick={trackPhoneCall}
                                            className="group bg-linear-to-r from-sky-700 to-sky-800 hover:from-sky-800 hover:to-sky-900 text-white font-bold py-4 px-8 rounded-xl text-[22px] transition-all duration-300 flex items-center justify-center gap-6 shadow-2xl hover:shadow-3xl relative overflow-hidden"
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
                                                <ThumbsUp className="h-6 w-6 text-sky-600" />
                                                <span>99% Recommended</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock className="h-6 w-6 text-slate-600" />
                                                <span>25+ Years Experience</span>
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
