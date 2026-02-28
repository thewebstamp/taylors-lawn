/* eslint-disable @typescript-eslint/no-explicit-any */
// components/hero-section.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudRain, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';

const heroImages = [
  '/hero.jpg',
  '/hero-new.jpg',
  '/hero-3.jpg',
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate random positions only on client side
  const rainDrops = useMemo(() => {
    if (!isMounted) return [];

    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      // eslint-disable-next-line react-hooks/purity
      left: Math.random() * 100,
      // eslint-disable-next-line react-hooks/purity
      duration: 1 + Math.random() * 2,
      // eslint-disable-next-line react-hooks/purity
      delay: Math.random() * 2,
    }));
  }, [isMounted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-between overflow-hidden bg-gray-900 pt-25 lg:pt-30 pb-20">
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Background"
          fill
          className="object-cover opacity-15" // Reduced opacity
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-blue-600/30 to-green-600/50" />
      </div>

      {/* Rain Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {isMounted ? (
          // Client-side only with random animations
          rainDrops.map((drop) => (
            <motion.div
              key={drop.id}
              className="absolute w-0.5 h-8 bg-blue-400/30 rounded-full"
              style={{
                left: `${drop.left}%`,
                top: '-2rem',
              }}
              animate={{
                y: ['0vh', '100vh'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: drop.duration,
                repeat: Infinity,
                delay: drop.delay,
              }}
            />
          ))
        ) : (
          // Server-side placeholder with fixed positions
          Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-8 bg-blue-400/30 rounded-full"
              style={{
                left: `${(i * 5) % 100}%`,
                top: '-2rem',
              }}
            />
          ))
        )}
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-22 w-full text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 px-4 py-1 rounded-full mb-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-[12px] md:text-[13px] lg:text-[14px] font-semibold">#1&nbsp;IN&nbsp;NORTHEAST&nbsp;ARKANSAS</span>
            </motion.div>

            {/* Powerful Headline */}
            <motion.h1
              className="text-[29px] md:text-4xl lg:text-[3.2rem] font-bold leading-tight mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-green-400">Lawncare, Landscaping & Drainage Solutions You Can Trust</span>
            </motion.h1>

            {/* Compelling Subheadline */}
            <motion.p
              className="text-[17.5px] font-light md:text-xl lg:text-[22px] text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <span className="text-yellow-500 font-semibold">Professional</span>, <span className="text-yellow-500 font-semibold">Reliable</span>, and <span className="text-yellow-500 font-semibold">Local</span> - Keeping your yard healthy and beautiful year-round.
            </motion.p>

            {/* Compact Discount Banner */}
            <motion.div
              className="bg-linear-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-4 mb-8 mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-gray-100 text-md lg:text-[20px] font-normal">
                  <span className="font-semibold text-white text-lg lg:text-[22px]">10% OFF</span> for Veterans, Military & First Responders
                </div>
                <div className="text-gray-100 text-md font-normal">
                  <span className="font-semibold text-white text-lg lg:text-[22px]">15% OFF</span> for Widows
                </div>
              </div>
            </motion.div>

            {/* Refined CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <a
                href="tel:870-530-4289"
                onClick={trackPhoneCall}
                className="group bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <CloudRain className="h-5 w-5" />
                <span>Call (870) 530-4289</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>

              <Link
                href="/services"
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View Services</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Automatic Image Carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Carousel Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                  <Image
                    src={heroImages[currentImage]}
                    alt="Taylor's Lawn Care Professional Services"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 via-gray-900/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Offer Badge */}
              <motion.div
                className="absolute top-6 right-6 bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 px-4 py-3 rounded-xl shadow-2xl"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <div className="text-center">
                  <div className="font-bold text-sm">Book Now!</div>
                  <div className="text-xs font-semibold">Get Best Rates</div>
                </div>
              </motion.div>

              {/* Carousel Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-green-400 scale-125' : 'bg-white/40 hover:bg-white/60'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Service Tags */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {['Drainage Solutions', 'Lawn Care', 'Landscaping'].map((service, index) => (
                <motion.span
                  key={service}
                  className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
                >
                  {service}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/40 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}