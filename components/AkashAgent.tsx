'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function SaraswatiAgent() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'नमस्कार! 🙏 मी सरस्वती — Practical EduSkills ची विद्यार्थी मार्गदर्शक. कोर्सेस, Placement, Fees बद्दल मला विचारा! आधी तुमचे नाव आणि मोबाइल नंबर सांगाल का?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const saveToSheet = async (userMsg: string, aiMsg: string) => {
    try {
      await fetch('/api/save-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          source: 'widget',
          userMessage: userMsg,
          aiResponse: aiMsg,
        }),
      });
    } catch {
      // silent fail — don't break chat if sheet save fails
    }
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      // Build Claude-format history (skip initial greeting)
      const claudeHistory = newMessages
        .filter((m, i) => !(i === 0 && m.role === 'assistant'))
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch('/api/saraswati', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: claudeHistory }),
      });

      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      const aiText = data.text as string;

      setMessages((prev) => [...prev, { role: 'assistant', content: aiText }]);
      saveToSheet(text, aiText);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'माफ करा, तांत्रिक अडचण आली. कृपया थेट +91-98909-59990 वर संपर्क करा. 🙏',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickQuestions = [
    'कोणते कोर्सेस आहेत?',
    'Dubai Placement मिळेल का?',
    'OJT Stipend किती?',
    'Admission कसे करायचे?',
  ];

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end">
      {/* Teaser bubble */}
      <AnimatePresence>
        {showBubble && !open && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="mb-3 bg-white rounded-2xl rounded-br-sm shadow-xl p-3 w-56 border border-yellow-200 cursor-pointer"
            onClick={() => { setOpen(true); setShowBubble(false); }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-full overflow-hidden bg-navy flex-shrink-0">
                <Image src="/brand/saraswati.png" alt="Saraswati" width={28} height={28} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
              <span className="text-navy font-semibold text-xs">सरस्वती — PES Guide</span>
              <span className="w-2 h-2 bg-green-500 rounded-full ml-auto animate-pulse flex-shrink-0" />
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">
              नमस्कार! 🙏 कोर्स, Placement बद्दल विचारा!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <div className="flex flex-col items-center gap-0.5">
        <motion.button
          onClick={() => { setOpen(!open); setShowBubble(false); }}
          className="w-14 h-14 rounded-full bg-navy shadow-2xl flex items-center justify-center border-2 border-yellow-400 overflow-hidden"
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
              <motion.div key="img" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.15 }} className="w-full h-full flex items-center justify-center">
                <Image
                  src="/brand/saraswati.png"
                  alt="सरस्वती"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = 'none';
                    el.parentElement!.innerHTML = '<span style="color:#C9A84C;font-weight:bold;font-size:18px">स</span>';
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        <p className="text-xs text-gray-500 font-medium">सरस्वती</p>
      </div>

      {/* Chat window — fixed on mobile, proper on desktop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-2 left-2 sm:left-auto sm:right-4 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#060E2B] to-[#0A1F5C] px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-yellow-400 flex-shrink-0">
                <Image
                  src="/brand/saraswati.png"
                  alt="सरस्वती"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = 'none';
                    el.parentElement!.style.background = '#C9A84C';
                    el.parentElement!.innerHTML = '<span style="color:#0A1F5C;font-weight:bold;font-size:16px;display:flex;align-items:center;justify-content:center;width:100%;height:100%">स</span>';
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-sm">सरस्वती</div>
                <div className="text-white/60 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  PES Student Guide · Marathi
                </div>
              </div>
              <Link
                href="/saraswati"
                className="text-yellow-400 hover:text-yellow-300 transition-colors mr-2"
                title="Full screen chat"
              >
                <Maximize2 size={16} />
              </Link>
              <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 min-h-0">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-full overflow-hidden border border-yellow-400 mr-2 flex-shrink-0 mt-0.5">
                      <Image src="/brand/saraswati.png" alt="स" width={28} height={28} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.style.background = '#0A1F5C'; (e.target as HTMLImageElement).parentElement!.innerHTML = '<span style="color:#C9A84C;font-size:10px;font-weight:bold;display:flex;align-items:center;justify-content:center;width:100%;height:100%">स</span>'; }} />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed devanagari ${
                      msg.role === 'user'
                        ? 'bg-[#0A1F5C] text-white rounded-tr-sm'
                        : 'bg-white text-gray-800 rounded-tl-sm shadow-sm border border-gray-100'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#0A1F5C] flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 text-xs font-bold">स</span>
                  </div>
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
                    className="text-xs px-2.5 py-1 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition-all devanagari"
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
                placeholder="मराठीत विचारा..."
                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-navy devanagari"
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

            {/* Full chat link */}
            <div className="px-3 pb-2 bg-white text-center flex-shrink-0">
              <Link href="/saraswati" className="text-xs text-navy/50 hover:text-navy transition-colors underline underline-offset-2">
                सविस्तर गप्पा मारायच्या असतील तर येथे क्लिक करा →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
