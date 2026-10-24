'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MessageCircle, ArrowRight, Phone, ChevronDown, Sparkles, Clock, FileStack, Briefcase, Download } from 'lucide-react';
import { WA, WA_BROCHURE } from './constants';
import { AI_TOOL_FILES } from '@/components/skillcamp/constants';

const PHRASES = ['STRATEGY.', 'AI TOOLS.', 'REAL CAMPAIGNS.'];
const PREVIEW_TOOLS = AI_TOOL_FILES.slice(0, 10);
const PARTICLES = Array.from({ length: 36 }, (_, i) => ({
  id: i, x: Math.random() * 100, y: Math.random() * 100,
  s: Math.random() * 3 + 1, d: Math.random() * 10 + 7, dl: Math.random() * 4,
}));

export default function Hero({ onApply }: { onApply: () => void }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const phrase = PHRASES[idx];
    const t = setTimeout(() => {
      if (!del && text.length < phrase.length) setText(phrase.slice(0, text.length + 1));
      else if (!del && text.length === phrase.length) setDel(true);
      else if (del && text.length > 0) setText(text.slice(0, -1));
      else { setDel(false); setIdx((i) => (i + 1) % PHRASES.length); }
    }, del ? 35 : text.length === phrase.length ? 2200 : 75);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: 'linear-gradient(135deg,#071232 0%,#0B1F5C 55%,#0d2570 100%)' }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {mounted && PARTICLES.map((p) => (
          <motion.div key={p.id} className="absolute rounded-full bg-white"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s, opacity: 0.12 }}
            animate={{ y: [-18, 18, -18], opacity: [0.08, 0.3, 0.08] }}
            transition={{ duration: p.d, delay: p.dl, repeat: Infinity, ease: 'easeInOut' }} />
        ))}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10" style={{ background: 'radial-gradient(circle,#F5B400,transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle,#6366F1,transparent)' }} />
      </div>

      {/* Header bar */}
      <div className="relative z-10 border-b border-white/10 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-xl p-1 shadow-lg flex-shrink-0">
              <Image src="/brand/peslogo.png" alt="Practical EduSkills" width={40} height={40} className="h-9 w-auto rounded-lg object-contain" />
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div className="hidden sm:block leading-tight">
              <p className="text-white text-xs font-bold">Practical EduSkills</p>
              <p className="text-[#F5B400] text-[10px] font-medium devanagari">योगः कर्मसु कौशलम्</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="tel:+919890959990" className="hidden md:flex items-center gap-1.5 text-white/70 text-sm hover:text-[#F5B400] transition-colors">
              <Phone size={13} className="text-[#F5B400]" /> 98909 59990
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold" style={{ background: '#25D366' }}>
              <MessageCircle size={13} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Hero body */}
      <div className="relative z-10 flex-1 flex items-center px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[#F5B400] text-xs font-bold mb-4 border border-[#F5B400]/30"
              style={{ background: 'rgba(245,180,0,0.15)' }}>
              <Sparkles size={12} className="animate-pulse" /> ADMISSIONS OPEN 2026
            </motion.span>

            <p className="text-white/50 text-xs font-semibold tracking-wide mb-2 uppercase">AI-Powered Career Program</p>

            <h1 className="font-black text-white mb-2 leading-none" style={{ fontSize: 'clamp(1.7rem,5vw,3.3rem)', fontFamily: "'DM Sans',sans-serif" }}>
              {text}<span className="text-[#F5B400] animate-pulse">|</span>
            </h1>

            <motion.div initial={{ opacity: 0, y: 20, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 120 }} className="relative mb-5 -mt-1">
              <h2 className="font-serif font-black leading-[0.95] tracking-tight inline-block gold-shine-text"
                style={{
                  fontSize: 'clamp(2.5rem,7.5vw,5.25rem)', fontFamily: "'Playfair Display', serif",
                  backgroundImage: 'linear-gradient(120deg,#FFE9A8 0%,#FFD43B 25%,#F5B400 55%,#C9A84C 80%,#FFE9A8 100%)',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 6px 28px rgba(245,180,0,0.4))',
                }}>
                Digital <span className="italic">Marketing</span>
              </h2>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }}
                className="h-1 rounded-full mt-1 origin-left" style={{ background: 'linear-gradient(90deg,#F5B400,#FFD43B,transparent)', maxWidth: 260 }} />
            </motion.div>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-2 max-w-lg">
              Master digital marketing the way Indian brands actually run it in 2026 — then step into a
              paid role at a partner company and prove it with{' '}
              <span className="text-white font-semibold">real campaigns, real data and real results.</span>
            </p>
            <p className="text-white/50 text-xs mb-6 border-l-2 border-[#F5B400] pl-3">
              Marketing first. AI second — use AI for research, ideation and automation, never outsource judgement.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button onClick={onApply}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[#0B1F5C] text-base hover:scale-105 active:scale-95 transition-transform shadow-lg"
                style={{ background: 'linear-gradient(135deg,#F5B400,#FFD43B)', boxShadow: '0 0 24px rgba(245,180,0,0.35)' }}>
                Apply Now <ArrowRight size={18} />
              </button>
              <a href={WA_BROCHURE} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-base border-2 border-white/25 hover:border-[#F5B400] hover:text-[#F5B400] transition-all">
                <Download size={18} /> Download Brochure
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1.5">
              {[
                { Icon: Clock, t: '6 Months · 168 Live Hours' },
                { Icon: FileStack, t: '12 Portfolio Projects' },
                { Icon: Briefcase, t: '3-Month Paid Internship' },
              ].map((b) => (
                <span key={b.t} className="text-xs text-white/55 flex items-center gap-1.5">
                  <b.Icon size={12} className="text-[#F5B400]" /> {b.t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — AI tool preview grid */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl p-5 sm:p-6 shadow-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)' }}>
              <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest mb-3">Tools you&apos;ll actually use</p>
              <div className="grid grid-cols-5 gap-2.5 mb-5">
                {PREVIEW_TOOLS.map((f) => (
                  <div key={f} className="aspect-square rounded-xl flex items-center justify-center p-1.5" style={{ background: '#F4F7F5' }}>
                    <Image src={`/skillcamp/ai-tools/${f}`} alt="" width={40} height={40} className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-xs leading-relaxed mb-4">
                AI assistants · SEO tools · Google &amp; Social Ads · Analytics &amp; Tag Manager · CMS ·
                Email/CRM · Dashboards · No-code automation.
              </p>
              {([
                { label: 'Agency Simulation', Icon: Briefcase, bg: '#F5B400', color: '#0B1F5C' },
                { label: 'Portfolio Over Theory', Icon: FileStack, bg: '#6366F1', color: '#fff' },
              ]).map((c) => (
                <div key={c.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold mr-2 mb-2" style={{ background: c.bg, color: c.color }}>
                  <c.Icon size={12} />{c.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-1 z-10"
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
