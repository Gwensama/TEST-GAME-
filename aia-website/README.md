# AIA Việt Nam Website Clone

Website clone của AIA Việt Nam với đầy đủ tính năng responsive và tương tác.

## Tính năng

- **Responsive Design**: Tương thích với tất cả thiết bị
- **Hero Slider**: Slider tự động với indicators
- **Hamburger Menu**: Menu di động cho mobile
- **Stats Counter**: Animation đếm số liệu
- **Smooth Scrolling**: Cuộn mượt mà
- **Form Validation**: Xác thực form
- **Scroll Animations**: Animation khi cuộn

## Cấu trúc file

```
aia-website/
├── index.html      # File HTML chính
├── style.css       # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # Tài liệu này
```

## Cách chạy

1. Mở file `index.html` trong trình duyệt web
2. Hoặc sử dụng server local:
   ```bash
   python -m http.server 8000
   ```
   Sau đó truy cập `http://localhost:8000`

## Công nghệ sử dụng

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+ Classes)
- Font Awesome Icons
- Google Fonts (Roboto)

## Tính năng tương tác

- **Hero Slider**: Tự động chuyển slide mỗi 5 giây, có thể click indicators
- **Mobile Menu**: Click hamburger icon để mở menu trên mobile
- **Stats Animation**: Số liệu tự động đếm khi scroll đến section
- **Smooth Scroll**: Click menu items để cuộn mượt mà đến section
- **Form Validation**: Xác thực email và required fields

## Responsive Breakpoints

- Desktop: > 768px
- Tablet: 768px - 480px
- Mobile: < 480px

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Phát triển thêm

Để thêm tính năng mới:

1. Thêm HTML structure vào `index.html`
2. Thêm CSS styles vào `style.css`
3. Thêm JavaScript logic vào `script.js`
4. Test trên các thiết bị khác nhau

## License

Dự án này chỉ để mục đích học tập và demo.