'use client';
import { LanguageProvider } from '@/lib/i18n';
import { Toaster } from 'react-hot-toast';
import LanguageWelcomeModal from '@/components/LanguageWelcomeModal';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
      <LanguageWelcomeModal />
      {children}
    </LanguageProvider>
  );
}
