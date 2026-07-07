'use client';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';

const VIDEO_ID = 'wJ70f6XEdu8';

export default function IntroVideo() {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;

  return (
    <section className="py-10 md:py-14" style={{ background: 'linear-gradient(135deg,#071232 0%,#0B1F5C 100%)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
          <span className="inline-flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-widest mb-2">
            <FaYoutube size={14} /> Watch First
          </span>
          <h2 className="text-white font-black text-2xl md:text-3xl">Practical MBA — In 60 Seconds</h2>
          <p className="text-white/50 text-sm mt-1">See what 18 months of real OJT actually looks like.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="mx-auto rounded-2xl overflow-hidden shadow-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.12)', maxWidth: 340 }}
        >
          <div className="relative w-full" style={{ paddingBottom: '177.77%' }}>
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Practical MBA Intro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <button onClick={() => setPlaying(true)} className="absolute inset-0 w-full h-full group" aria-label="Play Practical MBA intro video">
                <img src={thumb} alt="Practical MBA intro video" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.35)' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform" style={{ background: 'rgba(220,38,38,0.95)' }}>
                    <Play size={26} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
