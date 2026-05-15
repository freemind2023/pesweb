import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "Practical EduSkills — Job-Ready Courses in Pune";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const NAVY = '#0A1F5C';
const GOLD  = '#C9A84C';

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
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Top gold bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, background: GOLD }} />

        {/* Brand pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 'auto',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              background: GOLD,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              fontWeight: 900,
              color: NAVY,
            }}
          >
            PE
          </div>
          <span style={{ color: GOLD, fontSize: 16, fontWeight: 700, letterSpacing: 3 }}>
            PRACTICAL EDUSKILLS
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: 58,
            fontWeight: 900,
            lineHeight: 1.15,
            maxWidth: 900,
            marginBottom: 16,
          }}
        >
          {"India's Most Practical Commerce & Business Education"}
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 40, marginBottom: 32 }}>
          {[
            { num: '2000+', label: 'Students Placed' },
            { num: '21+',   label: 'Years Experience' },
            { num: '4',     label: 'Centres in Pune' },
          ].map(({ num, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ color: GOLD, fontSize: 32, fontWeight: 900 }}>{num}</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{label}</span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16 }}>
          practicaleduskills.com
        </div>

        {/* Bottom gold bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, background: GOLD }} />
      </div>
    ),
    { ...size },
  );
}
