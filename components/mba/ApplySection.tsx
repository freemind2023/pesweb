'use client';
import { forwardRef, useState } from 'react';
import { ArrowRight, MessageCircle, Loader2, CheckCircle } from 'lucide-react';
import { submitToGoogleSheets } from '@/lib/googleSheets';
import toast from 'react-hot-toast';

const WA_BASE = 'https://wa.me/919890959990?text=';
const STREAMS = ['Agriculture', 'Engineering', 'Commerce', 'Arts', 'Other'];

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  stream: string;
}

const INITIAL: FormData = { name: '', phone: '', email: '', city: '', stream: '' };

function buildWAMessage(f: FormData) {
  return encodeURIComponent(
    `Hi, I want to apply for the Practical MBA program at Practical EduSkills!\n\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\nCity: ${f.city}\nStream: ${f.stream}\n\nPlease guide me on the admission process.`
  );
}

const inputCls =
  'w-full bg-black border border-white/15 focus:border-amber-400 focus:outline-none px-4 py-3 text-sm text-white placeholder-white/30 mba-mono transition';

const ApplySection = forwardRef<HTMLDivElement>(function ApplySection(_, ref) {
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
      const result = await submitToGoogleSheets({ ...form }, 'practical-mba');
      if (result?.error) toast.error('Could not save your details. Please call 98909 59990.');
    } catch {
      toast.error('Could not save your details. Please call 98909 59990.');
    }
    setLoading(false);
    setSubmitted(true);
    window.open(`${WA_BASE}${buildWAMessage(form)}`, '_blank');
  }

  return (
    <section id="apply" ref={ref} className="relative border-b border-white/5 py-28 overflow-hidden">
      <div className="absolute inset-0 mba-grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-12">
          <div className="lg:col-span-3">
            <div className="mba-mono text-xs text-white/40 mb-2">08 / APPLY</div>
            <div className="mba-amber mba-mono text-xs">────────</div>
          </div>
          <div className="lg:col-span-9">
            <div className="mba-mono text-xs mba-amber tracking-widest mb-4 mba-amber-pulse">● APPLICATIONS — OPEN</div>
            <h2 className="mba-serif tracking-tight leading-tight mb-10" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
              Seats are limited.<br />
              <span className="text-white/40 italic">Your OJT batch won&apos;t wait.</span>
            </h2>
          </div>
        </div>

        {submitted ? (
          <div className="border border-white/10 p-10 md:p-14 bg-black/60 backdrop-blur text-center max-w-2xl mx-auto">
            <CheckCircle size={48} className="mx-auto mb-4 mba-amber" />
            <h3 className="mba-serif text-2xl md:text-3xl tracking-tight mb-3">Application Submitted!</h3>
            <p className="text-white/60 text-sm mb-6">WhatsApp opened to connect you directly. Our team will reply within 24 hours.</p>
            <a href={`${WA_BASE}${buildWAMessage(form)}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 mba-mono text-xs" style={{ background: '#25D366', color: '#fff' }}>
              <MessageCircle size={16} /> CONTINUE ON WHATSAPP
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="border border-white/10 p-8 md:p-10 bg-black/60 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="mba-mono text-xs text-white/40 mb-2 block">FULL NAME *</label>
                <input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Your full name" className={inputCls} />
                {errors.name && <p className="text-red-400 text-xs mt-1 mba-mono">{errors.name}</p>}
              </div>
              <div>
                <label className="mba-mono text-xs text-white/40 mb-2 block">WHATSAPP NUMBER *</label>
                <input value={form.phone} onChange={(e) => set('phone', e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="10-digit mobile number" className={inputCls} />
                {errors.phone && <p className="text-red-400 text-xs mt-1 mba-mono">{errors.phone}</p>}
              </div>
              <div>
                <label className="mba-mono text-xs text-white/40 mb-2 block">EMAIL</label>
                <input value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="your@email.com" className={inputCls} />
                {errors.email && <p className="text-red-400 text-xs mt-1 mba-mono">{errors.email}</p>}
              </div>
              <div>
                <label className="mba-mono text-xs text-white/40 mb-2 block">CITY *</label>
                <input value={form.city} onChange={(e) => set('city', e.target.value)} placeholder="Pune / Mumbai / …" className={inputCls} />
                {errors.city && <p className="text-red-400 text-xs mt-1 mba-mono">{errors.city}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="mba-mono text-xs text-white/40 mb-2 block">GRADUATION STREAM *</label>
                <select value={form.stream} onChange={(e) => set('stream', e.target.value)} className={inputCls}>
                  <option value="">Select stream</option>
                  {STREAMS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.stream && <p className="text-red-400 text-xs mt-1 mba-mono">{errors.stream}</p>}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="submit" disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 mba-bg-amber text-black hover:bg-white transition mba-mono text-xs tracking-widest disabled:opacity-70">
                {loading ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
                {loading ? 'SUBMITTING…' : 'SUBMIT APPLICATION'}
              </button>
              <a href="https://wa.me/919890959990?text=Hi%2C+I+want+to+know+about+the+Practical+MBA+program+at+Practical+EduSkills"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 border border-white/15 hover:border-white/40 transition mba-mono text-xs tracking-widest text-white/80">
                <MessageCircle size={16} /> CHAT ON WHATSAPP
              </a>
            </div>
            <p className="text-white/30 text-[10px] mba-mono mt-4 text-center">By submitting, you agree to be contacted by our admission counsellors. No spam.</p>
          </form>
        )}
      </div>
    </section>
  );
});

export default ApplySection;
