import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Careers at Practical EduSkills';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const NAVY = '#0A1F5C';
const GOLD = '#C9A84C';

export default function Image() {
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
          PRACTICAL EDUSKILLS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '6px 20px',
              background: GOLD,
              borderRadius: 999,
              color: NAVY,
              fontSize: 16,
              fontWeight: 700,
              width: 'fit-content',
            }}
          >
            We&apos;re Hiring
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 64, fontWeight: 900, lineHeight: 1.1 }}>Careers</div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 26, lineHeight: 1.4 }}>
            Join our team in Pune — sales, digital marketing & more
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 64,
            right: 64,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16 }}>practicaleduskills.com/careers</span>
          <div style={{ display: 'flex', gap: 12 }}>
            {['Pune', 'Growth', 'Impact'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '6px 14px',
                  border: '1px solid rgba(201,168,76,0.45)',
                  borderRadius: 6,
                  color: GOLD,
                  fontSize: 13,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, background: GOLD }} />
      </div>
    ),
    { ...size },
  );
}
