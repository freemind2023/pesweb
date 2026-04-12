'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const faculty = [
  { name: 'Mr. Sanmit Shah', role: 'MD & CEO', specialisation: 'Entrepreneurship & Business Leadership', img: '/brand/team/sanmit-shah.jpg' },
  { name: 'Faculty Member', role: 'Senior Faculty', specialisation: 'Financial Accounting & Taxation', img: '/brand/team/faculty-1.jpg' },
  { name: 'Industry Expert', role: 'Guest Faculty', specialisation: 'Digital Marketing & AI Tools', img: '/brand/team/faculty-1.jpg' },
  { name: 'Senior Mentor', role: 'Career Mentor', specialisation: 'CA Articleship & Audit', img: '/brand/team/faculty-1.jpg' },
  { name: 'Business Coach', role: 'MBA Faculty', specialisation: 'Sales & Business Development', img: '/brand/team/faculty-1.jpg' },
  { name: 'HR Specialist', role: 'Soft Skills Trainer', specialisation: 'Communication & Interview Prep', img: '/brand/team/faculty-1.jpg' },
];

export default function FacultyPage() {
  return (
    <>
      <section className="navy-gradient pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold font-semibold text-sm uppercase tracking-widest">Team</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-white text-3xl md:text-5xl font-bold mt-2 mb-4">Meet Our Faculty</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/70 text-base">
            Industry experts. Passionate mentors. Your success is their mission.
          </motion.p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {faculty.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:border-gold hover:shadow-lg transition-all group">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-navy font-bold text-base">{member.name}</h3>
                  <div className="text-gold text-xs font-semibold mt-0.5">{member.role}</div>
                  <p className="text-text-muted text-xs mt-1">{member.specialisation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from MD */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-bg-light rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center border border-gold/20">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
              <Image src="/brand/team/sanmit-shah.jpg" alt="Sanmit Shah" fill className="object-cover" />
            </div>
            <div>
              <p className="text-text-dark text-sm md:text-base leading-relaxed italic mb-4">
                &ldquo;At Practical EduSkills, we believe that education should be a bridge to a better career, not just a certificate. Every student who walks through our doors gets our full commitment to their professional success.&rdquo;
              </p>
              <div>
                <div className="font-serif text-navy font-bold">Mr. Sanmit Shah</div>
                <div className="text-gold text-sm font-medium">MD & CEO, Practical EduSkills Pvt. Ltd.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
