# Bối cảnh dự án Sổ GDTC – Ghi nhanh

## Mục đích và người dùng

PWA hỗ trợ giáo viên Giáo dục thể chất ghi nhanh mức đánh giá T/H/C theo lớp, ngày, tiết và nội dung bài học. Ứng dụng hoạt động trên trình duyệt, ưu tiên điện thoại; dữ liệu chỉ nằm trên thiết bị/trình duyệt đang dùng.

## Chức năng đã xác minh từ mã nguồn

- Chọn lớp, ngày, tiết, chủ đề/bài/nội dung; tìm và lọc học sinh.
- Chấm từng học sinh T/H/C, bỏ chấm khi chạm lại cùng mức; chấm cả lớp và bỏ chấm theo ngày/lớp/tiết.
- Tự chuyển tới học sinh chưa chấm, nhận xét nhanh/tự do, quản lý lớp tùy chỉnh.
- Báo cáo theo thời gian/lớp/học sinh; xuất Excel một lớp, nhiều sheet, ZIP Excel theo lớp.
- Sao lưu JSON, khôi phục JSON có xác nhận, giao diện sáng/tối và PWA offline.

Những mục trên là **có trong mã nguồn**, chưa phải toàn bộ đã được kiểm thử trên mọi trình duyệt.

## Kiến trúc

- Một trang tĩnh: `index.html` (HTML, CSS và JavaScript cùng tệp).
- PWA: `manifest.webmanifest`, `sw.js`, `icon.svg`.
- Không có API, tài khoản, cơ sở dữ liệu hay máy chủ ứng dụng.
- Lưu cục bộ: `localStorage['gdtc_fast_v2']`.

## Giới hạn/rủi ro hiện tại

- Dữ liệu không tự đồng bộ giữa thiết bị; mất dữ liệu trình duyệt có thể mất đánh giá nếu không sao lưu.
- Khóa bản ghi sử dụng số thứ tự học sinh. Sửa/thay đổi thứ tự danh sách có thể làm lịch sử cũ trỏ nhầm em.
- Chấm hàng loạt ghi đè mức đang có mà không hỏi xác nhận; chưa có hoàn tác hoặc nhật ký.
- Khôi phục JSON ghi đè toàn bộ trạng thái sau một hộp xác nhận; dữ liệu nhập vào chưa được kiểm tra schema sâu.
- Mã nguồn chứa danh sách học sinh thật. Không đưa dữ liệu đó vào test, tài liệu hoặc nơi công khai ngoài phạm vi repository được cấp phép.

## Quyết định bàn giao

- Giữ cấu trúc GitHub Pages và PWA hiện có, không thay framework.
- Bổ sung tài liệu + test hợp đồng nguồn không có phụ thuộc, không đụng dữ liệu đã lưu.
- Chưa sửa logic đánh giá: cần tái hiện và có acceptance criteria trước khi thay đổi.
