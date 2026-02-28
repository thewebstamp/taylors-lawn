/* eslint-disable react-hooks/purity */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Phone, Shield, Clock, ArrowRight, CloudRain, Calendar, Droplets, Gauge, Zap, Eye, Truck, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DrainageSolutionsPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % drainageImages.length);
        }, 7000);
        return () => clearInterval(interval);
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

    const drainageImages = [
        '/drainage001.jpg',
        '/drainage003.jpg',
        '/drainage002.jpg',
        '/drainage.jpg',
        '/drainage004.jpg',
    ];

    const services = [
        {
            title: 'French Drain Systems',
            description: 'Professional French drain installation to redirect water away from your property foundation and prevent basement flooding.',
            icon: Droplets,
            features: ['Underground piping', 'Gravel filtration', 'Proper slope calculation', 'Discharge to safe area'],
            emergency: true
        },
        {
            title: 'Surface Drainage',
            description: 'Channel drains, catch basins, and swales to manage surface water runoff during heavy rains.',
            icon: CloudRain,
            features: ['Catch basin installation', 'Channel drains', 'Swale construction', 'Grading adjustments'],
        },
        {
            title: 'Downspout & Gutter Drainage',
            description: 'Extend downspouts away from foundations and install underground piping to prevent water damage.',
            icon: Gauge,
            features: ['Downspout extensions', 'Underground piping', 'Splash block installation', 'Proper discharge'],
        },
        {
            title: 'Emergency Flood Relief',
            description: '24/7 emergency response for flooded yards, standing water, and urgent drainage issues.',
            icon: Zap,
            features: ['Same-day response', 'Water extraction', 'Temporary solutions', 'Emergency pumps'],
        },
        {
            title: 'Yard Grading & Regrading',
            description: 'Proper yard sloping and grading to ensure water flows away from your home naturally.',
            icon: Eye,
            features: ['Laser level grading', 'Soil compaction', 'Proper slope (2% minimum)', 'Erosion control'],
        },
        {
            title: 'Retaining Wall Drainage',
            description: 'Proper drainage behind retaining walls to prevent hydrostatic pressure buildup and failure.',
            icon: Shield,
            features: ['Weep hole installation', 'Gravel backfill', 'Filter fabric', 'Drainage pipes'],
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
                        "name": "Drainage Solutions",
                        "url": "https://taylorslawncare21.com/services/drainage-solution",
                        "description":
                            "Professional drainage solutions including French drains, yard grading, and emergency flood relief in Northeast Arkansas.",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Taylor's Lawn Care & Landscaping, LLC",
                            "url": "https://taylorslawncare21.com",
                            "telephone": "870-530-4289"
                        },
                        "areaServed": [
                            { "@type": "City", "name": "Paragould" },
                            { "@type": "City", "name": "Jonesboro" },
                            { "@type": "AdministrativeArea", "name": "Northeast Arkansas" }
                        ],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Drainage Services",
                            "itemListElement": [
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "French Drain Installation" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Surface Drainage Systems" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Flood Relief" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Yard Grading & Regrading" } }
                            ]
                        }
                    }),
                }}
            />


            <div className="min-h-screen bg-linear-to-br from-white to-blue-50/30">
                {/* Hero Section - Updated with new headline */}
                <section className="relative py-20 lg:pt-25 overflow-hidden min-h-screen flex justify-center items-center bg-linear-to-b from-blue-900 to-green-900">
                    <div className="container mx-auto px-4 md:px-8 lg:px-22">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                            {/* Content Column - Left side for desktop, full width for mobile */}
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
                                    <span className="text-yellow-400 block mb-2">Wet Season Is Coming</span>
                                    <span className="text-white block">Protect Your Property From Flooding</span>
                                </motion.h1>

                                {/* Subheadline */}
                                <motion.div
                                    className="text-xl md:text-2xl font-light text-gray-200 mb-8 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.7 }}
                                >
                                    <p>Don&apos;t wait for the next heavy rain to damage your home. Act now with proven drainage solutions.</p>
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
                                        className="group bg-linear-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl w-full md:w-auto relative overflow-hidden"
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
                                            <span className="block text-lg">FREE EVALUATION</span>
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
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                                        <span>25+ Years Experience</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                                        <span>Lifetime Warranty</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Image Column - Right side for desktop, bottom for mobile */}
                            <motion.div
                                className="w-full lg:w-1/2 relative order-first lg:order-last"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                {/* Image Carousel */}
                                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                    {drainageImages.map((img, index) => (
                                        <motion.div
                                            key={img}
                                            className="absolute inset-0"
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: index === currentImage ? 1 : 0,
                                            }}
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Professional drainage work ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                            />
                                            {/* Semi-transparent overlay for better contrast */}
                                            <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent" />
                                        </motion.div>
                                    ))}

                                    {/* Animated Rain Drops on Image */}
                                    {isMounted && (
                                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                            {Array.from({ length: 15 }, (_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-0.5 h-8 bg-blue-400/40 rounded-full"
                                                    style={{
                                                        left: `${Math.random() * 100}%`,
                                                        top: '-2rem',
                                                    }}
                                                    animate={{
                                                        y: ['0vh', '100vh'],
                                                        opacity: [0, 1, 0],
                                                    }}
                                                    transition={{
                                                        duration: 1 + Math.random() * 2,
                                                        repeat: Infinity,
                                                        delay: Math.random() * 2,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {/* Carousel Controls */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                                        {drainageImages.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImage(index)}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-green-400 scale-125' : 'bg-white/70 hover:bg-white'}`}
                                                aria-label={`View image ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Major/Common Drainage Problems Section */}
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
                                Major Drainage Problems You&apos;ll Face This Season
                            </h2>
                            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Arkansas wet seasons bring specific challenges. Here&apos;s what to watch for:
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    problem: 'Basement Flooding',
                                    description: 'Heavy rains overwhelm inadequate drainage, leading to costly water damage.',
                                    icon: '🏠',
                                    urgency: 'EMERGENCY',
                                    color: 'bg-red-100 text-red-800'
                                },
                                {
                                    problem: 'Foundation Erosion',
                                    description: 'Water pooling around your foundation causes soil erosion and structural damage.',
                                    icon: '⚠️',
                                    urgency: 'HIGH PRIORITY',
                                    color: 'bg-orange-100 text-orange-800'
                                },
                                {
                                    problem: 'Standing Water in Yard',
                                    description: 'Poor grading creates ponds in your lawn, killing grass and attracting mosquitoes.',
                                    icon: '💧',
                                    urgency: 'URGENT',
                                    color: 'bg-blue-100 text-blue-800'
                                },
                                {
                                    problem: 'Muddy & Soggy Lawns',
                                    description: 'Saturated soil creates walking hazards and ruins landscaping investments.',
                                    icon: '🌱',
                                    urgency: 'SEASONAL',
                                    color: 'bg-green-100 text-green-800'
                                },
                                {
                                    problem: 'Driveway & Walkway Damage',
                                    description: 'Water runoff erodes pavement and creates safety hazards.',
                                    icon: '🛤️',
                                    urgency: 'HIGH PRIORITY',
                                    color: 'bg-purple-100 text-purple-800'
                                },
                                {
                                    problem: 'Downspout Overload',
                                    description: 'Gutters overflow, pouring water directly against your home\'s foundation.',
                                    icon: '🌧️',
                                    urgency: 'URGENT',
                                    color: 'bg-cyan-100 text-cyan-800'
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
                                            className="text-green-600 hover:text-green-700 font-bold text-lg lg:text-xl flex items-center gap-3"
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
                <section className="py-20 bg-linear-to-b from-blue-50/50 to-white">
                    <div className="container mx-auto px-4 md:px-8 lg:px-22">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Professional Drainage Solutions
                            </h2>
                            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Comprehensive solutions tailored to your specific drainage needs
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
                                            <div className="p-4 bg-green-100 rounded-2xl">
                                                <service.icon className="h-8 w-8 text-green-600" />
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
                                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                                    <span className="text-lg lg:text-xl">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Price & CTA */}
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
                                            <motion.a
                                                href="tel:870-530-4289"
                                                onClick={trackPhoneCall}
                                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-3 text-lg"
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
                <section className="py-20 bg-linear-to-br from-green-50/50 to-blue-50/50">
                    <div className="container mx-auto px-4 md:px-8 lg:px-22">
                        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our Drainage Track Record
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
                                    { label: 'French Drains Installed', value: '3,000+ ft', percent: 100 },
                                    { label: 'Customer Satisfaction', value: '98%', percent: 98 },
                                    { label: 'Projects On Time', value: '95%', percent: 99 }
                                ].map((stat, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-700 text-lg lg:text-[22px] font-semibold">{stat.label}</span>
                                            <span className="text-2xl font-bold text-green-600">{stat.value}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-green-600 h-2 rounded-full transition-all duration-1000"
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
                                        <span key={area} className="px-4 py-2 bg-blue-100 text-blue-800 text-base font-medium rounded-full">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Emergency CTA Banner */}
                <section className="py-20 bg-linear-to-r from-red-600/10 to-orange-600/10">
                    <div className="container mx-auto px-4 md:px-6 lg:px-22">
                        <motion.div
                            className="bg-linear-to-r from-red-600 to-orange-600 rounded-3xl shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-12 text-white">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-white/20 rounded-2xl">
                                            <Zap className="h-8 w-8" />
                                        </div>
                                        <span className="text-xl font-bold uppercase tracking-widest">⚠️ EMERGENCY WARNING</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                        Don&apos;t Wait Until It&apos;s Too Late
                                    </h2>
                                    <p className="text-gray-50 text-[19.5px] lg:text-[23px] font-light mb-8 opacity-95 leading-relaxed">
                                        Every day you wait puts your property at greater risk. Water damage from poor drainage can cost tens of thousands to repair.
                                    </p>
                                    <div className="space-y-4 text-lg lg:text-xl">
                                        <div className="flex items-center gap-4">
                                            <Clock className="h-6 w-6" />
                                            <span>Next heavy rain could flood your basement</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Truck className="h-6 w-6" />
                                            <span>Emergency slots fill quickly during wet season</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Shield className="h-6 w-6" />
                                            <span>Prevention costs 90% less than repairs</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-12 bg-white flex flex-col justify-center">
                                    <h3 className="text-[27px] font-bold text-gray-900 mb-8 text-center">Act Now to Protect Your Home</h3>

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
                                                <ThumbsUp className="h-6 w-6 text-green-600" />
                                                <span>98% Recommended</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock className="h-6 w-6 text-blue-600" />
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