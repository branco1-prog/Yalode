import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background Gradients */}
      <div className="hero-blob" style={{
        width: '80vw', height: '120vh',
        background: 'linear-gradient(135deg, #163d6b 0%, #1e5391 100%)',
        position: 'absolute', top: '-10%', left: '-10%',
        opacity: 0.5,
        zIndex: 0
      }} />
      
      {/* Floating Sparkles/Dots */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '4px', height: '4px', background: 'white', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '60%', left: '40%', width: '3px', height: '3px', background: 'white', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '30%', right: '20%', width: '5px', height: '5px', background: 'white', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '80%', width: '4px', height: '4px', background: 'white', borderRadius: '50%' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2 hero-main">
          
          {/* Left — Truly Transparent Bottle */}
          <div className="fade-up hero-bottle">

            <img
              src="/assets/bottle_uploaded_transparent.png"
              alt="Yalode Water Bottle"
              className="animate-float hero-bottle-img"
            />

            {/* Reflection Shadow */}
            <div className="hero-bottle-shadow" />
          </div>

          {/* Right — Refined Content area */}
          <div className="fade-up hero-text" style={{ animationDelay: '0.2s' }}>
            <div style={{ 
              display: 'inline-flex', padding: '10px 24px', 
              background: 'rgba(255,255,255,0.05)', borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.1)', color: 'white',
              fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em',
              marginBottom: '32px'
            }}>
              THE GOLD STANDARD ✦ SINCE 1982
            </div>
            
            <h1 className="responsive-h1" style={{ color: 'white', marginBottom: '40px', lineHeight: 0.95, letterSpacing: '-0.04em' }}>
              PUREST<br />
              HYDRATION<br />
              <span style={{ color: 'var(--accent)' }}>FOR LIFE</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.4rem', 
              color: 'rgba(255,255,255,0.7)', 
              maxWidth: '540px', 
              marginBottom: '48px',
              lineHeight: 1.5,
              fontWeight: 500
            }}>
              Experience the pinnacle of Nigerian hydration. 
              Balanced minerals, neutral pH, and 12-stage purification.
            </p>
            
            <div className="hero-actions" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <a href="#products" style={{ width: '100%' }}>
                <button className="btn-primary" style={{ background: 'var(--white)', color: 'var(--primary)', width: '100%' }}>
                  Order Now
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </a>
              <a href="#standard" style={{ width: '100%' }}>
                <button className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', width: '100%' }}>
                  Our Story
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Improved Stats Bar */}
        <div className="grid-2" style={{ 
          marginTop: '60px',
          alignItems: 'center'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { v: 'pH 7.4', l: 'Balanced' },
              { v: '12 Step', l: 'Process' },
              { v: '43 Year', l: 'Heritage' }
            ].map((s, i) => (
              <div key={i} style={{ 
                padding: '24px', 
                background: 'rgba(255,255,255,0.02)', 
                borderRadius: 'var(--radius)',
                border: '1px solid rgba(255,255,255,0.06)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>{s.v}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase' }}>{s.l}</div>
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <a href="#products">
              <button className="blob-cta" style={{ 
                background: 'var(--accent)', 
                width: '120px', height: '120px',
                fontSize: '0.9rem', color: 'var(--primary)'
              }}>
                DRINK NOW
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
