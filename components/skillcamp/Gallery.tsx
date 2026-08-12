'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Expand } from 'lucide-react';
import { SC, GALLERY_FILES } from './constants';

const ALTS = [
  'Students collaborating at GenAI Basecamp',
  'Hands-on AI lab session at the lakeside camp',
  'Team pitching their startup idea at GenAI Basecamp',
  'Bonfire evening at Pawna Lake camp',
  'Tents pitched by Pawna Lake for the overnight stay',
  'Students trekking on Day 2 of GenAI Basecamp',
  'Mentor connect session with students',
  'Group photo of GenAI Basecamp batch',
  'Students working on laptops during the AI workshop',
  'Faculty leading a GenAI Foundations session',
];
const altFor = (i: number) => `${ALTS[i % ALTS.length]} — photo ${i + 1}`;

const ASPECTS = ['aspect-[4/5]', 'aspect-square', 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]'];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = GALLERY_FILES.map((f, i) => ({ src: `/skillcamp/gallery/${f}`, alt: altFor(i) }));

  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6" style={{ background: SC.ink }}>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bold mb-4"
          style={{ color: SC.mist, fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
        >
          What basecamp actually looks like.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-base sm:text-lg"
          style={{ color: SC.slate }}
        >
          Real photos from real batches — bonfires, pitches, tents, and the trek.
        </motion.p>
      </div>

      {/* Mobile: horizontal swipe carousel */}
      <div className="md:hidden -mx-4 px-4 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => { setIndex(i); setOpen(true); }}
            className="relative flex-shrink-0 w-[70vw] aspect-[4/5] rounded-2xl overflow-hidden snap-start"
          >
            <Image src={img.src} alt={img.alt} fill sizes="70vw" className="object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      {/* Desktop/tablet: masonry */}
      <div className="hidden md:block max-w-6xl mx-auto columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 8) * 0.05 }}
            onClick={() => { setIndex(i); setOpen(true); }}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2"
            style={{ ['--tw-ring-color' as string]: SC.teal }}
          >
            <div className={`relative w-full ${ASPECTS[i % ASPECTS.length]}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `${SC.ink}66` }}>
                <Expand size={22} color={SC.mist} />
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={images} />
    </section>
  );
}
