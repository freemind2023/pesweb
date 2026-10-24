'use client';
import { motion } from 'framer-motion';
import { ArrowRight, IndianRupee, Calendar, Clock, MonitorSmartphone, MapPin, LifeBuoy } from 'lucide-react';

const INFO = [
  { icon: Calendar, label: 'Duration', value: '6 Months (3 months lectures + 3 months paid internship)' },
  { icon: Clock, label: 'Schedule', value: '6 sessions/week · 2 hrs/session' },
  { icon: MonitorSmartphone, label: 'Delivery', value: 'Offline classroom + LMS' },
  { icon: MapPin, label: 'Location', value: 'Practical EduSkills, Warje Malwadi Rd, Erandwane, Pune' },
  { icon: LifeBuoy, label: 'Career Support', value: 'Portfolio review, mock interviews, placement assistance' },
];

export default function ProgramInfo({ onApply }: { onApply: () => void }) {
  return (
    <section className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg,#071232,#0B1F5C)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Program Information</span>
          <h2 className="text-white text-3xl md:text-4xl font-black mt-1">Build Skills. Build a Portfolio. Build Your Career.</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl p-7 md:p-8 shadow-2xl">
          <ul className="space-y-4 mb-6">
            {INFO.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#eef3ff' }}>
                  <item.icon size={16} className="text-[#0B1F5C]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.label}</p>
                  <p className="text-[#0B1F5C] font-semibold text-sm">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl p-5 flex items-center gap-4 mb-6" style={{ background: 'linear-gradient(135deg,#071232,#0B1F5C)' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#F5B400' }}>
              <IndianRupee size={22} className="text-[#0B1F5C]" />
            </div>
            <div>
              <div className="text-white font-black text-2xl">₹70,000</div>
              <p className="text-white/60 text-xs mt-0.5">Premium third-party tool subscriptions, where required, are additional.</p>
            </div>
          </div>

          <button onClick={onApply}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[#0B1F5C] text-sm hover:scale-[1.02] active:scale-95 transition-transform"
            style={{ background: 'linear-gradient(135deg,#F5B400,#FFD43B)' }}>
            Reserve Your Seat <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
