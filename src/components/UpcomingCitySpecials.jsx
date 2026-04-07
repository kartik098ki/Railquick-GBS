/* eslint-disable no-unused-vars */
import React from 'react';
import { MapPin, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const UpcomingCitySpecials = ({ cart, onAdd, onRemove }) => {
  // New Inventory: Premium Non-Food City Specials
  const specials = [
    { id: 101, city: 'Kanpur', name: 'Premium Leather Wallet', price: 850, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=200&h=200' },
    { id: 102, city: 'Lucknow', name: 'Handcrafted Chikankari Pouch', price: 350, image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=200&h=200' },
  ];

  return (
    <div style={{ padding: '0 1.25rem', marginTop: '1.5rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h2 className="h3" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-dark)', fontWeight: '700' }}>
            <MapPin size={18} color="var(--primary-accent)" /> 
            Ahead: Kanpur
          </h2>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Arriving in 45 mins. Premium local crafts.</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }} className="hide-scrollbar">
        {specials.map((item, index) => {
          const cartItem = cart.find(i => i.id === item.id);
          const qty = cartItem ? cartItem.qty : 0;

          return (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="product-card"
            style={{ minWidth: '160px', flex: '0 0 auto' }}
          >
            <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', backgroundColor: '#f1f5f9' }}>
               <img 
                src={item.image} 
                alt={item.name} 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute', top: '0.5rem', left: '0.5rem',
                backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '0.3rem 0.6rem',
                borderRadius: '0.25rem', fontSize: '0.65rem', fontWeight: '600',
                color: '#fff', backdropFilter: 'blur(4px)'
              }}>
                From {item.city}
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
          </motion.div>
        )})}
      </div>
    </div>
  );
};

export default UpcomingCitySpecials;
