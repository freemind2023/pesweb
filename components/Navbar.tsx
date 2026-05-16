'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { courses } from '@/lib/courses';
import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const { lang } = useLanguage();
  const tr = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: tr.nav.home },
    { href: '/placements', label: tr.nav.placements },
    { href: '/events', label: tr.nav.events },
    { href: '/about', label: tr.nav.about },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: tr.nav.contact },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-navy shadow-lg shadow-navy/20' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                <Image
                  src="/brand/logo.png"
                  alt="Practical EduSkills"
                  width={40}
                  height={40}
                  className="h-8 w-auto md:h-9"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-serif font-bold text-sm leading-tight">
                  Practical EduSkills
                </div>
                <div className="text-gold text-xs">Experiential Education</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-gold transition-colors duration-200 font-sans text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}

              {/* Courses Dropdown */}
              <div className="relative" onMouseEnter={() => setCoursesOpen(true)} onMouseLeave={() => setCoursesOpen(false)}>
                <button className="flex items-center gap-1 text-white/90 hover:text-gold transition-colors duration-200 font-sans text-sm font-medium">
                  {tr.nav.courses} <ChevronDown size={14} className={`transition-transform ${coursesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {coursesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gold/20 py-2 z-50"
                    >
                      {courses.map((course) => (
                        <Link
                          key={course.slug}
                          href={`/courses/${course.slug}`}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-bg-light transition-colors group"
                        >
                          <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                          <div>
                            <div className="text-navy font-medium text-sm group-hover:text-gold transition-colors">
                              {course.name}
                            </div>
                            <div className="text-text-muted text-xs">{course.duration}</div>
                          </div>
                          {course.dubaiPlacement && (
                            <span className="ml-auto text-xs bg-accent/10 text-accent px-1.5 py-0.5 rounded font-medium">Dubai</span>
                          )}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-1 pt-1 px-4">
                        <Link
                          href="/courses"
                          className="flex items-center justify-center py-2 text-navy font-semibold text-sm hover:text-gold transition-colors"
                        >
                          {tr.nav.viewAllCourses}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Language Switcher + CTA + Hamburger */}
            <div className="flex items-center gap-2 md:gap-3">
              <LanguageSwitcher />
              <Link
                href="/admissions"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-gold-light transition-colors pulse-gold"
              >
                {tr.nav.enrollNow}
              </Link>
              <button
                className="lg:hidden text-white p-1"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-navy-dark flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <Image src="/brand/logo.png" alt="PES" width={36} height={36} className="h-8 w-auto" />
              </div>
              <button onClick={() => setMenuOpen(false)} className="text-white">
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 px-5 py-4 space-y-1">
              {/* Language switcher in mobile menu */}
              <LanguageSwitcher variant="mobile" />

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-white text-lg font-medium border-b border-white/10"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                <div className="py-3 text-gold font-semibold text-sm uppercase tracking-wider">{tr.nav.ourCourses}</div>
                {courses.map((course, i) => (
                  <motion.div
                    key={course.slug}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                  >
                    <Link
                      href={`/courses/${course.slug}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between py-2.5 text-white/80 border-b border-white/5 text-sm"
                    >
                      <span>{course.name}</span>
                      <span className="text-gold text-xs">{course.duration}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="p-5 space-y-3">
              <Link
                href="/admissions"
                onClick={() => setMenuOpen(false)}
                className="block text-center py-3.5 bg-gold text-navy font-bold rounded-xl text-lg pulse-gold"
              >
                {tr.nav.enrollNow} →
              </Link>
              <a
                href="tel:+919890959990"
                className="block text-center py-3 border border-white/20 text-white rounded-xl text-sm"
              >
                {tr.nav.callUs}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
