import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import LiveDetection from './components/LiveDetection';
import UpcomingCitySpecials from './components/UpcomingCitySpecials';
import EssentialsGrid from './components/EssentialsGrid';
import MedicineSection from './components/MedicineSection';
import CheckoutModal from './components/CheckoutModal';

function App() {
  const [cart, setCart] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const handleCartClick = () => {
    if (cart.length > 0) {
      setIsCheckoutOpen(true);
    } else {
      alert("Your cart is empty! Add some items first.");
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <TopBanner />
      <Header cartCount={cart.length} onCartClick={handleCartClick} />
      
      {/* Search Bar - Blinkit staple */}
      <div style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--primary-yellow)', position: 'sticky', top: 'calc(var(--banner-height) + var(--header-height))', zIndex: 30, borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '0.5rem', padding: '0.6rem 1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', gap: '0.5rem' }}>
          <Search size={18} color="var(--text-muted)" />
          <input 
            type="text" 
            placeholder="Search 'chips', 'water'..." 
            style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', fontSize: '0.9rem', color: 'var(--text-dark)' }} 
          />
        </div>
      </div>

      <main style={{ flex: 1, paddingBottom: 'env(safe-area-inset-bottom)' }}>
        
        <div className="animate-slide-down">
          <LiveDetection />
        </div>

        <MedicineSection onAddToCart={handleAddToCart} />

        <div className="animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          <UpcomingCitySpecials onAddToCart={handleAddToCart} />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both', marginBottom: '4rem' }}>
          <EssentialsGrid onAddToCart={handleAddToCart} />
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
