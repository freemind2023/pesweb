'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const WA = 'https://wa.me/919890959990?text=Hi%2C+I+want+to+know+about+Practical+BBA%2FBBA-IB+admissions+at+Practical+EduSkills+Head+Office';

export default function PageFooter() {
  return (
    <footer className="py-12 md:py-16" style={{ background: 'linear-gradient(135deg,#071232,#0B1F5C)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-xl p-1.5">
                <Image src="/brand/peslogo.png" alt="Practical EduSkills" width={44} height={44} className="h-10 w-auto rounded-lg object-contain" />
              </div>
              <div>
                <p className="text-white font-black text-sm leading-tight">Practical EduSkills</p>
                <p className="text-[#F5B400] text-[10px] font-medium devanagari">योगः कर्मसु कौशलम्</p>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed mb-4">
              Skill-oriented undergraduate programs bridging academic learning with industry expectations — Practical BBA & BBA-IB at our Head Office, Pune.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, href: 'https://www.instagram.com/practical_eduskills/', label: 'Instagram' },
                { icon: FaYoutube, href: 'https://www.youtube.com/@practicaleduskills2338', label: 'YouTube' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/company/practical-eduskills-pvt-ltd', label: 'LinkedIn' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-[#F5B400]/20"
                  style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                  <s.icon size={14} className="text-white/60" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="text-[#F5B400] font-bold text-xs uppercase tracking-widest mb-4">Programs</h3>
            <ul className="space-y-2">
              {[
                'Practical BBA — Strategic Operations & Business Administration',
                'Practical BBA-IB — International Business',
                '3-Year Program with 2 Yrs OJT',
                '12+ Industry Certifications',
                'SPPU-Aligned Curriculum',
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
                <a href="tel:+919890959990" className="flex items-start gap-2.5 text-white/60 hover:text-white transition-colors text-xs">
                  <Phone size={13} className="text-[#F5B400] mt-0.5 flex-shrink-0" />
                  98909 59990
                </a>
              </li>
              <li>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-white/60 hover:text-white transition-colors text-xs">
                  <MessageCircle size={13} className="text-[#25D366] mt-0.5 flex-shrink-0" />
                  WhatsApp Enquiry
                </a>
              </li>
              <li>
                <a href="mailto:info@practicaleduskills.com" className="flex items-start gap-2.5 text-white/60 hover:text-white transition-colors text-xs">
                  <Mail size={13} className="text-[#F5B400] mt-0.5 flex-shrink-0" />
                  info@practicaleduskills.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-white/60 text-xs">
                  <MapPin size={13} className="text-[#F5B400] mt-0.5 flex-shrink-0" />
                  <span>3rd Floor, Butte Patil Complex, Warje Malwadi Rd,<br />Erandwane, Pune – 411052</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white/40 text-[10px]">Practical EduSkills Pvt. Ltd. · ISO Certified · NSDC Skill Centre</span>
          <p className="text-white/30 text-[10px]">
            © {new Date().getFullYear()} Practical EduSkills. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
