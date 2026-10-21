# Roadmap

## P0 — An toàn dữ liệu đánh giá

1. Chống ghi đè T/H/C ngoài ý muốn: xác nhận cho thao tác hàng loạt, hiển thị phạm vi và số bản ghi bị ảnh hưởng.
2. Nhật ký chỉnh sửa: lưu thời điểm, mức cũ/mới, nguồn thao tác; thiết kế giới hạn dung lượng.
3. Hoàn tác: hỗ trợ hoàn tác thao tác gần nhất, đặc biệt hàng loạt.
4. Khóa đánh giá sau khi hoàn thành lớp: trạng thái mở/khóa rõ ràng, có xác nhận mở lại.
5. Phát hiện dữ liệu bất thường: kiểm tra khóa trùng/lệch tên, mức không hợp lệ và bản ghi thiếu ngữ cảnh.
6. Định danh học sinh ổn định: migration từ `sid` sang ID bền vững, có sao lưu bắt buộc và tính tương thích lịch sử.
7. An toàn backup/restore: validate schema, xem trước thay đổi, tự backup trước restore và checksum/phiên bản.

## P1 — Kiểm thử và khả năng bảo trì

- Bổ sung Playwright cho ca UI với dữ liệu giả và kiểm tra XLSX/ZIP.
- Tách JavaScript khỏi `index.html` dần dần khi có test hồi quy; không đổi đường dẫn PWA đột ngột.
- Thêm hướng dẫn backup/khôi phục dành cho giáo viên.

## P2 — Trải nghiệm

- Cảnh báo ngữ cảnh chấm chưa đủ (lớp/ngày/tiết/nội dung).
- Tìm kiếm/lọc lịch sử và hỗ trợ xuất theo khoảng thời gian tốt hơn.
