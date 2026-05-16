import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileBar from "@/components/StickyMobileBar";
import AkashAgent from "@/components/AkashAgent";
import Providers from "@/components/Providers";
import GtmTracker from "@/components/gtm-tracker";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID  = process.env.NEXT_PUBLIC_GA_ID;

if (process.env.NODE_ENV === 'development') {
  if (!GTM_ID) console.warn('[GTM] NEXT_PUBLIC_GTM_ID is not set.');
  if (!GA_ID)  console.warn('[GA]  NEXT_PUBLIC_GA_ID is not set.');
}

export const metadata: Metadata = {
  metadataBase: new URL('https://practicaleduskills.com'),
  title: "Practical EduSkills — India's Most Practical Commerce & Business Education",
  description:
    "Job-oriented courses in B.Com, BBA, MBA, AI & more. 2000+ placements. OJT with stipend. Dubai opportunities. Pune.",
  keywords:
    "practical bcom pune, vocational education pune, bba with placement pune, applied mba pune, ca article placement, ai degree pune, practical eduskills",
  authors: [{ name: 'Practical EduSkills Pvt. Ltd.', url: 'https://practicaleduskills.com' }],
  creator: 'Practical EduSkills Pvt. Ltd.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://practicaleduskills.com' },
  openGraph: {
    title: "Practical EduSkills — India's Most Practical Commerce & Business Education",
    description: "2000+ students placed. 21+ years. B.Com, BBA, MBA, AI courses in Pune with Dubai placement opportunity.",
    url: 'https://practicaleduskills.com',
    siteName: 'Practical EduSkills',
    images: [{ url: '/brand/hero-poster.jpg', width: 1200, height: 630, alt: 'Practical EduSkills Pune' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Practical EduSkills — India's Most Practical Commerce & Business Education",
    description: "2000+ students placed. 21+ years. B.Com, BBA, MBA, AI courses in Pune with Dubai placement opportunity.",
    images: ['/brand/hero-poster.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "@id": "https://practicaleduskills.com/#organization",
                name: "Practical EduSkills Pvt. Ltd.",
                url: "https://practicaleduskills.com",
                logo: "https://practicaleduskills.com/brand/logo.png",
                description:
                  "India's most practical commerce and business education provider with 21+ years of experience and 2000+ student placements.",
                foundingDate: "2003",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "3rd Floor, Butte Patil Complex, Warje Malwadi Rd",
                  addressLocality: "Pune",
                  addressRegion: "Maharashtra",
                  postalCode: "411052",
                  addressCountry: "IN",
                },
                telephone: "+91-98909-59990",
                email: "info@practicaleduskills.com",
                sameAs: [
                  "https://www.instagram.com/practical_eduskills/",
                  "https://www.youtube.com/@practicaleduskills2338",
                  "https://www.linkedin.com/company/practical-eduskills-pvt-ltd",
                  "https://www.facebook.com/PracticalEduSkills/",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://practicaleduskills.com/#website",
                url: "https://practicaleduskills.com",
                name: "Practical EduSkills",
                publisher: { "@id": "https://practicaleduskills.com/#organization" },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://practicaleduskills.com/courses?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
      </head>
      <body className="antialiased">
        {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
        {GA_ID  && <GoogleAnalytics gaId={GA_ID} />}
        <GtmTracker />
        <Providers>
          <Navbar />
          <main className="pb-16 lg:pb-0">{children}</main>
          <Footer />
          <WhatsAppButton />
          <StickyMobileBar />
          <AkashAgent />
        </Providers>
      </body>
    </html>
  );
}
