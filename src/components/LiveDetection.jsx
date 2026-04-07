import React from 'react';
import { LocateFixed, TrainFront } from 'lucide-react';

const LiveDetection = () => {
  return (
    <div className="glass-panel" style={{ margin: '1rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Radar rings animation backdrop */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'rgba(16, 185, 129, 0.2)',
        zIndex: 0,
      }} className="radar-ping"></div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          background: 'var(--primary-green)',
          padding: '0.75rem',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 0 15px rgba(16, 185, 129, 0.5)'
        }}>
          <LocateFixed size={28} />
        </div>
        <div style={{ flex: 1 }}>
          <h2 className="h3" style={{ marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Live Seat Radar <TrainFront size={18} className="text-muted" />
          </h2>
          <p className="text-sm text-muted">
            Auto-detecting your seat for seamless delivery. Make sure location is turned on.
          </p>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '1rem', 
        padding: '0.75rem', 
        background: 'rgba(0,0,0,0.3)', 
        borderRadius: '0.5rem',
        border: '1px solid rgba(16, 185, 129, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ height: '8px', width: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-green)', display: 'inline-block' }}></span>
          <span className="text-sm font-semibold text-primary">Location Synced: S4 - 42(Middle)</span>
        </div>
        <button style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}>
          Change
        </button>
      </div>

    </div>
  );
};

export default LiveDetection;
