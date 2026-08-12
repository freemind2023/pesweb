export type QuestionOption = {
  id: string;
  label: string;
  weight: number; // 0-3, contributes to readiness score
};

export type Question = {
  id: string;
  prompt: string;
  category: 'numeracy' | 'interest' | 'logic' | 'mindset';
  options: QuestionOption[];
};

export const questions: Question[] = [
  {
    id: 'q1',
    category: 'interest',
    prompt: 'A shop buys a product for ₹400 and sells it for ₹500. What excites you most about this?',
    options: [
      { id: 'a', label: 'Figuring out the ₹100 profit and the profit %', weight: 3 },
      { id: 'b', label: "Thinking about why the customer paid ₹500", weight: 2 },
      { id: 'c', label: 'Nothing much, numbers aren’t my thing', weight: 0 },
      { id: 'd', label: 'Wondering how to make the shop look better', weight: 1 },
    ],
  },
  {
    id: 'q2',
    category: 'numeracy',
    prompt: 'If your pocket money is ₹1,000 and you save 20% every month, how much do you save?',
    options: [
      { id: 'a', label: '₹100', weight: 0 },
      { id: 'b', label: '₹200', weight: 3 },
      { id: 'c', label: '₹500', weight: 0 },
      { id: 'd', label: 'Not sure, I’d use a calculator', weight: 1 },
    ],
  },
  {
    id: 'q3',
    category: 'interest',
    prompt: 'Which of these sounds most interesting to you as a career?',
    options: [
      { id: 'a', label: 'Running my own business someday', weight: 3 },
      { id: 'b', label: 'Managing money, budgets, and investments', weight: 3 },
      { id: 'c', label: 'Working with people and organizing events', weight: 2 },
      { id: 'd', label: 'I’m still exploring options', weight: 1 },
    ],
  },
  {
    id: 'q4',
    category: 'logic',
    prompt: 'A train leaves at 10:00 AM and takes 2 hours 45 minutes to reach its destination. When does it arrive?',
    options: [
      { id: 'a', label: '12:30 PM', weight: 0 },
      { id: 'b', label: '12:45 PM', weight: 3 },
      { id: 'c', label: '1:00 PM', weight: 0 },
      { id: 'd', label: 'Not sure', weight: 1 },
    ],
  },
  {
    id: 'q5',
    category: 'mindset',
    prompt: 'You’re given a group project with an unclear deadline. What do you do first?',
    options: [
      { id: 'a', label: 'Ask for clarity and set a plan with dates', weight: 3 },
      { id: 'b', label: 'Start working on my part right away', weight: 2 },
      { id: 'c', label: 'Wait for someone else to take the lead', weight: 0 },
      { id: 'd', label: 'Feel stressed and unsure where to start', weight: 1 },
    ],
  },
  {
    id: 'q6',
    category: 'interest',
    prompt: 'Which activity would you enjoy the most?',
    options: [
      { id: 'a', label: 'Planning a budget for a college fest', weight: 3 },
      { id: 'b', label: 'Negotiating a better price while shopping', weight: 3 },
      { id: 'c', label: 'Painting or writing something creative', weight: 1 },
      { id: 'd', label: 'Playing a sport competitively', weight: 1 },
    ],
  },
  {
    id: 'q7',
    category: 'numeracy',
    prompt: 'A company’s revenue grew from ₹5 lakh to ₹6 lakh in a year. What’s the growth percentage?',
    options: [
      { id: 'a', label: '10%', weight: 0 },
      { id: 'b', label: '20%', weight: 3 },
      { id: 'c', label: '25%', weight: 0 },
      { id: 'd', label: 'Not sure', weight: 1 },
    ],
  },
  {
    id: 'q8',
    category: 'mindset',
    prompt: 'How do you usually react when you make a mistake in front of others?',
    options: [
      { id: 'a', label: 'Own it, fix it, and move on', weight: 3 },
      { id: 'b', label: 'Feel embarrassed but try to fix it later', weight: 2 },
      { id: 'c', label: 'Blame the situation or others', weight: 0 },
      { id: 'd', label: 'Avoid the situation next time', weight: 1 },
    ],
  },
  {
    id: 'q9',
    category: 'logic',
    prompt: 'If 3 workers complete a task in 12 days, how many days will 6 workers take?',
    options: [
      { id: 'a', label: '6 days', weight: 3 },
      { id: 'b', label: '8 days', weight: 0 },
      { id: 'c', label: '24 days', weight: 0 },
      { id: 'd', label: 'Not sure', weight: 1 },
    ],
  },
  {
    id: 'q10',
    category: 'interest',
    prompt: 'After 12th, what best describes your goal?',
    options: [
      { id: 'a', label: 'A practical, job-ready commerce degree', weight: 3 },
      { id: 'b', label: 'Building real business/finance skills, not just theory', weight: 3 },
      { id: 'c', label: 'Still figuring out my direction', weight: 1 },
      { id: 'd', label: 'Just want any degree to move forward', weight: 0 },
    ],
  },
];
