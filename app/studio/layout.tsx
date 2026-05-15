import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studio | Practical EduSkills',
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-hidden">
      {children}
    </div>
  );
}
