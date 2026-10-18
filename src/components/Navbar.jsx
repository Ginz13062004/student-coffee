import React from 'react';
import { ShoppingBag, Coffee, Calendar, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar({ activeTab, setActiveTab }) {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <nav className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-white border-b border-stone-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="p-2 bg-amber-600 rounded-lg text-white">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-amber-500">Student</span>
              <span className="font-semibold text-xl text-stone-200"> Coffee</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <button onClick={() => setActiveTab('home')} className={`hover:text-amber-500 transition-colors ${activeTab === 'home' ? 'text-amber-500 font-bold' : 'text-stone-300'}`}>
              Trang Chủ
            </button>
            <button onClick={() => setActiveTab('menu')} className={`hover:text-amber-500 transition-colors ${activeTab === 'menu' ? 'text-amber-500 font-bold' : 'text-stone-300'}`}>
              Thực Đơn
            </button>
            <button onClick={() => setActiveTab('booking')} className={`hover:text-amber-500 transition-colors ${activeTab === 'booking' ? 'text-amber-500 font-bold' : 'text-stone-300'}`}>
              Đặt Bàn Nhóm
            </button>
            <button onClick={() => setActiveTab('reviews')} className={`hover:text-amber-500 transition-colors ${activeTab === 'reviews' ? 'text-amber-500 font-bold' : 'text-stone-300'}`}>
              Đánh Giá Sinh Viên
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-stone-300 hover:text-white transition-colors bg-stone-800 rounded-full hover:bg-stone-700">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-stone-950 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setActiveTab('booking')} className="hidden sm:inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold rounded-lg text-sm transition-all">
              <Calendar className="w-4 h-4 mr-2" />
              Đặt Bàn Học
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}