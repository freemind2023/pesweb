import Image from 'next/image';

const AWARD_ROW = [
  '152903111_10158008999418193_1181947383319985029_n.jpg',
  '203681089_10158264291193193_1067641362940312753_n.jpg',
  '301193267_10158954864383193_8472888907603633281_n.jpg',
  '468847456_10160830533088193_5810277808527289877_n.jpg',
  '484031295_10161105344758193_5602599506241601522_n.jpg',
  '512735389_10161492372388193_6538240480271178498_n.jpg',
  '513220589_10161499526413193_8813899553912033130_n.jpg',
  '555573581_10161920266368193_5013628561450850146_n.jpg',
  '598437097_10162232543803193_7794353983347223343_n.jpg',
];

const ASSOCIATIONS = [
  { src: '/brand/associations/mccia.png', alt: 'MCCIA' },
  { src: '/brand/associations/bni.png', alt: 'BNI' },
  { src: '/brand/associations/rotary.png', alt: 'Rotary Club' },
  { src: '/brand/associations/gulf-mahratta.png', alt: 'Gulf Mahratta Corporation' },
  { src: '/brand/associations/nsdc.png', alt: 'NSDC' },
  { src: '/brand/associations/iso.png', alt: 'ISO Certified' },
];

export default function RecognitionSection() {
  return (
    <section className="border-b border-white/5 py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-14">
          <div className="lg:col-span-3">
            <div className="mba-mono text-xs text-white/40 mb-2">06 / RECOGNITION</div>
            <div className="mba-amber mba-mono text-xs">────────</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="mba-serif tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
              21+ years of trust. <span className="text-white/40 italic">Not just a claim.</span>
            </h2>
            <p className="text-white/60 text-base max-w-2xl leading-relaxed">
              Awards, milestones, and institutional partnerships behind Practical EduSkills — the same network
              your Practical MBA journey plugs into.
            </p>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 mb-16" style={{ scrollbarWidth: 'thin' }}>
          {AWARD_ROW.map((img) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={img}
              src={`/awards/${encodeURIComponent(img)}`}
              alt="Practical EduSkills awards and recognition"
              loading="lazy"
              className="h-48 w-auto object-cover flex-shrink-0 border border-white/10 hover:border-amber-400/60 transition"
            />
          ))}
        </div>

        <div className="mba-mono text-xs text-white/40 mb-6">ASSOCIATED WITH</div>
        <div className="flex flex-wrap items-center gap-8 md:gap-12">
          {ASSOCIATIONS.map((a) => (
            <div key={a.alt} className="opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0">
              <Image src={a.src} alt={a.alt} width={100} height={56} className="h-10 md:h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
