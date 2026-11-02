// Kho học liệu số – Vĩnh Gia 2: đọc file trong các thư mục tổ trên Drive và trả về JSON cho website
const ROOT_ID = '1aMl0gICoetZ3TQEPiNccM-W2OYoU4-aG';
const CATS = ['Học liệu Tiểu học','Học liệu THCS','Bài giảng điện tử','Video dạy học','Học liệu AI','Ngân hàng câu hỏi','Tài liệu STEM','Tài nguyên dùng chung','Đoàn thanh niên','Liên đội'];

function doGet() {
  const out = [];
  const subs = DriveApp.getFolderById(ROOT_ID).getFolders();
  while (subs.hasNext()) { const f = subs.next(); walk(f, f.getName(), '', out); }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

function walk(folder, dept, catHint, out) {
  const files = folder.getFiles();
  while (files.hasNext()) {
    const x = files.next(), m = x.getMimeType();
    const base = x.getName().replace(/\.(pdf|docx?|pptx?|xlsx?|mp4|mov|avi|mp3|png|jpe?g|gif|zip|rar|txt)$/i, '').replace(/\.2026$/, '');
    const p = base.split('_');
    let author = p.length > 1 ? p[0].trim() : '';
    if (!author) { try { author = x.getOwner().getName(); } catch (e) { author = ''; } }
    let kind = 'Tài liệu', cat = catHint || 'Tài nguyên dùng chung';
    if (m.indexOf('video') === 0) { kind = 'Video'; if (!catHint) cat = 'Video dạy học'; }
    else if (m.indexOf('image') === 0) { kind = 'Hình ảnh'; }
    else if (m.indexOf('presentation') > -1) { kind = 'Bài giảng'; if (!catHint) cat = 'Bài giảng điện tử'; }
    if (dept === 'Đoàn thanh niên' || dept === 'Liên đội') cat = dept;
    out.push({ title: base, cat: cat, kind: kind, sub: p.slice(2).join(' ').trim(), author: author,
      dept: dept, url: x.getUrl(), desc: '', at: x.getDateCreated().getTime() });
  }
  const subs = folder.getFolders();
  while (subs.hasNext()) {
    const s = subs.next();
    walk(s, dept, CATS.indexOf(s.getName()) > -1 ? s.getName() : catHint, out);
  }
}
