import React from 'react';

const Impact = () => {
  const features = [
    { icon: '🌊', title: 'Deep Aquifer Source', desc: 'Protected underground springs, far from pollution.' },
    { icon: '👩‍🎓', title: "Women's Empowerment", desc: 'Funding education initiatives for women across Nigeria.' },
    { icon: '♻️', title: 'Bottle Return Program', desc: 'Incentivized returns for a truly circular water economy.' },
    { icon: '⚡', title: 'Green Operations', desc: 'Transitioning manufacturing to renewable energy sources.' }
  ];

  return (
    <section id="impact" style={{ padding: '140px 0', background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative blob */}
      <div className="hero-blob" style={{
        width: '30vw', height: '30vw',
        background: 'rgba(0, 0, 0, 0.03)',
        position: 'absolute', top: '-10%', right: '-10%',
        zIndex: 0,
        animationDelay: '-6s'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="badge">Our Impact</span>
            <h2 style={{ marginTop: '20px', marginBottom: '24px' }}>Beyond Hydration</h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '48px' }}>
              For 43 years, Yalode has been more than a water company. 
              We're a force for community empowerment and environmental stewardship across Nigeria.
            </p>
            <div className="grid-2" style={{ gap: '24px' }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: '48px', height: '48px',
                    borderRadius: '16px',
                    background: 'var(--accent-light)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.3rem',
                    flexShrink: 0
                  }}>{f.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>{f.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div style={{
            background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
            borderRadius: 'var(--radius-lg)',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            minHeight: '500px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <img
              src="/assets/hero.png"
              alt="Yalode Water Products"
              style={{
                width: '100%',
                borderRadius: 'var(--radius)',
                objectFit: 'cover',
                marginBottom: '24px'
              }}
            />
            <div style={{ color: 'white' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 900 }}>43+</div>
              <p style={{ fontSize: '1.1rem', opacity: 0.85 }}>Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
