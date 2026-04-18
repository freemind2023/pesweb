'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';

export default function LanguageWelcomeModal() {
  const [show, setShow] = useState(false);
  const { setLang } = useLanguage();

  useEffect(() => {
    const stored = localStorage.getItem('pes-lang');
    if (!stored) {
      const timer = setTimeout(() => setShow(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const choose = (l: 'en' | 'mr') => {
    setLang(l);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{ background: 'rgba(6, 14, 43, 0.85)', backdropFilter: 'blur(8px)' }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center"
          >
            {/* Logo */}
            <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mx-auto mb-5 shadow-lg">
              <Image src="/brand/logo.png" alt="PES" width={60} height={60} className="h-14 w-auto" />
            </div>

            <h2 className="font-serif text-navy text-xl font-bold mb-1">
              Welcome / स्वागत आहे
            </h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Choose your language<br />
              <span className="devanagari">तुमची भाषा निवडा</span>
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => choose('en')}
                className="w-full py-3.5 bg-navy text-white font-bold rounded-2xl hover:bg-navy/90 transition-all text-base"
              >
                🇬🇧 Continue in English
              </button>
              <button
                onClick={() => choose('mr')}
                className="w-full py-3.5 bg-gold text-navy font-bold rounded-2xl hover:bg-gold/90 transition-all text-base devanagari"
              >
                🇮🇳 मराठीत सुरू ठेवा
              </button>
            </div>

            <p className="text-gray-400 text-xs mt-4">
              You can change this anytime •{' '}
              <span className="devanagari">हे कधीही बदलता येईल</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
