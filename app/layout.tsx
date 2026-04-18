import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileBar from "@/components/StickyMobileBar";
import AkashAgent from "@/components/AkashAgent";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Practical EduSkills — India's Most Practical Commerce & Business Education",
  description:
    "Job-oriented courses in B.Com, BBA, MBA, AI & more. 2000+ placements. OJT with stipend. Dubai opportunities. Pune.",
  keywords:
    "practical bcom pune, vocational education pune, bba with placement pune, applied mba pune, ca article placement, ai degree pune, practical eduskills",
  openGraph: {
    title: "Practical EduSkills — India's Most Practical Commerce & Business Education",
    description: "2000+ students placed. 21+ years. B.Com, BBA, MBA, AI courses in Pune with Dubai placement opportunity.",
    images: [{ url: "/brand/hero-poster.jpg", width: 1200, height: 630 }],
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Practical EduSkills Pvt. Ltd.",
              url: "https://practicaleduskills.com",
              logo: "/brand/logo.png",
              description:
                "India's most practical commerce and business education provider with 21+ years of experience.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3rd Floor, Butte Patil Complex, Warje Malwadi Rd",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                postalCode: "411052",
                addressCountry: "IN",
              },
              telephone: "+91-98909-59990",
              sameAs: [
                "https://www.instagram.com/practical_eduskills/",
                "https://www.youtube.com/@practicaleduskills2338",
                "https://www.linkedin.com/company/practical-eduskills-pvt-ltd",
                "https://www.facebook.com/PracticalEduSkills/",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
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
