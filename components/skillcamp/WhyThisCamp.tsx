'use client';
import { motion } from 'framer-motion';
import { Brain, Rocket, Users, Tent } from 'lucide-react';
import { SC } from './constants';

const CARDS = [
  { icon: Brain, title: 'Learn AI tools that matter', desc: 'Hands-on with the exact AI tools employers and founders actually use.' },
  { icon: Rocket, title: 'Pitch your own startup idea', desc: 'Build and pitch a real mini-startup with your team, using AI to move fast.' },
  { icon: Users, title: 'Meet a real founder', desc: 'Direct Q&A access most students never get in college.' },
  { icon: Tent, title: 'Camp + trek by the lake', desc: 'Tents, bonfire, and a guided trek — not a conference hall.' },
];

export default function WhyThisCamp() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6" style={{ background: SC.mist }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="sc-eyebrow text-xs font-bold uppercase" style={{ color: SC.accent }}>Why This Camp</span>
          <h2 className="font-bold mt-2" style={{ color: SC.ink, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            More than a certificate.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl p-6 bg-white border transition-shadow hover:shadow-lg"
              style={{ borderColor: `${SC.accent}22` }}
            >
              <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${SC.accent}18` }}>
                <c.icon size={22} style={{ color: SC.accent }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: SC.ink }}>{c.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: SC.slate }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
