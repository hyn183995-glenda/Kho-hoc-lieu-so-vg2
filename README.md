# Kho học liệu số – Trường TH&THCS Vĩnh Gia 2

Website tĩnh chạy bằng GitHub Pages. Học liệu nhập qua Google Form, lưu trên Google Drive/Sheet của tổ.

## 1. Đưa lên GitHub Pages
1. Đăng nhập GitHub > **New repository** > tên `kho-hoc-lieu-vinhgia2` (Public) > Create.
2. **Add file > Upload files**, kéo toàn bộ nội dung thư mục này (kể cả `data/`, `.nojekyll`) > Commit.
3. **Settings > Pages > Source: Deploy from a branch > main / (root) > Save**.
4. Sau 1–2 phút trang có địa chỉ `https://<tên-tài-khoản>.github.io/kho-hoc-lieu-vinhgia2/`.

## 2. Nhận học liệu bằng Google Form (file về Drive của tổ trưởng)
Tạo Form với các câu hỏi, đặt đúng tên tiêu đề:
`Tên học liệu` · `Danh mục` (10 lựa chọn như trên trang) · `Loại nội dung` · `Môn/Khối` · `Giáo viên` · `Mô tả` · `Đường dẫn` (loại **Tải tệp lên**, hoặc ô văn bản nếu dán link).
Bật **Cài đặt > Thu thập địa chỉ email**. Ghi nhắc quy tắc đặt tên tệp: `họ và tên_tổ chuyên môn_môn_lớp.2026`.
Trong tab **Câu trả lời** > liên kết tới Google Sheet.

## 3. Hiển thị tự động lên trang
- Trong Sheet, thêm cột **Duyệt**; ghi `x` vào hàng nào muốn hiện lên trang.
- **Tệp > Chia sẻ > Công bố lên web** > chọn trang tính > định dạng **CSV** > sao chép link.
- Mở `config.js` trên GitHub (biểu tượng bút), dán link vào `SHEET_CSV`, link Form vào `FORM_URL` > Commit.

Không dùng Sheet: sửa `data/resources.json` bằng tay theo mẫu
`{"title":"","cat":"Học liệu THCS","kind":"Bài viết","sub":"Toán 7","author":"","url":"https://...","desc":"","at":0}`.
