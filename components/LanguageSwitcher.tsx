'use client';
import { useLanguage } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ variant = 'navbar' }: { variant?: 'navbar' | 'mobile' }) {
  const { lang, setLang } = useLanguage();

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-3 py-3 border-b border-white/10">
        <Globe size={16} className="text-gold flex-shrink-0" />
        <span className="text-white/60 text-sm">Language / भाषा</span>
        <div className="ml-auto flex items-center bg-white/10 rounded-full p-0.5">
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
              lang === 'en' ? 'bg-gold text-navy' : 'text-white/70 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('mr')}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all devanagari ${
              lang === 'mr' ? 'bg-gold text-navy' : 'text-white/70 hover:text-white'
            }`}
          >
            मराठी
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full p-0.5 border border-white/20">
      <button
        onClick={() => setLang('en')}
        title="English"
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
          lang === 'en'
            ? 'bg-gold text-navy shadow-sm'
            : 'text-white/70 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('mr')}
        title="मराठी"
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 devanagari ${
          lang === 'mr'
            ? 'bg-gold text-navy shadow-sm'
            : 'text-white/70 hover:text-white'
        }`}
      >
        मर
      </button>
    </div>
  );
}
