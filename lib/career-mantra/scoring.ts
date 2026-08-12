import { questions } from './questions';

export type Tier = 'Explorer' | 'Achiever' | 'Future Leader';

export type QuizResult = {
  score: number;
  maxScore: number;
  percentage: number;
  tier: Tier;
  blurb: string;
};

const tierCopy: Record<Tier, string> = {
  Explorer:
    'You’ve got the spark, but the fundamentals need building. A structured, practical commerce program will give you the skills and confidence to turn interest into a real career.',
  Achiever:
    'You’ve got solid commercial instincts and logic. With the right hands-on training, you could move fast in the business/finance world — Practical B.Com is built to close exactly this gap.',
  'Future Leader':
    'You think like a future business leader — sharp with numbers, decisive, and business-minded. A practical, industry-linked commerce degree will fast-track you way ahead of a typical B.Com grad.',
};

export function computeResult(answers: Record<string, string>): QuizResult {
  let score = 0;
  let maxScore = 0;

  for (const q of questions) {
    const maxWeight = Math.max(...q.options.map((o) => o.weight));
    maxScore += maxWeight;
    const selectedId = answers[q.id];
    const selected = q.options.find((o) => o.id === selectedId);
    if (selected) score += selected.weight;
  }

  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  let tier: Tier;
  if (percentage >= 75) tier = 'Future Leader';
  else if (percentage >= 45) tier = 'Achiever';
  else tier = 'Explorer';

  return { score, maxScore, percentage, tier, blurb: tierCopy[tier] };
}
