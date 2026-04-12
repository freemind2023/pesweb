'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AssociationsSection from '@/components/AssociationsSection';
import Link from 'next/link';

const milestones = [
  { year: '2003', event: 'Founded as Splendid InfoTech — vocational education pioneer' },
  { year: '2008', event: 'Launched Practical B.Com — industry first practical commerce program' },
  { year: '2012', event: 'First Dubai Placement batch — international opportunities unlocked' },
  { year: '2015', event: 'Expanded to 3 centres across Pune — Garware, Modern College, Baramati' },
  { year: '2018', event: 'NSDC Skill Centre certification — government-backed training center' },
  { year: '2020', event: 'ISO Certification — quality education standards recognised' },
  { year: '2022', event: 'Launched B.Sc. AI & Digital Automation — future-ready program' },
  { year: '2024', event: '2000+ students placed! 21 years of transforming careers' },
];

const values = [
  { icon: '🏆', title: 'Innovation', desc: 'Constantly evolving curriculum to match industry demands' },
  { icon: '🌱', title: 'Upliftment', desc: 'Empowering every student to rise above expectations' },
  { icon: '⭐', title: 'Excellence', desc: 'Uncompromising quality in education and placement outcomes' },
  { icon: '🔥', title: 'Legacy', desc: '21+ years of building careers that last a lifetime' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="navy-gradient pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold font-semibold text-sm uppercase tracking-widest">Our Story</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-white text-3xl md:text-5xl font-bold mt-2 mb-4">
            The Legacy of Practical EduSkills
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/70 text-base md:text-lg">
            21+ Years | 2000+ Students | One Mission — Employability
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">About Us</span>
              <h2 className="font-serif text-navy text-2xl md:text-3xl font-bold mt-1 mb-4">Who We Are</h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
                Practical EduSkills Pvt. Ltd. (PES), earlier known as Splendid InfoTech, is a leading vocational education provider with a mission to provide Job-Oriented Skills to the employable youth of India for gainful employment.
              </p>
              <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
                For over 21 years, we have been bridging the gap between academic education and industry requirements. Our courses are designed in collaboration with industry experts to ensure our students are job-ready from Day 1.
              </p>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                From CA firms to Dubai multinationals — our 2000+ alumni are proof that practical education delivers real career outcomes.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/brand/hero-poster.jpg" alt="PES Students" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 flex gap-4 justify-around">
                    {[['21+', 'Years'], ['2000+', 'Placed'], ['8', 'Courses']].map(([val, label]) => (
                      <div key={label} className="text-center">
                        <div className="text-navy font-serif font-bold text-xl">{val}</div>
                        <div className="text-text-muted text-xs">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MD Message */}
      <section className="py-14 bg-bg-light">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center shadow-sm border border-gold/15">
            <div className="flex-shrink-0 text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-3 border-4 border-gold/30">
                <Image src="/brand/team/sanmit-shah.jpg" alt="Sanmit Shah" fill className="object-cover" />
              </div>
              <div className="font-serif text-navy font-bold text-sm">Mr. Sanmit Shah</div>
              <div className="text-gold text-xs font-medium">MD & CEO</div>
            </div>
            <div>
              <div className="text-gold text-4xl font-serif mb-2">&ldquo;</div>
              <p className="text-text-dark text-sm md:text-base leading-relaxed italic mb-4">
                At Practical EduSkills, we don&apos;t just create graduates — we create professionals. Our mission has always been simple: make every student industry-ready, confident, and financially independent. When I see our students earning stipends during study and getting placed in top companies, I know we&apos;re doing something truly transformative for Indian youth.
              </p>
              <p className="text-text-dark text-sm md:text-base leading-relaxed italic">
                The future belongs to those who are skilled, and we are here to skill India&apos;s youth — one student at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-serif text-navy text-2xl md:text-3xl font-bold">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((val, i) => (
              <motion.div key={val.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-5 bg-bg-light rounded-2xl border border-gray-100 hover:border-gold transition-all">
                <div className="text-3xl mb-2">{val.icon}</div>
                <h3 className="font-serif text-navy font-bold text-base mb-1">{val.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-serif text-navy text-2xl md:text-3xl font-bold">Our Journey</h2>
          </motion.div>
          <div className="relative pl-8 border-l-2 border-gold/30 space-y-6">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="relative">
                <div className="absolute -left-10 top-0.5 w-4 h-4 rounded-full bg-gold border-2 border-white shadow" />
                <div className="inline-block px-3 py-0.5 bg-gold text-navy text-xs font-bold rounded-full mb-1">{m.year}</div>
                <p className="text-text-dark text-sm">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AssociationsSection />

      <div className="py-10 bg-white text-center">
        <Link href="/admissions" className="inline-block px-8 py-4 bg-gold text-navy font-bold text-lg rounded-xl pulse-gold hover:bg-gold-light transition-all">
          Join the PES Family →
        </Link>
      </div>
    </>
  );
}
