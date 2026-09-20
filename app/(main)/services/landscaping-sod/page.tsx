/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { AffirmFinancingBanner } from '@/components/public/affirm-financing-banner';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Shield, Clock, ArrowRight, Calendar, ThumbsUp, Sprout, Trees, Flower2, Layers, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandscapingSodPage() {
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
            title: 'Sod Installation',
            description: 'Professional sod installation to refresh your lawn and create a healthy, beautiful foundation heading into the cooler Fall season.',
            icon: Sprout,
            features: ['Soil testing & preparation', 'Premium sod varieties', 'Proper watering setup', 'Establishment care'],
        },
        {
            title: 'Landscape Design',
            description: 'Custom landscape design plans tailored to your property, creating an inviting outdoor space that looks beautiful through Fall and beyond.',
            icon: Layers,
            features: ['Site analysis', '3D design concepts', 'Plant selection', 'Hardscape integration'],
        },
        {
            title: 'Garden Beds & Planting',
            description: 'Beautiful garden beds and thoughtful plant selections designed to add seasonal color, texture, and curb appeal throughout Fall.',
            icon: Flower2,
            features: ['Soil amendment', 'Proper plant spacing', 'Mulch installation', 'Watering systems'],
        },
        {
            title: 'Outdoor Living Spaces',
            description: 'Create comfortable outdoor areas where you can enjoy the cooler Fall weather with patios, walkways, and functional gathering spaces.',
            icon: Trees,
            features: ['Patio design', 'Walkway installation', 'Lighting planning', 'Seating areas'],
        },
        {
            title: 'Seasonal Color Installations',
            description: 'Bring Fall color to your landscape with carefully selected annuals and perennials that complement the changing season.',
            icon: Flower2,
            features: ['Seasonal plant selection', 'Color coordination', 'Proper installation', 'Maintenance guidance'],
        },
        {
            title: 'Complete Landscape Renovation',
            description: 'Transform your outdoor space this Fall with a complete landscape renovation designed around your property and long-term goals.',
            icon: Layers,
            features: ['Full design service', 'Project management', 'Quality materials', 'Final walkthrough'],
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
                        "name": "Landscaping & Sod Installation Services",
                        "url": "https://taylorslawncare21.com/services/landscaping-sod",
                        "description":
                            "Professional landscaping and sod installation services in Northeast Arkansas. Custom landscape design, sod installation, garden beds, and complete outdoor renovations with 25+ years of experience.",
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
                            "name": "Landscaping & Sod Services",
                            "itemListElement": [
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sod Installation" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landscape Design" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garden Beds & Planting" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outdoor Living Spaces" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seasonal Color Installations" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Complete Landscape Renovation" } }
                            ]
                        }
                    }),
                }}
            />

            <div className="min-h-screen bg-linear-to-br from-white to-green-50/30">
                {/* Hero Section */}
                <section className="relative py-20 lg:pt-25 overflow-hidden min-h-screen flex justify-center items-center bg-linear-to-b from-green-900 to-green-700">
                    <div className="container mx-auto px-4 md:px-8 lg:px-22">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                            {/* Content Column */}
                            <motion.div
                                className="w-full lg:w-1/2 text-center lg:text-left"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Trust Badge */}
                                <motion.div
                                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-4"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                >
                                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                    <span className="text-white text-[13px] font-semibold">#1 LANDSCAPING COMPANY IN NORTHEAST ARKANSAS</span>
                                </motion.div>

                                {/* Main Headline */}
                                <motion.h1
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    <span className="text-yellow-400 block mb-2">🍂 Refresh Your Landscape This Fall</span>
                                    <span className="text-white block">Professional Landscaping & Sod Installation</span>
                                </motion.h1>

                                {/* Subheadline */}
                                <motion.div
                                    className="text-xl md:text-2xl font-light text-gray-200 mb-8 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.7 }}
                                >
                                    <p>Make the most of the cooler season with a beautiful, well-designed outdoor space you&apos;ll enjoy through Fall and beyond.</p>
                                    <p className="mt-2"><span className='text-[22px] md:text-[26px] font-extrabold text-yellow-400'>10% OFF</span> for Veterans, Military & First Responders <span className='text-[22px] md:text-[26px] font-extrabold text-yellow-400'>15% OFF</span> for Widows.</p>
                                </motion.div>

                                {/* Big CTA Buttons */}
                                <motion.div
                                    className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                >
                                    <a
                                        href="tel:870-530-4289"
                                        onClick={trackPhoneCall}
                                        className="group bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl w-full md:w-auto relative overflow-hidden"
                                    >
                                        <Phone className="h-5 w-5" />
                                        <span className="text-center">
                                            <span className="block text-lg">CALL NOW</span>
                                            <span className="block text-sm opacity-90">(870) 530-4289</span>
                                        </span>
                                        <div className="w-2 h-2 bg-white rounded-full animate-ping absolute right-4"></div>
                                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    </a>

                                    <div className="text-white/70 font-semibold">OR</div>

                                    <Link
                                        href="/contact#form"
                                        className="group bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl w-full md:w-auto"
                                    >
                                        <Calendar className="h-5 w-5" />
                                        <span className="text-center">
                                            <span className="block text-lg">FREE CONSULTATION</span>
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
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                                        <span>25+ Years Experience</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                                        <span>Premium Materials</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                                        <span>Custom Designs</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                                        <span>Free Estimates</span>
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
                                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                    <motion.div
                                        className="absolute inset-0"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    >
                                        <Image
                                            src="/sod.jpg"
                                            alt="Professional landscaping work in Northeast Arkansas"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-green-900/20 to-transparent" />
                                    </motion.div>

                                    {/* Floating stat badge */}
                                    <motion.div
                                        className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.2 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <div>
                                                <p className="text-gray-900 font-bold text-sm">500+ Projects</p>
                                                <p className="text-gray-500 text-xs">Completed in Arkansas</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <AffirmFinancingBanner />

                {/* ── PHOTO GALLERY ── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-8 lg:px-22">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-3">
                                <span className="text-sm font-semibold">OUR RECENT WORK</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Real Projects,
                                <span className="block text-green-600">Real Results</span>
                            </h2>
                            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-3xl mx-auto">
                                See how we create beautiful, functional outdoor spaces that homeowners can enjoy through every season
                            </p>
                        </motion.div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-[700px]">
                            {/* Large featured image — left */}
                            <motion.div
                                className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ scale: 1.01 }}
                            >
                                <div className="relative h-[340px] lg:h-full min-h-[340px]">
                                    <Image
                                        src="/nls1.jpeg"
                                        alt="Landscaping project by Taylor's Lawn Care"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                                    <div className="absolute bottom-5 left-5">
                                        <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Featured Project</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 2×2 grid — right */}
                            <div className="grid grid-cols-2 gap-4">
                                {['/nls2.jpeg', '/nls3.jpg', '/nls4.jpg', '/nls5.jpg'].map((src, index) => (
                                    <motion.div
                                        key={src}
                                        className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="relative h-[160px] lg:h-[168px]">
                                            <Image
                                                src={src}
                                                alt={`Landscaping project ${index + 2} by Taylor's Lawn Care`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Gallery CTA */}
                        <motion.div
                            className="text-center mt-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <a
                                href="tel:870-530-4289"
                                onClick={trackPhoneCall}
                                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <Phone className="h-5 w-5" />
                                <span>Get a Free Quote for Your Fall Project</span>
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Common Landscape Problems Section */}
                <section className="py-20 bg-gray-50/50">
                    <div className="container mx-auto px-4 md:px-8 lg:px-22">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Common Fall Landscape Challenges We Solve
                            </h2>
                            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                From tired lawns and overgrown beds to outdoor spaces that need a seasonal refresh — we have the solutions
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    problem: 'Patchy or Bare Lawn',
                                    description: 'Thin grass, bare spots, and uneven growth can make your property look tired. Fall is a great time to improve your lawn before winter.',
                                    icon: '🌱',
                                    urgency: 'FALL READY',
                                    color: 'bg-green-100 text-green-800'
                                },
                                {
                                    problem: 'Poor Yard Drainage',
                                    description: 'Fall rainfall and saturated soil can expose drainage problems, leaving water pooling around your lawn and landscape.',
                                    icon: '💧',
                                    urgency: 'IMPORTANT',
                                    color: 'bg-blue-100 text-blue-800'
                                },
                                {
                                    problem: 'Outdated Landscape',
                                    description: 'Overgrown plants and dated designs can take away from your home. Refresh your outdoor space before the season changes.',
                                    icon: '🏡',
                                    urgency: 'REFRESH',
                                    color: 'bg-amber-100 text-amber-900'
                                },
                                {
                                    problem: 'Soil Quality Issues',
                                    description: 'Compacted or poor soil can make it difficult for grass and plants to establish and stay healthy.',
                                    icon: '🌍',
                                    urgency: 'FOUNDATIONAL',
                                    color: 'bg-amber-100 text-amber-800'
                                },
                                {
                                    problem: 'Lack of Curb Appeal',
                                    description: 'A refreshed landscape can give your home a welcoming appearance throughout Fall and set the stage for the seasons ahead.',
                                    icon: '👀',
                                    urgency: 'REFRESH',
                                    color: 'bg-yellow-100 text-yellow-800'
                                },
                                {
                                    problem: 'Unusable Yard Space',
                                    description: 'Turn neglected outdoor areas into comfortable, functional spaces you can enjoy during the cooler Fall weather.',
                                    icon: '🪑',
                                    urgency: 'TRANSFORM',
                                    color: 'bg-teal-100 text-teal-800'
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
                                            <span>Refresh Your Space →</span>
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Offered Section */}
                <section className="py-20 bg-linear-to-b from-green-50/50 to-white">
                    <div className="container mx-auto px-4 md:px-8 lg:px-22">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Professional Landscaping Services
                            </h2>
                            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Fall landscaping solutions to refresh, improve, and prepare your outdoor space for the season ahead
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
                                    <div className="p-8 pb-4 border-b border-gray-100">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="p-4 bg-green-100 rounded-2xl">
                                                <service.icon className="h-8 w-8 text-green-600" />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                        <p className="text-black text-[19.5px] lg:text-[23px] font-light leading-relaxed">{service.description}</p>
                                    </div>

                                    <div className="p-8 py-4">
                                        <div className="space-y-4 mb-6">
                                            {service.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center gap-4 text-gray-700">
                                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                                    <span className="text-lg lg:text-xl">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

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

                {/* ── OUR WORK STRIP ── */}
                <section className="py-20 bg-gray-900">
                    <div className="container mx-auto px-4 md:px-8 lg:px-22">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                                More From Our Portfolio
                            </h2>
                            <p className="text-xl md:text-[22px] text-gray-400 max-w-3xl mx-auto">
                                Hundreds of satisfied homeowners across Northeast Arkansas
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {[
                                { src: '/nls6.jpg', label: 'Sod Installation' },
                                { src: '/nls7.jpg', label: 'Landscape Design' },
                                { src: '/nls8.jpg', label: 'Garden Beds' },
                                { src: '/nls9.jpg', label: 'Outdoor Living' },
                                { src: '/nls10.jpg', label: 'Full Renovation' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.src}
                                    className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer aspect-square"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <Image
                                        src={item.src}
                                        alt={`${item.label} by Taylor's Lawn Care`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-3 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-white text-sm font-semibold">{item.label}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="text-center mt-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <a
                                href="tel:870-530-4289"
                                onClick={trackPhoneCall}
                                className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
                            >
                                <Phone className="h-5 w-5 text-green-600" />
                                <span>Start Your Fall Project — Free Estimate</span>
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Why Choose Us / Stats Section */}
                <section className="py-20 relative overflow-hidden">
                    {/* nls11 as subtle background */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/nls11.jpg"
                            alt="Landscaping background"
                            fill
                            className="object-cover opacity-10"
                        />
                        <div className="absolute inset-0 bg-linear-to-br from-green-50/90 to-amber-50/90" />
                    </div>

                    <div className="container mx-auto px-4 md:px-8 lg:px-22 relative z-10">
                        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our Landscaping Excellence
                        </h2>

                        <motion.div
                            className="bg-white rounded-2xl shadow-2xl p-8 lg:px-12 border max-w-4xl mx-auto border-gray-100"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="space-y-8">
                                {[
                                    { label: 'Sod Projects Completed', value: '500+', percent: 100 },
                                    { label: 'Customer Satisfaction', value: '98%', percent: 98 },
                                    { label: 'Design Consultations', value: '1,200+', percent: 95 }
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
                                        <span key={area} className="px-4 py-2 bg-green-100 text-green-800 text-base font-medium rounded-full">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="py-20 bg-linear-to-r from-green-600/10 to-amber-600/10">
                    <div className="container mx-auto px-4 md:px-6 lg:px-22">
                        <motion.div
                            className="bg-linear-to-r from-green-600 to-amber-600 rounded-3xl shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-12 text-white">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-white/20 rounded-2xl">
                                            <Sprout className="h-8 w-8" />
                                        </div>
                                        <span className="text-xl font-bold uppercase tracking-widest">FALL LANDSCAPING</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                        Refresh Your Outdoor Space This Fall
                                    </h2>
                                    <p className="text-gray-50 text-[19.5px] lg:text-[23px] font-light mb-8 opacity-95 leading-relaxed">
                                        Fall is a great time to improve your landscape, refresh tired areas, and prepare your outdoor space for the seasons ahead. Start your project now and enjoy a more beautiful property.
                                    </p>
                                    <div className="space-y-4 text-lg lg:text-xl">
                                        <div className="flex items-center gap-4">
                                            <Calendar className="h-6 w-6" />
                                            <span>Book now for Fall installation</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Clock className="h-6 w-6" />
                                            <span>Early bookings get priority scheduling</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Shield className="h-6 w-6" />
                                            <span>Invest in a landscape built for lasting beauty</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-12 bg-white flex flex-col justify-center">
                                    <h3 className="text-[27px] font-bold text-gray-900 mb-8 text-center">Start Your Fall Transformation Today</h3>

                                    <div className="space-y-6">
                                        <motion.a
                                            href="tel:870-530-4289"
                                            onClick={trackPhoneCall}
                                            className="group bg-linear-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-bold py-4 px-8 rounded-xl text-[22px] transition-all duration-300 flex items-center justify-center gap-6 shadow-2xl hover:shadow-3xl relative overflow-hidden"
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
                                                <Clock className="h-6 w-6 text-amber-600" />
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
