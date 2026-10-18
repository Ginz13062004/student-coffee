import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviewsList = [
    {
      id: 1,
      name: "Trần Minh Quân",
      role: "Sinh viên CNTT năm 3",
      comment: "Quán cực kỳ yên tĩnh, ổ cắm điện đầy đủ dưới chân bàn. Mình hay chạy code và làm đồ án nhóm ở đây, nhân viên thân thiện và giá nước rất hợp túi tiền sinh viên.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 2,
      name: "Lê Thị Thảo",
      role: "Sinh viên Kinh tế",
      comment: "Trà sữa matcha đậu đỏ ngon xuất sắc! Không gian có khu vực ngồi học nhóm riêng tư rất tiện để thảo luận slide thuyết trình mà không sợ ảnh hưởng ai.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 3,
      name: "Nguyễn Hoàng Nam",
      role: "Freelancer Designer",
      comment: "Wifi siêu mạnh, máy lạnh mát rượi. Mình ngồi từ sáng đến chiều chạy Deadline cực kỳ thoải mái. Rất recommend quán cho các bạn trẻ!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">Phản hồi thực tế</span>
        <h2 className="text-3xl font-extrabold text-stone-900 mt-1">Sinh Viên Nói Gì Về Student Coffee?</h2>
        <p className="text-stone-600 mt-2">Đánh giá chân thực từ những khách hàng thân thiết đã trải nghiệm không gian của chúng tôi.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviewsList.map(item => (
          <div key={item.id} className="product-card bg-white p-8 rounded-3xl border border-stone-200 shadow-sm relative flex flex-col justify-between">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-200" />
            <div>
              <div className="flex space-x-1 text-amber-500 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 italic text-sm leading-relaxed">"{item.comment}"</p>
            </div>

            <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-stone-100">
              <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-amber-500" />
              <div>
                <h4 className="font-bold text-stone-900 text-sm">{item.name}</h4>
                <span className="text-xs text-stone-500">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}