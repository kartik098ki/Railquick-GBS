/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { X, TrainFront, CreditCard, Banknote, ShieldCheck, CheckCircle2, Loader2, MessageCircle, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CheckoutModal = ({ isOpen, onClose, cartItems, totalAmount }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [pnr, setPnr] = useState('');
  const [coach, setCoach] = useState('');
  const [seat, setSeat] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePlaceOrder = async () => {
    setIsSubmitting(true);
    
    // Construct Order Data
    const orderData = {
      data: [{
        "Date": new Date().toLocaleString(),
        "PNR": pnr || "Not Provided",
        "Coach": coach || "Not Provided",
        "Seat": seat || "Not Provided",
        "Payment": paymentMethod.toUpperCase(),
        "Total": `Rs ${totalAmount}`,
        "Items": cartItems.map(item => item.name).join(", "),
        "Status": "Pending"
      }]
    };

    try {
      await fetch('https://sheetdb.io/api/v1/ayjl0v7njty0e', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });
      // Success
      setIsSubmitting(false);
      setOrderSuccess(true);
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to place order. Please try again.");
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setOrderSuccess(false);
    setPaymentMethod('');
    setPnr('');
    setCoach('');
    setSeat('');
    onClose();
  };

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
          {orderSuccess ? (
            // Order Tracking Screen
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={resetAndClose} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '50%', padding: '0.4rem', color: 'var(--text-dark)', cursor: 'pointer' }}>
                  <X size={18} />
                </button>
              </div>
              
              <div style={{ backgroundColor: '#f0fdf4', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '2px solid var(--accent-action)' }}>
                <CheckCircle2 size={40} color="var(--accent-action)" />
              </div>
              
              <h2 className="h2" style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Order Confirmed!</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Sit back and relax. Your items are being packed.</p>
              
              <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Clock size={24} color="var(--accent-orange)" />
                  <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-orange)' }}>5 mins</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: '600' }}>Estimated Delivery on Train</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Your delivery agent will reach your seat shortly.</div>
              </div>

              <button 
                onClick={() => alert("Connecting to Customer Support...")}
                style={{ width: '100%', backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '0.5rem', padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-dark)', fontWeight: '600', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}
              >
                <MessageCircle size={18} color="#0284c7" /> Need Help? Support
              </button>
            </div>
          ) : (
            // Checkout Screen
            <>
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
                  <input type="text" className="input-field" placeholder="10 Digit PNR" maxLength="10" value={pnr} onChange={e => setPnr(e.target.value)} />
                </div>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="input-group" style={{ flex: 1 }}>
                    <label className="input-label">Coach</label>
                    <input type="text" className="input-field" placeholder="e.g. B4" value={coach} onChange={e => setCoach(e.target.value)} />
                  </div>
                  <div className="input-group" style={{ flex: 1 }}>
                    <label className="input-label">Seat / Berth</label>
                    <input type="text" className="input-field" placeholder="e.g. 42" value={seat} onChange={e => setSeat(e.target.value)} />
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="h3" style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Payment Method</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{
                    display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem',
                    border: paymentMethod === 'upi' ? '2px solid var(--accent-action)' : '1px solid var(--border-light)',
                    borderRadius: '0.75rem', cursor: 'pointer',
                    background: paymentMethod === 'upi' ? '#f0fdf4' : 'var(--bg-card)',
                    transition: 'all 0.2s'
                  }}>
                    <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={(e) => setPaymentMethod(e.target.value)} style={{ accentColor: 'var(--accent-action)', width: '1.25rem', height: '1.25rem' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CreditCard className={paymentMethod === 'upi' ? "text-primary" : "text-muted"} />
                      <span className="font-semibold" style={{ color: 'var(--text-dark)' }}>UPI / Online Payment</span>
                    </div>
                  </label>

                  <label style={{
                    display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem',
                    border: paymentMethod === 'cod' ? '2px solid var(--accent-action)' : '1px solid var(--border-light)',
                    borderRadius: '0.75rem', cursor: 'pointer',
                    background: paymentMethod === 'cod' ? '#f0fdf4' : 'var(--bg-card)',
                    transition: 'all 0.2s'
                  }}>
                    <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} style={{ accentColor: 'var(--primary-green)', width: '1.25rem', height: '1.25rem' }} />
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

              <button 
                className="btn btn-primary w-full" 
                style={{ padding: '1rem', fontSize: '1.125rem', display: 'flex', justifyContent: 'center' }} 
                disabled={!paymentMethod || isSubmitting}
                onClick={handlePlaceOrder}
              >
                {isSubmitting ? (
                  <><Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> Processing...</>
                ) : (
                  <><ShieldCheck size={20} /> Place Order • ₹{totalAmount}</>
                )}
              </button>
            </>
          )}

        </motion.div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </AnimatePresence>
  );
};

export default CheckoutModal;
