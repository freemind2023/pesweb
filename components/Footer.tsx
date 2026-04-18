'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MapPin, Phone, Mail } from 'lucide-react';
import { courses } from '@/lib/courses';
import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const tr = t[lang];

  const quickLinks = [
    { href: '/', label: tr.nav.home },
    { href: '/courses', label: tr.nav.courses },
    { href: '/placements', label: tr.nav.placements },
    { href: '/events', label: tr.nav.events },
    { href: '/faculty', label: tr.faculty.label },
    { href: '/about', label: tr.nav.about },
    { href: '/centres', label: tr.centres.label },
    { href: '/contact', label: tr.nav.contact },
    { href: '/admissions', label: 'Admissions' },
  ];

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md mb-4">
              <Image src="/brand/logo.png" alt="Practical EduSkills" width={44} height={44} className="h-10 w-auto" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">{tr.footer.brandDesc}</p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/practical_eduskills/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.youtube.com/@practicaleduskills2338" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                <FaYoutube size={16} />
              </a>
              <a href="https://www.linkedin.com/company/practical-eduskills-pvt-ltd" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                <FaLinkedin size={16} />
              </a>
              <a href="https://www.facebook.com/PracticalEduSkills/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                <FaFacebook size={16} />
              </a>
              <a href="https://wa.me/919890959990" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-all">
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-gold text-lg font-semibold mb-4">{tr.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-gold transition-colors text-sm flex items-center gap-2">
                    <span className="text-gold text-xs">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Courses */}
          <div>
            <h4 className="font-serif text-gold text-lg font-semibold mb-4">{tr.footer.ourCourses}</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link href={`/courses/${course.slug}`} className="text-white/70 hover:text-gold transition-colors text-sm flex items-center gap-2">
                    <span className="text-gold text-xs">›</span> {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-serif text-gold text-lg font-semibold mb-4">{tr.footer.getInTouch}</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm leading-relaxed">
                  3rd Floor, Butte Patil Complex, Warje Malwadi Rd, Erandwane, Pune, Maharashtra 411052
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:+919890959990" className="text-white/70 hover:text-gold transition-colors text-sm">+91-98909-59990</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href="mailto:info@practicaleduskills.com" className="text-white/70 hover:text-gold transition-colors text-sm">info@practicaleduskills.com</a>
              </div>
            </div>
            <div className="mt-5">
              <Link href="/admissions" className="inline-block px-5 py-2.5 bg-gold text-navy font-bold text-sm rounded-lg hover:bg-gold-light transition-colors">
                {tr.footer.applyNow}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs text-center">{tr.footer.copyright}</p>
          <div className="flex items-center gap-3 text-white/50 text-xs">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-success rounded-full inline-block" /> {tr.footer.iso}
            </span>
            <span>|</span>
            <span>{tr.footer.nsdc}</span>
            <span>|</span>
            <span>{tr.footer.est}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
