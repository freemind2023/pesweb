'use client';
import { motion } from 'framer-motion';
import { Briefcase, Globe, TrendingUp, Users } from 'lucide-react';

const reasons = [
  {
    icon: <Briefcase className="w-7 h-7 text-gold" />,
    title: 'Practical Learning',
    desc: 'Not just theory. Real tools, real projects, real industry exposure from Day 1.',
    bg: 'from-navy to-navy/90',
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-gold" />,
    title: 'OJT with Stipend',
    desc: 'Earn ₹8,000–₹15,000/month while studying through our On-the-Job Training program.',
    bg: 'from-navy to-navy/80',
  },
  {
    icon: <Globe className="w-7 h-7 text-gold" />,
    title: 'Dubai Placements',
    desc: 'International career opportunities in Dubai for top-performing students.',
    bg: 'from-navy to-navy/85',
  },
  {
    icon: <Users className="w-7 h-7 text-gold" />,
    title: '2000+ Success Stories',
    desc: 'Two decades of proven results — from CA firms to international corporates.',
    bg: 'from-navy to-navy/90',
  },
];

export default function WhyPES() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Difference</span>
          <h2 className="font-serif text-navy text-2xl md:text-4xl font-bold mt-1 mb-2">
            Why Practical EduSkills?
          </h2>
          <p className="text-text-muted text-sm md:text-base max-w-xl mx-auto">
            We don&apos;t just teach — we make you <strong>INDUSTRY READY</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${reason.bg} rounded-2xl p-6 text-center border border-gold/10 group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-white font-serif font-bold text-lg mb-2">{reason.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
