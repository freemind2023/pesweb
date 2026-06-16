'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen } from 'lucide-react';

const SEM1 = [
  { t: 'Principles of Management', d: 'Planning, Organizing, Leadership, Control, KPI Orientation, Managerial Decision Making.' },
  { t: 'Business Communication & Corporate Etiquette', d: 'Business Email Drafting, Client Meetings, Presentation Skills, Professional Writing, LinkedIn Profile Building.' },
  { t: 'Marketing Fundamentals', d: 'STP, 4Ps, Branding, Customer Lifecycle, Funnel Logic, Digital Campaign Basics.' },
  { t: 'Human Behaviour in Organization', d: 'Motivation, Teamwork, Conflict Handling, Leadership Behaviour, Emotional Intelligence.' },
  { t: 'Digital Business & Workplace Tools', d: 'Emerging business technologies, modern reporting applications, workflow automation, professional correspondence, and tech ethics.' },
  { t: 'Business Reporting & Analytics Lab', d: 'Managing transaction datasets, data summaries, tracking key performance indicators (KPIs), generating management insights, and reporting models.' },
  { t: 'Entrepreneurship & Startup Execution', d: 'Business Opportunity Identification, Business Model Canvas, Customer Discovery, Go-To-Market Strategy, Startup Operations, Business Pitching.' },
];

const SEM2 = [
  { t: 'CRM & Customer Lifecycle Management', d: 'Lead Funnel, Conversion Stages, Retention Logic, Customer Success, Follow-up Automation.' },
  { t: 'Financial Accounting & Business Finance', d: 'Basics of Accounting, Profit & Loss Statement, Balance Sheet, Budgeting, Cash Flow Management.' },
  { t: 'HR Operations & People Analytics', d: 'Recruitment Workflow, Onboarding Checklist, HR Dashboards, Attrition Analysis, Attendance Tracker.' },
  { t: 'Functional Dashboards & Performance Reporting', d: 'Data modelling, query features, building interactive domain dashboards, business metrics tracking, and data storytelling.' },
  { t: 'Business Organisations & Environment', d: 'Types of Business, Indian Business Environment, Corporate Structures, Business Ecosystem, Industry Analysis.' },
  { t: 'Business Laws & Corporate Compliance', d: 'Contract Law, Company Law Basics, Employment Laws, Startup Legal Basics, Corporate Compliance.' },
  { t: 'Digital Marketing & Performance Analytics', d: 'Social Media Marketing, SEO Fundamentals, Google Ads, Meta Ads, Campaign Analytics, Performance Measurement.' },
  { t: 'Employability & Career Lab', d: 'Aptitude Skills, Group Discussions, Mock Interviews, Resume Building, Portfolio Development, Corporate Grooming.' },
];

function SemBlock({ label, items, color, startIdx }: { label: string; items: { t: string; d: string }[]; color: string; startIdx: number }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <BookOpen size={18} style={{ color }} />
        <h3 className="font-black text-lg" style={{ color: '#0B1F5C' }}>{label}</h3>
      </div>
      <div className="space-y-2.5">
        {items.map((item, i) => (
          <motion.div key={item.t}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.04 }}
            className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left">
              <span className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black text-white flex-shrink-0"
                style={{ background: color }}>
                {startIdx + i}
              </span>
              <span className="flex-1 font-bold text-[#0B1F5C] text-sm leading-snug">{item.t}</span>
              <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
                <ChevronDown size={16} className="text-gray-400" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <p className="px-4 pb-3 pl-13 text-gray-500 text-xs leading-relaxed border-t border-gray-50 pt-2 ml-9">{item.d}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Curriculum() {
  return (
    <section className="py-8 md:py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Detailed Curriculum</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Smart Learning. Strong Foundation.</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            Aligned with Savitribai Phule Pune University (SPPU) guidelines — academic knowledge blended with practical execution skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <SemBlock label="Semester 1" items={SEM1} color="#0B1F5C" startIdx={1} />
          <SemBlock label="Semester 2" items={SEM2} color="#6366F1" startIdx={8} />
        </div>
      </div>
    </section>
  );
}
