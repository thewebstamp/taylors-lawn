/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(main)/about/page.tsx
'use client';
import { motion } from 'framer-motion';
import { Users, Clock, Shield, MapPin, Heart, ThumbsUp, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { icon: Clock, value: '25+', label: 'Years of Experience', color: 'from-orange-500 to-yellow-500' },
    { icon: Users, value: '500+', label: 'Satisfied Customers', color: 'from-green-500 to-emerald-500' },
    { icon: ThumbsUp, value: '98%', label: 'Recommendation Rate', color: 'from-blue-500 to-cyan-500' },
    { icon: Shield, value: '100%', label: 'Licensed & Insured', color: 'from-purple-500 to-pink-500' },
  ];

  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'Every project receives our unwavering commitment to excellence and attention to detail.',
      icon: '⚒️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We listen carefully and deliver beyond expectations.',
      icon: '💝',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Reliable & Trustworthy',
      description: 'We show up on time, communicate clearly, and stand behind our work with guarantees.',
      icon: '🤝',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Community Focused',
      description: 'Proud to serve Northeast Arkansas with special discounts for heroes and those in need.',
      icon: '🏡',
      color: 'from-orange-500 to-amber-500'
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

  return (
    <div className="min-h-screen bg-linear-to-br from-white to-gray-50/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Taylor's Lawn Care Team"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-blue-600/60 to-green-600/70" />

          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="h-4 w-4" />
              <span className="text-sm font-semibold">#1 IN NORTHEAST ARKANSAS</span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Building Trust Through Excellence
            </h1>
            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-700 max-w-7xl mx-auto">
              For over 25 years, we&apos;ve been transforming Northeast Arkansas properties with integrity,
              craftsmanship, and unwavering commitment to our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #16a34a 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group text-center"
                initial={{ opacity: 1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-linear-to-r ${stat.color} mx-auto shadow-lg`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>

                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-semibold text-sm lg:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />

              <motion.div
                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-3"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="h-4 w-4" />
                <span className="text-sm font-semibold">OUR JOURNEY</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our Story of
                <span className="block bg-linear-to-r from-green-600 to-forest-400 bg-clip-text text-transparent">
                  Growth & Service
                </span>
              </h2>

              <div className="space-y-6 text-xl md:text-[22px] lg:text-[25px] text-gray-700">
                <p className="leading-relaxed">
                  Founded by <span className="font-semibold text-gray-900">Billy Taylor</span>,
                  Taylor&apos;s Lawn Care & Landscaping began as a local venture with a clear mission:
                  deliver exceptional outdoor services with unmatched honesty and workmanship.
                </p>
                <p className="leading-relaxed">
                  Through decades of dedicated service, we&apos;ve grown into Northeast Arkansas&apos;s premier
                  outdoor solutions team, specializing in complex drainage systems, landscape transformations,
                  and comprehensive property care backed by 25+ years of heavy equipment expertise.
                </p>
                <p className="leading-relaxed">
                  Today, our skilled crew continues to uphold our founding principles while bringing
                  state-of-the-art equipment and proven techniques to every project, ensuring Northeast
                  Arkansas homeowners receive the quality results they deserve.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-linear-to-br from-white to-gray-50/50 relative overflow-hidden">
        {/* Sophisticated Background Pattern */}
        <div className="absolute inset-0">
          {/* Geometric Grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0"
              style={{
                backgroundImage: `
               linear-gradient(90deg, #16a34a 1px, transparent 1px),
               linear-gradient(180deg, #16a34a 1px, transparent 1px)
             `,
                backgroundSize: '80px 80px',
              }}>
            </div>
          </div>

          {/* Floating Gradient Orbs */}
          <div className="absolute top-10 -left-20 w-80 h-80 bg-linear-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float"></div>
          <div className="absolute bottom-10 -right-20 w-96 h-96 bg-linear-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>

          {/* Accent Lines */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-linear-to-b from-green-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-linear-to-t from-blue-500/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 text-gray-600 mb-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase text-gray-500">Our Foundation</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
              Core Values That
              <span className="block bg-linear-to-r from-green-600 to-forest-600 bg-clip-text text-transparent">
                Define Our Excellence
              </span>
            </h2>
            <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-4xl mx-auto">
              The principles that guide every decision, every project, and every relationship we build
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-400 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0.5 rounded-2xl bg-white"></div>
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Icon & Header */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className={`text-3xl p-3 rounded-2xl bg-linear-to-r ${value.color} shadow-lg`}
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { type: "spring", stiffness: 300 }
                          }}
                        >
                          {value.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-2xl lg:text-[27px] font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                            {value.title}
                          </h3>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-1 h-1 bg-gray-400 rounded-full"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: index * 0.1 + 0.3 + i * 0.1 }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Index Indicator */}
                      <motion.div
                        className="text-sm font-bold text-gray-400 group-hover:text-gray-600 transition-colors"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        0{index + 1}
                      </motion.div>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 text-lg lg:text-[22px] leading-relaxed group-hover:text-gray-700 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {value.description}
                    </motion.p>

                    {/* Hover Indicator */}
                    <motion.div
                      className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-500 font-medium">Our Commitment</span>
                    </motion.div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0, 0.2, 0]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: index * 0.5 + 0.7
                    }}
                  />
                </div>

                {/* Connection Line (Desktop only) */}
                {index < values.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-linear-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-base lg:text-[18px] text-center mt-12 pt-8 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-gray-600 mb-3">These values guide every project we undertake</p>
            <motion.div
              className="inline-flex items-center gap-6 text-sm lg:text-base text-gray-500"
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

        <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    .animate-float {
      animation: float 20s ease-in-out infinite;
    }
  `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
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

          {/* Floating Orbs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

          {/* Accent Lines */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-linear-to-b from-green-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-linear-to-t from-blue-500/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main CTA Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-48 h-48 bg-green-400 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-green-500 via-blue-500 to-green-500 opacity-0 hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0.5 rounded-3xl bg-white"></div>
              </div>

              <div className="relative z-10 p-12 md:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left text-gray-900 mb-6">
                      Experience
                      <span className="block bg-linear-to-r from-green-600 to-forest-600 bg-clip-text text-transparent">
                        True Excellence
                      </span>
                    </h2>

                    <p className="text-xl lg:text-[23px] text-gray-600 text-center lg:text-left mb-5 leading-relaxed">
                      Join the hundreds of Arkansas homeowners who trust us to transform their outdoor spaces with precision, care, and 25+ years of expertise.
                    </p>

                    {/* Trust Indicators */}
                    <motion.div
                      className="flex items-center justify-center lg:justify-start gap-6 text-sm lg:text-base text-gray-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>98% Recommended</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <span>Free Estimates</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Right Content - CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Primary CTA */}
                    <motion.a
                      href="tel:870-530-4289"
                      onClick={trackPhoneCall}
                      className="group relative bg-linear-to-r from-green-600 to-forest-600 text-white font-semibold py-3 px-8 rounded-2xl text-lg transition-all duration-300 flex items-center justify-center gap-4 shadow-2xl hover:shadow-3xl overflow-hidden"
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Content */}
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                          <Phone className="h-6 w-6" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-lg lg:text-xl">Call Now</div>
                        </div>
                      </div>

                      {/* Animated Indicator */}
                      <motion.div
                        className="absolute right-6 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.a>

                    {/* Secondary CTA */}
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/contact#form"

                        className="group relative bg-white border-2 border-gray-200 text-gray-900 font-semibold py-3 px-8 rounded-2xl text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:border-green-500 hover:bg-green-50 overflow-hidden"
                      >
                        {/* Animated Border */}
                        <div className="absolute inset-0 border-2 border-transparent bg-linear-to-r from-green-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0.5 rounded-2xl bg-white group-hover:bg-green-50 transition-colors"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex items-center gap-3">
                          <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                            <span className="text-lg">📝</span>
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-lg lg:text-xl">Get Free Quote</div>
                          </div>
                        </div>

                        {/* Animated Arrow */}
                        <motion.span
                          className="relative z-10 text-gray-400 group-hover:text-green-600 transition-colors"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.div
                      className="flex items-center justify-center gap-4 pt-6 border-t border-gray-100"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center gap-2 text-sm lg:text-base text-gray-500">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span>Local & Family Owned</span>
                      </div>
                      <div className="w-px h-4 bg-gray-300"></div>
                      <div className="flex items-center gap-2 text-sm lg:text-base text-gray-500">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span>Licensed & Insured</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-6 right-6 w-3 h-3 bg-green-400 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    .animate-float {
      animation: float 20s ease-in-out infinite;
    }
  `}</style>
      </section>
    </div>
  );
}