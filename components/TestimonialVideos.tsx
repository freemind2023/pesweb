'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import { useLanguage } from '@/lib/i18n';

const STUDENT_VIDEOS = [
  'Ect974gR51c', 'ghGJUeGBDG4', 'R7_6O9js1Sg', 'wMv2iynKsyw',
  'WqQtbuulBgo', 'zjhd-p665P0', 'havkuw5sMtw', 'k3RomzeNq7E',
  'CkKkPnNAMPc', 'XgvO2gGMtSY', 'OpZSOjvtwvU', '0G8GYCXjUCQ',
  'YZRYTwk9DxI', 'faq8GXg1Odw', 'roAWADjkH10', 'H0yxCu0MUhU',
  'Fha0K2_M05c', 'Sb5XYCcNe1g', 'OgnzAIxGUbw', 'FWK8iasvPng',
  'CNrvmH6_M4w', '1cGLxiaFz-o', 'Zis5qDcMQPg', 'TaOnXYnR-60',
  'DO66yW1ISPU', 'mYX0a9A0NEE', 'MKkfX7BJ3a4', '4a9_X2dDEFc',
  'ySRDACi5Dt0', 'QDTOEHLPsKM', 'YrioqpQW5iU', '7r-4xNlUR4w',
  'WGgdI7T9gDU', 'VUd-_REP7S4', 'O1MtqlPcQWM', 'PM7EAxuL3zg',
  'giDWF5EICY8', 'bAMD0J5_CHg', '0WGIYakhlCc', 'zGLbEXnG9xw',
  'vY63DeLeiNw',
];

function ShortCard({ id, index }: { id: string; index: number }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.05, 0.4) }}
      className="flex-shrink-0 w-[160px] sm:w-[180px] rounded-2xl overflow-hidden shadow-lg border border-white/10"
    >
      <div className="relative" style={{ paddingBottom: '177%' }}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title="Student Testimonial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button onClick={() => setPlaying(true)} className="absolute inset-0 w-full h-full group" aria-label="Play video">
            <img src={thumb} alt="Student Testimonial" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"
                style={{ background: 'rgba(220,38,38,0.95)' }}>
                <Play size={18} className="text-white ml-0.5" fill="white" />
              </div>
            </div>
          </button>
        )}
      </div>
    </motion.div>
  );
}

function AutoScrollCarousel({ ids }: { ids: string[] }) {
  const cardW = 183;
  const gap = 12;
  const totalW = ids.length * (cardW + gap);
  const duration = ids.length * 3;

  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-3 hover:[animation-play-state:paused]"
        animate={{ x: [0, -totalW] }}
        transition={{ x: { duration, repeat: Infinity, ease: 'linear' } }}
        style={{ width: totalW * 2 }}
      >
        {[...ids, ...ids].map((id, i) => (
          <ShortCard key={`${id}-${i}`} id={id} index={0} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialVideos() {
  const { lang } = useLanguage();
  const studentLabel = lang === 'mr' ? 'विद्यार्थी प्रतिक्रिया' : 'Student Testimonials';
  const studentH = lang === 'mr' ? 'आमचे विद्यार्थी बोलतात' : 'Our Students Speak';
  const studentSub = lang === 'mr' ? 'खरे विद्यार्थी. खरे अनुभव. खरे यश.' : 'Real students. Real experiences. Real success stories.';

  return (
    <section className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-widest mb-2">
              <FaYoutube size={14} /> {studentLabel}
            </span>
            <h2 className="text-[#0B1F5C] font-black text-2xl md:text-3xl">{studentH}</h2>
            <p className="text-gray-500 text-sm mt-1">{studentSub}</p>
          </motion.div>

          <AutoScrollCarousel ids={STUDENT_VIDEOS} />
        </div>
      </section>
  );
}
