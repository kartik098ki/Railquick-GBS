/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Sparkles, Pill, UploadCloud, PhoneCall, CheckCircle2, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MedicineSection = ({ onAddToCart }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(''); // 'rx' or 'doc'
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [callBooked, setCallBooked] = useState(false);

  const mockMedicines = [
    { id: 201, name: 'Paracetamol 500mg', price: 25, time: '10 mins', image: 'https://images.unsplash.com/photo-1584308666744-24d5e4bde0bf?auto=format&fit=crop&q=80&w=200&h=200' },
    { id: 202, name: 'Cough Syrup (Ascoril)', price: 120, time: '10 mins', image: 'https://images.unsplash.com/photo-1626015505030-84ae0a4c28f3?auto=format&fit=crop&q=80&w=200&h=200' },
  ];

  const handleOpen = (type) => {
    setActiveTab(type);
    setModalOpen(true);
    // Reset states
    setIsScanning(false);
    setScanComplete(false);
    setCallBooked(false);
  };

  const handleUploadClick = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 2500);
  };

  const handleBookCall = () => {
    setCallBooked(true);
  };

  return (
    <>
      <div style={{ padding: '0 1rem', marginTop: '1rem', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Sparkles size={16} color="var(--primary-green)" /> Quick Services
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {/* Tile 1 */}
          <div 
            onClick={() => handleOpen('rx')}
            style={{ 
              backgroundColor: '#e0f2fe', 
              borderRadius: '0.5rem', 
              padding: '0.75rem', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.5rem',
              cursor: 'pointer',
              border: '1px solid #bae6fd'
            }}
          >
            <div style={{ background: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <UploadCloud size={16} color="#0284c7" />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0c4a6e' }}>Pharmacy</div>
              <div style={{ fontSize: '0.65rem', color: '#0284c7' }}>Upload Rx via AI</div>
            </div>
          </div>

          {/* Tile 2 */}
          <div 
            onClick={() => handleOpen('doc')}
            style={{ 
              backgroundColor: '#ffedd5', 
              borderRadius: '0.5rem', 
              padding: '0.75rem', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.5rem',
              cursor: 'pointer',
              border: '1px solid #fed7aa'
            }}
          >
            <div style={{ background: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PhoneCall size={16} color="#ea580c" />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#7c2d12' }}>Consult Doctor</div>
              <div style={{ fontSize: '0.65rem', color: '#ea580c' }}>IRCTC Medicos</div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
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
                paddingBottom: 'env(safe-area-inset-bottom, 2rem)',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-dark)' }}>
                  {activeTab === 'rx' ? 'AI Pharmacy' : 'Doctor Consultation'}
                </h2>
                <button onClick={() => setModalOpen(false)} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              {activeTab === 'rx' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ background: '#f0fdf4', border: '1px dashed var(--primary-green)', borderRadius: '12px', padding: '2rem 1rem', textAlign: 'center' }}>
                    <UploadCloud size={32} color="var(--primary-green)" style={{ margin: '0 auto 0.5rem' }} />
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Upload Prescription</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>AI will scan your image and extract the medicines instantly.</p>
                    
                    {!isScanning && !scanComplete && (
                      <button onClick={handleUploadClick} className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>START SCANNING</button>
                    )}
                    
                    {isScanning && (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--primary-green)', fontWeight: '600' }}>
                        <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Analysing Image...
                      </div>
                    )}
                  </div>

                  {scanComplete && (
                    <div className="animate-fade-in" style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-green)', fontWeight: '600', marginBottom: '1rem' }}>
                        <CheckCircle2 size={18} /> Prescription Verified
                      </div>
                      
                      {mockMedicines.map(med => (
                        <div key={med.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
                          <div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-dark)' }}>{med.name}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>₹{med.price}</div>
                          </div>
                          <button 
                            onClick={() => { onAddToCart(med); setModalOpen(false); alert('Added to cart'); }}
                            style={{ backgroundColor: '#fff', border: '1px solid var(--primary-green)', color: 'var(--primary-green)', fontWeight: '700', padding: '0.3rem 0.8rem', borderRadius: '0.25rem', fontSize: '0.75rem', cursor: 'pointer' }}
                          >
                            ADD
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'doc' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '12px', padding: '1.5rem 1rem', textAlign: 'center' }}>
                    <div style={{ background: '#ffedd5', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                      <PhoneCall size={24} color="#ea580c" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Connect with an IRCTC Doctor</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.4' }}>Feeling unwell on the train? Get an instant teleconsultation and have medicines delivered to your seat.</p>
                    
                    {callBooked ? (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#ea580c', fontWeight: '600', background: '#ffedd5', padding: '0.75rem', borderRadius: '8px' }}>
                       <CheckCircle2 size={18} /> Request Accepted! Expect a call in 2 mins.
                      </div>
                    ) : (
                      <button onClick={handleBookCall} className="btn btn-accent" style={{ width: '100%', padding: '0.75rem' }}>
                        REQUEST INSTANT CALL
                      </button>
                    )}
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
};

export default MedicineSection;
