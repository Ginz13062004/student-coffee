import React, { useState } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2-4'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-lg">
        <div className="text-center max-w-lg mx-auto mb-8">
          <h2 className="text-3xl font-extrabold text-stone-900">Đặt Bàn / Phòng Học Nhóm</h2>
          <p className="mt-2 text-stone-600 text-sm">Đặt trước chỗ ngồi để đảm bảo luôn có ổ cắm điện và không gian yên tĩnh.</p>
        </div>

        {submitted ? (
          <div className="text-center py-12 animate-fade-in-up">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-stone-900">Đặt Bàn Thành Công!</h3>
            <p className="text-stone-600 mt-2">Chúng tôi đã nhận được thông tin. Nhân viên Student Coffee sẽ gọi xác nhận trong 5 phút.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-2.5 bg-stone-900 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors"
            >
              Đặt Bàn Khác
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Họ và Tên</label>
                <input
                  type="text"
                  required
                  placeholder="Nguyễn Văn A"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Số Điện Thoại</label>
                <input
                  type="tel"
                  required
                  placeholder="0987654321"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Ngày Đặt</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Giờ Đến</label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={e => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Số Lượng Người</label>
                <select
                  value={formData.guests}
                  onChange={e => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                >
                  <option value="1">Cá nhân (1 người)</option>
                  <option value="2-4">Nhóm nhỏ (2 - 4 người)</option>
                  <option value="5-8">Nhóm lớn (5 - 8 người)</option>
                  <option value="phong-kin">Phòng họp kín (Tối đa 15 người)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl shadow-md transition-all text-base transform hover:scale-[1.01] active:scale-[0.99]"
            >
              Xác Nhận Đặt Chỗ
            </button>
          </form>
        )}
      </div>
    </div>
  );
}