'use client';
import { motion } from 'framer-motion';

const ROW1 = [
  '152903111_10158008999418193_1181947383319985029_n.jpg',
  '203681089_10158264291193193_1067641362940312753_n.jpg',
  '301193267_10158954864383193_8472888907603633281_n.jpg',
  '36245171_10155648760523193_4162136425824780288_n.jpg',
  '468847456_10160830533088193_5810277808527289877_n.jpg',
  '484031295_10161105344758193_5602599506241601522_n.jpg',
  '487430514_10161161689563193_1406969030790849595_n.jpg',
  '489569628_10161190734648193_3715444627115944262_n.jpg',
  '489873425_10161190734708193_664094632529750548_n.jpg',
  '497599031_10161322571448193_3989300575322687663_n.jpg',
  '497846327_10161322275808193_4385067516355977595_n.jpg',
  '50293443_2276316222638801_875990079309348864_n.jpg',
  '512735389_10161492372388193_6538240480271178498_n.jpg',
];

const ROW2 = [
  '513075140_10161487882188193_4935698908997295708_n.jpg',
  '513220589_10161499526413193_8813899553912033130_n.jpg',
  '514355042_10161499526398193_377819796034354819_n.jpg',
  '514417981_10161543232083193_706898299611974880_n.jpg',
  '515756312_10161543089383193_6019916949777813390_n.jpg',
  '555573581_10161920266368193_5013628561450850146_n.jpg',
  '598437097_10162232543803193_7794353983347223343_n.jpg',
  '599932837_10162252728638193_2057071521152723951_n.jpg',
  '600295076_10162252728628193_4762565833913469438_n.jpg',
  '600302253_10162252728623193_8748541405557688617_n.jpg',
  '62536012_10156388597893193_2480647521030897664_n.jpg',
  '82283725_10156918622533193_2557968777878700032_n.jpg',
];

function MarqueeRow({ images, dir }: { images: string[]; dir: 'left' | 'right' }) {
  const doubled = [...images, ...images];
  return (
    <div
      className="awards-marquee-wrap overflow-hidden"
      style={{ maskImage: 'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)' }}
    >
      <div className={`flex gap-3.5 w-max awards-scroll-${dir}`}>
        {doubled.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${img}-${i}`}
            src={`/awards/${encodeURIComponent(img)}`}
            alt="Sanmit Shah awards and recognition"
            loading="lazy"
            className="h-56 w-auto rounded-xl object-cover flex-shrink-0 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            style={{ boxShadow: '0 4px 20px rgba(10,31,92,.12)', cursor: 'default' }}
            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.boxShadow = '0 16px 40px rgba(10,31,92,.22), 0 0 0 2.5px var(--gold)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.boxShadow = '0 4px 20px rgba(10,31,92,.12)'; }}
          />
        ))}
      </div>
    </div>
  );
}

export default function AwardsSection() {
  return (
    <section id="awards-achievements" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center mb-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: 'var(--gold)', letterSpacing: '.15em' }}
        >
          Moments &amp; Milestones
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4"
          style={{ color: 'var(--navy-dark)' }}
        >
          Awards &amp; <span style={{ color: 'var(--gold)' }}>Recognition</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mb-5 h-0.5 w-16 rounded-full"
          style={{ background: 'var(--gold)' }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
        >
          19+ years of impact, recognition, and milestones — captured through every stage of the journey.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="space-y-3.5"
      >
        <MarqueeRow images={ROW1} dir="left" />
        <MarqueeRow images={ROW2} dir="right" />
      </motion.div>
    </section>
  );
}
