/* eslint-disable @typescript-eslint/no-explicit-any */
// components/contact-section.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Calendar } from 'lucide-react';
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

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us Directly',
      value: '(870) 530-4289',
      link: 'tel:870-530-4289',
      onClick: true,
      description: 'We answer 7 days a week • Fast response',
      highlight: true
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'taylorslawncare21 @gmail.com',
      link: 'mailto:taylorslawncare21@gmail.com',
      description: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      value: 'Northeast Arkansas',
      link: 'https://maps.google.com/maps?q=Northeast+Arkansas',
      description: 'Paragould, Jonesboro, Brookland & more'
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
    <section id="contact" ref={ref} className="py-16 bg-linear-to-br from-white to-green-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded-full mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-semibold">FALL BOOKING ONGOING</span>
          </motion.div>

          <h2 className="text-[28px] md:text-4xl lg:text-[2.4rem] font-bold text-gray-900 mb-6">
            Ready to Transform
            <span className="block text-green-600">Your Property?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your free, no-obligation quote today. We&apos;ll get back to you <strong>ASAP!</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link || '#'}
                  onClick={() => { item.onClick && trackPhoneCall() }}
                  className={`flex items-start gap-6 p-6 rounded-2xl border transition-all duration-300 group cursor-pointer ${item.highlight
                    ? 'bg-green-600 text-white border-green-600 shadow-lg hover:shadow-xl hover:bg-green-700'
                    : 'bg-white shadow-lg hover:shadow-xl border-gray-100 hover:border-green-200'
                    }`}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`p-3 rounded-xl transition-colors shrink-0 ${item.highlight
                    ? 'bg-white/20 group-hover:bg-white/30'
                    : 'bg-green-600 group-hover:bg-green-500'
                    }`}>
                    <item.icon className={`h-6 w-6 ${item.highlight ? 'text-white' : 'text-white'}`} />
                  </div>
                  <div className="grow">
                    <h4 className={`font-bold text-lg mb-1 ${item.highlight ? 'text-white' : 'text-gray-900'}`}>
                      <span className={`${item.highlight ? 'text-gray-100' : 'text-gray-900'}`}>{item.title}</span>
                    </h4>
                    <p className={`font-semibold text-lg mb-1 ${item.highlight ? 'text-white' : 'text-green-600'
                      }`}>
                      {item.value}
                    </p>
                    <p className={`text-[16.5px] ${item.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-linear-to-br from-green-600 to-blue-600 rounded-2xl shadow-2xl overflow-hidden relative"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col justify-center text-white text-center">
              <h3 className="text-[25px] font-bold mb-4">
                FREE QUOTE • NO OBLIGATION
              </h3>

              <p className="text-lg opacity-90 mb-2">
                Tell us about your project and we&apos;ll provide:
              </p>

              <div className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                {[
                  'Free on-site assessment',
                  'Detailed written estimate',
                  'Project timeline',
                  'Material options & pricing'
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-green-300 rounded-full shrink-0"></div>
                    <span className="text-white/90 text-[17px]">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1 }}
                >
                  <Link
                    href="/contact"
                    className="w-full bg-white text-green-600 font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-3 group/cta hover:bg-gray-50"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="h-5 w-5 group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-center justify-center gap-4"
                >
                  <div className="w-16 h-px bg-white/30"></div>
                  <span className="text-white/70 text-[12px]">OR</span>
                  <div className="w-16 h-px bg-white/30"></div>
                </motion.div>

                <motion.a
                  href="tel:870-530-4289"
                  onClick={trackPhoneCall}
                  className="w-full bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-3 group/call hover:bg-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.1 }}
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </motion.a>
              </div>

              <motion.div
                className="flex items-center justify-center gap-2 mt-6 text-white/70 text-[16px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span>Same-day response guaranteed</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}