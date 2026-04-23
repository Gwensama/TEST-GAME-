
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Eye, Target } from 'lucide-react';

function AboutPage() {
  const team = [
    {
      name: "Nguyễn Thị Lan",
      position: "Giám đốc Văn phòng",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    {
      name: "Trần Minh Tuấn",
      position: "Trưởng phòng Kinh doanh",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
    },
    {
      name: "Lê Hoàng Yến",
      position: "Chuyên viên Tư vấn cấp cao",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Về AIA Đồng Tháp</title>
        <meta name="description" content="Tìm hiểu sứ mệnh, tầm nhìn và đội ngũ tận tâm của AIA Đồng Tháp." />
      </Helmet>

      <main className="bg-white min-h-screen">
        {/* Page Header */}
        <section className="bg-secondary py-20 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Về AIA Đồng Tháp
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Kiến tạo cuộc sống Khỏe mạnh hơn, Lâu dài hơn, Hạnh phúc hơn cho người dân Đồng Tháp.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1613186267015-46dc938f2b8f?auto=format&fit=crop&q=80" 
                alt="Đội ngũ AIA Đồng Tháp"
                className="w-full rounded-3xl shadow-soft object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Câu chuyện của chúng tôi</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ra đời với khát vọng bảo vệ sự bình an cho mọi gia đình, AIA Đồng Tháp tự hào là địa chỉ tin cậy, nơi khách hàng trao gửi niềm tin về một tương lai tài chính vững chắc. Chúng tôi thấu hiểu rằng đằng sau mỗi hợp đồng là tình yêu thương vô bờ bến dành cho người thân.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Đội ngũ của chúng tôi không chỉ là những tư vấn viên, mà là những người bạn đồng hành thấu cảm, luôn kề vai sát cánh cùng bạn vượt qua mọi cột mốc thăng trầm của cuộc sống.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-3xl shadow-soft">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Tầm nhìn</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Trở thành doanh nghiệp bảo hiểm nhân thọ tiên phong, được tin yêu nhất tại Đồng Tháp nhờ dịch vụ xuất sắc và trải nghiệm khách hàng vượt trội.
                </p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-soft">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Sứ mệnh</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Bảo vệ sự bình an tài chính cho hàng vạn gia đình, đóng góp tích cực vào sự phát triển cộng đồng và xã hội tại địa phương.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Đội ngũ nòng cốt
              </h2>
              <p className="text-lg text-muted-foreground">
                Những con người nhiệt huyết, tận tâm và chuyên nghiệp
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="bg-card rounded-3xl p-6 border border-border/50 text-center hover:shadow-soft transition-all">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
