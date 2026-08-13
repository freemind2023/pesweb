'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Trophy, MessageCircle, Download, Loader2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { submitToGoogleSheets } from '@/lib/googleSheets';
import { generateCareerMantraPDF } from '@/lib/career-mantra/generateCareerMantraPDF';
import type { QuizResult } from '@/lib/career-mantra/scoring';
import type { LeadData } from './LeadForm';
import { questions } from '@/lib/career-mantra/questions';

const tierColor: Record<string, string> = {
  Explorer: 'bg-accent/10 text-accent border-accent/30',
  Achiever: 'bg-gold/10 text-gold border-gold/40',
  'Future Leader': 'bg-success/10 text-success border-success/30',
};

export default function ReportScreen({
  lead,
  answers,
  result,
}: {
  lead: LeadData;
  answers: Record<string, string>;
  result: QuizResult;
}) {
  const submittedRef = useRef(false);
  const pdfTriggeredRef = useRef(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (submittedRef.current) return;
    submittedRef.current = true;

    const answerFields: Record<string, string> = {};
    questions.forEach((q) => {
      answerFields[q.id] = answers[q.id] || '';
    });

    submitToGoogleSheets(
      {
        ...lead,
        phone: lead.phone.startsWith('+91') ? lead.phone : `+91${lead.phone}`,
        ...answerFields,
        score: String(result.score),
        maxScore: String(result.maxScore),
        percentage: String(result.percentage),
        tier: result.tier,
      },
      'career-mantra-result'
    ).catch((err) => console.error('[career-mantra] result submit failed', err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const downloadReport = async () => {
    setDownloading(true);
    try {
      await generateCareerMantraPDF({ ...lead, answers, result });
    } catch (err) {
      console.error('[career-mantra] PDF generation failed', err);
    } finally {
      setDownloading(false);
    }
  };

  useEffect(() => {
    if (pdfTriggeredRef.current) return;
    pdfTriggeredRef.current = true;
    downloadReport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const whatsappMsg = encodeURIComponent(
    `Hi Practical EduSkills! I just completed the Career Mantra quiz and scored ${result.percentage}% (${result.tier}). I'd like to know more about the Practical B.Com course.`
  );

  return (
    <div className="min-h-[100dvh] navy-gradient px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-navy flex items-center justify-center"
        >
          <Trophy className="text-gold" size={28} />
        </motion.div>

        <p className="text-text-muted text-sm mb-1">{lead.name}, your Career Mantra report is ready!</p>

        <div className="my-4">
          <div className="text-5xl font-bold text-navy font-serif">
            <CountUp end={result.percentage} duration={1.4} suffix="%" />
          </div>
          <p className="text-text-muted text-xs mt-1">Commerce Readiness Score</p>
        </div>

        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold border ${tierColor[result.tier]} mb-4`}
        >
          {result.tier}
        </span>

        <p className="text-text-dark text-sm sm:text-base leading-relaxed mb-6">{result.blurb}</p>

        <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-4 text-left">
          <p className="text-navy text-sm font-semibold mb-1">Next step: Practical B.Com</p>
          <p className="text-text-muted text-xs">
            A hands-on, industry-linked commerce degree built to take you from where you are to where{' '}
            {result.tier === 'Explorer' ? 'you want to be' : 'you already are — faster'}.
          </p>
        </div>

        <button
          onClick={downloadReport}
          disabled={downloading}
          className="w-full mb-3 py-3.5 border-2 border-navy text-navy font-bold text-sm rounded-xl hover:bg-navy hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {downloading ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Preparing PDF...
            </>
          ) : (
            <>
              <Download size={16} /> Download Report
            </>
          )}
        </button>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/courses"
            className="flex-1 py-3.5 bg-gold text-navy font-bold text-sm rounded-xl hover:bg-gold-light transition-all flex items-center justify-center gap-2"
          >
            Explore Practical B.Com
          </a>
          <a
            href={`https://wa.me/919890959990?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 bg-[#25D366] text-white font-bold text-sm rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={16} /> Talk to a counselor
          </a>
        </div>

        <p className="text-text-muted text-xs mt-4 flex items-center justify-center gap-1">
          <MessageCircle size={12} /> Your report was downloaded automatically. Our team will also reach out to you shortly.
        </p>
      </motion.div>
    </div>
  );
}
