'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { submitToGoogleSheets } from '@/lib/googleSheets';
import { Loader2, CheckCircle, Download } from 'lucide-react';
import { generateEnrollmentPDF, type EnrollmentPDFData } from '@/lib/generateEnrollmentPDF';

const schema = z.object({
  name: z.string().min(2, 'Full name is required'),
  dob: z.string().min(1, 'Date of birth is required'),
  gender: z.string().min(1, 'Gender is required'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter valid 10-digit mobile number'),
  whatsapp: z.string().optional(),
  email: z.string().email('Enter valid email'),
  city: z.string().min(2, 'City is required'),
  pincode: z.string().regex(/^\d{6}$/, 'Enter valid 6-digit pincode'),
  address: z.string().optional(),
  qualification: z.string().min(1, 'Select qualification'),
  board: z.string().optional(),
  passingYear: z.string().optional(),
  percentage: z.string().optional(),
  collegeName: z.string().optional(),
  stream: z.string().optional(),
  course: z.string().min(1, 'Select a course'),
  heardFrom: z.string().min(1, 'Please select how you heard about us'),
  parentName: z.string().min(2, 'Parent name is required'),
  parentOccupation: z.string().optional(),
  parentPhone: z.string().regex(/^[6-9]\d{9}$/, "Enter parent's valid mobile number"),
});

type FormData = z.infer<typeof schema>;

const courses = [
  'Practical B.Com', 'Practical BBA', 'Practical BBA–IB', 'Applied MBA',
  'Bridge Course', 'B.Sc. AI & Digital Automation',
  'Bachelor in Hospitality & Tourism', 'CA Article Placement',
];

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [pdfData, setPdfData] = useState<EnrollmentPDFData | null>(null);
  const [downloading, setDownloading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const enriched: EnrollmentPDFData = {
        name: data.name, dob: data.dob, gender: data.gender,
        phone: `+91${data.phone}`, whatsapp: data.whatsapp ? `+91${data.whatsapp}` : '',
        email: data.email, city: data.city, pincode: data.pincode,
        address: data.address || '', qualification: data.qualification,
        board: data.board || '', passingYear: data.passingYear || '',
        percentage: data.percentage || '', collegeName: data.collegeName || '',
        stream: data.stream || '', course: data.course,
        heardFrom: data.heardFrom, parentName: data.parentName,
        parentOccupation: data.parentOccupation || '', parentPhone: `+91${data.parentPhone}`,
      };
      await submitToGoogleSheets({ ...enriched }, 'admission');
      setPdfData(enriched);
      setSubmitted(true);
      // auto-download PDF
      await generateEnrollmentPDF(enriched);
    } catch {
      toast.error('Something went wrong. Please call us at +91-98909-59990');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-4">
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-success" size={40} />
        </div>
        <h2 className="font-serif text-navy text-2xl font-bold mb-2">Application Submitted!</h2>
        <p className="text-text-muted text-base mb-2">Thank you for applying to Practical EduSkills.</p>
        <p className="text-text-muted text-sm">Our team will contact you within 24 hours to guide you through the next steps.</p>

        {pdfData && (
          <div className="mt-6 p-5 bg-gold/10 rounded-2xl border border-gold/30 inline-block w-full max-w-sm">
            <p className="text-navy text-sm font-semibold mb-3">Your application copy is ready!</p>
            <button
              onClick={async () => {
                setDownloading(true);
                try { await generateEnrollmentPDF(pdfData); }
                finally { setDownloading(false); }
              }}
              disabled={downloading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-navy text-gold font-bold rounded-xl hover:bg-navy/90 transition-all disabled:opacity-70"
            >
              {downloading
                ? <><Loader2 size={18} className="animate-spin" /> Generating PDF...</>
                : <><Download size={18} /> Download Application PDF</>}
            </button>
            <p className="text-text-muted text-xs mt-2">A copy was also auto-downloaded when you submitted.</p>
          </div>
        )}

        <div className="mt-4 p-4 bg-bg-light rounded-xl inline-block">
          <p className="text-navy text-sm font-medium">Meanwhile, you can reach us at:</p>
          <a href="tel:+919890959990" className="text-navy font-bold text-lg hover:text-gold">+91-98909-59990</a>
        </div>
      </motion.div>
    );
  }

  const fieldClass = (hasError?: boolean) =>
    `form-input ${hasError ? 'border-red-400' : ''}`;
  const ErrorMsg = ({ msg }: { msg?: string }) =>
    msg ? <p className="text-red-500 text-xs mt-1">{msg}</p> : null;

  const SectionHeader = ({ title, step }: { title: string; step: number }) => (
    <div className="flex items-center gap-3 mb-4 mt-6">
      <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-xs flex-shrink-0">{step}</div>
      <h3 className="font-serif text-navy text-lg font-bold">{title}</h3>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
      <SectionHeader title="Personal Details" step={1} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Full Name *</label>
          <input {...register('name')} placeholder="As per records" className={fieldClass(!!errors.name)} />
          <ErrorMsg msg={errors.name?.message} />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Date of Birth *</label>
          <input {...register('dob')} type="date" className={fieldClass(!!errors.dob)} />
          <ErrorMsg msg={errors.dob?.message} />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Gender *</label>
          <select {...register('gender')} className={fieldClass(!!errors.gender)}>
            <option value="">Select gender</option>
            <option>Male</option><option>Female</option><option>Other</option>
          </select>
          <ErrorMsg msg={errors.gender?.message} />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Mobile Number *</label>
          <div className="flex">
            <span className="flex items-center px-3 bg-bg-light text-navy rounded-l-lg border-2 border-r-0 border-gray-200 text-sm font-medium">+91</span>
            <input {...register('phone')} type="tel" placeholder="10-digit" className={`form-input rounded-l-none ${errors.phone ? 'border-red-400' : ''}`} />
          </div>
          <ErrorMsg msg={errors.phone?.message} />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">WhatsApp Number</label>
          <div className="flex">
            <span className="flex items-center px-3 bg-bg-light text-navy rounded-l-lg border-2 border-r-0 border-gray-200 text-sm">+91</span>
            <input {...register('whatsapp')} type="tel" placeholder="If different" className="form-input rounded-l-none" />
          </div>
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Email Address *</label>
          <input {...register('email')} type="email" placeholder="your@email.com" className={fieldClass(!!errors.email)} />
          <ErrorMsg msg={errors.email?.message} />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">City *</label>
          <input {...register('city')} placeholder="Your city" className={fieldClass(!!errors.city)} />
          <ErrorMsg msg={errors.city?.message} />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Pincode *</label>
          <input {...register('pincode')} placeholder="6-digit pincode" className={fieldClass(!!errors.pincode)} />
          <ErrorMsg msg={errors.pincode?.message} />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Full Address</label>
          <textarea {...register('address')} placeholder="Your full address" rows={2} className="form-input resize-none" />
        </div>
      </div>

      <SectionHeader title="Academic Details" step={2} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Highest Qualification *</label>
          <select {...register('qualification')} className={fieldClass(!!errors.qualification)}>
            <option value="">Select qualification</option>
            <option>Currently in 12th</option><option>12th Pass</option>
            <option>Pursuing Graduation</option><option>Graduate</option><option>Post-Graduate</option>
          </select>
          <ErrorMsg msg={errors.qualification?.message} />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">12th Board</label>
          <input {...register('board')} placeholder="e.g. Maharashtra State Board" className="form-input" />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">12th Passing Year</label>
          <input {...register('passingYear')} type="number" placeholder="e.g. 2024" className="form-input" />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">12th Percentage</label>
          <input {...register('percentage')} type="number" placeholder="e.g. 75" className="form-input" />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">College / School Name</label>
          <input {...register('collegeName')} placeholder="Your college name" className="form-input" />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Stream</label>
          <select {...register('stream')} className="form-input">
            <option value="">Select stream</option>
            <option>Commerce</option><option>Science</option><option>Arts</option><option>Other</option>
          </select>
        </div>
      </div>

      <SectionHeader title="Course Selection" step={3} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Course Interested In *</label>
          <select {...register('course')} className={fieldClass(!!errors.course)}>
            <option value="">Select course</option>
            {courses.map((c) => <option key={c}>{c}</option>)}
          </select>
          <ErrorMsg msg={errors.course?.message} />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">How Did You Hear About Us *</label>
          <select {...register('heardFrom')} className={fieldClass(!!errors.heardFrom)}>
            <option value="">Select source</option>
            <option>Instagram</option><option>YouTube</option><option>Friend/Family</option>
            <option>Google Search</option><option>College Visit</option><option>WhatsApp</option><option>Other</option>
          </select>
          <ErrorMsg msg={errors.heardFrom?.message} />
        </div>
      </div>

      <SectionHeader title="Parent / Guardian Details" step={4} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Parent/Guardian Name *</label>
          <input {...register('parentName')} placeholder="Parent full name" className={fieldClass(!!errors.parentName)} />
          <ErrorMsg msg={errors.parentName?.message} />
        </div>
        <div>
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Parent&apos;s Occupation</label>
          <input {...register('parentOccupation')} placeholder="e.g. Business" className="form-input" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-text-dark text-sm mb-1.5 font-medium">Parent&apos;s Mobile Number *</label>
          <div className="flex max-w-xs">
            <span className="flex items-center px-3 bg-bg-light text-navy rounded-l-lg border-2 border-r-0 border-gray-200 text-sm">+91</span>
            <input {...register('parentPhone')} type="tel" placeholder="10-digit" className={`form-input rounded-l-none ${errors.parentPhone ? 'border-red-400' : ''}`} />
          </div>
          <ErrorMsg msg={errors.parentPhone?.message} />
        </div>
      </div>

      <div className="pt-6">
        <button type="submit" disabled={submitting}
          className="w-full py-4 bg-gold text-navy font-bold text-lg rounded-xl hover:bg-gold-light transition-all flex items-center justify-center gap-2 disabled:opacity-70 pulse-gold">
          {submitting ? <><Loader2 size={20} className="animate-spin" /> Submitting Application...</> : 'Submit Application →'}
        </button>
        <p className="text-text-muted text-xs text-center mt-3">
          🔒 Your information is safe and will only be used for admission purposes.
        </p>
      </div>
    </form>
  );
}
