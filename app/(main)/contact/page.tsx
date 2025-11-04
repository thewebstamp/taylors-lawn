// app/(main)/contact/page.tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Star, Calendar, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us Directly',
      value: '(870) 530-4289',
      link: 'tel:870-530-4289',
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
      description: 'Paragould, Jonesboro & surrounding areas'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Sat: 8:00 AM - 6:00 PM',
      link: null,
      description: 'Free estimates • Emergency services available'
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'contact',
          event_label: 'free_quote_form',
        });
      }

      // Microsoft Clarity
      if ((window as any).clarity) {
        (window as any).clarity('event', 'contact_form_submission');
      }
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Track successful submission
        if ((window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            send_to: `${process.env.NEXT_PUBLIC_GA_ID}/contact_conversion`,
          });
        }

        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-green-900 to-blue-900 relative overflow-hidden pt-10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl text-center relative overflow-hidden"
          >
            {/* Card Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-400 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>

            {/* Animated Check Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.2,
                duration: 0.8
              }}
              className="relative mb-8"
            >
              <div className="relative inline-block">
                <motion.div
                  className="absolute inset-0 bg-green-400 rounded-full opacity-20"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <CheckCircle className="h-13 w-13 text-green-400 relative z-10" />
              </div>

              {/* Pulsing Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-green-400 rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>

            {/* Content */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[28px] md:text-4xl lg:text-[2.4rem] font-bold text-white mb-6"
            >
              <span className="text-green-500">Message Sent</span>
              <motion.span
                className="block text-transparent bg-clip-text bg-linear-to-r from-green-400 to-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Successfully!
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Thank you for contacting <span className="font-semibold text-green-300">Taylor's Lawn Care</span>.
              We'll get back to you within <span className="font-bold text-white">2 hours</span> with your free quote.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="tel:870-530-4289"
                onClick={trackPhoneCall}
                className="group bg-linear-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 flex items-center gap-4 shadow-2xl relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <Phone className="h-6 w-6" />
                <span className="text-lg">Call Now</span>
                <motion.div
                  className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.a>

              <motion.div
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/">
                  <span className="text-lg">Back to Home</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>We're reviewing your project details</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>Preparing your free quote</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-white to-green-50/50">
      {/* Hero Section */}
      <section className="relative pt-25 lg:pt-30 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Taylor's Lawn Care Contact Background"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-blue-600/60 to-green-600/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-green-600/40 backdrop-blur-sm border border-green-400/30 px-4 py-2 rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-white font-semibold">FREE QUOTES • NO OBLIGATION</span>
            </motion.div>

            <h1 className="text-[28px] md:text-4xl lg:text-[2.4rem] font-bold text-gray-900 mb-6">
              Get&nbsp; Your&nbsp; Free&nbsp; Quote&nbsp; Today
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to transform your property? Contact us for a free, no-obligation estimate.
              We'll get back to you ASAP!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 1, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link || '#'}
                    className={`flex items-start gap-6 p-6 rounded-2xl border transition-all duration-300 group cursor-pointer ${item.highlight
                      ? 'bg-linear-to-r from-green-600/70 to-forest-600/90 text-white border-green-600 shadow-lg hover:shadow-xl hover:bg-green-700'
                      : 'bg-white shadow-lg hover:shadow-xl border-gray-100 hover:border-green-200'
                      }`}
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                  >
                    <div className={`p-3 rounded-xl transition-colors shrink-0 ${item.highlight
                      ? 'bg-white/20 group-hover:bg-white/30'
                      : 'bg-green-600 group-hover:bg-green-500'
                      }`}>
                      <item.icon className="h-6 w-6 text-white" />
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

              {/* Trust Badge */}
              <motion.div
                className="bg-white rounded-2xl p-6 border border-green-200 shadow-lg text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">25+ Years Experience</h4>
                <p className="text-gray-600">Trusted by 100+ homeowners across Northeast Arkansas</p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              id='form'
              initial={{ opacity: 1, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl border border-green-200 overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div whileHover={{ y: -2 }} className="space-y-2">
                      <label className="block text-[17px] font-semibold text-gray-700">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="text-[16px] w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </motion.div>
                    <motion.div whileHover={{ y: -2 }} className="space-y-2">
                      <label className="block text-[17px] font-semibold text-gray-700">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="text-[16px] w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="(870) 123-4567"
                      />
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ y: -2 }} className="space-y-2">
                    <label className="block text-[17px] font-semibold text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} className="space-y-2">
                    <label className="block text-[17px] font-semibold text-gray-700">Service Needed *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="Drainage Solutions">Drainage Solutions</option>
                      <option value="Landscaping & Sod">Landscaping & Sod</option>
                      <option value="Sprinkler Systems">Sprinkler Systems</option>
                      <option value="Privacy Fencing">Privacy Fencing</option>
                      <option value="Tree Services">Tree & Brush Cleanup</option>
                      <option value="Holiday Lighting">Holiday Lighting</option>
                      <option value="Snow Removal">Snow & Ice Management</option>
                      <option value="Other">Other Service</option>
                    </select>
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} className="space-y-2">
                    <label className="block text-[17px] font-semibold text-gray-700">Project Details</label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-linear-to-r from-green-600 to-forest-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg text-[16px] transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                    <span className="relative z-10">
                      {isSubmitting ? 'SENDING...' : 'GET FREE QUOTE'}
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </motion.button>

                  {submitStatus === 'error' && (
                    <motion.div
                      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="flex items-center gap-2">
                        <span>⚠️ There was an error sending your message. Please call us directly at (870) 530-4289</span>
                      </p>
                    </motion.div>
                  )}

                  <p className="text-center text-gray-500 text-sm">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-linear-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#16a34a 1px, transparent 1px),
                           linear-gradient(90deg, #16a34a 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-semibold">LOCAL SERVICE AREA</span>
            </motion.div>

            <h2 className="text-[28px] md:text-4xl lg:text-[2.4rem] font-bold text-gray-900 mb-5">
              Proudly Serving
              <span className="block text-green-600">Northeast Arkansas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring professional landscaping and drainage solutions to communities across our region
            </p>
          </motion.div>

          {/* Service Area Grid with Enhanced Design */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delay: 0.3 }}
          >
            {[
              { name: 'Jonesboro', county: 'Craighead County' },
              { name: 'Brookland', county: 'Craighead County' },
              { name: 'Monette', county: 'Craighead County' },
              { name: 'Bono', county: 'Craighead County' },
              { name: 'Harrisburg', county: 'Poinsett County' },
              { name: 'Trumann', county: 'Poinsett County' },
              { name: 'Paragould', county: 'Greene County' },
              { name: 'Marmaduke', county: 'Greene County' }
            ].map((city, index) => (
              <motion.div
                key={city.name}
                className="group relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-green-600 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-green-500 rounded-full group-hover:bg-green-400 transition-colors"></div>

                {/* City Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    {city.name}
                  </h3>

                  <p className="text-gray-500 text-sm font-medium group-hover:text-gray-600 transition-colors">
                    {city.county}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="text-center mt-12 pt-8 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-gray-600 mb-4 text-lg">
              Don't see your community listed?
            </p>
            <motion.a
              href="tel:870-530-4289"
              onClick={trackPhoneCall}
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-lg group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Call to confirm service area</span>
              <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-125 transition-transform"></div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}