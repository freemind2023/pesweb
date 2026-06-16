'use client';
import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { submitToGoogleSheets } from '@/lib/googleSheets';
import toast from 'react-hot-toast';

const WA_BASE = 'https://wa.me/919890959990?text=';
const COURSES = ['Practical BBA – Strategic Operations & Business Administration', 'Practical BBA-IB – International Business'];
const STREAMS = ['Science (PCM/PCB)', 'Commerce', 'Arts', 'Other'];

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold text-[#0B1F5C] mb-1">{label}</label>
      {children}
      {error && <p className="text-red-500 text-[10px] mt-0.5">{error}</p>}
    </div>
  );
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  course: string;
  stream: string;
  percentage: string;
}

const INITIAL: FormData = { name: '', phone: '', email: '', city: '', course: '', stream: '', percentage: '' };

function buildWAMessage(f: FormData) {
  return encodeURIComponent(
    `Hi, I want to apply for Practical BBA / BBA-IB at Practical EduSkills Head Office!\n\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\nCity: ${f.city}\nCourse: ${f.course}\nStream: ${f.stream}\n12th %: ${f.percentage}%\n\nPlease guide me on the admission process.`
  );
}

const AdmissionForm = forwardRef<HTMLDivElement>(function AdmissionForm(_, ref) {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate() {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter valid 10-digit number';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter valid email';
    if (!form.city.trim()) e.city = 'Required';
    if (!form.course) e.course = 'Select a course';
    if (!form.stream) e.stream = 'Select stream';
    return e;
  }

  function set(k: keyof FormData, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      const result = await submitToGoogleSheets({
        name: form.name,
        phone: form.phone,
        email: form.email,
        city: form.city,
        course: form.course,
        stream: form.stream,
        percentage: form.percentage,
      }, 'bba');
      if (result?.error) {
        toast.error('Could not save your details. Please call 98909 59990.');
      }
    } catch {
      toast.error('Could not save your details. Please call 98909 59990.');
    }
    setLoading(false);
    setSubmitted(true);
    window.open(`${WA_BASE}${buildWAMessage(form)}`, '_blank');
  }

  const inputCls = (err?: string) =>
    `w-full px-3 py-2.5 rounded-xl border text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B1F5C]/30 transition ${err ? 'border-red-400' : 'border-gray-200'}`;

  if (submitted) {
    return (
      <section ref={ref} id="apply-form" className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg,#071232,#0B1F5C)' }}>
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
            <CheckCircle size={64} className="mx-auto text-[#10B981] mb-4" />
            <h2 className="text-white font-black text-2xl mb-2">Application Submitted!</h2>
            <p className="text-white/70 text-sm mb-6">
              WhatsApp opened to connect you directly. Our team will reply within 24 hours.
            </p>
            <a href={`${WA_BASE}${buildWAMessage(form)}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm"
              style={{ background: '#25D366' }}>
              <MessageCircle size={16} /> Continue on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="apply-form" className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg,#071232,#0B1F5C)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[#0B1F5C] text-xs font-bold mb-3"
            style={{ background: '#F5B400' }}>
            2026–27 Admissions Open
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-black">Apply Now — It&apos;s Free</h2>
          <p className="text-white/60 text-sm mt-2">Fill in your details and our counsellor will reach you within 24 hours.</p>
        </motion.div>

        <motion.form onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Field label="Full Name *" id="name" error={errors.name}>
              <input id="name" type="text" placeholder="Your full name" value={form.name}
                onChange={(e) => set('name', e.target.value)} className={inputCls(errors.name)} />
            </Field>
            <Field label="WhatsApp Number *" id="phone" error={errors.phone}>
              <input id="phone" type="tel" placeholder="10-digit mobile number" value={form.phone}
                onChange={(e) => set('phone', e.target.value.replace(/\D/g, '').slice(0, 10))} className={inputCls(errors.phone)} />
            </Field>
            <Field label="Email (optional)" id="email" error={errors.email}>
              <input id="email" type="email" placeholder="your@email.com" value={form.email}
                onChange={(e) => set('email', e.target.value)} className={inputCls(errors.email)} />
            </Field>
            <Field label="City *" id="city" error={errors.city}>
              <input id="city" type="text" placeholder="Pune / Mumbai / …" value={form.city}
                onChange={(e) => set('city', e.target.value)} className={inputCls(errors.city)} />
            </Field>
            <Field label="Program Interested In *" id="course" error={errors.course}>
              <select id="course" value={form.course} onChange={(e) => set('course', e.target.value)} className={inputCls(errors.course)}>
                <option value="">Select program</option>
                {COURSES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="12th Stream *" id="stream" error={errors.stream}>
              <select id="stream" value={form.stream} onChange={(e) => set('stream', e.target.value)} className={inputCls(errors.stream)}>
                <option value="">Select stream</option>
                {STREAMS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </Field>
          </div>
          <Field label="12th Percentage / Expected %" id="percentage" error={errors.percentage}>
            <input id="percentage" type="text" placeholder="e.g. 72%" value={form.percentage}
              onChange={(e) => set('percentage', e.target.value)} className={inputCls(errors.percentage)} />
          </Field>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button type="submit" disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[#0B1F5C] text-sm hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-70"
              style={{ background: 'linear-gradient(135deg,#F5B400,#FFD43B)' }}>
              {loading ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
              {loading ? 'Submitting…' : 'Submit & Connect on WhatsApp'}
            </button>
            <a href={`${WA_BASE}Hi%2C+I+want+to+know+about+Practical+BBA%2FBBA-IB+admissions+at+Practical+EduSkills+Head+Office`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-white text-sm border-2 hover:bg-[#25D366] hover:border-[#25D366] transition-all"
              style={{ borderColor: '#25D366', color: '#25D366' }}>
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
          <p className="text-gray-400 text-[10px] text-center mt-3">
            By submitting, you agree to be contacted by our admission counsellors. No spam.
          </p>
        </motion.form>
      </div>
    </section>
  );
});

AdmissionForm.displayName = 'AdmissionForm';

export default AdmissionForm;
