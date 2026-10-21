# Kế hoạch kiểm thử

Mỗi ca dùng hồ sơ trình duyệt riêng hoặc xóa `gdtc_fast_v2` trước khi chạy; chỉ dùng dữ liệu học sinh giả.

| ID | Ca kiểm thử | Kỳ vọng |
| --- | --- | --- |
| TC-01 | Chấm mới T/H/C | Mức, màu, thống kê và localStorage cùng cập nhật. |
| TC-02 | Chạm lại cùng mức | Giữ nguyên mức; không xóa và không phát sinh nhật ký. |
| TC-03 | Đổi mức đã có | Hiện xác nhận với học sinh/lớp/mức cũ-mới; hủy không thay đổi dữ liệu hay nhật ký. |
| TC-03b | Xóa đánh giá | Dùng thao tác riêng, có xác nhận; chỉ xóa đúng record key. |
| TC-03c | Chấm hàng loạt | Khi có mức khác, chỉ chấm chưa đánh giá hoặc xác nhận rõ trước ghi đè. |
| TC-04 | Đổi lớp/ngày/tiết/nội dung | Bản ghi chỉ xuất hiện đúng ngữ cảnh khóa. |
| TC-05 | Bật tự chuyển | Sau chấm, cuộn đến em chưa chấm kế tiếp mà không đổi mức em khác. |
| TC-06 | Tải lại trang | Dữ liệu, lớp/ngày/tiết/chủ đề/bài/nội dung và nhật ký đã lưu còn nguyên. |
| TC-07 | Sửa danh sách lớp bản sao | Xác minh rõ dữ liệu cũ không bị gán sai; hiện tại đây là ca rủi ro cần theo dõi. |
| TC-08 | Backup/restore JSON | Backup hợp lệ khôi phục được; JSON sai bị từ chối; chỉ thử trên dữ liệu giả. |
| TC-09 | Excel/ZIP | Mở XLSX bằng Excel/LibreOffice; kiểm tra cột, sheet, số dòng và ZIP chứa các XLSX mong đợi. |
| TC-10 | Offline | Sau khi cache, tắt mạng và tải lại; giao diện vẫn mở được. |
| TC-11 | Tính toàn vẹn | Không phát sinh bản ghi lẫn lớp/ngày/tiết; tên lưu cùng bản ghi khớp danh sách tại thời điểm chấm. |
| TC-12 | Một tiết, nhiều bài | Bỏ chấm hàng loạt xóa đúng tất cả record key cùng ngày/lớp/tiết, không đụng tiết/lớp khác. |
| TC-13 | Đổi ngữ cảnh khi hộp thoại mở | Xác nhận cũ phải bị từ chối; không áp dụng sang lớp/ngày/tiết/bài mới. |
| TC-14 | Lỗi localStorage | Mô phỏng lỗi ghi: đánh giá và nhật ký cùng được rollback, UI không báo đã lưu. |
| TC-15 | Hoàn tác | Kiểm tra chấm mới, đổi mức, xóa và hàng loạt; từ chối nếu record có thay đổi mới hoặc sai ngữ cảnh. |

## Tự động hiện có

`npm test` chạy kiểm thử hợp đồng nguồn và các bất biến an toàn: selection rỗng, record key, khóa ngữ cảnh và rollback lưu dữ liệu. Đây không thay thế kiểm thử UI trình duyệt hay kiểm tra tệp XLSX/ZIP thực tế.
