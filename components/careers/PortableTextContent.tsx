import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import Link from 'next/link';

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-serif text-navy text-2xl font-bold mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-navy text-xl font-bold mt-6 mb-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-text-dark text-base leading-relaxed mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-text-dark">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-text-dark">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-navy">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href as string | undefined;
      if (!href) return <>{children}</>;
      const external = href.startsWith('http');
      if (external) {
        return (
          <a
            href={href}
            className="text-gold hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className="text-gold hover:underline font-medium">
          {children}
        </Link>
      );
    },
  },
};

interface IPortableTextContentProps {
  value: PortableTextBlock[];
}

export default function PortableTextContent({ value }: IPortableTextContentProps) {
  return (
    <div className="max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
