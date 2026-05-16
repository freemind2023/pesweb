'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BookOpen, Users, Clock, Award, TrendingUp, Heart,
  CheckCircle, ExternalLink, MapPin, Briefcase,
} from 'lucide-react';

const APPLY_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeYYHJ1motq6kOiBPv8Hm-yn0TVPBiiwBiJ-3mUL8up_FVZiw/viewform?usp=header';

const openings = [
  {
    title: 'Commerce & Accounts Trainer',
    type: 'Full-Time / Part-Time',
    subjects: ['Financial Accounting', 'GST & Indirect Tax', 'Tally & ERP', 'Direct Tax'],
    exp: '2+ years teaching or industry experience',
  },
  {
    title: 'BBA / MBA Business Skills Trainer',
    type: 'Full-Time / Part-Time',
    subjects: ['Business Management', 'Marketing', 'HR & Organisational Behaviour', 'Entrepreneurship'],
    exp: '2+ years relevant experience',
  },
  {
    title: 'AI & Digital Automation Trainer',
    type: 'Full-Time',
    subjects: ['Artificial Intelligence Basics', 'MS Excel & Data Analytics', 'Digital Tools', 'Python / No-Code Automation'],
    exp: '1+ year industry or teaching experience',
  },
  {
    title: 'Soft Skills & Communication Trainer',
    type: 'Part-Time / Visiting',
    subjects: ['Business English', 'Interview Preparation', 'Personality Development', 'Public Speaking'],
    exp: 'Certified trainer preferred',
  },
  {
    title: 'Hospitality & Tourism Faculty',
    type: 'Full-Time / Part-Time',
    subjects: ['Hotel Operations', 'Travel & Tourism', 'Food & Beverage', 'Front Office Management'],
    exp: '2+ years hotel / travel industry experience',
  },
  {
    title: 'CA / Finance Industry Expert',
    type: 'Visiting / Guest Lecturer',
    subjects: ['CA Article Training', 'Audit & Assurance', 'Corporate Finance', 'Taxation Practice'],
    exp: 'Practising CA or CFA preferred',
  },
];

const perks = [
  { icon: TrendingUp, title: 'Grow With Us',        desc: 'Structured growth path, performance reviews and skill-development opportunities.' },
  { icon: Users,      title: 'Collaborative Culture', desc: 'Work alongside passionate educators and industry practitioners.' },
  { icon: Clock,      title: 'Flexible Schedules',   desc: 'Visiting, part-time and full-time options across our 4 Pune centres.' },
  { icon: Award,      title: 'Brand Recognition',    desc: '21+ years of trust in Pune — teach under an ISO-certified institution.' },
  { icon: Heart,      title: 'Student Impact',       desc: 'Directly shape careers and help 2000+ alumni-grade students every year.' },
  { icon: BookOpen,   title: 'Modern Curriculum',    desc: 'Practical, industry-first curriculum that keeps you sharp and relevant.' },
];

const requirements = [
  'Minimum graduation in the relevant field (post-graduation preferred)',
  'Passion for practical, outcome-oriented teaching',
  'Comfortable with modern tools and classroom technology',
  'Strong communication and interpersonal skills',
  'Prior teaching or industry experience is an advantage',
  'Willingness to contribute beyond the classroom — workshops, assessments, events',
];

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="navy-gradient pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3"
          >
            We Are Hiring
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-white text-3xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Join Our Faculty & <span className="text-gold">Shape Careers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8"
          >
            Practical EduSkills is looking for passionate educators and industry
            experts to join our growing team of 21+ year educators across Pune.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-bold text-lg rounded-xl hover:bg-gold-light transition-all pulse-gold"
            >
              Apply Now <ExternalLink size={18} />
            </a>
          </motion.div>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { icon: MapPin,    label: 'Pune — 4 Centres' },
              { icon: Briefcase, label: 'Full-Time & Part-Time' },
              { icon: Users,     label: '2000+ Students' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/60 text-sm">
                <Icon size={15} className="text-gold" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Join Us ─────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-gold font-semibold text-xs uppercase tracking-widest">Why Practical EduSkills</span>
            <h2 className="font-serif text-navy text-2xl md:text-3xl font-bold mt-1">Why Teach With Us?</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-5 bg-bg-light rounded-2xl border border-gray-100 hover:border-gold/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center mb-3 group-hover:bg-gold/10 transition-colors">
                  <p.icon size={20} className="text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-serif text-navy font-bold text-base mb-1">{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ──────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-bg-light">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-gold font-semibold text-xs uppercase tracking-widest">Current Openings</span>
            <h2 className="font-serif text-navy text-2xl md:text-3xl font-bold mt-1">Faculty Positions</h2>
            <p className="text-text-muted text-sm mt-2">
              All positions are based across our Pune centres. Multiple vacancies available.
            </p>
          </motion.div>

          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-serif text-navy font-bold text-lg">{job.title}</h3>
                      <span className="text-xs px-2.5 py-0.5 bg-gold/10 text-gold font-semibold rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-text-muted text-xs mb-3">
                      <span className="font-medium text-navy">Experience:</span> {job.exp}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.subjects.map((s) => (
                        <span key={s} className="text-xs px-2 py-0.5 bg-navy/5 text-navy/70 rounded-md">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href={APPLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-navy text-gold font-semibold text-sm rounded-xl hover:bg-navy/90 transition-colors"
                    >
                      Apply <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements ────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-gold font-semibold text-xs uppercase tracking-widest">What We Look For</span>
              <h2 className="font-serif text-navy text-2xl md:text-3xl font-bold mt-1 mb-6">
                General Requirements
              </h2>
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-text-muted text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-navy rounded-2xl p-7 text-center">
                <div className="text-gold font-semibold text-xs uppercase tracking-widest mb-3">Ready to Apply?</div>
                <h3 className="font-serif text-white text-xl font-bold mb-3">
                  Fill in our simple application form
                </h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  Takes less than 5 minutes. Our team will review your profile
                  and reach out within 3 working days.
                </p>
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-bold rounded-xl hover:bg-gold-light transition-all pulse-gold"
                >
                  Apply Now <ExternalLink size={16} />
                </a>
                <p className="text-white/40 text-xs mt-4">
                  Or email us at{' '}
                  <a href="mailto:info@practicaleduskills.com" className="text-gold underline underline-offset-2">
                    info@practicaleduskills.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────── */}
      <section className="py-12 bg-bg-light text-center border-t border-gray-100">
        <p className="text-text-muted text-sm mb-2">Have questions before applying?</p>
        <a href="tel:+919890959990" className="text-navy font-bold text-lg hover:text-gold transition-colors">
          +91-98909-59990
        </a>
        <div className="mt-4">
          <Link href="/about" className="text-text-muted text-sm underline underline-offset-2 hover:text-navy transition-colors">
            Learn more about Practical EduSkills →
          </Link>
        </div>
      </section>
    </>
  );
}
