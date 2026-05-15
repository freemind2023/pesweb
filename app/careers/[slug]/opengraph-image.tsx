import { ImageResponse } from 'next/og';
import { getCareerForOg } from '@/lib/sanity/careers';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const NAVY = '#0A1F5C';
const GOLD = '#C9A84C';

export default async function Image({ params }: { params: { slug: string } }) {
  const career = await getCareerForOg(params.slug);
  const title = career?.title ?? 'Open Role';
  const experience = career?.experienceLevel ?? '';
  const category = career?.categoryTitle ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          background: NAVY,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '56px 64px',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, background: GOLD }} />
        <div style={{ color: GOLD, fontSize: 16, fontWeight: 700, letterSpacing: 4, marginBottom: 'auto' }}>
          PRACTICAL EDUSKILLS · CAREERS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {(experience || category) && (
            <div style={{ display: 'flex', gap: 12 }}>
              {experience && (
                <div
                  style={{
                    display: 'inline-flex',
                    padding: '6px 20px',
                    background: GOLD,
                    borderRadius: 999,
                    color: NAVY,
                    fontSize: 16,
                    fontWeight: 700,
                  }}
                >
                  {experience}
                </div>
              )}
              {category && (
                <div
                  style={{
                    padding: '6px 14px',
                    border: '1px solid rgba(201,168,76,0.45)',
                    borderRadius: 6,
                    color: GOLD,
                    fontSize: 13,
                  }}
                >
                  {category}
                </div>
              )}
            </div>
          )}
          <div style={{ color: '#FFFFFF', fontSize: 56, fontWeight: 900, lineHeight: 1.1 }}>{title}</div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 24, lineHeight: 1.4 }}>
            Apply now at practicaleduskills.com
          </div>
        </div>
        <span style={{ position: 'absolute', bottom: 40, left: 64, color: 'rgba(255,255,255,0.4)', fontSize: 16 }}>
          practicaleduskills.com/careers
        </span>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, background: GOLD }} />
      </div>
    ),
    { ...size },
  );
}
