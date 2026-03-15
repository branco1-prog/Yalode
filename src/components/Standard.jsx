import React from 'react';

const Standard = () => {
  const minerals = [
    { name: 'Calcium', value: '18mg/L', benefit: 'Bone Strength' },
    { name: 'Magnesium', value: '12mg/L', benefit: 'Muscle Function' },
    { name: 'Potassium', value: '4mg/L', benefit: 'Fluid Balance' },
    { name: 'Bicarbonate', value: '68mg/L', benefit: 'Digestion' },
    { name: 'Silica', value: '16mg/L', benefit: 'Skin Health' }
  ];

  return (
    <section id="standard" style={{ padding: '140px 0', background: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="badge">The Yalode Standard</span>
          <h2 style={{ marginTop: '20px', marginBottom: '20px' }}>What Makes Us Different</h2>
          <p style={{ maxWidth: '540px', margin: '0 auto', color: 'var(--text-dim)', fontSize: '1.1rem' }}>
            Every bottle is a promise — sourced from deep-earth aquifers and perfected through science.
          </p>
        </div>

        {/* Mineral Cards Grid */}
        <div className="grid-3" style={{ marginBottom: window.innerWidth < 768 ? '40px' : '80px' }}>
          {[
            { t: 'Neutral pH 7.4', d: 'Perfectly balanced for optimal body function and natural vitality.', i: '💧' },
            { t: '12-Step Purity', d: 'Advanced filtration system ensuring every drop meets global safety standards.', i: '🛡️' },
            { t: 'Rich Minerals', d: 'Sourced from artesian aquifers, packed with calcium and magnesium.', i: '⛰️' }
          ].map((item, idx) => (
            <div key={idx} className="card" style={{ padding: window.innerWidth < 768 ? '24px' : '40px', textAlign: 'center' }}>
              <div style={{ fontSize: window.innerWidth < 768 ? '2rem' : '2.5rem', marginBottom: window.innerWidth < 768 ? '16px' : '24px' }}>{item.i}</div>
              <h3 style={{ marginBottom: window.innerWidth < 768 ? '8px' : '16px', fontSize: window.innerWidth < 768 ? '1.4rem' : undefined }}>{item.t}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.90rem' }}>{item.d}</p>
            </div>
          ))}
        </div>

        {/* Mineral Composition Grid */}
        <div style={{ marginBottom: '60px' }}>
          <h4 style={{ textAlign: 'center', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>Mineral Composition</h4>
          <div className="grid-5">
            {minerals.map((m, i) => (
              <div key={i} className="card" style={{ 
                padding: '24px 16px', 
                textAlign: 'center',
                background: i === 0 ? 'var(--primary)' : 'var(--white)',
                color: i === 0 ? 'white' : 'var(--text)',
                border: i === 0 ? 'none' : undefined
              }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '2px', color: i === 0 ? 'white' : 'var(--primary)' }}>{m.value}</div>
                <div style={{ fontWeight: 700, fontSize: '0.8rem', opacity: 0.8 }}>{m.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* pH Banner */}
        <div style={{
          background: 'linear-gradient(135deg, var(--primary), #1e5391)',
          borderRadius: 'var(--radius-lg)',
          padding: window.innerWidth < 768 ? '32px 24px' : '48px 40px',
          display: 'flex',
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          gap: window.innerWidth < 768 ? '16px' : '32px',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white',
          textAlign: window.innerWidth < 768 ? 'center' : 'left'
        }} className="grid-responsive-banner">
          <div>
            <h3 style={{ color: 'white', marginBottom: '8px', fontSize: window.innerWidth < 768 ? '1.5rem' : undefined }}>Optimal pH for Life</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '400px', margin: window.innerWidth < 768 ? '0 auto' : '0', fontSize: window.innerWidth < 768 ? '0.9rem' : undefined }}>
              At 7.4, Yalode mirrors your body's own chemistry for the most natural hydration experience.
            </p>
          </div>
          <div style={{ fontSize: window.innerWidth < 768 ? '3rem' : '4rem', fontWeight: 900, color: 'var(--accent)', letterSpacing: '-0.04em' }}>
            7.4
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standard;
