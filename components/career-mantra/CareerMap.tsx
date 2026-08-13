'use client';
import { useState } from 'react';
import { Check, Lock, MapPin, Building2 } from 'lucide-react';
import { questions } from '@/lib/career-mantra/questions';
import StageModal from './StageModal';
import CareerTower from './CareerTower';

const MAP_W = 400;
const NODE_Y_GAP = 108;
const MAP_TOP_PAD = 70;
const MAP_BOTTOM_PAD = 60;
const X_PATTERN = [110, 290, 200];

function nodePositions() {
  return questions.map((_, i) => ({
    x: X_PATTERN[i % X_PATTERN.length],
    y: MAP_TOP_PAD + i * NODE_Y_GAP,
  }));
}

export default function CareerMap({
  completedIds,
  score,
  onAnswer,
}: {
  completedIds: Set<string>;
  score: number;
  onAnswer: (questionId: string, optionId: string) => void;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const positions = nodePositions();
  const total = questions.length;
  const mapHeight = MAP_TOP_PAD + (total - 1) * NODE_Y_GAP + MAP_BOTTOM_PAD;

  function stageStatus(index: number): 'done' | 'current' | 'locked' {
    const q = questions[index];
    if (completedIds.has(q.id)) return 'done';
    if (index === 0) return 'current';
    const prev = questions[index - 1];
    return completedIds.has(prev.id) ? 'current' : 'locked';
  }

  function handleNodeClick(index: number) {
    if (stageStatus(index) === 'locked') return;
    setOpenIndex(index);
  }

  const openQuestion = openIndex !== null ? questions[openIndex] : null;

  return (
    <div className="min-h-[100dvh] bg-bg-light pt-20 sm:pt-24 pb-10">
      {/* Stats bar */}
      <div className="max-w-3xl mx-auto px-4 mb-4 flex items-center justify-center gap-3 flex-wrap">
        <div className="flex items-center gap-2 bg-white border border-gold/30 rounded-full px-4 py-2 shadow-sm">
          <span className="text-base">✨</span>
          <span className="font-mono text-sm text-navy font-bold">{score}</span>
          <span className="text-text-muted text-xs">Readiness Points</span>
        </div>
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
          <MapPin size={14} className="text-gold" />
          <span className="font-mono text-sm text-navy font-bold">{completedIds.size}</span>
          <span className="text-text-muted text-xs">of {total} stages</span>
        </div>
        <div className="sm:hidden flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
          <Building2 size={14} className="text-gold" />
          <span className="text-text-muted text-xs">{completedIds.size}/{total} floors built</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 flex gap-2 items-start justify-center">
        {/* Map */}
        <div className="flex-1 max-w-md rounded-2xl overflow-hidden border border-navy/10 shadow-lg navy-gradient">
          <svg viewBox={`0 0 ${MAP_W} ${mapHeight}`} className="block w-full h-auto">
            <defs>
              <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F0D080" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#F0D080" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* base path */}
            <path
              d={`M ${positions.map((p) => `${p.x} ${p.y}`).join(' L ')}`}
              fill="none"
              stroke="#1A2A5C"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* completed overlay segments */}
            {positions.slice(0, -1).map((p, i) => {
              if (!completedIds.has(questions[i].id)) return null;
              const next = positions[i + 1];
              return (
                <line
                  key={i}
                  x1={p.x}
                  y1={p.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="#C9A84C"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              );
            })}

            {/* nodes */}
            {positions.map((p, i) => {
              const status = stageStatus(i);
              const q = questions[i];
              const fill = status === 'done' ? '#C9A84C' : status === 'current' ? '#0A1F5C' : '#1A2440';
              const stroke = status === 'done' ? '#8A6420' : status === 'current' ? '#C9A84C' : '#2A3560';
              return (
                <g
                  key={q.id}
                  onClick={() => handleNodeClick(i)}
                  style={{ cursor: status === 'locked' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'current' && <circle cx={p.x} cy={p.y} r="34" fill="url(#starGlow)" />}
                  <circle cx={p.x} cy={p.y} r="26" fill={fill} stroke={stroke} strokeWidth="3" />
                  {status === 'locked' ? (
                    <foreignObject x={p.x - 10} y={p.y - 10} width="20" height="20">
                      <Lock size={20} className="text-white/40" />
                    </foreignObject>
                  ) : (
                    <text x={p.x} y={p.y + 8} textAnchor="middle" fontSize="20">
                      {q.stageIcon}
                    </text>
                  )}
                  {status === 'done' && (
                    <>
                      <circle cx={p.x + 19} cy={p.y - 19} r="9" fill="#255C40" stroke="#F3E9D6" strokeWidth="1.5" />
                      <foreignObject x={p.x + 13} y={p.y - 25} width="12" height="12">
                        <Check size={12} className="text-white" />
                      </foreignObject>
                    </>
                  )}
                  <text
                    x={p.x}
                    y={p.y + 46}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="600"
                    fill={status === 'locked' ? '#5A6690' : '#EFE7D6'}
                  >
                    {q.stageTitle}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <CareerTower completedCount={completedIds.size} />
      </div>

      {openQuestion && (
        <StageModal
          question={openQuestion}
          stageNumber={openIndex! + 1}
          totalStages={total}
          onClose={() => setOpenIndex(null)}
          onComplete={(optionId) => {
            onAnswer(openQuestion.id, optionId);
            setOpenIndex(null);
          }}
        />
      )}
    </div>
  );
}
