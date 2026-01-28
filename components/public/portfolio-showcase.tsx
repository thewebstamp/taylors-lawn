/* eslint-disable @typescript-eslint/no-explicit-any */
// components/portfolio-showcase.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Star, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export function PortfolioShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const portfolioItems = [
    {
      id: 2,
      image: '/landscaping.jpg',
      title: 'Complete Landscape Makeover',
      category: 'Landscaping',
      location: 'Jonesboro, AR',
    },
    {
      id: 3,
      image: '/installation.jpg',
      title: 'Fencing & Sod Installation',
      category: 'Sod & Fencing',
      location: 'Bono, AR',
    },
    {
      id: 1,
      image: '/drainage.jpg',
      title: 'Drainage Solution',
      category: 'Drainage',
      location: 'Paragould, AR',
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
    <section ref={ref} className="py-16 bg-linear-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-semibold">PROVEN RESULTS</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See Our Work in
            <span className="block text-green-600">Northeast Arkansas</span>
          </h2>
          <p className="text-xl md:text-[22px] lg:text-[25px] text-gray-600 max-w-4xl mx-auto">
            Real projects, real results - see how we&apos;ve transformed properties across Paragould, Jonesboro, and beyond
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 cursor-pointer"
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Image with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item.category}
                </motion.div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl lg:text-[22px] font-bold mb-2">
                    <span className='text-gray-200'>{item.title}</span>
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm lg:text-base">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-gray-600 text-xl md:text-[22px] lg:text-[24px] mb-6 max-w-2xl mx-auto">
            See more of our work and get inspired for your own project
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg md:text-xl lg:text-[23px]">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/gallery#portfolio"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-3 group/cta"
              >
                <span>See More Projects</span>
                <ExternalLink className="h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.a
              href="tel:870-530-4289"
              onClick={trackPhoneCall}
              className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Free Consultation</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}