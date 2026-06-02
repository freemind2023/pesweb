'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight, X } from 'lucide-react';

const WA = 'https://wa.me/919049793232?text=Hi%2C+I+want+to+know+about+Practical+BCom+at+Maharashtriya+Mandal+College';

export default function FloatingCTA({ onApply }: { onApply: () => void }) {
  const [showBar, setShowBar] = useState(false);
  const [barDismissed, setBarDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => { if (!barDismissed) setShowBar(window.scrollY > 500); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [barDismissed]);

  return (
    <>
      <motion.a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Enquiry"
        className="fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl md:bottom-6"
        style={{ background: '#25D366' }}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <MessageCircle size={26} className="text-white" />
        <motion.div className="absolute inset-0 rounded-full" style={{ background: '#25D366' }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }} />
      </motion.a>

      <AnimatePresence>
        {showBar && !barDismissed && (
          <motion.div
            initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 flex items-center gap-3 shadow-2xl"
            style={{ background: 'linear-gradient(135deg,#071232,#0B1F5C)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex-1 min-w-0">
              <p className="text-white font-black text-sm truncate">Practical B.COM 2026–27 Open!</p>
              <p className="text-white/50 text-[10px] truncate">Limited seats — Apply before they fill</p>
            </div>
            <button onClick={onApply}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-[#0B1F5C] text-xs flex-shrink-0 hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg,#F5B400,#FFD43B)' }}>
              Apply Now <ArrowRight size={13} />
            </button>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-white text-xs flex-shrink-0"
              style={{ background: '#25D366' }}>
              <MessageCircle size={13} /> WhatsApp
            </a>
            <button onClick={() => setBarDismissed(true)} className="text-white/40 hover:text-white/80 flex-shrink-0" aria-label="Dismiss">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
