export interface Course {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  duration: string;
  eligibility: string;
  mode: string;
  image: string;
  dubaiPlacement: boolean;
  ojtStipend?: string;
  description: string;
  color: string;
  badge?: string;
  subjects: string[];
  careerOutcomes: string[];
  highlights: string[];
}

export const courses: Course[] = [
  {
    slug: 'bcom',
    name: 'Practical B.Com',
    shortName: 'B.Com',
    tagline: 'Learn. Intern. Earn. Graduate Job-Ready.',
    duration: '3 Years',
    eligibility: '12th Pass',
    mode: 'Classroom + OJT',
    image: '/brand/courses/bcom.jpg',
    dubaiPlacement: true,
    ojtStipend: '₹8,000 – ₹15,000/month',
    description: '3-Year Program with Dubai Placement & OJT Stipend',
    color: '#0A1F5C',
    badge: '3 Years',
    subjects: [
      'Financial Accounting', 'Indirect Tax (GST)', 'Corporate Accounting',
      'Direct Tax', 'Banking & Insurance', 'Excel for Business',
      'Tally Workshop (Guru Mantra)', 'Business Mathematics',
      'Communication & Professional Skills', 'Entrepreneurial Mindset',
    ],
    careerOutcomes: ['Accountant', 'Tax Professional', 'Finance Executive', 'Auditor', 'GST Consultant'],
    highlights: [
      'OJT with ₹8,000–₹15,000/month stipend',
      'Dubai International Placement',
      'Industry workshops every Saturday',
      'Practical skill training from Day 1',
    ],
  },
  {
    slug: 'bba',
    name: 'Practical BBA',
    shortName: 'BBA',
    tagline: 'Build Real Business Skills. Lead. Manage. Grow.',
    duration: '3 Years',
    eligibility: '12th Pass',
    mode: 'Classroom + OJT',
    image: '/brand/courses/bba.jpg',
    dubaiPlacement: true,
    description: '3-Year Business Management with Industry Internship',
    color: '#0A1F5C',
    badge: '3 Years',
    subjects: [
      'Principals of Management', 'Human Resource Management',
      'Marketing Principles and Strategy', 'Accounting & Financial Management',
      'Computer Application', 'English Language Proficiency',
      'Supply Chain & Operations Management', 'International Business',
      'Data Analysis and Decision Making', 'Business Networking',
    ],
    careerOutcomes: ['Business Manager', 'HR Executive', 'Marketing Manager', 'Operations Lead', 'Sales Executive'],
    highlights: [
      'International Business exposure',
      'Dubai Placement opportunity',
      'Mock Interview & Internship Drive',
      'Industry-aligned curriculum',
    ],
  },
  {
    slug: 'bba-ib',
    name: 'Practical BBA – IB',
    shortName: 'BBA–IB',
    tagline: 'Go Global. Master International Business.',
    duration: '3 Years',
    eligibility: '12th Pass',
    mode: 'Classroom + OJT',
    image: '/brand/courses/bba-ib.jpg',
    dubaiPlacement: true,
    description: '3-Year International Business with Dubai Placement',
    color: '#0A1F5C',
    badge: '3 Years',
    subjects: [
      'Exploration of International Business', 'Mastering Import-Export Essentials',
      'Supply Chain Management', 'Cross Culture Communication & Negotiations',
      'International Sales and Marketing', 'Global Digital Marketing & Data Analytics',
      'International Business Laws', 'Business Financial Mastery',
      'English Language Proficiency', 'Business Networking',
    ],
    careerOutcomes: ['Import-Export Manager', 'International Sales Executive', 'Supply Chain Specialist', 'Global Trade Analyst'],
    highlights: [
      'Dubai direct placement program',
      'Cross-cultural communication training',
      'Import-Export practical modules',
      'International market exposure',
    ],
  },
  {
    slug: 'mba',
    name: 'Applied MBA',
    shortName: 'MBA',
    tagline: 'MBA from IMCC College. Evening Batches. 5 Career Tracks.',
    duration: '2 Years',
    eligibility: 'Graduate',
    mode: 'Evening Batches',
    image: '/brand/courses/mba.jpg',
    dubaiPlacement: false,
    description: '2-Year Practical MBA | 5 Specialisation Tracks',
    color: '#0A1F5C',
    badge: '2 Years',
    subjects: [
      'New Age Marketing', 'Business Development & Marketing',
      'Luxury Marketing & Sales', 'BFSI Business Development',
      'Financial Analysis', 'AI Tools for Business',
      'Content Creation & Social Media', 'CRM & Client Management',
      'Financial Modelling', 'Business Valuation',
    ],
    careerOutcomes: ['Marketing Manager', 'Sales Head', 'Financial Analyst', 'Business Developer', 'Brand Manager'],
    highlights: [
      '5 specialisation tracks to choose from',
      'Evening batches for working professionals',
      '100+ live projects and practical modules',
      'IMCC College degree',
    ],
  },
  {
    slug: 'bridge',
    name: 'Bridge Course',
    shortName: 'Bridge',
    tagline: 'Already in College? Grab Industry Skills NOW.',
    duration: '6 Months',
    eligibility: 'B.Com / BBA Students',
    mode: 'Classroom',
    image: '/brand/courses/bridge.jpg',
    dubaiPlacement: false,
    description: '6-Month Skill Booster for B.Com & BBA Students',
    color: '#C9A84C',
    badge: '6 Months',
    subjects: [
      'Financial Accounting', 'Indirect Tax (GST)', 'Corporate Accounting',
      'Direct Tax', 'Banking & Insurance', 'Excel for Business',
    ],
    careerOutcomes: ['Instant OJT Placement', 'Accounting Executive', 'Tax Assistant', 'Finance Intern'],
    highlights: [
      'Pursue alongside your regular degree',
      'Instant OJT placement support',
      'Industry-ready skills in 6 months',
      'Flexible weekend batches',
    ],
  },
  {
    slug: 'bsc-ai',
    name: 'B.Sc. AI & Digital Automation',
    shortName: 'B.Sc. AI',
    tagline: 'Become Job-Ready in AI, Automation & Digital Business.',
    duration: '3 Years',
    eligibility: '12th Pass',
    mode: 'Practical Labs + OJT',
    image: '/brand/courses/ai-bsc.jpg',
    dubaiPlacement: false,
    description: 'Future-Ready AI + Business Degree',
    color: '#0A1F5C',
    badge: '3 Years',
    subjects: [
      'AI & Gen AI (ChatGPT, Gemini, LLMs)', 'Business Automation (Zapier, Make, n8n)',
      'Data Analytics (Excel, Python)', 'Digital Marketing & SEO',
      'CRM & ERP Tools', 'Prompt Engineering',
      'Entrepreneurship & Startup Planning', 'AI Workflows & API Integration',
    ],
    careerOutcomes: ['AI Automation Specialist', 'Business Analyst', 'Digital Marketing Manager', 'CRM Specialist', 'Data Analyst', 'Startup Founder'],
    highlights: [
      'Hands-on AI tools from Day 1',
      'Learn Zapier, Make, n8n automation',
      'Build real projects & portfolio',
      'Full-time internship in Year 3',
    ],
  },
  {
    slug: 'hospitality',
    name: 'Bachelor in Hospitality & Tourism',
    shortName: 'Hospitality',
    tagline: 'Your Career in Hospitality Starts Here.',
    duration: '3 Years',
    eligibility: '12th Pass',
    mode: 'Practical + OJT',
    image: '/brand/courses/hospitality.jpg',
    dubaiPlacement: false,
    description: '3-Year Hospitality Career Program',
    color: '#0A1F5C',
    badge: '3 Years',
    subjects: [
      'Front Office Operations & Guest Relations', 'Resort Operations & Property Management',
      'Travel Agency Operations', 'Digital Marketing for Tourism',
      'AI & Technology in Hospitality', 'Spa Wellness & Eco-Resort Management',
      'Visa Processing & Travel Documentation', 'Hospitality Tools Lab (PMS, POS)',
    ],
    careerOutcomes: ['Hotel Manager', 'Travel Agent', 'Resort Operations Executive', 'Tourism Manager', 'Event Coordinator'],
    highlights: [
      '132 total credits',
      'Full OJT/Apprenticeship in Semesters 4-6',
      'Industry-standard PMS & POS training',
      'International tourism exposure',
    ],
  },
  {
    slug: 'ca-article',
    name: 'CA Article Placement',
    shortName: 'CA Article',
    tagline: 'Get Placed in CA Firms. Fast.',
    duration: '1 Month',
    eligibility: 'CA Students',
    mode: 'Intensive',
    image: '/brand/courses/ca-article.jpg',
    dubaiPlacement: false,
    description: '1-Month Fast-Track CA Firm Placement',
    color: '#F97316',
    badge: '1 Month',
    subjects: [
      'Audit Execution', 'Tax Procedure', 'GST Procedure',
      'Excel Practical', 'Tally Prime + Zoho', 'Business Processing',
    ],
    careerOutcomes: ['CA Article in Top CA Firms', 'Tax Assistant', 'Audit Associate', 'Finance Intern'],
    highlights: [
      'Fast-track 1-month intensive program',
      'Direct CA firm placement',
      'Tally + Zoho + Excel training',
      'GST & Audit practical skills',
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
