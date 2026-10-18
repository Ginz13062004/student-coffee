import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, CheckCircle } from 'lucide-react';

export default function CartModal() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [voucher, setVoucher] = useState('');
  const [discount, setDiscount] = useState(0);
  const [checkoutDone, setCheckoutDone] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyVoucher = () => {
    if (voucher.toUpperCase() === 'SINHVIEN20') {
      setDiscount(0.2);
    } else {
      alert('Mã giảm giá không hợp lệ! Thử mã "SINHVIEN20"');
    }
  };

  const finalTotal = totalPrice * (1 - discount);

  const handleCheckout = () => {
    setCheckoutDone(true);
    setTimeout(() => {
      clearCart();
      setCheckoutDone(false);
      setIsCartOpen(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl animate-in slide-in-from-right duration-300">
        <div>
          <div className="flex items-center justify-between border-b pb-4">
            <h3 className="font-bold text-xl text-stone-900">Giỏ Hàng Của Bạn</h3>
            <button onClick={() => setIsCartOpen(false)} className="p-1 text-stone-500 hover:text-stone-900 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {checkoutDone ? (
            <div className="text-center py-20 animate-fade-in-up">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-stone-900">Thanh Toán Thành Công!</h4>
              <p className="text-stone-500 mt-2">Đơn hàng đang được chuẩn bị.</p>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-20 text-stone-400">
              Giỏ hàng đang trống
            </div>
          ) : (
            <div className="mt-4 space-y-4 max-h-[55vh] overflow-y-auto pr-1">
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center space-x-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg" />
                    <div>
                      <h4 className="font-semibold text-sm text-stone-900">{item.name}</h4>
                      <span className="text-xs font-bold text-amber-600">
                        {item.price.toLocaleString('vi-VN')} đ
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1 bg-stone-100 hover:bg-stone-200 rounded transition-colors">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1 bg-stone-100 hover:bg-stone-200 rounded transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => removeFromCart(item.id)} className="p-1 text-red-500 hover:text-red-700 ml-1 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {!checkoutDone && cart.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex space-x-2 mb-4">
              <input
                type="text"
                placeholder="Mã giảm giá (SINHVIEN20)"
                value={voucher}
                onChange={e => setVoucher(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button onClick={handleApplyVoucher} className="px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white font-semibold text-sm rounded-xl transition-colors">
                Áp dụng
              </button>
            </div>

            <div className="space-y-2 text-sm text-stone-600 mb-4">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span>{totalPrice.toLocaleString('vi-VN')} đ</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Giảm giá (20%):</span>
                  <span>-{(totalPrice * discount).toLocaleString('vi-VN')} đ</span>
                </div>
              )}
              <div className="flex justify-between font-black text-lg text-stone-900 border-t pt-2">
                <span>Tổng cộng:</span>
                <span className="text-amber-600">{finalTotal.toLocaleString('vi-VN')} đ</span>
              </div>
            </div>

            <button onClick={handleCheckout} className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl shadow transition-all transform hover:scale-[1.01]">
              Thanh Toán Ngay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}