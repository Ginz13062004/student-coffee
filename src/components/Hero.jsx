import React from 'react';
import { Wifi, Zap, Users, ArrowRight } from 'lucide-react';

export default function Hero({ setActiveTab }) {
  return (
    <div className="relative bg-stone-900 text-white overflow-hidden py-16 sm:py-24 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-semibold tracking-wide uppercase">
              Không gian chạy deadline #1 Sinh Viên
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-stone-100 leading-tight">
              Học Tập Tập Trung <br />
              <span className="text-amber-500">Kết Nối Thành Công</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-400 leading-relaxed">
              Student Coffee không chỉ mang đến những ly cà phê ngon bổ rẻ mà còn cung cấp không gian học tập yên tĩnh, trang bị đầy đủ ổ cắm điện, Wifi tốc độ cao và phòng thảo luận nhóm.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => setActiveTab('menu')} className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-lg transition-all flex items-center transform hover:scale-105">
                Khám Phá Menu <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button onClick={() => setActiveTab('booking')} className="px-6 py-3 border border-stone-700 hover:border-amber-500 text-stone-300 hover:text-amber-400 font-semibold rounded-xl transition-all">
                Đặt Phòng Học Nhóm
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-stone-800 pt-6">
              <div className="flex items-center space-x-2">
                <Wifi className="w-5 h-5 text-amber-500" />
                <span className="text-xs text-stone-300 font-medium">Wifi 500Mbps</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <span className="text-xs text-stone-300 font-medium">Ổ cắm từng bàn</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-amber-500" />
                <span className="text-xs text-stone-300 font-medium">Phòng nhóm kín</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=1000"
                alt="Student Coffee Space"
                className="w-full h-96 object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}