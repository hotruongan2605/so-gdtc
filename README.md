# Sổ GDTC – Ghi nhanh

PWA tĩnh để ghi nhanh đánh giá GDTC T/H/C. Xem [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md), [ARCHITECTURE.md](ARCHITECTURE.md) và [TEST_PLAN.md](TEST_PLAN.md) trước khi phát triển.

## Chạy cục bộ

Ứng dụng là trang tĩnh. Phục vụ thư mục này bằng một HTTP server cục bộ rồi mở `index.html`; Service Worker chỉ đăng ký qua HTTPS. Không dùng dữ liệu học sinh thật khi thử nghiệm.

## Kiểm thử

```powershell
npm test
```

Kiểm thử hiện tại là test hợp đồng nguồn; checklist UI/backup/xuất tệp nằm ở `TEST_PLAN.md`.
