import React from 'react';
import { User, ShoppingBag } from 'lucide-react';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="glass-panel" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1rem',
      height: 'var(--header-height)',
      position: 'sticky',
      top: 'var(--banner-height)',
      zIndex: 40,
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderRadius: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: '800', fontSize: '1.5rem', letterSpacing: '-0.05em' }}>
          <span>Rail</span><span style={{ color: 'var(--primary-green)' }}>Quick</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
          <User size={24} />
        </button>
        <button 
          onClick={onCartClick}
          style={{ 
            background: 'var(--bg-darker)', 
            border: '1px solid var(--border-light)', 
            color: 'var(--text-main)', 
            cursor: 'pointer',
            padding: '0.5rem 0.75rem',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: '600'
          }}
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && <span style={{ color: 'var(--accent-orange)' }}>{cartCount}</span>}
        </button>
      </div>
    </header>
  );
};

export default Header;
