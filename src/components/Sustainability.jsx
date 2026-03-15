import React from 'react';

const Sustainability = () => {
  const stats = [
    { value: '75%', label: 'Less Plastic' },
    { value: '100%', label: 'Recyclable' },
    { value: '30%', label: 'Recycled Content' }
  ];

  return (
    <section id="sustainability" style={{ padding: '140px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{
          background: 'var(--primary)',
          borderRadius: 'var(--radius-lg)',
          padding: '60px 40px',
          position: 'relative',
          overflow: 'hidden',
          color: 'white'
        }}>
          {/* Decorative blob */}
          <div style={{
            position: 'absolute',
            width: '300px', height: '300px',
            background: 'rgba(43, 175, 176, 0.15)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            top: '-80px', right: '-80px'
          }} />
          <div style={{
            position: 'absolute',
            width: '200px', height: '200px',
            background: 'rgba(43, 175, 176, 0.08)',
            borderRadius: '50%',
            bottom: '-60px', left: '10%'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="badge" style={{ background: 'rgba(43,175,176,0.2)', color: 'var(--teal)' }}>
              Sustainability
            </span>
            <h2 style={{ color: 'white', marginTop: '20px', marginBottom: '24px', maxWidth: '500px' }}>
              Committed to Our Planet
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '480px', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '48px' }}>
              Premium water shouldn't cost the earth. Our bottle return program, 
              renewable-powered facilities, and community partnerships ensure every 
              drop counts for a better future.
            </p>
            
            <div className="grid-responsive-stats" style={{ display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
              {stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--teal)' }}>{s.value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
