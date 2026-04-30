import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    cartItems, 
    cartTotal,
    clearCart
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    district: 'Ikeja'
  });

  if (!isCheckoutOpen) return null;

  const lagosDistricts = [
    'Ikeja', 'Lekki', 'Victoria Island', 'Ikoyi', 'Surulere', 
    'Yaba', 'Maryland', 'Gbagada', 'Magodo', 'Ajah'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();
    
    // Format order details for WhatsApp
    const orderItems = cartItems.map(item => 
      `• ${item.name} (${item.mode === 'subscribe' ? 'Subscription' : 'One-time'}) x${item.quantity} - ₦${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');

    const message = `*NEW ORDER - YALODE WATER*%0A%0A` +
      `*Customer Details:*%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Address: ${formData.address}, ${formData.district}%0A%0A` +
      `*Order Summary:*%0A${orderItems}%0A%0A` +
      `*Total: ₦${cartTotal.toLocaleString()}*%0A%0A` +
      `Please confirm availability and delivery time.`;

    const whatsappUrl = `https://wa.me/2348022233348?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    // We don't clear cart immediately in case they need to return
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 3000,
      background: 'rgba(10, 37, 64, 0.4)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      overflowY: 'auto'
    }}>
      {/* Backdrop (invisible clickable area since blur is on parent) */}
      <div 
        onClick={() => setIsCheckoutOpen(false)}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -1
        }} 
      />

      {/* Checkout Modal */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '600px',
        background: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 30px 90px rgba(0,0,0,0.2)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100%', // Allow it to fill the padded area
        margin: 'auto' // Natural centering with overflow compatibility
      }}>
        {/* Header */}
        <div style={{
          padding: '24px 32px',
          background: 'var(--primary)',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '4px' }}>Complete Your Order</h3>
            <p style={{ opacity: 0.7, fontSize: '0.8rem' }}>Express checkout via WhatsApp</p>
          </div>
          <button 
            onClick={() => setIsCheckoutOpen(false)}
            style={{ 
              background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer',
              padding: '8px', borderRadius: '50%', color: 'white'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }}>
          <form id="checkout-form" onSubmit={handleWhatsAppCheckout}>
            <div style={{ display: 'grid', gap: '24px' }}>
              {/* Personal Info */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="input-group">
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: 'var(--primary)' }}>FULL NAME</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    style={{ 
                      width: '100%', padding: '14px', borderRadius: '12px', 
                      border: '1px solid rgba(10,37,64,0.1)', background: 'var(--bg)',
                      fontFamily: 'var(--font)'
                    }} 
                  />
                </div>
                <div className="input-group">
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: 'var(--primary)' }}>PHONE NUMBER</label>
                  <input 
                    required
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="080 1234 5678"
                    style={{ 
                      width: '100%', padding: '14px', borderRadius: '12px', 
                      border: '1px solid rgba(10,37,64,0.1)', background: 'var(--bg)',
                      fontFamily: 'var(--font)'
                    }} 
                  />
                </div>
              </div>

              {/* Delivery Info */}
              <div className="input-group">
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: 'var(--primary)' }}>DISTRICT (LAGOS)</label>
                <select 
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  style={{ 
                    width: '100%', padding: '14px', borderRadius: '12px', 
                    border: '1px solid rgba(10,37,64,0.1)', background: 'var(--bg)',
                    fontFamily: 'var(--font)', cursor: 'pointer'
                  }}
                >
                  {lagosDistricts.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <div className="input-group">
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: 'var(--primary)' }}>DELIVERY ADDRESS</label>
                <textarea 
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street name, Building number..."
                  rows="3"
                  style={{ 
                    width: '100%', padding: '14px', borderRadius: '12px', 
                    border: '1px solid rgba(10,37,64,0.1)', background: 'var(--bg)',
                    fontFamily: 'var(--font)', resize: 'none'
                  }} 
                />
              </div>
            </div>
          </form>

          {/* Order Summary in Modal */}
          <div style={{ 
            marginTop: '32px', padding: '24px', 
            background: 'var(--bg)', borderRadius: '16px',
            border: '1px dashed rgba(10,37,64,0.1)' 
          }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '16px', opacity: 0.6 }}>ORDER SUMMARY</h4>
            {cartItems.map(item => (
              <div key={item.cartId} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                <span>{item.name} x{item.quantity}</span>
                <span style={{ fontWeight: 700 }}>₦{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <div style={{ 
              marginTop: '16px', paddingTop: '16px', 
              borderTop: '1px solid rgba(0,0,0,0.05)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <span style={{ fontWeight: 700 }}>Total To Pay</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)' }}>₦{cartTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '32px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <button 
            type="submit" 
            form="checkout-form"
            className="btn-primary" 
            style={{ 
              width: '100%', padding: '20px', fontSize: '1.1rem',
              display: 'flex', justifyContent: 'center', gap: '12px',
              background: '#25D366', // WhatsApp Green
              boxShadow: '0 10px 30px rgba(37, 211, 102, 0.2)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Confirm via WhatsApp
          </button>
          <p style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.8rem', marginTop: '16px' }}>
            Secure your order with the Yalode team directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
