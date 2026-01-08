// components/trust-section.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Award, TrendingUp, Quote, Facebook } from 'lucide-react';
import Image from 'next/image';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reviews = [
    {
      name: "Mary Waddell",
      rating: 5,
      text: "I recommend! In a few short hours they overhauled my flowerbeds. They worked fast and were thorough. They hauled off all brush. I’ll be using them to plant shrubs in the Spring!",
      service: "Fall & Bush Cleanup"
    },
    {
      name: "Brandi Ballard",
      rating: 5,
      text: "Billy does a great job. Quick, dependable and trustworthy. Always leaves my yard looking amazing.",
      service: "Lawn Maintenance"
    },
    {
      name: "Lecia Kunkel Holcombe",
      rating: 5,
      text: "I've used Taylor's Lawn Care. He is very dependable. His rates are very fair. His work is professional.",
      service: "General Landscaping"
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden text-center lg:text-left">
      <motion.div
        className="max-w-7xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Stats Section with Image */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          variants={containerVariants}
        >
          {/* Image Side */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/work-new.jpg"
              alt="Taylor's Lawn Care Team at Work"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">ON THE JOB</span>
              </div>
              <p className="text-lg font-bold">Serving Northeast Arkansas</p>
            </div>
          </motion.div>

          {/* Stats Side */}
          <motion.div
            className="space-y-5"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-4">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-semibold">TRUSTED BY 100+ HOMEOWNERS</span>
              </div>
              <h2 className="text-[28px] md:text-4xl lg:text-[2.4rem] font-bold text-gray-900 mb-4">
                Proven Results You
                <span className="block text-green-600">Can Count On</span>
              </h2>
              <p className="text-gray-600 text-xl">
                25+ years of transforming properties across Arkansas with reliable, professional service that exceeds expectations every time.
              </p>
            </motion.div>

            {/* Compact Stats */}
            <motion.div
              className="grid grid-cols-3 gap-1 justify-items-center lg:justify-items-start"
              variants={containerVariants}
            >
              {[
                { value: '98%', label: 'Recommend', icon: Star, color: 'text-yellow-500' },
                { value: '25+', label: 'Years Exp', icon: Award, color: 'text-green-600' },
                { value: '300+', label: 'Projects', icon: TrendingUp, color: 'text-blue-600' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className={`text-2xl md:text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                  <div className="text-md font-medium text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Reviews Section with Overlay Design */}
        <motion.div
          className="relative mb-16"
          variants={itemVariants}
        >
          {/* Background Image Container */}
          <div className="relative bg-gray-900 rounded-3xl overflow-hidden h-96 lg:h-80">
            <Image
              src="/hero.jpg"
              alt="Happy Customers Background"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-linear-to-r from-green-900/80 to-blue-900/80" />

            {/* Background Content */}
            <div className="relative z-10 h-full flex justify-center text-center text-white p-8">
              <div className="max-w-2xl">
                <motion.div
                  className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <Quote className="h-5 w-5" />
                  <span className="text-sm font-semibold">REAL CUSTOMER STORIES</span>
                </motion.div>
                <h3 className="text-[28px] md:text-4xl lg:text-[2.4rem] font-bold mb-3">
                  <span className="text-green-300">Don&apos;t Just Take Our Word For It</span>
                </h3>
                <p className="text-xl font-light opacity-90">
                  Hear from homeowners who trusted us with their property transformations
                </p>
              </div>
            </div>
          </div>

          {/* Overlay Review Cards */}
          <div className="relative -mt-24 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.name}
                  className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 group flex flex-col justify-between"
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 leading-relaxed mb-6 line-clamp-5 text-[16.5px]">
                      {review.text}
                    </p>
                  </div>

                  <div>
                    {/* Reviewer Info */}
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                      <p className="text-green-600 font-medium text-sm">{review.service}</p>
                    </div>

                    {/* Footer - Uniform across all cards */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-blue-600">
                        <Facebook className="h-4 w-4" />
                        <span className="text-sm font-medium">Facebook</span>
                      </div>
                      <div className="text-green-600 font-semibold text-sm">
                        Verified
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <motion.a
            href="https://web.facebook.com/TLCLAWN21/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-lg items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mx-auto group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook className="h-5 w-5" />
            <span>Read All Reviews</span>
            <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>

          <motion.div
            className="flex items-center justify-center gap-2 mt-6 text-gray-600 text-md"
            variants={itemVariants}
          >
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span>4.9/5 Rating from 33+ Verified Reviews</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}