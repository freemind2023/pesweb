'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Globe, Share2, Users, Video } from 'lucide-react';

const WA = 'https://wa.me/919049793232?text=Hi%2C+I+want+to+know+about+Practical+BCom+at+Maharashtriya+Mandal+College';

export default function PageFooter() {
  return (
    <footer className="py-12 md:py-16" style={{ background: 'linear-gradient(135deg,#071232,#0B1F5C)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-xl p-1.5">
                <Image src="/dample-college/dample-logo.png" alt="Maharashtriya Mandal" width={44} height={44}
                  className="h-10 w-auto rounded-lg object-contain" />
              </div>
              <div>
                <p className="text-white font-black text-sm leading-tight">Maharashtriya Mandal</p>
                <p className="text-[#F5B400] text-[10px] font-medium">College Of Commerce, Pune</p>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed mb-4">
              Practical B.COM – Fintech & Digital Accounting, powered by Practical EduSkills (PES). India&apos;s most job-ready commerce program.
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

          {/* Program highlights */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="text-[#F5B400] font-bold text-xs uppercase tracking-widest mb-4">Program Highlights</h3>
            <ul className="space-y-2">
              {[
                'Practical B.COM – 3 Year Program',
                'Fintech & Digital Accounting',
                '2 Years OJT from SY B.Com',
                '₹8K–10K/month Stipend',
                '6+ Industry Certifications',
                'ZOHO · Tally · Odoo · GST',
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
                <a href="tel:+919049793232" className="flex items-start gap-2.5 text-white/60 hover:text-white transition-colors text-xs">
                  <Phone size={13} className="text-[#F5B400] mt-0.5 flex-shrink-0" /> +91 90497 93232
                </a>
              </li>
              <li>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-white/60 hover:text-white transition-colors text-xs">
                  <MessageCircle size={13} className="text-[#25D366] mt-0.5 flex-shrink-0" /> WhatsApp Enquiry
                </a>
              </li>
              <li>
                <a href="https://practicaleduskills.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-white/60 hover:text-white transition-colors text-xs">
                  <Globe size={13} className="text-[#F5B400] mt-0.5 flex-shrink-0" /> practicaleduskills.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-white/60 text-xs">
                  <MapPin size={13} className="text-[#F5B400] mt-0.5 flex-shrink-0" />
                  <span>Maharashtriya Mandal College Of Commerce,<br />Pune, Maharashtra</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Image src="/brand/peslogo.png" alt="PES" width={24} height={24} className="h-6 w-auto rounded" />
            <span className="text-white/40 text-[10px]">Powered by Practical EduSkills (PES) · Experiential Education</span>
          </div>
          <p className="text-white/30 text-[10px]">
            © {new Date().getFullYear()} Maharashtriya Mandal College Of Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
