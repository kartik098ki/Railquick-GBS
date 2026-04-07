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
        gap: '1rem' 
      }}>
        {products.map((product) => (
          <div key={product.id} className="glass-panel" style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              height: '100px',
              borderRadius: '0.5rem',
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginBottom: '0.75rem'
            }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: '600' }}>
              <Clock size={12} /> {product.time} delivery
            </div>
            <div className="font-semibold" style={{ fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.2' }}>{product.name}</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
              <span className="font-bold">₹{product.price}</span>
              <button 
                onClick={() => onAddToCart(product)}
                className="btn btn-primary" 
                style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem' }}
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
