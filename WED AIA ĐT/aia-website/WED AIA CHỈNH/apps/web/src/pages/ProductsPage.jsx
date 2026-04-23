
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, LineChart, PiggyBank, Shield, CheckCircle2 } from 'lucide-react';

function ProductsPage() {
  const products = [
    {
      id: "health",
      icon: Heart,
      title: "Bảo hiểm sức khỏe",
      description: "Quỹ chăm sóc y tế dự phòng toàn diện, giúp bạn và gia đình an tâm điều trị tại các cơ sở y tế hàng đầu mà không lo gánh nặng chi phí.",
      image: "https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3?auto=format&fit=crop&q=80",
      features: [
        "Bảo lãnh viện phí tại hơn 300 bệnh viện/phòng khám",
        "Chi trả quyền lợi nội trú, ngoại trú và nha khoa",
        "Hỗ trợ chi phí điều trị bệnh hiểm nghèo",
        "Gia hạn hợp đồng hàng năm linh hoạt"
      ]
    },
    {
      id: "investment",
      icon: LineChart,
      title: "Bảo hiểm đầu tư",
      description: "Giải pháp tài chính 2 trong 1: vừa bảo vệ sinh mạng an toàn, vừa ủy thác đầu tư sinh lời thông qua các quỹ chuyên nghiệp.",
      image: "https://images.unsplash.com/photo-1644995520656-e9b9a807ffbe?auto=format&fit=crop&q=80",
      features: [
        "Tham gia vào các quỹ đầu tư đa dạng",
        "Linh hoạt thay đổi danh mục đầu tư theo nhu cầu",
        "Quyền lợi bảo vệ sinh mạng mệnh giá cao",
        "Thưởng duy trì hợp đồng định kỳ"
      ]
    },
    {
      id: "retirement",
      icon: PiggyBank,
      title: "Bảo hiểm hưu trí",
      description: "Kế hoạch tài chính dài hạn đảm bảo thu nhập ổn định khi về hưu, giúp bạn tận hưởng cuộc sống độc lập, tự chủ trọn vẹn.",
      image: "https://images.unsplash.com/photo-1685995833594-8c35ffa8ccb0?auto=format&fit=crop&q=80",
      features: [
        "Nhận lương hưu định kỳ khi đến tuổi nghỉ hưu",
        "Hưởng lãi suất cam kết tối thiểu từ quỹ hưu trí",
        "Miễn đóng phí khi rủi ro mất khả năng lao động",
        "Linh hoạt chọn thời điểm bắt đầu nhận quyền lợi"
      ]
    },
    {
      id: "life",
      icon: Shield,
      title: "Bảo hiểm sinh mạng",
      description: "Cam kết bảo vệ tài chính vững chắc nhất, đóng vai trò như người trụ cột thứ hai che chở cho những người thân yêu khi biến cố xảy ra.",
      image: "https://images.unsplash.com/photo-1602501415685-38483eded181?auto=format&fit=crop&q=80",
      features: [
        "Chi trả 100% số tiền bảo hiểm khi tử vong/thương tật",
        "Bảo vệ dài hạn với mức phí hợp lý và cố định",
        "Quyền lợi ứng trước nếu mắc bệnh nan y giai đoạn cuối",
        "Gắn kết thêm các quyền lợi bổ trợ dễ dàng"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sản phẩm bảo hiểm - AIA Đồng Tháp</title>
        <meta name="description" content="Chi tiết các gói sản phẩm bảo hiểm sức khỏe, đầu tư, hưu trí và sinh mạng từ AIA Đồng Tháp." />
      </Helmet>

      <main className="bg-secondary min-h-screen">
        {/* Page Header */}
        <section className="bg-white py-20 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Sản phẩm bảo hiểm
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Khám phá danh mục giải pháp toàn diện, được thiết kế riêng nhằm bảo vệ mọi cột mốc quan trọng trong cuộc đời bạn.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Details Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {products.map((product, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={product.id} className={`flex flex-col lg:flex-row gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative rounded-3xl overflow-hidden shadow-soft group">
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-border/50 flex items-center justify-center mb-6">
                        <product.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                        {product.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {product.description}
                      </p>

                      <div className="space-y-4 mb-10">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                            <span className="text-foreground pt-0.5">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to="/contact">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl h-14 px-8 text-base shadow-soft transition-all hover:-translate-y-1">
                          Tư vấn ngay
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductsPage;
