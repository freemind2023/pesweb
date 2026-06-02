'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const { lang } = useLanguage();
  const tr = t[lang].hero;

  const floatingStats = [
    { value: '2500+', label: tr.placed },
    { value: '21+', label: tr.years },
    { value: '8', label: tr.courses },
    { value: '4', label: tr.centres },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/brand/hero-poster.jpg" alt="PES Students" fill className="object-cover" priority sizes="100vw" />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <Particles />

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <div className="absolute bottom-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex justify-center mb-6">
          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-2xl shadow-black/40 ring-4 ring-gold/30">
            <Image src="/brand/logo.png" alt="Practical EduSkills Logo" width={100} height={100} className="h-20 w-auto" priority />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
          {tr.badge}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="devanagari text-gold text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
          {tr.headline1}
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="devanagari text-gold text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
          {tr.headline2}
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="text-white text-base sm:text-lg md:text-xl mb-2 font-medium">
          {tr.subheading}
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="text-white/80 text-sm sm:text-base mb-8">
          {tr.tagline}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <Link href="/admissions"
            className="px-8 py-3.5 bg-gold text-navy font-bold text-base rounded-xl pulse-gold hover:bg-gold-light transition-all">
            {tr.enrollCta}
          </Link>
          <Link href="/courses"
            className="px-8 py-3.5 border-2 border-gold text-white font-semibold text-base rounded-xl hover:bg-gold/10 transition-all backdrop-blur-sm">
            {tr.exploreCta}
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }}
          className="flex flex-col items-center gap-2 mb-4 px-2">
          {/* Modern College */}
          <Link href="/modern-college"
            className="group w-full max-w-sm sm:max-w-md flex items-center gap-3 p-3 rounded-2xl border border-white/20 hover:border-gold/50 hover:bg-white/10 transition-all backdrop-blur-sm">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-white rounded-xl p-1 shadow-lg">
                <Image src="/modern-college/sppu-logo.jpg" alt="SPPU" width={38} height={38} className="h-9 w-9 rounded-lg object-contain" />
              </div>
              <div className="bg-white rounded-xl p-1 shadow-lg">
                <Image src="/modern-college/mc-logo.jpg" alt="Modern College" width={38} height={38} className="h-9 w-9 rounded-lg object-contain" />
              </div>
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-white font-black text-sm leading-tight">Modern College AEDP</span>
                <span className="text-[10px] bg-gold text-navy px-1.5 py-0.5 rounded-full font-black flex-shrink-0">NEW</span>
              </div>
              <p className="text-white/60 text-xs truncate">SPPU Degree · Earn While You Learn · Apprenticeship</p>
            </div>
            <ArrowRight size={16} className="text-gold flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
          {/* TJ College */}
          <Link href="/tj-college"
            className="group w-full max-w-sm sm:max-w-md flex items-center gap-3 p-3 rounded-2xl border border-white/20 hover:border-gold/50 hover:bg-white/10 transition-all backdrop-blur-sm">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-white rounded-xl p-1 shadow-lg">
                <Image src="/modern-college/sppu-logo.jpg" alt="SPPU" width={38} height={38} className="h-9 w-9 rounded-lg object-contain" />
              </div>
              <div className="bg-white rounded-xl p-1 shadow-lg">
                <Image src="/tj-college/tj-logo.png" alt="TJ College" width={38} height={38} className="h-9 w-9 rounded-lg object-contain" />
              </div>
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-white font-black text-sm leading-tight">TJ College AEDP</span>
                <span className="text-[10px] bg-gold text-navy px-1.5 py-0.5 rounded-full font-black flex-shrink-0">NEW</span>
              </div>
              <p className="text-white/60 text-xs truncate">Kirkee, Pune · SPPU Degree · Apprenticeship</p>
            </div>
            <ArrowRight size={16} className="text-gold flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
          {/* Dample College — Practical B.COM */}
          <Link href="/dample-college"
            className="group w-full max-w-sm sm:max-w-md flex items-center gap-3 p-3 rounded-2xl border border-white/20 hover:border-gold/50 hover:bg-white/10 transition-all backdrop-blur-sm">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-white rounded-xl p-1 shadow-lg">
                <Image src="/dample-college/dample-logo.png" alt="Maharashtriya Mandal" width={38} height={38} className="h-9 w-9 rounded-lg object-contain" />
              </div>
              <div className="bg-white rounded-xl p-1 shadow-lg">
                <Image src="/brand/peslogo.png" alt="PES" width={38} height={38} className="h-9 w-9 rounded-lg object-contain" />
              </div>
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-white font-black text-sm leading-tight">Practical B.COM</span>
                <span className="text-[10px] bg-gold text-navy px-1.5 py-0.5 rounded-full font-black flex-shrink-0">NEW</span>
              </div>
              <p className="text-white/60 text-xs truncate">Fintech & Digital Accounting · Apprenticeship · Earn While Learn</p>
            </div>
            <ArrowRight size={16} className="text-gold flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
          {/* Baramati — PES Flagship */}
          <Link href="/baramati"
            className="group w-full max-w-sm sm:max-w-md flex items-center gap-3 p-3 rounded-2xl border border-white/20 hover:border-gold/50 hover:bg-white/10 transition-all backdrop-blur-sm">
            <div className="flex-shrink-0 relative w-14 h-14 rounded-xl overflow-hidden shadow-lg">
              <Image src="/brand/centres/baramati-college.jpg" alt="Baramati" fill className="object-cover object-center" />
              <div className="absolute inset-0" style={{ background: 'rgba(11,31,92,0.35)' }} />
            </div>
            <div className="w-8 h-8 rounded-xl flex-shrink-0 bg-white shadow-lg flex items-center justify-center -ml-1">
              <Image src="/brand/peslogo.png" alt="PES" width={28} height={28} className="h-7 w-7 object-contain" />
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-white font-black text-sm leading-tight">Practical B.COM · Baramati</span>
                <span className="text-[10px] bg-gold text-navy px-1.5 py-0.5 rounded-full font-black flex-shrink-0">NEW</span>
              </div>
              <p className="text-white/60 text-xs truncate">PES Flagship · Fintech & Digital Accounting · Baramati</p>
            </div>
            <ArrowRight size={16} className="text-gold flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
          className="grid grid-cols-4 gap-3 max-w-lg mx-auto">
          {floatingStats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
              <div className="text-gold font-serif font-bold text-xl md:text-2xl">{stat.value}</div>
              <div className="text-white/70 text-xs mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce-slow">
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
