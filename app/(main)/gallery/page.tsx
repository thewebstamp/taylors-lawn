// app/(main)/gallery/page.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ExternalLink, Filter, X, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'drainage', name: 'Drainage' },
    { id: 'landscaping', name: 'Landscape & Sod' },
    { id: 'others', name: 'Others' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Drainage Solution',
      category: 'drainage',
      image: '/drainage-1.jpg',
    },
    {
      id: 2,
      title: 'Complete Landscape Makeover',
      category: 'landscaping',
      image: '/landscaping-1.jpg',
    },
    {
      id: 3,
      title: 'Privacy Fencing Project',
      category: 'others',
      image: '/others-1.jpg',
    },
    {
      id: 4,
      title: 'Custom Deck Building',
      category: 'others',
      image: '/others-2.jpg',
    },
    {
      id: 5,
      title: 'Holiday Lighting',
      category: 'others',
      image: '/others-3.jpg',
    },
    {
      id: 6,
      title: 'Sprinkler System Installation',
      category: 'landscaping',
      image: '/landscaping-2.jpg',
    },
    {
      id: 7,
      title: 'Surface Drainage Solution',
      category: 'drainage',
      image: '/drainage-2.jpg',
    },
    {
      id: 8,
      title: 'Premium Sod Installation',
      category: 'landscaping',
      image: '/landscaping-3.jpg',
    },
    {
      id: 9,
      title: 'Patio Hardscaping',
      category: 'others',
      image: '/others-4.jpg',
    },
    {
      id: 10,
      title: 'French Drain Installation',
      category: 'drainage',
      image: '/drainage-3.jpg',
    },
    {
      id: 11,
      title: 'French Drain Installation',
      category: 'drainage',
      image: '/drainage-4.jpg',
    },
    {
      id: 12,
      title: 'Complete Landscape Makeover',
      category: 'landscaping',
      image: '/landscaping-4.jpg',
    },
    {
      id: 13,
      title: 'Privacy Fencing Project',
      category: 'others',
      image: '/others-5.jpg',
    },
    {
      id: 14,
      title: 'Custom Deck Building',
      category: 'others',
      image: '/others-6.jpg',
    },
    {
      id: 15,
      title: 'Holiday Lighting',
      category: 'others',
      image: '/others-7.jpg',
    },
    {
      id: 16,
      title: 'Sprinkler System Installation',
      category: 'landscaping',
      image: '/landscaping-5.jpg',
    },
    {
      id: 17,
      title: 'Surface Drainage Solution',
      category: 'drainage',
      image: '/drainage-5.jpg',
    },
    {
      id: 18,
      title: 'Premium Sod Installation',
      category: 'landscaping',
      image: '/landscaping-6.jpg',
    },
    {
      id: 19,
      title: 'Patio Hardscaping',
      category: 'others',
      image: '/others-8.jpg',
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // Handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeProject();
  };

  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll position when navigating to this page
    window.scrollTo(0, 0);

    // Force a re-layout to ensure proper scroll position
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-linear-to-br from-white to-green-50/30" onKeyDown={handleKeyDown} tabIndex={0}>
      <section className="relative pt-25 lg:pt-30 pb-20 overflow-hidden">
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

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.div
            className="inline-flex items-center gap-2 bg-green-600/70 text-white px-4 py-2 rounded-full mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="h-4 w-4" />
            <span className="text-sm font-semibold">QUALITY CRAFTMANSHIP</span>
          </motion.div>
          <motion.h1
            className="text-[28px] md:text-4xl lg:text-[2.4rem] font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            A Glimpse Into Our Portfolio
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            See the quality and craftsmanship we bring to every project in Northeast Arkansas
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex  text-forest-900 items-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <span>Service Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <span>98% Recommended</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section id='portfolio' className="py-3 bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`text-[16px] flex items-center gap-2 px-6 py-1 rounded-full font-semibold transition-all ${activeFilter === category.id
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {activeFilter === category.id && <Filter className="h-4 w-4" />}
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                layout
                onClick={() => openProject(project)}
              >
                {/* Single Image Container */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col p-6">
                    <ExternalLink className="h-8 w-8 text-white mb-2" />
                    <span className="text-white font-semibold text-center">
                      Click to view full image
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(c => c.id === project.category)?.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            {/* Close Button */}
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Image Only - Full Screen */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-white to-gray-50/50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div
          className="absolute -top-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-20"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />

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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-[28px] md:text-4xl lg:text-[2.4rem] font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Property?
          </motion.h2>
          <motion.p
            className="text-gray-900 text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let us create stunning results for your home or business, just like we've done for countless satisfied customers across Northeast Arkansas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-block bg-gray-900 text-gray-200 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              💬 GET FREE ESTIMATE
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-gray-900 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg hover:bg-white/10 transition-colors"
            >
              View All Services
            </Link>
          </motion.div>
          <motion.p
            className="mt-6 text-forest-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            📍 Serving Northeast Arkansas • 25+ Years Experience • 1-Year Guarantee
          </motion.p>
        </div>
      </section>
    </div>
  );
}