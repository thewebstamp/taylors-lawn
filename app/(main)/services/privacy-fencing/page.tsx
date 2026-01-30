/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Phone, Shield, Clock, ArrowRight, Calendar, Zap, ThumbsUp, Fence, Home, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyFencingPage() {
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
            title: 'Wood Privacy Fences',
            description: 'Classic wood privacy fences with various styles and stain options.',
            icon: Fence,
            features: ['Pressure-treated wood', 'Various styles', 'Custom heights', 'Professional staining'],
        },
        {
            title: 'Vinyl Privacy Fencing',
            description: 'Low-maintenance vinyl fencing that stays beautiful for years.',
            icon: Home,
            features: ['No painting required', 'Weather resistant', 'Various colors', 'Long warranty'],
        },
        {
            title: 'Custom Gate Installation',
            description: 'Matching gates with proper hardware and smooth operation.',
            icon: Lock,
            features: ['Matching design', 'Quality hardware', 'Smooth operation', 'Lock options'],
        },
        {
            title: 'Fence Repair & Maintenance',
            description: 'Professional repair of damaged fences and maintenance services.',
            icon: Shield,
            features: ['Post replacement', 'Board repair', 'Gate adjustment', 'Stain/seal application'],
        },
        {
            title: 'Complete Fence Replacement',
            description: 'Remove old fence and install new, high-quality privacy fencing.',
            icon: Zap,
            features: ['Old fence removal', 'Site preparation', 'Quality installation', 'Cleanup included'],
        },
        {
            title: 'Pool & Security Fencing',
            description: 'Specialized fencing for pools and enhanced security needs.',
            icon: Shield,
            features: ['Code compliance', 'Security features', 'Child safety', 'Durability'],
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
                        "name": "Privacy Fence Installation & Repair Services",
                        "url": "https://taylorslawncare21.com/services/privacy-fencing",
                        "description":
                            "Professional privacy fencing services in Northeast Arkansas including wood and vinyl fence installation, custom gates, fence repair, and complete fence replacement.",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Taylor's Lawn Care & Landscaping, LLC",
                            "url": "https://taylorslawncare21.com",
                            "telephone": "870-530-4289"
                        },
                        "areaServed": [
                            { "@type": "City", "name": "Paragould" },
                            { "@type": "City", "name": "Jonesboro" },
                            { "@type": "City", "name": "Brookland" },
                            { "@type": "City", "name": "Monette" },
                            { "@type": "AdministrativeArea", "name": "Northeast Arkansas" }
                        ],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Privacy Fencing Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Wood Privacy Fence Installation"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Vinyl Privacy Fence Installation"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Custom Gate Installation"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Fence Repair & Maintenance"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Complete Fence Replacement"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Pool & Security Fencing"
                                    }
                                }
                            ]
                        }
                    }),
                }}
            />


            <div className="min-h-screen bg-linear-to-br from-white to-purple-50/30">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-25 overflow-hidden min-h-screen flex justify-center items-center bg-linear-to-b from-purple-900 to-purple-700">
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
                                    <span className="text-yellow-400 block mb-2">Privacy & Security</span>
                                    <span className="text-white block">Professional Fence Installation</span>
                                </motion.h1>

                                {/* Subheadline */}
                                <motion.div
                                    className="text-xl md:text-2xl font-light text-gray-200 mb-8 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.7 }}
                                >
                                    <p>Create your private outdoor oasis with quality fencing that lasts.</p>
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
                                        className="group bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl w-full md:w-auto relative overflow-hidden"
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
                                            <span className="block text-lg">FREE FENCE ESTIMATE</span>
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
                                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                                        <span>25+ Years Experience</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                                        <span>Quality Materials</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                                        <span>1-Year Guarantee</span>
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
                                    {/* {fenceImages.map((img, index) => ( */}
                                    <motion.div
                                        className="absolute inset-0"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    >
                                        <Image
                                            src="/fence.jpg"
                                            alt="Professional fence installation"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-purple-900/20 to-transparent" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Common Fencing Problems Section */}
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
                                Common Fencing Problems
                            </h2>
                            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Don&apos;t let fencing issues compromise your privacy and security
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    problem: 'Old, Rotted Fence',
                                    description: 'Decaying wood posts and boards compromising security.',
                                    icon: '🪵',
                                    urgency: 'REPLACEMENT',
                                    color: 'bg-brown-100 text-brown-800'
                                },
                                {
                                    problem: 'Leaning or Falling Fence',
                                    description: 'Improper installation or soil issues causing instability.',
                                    icon: '↘️',
                                    urgency: 'SAFETY',
                                    color: 'bg-red-100 text-red-800'
                                },
                                {
                                    problem: 'No Privacy',
                                    description: 'Inadequate fencing allowing neighbors to see into your yard.',
                                    icon: '👀',
                                    urgency: 'PRIVACY',
                                    color: 'bg-purple-100 text-purple-800'
                                },
                                {
                                    problem: 'Damaged by Storms',
                                    description: 'Wind or fallen trees damaging your fence structure.',
                                    icon: '🌪️',
                                    urgency: 'REPAIR',
                                    color: 'bg-blue-100 text-blue-800'
                                },
                                {
                                    problem: 'Poor Quality Installation',
                                    description: 'Crooked posts, uneven boards, and sagging gates.',
                                    icon: '📏',
                                    urgency: 'QUALITY',
                                    color: 'bg-gray-100 text-gray-800'
                                },
                                {
                                    problem: 'Pet or Child Safety',
                                    description: 'Inadequate fencing for pet containment or child safety.',
                                    icon: '🐕',
                                    urgency: 'SECURITY',
                                    color: 'bg-green-100 text-green-800'
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
                                            className="text-purple-600 hover:text-purple-700 font-bold text-lg lg:text-xl flex items-center gap-3"
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
                <section className="py-20 bg-linear-to-b from-purple-50/50 to-white">
                    <div className="container mx-auto px-4 md:px-8 lg:px-12">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Professional Fencing Services
                            </h2>
                            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Quality installation for lasting privacy and security
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
                                            <div className="p-4 bg-purple-100 rounded-2xl">
                                                <service.icon className="h-8 w-8 text-purple-600" />
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
                                                    <CheckCircle className="h-5 w-5 text-purple-500 shrink-0" />
                                                    <span className="text-lg lg:text-xl">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
                                            <motion.a
                                                href="tel:870-530-4289"
                                                onClick={trackPhoneCall}
                                                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-3 text-lg"
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
                <section className="py-20 bg-linear-to-br from-purple-50/50 to-pink-50/50">
                    <div className="container mx-auto px-4 md:px-8 lg:px-12">
                        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our Fencing Excellence
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
                                    { label: 'Fences Installed', value: '500+', percent: 100 },
                                    { label: 'Customer Satisfaction', value: '99%', percent: 99 },
                                    { label: 'Workmanship Guarantee', value: '1 Year', percent: 100 }
                                ].map((stat, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-700 text-lg lg:text-[22px] font-semibold">{stat.label}</span>
                                            <span className="text-2xl font-bold text-purple-600">{stat.value}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-purple-600 h-2 rounded-full transition-all duration-1000"
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
                                        <span key={area} className="px-4 py-2 bg-purple-100 text-purple-800 text-base font-medium rounded-full">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="py-20 bg-linear-to-r from-purple-600/10 to-pink-600/10">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <motion.div
                            className="bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-12 text-white">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-white/20 rounded-2xl">
                                            <Fence className="h-8 w-8" />
                                        </div>
                                        <span className="text-xl font-bold uppercase tracking-widest">SPRING INSTALLATION SPECIAL</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                        Perfect Time for Fence Installation
                                    </h2>
                                    <p className="text-gray-50 text-[19.5px] lg:text-[23px] font-light mb-8 opacity-95 leading-relaxed">
                                        Spring weather provides ideal conditions for fence installation and soil settling.
                                    </p>
                                    <div className="space-y-4 text-lg lg:text-xl">
                                        <div className="flex items-center gap-4">
                                            <Calendar className="h-6 w-6" />
                                            <span>Book now for spring installation</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Clock className="h-6 w-6" />
                                            <span>Early bookings get priority scheduling</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Shield className="h-6 w-6" />
                                            <span>Enjoy your private yard all summer long</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-12 bg-white flex flex-col justify-center">
                                    <h3 className="text-[27px] font-bold text-gray-900 mb-8 text-center">Get Your Free Fence Estimate</h3>

                                    <div className="space-y-6">
                                        <motion.a
                                            href="tel:870-530-4289"
                                            onClick={trackPhoneCall}
                                            className="group bg-linear-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white font-bold py-4 px-8 rounded-xl text-[22px] transition-all duration-300 flex items-center justify-center gap-6 shadow-2xl hover:shadow-3xl relative overflow-hidden"
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
                                                <ThumbsUp className="h-6 w-6 text-purple-600" />
                                                <span>99% Recommended</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock className="h-6 w-6 text-pink-600" />
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