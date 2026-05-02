import jsPDF from 'jspdf';

export interface EnrollmentPDFData {
  name: string;
  dob: string;
  gender: string;
  phone: string;
  whatsapp: string;
  email: string;
  city: string;
  pincode: string;
  address: string;
  qualification: string;
  board: string;
  passingYear: string;
  percentage: string;
  collegeName: string;
  stream: string;
  course: string;
  heardFrom: string;
  parentName: string;
  parentOccupation: string;
  parentPhone: string;
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

function formatDate(dateStr: string): string {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${day}/${month}/${d.getFullYear()}`;
}

export async function generateEnrollmentPDF(data: EnrollmentPDFData): Promise<void> {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  const PW = 210;
  const PH = 297;
  const M = 14;
  const CW = PW - M * 2;

  const NAVY: [number, number, number] = [27, 42, 74];
  const GOLD: [number, number, number] = [212, 175, 55];
  const GOLD_LIGHT: [number, number, number] = [255, 248, 210];
  const WHITE: [number, number, number] = [255, 255, 255];
  const BG: [number, number, number] = [246, 248, 252];
  const DARK: [number, number, number] = [26, 26, 26];
  const MUTED: [number, number, number] = [105, 105, 105];
  const RULE: [number, number, number] = [210, 215, 225];

  let y = 0;

  // ── HEADER BAND ──────────────────────────────────────────────
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, PW, 44, 'F');
  doc.setFillColor(...GOLD);
  doc.rect(0, 44, PW, 1.5, 'F');

  const logoData = await loadImageAsBase64('/brand/logo-white.png');
  if (logoData) {
    doc.addImage(logoData, 'PNG', M, 7, 28, 28);
  }

  const tx = M + (logoData ? 34 : 0);
  doc.setTextColor(...WHITE);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('PRACTICAL EDUSKILLS PVT. LTD.', tx, 17);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('ISO Certified  |  NSDC Skill Centre  |  Established 2003  |  21+ Years of Excellence', tx, 23);
  doc.text('Ph: +91-98909-59990    Email: info@practicaleduskills.com', tx, 29);
  doc.text('Address: 3rd Floor, Butte Patil Complex, Warje Malwadi Rd, Erandwane, Pune - 411052', tx, 35.5);

  y = 50;

  // ── TITLE BLOCK ──────────────────────────────────────────────
  doc.setFillColor(...BG);
  doc.roundedRect(M, y, CW, 14, 2, 2, 'F');
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.5);
  doc.roundedRect(M, y, CW, 14, 2, 2, 'S');

  doc.setTextColor(...NAVY);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('ENROLLMENT APPLICATION FORM', PW / 2, y + 6.5, { align: 'center' });

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...MUTED);
  doc.text(`Date of Submission: ${dateStr}`, PW / 2, y + 12, { align: 'center' });

  y += 19;

  // ── HELPERS ──────────────────────────────────────────────────
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
    const safeVal = (value || '-').substring(0, 38);
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

  const row1 = (label: string, value: string) => {
    field(label, value, M, CW);
    y += ROW_H;
  };

  // ── SECTION 1: PERSONAL DETAILS ──────────────────────────────
  sectionHeader('1. Personal Details');

  row2(['Full Name', data.name], ['Date of Birth', formatDate(data.dob)]);
  row2(['Gender', data.gender], ['Mobile Number', data.phone]);
  row2(['WhatsApp Number', data.whatsapp || data.phone], ['Email Address', data.email]);
  row2(['City', data.city], ['Pincode', data.pincode]);
  row1('Full Address', data.address || '-');

  // ── SECTION 2: ACADEMIC DETAILS ──────────────────────────────
  sectionHeader('2. Academic Details');

  row2(['Highest Qualification', data.qualification], ['Stream', data.stream || '-']);
  row2(['12th Board', data.board || '-'], ['12th Passing Year', data.passingYear || '-']);
  row2(['12th Percentage', data.percentage ? `${data.percentage}%` : '-'], ['College / School Name', data.collegeName || '-']);

  // ── SECTION 3: COURSE SELECTION ──────────────────────────────
  sectionHeader('3. Course Selection');

  row2(['Course Interested In', data.course], ['How Did You Hear About Us', data.heardFrom]);

  // ── SECTION 4: PARENT / GUARDIAN DETAILS ─────────────────────
  sectionHeader('4. Parent / Guardian Details');

  row2(['Parent / Guardian Name', data.parentName], ["Parent's Mobile Number", data.parentPhone]);
  row1("Parent's Occupation", data.parentOccupation || '-');

  y += 3;

  // ── DECLARATION BOX ──────────────────────────────────────────
  doc.setFillColor(...GOLD_LIGHT);
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.5);
  doc.roundedRect(M, y, CW, 16, 2, 2, 'FD');

  doc.setTextColor(...NAVY);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('Declaration', M + 4, y + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...DARK);
  doc.text('I hereby confirm that all information provided above is true and correct to the best of my knowledge.', M + 4, y + 11);
  doc.text('I agree to abide by the rules and regulations of Practical EduSkills Pvt. Ltd.', M + 4, y + 15);

  y += 22;

  // ── SIGNATURE LINES ──────────────────────────────────────────
  doc.setDrawColor(...RULE);
  doc.setLineWidth(0.35);
  doc.line(M, y + 8, M + 52, y + 8);
  doc.line(PW - M - 52, y + 8, PW - M, y + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...MUTED);
  doc.text("Student's Signature", M, y + 13);
  doc.text("Parent's / Guardian's Signature", PW - M - 52, y + 13);

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
  doc.text('(c) 2024 Practical EduSkills Pvt. Ltd. All rights reserved.', PW / 2, FY + 17, { align: 'center' });

  // ── SAVE ─────────────────────────────────────────────────────
  const safeName = data.name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
  const dateTag = today.toISOString().slice(0, 10);
  doc.save(`PES_Enrollment_${safeName}_${dateTag}.pdf`);
}
