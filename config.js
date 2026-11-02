// CẤU HÌNH KHO HỌC LIỆU SỐ – chỉ sửa file này
window.CONFIG={
  // Link Web app của Apps Script (xem README). Có link này thì trang tự đọc file trong Drive
  API_URL:"https://script.google.com/macros/s/AKfycbxKsCt013hcrCJt73Sfn3srjoDUwqLqCKNd_8A2mrobynaPs7hZrPbKqiX5Fp5IuhTl/exec",
  // Thư mục Drive của từng tổ / bộ phận (nơi giáo viên tải lên)
  DEPT_FOLDERS:{"Tổ 1":"1vRUsUkZd_7DNizvXsLyzXjJ-RgHpT6vX","Tổ 2-3":"1b_OJdL_ounlsimjVhZnfz4zxyC1VT97D","Tổ 4-5":"1pqCtYhIFoU7AUK1wWxRYGLRt9dkIAVpi","Tổ GVBM":"1uTOWVuI96i4VH_IJ4HQ_Q6wnt4ttdjSx","Tổ THCS":"1b6rASRdjs15L2WQdvEJPpDbuyb53Y1ns","Tổ Văn phòng":"1uGqtGQXWb35o3V-YW7-beAg3sRfsIJnV","Đoàn thanh niên":"1bEVRbq_pubVzzl90MKHbXEA6XmiOrY4k","Liên đội":"1eD4P0yaN2Ue3SP2HPJXquVEcAXTYliuh"},
  // Link Google Form đăng học liệu (xem README, bước 2)
  FORM_URL:"",
  // Link CSV của Google Sheet nhận câu trả lời (Tệp > Chia sẻ > Công bố lên web > CSV). Để trống thì đọc data/resources.json
  // (Tùy chọn) mã ô "Tổ chuyên môn" của Form để tự điền sẵn tổ, vd "entry.123456789"
  FORM_DEPT_ENTRY:"",
  SHEET_CSV:"",
  ROOT:"1aMl0gICoetZ3TQEPiNccM-W2OYoU4-aG",
  FOLDERS:{
    "Học liệu Tiểu học":"1JIkYZmiNZfIB0iSqX79YZ6NMIGo-oLut",
    "Học liệu THCS":"1pHB28dcJGfmln-OarhBYc1DFTsoSLa_-",
    "Bài giảng điện tử":"1o-acSQ2fm2L4w4Qegw-pX9kqHL275-zC",
    "Video dạy học":"1SGFW5r0xMQBLBkRMFTWud0nf09PPq_u1",
    "Học liệu AI":"1Gq7GRzl0aps6Yw0LxWSoK4aX-hNOHO9I",
    "Ngân hàng câu hỏi":"1U7HWIf1xft4U53wcWJrtV5ZKKY22T4QY",
    "Tài liệu STEM":"1ZpED7fyR9SJSoHy5_3pvmVKOBkAtrSf5",
    "Tài nguyên dùng chung":"1eTnaNtziaQGR6DKMcCQBAfXweDlUv1cL",
    "Đoàn thanh niên":"1AmNP2BYaG-mt7xgd2TzcxZLUccYo0_hd",
    "Liên đội":"1gJTgEcfIQIJ5xKBoOamlPB0FhYQAtPGr"
  }
};
