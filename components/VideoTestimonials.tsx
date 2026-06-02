'use client';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import { Play } from 'lucide-react';
import { useState } from 'react';

export interface VideoItem {
  id: string;
  title: string;
  label: string;
}

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden shadow-xl flex-shrink-0 w-full"
      style={{ border: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={thumb}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'rgba(0,0,0,0.35)' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"
                style={{ background: 'rgba(220,38,38,0.95)' }}>
                <Play size={22} className="text-white ml-1" fill="white" />
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="px-4 py-3 flex items-center gap-2"
        style={{ background: 'rgba(11,31,92,0.95)' }}>
        <FaYoutube size={15} className="text-red-500 flex-shrink-0" />
        <p className="text-white text-xs font-semibold leading-snug line-clamp-2">{video.label}</p>
      </div>
    </motion.div>
  );
}

export default function VideoTestimonials({
  videos,
  heading = 'Hear From Our Students & Industry Leaders',
  subheading = 'Real voices. Real results.',
}: {
  videos: VideoItem[];
  heading?: string;
  subheading?: string;
}) {
  return (
    <section
      className="py-10 md:py-14"
      style={{ background: 'linear-gradient(135deg,#071232 0%,#0B1F5C 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-widest mb-2">
            <FaYoutube size={14} /> Video Testimonials
          </span>
          <h2 className="text-white font-black text-2xl md:text-3xl">{heading}</h2>
          <p className="text-white/50 text-sm mt-1">{subheading}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((v, i) => (
            <VideoCard key={v.id} video={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
