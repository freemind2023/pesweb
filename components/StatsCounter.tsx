'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { value: 2000, suffix: '+', label: 'Students Placed' },
  { value: 21, suffix: '+', label: 'Years of Excellence' },
  { value: 50, suffix: '+', label: 'Hiring Partners' },
  { value: 15000, suffix: '', prefix: '₹', label: 'Max Monthly Stipend' },
];

function CountUp({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = value / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <span ref={ref}>
      {prefix}{count >= 1000 ? count.toLocaleString('en-IN') : count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="navy-gradient py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-white font-serif text-2xl md:text-3xl font-bold mb-2">
            Our Numbers Tell the Story
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Two decades of turning students into professionals
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="stat-number text-4xl md:text-5xl mb-1">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-white/70 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-white/60 text-sm mb-4">
            We have placed students in CA firms, corporates, and international companies
          </p>
          <a
            href="/placements"
            className="inline-block px-6 py-2.5 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-navy transition-all text-sm"
          >
            View Placements →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
