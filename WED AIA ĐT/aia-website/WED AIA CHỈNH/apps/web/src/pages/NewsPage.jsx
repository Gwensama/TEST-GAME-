
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import NewsCard from '@/components/NewsCard.jsx';
import { Button } from '@/components/ui/button';

function NewsPage() {
  const news = [
    {
      image: 'https://images.unsplash.com/photo-1579532582937-16c108930bf6?auto=format&fit=crop&q=80',
      title: 'Lễ ra mắt sản phẩm bảo hiểm chăm sóc sức khỏe thế hệ mới',
      date: '15/04/2026',
      excerpt: 'Sự kiện giới thiệu giải pháp y tế tối ưu, mang lại quyền lợi vượt trội cùng mạng lưới bệnh viện liên kết trải dài toàn quốc.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80',
      title: 'Hội thảo tài chính: Xây dựng bến đỗ an toàn cho gia đình',
      date: '10/04/2026',
      excerpt: 'Cùng các chuyên gia hoạch định chiến lược tích lũy và bảo vệ, giúp gia đình bạn vững bước trước mọi thăng trầm cuộc sống.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1618650551428-199e32d38059?auto=format&fit=crop&q=80',
      title: 'Hành trình lan tỏa yêu thương cùng cộng đồng Đồng Tháp',
      date: '02/04/2026',
      excerpt: 'Chuỗi hoạt động thiện nguyện, khám bệnh miễn phí và trao học bổng thiết thực đến những hoàn cảnh khó khăn tại địa phương.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80',
      title: 'Hiểu đúng về bảo hiểm nhân thọ: Đừng đợi khi quá muộn',
      date: '28/03/2026',
      excerpt: 'Bài viết phân tích tầm quan trọng của việc tham gia bảo hiểm sớm, độ tuổi vàng để mua bảo hiểm với mức phí tốt nhất.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
      title: 'Vinh danh những Tư vấn viên xuất sắc quý I/2026',
      date: '20/03/2026',
      excerpt: 'Ghi nhận những đóng góp to lớn của đội ngũ chuyên viên tư vấn tài chính đã nỗ lực mang giải pháp bảo vệ đến từng gia đình.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80',
      title: 'Cập nhật danh sách bệnh viện bảo lãnh viện phí mới nhất',
      date: '15/03/2026',
      excerpt: 'AIA Đồng Tháp tiếp tục mở rộng liên kết với 5 bệnh viện tuyến trung ương, nâng tổng số cơ sở y tế bảo lãnh lên 320 điểm.',
      link: '#'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tin tức & Sự kiện - AIA Đồng Tháp</title>
        <meta name="description" content="Cập nhật tin tức, hoạt động cộng đồng và kiến thức bảo hiểm hữu ích từ AIA Đồng Tháp." />
      </Helmet>

      <main className="bg-secondary min-h-screen pb-24">
        {/* Page Header */}
        <section className="bg-white py-20 border-b border-border/50 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Tin tức & sự kiện
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Cập nhật những hoạt động nổi bật, kiến thức tài chính và câu chuyện lan tỏa yêu thương.
              </p>
            </motion.div>
          </div>
        </section>

        {/* News Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NewsCard {...item} />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" className="rounded-xl border-border px-8 h-12 text-base shadow-sm hover:shadow-soft transition-all">
              Tải thêm bài viết
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}

export default NewsPage;
