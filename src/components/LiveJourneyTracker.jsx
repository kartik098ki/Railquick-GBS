import React from 'react';
import { MapPin, Navigation, Train } from 'lucide-react';

const LiveJourneyTracker = () => {
  return (
    <div style={{ padding: '0 1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
      
      <div style={{ 
        backgroundColor: '#fff', 
        borderRadius: '16px', 
        padding: '1.25rem', 
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--border-light)'
      }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ 
              width: '32px', height: '32px', borderRadius: '8px', 
              backgroundColor: 'var(--primary-light)', color: 'var(--primary-accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Train size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-dark)' }}>Live Route Status</h3>
              <p style={{ fontSize: '0.7rem', color: 'var(--primary-accent)', fontWeight: '600' }}>Vande Bharat Express (22436)</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', color: '#166534', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.65rem', fontWeight: '700', border: '1px solid #bbf7d0' }}>
            ON TIME
          </div>
        </div>

        {/* Timeline Map */}
        <div style={{ position: 'relative', marginTop: '0.5rem' }}>
          
          {/* Connecting Line Backdrop */}
          <div style={{ position: 'absolute', left: '11px', top: '10px', bottom: '10px', width: '2px', backgroundColor: 'var(--border-light)', zIndex: 1 }}></div>
          
          {/* Active Line Overlap */}
          <div style={{ position: 'absolute', left: '11px', top: '10px', height: '40%', width: '2px', backgroundColor: 'var(--primary-accent)', zIndex: 1 }}></div>

          {/* Node 1: Completed */}
          <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 2, marginBottom: '1.5rem' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--primary-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fff' }}></div>
            </div>
            <div style={{ flex: 1, marginTop: '2px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>New Delhi (NDLS)</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Departed 06:00 AM</div>
            </div>
          </div>

          {/* Node 2: Next Arrival (Pulsing) */}
          <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 2, marginBottom: '1.5rem' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#fff', border: '3px solid var(--primary-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)', animation: 'pulse 2s infinite' }}>
              <Navigation size={12} color="var(--primary-accent)" style={{ transform: 'rotate(90deg)' }} />
            </div>
            <div style={{ flex: 1, marginTop: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-dark)' }}>Kanpur Central</div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-orange)' }}>In 45 Mins</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>Order window open for 15 more mins</div>
            </div>
          </div>

          {/* Node 3: Future */}
          <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 2 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#fff', border: '3px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={12} color="var(--text-muted)" />
            </div>
            <div style={{ flex: 1, marginTop: '2px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Varanasi Jn (BSB)</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Scheduled Arrival 14:00 PM</div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(37, 99, 235, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
        }
      `}</style>
    </div>
  );
};

export default LiveJourneyTracker;
