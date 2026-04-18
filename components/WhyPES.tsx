'use client';
import { motion } from 'framer-motion';
import { Briefcase, Globe, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';

export default function WhyPES() {
  const { lang } = useLanguage();
  const tr = t[lang].why;

  const reasons = [
    { icon: <Briefcase className="w-7 h-7 text-gold" />, title: tr.r1t, desc: tr.r1d, bg: 'from-navy to-navy/90' },
    { icon: <TrendingUp className="w-7 h-7 text-gold" />, title: tr.r2t, desc: tr.r2d, bg: 'from-navy to-navy/80' },
    { icon: <Globe className="w-7 h-7 text-gold" />, title: tr.r3t, desc: tr.r3d, bg: 'from-navy to-navy/85' },
    { icon: <Users className="w-7 h-7 text-gold" />, title: tr.r4t, desc: tr.r4d, bg: 'from-navy to-navy/90' },
  ];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">{tr.label}</span>
          <h2 className="font-serif text-navy text-2xl md:text-4xl font-bold mt-1 mb-2">{tr.heading}</h2>
          <p className="text-text-muted text-sm md:text-base max-w-xl mx-auto">
            {tr.sub}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <motion.div key={reason.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${reason.bg} rounded-2xl p-6 text-center border border-gold/10 group`}>
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
