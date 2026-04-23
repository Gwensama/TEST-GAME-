
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, LineChart, PiggyBank, Shield, Award, Headphones, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';
import NewsCard from '@/components/NewsCard.jsx';

function HomePage() {
  const products = [
    {
      icon: Heart,
      title: 'Bảo hiểm sức khỏe',
      description: 'Chăm sóc y tế toàn diện, bảo vệ bạn và gia đình trước mọi rủi ro bệnh tật với hệ thống bảo lãnh viện phí rộng khắp.',
      link: '/products'
    },
    {
      icon: LineChart,
      title: 'Bảo hiểm đầu tư',
      description: 'Kết hợp bảo vệ và gia tăng tài sản hiệu quả, giúp bạn chủ động nắm bắt cơ hội tài chính trong tương lai.',
      link: '/products'
    },
    {
      icon: PiggyBank,
      title: 'Bảo hiểm hưu trí',
      description: 'Hoạch định quỹ hưu trí vững chắc, mang đến tuổi xế chiều an nhàn, độc lập và đầy ắp niềm vui trọn vẹn.',
      link: '/products'
    },
    {
      icon: Shield,
      title: 'Bảo hiểm sinh mạng',
      description: 'Điểm tựa tài chính vững vàng cho người thân yêu, che chở gia đình trước những biến cố không lường trước.',
      link: '/products'
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Uy tín hàng đầu',
      description: 'Khẳng định vị thế qua nhiều thập kỷ, mang đến sự an tâm tuyệt đối cho hàng triệu khách hàng tin tưởng lựa chọn.'
    },
    {
      icon: Shield,
      title: 'Bảo vệ toàn diện',
      description: 'Đa dạng sản phẩm đáp ứng mọi nhu cầu ở từng giai đoạn cuộc sống, từ cá nhân đến bảo vệ cả gia đình.'
    },
    {
      icon: Headphones,
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ chuyên viên tận tâm luôn sẵn sàng lắng nghe, giải đáp thắc mắc và hỗ trợ giải quyết quyền lợi nhanh chóng.'
    },
    {
      icon: Rocket,
      title: 'Công nghệ hiện đại',
      description: 'Trải nghiệm dịch vụ số hóa liền mạch, thao tác hồ sơ trực tuyến thuận tiện ngay trên ứng dụng thông minh.'
    }
  ];

  const news = [
    {
      image: 'https://images.unsplash.com/photo-1579532582937-16c108930bf6?auto=format&fit=crop&q=80',
      title: 'Lễ ra mắt sản phẩm bảo hiểm chăm sóc sức khỏe thế hệ mới',
      date: '15/04/2026',
      excerpt: 'Sự kiện giới thiệu giải pháp y tế tối ưu, mang lại quyền lợi vượt trội cùng mạng lưới bệnh viện liên kết trải dài toàn quốc.',
      link: '/news'
    },
    {
      image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80',
      title: 'Hội thảo tài chính: Xây dựng bến đỗ an toàn cho gia đình',
      date: '10/04/2026',
      excerpt: 'Cùng các chuyên gia hoạch định chiến lược tích lũy và bảo vệ, giúp gia đình bạn vững bước trước mọi thăng trầm cuộc sống.',
      link: '/news'
    },
    {
      image: 'https://images.unsplash.com/photo-1618650551428-199e32d38059?auto=format&fit=crop&q=80',
      title: 'Hành trình lan tỏa yêu thương cùng cộng đồng Đồng Tháp',
      date: '02/04/2026',
      excerpt: 'Chuỗi hoạt động thiện nguyện, khám bệnh miễn phí và trao học bổng thiết thực đến những hoàn cảnh khó khăn tại địa phương.',
      link: '/news'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Trang chủ - AIA Đồng Tháp</title>
        <meta name="description" content="Giải pháp bảo hiểm toàn diện từ AIA Đồng Tháp. Bảo vệ tương lai cho những người bạn yêu thương." />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1532377416656-e35d0e574765?auto=format&fit=crop&q=80" 
              alt="Gia đình hạnh phúc"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
                Bảo vệ tương lai cho những người bạn yêu thương
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-10 font-medium">
                Giải pháp bảo hiểm toàn diện từ AIA Đồng Tháp
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-base rounded-xl transition-all duration-300">
                    Tìm hiểu sản phẩm
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 h-14 px-8 text-base rounded-xl transition-all duration-300">
                    Tư vấn miễn phí
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sản phẩm bảo hiểm
              </h2>
              <p className="text-lg text-muted-foreground">
                Giải pháp bảo hiểm phù hợp với mọi nhu cầu
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {products.map((product, idx) => (
                <ProductCard key={idx} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tại sao chọn AIA Đồng Tháp
              </h2>
              <p className="text-lg text-muted-foreground">
                Điểm tựa tin cậy cho hàng triệu gia đình Việt Nam
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {benefits.map((benefit, idx) => (
                <BenefitCard key={idx} {...benefit} />
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-16 gap-6">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Tin tức & sự kiện
                </h2>
                <p className="text-lg text-muted-foreground">
                  Cập nhật những hoạt động mới nhất từ chúng tôi
                </p>
              </div>
              <Link to="/news">
                <Button variant="outline" className="rounded-xl border-border">
                  Xem tất cả tin tức
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item, idx) => (
                <NewsCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-br from-primary to-[#ff7a90] py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
              Sẵn sàng bảo vệ tương lai?
            </h2>
            <p className="text-xl text-white/90 mb-10 font-medium">
              Liên hệ với chúng tôi ngay hôm nay để nhận giải pháp tối ưu
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-50 text-lg h-14 px-10 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                Tư vấn miễn phí
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
