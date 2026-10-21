# Changelog

Lịch sử dưới đây chỉ ghi điều có thể quan sát từ repository công khai tại thời điểm bàn giao.

## Unreleased — Bàn giao Codex

- Thêm tài liệu bối cảnh, kiến trúc, quy tắc làm việc, roadmap và kế hoạch kiểm thử.
- Thêm kiểm thử hợp đồng nguồn không phụ thuộc bên ngoài.

## 2.4.0-safe — 2026-10-21

- Bảo vệ đổi/xóa T/H/C và chấm hàng loạt bằng xác nhận theo phạm vi.
- Thêm nhật ký chỉnh sửa lưu cục bộ, xuất CSV và hoàn tác trong 30 giây.
- Giữ lựa chọn chủ đề/bài/nội dung qua các lần render không liên quan.
- Tăng version cache Service Worker để PWA nhận bản mới sau lần kiểm tra cập nhật/tải lại.

## Nguồn xác minh

- Nhánh mặc định: `main`.
- Repository công khai hiển thị mã nguồn PWA gồm `index.html`, `sw.js`, `manifest.webmanifest`, `icon.svg`.
- Lịch sử commit đầy đủ chưa được tải về máy do Git cục bộ thiếu `remote-https`; không suy diễn số phiên bản hay nội dung commit cũ.
