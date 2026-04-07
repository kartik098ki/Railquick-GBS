import React, { useState } from 'react';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import LiveDetection from './components/LiveDetection';
import UpcomingCitySpecials from './components/UpcomingCitySpecials';
import EssentialsGrid from './components/EssentialsGrid';
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
      
      <main style={{ flex: 1, paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {/* Animated Hero Text */}
        <div style={{ padding: '1.5rem 1rem 0.5rem' }} className="animate-slide-down">
          <h1 className="h1" style={{ marginBottom: '0.5rem' }}>
            Essentials delivered in <br />
            <span style={{ color: 'var(--primary-green)' }}>5 minutes</span> on your seat.
          </h1>
          <p className="text-muted text-sm">No waiting. No missing trains.</p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          <LiveDetection />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
          <UpcomingCitySpecials onAddToCart={handleAddToCart} />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
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
