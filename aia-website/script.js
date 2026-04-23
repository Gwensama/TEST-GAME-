// Hero Slider Functionality
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.slider-prev');
        this.nextBtn = document.querySelector('.slider-next');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.init();
    }

    init() {
        if(this.slides.length === 0) return;
        this.showSlide(0);
        this.startAutoSlide();
        this.addEventListeners();
    }

    showSlide(index) {
        if (index >= this.slides.length) index = 0;
        else if (index < 0) index = this.slides.length - 1;

        this.slides.forEach(slide => slide.classList.remove('active'));
        this.indicators.forEach(indicator => indicator.classList.remove('active'));

        this.slides[index].classList.add('active');
        if (this.indicators[index]) this.indicators[index].classList.add('active');
        this.currentSlide = index;
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex);
        this.restartAutoSlide();
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
        this.restartAutoSlide();
    }

    startAutoSlide() {
        this.slideInterval = setInterval(() => {
            const nextIndex = (this.currentSlide + 1) % this.slides.length;
            this.showSlide(nextIndex);
        }, 5000);
    }

    stopAutoSlide() {
        clearInterval(this.slideInterval);
    }

    restartAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }

    addEventListeners() {
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.showSlide(index);
                this.restartAutoSlide();
            });
        });

        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());

        const hero = document.querySelector('.hero');
        if (hero) {
            hero.addEventListener('mouseenter', () => this.stopAutoSlide());
            hero.addEventListener('mouseleave', () => this.startAutoSlide());
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }
}

// Hamburger Menu
class HamburgerMenu {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-menu a');
        this.init();
    }

    init() {
        if (!this.hamburger || !this.navMenu) return;
        this.hamburger.addEventListener('click', () => this.toggleMenu());
        this.navLinks.forEach(link => link.addEventListener('click', () => this.closeMenu()));
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) this.closeMenu();
        });
    }

    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

// Stats Counter
class StatsCounter {
    constructor() {
        this.stats = document.querySelectorAll('.stat-number');
        this.animated = false;
        this.init();
    }

    init() {
        if (this.stats.length === 0) return;
        const statsSection = document.querySelector('.stats');
        if (!statsSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animateCounters();
                    this.animated = true;
                }
            });
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }

    animateCounters() {
        this.stats.forEach(stat => {
            const target = parseInt(stat.textContent.replace(/,/g, '').replace(/\D/g, ''));
            if (!isNaN(target)) this.animateNumber(stat, 0, target, 2000);
        });
    }

    animateNumber(element, start, end, duration) {
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(start + (end - start) * progress);
            element.textContent = current.toLocaleString();
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }
}

// Smooth Scrolling
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]:not([href="#contact"])').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
}

// TÍNH NĂNG ẨN/HIỆN LIÊN HỆ
class ContactToggle {
    constructor() {
        this.contactSection = document.getElementById('contact');
        this.closeBtn = document.getElementById('closeContact');
        this.triggerLinks = document.querySelectorAll('a[href="#contact"]');
        this.init();
    }

    init() {
        if (!this.contactSection) return;

        this.triggerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.contactSection.classList.add('show-contact');
                setTimeout(() => {
                    this.contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            });
        });

        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => {
                this.contactSection.style.opacity = '0';
                setTimeout(() => {
                    this.contactSection.classList.remove('show-contact');
                    this.contactSection.style.opacity = '';
                }, 500);
            });
        }
    }
}

// Khởi động tất cả Class một cách an toàn
document.addEventListener('DOMContentLoaded', () => {
    try {
        new HeroSlider();
        new HamburgerMenu();
        new StatsCounter();
        new SmoothScroll();
        new ContactToggle();
        
        // Đảm bảo body luôn hiển thị kể cả khi có lỗi
        document.body.style.opacity = '1'; 
    } catch (error) {
        console.error("Có lỗi xảy ra trong JS:", error);
        document.body.style.opacity = '1'; // Vẫn hiện web nếu lỗi
    }
});