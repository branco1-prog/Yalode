import React, { useState } from 'react';

const Products = () => {
  const [mode, setMode] = useState('subscribe');

  const products = [
    {
      id: 1,
      name: '19L Dispenser Bottle',
      price: '₦1,200',
      subPrice: '₦950',
      image: '/assets/bottle_19l_3d_1773530460369.png',
      tag: 'Most Popular',
      desc: 'Perfect for homes and offices. Fits all standard dispensers.'
    },
    {
      id: 2,
      name: '300ml Premium Cup (Pack of 30)',
      price: '₦3,000',
      subPrice: '₦2,500',
      image: '/assets/cup_300ml_3d_1773530474189.png',
      tag: 'Events',
      desc: 'Ideal for meetings, parties, and on-the-go hydration. Convenient pack of 30.'
    }
  ];

  return (
    <section id="products" style={{ padding: '140px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <span className="badge">Products</span>
            <h2 style={{ marginTop: '20px' }}>Choose Your Hydration</h2>
          </div>
          {/* Toggle */}
          <div style={{
            display: 'flex',
            background: 'var(--white)',
            borderRadius: '60px',
            padding: '4px',
            border: '1px solid rgba(10,37,64,0.06)',
            boxShadow: 'var(--shadow)'
          }}>
            <button onClick={() => setMode('order')} style={{
              padding: '12px 24px',
              borderRadius: '60px',
              border: 'none',
              fontFamily: 'var(--font)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              background: mode === 'order' ? 'var(--primary)' : 'transparent',
              color: mode === 'order' ? 'white' : 'var(--text-dim)',
              transition: 'var(--transition)'
            }}>One-Time</button>
            <button onClick={() => setMode('subscribe')} style={{
              padding: '12px 24px',
              borderRadius: '60px',
              border: 'none',
              fontFamily: 'var(--font)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              background: mode === 'subscribe' ? 'var(--accent)' : 'transparent',
              color: mode === 'subscribe' ? 'white' : 'var(--text-dim)',
              transition: 'var(--transition)'
            }}>Subscribe ✦</button>
            <button onClick={() => setMode('wholesale')} style={{
              padding: '12px 24px',
              borderRadius: '60px',
              border: 'none',
              fontFamily: 'var(--font)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              background: mode === 'wholesale' ? 'var(--primary)' : 'transparent',
              color: mode === 'wholesale' ? 'white' : 'var(--text-dim)',
              transition: 'var(--transition)'
            }}>Wholesale</button>
          </div>
        </div>

        <div className="grid-2">
          {products.map(p => (
            <div key={p.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
              {/* Image Area */}
              <div style={{ 
                background: 'var(--white)',
                padding: '48px',
                textAlign: 'center',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '6px 14px',
                  borderRadius: '60px',
                  fontSize: '0.7rem',
                  fontWeight: 700
                }}>{p.tag}</span>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    height: '220px',
                    margin: '0 auto',
                    objectFit: 'contain',
                    mixBlendMode: 'multiply',
                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))'
                  }}
                />
              </div>
              {/* Content */}
              <div style={{ padding: '32px' }}>
                <h3 style={{ marginBottom: '8px', fontSize: '1.3rem' }}>{p.name}</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '24px' }}>{p.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    {mode === 'wholesale' ? (
                      <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)' }}>
                        Contact for prices
                      </span>
                    ) : (
                      <>
                        <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--navy)' }}>
                          {mode === 'subscribe' ? p.subPrice : p.price}
                        </span>
                        {mode === 'subscribe' && (
                          <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, marginLeft: '8px' }}>
                            /month
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  {mode === 'wholesale' ? (
                    <a href="#contact">
                      <button className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.85rem' }}>
                        Inquire Now
                      </button>
                    </a>
                  ) : (
                    <button className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.85rem' }}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
