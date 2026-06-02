'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MessageCircle, ArrowRight, Phone, ChevronDown, Sparkles, Calculator, TrendingUp, Laptop, Check, Star } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const PHRASES = ['YOUR CAREER.', 'YOUR SKILLS.', 'YOUR SUCCESS.'];
const WA = 'https://wa.me/919689348709?text=Hi%2C+I+want+to+know+about+Practical+BCom+at+College+of+Practical+Commerce+Baramati';
const PARTICLES = Array.from({ length: 36 }, (_, i) => ({
  id: i, x: Math.random() * 100, y: Math.random() * 100,
  s: Math.random() * 3 + 1, d: Math.random() * 10 + 7, dl: Math.random() * 4,
}));

export default function Hero({ onApply }: { onApply: () => void }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);

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
    <section className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#071232 0%,#0B1F5C 55%,#0d2570 100%)' }}>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div key={p.id} className="absolute rounded-full bg-white"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s, opacity: 0.12 }}
            animate={{ y: [-18, 18, -18], opacity: [0.08, 0.3, 0.08] }}
            transition={{ duration: p.d, delay: p.dl, repeat: Infinity, ease: 'easeInOut' }} />
        ))}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle,#F5B400,transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle,#10B981,transparent)' }} />
      </div>

      {/* Header bar */}
      <div className="relative z-10 border-b border-white/10 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-xl p-1.5 shadow-lg flex-shrink-0">
              <Image src="/brand/peslogo.png" alt="PES" width={40} height={40}
                className="h-9 w-auto rounded-lg object-contain" />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <p className="text-white text-xs font-bold">College of Practical Commerce & Management</p>
              <div className="flex items-center gap-1.5">
                <Star size={9} className="text-[#F5B400] fill-[#F5B400]" />
                <p className="text-[#F5B400] text-[10px] font-medium">PES Flagship Centre · Baramati</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher variant="navbar" />
            <a href="tel:+919689348709" className="hidden md:flex items-center gap-1.5 text-white/70 text-sm hover:text-[#F5B400] transition-colors">
              <Phone size={13} className="text-[#F5B400]" /> +91 96893 48709
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold"
              style={{ background: '#25D366' }}>
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
              <Sparkles size={12} className="animate-pulse" /> 2026–27 ADMISSIONS OPEN · BARAMATI
            </motion.span>

            <p className="text-white/50 text-xs font-semibold tracking-wide mb-2 uppercase">
              Practical Skills. Real Stipend. Guaranteed Career.
            </p>

            <h1 className="font-black text-white mb-2 leading-none"
              style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontFamily: "'DM Sans',sans-serif" }}>
              {text}<span className="text-[#F5B400] animate-pulse">|</span>
            </h1>

            <p className="text-lg sm:text-2xl font-bold text-[#F5B400] mb-3 devanagari">
              शिका · कमवा · Apprenticeship करा · यशस्वी व्हा — बारामती
            </p>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-2 max-w-lg">
              PES&apos;s own flagship centre — the most practical B.COM combining Fintech,
              Digital Accounting & 2 years paid Apprenticeship, right here in{' '}
              <span className="text-white font-semibold">Baramati.</span>
            </p>
            <p className="text-white/50 text-xs mb-1 border-l-2 border-[#F5B400] pl-3">
              Practical B.COM · Fintech & Digital Accounting · 2 Years Apprenticeship
            </p>
            <p className="text-white/40 text-[10px] mb-6 pl-3">
              📍 Pencil Square Building, Vidyanagari MIDC, Near Mahindra Showroom, Baramati
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button onClick={onApply}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[#0B1F5C] text-base hover:scale-105 active:scale-95 transition-transform shadow-lg"
                style={{ background: 'linear-gradient(135deg,#F5B400,#FFD43B)', boxShadow: '0 0 24px rgba(245,180,0,0.35)' }}>
                Apply Now <ArrowRight size={18} />
              </button>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-base border-2 border-white/25 hover:border-[#25D366] hover:text-[#25D366] transition-all">
                <MessageCircle size={18} /> WhatsApp Inquiry
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {['Job Ready Skills', 'Apprenticeship + Stipend', '₹8K–10K/month', '6+ Certifications', 'PES Flagship'].map((t) => (
                <span key={t} className="text-xs text-white/55 flex items-center gap-1">
                  <Check size={11} className="text-[#F5B400]" /> {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center">
            <div className="relative w-full max-w-md">

              {/* Flagship badge */}
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-2 mb-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(245,180,0,0.2)', border: '1px solid rgba(245,180,0,0.4)', color: '#F5B400' }}>
                  <Star size={11} className="fill-[#F5B400]" />
                  PES Flagship Centre · Baramati
                  <Star size={11} className="fill-[#F5B400]" />
                </div>
              </motion.div>

              {/* Main college image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ border: '2px solid rgba(255,255,255,0.12)' }}>
                <Image src="/brand/centres/baramati-college.jpg" alt="College of Practical Commerce & Management, Baramati"
                  width={480} height={360} className="w-full h-[280px] md:h-[360px] object-cover object-center" priority />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(11,31,92,0.8) 0%,transparent 50%)' }} />
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                  <span className="text-white text-sm font-bold drop-shadow-md block">College of Practical Commerce & Management</span>
                  <span className="text-[#F5B400] text-[10px] font-semibold">Pencil Square Building · Vidyanagari MIDC · Baramati</span>
                </div>
              </div>

              {/* Floating badges */}
              {([
                { label: 'Job Ready',     Icon: Check,        top: '16%', left: '-20px',  bg: '#F5B400', color: '#0B1F5C', delay: 0.6 },
                { label: 'Apprenticeship + Stipend', Icon: TrendingUp,   top: '38%', right: '-20px', bg: '#10B981', color: '#fff',    delay: 0.8 },
                { label: 'Fintech Skills',Icon: Laptop,       top: '60%', left: '-20px',  bg: '#6366F1', color: '#fff',    delay: 1.0 },
                { label: '₹8K–10K/mo',   Icon: Calculator,   top: '60%', right: '-20px', bg: '#0B1F5C', color: '#F5B400', delay: 1.2 },
              ] as { label: string; Icon: React.ElementType; top: string; left?: string; right?: string; bg: string; color: string; delay: number }[]).map((c) => (
                <motion.div key={c.label}
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: c.delay, type: 'spring', stiffness: 200 }}
                  className="absolute flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold shadow-xl whitespace-nowrap z-10"
                  style={{ background: c.bg, color: c.color, top: c.top, left: c.left, right: c.right, border: '1px solid rgba(255,255,255,0.2)' }}>
                  <c.Icon size={13} />{c.label}
                </motion.div>
              ))}

              {/* Info strip */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
                className="mt-3 p-4 rounded-xl flex items-center gap-3"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="bg-white rounded-xl p-2 flex-shrink-0">
                  <Image src="/brand/peslogo.png" alt="PES" width={40} height={40} className="h-10 w-10 object-contain" />
                </div>
                <div>
                  <p className="text-white text-xs font-black">Powered by Practical EduSkills</p>
                  <p className="text-white/50 text-[10px] mt-0.5">21+ years · 2500+ students trained · 100+ hiring partners</p>
                  <p className="text-[#F5B400] text-[10px] font-semibold mt-0.5">📞 +91 96893 48709 · Baramati Centre</p>
                </div>
              </motion.div>

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
