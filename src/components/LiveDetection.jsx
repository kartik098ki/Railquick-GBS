import React from 'react';
import { MapPin, TrainFront } from 'lucide-react';

const LiveDetection = () => {
  return (
    <div style={{ 
      backgroundColor: 'var(--bg-card)', 
      padding: '0.75rem 1rem', 
      borderBottom: '1px solid var(--border-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ position: 'relative' }}>
          <MapPin size={22} color="var(--primary-accent)" />
          {/* Subtle pulse */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(12, 131, 31, 0.2)' }} className="radar-ping"></div>
        </div>
        
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark)' }}>Live Train Radar</h3>
            <TrainFront size={14} color="var(--text-muted)" />
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location Synced: Coach S4 - 42(M)</span>
        </div>
      </div>
      
      <button style={{
        background: 'rgba(12, 131, 31, 0.1)',
        border: 'none',
        color: 'var(--primary-accent)',
        fontSize: '0.75rem',
        fontWeight: '700',
        padding: '0.35rem 0.6rem',
        borderRadius: '0.25rem',
        cursor: 'pointer'
      }}>
        Change
      </button>
    </div>
  );
};

export default LiveDetection;
