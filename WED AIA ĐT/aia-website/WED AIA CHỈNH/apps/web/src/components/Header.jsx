
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { name: 'Sản phẩm', path: '/products' },
    { name: 'Sức Khỏe', path: '/products#health' },
    { name: 'AIA Elite', path: '/about#elite' },
    { name: 'Dịch Vụ', path: '/services' },
    { name: 'Về Chúng Tôi', path: '/about' },
    { name: 'Trợ Giúp', path: '/contact' },
    { name: 'Thanh Toán Phí Bảo Hiểm', path: '/payment' },
  ];

  // Handle scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const isActive = (path) => {
    if (path.includes('#')) {
      return location.pathname + location.hash === path;
    }
    return location.pathname === path && path !== '/';
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${scrolled ? 'shadow-header' : ''}`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 h-[70px] md:h-[80px] flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/logo-aia.png"
            alt="AIA Đồng Tháp"
            width={40}
            height={40}
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl md:text-2xl font-bold text-primary tracking-tight whitespace-nowrap">
            AIA Đồng Tháp
          </span>
        </Link>

        {/* Desktop Menu Items */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-[15px] font-medium transition-colors duration-300 whitespace-nowrap ${
                isActive(item.path)
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Elements (Desktop & Tablet) */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          
          {/* Search Toggle */}
          <div className="relative flex items-center justify-end min-w-[40px]">
            {isSearchOpen ? (
              <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-300">
                <Input 
                  ref={searchInputRef}
                  placeholder="Tìm kiếm..." 
                  className="w-48 lg:w-64 rounded-lg border-border/60 h-10 text-sm focus-visible:ring-primary shadow-sm"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/5"
                  aria-label="Đóng tìm kiếm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)} 
                className="p-2 text-primary hover:bg-primary/10 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Mở tìm kiếm"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Action Buttons (Hide when search is open on smaller screens to save space) */}
          <div className={`flex items-center gap-4 transition-all duration-300 ${isSearchOpen ? 'hidden lg:flex' : 'flex'}`}>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white rounded-lg px-5 h-10 transition-all duration-300 font-medium"
            >
              AIA+
            </Button>
            <Link to="/contact">
              <Button 
                className="bg-primary text-white hover:bg-[#D44C64] rounded-lg px-5 h-10 transition-all duration-300 shadow-sm font-medium"
              >
                Liên hệ
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Menu (< 768px hidden, shown on small) */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
              <Menu className="w-7 h-7" />
              <span className="sr-only">Mở menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-6 flex flex-col">
            <SheetHeader className="mb-6 text-left">
              <SheetTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path d="M50 15L15 80h18l17-32 17 32h18L50 15z" fill="currentColor"/>
                  <circle cx="70" cy="35" r="10" fill="currentColor"/>
                </svg>
                AIA Đồng Tháp
              </SheetTitle>
            </SheetHeader>
            
            <div className="relative mb-8">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Tìm kiếm..." 
                className="w-full pl-9 rounded-lg border-border/60 h-11 text-sm focus-visible:ring-primary bg-secondary/30"
              />
            </div>

            <nav className="flex flex-col gap-4 overflow-y-auto pb-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors duration-300 py-2 border-b border-border/30 ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-border/50">
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary/5 rounded-lg h-12 text-base transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AIA+
              </Button>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  className="w-full bg-primary text-white hover:bg-[#D44C64] rounded-lg h-12 text-base transition-all duration-300 shadow-sm"
                >
                  Liên hệ
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        
      </div>
    </header>
  );
}

export default Header;
