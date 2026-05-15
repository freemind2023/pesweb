import CareersListing from '@/components/careers/CareersListing';
import { getCareersList, getCareerTypes } from '@/lib/sanity/careers';

export const revalidate = 3600;

export default async function CareersPage() {
  const [careers, categories] = await Promise.all([getCareersList(), getCareerTypes()]);

  return (
    <>
      <section className="navy-gradient pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">
            Join Our Team
          </span>
          <h1 className="font-serif text-white text-3xl md:text-5xl font-bold mt-2 mb-4">
            Careers at Practical EduSkills
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Help shape India&apos;s most practical commerce education. Explore open roles and apply
            through our secure Google Form.
          </p>
        </div>
      </section>

      <CareersListing careers={careers} categories={categories} />
    </>
  );
}
