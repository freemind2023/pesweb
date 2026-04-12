'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const floatingStats = [
  { value: '2000+', label: 'Placed' },
  { value: '21+', label: 'Years' },
  { value: '8', label: 'Courses' },
  { value: '4', label: 'Centres' },
];

// Animated background particles
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
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/brand/hero-poster.jpg"
          alt="PES Students"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Animated particles */}
      <Particles />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <div className="absolute bottom-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-2xl shadow-black/40 ring-4 ring-gold/30">
            <Image
              src="/brand/logo.png"
              alt="Practical EduSkills Logo"
              width={100}
              height={100}
              className="h-20 w-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
        >
          🏆 21+ Years | 2000+ Placements | ISO Certified
        </motion.div>

        {/* Marathi Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="devanagari text-gold text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight"
        >
          शिक्षण असं निवडा
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="devanagari text-gold text-2xl sm:text-3xl md:text-4xl font-bold mb-5"
        >
          जे तुम्हाला बनवेल आत्मनिर्भर...!
        </motion.h1>

        {/* English Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white text-base sm:text-lg md:text-xl mb-2 font-medium"
        >
          India&apos;s Most Practical Commerce &amp; Business Education
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/80 text-sm sm:text-base mb-8"
        >
          Learn. Intern. Earn. From Day One.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
        >
          <Link
            href="/admissions"
            className="px-8 py-3.5 bg-gold text-navy font-bold text-base rounded-xl pulse-gold hover:bg-gold-light transition-all"
          >
            Enroll Now — Free Counselling
          </Link>
          <Link
            href="/courses"
            className="px-8 py-3.5 border-2 border-gold text-white font-semibold text-base rounded-xl hover:bg-gold/10 transition-all backdrop-blur-sm"
          >
            Explore Courses →
          </Link>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-4 gap-3 max-w-lg mx-auto"
        >
          {floatingStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center"
            >
              <div className="text-gold font-serif font-bold text-xl md:text-2xl">{stat.value}</div>
              <div className="text-white/70 text-xs mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce-slow"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
