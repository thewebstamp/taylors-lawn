/* eslint-disable @typescript-eslint/no-explicit-any */
// components/services-showcase.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function ServicesShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const services = [
    {
      img: "/drainage.jpg",
      icon: '💧',
      title: 'Drainage Solutions',
      description: 'French drains, surface drainage, downspout drainage — built to handle Arkansas summer storms. Over 3,000 feet installed this season!',
      features: [['Emergency Service'], ['Free Inspection']],
      slug: "drainage-solution"
    },
    {
      img: "/sod.jpg",
      icon: '🌿',
      title: 'Landscaping & Sod',
      description: 'Complete landscape design, sod installation, garden beds, and outdoor living spaces — get your yard ready before the summer heat sets in.',
      features: [['Custom Designs'], ['Premium Materials']],
      slug: "landscaping-sod"
    },
    {
      img: "/hero.jpg",
      icon: '🌱',
      title: 'Professional Lawn Care',
      description: 'Mowing, weed eating, edging, blowing off all surfaces, fertilization, and weed control.',
      features: [
        ['Mowing & Edging', 'Weed Control']
      ],
      slug: "lawn-care"
    },
    {
      img: "/sprinkler.jpg",
      icon: '🚿',
      title: 'Sprinkler Systems',
      description: 'Professional irrigation system installation and repair to keep your lawn healthy through the hottest summer days',
      features: [['Smart Systems'], ['Maintenance Plans']],
      slug: "sprinkler-systems"
    },
    {
      img: "/dirt.jpg",
      icon: '🚜',
      title: 'Dirt Work & Grading',
      description: '25+ years heavy equipment experience for precise grading and site preparation',
      features: [['Commercial Grade'], ['Expert Operation']],
      slug: "dirt-work-grading"
    },
    {
      img: "/tree.jpg",
      icon: '🌲',
      title: 'Tree & Brush Cleanup',
      description: 'Small tree trimming, brush removal, and lot clearing with professional equipment',
      features: [['Safety First'], ['Thorough Cleanup']],
      slug: "tree-brush-cleanup"
    },
    {
      img: "/fence.jpg",
      icon: '🏠',
      title: 'Privacy Fencing',
      description: 'Quality fencing installation with 1-year guarantee on workmanship',
      features: [['Quality Materials'], ['Expert Installation']],
      slug: "privacy-fencing"
    },
    {
      img: "/stone.jpg",
      icon: '🧱',
      title: 'Rock Work & Hardscaping',
      description: 'Retaining walls, flagstone patios, stone features, and hardscape to boost curb appeal and your outdoor living space',
      features: [['Quality Craftsmanship'], ['Durable Materials']],
      slug: "rock-work-hardscaping"
    },
    {
      img: "/1781740335628.jpg",
      icon: '✨',
      title: 'Pressure Washing & Sealing',
      description: 'Restore your driveway, patio, and siding with professional pressure washing, then seal your driveway to protect it from Arkansas summer heat and storms.',
      features: [['Driveways & Patios'], ['Siding & Walkways']],
      slug: "pressure-washing-sealing"
    },
    {
      img: "/1781740860830_1.jpg",
      icon: '🟤',
      title: 'Mulch & Decorative Rock',
      description: 'Fresh mulch and decorative rock installation to lock in moisture, suppress weeds, and keep your beds looking sharp all summer long',
      features: [['Moisture Retention'], ['Weed Suppression']],
      slug: "mulch-decorative-rock"
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
    <section id="services" ref={ref} className="py-16 bg-linear-to-b from-white/50 to-gray-50/30">
      <div className="container mx-auto px-4 md:px-8 lg:px-22">
        {/* Header Section */}
        <motion.div
          className="text-center mb-13"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-semibold">SUMMER PROJECTS BOOKING OPEN</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Solve Your Seasonal
            <span className="block text-green-600">Landscape and Drainage Challenges</span>
          </h2>
          <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-5xl mx-auto">
            Trusted by Northeast Arkansas homeowners for 25+ years — delivering professional results built to handle everything Arkansas summers bring.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="min-h-80 group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-amber-200/40 border border-gray-100 hover:border-amber-200/60 overflow-hidden transition-all duration-500"
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                {/* Service Icon */}
                <div className="absolute top-4 left-4 bg-linear-to-br from-amber-300/30 to-amber-500/20 backdrop-blur-sm border border-amber-200/30 rounded-xl p-3">
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* Service Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-[21px] lg:text-2xl font-bold mb-2 text-center lg:text-left">
                    <span className='text-gray-200 tracking-[0.5px]'>{service.title}</span>
                  </h3>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 flex flex-col justify-between min-h-[260px]">
                <div>
                  <p className="text-black font-light text-[19.5px] lg:text-[22px] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6 px-1 lg:px-0">
                    {service.features.map((row, rowIndex) => (
                      <div key={rowIndex} className="flex flex-col">
                        {row.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-1 text-lg lg:text-xl text-gray-700 min-h-5">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></div>
                            <span className="leading-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className='w-full flex flex-col gap-2'>
                  <motion.a
                    href="tel:870-530-4289"
                    onClick={trackPhoneCall}
                    className="w-full bg-green-600 hover:bg-green-700 text-lg lg:text-xl text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="h-4 w-4" />
                    <span>Get Free Quote</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>

                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full bg-gray-800 hover:bg-gray-950 text-lg lg:text-xl text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 bg-[linear-gradient(90deg,var(--color-green-950)_0%,var(--color-green-600)_75%_100%)] rounded-2xl p-8 text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Premium Gold Accent Strip */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-amber-400 via-yellow-300 to-amber-400" />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className='text-gray-50'>Tired of Summer Yard Headaches?</span>
            </h3>
            <p className="text-xl font-light md:text-[22px] lg:text-[24px] mb-6 opacity-90 max-w-2xl mx-auto">
              Get your free, no-obligation estimate today and see why Arkansas homeowners trust us
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg md:text-xl lg:text-[23px]">
              <motion.a
                href="tel:870-530-4289"
                onClick={trackPhoneCall}
                className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-3 group/cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Call (870) 530-4289</span>
                <div className="w-2 h-2 bg-green-600 rounded-full opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact#form"
                  className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 group/contact"
                >
                  <span>Schedule Online</span>
                  <ArrowRight className="h-4 w-4 group-hover/contact:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="flex items-center justify-center gap-2 mt-6 text-white/80 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              <span>Same-day quotes available • 25+ years experience</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
