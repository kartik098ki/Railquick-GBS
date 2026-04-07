import React from 'react';
import { User, ShoppingBag, TrainFront } from 'lucide-react';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.25rem',
      height: 'var(--header-height)',
      position: 'sticky',
      top: 'var(--banner-height)',
      zIndex: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ 
          width: '36px', height: '36px', borderRadius: '10px', 
          background: 'var(--primary-gradient)', 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(37, 99, 235, 0.25)'
        }}>
          <TrainFront size={20} color="#fff" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'Outfit, sans-serif', color: 'var(--text-dark)', letterSpacing: '-0.5px', lineHeight: '1' }}>
            RailQuick
          </span>
          <span style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--primary-accent)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.1rem' }}>
            Premium Transit
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.2s' }}>
          <User size={22} />
        </button>
        <button 
          onClick={onCartClick}
          style={{ 
            background: 'var(--primary-light)', 
            border: '1px solid #dbeafe',
            color: 'var(--primary-accent)', 
            cursor: 'pointer',
            padding: '0.5rem 0.75rem',
            borderRadius: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: '700',
            transition: 'all 0.2s'
          }}
        >
          <ShoppingBag size={18} />
          {cartCount > 0 && (
            <span style={{ 
              color: '#fff', 
              backgroundColor: 'var(--accent-action)', 
              padding: '0.1rem 0.4rem', 
              borderRadius: '1rem', 
              fontSize: '0.75rem',
              boxShadow: '0 2px 4px rgba(37, 99, 235, 0.3)'
            }}>
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
