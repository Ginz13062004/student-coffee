import React from 'react';
import { Coffee, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 border-t border-stone-800 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 text-white font-bold text-lg mb-3">
            <Coffee className="w-5 h-5 text-amber-500" />
            <span>Student Coffee</span>
          </div>
          <p className="text-sm text-stone-400">
            Không gian học tập chuyên biệt kết hợp quán cà phê dành riêng cho sinh viên và giới trẻ.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Thông Tin Liên Hệ</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Gần các trường Đại học khu vực trung tâm</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-amber-500" />
              <span>0987 654 321</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-amber-500" />
              <span>contact@studentcoffee.vn</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Giờ Mở Cửa</h4>
          <p className="text-sm">Thứ 2 - Chủ Nhật: 07:00 - 23:00</p>
          <p className="text-xs text-amber-500 mt-2">* Mở cửa 24/7 vào các tuần thi học kỳ.</p>
        </div>
      </div>
      <div className="text-center text-xs text-stone-600 mt-8 border-t border-stone-800 pt-4">
        © 2026 Student Coffee. All rights reserved.
      </div>
    </footer>
  );
}