import React from 'react';
import { Package, Clock } from 'lucide-react';

const products = [
  { id: 101, name: 'Kinley Water Bot...', price: 20, time: '5 mins', image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 102, name: 'Lays India\'s Magic', price: 20, time: '5 mins', image: 'https://images.unsplash.com/photo-1566478989037-eade1730030d?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 103, name: 'Disprin 10 Tabs', price: 15, time: '5 mins', image: 'https://images.unsplash.com/photo-1584308666744-24d5e4bde0bf?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 104, name: 'Colgate MaxFresh', price: 55, time: '5 mins', image: 'https://images.unsplash.com/photo-1559591322-ce467000d6aa?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 105, name: 'Odomos Cream', price: 90, time: '5 mins', image: 'https://images.unsplash.com/photo-1628198539209-6bc22964e526?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 106, name: 'Haldiram Bhujia', price: 40, time: '5 mins', image: 'https://images.unsplash.com/photo-1605295982823-1d0fcde3bfdf?auto=format&fit=crop&q=80&w=200&h=200' },
];

const EssentialsGrid = ({ onAddToCart }) => {
  return (
    <div style={{ padding: '1rem', paddingBottom: '100px' }}>
      <h2 className="h2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <Package size={22} className="text-primary" /> Train Setup Essentials
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
        gap: '0.75rem' 
      }}>
        {products.map((product) => (
          <div key={product.id} style={{ 
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: '0.5rem',
            padding: '0.5rem', 
            display: 'flex', 
            flexDirection: 'column',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{
              height: '110px',
              borderRadius: '0.25rem',
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginBottom: '0.5rem',
              backgroundColor: '#f8f8f8'
            }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: '600', backgroundColor: '#f1f5f9', padding: '0.1rem 0.3rem', borderRadius: '0.2rem', width: 'fit-content' }}>
              <Clock size={10} /> {product.time}
            </div>
            <div className="font-semibold" style={{ fontSize: '0.85rem', marginBottom: '0.5rem', lineHeight: '1.2', color: 'var(--text-dark)' }}>{product.name}</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
              <span className="font-bold" style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>₹{product.price}</span>
              <button 
                onClick={() => onAddToCart(product)}
                style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid var(--primary-green)',
                  color: 'var(--primary-green)',
                  fontWeight: '700',
                  padding: '0.25rem 0.75rem', 
                  fontSize: '0.75rem',
                  borderRadius: '0.25rem',
                  cursor: 'pointer',
                  textTransform: 'uppercase'
                }}
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialsGrid;
