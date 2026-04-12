'use client';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

// ✅ Replace these video IDs with actual videos from @practicaleduskills2338
// How to get: Open any video on your channel → copy the "v=" value from the URL
const videos = [
  { id: 'REPLACE_VIDEO_ID_1', title: 'PES Student Success Story' },
  { id: 'REPLACE_VIDEO_ID_2', title: 'Dubai Placement Experience' },
  { id: 'REPLACE_VIDEO_ID_3', title: 'OJT Party Celebration 2024' },
];

const hasRealVideos = videos.every(v => !v.id.startsWith('REPLACE'));

const CHANNEL_URL = 'https://www.youtube.com/@practicaleduskills2338';

export default function YouTubeSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
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

        {hasRealVideos ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-3 bg-bg-light">
                  <p className="text-navy font-medium text-sm">{video.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Placeholder shown until real video IDs are added */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-12 md:p-16 border border-gold/20 group hover:border-gold/50 transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <FaYoutube size={40} color="white" />
              </div>
              <div className="text-center">
                <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-1">Watch on YouTube</p>
                <h3 className="text-white font-serif text-2xl md:text-3xl font-bold mb-2">
                  Practical EduSkills
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  Student success stories • Dubai placements • OJT celebrations • Campus life
                </p>
                <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white font-bold rounded-xl group-hover:bg-red-500 transition-colors text-sm">
                  <FaYoutube size={16} /> Visit Our Channel <ExternalLink size={14} />
                </span>
              </div>
            </a>
          </motion.div>
        )}

        <div className="text-center">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
          >
            <FaYoutube size={20} /> Subscribe to Our Channel
          </a>
        </div>
      </div>
    </section>
  );
}
