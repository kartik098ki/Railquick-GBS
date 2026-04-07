import React, { useState } from 'react';
import { Pill, UploadCloud, PhoneCall, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

const MedicineSection = ({ onAddToCart }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [callBooked, setCallBooked] = useState(false);

  const mockMedicines = [
    { id: 201, name: 'Paracetamol 500mg', price: 25, time: '10 mins', image: 'https://images.unsplash.com/photo-1584308666744-24d5e4bde0bf?auto=format&fit=crop&q=80&w=200&h=200' },
    { id: 202, name: 'Cough Syrup (Ascoril)', price: 120, time: '10 mins', image: 'https://images.unsplash.com/photo-1626015505030-84ae0a4c28f3?auto=format&fit=crop&q=80&w=200&h=200' },
  ];

  const handleUploadClick = () => {
    setIsScanning(true);
    setScanComplete(false);
    
    // Simulate AI scanning delay
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 2500);
  };

  const handleBookCall = () => {
    setCallBooked(true);
    setTimeout(() => {
      setCallBooked(false);
    }, 4000);
  };

  return (
    <div style={{ padding: '1rem', marginTop: '0.5rem' }}>
      <h2 className="h2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <Sparkles size={22} color="var(--primary-green)" /> AI Pharmacy
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        {/* Prescription Upload Card */}
        <div style={{ 
          backgroundColor: 'var(--bg-card)', 
          border: '1px solid var(--border-light)', 
          borderRadius: '12px', 
          padding: '1rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: '#f0fdf4', padding: '0.75rem', borderRadius: '50%' }}>
              <UploadCloud size={24} color="var(--primary-green)" />
            </div>
            <div style={{ flex: 1 }}>
              <h3 className="h3" style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Upload Prescription</h3>
              <p className="text-sm text-muted" style={{ marginBottom: '0.75rem' }}>
                Our AI will scan your prescription and add the required medicines to your cart instantly.
              </p>
              
              {!isScanning && !scanComplete && (
                <button 
                  onClick={handleUploadClick}
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '0.6rem' }}
                >
                  UPLOAD & SCAN
                </button>
              )}

              {isScanning && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.6rem', color: 'var(--primary-green)', fontWeight: '600' }}>
                  <Loader2 size={18} className="spin-anim" style={{ animation: 'spin 1s linear infinite' }} />
                  AI Analysing...
                </div>
              )}

              {scanComplete && (
                <div className="animate-fade-in" style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-green)', fontWeight: '600', marginBottom: '0.75rem' }}>
                    <CheckCircle2 size={16} /> Prescription Verified
                  </div>
                  
                  {mockMedicines.map(med => (
                    <div key={med.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)' }}>{med.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>₹{med.price}</div>
                      </div>
                      <button 
                        onClick={() => { onAddToCart(med); alert(`${med.name} added to cart`); }}
                        style={{ 
                          backgroundColor: 'transparent',
                          border: '1px solid var(--primary-green)',
                          color: 'var(--primary-green)',
                          fontWeight: '700',
                          padding: '0.2rem 0.6rem', 
                          fontSize: '0.7rem',
                          borderRadius: '0.25rem',
                          cursor: 'pointer'
                        }}
                      >
                        ADD
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={() => setScanComplete(false)}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'underline', marginTop: '0.5rem', cursor: 'pointer' }}
                  >
                    Scan Another
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Doctor Consultation Card */}
        <div style={{ 
          backgroundColor: 'var(--bg-card)', 
          border: '1px solid var(--border-light)', 
          borderRadius: '12px', 
          padding: '1rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: '#fff7ed', padding: '0.75rem', borderRadius: '50%' }}>
              <PhoneCall size={24} color="var(--accent-orange)" />
            </div>
            <div style={{ flex: 1 }}>
              <h3 className="h3" style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Don't have a prescription?</h3>
              <p className="text-sm text-muted" style={{ marginBottom: '0.75rem' }}>
                Book a quick call with an IRCTC doctor to get prescribed instantly.
              </p>
              
              {callBooked ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-orange)', fontWeight: '600', padding: '0.6rem', justifyContent: 'center' }}>
                 <CheckCircle2 size={18} /> Call Scheduled! Doctor will dial shortly.
                </div>
              ) : (
                <button 
                  onClick={handleBookCall}
                  className="btn btn-accent" 
                  style={{ width: '100%', padding: '0.6rem' }}
                >
                  BOOK DOCTOR CALL
                </button>
              )}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default MedicineSection;
