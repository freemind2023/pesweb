'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';

const allImages = Array.from({ length: 9 }, (_, i) => ({
  src: `/brand/events/${i + 1}.jpg`,
  alt: `PES Event ${i + 1}`,
  categoryIndex: i < 4 ? 1 : i < 7 ? 2 : 3,
}));

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { lang } = useLanguage();
  const tr = t[lang].events;

  const filtered = activeTab === 0 ? allImages : allImages.filter((img) => img.categoryIndex === activeTab);

  return (
    <>
      {/* Hero */}
      <section className="navy-gradient pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold font-semibold text-sm uppercase tracking-widest">
            {tr.label}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-white text-3xl md:text-5xl font-bold mt-2 mb-4">
            {tr.heading}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/70 text-base">
            {tr.sub}
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30">
        <div className="max-w-4xl mx-auto px-4 flex gap-2 overflow-x-auto py-3">
          {tr.tabs.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${activeTab === i ? 'bg-navy text-white' : 'bg-bg-light text-navy hover:bg-navy/10'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <section className="py-10 md:py-14 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          {activeTab === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-6">
              <h2 className="font-serif text-navy text-xl md:text-2xl font-bold">{tr.ojtH}</h2>
              <p className="text-text-muted text-sm mt-1">{tr.ojtSub}</p>
            </motion.div>
          )}
          {activeTab === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-6">
              <h2 className="font-serif text-navy text-xl md:text-2xl font-bold">{tr.skillH}</h2>
              <p className="text-text-muted text-sm mt-1">{tr.skillSub}</p>
            </motion.div>
          )}

          <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {filtered.map((img, i) => (
              <motion.div key={img.src + activeTab} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                className="relative break-inside-avoid cursor-pointer group overflow-hidden rounded-xl"
                onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}>
                <div className={`relative ${i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
                  </div>
                  <span className="absolute top-2 right-2 px-2 py-0.5 bg-gold text-navy text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    {tr.tabs[img.categoryIndex]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox open={lightboxOpen} close={() => setLightboxOpen(false)} index={lightboxIndex}
        slides={filtered.map((img) => ({ src: img.src, alt: img.alt }))} />
    </>
  );
}
