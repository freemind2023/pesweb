'use client';
import { useReducer } from 'react';
import LandingScreen from './LandingScreen';
import LeadForm, { type LeadData } from './LeadForm';
import QuizMap from './QuizMap';
import ReportScreen from './ReportScreen';
import { questions } from '@/lib/career-mantra/questions';
import { computeResult, type QuizResult } from '@/lib/career-mantra/scoring';

type Stage = 'landing' | 'lead-form' | 'quiz' | 'report';

type State = {
  stage: Stage;
  lead: LeadData | null;
  currentIndex: number;
  answers: Record<string, string>;
  result: QuizResult | null;
};

type Action =
  | { type: 'START_QUIZ' }
  | { type: 'SUBMIT_LEAD'; lead: LeadData }
  | { type: 'ANSWER'; questionId: string; optionId: string }
  | { type: 'COMPLETE' };

const initialState: State = {
  stage: 'landing',
  lead: null,
  currentIndex: 0,
  answers: {},
  result: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'START_QUIZ':
      return { ...state, stage: 'lead-form' };
    case 'SUBMIT_LEAD':
      return { ...state, stage: 'quiz', lead: action.lead };
    case 'ANSWER': {
      const answers = { ...state.answers, [action.questionId]: action.optionId };
      const isLast = state.currentIndex >= questions.length - 1;
      if (isLast) {
        return { ...state, answers, result: computeResult(answers), stage: 'report' };
      }
      return { ...state, answers, currentIndex: state.currentIndex + 1 };
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

  if (state.stage === 'quiz') {
    const currentQuestion = questions[state.currentIndex];
    return (
      <QuizMap
        currentIndex={state.currentIndex}
        onAnswer={(optionId) => dispatch({ type: 'ANSWER', questionId: currentQuestion.id, optionId })}
      />
    );
  }

  if (state.stage === 'report' && state.result && state.lead) {
    return <ReportScreen lead={state.lead} answers={state.answers} result={state.result} />;
  }

  return null;
}
