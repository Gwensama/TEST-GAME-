
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

function LoginPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Đăng nhập thành công!",
        description: "Chào mừng bạn quay lại hệ thống.",
      });
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Đăng nhập - AIA Đồng Tháp</title>
        <meta name="description" content="Đăng nhập tài khoản khách hàng AIA Đồng Tháp." />
      </Helmet>

      <main className="min-h-screen bg-secondary flex items-center justify-center py-20 px-4 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="w-full max-w-md bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-border/50 relative z-10">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">Đăng nhập</h1>
            <p className="text-muted-foreground">Quản lý hợp đồng bảo hiểm của bạn</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email / Số điện thoại</Label>
              <Input 
                id="email" 
                type="text" 
                required 
                placeholder="Nhập email hoặc số điện thoại" 
                className="h-12 bg-secondary/50 border-border/50 focus-visible:ring-primary focus-visible:ring-offset-0" 
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mật khẩu</Label>
                <Link to="#" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                  Quên mật khẩu?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                placeholder="••••••••" 
                className="h-12 bg-secondary/50 border-border/50 focus-visible:ring-primary focus-visible:ring-offset-0" 
              />
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-xl text-base shadow-sm transition-all"
            >
              {loading ? "Đang xử lý..." : "Đăng nhập"}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Chưa có tài khoản?{' '}
            <Link to="/contact" className="font-medium text-primary hover:text-accent transition-colors">
              Liên hệ mở tài khoản
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
