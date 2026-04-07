import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import LiveDetection from './components/LiveDetection';
import LiveJourneyTracker from './components/LiveJourneyTracker';
import UpcomingCitySpecials from './components/UpcomingCitySpecials';
import EssentialsGrid from './components/EssentialsGrid';
import MedicineSection from './components/MedicineSection';
import CheckoutModal from './components/CheckoutModal';

function App() {
  const [cart, setCart] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Comfort', 'Hygiene', 'Reading', 'Medical'];

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (item) => {
    setCart((prev) => {
      const exists = prev.find(i => i.id === item.id);
      if (exists && exists.qty > 1) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty - 1 } : i);
      }
      return prev.filter(i => i.id !== item.id);
    });
  };

  const totalCartCount = cart.reduce((count, item) => count + item.qty, 0);
  
  const handleCartClick = () => {
    if (totalCartCount > 0) {
      setIsCheckoutOpen(true);
    } else {
      alert("Your cart is empty! Add some items first.");
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0);
  };

  return (
    <>
      <TopBanner />
      <Header cartCount={totalCartCount} onCartClick={handleCartClick} />
      
      {/* Search Bar - Premium Theme */}
      <div style={{ 
        padding: '0.75rem 1.25rem', 
        backgroundColor: '#fff', 
        position: 'sticky', 
        top: 'calc(var(--banner-height) + var(--header-height))', 
        zIndex: 30,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-main)', borderRadius: '12px', padding: '0.75rem 1rem', border: '1px solid var(--border-light)', gap: '0.5rem', transition: 'all 0.2s' }}>
          <Search size={18} color="var(--primary-accent)" />
          <input 
            type="text" 
            placeholder="Search chargers, wet wipes..." 
            style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', fontSize: '0.95rem', color: 'var(--text-dark)', fontWeight: '500' }} 
          />
        </div>
      </div>

      {/* Category Horizontal Slider */}
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '0.5rem',
        padding: '1rem 1.25rem',
        backgroundColor: 'var(--bg-main)',
      }} className="hide-scrollbar">
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '2rem',
              border: activeCategory === cat ? 'none' : '1px solid var(--border-light)',
              backgroundColor: activeCategory === cat ? 'var(--primary-accent)' : '#fff',
              color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
              fontSize: '0.8rem',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
              boxShadow: activeCategory === cat ? '0 2px 8px rgba(30, 58, 138, 0.3)' : 'none'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <main style={{ flex: 1, paddingBottom: 'env(safe-area-inset-bottom)' }}>
        
        <div className="animate-slide-down">
          <LiveDetection />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '50ms', animationFillMode: 'both' }}>
          <LiveJourneyTracker />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          <UpcomingCitySpecials cart={cart} onAdd={handleAddToCart} onRemove={handleRemoveFromCart} />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          <EssentialsGrid cart={cart} onAdd={handleAddToCart} onRemove={handleRemoveFromCart} />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'both', marginBottom: '4rem' }}>
          <MedicineSection onAddToCart={handleAddToCart} />
        </div>
      </main>

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        cartItems={cart}
        totalAmount={calculateTotal()}
      />
    </>
  );
}

export default App;
