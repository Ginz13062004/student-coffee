import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Plus, Check } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const categories = [
    { id: 'all', name: 'Tất Cả' },
    { id: 'coffee', name: 'Cà Phê' },
    { id: 'tea', name: 'Trà & Trà Sữa' },
    { id: 'bakery', name: 'Bánh Ăn Nhẹ' },
    { id: 'combo', name: 'Combo Học Nhóm' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleAdd = (product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-extrabold text-stone-900">Thực Đơn Student Coffee</h2>
        <p className="mt-2 text-stone-600">Đồ uống ngon béo, bánh giòn rụm với mức giá phù hợp cho sinh viên.</p>
      </div>

      <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 overflow-x-auto pb-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
              activeCategory === cat.id
                ? 'bg-amber-600 text-white shadow'
                : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500" />
                {product.popular && (
                  <span className="absolute top-3 left-3 bg-amber-500 text-stone-950 font-extrabold text-xs px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    Best Seller
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-stone-900">{product.name}</h3>
                <p className="text-stone-500 text-sm mt-1 line-clamp-2">{product.description}</p>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between mt-auto">
              <span className="font-black text-amber-600 text-lg">
                {product.price.toLocaleString('vi-VN')} đ
              </span>
              <button
                onClick={() => handleAdd(product)}
                className={`p-2.5 rounded-xl transition-all flex items-center justify-center transform active:scale-95 ${
                  addedId === product.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-900 hover:bg-amber-600 text-white'
                }`}
              >
                {addedId === product.id ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}