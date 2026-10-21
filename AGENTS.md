# Quy tắc làm việc — Sổ GDTC

## Nguyên tắc bắt buộc

- Đọc `PROJECT_CONTEXT.md`, `ARCHITECTURE.md` và mã nguồn liên quan trước khi sửa.
- Ưu tiên thay đổi nhỏ, có thể kiểm chứng; không viết lại ứng dụng chỉ để thay đổi công nghệ.
- Không xóa dữ liệu học sinh, không commit tệp sao lưu JSON, Excel hoặc ZIP có dữ liệu thật.
- Không đổi cấu trúc `localStorage` hay khóa bản ghi nếu chưa có phương án migration (chuyển đổi dữ liệu) có kiểm thử và sao lưu.
- Không tự ý triển khai GitHub Pages, merge vào `main`, force-push hoặc xóa nhánh.
- Với thay đổi điểm T/H/C, luôn kiểm thử chấm mới, chấm lại, chấm hàng loạt, đổi lớp/ngày/tiết và tải lại trang.
- Mọi thay đổi và báo cáo kỹ thuật phải được giải thích bằng tiếng Việt.
- Sau mỗi nhiệm vụ, cập nhật tài liệu phù hợp: kiến trúc, kiểm thử, changelog hoặc roadmap.

## Dữ liệu cá nhân

`index.html` hiện chứa danh sách học sinh có thật trong hằng `PRELOAD`. Không sao chép danh sách này sang test, issue, log, ảnh chụp hay tài liệu. Test chỉ dùng tên giả.

## Quy trình tối thiểu

1. Kiểm tra `git status` và nhánh hiện tại.
2. Đọc vùng mã bị ảnh hưởng và đánh giá tác động tới dữ liệu đã lưu.
3. Thực hiện thay đổi tối thiểu.
4. Chạy `npm test` và kiểm thử thủ công phù hợp trong `TEST_PLAN.md`.
5. Rà soát diff, cập nhật tài liệu, rồi mới đề xuất commit/PR.
