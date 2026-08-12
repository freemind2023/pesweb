'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { submitToGoogleSheets } from '@/lib/googleSheets';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter valid 10-digit mobile number'),
  city: z.string().min(2, 'City is required'),
  currentStatus: z.string().min(1, 'Please select your current status'),
  schoolCollege: z.string().min(2, 'School/college name is required'),
});

export type LeadData = z.infer<typeof schema>;

const statusOptions = [
  'Just appeared for 12th',
  '12th pass — awaiting result',
  '12th pass — result out',
  'Repeating 12th',
  'Already in college',
];

export default function LeadForm({ onSubmitted }: { onSubmitted: (data: LeadData) => void }) {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: LeadData) => {
    setSubmitting(true);
    // Fire-and-forget: don't let a slow/unconfigured Sheets endpoint block the student from the quiz.
    submitToGoogleSheets({ ...data, phone: `+91${data.phone}` }, 'career-mantra-lead').catch((err) =>
      console.error('[career-mantra] lead submit failed', err)
    );
    toast.success('Details saved — let’s begin!');
    onSubmitted(data);
    setSubmitting(false);
  };

  return (
    <div className="min-h-[100dvh] bg-bg-light flex items-center justify-center px-4 pt-24 pb-12 sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 sm:p-8"
      >
        <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-2">Before you begin</p>
        <h2 className="font-serif text-navy text-2xl font-bold mb-2">Tell us a bit about you</h2>
        <p className="text-text-muted text-sm mb-6">
          We’ll use this to save your progress and send you your personalized report.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-text-dark text-sm mb-1.5 font-medium">Full Name</label>
            <input {...register('name')} placeholder="Your name" className={`form-input ${errors.name ? 'error' : ''}`} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-text-dark text-sm mb-1.5 font-medium">Mobile Number</label>
            <div className="flex">
              <span className="flex items-center px-3 bg-bg-light text-navy rounded-l-lg border-2 border-r-0 border-gray-200 text-sm font-medium">
                +91
              </span>
              <input
                {...register('phone')}
                type="tel"
                placeholder="10-digit number"
                className={`form-input rounded-l-none ${errors.phone ? 'error' : ''}`}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-text-dark text-sm mb-1.5 font-medium">City</label>
            <input {...register('city')} placeholder="Your city" className={`form-input ${errors.city ? 'error' : ''}`} />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>

          <div>
            <label className="block text-text-dark text-sm mb-1.5 font-medium">Current Status</label>
            <select {...register('currentStatus')} className={`form-input ${errors.currentStatus ? 'error' : ''}`}>
              <option value="">Select status</option>
              {statusOptions.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            {errors.currentStatus && <p className="text-red-500 text-xs mt-1">{errors.currentStatus.message}</p>}
          </div>

          <div>
            <label className="block text-text-dark text-sm mb-1.5 font-medium">School / College Name</label>
            <input
              {...register('schoolCollege')}
              placeholder="Your school or college"
              className={`form-input ${errors.schoolCollege ? 'error' : ''}`}
            />
            {errors.schoolCollege && <p className="text-red-500 text-xs mt-1">{errors.schoolCollege.message}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 py-4 bg-gold text-navy font-bold text-base rounded-xl hover:bg-gold-light transition-all flex items-center justify-center gap-2 disabled:opacity-70 pulse-gold"
          >
            {submitting ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Saving...
              </>
            ) : (
              'Start the Quiz →'
            )}
          </button>
          <p className="text-text-muted text-xs text-center">🔒 Your information is safe and used only to send your report.</p>
        </form>
      </motion.div>
    </div>
  );
}
