'use client';
import { useReducer } from 'react';
import LandingScreen from './LandingScreen';
import LeadForm, { type LeadData } from './LeadForm';
import CareerMap from './CareerMap';
import ReportScreen from './ReportScreen';
import { questions } from '@/lib/career-mantra/questions';
import { computeResult, type QuizResult } from '@/lib/career-mantra/scoring';

type Stage = 'landing' | 'lead-form' | 'map' | 'report';

type State = {
  stage: Stage;
  lead: LeadData | null;
  answers: Record<string, string>;
  result: QuizResult | null;
};

type Action =
  | { type: 'START_QUIZ' }
  | { type: 'SUBMIT_LEAD'; lead: LeadData }
  | { type: 'ANSWER'; questionId: string; optionId: string };

const initialState: State = {
  stage: 'landing',
  lead: null,
  answers: {},
  result: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'START_QUIZ':
      return { ...state, stage: 'lead-form' };
    case 'SUBMIT_LEAD':
      return { ...state, stage: 'map', lead: action.lead };
    case 'ANSWER': {
      const answers = { ...state.answers, [action.questionId]: action.optionId };
      const isComplete = questions.every((q) => answers[q.id]);
      if (isComplete) {
        return { ...state, answers, result: computeResult(answers), stage: 'report' };
      }
      return { ...state, answers };
    }
    default:
      return state;
  }
}

export default function CareerMantraApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.stage === 'landing') {
    return <LandingScreen onStart={() => dispatch({ type: 'START_QUIZ' })} />;
  }

  if (state.stage === 'lead-form') {
    return <LeadForm onSubmitted={(lead) => dispatch({ type: 'SUBMIT_LEAD', lead })} />;
  }

  if (state.stage === 'map') {
    const completedIds = new Set(Object.keys(state.answers));
    const score = questions.reduce((sum, q) => {
      const selected = q.options.find((o) => o.id === state.answers[q.id]);
      return sum + (selected ? selected.weight * 10 : 0);
    }, 0);
    return (
      <CareerMap
        completedIds={completedIds}
        score={score}
        onAnswer={(questionId, optionId) => dispatch({ type: 'ANSWER', questionId, optionId })}
      />
    );
  }

  if (state.stage === 'report' && state.result && state.lead) {
    return <ReportScreen lead={state.lead} answers={state.answers} result={state.result} />;
  }

  return null;
}
