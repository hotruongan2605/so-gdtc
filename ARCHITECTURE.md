# Kiến trúc

## Thành phần

| Tệp | Vai trò |
| --- | --- |
| `index.html` | Giao diện, dữ liệu lớp nạp sẵn, logic trạng thái, xuất/nhập và báo cáo. |
| `sw.js` | Cache PWA: HTML dùng network-first; tài nguyên tĩnh dùng cache-first. |
| `manifest.webmanifest` | Thông tin cài đặt PWA. |
| `icon.svg` | Biểu tượng ứng dụng. |

## Luồng dữ liệu

1. `load()` đọc JSON từ `localStorage` theo khóa `gdtc_fast_v2`; nếu lỗi/không có thì tạo `newState()`.
2. `render()` dựng bộ chọn, danh sách học sinh, thống kê và lớp.
3. `rate()`/`setRec()` thay đổi một bản ghi, rồi `save()` ghi toàn bộ `state` về localStorage.
4. Báo cáo và xuất tệp đọc từ `state.records`; sao lưu đóng gói toàn bộ state thành JSON.

## Cấu trúc state

```text
{
  version: 3,
  date: "YYYY-MM-DD",
  className: "…",
  period: "…",
  lesson: "…",
  autoNext: true,
  theme: "auto|dark|light",
  records: { [recordKey]: { level, tags, note, studentName } },
  customClasses: { [className]: { students: string[], source? } }
}
```

## Khóa đánh giá

`key(sid)` tạo chuỗi `ngày|lớp|tiết|nội dung|sid`. `sid` là chỉ số (0-based) trong danh sách hiện tại. Đây là nguyên nhân có thể gây lệch lịch sử nếu danh sách bị sắp xếp lại hoặc chèn/xóa học sinh.

## Hàm trọng tâm

- `rate`, `allLevel`, `clearAll`: thay đổi T/H/C.
- `focusNext`: cuộn đến học sinh chưa chấm kế tiếp khi bật tự chuyển.
- `backup` và trình xử lý `restore`: sao lưu/khôi phục JSON.
- `downloadExcel`, `excelBytesMulti`, `exportSeparateClassFiles`: tạo XLSX/ZIP thuần JavaScript.
- `recordEntries`, `buildReportTable`: đọc lịch sử và tạo báo cáo.

## Phụ thuộc logic

```text
Lớp + danh sách -> sid -> recordKey -> records -> báo cáo / Excel / ZIP / backup
Chọn ngày-tiết-nội dung -----^                 \
                                                    -> localStorage
```
