const EFFECTIVE_DATE = '4 November 2026';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-navy text-xl md:text-2xl font-bold mb-3">{title}</h2>
      <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="navy-gradient pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Legal</span>
          <h1 className="font-serif text-white text-3xl md:text-5xl font-bold mt-2 mb-4">Privacy Policy</h1>
          <p className="text-white/70 text-sm md:text-base">Effective {EFFECTIVE_DATE}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
            Practical EduSkills Pvt. Ltd. (&quot;Practical EduSkills&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates
            practicaleduskills.com and its related admission, enquiry and event landing pages (together, the &quot;Site&quot;).
            This policy explains what personal information we collect when you use the Site, how we use and share it,
            and the choices you have. By using the Site or submitting a form to us, you agree to the practices described here.
          </p>

          <Section title="1. Information We Collect">
            <p>We collect information in two ways:</p>
            <p>
              <strong className="text-navy">a) Information you give us.</strong> When you fill an admission enquiry,
              contact, registration or counsellor-callback form, we may collect your name, date of birth, gender,
              phone/WhatsApp number, email address, city, pincode, postal address, educational qualification, board,
              college name, course of interest, how you heard about us, and (for admission forms) a parent or
              guardian&apos;s name, occupation and phone number.
            </p>
            <p>
              <strong className="text-navy">b) Information collected automatically.</strong> Like most websites, we and
              our analytics/advertising partners automatically collect your IP address, browser and device type,
              pages visited, referring site, and approximate location, using cookies and similar technologies
              (see Section 3).
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To respond to your enquiry and guide you through our admission process.</li>
              <li>To send you information about courses, batches, fees and events you&apos;ve asked about, including over phone, email and WhatsApp.</li>
              <li>To generate your enrollment confirmation and related documents where applicable.</li>
              <li>To improve the Site, understand which pages and campaigns work, and measure ad performance.</li>
              <li>To meet legal, regulatory and accreditation (e.g. NSDC, ISO) record-keeping requirements.</li>
            </ul>
          </Section>

          <Section title="3. Cookies & Tracking Technologies">
            <p>
              We use Google Analytics and Google Tag Manager to understand Site traffic and usage, and the Meta
              (Facebook) Pixel to measure the effectiveness of our social media advertising and show you relevant ads
              on Facebook and Instagram. These tools place cookies or similar identifiers in your browser. You can
              disable cookies in your browser settings, and opt out of personalised Meta ads via your{' '}
              <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-gold">
                Facebook ad preferences
              </a>{' '}
              — doing so may affect how some parts of the Site work for you.
            </p>
          </Section>

          <Section title="4. How We Share Your Information">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-navy">Internally:</strong> form submissions are sent securely to a private
                Google Sheet (via Google Apps Script) that our admissions and counselling team uses to follow up with you.
              </li>
              <li>
                <strong className="text-navy">WhatsApp:</strong> several forms and buttons open a WhatsApp chat with
                our counselling team using the number you provide or your own WhatsApp account, so we can continue
                the conversation there.
              </li>
              <li>
                <strong className="text-navy">Service providers:</strong> Google (Analytics, Tag Manager, Sheets) and
                Meta (Pixel) process data on our behalf under their own privacy policies.
              </li>
              <li>
                <strong className="text-navy">Legal reasons:</strong> if required by law, regulation, or to protect
                our rights or the safety of our students and staff.
              </li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </Section>

          <Section title="5. Data Storage & Security">
            <p>
              Your information is stored in Google Sheets and Google&apos;s cloud infrastructure, protected by
              Google&apos;s access controls, and accessible only to authorised Practical EduSkills staff. We take
              reasonable technical and organisational measures to protect your data, but no method of transmission
              or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="6. Your Rights & Choices">
            <p>
              You can ask us to access, correct, or delete the personal information we hold about you, or withdraw
              consent to be contacted, at any time by writing to{' '}
              <a href="mailto:info@practicaleduskills.com" className="text-navy underline hover:text-gold">info@practicaleduskills.com</a>{' '}
              or calling <a href="tel:+919890959990" className="text-navy underline hover:text-gold">+91-98909-59990</a>.
              We will respond within a reasonable time.
            </p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>
              Some of our programs are open to school students in 11th/12th grade. For these students, we collect a
              parent or guardian&apos;s contact details alongside the student&apos;s, and treat admission as requiring
              parental consent. We do not knowingly collect personal information from children for any purpose
              outside the admission process described here.
            </p>
          </Section>

          <Section title="8. Third-Party Links">
            <p>
              The Site may link to third-party sites (e.g. social media, YouTube, hiring partners). We are not
              responsible for the privacy practices of those sites — please review their own policies.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this policy from time to time to reflect changes in our practices or for legal reasons.
              The &quot;Effective&quot; date at the top of this page shows when it was last revised. Continued use of the
              Site after changes are posted means you accept the updated policy.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>Questions about this policy or your data can be directed to:</p>
            <p>
              Practical EduSkills Pvt. Ltd.
              <br />
              3rd Floor, Butte Patil Complex, Warje Malwadi Rd, Erandwane, Pune, Maharashtra 411052
              <br />
              Phone: <a href="tel:+919890959990" className="text-navy underline hover:text-gold">+91-98909-59990</a>
              <br />
              Email: <a href="mailto:info@practicaleduskills.com" className="text-navy underline hover:text-gold">info@practicaleduskills.com</a>
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
