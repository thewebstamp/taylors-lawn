/* eslint-disable @typescript-eslint/no-explicit-any */
// components/faq-section.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [openIndex, setOpenIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const faqs = [
    {
      question: "How quickly can you start a drainage project?",
      answer: "We prioritize drainage emergencies and can often start within 24-48 hours, especially during active rain seasons."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes! All our estimates are completely free with no obligation. We'll assess your property and provide a detailed quote."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. We're fully licensed in Arkansas and carry comprehensive insurance for your protection."
    },
    {
      question: "What's your service area?",
      answer: "We serve all of Northeast Arkansas including Paragould, Jonesboro, and surrounding communities."
    },
    {
      question: "Do you offer financing or payment plans?",
      answer: "We offer flexible payment options for larger projects. Contact us to discuss what works for your budget."
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
    <section ref={ref} className="py-20 bg-linear-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        {/* Top Left Organic Shape */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

        {/* Bottom Right Organic Shape */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

        {/* Center Accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#16a34a 1px, transparent 1px),
                                 linear-gradient(90deg, #16a34a 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}>
        </div>
      </div>

      {/* Subtle Border Accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-linear-to-r from-transparent via-green-400 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold">COMMON QUESTIONS</span>
          </motion.div>

          <h2 className="text-[28px] md:text-4xl lg:text-[2.4rem] font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our landscaping services in Northeast Arkansas
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-green-200 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{
                y: -2,
                borderColor: "rgb(134 239 172)",
                transition: { duration: 0.2 }
              }}
            >
              <motion.button
                className="w-full px-6 py-5 text-left bg-white hover:bg-green-50 transition-colors flex justify-between items-center group"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                whileHover={{ backgroundColor: "rgba(240, 253, 244, 1)" }}
                whileTap={{ scale: 0.995 }}
              >
                <span className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-green-500 transition-colors" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-green-50/50 border-t border-green-100">
                      <p className="text-gray-700 text-[19px] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Help CTA */}
        <motion.div
          className="text-center mt-12 pt-8 border-t border-green-200"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-600 mb-4 text-xl">Still have questions? We&apos;re here to help!</p>
          <motion.a
            href="tel:870-530-4289"
            onClick={trackPhoneCall}
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Call (870) 530-4289</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}