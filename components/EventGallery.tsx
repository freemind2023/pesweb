'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Link from 'next/link';

const eventImages = Array.from({ length: 9 }, (_, i) => ({
  src: `/brand/events/${i + 1}.jpg`,
  alt: `PES Event ${i + 1}`,
}));

export default function EventGallery({ limit = 6, showViewAll = true }: { limit?: number; showViewAll?: boolean }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const displayImages = eventImages.slice(0, limit);

  return (
    <section className="py-14 md:py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Gallery</span>
          <h2 className="font-serif text-navy text-2xl md:text-4xl font-bold mt-1 mb-2">Life at PES</h2>
          <p className="text-text-muted text-sm md:text-base max-w-xl mx-auto">
            From OJT parties to skill camps at Pawna Lake — every moment is an experience
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {displayImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative break-inside-avoid cursor-pointer group overflow-hidden rounded-xl"
              onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
            >
              <div className={`relative ${i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-8">
            <Link
              href="/events"
              className="inline-block px-6 py-3 border-2 border-navy text-navy font-semibold rounded-xl hover:bg-navy hover:text-white transition-all"
            >
              View All Events →
            </Link>
          </div>
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={eventImages.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  );
}
