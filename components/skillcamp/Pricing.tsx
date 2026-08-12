'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SC, waLink } from './constants';

const INCLUDES = ['Return travel from Pune', 'Tent stay by Pawna Lake', 'All meals', 'Camp kit', 'Certificate', 'Guided trek'];

const TIERS = [
  { name: 'Early Bird', price: '2,999', badge: 'Limited seats', highlight: false },
  { name: 'Regular', price: '3,499', badge: 'Most popular', highlight: true },
  { name: 'Late', price: '3,999', badge: 'Last-minute', highlight: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6" style={{ background: SC.ink }}>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="sc-eyebrow text-xs font-bold uppercase" style={{ color: SC.teal }}>Pricing</span>
        <h2 className="font-bold mt-2" style={{ color: SC.mist, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
          One weekend. Every essential covered.
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {TIERS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="relative rounded-3xl p-7 flex flex-col transition-shadow"
            style={{
              background: t.highlight ? `linear-gradient(180deg, ${SC.teal}22, ${SC.ink})` : `${SC.mist}0A`,
              border: t.highlight ? `1.5px solid ${SC.teal}` : `1px solid ${SC.slate}33`,
              boxShadow: t.highlight ? `0 0 32px ${SC.teal}33` : 'none',
            }}
          >
            {t.highlight && (
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold uppercase"
                style={{ background: SC.orange, color: SC.mist, letterSpacing: '0.08em' }}
              >
                {t.badge}
              </span>
            )}
            {!t.highlight && (
              <span className="sc-eyebrow text-[11px] font-bold uppercase mb-2" style={{ color: SC.slate, letterSpacing: '0.1em' }}>
                {t.badge}
              </span>
            )}
            <h3 className="font-bold text-lg mt-2 mb-1" style={{ color: SC.mist }}>{t.name}</h3>
            <p className="mb-6">
              <span className="font-bold" style={{ color: SC.mist, fontSize: '2.5rem' }}>₹{t.price}</span>
              <span className="text-sm ml-1" style={{ color: SC.slate }}>/ student</span>
            </p>

            <ul className="space-y-2.5 mb-8 flex-1">
              {INCLUDES.map((inc) => (
                <li key={inc} className="flex items-center gap-2 text-sm" style={{ color: `${SC.mist}CC` }}>
                  <Check size={15} style={{ color: SC.teal, flexShrink: 0 }} /> {inc}
                </li>
              ))}
            </ul>

            <a
              href={waLink(`Hi! I'd like to reserve my seat for GenAI Basecamp — ${t.name} tier (₹${t.price}). Please share the next steps.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2"
              style={{ background: SC.orange, color: SC.mist }}
            >
              Reserve My Seat
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
