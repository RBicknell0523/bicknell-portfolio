import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Robert Bicknell — Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1c1008 0%, #2a1810 40%, #120a06 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Warm glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -150,
            right: -150,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(196,150,122,0.28) 0%, transparent 70%)',
          }}
        />
        {/* Cool glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-2px',
            marginBottom: 14,
            textAlign: 'center',
          }}
        >
          Robert Bicknell
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 100,
            height: 4,
            background: 'linear-gradient(90deg, #f97316, #eab308)',
            borderRadius: 2,
            marginBottom: 22,
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: '#f0dec8',
            marginBottom: 44,
            textAlign: 'center',
            opacity: 0.85,
          }}
        >
          Full Stack Developer · Army Veteran
        </div>

        {/* Tech badges */}
        <div style={{ display: 'flex', gap: 14 }}>
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'MySQL'].map((tech) => (
            <div
              key={tech}
              style={{
                background: 'rgba(196,150,122,0.12)',
                border: '1px solid rgba(196,150,122,0.35)',
                borderRadius: 10,
                padding: '10px 22px',
                fontSize: 20,
                color: '#c4967a',
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            fontSize: 18,
            color: 'rgba(240,222,200,0.4)',
            letterSpacing: '1px',
          }}
        >
          robert-bicknell.com
        </div>
      </div>
    ),
    { ...size },
  );
}
