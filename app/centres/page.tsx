'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

const centres = [
  {
    name: 'Garware Night College',
    type: 'NSDC Skill Centre',
    address: 'Garware Night College, Near Law College Road, Erandwane, Pune – 411004',
    img: '/brand/centres/garware-college.jpg',
    mapsLink: 'https://maps.google.com',
    badge: 'NSDC Certified',
    badgeColor: 'bg-success',
  },
  {
    name: 'Modern College, Ganesh Khind',
    type: 'Training Centre',
    address: 'Modern College of Arts, Science & Commerce, Shivajinagar, Pune – 411005',
    img: '/brand/centres/modern-college.webp',
    mapsLink: 'https://maps.google.com',
    badge: 'Active Centre',
    badgeColor: 'bg-navy',
  },
  {
    name: 'Practical EduSkills Head Office',
    type: 'Head Office & Main Centre',
    address: '3rd Floor, Butte Patil Complex, Warje Malwadi Rd, Erandwane, Pune – 411052',
    img: '/brand/hero-poster.jpg',
    mapsLink: 'https://maps.google.com',
    badge: 'Main Office',
    badgeColor: 'bg-gold',
  },
  {
    name: 'College of Commerce, Baramati',
    type: 'Affiliate Centre',
    address: 'College of Practical B.Com, Baramati, Dist. Pune – 413102',
    img: '/brand/centres/baramati-college.jpg',
    mapsLink: 'https://maps.google.com',
    badge: 'Baramati Campus',
    badgeColor: 'bg-accent',
  },
];

export default function CentresPage() {
  return (
    <>
      <section className="navy-gradient pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold font-semibold text-sm uppercase tracking-widest">Locations</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-white text-3xl md:text-5xl font-bold mt-2 mb-4">Our Centres</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/70 text-base">
            4 centres across Pune & Baramati. Find the one nearest to you.
          </motion.p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {centres.map((centre, i) => (
              <motion.div key={centre.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:border-gold hover:shadow-lg transition-all group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={centre.img} alt={centre.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  <span className={`absolute top-3 left-3 px-3 py-1 ${centre.badgeColor} text-white text-xs font-bold rounded-full`}>
                    {centre.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-navy font-bold text-xl mb-1">{centre.name}</h3>
                  <p className="text-gold text-sm font-medium mb-3">{centre.type}</p>
                  <div className="flex gap-2 items-start text-text-muted text-sm mb-4">
                    <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <span>{centre.address}</span>
                  </div>
                  <div className="flex gap-3">
                    <a href={centre.mapsLink} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy/80 transition-all">
                      <MapPin size={14} /> Get Directions
                    </a>
                    <a href="tel:+919890959990"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 border-2 border-navy text-navy text-sm font-semibold rounded-lg hover:bg-navy hover:text-white transition-all">
                      <Phone size={14} /> Call Us
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
