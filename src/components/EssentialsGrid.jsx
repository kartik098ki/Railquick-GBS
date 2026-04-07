import React from 'react';
import { Plus, Minus } from 'lucide-react';

const EssentialsGrid = ({ cart, onAdd, onRemove }) => {
  // Expanded Inventory: 12 Premium Items
  const essentials = [
    { id: 1, name: 'Premium Neck Pillow', price: 499, time: '5 mins', image: 'https://images.unsplash.com/photo-1541088461528-97f480393f9e?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 2, name: '20W Fast Charger + Cable', price: 699, time: '5 mins', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 3, name: 'Dettol Wet Wipes (50s)', price: 120, time: '5 mins', image: 'https://images.unsplash.com/photo-1584483768567-46dc036b13df?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 4, name: 'Sleep Eyemask + Earplugs', price: 199, time: '5 mins', image: 'https://images.unsplash.com/photo-1581414440026-6a7cbabe84e6?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 5, name: 'Nivea Men Deodorant 150ml', price: 210, time: '10 mins', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 6, name: 'Travel Padlock (TSA)', price: 349, time: '5 mins', image: 'https://images.unsplash.com/photo-1558022133-c8d7e008a956?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 7, name: 'Premium Playing Cards UNO', price: 149, time: '5 mins', image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 8, name: 'Hand Sanitizer Gel 100ml', price: 85, time: '5 mins', image: 'https://images.unsplash.com/photo-1584483768567-46dc036b13df?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 9, name: 'Compact Umbrella', price: 599, time: '10 mins', image: 'https://images.unsplash.com/photo-1551061905-2b47ea5bed73?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 10, name: 'Pond\'s Face Wash 50g', price: 90, time: '5 mins', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 11, name: 'Colgate Travel Kit', price: 110, time: '5 mins', image: 'https://images.unsplash.com/photo-1606771804245-21d15df9a44e?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 12, name: 'Forbes Magazine (Current)', price: 150, time: '10 mins', image: 'https://images.unsplash.com/photo-1582214400329-8f8101a052ff?auto=format&fit=crop&q=80&w=300&h=300' },
  ];

  return (
    <div style={{ padding: '0 1.25rem', marginTop: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 className="h3" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-dark)', fontWeight: '700' }}>
          Travel Utilities
        </h2>
        <span style={{ fontSize: '0.8rem', color: 'var(--primary-accent)', fontWeight: '600', cursor: 'pointer' }}>View All</span>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '1rem' 
      }}>
        {essentials.map(item => {
          const cartItem = cart.find(i => i.id === item.id);
          const qty = cartItem ? cartItem.qty : 0;

          return (
            <div key={item.id} className="product-card">
              <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', backgroundColor: '#f1f5f9' }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', top: '0.5rem', left: '0.5rem',
                  backgroundColor: 'var(--primary-light)', padding: '0.3rem 0.6rem',
                  borderRadius: '0.25rem', fontSize: '0.65rem', fontWeight: '700',
                  color: 'var(--primary-accent)', display: 'flex', alignItems: 'center', gap: '0.2rem',
                  border: '1px solid #dbeafe', backdropFilter: 'blur(4px)'
                }}>
                  ⏱ {item.time}
                </div>
              </div>
              
              <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '0.5rem', lineHeight: '1.2' }}>{item.name}</h3>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ fontWeight: '700', color: 'var(--text-dark)', fontSize: '0.9rem' }}>₹{item.price}</span>
                  
                  {qty > 0 ? (
                    <div style={{ 
                      display: 'flex', alignItems: 'center', 
                      backgroundColor: 'var(--primary-accent)', color: '#fff', 
                      borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(30,58,138,0.2)'
                    }}>
                      <button 
                        onClick={() => onRemove(item)}
                        style={{ padding: '0.4rem', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      ><Minus size={14} /></button>
                      
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', padding: '0 0.2rem', minWidth: '16px', textAlign: 'center' }}>{qty}</span>
                      
                      <button 
                        onClick={() => onAdd(item)}
                        style={{ padding: '0.4rem', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      ><Plus size={14} /></button>
                    </div>
                  ) : (
                    <button className="add-btn" onClick={() => onAdd(item)}>
                      ADD
                    </button>
                  )}

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EssentialsGrid;
