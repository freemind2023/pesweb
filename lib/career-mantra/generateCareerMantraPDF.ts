import jsPDF from 'jspdf';
import { questions, type Question } from './questions';
import type { QuizResult } from './scoring';

export interface CareerMantraPDFData {
  name: string;
  phone: string;
  city: string;
  currentStatus: string;
  schoolCollege: string;
  answers: Record<string, string>;
  result: QuizResult;
}

async function loadImageAsBase64(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

const CATEGORY_LABEL: Record<Question['category'], string> = {
  numeracy: 'Numeracy',
  logic: 'Logical Reasoning',
  interest: 'Commerce Interest',
  mindset: 'Professional Mindset',
};

function categoryBreakdown(answers: Record<string, string>) {
  const totals: Record<string, { earned: number; max: number }> = {};
  for (const q of questions) {
    const maxWeight = Math.max(...q.options.map((o) => o.weight));
    const selected = q.options.find((o) => o.id === answers[q.id]);
    const bucket = (totals[q.category] ??= { earned: 0, max: 0 });
    bucket.max += maxWeight;
    bucket.earned += selected?.weight ?? 0;
  }
  return (Object.keys(totals) as Question['category'][]).map((cat) => ({
    label: CATEGORY_LABEL[cat],
    ...totals[cat],
  }));
}

export async function generateCareerMantraPDF(data: CareerMantraPDFData): Promise<void> {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  const PW = 210;
  const PH = 297;
  const M = 14;
  const CW = PW - M * 2;

  const NAVY: [number, number, number] = [10, 31, 92];
  const GOLD: [number, number, number] = [201, 168, 76];
  const GOLD_LIGHT: [number, number, number] = [255, 248, 227];
  const WHITE: [number, number, number] = [255, 255, 255];
  const BG: [number, number, number] = [246, 248, 252];
  const DARK: [number, number, number] = [26, 26, 46];
  const MUTED: [number, number, number] = [107, 114, 128];
  const RULE: [number, number, number] = [210, 215, 225];
  const SUCCESS: [number, number, number] = [16, 185, 129];

  let y = 0;

  // ── HEADER BAND ──────────────────────────────────────────────
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, PW, 44, 'F');
  doc.setFillColor(...GOLD);
  doc.rect(0, 44, PW, 1.5, 'F');

  const logoData = await loadImageAsBase64('/brand/logo.png');
  if (logoData) {
    doc.addImage(logoData, 'PNG', M, 7, 28, 28);
  }

  const tx = M + (logoData ? 34 : 0);
  doc.setTextColor(...WHITE);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('CAREER MANTRA', tx, 17);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('Commerce Readiness Report · Practical EduSkills Pvt. Ltd.', tx, 23);
  doc.text('Ph: +91-98909-59990    Email: info@practicaleduskills.com', tx, 29);
  doc.text('Address: 3rd Floor, Butte Patil Complex, Warje Malwadi Rd, Erandwane, Pune - 411052', tx, 35.5);

  y = 50;

  // ── STUDENT DETAILS ──────────────────────────────────────────
  const ROW_H = 11;
  const halfW = CW / 2;

  const sectionHeader = (title: string) => {
    doc.setFillColor(...NAVY);
    doc.rect(M, y, CW, 6.5, 'F');
    doc.setFillColor(...GOLD);
    doc.rect(M, y, 3, 6.5, 'F');
    doc.setTextColor(...WHITE);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(title.toUpperCase(), M + 7, y + 4.6);
    y += 9;
  };

  const field = (label: string, value: string, x: number, w: number) => {
    doc.setTextColor(...MUTED);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.text(label, x, y);

    doc.setTextColor(...DARK);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    const safeVal = (value || '-').substring(0, 40);
    doc.text(safeVal, x, y + 5);

    doc.setDrawColor(...RULE);
    doc.setLineWidth(0.25);
    doc.line(x, y + 6.3, x + w - 5, y + 6.3);
  };

  const row2 = (a: [string, string], b: [string, string]) => {
    field(a[0], a[1], M, halfW);
    field(b[0], b[1], M + halfW, halfW);
    y += ROW_H;
  };

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });

  sectionHeader('Student Details');
  row2(['Full Name', data.name], ['Mobile Number', data.phone]);
  row2(['City', data.city], ['School / College', data.schoolCollege]);
  row2(['Current Status', data.currentStatus], ['Report Date', dateStr]);

  y += 3;

  // ── SCORE BLOCK ──────────────────────────────────────────────
  doc.setFillColor(...BG);
  doc.roundedRect(M, y, CW, 34, 3, 3, 'F');
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.5);
  doc.roundedRect(M, y, CW, 34, 3, 3, 'S');

  doc.setTextColor(...NAVY);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.text(`${data.result.percentage}%`, M + 10, y + 22);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...MUTED);
  doc.text('COMMERCE READINESS SCORE', M + 10, y + 28);

  doc.setFillColor(...GOLD_LIGHT);
  doc.roundedRect(PW - M - 55, y + 8, 45, 10, 2, 2, 'F');
  doc.setTextColor(...NAVY);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(data.result.tier, PW - M - 32.5, y + 14.5, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.2);
  doc.setTextColor(...DARK);
  const blurbLines = doc.splitTextToSize(data.result.blurb, CW - 70);
  doc.text(blurbLines, M + 65, y + 12);

  y += 40;

  // ── CATEGORY BREAKDOWN ────────────────────────────────────────
  sectionHeader('Category Breakdown');
  const breakdown = categoryBreakdown(data.answers);
  const barW = CW - 60;

  breakdown.forEach((b) => {
    const pct = b.max > 0 ? b.earned / b.max : 0;
    doc.setTextColor(...DARK);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(b.label, M, y + 4);

    doc.setFillColor(...RULE);
    doc.roundedRect(M + 50, y, barW - 50, 4, 1, 1, 'F');
    doc.setFillColor(...(pct >= 0.7 ? SUCCESS : pct >= 0.4 ? GOLD : [201, 100, 90] as [number, number, number]));
    doc.roundedRect(M + 50, y, Math.max(4, (barW - 50) * pct), 4, 1, 1, 'F');

    doc.setTextColor(...MUTED);
    doc.setFontSize(7);
    doc.text(`${Math.round(pct * 100)}%`, M + barW + 2, y + 4);

    y += 8;
  });

  y += 4;

  // ── NEXT STEP BOX ──────────────────────────────────────────────
  doc.setFillColor(...GOLD_LIGHT);
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.5);
  doc.roundedRect(M, y, CW, 22, 2, 2, 'FD');

  doc.setTextColor(...NAVY);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Next Step: Practical B.Com', M + 5, y + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...DARK);
  const nextStepLines = doc.splitTextToSize(
    'A hands-on, industry-linked commerce degree built to take you from where you are to where you want to be — with real placements, not just theory.',
    CW - 10
  );
  doc.text(nextStepLines, M + 5, y + 14);

  // ── FOOTER BAND ──────────────────────────────────────────────
  const FY = PH - 18;
  doc.setFillColor(...NAVY);
  doc.rect(0, FY, PW, 18, 'F');
  doc.setFillColor(...GOLD);
  doc.rect(0, FY, PW, 1, 'F');

  doc.setTextColor(...GOLD);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('www.practicaleduskills.com', PW / 2, FY + 6.5, { align: 'center' });

  doc.setTextColor(...WHITE);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.text(
    '3rd Floor, Butte Patil Complex, Warje Malwadi Rd, Erandwane, Pune - 411052  |  +91-98909-59990  |  info@practicaleduskills.com',
    PW / 2, FY + 12, { align: 'center' }
  );

  doc.setTextColor(180, 180, 180);
  doc.setFontSize(6.5);
  doc.text('This report is a self-assessment tool and not a formal aptitude certification.', PW / 2, FY + 17, { align: 'center' });

  // ── SAVE ─────────────────────────────────────────────────────
  const safeName = data.name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
  const dateTag = today.toISOString().slice(0, 10);
  doc.save(`Career_Mantra_Report_${safeName}_${dateTag}.pdf`);
}
