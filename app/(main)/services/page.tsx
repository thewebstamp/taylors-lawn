/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(main)/services/page.tsx
'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Clock, Shield, Phone, ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      img: "/drainage.jpg",
      icon: '💧',
      title: 'Drainage Solutions',
      description: 'French drains, surface drainage, downspout drainage. Over 3,000 feet installed this season!',
      features: ['Emergency Service', 'Free Inspection', 'Expert Installation', '25+ Years Experience'],
      highlight: true
    },
    {
      img: "/sod.jpg",
      icon: '🌿',
      title: 'Landscaping & Sod',
      description: 'Complete landscape design, sod installation, garden beds, and outdoor living spaces',
      features: ['Custom Designs', 'Premium Materials', '25+ Years Experience', 'Heavy Equipment Operation']
    },
    {
      img: "/hero.jpg",
      icon: '🌱',
      title: 'Lawn Care',
      description: 'Complete lawn maintenance including fertilization, weed control, aeration, and seasonal care for a healthy, vibrant yard year-round.',
      features: ['Aeration & Overseeding', 'Fertilization Programs', 'Weed & Pest Control']
    },
    {
      img: "/sprinkler.jpg",
      icon: '🚿',
      title: 'Sprinkler Systems',
      description: 'Professional irrigation system installation and repair for healthy lawns',
      features: ['Smart Systems', 'Maintenance Plans', 'Expert Installation', 'Water Efficiency']
    },
    {
      img: "/dirt.jpg",
      icon: '🚜',
      title: 'Dirt Work & Grading',
      description: '25+ years heavy equipment experience for precise grading and site preparation',
      features: ['Commercial Grade', 'Proper Drainage', 'Heavy Equipment', 'Quick Turnaround']
    },
    {
      img: "/tree.jpg",
      icon: '🌲',
      title: 'Tree & Brush Cleanup',
      description: 'Small tree trimming, brush removal, and professional lot clearing services',
      features: ['Safety First', 'Thorough Cleanup', 'Debris Removal', 'Professional Equipment']
    },
    {
      img: "/fence.jpg",
      icon: '🏠',
      title: 'Privacy Fencing',
      description: 'Quality fencing installation with 1-year guarantee on workmanship',
      features: ['Quality Materials', 'Expert Installation', '1-Year Guarantee', 'Custom Options']
    },
    {
      img: "/stone.jpg",
      icon: '🧱',
      title: 'Rock Work & Hardscaping',
      description: 'Retaining walls, stone features, and hardscape to boost curb appeal',
      features: ['Quality Craftsmanship', 'Durable Materials', 'Expert Installation', '25+ Years Experience']
    },
    {
      img: "/holiday.jpg",
      icon: '🎄',
      title: 'Holiday Lighting',
      description: 'Professional holiday light installation starting at $2.50/ft',
      features: ['Professional Design', 'Install & Removal', 'LED Technology', 'Seasonal Service']
    },
    {
      img: "/clean.jpg",
      icon: '🍂',
      title: 'Seasonal Cleanup',
      description: 'Fall cleanups, leaf removal, and winter preparation services',
      features: ['Thorough Service', 'Seasonal Expertise', 'Debris Removal', 'Quick Response']
    }
  ];

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

  const guarantees = [
    {
      icon: Shield,
      title: 'Service Guarantee',
      description: 'All major projects come with a comprehensive workmanship guarantee'
    },
    {
      icon: Star,
      title: '98% Recommended',
      description: 'Nearly all our customers recommend us to friends and family'
    },
    {
      icon: Clock,
      title: '25+ Years Experience',
      description: 'Decades of experience solving complex outdoor challenges'
    },
    {
      icon: CheckCircle,
      title: 'Free Estimates',
      description: 'No-obligation free estimates with transparent pricing'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-white to-green-50/30">
      {/* Hero Section - Adjusted to start from top */}
      <section className="relative pt-25 lg:pt-30 pb-20 overflow-hidden"> {/* Changed from pt-20 to pt-32 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Taylor's Lawn Care Services"
            fill
            className="object-cover opacity-10"
            priority
          />
          {/* Added darker overlay for better text visibility */}
          <div className="absolute inset-0 bg-linear-to-b from-blue-600/60 to-green-600/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-green-600/70 text-white px-4 py-2 rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-semibold">WINTER & SPRING BOOKING OPEN</span>
            </motion.div>

            <h1 className="text-[28px] md:text-4xl lg:text-[2.4rem] font-bold text-gray-900 mb-6">
              Professional&nbsp; Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto"> {/* Changed to gray-700 for better contrast */}
              Complete outdoor solutions for residential and commercial properties across Northeast Arkansas.
              25+ years of trusted service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 pb-20 lg:py-20 bg-linear-to-b from-white to-gray-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500"
                initial={{ opacity: 1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                  {/* Service Icon */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <span className="text-2xl">{service.icon}</span>
                  </div>

                  {/* Service Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      <span className="text-gray-100">{service.title}</span>
                    </h3>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-[17px] leading-relaxed mb-4 text-center md:text-left">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                        <span className="text-[16px]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="tel:870-530-4289"
                    onClick={trackPhoneCall}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="h-4 w-4" />
                    <span>Get Free Quote</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #16a34a 2px, transparent 0),
                               radial-gradient(circle at 75% 75%, #0ea5e9 2px, transparent 0)`,
                backgroundSize: '60px 60px',
              }}>
            </div>
          </div>

          {/* Accent Lines */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-linear-to-b from-green-500 to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-linear-to-t from-blue-500 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-15"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 text-gray-600 mb-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold tracking-widest uppercase">OUR COMMITMENT</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </motion.div>

            <h2 className="text-[28px] md:text-4xl lg:text-[2.4rem] font-bold text-gray-900 mb-6">
              Your&nbsp; Satisfaction,&nbsp;
              <span className="block bg-linear-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
                Guaranteed
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our promises aren&apos;t just words - they&apos;re the foundation of everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Top Accent Bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-green-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <div className="relative inline-flex">
                      {/* Icon Background */}
                      <div className="absolute inset-0 bg-linear-to-br from-green-500 to-blue-500 rounded-2xl transform rotate-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

                      {/* Icon */}
                      <div className="relative bg-white rounded-xl p-3 shadow-md border border-gray-100">
                        <div className="h-8 w-8">
                          {React.createElement(guarantee.icon, {
                            className: "w-full h-full",
                            style: {
                              fill: "url(#gradient)",
                              stroke: "url(#gradient)"
                            }
                          })}
                          <svg width="0" height="0">
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#16a34a" />
                                <stop offset="100%" stopColor="#0ea5e9" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {guarantee.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {guarantee.description}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 2 }}
                  >
                    <div className="flex items-center gap-1 text-gray-400">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0, 0.4, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.5 + 0.3
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-gray-600 mb-3">Experience the Taylor&apos;s Lawn Care difference</p>
            <motion.div
              className="inline-flex items-center gap-6 text-sm text-gray-500"
              whileHover={{ gap: 8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Trusted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <span>Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <span>Professional</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}