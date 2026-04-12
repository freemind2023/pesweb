'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { submitToGoogleSheets } from '@/lib/googleSheets';
import { Loader2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter valid 10-digit mobile number'),
  email: z.string().email('Enter valid email'),
  education: z.string().min(1, 'Please select qualification'),
  course: z.string().min(1, 'Please select a course'),
  city: z.string().min(2, 'City is required'),
});

type FormData = z.infer<typeof schema>;

const courses = [
  'Practical B.Com', 'Practical BBA', 'Practical BBA–IB', 'Applied MBA',
  'Bridge Course', 'B.Sc. AI & Digital Automation', 'Bachelor in Hospitality & Tourism', 'CA Article Placement',
];

export default function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await submitToGoogleSheets({ ...data, phone: `+91${data.phone}` }, 'inquiry');
      toast.success('Thank you! Our counsellor will call you within 24 hours. 🎉', { duration: 5000 });
      reset();
    } catch {
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 navy-gradient" />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C9A84C 0%, transparent 50%)' }}
      />
      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-white font-serif text-2xl md:text-3xl font-bold mb-2">
            Take the First Step Towards Your Career
          </h2>
          <p className="text-white/70 text-sm md:text-base">
            Fill in your details — our counsellor will call you within 24 hours
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm mb-1.5 font-medium">Full Name *</label>
              <input {...register('name')} placeholder="Your full name"
                className={`form-input ${errors.name ? 'error' : ''}`} />
              {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1.5 font-medium">Mobile Number *</label>
              <div className="flex">
                <span className="flex items-center px-3 bg-white/20 text-white rounded-l-lg border-2 border-r-0 border-white/20 text-sm">+91</span>
                <input {...register('phone')} placeholder="10-digit mobile" type="tel"
                  className={`form-input rounded-l-none ${errors.phone ? 'error' : ''}`} />
              </div>
              {errors.phone && <p className="text-red-300 text-xs mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1.5 font-medium">Email Address *</label>
              <input {...register('email')} placeholder="your@email.com" type="email"
                className={`form-input ${errors.email ? 'error' : ''}`} />
              {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1.5 font-medium">Qualification *</label>
              <select {...register('education')} className={`form-input ${errors.education ? 'error' : ''}`}>
                <option value="">Select qualification</option>
                <option>12th Pass</option>
                <option>Pursuing Graduation</option>
                <option>Graduate</option>
                <option>Other</option>
              </select>
              {errors.education && <p className="text-red-300 text-xs mt-1">{errors.education.message}</p>}
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1.5 font-medium">Course Interested In *</label>
              <select {...register('course')} className={`form-input ${errors.course ? 'error' : ''}`}>
                <option value="">Select course</option>
                {courses.map((c) => <option key={c}>{c}</option>)}
              </select>
              {errors.course && <p className="text-red-300 text-xs mt-1">{errors.course.message}</p>}
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1.5 font-medium">City *</label>
              <input {...register('city')} placeholder="Your city"
                className={`form-input ${errors.city ? 'error' : ''}`} />
              {errors.city && <p className="text-red-300 text-xs mt-1">{errors.city.message}</p>}
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full py-4 bg-gold text-navy font-bold text-base rounded-xl hover:bg-gold-light transition-all flex items-center justify-center gap-2 disabled:opacity-70 pulse-gold"
          >
            {submitting ? <><Loader2 size={18} className="animate-spin" /> Submitting...</> : 'Get Free Counselling →'}
          </button>
          <p className="text-white/50 text-xs text-center mt-3">
            🔒 Your data is safe. We never spam.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
