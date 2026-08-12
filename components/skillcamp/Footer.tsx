'use client';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { SC } from './constants';

const SOCIALS = [
  { Icon: FaInstagram, href: 'https://www.instagram.com/practical_eduskills/', label: 'Instagram' },
  { Icon: FaYoutube, href: 'https://www.youtube.com/@practicaleduskills2338', label: 'YouTube' },
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/company/practical-eduskills-pvt-ltd', label: 'LinkedIn' },
  { Icon: FaFacebook, href: 'https://www.facebook.com/PracticalEduSkills/', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 pt-14 pb-8" style={{ background: SC.ink, borderTop: `1px solid ${SC.accent}33` }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 mb-10">
        <div className="flex items-center gap-4">
          <Image src="/skillcamp/brand/skillcamp-icon.png" alt="SkillCamp" width={124} height={48} className="h-11 w-auto" />
          <div className="h-9 w-px" style={{ background: `${SC.slate}44` }} />
          <div className="bg-white rounded-lg p-1">
            <Image src="/skillcamp/brand/peslogo-trimmed.png" alt="Practical EduSkills" width={40} height={40} className="h-9 w-9 object-contain" />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-sm" style={{ color: SC.mist }}>SkillCamp by Practical EduSkills</p>
            <p className="text-xs" style={{ color: SC.slate }}>GenAI Basecamp · Pawna Lake</p>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-2 text-sm" style={{ color: `${SC.mist}CC` }}>
          <a href="tel:+919049793232" className="flex items-center gap-2 hover:opacity-80">
            <Phone size={14} style={{ color: SC.accent }} /> +91 90497 93232
          </a>
          <a href="mailto:info@practicaleduskills.com" className="flex items-center gap-2 hover:opacity-80">
            <Mail size={14} style={{ color: SC.accent }} /> info@practicaleduskills.com
          </a>
          <div className="flex items-center gap-3 mt-1">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="hover:opacity-80 focus:outline-none focus-visible:ring-2 rounded" style={{ color: SC.slate }}>
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-6 text-center" style={{ borderTop: `1px solid ${SC.accent}22` }}>
        <p className="text-xs" style={{ color: SC.slate }}>
          © {new Date().getFullYear()} Practical EduSkills Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
