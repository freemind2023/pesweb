'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const associations = [
  { src: '/brand/associations/mccia.png', alt: 'MCCIA' },
  { src: '/brand/associations/bni.png', alt: 'BNI' },
  { src: '/brand/associations/rotary.png', alt: 'Rotary Club' },
  { src: '/brand/associations/gulf-mahratta.png', alt: 'Gulf Mahratta Corporation' },
  { src: '/brand/associations/nsdc.png', alt: 'NSDC' },
  { src: '/brand/associations/iso.png', alt: 'ISO Certified' },
];

export default function AssociationsSection() {
  return (
    <section className="py-12 md:py-16 bg-bg-light border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Trusted By</span>
          <h2 className="font-serif text-navy text-xl md:text-2xl font-bold mt-1">
            Our Associations & Certifications
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {associations.map((assoc, i) => (
            <motion.div
              key={assoc.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="association-logo"
            >
              <Image
                src={assoc.src}
                alt={assoc.alt}
                width={100}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
