import { GraduationCap, ArrowUpRight, Briefcase, Users, Award, Layers } from 'lucide-react';

export default function ProgramSection() {
  return (
    <section className="border-b border-white/5 py-28 bg-gradient-to-b from-black to-[#0d0a05]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <div className="mba-mono text-xs text-white/40 mb-2">03 / THE PROGRAM</div>
            <div className="mba-amber mba-mono text-xs">────────</div>
            <p className="mba-mono text-xs text-white/40 mt-4 leading-relaxed">Structured. Certified. Corporate-ready.</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="mba-serif tracking-tight leading-tight mb-10" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
              This is not a course brochure.<br />
              <span className="text-white/40">This is an executive career path.</span>
            </h2>

            <div className="block border border-white/10 hover:border-amber-400/60 transition group">
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap size={20} className="mba-amber" />
                    <span className="mba-mono text-xs tracking-widest text-white/50">EXECUTIVE PROGRAM · PRACTICAL EDUSKILLS</span>
                  </div>
                  <h3 className="mba-serif tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)' }}>
                    Practical MBA — Tech-Powered Corporate Management
                  </h3>
                  <div className="mba-mono text-xs text-white/50 mb-6">2-Year Program · Open to All Streams</div>
                  <div className="flex flex-wrap gap-2">
                    {['18 Months OJT', 'Executive Career Path', 'Leadership Mentorship', 'Industry Certifications', 'Multi-Domain Exposure', 'Assured Placement Path'].map((tag) => (
                      <span key={tag} className="mba-mono text-xs px-2 py-1 border border-white/10">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="mba-mono text-xs text-white/40 mb-2">MONTHLY STIPEND</div>
                    <div className="mba-mono text-xs mba-amber mb-6">₹12,000 –<br />₹18,000</div>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 group-hover:mba-amber transition mba-mono text-xs">
                    APPLY NOW <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-white/5 mt-8 border border-white/5">
              {[
                { icon: Briefcase, text: '18 months of real On-the-Job Training with dedicated stipend support.' },
                { icon: Users, text: 'Mentorship from C-level leaders and industry veterans throughout.' },
                { icon: Layers, text: 'Multi-domain exposure across HR, Marketing, Operations, CRM & Analytics.' },
                { icon: Award, text: 'Executive certifications and a career portfolio you build while working.' },
              ].map((f, i) => (
                <div key={i} className="bg-black p-6">
                  <f.icon size={22} className="mba-amber mb-3" />
                  <div className="text-sm text-white/80 leading-relaxed">{f.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
