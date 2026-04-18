'use client';
import AdmissionForm from '@/components/AdmissionForm';
import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';

export default function AdmissionsPage() {
  const { lang } = useLanguage();
  const tr = t[lang].admissions;

  return (
    <>
      <section className="navy-gradient pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-white text-3xl md:text-4xl font-bold mb-2">{tr.heading}</h1>
          <p className="text-white/70 text-base">{tr.sub}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 md:py-14">
        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto">
          {tr.steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-navy flex items-center justify-center text-gold text-xs font-bold">{i + 1}</div>
                <span className="text-text-muted text-xs whitespace-nowrap">{step}</span>
              </div>
              {i < 3 && <div className="w-8 h-px bg-gray-200" />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
          <AdmissionForm />
        </div>
      </div>
    </>
  );
}
