'use client';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SC, RESERVE_WA } from './constants';

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3" style={{ background: `${SC.ink}F2`, backdropFilter: 'blur(8px)', borderTop: `1px solid ${SC.accent}44` }}>
      <a
        href={RESERVE_WA}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full font-bold text-sm focus:outline-none focus-visible:ring-2"
        style={{ background: SC.orange, color: SC.mist, boxShadow: `0 0 20px ${SC.orange}55` }}
      >
        Reserve My Seat <ArrowRight size={16} />
      </a>
    </div>
  );
}
