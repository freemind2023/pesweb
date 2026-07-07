'use client';
import { MessageCircle } from 'lucide-react';

const WA = 'https://wa.me/919890959990?text=Hi%2C+I+want+to+know+about+the+Practical+MBA+program+at+Practical+EduSkills';

export default function WhatsAppFAB() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Enquiry"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border border-white/10 hover:scale-110 active:scale-95 transition-transform"
      style={{ background: '#25D366' }}
    >
      <MessageCircle size={26} className="text-white" />
    </a>
  );
}
