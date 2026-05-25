'use client';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

const SHORT = {
  id: 'Z8usP9ePhTk',
  title: 'Life at PES — Student Experience',
};

const CHANNEL_URL = 'https://www.youtube.com/@practicaleduskills2338';
const SHORT_URL = `https://www.youtube.com/shorts/${SHORT.id}`;

export default function YouTubeSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">YouTube</span>
          <h2 className="font-serif text-navy text-2xl md:text-4xl font-bold mt-1 mb-2">
            See Our Students Transform
          </h2>
          <p className="text-text-muted text-sm md:text-base">
            Real stories. Real success. Watch our students grow.
          </p>
        </motion.div>

        {/* Short Video — portrait embed */}
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* 9:16 aspect ratio for Shorts */}
            <div className="relative w-full" style={{ paddingBottom: '177.77%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${SHORT.id}?rel=0&modestbranding=1`}
                title={SHORT.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="px-4 py-3 bg-navy flex items-center gap-2">
              <FaYoutube size={18} className="text-red-500 shrink-0" />
              <p className="text-white font-medium text-sm truncate">{SHORT.title}</p>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a
              href={SHORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors text-sm"
            >
              <FaYoutube size={18} /> Watch on YouTube <ExternalLink size={14} />
            </a>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border-2 border-red-600 text-red-600 font-bold rounded-xl hover:bg-red-50 transition-colors text-sm"
            >
              <FaYoutube size={18} /> Subscribe to Our Channel
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
