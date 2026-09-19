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
      img: "/clean.jpg",
      icon: '🍂',
      title: 'Yard & Leaf Cleanup',
      description: 'Leaves piling up fast? We handle full yard cleanup — leaf removal, brush hauling, and bed clearing — so your property stays clean and protected heading into winter.',
      features: [['Leaf & Debris Removal'], ['Haul-Away Included']],
      slug: "seasonal-cleanup"
    },
    {
      img: "/drainage.jpg",
      icon: '💧',
      title: 'Drainage Solutions',
      description: 'Fall rains expose every drainage problem your yard has. French drains, catch basins, and downspout systems installed before winter makes it worse. Over 3,000 feet installed!',
      features: [['Emergency Service'], ['Free Inspection']],
      slug: "drainage-solution"
    },
    {
      img: "/1781740860830_1.jpg",
      icon: '🟤',
      title: 'Mulch & Decorative Rock',
      description: 'Fresh mulch before winter insulates plant roots, locks in moisture, and keeps your beds looking sharp through the cold months. Best time to refresh is right now.',
      features: [['Root Protection'], ['Weed Suppression']],
      slug: "mulch-decorative-rock"
    },
    {
      img: "/tree.jpg",
      icon: '🌲',
      title: 'Tree & Brush Cleanup',
      description: 'Dead limbs and overgrowth become hazards in fall storms. We handle small tree trimming, brush removal, and lot clearing before winter weather sets in.',
      features: [['Storm Hazard Removal'], ['Thorough Cleanup']],
      slug: "tree-brush-cleanup"
    },
    {
      img: "/1781740335628.jpg",
      icon: '✨',
      title: 'Pressure Washing & Sealing',
      description: 'Seal your driveway before winter freeze-thaw cycles crack it. We pressure wash first to remove all dirt and grime, then apply a protective sealant that lasts.',
      features: [['Freeze Protection'], ['Driveways & Patios']],
      slug: "pressure-washing-sealing"
    },
    {
      img: "/sod.jpg",
      icon: '🌿',
      title: 'Landscaping & Sod',
      description: 'Fall is one of the best times for sod installation — cooler temps mean faster root establishment. Complete landscape design and garden bed work also available.',
      features: [['Fall Sod Installation'], ['Custom Designs']],
      slug: "landscaping-sod"
    },
    {
      img: "/hero.jpg",
      icon: '🌱',
      title: 'Professional Lawn Care',
      description: 'Keep your lawn healthy through fall with mowing, edging, fertilization, and weed control. A well-maintained lawn going into winter bounces back stronger in spring.',
      features: [['Mowing & Edging'], ['Fall Fertilization']],
      slug: "lawn-care"
    },
    {
      img: "/stone.jpg",
      icon: '🧱',
      title: 'Rock Work & Hardscaping',
      description: 'Retaining walls, flagstone patios, and stone features — fall is ideal for hardscaping projects. Ground conditions are perfect and your outdoor space will be ready for spring.',
      features: [['Quality Craftsmanship'], ['Durable Materials']],
      slug: "rock-work-hardscaping"
    },
    {
      img: "/dirt.jpg",
      icon: '🚜',
      title: 'Dirt Work & Grading',
      description: 'Poor grading sends fall and winter water straight toward your foundation. 25+ years of heavy equipment experience for precise grading and drainage correction.',
      features: [['Foundation Protection'], ['Expert Operation']],
      slug: "dirt-work-grading"
    },
    {
      img: "/sprinkler.jpg",
      icon: '🚿',
      title: 'Sprinkler Systems',
      description: 'Get your irrigation system winterized before the first freeze damages your lines and heads. We also install and repair systems for next season.',
      features: [['Winterization Service'], ['Maintenance Plans']],
      slug: "sprinkler-systems"
    },
    {
      img: "/fence.jpg",
      icon: '🏠',
      title: 'Privacy Fencing',
      description: 'Quality fencing installation with a 1-year workmanship guarantee. Fall is a great time to get your fence project done before the holiday season.',
      features: [['Quality Materials'], ['1-Year Guarantee']],
      slug: "privacy-fencing"
    },
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
            className="inline-flex items-center gap-2 bg-linear-to-r from-orange-600 to-amber-600 text-white px-4 py-2 rounded-full mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-semibold">FALL PROJECTS BOOKING OPEN</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Protect Your Property This Fall
            <span className="block text-green-600">Before Winter Makes It Worse</span>
          </h2>
          <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-5xl mx-auto">
            Trusted by Northeast Arkansas homeowners for 25+ years — don&apos;t wait until spring to fix what fall and winter will damage. Get your free estimate today.
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
                    <span>Get Free Estimate</span>
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
          {/* Premium Accent Strip */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-orange-400 via-amber-300 to-orange-400" />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className='text-gray-50'>Don&apos;t Let Fall Cleanup & Drainage Catch You Off Guard</span>
            </h3>
            <p className="text-xl font-light md:text-[22px] lg:text-[24px] mb-6 opacity-90 max-w-2xl mx-auto">
              Spots fill fast this time of year. Call now for your free, no-obligation estimate — same-day response guaranteed.
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
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 group/contact"
                >
                  <span>Get Free Estimate</span>
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
              <span>Same-day quotes available • 25+ years experience • Fully insured</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
