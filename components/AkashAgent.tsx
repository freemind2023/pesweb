'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Gemini API uses 'user' and 'model' roles
interface GeminiMessage {
  role: 'user' | 'model';
  parts: Array<{ text: string }>;
}

export default function SaraswatiAgent() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Saraswati 👋 Your personal guide at Practical EduSkills. Ask me anything about courses, placements, fees, or admissions!",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      // Build Gemini-format history (skip the first assistant greeting, start from first user message)
      const geminiHistory: GeminiMessage[] = newMessages
        .filter((m) => !(m.role === 'assistant' && m === newMessages[0])) // skip initial greeting
        .map((m) => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }],
        }));

      const res = await fetch('/api/saraswati', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: geminiHistory }),
      });

      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.text }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. Please call us directly at +91-98909-59990 or WhatsApp us — we'll be happy to help! 😊",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickQuestions = [
    'What courses do you offer?',
    'Is there Dubai placement?',
    'OJT stipend details?',
    'How to apply?',
  ];

  return (
    <div className="saraswati-widget">
      {/* Teaser bubble */}
      <AnimatePresence>
        {showBubble && !open && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 bg-white rounded-2xl rounded-br-sm shadow-xl p-3 w-56 border border-gold/20 cursor-pointer"
            onClick={() => { setOpen(true); setShowBubble(false); }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-full bg-navy flex items-center justify-center text-xs text-gold font-bold">A</div>
              <span className="text-navy font-semibold text-xs">Saraswati — PES Guide</span>
              <span className="w-2 h-2 bg-success rounded-full ml-auto animate-pulse" />
            </div>
            <p className="text-text-dark text-xs leading-relaxed">
              Hi! I&apos;m Saraswati 👋 Ask me about courses, placements, or fees!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => { setOpen(!open); setShowBubble(false); }}
        className="w-14 h-14 rounded-full bg-navy shadow-2xl flex items-center justify-center border-2 border-gold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with Saraswati"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} color="#C9A84C" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={22} color="#C9A84C" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      <p className="text-xs text-text-muted text-center mt-1 font-medium">Ask Saraswati</p>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ maxHeight: '72vh' }}
          >
            {/* Header */}
            <div className="navy-gradient px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-sm">A</div>
              <div>
                <div className="text-white font-semibold text-sm">Saraswati</div>
                <div className="text-white/60 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                  {' '}Powered by Gemini AI
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="ml-auto text-white/60 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 min-h-0">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-gold text-xs font-bold mr-2 flex-shrink-0 mt-0.5">
                      A
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-navy text-white rounded-tr-sm'
                        : 'bg-white text-text-dark rounded-tl-sm shadow-sm border border-gray-100'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-gold text-xs font-bold flex-shrink-0">A</div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100 flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Quick questions — shown only at start */}
            {messages.length <= 1 && (
              <div className="px-3 py-2 flex flex-wrap gap-1.5 border-t border-gray-100 flex-shrink-0 bg-white">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => setInput(q)}
                    className="text-xs px-2.5 py-1 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-gray-100 flex gap-2 flex-shrink-0 bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) sendMessage(); }}
                placeholder="Ask about courses, fees..."
                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-navy"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-9 h-9 rounded-xl bg-navy flex items-center justify-center text-gold disabled:opacity-40 hover:bg-navy/80 transition-colors flex-shrink-0"
              >
                {loading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
