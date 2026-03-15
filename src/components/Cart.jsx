import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    isCheckoutOpen,
    setIsCheckoutOpen,
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      display: 'flex',
      justifyContent: 'flex-end',
      pointerEvents: isCartOpen ? 'auto' : 'none'
    }}>
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 37, 64, 0.4)',
          backdropFilter: 'blur(8px)',
          opacity: isCartOpen ? 1 : 0,
          transition: 'opacity 0.4s ease'
        }} 
      />

      {/* Cart Panel */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '440px',
        background: 'var(--white)',
        height: '100%',
        boxShadow: '-20px 0 60px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
      }}>
        {/* Header */}
        <div style={{
          padding: '24px 32px',
          borderBottom: '1px solid rgba(10,37,64,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ fontSize: '1.4rem' }}>Your Basket</h3>
          <button 
            onClick={() => setIsCartOpen(false)}
            style={{ 
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px', borderRadius: '50%', background: 'rgba(10,37,64,0.03)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>💧</div>
              <p style={{ color: 'var(--text-dim)', fontWeight: 600 }}>Your basket is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn-primary" 
                style={{ marginTop: '24px', padding: '12px 32px' }}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '24px' }}>
              {cartItems.map((item) => (
                <div key={item.cartId} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ 
                    width: '80px', height: '80px', background: 'var(--bg)', 
                    borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '8px'
                  }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
                      {item.mode === 'subscribe' ? 'Subscription' : 'One-time purchase'}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button 
                          onClick={() => updateQuantity(item.cartId, -1)}
                          style={{ border: 'none', background: 'rgba(10,37,64,0.04)', borderRadius: '4px', padding: '2px 8px', cursor: 'pointer' }}
                        >-</button>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, 1)}
                          style={{ border: 'none', background: 'rgba(10,37,64,0.04)', borderRadius: '4px', padding: '2px 8px', cursor: 'pointer' }}
                        >+</button>
                      </div>
                      <span style={{ fontWeight: 800, color: 'var(--primary)' }}>₦{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.cartId)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,0,0,0.3)', padding: '8px' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '32px',
            borderTop: '1px solid rgba(10,37,64,0.06)',
            background: 'var(--white)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <span style={{ color: 'var(--text-dim)', fontWeight: 600 }}>Subtotal</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)' }}>₦{cartTotal.toLocaleString()}</span>
            </div>
            <button 
              onClick={() => { setIsCheckoutOpen(true); setIsCartOpen(false); }}
              className="btn-primary" 
              style={{ width: '100%', padding: '20px', fontSize: '1.1rem' }}
            >
              Proceed to Checkout
            </button>
            <p style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.8rem', marginTop: '16px' }}>
              Delivery calculated at next step
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
