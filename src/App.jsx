import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Booking from './components/Booking';
import Reviews from './components/Reviews';
import CartModal from './components/CartModal';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col justify-between">
        <div>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {activeTab === 'home' && (
            <>
              <Hero setActiveTab={setActiveTab} />
              <Menu />
              <Booking />
              <Reviews />
            </>
          )}

          {activeTab === 'menu' && <Menu />}
          {activeTab === 'booking' && <Booking />}
          {activeTab === 'reviews' && <Reviews />}
        </div>

        <CartModal />
        <Footer />
      </div>
    </CartProvider>
  );
}