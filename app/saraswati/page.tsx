'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function SaraswatiPage() {
  const [phase, setPhase] = useState<'intro' | 'chat'>('intro');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase === 'chat') endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, phase]);

  const startChat = () => {
    if (!name.trim()) { setNameError('कृपया नाव लिहा'); return; }
    if (!/^[6-9]\d{9}$/.test(phone.trim())) { setPhoneError('कृपया योग्य 10 अंकी मोबाइल नंबर लिहा'); return; }

    // Save lead to sheet immediately
    fetch('/api/save-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        source: 'saraswati-page',
        name: name.trim(),
        phone: phone.trim(),
        userMessage: '[Chat सुरू]',
        aiResponse: '',
      }),
    }).catch(() => {});

    setMessages([
      {
        role: 'assistant',
        content: `नमस्कार ${name.trim()}! 🙏 मी सरस्वती — Practical EduSkills ची विद्यार्थी मार्गदर्शक. तुम्हाला कोणत्या कोर्सबद्दल माहिती हवी आहे? B.Com, BBA, MBA, AI किंवा इतर कोणताही कोर्स — मला निःसंकोच विचारा!`,
      },
    ]);
    setPhase('chat');
  };

  const saveToSheet = async (userMsg: string, aiMsg: string) => {
    try {
      await fetch('/api/save-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          source: 'saraswati-page',
          name,
          phone,
          userMessage: userMsg,
          aiResponse: aiMsg,
        }),
      });
    } catch {
      // silent fail
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
    'B.Com कोर्सबद्दल सांगा',
    'Dubai Placement कसे मिळते?',
    'OJT Stipend किती असतो?',
    'MBA कोर्सची माहिती द्या',
    'Admission process काय आहे?',
    'AI कोर्स कसा आहे?',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#060E2B] via-[#0A1F5C] to-[#060E2B] flex flex-col pt-16 md:pt-20">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 flex-shrink-0">
        <Link href="/" className="text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400 flex-shrink-0">
          <Image
            src="/brand/saraswati.png"
            alt="सरस्वती"
            width={40}
            height={40}
            className="w-full h-full object-cover"
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              el.style.display = 'none';
              el.parentElement!.style.background = '#C9A84C';
              el.parentElement!.innerHTML = '<span style="color:#0A1F5C;font-weight:bold;font-size:18px;display:flex;align-items:center;justify-content:center;width:100%;height:100%">स</span>';
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white font-semibold">सरस्वती</div>
          <div className="text-white/50 text-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
            PES Student Guide
          </div>
        </div>
        <a href="tel:+919890959990" className="flex-shrink-0 whitespace-nowrap text-yellow-400 text-xs font-semibold hover:text-yellow-300 transition-colors border border-yellow-400/40 rounded-lg px-2 py-1">
          📞 98909-59990
        </a>
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {phase === 'intro' ? (
            /* ---- Intro / name-phone form ---- */
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center px-6 py-10"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl mb-6">
                <Image
                  src="/brand/saraswati.png"
                  alt="सरस्वती"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = 'none';
                    el.parentElement!.style.background = '#C9A84C';
                    el.parentElement!.innerHTML = '<span style="color:#0A1F5C;font-weight:bold;font-size:48px;display:flex;align-items:center;justify-content:center;width:100%;height:100%">स</span>';
                  }}
                />
              </div>
              <h1 className="text-white font-bold text-2xl mb-1 devanagari">नमस्कार! मी सरस्वती 🙏</h1>
              <p className="text-white/60 text-sm text-center mb-8 devanagari max-w-xs">
                Practical EduSkills ची विद्यार्थी मार्गदर्शक. Chat सुरू करण्यापूर्वी तुमची माहिती द्या.
              </p>

              <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 space-y-4">
                <div>
                  <label className="text-white/80 text-sm devanagari block mb-1.5">तुमचे नाव *</label>
                  <input
                    value={name}
                    onChange={(e) => { setName(e.target.value); setNameError(''); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') startChat(); }}
                    placeholder="उदा. राहुल शर्मा"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-yellow-400 devanagari"
                  />
                  {nameError && <p className="text-red-400 text-xs mt-1 devanagari">{nameError}</p>}
                </div>

                <div>
                  <label className="text-white/80 text-sm devanagari block mb-1.5">मोबाइल नंबर *</label>
                  <input
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value.replace(/\D/g, '').slice(0, 10)); setPhoneError(''); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') startChat(); }}
                    placeholder="10 अंकी नंबर"
                    inputMode="numeric"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-yellow-400"
                  />
                  {phoneError && <p className="text-red-400 text-xs mt-1 devanagari">{phoneError}</p>}
                </div>

                <button
                  onClick={startChat}
                  className="w-full py-3.5 bg-yellow-400 text-[#0A1F5C] font-bold rounded-xl hover:bg-yellow-300 transition-colors text-sm devanagari"
                >
                  Chat सुरू करा →
                </button>

                <p className="text-white/30 text-xs text-center devanagari">
                  तुमची माहिती सुरक्षित आहे. Spam नाही.
                </p>
              </div>
            </motion.div>
          ) : (
            /* ---- Chat view ---- */
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col min-h-0"
            >
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-yellow-400 mr-2 flex-shrink-0 mt-0.5">
                        <Image src="/brand/saraswati.png" alt="स" width={32} height={32} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed devanagari ${
                        msg.role === 'user'
                          ? 'bg-yellow-400 text-[#0A1F5C] font-medium rounded-tr-sm'
                          : 'bg-white/15 text-white rounded-tl-sm border border-white/10'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0A1F5C] text-xs font-bold">स</span>
                    </div>
                    <div className="bg-white/15 rounded-2xl rounded-tl-sm px-4 py-3 border border-white/10 flex gap-1.5 items-center">
                      <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>

              {/* Quick questions */}
              {messages.length <= 1 && (
                <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-white/10">
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => setInput(q)}
                      className="text-xs px-3 py-1.5 rounded-full border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400 hover:text-[#0A1F5C] transition-all devanagari"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-white/10 flex gap-3 flex-shrink-0">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) sendMessage(); }}
                  placeholder="मराठीत प्रश्न विचारा..."
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-yellow-400 text-sm devanagari"
                  disabled={loading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-[#0A1F5C] disabled:opacity-40 hover:bg-yellow-300 transition-colors flex-shrink-0"
                >
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
