# Kế hoạch kiểm thử

Mỗi ca dùng hồ sơ trình duyệt riêng hoặc xóa `gdtc_fast_v2` trước khi chạy; chỉ dùng dữ liệu học sinh giả.

| ID | Ca kiểm thử | Kỳ vọng |
| --- | --- | --- |
| TC-01 | Chấm mới T/H/C | Mức, màu, thống kê và localStorage cùng cập nhật. |
| TC-02 | Chạm lại cùng mức | Mức được bỏ; bản ghi rỗng bị xóa. |
| TC-03 | Chấm hàng loạt rồi chấm lại một em | Hàng loạt đặt cùng mức; chấm lại chỉ đổi em được chọn. |
| TC-04 | Đổi lớp/ngày/tiết/nội dung | Bản ghi chỉ xuất hiện đúng ngữ cảnh khóa. |
| TC-05 | Bật tự chuyển | Sau chấm, cuộn đến em chưa chấm kế tiếp mà không đổi mức em khác. |
| TC-06 | Tải lại trang | Dữ liệu đã lưu còn nguyên. |
| TC-07 | Sửa danh sách lớp bản sao | Xác minh rõ dữ liệu cũ không bị gán sai; hiện tại đây là ca rủi ro cần theo dõi. |
| TC-08 | Backup/restore JSON | Backup hợp lệ khôi phục được; JSON sai bị từ chối; chỉ thử trên dữ liệu giả. |
| TC-09 | Excel/ZIP | Mở XLSX bằng Excel/LibreOffice; kiểm tra cột, sheet, số dòng và ZIP chứa các XLSX mong đợi. |
| TC-10 | Offline | Sau khi cache, tắt mạng và tải lại; giao diện vẫn mở được. |
| TC-11 | Tính toàn vẹn | Không phát sinh bản ghi lẫn lớp/ngày/tiết; tên lưu cùng bản ghi khớp danh sách tại thời điểm chấm. |

## Tự động hiện có

`npm test` chạy kiểm thử hợp đồng tĩnh: xác minh các điểm lưu trữ, khóa, bảo vệ clear-all, xuất/nhập và PWA vẫn tồn tại. Đây không thay thế kiểm thử UI trình duyệt hay kiểm tra tệp XLSX/ZIP thực tế.
