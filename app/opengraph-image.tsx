import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "Practical EduSkills — India's Most Practical Commerce & Business Education";
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
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Top gold bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, background: GOLD }} />

        {/* Logo circle */}
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 48,
            background: GOLD,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 24,
            fontSize: 40,
            fontWeight: 900,
            color: NAVY,
          }}
        >
          PE
        </div>

        {/* Brand name */}
        <div
          style={{
            color: GOLD,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 5,
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          PRACTICAL EDUSKILLS
        </div>

        {/* Main headline */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: 50,
            fontWeight: 900,
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: 900,
            marginBottom: 20,
          }}
        >
          {"India's Most Practical Commerce & Business Education"}
        </div>

        {/* Sub-line */}
        <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 22, marginBottom: 32, textAlign: 'center' }}>
          2000+ Placements · 21+ Years · Pune, India
        </div>

        {/* Pill tags */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['B.Com', 'BBA', 'MBA', 'B.Sc. AI', 'Hospitality'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 20px',
                borderRadius: 999,
                border: `2px solid ${GOLD}`,
                color: GOLD,
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom gold bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, background: GOLD }} />
      </div>
    ),
    { ...size },
  );
}
