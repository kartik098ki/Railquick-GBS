import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const specials = [
  { id: 1, city: 'Agra', item: 'Panchi Petha', eta: '45 mins', price: 250, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 2, city: 'Mathura', item: 'Brijwasi Peda', eta: '1 hr 15 mins', price: 300, image: 'https://images.unsplash.com/photo-1559533306-2187f5d6f859?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 3, city: 'Gwalior', item: 'Gajak', eta: '2 hrs 30 mins', price: 150, image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=200&h=200' },
];

const UpcomingCitySpecials = ({ onAddToCart }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h2 className="h2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={22} className="text-accent" /> Upcoming City Famous
        </h2>
        <button style={{ background: 'none', border: 'none', color: 'var(--primary-green)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
          View all <ArrowRight size={16} />
        </button>
      </div>

      <div className="hide-scroll" style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {specials.map((special) => (
          <div key={special.id} style={{ 
            minWidth: '150px', 
            padding: '0.5rem', 
            display: 'flex', 
            flexDirection: 'column',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: '0.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ 
              height: '110px', 
              borderRadius: '0.25rem', 
              backgroundImage: `url(${special.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginBottom: '0.5rem',
              position: 'relative',
              backgroundColor: '#f8f8f8'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--accent-orange)',
                color: '#fff',
                fontSize: '0.6rem',
                fontWeight: '700',
                padding: '0.2rem 0.4rem',
                borderRadius: '0.25rem',
                whiteSpace: 'nowrap',
                boxShadow: 'var(--shadow-sm)'
              }}>
                ETA: {special.eta}
              </div>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <div className="text-xs text-muted" style={{ fontWeight: '600', textTransform: 'uppercase' }}>{special.city}</div>
              <div className="font-semibold" style={{ fontSize: '0.85rem', marginBottom: '0.25rem', color: 'var(--text-dark)' }}>{special.item}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <span className="font-bold" style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>₹{special.price}</span>
                <button 
                  onClick={() => onAddToCart(special)}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingCitySpecials;
