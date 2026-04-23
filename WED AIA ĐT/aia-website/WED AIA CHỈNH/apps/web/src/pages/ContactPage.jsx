
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Gửi tin nhắn thành công!",
        description: "Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.",
      });
      e.target.reset();
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Liên hệ - AIA Đồng Tháp</title>
        <meta name="description" content="Kết nối với AIA Đồng Tháp để nhận tư vấn giải pháp bảo hiểm tối ưu." />
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
                Liên hệ với chúng tôi
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Đội ngũ chuyên viên AIA Đồng Tháp luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-border/50">
                <h2 className="font-display text-2xl font-bold mb-8 text-foreground">Thông tin liên hệ</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Văn phòng chính</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        123 Nguyễn Huệ, Phường 2, TP. Cao Lãnh, Tỉnh Đồng Tháp
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Điện thoại</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        1900 1234
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        lienhe@aiadongthap.vn
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-200 rounded-3xl aspect-video flex items-center justify-center border border-border/50 overflow-hidden">
                <p className="text-slate-500 font-medium">Bản đồ (Google Maps Embed)</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-border/50">
                <h2 className="font-display text-2xl font-bold mb-8 text-foreground">Gửi lời nhắn</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và tên *</Label>
                      <Input id="name" required placeholder="Nguyễn Văn A" className="h-12 bg-secondary/50 border-border/50 focus-visible:ring-primary focus-visible:ring-offset-0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại *</Label>
                      <Input id="phone" type="tel" required placeholder="0912 345 678" className="h-12 bg-secondary/50 border-border/50 focus-visible:ring-primary focus-visible:ring-offset-0" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@email.com" className="h-12 bg-secondary/50 border-border/50 focus-visible:ring-primary focus-visible:ring-offset-0" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Chủ đề quan tâm</Label>
                    <Input id="subject" placeholder="Bảo hiểm sức khỏe, Đầu tư..." className="h-12 bg-secondary/50 border-border/50 focus-visible:ring-primary focus-visible:ring-offset-0" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nội dung tin nhắn *</Label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="Nhập nội dung bạn muốn chia sẻ..." 
                      className="min-h-[150px] resize-none bg-secondary/50 border-border/50 focus-visible:ring-primary focus-visible:ring-offset-0" 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-xl text-base shadow-sm transition-all"
                  >
                    {loading ? "Đang gửi..." : "Gửi tin nhắn"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
