
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

function Footer() {
  const products = [
    { name: 'Bảo hiểm sức khỏe', path: '/products' },
    { name: 'Bảo hiểm đầu tư', path: '/products' },
    { name: 'Bảo hiểm hưu trí', path: '/products' },
    { name: 'Bảo hiểm sinh mạng', path: '/products' },
  ];

  const services = [
    { name: 'Tư vấn', path: '/contact' },
    { name: 'Hỗ trợ', path: '/contact' },
    { name: 'Tài liệu', path: '/about' },
    { name: 'Cộng đồng', path: '/news' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1 */}
          <div className="space-y-6">
            <span className="text-2xl font-display font-bold text-white">
              AIA Đồng Tháp
            </span>
            <p className="text-slate-400 leading-relaxed text-sm">
              Đồng hành cùng bạn trên hành trình bảo vệ tương lai với các giải pháp bảo hiểm toàn diện, uy tín và thấu cảm.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-display font-semibold text-white mb-6">Sản phẩm</h3>
            <ul className="space-y-4">
              {products.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-400 hover:text-accent transition-colors duration-300 text-sm font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-display font-semibold text-white mb-6">Dịch vụ</h3>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-400 hover:text-accent transition-colors duration-300 text-sm font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-display font-semibold text-white mb-6">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="mt-0.5">1900 1234</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="mt-0.5">lienhe@aiadongthap.vn</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="mt-0.5 leading-relaxed">123 Nguyễn Huệ, P.2, TP. Cao Lãnh, Đồng Tháp</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} AIA Đồng Tháp. Đã đăng ký bản quyền.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-accent transition-colors">Bảo mật</Link>
            <Link to="#" className="hover:text-accent transition-colors">Điều khoản</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
