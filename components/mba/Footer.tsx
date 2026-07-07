import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-sm p-0.5">
                <Image src="/brand/peslogo.png" alt="Practical EduSkills" width={28} height={28} className="h-7 w-auto object-contain" />
              </div>
              <span className="mba-mono text-xs tracking-widest">PRACTICAL<span className="text-white/30">/MBA</span></span>
            </div>
            <p className="text-sm text-white/50 max-w-md leading-relaxed">
              Tech-Powered Corporate Management. 18 months of On-the-Job Training with stipend, leadership
              mentorship and industry certifications. <span className="mba-amber">A Practical EduSkills program.</span>
            </p>
          </div>
          <div>
            <div className="mba-mono text-xs text-white/40 mb-4">PROGRAM</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>18 Months OJT With Stipend</li>
              <li>Executive Career Path</li>
              <li>Leadership Mentorship</li>
              <li>Industry Certifications</li>
            </ul>
          </div>
          <div>
            <div className="mba-mono text-xs text-white/40 mb-4">CONTACT</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="tel:+919890959990" className="hover:text-white transition">98909 59990</a></li>
              <li><a href="https://practicaleduskills.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">practicaleduskills.com</a></li>
              <li><a href="mailto:info@practicaleduskills.com" className="hover:text-white transition">info@practicaleduskills.com</a></li>
              <li>
                <a href="https://wa.me/919890959990?text=Hi%2C+I+want+to+know+about+the+Practical+MBA+program+at+Practical+EduSkills"
                  target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp Enquiry</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 mba-mono text-xs text-white/40">
          <div>© {new Date().getFullYear()} Practical EduSkills Pvt. Ltd.</div>
          <div>Together, let&apos;s build careers, not just degrees.</div>
        </div>
      </div>
    </footer>
  );
}
