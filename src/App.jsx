import React from 'react';
import Hero from './components/Hero';
import Standard from './components/Standard';
import Products from './components/Products';
import Impact from './components/Impact';
import Sustainability from './components/Sustainability';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="app">
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 1000, 
        padding: '16px 0',
        background: 'rgba(10, 37, 64, 0.95)',
        backdropFilter: 'blur(32px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          {/* Logo — left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="32" height="40" viewBox="0 0 24 30">
              <path d="M12 2 C12 2 2 14 2 19 C2 24.5 6.5 28 12 28 C17.5 28 22 24.5 22 19 C22 14 12 2 12 2Z" fill="url(#dropGrad)" />
              <path d="M8 18 Q12 14 16 18" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8"/>
              <path d="M9 21 Q12 18 15 21" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5"/>
              <defs><linearGradient id="dropGrad" x1="12" y1="2" x2="12" y2="28"><stop offset="0%" stopColor="#2bafb0"/><stop offset="100%" stopColor="#0a2540"/></linearGradient></defs>
            </svg>
            <span style={{ 
              fontSize: '1.2rem', 
              fontWeight: 800, 
              color: 'white',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}>Yalode</span>
          </div>

          {/* Links — Desktop CENTER */}
          <div className="nav-links" style={{ 
            display: 'flex', 
            gap: '32px', 
            fontSize: '0.9rem', 
            fontWeight: 600, 
            color: 'rgba(255,255,255,0.7)' 
          }}>
            <a href="#home" style={{ color: 'white' }}>home</a>
            <a href="#standard" style={{ color: 'inherit' }}>our story</a>
            <a href="#products" style={{ color: 'inherit' }}>drink now</a>
            <a href="#impact" style={{ color: 'inherit' }}>service</a>
            <a href="#contact" style={{ color: 'inherit' }}>contacts</a>
          </div>

          {/* Hamburger Menu Icon (Mobile Only) */}
          <div 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ 
              cursor: 'pointer', 
              color: 'white',
              display: 'none', // Hidden on desktop by index.css override
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {isMenuOpen ? 'Close' : 'Menu'}
            </span>
            {isMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </div>

          {/* CTA — Desktop right */}
          <div className="nav-cta" style={{ display: 'flex' }}>
            <a href="#products">
              <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
                Order Now
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
            background: '#0a2540', // Fully opaque for better readability
            padding: '120px 32px 40px',
            display: 'flex', flexDirection: 'column', gap: '32px',
            zIndex: 999,
            animation: 'fadeUp 0.4s ease-out'
          }}>
            <a href="#home" onClick={() => setIsMenuOpen(false)} style={{ color: 'white', fontSize: '1.6rem', fontWeight: 700 }}>home</a>
            <a href="#standard" onClick={() => setIsMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.6rem', fontWeight: 700 }}>our story</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.6rem', fontWeight: 700 }}>drink now</a>
            <a href="#impact" onClick={() => setIsMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.6rem', fontWeight: 700 }}>service</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.6rem', fontWeight: 700 }}>contacts</a>
            <div style={{ marginTop: 'auto' }}>
              <a href="#products" onClick={() => setIsMenuOpen(false)}>
                <button className="btn-primary" style={{ width: '100%', padding: '20px' }}>Order Now</button>
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Standard />
        <Products />
        <Impact />
        <Sustainability />
      </main>

      {/* Footer */}
      <footer id="contact" style={{
        padding: '100px 0 40px',
        background: 'var(--white)',
        borderTop: '1px solid rgba(10,37,64,0.04)'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '60px', marginBottom: '60px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <svg width="20" height="26" viewBox="0 0 24 30" fill="none">
                  <path d="M12 2 C12 2 2 14 2 19 C2 24.5 6.5 28 12 28 C17.5 28 22 24.5 22 19 C22 14 12 2 12 2Z" fill="url(#dropGradF)" />
                  <path d="M8 18 Q12 14 16 18" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8"/>
                  <path d="M9 21 Q12 18 15 21" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5"/>
                  <defs><linearGradient id="dropGradF" x1="12" y1="2" x2="12" y2="28"><stop offset="0%" stopColor="#2bafb0"/><stop offset="100%" stopColor="#0a2540"/></linearGradient></defs>
                </svg>
                <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--navy)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Yalode</span>
              </div>
              <p style={{ color: 'var(--text-dim)', maxWidth: '280px', fontSize: '0.95rem' }}>
                Nigeria's premium choice for pure, mineral-rich hydration since 1982.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', fontSize: '0.9rem', color: 'var(--navy)' }}>Products</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '12px', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                <li><a href="#products">19L Bottles</a></li>
                <li><a href="#products">300ml Cups</a></li>
                <li><a href="#products">Subscriptions</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', fontSize: '0.9rem', color: 'var(--navy)' }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '12px', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                <li><a href="#standard">Our Story</a></li>
                <li><a href="#impact">Our Impact</a></li>
                <li><a href="#sustainability">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', fontSize: '0.9rem', color: 'var(--navy)' }}>Contact</h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                27 Oyeleke St, Ikeja Lagos<br />
                08022233348<br />
                08098961008
              </p>
            </div>
          </div>
          <div style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(10,37,64,0.06)',
            textAlign: 'center',
            color: 'var(--text-dim)',
            fontSize: '0.8rem'
          }}>
            © 2026 Yalode Water Company. A Royal Water Limited Brand.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
