/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { X, TrainFront, CreditCard, Banknote, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CheckoutModal = ({ isOpen, onClose, cartItems, totalAmount }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(2px)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <motion.div 
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          style={{
            backgroundColor: 'var(--bg-main)',
            borderTopLeftRadius: '1.5rem',
            borderTopRightRadius: '1.5rem',
            padding: '1.5rem',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderTop: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 className="h2" style={{ color: 'var(--text-dark)' }}>Complete Order</h2>
            <button onClick={onClose} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '50%', padding: '0.5rem', color: 'var(--text-dark)', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          <div style={{ marginBottom: '1.5rem', backgroundColor: 'var(--bg-card)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
            <h3 className="h3" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dark)' }}>
              <TrainFront size={20} className="text-primary" /> Passenger Details
            </h3>
            
            <div className="input-group">
              <label className="input-label">PNR Number (Optional)</label>
              <input type="text" className="input-field" placeholder="10 Digit PNR" maxLength="10" />
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="input-group" style={{ flex: 1 }}>
                <label className="input-label">Coach</label>
                <input type="text" className="input-field" placeholder="e.g. B4" />
              </div>
              <div className="input-group" style={{ flex: 1 }}>
                <label className="input-label">Seat / Berth</label>
                <input type="text" className="input-field" placeholder="e.g. 42" />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 className="h3" style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Payment Method</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                border: paymentMethod === 'upi' ? '2px solid var(--primary-green)' : '1px solid var(--border-light)',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                background: paymentMethod === 'upi' ? '#f0fdf4' : 'var(--bg-card)',
                transition: 'all 0.2s'
              }}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="upi" 
                  checked={paymentMethod === 'upi'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  style={{ accentColor: 'var(--primary-green)', width: '1.25rem', height: '1.25rem' }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CreditCard className={paymentMethod === 'upi' ? "text-primary" : "text-muted"} />
                  <span className="font-semibold" style={{ color: 'var(--text-dark)' }}>UPI / Online Payment</span>
                </div>
              </label>

              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                border: paymentMethod === 'cod' ? '2px solid var(--primary-green)' : '1px solid var(--border-light)',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                background: paymentMethod === 'cod' ? '#f0fdf4' : 'var(--bg-card)',
                transition: 'all 0.2s'
              }}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="cod" 
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  style={{ accentColor: 'var(--primary-green)', width: '1.25rem', height: '1.25rem' }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Banknote className={paymentMethod === 'cod' ? "text-primary" : "text-muted"} />
                  <span className="font-semibold" style={{ color: 'var(--text-dark)' }}>Cash on Delivery</span>
                </div>
              </label>

            </div>
          </div>

          <div style={{ padding: '1rem', background: 'var(--bg-card)', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span className="text-muted">Item Total</span>
              <span style={{ color: 'var(--text-dark)', fontWeight: '500' }}>₹{totalAmount}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span className="text-muted">Delivery Fee</span>
              <span className="text-primary" style={{ fontWeight: '600' }}>FREE</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-light)', fontWeight: '700', fontSize: '1.125rem', color: 'var(--text-dark)' }}>
              <span>To Pay</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>

          <button className="btn btn-primary w-full" style={{ padding: '1rem', fontSize: '1.125rem', display: 'flex', justifyContent: 'center' }} disabled={!paymentMethod}>
            <ShieldCheck size={20} />
            Place Order • ₹{totalAmount}
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CheckoutModal;
