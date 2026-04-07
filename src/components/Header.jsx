import React from 'react';
import { User, ShoppingBag } from 'lucide-react';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1rem',
      height: 'var(--header-height)',
      position: 'sticky',
      top: 'var(--banner-height)',
      zIndex: 40,
      backgroundColor: 'var(--primary-yellow)',
      borderBottom: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: '800', fontSize: '1.75rem', letterSpacing: '-0.05em' }}>
          <span style={{ color: 'var(--text-dark)' }}>Rail</span><span style={{ color: 'var(--primary-green)' }}>Quick</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button style={{ background: 'none', border: 'none', color: 'var(--text-dark)', cursor: 'pointer' }}>
          <User size={24} />
        </button>
        <button 
          onClick={onCartClick}
          style={{ 
            background: '#fff', 
            border: 'none',
            color: 'var(--text-dark)', 
            cursor: 'pointer',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: '600',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && <span style={{ color: '#fff', backgroundColor: 'var(--primary-green)', padding: '0.1rem 0.4rem', borderRadius: '0.25rem', fontSize: '0.75rem' }}>{cartCount}</span>}
        </button>
      </div>
    </header>
  );
};

export default Header;
