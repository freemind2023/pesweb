'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Globe, Share2, Users, Video } from 'lucide-react';

const WA = 'https://wa.me/917666676358?text=Hi%2C+I+want+to+know+about+AEDP+admissions+at+TJ+College+Kirkee';

export default function PageFooter() {
  return (
    <footer className="py-12 md:py-16" style={{ background: 'linear-gradient(135deg,#071232,#0B1F5C)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-xl p-1.5">
                <Image src="/tj-college/tj-logo.png" alt="TJ College" width={44} height={44} className="h-10 w-auto rounded-lg object-contain" />
              </div>
              <div>
                <p className="text-white font-black text-sm leading-tight">Tikaram Jagannath College</p>
                <p className="text-[#F5B400] text-[10px] font-medium">Kirkee, Pune – 411003</p>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed mb-4">
              SPPU-affiliated college offering industry-integrated AEDP programs that combine degree education with paid OJT and AI skills.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Users, href: '#', label: 'Facebook' },
                { icon: Share2, href: '#', label: 'Instagram' },
                { icon: Video, href: '#', label: 'YouTube' },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-[#F5B400]/20"
                  style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                  <s.icon size={14} className="text-white/60" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="text-[#F5B400] font-bold text-xs uppercase tracking-widest mb-4">AEDP Programs</h3>
            <ul className="space-y-2">
              {[
                'B.Sc. AI & Business Automation',
                'B.Com Accounting & Business Practices',
                '3-Year Program with OJT',
                '12+ Industry Certifications',
                'SPPU Affiliated Degree',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/60 text-xs">
                  <span className="w-1 h-1 rounded-full bg-[#F5B400] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 className="text-[#F5B400] font-bold text-xs uppercase tracking-widest mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+917666676358" className="flex items-start gap-2.5 text-white/60 hover:text-white transition-colors text-xs">
                  <Phone size={13} className="text-[#F5B400] mt-0.5 flex-shrink-0" />
                  +91 76666 76358
                </a>
              </li>
              <li>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-white/60 hover:text-white transition-colors text-xs">
                  <MessageCircle size={13} className="text-[#25D366] mt-0.5 flex-shrink-0" />
                  WhatsApp Enquiry
                </a>
              </li>
              <li>
                <a href="https://tjcollege.org" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-white/60 hover:text-white transition-colors text-xs">
                  <Globe size={13} className="text-[#F5B400] mt-0.5 flex-shrink-0" />
                  tjcollege.org
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-white/60 text-xs">
                  <MapPin size={13} className="text-[#F5B400] mt-0.5 flex-shrink-0" />
                  <span>491, Elphinstone Road, Kirkee,<br />Maharashtra – 411003</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Image src="/modern-college/sppu-logo.jpg" alt="SPPU" width={24} height={24} className="h-6 w-auto rounded opacity-70" />
            <span className="text-white/40 text-[10px]">Affiliated to Savitribai Phule Pune University (SPPU)</span>
          </div>
          <p className="text-white/30 text-[10px]">
            © {new Date().getFullYear()} Tikaram Jagannath College, Kirkee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
