window.__TOAN3_APP_BUILD__ = '20261001-topic5-measurement-visual-v1';
// ==========================================
// CẤU HÌNH MỤC KHÁM PHÁ TOÁN 3 & MA TRẬN NĂNG LỰC TOAN3_C1-C6
// ==========================================
const TOPICS_CONFIG = [
    { id: 1, title: "1. Số học", desc: "Số đến 100 000 • làm tròn • La Mã", icon: "🔢", color: "pink" },
    { id: 2, title: "2. Phép cộng và trừ", desc: "Cộng, trừ đến 100 000", icon: "➕", color: "purple" },
    { id: 3, title: "3. Phép nhân và chia", desc: "Bảng nhân chia • nhân chia số lớn", icon: "✖️", color: "indigo" },
    { id: 4, title: "4. Hình học", desc: "Góc • hình • chu vi • diện tích", icon: "📐", color: "amber" },
    { id: 5, title: "5. Đơn vị đo và thời gian", desc: "Đo lường • thời gian • tiền", icon: "⏰", color: "emerald" },
    { id: 6, title: "6. Dãy số và quy luật", desc: "Dãy số • quy luật", icon: "🔗", color: "cyan" },
    { id: 7, title: "7. Tìm số chưa biết", desc: "Tìm x", icon: "❓", color: "violet" },
    { id: 8, title: "8. Toán có lời văn", desc: "Bài toán 1–2 bước", icon: "📝", color: "rose" },
    { id: 9, title: "9. Thống kê và xác suất", desc: "Bảng số • biểu đồ • xác suất", icon: "📊", color: "blue" },
    { id: 10, title: "10. Toán nâng cao", desc: "Tư duy • IQ", icon: "🧠", color: "yellow" },
    { id: 11, title: "11. Ôn tập", desc: "Ôn tập tổng hợp", icon: "📚", color: "purple" },
    { id: 12, title: "12. Math Lab – Toán tư duy Mỹ", desc: "Khám phá • mô hình • nhiều cách", icon: "✨", color: "fuchsia" }
];

const SUBTOPIC_PALETTES = [
    { card: "bg-pink-50/80 hover:bg-pink-100 border-pink-300 text-pink-800", num: "text-pink-600", badge: "bg-white text-pink-600 border-pink-200" },
    { card: "bg-emerald-50/80 hover:bg-emerald-100 border-emerald-300 text-emerald-800", num: "text-emerald-600", badge: "bg-white text-emerald-600 border-emerald-200" },
    { card: "bg-purple-50/80 hover:bg-purple-100 border-purple-300 text-purple-800", num: "text-purple-600", badge: "bg-white text-purple-600 border-purple-200" },
    { card: "bg-amber-50/80 hover:bg-amber-100 border-amber-300 text-amber-800", num: "text-amber-600", badge: "bg-white text-amber-600 border-amber-200" },
    { card: "bg-indigo-50/80 hover:bg-indigo-100 border-indigo-300 text-indigo-800", num: "text-indigo-600", badge: "bg-white text-indigo-600 border-indigo-200" },
    { card: "bg-rose-50/80 hover:bg-rose-100 border-rose-300 text-rose-800", num: "text-rose-600", badge: "bg-white text-rose-600 border-rose-200" }
];

// Lộ trình 24 tuần (Tỷ lệ Vàng 30/60) — mapping tới đúng chủ đề con (sub_id dạng "X.Y")
// Tuần 18 = Đấu trường thi Học kỳ I | Tuần 35 = Đấu trường thi Học kỳ II + Học sinh giỏi
const roadmapConfig = {
    1:  { name: "Tuần 1: Khởi Động Số Học", subIds: ["1.1", "1.2", "1.5"], desc: "Đọc viết số đến 100, cấu tạo số chục/đơn vị, so sánh lớn bé, điền số tia số, ước lượng số lượng trực quan.", icon: "🔟" },
    2:  { name: "Tuần 2: Phép Cộng Trừ Nhẩm", subIds: ["2.1", "2.6"], desc: "Cộng trừ không nhớ phạm vi 100. Đọc gọi tên thành phần phép tính: số hạng, tổng, số bị trừ, số trừ, hiệu.", icon: "➕" },
    3:  { name: "Tuần 3: Cộng Trừ Có Nhớ 20", subIds: ["2.2"], desc: "Các phép tính nhẩm có nhớ qua 10 trong phạm vi 20 (9, 8, 7 cộng một số; 11, 12, 13 trừ đi một số).", icon: "➕" },
    4:  { name: "Tuần 4: Độ Dài & Đường Thẳng", subIds: ["5.1", "4.1"], desc: "Làm quen Đề-xi-mét (dm), thực hành quy đổi cm-dm; nhận diện đường thẳng, đường cong, đoạn thẳng, ba điểm thẳng hàng.", icon: "📏" },
    5:  { name: "Tuần 5: Đặt Tính Cộng Trừ 100", subIds: ["2.3"], desc: "Đặt tính rồi tính cộng, trừ có nhớ phạm vi 100 (số có 2 chữ số với số có 1 hoặc 2 chữ số).", icon: "➕" },
    6:  { name: "Tuần 6: Khối Lượng & Khối Hình", subIds: ["5.2", "4.4"], desc: "Đại lượng Ki-lô-gam (kg), Lít (l), tính danh số thực tế; nhận diện khối lập phương, hộp chữ nhật, trụ, cầu.", icon: "🧊" },
    7:  { name: "Tuần 7: Đường Gấp Khúc & Hình", subIds: ["4.3", "4.2", "4.5"], desc: "Nhận dạng đếm hình tam giác, tứ giác; tính độ dài đường gấp khúc; xếp hình Tangram, gấp giấy.", icon: "📐" },
    8:  { name: "Tuần 8: Thế Giới Hàng Trăm", subIds: ["1.3", "1.4"], desc: "Các số trong phạm vi 1000 (đọc, viết, cấu tạo số trăm/chục/đơn vị, so sánh thứ tự lớn bé và tia số).", icon: "💯" },
    9:  { name: "Tuần 9: Tính Toán 1000 & Nhân Chia", subIds: ["2.4", "2.5", "3.1"], desc: "Cộng trừ không nhớ & có nhớ (1 lần) phạm vi 1000; ý nghĩa phép nhân (tổng bằng nhau), phép chia (chia đều).", icon: "✖️" },
    10: { name: "Tuần 10: Thời Gian & Tiền Tệ", subIds: ["5.3", "5.4", "5.5", "5.6"], desc: "Đọc đồng hồ chính xác đến 5 phút, quy tắc ngày giờ 24h, lịch tờ, lịch tháng; mệnh giá tiền giấy và mua bán nhỏ.", icon: "⏰" },
    11: { name: "Tuần 11: Bảng Tính 2 & 5 & Ôn Tập", subIds: ["3.2", "3.3", "11.1"], desc: "Thuộc lòng bảng nhân/chia 2 và 5; ôn tập tổng hợp kiến thức số học, đo lường và hình học Học kỳ I.", icon: "🔢" },
    12: { name: "Tuần 12: Đấu Trường Học Kỳ I", isExam: true, subIds: [], desc: "Bé thực hành làm đề kiểm tra cuối kì I tổng hợp chuẩn ma trận 13 câu (40 phút, đạt >= 80% vượt ải).", icon: "🏆" },
    13: { name: "Tuần 13: Quy Luật & Dãy Số", subIds: ["6.1", "6.2", "6.3", "6.4"], desc: "Tìm quy luật dãy số cách đều tăng/giảm, dãy số tăng khoảng cách, nhóm sơ đồ liên kết, chuỗi hình IQ tuần hoàn.", icon: "🔗" },
    14: { name: "Tuần 14: Tìm Số Chưa Biết Cơ Bản", subIds: ["7.1", "7.2"], desc: "Đi tìm ẩn số x trong phép tính cộng (tìm số hạng) và phép tính trừ (tìm số bị trừ, tìm số trừ chưa biết).", icon: "❓" },
    15: { name: "Tuần 15: Tìm x Nâng Cao", subIds: ["7.3", "7.4"], desc: "Tìm thừa số chưa biết, tìm số bị chia; giải bài toán tìm x nâng cao chứa 2 phép tính phức tạp.", icon: "❓" },
    16: { name: "Tuần 16: Toán Lời Văn Thêm Bớt", subIds: ["8.1", "8.2"], desc: "Bài toán đơn có lời văn dạng thêm, bớt một số đơn vị; bài toán nhiều hơn, ít hơn và chênh lệch hơn kém.", icon: "📝" },
    17: { name: "Tuần 17: Toán Nhân Chia Thực Tế", subIds: ["8.3"], desc: "Bài toán đố liên quan phép nhân, phép chia trong đời sống (gấp lên/giảm đi một số lần, chia đều đồ vật).", icon: "✖️" },
    18: { name: "Tuần 18: Thống Kê Biểu Đồ", subIds: ["9.1", "9.2"], desc: "Thu thập dữ liệu trực quan, phân loại và kiểm đếm số lượng vật thể; đọc hiểu phân tích thông tin biểu đồ tranh.", icon: "📊" },
    19: { name: "Tuần 19: Toán Lời Văn 2 Bước Tính", subIds: ["8.4"], desc: "Đọc hiểu phân tích ngữ cảnh phức tạp và thực hiện giải toán bằng chính xác 2 bước tính tích hợp.", icon: "📝" },
    20: { name: "Tuần 20: Xác Suất & Hình Học Khó", subIds: ["9.3", "10.3"], desc: "Khả năng xảy ra sự kiện (chắc chắn/có thể/không thể); đếm hình tam giác/tứ giác lồng nhau và khối chồng xếp phức tạp.", icon: "🎲" },
    21: { name: "Tuần 21: Siêu Tư Duy Số Học", subIds: ["10.1", "10.2", "10.4"], desc: "Tính nhanh thuận tiện gộp số tròn chục, tròn trăm; cấu tạo số và lập số có ràng buộc kép; toán cân thăng bằng logic.", icon: "🧠" },
    22: { name: "Tuần 22: Ôn Tập Tổng Hợp HK2", subIds: ["11.2"], desc: "Hệ thống hóa toàn bộ kiến thức tính toán nâng cao học kỳ II, các dạng toán tìm x và toán đố có lời văn cả năm.", icon: "📘" },
    23: { name: "Tuần 23: Thử Thách Học Sinh Giỏi", subIds: ["11.3"], desc: "Thử thách trí tuệ bứt phá giới hạn dành cho học sinh giỏi xuất sắc; luyện tập tổng hợp toán IQ nâng cao.", icon: "🎓" },
    24: { name: "Tuần 24: Đấu Trường Cuối Năm", isExam: true, subIds: [], desc: "Làm bài kiểm tra cuối năm chuẩn hóa ma trận 13 câu (40 phút). Đạt >= 80% chính thức phá đảo khóa học Toán lớp 3.", icon: "🏆" }
};

const TOTAL_ROADMAP_WEEKS = 24;


// Toạ độ 35 mốc tuần dạng zigzag rắn bò (serpentine), 7 cột x 5 hàng, tự tính không cần khai báo tay từng điểm
function getRoadmapCoord(weekNum) {
    const cols = 6;
    const colWidth = 140, rowHeight = 105;
    const startX = 90, startY = 80;
    const idx = weekNum - 1;
    const row = Math.floor(idx / cols);
    const posInRow = idx % cols;
    const col = (row % 2 === 0) ? posInRow : (cols - 1 - posInRow);
    return { x: startX + col * colWidth, y: startY + row * rowHeight };
}

function buildRoadmapPathD(totalWeeks) {
    const pts = [];
    for (let w = 1; w <= totalWeeks; w++) pts.push(getRoadmapCoord(w));
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1], p1 = pts[i];
        const midX = (p0.x + p1.x) / 2, midY = (p0.y + p1.y) / 2;
        const dx = p1.x - p0.x, dy = p1.y - p0.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len, ny = dx / len;
        // Sóng uốn lượn xuống-lên LIÊN TỤC xuyên suốt toàn bộ đường đi (kể cả đoạn chuyển hàng),
        // không để đoạn nào thẳng đơ xen giữa — giống hệt kiểu bản đồ lộ trình game (Duolingo-style).
        const bend = (i % 2 === 0 ? 1 : -1) * 45;
        const cx = midX + nx * bend, cy = midY + ny * bend;
        d += ` Q ${cx},${cy} ${p1.x},${p1.y}`;
    }
    return d;
}

const examFileMap = {
    hocky1: { file: 'de_thi_toan_3.json', examCategory: 'Học kỳ 1', sheet: 'LichSuBaiThiHK1', label: 'Học kỳ 1', color: 'pink' },
    hocky2: { file: 'de_thi_toan_3.json', examCategory: 'Học kỳ 2', sheet: 'LichSuBaiThiHK2', label: 'Học kỳ 2', color: 'purple' },
    hsg:    { file: 'de_thi_toan_3.json', examCategory: 'Học sinh giỏi', sheet: 'LichSuBaiThiHSG', label: 'Học sinh giỏi', color: 'amber' }
};

// 6 nhóm năng lực Toán lớp 3 (TOAN_C1 - TOAN_C6) — khoá nội bộ vẫn dùng C1..C6,
// việc trích tag từ chuỗi "TOAN_C1" sang "C1" được xử lý bằng regex ở nơi dùng.
const SKILL_TAXONOMY = {
    C1: { code: 'C1', sheetCol: 'C1_NhanBiet', totalCol: 'C1_NhanBiet_Tong', name: 'Nhận biết Số và Hình học trực quan', advice: 'Ôn lại cách đọc, viết, phân tích và so sánh số; đồng thời củng cố nhận biết hình học trực quan đúng trong phạm vi kiến thức con đã học.' },
    C2: { code: 'C2', sheetCol: 'C2_PhepTinh', totalCol: 'C2_PhepTinh_Tong', name: 'Phép tính và Tính nhẩm thuần túy', advice: 'Rèn thêm kỹ năng cộng, trừ, nhân, chia và tính nhẩm đúng trong phạm vi kiến thức con đã học.' },
    C3: { code: 'C3', sheetCol: 'C3_DoLuong', totalCol: 'C3_DoLuong_Tong', name: 'Đo lường, Thời gian & Thống kê Xác suất', advice: 'Luyện thêm các nội dung đo lường, thời gian, đọc dữ liệu và xác suất đúng với phần kiến thức con đã học.' },
    C4: { code: 'C4', sheetCol: 'C4_BieuThuc', totalCol: 'C4_BieuThuc_Tong', name: 'Quy luật, Biểu thức & Ẩn số', advice: 'Cần luyện thêm biểu thức, tìm thành phần chưa biết và nhận ra quy luật ở mức phù hợp với phần kiến thức con đã học.' },
    C5: { code: 'C5', sheetCol: 'C5_GiaiToan', totalCol: 'C5_GiaiToan_Tong', name: 'Giải Toán có lời văn - Đọc hiểu ngữ cảnh', advice: 'Tăng cường đọc hiểu đề, xác định dữ kiện - câu hỏi và lựa chọn phép tính phù hợp cho các bài toán có lời văn đã học.' },
    C6: { code: 'C6', sheetCol: 'C6_TuDuy', totalCol: 'C6_TuDuy_Tong', name: 'Tư duy Toán nâng cao & IQ Hình học', advice: 'Rèn tư duy suy luận và hình học ở đúng phạm vi đã học; ưu tiên hiểu cách làm thay vì ghi nhớ mẹo.' }
};

const GREETINGS_STUDENT = [
    "Chào {name}, cô Ong Vàng đố con hôm nay mình tính nhanh và chính xác đến đâu nhé!",
    "Chào mừng {name} quay lại! Não bộ đã khởi động, sẵn sàng chinh phục những con số chưa nào!",
    "Cô Ong Vàng chào {name}! Kính đã đeo, bút đã cầm, giờ là lúc bứt phá điểm 10 Toán học!",
    "Chào con yêu {name}, hôm nay chúng mình cùng khám phá xem con số nào đang trốn ở đâu nhé!",
    "Chào mừng {name} đến với giờ học Toán! Cô Ong Vàng tin con sẽ giải đề nhanh như chớp!"
];

const GREETINGS_GUEST = [
    "Chào bé yêu, cô Ong Vàng rất vui được cùng con luyện Toán hôm nay!",
    "Chào mừng bé đến với lớp Toán của cô Ong Vàng! Mình cùng thử sức xem sao nhé!",
    "Cô Ong Vàng chào bé! Đeo kính vào là tư duy lên hạng liền, cùng bắt đầu nào!",
    "Chào thiên tài nhí! Cô Ong Vàng đang chờ xem con giải bài nhanh cỡ nào đây!",
    "Chào mừng con đến với Đấu trường Toán học! Chúc con tính toán thật minh mẫn và vui vẻ!"
];


// ==========================================
// ĐỊNH DANH MÁY CHỦ APPS SCRIPT & BIẾN TOÀN CỤC
// ==========================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwb1dYNx6aIvfZ9wgOh3KDyLCwihHw3iVL6444yH2BV577cei6L1vV3-dXIw_6OKJM7-Q/exec";
const AUTH_TOKEN_KEY = 'toan3_auth_token';
let authRestoreInProgress = false;
let authRestoreFailed = false;
const PREMIUM_TOPIC_IDS = new Set([11]);
let adminAccountsCache = [];
let adminSortKey = 'maHS';
let adminSortDir = 'asc';

let allTopicsDataCache = null;
let allQuestionsFlatCache = null;
// Bật/tắt đọc câu hỏi TỰ ĐỘNG khi vào câu mới — nút "Nghe câu hỏi" thủ công vẫn luôn hoạt động
// dù tắt tính năng này (đây chỉ tắt phần tự động phát, không tắt hẳn tính năng nghe).
let autoSpeechEnabled = localStorage.getItem('autoSpeechEnabled') !== 'false';
const examsCache = {};

let currentUser = null;
let starGreenCount = 0;
let starRedCount = 0;
let activeTopicId = null;
let activeExamContext = null;
let activeRoadmapContext = null;
let inMiniGameFlow = false;
let activeQuestionsList = [];
let practiceCycleRawPool = [];
let pendingTopicQuiz = null;
let currentQIndex = 0;
let score = 0;
let userAnswers = {};
let wrongAttemptsByQ = {};
let quizWrongAnswers = [];
let quizAnsweredLog = [];
let quizStartTime = null;
let quizTimerInterval = null;
let quizRemainingSeconds = 40 * 60;

let audioCtx = null;
const banMaiAudio = new Audio();
banMaiAudio.referrerPolicy = 'no-referrer';

let histLineChartInstance = null;
let histBarChartInstance = null;


// ==========================================
// THÔNG BÁO TRONG APP - KHÔNG DÙNG ALERT/CONFIRM MẶC ĐỊNH TRÌNH DUYỆT
// ==========================================
function ensureAppDialogStyles_() {
    if (document.getElementById('toan3-app-dialog-style')) return;
    const style = document.createElement('style');
    style.id = 'toan3-app-dialog-style';
    style.textContent = `
        #toan3-app-dialog{position:fixed;inset:0;z-index:10050;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(31,41,55,.46);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}
        #toan3-app-dialog.hidden{display:none!important}
        #toan3-app-dialog .dlg-card{width:min(92vw,430px);overflow:hidden;border-radius:28px;background:#fff;border:2px solid #fbcfe8;box-shadow:0 24px 70px rgba(76,29,149,.22);transform-origin:center;animation:toan3DlgIn .18s ease-out}
        #toan3-app-dialog .dlg-head{padding:22px 22px 14px;text-align:center;background:linear-gradient(180deg,#fff1f7 0%,#faf5ff 68%,#fff 100%)}
        #toan3-app-dialog .dlg-icon{width:64px;height:64px;margin:0 auto 10px;border-radius:22px;display:flex;align-items:center;justify-content:center;font-size:34px;background:#fff;border:2px solid #fbcfe8;box-shadow:0 7px 20px rgba(236,72,153,.12)}
        #toan3-app-dialog .dlg-title{margin:0;color:#7e22ce;font-size:20px;line-height:1.25;font-weight:900}
        #toan3-app-dialog .dlg-message{padding:0 22px 19px;color:#475569;font-size:15px;line-height:1.6;font-weight:700;text-align:center;white-space:pre-line;user-select:text;-webkit-user-select:text}
        #toan3-app-dialog .dlg-actions{display:grid;gap:10px;padding:14px 16px 16px;border-top:1px solid #fce7f3;background:#fff}
        #toan3-app-dialog .dlg-actions.two{grid-template-columns:1fr 1fr}
        #toan3-app-dialog .dlg-btn{min-height:46px;border-radius:16px;border:0;font-family:inherit;font-size:14px;font-weight:900;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease,filter .15s ease}
        #toan3-app-dialog .dlg-btn:hover{transform:translateY(-1px);filter:saturate(1.05)}
        #toan3-app-dialog .dlg-btn:active{transform:translateY(1px)}
        #toan3-app-dialog .dlg-btn-primary{color:#fff;background:linear-gradient(135deg,#a855f7,#7c3aed);box-shadow:0 6px 14px rgba(124,58,237,.22)}
        #toan3-app-dialog .dlg-btn-success{color:#fff;background:linear-gradient(135deg,#34d399,#059669);box-shadow:0 6px 14px rgba(5,150,105,.20)}
        #toan3-app-dialog .dlg-btn-secondary{color:#7e22ce;background:#faf5ff;border:2px solid #e9d5ff}
        #toan3-app-dialog[data-tone="success"] .dlg-icon{background:#ecfdf5;border-color:#a7f3d0}
        #toan3-app-dialog[data-tone="success"] .dlg-title{color:#047857}
        #toan3-app-dialog[data-tone="warning"] .dlg-icon{background:#fffbeb;border-color:#fde68a}
        #toan3-app-dialog[data-tone="warning"] .dlg-title{color:#b45309}
        #toan3-app-dialog[data-tone="error"] .dlg-icon{background:#fff1f2;border-color:#fecdd3}
        #toan3-app-dialog[data-tone="error"] .dlg-title{color:#be123c}
        @keyframes toan3DlgIn{from{opacity:0;transform:scale(.96) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}
        @media(max-width:640px){#toan3-app-dialog{padding:12px}#toan3-app-dialog .dlg-card{border-radius:24px}#toan3-app-dialog .dlg-title{font-size:18px}#toan3-app-dialog .dlg-message{font-size:14px;padding-left:18px;padding-right:18px}}
    `;
    document.head.appendChild(style);
}

function ensureAppDialog_() {
    ensureAppDialogStyles_();
    let modal = document.getElementById('toan3-app-dialog');
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = 'toan3-app-dialog';
    modal.className = 'hidden';
    modal.innerHTML = `
        <div class="dlg-card" role="dialog" aria-modal="true" aria-labelledby="toan3-dlg-title" aria-describedby="toan3-dlg-message">
            <div class="dlg-head">
                <div id="toan3-dlg-icon" class="dlg-icon">🐝</div>
                <h3 id="toan3-dlg-title" class="dlg-title">Cô Ong Vàng nhắn bé</h3>
            </div>
            <div id="toan3-dlg-message" class="dlg-message"></div>
            <div id="toan3-dlg-actions" class="dlg-actions"></div>
        </div>`;
    document.body.appendChild(modal);
    return modal;
}

function inferAppDialogMeta_(message, options = {}) {
    const m = String(message ?? '');
    if (options.tone || options.title || options.icon) {
        return { tone: options.tone || 'info', title: options.title || 'Cô Ong Vàng nhắn bé', icon: options.icon || '🐝' };
    }
    if (/chúc mừng|hoàn thành|mở khóa|🎉/i.test(m)) return { tone:'success', title:'Giỏi lắm, con ơi!', icon:'🌟' };
    if (/khóa|đăng nhập|hết giờ|vui lòng|hãy|chưa có|đang cập nhật/i.test(m)) return { tone:'warning', title:'Cô Ong Vàng nhắc con', icon:'🐝' };
    if (/không thể|lỗi|thất bại|hết hạn|không hợp lệ/i.test(m)) return { tone:'error', title:'Có chút trục trặc', icon:'🌷' };
    return { tone:'info', title:'Cô Ong Vàng nhắn bé', icon:'🐝' };
}

function closeAppDialog_() {
    const modal = document.getElementById('toan3-app-dialog');
    if (modal) modal.classList.add('hidden');
}

function showAppNotice(message, options = {}) {
    const modal = ensureAppDialog_();
    const meta = inferAppDialogMeta_(message, options);
    modal.dataset.tone = meta.tone;
    document.getElementById('toan3-dlg-icon').textContent = meta.icon;
    document.getElementById('toan3-dlg-title').textContent = meta.title;
    document.getElementById('toan3-dlg-message').textContent = String(message ?? '');
    const actions = document.getElementById('toan3-dlg-actions');
    actions.className = 'dlg-actions';
    actions.innerHTML = '<button type="button" id="toan3-dlg-ok" class="dlg-btn dlg-btn-primary">Đã hiểu</button>';
    const ok = document.getElementById('toan3-dlg-ok');
    ok.textContent = options.okText || 'Đã hiểu';
    ok.onclick = () => {
        closeAppDialog_();
        if (typeof options.onClose === 'function') options.onClose();
    };
    modal.classList.remove('hidden');
    setTimeout(() => ok.focus(), 0);
}

function showAppConfirm(message, onConfirm, options = {}) {
    const modal = ensureAppDialog_();
    const meta = inferAppDialogMeta_(message, { ...options, tone: options.tone || 'warning', icon: options.icon || '📝' });
    modal.dataset.tone = meta.tone;
    document.getElementById('toan3-dlg-icon').textContent = meta.icon;
    document.getElementById('toan3-dlg-title').textContent = options.title || 'Xác nhận cùng Cô Ong Vàng';
    document.getElementById('toan3-dlg-message').textContent = String(message ?? '');
    const actions = document.getElementById('toan3-dlg-actions');
    actions.className = 'dlg-actions two';
    actions.innerHTML = `
        <button type="button" id="toan3-dlg-cancel" class="dlg-btn dlg-btn-secondary"></button>
        <button type="button" id="toan3-dlg-confirm" class="dlg-btn dlg-btn-success"></button>`;
    const cancelBtn = document.getElementById('toan3-dlg-cancel');
    const confirmBtn = document.getElementById('toan3-dlg-confirm');
    cancelBtn.textContent = options.cancelText || 'Làm tiếp';
    confirmBtn.textContent = options.confirmText || 'Đồng ý';
    cancelBtn.onclick = () => {
        closeAppDialog_();
        if (typeof options.onCancel === 'function') options.onCancel();
    };
    confirmBtn.onclick = () => {
        closeAppDialog_();
        if (typeof onConfirm === 'function') onConfirm();
    };
    modal.classList.remove('hidden');
    setTimeout(() => confirmBtn.focus(), 0);
}

// ==========================================
// HÀM TIỆN ÍCH DỮ LIỆU
// ==========================================
function getStudentFirstName() {
    if (!currentUser || currentUser.isGuest || !currentUser.hoTen) return "Bé";
    const parts = currentUser.hoTen.trim().split(/\s+/);
    return parts[parts.length - 1] || "Bé";
}

// Kho dữ liệu Toán 3 (bản cập nhật mới nhất): field "sub" giờ là NHÃN MÔ TẢ đầy đủ
// (VD "Đọc, viết và phân tích cấu tạo thập phân của số đến 100.000"), không còn là mã "X.Y" nữa.
// Mã "X.Y" (dùng để khớp roadmap 24 tuần) được suy ra từ chính "id" câu hỏi, có dạng
// cố định "Q_<mục>_<chủ đề con>_<số thứ tự>" (VD "Q_1_1_7" -> mã "1.1").
// Vẫn dự phòng đầy đủ 3 tầng (sub_code tường minh > sub đã là mã sẵn > suy từ id) để không vỡ dữ liệu cũ.
function deriveSubCode(q) {
    if (q.sub_code) return String(q.sub_code).trim();
    if (q.sub && /^\d+\.\d+$/.test(String(q.sub).trim())) return String(q.sub).trim();
    const m = String(q.id ?? '').match(/^Q_(\d+)_(\d+)_\d+$/);
    if (m) return `${m[1]}.${m[2]}`;
    return String(q.sub_topic ?? 'Câu hỏi chung').trim();
}

function normalizeQuestion(q) {
    if (!q) return null;
    const subCode = deriveSubCode(q);
    const lessonTitles = Array.isArray(q.lesson_titles) ? q.lesson_titles.filter(Boolean) : [];
    const competency = q.competency ?? q.skill_tag ?? q.tag ?? 'TOAN_C1';
    return {
        question_id: q.id ?? q.question_id ?? q.question_no ?? 0,
        exam_id: q.exam_id ?? null,
        sub_topic: subCode,
        sub_code: subCode,
        sub_topic_label: String(lessonTitles[0] ?? q.sub ?? q.sub_code ?? subCode).trim(),
        lesson_refs: Array.isArray(q.lesson_refs) ? q.lesson_refs : [],
        lesson_titles: lessonTitles,
        week: q.week ?? q.w ?? null,
        question_text: formatMathTextNumbers_(q.q ?? q.question_text ?? ''),
        options: (Array.isArray(q.o) ? q.o : (Array.isArray(q.options) ? q.options : [])).map(formatMathTextNumbers_),
        answer: formatMathTextNumbers_(q.a ?? q.answer ?? ''),
        hint: formatMathTextNumbers_(q.h ?? q.hint ?? ''),
        hint_policy: q.hint_policy ?? 'post_submit_only',
        image_url: q.img ?? q.image_url ?? '',
        audio_text: q.aud ?? q.audio_text ?? '',
        reading_title: q.r_title ?? q.reading_title ?? '',
        reading_passage: q.r_passage ?? q.reading_passage ?? q.passage_text ?? '',
        competency,
        skill_tag: competency,
        difficulty: q.difficulty ?? null,
        semester: q.semester ?? null,
        scope: q.scope ?? null,
        assessment_track: q.assessment_track ?? 'standard',
        include_in_standard_competency: q.include_in_standard_competency !== false,
        diem: Number(q.diem ?? q.score ?? 0.5),
        score: Number(q.score ?? q.diem ?? 0.5),
        explanation: formatMathTextNumbers_(q.explanation ?? q.h ?? q.hint ?? 'Không có giải thích chi tiết.')
    };
}

function normalizeTopic(t) {
    if (!t) return null;
    const rawQuestions = t.qs || t.questions || [];
    return {
        topic_id: Number(t.id ?? t.topic_id),
        topic_name: t.name ?? t.topic_name ?? '',
        description: t.desc ?? t.description ?? '',
        lecture_title: t.l_title ?? t.lecture_title ?? '',
        lecture_content: t.l_content ?? t.lecture_content ?? '',
        lecture_audio_text: t.l_audio ?? t.lecture_audio_text ?? '',
        questions: rawQuestions.map(normalizeQuestion).filter(Boolean)
    };
}

function shuffleArray(arr) {
    if (!arr) return [];
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// KHẮC PHỤC LỖI DỮ LIỆU: kho câu hỏi hiện có tới ~94% số câu luôn đặt đáp án đúng ở
// vị trí đầu tiên (index 0 -> hiển thị là "A") do khâu sinh dữ liệu chưa xáo trộn "o".
// Thay vì sửa lại toàn bộ file JSON, app tự xáo trộn thứ tự đáp án MỖI LẦN hiển thị
// (không đổi dữ liệu gốc trong cache) để đảm bảo đáp án đúng rơi ngẫu nhiên vào A/B/C/D.
function shuffleQuestionOptions(q) {
    if (!q || !Array.isArray(q.options)) return q;
    return { ...q, options: shuffleArray(q.options) };
}

function shuffleAllQuestionOptions(questions) {
    return (questions || []).map(shuffleQuestionOptions);
}

function buildTrickyChoices(correctAnswer, sameGroupPool, allPool, count = 3) {
    let same = [...new Set(sameGroupPool.filter(x => x !== correctAnswer))];
    same = shuffleArray(same);
    let picks = same.slice(0, count);
    if (picks.length < count) {
        let rest = [...new Set(allPool.filter(x => x !== correctAnswer && !picks.includes(x)))];
        rest = shuffleArray(rest);
        picks = picks.concat(rest.slice(0, count - picks.length));
    }
    return shuffleArray([correctAnswer, ...picks]);
}

function getQuestionsForWeek343(weekNumber) {
    const config = roadmapConfig[weekNumber];
    if (!config || !allQuestionsFlatCache) return [];

    // Gom toàn bộ câu hỏi thuộc đúng các chủ đề con (sub_id dạng "X.Y") của tuần này —
    // mỗi câu đã tự mang theo skill_tag riêng (TOAN_C1-C6), không cần bảng TOPIC_TO_SKILL suy luận gián tiếp.
    let pool = allQuestionsFlatCache.filter(q => config.subIds.includes(q.sub_topic));

    if (pool.length < 30) return shuffleArray([...pool]);
    
    const size = pool.length;
    const basket1 = pool.slice(0, Math.floor(size * 0.35));
    const basket2 = pool.slice(Math.floor(size * 0.35), Math.floor(size * 0.75));
    const basket3 = pool.slice(Math.floor(size * 0.75));
    
    const easy = shuffleArray([...basket1]).slice(0, 9);
    const medium = shuffleArray([...basket2]).slice(0, 12);
    const hard = shuffleArray([...basket3]).slice(0, 9);
    
    return shuffleArray([...easy, ...medium, ...hard]);
}

function formatMathNumberValue_(value){
    const raw=String(value??'').trim();
    if(!/^\d+$/.test(raw)) return raw;
    return raw.replace(/\B(?=(\d{3})+(?!\d))/g,' ');
}

function formatMathTextNumbers_(value){
    const s=String(value??'');
    // Chỉ nhóm các số nguyên độc lập 4-6 chữ số; bỏ qua chuỗi có dấu chấm/phẩy sát cạnh
    // để không làm hỏng số thập phân, mã, số điện thoại hay ký hiệu kỹ thuật.
    return s.replace(/(^|[^0-9A-Za-z_.])(\d{4,6})(?=$|[^0-9A-Za-z_.])/g,(m,prefix,num)=>prefix+formatMathNumberValue_(num));
}

function capitalizeFirstLetter(val) {
    if (!val) return '';
    const s = String(val).trim();
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function beautifySubtopicName(name) {
    if (!name) return '';
    let s = String(name).trim();
    if (/đa giác quan/i.test(s)) return 'Trải nghiệm đa giác quan';
    if (/trái nghĩa.*đồng nghĩa/i.test(s) || /đồng nghĩa.*trái nghĩa/i.test(s)) return 'Trái nghĩa - đồng nghĩa';
    if (s.length > 40 && s.includes('(')) {
        s = s.replace(/\s*\([^)]*\)/g, '').trim();
    }
    return s;
}

const TOPICS_DATA_FILES = [
    'assets/data/kho_hoc_toan_3_part1.json',
    'assets/data/kho_hoc_toan_3_part2.json'
];

// Kho học liệu Toán 3 là MẢNG PHẲNG câu hỏi (mỗi câu tự mang "sub": "X.Y" và "tag": "TOAN_Cx"),
// không bọc sẵn theo từng Mục lớn như bản gốc — nên cần tự gom nhóm theo số Mục (phần trước dấu chấm của "sub").
async function fetchAllQuestionsFlat() {
    if (allQuestionsFlatCache) return allQuestionsFlatCache;

    const results = await Promise.all(TOPICS_DATA_FILES.map(async (file) => {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Không thể tải file dữ liệu ${file}`);
        return res.json();
    }));

    const rawQuestions = results.flatMap(data => {
        if (Array.isArray(data)) return data;
        if (data && Array.isArray(data.topics)) return data.topics.flatMap(t => t.qs || t.questions || []);
        return [];
    });

    allQuestionsFlatCache = rawQuestions.map(normalizeQuestion).filter(Boolean);
    return allQuestionsFlatCache;
}

async function fetchAllTopicsData() {
    if (allTopicsDataCache) return allTopicsDataCache;

    const flat = await fetchAllQuestionsFlat();
    const byMuc = {};
    flat.forEach(q => {
        const mucNum = parseInt(String(q.sub_topic).split('.')[0], 10);
        if (!byMuc[mucNum]) byMuc[mucNum] = [];
        byMuc[mucNum].push(q);
    });

    allTopicsDataCache = TOPICS_CONFIG.map(t => ({
        topic_id: t.id,
        topic_name: t.title,
        description: t.desc,
        lecture_title: '',
        lecture_content: '',
        lecture_audio_text: '',
        questions: byMuc[t.id] || []
    }));
    return allTopicsDataCache;
}

async function loadExamDataFile(file) {
    if (examsCache[file]) return examsCache[file];
    const res = await fetch(`assets/data/${file}`);
    if (!res.ok) throw new Error("Không thể tải file đề thi");
    const data = await res.json();
    if (data && Array.isArray(data.exams)) {
        data.exams = data.exams.map(ex => ({
            ...ex,
            questions: (ex.qs || ex.questions || []).map(normalizeQuestion).filter(Boolean)
        }));
    }
    examsCache[file] = data;
    return data;
}

// ==========================================
// RENDER GIAO DIỆN TRANG CHỦ & ĐẤU TRƯỜNG
// ==========================================
async function renderDashboardGrid() {
    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    container.className = 'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5';
    let topicsData = [];
    try { topicsData = await fetchAllTopicsData(); } catch (e) {}
    let html = '';
    // Khám phá chỉ giữ các chuyên đề học tự do. Ôn tập và Đề thi đã có tab chính riêng.
    TOPICS_CONFIG.filter(t => Number(t.id) !== 11).forEach(t => {
        const topicObj = topicsData.find(item => Number(item.topic_id) === Number(t.id));
        const totalCount = topicObj?.questions?.length || 0;
        const countLabel = Number(t.id)===12 ? '88 hành trình' : (Number(t.id)===1 ? '5 bài học + thực hành' : (totalCount > 0 ? `${totalCount} câu` : 'Đang cập nhật'));
        const locked = PREMIUM_TOPIC_IDS.has(t.id) && !canAccessPremium();
        const lockHtml = locked ? '<span class="absolute right-3 top-2 text-slate-400 text-sm">🔒</span>' : '';
        html += `
            <div onclick="openTopic(${t.id}, '${t.title.replace(/'/g,"\\'")}', '${t.icon}')" class="relative pastel-card px-3 py-2.5 flex flex-col justify-between cursor-pointer hover:border-${t.color}-400 transition-all group min-h-[76px]">
                ${lockHtml}
                <div class="flex items-center space-x-2.5 pr-5">
                    <div class="w-8 h-8 bg-${t.color}-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-${t.color}-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">${t.icon}</div>
                    <h3 class="font-extrabold text-${t.color}-700 text-sm md:text-base leading-tight">${t.title}</h3>
                </div>
                <div class="flex justify-between items-center mt-1 pt-1 border-t border-pink-100 text-[11px] font-bold text-gray-500 gap-2">
                    <span class="truncate">${t.desc}</span><span class="bg-${t.color}-50 text-${t.color}-600 px-2 py-0.5 rounded-full shrink-0">${countLabel}</span>
                </div>
            </div>`;
    });
    container.innerHTML = html;
}

async function startRandomExam(categoryKey) {
    setAppShellRootMode_(false);
    stopSpeaking();
    // File đề thi Toán 3 có sẵn field "exam_category" sạch ("Học kỳ 1"/"Học kỳ 2"/"Học sinh giỏi")
    // nên lọc thẳng theo đúng field này, không cần suy luận qua tiền tố exam_id như bản lớp 2 cũ.
    const examCategory = examFileMap[categoryKey]?.examCategory || '';

    showLoadingOverlay("Đang chuẩn bị đề thi...");
    try {
        const examData = await loadExamDataFile('de_thi_toan_3.json');
        hideLoadingOverlay();

        const pool = (examData && Array.isArray(examData.exams)) ? examData.exams : [];
        let candidates = pool.filter(e => String(e.exam_category || '') === examCategory);
        if (!candidates.length) return showAppNotice('Đang cập nhật thêm đề thi cho mục này, bé quay lại sau nhé!');

        const exam = candidates[Math.floor(Math.random() * candidates.length)];
        const examIndex = pool.indexOf(exam);
        const examLabel = examFileMap[categoryKey]?.label || 'Đề thi';
        const examTitle = exam.exam_name || exam.exam_title || exam.name || exam.title || `${examLabel} - Đề số ${candidates.indexOf(exam) + 1}`;

        activeExamContext = {
            categoryKey,
            examIndex,
            examId: exam.exam_id ?? null,
            examTitle,
            timeLimitMinutes: Number(exam.time_limit_minutes || 40),
            semester: exam.semester ?? null,
            scope: exam.scope ?? null,
            assessmentTrack: exam.assessment_track || 'standard',
            includeInStandardCompetency: exam.include_in_standard_competency !== false,
            hintPolicy: exam.hint_policy || examData?.assessment_policy?.hint_policy || 'post_submit_only',
            assessmentPolicy: examData?.assessment_policy || {},
            assessmentBlueprint: exam.assessment_blueprint || null
        };
        activeRoadmapContext = null;
        pendingTopicQuiz = null;

        const questions = Array.isArray(exam.questions) && exam.questions.length ? exam.questions : [];
        if (!questions.length) return showAppNotice('Đề thi này chưa có câu hỏi, bé chọn đề khác nhé!');

        updateNavTabs("12. Đấu trường đề thi", "🏆", examTitle);
        startTopicQuiz(0, examTitle, shuffleArray(questions), null);
    } catch (err) {
        hideLoadingOverlay();
        showAppNotice(`Không thể tải đề thi: ${err.message}`);
    }
}

function startExamCountdown() {
    const minutes = Number(activeExamContext?.timeLimitMinutes || 40);
    quizRemainingSeconds = Math.max(1, minutes) * 60;
    updateExamTimerDisplay();
    clearInterval(quizTimerInterval);
    quizTimerInterval = setInterval(() => {
        quizRemainingSeconds--;
        updateExamTimerDisplay();
        if (quizRemainingSeconds <= 0) {
            clearInterval(quizTimerInterval);
            showAppNotice('Đã hết giờ làm bài! Cô sẽ nộp bài và đưa con tới phần kết quả nhé.', {
                title: 'Hết giờ làm bài', icon: '⏰', tone: 'warning', okText: 'Xem kết quả', onClose: showResultScreen
            });
        }
    }, 1000);
}

function updateExamTimerDisplay() {
    const el = document.getElementById('quiz-timer-display');
    if (!el) return;
    const m = Math.floor(Math.max(0, quizRemainingSeconds) / 60);
    const s = Math.max(0, quizRemainingSeconds) % 60;
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function openExamHub() {
    setAppShellRootMode_(true);
    setMainTabActive_('exams');
    inMiniGameFlow = false;
    if (!requirePremium('Đấu trường đề thi')) return;
    stopSpeaking(); activeExamContext = null; activeRoadmapContext = null; activeTopicId = null; pendingTopicQuiz = null;
    updateNavTabs("12. Đấu trường đề thi", "🏆", null); switchAppView('view-exam-hub');
    showLoadingOverlay("Đang tải kho đề thi..."); renderExamHubGrid().finally(() => hideLoadingOverlay());
}

async function renderExamHubGrid() {
    const container = document.getElementById('exam-categories-grid');
    if (!container) return;

    let examData = null;
    try { examData = await loadExamDataFile('de_thi_toan_3.json'); } catch (e) {}

    const getCountForCategory = (examCategory) => {
        if (!examData || !examData.exams) return 3;
        return examData.exams.filter(e => String(e.exam_category || '') === examCategory).length || 0;
    };

    const countHK1 = getCountForCategory(examFileMap.hocky1.examCategory);
    const countHK2 = getCountForCategory(examFileMap.hocky2.examCategory);
    const countHSG = getCountForCategory(examFileMap.hsg.examCategory);

    let html = `
        <div class="bg-pink-50/70 p-5 rounded-3xl border-2 border-pink-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">🔢</div>
                <h3 class="font-extrabold text-pink-600 text-lg mb-1">Học kỳ 1</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK1</p>
                <span class="inline-block bg-pink-100 text-pink-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK1} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky1')" class="w-full py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHK1')" class="w-full py-2 bg-white text-pink-700 border border-pink-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-pink-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-purple-50/70 p-5 rounded-3xl border-2 border-purple-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">⭐</div>
                <h3 class="font-extrabold text-purple-600 text-lg mb-1">Học kỳ 2</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK2</p>
                <span class="inline-block bg-purple-100 text-purple-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK2} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky2')" class="w-full py-2.5 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHK2')" class="w-full py-2 bg-white text-purple-700 border border-purple-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-purple-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-amber-50/70 p-5 rounded-3xl border-2 border-amber-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">🏆</div>
                <h3 class="font-extrabold text-amber-600 text-lg mb-1">Học sinh giỏi</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Thử thách nâng cao IQ</p>
                <span class="inline-block bg-amber-100 text-amber-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHSG} đề thi tuyển chọn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hsg')" class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-purple-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHSG')" class="w-full py-2 bg-white text-amber-700 border border-amber-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-amber-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// ==========================================
// MINI GAME TOÁN 3 — HUB 12 GAME + LAZY LOAD
// ==========================================
const MINIGAME_LIST = [
    { id: 'sudoku', title: '1. Sudoku trí tuệ', desc: '9 cấp độ từ 4×4 đến 9×9 · luyện tập trung và suy luận', icon: '🔢', ready: true },
    { id: 'number-hunt', title: '2. Săn số 100 000', desc: 'Bắn mục tiêu số đang chuyển động · đọc, so sánh, làm tròn', icon: '🎯', ready: true },
    { id: 'math-train', title: '3. Tàu nhân chia', desc: 'Kéo kiện hàng kết quả vào toa · bảng nhân chia và phép tính', icon: '🚂', ready: true },
    { id: 'target-number', title: '4. Xưởng biểu thức', desc: 'Vận hành máy theo đúng thứ tự tính rồi nhập kết quả', icon: '⚙️', ready: true },
    { id: 'missing-number', title: '5. Thợ săn X', desc: 'Đặt X lên cân thăng bằng · tìm thành phần chưa biết', icon: '⚖️', ready: true },
    { id: 'number-river', title: '6. Dòng sông phân số', desc: 'Điều khiển ếch nhảy qua lá sen phân số đúng', icon: '🐸', ready: true },
    { id: 'shape-builder', title: '7. Kiến trúc sư hình học', desc: 'Xây và thay đổi kích thước hình để đạt chu vi, diện tích', icon: '🏗️', ready: true },
    { id: 'time-master', title: '8. Đồng hồ & lịch', desc: 'Xoay kim đồng hồ, tính thời điểm và khoảng thời gian', icon: '🕐', ready: true },
    { id: 'little-shop', title: '9. Siêu thị Toán 3', desc: 'Ghép tờ tiền vào khay · thanh toán và trả tiền thừa', icon: '🛒', ready: true },
    { id: 'math-factory', title: '10. Trạm đo lường', desc: 'Kéo vạch thước, mức nước, quả cân · luyện đổi đơn vị', icon: '📏', ready: true },
    { id: 'pattern-detective', title: '11. Thám tử dữ liệu', desc: 'Kéo cột biểu đồ, mở khóa quy luật và suy luận dữ liệu', icon: '🕵️', ready: true },
    { id: 'math-race', title: '12. Đường đua Toán 3', desc: 'Chuyển làn né cổng sai · phản xạ kiến thức tổng hợp', icon: '🏎️', ready: true }
];

const MINIGAME_PALETTES = [
    ['bg-rose-50/80','border-rose-300','text-rose-600'],
    ['bg-sky-50/80','border-sky-300','text-sky-600'],
    ['bg-violet-50/80','border-violet-300','text-violet-600'],
    ['bg-amber-50/80','border-amber-300','text-amber-600'],
    ['bg-indigo-50/80','border-indigo-300','text-indigo-600'],
    ['bg-emerald-50/80','border-emerald-300','text-emerald-600'],
    ['bg-fuchsia-50/80','border-fuchsia-300','text-fuchsia-600'],
    ['bg-purple-50/80','border-purple-300','text-purple-600'],
    ['bg-cyan-50/80','border-cyan-300','text-cyan-600'],
    ['bg-lime-50/80','border-lime-300','text-lime-700'],
    ['bg-purple-50/80','border-purple-300','text-purple-600'],
    ['bg-teal-50/80','border-teal-300','text-teal-600']
];

const GAME_SCRIPT_MAP = {
    'sudoku': 'assets/js/games/sudoku.js?v=20260930-wide-numpad-side-font2',
    'number-hunt': 'assets/js/games/number-hunt.js',
    'math-train': 'assets/js/games/math-train.js',
    'target-number': 'assets/js/games/target-number.js',
    'missing-number': 'assets/js/games/missing-number.js',
    'number-river': 'assets/js/games/number-river.js',
    'shape-builder': 'assets/js/games/shape-builder.js',
    'time-master': 'assets/js/games/time-master.js',
    'little-shop': 'assets/js/games/little-shop.js',
    'math-factory': 'assets/js/games/math-factory.js',
    'pattern-detective': 'assets/js/games/pattern-detective.js',
    'math-race': 'assets/js/games/math-race.js'
};
const GAME_STOPPER_MAP = {
    'sudoku': 'stopSudokuGame',
    'number-hunt': 'stopNumberHuntGame',
    'math-train': 'stopMathTrainGame',
    'target-number': 'stopTargetNumberGame',
    'missing-number': 'stopMissingNumberGame',
    'number-river': 'stopNumberRiverGame',
    'shape-builder': 'stopShapeBuilderGame',
    'time-master': 'stopTimeMasterGame',
    'little-shop': 'stopLittleShopGame',
    'math-factory': 'stopMathFactoryGame',
    'pattern-detective': 'stopPatternDetectiveGame',
    'math-race': 'stopMathRaceGame'
};
const GAME_STARTER_MAP = {
    'sudoku': 'startSudokuGame',
    'number-hunt': 'startNumberHuntGame',
    'math-train': 'startMathTrainGame',
    'target-number': 'startTargetNumberGame',
    'missing-number': 'startMissingNumberGame',
    'number-river': 'startNumberRiverGame',
    'shape-builder': 'startShapeBuilderGame',
    'time-master': 'startTimeMasterGame',
    'little-shop': 'startLittleShopGame',
    'math-factory': 'startMathFactoryGame',
    'pattern-detective': 'startPatternDetectiveGame',
    'math-race': 'startMathRaceGame'
};

let currentMiniGameId = null;

function stopActiveMiniGame_() {
    if (currentMiniGameId) {
        const stopperName = GAME_STOPPER_MAP[currentMiniGameId];
        const stopper = stopperName ? window[stopperName] : null;
        if (typeof stopper === 'function') {
            try { stopper(); } catch (_) {}
        }
    }
    currentMiniGameId = null;
}

const loadedGameScripts = {};

function openMiniGameHub() {
    if (!requirePremium('Mini Game')) return;
    stopActiveMiniGame_();
    const gameContainer = document.getElementById('game-play-container');
    if (gameContainer && gameContainer.parentElement) gameContainer.parentElement.style.maxWidth = '';
    setAppShellRootMode_(true);
    setMainTabActive_('games');
    stopSpeaking();
    inMiniGameFlow = true;
    activeExamContext = null; activeRoadmapContext = null; activeTopicId = null; pendingTopicQuiz = null;
    updateNavTabs('Mini Game', '🎮', null);
    const grid = document.getElementById('minigame-grid');
    if (!grid) return;
    grid.innerHTML = MINIGAME_LIST.map((g, idx) => {
        const p = MINIGAME_PALETTES[idx % MINIGAME_PALETTES.length];
        return `
            <div onclick="openGamePlay('${g.id}')" class="${p[0]} ${p[1]} border-2 rounded-[26px] p-3.5 md:p-4 min-h-[148px] flex flex-col items-center justify-between text-center cursor-pointer relative shadow-sm pastel-btn group">
                <span class="absolute top-2 right-2 bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-200">Chơi ngay</span>
                <div class="text-4xl group-hover:scale-110 transition-transform mt-1">${g.icon}</div>
                <div class="w-full">
                    <h3 class="font-extrabold ${p[2]} text-base leading-tight">${g.title}</h3>
                    <p class="text-sm text-gray-700 font-bold mt-1 leading-snug">${g.desc}</p>
                </div>
            </div>`;
    }).join('');
    switchAppView('view-minigame-hub');
}

function loadGameScript(src) {
    if (loadedGameScripts[src]) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src + (src.includes('?') ? '&' : '?') + 'v=' + Date.now();
        script.onload = () => { loadedGameScripts[src] = true; resolve(); };
        script.onerror = () => reject(new Error(`Không tải được file game: ${src}`));
        document.body.appendChild(script);
    });
}

async function openGamePlay(gameId) {
    if (!requirePremium('Mini Game')) return;
    stopActiveMiniGame_();
    setAppShellRootMode_(false);
    stopSpeaking();
    inMiniGameFlow = true;
    const game = MINIGAME_LIST.find(g => g.id === gameId);
    if (!game) return;

    const title = document.getElementById('game-play-title');
    if (title) title.innerHTML = `<span>${game.icon}</span><span class="truncate">${game.title}</span>`;
    updateNavTabs('Mini Game', '🎮', game.title);
    switchAppView('view-game-play');

    const container = document.getElementById('game-play-container');
    if (container) {
        // Match Toán 2: Sudoku uses the wide play area so the 9x9 board can reach ~620px
        // while keeping the instruction/numpad panel beside it. Other games keep the default shell width.
        if (container.parentElement) container.parentElement.style.maxWidth = gameId === 'sudoku' ? '72rem' : '';
        container.innerHTML = '<p class="text-center text-gray-400 font-bold py-8"><i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang tải game...</p>';
    }

    try {
        await loadGameScript(GAME_SCRIPT_MAP[gameId]);
    } catch (e) {
        if (container) container.innerHTML = '<p class="text-center text-purple-500 font-bold py-8">Không tải được game. Con kiểm tra lại thư mục assets/js/games nhé!</p>';
        return;
    }

    const starterName = GAME_STARTER_MAP[gameId];
    const starter = starterName ? window[starterName] : null;
    if (typeof starter !== 'function') {
        if (container) container.innerHTML = '<p class="text-center text-purple-500 font-bold py-8">Game đã tải nhưng chưa tìm thấy hàm khởi động.</p>';
        return;
    }

    currentMiniGameId = gameId;
    starter();
}

// ==========================================
// ĐIỀU HƯỚNG VIEW & BREADCRUMB
// ==========================================
function updateNavTabs(level2Title, level2Icon, level3Title, level4Title) {
    const tab2 = document.getElementById('header-level2-tab');
    const tab3 = document.getElementById('header-level3-tab');
    const tab4 = document.getElementById('header-level4-tab');
    const homeBtn = document.getElementById('btn-header-home');

    if (level2Title) {
        document.getElementById('header-level2-title').textContent = level2Title;
        document.getElementById('header-level2-icon').textContent = level2Icon || '🔢';
        tab2.classList.remove('hidden');
        tab2.classList.add('flex');
        homeBtn.classList.add('opacity-80', 'hover:opacity-100');
    } else {
        tab2.classList.add('hidden');
        tab2.classList.remove('flex');
        homeBtn.classList.remove('opacity-80');
    }

    if (level3Title) {
        document.getElementById('header-level3-title').textContent = level3Title;
        tab3.classList.remove('hidden');
        tab3.classList.add('flex');
    } else {
        tab3.classList.add('hidden');
        tab3.classList.remove('flex');
    }

    if (level4Title && tab4) {
        document.getElementById('header-level4-title').textContent = level4Title;
        tab4.classList.remove('hidden');
        tab4.classList.add('flex');
    } else if (tab4) {
        tab4.classList.add('hidden');
        tab4.classList.remove('flex');
    }
}

function returnToTopicLecture() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    if (Number(activeTopicId) === 12) {
        openMathLab();
    } else if (activeExamContext) {
        openExamHub();
    } else if (activeRoadmapContext) {
        openRoadmap();
    } else if (pendingTopicQuiz) {
        if (Number(pendingTopicQuiz.topicNum) === 1) {
            showNumberSenseHub_(pendingTopicQuiz);
        } else if (Number(pendingTopicQuiz.topicNum) === 2) {
            showAddSubHub_(pendingTopicQuiz);
        } else if (Number(pendingTopicQuiz.topicNum) === 3) {
            showMulDivHub_(pendingTopicQuiz);
        } else if (Number(pendingTopicQuiz.topicNum) === 4) {
            showGeometryHub_(pendingTopicQuiz);
        } else if (Number(pendingTopicQuiz.topicNum) === 5) {
            showMeasureHub_(pendingTopicQuiz);
        } else {
            updateNavTabs(pendingTopicQuiz.topicName, TOPICS_CONFIG.find(t => t.id === pendingTopicQuiz.topicNum)?.icon, null);
            switchAppView('view-lecture');
        }
    } else if (inMiniGameFlow) {
        openMiniGameHub();
    }
}

function switchAppView(viewId) {
    stopSpeaking();
    ['view-dashboard-grid','view-lecture','view-quiz','view-bai-hoc-hub','view-roadmap','view-minigame-hub','view-game-play','view-exam-hub','view-result','view-admin'].forEach(id => {
        const el=document.getElementById(id); if (!el) return; el.classList.toggle('hidden', id !== viewId);
    });
}

function goHome() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    inMiniGameFlow = false;
    updateNavTabs(null, null, null);
    switchAppView('view-dashboard-grid');
}

// ==========================================
// HỆ THỐNG XÁC THỰC TÀI KHOẢN & LỜI CHÀO ĐÓN
// ==========================================
function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('form-login').classList.toggle('hidden', !isLogin);
    document.getElementById('form-register').classList.toggle('hidden', isLogin);
    document.getElementById('tab-btn-login').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    document.getElementById('tab-btn-register').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${!isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    hideAuthError();
}

function updateMaHSPreview() {
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const stt = document.getElementById('reg-stt').value.trim();
    document.getElementById('mahs-preview').textContent = (lop && stt) ? `${lop}-${stt.padStart(2, '0')}` : '--';
}

function showAuthError(msg) {
    const el = document.getElementById('auth-error-msg');
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden');
}
function hideAuthError() { 
    const el = document.getElementById('auth-error-msg');
    if (el) el.classList.add('hidden'); 
}

async function callAppsScript(action, payload) {
    const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action, payload })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rawText = await res.text();
    try {
        return JSON.parse(rawText);
    } catch (e) {
        throw new Error('Google Apps Script trả về dữ liệu không hợp lệ (không phải JSON) — thường do link Apps Script chưa được Deploy đúng cách (cần đặt quyền truy cập là "Anyone"/"Bất kỳ ai") hoặc đã hết hạn uỷ quyền. Anh vui lòng kiểm tra lại bước Deploy > Manage deployments trên Apps Script nhé.');
    }
}

async function doLogin() {
    hideAuthError();
    const maHS=(document.getElementById('login-mahs')?.value||'').trim().toUpperCase();
    const maPin=(document.getElementById('login-mapin')?.value||'').trim();
    if (!maHS || !/^\d{4,6}$/.test(maPin)) { const msg='Bé nhập đúng mã ID và mã PIN nhé!'; showAuthError(msg); return; }
    const btn=document.getElementById('btn-do-login'); btn.disabled=true; btn.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng nhập...';
    try {
        const result=await callAppsScript('login',{maHS,maPin});
        if(!result.ok){showAuthError(result.error||'ID hoặc PIN không đúng!');return;}
        currentUser={...result.student,isGuest:false,token:result.token};
        if(result.token) localStorage.setItem(AUTH_TOKEN_KEY,result.token);
        closeAuthModal(); enterDashboard();
    } catch(err){showAuthError('Lỗi kết nối máy chủ: '+err.message);} finally {btn.disabled=false;btn.innerHTML='<i class="fa-solid fa-right-to-bracket mr-1"></i> Đăng nhập';}
}

async function doRegister() {
    hideAuthError();
    const hoTen=document.getElementById('reg-hoten').value.trim();
    const ngaySinhRaw=document.getElementById('reg-ngaysinh').value;
    const lop=document.getElementById('reg-lop').value.trim().toUpperCase();
    const soThuTu=document.getElementById('reg-stt').value.trim();
    const maPin=document.getElementById('reg-mapin').value.trim();
    if(!hoTen||!ngaySinhRaw||!lop||!soThuTu||!maPin){showAuthError('Bé điền đủ tất cả các ô có dấu * nhé!');return;}
    if(!/^\d{6}$/.test(maPin)){showAuthError('Mã PIN mới phải gồm đúng 6 chữ số!');return;}
    const [y,m,d]=ngaySinhRaw.split('-'); const ngaySinh=`${d}-${m}-${y.slice(2)}`;
    const btn=document.getElementById('btn-do-register'); btn.disabled=true; btn.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng ký...';
    try{
        const result=await callAppsScript('register',{hoTen,ngaySinh,lop,soThuTu,maPin});
        if(!result.ok){showAuthError(result.error||'Không thể đăng ký.');return;}
        document.getElementById('login-mahs').value=result.student.maHS;
        document.getElementById('login-mapin').value='';
        switchAuthTab('login');
        showAuthError(`Đăng ký thành công! ID của bé là ${result.student.maHS}. Hãy ghi nhớ ID này và đăng nhập bằng PIN 6 số vừa tạo.`);
    }catch(err){showAuthError('Lỗi kết nối: '+err.message);}finally{btn.disabled=false;btn.innerHTML='<i class="fa-solid fa-user-plus mr-1"></i> Đăng ký ngay';}
}

async function tryAutoLogin() {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (!token) {
        handleGuestMode();
        return;
    }

    authRestoreInProgress = true;
    authRestoreFailed = false;

    // Có token thì KHÔNG hạ user xuống Khách trong lúc đang restore.
    // localStorage chỉ chứa token, tuyệt đối không chứa PIN/mật khẩu.
    const box = document.getElementById('user-info-box');
    if (box && !currentUser) {
        box.innerHTML = '<span class="text-gray-400 font-bold text-[10px] md:text-xs">Đang khôi phục phiên...</span>';
    }

    try {
        const res = await callAppsScript('restoreSession', { token });

        if (res && res.ok) {
            currentUser = { ...res.student, isGuest: false, token };
            authRestoreFailed = false;
            enterDashboard(true);
            return;
        }

        // Token bị backend từ chối: vẫn KHÔNG tự xoá token.
        // Chỉ logout() mới được phép xoá token local.
        authRestoreFailed = true;
        currentUser = null;
        if (box) {
            box.innerHTML = '<span class="text-purple-500 font-bold text-[10px] md:text-xs">Phiên cần xác thực lại</span>';
        }
    } catch (e) {
        // Lỗi mạng tạm thời: giữ nguyên token và trạng thái phiên cục bộ;
        // không chuyển về Khách, không xoá token.
        authRestoreFailed = true;
        if (box && !currentUser) {
            box.innerHTML = '<span class="text-gray-400 font-bold text-[10px] md:text-xs">Chưa kết nối được máy chủ</span>';
        }
    } finally {
        authRestoreInProgress = false;
    }
}

async function logout() {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    // Đây là nơi DUY NHẤT chủ động xoá session token phía client.
    // Người dùng đã bấm Đăng xuất nên UI có thể chuyển về Khách ngay.
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem('tv1_mahs');
    localStorage.removeItem('tv1_mapin');

    currentUser = {
        name: 'Khách (Guest)',
        isGuest: true,
        tuanHienTai: 1,
        hoTen: 'Bé Khách',
        lop: '',
        maHS: 'KHACH',
        vaiTro: 'guest',
        loaiTaiKhoan: 'guest'
    };

    updateUserInfoBox();
    resetStars();
    renderDashboardGrid();
    goHome();

    if (token) {
        try {
            await callAppsScript('logout', { token });
        } catch (e) {
            // Token local đã xoá theo yêu cầu người dùng.
            // Nếu mạng lỗi, token server cũ có thể còn tồn tại nhưng thiết bị này không giữ nó nữa.
        }
    }
}

function handleGuestMode() {
    currentUser={name:'Khách (Guest)',isGuest:true,tuanHienTai:1,hoTen:'Bé Khách',lop:'',maHS:'KHACH',vaiTro:'guest',loaiTaiKhoan:'guest'};
    enterDashboard(true);
}

function enterDashboard(isSilent=false) {
    document.getElementById('screen-dashboard')?.classList.remove('hidden');
    updateUserInfoBox(); resetStars(); renderDashboardGrid(); renderExamHubGrid(); goHome();
    if(!isSilent && currentUser && !currentUser.isGuest){setTimeout(()=>{const template=GREETINGS_STUDENT[Math.floor(Math.random()*GREETINGS_STUDENT.length)];speakVietnamese(template.replace('{name}',currentUser.hoTen),0.96);},350);}
}

function updateUserInfoBox() {
    const box=document.getElementById('user-info-box'); if(!box)return;
    if(!currentUser || currentUser.isGuest){
        box.innerHTML=`<div class="flex items-center gap-1.5"><span class="text-amber-600 font-extrabold text-xs mr-0.5 md:mr-1">Khách</span><div class="flex flex-col md:flex-row gap-1 md:gap-1.5"><button onclick="openAuthModal('login')" class="px-2.5 md:px-3 py-1.5 md:py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black text-[11px] md:text-xs leading-none">Sign in</button><button onclick="openAuthModal('register')" class="px-2.5 md:px-3 py-1.5 md:py-2 rounded-xl bg-white border border-purple-200 text-purple-600 font-black text-[11px] md:text-xs leading-none">Sign up</button></div></div>`;
        updatePremiumButtons(); return;
    }
    const isAdmin=String(currentUser.vaiTro||'').toLowerCase()==='admin';
    const tier=isAdmin?'Admin':String(currentUser.loaiTaiKhoan||'regular').toUpperCase();
    const accountMeta = isAdmin ? '' : `<div class="text-gray-500 font-semibold text-[10px]">${escapeHtml(tier)} · ID ${escapeHtml(currentUser.maHS)}</div>`;
    box.innerHTML=`<div class="flex items-center gap-2"><div class="text-right"><div class="text-pink-600 font-extrabold text-xs md:text-sm leading-tight">${escapeHtml(currentUser.hoTen||currentUser.maHS)}</div>${accountMeta}</div>${isAdmin?'<button onclick="openAdminManager()" title="Quản lý tài khoản" class="h-9 px-3 bg-pink-100 hover:bg-pink-200 text-purple-700 border border-pink-300 rounded-xl font-black text-xs flex items-center justify-center"><i class="fa-solid fa-users-gear md:mr-1"></i><span class="admin-manage-label hidden md:inline">Quản lý</span></button>':''}<button onclick="logout()" title="Đăng xuất" class="w-8 h-8 flex items-center justify-center bg-purple-100 hover:bg-purple-200 text-purple-500 rounded-xl border border-purple-200 text-xs"><i class="fa-solid fa-right-from-bracket"></i></button></div>`;
    updatePremiumButtons();
}


function openAuthModal(tab='login') {
    const modal=document.getElementById('screen-login'); if(!modal)return;
    modal.classList.remove('hidden'); modal.classList.add('flex'); switchAuthTab(tab); hideAuthError();
    setTimeout(()=>document.getElementById(tab==='login'?'login-mahs':'reg-hoten')?.focus(),80);
}
function closeAuthModal(){const modal=document.getElementById('screen-login');if(modal){modal.classList.add('hidden');modal.classList.remove('flex');}}
function isAdminUser(){return !!currentUser && !currentUser.isGuest && String(currentUser.vaiTro||'').toLowerCase()==='admin';}
function canAccessPremium(){if(isAdminUser())return true;const t=String(currentUser?.loaiTaiKhoan||'').toLowerCase();return !!currentUser&&!currentUser.isGuest&&(t==='trial'||t==='vip');}
function requirePremium(featureName){if(canAccessPremium())return true;showPremiumModal(featureName);return false;}
function showPremiumModal(featureName){
    const modal=document.getElementById('modal-premium'),msg=document.getElementById('premium-modal-message'),actions=document.getElementById('premium-guest-actions');if(!modal||!msg)return;
    if(!currentUser||currentUser.isGuest){msg.innerHTML=`Đây là <strong>${escapeHtml(featureName)}</strong> dành cho tài khoản <strong>Trial hoặc VIP</strong>.<br><br>Con có thể Sign in nếu đã có tài khoản hoặc Sign up để đăng ký nhé!<br><span class="text-gray-500">Các chuyên đề cơ bản vẫn học miễn phí bình thường.</span>`;actions?.classList.remove('hidden');}
    else{msg.innerHTML=`Tài khoản hiện tại của con là <strong class="text-purple-600">Regular</strong>.<br><br><strong>${escapeHtml(featureName)}</strong> yêu cầu tài khoản <strong>Trial hoặc VIP</strong>. Con hãy liên hệ Admin để được nâng hạng nhé!`;actions?.classList.add('hidden');}
    modal.classList.remove('hidden');
}
function closePremiumModal(){document.getElementById('modal-premium')?.classList.add('hidden');}
function premiumGoSignIn(){closePremiumModal();openAuthModal('login');}
function premiumGoSignUp(){closePremiumModal();openAuthModal('register');}
function updatePremiumButtons(){
    const unlocked=canAccessPremium();
    const btn=document.getElementById('btn-progress-week');
    if(btn){
        const mobile=btn.querySelector('#progress-label-mobile'), desktop=btn.querySelector('#progress-label-desktop'), lock=btn.querySelector('#progress-lock-mobile');
        if(mobile) mobile.textContent='Bài tập';
        if(desktop) desktop.textContent='Bài tập';
        if(lock) lock.classList.toggle('hidden', unlocked);
    }
    const lessonBtn=document.getElementById('btn-lessons');
    if(lessonBtn){
        const mobile=lessonBtn.querySelector('#lessons-label-mobile'), desktop=lessonBtn.querySelector('#lessons-label-desktop'), lock=lessonBtn.querySelector('#lessons-lock-mobile');
        if(mobile) mobile.textContent='Bài học';
        if(desktop) desktop.textContent='Bài học';
        if(lock) lock.classList.toggle('hidden', unlocked);
    }
    const gameBtn=document.getElementById('btn-mini-game');
    if(gameBtn){
        const mobile=gameBtn.querySelector('#minigame-label-mobile'), desktop=gameBtn.querySelector('#minigame-label-desktop'), lock=gameBtn.querySelector('#minigame-lock-mobile');
        if(mobile) mobile.textContent='Game';
        if(desktop) desktop.textContent='Mini Game';
        if(lock) lock.classList.toggle('hidden', unlocked);
    }
}
async function openAdminManager(){if(!isAdminUser())return;setAppShellRootMode_(false);updateNavTabs('Quản lý tài khoản','👥',null);switchAppView('view-admin');await loadAdminAccounts();}
async function loadAdminAccounts(){
    if(!isAdminUser())return;const token=localStorage.getItem(AUTH_TOKEN_KEY);showLoadingOverlay('Đang tải danh sách tài khoản...');
    try{const res=await callAppsScript('adminListAccounts',{token});if(!res.ok)throw new Error(res.error||'Không thể tải dữ liệu');adminAccountsCache=res.accounts||[];renderAdminAccounts(adminAccountsCache);}catch(e){showAppNotice(e.message, { title:'Thông báo quản trị', tone:'error', icon:'🛡️' });}finally{hideLoadingOverlay();}
}
function adminSortValue(a, key) {
    const v = a?.[key] ?? '';
    if (key === 'hanDungThu' || key === 'hanVIP') {
        const s = String(v).trim();
        if (!s || s === '--') return Number.POSITIVE_INFINITY;
        const m = s.match(/^(\d{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{2,4})$/);
        if (m) {
            let y = Number(m[3]); if (y < 100) y += 2000;
            return new Date(y, Number(m[2]) - 1, Number(m[1])).getTime();
        }
        const t = new Date(s).getTime();
        return Number.isNaN(t) ? Number.POSITIVE_INFINITY : t;
    }
    return String(v).trim();
}
function updateAdminSortIcons() {
    ['maHS','hoTen','lop','loaiTaiKhoan','hanDungThu','hanVIP'].forEach(k => {
        const el = document.getElementById(`sort-icon-${k}`);
        if (el) el.textContent = k === adminSortKey ? (adminSortDir === 'asc' ? '▲' : '▼') : '↕';
    });
}
function sortAdminAccounts(key) {
    if (adminSortKey === key) adminSortDir = adminSortDir === 'asc' ? 'desc' : 'asc';
    else { adminSortKey = key; adminSortDir = 'asc'; }
    filterAdminAccounts();
}
function renderAdminAccounts(rows){
    const tbody=document.getElementById('admin-account-tbody'),count=document.getElementById('admin-account-count');if(!tbody)return;
    const students=(rows||[]).filter(x=>String(x.vaiTro||'student').toLowerCase()!=='admin');
    const collator = new Intl.Collator('vi', { numeric: true, sensitivity: 'base' });
    students.sort((a,b)=>{
        const av=adminSortValue(a,adminSortKey), bv=adminSortValue(b,adminSortKey);
        let cmp;
        if (typeof av === 'number' && typeof bv === 'number') cmp = av - bv;
        else cmp = collator.compare(String(av),String(bv));
        return adminSortDir === 'asc' ? cmp : -cmp;
    });
    if(count)count.textContent=`${students.length} tài khoản`;
    updateAdminSortIcons();
    if(!students.length){tbody.innerHTML='<tr><td colspan="6" class="px-3 py-6 text-center text-gray-400">Chưa có tài khoản học sinh</td></tr>';return;}
    tbody.innerHTML=students.map(a=>`<tr class="hover:bg-pink-50/50"><td class="px-3 py-3 font-black text-purple-700">${escapeHtml(a.maHS)}</td><td class="px-3 py-3">${escapeHtml(a.hoTen||'')}</td><td class="px-3 py-3">${escapeHtml(a.lop||'')}</td><td class="px-3 py-3"><select onchange="adminChangeTier('${String(a.maHS).replace(/'/g,"\\'")}',this.value)" class="px-2 py-1.5 rounded-lg border border-pink-200 font-black bg-white ${a.loaiTaiKhoan==='vip'?'text-purple-600':a.loaiTaiKhoan==='trial'?'text-amber-600':'text-gray-600'}"><option value="regular" ${a.loaiTaiKhoan==='regular'?'selected':''}>Regular</option><option value="trial" ${a.loaiTaiKhoan==='trial'?'selected':''}>Trial</option><option value="vip" ${a.loaiTaiKhoan==='vip'?'selected':''}>VIP</option></select></td><td class="px-3 py-3">${escapeHtml(a.hanDungThu||'--')}</td><td class="px-3 py-3">${escapeHtml(a.hanVIP||'--')}</td></tr>`).join('');
}
function filterAdminAccounts(){
    const q=(document.getElementById('admin-search-input')?.value||'').trim().toLowerCase();
    const rows=!q?adminAccountsCache:adminAccountsCache.filter(a=>[a.maHS,a.hoTen,a.lop,a.loaiTaiKhoan].some(v=>String(v||'').toLowerCase().includes(q)));
    renderAdminAccounts(rows);
}
async function adminChangeTier(maHS,tier){const token=localStorage.getItem(AUTH_TOKEN_KEY);showLoadingOverlay('Đang cập nhật hạng tài khoản...');try{const r=await callAppsScript('adminSetTier',{token,maHS,tier});if(!r.ok)throw new Error(r.error||'Cập nhật thất bại');await loadAdminAccounts();}catch(e){showAppNotice(e.message, { title:'Thông báo quản trị', tone:'error', icon:'🛡️' });}finally{hideLoadingOverlay();}}

function resetStars() {
    starGreenCount = 0; starRedCount = 0;
    const greenEl = document.getElementById('star-green-count');
    const redEl = document.getElementById('star-red-count');
    if (greenEl) greenEl.textContent = 0;
    if (redEl) redEl.textContent = 0;
}

function clickLessonModule() {
    if (!requirePremium('Bài học')) return;
    inMiniGameFlow = false;
    stopSpeaking();
    updateNavTabs('Bài học', '📖', null);
    switchAppView('view-bai-hoc-hub');
}

function clickProgressOrExam(type) {
    if(type==='progress'){if(!requirePremium('Bài tập'))return;openRoadmap();}
    else if(type==='exam'){if(!requirePremium('Đấu trường đề thi'))return;openExamHub();}
}

// ==========================================
// 12. MATH LAB - TOÁN TƯ DUY MỸ (TOÁN 3)
// SGK Kết nối tri thức quyết định phạm vi; Math Lab thay đổi con đường học.
// ==========================================
const MATH_LAB_TRACKS_CONFIG = [
    { code:'12.1', icon:'🔢', title:'Number Sense & Place Value – Cảm nhận số', journeys:11, desc:'Số đến 100 000, giá trị hàng, tia số, so sánh, làm tròn và ước lượng.' },
    { code:'12.2', icon:'➕', title:'Addition & Subtraction Strategies – Cộng trừ linh hoạt', journeys:10, desc:'Mô hình, bù trừ, tia số, regrouping, ước lượng và thuật toán đến 100 000.' },
    { code:'12.3', icon:'✖️', title:'Multiplication & Division Thinking – Tư duy nhân chia', journeys:13, desc:'Nhóm bằng nhau, array, fact family, bảng 2–9, nhân chia nhiều chữ số và số dư.' },
    { code:'12.4', icon:'⚖️', title:'Unknowns, Equality & Expressions – Số ẩn & biểu thức', journeys:10, desc:'Dấu bằng như cân bằng, thành phần chưa biết, phép tính ngược và thứ tự biểu thức.' },
    { code:'12.5', icon:'🍕', title:'Fraction Sense – Cảm nhận phân số', journeys:8, desc:'Một phần mấy từ chia đều, mô hình vùng/nhóm đồ vật và vận dụng thực tế.' },
    { code:'12.6', icon:'📏', title:'Measurement & Time – Đo lường, thời gian & tiền', journeys:10, desc:'mm, g, ml, nhiệt độ, ước lượng, đồng hồ, lịch và tiền Việt Nam.' },
    { code:'12.7', icon:'📐', title:'Geometry & Spatial Reasoning – Hình học & không gian', journeys:10, desc:'Trung điểm, hình tròn, góc, hình phẳng, khối, chu vi và diện tích.' },
    { code:'12.8', icon:'📊', title:'Patterns, Data & Chance – Quy luật, dữ liệu & khả năng', journeys:7, desc:'Quy luật, thu thập/phân loại, bảng số liệu, lập luận dữ liệu và khả năng xảy ra.' },
    { code:'12.9', icon:'💡', title:'Problem Solving Studio – Xưởng giải quyết vấn đề', journeys:9, desc:'Mô hình hóa, bài toán hai bước, chọn chiến lược, nhiều cách giải và tự kiểm.' }
];
const MATH_LAB_DATA_FILE = 'assets/data/math_lab_toan_3_12.json?v=20260930-1';
let mathLabBundle = null;
const mathLabCaches = {};
let mathLabCache = null;
let mathLabState = {
    view:'home', trackCode:null, journeyIndex:null, activityIndex:0,
    selectedIndex:null, selectedMulti:[], build:{hundreds:0,tens:0,ones:0}, placeValues:{ten_thousands:0,thousands:0,hundreds:0,tens:0,ones:0}, numberInput:'', fractionSelected:[], rangeValue:null,
    orderPicked:[], tradeDone:false, grouped:false, feedback:null, hintLevel:0,
    groups:1, perGroup:1, rows:1, cols:1, shareRounds:0, measureValue:null,
    moneyCounts:{}, clockHour:12, clockMinute:0, selectedDay:null, tallyCounts:[]
};

function mathLabTrackConfig_(code) { return MATH_LAB_TRACKS_CONFIG.find(t => t.code === code) || MATH_LAB_TRACKS_CONFIG[0]; }
function mathLabTrackShortTitle_(data) {
    const t=mathLabTrackConfig_(data?.display_code || mathLabState.trackCode);
    return `${t.code} ${String(t.title||'').split(' – ')[0].split(' - ')[0]}`;
}
function ensureMathLabStyles_() {
    if (document.getElementById('math-lab-style')) return;
    const style=document.createElement('style'); style.id='math-lab-style';
    style.textContent=`
        .ml-hero{background:linear-gradient(135deg,#fff7ff 0%,#f5f3ff 46%,#eefcff 100%);border:2px solid #ead7ff;border-radius:28px;padding:20px 22px;box-shadow:0 8px 26px rgba(126,34,206,.06)}
        .ml-kicker{font-size:.82rem;font-weight:1000;letter-spacing:.18em;text-transform:uppercase;color:#c026d3}
        .ml-track-card,.ml-journey-card{border:2px solid #ead7ff;border-radius:24px;background:rgba(255,255,255,.96);box-shadow:0 4px 14px rgba(99,102,241,.06);transition:.18s ease}.ml-track-card:hover,.ml-journey-card:hover{transform:translateY(-2px);border-color:#d8b4fe;box-shadow:0 10px 24px rgba(168,85,247,.11)}
        .ml-progress{height:7px;border-radius:999px;background:#f1f5f9;overflow:hidden}.ml-progress>i{display:block;height:100%;background:linear-gradient(90deg,#d946ef,#8b5cf6,#38bdf8);border-radius:inherit}
        .ml-teacher{background:linear-gradient(135deg,#fdf4ff,#f5f3ff);border:1.5px solid #e9d5ff;border-radius:20px;padding:12px 14px;color:#6b21a8;font-weight:800;line-height:1.45}
        .ml-prompt{font-weight:1000;color:#0f172a;font-size:clamp(1.15rem,2vw,1.48rem);line-height:1.42}.ml-chip{padding:7px 11px;border-radius:999px;background:#f5f3ff;border:1.5px solid #ddd6fe;color:#6d28d9;font-weight:900}
        .ml-choice{width:100%;min-height:58px;border:2px solid #e2e8f0;border-radius:18px;background:#fff;padding:10px 12px;font-weight:900;color:#334155;text-align:left;transition:.15s ease}.ml-choice:hover{border-color:#c084fc;background:#faf5ff}.ml-choice.is-selected{border-color:#a855f7;background:#f3e8ff;color:#6b21a8;box-shadow:0 0 0 3px rgba(168,85,247,.08)}.ml-choice.is-correct{border-color:#34d399;background:#ecfdf5;color:#047857}.ml-choice.is-wrong{border-color:#fb7185;background:#fff1f2;color:#be123c}
        .ml-base10{display:flex;align-items:flex-end;justify-content:center;gap:9px;flex-wrap:wrap;min-height:96px;padding:12px;border-radius:20px;background:#f8fafc;border:1.5px dashed #cbd5e1}.ml-hundred{width:64px;height:64px;border-radius:8px;border:2px solid #38bdf8;background-color:#e0f2fe;background-image:linear-gradient(#bae6fd 1px,transparent 1px),linear-gradient(90deg,#bae6fd 1px,transparent 1px);background-size:6.4px 6.4px}.ml-ten{width:12px;height:64px;border-radius:5px;border:2px solid #a78bfa;background:repeating-linear-gradient(to bottom,#ede9fe 0 5px,#c4b5fd 5px 6px)}.ml-one{width:15px;height:15px;border-radius:4px;border:2px solid #f59e0b;background:#fef3c7}.ml-block-group{display:flex;align-items:flex-end;gap:4px;flex-wrap:wrap;justify-content:center}
        .ml-counter{display:flex;align-items:center;justify-content:center;gap:9px;padding:9px;border-radius:18px;background:#f8fafc;border:1.5px solid #e2e8f0}.ml-counter button{width:36px;height:36px;border-radius:12px;background:#fff;border:2px solid #ddd6fe;color:#7c3aed;font-size:1.15rem;font-weight:1000}.ml-counter strong{min-width:30px;text-align:center;font-size:1.2rem;color:#312e81}
        .ml-number-line{position:relative;padding:20px 8px 8px}.ml-number-line input[type=range]{width:100%;accent-color:#a855f7}.ml-number-line-labels{display:flex;justify-content:space-between;font-weight:900;color:#64748b;font-size:.9rem}.ml-number-line-value{text-align:center;font-size:1.25rem;font-weight:1000;color:#7e22ce;margin-bottom:4px}
        .ml-dot{width:10px;height:10px;border-radius:50%;background:#a78bfa;display:inline-block;margin:2px}.ml-dotbox{max-width:520px;margin:auto;text-align:center;padding:14px;border-radius:20px;background:#faf5ff;border:1.5px dashed #d8b4fe}.ml-group{display:inline-flex;gap:3px;flex-wrap:wrap;justify-content:center;align-items:center;min-width:62px;min-height:54px;padding:8px;margin:4px;border-radius:16px;background:white;border:1.5px solid #ddd6fe}.ml-array{display:grid;gap:7px;justify-content:center;margin:auto;padding:16px;border-radius:20px;background:#f8fafc;border:1.5px dashed #cbd5e1}.ml-array i{width:15px;height:15px;border-radius:50%;background:#8b5cf6}.ml-sharebox{display:flex;flex-wrap:wrap;gap:4px;align-content:flex-start;justify-content:center;min-width:92px;min-height:80px;padding:10px;border-radius:18px;background:#fff;border:2px solid #c4b5fd}
        .ml-clock{width:150px;height:150px;border-radius:50%;border:7px solid #ddd6fe;background:white;margin:auto;position:relative;box-shadow:inset 0 0 0 2px #f5f3ff}.ml-clock::after{content:'';position:absolute;width:10px;height:10px;border-radius:50%;background:#7c3aed;left:50%;top:50%;transform:translate(-50%,-50%)}.ml-hand{position:absolute;left:50%;bottom:50%;transform-origin:50% 100%;border-radius:999px}.ml-hour{width:5px;height:39px;background:#7c3aed}.ml-minute{width:3px;height:55px;background:#ec4899}.ml-clock-num{position:absolute;font-size:13px;font-weight:900;color:#64748b;transform:translate(-50%,-50%)}
        .ml-calendar{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:5px;max-width:520px;margin:auto}.ml-cal-head{font-size:12px;font-weight:1000;color:#64748b;text-align:center}.ml-cal-day{min-height:42px;border:1.5px solid #e2e8f0;border-radius:11px;background:#fff;font-weight:900;color:#475569}.ml-cal-day.selected{border-color:#a855f7;background:#f3e8ff;color:#7e22ce}.ml-cal-blank{min-height:42px}
        .ml-num-input{width:min(100%,360px);display:block;margin:0 auto;border:2px solid #ddd6fe;border-radius:18px;background:#fff;padding:14px 16px;text-align:center;font-size:1.45rem;font-weight:1000;color:#5b21b6;outline:none}.ml-num-input:focus{border-color:#a855f7;box-shadow:0 0 0 4px rgba(168,85,247,.09)}
        .ml-place-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}.ml-place-cell{border:1.5px solid #ddd6fe;border-radius:17px;background:#faf5ff;padding:9px 6px;text-align:center}.ml-place-label{font-size:.8rem;font-weight:1000;color:#7c3aed;min-height:28px;display:flex;align-items:center;justify-content:center}.ml-place-buttons{display:flex;align-items:center;justify-content:center;gap:5px;margin-top:5px}.ml-place-buttons button{width:31px;height:31px;border-radius:10px;background:#fff;border:1.5px solid #c4b5fd;color:#6d28d9;font-weight:1000}.ml-place-buttons strong{min-width:20px;color:#312e81;font-size:1.05rem}.ml-place-total{text-align:center;margin-top:9px;font-weight:1000;color:#6d28d9}
        .ml-fraction-grid{display:grid;gap:6px;max-width:500px;margin:auto;padding:12px;border-radius:20px;background:#f8fafc;border:1.5px dashed #c4b5fd}.ml-fraction-cell{min-height:64px;border:2px solid #c4b5fd;border-radius:12px;background:#fff;transition:.15s ease}.ml-fraction-cell.selected{background:linear-gradient(135deg,#f0abfc,#a78bfa);border-color:#8b5cf6;box-shadow:inset 0 0 0 2px rgba(255,255,255,.45)}.ml-array.tile i{border-radius:4px;background:#c4b5fd;border:1px solid #8b5cf6}
        .ml-feedback{border-radius:18px;padding:12px 14px;font-weight:900;line-height:1.45}.ml-feedback.ok{background:#ecfdf5;border:1.5px solid #6ee7b7;color:#047857}.ml-feedback.no{background:#fff1f2;border:1.5px solid #fda4af;color:#be123c}.ml-hint{background:#fffbeb;border:1.5px solid #fde68a;color:#92400e;border-radius:16px;padding:10px 12px;font-weight:800}.ml-step-dot{width:9px;height:9px;border-radius:999px;background:#e2e8f0}.ml-step-dot.done{background:#34d399}.ml-step-dot.current{width:22px;background:#a855f7}
        @media(max-width:640px){.ml-place-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}.ml-hero{padding:16px}.ml-hundred{width:54px;height:54px;background-size:5.4px 5.4px}.ml-ten{height:54px}.ml-track-card,.ml-journey-card{border-radius:20px}}
    `; document.head.appendChild(style);
}
async function loadMathLabBundle_() {
    if (mathLabBundle) return mathLabBundle;
    let res;
    try {
        res = await fetch(MATH_LAB_DATA_FILE, { cache: 'no-store' });
    } catch (err) {
        throw new Error('Không kết nối được dữ liệu Math Lab. Hãy kiểm tra file assets/data/math_lab_toan_3_12.json');
    }
    if(!res.ok) throw new Error(`Không tải được Math Lab (${res.status}). Cần file assets/data/math_lab_toan_3_12.json`);
    let data;
    try {
        data = await res.json();
    } catch (err) {
        throw new Error('File math_lab_toan_3_12.json không phải JSON hợp lệ');
    }
    const labs = Array.isArray(data?.labs)
        ? data.labs
        : (Array.isArray(data?.tracks) ? data.tracks : (data?.display_code ? [data] : []));
    if(!labs.length) throw new Error('Dữ liệu Math Lab không có Learning Lab');
    mathLabBundle=data;
    Object.keys(mathLabCaches).forEach(k => delete mathLabCaches[k]);
    labs.forEach(lab=>{ if(lab?.display_code) mathLabCaches[String(lab.display_code)]=lab; });
    if(!mathLabCaches['12.1']) throw new Error('Dữ liệu Math Lab thiếu Learning Lab 12.1');
    return mathLabBundle;
}
async function loadMathLabData_(code='12.1') {
    if (mathLabCaches[code]) { mathLabCache=mathLabCaches[code]; return mathLabCache; }
    await loadMathLabBundle_();
    const data=mathLabCaches[code];
    if(!data) throw new Error('Không tìm thấy dữ liệu '+code);
    mathLabCache=data;
    return mathLabCache;
}
function mathLabProgress_(){try{return JSON.parse(localStorage.getItem('mathLabG3ProgressV1')||'{}')||{}}catch(_){return{}}}
function mathLabMarkDone_(id){const p=mathLabProgress_();p[id]={done:true,at:new Date().toISOString()};localStorage.setItem('mathLabG3ProgressV1',JSON.stringify(p))}
function mathLabJourneyProgress_(j){const p=mathLabProgress_(),acts=j?.activities||[];const done=acts.filter(a=>p[a.id]?.done).length;return{done,total:acts.length,pct:acts.length?Math.round(done*100/acts.length):0}}
function mathLabTotalDone_(data){const p=mathLabProgress_(),acts=(data?.journeys||[]).flatMap(j=>j.activities||[]);return{done:acts.filter(a=>p[a.id]?.done).length,total:acts.length}}
let mathLabUnlockedSourceLesson_=1;
async function mathLabRefreshCurriculumGate_(){try{const data=await loadBaiHocToan3Data_();const unlocked=Math.max(1,Number(getUnlockedBaiTapToan3_()||1));const learned=(data?.bai_hoc||[]).filter(x=>Number(x.bai)<=unlocked);mathLabUnlockedSourceLesson_=learned.reduce((m,x)=>Math.max(m,Number(x.source_lesson_no||0)),1)}catch(_){mathLabUnlockedSourceLesson_=Math.max(1,mathLabUnlockedSourceLesson_||1)}return mathLabUnlockedSourceLesson_}
function mathLabCurriculumUnlocked_(j){const need=Number(j?.unlock_after_source_lesson||0);return !need||need<=Number(mathLabUnlockedSourceLesson_||1)}
function mathLabShowLockedJourney_(i){const j=mathLabCache?.journeys?.[i];if(!j)return;const n=Number(j.unlock_after_source_lesson||0);showAppNotice(n?`🔒 Hành trình này mở khi con học tới Bài ${n} trong SGK Toán 3.`:'🔒 Hành trình này chưa mở.')}
function resetMathLabActivityState_(){Object.assign(mathLabState,{selectedIndex:null,selectedMulti:[],build:{hundreds:0,tens:0,ones:0},placeValues:{ten_thousands:0,thousands:0,hundreds:0,tens:0,ones:0},numberInput:'',fractionSelected:[],rangeValue:null,orderPicked:[],tradeDone:false,grouped:false,feedback:null,hintLevel:0,groups:1,perGroup:1,rows:1,cols:1,shareRounds:0,measureValue:null,moneyCounts:{},clockHour:12,clockMinute:0,selectedDay:null,tallyCounts:[]})}
async function openMathLab(){setAppShellRootMode_(false);stopSpeaking();ensureMathLabStyles_();activeTopicId=12;activeExamContext=null;activeRoadmapContext=null;pendingTopicQuiz=null;setMainTabActive_('discover');mathLabState.view='home';mathLabState.trackCode=null;mathLabState.journeyIndex=null;updateNavTabs('12. Math Lab – Toán tư duy Mỹ','✨',null);showLoadingOverlay('Đang mở Math Lab...');try{await Promise.all([loadMathLabData_('12.1'),mathLabRefreshCurriculumGate_()]);hideLoadingOverlay();renderMathLabHome_()}catch(err){hideLoadingOverlay();showAppNotice(err.message||'Không tải được Math Lab')}}
function renderMathLabHome_(){ensureMathLabStyles_();const c=document.getElementById('view-dashboard-grid');if(!c)return;c.className='w-full grid grid-cols-1 md:grid-cols-2 gap-3';const total=MATH_LAB_TRACKS_CONFIG.reduce((n,t)=>n+t.journeys,0);const tracks=MATH_LAB_TRACKS_CONFIG.map(t=>{const d=mathLabCaches[t.code],p=d?mathLabTotalDone_(d):{done:0,total:t.journeys*4};const pct=p.total?Math.round(p.done*100/p.total):0;return `<button onclick="openMathLabTrack('${t.code}')" class="ml-track-card p-4 text-left min-h-[142px]"><div class="flex items-start justify-between gap-3"><div class="flex items-start gap-3 min-w-0"><div class="w-11 h-11 rounded-2xl bg-fuchsia-50 border border-fuchsia-100 flex items-center justify-center text-2xl shrink-0">${t.icon}</div><div class="min-w-0"><div class="text-[11px] font-black text-fuchsia-500">${t.code}</div><h3 class="text-base md:text-lg font-black text-slate-800 leading-tight mt-0.5">${escapeHtml(t.title)}</h3></div></div><span class="ml-chip text-[11px] shrink-0">${t.journeys} hành trình</span></div><p class="text-sm font-bold text-slate-500 mt-3 leading-relaxed">${escapeHtml(t.desc)}</p>${d?`<div class="mt-3"><div class="flex justify-between text-[11px] font-black text-slate-400 mb-1"><span>${p.done}/${p.total} trải nghiệm</span><span>${pct}%</span></div><div class="ml-progress"><i style="width:${pct}%"></i></div></div>`:''}</button>`}).join('');c.innerHTML=`<section class="ml-hero md:col-span-2"><div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"><div><div class="ml-kicker">Math Lab • Grade 3</div><h2 class="text-2xl md:text-4xl font-black text-slate-900 mt-1">Toán tư duy Mỹ</h2><p class="text-sm md:text-base font-bold text-slate-600 mt-2 max-w-3xl leading-relaxed">Cùng kiến thức Toán 3 Kết nối tri thức, nhưng con học bằng khám phá, thao tác, mô hình, giải thích và nhiều cách giải.</p><p class="font-black text-fuchsia-600 mt-3">Khám phá • Mô hình • Nhiều cách giải</p></div><div class="rounded-2xl bg-white/80 border border-violet-200 px-5 py-3 text-center font-black text-violet-700 min-w-[210px]"><div class="text-2xl">${total}</div><div class="text-xs mt-1">hành trình khám phá</div><div class="text-[11px] text-slate-400 mt-1">9 Learning Labs</div></div></div></section>${tracks}`;updateNavTabs('12. Math Lab – Toán tư duy Mỹ','✨',null);switchAppView('view-dashboard-grid')}
async function openMathLabTrack(code){stopSpeaking();showLoadingOverlay('Đang chuẩn bị '+code+'...');try{const [d]=await Promise.all([loadMathLabData_(code),mathLabRefreshCurriculumGate_()]);hideLoadingOverlay();mathLabState.view='track';mathLabState.trackCode=code;mathLabState.journeyIndex=null;renderMathLabTrack_(d)}catch(err){hideLoadingOverlay();showAppNotice(err.message||'Không tải được Learning Lab')}}
function renderMathLabTrack_(data){const c=document.getElementById('view-dashboard-grid');if(!c)return;const cfg=mathLabTrackConfig_(data?.display_code||mathLabState.trackCode);mathLabState.view='track';mathLabState.trackCode=cfg.code;mathLabState.journeyIndex=null;mathLabCache=data;const total=mathLabTotalDone_(data),pct=total.total?Math.round(total.done*100/total.total):0;c.className='w-full grid grid-cols-1 md:grid-cols-2 gap-3';const cards=(data.journeys||[]).map((j,i)=>{const p=mathLabJourneyProgress_(j),unlocked=mathLabCurriculumUnlocked_(j),status=!unlocked?`🔒 Sau Bài ${j.unlock_after_source_lesson}`:(p.pct===100?'Hoàn thành':p.done?'Đang khám phá':'Bắt đầu');return `<button onclick="${unlocked?`openMathLabJourney(${i})`:`mathLabShowLockedJourney_(${i})`}" class="ml-journey-card p-4 text-left min-h-[154px] ${unlocked?'':'opacity-55'}"><div class="flex items-start justify-between gap-3"><div class="flex gap-3 min-w-0"><div class="w-11 h-11 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-2xl shrink-0">${j.icon||'✨'}</div><div><div class="text-[11px] font-black text-fuchsia-500">${escapeHtml(j.id)}</div><h3 class="font-black text-slate-800 text-base md:text-lg leading-tight mt-0.5">${escapeHtml(j.title)}</h3></div></div><span class="ml-chip text-[11px]">${status}</span></div><p class="text-sm font-bold text-slate-500 mt-2 leading-relaxed line-clamp-2">${escapeHtml(j.goal||'')}</p><div class="mt-2 flex flex-wrap gap-1">${(j.sgk_targets||[]).slice(0,2).map(x=>`<span class="text-[10px] font-black px-2 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500">${escapeHtml(x)}</span>`).join('')}</div><div class="mt-3"><div class="flex justify-between text-[11px] font-black text-slate-400 mb-1"><span>${p.done}/${p.total} trải nghiệm</span><span>${p.pct}%</span></div><div class="ml-progress"><i style="width:${p.pct}%"></i></div></div></button>`}).join('');c.innerHTML=`<section class="ml-hero md:col-span-2"><div class="flex items-start justify-between gap-4 flex-wrap"><div><div class="ml-kicker">${cfg.code} • Math Lab</div><h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-1">${escapeHtml(cfg.title)}</h2><p class="text-sm md:text-base font-bold text-slate-600 mt-2 max-w-3xl">${escapeHtml(data.subtitle||'')}</p><p class="text-[11px] font-black text-slate-400 mt-2">🔓 Nội dung mở theo tiến độ Bài tập/SGK hiện tại; kiến thức chưa học không bị đưa xuống sớm.</p></div><div class="min-w-[190px]"><div class="flex justify-between text-xs font-black text-slate-500 mb-1"><span>Tiến trình</span><span>${pct}%</span></div><div class="ml-progress"><i style="width:${pct}%"></i></div><div class="text-[11px] font-bold text-slate-400 mt-1 text-right">${total.done}/${total.total} trải nghiệm</div></div></div></section>${cards}`;updateNavTabs('12. Math Lab – Toán tư duy Mỹ','✨',mathLabTrackShortTitle_(data));switchAppView('view-dashboard-grid')}
function openMathLabJourney(i){if(!mathLabCache?.journeys?.[i])return;if(!mathLabCurriculumUnlocked_(mathLabCache.journeys[i]))return mathLabShowLockedJourney_(i);stopSpeaking();mathLabState.view='activity';mathLabState.journeyIndex=Number(i);const j=mathLabCache.journeys[i],p=mathLabProgress_();let first=(j.activities||[]).findIndex(a=>!p[a.id]?.done);if(first<0)first=0;mathLabState.activityIndex=first;resetMathLabActivityState_();renderMathLabActivity_()}
function mathLabBase10Html_(m){if(!m||typeof m!=='object')return'';const h=Math.max(0,Number(m.hundreds||0)),t=Math.max(0,Number(m.tens||0)),o=Math.max(0,Number(m.ones||0));return `<div class="ml-base10"><div class="ml-block-group">${Array.from({length:Math.min(h,10)},()=>'<span class="ml-hundred"></span>').join('')}${Array.from({length:Math.min(t,20)},()=>'<span class="ml-ten"></span>').join('')}${Array.from({length:Math.min(o,30)},()=>'<span class="ml-one"></span>').join('')}</div><div class="w-full text-center text-xs font-black text-slate-500 mt-1">${h?`${h} trăm · `:''}${t?`${t} chục · `:''}${o} đơn vị</div></div>`}
function mathLabChoiceHtml_(x){if(x&&typeof x==='object'&&!Array.isArray(x))return mathLabBase10Html_(x);return `<span>${escapeHtml(String(x))}</span>`}
function mathLabStimulusHtml_(a){if(a.stimulus&&typeof a.stimulus==='object')return mathLabBase10Html_(a.stimulus);if(typeof a.stimulus==='string'||typeof a.stimulus==='number')return `<div class="text-center text-3xl md:text-4xl font-black text-violet-700 py-3 whitespace-pre-line">${escapeHtml(String(a.stimulus))}</div>`;if(a.collection?.clusters)return `<div class="ml-dotbox">${a.collection.clusters.map(n=>`<div class="ml-group">${Array.from({length:n},()=>'<i class="ml-dot"></i>').join('')}</div>`).join('')}</div>`;if(Number.isFinite(a.number))return `<div class="text-center text-4xl font-black text-violet-700 py-2">${a.number}</div>`;if(Number.isFinite(a.left)&&Number.isFinite(a.right))return `<div class="flex justify-center gap-4 py-3"><span class="ml-chip text-lg">${a.left}</span><span class="text-2xl font-black text-slate-300">?</span><span class="ml-chip text-lg">${a.right}</span></div>`;return''}
function mathLabCounter_(label,value,key,max=20){const lock=mathLabState.feedback?.correct?'disabled':'';return `<div class="ml-counter"><span class="font-black text-slate-500 min-w-[72px]">${escapeHtml(label)}</span><button ${lock} onclick="mathLabChangeGeneric('${key}',-1,${max})">−</button><strong>${value}</strong><button ${lock} onclick="mathLabChangeGeneric('${key}',1,${max})">+</button></div>`}
function mathLabInteractionHtml_(a){const lock=!!mathLabState.feedback?.correct;
if(a.type==='number_input'){return `<div class="py-2"><input ${lock?'disabled':''} class="ml-num-input" inputmode="numeric" type="number" value="${escapeHtml(String(mathLabState.numberInput??''))}" placeholder="Nhập đáp án" oninput="mathLabSetNumberInput(this.value)"></div>`}
if(a.type==='place_value_build'){const e=a.expected||{},keys=['ten_thousands','thousands','hundreds','tens','ones'].filter(k=>Object.prototype.hasOwnProperty.call(e,k)),labels={ten_thousands:'Chục nghìn',thousands:'Nghìn',hundreds:'Trăm',tens:'Chục',ones:'Đơn vị'},weights={ten_thousands:10000,thousands:1000,hundreds:100,tens:10,ones:1};const total=keys.reduce((s,k)=>s+Number(mathLabState.placeValues[k]||0)*weights[k],0);return `<div><div class="ml-place-grid" style="grid-template-columns:repeat(${Math.max(1,keys.length)},minmax(0,1fr))">${keys.map(k=>`<div class="ml-place-cell"><div class="ml-place-label">${labels[k]}</div><div class="ml-place-buttons"><button ${lock?'disabled':''} onclick="mathLabChangePlace('${k}',-1)">−</button><strong>${mathLabState.placeValues[k]||0}</strong><button ${lock?'disabled':''} onclick="mathLabChangePlace('${k}',1)">+</button></div></div>`).join('')}</div><div class="ml-place-total">Số đang dựng: ${total.toLocaleString('vi-VN')}</div></div>`}
if(a.type==='fraction_model'){const n=Math.max(1,Number(a.denominator||2)),selected=new Set(mathLabState.fractionSelected||[]);return `<div><div class="ml-fraction-grid" style="grid-template-columns:repeat(${Math.min(n,10)},minmax(36px,1fr))">${Array.from({length:n},(_,i)=>`<button ${lock?'disabled':''} onclick="mathLabToggleFraction(${i})" class="ml-fraction-cell ${selected.has(i)?'selected':''}" aria-label="Phần ${i+1}"></button>`).join('')}</div><div class="text-center mt-2 text-sm font-black text-violet-700">Đã tô ${selected.size}/${n} phần bằng nhau</div></div>`}
if(a.type==='open_number_line'||a.type==='measure_slider'){if(mathLabState.rangeValue===null)mathLabState.rangeValue=Math.round((Number(a.min)+Number(a.max))/2);return `<div class="ml-number-line"><div class="ml-number-line-value">${a.type==='measure_slider'?'Giá trị con chọn':'Vị trí con chọn'}: ${mathLabState.rangeValue}${a.unit?' '+escapeHtml(a.unit):''}</div><input ${lock?'disabled':''} type="range" min="${a.min}" max="${a.max}" step="1" value="${mathLabState.rangeValue}" oninput="mathLabSetRange(this.value)"><div class="ml-number-line-labels"><span>${a.min}</span><span>${Math.round((a.min+a.max)/2)}</span><span>${a.max}</span></div></div>`}
if(a.type==='base10_build'){const keys=a.allowed||['hundreds','tens','ones'],labs={hundreds:'Trăm',tens:'Chục',ones:'Đơn vị'};return `<div class="space-y-3">${mathLabBase10Html_(mathLabState.build)}<div class="grid grid-cols-1 sm:grid-cols-${Math.min(3,keys.length)} gap-2">${keys.map(k=>`<div class="ml-counter"><span class="font-black text-slate-500 min-w-[52px]">${labs[k]}</span><button ${lock?'disabled':''} onclick="mathLabChangeBuild('${k}',-1)">−</button><strong>${mathLabState.build[k]||0}</strong><button ${lock?'disabled':''} onclick="mathLabChangeBuild('${k}',1)">+</button></div>`).join('')}</div><div class="text-center text-sm font-black text-violet-700">Giá trị đang xây: ${(mathLabState.build.hundreds||0)*100+(mathLabState.build.tens||0)*10+(mathLabState.build.ones||0)}</div></div>`}
if(a.type==='bundle_trade'){const isH=Number.isFinite(a.tens_available),before=isH?{hundreds:0,tens:a.tens_available,ones:0}:{hundreds:0,tens:0,ones:a.ones_available};let after=before;if(mathLabState.tradeDone)after=isH?{hundreds:1,tens:a.tens_available-a.target_bundle_tens,ones:0}:{hundreds:0,tens:1,ones:a.ones_available-a.target_bundle};return `<div class="space-y-3">${mathLabBase10Html_(after)}<div class="text-center"><button ${lock?'disabled':''} onclick="mathLabDoTrade()" class="px-5 py-3 rounded-2xl bg-violet-600 text-white font-black pastel-btn">${mathLabState.tradeDone?'↩️ Đổi lại để quan sát':(isH?'🧺 Gom 10 chục → 1 trăm':'🧺 Bó 10 đơn vị → 1 chục')}</button></div></div>`}
if(a.type==='estimate_then_count'){const dots=Array.from({length:Number(a.actual||0)},()=>'<i class="ml-dot"></i>').join('');return `<div class="space-y-3"><div class="ml-dotbox">${dots}</div>${mathLabState.grouped?`<div class="text-center font-black text-violet-700">${a.expected_groups} nhóm 10 + ${a.remainder} vật lẻ = ${a.actual}</div>`:''}<div class="text-center"><button ${lock?'disabled':''} onclick="mathLabGroupEstimate()" class="px-5 py-3 rounded-2xl bg-violet-600 text-white font-black pastel-btn">🧺 Nhóm thành từng chục</button></div></div>`}
if(a.type==='order_numbers'){const picked=mathLabState.orderPicked||[];return `<div class="space-y-3"><div class="flex flex-wrap justify-center gap-2 min-h-[48px]">${picked.length?picked.map((x,i)=>`<span class="ml-chip text-lg">${i?'<b class="mr-2">→</b>':''}${x.value}</span>`).join(''):'<span class="text-sm font-bold text-slate-400">Chạm các số theo thứ tự</span>'}</div><div class="flex flex-wrap justify-center gap-2">${(a.numbers||[]).map((n,i)=>picked.some(x=>x.index===i)?'':`<button ${lock?'disabled':''} onclick="mathLabPickOrder(${i})" class="ml-choice !w-auto min-w-[88px] text-center text-xl">${n}</button>`).join('')}</div>${picked.length?'<div class="text-center"><button onclick="mathLabResetOrder()" class="text-xs font-black text-slate-500 underline">Làm lại thứ tự</button></div>':''}</div>`}
if(a.type==='group_build'){const g=mathLabState.groups,p=mathLabState.perGroup;return `<div class="space-y-3"><div class="ml-dotbox">${Array.from({length:g},()=>`<div class="ml-group">${Array.from({length:p},()=>'<i class="ml-dot"></i>').join('')}</div>`).join('')}</div><div class="grid sm:grid-cols-2 gap-2">${mathLabCounter_('Số nhóm',g,'groups',10)}${mathLabCounter_('Mỗi nhóm',p,'perGroup',10)}</div><div class="text-center font-black text-violet-700">${g} nhóm × ${p} = ${g*p} vật</div></div>`}
if(a.type==='array_build'){const r=mathLabState.rows,col=mathLabState.cols;return `<div class="space-y-3"><div class="ml-array ${a.visual==='tiles'?'tile':''}" style="grid-template-columns:repeat(${col},15px)">${Array.from({length:r*col},()=>'<i></i>').join('')}</div><div class="grid sm:grid-cols-2 gap-2">${mathLabCounter_('Số hàng',r,'rows',10)}${mathLabCounter_('Mỗi hàng',col,'cols',10)}</div><div class="text-center font-black text-violet-700">${r} × ${col} = ${r*col} chấm</div></div>`}
if(a.type==='equal_share'){const rounds=mathLabState.shareRounds,g=Number(a.groups||1),used=rounds*g;return `<div class="space-y-3"><div class="flex flex-wrap justify-center gap-3">${Array.from({length:g},(_,i)=>`<div class="ml-sharebox"><div class="w-full text-center text-xs font-black text-slate-400">Nhóm ${i+1}</div>${Array.from({length:rounds},()=>'<i class="ml-dot"></i>').join('')}</div>`).join('')}</div><div class="text-center font-black text-violet-700">Đã chia ${used}/${a.total} vật • mỗi nhóm ${rounds}</div><div class="flex justify-center gap-2"><button ${lock||rounds<=0?'disabled':''} onclick="mathLabShareRound(-1)" class="px-4 py-2 rounded-xl border-2 border-violet-200 font-black">− 1 vòng</button><button ${lock||used+g>a.total?'disabled':''} onclick="mathLabShareRound(1)" class="px-4 py-2 rounded-xl bg-violet-600 text-white font-black">+ 1 vòng chia</button></div></div>`}
if(a.type==='money_build'){const den=a.denominations||[],sum=den.reduce((s,d)=>s+d*Number(mathLabState.moneyCounts[d]||0),0);return `<div class="space-y-3"><div class="text-center text-2xl font-black text-violet-700">${sum.toLocaleString('vi-VN')} đồng</div><div class="grid sm:grid-cols-${Math.min(3,den.length)} gap-2">${den.map(d=>`<div class="ml-counter"><span class="font-black text-slate-500">${d.toLocaleString('vi-VN')}đ</span><button ${lock?'disabled':''} onclick="mathLabChangeMoney(${d},-1)">−</button><strong>${mathLabState.moneyCounts[d]||0}</strong><button ${lock?'disabled':''} onclick="mathLabChangeMoney(${d},1)">+</button></div>`).join('')}</div></div>`}
if(a.type==='clock_set'){const h=mathLabState.clockHour,m=mathLabState.clockMinute,ha=(h%12)*30+m*.5,ma=m*6;const nums=Array.from({length:12},(_,i)=>{const n=i+1,ang=n*30*Math.PI/180,x=50+41*Math.sin(ang),y=50-41*Math.cos(ang);return `<span class="ml-clock-num" style="left:${x}%;top:${y}%">${n}</span>`}).join('');return `<div class="space-y-3"><div class="ml-clock">${nums}<i class="ml-hand ml-hour" style="transform:translateX(-50%) rotate(${ha}deg)"></i><i class="ml-hand ml-minute" style="transform:translateX(-50%) rotate(${ma}deg)"></i></div><div class="text-center text-xl font-black text-violet-700">${h}:${String(m).padStart(2,'0')}</div><div class="grid sm:grid-cols-2 gap-2">${mathLabCounter_('Giờ',h,'clockHour',12)}${mathLabCounter_('Phút',m,'clockMinute',59)}</div></div>`}
if(a.type==='calendar_pick'){const heads=['T2','T3','T4','T5','T6','T7','CN'],offset=Math.max(0,Number(a.start_weekday||0)),blanks=Array.from({length:offset},()=>'<div class="ml-cal-blank"></div>').join('');return `<div class="ml-calendar">${heads.map(x=>`<div class="ml-cal-head">${x}</div>`).join('')}${blanks}${Array.from({length:Number(a.days||a.days_in_month||30)},(_,i)=>{const d=i+1;return `<button ${lock?'disabled':''} onclick="mathLabPickDay(${d})" class="ml-cal-day ${mathLabState.selectedDay===d?'selected':''}">${d}</button>`}).join('')}</div>`}
if(a.type==='data_tally'){if(!mathLabState.tallyCounts.length)mathLabState.tallyCounts=(a.categories||a.labels||[]).map(()=>0);return `<div class="space-y-2">${(a.categories||a.labels||[]).map((cat,i)=>`<div class="grid grid-cols-[1fr_auto] gap-3 items-center rounded-2xl bg-slate-50 border border-slate-200 p-3"><div><div class="font-black text-slate-700">${escapeHtml(cat)}</div><div class="text-lg tracking-widest text-violet-600">${'|'.repeat(mathLabState.tallyCounts[i]||0)||'–'}</div></div><div class="ml-counter"><button ${lock?'disabled':''} onclick="mathLabChangeTally(${i},-1)">−</button><strong>${mathLabState.tallyCounts[i]||0}</strong><button ${lock?'disabled':''} onclick="mathLabChangeTally(${i},1)">+</button></div></div>`).join('')}</div>`}
if(Array.isArray(a.choices)){const multi=Array.isArray(a.answer_indices),cols=a.choices.length===2?'sm:grid-cols-2':a.choices.length===3?'sm:grid-cols-3':'sm:grid-cols-4';return `<div class="grid grid-cols-1 ${cols} gap-2">${a.choices.map((x,i)=>{const sel=multi?mathLabState.selectedMulti.includes(i):mathLabState.selectedIndex===i;let cls=sel?' is-selected':'';if(mathLabState.feedback?.correct&&sel)cls+=' is-correct';if(mathLabState.feedback&&!mathLabState.feedback.correct&&sel)cls+=' is-wrong';return `<button ${lock?'disabled':''} onclick="mathLabSelectChoice(${i},${multi?'true':'false'})" class="ml-choice${cls}">${mathLabChoiceHtml_(x)}</button>`}).join('')}</div>`}return `<div class="text-center text-sm font-bold text-slate-500">Hoạt động đang được chuẩn bị.</div>`}
function renderMathLabActivity_(){const data=mathLabCache,j=data?.journeys?.[mathLabState.journeyIndex],a=j?.activities?.[mathLabState.activityIndex];if(!j||!a)return renderMathLabTrack_(data);const c=document.getElementById('view-dashboard-grid');if(!c)return;c.className='w-full flex justify-center';const p=mathLabJourneyProgress_(j),dots=j.activities.map((x,i)=>`<i class="ml-step-dot ${mathLabProgress_()[x.id]?.done?'done':''} ${i===mathLabState.activityIndex?'current':''}"></i>`).join(''),hint=mathLabState.hintLevel>0?a.hints?.[mathLabState.hintLevel-1]:null,fb=mathLabState.feedback,badge=a.transfer?'<span class="ml-chip text-[11px]">Transfer</span>':'<span class="ml-chip text-[11px]">Khám phá</span>';c.innerHTML=`<section class="w-full max-w-4xl ml-journey-card p-4 md:p-6"><div class="flex flex-wrap items-start justify-between gap-3 border-b border-violet-100 pb-4"><div><div class="text-[11px] font-black text-fuchsia-500">${escapeHtml(j.id)} • ${escapeHtml(j.concept||'')}</div><h2 class="text-xl md:text-2xl font-black text-slate-900 mt-1">${j.icon||'✨'} ${escapeHtml(j.title)}</h2><div class="flex gap-1.5 items-center mt-2">${dots}</div></div><div class="text-right">${badge}<div class="text-xs font-black text-slate-400 mt-2">Trải nghiệm ${mathLabState.activityIndex+1}/${j.activities.length}</div><div class="text-[11px] font-bold text-slate-400">${p.done}/${p.total} đã hoàn thành</div></div></div><div class="mt-4 ml-teacher"><div class="flex items-start gap-2"><span class="text-xl">🐝</span><div class="flex-1">${escapeHtml(a.teacher||'')}</div><button onclick="mathLabSpeakCurrent()" class="shrink-0 w-9 h-9 rounded-xl bg-white border border-violet-200 text-violet-600">🔊</button></div></div><div class="mt-5 ml-prompt">${escapeHtml(a.prompt||'')}</div><div class="mt-4">${mathLabStimulusHtml_(a)}</div><div class="mt-4">${mathLabInteractionHtml_(a)}</div>${hint?`<div class="ml-hint mt-4">💡 ${escapeHtml(hint)}</div>`:''}${fb?`<div class="ml-feedback ${fb.correct?'ok':'no'} mt-4">${fb.correct?'🌟':'🌱'} ${escapeHtml(fb.message)}</div>`:''}<div class="mt-5 flex flex-wrap items-center justify-between gap-2"><div class="flex gap-2"><button onclick="mathLabBackActivity()" class="px-4 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-600 font-black pastel-btn">← ${mathLabState.activityIndex>0?'Trước':'Các hành trình'}</button><button onclick="mathLabShowHint()" class="px-4 py-2.5 rounded-xl bg-amber-50 border-2 border-amber-200 text-amber-700 font-black pastel-btn">💡 Gợi ý</button></div><div>${fb?.correct?`<button onclick="mathLabContinue()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-black pastel-btn">${mathLabState.activityIndex>=j.activities.length-1?'Hoàn thành Journey →':'Tiếp tục →'}</button>`:`<button onclick="mathLabCheckActivity()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black pastel-btn">Kiểm tra cách nghĩ</button>`}</div></div></section>`;updateNavTabs('12. Math Lab – Toán tư duy Mỹ','✨',mathLabTrackShortTitle_(data),`${j.id} ${j.title}`);switchAppView('view-dashboard-grid')}
function mathLabSelectChoice(i,multi){if(mathLabState.feedback?.correct)return;if(multi){const s=new Set(mathLabState.selectedMulti||[]);s.has(i)?s.delete(i):s.add(i);mathLabState.selectedMulti=[...s]}else mathLabState.selectedIndex=Number(i);mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabSetNumberInput(v){if(mathLabState.feedback?.correct)return;mathLabState.numberInput=String(v??'');mathLabState.feedback=null}
function mathLabChangePlace(k,d){if(mathLabState.feedback?.correct)return;mathLabState.placeValues[k]=Math.max(0,Math.min(9,Number(mathLabState.placeValues[k]||0)+Number(d)));mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabToggleFraction(i){if(mathLabState.feedback?.correct)return;const s=new Set(mathLabState.fractionSelected||[]);s.has(i)?s.delete(i):s.add(i);mathLabState.fractionSelected=[...s];mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabSetRange(v){mathLabState.rangeValue=Number(v);mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabChangeBuild(k,d){if(mathLabState.feedback?.correct)return;mathLabState.build[k]=Math.max(0,Math.min(20,(mathLabState.build[k]||0)+Number(d)));mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabChangeGeneric(k,d,max=20){if(mathLabState.feedback?.correct)return;let v=Number(mathLabState[k]||0)+Number(d);if(k==='clockHour'){if(v<1)v=12;if(v>12)v=1}else if(k==='clockMinute'){v=Math.max(0,Math.min(59,v))}else v=Math.max(1,Math.min(Number(max)||20,v));mathLabState[k]=v;mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabDoTrade(){if(mathLabState.feedback?.correct)return;mathLabState.tradeDone=!mathLabState.tradeDone;mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabGroupEstimate(){if(mathLabState.feedback?.correct)return;mathLabState.grouped=true;mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabPickOrder(i){if(mathLabState.feedback?.correct)return;const a=mathLabCache?.journeys?.[mathLabState.journeyIndex]?.activities?.[mathLabState.activityIndex];if(!a||mathLabState.orderPicked.some(x=>x.index===i))return;mathLabState.orderPicked.push({index:i,value:a.numbers[i]});mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabResetOrder(){mathLabState.orderPicked=[];mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabShareRound(d){const a=mathLabCache?.journeys?.[mathLabState.journeyIndex]?.activities?.[mathLabState.activityIndex];if(!a)return;mathLabState.shareRounds=Math.max(0,mathLabState.shareRounds+Number(d));mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabChangeMoney(den,d){const k=String(den);mathLabState.moneyCounts[k]=Math.max(0,Math.min(20,Number(mathLabState.moneyCounts[k]||0)+Number(d)));mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabPickDay(d){mathLabState.selectedDay=Number(d);mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabChangeTally(i,d){mathLabState.tallyCounts[i]=Math.max(0,Math.min(20,Number(mathLabState.tallyCounts[i]||0)+Number(d)));mathLabState.feedback=null;renderMathLabActivity_()}
function mathLabEqual_(a,b){return JSON.stringify(a)===JSON.stringify(b)}
function mathLabCheckActivity(){const j=mathLabCache?.journeys?.[mathLabState.journeyIndex],a=j?.activities?.[mathLabState.activityIndex];if(!a)return;let ok=false,has=true;if(a.type==='number_input'){has=String(mathLabState.numberInput??'').trim()!=='';ok=has&&Number(mathLabState.numberInput)===Number(a.target)}else if(a.type==='place_value_build'){const e=a.expected||{};const keys=Object.keys(e);has=keys.length>0;ok=has&&keys.every(k=>Number(mathLabState.placeValues[k]||0)===Number(e[k]||0))}else if(a.type==='fraction_model'){has=(mathLabState.fractionSelected||[]).length>0;ok=has&&Number((mathLabState.fractionSelected||[]).length)===Number(a.shade_count||1)}else if(a.type==='open_number_line'||a.type==='measure_slider'){has=mathLabState.rangeValue!==null;ok=has&&Math.abs(mathLabState.rangeValue-Number(a.target))<=Number(a.tolerance||0)}else if(a.type==='base10_build'){const e=a.expected||{};ok=['hundreds','tens','ones'].every(k=>Number(mathLabState.build[k]||0)===Number(e[k]||0))}else if(a.type==='bundle_trade'){has=mathLabState.tradeDone;ok=has}else if(a.type==='estimate_then_count'){has=mathLabState.grouped;ok=has}else if(a.type==='order_numbers'){has=mathLabState.orderPicked.length===(a.numbers||[]).length;ok=has&&mathLabEqual_(mathLabState.orderPicked.map(x=>x.value),a.answer)}else if(a.type==='group_build'){ok=Number(mathLabState.groups)===Number(a.expected_groups)&&Number(mathLabState.perGroup)===Number(a.expected_per_group)}else if(a.type==='array_build'){ok=Number(mathLabState.rows)===Number(a.expected_rows)&&Number(mathLabState.cols)===Number(a.expected_cols)}else if(a.type==='equal_share'){has=mathLabState.shareRounds>0;ok=Number(mathLabState.shareRounds)===Number(a.answer_each)&&Number(mathLabState.shareRounds)*Number(a.groups)===Number(a.total)}else if(a.type==='money_build'){const sum=(a.denominations||[]).reduce((s,d)=>s+Number(d)*Number(mathLabState.moneyCounts[d]||0),0);has=sum>0;ok=sum===Number(a.target)}else if(a.type==='clock_set'){has=true;ok=Number(mathLabState.clockHour)===Number(a.target_hour)&&Number(mathLabState.clockMinute)===Number(a.target_minute)}else if(a.type==='calendar_pick'){has=mathLabState.selectedDay!==null;ok=Number(mathLabState.selectedDay)===Number(a.target_day)}else if(a.type==='data_tally'){has=(mathLabState.tallyCounts||[]).some(x=>x>0);ok=mathLabEqual_((mathLabState.tallyCounts||[]).map(Number),(a.targets||[]).map(Number))}else if(Array.isArray(a.answer_indices)){has=(mathLabState.selectedMulti||[]).length>0;const x=[...(mathLabState.selectedMulti||[])].sort((m,n)=>m-n),y=[...a.answer_indices].sort((m,n)=>m-n);ok=has&&mathLabEqual_(x,y)}else if(Array.isArray(a.choices)){has=mathLabState.selectedIndex!==null;if(has)ok=Number.isInteger(a.answer_index)?Number(mathLabState.selectedIndex)===Number(a.answer_index):mathLabEqual_(a.choices[mathLabState.selectedIndex],a.answer)}else has=false;if(!has)return showAppNotice('Con hãy thao tác hoặc chọn một cách nghĩ trước nhé!');if(ok){mathLabMarkDone_(a.id);mathLabState.feedback={correct:true,message:a.success||'Con đã hiểu đúng ý tưởng này!'};if(a.success_audio)speakVietnamese(a.success_audio,.92)}else{mathLabState.feedback={correct:false,message:a.wrong_audio||'Chưa khớp rồi. Con thử quan sát lại nhé.'};mathLabState.hintLevel=Math.max(1,mathLabState.hintLevel||0);if(a.wrong_audio)speakVietnamese(a.wrong_audio,.92)}renderMathLabActivity_()}
function mathLabShowHint(){const a=mathLabCache?.journeys?.[mathLabState.journeyIndex]?.activities?.[mathLabState.activityIndex];if(!a?.hints?.length)return showAppNotice('Hoạt động này không cần thêm gợi ý.');mathLabState.hintLevel=Math.min(a.hints.length,(mathLabState.hintLevel||0)+1);if(a.hints_audio?.[mathLabState.hintLevel-1])speakVietnamese(a.hints_audio[mathLabState.hintLevel-1],.92);renderMathLabActivity_()}
function mathLabSpeakCurrent(){const a=mathLabCache?.journeys?.[mathLabState.journeyIndex]?.activities?.[mathLabState.activityIndex];if(a)speakVietnamese([a.teacher_audio||a.teacher,a.instruction_audio||a.prompt].filter(Boolean).join('. '),.92)}
function mathLabBackActivity(){stopSpeaking();if(mathLabState.activityIndex>0){mathLabState.activityIndex--;resetMathLabActivityState_();return renderMathLabActivity_()}return renderMathLabTrack_(mathLabCache)}
function mathLabContinue(){const j=mathLabCache?.journeys?.[mathLabState.journeyIndex];if(!j)return;if(mathLabState.activityIndex<j.activities.length-1){mathLabState.activityIndex++;resetMathLabActivityState_();return renderMathLabActivity_()}return renderMathLabJourneyComplete_()}
function renderMathLabJourneyComplete_(){const j=mathLabCache?.journeys?.[mathLabState.journeyIndex];if(!j)return renderMathLabTrack_(mathLabCache);const c=document.getElementById('view-dashboard-grid');c.className='w-full flex justify-center';const ev=(j.evidence||[]).map(x=>`<li class="flex gap-2"><span>✓</span><span>${escapeHtml(x)}</span></li>`).join('');c.innerHTML=`<section class="w-full max-w-3xl ml-hero text-center"><div class="text-5xl mb-2">🌟</div><div class="ml-kicker">Journey complete</div><h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-1">${escapeHtml(j.title)}</h2><p class="font-bold text-slate-600 mt-3">Con vừa hoàn thành một hành trình khám phá, không phải chỉ một bộ câu hỏi.</p><div class="mt-5 text-left bg-white/80 border border-violet-100 rounded-2xl p-4"><div class="text-sm font-black text-violet-700 mb-2">Con đã luyện cách:</div><ul class="space-y-2 text-sm font-bold text-slate-600">${ev}</ul></div><div class="mt-5 flex flex-wrap justify-center gap-2"><button onclick="renderMathLabTrack_(mathLabCache)" class="px-5 py-3 rounded-xl bg-white border-2 border-violet-200 text-violet-700 font-black pastel-btn">← Chọn Journey khác</button><button onclick="openMathLabJourney(${mathLabState.journeyIndex})" class="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-black pastel-btn">Khám phá lại</button></div></section>`;updateNavTabs('12. Math Lab – Toán tư duy Mỹ','✨',mathLabTrackShortTitle_(mathLabCache),`${j.id} ${j.title}`);switchAppView('view-dashboard-grid')}



// ==========================================
// CHỦ ĐỀ 1: SỐ HỌC - HỌC ĐỂ HIỂU
// 1.1 -> 1.5 là bài học tương tác, không chấm điểm.
// 1.6 là khu thực hành tổng hợp từ ngân hàng câu hỏi hiện có.
// ==========================================
const NUMBER_SENSE_LESSONS = [
    {
        code:'1.1', icon:'🔢', title:'Đọc, viết, cấu tạo và thứ tự số đến 100 000',
        goal:'Hiểu giá trị của mỗi chữ số theo vị trí, biết tách - ghép số và nhận ra thứ tự liền trước - liền sau như một bước chuyển 1 đơn vị.',
        story:'Cô Ong Vàng có 5 chiếc hộp: chục nghìn, nghìn, trăm, chục và đơn vị. Đặt đúng chữ số vào đúng hộp thì ta đọc được số; dịch sang số đứng cạnh trong dãy số tự nhiên thì chỉ thay đổi 1 đơn vị.',
        know:['Mỗi chữ số có giá trị phụ thuộc vào hàng của nó.','Đọc từ hàng cao xuống hàng thấp.','Khi một hàng có chữ số 0, vẫn phải giữ đúng vị trí của hàng đó.','Hai số đứng liền nhau trong dãy số tự nhiên hơn kém nhau 1 đơn vị: liền trước là −1, liền sau là +1.'],
        example:'42 304 < 42 305 < 42 306 và 42 305 = 40 000 + 2 000 + 300 + 5.',
        mistake:'Bỏ quên chữ số 0, ghép sai thứ tự các hàng hoặc nhầm khi chuyển qua mốc 9 999 → 10 000.',
        remember:'Nhìn hàng → đọc số → tách số → nhìn số đứng cạnh để kiểm tra thứ tự.',
        activity:'place_value'
    },
    {
        code:'1.2', icon:'📍', title:'Tia số – vị trí và khoảng cách giữa các số',
        goal:'Hiểu bước nhảy của tia số, suy ra số ở vạch chưa ghi, xác định vị trí và khoảng cách giữa các số lớn.',
        story:'Ở lớp 3, mỗi vạch trên tia số không nhất thiết tăng 1. Một bước có thể là 10, 100, 1 000 hoặc nhiều hơn. Vì thế trước khi đọc tia số, con phải tìm “bước nhảy” của mỗi khoảng.',
        know:['Tìm bước nhảy bằng cách nhìn hai mốc đã biết và số khoảng bằng nhau giữa chúng.','Đi sang phải thì cộng đúng một bước nhảy; đi sang trái thì trừ đúng một bước nhảy.','Khoảng cách giữa hai số bằng số khoảng × độ lớn mỗi bước; từ đó có thể suy ra các vạch bị che.'],
        example:'12 000 → 13 000 → 14 000 → 15 000 → 16 000: mỗi khoảng tăng 1 000.',
        mistake:'Mặc định mỗi vạch đều +1, hoặc đếm số vạch thay vì đếm số khoảng giữa hai mốc.',
        remember:'Tìm bước nhảy trước → xác định vị trí → tính khoảng cách.',
        activity:'number_line'
    },
    {
        code:'1.3', icon:'⚖️', title:'So sánh và sắp xếp số đến 100 000',
        goal:'Biết so sánh hai số bằng cách nhìn từ hàng cao nhất và biết sắp xếp nhiều số.',
        story:'Hai số giống như hai đội xếp hàng. Ta so từ vị trí quan trọng nhất bên trái; hàng đầu tiên khác nhau sẽ quyết định số nào lớn hơn.',
        know:['Số có nhiều chữ số hơn thì lớn hơn.','Nếu cùng số chữ số, so từ hàng cao nhất sang phải.','Muốn sắp xếp, so từng cặp theo cùng một quy tắc.'],
        example:'52 407 > 52 389 vì ở hàng trăm: 4 > 3.',
        mistake:'Nhìn hàng đơn vị trước hoặc so các chữ số ở vị trí khác nhau.',
        remember:'Cùng số chữ số → so từ trái sang phải.',
        activity:'compare'
    },
    {
        code:'1.4', icon:'🎯', title:'Làm tròn số',
        goal:'Hiểu làm tròn là chọn một số gần đúng, dễ nhớ hơn nhưng vẫn gần số ban đầu.',
        story:'Cô Ong Vàng đặt số lên tia số giữa hai mốc tròn. Số gần mốc nào hơn thì ta làm tròn về mốc đó.',
        know:['Xác định hàng cần làm tròn.','Nhìn chữ số ngay bên phải: 0–4 giữ nguyên, 5–9 tăng 1.','Các chữ số phía sau đổi thành 0.'],
        example:'7 462 làm tròn đến hàng trăm được 7 500.',
        mistake:'Nhìn nhầm chữ số quyết định hoặc quên đổi phần phía sau thành 0.',
        remember:'0–4 xuống • 5–9 lên.',
        activity:'rounding'
    },
    {
        code:'1.5', icon:'🏛️', title:'Chữ số La Mã từ I đến XX',
        goal:'Hiểu ba kí hiệu I, V, X và cách ghép chúng để đọc - viết các số từ 1 đến 20.',
        story:'Người La Mã dùng các kí hiệu I, V, X để ghi số. Ghép đúng thứ tự sẽ tạo thành các số quen thuộc trên đồng hồ và sách.',
        know:['I = 1, V = 5, X = 10.','IV = 4, IX = 9 vì I đứng trước số lớn hơn để biểu thị bớt đi 1.','Từ XI đến XX, ta tiếp tục ghép X với I, V hoặc X.'],
        example:'14 = XIV; 19 = XIX; 20 = XX.',
        mistake:'Viết IIII thay cho IV hoặc VIIII thay cho IX.',
        remember:'Nhớ chắc I, V, X; sau đó quan sát thứ tự để cộng hoặc bớt.',
        activity:'roman'
    }
];

const numberSenseState_ = { lessonIndex:0, exampleIndex:0, feedback:'' };

function ensureNumberSenseStyles_(){
    if(document.getElementById('number-sense-learning-style')) return;
    const st=document.createElement('style');
    st.id='number-sense-learning-style';
    st.textContent=`
      .ns-shell{width:100%;max-width:82rem;margin:0 auto}.ns-hero{background:linear-gradient(135deg,#fff7fb,#faf5ff);border:2px solid #fbcfe8;border-radius:24px;padding:18px 20px;box-shadow:0 8px 22px rgba(236,72,153,.08)}
      .ns-grid{display:grid;grid-template-columns:1.04fr .96fr;gap:14px}.ns-card{background:#fff;border:2px solid #f1e5f5;border-radius:22px;padding:16px;box-shadow:0 4px 14px rgba(76,29,149,.06)}
      .ns-title{font-size:clamp(1.28rem,2.1vw,1.72rem);font-weight:1000;color:#be185d;line-height:1.25}.ns-goal{font-size:1.02rem;font-weight:800;color:#64748b;line-height:1.55}
      .ns-kicker{font-size:.82rem;font-weight:1000;letter-spacing:.12em;text-transform:uppercase;color:#7c3aed}.ns-know li{font-size:1rem;font-weight:800;color:#475569;line-height:1.5}
      .ns-example{font-size:1.28rem;font-weight:1000;color:#6d28d9;text-align:center;background:#faf5ff;border:2px dashed #d8b4fe;border-radius:18px;padding:14px}
      .ns-lab{background:linear-gradient(180deg,#f0fdf4,#fff);border:2px solid #bbf7d0;border-radius:22px;padding:16px}.ns-lab-title{font-size:1.05rem;font-weight:1000;color:#15803d}
      .ns-action{min-height:48px;padding:10px 14px;border-radius:14px;border:2px solid #ddd6fe;background:#fff;color:#6d28d9;font-weight:1000;font-size:1rem;box-shadow:0 2px 7px rgba(109,40,217,.07)}
      .ns-action:hover{border-color:#a78bfa;transform:translateY(-1px)}.ns-primary{background:linear-gradient(135deg,#a855f7,#7c3aed);color:#fff;border-color:#8b5cf6}
      .ns-feedback{min-height:46px;border-radius:14px;padding:10px 12px;font-weight:900;font-size:.98rem;background:#fff7ed;border:1.5px solid #fed7aa;color:#9a3412}
      .ns-place{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px}.ns-place>div{background:#fff;border:1.5px solid #d8b4fe;border-radius:14px;padding:8px 4px;text-align:center}.ns-place small{display:block;font-weight:900;color:#7c3aed;font-size:.72rem}.ns-place strong{font-size:1.45rem;color:#312e81}
      .ns-line{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:7px;align-items:center}.ns-line button{min-height:54px;border-radius:14px;border:2px solid #bae6fd;background:#f0f9ff;font-weight:1000;color:#0369a1;font-size:1rem}.ns-line button:hover{background:#e0f2fe}
      .ns-axis-wrap{overflow-x:auto;padding:10px 4px 4px}.ns-axis{position:relative;display:grid;grid-template-columns:repeat(var(--ticks,5),minmax(92px,1fr));min-width:520px;padding:16px 0 2px}.ns-axis:before{content:'';position:absolute;left:5%;right:5%;top:29px;height:4px;border-radius:99px;background:linear-gradient(90deg,#93c5fd,#8b5cf6,#f9a8d4)}.ns-tick{position:relative;text-align:center;z-index:1}.ns-tick:before{content:'';display:block;width:4px;height:24px;border-radius:99px;background:#7c3aed;margin:0 auto 7px;box-shadow:0 0 0 4px #fff}.ns-tick-label{display:inline-block;min-width:72px;padding:5px 7px;border-radius:10px;background:#fff;border:1.5px solid #ddd6fe;color:#5b21b6;font-weight:1000;font-size:.9rem}.ns-tick-label.is-hidden{border-style:dashed;color:#c026d3;background:#fdf4ff}.ns-step-note{display:inline-flex;align-items:center;gap:6px;padding:7px 10px;border-radius:999px;background:#eff6ff;border:1.5px solid #bfdbfe;color:#1d4ed8;font-weight:1000;font-size:.9rem}.ns-choice-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.ns-choice-row button{min-height:58px;border-radius:15px;border:2px solid #e9d5ff;background:#fff;font-size:1.15rem;font-weight:1000;color:#7e22ce}
      .ns-remember{background:#fffbeb;border:2px solid #fde68a;border-radius:18px;padding:12px 14px;font-weight:900;color:#92400e;font-size:1rem}
      .ns-hub-card{min-height:58px;padding:9px 11px!important}.ns-hub-card .badge{font-size:.72rem;font-weight:1000;white-space:nowrap}
      @media(max-width:800px){.ns-grid{grid-template-columns:1fr}.ns-shell{max-width:100%}.ns-place{grid-template-columns:repeat(5,minmax(54px,1fr));overflow-x:auto}.ns-choice-row{grid-template-columns:1fr}.ns-line{grid-template-columns:repeat(5,minmax(74px,1fr));overflow-x:auto}}
    `;
    document.head.appendChild(st);
}

function showNumberSenseHub_(topicObj){
    ensureNumberSenseStyles_();
    pendingTopicQuiz={topicNum:1,topicName:'1. Số học',questions:topicObj.questions};
    const container=document.getElementById('view-dashboard-grid');
    container.className='w-full';
    const learningCards=NUMBER_SENSE_LESSONS.map((x,i)=>`
      <button onclick="openNumberSenseLesson_(${i})" class="ns-hub-card pastel-card p-4 text-left hover:border-pink-400 transition-all">
        <div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center text-lg shrink-0">${x.icon}</div><div class="min-w-0 flex-1 flex items-center justify-between gap-2"><div class="text-base md:text-lg font-black text-pink-700 leading-tight">${x.code}. ${escapeHtml(x.title)}</div><span class="badge inline-block px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200 shrink-0">Học để hiểu</span></div></div>
      </button>`).join('');
    container.innerHTML=`<section class="ns-shell">
      <div class="ns-hero mb-3"><div class="ns-kicker">Số học • học để hiểu</div><h2 class="ns-title mt-1">Từ nhìn thấy → hiểu bản chất → tự làm được</h2><p class="ns-goal mt-2">Học từng phần rồi thực hành tổng hợp ở <b>1.6</b>.</p></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">${learningCards}
        <button onclick="startNumberSensePractice_()" class="ns-hub-card pastel-card p-4 text-left border-2 border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50 transition-all">
          <div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-lg shrink-0">✏️</div><div class="min-w-0 flex-1 flex items-center justify-between gap-2"><div class="text-base md:text-lg font-black text-emerald-700 leading-tight">1.6. Thực hành nền tảng</div><span class="badge inline-block px-2 py-0.5 rounded-full bg-white text-emerald-700 border border-emerald-200 shrink-0">30 câu / lượt</span></div></div>
        </button>
      </div></section>`;
    updateNavTabs('1. Số học','🔢','Học để hiểu');
    switchAppView('view-dashboard-grid');
}

function openNumberSenseLesson_(index){
    ensureNumberSenseStyles_(); stopSpeaking(); numberSenseState_.lessonIndex=index; numberSenseState_.exampleIndex=0; numberSenseState_.feedback=''; renderNumberSenseLesson_();
}

function renderNumberSenseLesson_(){
    const l=NUMBER_SENSE_LESSONS[numberSenseState_.lessonIndex]; if(!l)return;
    const container=document.getElementById('view-dashboard-grid'); container.className='w-full';
    const know=l.know.map(x=>`<li class="flex gap-2"><span class="text-pink-500">●</span><span>${escapeHtml(x)}</span></li>`).join('');
    container.innerHTML=`<section class="ns-shell">
      <div class="flex items-center justify-between gap-2 mb-3"><button onclick="showNumberSenseHub_(pendingTopicQuiz)" class="ns-action">← Mục 1</button><button onclick="speakVietnamese('${String(l.story+' '+l.know.join(' ')).replace(/'/g,"\\'")}',.94)" class="ns-action">🔊 Nghe cô giảng</button></div>
      <div class="ns-grid"><article class="ns-card"><div class="ns-kicker">${l.code} • Học để hiểu</div><h2 class="ns-title mt-1">${l.icon} ${escapeHtml(l.title)}</h2><p class="ns-goal mt-2"><b>Mục tiêu:</b> ${escapeHtml(l.goal)}</p><div class="mt-4 p-3 rounded-2xl bg-pink-50 border border-pink-100 text-slate-700 font-bold leading-relaxed">🐝 ${escapeHtml(l.story)}</div><h3 class="mt-4 font-black text-violet-700 text-lg">Con cần hiểu</h3><ul class="ns-know mt-2 space-y-2">${know}</ul><div class="ns-example mt-4">${escapeHtml(l.example)}</div><div class="mt-3 text-sm md:text-base font-bold text-rose-700 bg-rose-50 border border-rose-100 rounded-xl p-3">⚠️ Hay nhầm: ${escapeHtml(l.mistake)}</div><div class="ns-remember mt-3">💡 Ghi nhớ: ${escapeHtml(l.remember)}</div></article><aside class="ns-lab"><div class="ns-lab-title">🧩 Bé thao tác cùng cô</div><p class="text-sm md:text-base font-bold text-slate-600 mt-1">Không tính điểm. Sai thì xem gợi ý và thử lại.</p><div id="number-sense-lab" class="mt-4"></div></aside></div>
      <div class="mt-3 flex justify-between gap-2"><button onclick="numberSensePrev_()" class="ns-action">← Bài trước</button><button onclick="numberSenseNext_()" class="ns-action ns-primary">Bài tiếp theo →</button></div></section>`;
    renderNumberSenseActivity_(); updateNavTabs('1. Số học','🔢',l.code+' '+l.title); switchAppView('view-dashboard-grid');
}

function renderNumberSenseActivity_(){
    const l=NUMBER_SENSE_LESSONS[numberSenseState_.lessonIndex], box=document.getElementById('number-sense-lab'); if(!box)return;
    let html='';
    if(l.activity==='place_value'){
      const nums=[42305,73406,90218,15002], n=nums[numberSenseState_.exampleIndex%nums.length]; const d=String(n).padStart(5,'0').split('');
      html=`<div class="ns-place">${['Chục nghìn','Nghìn','Trăm','Chục','Đơn vị'].map((x,i)=>`<div><small>${x}</small><strong>${d[i]}</strong></div>`).join('')}</div><div class="mt-4 text-center text-xl font-black text-violet-800">${formatMathNumberValue_(n)}</div><div class="mt-3 text-center font-bold text-slate-600">Hãy đọc từng hàng từ trái sang phải. Sau đó bấm để xem cách tách số.</div><div class="mt-3 flex flex-wrap justify-center gap-2"><button class="ns-action ns-primary" onclick="numberSenseFeedback_('${formatMathNumberValue_(n)} = ${Number(d[0])*10000?formatMathNumberValue_(Number(d[0])*10000)+' + ':''}${Number(d[1])*1000?formatMathNumberValue_(Number(d[1])*1000)+' + ':''}${Number(d[2])*100?formatMathNumberValue_(Number(d[2])*100)+' + ':''}${Number(d[3])*10?formatMathNumberValue_(Number(d[3])*10)+' + ':''}${d[4]}')">Tách số</button><button class="ns-action" onclick="numberSenseAnotherExample_()">Ví dụ khác</button></div>`;
    } else if(l.activity==='number_line'){
      const mode=numberSenseState_.exampleIndex%4;
      const axis=(vals, hiddenIndex=-1)=>`<div class="ns-axis-wrap"><div class="ns-axis" style="--ticks:${vals.length}">${vals.map((v,i)=>`<div class="ns-tick"><span class="ns-tick-label ${i===hiddenIndex?'is-hidden':''}">${i===hiddenIndex?'?':formatMathNumberValue_(v)}</span></div>`).join('')}</div></div>`;
      if(mode===0){
        const vals=[12000,13000,14000,15000,16000];
        html=`<div class="font-black text-slate-700 mb-2">Từ <span class="text-violet-700">12 000</span> đến <span class="text-violet-700">16 000</span> được chia thành <b>4 khoảng bằng nhau</b>. Mỗi khoảng ứng với bao nhiêu?</div>${axis(vals)}<div class="text-center mb-3"><span class="ns-step-note">🔎 Tìm bước nhảy trước khi đọc từng vạch</span></div><div class="ns-choice-row">${[500,1000,4000].map(v=>`<button onclick="numberSenseCheck_(${v===1000},'Đúng! 16 000 − 12 000 = 4 000; chia 4 khoảng được 1 000 cho mỗi bước.','Con đừng đếm số vạch. Hãy lấy 16 000 − 12 000 rồi chia cho 4 khoảng bằng nhau.')">${formatMathNumberValue_(v)}</button>`).join('')}</div>`;
      } else if(mode===1){
        const vals=[32000,34000,36000,38000,40000];
        html=`<div class="font-black text-slate-700 mb-2">Một vạch bị che. Hãy tìm số ở vị trí <span class="text-fuchsia-600">?</span>.</div>${axis(vals,2)}<div class="text-center mb-3"><span class="ns-step-note">Mỗi bước: +2 000</span></div><div class="ns-choice-row">${[35000,36000,37000].map(v=>`<button onclick="numberSenseCheck_(${v===36000},'Đúng! 34 000 + 2 000 = 36 000; kiểm tra tiếp 36 000 + 2 000 = 38 000.','Hai mốc 32 000 → 34 000 cho biết mỗi bước tăng 2 000. Con tiếp tục cộng đúng bước đó.')">${formatMathNumberValue_(v)}</button>`).join('')}</div>`;
      } else if(mode===2){
        const vals=[35000,37000,39000,41000];
        html=`<div class="font-black text-slate-700 mb-2">Ong Vàng bắt đầu ở <span class="text-violet-700">35 000</span>. Mỗi lần bay sang phải là <b>2 000</b>. Bay 3 lần thì đến số nào?</div>${axis(vals)}<div class="text-center mb-3"><span class="ns-step-note">35 000 → +2 000 → +2 000 → +2 000</span></div><div class="ns-choice-row">${[39000,41000,43000].map(v=>`<button onclick="numberSenseCheck_(${v===41000},'Đúng! 3 bước × 2 000 = 6 000; 35 000 + 6 000 = 41 000.','Con có thể cộng từng bước: 35 000 → 37 000 → 39 000 → 41 000.')">${formatMathNumberValue_(v)}</button>`).join('')}</div>`;
      } else {
        const vals=[24000,25000,26000,27000];
        html=`<div class="font-black text-slate-700 mb-2">Khoảng cách về giá trị từ <span class="text-violet-700">24 000</span> đến <span class="text-violet-700">27 000</span> là bao nhiêu?</div>${axis(vals)}<div class="text-center mb-3"><span class="ns-step-note">3 khoảng × 1 000</span></div><div class="ns-choice-row">${[2000,3000,4000].map(v=>`<button onclick="numberSenseCheck_(${v===3000},'Đúng! Có 3 khoảng, mỗi khoảng 1 000 nên khoảng cách là 3 000. Cũng có thể tính 27 000 − 24 000 = 3 000.','Con đếm số khoảng giữa hai số, không đếm số vạch: có 3 khoảng, mỗi khoảng 1 000.')">${formatMathNumberValue_(v)}</button>`).join('')}</div>`;
      }
      html+=`<div class="mt-3 flex justify-center"><button class="ns-action" onclick="numberSenseAnotherExample_()">🔄 Tình huống khác</button></div>`;
    } else if(l.activity==='compare'){
      html=`<div class="text-center text-2xl font-black text-slate-800 mb-4">${formatMathNumberValue_(52407)} <span class="text-violet-500">?</span> ${formatMathNumberValue_(52389)}</div><div class="ns-choice-row">${['<','>','='].map(x=>`<button onclick="numberSenseCheck_(${x==='>'},'Đúng! Hai số cùng có 5 chữ số. Hàng chục nghìn và nghìn bằng nhau; đến hàng trăm thì 4 > 3.','Hãy so từ chữ số ngoài cùng bên trái. Dừng ở hàng đầu tiên khác nhau.')">${x}</button>`).join('')}</div>`;
    } else if(l.activity==='rounding'){
      html=`<div class="font-black text-slate-700 text-center">Làm tròn <span class="text-violet-700 text-xl">${formatMathNumberValue_(7462)}</span> đến hàng trăm</div><div class="mt-3 grid grid-cols-2 gap-3"><button class="ns-action" onclick="numberSenseCheck_(false,'','7 462 nằm giữa 7 400 và 7 500. Chữ số hàng chục là 6 nên phải làm tròn lên.')">7 400</button><button class="ns-action" onclick="numberSenseCheck_(true,'Đúng! Hàng chục là 6 (thuộc 5–9), nên tăng hàng trăm từ 4 lên 5 và đổi phần sau thành 0.','')">7 500</button></div><div class="mt-4 h-2 bg-gradient-to-r from-amber-200 via-violet-300 to-emerald-200 rounded-full relative"><span class="absolute left-[62%] -top-3 w-4 h-4 rounded-full bg-violet-600 border-2 border-white shadow"></span></div><div class="flex justify-between mt-2 text-sm font-black text-slate-500"><span>7 400</span><span>7 500</span></div>`;
    } else if(l.activity==='roman'){
      html=`<div class="font-black text-slate-700 text-center mb-3">Số <span class="text-violet-700 text-xl">14</span> viết bằng chữ số La Mã là:</div><div class="ns-choice-row">${['XIV','XVI','IXV'].map(x=>`<button onclick="numberSenseCheck_(${x==='XIV'},'Đúng! XIV = X + IV = 10 + 4 = 14.','Nhớ: 14 = 10 + 4; X = 10 và IV = 4.')">${x}</button>`).join('')}</div><div class="mt-4 grid grid-cols-3 gap-2 text-center"><div class="p-3 rounded-xl bg-white border border-violet-100"><b>I</b><br><span class="text-sm">1</span></div><div class="p-3 rounded-xl bg-white border border-violet-100"><b>V</b><br><span class="text-sm">5</span></div><div class="p-3 rounded-xl bg-white border border-violet-100"><b>X</b><br><span class="text-sm">10</span></div></div>`;
    }
    box.innerHTML=html+`<div id="ns-feedback" class="ns-feedback mt-4">${escapeHtml(numberSenseState_.feedback||'Con hãy thử thao tác nhé!')}</div>`;
}

function numberSenseFeedback_(msg){numberSenseState_.feedback=msg; const el=document.getElementById('ns-feedback'); if(el)el.textContent=msg;}
function numberSenseCheck_(ok,good,bad){numberSenseFeedback_(ok?(good||'Đúng rồi! Con đã hiểu cách làm.'):(bad||'Chưa đúng. Con quan sát lại và thử lần nữa nhé.'));}
function numberSenseAnotherExample_(){numberSenseState_.exampleIndex++;numberSenseState_.feedback='';renderNumberSenseActivity_();}
function numberSensePrev_(){numberSenseState_.lessonIndex=Math.max(0,numberSenseState_.lessonIndex-1);numberSenseState_.feedback='';renderNumberSenseLesson_();}
function numberSenseNext_(){if(numberSenseState_.lessonIndex<NUMBER_SENSE_LESSONS.length-1){numberSenseState_.lessonIndex++;numberSenseState_.feedback='';renderNumberSenseLesson_();}else showNumberSenseHub_(pendingTopicQuiz);}
function startNumberSensePractice_(){
    if(!pendingTopicQuiz?.questions?.length)return showAppNotice('Chưa có dữ liệu thực hành.');
    const pool=shuffleArray([...pendingTopicQuiz.questions]).slice(0,Math.min(30,pendingTopicQuiz.questions.length));
    practiceCycleRawPool=[...pendingTopicQuiz.questions];
    updateNavTabs('1. Số học','🔢','1.6 Thực hành nền tảng');
    startTopicQuiz(1,'1. Số học - 1.6 Thực hành nền tảng',pool,'1.6');
}


// ==========================================
// CHỦ ĐỀ 2: PHÉP CỘNG VÀ TRỪ - HỌC ĐỂ HIỂU
// 2.1 -> 2.6 là bài học tương tác trực quan.
// 2.7 là khu thực hành tổng hợp từ ngân hàng câu hỏi hiện có.
// Bám SGK/SBT Toán 3: ôn đến 1 000 -> cộng/trừ 10 000 -> cộng/trừ 100 000 -> ước lượng/tự kiểm.
// ==========================================
const ADDSUB_LESSONS = [
    {
        code:'2.1', icon:'🧱', title:'Ôn nền tảng cộng và trừ đến 1 000',
        desc:'Đặt thẳng cột, tính từ phải sang trái, hiểu nhớ/đổi hàng.',
        goal:'Bé hiểu vì sao phải đặt đúng hàng trước khi tính và biết tự kiểm bằng phép tính ngược hoặc ước lượng.',
        story:'Cô Ong Vàng xếp các chữ số theo từng hàng. Đơn vị phải thẳng đơn vị, chục thẳng chục, trăm thẳng trăm. Sau đó mình mới tính từ phải sang trái.',
        remember:'Đặt thẳng cột → tính từ phải sang trái → tự kiểm.',
        examples:[
            {a:399,b:376,op:'+',result:775,question:'Hãy chọn kết quả đúng để hoàn thành phép tính dọc.',choices:['765','775','785','875'],answer:'775',note:'Bài ôn đầu năm: cộng trong phạm vi 1 000, chú ý số nhớ.',wrong:'Con bắt đầu ở hàng đơn vị: 9 + 6 = 15, viết 5 và nhớ 1.'},
            {a:436,b:130,op:'-',result:306,question:'Kết quả nào đúng với phép trừ này?',choices:['296','306','316','566'],answer:'306',note:'Hàng chục: 3 − 3 = 0. Chữ số 0 vẫn phải giữ đúng vị trí.',wrong:'Con nhìn lại từng cột: đơn vị 6 − 0, chục 3 − 3, trăm 4 − 1.'}
        ]
    },
    {
        code:'2.2', icon:'➕', title:'Cộng trong phạm vi 10 000',
        desc:'Cộng có nhớ ở hàng nghìn, trăm, chục và đơn vị.',
        goal:'Bé nhận ra thuật toán cộng không đổi khi thêm hàng nghìn.',
        story:'Số lớn hơn nhưng cách làm vẫn như cũ: đặt thẳng cột, cộng từ hàng đơn vị, nếu đủ 10 thì đổi 10 đơn vị thành 1 chục và nhớ sang trái.',
        remember:'Đơn vị → chục → trăm → nghìn; đủ 10 thì nhớ 1.',
        examples:[
            {a:6377,b:3622,op:'+',result:9999,question:'Bé hãy chọn kết quả đúng.',choices:['9 989','9 999','10 009','10 999'],answer:'9 999',note:'Các cột đều thẳng hàng nên bé có thể nhìn từng cột rất rõ.',wrong:'Con tính từng cột từ phải sang trái và để ý các số nhớ.'},
            {a:2404,b:2168,op:'+',result:4572,question:'Kết quả nào hoàn thành đúng dòng dưới?',choices:['4 562','4 572','4 582','4 672'],answer:'4 572',note:'Ở hàng đơn vị: 4 + 8 = 12, viết 2 nhớ 1.',wrong:'Con bắt đầu từ 4 + 8 ở hàng đơn vị nhé.'}
        ]
    },
    {
        code:'2.3', icon:'➖', title:'Trừ trong phạm vi 10 000',
        desc:'Thấy rõ quá trình đổi hàng khi một cột không đủ để trừ.',
        goal:'Bé hiểu bản chất của “mượn 1”: đó là đổi 1 đơn vị ở hàng lớn thành 10 đơn vị ở hàng nhỏ hơn.',
        story:'Nếu một hàng không đủ để trừ, mình không đoán. Ta đổi 1 ở hàng bên trái thành 10 ở hàng đang cần rồi mới tiếp tục.',
        remember:'Không đủ thì đổi hàng; gặp 0 có thể phải đổi qua nhiều hàng.',
        examples:[
            {a:6304,b:2116,op:'-',result:4188,question:'Hãy chọn kết quả đúng của phép trừ trên.',choices:['4 178','4 188','4 198','8 420'],answer:'4 188',note:'Hàng chục đang là 0 nên việc đổi hàng cần làm cẩn thận.',wrong:'Con nhìn hàng đơn vị: 4 không trừ được 6. Hàng chục lại là 0 nên phải đổi từ hàng trăm trước.'},
            {a:3787,b:2844,op:'-',result:943,question:'Kết quả nào đúng?',choices:['933','943','953','6 631'],answer:'943',note:'Kết quả có 3 chữ số là hoàn toàn bình thường.',wrong:'Con trừ lần lượt: 7−4, 8−4, rồi xử lí hàng trăm nếu cần đổi.'}
        ]
    },
    {
        code:'2.4', icon:'🟣', title:'Cộng trong phạm vi 100 000',
        desc:'Thêm hàng chục nghìn nhưng vẫn giữ đúng thuật toán cộng.',
        goal:'Bé thấy được cách cộng 5 chữ số chỉ là mở rộng bảng hàng đã biết.',
        story:'Khi số có 5 chữ số, ta chỉ thêm cột chục nghìn. Các bước đặt tính và cộng vẫn giữ nguyên.',
        remember:'Thêm hàng mới, không đổi quy tắc.',
        examples:[
            {a:73187,b:4933,op:'+',result:78120,question:'Kết quả nào đúng với phép cộng này?',choices:['78 110','78 120','78 130','88 120'],answer:'78 120',note:'Số 4 933 phải đặt thẳng hàng đơn vị với 73 187, không lệch sang trái.',wrong:'Con chú ý căn phải số 4 933 để đơn vị thẳng đơn vị.'},
            {a:55901,b:36057,op:'+',result:91958,question:'Bé hãy chọn đáp án đúng.',choices:['91 948','91 958','91 968','92 958'],answer:'91 958',note:'Cộng số 5 chữ số vẫn bắt đầu từ hàng đơn vị.',wrong:'Con kiểm tra lại hàng chục và hàng nghìn, nhớ sang cột bên trái khi đủ 10.'}
        ]
    },
    {
        code:'2.5', icon:'🟠', title:'Trừ trong phạm vi 100 000',
        desc:'Rèn đổi hàng với số 5 chữ số, đặc biệt khi có nhiều chữ số 0.',
        goal:'Bé hiểu chuỗi đổi hàng thay vì chỉ thuộc mẹo “mượn 1”.',
        story:'Với số lớn, nếu gặp 0 ta có thể phải đi sang trái nhiều cột để đổi. Mỗi lần đổi vẫn dựa trên nguyên tắc 1 hàng lớn = 10 hàng nhỏ hơn.',
        remember:'Gặp 0 → tìm cột bên trái còn đủ để đổi → truyền dần sang phải.',
        examples:[
            {a:60318,b:49733,op:'-',result:10585,question:'Kết quả nào đúng với phép trừ trên?',choices:['10 575','10 585','10 595','110 051'],answer:'10 585',note:'Bài có nhiều lần đổi hàng liên tiếp nên rất phù hợp để nhìn từng bước.',wrong:'Con bắt đầu ở hàng đơn vị 8 − 3, rồi tiếp tục sang hàng chục. Khi không đủ thì đổi hàng.'},
            {a:88710,b:8130,op:'-',result:80580,question:'Hãy chọn đáp án đúng.',choices:['80 570','80 580','80 590','96 840'],answer:'80 580',note:'Số trừ chỉ có 4 chữ số nhưng vẫn phải căn phải đúng hàng.',wrong:'Con căn phải 8 130 dưới 88 710 rồi mới trừ từng cột.'}
        ]
    },
    {
        code:'2.6', icon:'💡', title:'Tính nhẩm – ước lượng – tự kiểm',
        desc:'Dự đoán vùng kết quả trước để phát hiện phép tính sai.',
        goal:'Bé biết làm tròn và ước lượng để kiểm tra kết quả có hợp lí không.',
        story:'Trước khi tính chi tiết, mình có thể làm tròn các số. Sau khi tính xong, so kết quả chính xác với ước lượng để phát hiện lỗi.',
        remember:'Ước lượng trước → tính chính xác → so lại.',
        examples:[
            {a:3980,b:2050,op:'+',result:6030,question:'Ước lượng trước: tổng này gần số nào nhất?',choices:['5 000','6 000','7 000','8 000'],answer:'6 000',note:'3 980 gần 4 000; 2 050 gần 2 000; vậy tổng gần 6 000.',wrong:'Con làm tròn 3 980 thành 4 000 và 2 050 thành 2 000 rồi cộng nhẩm.'},
            {a:27842,b:31105,op:'+',result:58947,question:'Kết quả hợp lí nhất sẽ gần số nào?',choices:['5 000','50 000','60 000','600 000'],answer:'60 000',note:'Hai số đều có 5 chữ số nên tổng phải ở cỡ vài chục nghìn.',wrong:'Con ước lượng 27 842 ≈ 28 000 và 31 105 ≈ 31 000.'}
        ]
    }
];
let addSubState_={lessonIndex:0,exampleIndex:0,feedback:'',revealed:false,hintStep:0,selectedChoice:null};

function ensureAddSubStyles_(){
    if(document.getElementById('toan3-addsub-styles')) return;
    const style=document.createElement('style'); style.id='toan3-addsub-styles';
    style.textContent=`
      .as-shell{width:100%;max-width:82rem;margin:0 auto}
      .as-hero{background:linear-gradient(135deg,#fff8fb 0%,#faf5ff 55%,#eefcff 100%);border:2px solid #fbcfe8;border-radius:24px;padding:18px 20px;box-shadow:0 8px 22px rgba(236,72,153,.08)}
      .as-kicker{display:inline-flex;align-items:center;gap:8px;padding:7px 12px;border-radius:999px;background:#fff;border:1.5px solid #f5d0fe;color:#a21caf;font-size:.86rem;font-weight:1000}
      .as-title{font-size:clamp(1.35rem,2.1vw,1.8rem);font-weight:1000;color:#6d28d9;line-height:1.25}
      .as-goal{font-size:1.04rem;font-weight:800;color:#64748b;line-height:1.55}
      .as-grid{display:grid;grid-template-columns:1fr;gap:16px}
      @media(min-width:960px){.as-grid{grid-template-columns:minmax(360px,44%) minmax(0,56%);align-items:start}}
      .as-card{background:rgba(255,255,255,.97);border:2px solid #e9d5ff;border-radius:22px;padding:16px;box-shadow:0 10px 26px rgba(139,92,246,.08)}
      .as-hub-card{min-height:58px;background:linear-gradient(145deg,#ffffff 0%,#fff8fb 100%);border:2px solid #f5d0fe;border-radius:18px;padding:9px 11px;box-shadow:0 3px 10px rgba(219,39,119,.06);transition:.18s ease}
      .as-hub-card:hover{transform:translateY(-2px);border-color:#d8b4fe;box-shadow:0 10px 24px rgba(168,85,247,.12)}
      .as-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border-radius:999px;font-size:.84rem;font-weight:1000;background:#faf5ff;border:1.5px solid #e9d5ff;color:#7e22ce}
      .as-problem-wrap{background:linear-gradient(160deg,#fcfbff 0%,#fff7fb 100%);border:2px solid #e9d5ff;border-radius:24px;padding:18px 14px}
      .as-problem-title{font-size:1.08rem;font-weight:1000;color:#7e22ce;margin-bottom:10px;text-align:center}
      .as-place-row,.as-digit-row{display:grid;grid-template-columns:34px repeat(var(--cols),44px);justify-content:center;align-items:end}
      .as-place-row{margin-bottom:4px}
      .as-place{font-size:.66rem;font-weight:1000;color:#94a3b8;text-align:center;line-height:1.05}
      .as-opcell{font-size:1.9rem;font-weight:1000;color:#9333ea;text-align:center;align-self:center}
      .as-cell{height:48px;display:flex;align-items:center;justify-content:center;font:1000 2rem/1 'Courier New',monospace;color:#1f2937;border-radius:11px;position:relative}
      .as-cell.group-gap{margin-left:10px}
      .as-cell.active{background:#fef3c7;box-shadow:inset 0 0 0 2px #f59e0b;color:#92400e}
      .as-carry-row{min-height:28px;margin-bottom:1px}
      .as-carry{font:1000 1rem/1 'Courier New',monospace;color:#dc2626;text-align:center;min-height:20px}
      .as-divider-grid{display:grid;grid-template-columns:34px 1fr;max-width:calc(34px + var(--cols)*54px);margin:2px auto 5px}
      .as-divider-line{height:4px;border-radius:999px;background:linear-gradient(90deg,#c084fc,#ec4899)}
      .as-result-cell{color:#0f766e}
      .as-result-mask{color:#9ca3af}
      .as-mini{font-size:.96rem;font-weight:800;color:#64748b;line-height:1.55;text-align:center;margin-top:10px}
      .as-question{font-size:1.14rem;font-weight:1000;color:#334155;line-height:1.55}
      .as-choice-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}
      @media(max-width:640px){.as-choice-grid{grid-template-columns:1fr}.as-cell{font-size:1.7rem;width:auto}.as-place-row,.as-digit-row{grid-template-columns:30px repeat(var(--cols),38px)}}
      .as-choice{min-height:62px;border-radius:18px;border:2px solid #e9d5ff;background:#fff;padding:10px 12px;font-size:1.08rem;font-weight:1000;color:#6d28d9;transition:.15s ease;text-align:center}
      .as-choice:hover{transform:translateY(-1px);border-color:#c084fc;background:#faf5ff}
      .as-choice.is-wrong{border-color:#fda4af;background:#fff1f2;color:#be123c}
      .as-choice.is-right{border-color:#86efac;background:#f0fdf4;color:#047857}
      .as-choice:disabled{cursor:default;transform:none}
      .as-feedback{min-height:58px;border-radius:18px;background:#fffbeb;border:2px dashed #fcd34d;padding:12px 14px;color:#92400e;font-weight:800;line-height:1.55}
      .as-action{display:inline-flex;align-items:center;justify-content:center;gap:7px;padding:11px 16px;border-radius:16px;border:2px solid #ddd6fe;background:#fff;font-weight:1000;color:#7c3aed;box-shadow:0 4px 10px rgba(168,85,247,.08)}
      .as-action:hover{transform:translateY(-1px)}
      .as-primary{background:linear-gradient(90deg,#c084fc,#9333ea);color:#fff;border-color:#a855f7}
      .as-note{margin-top:12px;border-radius:18px;background:#eff6ff;border:1.5px solid #bfdbfe;padding:11px 12px;color:#1d4ed8;font-weight:800;line-height:1.5}
      .as-story{border-radius:18px;background:#fdf4ff;border:1.5px solid #f5d0fe;padding:12px 14px;color:#6b7280;font-weight:700;line-height:1.65}
      .as-steps{margin-top:12px;border-radius:18px;background:#fff;border:1.5px solid #e2e8f0;padding:10px 12px}
      .as-step{display:flex;gap:8px;align-items:flex-start;padding:7px 0;border-bottom:1px dashed #e2e8f0;color:#475569;font-weight:800;line-height:1.45}
      .as-step:last-child{border-bottom:0}.as-step b{color:#7e22ce;white-space:nowrap}
      .as-borrow-strip{display:flex;flex-wrap:wrap;gap:7px;margin-top:9px;justify-content:center}
      .as-borrow-chip{padding:6px 9px;border-radius:999px;background:#fff7ed;border:1.5px solid #fdba74;color:#c2410c;font-size:.78rem;font-weight:1000}
    `;
    document.head.appendChild(style);
}

function addSubPlaceName_(pow){return ['ĐV','Ch','Tr','N','ChN','TrN'][pow]||`10^${pow}`;}
function addSubPadDigits_(n,len){return String(Math.abs(Number(n)||0)).padStart(len,' ').split('');}
function addSubBuildWork_(ex){
    const maxDigits=Math.max(String(Math.abs(ex.a)).length,String(Math.abs(ex.b)).length,String(Math.abs(ex.result)).length);
    const a=addSubPadDigits_(ex.a,maxDigits), b=addSubPadDigits_(ex.b,maxDigits);
    const steps=[], carryMarks=Array(maxDigits).fill(''), borrowNotes=[];
    if(ex.op==='+'){
        let carry=0;
        for(let i=maxDigits-1;i>=0;i--){
            const av=Number(a[i]||0),bv=Number(b[i]||0),sum=av+bv+carry,out=sum%10,next=Math.floor(sum/10),pow=maxDigits-1-i;
            steps.push({col:i,text:`${addSubPlaceName_(pow)}: ${av} + ${bv}${carry?` + ${carry} nhớ`:''} = ${sum} → viết ${out}${next?`, nhớ ${next}`:''}.`});
            if(next && i>0) carryMarks[i-1]=String(next);
            carry=next;
        }
    }else{
        const top=a.map(x=>x===' '?0:Number(x)), sub=b.map(x=>x===' '?0:Number(x));
        for(let i=maxDigits-1;i>=0;i--){
            const pow=maxDigits-1-i;
            if(top[i]<sub[i]){
                let j=i-1; while(j>=0&&top[j]===0)j--;
                if(j>=0){
                    top[j]-=1;
                    for(let k=j+1;k<i;k++){top[k]+=9; borrowNotes.push(`Đổi qua ${addSubPlaceName_(maxDigits-1-k)}: thành ${top[k]}`);}
                    top[i]+=10;
                    borrowNotes.push(`${addSubPlaceName_(pow)}: thành ${top[i]}`);
                }
            }
            const out=top[i]-sub[i];
            steps.push({col:i,text:`${addSubPlaceName_(pow)}: ${top[i]} − ${sub[i]} = ${out}.`});
        }
    }
    return {maxDigits,a,b,steps,carryMarks,borrowNotes};
}
function addSubCellClass_(len,i,active){const gap=i>0&&((len-i)%3===0)?' group-gap':'';return `as-cell${gap}${active?' active':''}`;}
function addSubRenderPlaceRow_(len){
    const names=Array.from({length:len},(_,i)=>addSubPlaceName_(len-1-i));
    return `<div class="as-place-row" style="--cols:${len}"><div></div>${names.map((n,i)=>`<div class="as-place${i>0&&((len-i)%3===0)?' ml-2':''}">${n}</div>`).join('')}</div>`;
}
function addSubRenderCarryRow_(work,showAll){
    if(!showAll||!work.carryMarks.some(Boolean))return '';
    return `<div class="as-digit-row as-carry-row" style="--cols:${work.maxDigits}"><div></div>${work.carryMarks.map((v,i)=>`<div class="as-carry${i>0&&((work.maxDigits-i)%3===0)?' ml-2':''}">${v?`↑${v}`:''}</div>`).join('')}</div>`;
}
function addSubRenderDigitRow_(digits,work,op='',result=false,mask=false,activeCol=-1){
    return `<div class="as-digit-row" style="--cols:${work.maxDigits}"><div class="as-opcell">${op||'&nbsp;'}</div>${digits.map((d,i)=>`<div class="${addSubCellClass_(work.maxDigits,i,i===activeCol)} ${result?'as-result-cell':''} ${mask?'as-result-mask':''}">${mask?(d===' '?'':'?'):(d===' '?'&nbsp;':d)}</div>`).join('')}</div>`;
}
function showAddSubHub_(topicObj){
    ensureAddSubStyles_(); setAppShellRootMode_(false);
    const topicName=(topicObj&&topicObj.topicName)||'2. Phép cộng và trừ';
    const questions=(topicObj&&topicObj.questions)||pendingTopicQuiz?.questions||[];
    pendingTopicQuiz={topicNum:2,topicName,questions};
    const cards=ADDSUB_LESSONS.map((l,i)=>`<button onclick="openAddSubLesson_(${i})" class="as-hub-card text-left"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-white border border-fuchsia-100 flex items-center justify-center text-lg shrink-0">${l.icon}</div><div class="min-w-0 flex-1 flex items-center justify-between gap-2"><div class="text-base md:text-lg font-black text-violet-700 leading-tight">${l.code}. ${escapeHtml(l.title)}</div><span class="as-badge shrink-0">Học để hiểu</span></div></div></button>`).join('');
    const container=document.getElementById('view-dashboard-grid'); container.className='w-full';
    container.innerHTML=`<section class="as-shell space-y-4"><div class="as-hero"><div class="as-kicker">➕ Chủ đề 2 • học để hiểu</div><h2 class="as-title mt-2">Nhìn phép tính dọc → hiểu từng cột → tự làm được</h2><p class="as-goal mt-2">Học trực quan từng phần rồi thực hành tổng hợp ở <b>2.7</b>.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-3">${cards}<button onclick="startAddSubPractice_()" class="as-hub-card text-left border-emerald-300 bg-emerald-50"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-lg shrink-0">✏️</div><div class="min-w-0 flex-1 flex items-center justify-between gap-2"><div class="text-base md:text-lg font-black text-emerald-700 leading-tight">2.7. Thực hành nền tảng</div><span class="as-badge shrink-0" style="background:#fff;border-color:#bbf7d0;color:#047857">30 câu / lượt</span></div></div></button></div></section>`;
    updateNavTabs('2. Phép cộng và trừ','➕',null); switchAppView('view-dashboard-grid');
}
function addSubCurrentLesson_(){return ADDSUB_LESSONS[addSubState_.lessonIndex];}
function addSubCurrentExample_(){const l=addSubCurrentLesson_();return l.examples[addSubState_.exampleIndex%l.examples.length];}
function addSubResetAttempt_(){addSubState_.feedback='';addSubState_.revealed=false;addSubState_.hintStep=0;addSubState_.selectedChoice=null;}
function openAddSubLesson_(index){addSubState_.lessonIndex=index;addSubState_.exampleIndex=0;addSubResetAttempt_();renderAddSubLesson_();}
function addSubAnotherExample_(){const l=addSubCurrentLesson_();addSubState_.exampleIndex=(addSubState_.exampleIndex+1)%l.examples.length;addSubResetAttempt_();renderAddSubLesson_();}
function addSubPrev_(){if(addSubState_.lessonIndex>0){addSubState_.lessonIndex--;addSubState_.exampleIndex=0;addSubResetAttempt_();renderAddSubLesson_();}else showAddSubHub_(pendingTopicQuiz);}
function addSubNext_(){if(addSubState_.lessonIndex<ADDSUB_LESSONS.length-1){addSubState_.lessonIndex++;addSubState_.exampleIndex=0;addSubResetAttempt_();renderAddSubLesson_();}else showAddSubHub_(pendingTopicQuiz);}
function addSubShowHint_(){const ex=addSubCurrentExample_(),work=addSubBuildWork_(ex);addSubState_.hintStep=Math.min(work.steps.length,addSubState_.hintStep+1);renderAddSubLesson_();}
function addSubChoose_(choice){
    const ex=addSubCurrentExample_(); addSubState_.selectedChoice=String(choice);
    if(String(choice)===String(ex.answer)){
        addSubState_.revealed=true; addSubState_.hintStep=addSubBuildWork_(ex).steps.length;
        addSubState_.feedback=`✅ Chính xác! Kết quả là ${formatMathNumberValue_(ex.result)}. Bây giờ con nhìn phần giải từng cột ở bên trái để hiểu vì sao.`;
    }else addSubState_.feedback=`🌱 Chưa đúng. ${ex.wrong||'Con xem gợi ý từng bước rồi thử lại nhé.'}`;
    renderAddSubLesson_();
}
function renderAddSubLesson_(){
    ensureAddSubStyles_();
    const l=addSubCurrentLesson_(),ex=addSubCurrentExample_(),work=addSubBuildWork_(ex);
    const visibleSteps=addSubState_.revealed?work.steps:work.steps.slice(0,addSubState_.hintStep);
    const activeCol=(!addSubState_.revealed&&addSubState_.hintStep>0)?work.steps[addSubState_.hintStep-1]?.col:-1;
    const resultDigits=addSubPadDigits_(ex.result,work.maxDigits);
    const carry=addSubRenderCarryRow_(work,addSubState_.revealed||addSubState_.hintStep>0);
    const place=addSubRenderPlaceRow_(work.maxDigits);
    const vertical=`${place}${carry}${addSubRenderDigitRow_(work.a,work,'',false,false,activeCol)}${addSubRenderDigitRow_(work.b,work,ex.op,false,false,activeCol)}<div class="as-divider-grid" style="--cols:${work.maxDigits}"><div></div><div class="as-divider-line"></div></div>${addSubRenderDigitRow_(resultDigits,work,'',true,!addSubState_.revealed,-1)}`;
    const stepHtml=visibleSteps.length?`<div class="as-steps"><div class="font-black text-violet-700 mb-1">🧭 Cách làm từng cột</div>${visibleSteps.map((s,idx)=>`<div class="as-step"><b>Bước ${idx+1}</b><span>${escapeHtml(s.text)}</span></div>`).join('')}${work.borrowNotes.length&&(addSubState_.revealed||addSubState_.hintStep>0)?`<div class="as-borrow-strip">${work.borrowNotes.map(x=>`<span class="as-borrow-chip">↪ ${escapeHtml(x)}</span>`).join('')}</div>`:''}</div>`:'';
    const choices=ex.choices.map(ch=>{const selected=String(addSubState_.selectedChoice)===String(ch),right=String(ch)===String(ex.answer);const cls=addSubState_.revealed&&right?' is-right':(!addSubState_.revealed&&selected&&!right?' is-wrong':'');return `<button class="as-choice${cls}" ${addSubState_.revealed?'disabled':''} onclick="addSubChoose_('${String(ch).replace(/'/g,"\\'")}')">${escapeHtml(String(ch))}</button>`}).join('');
    const container=document.getElementById('view-dashboard-grid'); container.className='w-full';
    container.innerHTML=`<section class="as-shell space-y-4"><div class="as-hero"><div class="flex items-center justify-between gap-3 flex-wrap"><div><div class="as-kicker">${l.code} • Học để hiểu</div><h2 class="as-title mt-2">${escapeHtml(l.title)}</h2><p class="as-goal mt-2">${escapeHtml(l.goal)}</p></div><button onclick="speakVietnamese('${String((l.story||'')+' '+(ex.question||'')).replace(/'/g,"\\'")}',.94)" class="as-action">🔊 Nghe cô giảng</button></div></div><div class="md-lesson-grid"><article class="as-card"><div class="as-problem-wrap"><div class="as-problem-title">Phép tính dọc</div>${vertical}<div class="as-mini">${addSubState_.revealed?'Kết quả đã hiện vì con chọn đúng.':'Dòng dưới chỉ hiện đáp án sau khi con chọn đúng.'}</div>${ex.note?`<div class="as-note">💡 ${escapeHtml(ex.note)}</div>`:''}${stepHtml}</div><div class="mt-3 flex flex-wrap justify-between gap-2"><button onclick="showAddSubHub_(pendingTopicQuiz)" class="as-action">← Mục 2</button><button onclick="addSubAnotherExample_()" class="as-action">🔄 Tình huống khác</button></div></article><aside class="as-card"><div class="as-story">🐝 ${escapeHtml(l.story)}</div><div class="mt-4 as-question">${escapeHtml(ex.question)}</div><div class="as-choice-grid">${choices}</div><div class="mt-3 flex flex-wrap gap-2"><button onclick="addSubShowHint_()" class="as-action">🔎 Gợi ý từng bước</button>${addSubState_.hintStep?`<span class="as-badge">Đã mở ${addSubState_.hintStep}/${work.steps.length} bước</span>`:''}</div><div class="as-feedback mt-4">${escapeHtml(addSubState_.feedback||l.remember||'Con nhìn phép tính dọc bên trái rồi chọn đáp án đúng nhé!')}</div><div class="mt-4 flex justify-between gap-2"><button onclick="addSubPrev_()" class="as-action">← Bài trước</button><button onclick="addSubNext_()" class="as-action as-primary">Bài tiếp theo →</button></div></aside></div></section>`;
    updateNavTabs('2. Phép cộng và trừ','➕',`${l.code} ${l.title}`); switchAppView('view-dashboard-grid');
}
function startAddSubPractice_(){
    if(!pendingTopicQuiz?.questions?.length)return showAppNotice('Chưa có dữ liệu thực hành cho Mục 2.');
    const cleanPool=pendingTopicQuiz.questions.filter(q=>!/\b(?:tìm\s*x|x\s*[+\-×*:])/i.test(String(q.q||q.question||'')));
    const sourcePool=cleanPool.length?cleanPool:pendingTopicQuiz.questions;
    const pool=shuffleArray([...sourcePool]).slice(0,Math.min(30,sourcePool.length));
    practiceCycleRawPool=[...sourcePool];
    updateNavTabs('2. Phép cộng và trừ','➕','2.7 Thực hành nền tảng');
    startTopicQuiz(2,'2. Phép cộng và trừ - 2.7 Thực hành nền tảng',pool,'2.7');
}


// ==========================================
// CHỦ ĐỀ 3: PHÉP NHÂN VÀ CHIA - HỌC ĐỂ HIỂU
// Trình tự bám SGK Toán 3 KNTT:
// ôn bảng 2,5 -> bảng 3,4 -> bảng 6,7,8,9 -> hệ thống bảng cửu chương 2-9
// -> nhân 2 chữ số x 1 chữ số -> chia hết/chia có dư -> chia 2 chữ số : 1 chữ số
// -> nhân/chia 3 chữ số -> nhân/chia 4-5 chữ số -> thực hành tổng hợp.
// ==========================================
const MULDIV_LESSONS = [
    {
        code:'3.1', icon:'🟦', title:'Ôn ý nghĩa phép nhân, phép chia – bảng 2 và 5',
        desc:'Nối tiếp đúng nền lớp 2: nhóm bằng nhau, chia đều và ôn bảng nhân/chia 2, 5.',
        goal:'Bé hiểu lại “vì sao” của phép nhân và phép chia trước khi học các bảng mới.',
        story:'Lớp 2 bé đã học bảng nhân, bảng chia 2 và 5. Sang lớp 3, mình dùng các nhóm bằng nhau để ôn lại: nhân là gộp các nhóm bằng nhau, chia là tách một tổng thành các nhóm bằng nhau.',
        remember:'Nhìn nhóm trước → viết phép nhân → dùng phép nhân để suy ra hai phép chia tương ứng.',
        examples:[
            {kind:'groups',groups:5,perGroup:4,a:5,b:4,op:'×',result:20,question:'Có 5 nhóm, mỗi nhóm 4 chấm. Tất cả có bao nhiêu chấm?',choices:['16','18','20','24'],answer:'20',note:'5 × 4 = 20; từ đó 20 : 5 = 4 và 20 : 4 = 5.',wrong:'Con đếm theo nhóm: 4 + 4 + 4 + 4 + 4.'},
            {kind:'groups',groups:2,perGroup:7,a:2,b:7,op:'×',result:14,question:'2 nhóm, mỗi nhóm 7 chấm. Kết quả đúng là số nào?',choices:['9','12','14','16'],answer:'14',note:'2 × 7 = 14; vậy 14 : 2 = 7.',wrong:'Con có thể tính 7 + 7.'}
        ]
    },
    {
        code:'3.2', icon:'3️⃣', title:'Bảng nhân, bảng chia 3 và 4',
        desc:'Tự xây bảng từ các nhóm bằng nhau thay vì chỉ học thuộc lòng.',
        goal:'Bé nhận ra mỗi dòng của bảng nhân chỉ tăng thêm một nhóm bằng nhau.',
        story:'Muốn xây bảng nhân 3, mỗi bước ta thêm 3; muốn xây bảng nhân 4, mỗi bước ta thêm 4. Từ mỗi phép nhân, ta suy ra phép chia tương ứng.',
        remember:'Bảng 3: cộng thêm 3; bảng 4: cộng thêm 4; nhân và chia là hai chiều của cùng một quan hệ.',
        examples:[
            {kind:'groups',groups:6,perGroup:3,a:6,b:3,op:'×',result:18,question:'6 nhóm, mỗi nhóm 3. Tất cả có bao nhiêu?',choices:['15','18','21','24'],answer:'18',note:'6 × 3 = 18; vậy 18 : 3 = 6.',wrong:'Con đi theo dãy 3, 6, 9, 12, 15, 18.'},
            {kind:'groups',groups:7,perGroup:4,a:7,b:4,op:'×',result:28,question:'7 nhóm, mỗi nhóm 4. Kết quả đúng là bao nhiêu?',choices:['24','26','28','32'],answer:'28',note:'7 × 4 = 28; vậy 28 : 4 = 7.',wrong:'Con đi theo dãy 4, 8, 12, 16, 20, 24, 28.'}
        ]
    },
    {
        code:'3.3', icon:'9️⃣', title:'Bảng nhân, bảng chia 6, 7, 8 và 9',
        desc:'Hoàn thiện các bảng nhân/chia lớp 3 bằng mô hình nhóm và quan hệ nhân–chia.',
        goal:'Bé hiểu cấu trúc bảng 6–9 trước khi luyện nhớ nhanh.',
        story:'Các bảng 6, 7, 8, 9 vẫn được tạo từ những nhóm bằng nhau. Khi hiểu nhóm, bé sẽ nhớ bảng chắc hơn và dùng phép chia dễ hơn.',
        remember:'Nhìn số nhóm × số phần tử mỗi nhóm; sau đó đảo chiều bằng phép chia để tự kiểm.',
        examples:[
            {kind:'groups',groups:7,perGroup:6,a:7,b:6,op:'×',result:42,question:'7 nhóm, mỗi nhóm 6. Tất cả có bao nhiêu?',choices:['36','40','42','48'],answer:'42',note:'7 × 6 = 42; vậy 42 : 6 = 7.',wrong:'Con nhớ mốc 6 × 5 = 30 rồi thêm 12.'},
            {kind:'groups',groups:8,perGroup:9,a:8,b:9,op:'×',result:72,question:'8 nhóm, mỗi nhóm 9. Kết quả đúng là số nào?',choices:['63','64','72','81'],answer:'72',note:'8 × 9 = 72; vậy 72 : 9 = 8.',wrong:'Con có thể dùng 9 × 8 = 72.'}
        ]
    },
    {
        code:'3.4', icon:'📋', title:'Bảng cửu chương 2–9',
        desc:'Hệ thống toàn bộ bảng nhân 2–9 trên một bảng trực quan, học thuộc nhưng vẫn hiểu quan hệ.',
        goal:'Bé nhìn được toàn cảnh bảng cửu chương, tìm nhanh giao điểm và suy ra phép chia.',
        story:'Bảng cửu chương giống một bản đồ. Chọn hàng của số thứ nhất và cột của số thứ hai, giao điểm cho ta tích. Mỗi ô còn tạo ra hai phép chia ngược.',
        remember:'Nhìn hàng × cột → tìm tích → đọc ngược thành phép chia.',
        examples:[
            {kind:'times_table',a:7,b:8,op:'×',result:56,question:'Trong bảng cửu chương, 7 × 8 bằng bao nhiêu?',choices:['48','54','56','63'],answer:'56',note:'Ô giao giữa hàng 7 và cột 8 là 56; vậy 56 : 7 = 8 và 56 : 8 = 7.',wrong:'Con tìm hàng 7 và cột 8 trên bảng bên trái.'},
            {kind:'times_table',a:9,b:6,op:'×',result:54,question:'9 × 6 bằng bao nhiêu?',choices:['45','48','54','63'],answer:'54',note:'Ô giao giữa hàng 9 và cột 6 là 54.',wrong:'Con tìm hàng 9 và cột 6 trên bảng.'}
        ]
    },
    {
        code:'3.5', icon:'✖️', title:'Nhân số có 2 chữ số với số có 1 chữ số',
        desc:'Bước đầu chuyển từ bảng nhân sang thuật toán nhân dọc.',
        goal:'Bé hiểu phải nhân từng hàng từ đơn vị sang chục và cộng số nhớ khi cần.',
        story:'Sau khi nắm các bảng nhân, bé mới dùng chúng để nhân một số có hai chữ số với một số có một chữ số. Ta bắt đầu từ hàng đơn vị, rồi chuyển sang hàng chục.',
        remember:'Đơn vị trước → viết phần đơn vị → nhớ sang hàng chục → nhân tiếp.',
        examples:[
            {kind:'mul',a:47,b:3,op:'×',result:141,question:'Hãy chọn kết quả đúng để hoàn thành phép nhân dọc.',choices:['121','131','141','151'],answer:'141',note:'7 × 3 = 21, viết 1 nhớ 2; 4 × 3 + 2 = 14.',wrong:'Con bắt đầu ở hàng đơn vị: 7 × 3 = 21.'},
            {kind:'mul',a:68,b:4,op:'×',result:272,question:'Kết quả đúng của 68 × 4 là gì?',choices:['252','262','272','282'],answer:'272',note:'8 × 4 = 32, viết 2 nhớ 3; 6 × 4 + 3 = 27.',wrong:'Con nhớ cộng 3 vào tích của hàng chục.'}
        ]
    },
    {
        code:'3.6', icon:'🍪', title:'Phép chia hết và phép chia có dư',
        desc:'Chia đồ vật vào các nhóm để nhìn thấy thương và phần còn lại.',
        goal:'Bé hiểu số dư là phần chưa chia đều được và số dư luôn nhỏ hơn số chia.',
        story:'Có phép chia chia vừa hết, nhưng cũng có phép chia còn lại một ít. Phần còn lại đó là số dư. Nếu số dư vẫn lớn hơn hoặc bằng số chia thì nghĩa là mình chưa chia hết một lượt.',
        remember:'Chia hết: dư 0. Chia có dư: 0 < số dư < số chia.',
        examples:[
            {kind:'remainder',total:20,divisor:4,quotient:5,remainder:0,resultText:'5',question:'20 chia 4 được kết quả nào?',choices:['4','5','5 dư 1','6'],answer:'5',note:'4 × 5 = 20 nên đây là phép chia hết.',wrong:'Con tìm số lần lấy 4 để được đúng 20.'},
            {kind:'remainder',total:23,divisor:4,quotient:5,remainder:3,resultText:'5 dư 3',question:'23 chia 4 được thương và số dư nào?',choices:['4 dư 7','5 dư 3','6 dư 1','5 dư 4'],answer:'5 dư 3',note:'4 × 5 = 20, còn 3; 3 < 4 nên hợp lệ.',wrong:'Con tìm bội của 4 lớn nhất nhưng không vượt quá 23.'}
        ]
    },
    {
        code:'3.7', icon:'➗', title:'Chia số có 2 chữ số cho số có 1 chữ số',
        desc:'Bước đầu học chia dọc theo nhịp chia → nhân → trừ → hạ.',
        goal:'Bé biết bắt đầu từ chữ số bên trái đủ để chia và viết thương đúng vị trí.',
        story:'Khi chia số có hai chữ số cho số có một chữ số, ta làm từng lượt từ trái sang phải: chia, nhân lại, trừ, rồi hạ chữ số tiếp theo.',
        remember:'Chia → nhân → trừ → hạ; số dư cuối cùng phải nhỏ hơn số chia.',
        examples:[
            {kind:'div',a:84,b:4,op:':',result:21,remainder:0,question:'Thương đúng của phép chia trên là bao nhiêu?',choices:['12','20','21','24'],answer:'21',note:'8 : 4 = 2; hạ 4; 4 : 4 = 1.',wrong:'Con bắt đầu từ 8 : 4 rồi mới hạ chữ số 4.'},
            {kind:'div',a:85,b:4,op:':',result:21,remainder:1,question:'85 : 4 được kết quả nào?',choices:['20 dư 5','21 dư 1','21 dư 4','22 dư 1'],answer:'21 dư 1',note:'8 : 4 = 2; hạ 5; 5 : 4 = 1 dư 1.',wrong:'Con làm từng lượt và nhớ số dư cuối phải nhỏ hơn 4.'}
        ]
    },
    {
        code:'3.8', icon:'🔢', title:'Nhân và chia số có 3 chữ số với số có 1 chữ số',
        desc:'Mở rộng đúng thuật toán vừa học lên hàng trăm.',
        goal:'Bé thấy số có thêm hàng trăm nhưng cách nhân/chia không thay đổi.',
        story:'Khi số có ba chữ số, phép nhân vẫn đi từ phải sang trái; phép chia vẫn đi từ trái sang phải. Chỉ có thêm một hàng cần xử lí.',
        remember:'Nhân: từ phải sang trái. Chia: từ trái sang phải.',
        examples:[
            {kind:'mul',a:126,b:3,op:'×',result:378,question:'Kết quả đúng của phép nhân này là gì?',choices:['368','378','388','428'],answer:'378',note:'6 × 3 = 18; 2 × 3 + 1 = 7; 1 × 3 = 3.',wrong:'Con bắt đầu từ 6 × 3 rồi cộng phần nhớ.'},
            {kind:'div',a:936,b:3,op:':',result:312,remainder:0,question:'Hãy chọn thương đúng.',choices:['302','312','322','332'],answer:'312',note:'9 : 3 = 3; hạ 3 → 3 : 3 = 1; hạ 6 → 6 : 3 = 2.',wrong:'Con theo nhịp chia → nhân → trừ → hạ từ trái sang phải.'}
        ]
    },
    {
        code:'3.9', icon:'🧮', title:'Nhân và chia số có 4–5 chữ số với số có 1 chữ số',
        desc:'Bước cuối của Toán 3: mở rộng thuật toán lên hàng nghìn và chục nghìn.',
        goal:'Bé làm được số lớn nhưng vẫn dựa trên đúng bảng nhân/chia 2–9 và thuật toán đã hiểu.',
        story:'Khi số có 4 hoặc 5 chữ số, không có quy tắc mới. Mình chỉ lặp lại đúng thao tác ở từng hàng và đặc biệt chú ý chữ số 0 trong số hoặc trong thương.',
        remember:'Số lớn hơn nhưng thuật toán không đổi; luôn ước lượng và dùng phép tính ngược để tự kiểm.',
        examples:[
            {kind:'mul',a:2014,b:4,op:'×',result:8056,question:'Kết quả đúng của phép nhân này là gì?',choices:['8 046','8 056','8 156','8 560'],answer:'8 056',note:'4 × 4 = 16; chữ số 0 ở giữa vẫn phải giữ đúng vị trí.',wrong:'Con nhân từ hàng đơn vị và chú ý chữ số 0 ở hàng chục.'},
            {kind:'div',a:8240,b:4,op:':',result:2060,remainder:0,question:'Thương đúng là số nào?',choices:['2 006','2 060','2 600','20 600'],answer:'2 060',note:'8 : 4 = 2; sau đó có lượt thương bằng 0 nên phải viết 0 đúng vị trí.',wrong:'Con chú ý lượt chia cho kết quả 0: không được bỏ chữ số 0 ở thương.'},
            {kind:'mul',a:12345,b:4,op:'×',result:49380,question:'Hãy chọn kết quả đúng.',choices:['48 380','49 280','49 380','49 480'],answer:'49 380',note:'Nhân 5 chữ số vẫn theo đúng từng hàng từ phải sang trái.',wrong:'Con nhân từng chữ số với 4 và cộng phần nhớ.'},
            {kind:'div',a:96360,b:3,op:':',result:32120,remainder:0,question:'Hãy chọn thương đúng.',choices:['32 020','32 120','32 220','321 200'],answer:'32 120',note:'Mỗi chữ số được hạ đúng một lần; cuối cùng thương là 32 120.',wrong:'Con làm từng lượt từ trái sang phải và kiểm tra lại bằng 32 120 × 3.'}
        ]
    }
];
let mulDivState_={lessonIndex:0,exampleIndex:0,feedback:'',revealed:false,hintStep:0,selectedChoice:null};

function ensureMulDivStyles_(){
    ensureAddSubStyles_();
    if(document.getElementById('toan3-muldiv-styles'))return;
    const style=document.createElement('style');style.id='toan3-muldiv-styles';
    style.textContent=`
      .md-visual{background:linear-gradient(160deg,#f8fbff 0%,#faf5ff 52%,#fff7fb 100%);border:2px solid #c7d2fe;border-radius:24px;padding:18px 14px}
      .md-groups{display:grid;grid-template-columns:repeat(auto-fit,minmax(86px,1fr));gap:9px;margin:10px auto;max-width:500px}
      .md-group{min-height:72px;border-radius:17px;background:#fff;border:2px solid #c7d2fe;padding:9px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:5px}
      .md-dot{width:17px;height:17px;border-radius:50%;background:linear-gradient(145deg,#818cf8,#c084fc);box-shadow:0 2px 5px rgba(99,102,241,.18)}
      .md-total{font-size:1.28rem;font-weight:1000;color:#5b21b6;text-align:center;margin-top:10px}
      .md-remainder-bank{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;padding:10px;border-radius:16px;background:#fff;border:1.5px dashed #c4b5fd;margin-bottom:10px}
      .md-empty-group{min-height:62px;border-radius:16px;background:#fff;border:2px dashed #c7d2fe;padding:8px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px}
      .md-leftover{margin-top:9px;padding:8px 10px;border-radius:14px;background:#fff7ed;border:1.5px solid #fdba74;color:#c2410c;font-weight:1000;text-align:center}
      .md-divbox{display:grid;grid-template-columns:minmax(150px,1fr) minmax(90px,.55fr);max-width:390px;margin:10px auto 0;font-family:'Courier New',monospace;color:#1f2937}
      .md-dividend{display:flex;align-items:flex-start;justify-content:flex-end;padding:12px 14px 12px 8px;font-size:2rem;font-weight:1000;letter-spacing:1px}
      .md-divright{border-left:4px solid #8b5cf6;display:grid;grid-template-rows:auto auto}
      .md-divisor{padding:8px 12px;border-bottom:4px solid #8b5cf6;font-size:1.8rem;font-weight:1000;text-align:center;color:#6d28d9}
      .md-quotient{min-height:54px;padding:10px 8px;font-size:1.8rem;font-weight:1000;text-align:center;color:#0f766e}
      .md-mask{color:#9ca3af}
      .md-expression{font:1000 2rem/1.25 'Courier New',monospace;text-align:center;color:#312e81;padding:18px 10px;border-radius:20px;background:#fff;border:2px solid #c7d2fe}
      .md-equation{font-size:1.25rem;font-weight:1000;color:#5b21b6;text-align:center;margin-top:10px}
      .md-family{display:flex;flex-wrap:wrap;gap:7px;justify-content:center;margin-top:10px}.md-family span{padding:7px 10px;border-radius:999px;background:#eef2ff;border:1.5px solid #c7d2fe;color:#4338ca;font-weight:1000}
      .md-step-note{display:flex;gap:8px;align-items:flex-start;padding:7px 0;border-bottom:1px dashed #e2e8f0;color:#475569;font-weight:800;line-height:1.45}.md-step-note:last-child{border-bottom:0}.md-step-note b{color:#4f46e5;white-space:nowrap}
      .md-lesson-grid{display:grid;grid-template-columns:1fr;gap:16px}
      @media(min-width:1100px){.md-lesson-grid{grid-template-columns:minmax(0,62%) minmax(280px,38%);align-items:start}}
      .md-table-wrap{overflow-x:visible;padding:4px 0 2px}
      .md-times-table{width:100%;min-width:0;table-layout:fixed;border-collapse:separate;border-spacing:4px;margin:0 auto}
      .md-times-table th,.md-times-table td{min-width:0;height:42px;text-align:center;border-radius:10px;font-weight:1000;font-size:1rem}
      .md-times-table th{background:#eef2ff;color:#4338ca;border:1.5px solid #c7d2fe}
      .md-times-table td{background:#fff;color:#475569;border:1.5px solid #e2e8f0}
      .md-times-table td.is-target{background:#fff7ed;border:2px dashed #fb923c;color:#c2410c;font-size:1.08rem}
      .md-times-table td.is-revealed{background:#ecfdf5;border-color:#6ee7b7;color:#047857;box-shadow:0 0 0 3px rgba(16,185,129,.08)}
    `;
    document.head.appendChild(style);
}
function mulDivCurrentLesson_(){return MULDIV_LESSONS[mulDivState_.lessonIndex];}
function mulDivCurrentExample_(){const l=mulDivCurrentLesson_();return l.examples[mulDivState_.exampleIndex%l.examples.length];}
function mulDivResetAttempt_(){mulDivState_.feedback='';mulDivState_.revealed=false;mulDivState_.hintStep=0;mulDivState_.selectedChoice=null;}
function mulDivMulWork_(ex){
    const maxDigits=Math.max(String(Math.abs(ex.a)).length,String(Math.abs(ex.result)).length);
    const a=addSubPadDigits_(ex.a,maxDigits),b=addSubPadDigits_(ex.b,maxDigits),carryMarks=Array(maxDigits).fill(''),steps=[];
    let carry=0;
    for(let i=maxDigits-1;i>=0;i--){
        const ch=a[i]; if(ch===' ')continue;
        const av=Number(ch),prod=av*Number(ex.b)+carry,out=prod%10,next=Math.floor(prod/10),pow=maxDigits-1-i;
        steps.push({text:`${addSubPlaceName_(pow)}: ${av} × ${ex.b}${carry?` + ${carry} nhớ`:''} = ${prod} → viết ${out}${next?`, nhớ ${next}`:''}.`});
        if(next&&i>0)carryMarks[i-1]=String(next); carry=next;
    }
    return {maxDigits,a,b,carryMarks,steps};
}
function mulDivDivisionSteps_(ex){
    const divisor=Number(ex.b),digits=String(Math.abs(Number(ex.a))).split('').map(Number),steps=[];let current=0,started=false;
    for(let i=0;i<digits.length;i++){
        current=current*10+digits[i];
        if(!started&&current<divisor){if(i<digits.length-1)continue;}
        const q=Math.floor(current/divisor),prod=q*divisor,rem=current-prod;started=true;
        steps.push(`Lấy ${formatMathNumberValue_(current)} : ${divisor} = ${q}; ${q} × ${divisor} = ${prod}; còn ${rem}${i<digits.length-1?`, hạ ${digits[i+1]}`:''}.`);
        current=rem;
    }
    return steps;
}
function mulDivSteps_(ex){
    if(ex.kind==='mul')return mulDivMulWork_(ex).steps.map(x=>x.text);
    if(ex.kind==='div')return mulDivDivisionSteps_(ex);
    if(ex.kind==='groups')return [`Có ${ex.groups} nhóm bằng nhau.`,`Mỗi nhóm có ${ex.perGroup} phần tử.`,`${ex.groups} × ${ex.perGroup} = ${formatMathNumberValue_(ex.result)}.`,`${formatMathNumberValue_(ex.result)} : ${ex.groups} = ${ex.perGroup} và ${formatMathNumberValue_(ex.result)} : ${ex.perGroup} = ${ex.groups}.`];
    if(ex.kind==='remainder')return [`Tìm bội của ${ex.divisor} lớn nhất không vượt quá ${ex.total}.`,`${ex.divisor} × ${ex.quotient} = ${ex.divisor*ex.quotient}.`,`${ex.total} − ${ex.divisor*ex.quotient} = ${ex.remainder}.`,ex.remainder?`Vậy ${ex.total} : ${ex.divisor} = ${ex.quotient} dư ${ex.remainder}; ${ex.remainder} < ${ex.divisor}.`:`Vậy ${ex.total} : ${ex.divisor} = ${ex.quotient}; đây là phép chia hết.`];
    if(ex.kind==='times_table')return [`Tìm hàng ${ex.a}.`,`Tìm cột ${ex.b}.`,`Giao điểm là ${ex.a} × ${ex.b} = ${ex.result}.`,`${ex.result} : ${ex.a} = ${ex.b} và ${ex.result} : ${ex.b} = ${ex.a}.`];
    return [];
}
function mulDivRenderMul_(ex){
    const w=mulDivMulWork_(ex),show=mulDivState_.revealed||mulDivState_.hintStep>0;
    const carry=show&&w.carryMarks.some(Boolean)?`<div class="as-digit-row as-carry-row" style="--cols:${w.maxDigits}"><div></div>${w.carryMarks.map((v,i)=>`<div class="as-carry${i>0&&((w.maxDigits-i)%3===0)?' ml-2':''}">${v?`↑${v}`:''}</div>`).join('')}</div>`:'';
    const resultDigits=addSubPadDigits_(ex.result,w.maxDigits);
    return `${addSubRenderPlaceRow_(w.maxDigits)}${carry}${addSubRenderDigitRow_(w.a,w,'',false,false,-1)}${addSubRenderDigitRow_(w.b,w,'×',false,false,-1)}<div class="as-divider-grid" style="--cols:${w.maxDigits}"><div></div><div class="as-divider-line"></div></div>${addSubRenderDigitRow_(resultDigits,w,'',true,!mulDivState_.revealed,-1)}`;
}
function mulDivDots_(n){return Array.from({length:n},()=>'<i class="md-dot"></i>').join('');}
function mulDivRenderGroups_(ex){
    const groups=Array.from({length:ex.groups},()=>`<div class="md-group">${mulDivDots_(ex.perGroup)}</div>`).join('');
    return `<div class="md-groups">${groups}</div><div class="md-equation">${ex.groups} × ${ex.perGroup} = ${mulDivState_.revealed?formatMathNumberValue_(ex.result):'?'}</div>${mulDivState_.revealed?`<div class="md-family"><span>${ex.result} : ${ex.groups} = ${ex.perGroup}</span><span>${ex.result} : ${ex.perGroup} = ${ex.groups}</span></div>`:''}`;
}
function mulDivRenderRemainder_(ex){
    if(!mulDivState_.revealed){
        return `<div class="md-remainder-bank">${mulDivDots_(ex.total)}</div><div class="text-center font-black text-slate-600 mb-2">Chia đều vào ${ex.divisor} nhóm</div><div class="md-groups">${Array.from({length:ex.divisor},()=>'<div class="md-empty-group"><span class="text-slate-300 font-black">?</span></div>').join('')}</div><div class="md-equation">${ex.total} : ${ex.divisor} = ?</div>`;
    }
    const groups=Array.from({length:ex.divisor},()=>`<div class="md-empty-group">${mulDivDots_(ex.quotient)}</div>`).join('');
    const left=ex.remainder?`<div class="md-leftover">Còn dư: ${mulDivDots_(ex.remainder)} <span class="ml-2">${ex.remainder}</span></div>`:`<div class="md-leftover" style="background:#ecfdf5;border-color:#6ee7b7;color:#047857">Chia hết • không còn dư</div>`;
    return `<div class="md-groups">${groups}</div>${left}<div class="md-equation">${ex.total} : ${ex.divisor} = ${ex.quotient}${ex.remainder?` dư ${ex.remainder}`:''}</div>`;
}
function mulDivRenderDiv_(ex){
    const qText=Number(ex.remainder||0)>0?`${formatMathNumberValue_(ex.result)} dư ${ex.remainder}`:formatMathNumberValue_(ex.result);
    const q=mulDivState_.revealed?qText:String(formatMathNumberValue_(ex.result)).replace(/\d/g,'?');
    return `<div class="md-divbox"><div class="md-dividend">${formatMathNumberValue_(ex.a)}</div><div class="md-divright"><div class="md-divisor">${formatMathNumberValue_(ex.b)}</div><div class="md-quotient ${mulDivState_.revealed?'':'md-mask'}">${q}</div></div></div><div class="as-mini">Số bị chia ở bên trái, số chia ở phía trên bên phải, thương ở phía dưới. Kết quả chỉ hiện khi bé chọn đúng.</div>`;
}
function mulDivRenderTimesTable_(ex){
    const heads=Array.from({length:8},(_,i)=>i+2);
    const rows=Array.from({length:8},(_,i)=>i+2).map(r=>`<tr><th>${r}</th>${heads.map(c=>{const target=r===Number(ex.a)&&c===Number(ex.b);const cls=target?(mulDivState_.revealed?'is-target is-revealed':'is-target'):'';const val=target&&!mulDivState_.revealed?'?':r*c;return `<td class="${cls}">${val}</td>`;}).join('')}</tr>`).join('');
    return `<div class="md-table-wrap"><table class="md-times-table"><thead><tr><th>×</th>${heads.map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div><div class="md-equation">${ex.a} × ${ex.b} = ${mulDivState_.revealed?ex.result:'?'}</div>${mulDivState_.revealed?`<div class="md-family"><span>${ex.result} : ${ex.a} = ${ex.b}</span><span>${ex.result} : ${ex.b} = ${ex.a}</span></div>`:''}`;
}
function mulDivVisual_(ex){if(ex.kind==='mul')return mulDivRenderMul_(ex);if(ex.kind==='div')return mulDivRenderDiv_(ex);if(ex.kind==='groups')return mulDivRenderGroups_(ex);if(ex.kind==='remainder')return mulDivRenderRemainder_(ex);if(ex.kind==='times_table')return mulDivRenderTimesTable_(ex);return '';}
function showMulDivHub_(topicObj){
    ensureMulDivStyles_();setAppShellRootMode_(false);
    const topicName=(topicObj&&topicObj.topicName)||'3. Phép nhân và chia';const questions=(topicObj&&topicObj.questions)||pendingTopicQuiz?.questions||[];
    pendingTopicQuiz={topicNum:3,topicName,questions};
    const cards=MULDIV_LESSONS.map((l,i)=>`<button onclick="openMulDivLesson_(${i})" class="as-hub-card text-left"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-white border border-indigo-100 flex items-center justify-center text-lg shrink-0">${l.icon}</div><div class="min-w-0 flex-1 flex items-center justify-between gap-2"><div class="text-base md:text-lg font-black text-indigo-700 leading-tight">${l.code}. ${escapeHtml(l.title)}</div><span class="as-badge shrink-0" style="color:#4338ca;border-color:#c7d2fe;background:#eef2ff">Học để hiểu</span></div></div></button>`).join('');
    const c=document.getElementById('view-dashboard-grid');c.className='w-full';
    c.innerHTML=`<section class="as-shell space-y-4"><div class="as-hero" style="border-color:#c7d2fe;background:linear-gradient(135deg,#eef2ff,#faf5ff,#fff7fb)"><div class="as-kicker" style="color:#4338ca;border-color:#c7d2fe">✖️ Chủ đề 3 • học để hiểu</div><h2 class="as-title mt-2" style="color:#4338ca">Từ bảng nhân/chia → thuật toán nhiều chữ số</h2><p class="as-goal mt-2">Học bảng nhân chia trước, rồi mở rộng sang nhân chia nhiều chữ số.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-3">${cards}<button onclick="startMulDivPractice_()" class="as-hub-card text-left border-emerald-300 bg-emerald-50"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-lg shrink-0">✏️</div><div class="min-w-0 flex-1 flex items-center justify-between gap-2"><div class="text-base md:text-lg font-black text-emerald-700 leading-tight">3.10. Thực hành nền tảng</div><span class="as-badge shrink-0" style="background:#fff;border-color:#bbf7d0;color:#047857">30 câu / lượt</span></div></div></button></div></section>`;
    updateNavTabs('3. Phép nhân và chia','✖️',null);switchAppView('view-dashboard-grid');
}
function openMulDivLesson_(index){mulDivState_.lessonIndex=index;mulDivState_.exampleIndex=0;mulDivResetAttempt_();renderMulDivLesson_();}
function mulDivAnotherExample_(){const l=mulDivCurrentLesson_();mulDivState_.exampleIndex=(mulDivState_.exampleIndex+1)%l.examples.length;mulDivResetAttempt_();renderMulDivLesson_();}
function mulDivPrev_(){if(mulDivState_.lessonIndex>0){mulDivState_.lessonIndex--;mulDivState_.exampleIndex=0;mulDivResetAttempt_();renderMulDivLesson_();}else showMulDivHub_(pendingTopicQuiz);}
function mulDivNext_(){if(mulDivState_.lessonIndex<MULDIV_LESSONS.length-1){mulDivState_.lessonIndex++;mulDivState_.exampleIndex=0;mulDivResetAttempt_();renderMulDivLesson_();}else showMulDivHub_(pendingTopicQuiz);}
function mulDivShowHint_(){const steps=mulDivSteps_(mulDivCurrentExample_());mulDivState_.hintStep=Math.min(steps.length,mulDivState_.hintStep+1);renderMulDivLesson_();}
function mulDivChoose_(choice){
    const ex=mulDivCurrentExample_();mulDivState_.selectedChoice=String(choice);
    if(String(choice)===String(ex.answer)){
        mulDivState_.revealed=true;mulDivState_.hintStep=mulDivSteps_(ex).length;
        const resultLabel=ex.kind==='remainder'?ex.resultText:(ex.kind==='div'&&Number(ex.remainder||0)>0?`${formatMathNumberValue_(ex.result)} dư ${ex.remainder}`:formatMathNumberValue_(ex.result));
        mulDivState_.feedback=`✅ Chính xác! Kết quả là ${resultLabel}. Con xem lại phần trực quan bên trái để hiểu vì sao.`;
    } else mulDivState_.feedback=`🌱 Chưa đúng. ${ex.wrong||'Con mở gợi ý từng bước rồi thử lại nhé.'}`;
    renderMulDivLesson_();
}
function renderMulDivLesson_(){
    ensureMulDivStyles_();const l=mulDivCurrentLesson_(),ex=mulDivCurrentExample_(),steps=mulDivSteps_(ex),visible=mulDivState_.revealed?steps:steps.slice(0,mulDivState_.hintStep);
    const choices=ex.choices.map(ch=>{const selected=String(mulDivState_.selectedChoice)===String(ch),right=String(ch)===String(ex.answer);const cls=mulDivState_.revealed&&right?' is-right':(!mulDivState_.revealed&&selected&&!right?' is-wrong':'');return `<button class="as-choice${cls}" ${mulDivState_.revealed?'disabled':''} onclick="mulDivChoose_('${String(ch).replace(/'/g,"\\'")}')">${escapeHtml(String(ch))}</button>`}).join('');
    const stepHtml=visible.length?`<div class="as-steps"><div class="font-black text-indigo-700 mb-1">🧭 Cách làm từng bước</div>${visible.map((s,i)=>`<div class="md-step-note"><b>Bước ${i+1}</b><span>${escapeHtml(s)}</span></div>`).join('')}</div>`:'';
    const visualTitle=ex.kind==='groups'?'Mô hình nhóm bằng nhau':ex.kind==='remainder'?'Mô hình chia đều':ex.kind==='mul'?'Phép nhân dọc':ex.kind==='div'?'Phép chia dọc':ex.kind==='times_table'?'Bảng cửu chương 2–9':'Trực quan';
    const c=document.getElementById('view-dashboard-grid');c.className='w-full';
    c.innerHTML=`<section class="as-shell space-y-4"><div class="as-hero" style="border-color:#c7d2fe;background:linear-gradient(135deg,#eef2ff,#faf5ff,#fff7fb)"><div class="flex items-center justify-between gap-3 flex-wrap"><div><div class="as-kicker" style="color:#4338ca;border-color:#c7d2fe">${l.code} • Học để hiểu</div><h2 class="as-title mt-2" style="color:#4338ca">${escapeHtml(l.title)}</h2><p class="as-goal mt-2">${escapeHtml(l.goal)}</p></div><button onclick="speakVietnamese('${String((l.story||'')+' '+(ex.question||'')).replace(/'/g,"\\'")}',.94)" class="as-action">🔊 Nghe cô giảng</button></div></div><div class="md-lesson-grid"><article class="as-card"><div class="md-visual"><div class="as-problem-title" style="color:#4338ca">${visualTitle}</div>${mulDivVisual_(ex)}<div class="as-mini">${mulDivState_.revealed?'Đáp án đã hiện vì con chọn đúng.':'Kết quả chỉ hiện sau khi con chọn đúng.'}</div>${ex.note?`<div class="as-note">💡 ${escapeHtml(ex.note)}</div>`:''}${stepHtml}</div><div class="mt-3 flex flex-wrap justify-between gap-2"><button onclick="showMulDivHub_(pendingTopicQuiz)" class="as-action">← Mục 3</button><button onclick="mulDivAnotherExample_()" class="as-action">🔄 Tình huống khác</button></div></article><aside class="as-card"><div class="as-story">🐝 ${escapeHtml(l.story)}</div><div class="mt-4 as-question">${escapeHtml(ex.question)}</div><div class="as-choice-grid">${choices}</div><div class="mt-3 flex flex-wrap gap-2"><button onclick="mulDivShowHint_()" class="as-action">🔎 Gợi ý từng bước</button>${mulDivState_.hintStep?`<span class="as-badge" style="color:#4338ca;border-color:#c7d2fe">Đã mở ${mulDivState_.hintStep}/${steps.length} bước</span>`:''}</div><div class="as-feedback mt-4">${escapeHtml(mulDivState_.feedback||l.remember||'Con quan sát mô hình bên trái rồi chọn đáp án đúng nhé!')}</div><div class="mt-4 flex justify-between gap-2"><button onclick="mulDivPrev_()" class="as-action">← Bài trước</button><button onclick="mulDivNext_()" class="as-action as-primary">Bài tiếp theo →</button></div></aside></div></section>`;
    updateNavTabs('3. Phép nhân và chia','✖️',`${l.code} ${l.title}`);switchAppView('view-dashboard-grid');
}
function startMulDivPractice_(){
    if(!pendingTopicQuiz?.questions?.length)return showAppNotice('Chưa có dữ liệu thực hành cho Mục 3.');
    const cleanPool=pendingTopicQuiz.questions.filter(q=>!/(?:tìm\s*x|ẩn\s*số|thành\s*phần\s*chưa\s*biết)/i.test(String(q.q||q.question||'')));
    const sourcePool=cleanPool.length?cleanPool:pendingTopicQuiz.questions;const pool=shuffleArray([...sourcePool]).slice(0,Math.min(30,sourcePool.length));practiceCycleRawPool=[...sourcePool];
    updateNavTabs('3. Phép nhân và chia','✖️','3.10 Thực hành nền tảng');startTopicQuiz(3,'3. Phép nhân và chia - 3.10 Thực hành nền tảng',pool,'3.10');
}


// ==========================================
// CHỦ ĐỀ 4: HÌNH HỌC – HỌC ĐỂ HIỂU
// ==========================================
const GEOMETRY_LESSONS=[
    {
        code:'4.1', icon:'🎯', title:'Điểm ở giữa, trung điểm và hình tròn',
        desc:'Học các điểm đặc biệt trên đoạn thẳng và các bộ phận quan trọng của hình tròn.',
        goal:'Bé biết nhận ra điểm ở giữa, trung điểm, tâm, bán kính và đường kính.',
        story:'Trong hình học lớp 3, con cần nhìn ra các điểm đặc biệt trước. Trên đoạn thẳng có điểm ở giữa, trung điểm. Trong hình tròn có tâm, bán kính và đường kính.',
        remember:'Trung điểm nằm giữa hai đầu mút và chia đoạn thẳng thành hai phần bằng nhau. Đường kính đi qua tâm và dài gấp đôi bán kính.',
        examples:[
            {kind:'midpoint',question:'Điểm nào là trung điểm của đoạn thẳng AB?',choices:['A','M','B','Không có điểm nào'],answer:'M',note:'M nằm giữa A và B, đồng thời AM = MB.',wrong:'Con tìm điểm nằm giữa A và B và làm cho hai đoạn hai bên bằng nhau.'},
            {kind:'circle',question:'Đoạn nào là đường kính của hình tròn?',choices:['OA','OB','AB','OM'],answer:'AB',note:'AB đi qua tâm O và có hai đầu nằm trên đường tròn.',wrong:'Đường kính phải nối hai điểm trên đường tròn và đi qua tâm O.'}
        ]
    },
    {
        code:'4.2', icon:'📐', title:'Góc và các hình phẳng',
        desc:'Nhận biết góc vuông, góc không vuông, tam giác, chữ nhật và hình vuông.',
        goal:'Bé hiểu đặc điểm của góc và hình phẳng qua cạnh và góc.',
        story:'Khi nhìn một hình, con không chỉ gọi tên mà còn cần biết vì sao. Góc vuông nhận ra bằng ê-ke; hình phẳng nhận ra bằng số cạnh, số góc và độ dài các cạnh.',
        remember:'Hình vuông có 4 cạnh bằng nhau và 4 góc vuông. Hình chữ nhật có 4 góc vuông. Tam giác có 3 cạnh.',
        examples:[
            {kind:'angle',question:'Góc ABC trong hình là góc gì?',choices:['Góc vuông','Góc không vuông','Đường tròn','Trung điểm'],answer:'Góc vuông',note:'Ê-ke áp khít vào góc nên đó là góc vuông.',wrong:'Con nhìn dấu vuông nhỏ ở đỉnh góc hoặc tưởng tượng đặt ê-ke vào góc.'},
            {kind:'shape',shape:'square',question:'Hình bên là hình gì?',choices:['Hình tam giác','Hình tứ giác','Hình chữ nhật','Hình vuông'],answer:'Hình vuông',note:'Hình vuông có 4 cạnh bằng nhau và 4 góc vuông.',wrong:'Con đếm số cạnh rồi nhìn tiếp xem các cạnh có bằng nhau không.'}
        ]
    },
    {
        code:'4.3', icon:'🧰', title:'Vẽ hình và hình khối',
        desc:'Biết chọn dụng cụ phù hợp và nhận biết khối lập phương, khối hộp chữ nhật.',
        goal:'Bé hiểu khi nào dùng thước, ê-ke, compa và phân biệt hai khối cơ bản của lớp 3.',
        story:'Hình học không chỉ có nhìn và trả lời, mà còn có vẽ và quan sát vật thể. Con cần biết công cụ nào giúp vẽ đúng, và nhận ra các khối hình quen thuộc.',
        remember:'Vẽ đường tròn dùng compa. Khối lập phương có các cạnh bằng nhau; khối hộp chữ nhật có các cạnh dài ngắn khác nhau theo từng nhóm.',
        examples:[
            {kind:'tool',question:'Muốn vẽ một đường tròn đẹp và đúng, con nên dùng dụng cụ nào?',choices:['Thước thẳng','Ê-ke','Compa','Tẩy'],answer:'Compa',note:'Compa giúp xác định tâm và bán kính để vẽ đường tròn.',wrong:'Dụng cụ vẽ đường tròn là compa.'},
            {kind:'solid',solid:'cube',question:'Khối bên là khối gì?',choices:['Khối trụ','Khối cầu','Khối hộp chữ nhật','Khối lập phương'],answer:'Khối lập phương',note:'Các cạnh của khối lập phương bằng nhau.',wrong:'Con quan sát các mặt là hình vuông và các cạnh bằng nhau.'}
        ]
    },
    {
        code:'4.4', icon:'📏', title:'Chu vi các hình',
        desc:'Hiểu chu vi là độ dài đường bao quanh hình rồi mới tính bằng phép cộng.',
        goal:'Bé biết cộng các cạnh xung quanh để tính chu vi.',
        story:'Chu vi là độ dài của đường đi một vòng quanh hình. Muốn tính chu vi, con cộng các cạnh ở xung quanh lại.',
        remember:'Chu vi = tổng độ dài các cạnh bao quanh hình.',
        examples:[
            {kind:'perimeter_rect',w:5,h:3,question:'Chu vi hình chữ nhật là bao nhiêu?',choices:['8 cm','15 cm','16 cm','30 cm'],answer:'16 cm',note:'5 + 3 + 5 + 3 = 16 (cm).',wrong:'Con đi một vòng quanh hình rồi cộng đủ 4 cạnh.'},
            {kind:'perimeter_square',side:4,question:'Chu vi hình vuông là bao nhiêu?',choices:['8 cm','12 cm','16 cm','20 cm'],answer:'16 cm',note:'4 + 4 + 4 + 4 = 16 (cm).',wrong:'Hình vuông có 4 cạnh bằng nhau, nên lấy 4 cộng 4 lần.'}
        ]
    },
    {
        code:'4.5', icon:'🟪', title:'Diện tích và xăng-ti-mét vuông',
        desc:'Hiểu diện tích qua ô vuông đơn vị rồi mới suy ra cách tính.',
        goal:'Bé biết đếm ô vuông để nhận ra diện tích và đọc đơn vị cm².',
        story:'Diện tích là phần mặt hình chiếm chỗ. Khi phủ các ô vuông đơn vị lên hình, ta đếm được diện tích của hình.',
        remember:'Diện tích tính bằng số ô vuông đơn vị phủ kín hình, đơn vị thường dùng là cm².',
        examples:[
            {kind:'area_grid',rows:3,cols:4,question:'Hình gồm tất cả bao nhiêu ô vuông đơn vị?',choices:['7','10','12','14'],answer:'12',note:'Có 3 hàng, mỗi hàng 4 ô nên có 12 ô vuông đơn vị.',wrong:'Con đếm theo hàng: 4 + 4 + 4.'},
            {kind:'area_rect',rows:2,cols:5,question:'Diện tích hình chữ nhật là bao nhiêu?',choices:['7 cm²','10 cm²','12 cm²','20 cm²'],answer:'10 cm²',note:'2 hàng × 5 cột = 10 (cm²).',wrong:'Con đếm số ô vuông hoặc lấy số hàng nhân số cột.'}
        ]
    }
];
let geometryState_={lessonIndex:0,exampleIndex:0,feedback:'',revealed:false,hintStep:0,selectedChoice:null};
function geometryCurrentLesson_(){return GEOMETRY_LESSONS[geometryState_.lessonIndex]||GEOMETRY_LESSONS[0];}
function geometryCurrentExample_(){const l=geometryCurrentLesson_();return l.examples[geometryState_.exampleIndex]||l.examples[0];}
function geometryResetAttempt_(){geometryState_.feedback='';geometryState_.revealed=false;geometryState_.hintStep=0;geometryState_.selectedChoice=null;}
function ensureGeometryStyles_(){
    ensureMulDivStyles_();
    if(document.getElementById('toan3-geometry-styles'))return;
    const style=document.createElement('style');style.id='toan3-geometry-styles';
    style.textContent=`
      .geo-visual{background:linear-gradient(165deg,#f8fbff 0%,#fff7fb 52%,#fffbeb 100%);border:2px solid #c4b5fd;border-radius:24px;padding:18px 14px}
      .geo-board{background:#fff;border:2px solid #ddd6fe;border-radius:22px;padding:14px}
      .geo-caption{text-align:center;font-size:1.18rem;font-weight:1000;color:#4338ca;margin-bottom:10px}
      .geo-reveal{margin-top:12px;padding:10px 12px;border-radius:16px;background:#eefdf5;border:1.5px solid #86efac;color:#047857;font-weight:900}
      .geo-note{margin-top:10px;padding:10px 12px;border-radius:16px;background:#eef2ff;border:1px dashed #a5b4fc;color:#4338ca;font-weight:900}
      .geo-tool-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:12px}
      .geo-tool{border:2px solid #ddd6fe;border-radius:16px;padding:10px 6px;text-align:center;background:#faf5ff;font-weight:1000;color:#5b21b6}
      .geo-tool.is-right{background:#ecfdf5;border-color:#86efac;color:#047857}
      .geo-formula{margin-top:12px;text-align:center;font-size:1.2rem;font-weight:1000;color:#5b21b6}
      .geo-square-grid{display:grid;gap:3px;justify-content:center;margin:6px auto 0}
      .geo-square{width:34px;height:34px;border:1.5px solid #c7d2fe;border-radius:8px;background:#eff6ff}
      .geo-square.filled{background:#ddd6fe;border-color:#8b5cf6}
      .geo-key{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:10px}
      .geo-key span{padding:5px 10px;border-radius:999px;background:#f5f3ff;border:1px solid #ddd6fe;font-weight:900;color:#5b21b6}
    `;
    document.head.appendChild(style);
}
function geometrySteps_(ex){
    switch(ex.kind){
        case 'midpoint': return ['Quan sát ba điểm A, M, B cùng nằm trên đoạn thẳng AB.','Tìm điểm nằm ở giữa hai đầu mút A và B.','Kiểm tra xem hai đoạn AM và MB có bằng nhau không.','Vì M ở giữa và AM = MB nên M là trung điểm.'];
        case 'circle': return ['Quan sát hình tròn có tâm O.','Bán kính nối tâm với một điểm trên đường tròn.','Đường kính phải nối hai điểm trên đường tròn và đi qua tâm.','Vì AB đi qua O nên AB là đường kính.'];
        case 'angle': return ['Nhìn đỉnh góc là điểm B.','So sánh góc với một góc vuông của ê-ke.','Góc khít đúng với ê-ke nên là góc vuông.'];
        case 'shape': return ['Đếm số cạnh của hình.','Quan sát bốn góc đều là góc vuông.','So sánh độ dài các cạnh, thấy bốn cạnh bằng nhau.','Vậy hình bên là hình vuông.'];
        case 'tool': return ['Xác định con muốn vẽ hình gì: ở đây là đường tròn.','Đường tròn cần một tâm cố định và khoảng cách không đổi đến các điểm trên đường tròn.','Compa giúp giữ bán kính cố định nên phù hợp nhất.'];
        case 'solid': return ['Quan sát các mặt của khối.','Các mặt nhìn thấy là những hình vuông.','Các cạnh của khối bằng nhau nên đây là khối lập phương.'];
        case 'perimeter_rect': return [`Chu vi là độ dài đường bao quanh hình.`,`Cộng bốn cạnh: ${ex.w} + ${ex.h} + ${ex.w} + ${ex.h}.`,`Ta được ${2*(ex.w+ex.h)} cm.`];
        case 'perimeter_square': return ['Chu vi là tổng độ dài 4 cạnh bằng nhau của hình vuông.',`Cộng 4 cạnh: ${ex.side} + ${ex.side} + ${ex.side} + ${ex.side}.`,`Ta được ${4*ex.side} cm.`];
        case 'area_grid': return [`Đếm số ô trong mỗi hàng: ${ex.cols} ô.`,`Có ${ex.rows} hàng như nhau.`,`Tổng số ô vuông đơn vị là ${ex.rows*ex.cols}.`];
        case 'area_rect': return [`Diện tích bằng số ô vuông phủ kín hình.`,`Có ${ex.rows} hàng và ${ex.cols} cột.`,`${ex.rows} × ${ex.cols} = ${ex.rows*ex.cols}, nên diện tích là ${ex.rows*ex.cols} cm².`];
        default: return ['Con quan sát hình minh hoạ bên trái rồi chọn đáp án đúng.'];
    }
}
function geometrySvgWrap_(inner){return `<div class="geo-board"><svg viewBox="0 0 320 220" class="w-full h-auto">${inner}</svg></div>`;}
function geometryRenderMidpoint_(){
    const hi=geometryState_.revealed?'#7c3aed':'#94a3b8';
    return geometrySvgWrap_(`
      <line x1="45" y1="110" x2="275" y2="110" stroke="#475569" stroke-width="5" stroke-linecap="round"/>
      <line x1="105" y1="95" x2="105" y2="125" stroke="#fb7185" stroke-width="4"/>
      <line x1="215" y1="95" x2="215" y2="125" stroke="#fb7185" stroke-width="4"/>
      <circle cx="45" cy="110" r="10" fill="#60a5fa"/><circle cx="160" cy="110" r="12" fill="${hi}"/><circle cx="275" cy="110" r="10" fill="#60a5fa"/>
      <text x="40" y="88" font-size="22" font-weight="900" fill="#1e40af">A</text>
      <text x="151" y="82" font-size="24" font-weight="900" fill="${hi}">M</text>
      <text x="271" y="88" font-size="22" font-weight="900" fill="#1e40af">B</text>
      <text x="78" y="150" font-size="18" font-weight="900" fill="#be185d">AM</text>
      <text x="210" y="150" font-size="18" font-weight="900" fill="#be185d">MB</text>
      <text x="102" y="176" font-size="20" font-weight="900" fill="#7c3aed">AM = MB</text>
    `)+(geometryState_.revealed?`<div class="geo-reveal">M nằm giữa A và B, đồng thời AM = MB nên M là trung điểm.</div>`:'');
}
function geometryRenderCircle_(){
    const hi=geometryState_.revealed?'#f97316':'#cbd5e1';
    return geometrySvgWrap_(`
      <circle cx="160" cy="108" r="70" fill="#eff6ff" stroke="#60a5fa" stroke-width="4"/>
      <line x1="90" y1="108" x2="230" y2="108" stroke="${hi}" stroke-width="6" stroke-linecap="round"/>
      <line x1="160" y1="108" x2="230" y2="108" stroke="#8b5cf6" stroke-width="5" stroke-linecap="round"/>
      <line x1="160" y1="108" x2="115" y2="62" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
      <circle cx="160" cy="108" r="7" fill="#ef4444"/>
      <circle cx="90" cy="108" r="7" fill="#2563eb"/><circle cx="230" cy="108" r="7" fill="#2563eb"/><circle cx="115" cy="62" r="7" fill="#059669"/>
      <text x="80" y="96" font-size="20" font-weight="900" fill="#1d4ed8">A</text>
      <text x="236" y="96" font-size="20" font-weight="900" fill="#1d4ed8">B</text>
      <text x="168" y="101" font-size="20" font-weight="900" fill="#dc2626">O</text>
      <text x="103" y="53" font-size="20" font-weight="900" fill="#047857">M</text>
      <text x="176" y="128" font-size="18" font-weight="900" fill="#7c3aed">OB</text>
      <text x="116" y="88" font-size="18" font-weight="900" fill="#059669">OM</text>
      <text x="136" y="90" font-size="18" font-weight="900" fill="#f97316">AB</text>
    `)+(geometryState_.revealed?`<div class="geo-reveal">AB nối hai điểm trên đường tròn và đi qua tâm O nên AB là đường kính.</div>`:'');
}
function geometryRenderAngle_(){
    const hi=geometryState_.revealed?'#8b5cf6':'#cbd5e1';
    return geometrySvgWrap_(`
      <line x1="90" y1="160" x2="90" y2="60" stroke="#0f766e" stroke-width="6" stroke-linecap="round"/>
      <line x1="90" y1="160" x2="220" y2="160" stroke="#0f766e" stroke-width="6" stroke-linecap="round"/>
      <rect x="90" y="140" width="22" height="20" fill="none" stroke="${hi}" stroke-width="4"/>
      <circle cx="90" cy="160" r="7" fill="#e11d48"/>
      <text x="74" y="52" font-size="20" font-weight="900" fill="#0f766e">A</text>
      <text x="76" y="183" font-size="20" font-weight="900" fill="#e11d48">B</text>
      <text x="228" y="166" font-size="20" font-weight="900" fill="#0f766e">C</text>
      <text x="126" y="126" font-size="20" font-weight="900" fill="#8b5cf6">90°</text>
    `)+(geometryState_.revealed?`<div class="geo-reveal">Góc ABC khít đúng với ê-ke nên đó là góc vuông.</div>`:'');
}
function geometryRenderShape_(shape){
    const border=geometryState_.revealed?'#8b5cf6':'#6366f1';
    const inner=shape==='square'
      ? `<rect x="95" y="55" width="130" height="130" rx="8" fill="#eff6ff" stroke="${border}" stroke-width="6"/>`
      : `<rect x="70" y="70" width="180" height="110" rx="8" fill="#eff6ff" stroke="${border}" stroke-width="6"/>`;
    return geometrySvgWrap_(inner+`<text x="120" y="205" font-size="19" font-weight="900" fill="#4338ca">4 góc vuông • 4 cạnh bằng nhau</text>`)+(geometryState_.revealed?`<div class="geo-reveal">Hình bên là hình vuông vì có 4 cạnh bằng nhau và 4 góc vuông.</div>`:'');
}
function geometryRenderTool_(){
    return `<div class="geo-board"><div class="geo-caption">Dụng cụ hình học</div><svg viewBox="0 0 320 150" class="w-full h-auto"><circle cx="85" cy="74" r="42" fill="#eff6ff" stroke="#60a5fa" stroke-width="4"/><circle cx="85" cy="74" r="3" fill="#ef4444"/><text x="80" y="80" font-size="20" font-weight="900" fill="#ef4444">O</text><text x="150" y="55" font-size="22" font-weight="900" fill="#475569">Muốn vẽ</text><text x="145" y="88" font-size="24" font-weight="900" fill="#7c3aed">đường tròn</text><text x="146" y="118" font-size="18" font-weight="900" fill="#64748b">con chọn dụng cụ nào?</text></svg><div class="geo-tool-grid"><div class="geo-tool">📏<br>Thước</div><div class="geo-tool">📐<br>Ê-ke</div><div class="geo-tool ${geometryState_.revealed?'is-right':''}">🧭<br>Compa</div><div class="geo-tool">🩹<br>Tẩy</div></div></div>`+(geometryState_.revealed?`<div class="geo-reveal">Vẽ đường tròn dùng compa để giữ tâm cố định và bán kính không đổi.</div>`:'');
}
function geometryRenderSolid_(){
    const hi=geometryState_.revealed?'#8b5cf6':'#94a3b8';
    return geometrySvgWrap_(`
      <polygon points="95,70 175,70 225,105 145,105" fill="#ede9fe" stroke="${hi}" stroke-width="4"/>
      <polygon points="95,70 95,150 145,185 145,105" fill="#ddd6fe" stroke="${hi}" stroke-width="4"/>
      <polygon points="145,105 225,105 225,185 145,185" fill="#faf5ff" stroke="${hi}" stroke-width="4"/>
      <line x1="175" y1="70" x2="175" y2="150" stroke="${hi}" stroke-width="4"/>
      <line x1="225" y1="105" x2="175" y2="150" stroke="${hi}" stroke-width="4"/>
      <line x1="95" y1="150" x2="175" y2="150" stroke="${hi}" stroke-width="4"/>
      <text x="114" y="205" font-size="20" font-weight="900" fill="#4338ca">Các cạnh bằng nhau</text>
    `)+(geometryState_.revealed?`<div class="geo-reveal">Khối này có các cạnh bằng nhau và các mặt là hình vuông nên là khối lập phương.</div>`:'');
}
function geometryRenderPerimeterRect_(ex){
    const p=2*(ex.w+ex.h);
    return geometrySvgWrap_(`
      <rect x="72" y="62" width="176" height="104" rx="10" fill="#fff7ed" stroke="#fb923c" stroke-width="5"/>
      <text x="152" y="52" font-size="22" font-weight="900" fill="#c2410c">${ex.w} cm</text>
      <text x="252" y="120" font-size="22" font-weight="900" fill="#c2410c">${ex.h} cm</text>
      <text x="148" y="193" font-size="22" font-weight="900" fill="#c2410c">${ex.w} cm</text>
      <text x="32" y="120" font-size="22" font-weight="900" fill="#c2410c">${ex.h} cm</text>
      <path d="M72 62 H248 V166 H72 Z" fill="none" stroke="#7c3aed" stroke-width="6" stroke-dasharray="12 8"/>
    `)+`<div class="geo-formula">Chu vi: ${geometryState_.revealed?`${ex.w} + ${ex.h} + ${ex.w} + ${ex.h} = ${p} cm`:'? + ? + ? + ? = ?'}</div>`;
}
function geometryRenderPerimeterSquare_(ex){
    const p=4*ex.side;
    return geometrySvgWrap_(`
      <rect x="95" y="45" width="130" height="130" rx="10" fill="#ecfeff" stroke="#06b6d4" stroke-width="5"/>
      <text x="145" y="34" font-size="22" font-weight="900" fill="#0f766e">${ex.side} cm</text>
      <text x="234" y="114" font-size="22" font-weight="900" fill="#0f766e">${ex.side}</text>
      <text x="147" y="200" font-size="22" font-weight="900" fill="#0f766e">${ex.side} cm</text>
      <text x="54" y="114" font-size="22" font-weight="900" fill="#0f766e">${ex.side}</text>
      <path d="M95 45 H225 V175 H95 Z" fill="none" stroke="#8b5cf6" stroke-width="6" stroke-dasharray="12 8"/>
    `)+`<div class="geo-formula">Chu vi: ${geometryState_.revealed?`${ex.side} + ${ex.side} + ${ex.side} + ${ex.side} = ${p} cm`:'? + ? + ? + ? = ?'}</div>`;
}
function geometryRenderArea_(ex,unit){
    const rows=ex.rows,cols=ex.cols,total=rows*cols;
    let squares='';
    for(let i=0;i<rows*cols;i++)squares += '<div class="geo-square filled"></div>';
    return `<div class="geo-board"><div class="geo-caption">Ô vuông đơn vị</div><div class="geo-square-grid" style="grid-template-columns:repeat(${cols},34px)">${squares}</div><div class="geo-key"><span>${rows} hàng</span><span>${cols} cột</span></div></div><div class="geo-formula">Diện tích: ${geometryState_.revealed?`${rows} × ${cols} = ${total}${unit?` ${unit}`:''}`:'? × ? = ?'}</div>`;
}
function geometryVisual_(ex){
    switch(ex.kind){
        case 'midpoint': return geometryRenderMidpoint_();
        case 'circle': return geometryRenderCircle_();
        case 'angle': return geometryRenderAngle_();
        case 'shape': return geometryRenderShape_(ex.shape||'square');
        case 'tool': return geometryRenderTool_();
        case 'solid': return geometryRenderSolid_();
        case 'perimeter_rect': return geometryRenderPerimeterRect_(ex);
        case 'perimeter_square': return geometryRenderPerimeterSquare_(ex);
        case 'area_grid': return geometryRenderArea_(ex,'');
        case 'area_rect': return geometryRenderArea_(ex,'cm²');
        default: return '<div class="geo-board">Hình minh hoạ đang được cập nhật.</div>';
    }
}
function showGeometryHub_(topicObj){
    ensureGeometryStyles_();setAppShellRootMode_(false);
    const topicName=(topicObj&&topicObj.topicName)||'4. Hình học';const questions=(topicObj&&topicObj.questions)||pendingTopicQuiz?.questions||[];
    pendingTopicQuiz={topicNum:4,topicName,questions};
    const cards=GEOMETRY_LESSONS.map((l,i)=>`<button onclick="openGeometryLesson_(${i})" class="as-hub-card text-left"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-white border border-indigo-100 flex items-center justify-center text-lg shrink-0">${l.icon}</div><div class="min-w-0 flex-1 flex items-center justify-between gap-2"><div class="text-base md:text-lg font-black text-indigo-700 leading-tight">${l.code}. ${escapeHtml(l.title)}</div><span class="as-badge shrink-0" style="color:#4338ca;border-color:#c7d2fe;background:#eef2ff">Học để hiểu</span></div></div></button>`).join('');
    const c=document.getElementById('view-dashboard-grid');c.className='w-full';
    c.innerHTML=`<section class="as-shell space-y-4"><div class="as-hero" style="border-color:#c7d2fe;background:linear-gradient(135deg,#eef2ff,#faf5ff,#fff7fb)"><div class="as-kicker" style="color:#4338ca;border-color:#c7d2fe">📐 Chủ đề 4 • học để hiểu</div><h2 class="as-title mt-2" style="color:#4338ca">Hình học lớp 3 theo đúng mạch SGK</h2><p class="as-goal mt-2">Quan sát hình, hiểu đặc điểm rồi thực hành tổng hợp.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-3">${cards}<button onclick="startGeometryPractice_()" class="as-hub-card text-left border-emerald-300 bg-emerald-50"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-lg shrink-0">✏️</div><div class="min-w-0 flex-1 flex items-center justify-between gap-2"><div class="text-base md:text-lg font-black text-emerald-700 leading-tight">4.6. Thực hành hình học tổng hợp</div><span class="as-badge shrink-0" style="background:#fff;border-color:#bbf7d0;color:#047857">15 câu / lượt</span></div></div></button></div></section>`;
    updateNavTabs('4. Hình học','📐',null);switchAppView('view-dashboard-grid');
}
function openGeometryLesson_(index){geometryState_.lessonIndex=index;geometryState_.exampleIndex=0;geometryResetAttempt_();renderGeometryLesson_();}
function geometryAnotherExample_(){const l=geometryCurrentLesson_();geometryState_.exampleIndex=(geometryState_.exampleIndex+1)%l.examples.length;geometryResetAttempt_();renderGeometryLesson_();}
function geometryPrev_(){if(geometryState_.lessonIndex>0){geometryState_.lessonIndex--;geometryState_.exampleIndex=0;geometryResetAttempt_();renderGeometryLesson_();}else showGeometryHub_(pendingTopicQuiz);}
function geometryNext_(){if(geometryState_.lessonIndex<GEOMETRY_LESSONS.length-1){geometryState_.lessonIndex++;geometryState_.exampleIndex=0;geometryResetAttempt_();renderGeometryLesson_();}else showGeometryHub_(pendingTopicQuiz);}
function geometryShowHint_(){const steps=geometrySteps_(geometryCurrentExample_());geometryState_.hintStep=Math.min(steps.length,geometryState_.hintStep+1);renderGeometryLesson_();}
function geometryChoose_(choice){
    const ex=geometryCurrentExample_();geometryState_.selectedChoice=String(choice);
    if(String(choice)===String(ex.answer)){
        geometryState_.revealed=true;geometryState_.hintStep=geometrySteps_(ex).length;
        geometryState_.feedback=`✅ Chính xác! ${ex.note||'Con nhìn lại hình minh hoạ bên trái để hiểu cách làm nhé.'}`;
    }else geometryState_.feedback=`🌱 Chưa đúng. ${ex.wrong||'Con mở gợi ý từng bước rồi thử lại nhé.'}`;
    renderGeometryLesson_();
}
function renderGeometryLesson_(){
    ensureGeometryStyles_();const l=geometryCurrentLesson_(),ex=geometryCurrentExample_(),steps=geometrySteps_(ex),visible=geometryState_.revealed?steps:steps.slice(0,geometryState_.hintStep);
    const choices=ex.choices.map(ch=>{const selected=String(geometryState_.selectedChoice)===String(ch),right=String(ch)===String(ex.answer);const cls=geometryState_.revealed&&right?' is-right':(!geometryState_.revealed&&selected&&!right?' is-wrong':'');return `<button class="as-choice${cls}" ${geometryState_.revealed?'disabled':''} onclick="geometryChoose_('${String(ch).replace(/'/g,"\\'")}')">${escapeHtml(String(ch))}</button>`}).join('');
    const stepHtml=visible.length?`<div class="as-steps"><div class="font-black text-indigo-700 mb-1">🧭 Cách làm từng bước</div>${visible.map((s,i)=>`<div class="md-step-note"><b>Bước ${i+1}</b><span>${escapeHtml(s)}</span></div>`).join('')}</div>`:'';
    const c=document.getElementById('view-dashboard-grid');c.className='w-full';
    c.innerHTML=`<section class="as-shell space-y-4"><div class="as-hero" style="border-color:#c7d2fe;background:linear-gradient(135deg,#eef2ff,#faf5ff,#fff7fb)"><div class="flex items-center justify-between gap-3 flex-wrap"><div><div class="as-kicker" style="color:#4338ca;border-color:#c7d2fe">${l.code} • Học để hiểu</div><h2 class="as-title mt-2" style="color:#4338ca">${escapeHtml(l.title)}</h2><p class="as-goal mt-2">${escapeHtml(l.goal)}</p></div><button onclick="speakVietnamese('${String((l.story||'')+' '+(ex.question||'')).replace(/'/g,"\\'")}',.94)" class="as-action">🔊 Nghe cô giảng</button></div></div><div class="md-lesson-grid"><article class="as-card"><div class="geo-visual"><div class="as-problem-title" style="color:#4338ca">Hình minh hoạ</div>${geometryVisual_(ex)}<div class="as-mini">${geometryState_.revealed?'Đáp án đã hiện vì con chọn đúng.':'Con nhìn hình minh hoạ bên trái rồi mới chọn đáp án nhé.'}</div>${ex.note?`<div class="as-note">💡 ${escapeHtml(ex.note)}</div>`:''}${stepHtml}</div><div class="mt-3 flex flex-wrap justify-between gap-2"><button onclick="showGeometryHub_(pendingTopicQuiz)" class="as-action">← Mục 4</button><button onclick="geometryAnotherExample_()" class="as-action">🔄 Tình huống khác</button></div></article><aside class="as-card"><div class="as-story">🐝 ${escapeHtml(l.story)}</div><div class="mt-4 as-question">${escapeHtml(ex.question)}</div><div class="as-choice-grid">${choices}</div><div class="mt-3 flex flex-wrap gap-2"><button onclick="geometryShowHint_()" class="as-action">🔎 Gợi ý từng bước</button>${geometryState_.hintStep?`<span class="as-badge" style="color:#4338ca;border-color:#c7d2fe">Đã mở ${geometryState_.hintStep}/${steps.length} bước</span>`:''}</div><div class="as-feedback mt-4">${escapeHtml(geometryState_.feedback||l.remember||'Con quan sát hình bên trái rồi chọn đáp án đúng nhé!')}</div><div class="mt-4 flex justify-between gap-2"><button onclick="geometryPrev_()" class="as-action">← Bài trước</button><button onclick="geometryNext_()" class="as-action as-primary">Bài tiếp theo →</button></div></aside></div></section>`;
    updateNavTabs('4. Hình học','📐',`${l.code} ${l.title}`);switchAppView('view-dashboard-grid');
}
function geometryExampleToQuestion_(lesson, ex, idx){
    return {
        question_id:`GEO_${lesson.code.replace('.','_')}_${idx}`,
        sub_topic:lesson.code,
        sub_code:lesson.code,
        sub_topic_label:`${lesson.code} ${lesson.title}`,
        question_text:ex.question,
        options:[...ex.choices],
        answer:ex.answer,
        hint:ex.note||lesson.remember,
        image_url:'',audio_text:'',reading_title:'',reading_passage:'',
        competency:'TOAN3_C1',skill_tag:'TOAN3_C1',diem:0.5,score:0.5
    };
}
function buildGeometryPracticePool_(){
    const base=[];
    GEOMETRY_LESSONS.forEach(lesson=>lesson.examples.forEach((ex,idx)=>base.push(geometryExampleToQuestion_(lesson,ex,idx))));
    const pool=[];let round=0;
    while(pool.length<15){
        const chunk=shuffleArray(base.map((q,i)=>({...q,question_id:`${q.question_id}_R${round}_${i}`})));
        for(const q of chunk){if(pool.length>=15)break;pool.push(q);}round++;
        if(round>3)break;
    }
    return pool;
}
function startGeometryPractice_(){
    const pool=buildGeometryPracticePool_();
    if(!pool.length)return showAppNotice('Chưa có dữ liệu thực hành cho Mục 4.');
    practiceCycleRawPool=[...pool];
    updateNavTabs('4. Hình học','📐','4.6 Thực hành hình học tổng hợp');
    startTopicQuiz(4,'4. Hình học - 4.6 Thực hành hình học tổng hợp',pool,'4.6');
}


// ==========================================
// CHỦ ĐỀ 5: ĐƠN VỊ ĐO VÀ THỜI GIAN – HỌC ĐỂ HIỂU
// ==========================================
const MEASURE_LESSONS=[
    {
        code:'5.1', icon:'📏', title:'Mi-li-mét và đo độ dài',
        goal:'Bé đọc được vạch mi-li-mét trên thước và đổi giữa cm với mm.',
        story:'Mi-li-mét dùng để đo những độ dài nhỏ. Trên thước, mỗi xăng-ti-mét được chia thành 10 phần bằng nhau; mỗi phần là 1 mm.',
        remember:'1 cm = 10 mm. Khi đọc thước, con nhìn đúng vạch đầu và vạch cuối của vật.',
        examples:[
            {kind:'ruler',mm:37,question:'Độ dài được đánh dấu trên thước là bao nhiêu?',choices:['27 mm','37 mm','47 mm','70 mm'],answer:'37 mm',note:'Vạch cuối nằm ở 37 mm.',wrong:'Con đếm từ vạch 0 đến vạch cuối: mỗi vạch nhỏ là 1 mm.'},
            {kind:'ruler',mm:64,question:'6 cm 4 mm bằng bao nhiêu mi-li-mét?',choices:['46 mm','54 mm','64 mm','604 mm'],answer:'64 mm',note:'6 cm = 60 mm; thêm 4 mm được 64 mm.',wrong:'Đổi 6 cm thành 60 mm rồi cộng thêm 4 mm.'},
            {kind:'ruler',mm:28,question:'28 mm viết theo xăng-ti-mét và mi-li-mét là:',choices:['2 cm 8 mm','8 cm 2 mm','28 cm','2 cm 80 mm'],answer:'2 cm 8 mm',note:'20 mm = 2 cm, còn 8 mm.',wrong:'Tách 28 mm thành 20 mm và 8 mm.'}
        ]
    },
    {
        code:'5.2', icon:'⚖️', title:'Gam và mi-li-lít',
        goal:'Bé đọc được số đo khối lượng và dung tích bằng g, ml.',
        story:'Gam dùng để đo khối lượng nhỏ; mi-li-lít dùng để đo lượng chất lỏng nhỏ. Con cần chọn đúng dụng cụ và đúng đơn vị.',
        remember:'1 kg = 1 000 g; 1 l = 1 000 ml.',
        examples:[
            {kind:'scale',value:350,unit:'g',question:'Cân đang chỉ khối lượng bao nhiêu?',choices:['35 g','350 g','530 g','3 500 g'],answer:'350 g',note:'Màn hình cân hiển thị 350 g.',wrong:'Con nhìn số trên màn hình cân và nhớ đơn vị là gam.'},
            {kind:'scale',value:900,unit:'g',question:'Khối lượng trên cân là bao nhiêu gam?',choices:['90 g','900 g','1 000 g','9 000 g'],answer:'900 g',note:'Cân chỉ 900 g, tức còn thiếu 100 g để đủ 1 kg.',wrong:'Con đọc đúng ba chữ số trên màn hình cân.'},
            {kind:'cylinder',value:650,unit:'ml',question:'Bình chia vạch đang có bao nhiêu mi-li-lít nước?',choices:['550 ml','600 ml','650 ml','750 ml'],answer:'650 ml',note:'Mực nước nằm đúng vạch 650 ml.',wrong:'Con đọc vạch ngang trùng với mặt nước.'}
        ]
    },
    {
        code:'5.3', icon:'🌡️', title:'Nhiệt độ – độ C',
        goal:'Bé đọc được nhiệt kế và viết nhiệt độ theo °C.',
        story:'Nhiệt kế cho biết nóng hay lạnh bằng nhiệt độ. Con đọc mức cột màu rồi ghi kèm đơn vị độ C.',
        remember:'Nhiệt độ được viết với đơn vị °C. Số càng lớn thì nhiệt độ càng cao.',
        examples:[
            {kind:'thermometer',value:28,question:'Nhiệt kế đang chỉ bao nhiêu độ C?',choices:['18°C','28°C','38°C','82°C'],answer:'28°C',note:'Đỉnh cột màu dừng ở vạch 28.',wrong:'Con nhìn đúng vạch ngang nơi cột màu dừng lại.'},
            {kind:'thermometer',value:15,question:'Cách viết đúng nhiệt độ trong hình là:',choices:['15 g','15 ml','15°C','15 mm'],answer:'15°C',note:'Nhiệt độ dùng đơn vị °C.',wrong:'Đây là nhiệt kế nên đơn vị phải là °C.'},
            {kind:'thermometer',value:36,question:'Nhiệt độ 36°C cao hơn 28°C bao nhiêu độ?',choices:['6°C','8°C','10°C','64°C'],answer:'8°C',note:'36 − 28 = 8°C.',wrong:'Lấy nhiệt độ cao trừ nhiệt độ thấp: 36 − 28.'}
        ]
    },
    {
        code:'5.4', icon:'🕒', title:'Đồng hồ – lịch – tháng, năm',
        goal:'Bé đọc giờ đến phút và tra cứu ngày, thứ trên lịch.',
        story:'Kim ngắn cho biết giờ, kim dài cho biết phút. Với lịch, con xác định đúng tháng rồi tìm ngày và thứ.',
        remember:'Mỗi số trên mặt đồng hồ ứng với 5 phút của kim phút. Lịch giúp tra ngày, thứ và số ngày trong tháng.',
        examples:[
            {kind:'clock',hour:8,minute:25,question:'Đồng hồ đang chỉ mấy giờ?',choices:['8 giờ 5 phút','8 giờ 25 phút','9 giờ 25 phút','5 giờ 40 phút'],answer:'8 giờ 25 phút',note:'Kim phút ở số 5 là 25 phút; kim giờ ở sau số 8.',wrong:'Đọc kim phút trước: số 5 ứng với 25 phút.'},
            {kind:'clock',hour:3,minute:45,question:'Đồng hồ đang chỉ mấy giờ?',choices:['3 giờ 15 phút','3 giờ 45 phút','4 giờ 15 phút','9 giờ 15 phút'],answer:'3 giờ 45 phút',note:'Kim phút ở số 9 là 45 phút.',wrong:'Kim phút chỉ số 9 nên là 45 phút.'},
            {kind:'calendar',year:2026,month:4,target:30,question:'Theo tờ lịch, ngày 30 tháng 4 năm 2026 là thứ mấy?',choices:['Thứ Hai','Thứ Tư','Thứ Năm','Chủ nhật'],answer:'Thứ Năm',note:'Ngày 30 nằm ở cột Thứ Năm.',wrong:'Con tìm số 30 rồi nhìn lên tiêu đề cột của nó.'}
        ]
    },
    {
        code:'5.5', icon:'💵', title:'Tiền Việt Nam',
        goal:'Bé nhận biết mệnh giá, ghép tiền và tính tiền thừa.',
        story:'Khi mua bán, con đọc đúng từng mệnh giá rồi cộng tổng tiền hoặc lấy tiền đưa trừ giá món hàng.',
        remember:'Tổng tiền bằng tổng các mệnh giá. Tiền thừa = tiền đưa − giá món hàng.',
        examples:[
            {kind:'money_sum',notes:[10000,5000,2000],question:'Ba tờ tiền bên trái có tổng cộng bao nhiêu?',choices:['15 000đ','16 000đ','17 000đ','20 000đ'],answer:'17 000đ',note:'10 000 + 5 000 + 2 000 = 17 000đ.',wrong:'Con cộng từng mệnh giá từ lớn đến nhỏ.'},
            {kind:'money_change',paid:50000,price:32000,question:'Đưa 50 000đ mua món giá 32 000đ. Con nhận lại bao nhiêu?',choices:['12 000đ','18 000đ','22 000đ','82 000đ'],answer:'18 000đ',note:'50 000 − 32 000 = 18 000đ.',wrong:'Tiền thừa bằng tiền đưa trừ giá món hàng.'},
            {kind:'money_sum',notes:[20000,10000,2000],question:'Số tiền trong hình bằng bao nhiêu?',choices:['30 000đ','32 000đ','22 000đ','42 000đ'],answer:'32 000đ',note:'20 000 + 10 000 + 2 000 = 32 000đ.',wrong:'Cộng 20 000 với 10 000 trước, rồi cộng 2 000.'}
        ]
    }
];
let measureState_={lessonIndex:0,exampleIndex:0,feedback:'',revealed:false,hintStep:0,selectedChoice:null};
let measurePractice_={active:false,list:[],index:0,correct:0};
function measureCurrentLesson_(){
    if(measurePractice_.active){const item=measurePractice_.list[measurePractice_.index];return MEASURE_LESSONS[item?.lessonIndex||0]||MEASURE_LESSONS[0];}
    return MEASURE_LESSONS[measureState_.lessonIndex]||MEASURE_LESSONS[0];
}
function measureCurrentExample_(){
    if(measurePractice_.active){const item=measurePractice_.list[measurePractice_.index];return item?.ex||MEASURE_LESSONS[0].examples[0];}
    const l=measureCurrentLesson_();return l.examples[measureState_.exampleIndex]||l.examples[0];
}
function measureResetAttempt_(){measureState_.feedback='';measureState_.revealed=false;measureState_.hintStep=0;measureState_.selectedChoice=null;}
function ensureMeasureStyles_(){
    ensureGeometryStyles_();
    if(document.getElementById('toan3-measure-styles'))return;
    const style=document.createElement('style');style.id='toan3-measure-styles';
    style.textContent=`
      .ms-visual{background:linear-gradient(165deg,#ecfdf5 0%,#f0fdfa 45%,#fff7fb 100%);border:2px solid #a7f3d0;border-radius:24px;padding:18px 14px}
      .ms-board{background:#fff;border:2px solid #d1fae5;border-radius:22px;padding:14px}
      .ms-caption{text-align:center;font-size:1.15rem;font-weight:1000;color:#047857;margin-bottom:9px}
      .ms-reveal{margin-top:10px;padding:10px 12px;border-radius:16px;background:#ecfdf5;border:1.5px solid #86efac;color:#047857;font-weight:900;text-align:center}
      .ms-formula{margin-top:10px;text-align:center;font-size:1.2rem;font-weight:1000;color:#047857}
      .ms-note{display:inline-flex;align-items:center;justify-content:center;min-width:120px;padding:10px 14px;border-radius:16px;border:2px solid #a7f3d0;background:#f0fdf4;font-weight:1000;color:#047857}
      .ms-money{display:flex;flex-wrap:wrap;gap:9px;justify-content:center;margin-top:10px}
      .ms-banknote{min-width:132px;padding:14px 12px;border-radius:14px;border:2px solid #86efac;background:linear-gradient(135deg,#ecfdf5,#fff);font-weight:1000;color:#065f46;text-align:center;box-shadow:0 3px 8px rgba(5,150,105,.08)}
      .ms-calendar{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;max-width:430px;margin:0 auto}
      .ms-cal-head,.ms-cal-day{min-height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:900}
      .ms-cal-head{background:#ecfdf5;color:#047857}.ms-cal-day{border:1px solid #d1fae5;background:#fff;color:#334155}.ms-cal-day.target{background:#fef3c7;border:2px solid #f59e0b;color:#92400e}
      .ms-scale-readout{font-size:2rem;font-weight:1000;color:#047857;text-align:center;letter-spacing:1px}
    `;
    document.head.appendChild(style);
}
function measureSteps_(ex){
    switch(ex.kind){
        case 'ruler': return ['Tìm vạch 0 trên thước.','Mỗi vạch nhỏ ứng với 1 mm.','Đọc vạch cuối của đoạn được tô.','Nếu cần đổi đơn vị, nhớ 1 cm = 10 mm.'];
        case 'scale': return ['Xác định đây là phép đo khối lượng.','Đọc số trên màn hình cân.','Ghi kết quả kèm đơn vị g.'];
        case 'cylinder': return ['Xác định đây là phép đo dung tích.','Nhìn mặt nước trùng với vạch nào.','Đọc số và ghi kèm đơn vị ml.'];
        case 'thermometer': return ['Nhìn đỉnh cột màu trên nhiệt kế.','Đối chiếu với vạch số bên cạnh.','Ghi kết quả kèm °C.'];
        case 'clock': return ['Đọc kim phút trước.','Mỗi số của kim phút tương ứng 5 phút.','Đọc kim giờ theo vị trí giữa hai số.','Ghép giờ và phút lại.'];
        case 'calendar': return ['Tìm đúng tháng và năm.','Tìm ngày được tô nổi bật.','Nhìn lên tiêu đề cột để biết thứ.'];
        case 'money_sum': return ['Đọc đúng từng mệnh giá.','Cộng từ tờ lớn đến tờ nhỏ.','Ghi tổng tiền với đơn vị đồng.'];
        case 'money_change': return ['Đọc số tiền đã đưa.','Đọc giá món hàng.','Lấy tiền đưa trừ giá món hàng.','Dùng phép cộng ngược để tự kiểm.'];
        default:return ['Con quan sát hình minh hoạ bên trái rồi chọn đáp án đúng.'];
    }
}
function measureRulerVisual_(ex){
    const max=100,x0=30,x1=470,y=112,w=x1-x0;let ticks='';
    for(let i=0;i<=max;i++){
        const x=x0+w*i/max;const major=i%10===0;const mid=i%5===0&&!major;const h=major?34:(mid?24:15);
        ticks+=`<line x1="${x}" y1="${y-h}" x2="${x}" y2="${y}" stroke="${major?'#047857':'#94a3b8'}" stroke-width="${major?2.3:1}"/>`;
        if(major&&i<100)ticks+=`<text x="${x-4}" y="${y+24}" font-size="14" font-weight="900" fill="#047857">${i/10}</text>`;
    }
    const xe=x0+w*ex.mm/max;
    return `<div class="ms-board"><div class="ms-caption">Thước có vạch cm và mm</div><svg viewBox="0 0 500 165" class="w-full h-auto"><rect x="20" y="52" width="460" height="92" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>${ticks}<line x1="${x0}" y1="47" x2="${xe}" y2="47" stroke="#8b5cf6" stroke-width="9" stroke-linecap="round"/><circle cx="${x0}" cy="47" r="7" fill="#7c3aed"/><circle cx="${xe}" cy="47" r="7" fill="#7c3aed"/><text x="${Math.max(38,xe-22)}" y="35" font-size="16" font-weight="900" fill="#7c3aed">?</text><text x="436" y="137" font-size="14" font-weight="900" fill="#64748b">cm</text></svg></div>${measureState_.revealed?`<div class="ms-reveal">Đoạn được đánh dấu dài ${ex.mm} mm.</div>`:''}`;
}
function measureScaleVisual_(ex){
    return `<div class="ms-board"><div class="ms-caption">Cân điện tử</div><svg viewBox="0 0 420 230" class="w-full h-auto"><rect x="85" y="75" width="250" height="120" rx="26" fill="#f8fafc" stroke="#94a3b8" stroke-width="4"/><ellipse cx="210" cy="72" rx="105" ry="28" fill="#d1fae5" stroke="#10b981" stroke-width="4"/><path d="M170 64 Q210 15 250 64 Z" fill="#fde68a" stroke="#f59e0b" stroke-width="4"/><rect x="135" y="115" width="150" height="52" rx="10" fill="#0f172a"/><text x="210" y="151" text-anchor="middle" font-size="28" font-weight="900" fill="#86efac">${ex.value} ${ex.unit}</text></svg></div>`;
}
function measureCylinderVisual_(ex){
    const top=28,bottom=212,h=bottom-top;const y=bottom-(Math.max(0,Math.min(1000,ex.value))/1000)*h;let marks='';
    for(let v=0;v<=1000;v+=100){const yy=bottom-(v/1000)*h;marks+=`<line x1="210" y1="${yy}" x2="238" y2="${yy}" stroke="#64748b" stroke-width="1.5"/>`;if(v%250===0||v===1000)marks+=`<text x="246" y="${yy+5}" font-size="13" font-weight="900" fill="#475569">${v}</text>`;}
    return `<div class="ms-board"><div class="ms-caption">Bình chia vạch</div><svg viewBox="0 0 400 250" class="w-full h-auto"><rect x="130" y="24" width="100" height="195" rx="15" fill="#f8fafc" stroke="#60a5fa" stroke-width="4"/><rect x="135" y="${y}" width="90" height="${bottom-y}" fill="#bfdbfe" opacity=".9"/>${marks}<text x="154" y="238" font-size="15" font-weight="900" fill="#2563eb">ml</text></svg></div>${measureState_.revealed?`<div class="ms-reveal">Mực nước ở vạch ${ex.value} ml.</div>`:''}`;
}
function measureThermometerVisual_(ex){
    const min=0,max=50,top=28,bottom=210,h=bottom-top;const v=Math.max(min,Math.min(max,ex.value));const y=bottom-((v-min)/(max-min))*h;let marks='';
    for(let t=0;t<=50;t+=5){const yy=bottom-(t/50)*h;marks+=`<line x1="205" y1="${yy}" x2="226" y2="${yy}" stroke="#64748b" stroke-width="1.5"/><text x="234" y="${yy+5}" font-size="13" font-weight="900" fill="#475569">${t}</text>`;}
    return `<div class="ms-board"><div class="ms-caption">Nhiệt kế</div><svg viewBox="0 0 380 255" class="w-full h-auto"><rect x="165" y="22" width="40" height="195" rx="20" fill="#fff" stroke="#cbd5e1" stroke-width="4"/><rect x="177" y="${y}" width="16" height="${bottom-y+8}" rx="8" fill="#ef4444"/><circle cx="185" cy="217" r="31" fill="#ef4444" stroke="#dc2626" stroke-width="4"/>${marks}<text x="276" y="42" font-size="16" font-weight="900" fill="#475569">°C</text></svg></div>${measureState_.revealed?`<div class="ms-reveal">Nhiệt kế chỉ ${ex.value}°C.</div>`:''}`;
}
function measureClockVisual_(ex){
    const cx=180,cy=120,r=88;let nums='';for(let n=1;n<=12;n++){const a=(n*30-90)*Math.PI/180;nums+=`<text x="${cx+70*Math.cos(a)}" y="${cy+6+70*Math.sin(a)}" text-anchor="middle" font-size="17" font-weight="900" fill="#334155">${n}</text>`;}
    const minA=(ex.minute*6-90)*Math.PI/180;const hourA=((ex.hour%12)*30+ex.minute*.5-90)*Math.PI/180;
    const mx=cx+68*Math.cos(minA),my=cy+68*Math.sin(minA),hx=cx+48*Math.cos(hourA),hy=cy+48*Math.sin(hourA);
    return `<div class="ms-board"><div class="ms-caption">Đồng hồ kim</div><svg viewBox="0 0 360 240" class="w-full h-auto"><circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="#10b981" stroke-width="5"/>${nums}<line x1="${cx}" y1="${cy}" x2="${hx}" y2="${hy}" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><line x1="${cx}" y1="${cy}" x2="${mx}" y2="${my}" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="7" fill="#7c3aed"/></svg></div>${measureState_.revealed?`<div class="ms-reveal">${ex.hour} giờ ${String(ex.minute).padStart(2,'0')} phút.</div>`:''}`;
}
function measureCalendarVisual_(ex){
    const heads=['T2','T3','T4','T5','T6','T7','CN'];const first=new Date(ex.year,ex.month-1,1);const jsDay=first.getDay();const offset=(jsDay+6)%7;const days=new Date(ex.year,ex.month,0).getDate();let cells=heads.map(h=>`<div class="ms-cal-head">${h}</div>`).join('');
    for(let i=0;i<offset;i++)cells+='<div class="ms-cal-day" style="visibility:hidden"></div>';
    for(let d=1;d<=days;d++)cells+=`<div class="ms-cal-day ${d===ex.target?'target':''}">${d}</div>`;
    return `<div class="ms-board"><div class="ms-caption">Tháng ${ex.month} / ${ex.year}</div><div class="ms-calendar">${cells}</div></div>${measureState_.revealed?`<div class="ms-reveal">Ngày ${ex.target}/${ex.month}/${ex.year} nằm ở cột Thứ Năm.</div>`:''}`;
}
function measureMoneyVisual_(ex){
    if(ex.kind==='money_change')return `<div class="ms-board"><div class="ms-caption">Mua hàng</div><div class="flex flex-col items-center gap-3"><div class="ms-note">💵 Đưa: ${formatMathNumberValue_(ex.paid)}đ</div><div class="text-3xl">🛒</div><div class="ms-note">🏷️ Giá: ${formatMathNumberValue_(ex.price)}đ</div></div></div>${measureState_.revealed?`<div class="ms-reveal">${formatMathNumberValue_(ex.paid)} − ${formatMathNumberValue_(ex.price)} = ${formatMathNumberValue_(ex.paid-ex.price)}đ.</div>`:''}`;
    return `<div class="ms-board"><div class="ms-caption">Các mệnh giá</div><div class="ms-money">${ex.notes.map(v=>`<div class="ms-banknote">${formatMathNumberValue_(v)}đ</div>`).join('')}</div></div>${measureState_.revealed?`<div class="ms-reveal">Tổng tiền: ${formatMathNumberValue_(ex.notes.reduce((a,b)=>a+b,0))}đ.</div>`:''}`;
}
function measureVisual_(ex){
    if(ex.kind==='ruler')return measureRulerVisual_(ex);
    if(ex.kind==='scale')return measureScaleVisual_(ex);
    if(ex.kind==='cylinder')return measureCylinderVisual_(ex);
    if(ex.kind==='thermometer')return measureThermometerVisual_(ex);
    if(ex.kind==='clock')return measureClockVisual_(ex);
    if(ex.kind==='calendar')return measureCalendarVisual_(ex);
    if(ex.kind==='money_sum'||ex.kind==='money_change')return measureMoneyVisual_(ex);
    return '<div class="ms-board">Hình minh hoạ đang được cập nhật.</div>';
}
function showMeasureHub_(topicObj){
    ensureMeasureStyles_();setAppShellRootMode_(false);measurePractice_.active=false;
    const topicName=(topicObj&&topicObj.topicName)||'5. Đơn vị đo và thời gian';const questions=(topicObj&&topicObj.questions)||pendingTopicQuiz?.questions||[];
    pendingTopicQuiz={topicNum:5,topicName,questions};
    const cards=MEASURE_LESSONS.map((l,i)=>`<button onclick="openMeasureLesson_(${i})" class="as-hub-card text-left"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-lg shrink-0">${l.icon}</div><div class="min-w-0 flex-1 flex items-center justify-between gap-2"><div class="text-base md:text-lg font-black text-emerald-700 leading-tight">${l.code}. ${escapeHtml(l.title)}</div><span class="as-badge shrink-0" style="color:#047857;border-color:#a7f3d0;background:#ecfdf5">Học để hiểu</span></div></div></button>`).join('');
    const c=document.getElementById('view-dashboard-grid');c.className='w-full';
    c.innerHTML=`<section class="as-shell space-y-4"><div class="as-hero" style="border-color:#a7f3d0;background:linear-gradient(135deg,#ecfdf5,#f0fdfa,#fff7fb)"><div class="as-kicker" style="color:#047857;border-color:#a7f3d0">⏰ Chủ đề 5 • học để hiểu</div><h2 class="as-title mt-2" style="color:#047857">Đơn vị đo, thời gian và tiền</h2><p class="as-goal mt-2">Nhìn dụng cụ thật → đọc số đo → dùng đúng đơn vị.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-3">${cards}<button onclick="startMeasurePractice_()" class="as-hub-card text-left border-emerald-300 bg-emerald-50"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-lg shrink-0">✏️</div><div class="min-w-0 flex-1 flex items-center justify-between gap-2"><div class="text-base md:text-lg font-black text-emerald-700 leading-tight">5.6. Thực hành đo lường và thời gian</div><span class="as-badge shrink-0" style="background:#fff;border-color:#bbf7d0;color:#047857">15 câu / lượt</span></div></div></button></div></section>`;
    updateNavTabs('5. Đơn vị đo và thời gian','⏰',null);switchAppView('view-dashboard-grid');
}
function openMeasureLesson_(index){measurePractice_.active=false;measureState_.lessonIndex=index;measureState_.exampleIndex=0;measureResetAttempt_();renderMeasureLesson_();}
function measureAnotherExample_(){if(measurePractice_.active)return;const l=measureCurrentLesson_();measureState_.exampleIndex=(measureState_.exampleIndex+1)%l.examples.length;measureResetAttempt_();renderMeasureLesson_();}
function measurePrev_(){if(measurePractice_.active)return showMeasureHub_(pendingTopicQuiz);if(measureState_.lessonIndex>0){measureState_.lessonIndex--;measureState_.exampleIndex=0;measureResetAttempt_();renderMeasureLesson_();}else showMeasureHub_(pendingTopicQuiz);}
function measureNext_(){
    if(measurePractice_.active){
        if(!measureState_.revealed){measureState_.feedback='🌱 Con hãy chọn đúng đáp án trước khi sang câu tiếp theo nhé!';return renderMeasureLesson_();}
        if(measurePractice_.index<measurePractice_.list.length-1){measurePractice_.index++;measureResetAttempt_();return renderMeasureLesson_();}
        const total=measurePractice_.list.length,correct=measurePractice_.correct;showAppNotice(`🎉 Bé đã hoàn thành ${total} câu thực hành. Số câu đúng: ${correct}/${total}.`);return showMeasureHub_(pendingTopicQuiz);
    }
    if(measureState_.lessonIndex<MEASURE_LESSONS.length-1){measureState_.lessonIndex++;measureState_.exampleIndex=0;measureResetAttempt_();renderMeasureLesson_();}else showMeasureHub_(pendingTopicQuiz);
}
function measureShowHint_(){const steps=measureSteps_(measureCurrentExample_());measureState_.hintStep=Math.min(steps.length,measureState_.hintStep+1);renderMeasureLesson_();}
function measureChoose_(choice){
    const ex=measureCurrentExample_();measureState_.selectedChoice=String(choice);
    if(String(choice)===String(ex.answer)){
        measureState_.revealed=true;measureState_.hintStep=measureSteps_(ex).length;if(measurePractice_.active)measurePractice_.correct++;
        measureState_.feedback=`✅ Chính xác! ${ex.note||'Con nhìn lại hình minh hoạ bên trái để hiểu cách đọc nhé.'}`;
    }else measureState_.feedback=`🌱 Chưa đúng. ${ex.wrong||'Con mở gợi ý từng bước rồi thử lại nhé.'}`;
    renderMeasureLesson_();
}
function renderMeasureLesson_(){
    ensureMeasureStyles_();const l=measureCurrentLesson_(),ex=measureCurrentExample_(),steps=measureSteps_(ex),visible=measureState_.revealed?steps:steps.slice(0,measureState_.hintStep);
    const choices=ex.choices.map(ch=>{const selected=String(measureState_.selectedChoice)===String(ch),right=String(ch)===String(ex.answer);const cls=measureState_.revealed&&right?' is-right':(!measureState_.revealed&&selected&&!right?' is-wrong':'');return `<button class="as-choice${cls}" ${measureState_.revealed?'disabled':''} onclick="measureChoose_('${String(ch).replace(/'/g,"\\'")}')">${escapeHtml(String(ch))}</button>`}).join('');
    const stepHtml=visible.length?`<div class="as-steps"><div class="font-black text-emerald-700 mb-1">🧭 Cách làm từng bước</div>${visible.map((s,i)=>`<div class="md-step-note"><b>Bước ${i+1}</b><span>${escapeHtml(s)}</span></div>`).join('')}</div>`:'';
    const practice=measurePractice_.active;const code=practice?'5.6':l.code;const title=practice?'Thực hành đo lường và thời gian':l.title;const goal=practice?`Câu ${measurePractice_.index+1}/${measurePractice_.list.length} • Quan sát hình bên trái rồi chọn đáp án.`:l.goal;
    const c=document.getElementById('view-dashboard-grid');c.className='w-full';
    c.innerHTML=`<section class="as-shell space-y-4"><div class="as-hero" style="border-color:#a7f3d0;background:linear-gradient(135deg,#ecfdf5,#f0fdfa,#fff7fb)"><div class="flex items-center justify-between gap-3 flex-wrap"><div><div class="as-kicker" style="color:#047857;border-color:#a7f3d0">${code} • ${practice?'Thực hành':'Học để hiểu'}</div><h2 class="as-title mt-2" style="color:#047857">${escapeHtml(title)}</h2><p class="as-goal mt-2">${escapeHtml(goal)}</p></div><button onclick="speakVietnamese('${String((l.story||'')+' '+(ex.question||'')).replace(/'/g,"\\'")}',.94)" class="as-action">🔊 Nghe cô giảng</button></div></div><div class="md-lesson-grid"><article class="as-card"><div class="ms-visual"><div class="as-problem-title" style="color:#047857">Hình minh hoạ</div>${measureVisual_(ex)}<div class="as-mini">${measureState_.revealed?'Đáp án đã hiện vì con chọn đúng.':'Con đọc dụng cụ/hình bên trái rồi mới chọn đáp án.'}</div>${stepHtml}</div><div class="mt-3 flex flex-wrap justify-between gap-2"><button onclick="showMeasureHub_(pendingTopicQuiz)" class="as-action">← Mục 5</button>${practice?'':`<button onclick="measureAnotherExample_()" class="as-action">🔄 Tình huống khác</button>`}</div></article><aside class="as-card"><div class="as-story">🐝 ${escapeHtml(practice?'Quan sát thật kĩ hình minh hoạ trước khi tính hoặc đổi đơn vị.':l.story)}</div><div class="mt-4 as-question">${escapeHtml(ex.question)}</div><div class="as-choice-grid">${choices}</div><div class="mt-3 flex flex-wrap gap-2"><button onclick="measureShowHint_()" class="as-action">🔎 Gợi ý từng bước</button>${measureState_.hintStep?`<span class="as-badge" style="color:#047857;border-color:#a7f3d0">Đã mở ${measureState_.hintStep}/${steps.length} bước</span>`:''}</div><div class="as-feedback mt-4">${escapeHtml(measureState_.feedback||l.remember||'Con quan sát hình bên trái rồi chọn đáp án đúng nhé!')}</div><div class="mt-4 flex justify-between gap-2"><button onclick="measurePrev_()" class="as-action">← ${practice?'Mục 5':'Bài trước'}</button><button onclick="measureNext_()" class="as-action as-primary">${practice?(measurePractice_.index===measurePractice_.list.length-1?'Hoàn thành':'Câu tiếp theo →'):'Bài tiếp theo →'}</button></div></aside></div></section>`;
    updateNavTabs('5. Đơn vị đo và thời gian','⏰',`${code} ${title}`);switchAppView('view-dashboard-grid');
}
function startMeasurePractice_(){
    const list=[];MEASURE_LESSONS.forEach((l,lessonIndex)=>l.examples.forEach(ex=>list.push({lessonIndex,ex})));
    measurePractice_={active:true,list:shuffleArray(list),index:0,correct:0};measureResetAttempt_();renderMeasureLesson_();
}

// ==========================================
// CHỦ ĐỀ CHUNG: HUB CÁC MỤC CON
// ==========================================
function openTopic(topicNum, topicName, icon) {
    setAppShellRootMode_(false);
    inMiniGameFlow = false;
    if(PREMIUM_TOPIC_IDS.has(Number(topicNum)) && !requirePremium(topicName)) return;
    stopSpeaking(); activeTopicId=topicNum; activeExamContext=null; activeRoadmapContext=null; updateNavTabs(topicName,icon||'🐝',null);
    if (Number(topicNum) === 12) return openMathLab();
    showLoadingOverlay(`Đang tải chủ đề "${topicName}"...`);
    fetchAllTopicsData().then(topics=>{hideLoadingOverlay();const topicObj=topics.find(t=>Number(t.topic_id)===Number(topicNum));if(!topicObj?.questions?.length)throw new Error('Chủ đề không có câu hỏi nào');if(Number(topicNum)===1)return showNumberSenseHub_(topicObj);if(Number(topicNum)===2)return showAddSubHub_(topicObj);if(Number(topicNum)===3)return showMulDivHub_(topicObj);if(Number(topicNum)===4)return showGeometryHub_(topicObj);if(Number(topicNum)===5)return showMeasureHub_(topicObj);showLectureAndSubtopics(topicNum,topicName,topicObj);}).catch(err=>{hideLoadingOverlay();activeTopicId=null;updateNavTabs(null,null,null);showAppNotice(`Không thể tải chủ đề: ${err.message}`);});
}

function setSubtopicGridColumns(count) {
    const el = document.getElementById('lecture-subtopics-list');
    if (!el) return;
    if (count > 6) {
        el.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl';
    } else {
        el.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-2xl';
    }
}

function showLectureAndSubtopics(topicNum, topicName, topicObj) {
    pendingTopicQuiz = { topicNum, topicName, questions: topicObj.questions };
    
    document.getElementById('lecture-title').textContent = topicObj.lecture_title || topicName;
    const lectureContentEl = document.getElementById('lecture-content');
    if (lectureContentEl) {
        lectureContentEl.textContent = '';
        const introBox = lectureContentEl.parentElement;
        if (introBox) introBox.classList.add('hidden');
    }
    const speakLectureBtn = document.querySelector('#view-lecture button[onclick="speakLecture()"]');
    if (speakLectureBtn) speakLectureBtn.classList.add('hidden');
    document.getElementById('view-lecture').dataset.audioText = '';

    const groups = [], groupMap = {}, groupLabels = {};
    topicObj.questions.forEach(q => {
        const k = (q.sub_topic || 'Câu hỏi chung').trim();
        if (!groupMap[k]) { groupMap[k] = []; groups.push(k); groupLabels[k] = q.sub_topic_label || k; }
        groupMap[k].push(q);
    });
    pendingTopicQuiz.groups = groups; 
    pendingTopicQuiz.groupMap = groupMap;
    pendingTopicQuiz.groupLabels = groupLabels;

    let subHtml = '';
    groups.forEach((subName, idx) => {
        const style = SUBTOPIC_PALETTES[idx % SUBTOPIC_PALETTES.length];
        const displayTitle = beautifySubtopicName(groupLabels[subName]);
        const count = groupMap[subName].length;

        subHtml += `
            <button onclick="selectSubtopic(${idx})" class="px-3 py-2.5 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn">
                <span class="text-sm md:text-base leading-snug"><strong class="${style.num} mr-1.5">${idx + 1}.</strong> ${escapeHtml(displayTitle)}</span>
                <span class="text-xs font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${count} câu</span>
            </button>`;
    });
    setSubtopicGridColumns(groups.length);
    document.getElementById('lecture-subtopics-list').innerHTML = subHtml;

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', null);
    switchAppView('view-lecture');
}

function speakLecture() {
    speakVietnamese(document.getElementById('view-lecture').dataset.audioText || '', 0.96);
}

function selectSubtopic(idx) {
    setAppShellRootMode_(false);
    stopSpeaking();
    if (!pendingTopicQuiz) return;
    const { topicNum, topicName, questions, groups, groupMap, groupLabels } = pendingTopicQuiz;
    const subLabel = idx !== null ? groups[idx] : null;
    const pool = idx !== null ? groupMap[subLabel] : questions;
    const displayLabel = subLabel ? beautifySubtopicName(groupLabels[subLabel]) : null;
    const finalTitle = displayLabel ? `${topicName} - ${displayLabel}` : topicName;

    practiceCycleRawPool = [...pool];
    const firstCycleQuestions = shuffleArray([...pool]);

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', displayLabel || 'Tất cả các mục');
    startTopicQuiz(topicNum, finalTitle, firstCycleQuestions, subLabel);
}

// ==========================================
// TIẾN TRÌNH TUẦN: BẢN ĐỒ SVG
// ==========================================
function handleNextExamFromReport() {
    stopSpeaking();
    if (activeRoadmapContext) {
        activeRoadmapContext = null;
        openRoadmap();
    } else if (activeExamContext) {
        activeExamContext = null;
        openExamHub();
    } else {
        goHome();
    }
}

function openRoadmap() {
    inMiniGameFlow = false;
    stopSpeaking();
    updateNavTabs("Bài tập", "✏️", null);
    renderRoadmapSVG();
    switchAppView('view-roadmap');
}

function wrapCaptionLines(text, maxLen = 24, maxLines = 3) {
    const words = String(text || '').split(' ');
    const lines = [''];
    for (const w of words) {
        const cur = lines[lines.length - 1];
        const candidate = (cur + ' ' + w).trim();
        if (candidate.length <= maxLen) {
            lines[lines.length - 1] = candidate;
        } else if (lines.length < maxLines) {
            lines.push(w);
        } else {
            lines[lines.length - 1] = candidate;
        }
    }
    while (lines.length < maxLines) lines.push('');
    if (lines[maxLines - 1].length > maxLen) {
        lines[maxLines - 1] = lines[maxLines - 1].slice(0, maxLen - 1) + '…';
    }
    return lines.slice(0, maxLines);
}

function renderRoadmapSVG() {
    const container = document.getElementById('roadmap-svg-container');
    if (!container) return;
    const tuanHienTai = Number(currentUser?.tuanHienTai) || 1;

    let nodesHtml = '';
    for (let w = 1; w <= TOTAL_ROADMAP_WEEKS; w++) {
        const item = roadmapConfig[w];
        const coord = getRoadmapCoord(w);
        const isDone = w < tuanHienTai;
        const isCurrent = w === tuanHienTai;
        const isLocked = w > tuanHienTai;

        let nodeColor = isDone ? "#10b981" : (isCurrent ? "#eab308" : "#cbd5e1");
        let strokeColor = isDone ? "#34d399" : (isCurrent ? "#f97316" : "#94a3b8");
        let badgeHtml = '';

        if (isDone) {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 40}" text-anchor="middle" font-size="16" fill="#f59e0b">⭐⭐⭐</text>`;
        } else if (isCurrent) {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 40}" text-anchor="middle" font-size="12" font-weight="900" fill="#eab308">Đang học</text>`;
        } else {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 38}" text-anchor="middle" font-size="14" fill="#94a3b8">🔒 Khóa</text>`;
        }

        const cursorCls = isLocked ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:scale-105 transition-transform";
        const animCls = isCurrent ? "node-current" : "";

        nodesHtml += `
            <g class="${cursorCls} ${animCls}" onclick="selectRoadmapWeek(${w})" id="svg-node-week-${w}">
                <circle cx="${coord.x}" cy="${coord.y}" r="40" fill="#ffffff" stroke="${strokeColor}" stroke-width="4" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"/>
                <circle cx="${coord.x}" cy="${coord.y}" r="34" fill="${nodeColor}" opacity="${isLocked ? '0.25' : '0.15'}"/>
                <text x="${coord.x}" y="${coord.y - 4}" text-anchor="middle" font-size="24">${item.icon || '🔢'}</text>
                <text x="${coord.x}" y="${coord.y + 18}" text-anchor="middle" font-size="13" font-weight="800" fill="${isLocked ? '#64748b' : '#1e293b'}">Tuần ${w}</text>
                ${badgeHtml}
            </g>
        `;
    }

    const pathD = buildRoadmapPathD(TOTAL_ROADMAP_WEEKS);
    const svgHtml = `
        <svg viewBox="0 0 900 490" class="w-full max-h-[74vh] select-none" xmlns="http://www.w3.org/2000/svg">
            <path d="${pathD}" fill="none" stroke="#fef08a" stroke-width="12" stroke-dasharray="14,14" stroke-linecap="round"/>
            <path d="${pathD}" fill="none" stroke="#facc15" stroke-width="4" stroke-dasharray="14,14" stroke-linecap="round"/>
            ${nodesHtml}
        </svg>
    `;
    container.innerHTML = svgHtml;
}

async function selectRoadmapWeek(weekNum) {
    stopSpeaking();
    const config = roadmapConfig[weekNum];
    if (!config) return;
    
    const tuanHienTai = Number(currentUser?.tuanHienTai) || 1;
    if (weekNum > tuanHienTai) {
        return showAppNotice(`Tuần ${weekNum} đang bị khóa. Bé hãy hoàn thành Tuần ${tuanHienTai} đạt từ 80% trở lên để mở khóa nhé!`);
    }

    if (config.isExam) return openExamHub();

    activeRoadmapContext = { week: weekNum, topicId: config.subIds[0] || '1.1', chuDe: config.name };
    pendingTopicQuiz = null; activeExamContext = null;
    const topicLabel = config.name.replace(/^Tuần\s*\d+:\s*/i, '');
    updateNavTabs("Tiến trình tuần", "📅", `Tuần ${weekNum}`, topicLabel);

    showLoadingOverlay(`Đang bốc 30 câu hỏi Tuần ${weekNum} (tỷ lệ 3:4:3)...`);
    try {
        await fetchAllTopicsData();
        hideLoadingOverlay();

        const weekQuestions = getQuestionsForWeek343(weekNum);
        if (!weekQuestions.length) return showAppNotice('Tuần này đang chuẩn bị thêm câu hỏi, bé quay lại sau nhé!');

        startTopicQuiz(weekNum, config.name, weekQuestions, null);
    } catch (err) {
        hideLoadingOverlay();
        showAppNotice(`Lỗi tải dữ liệu tuần: ${err.message}`);
    }
}

// ==========================================
// LOGIC CHẤM ĐIỂM & ĐIỀU KHIỂN CÂU HỎI
// ==========================================
function startTopicQuiz(topicNum, topicName, questions, subLabel) {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    activeQuestionsList = shuffleAllQuestionOptions(questions);
    currentQIndex = 0; 
    score = 0;
    userAnswers = {};
    wrongAttemptsByQ = {};
    quizWrongAnswers = []; 
    quizAnsweredLog = []; 
    quizStartTime = Date.now();

    const topBar = document.getElementById('quiz-top-bar');
    const cardHeader = document.getElementById('quiz-card-header');
    const navPractice = document.getElementById('nav-group-practice');
    const navExam = document.getElementById('nav-group-exam');

    const submitBtn = document.getElementById('btn-submit-quiz');
    if (submitBtn) {
        if (activeRoadmapContext) submitBtn.classList.add('hidden');
        else submitBtn.classList.remove('hidden');
    }

    const roadmapHistoryBtn = document.getElementById('btn-roadmap-history');
    if (roadmapHistoryBtn) {
        if (activeRoadmapContext) { roadmapHistoryBtn.classList.remove('hidden'); roadmapHistoryBtn.classList.add('flex'); }
        else { roadmapHistoryBtn.classList.add('hidden'); roadmapHistoryBtn.classList.remove('flex'); }
    }

    if (activeRoadmapContext || activeExamContext) {
        if (topBar) {
            if (activeExamContext) topBar.classList.remove('hidden');
            else topBar.classList.add('hidden');
        }
        const timerBox = document.getElementById('quiz-timer-container');
        if (activeExamContext) {
            if (timerBox) timerBox.classList.remove('hidden');
            startExamCountdown();
        } else {
            if (timerBox) timerBox.classList.add('hidden');
        }
        if (cardHeader) { cardHeader.classList.remove('hidden'); cardHeader.classList.add('flex'); }
        if (navPractice) navPractice.classList.add('hidden');
        if (navExam) { navExam.classList.remove('hidden'); navExam.classList.add('flex'); }
        initQuizPallet();
    } else {
        if (topBar) topBar.classList.add('hidden');
        if (cardHeader) { cardHeader.classList.add('hidden'); cardHeader.classList.remove('flex'); }
        if (navPractice) { navPractice.classList.remove('hidden'); navPractice.classList.add('flex'); }
        if (navExam) { navExam.classList.add('hidden'); navExam.classList.remove('flex'); }
    }

    switchAppView('view-quiz');
    loadQuestion();
}

function loadQuestion() {
    stopSpeaking();
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;

    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;

    if (isEvaluationMode) {
        document.getElementById('q-badge-index').textContent = `CÂU ${currentQIndex + 1} / ${activeQuestionsList.length}`;
        const isRoadmap = !!activeRoadmapContext;
        const skillName = isRoadmap
            ? (beautifySubtopicName(q.sub_topic_label) || 'Kiến thức tổng hợp')
            : (SKILL_TAXONOMY[q.skill_tag]?.name || beautifySubtopicName(q.sub_topic_label) || 'Kiến thức tổng hợp');
        document.getElementById('q-skill-text').textContent = skillName;

        const scoreBadge = document.getElementById('q-badge-score');
        if (scoreBadge) {
            if (isRoadmap) {
                scoreBadge.classList.add('hidden');
            } else {
                scoreBadge.classList.remove('hidden');
                scoreBadge.textContent = `(${q.diem ?? 0.5} điểm)`;
            }
        }
    } else {
        const stepEl = document.getElementById('practice-step-text');
        if (stepEl) stepEl.textContent = `Câu ${currentQIndex + 1} / ${activeQuestionsList.length}`;
    }

    let mediaHtml = '';
    if (q.image_url && !activeExamContext) {
        mediaHtml = `<img src="${q.image_url}" alt="minh họa" class="w-14 h-14 md:w-16 md:h-16 object-contain mb-1 floating" onerror="this.remove()">`;
    }

    const pText = q.reading_passage;
    const pTitle = q.reading_title;
    const passageLines = pText ? pText.split('\n').map(l => l.trim()).filter(Boolean) : [];
    const avgLineLen = passageLines.length ? passageLines.reduce((a, l) => a + l.length, 0) / passageLines.length : 0;
    const isPoemLike = passageLines.length >= 4 && avgLineLen > 0 && avgLineLen < 35;
    const useTwoColumns = isPoemLike;
    const passageHtml = pText ? `
        <div class="w-full max-w-3xl bg-pink-50/70 border-2 border-pink-200 rounded-2xl p-3 mb-1.5 text-left shadow-xs">
            ${pTitle ? `<p class="font-black text-pink-700 text-sm md:text-base mb-1">${escapeHtml(pTitle)}</p>` : ''}
            <p class="text-gray-800 text-sm md:text-base font-bold whitespace-pre-line leading-relaxed ${useTwoColumns ? 'md:columns-2 md:gap-6' : ''}">${escapeHtml(pText)}</p>
        </div>` : '';

    const practiceSpeakerBtnHtml = !isEvaluationMode ? `
        <div class="flex items-center justify-center mt-1 mb-1">
            <button onclick="speakCurrentQuestion()" class="px-4 py-1.5 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 rounded-2xl text-xs md:text-sm font-extrabold flex items-center space-x-1.5 pastel-btn shadow-xs">
                <i class="fa-solid fa-volume-high text-pink-600"></i>
                <span>Nghe câu hỏi</span>
            </button>
        </div>
    ` : '';

    const isLetterListen = q.render_style === 'letter_listen';

    let html;
    if (isLetterListen) {
        html = `
            ${mediaHtml}
            <div class="w-full max-w-3xl border-2 border-dashed border-pink-200 bg-pink-50/40 rounded-3xl px-4 py-4 md:py-5 flex flex-col items-center text-center mb-3">
                <div class="text-3xl md:text-4xl mb-1.5 space-x-2">
                    <span>🎧</span><span>👂</span><span>🔢</span>
                </div>
                <p class="text-sm md:text-base lg:text-lg font-black text-purple-600 leading-snug">${escapeHtml(q.question_text)}</p>
                ${practiceSpeakerBtnHtml}
            </div>

            <div class="w-full max-w-3xl flex flex-wrap items-center justify-center gap-3 mt-1">
        `;
        q.options.forEach(opt => {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn min-w-[140px] px-6 py-3 bg-white hover:bg-emerald-50 border-2 border-emerald-400 rounded-full font-black text-emerald-700 text-base md:text-lg transition-all pastel-btn shadow-xs">
                    ${escapeHtml(opt)}
                </button>`;
        });
        html += `</div>`;
        if (q.mascot_text) {
            html += `
                <div class="mt-4 inline-flex items-center space-x-1.5 bg-pink-50 border border-pink-200 rounded-full px-3.5 py-1.5">
                    <span>🐝</span>
                    <span class="text-xs md:text-sm font-extrabold text-purple-600">${escapeHtml(q.mascot_text)}</span>
                </div>`;
        }
    } else {
        html = `
        ${mediaHtml}
        ${passageHtml}
        <div class="flex flex-col items-center justify-center max-w-3xl text-center px-2 mb-0.5">
            <h3 class="text-sm md:text-base lg:text-lg font-black text-slate-900 leading-snug">
                ${escapeHtml(q.question_text)}
            </h3>
            ${practiceSpeakerBtnHtml}
        </div>
        
        <div class="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-1">
    `;

    q.options.forEach((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        const letter = String.fromCharCode(65 + idx);

        if (activeExamContext) {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs">
                    <div class="flex items-center space-x-2.5">
                        <span class="opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0">${letter}</span>
                        <span class="opt-text">${escapeHtml(formattedOpt)}</span>
                    </div>
                    <span class="option-icon text-pink-500 text-base md:text-lg"></span>
                </button>`;
        } else {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-3 md:p-3.5 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs pastel-btn">
                    <span><strong class="text-pink-600 mr-2 text-base md:text-lg">${letter}.</strong> ${escapeHtml(formattedOpt)}</span>
                    <span class="option-icon text-pink-500 text-base md:text-lg"></span>
                </button>`;
        }
    });
        html += `</div>`;
    }

    document.getElementById('question-box').innerHTML = html;

    restoreQuestionState(q);
    updateNavButtons();
    updateQuizPalletUI();

    if (autoSpeechEnabled) speakCurrentQuestion();
}

function restoreQuestionState(q) {
    const isExam = !!activeExamContext;
    const completedAnswer = userAnswers[currentQIndex];
    const wrongAttempts = wrongAttemptsByQ[currentQIndex] || [];

    if (isExam) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (completedAnswer !== undefined && bOpt === completedAnswer) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-pink-50/30 border-2 border-pink-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-pink-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });
        return;
    }

    if (!!activeRoadmapContext) {
        if (completedAnswer === undefined) return;
        const isCorrect = completedAnswer === q.answer;
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (!isCorrect && bOpt === completedAnswer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });
        return;
    }

    if (wrongAttempts.length > 0) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (wrongAttempts.includes(bOpt)) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });
    }

    if (completedAnswer !== undefined) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === completedAnswer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
                b.disabled = true;
            }
        });
    }
}

function updateNavButtons() {
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;
    const btnPrev = isEvaluationMode ? document.getElementById('btn-prev-q-exam') : document.getElementById('btn-prev-q-prac');
    const nextText = isEvaluationMode ? document.getElementById('btn-next-text-exam') : document.getElementById('btn-next-text-prac');
    const nextIcon = isEvaluationMode ? document.getElementById('btn-next-icon-exam') : document.getElementById('btn-next-icon-prac');

    if (!btnPrev) return;

    if (currentQIndex === 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add('opacity-40', 'cursor-not-allowed');
    } else {
        btnPrev.disabled = false;
        btnPrev.classList.remove('opacity-40', 'cursor-not-allowed');
    }

    if (currentQIndex === activeQuestionsList.length - 1) {
        if (isEvaluationMode) {
            nextText.textContent = "Hoàn thành";
            nextIcon.className = "fa-solid fa-trophy ml-1.5";
        } else {
            nextText.textContent = "Vòng tiếp theo";
            nextIcon.className = "fa-solid fa-rotate-right ml-1.5";
        }
    } else {
        nextText.textContent = "Câu tiếp theo";
        nextIcon.className = "fa-solid fa-chevron-right ml-1.5";
    }
}

function checkAnswer(selectedOpt) {
    const q = activeQuestionsList[currentQIndex];
    const isExam = !!activeExamContext;
    const isRoadmap = !!activeRoadmapContext;

    // RIÊNG ĐỀ THI: YÊN TĨNH TUYỆT ĐỐI, SÁNG VIỀN HỒNG, KHÔNG PHÁT ÂM THANH
    if (isExam) {
        userAnswers[currentQIndex] = selectedOpt;

        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (bOpt === selectedOpt) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-pink-50/30 border-2 border-pink-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-pink-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });

        updateQuizPalletUI();
        return;
    }

    // RIÊNG TIẾN TRÌNH TUẦN: CHỈ ĐƯỢC CHỌN 1 LẦN DUY NHẤT ĐỂ GHI NHẬN ĐÚNG/SAI CHÍNH XÁC
    if (isRoadmap) {
        if (userAnswers[currentQIndex] !== undefined) return;

        const isCorrect = selectedOpt === q.answer;
        userAnswers[currentQIndex] = selectedOpt;

        if (isCorrect) {
            score += (q.diem ?? 0.5);
            starGreenCount++;
            document.getElementById('star-green-count').textContent = starGreenCount;
        } else {
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
        }

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (bOpt === selectedOpt) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });

        if (isCorrect) {
            playAudio('correct');
            confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
            setTimeout(() => speakVietnamese(`${q.answer}`), 180);
        } else {
            playAudio('wrong');
        }

        updateQuizPalletUI();
        return;
    }

    // CHẾ ĐỘ LUYỆN TẬP TỰ DO
    const isCorrect = selectedOpt === q.answer;
    if (userAnswers[currentQIndex] !== undefined) return;

    if (isCorrect) {
        userAnswers[currentQIndex] = selectedOpt;
        score += (q.diem ?? 0.5);
        starGreenCount++;
        document.getElementById('star-green-count').textContent = starGreenCount;

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            if (b.getAttribute('data-opt') === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            }
        });

        playAudio('correct');
        confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
        setTimeout(() => speakVietnamese(`${q.answer}`), 180);
    } else {
        if (!wrongAttemptsByQ[currentQIndex]) wrongAttemptsByQ[currentQIndex] = [];
        if (!wrongAttemptsByQ[currentQIndex].includes(selectedOpt)) {
            wrongAttemptsByQ[currentQIndex].push(selectedOpt);
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
        }

        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.getAttribute('data-opt') === selectedOpt) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });

        playAudio('wrong');
    }

    updateQuizPalletUI();
}

function prevQuestion() {
    stopSpeaking();
    if (currentQIndex > 0) {
        currentQIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    stopSpeaking();
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;

    if (!isEvaluationMode && userAnswers[currentQIndex] === undefined) {
        showAppNotice('Bé hãy tìm đáp án đúng để hoàn thành câu này nhé!', { okText:'Con làm tiếp' });
        return;
    }

    if (currentQIndex < activeQuestionsList.length - 1) {
        currentQIndex++;
        loadQuestion();
    } else {
        if (isEvaluationMode) {
            showResultScreen();
        } else {
            confetti({ particleCount: 75, spread: 75, origin: { y: 0.6 } });
            playAudio('win');
            showAppNotice(`🎉 Chúc mừng bé đã hoàn thành trọn vẹn 1 vòng luyện tập (${activeQuestionsList.length} câu)!\nBây giờ Cô Ong Vàng sẽ xáo trộn để con bước vào vòng luyện tập tiếp theo nhé!`, {
                title: 'Hoàn thành một vòng!', icon: '🌟', tone: 'success', okText: 'Vào vòng tiếp theo',
                onClose: () => {
                    const basePool = practiceCycleRawPool.length ? practiceCycleRawPool : activeQuestionsList;
                    activeQuestionsList = shuffleAllQuestionOptions(shuffleArray([...basePool]));
                    currentQIndex = 0;
                    userAnswers = {};
                    wrongAttemptsByQ = {};
                    loadQuestion();
                }
            });
        }
    }
}

function triggerSubmitQuizPrompt() {
    const answeredCount = Object.keys(userAnswers).length;
    const total = activeQuestionsList.length;
    showAppConfirm(`Bé đã làm ${answeredCount}/${total} câu. Con có muốn nộp bài thi ngay không?`, showResultScreen, {
        title: 'Con muốn nộp bài chứ?', icon: '📝', cancelText: 'Làm tiếp', confirmText: 'Nộp bài'
    });
}

function showResultScreen() {
    stopSpeaking();
    clearInterval(quizTimerInterval);

    let correctCount = 0;
    score = 0;
    quizAnsweredLog = [];
    quizWrongAnswers = [];

    activeQuestionsList.forEach((q, idx) => {
        const studentAns = userAnswers[idx];
        const isCorrect = studentAns === q.answer;
        if (isCorrect) {
            correctCount++;
            score += (q.diem ?? 0.5);
        } else {
            quizWrongAnswers.push({
                question_id: q.question_id,
                question_number: idx + 1,
                question_text: q.question_text,
                sub_topic: q.sub_topic || q.sub_code || 'Chủ đề tổng hợp',
                sub_topic_label: (Array.isArray(q.lesson_titles) && q.lesson_titles[0]) ? q.lesson_titles[0] : (q.sub_topic_label || q.sub_code || 'Chủ đề tổng hợp'),
                sub_code: q.sub_code || q.sub_topic || '',
                lesson_refs: Array.isArray(q.lesson_refs) ? q.lesson_refs : [],
                lesson_titles: Array.isArray(q.lesson_titles) ? q.lesson_titles : [],
                difficulty: q.difficulty || '',
                skill_tag: q.skill_tag || 'C1',
                dap_an_chon: studentAns || 'Chưa trả lời',
                dap_an_dung: q.answer,
                explanation: q.explanation || q.hint || 'Không có giải thích chi tiết.'
            });
        }
        quizAnsweredLog.push({
            question_id: q.question_id,
            exam_id: q.exam_id ?? activeExamContext?.examId ?? null,
            question_text: q.question_text,
            skill_tag: q.skill_tag || 'C1',
            sub_code: q.sub_code || q.sub_topic || '',
            lesson_refs: Array.isArray(q.lesson_refs) ? q.lesson_refs : [],
            difficulty: q.difficulty || '',
            assessment_track: q.assessment_track || activeExamContext?.assessmentTrack || 'standard',
            include_in_standard_competency: q.include_in_standard_competency !== false,
            source_topic_id: q.source_topic_id,
            diem: q.diem ?? 0.5,
            isCorrect,
            dap_an_chon: studentAns || '',
            dap_an_dung: q.answer
        });
    });

    switchAppView('view-result');
    const totalQ = activeQuestionsList.length;
    const percent = Math.round((correctCount / totalQ) * 100);

    // Tiến trình tuần: điểm tính riêng theo công thức 10/tổng số câu (không dùng điểm từng câu để tránh lệch)
    const displayScore = activeRoadmapContext
        ? Math.round((correctCount * 10 / totalQ) * 10) / 10
        : score;

    const examBadgeText = activeExamContext ? activeExamContext.examTitle : (activeRoadmapContext ? activeRoadmapContext.chuDe : 'Bài luyện tập chủ đề');
    document.getElementById('report-exam-badge').textContent = examBadgeText;
    document.getElementById('report-student-display').textContent = `Học sinh: ${currentUser?.hoTen || 'Khách'}`;
    const durationStr = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '35 phút';
    document.getElementById('report-meta-display').textContent = `Lớp: ${currentUser?.lop || '1A'} | Mã số: ${currentUser?.maHS || 'KHACH'} | Thời gian: ${durationStr}`;
    document.getElementById('report-total-score-val').textContent = displayScore.toFixed(1);
    document.getElementById('report-correct-ratio-val').textContent = `${correctCount}/${totalQ}`;

    renderReportTopicsBreakdown();

    const nextActionLabel = document.getElementById('report-next-action-label');
    if (nextActionLabel) {
        nextActionLabel.textContent = activeRoadmapContext ? '🔙 Quay lại Bài tập' : '🚀 Làm đề thi tiếp theo';
    }

    const historyBtn = document.getElementById('report-history-btn');
    if (historyBtn) {
        const targetSheet = activeRoadmapContext
            ? 'LichSuTienTrinhTuan'
            : (examFileMap[activeExamContext?.categoryKey]?.sheet || 'LichSuBaiThiHK1');
        historyBtn.setAttribute('onclick', `openHistoryModal('${targetSheet}')`);
    }

    if (percent >= 80) {
        confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 } });
        playAudio('win');
    }

    if (currentUser && !currentUser.isGuest) {
        if (activeExamContext) saveExamResultToSheet();
        else if (activeRoadmapContext) saveWeeklyProgressToSheet(percent, starCountFromPercent(percent), displayScore);
    }
}

function starCountFromPercent(percent) {
    if (percent === 100) return 3;
    if (percent >= 85) return 2;
    if (percent >= 80) return 1;
    return 0;
}

function renderReportTopicsBreakdown() {
    const container = document.getElementById('report-topics-list');
    if (!container) return;

    const isRoadmap = !!activeRoadmapContext;
    const isExam = !!activeExamContext;
    const minItems = isExam
        ? Number(activeExamContext?.assessmentPolicy?.competency_min_questions_per_exam || 3)
        : 1;
    const unmeasuredLabel = activeExamContext?.assessmentPolicy?.unmeasured_label || 'Chưa đánh giá';
    const insufficientLabel = activeExamContext?.assessmentPolicy?.insufficient_data_label || 'Chưa đủ dữ liệu';
    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    const skillStats = {};
    skillKeys.forEach(k => {
        skillStats[k] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
    });

    activeQuestionsList.forEach((q, idx) => {
        let rawTag = String(q.skill_tag || q.competency || 'TOAN_C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        let tag = m ? 'C' + m[1] : 'C1';

        if (!skillStats[tag]) skillStats[tag] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
        skillStats[tag].total++;
        skillStats[tag].maxScore += (q.diem ?? 0.5);
        if (userAnswers[idx] === q.answer) {
            skillStats[tag].correct++;
            skillStats[tag].earnedScore += (q.diem ?? 0.5);
        }
    });

    let html = '';
    if (isExam && activeExamContext?.assessmentTrack === 'advanced') {
        html += `
            <div class="sm:col-span-2 lg:col-span-3 bg-indigo-50 border border-indigo-200 rounded-2xl p-3 text-xs md:text-sm font-bold text-indigo-800">
                🏅 Đây là <strong>nhánh HSG / nâng cao</strong>. Kết quả năng lực ở đây dùng để theo dõi mức độ thử thách nâng cao, không dùng làm chuẩn tối thiểu của hồ sơ năng lực phổ thông.
            </div>`;
    }

    skillKeys.forEach(k => {
        const data = skillStats[k];
        const hasAnyData = data.total > 0;
        const enoughData = data.total >= minItems;
        const pct = enoughData ? Math.round((data.correct / data.total) * 100) : null;

        let badgeClass, badgeText, barColor, scoreLine, pctText, barWidth, cardClass;
        if (!hasAnyData) {
            badgeClass = 'bg-slate-100 text-slate-500 border border-slate-200';
            badgeText = unmeasuredLabel;
            barColor = 'bg-slate-200';
            scoreLine = '<span class="text-slate-400">Đề này không đo năng lực này</span>';
            pctText = '--';
            barWidth = 0;
            cardClass = 'bg-slate-50/60 border-slate-200';
        } else if (!enoughData) {
            badgeClass = 'bg-slate-100 text-slate-600 border border-slate-200';
            badgeText = insufficientLabel;
            barColor = 'bg-slate-300';
            scoreLine = `<span>Số câu đúng: <strong class="text-slate-600">${data.correct}/${data.total} câu</strong></span>`;
            pctText = '--';
            barWidth = 0;
            cardClass = 'bg-slate-50/70 border-slate-200';
        } else {
            const isPassed = pct >= 50;
            badgeClass = isPassed
                ? 'bg-amber-100 text-amber-800 border border-amber-200'
                : 'bg-purple-50 text-purple-700 border border-purple-200';
            badgeText = isPassed ? 'Đạt yêu cầu' : 'Cần luyện tập thêm';
            barColor = isPassed ? 'bg-gradient-to-r from-amber-400 to-purple-400' : 'bg-gradient-to-r from-pink-400 to-purple-400';
            scoreLine = `<span>Số câu đúng: <strong class="text-pink-600">${data.correct}/${data.total} câu</strong></span>`;
            pctText = `${pct}%`;
            barWidth = pct;
            cardClass = 'bg-pink-50/40 border-pink-100';
        }

        html += `
            <div class="${cardClass} border rounded-2xl p-3 flex flex-col justify-between space-y-2">
                <div class="flex items-center justify-between gap-2">
                    <span class="font-black text-slate-800 text-xs sm:text-sm">${SKILL_TAXONOMY[k].name}</span>
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold shrink-0 ${badgeClass}">${badgeText}</span>
                </div>
                <div class="flex items-center justify-between text-xs font-bold text-slate-600 gap-2">
                    ${scoreLine}
                    <span class="font-math font-black ${pct == null ? 'text-slate-400' : ''}">${pctText}</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${barWidth}%"></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function openReviewWrongModal() {
    const modal = document.getElementById('modal-review-wrong');
    const content = document.getElementById('review-wrong-content');
    if (!modal || !content) return;

    if (!quizWrongAnswers.length) {
        content.innerHTML = `<div class="text-center py-8 text-emerald-600 font-extrabold text-base"><i class="fa-solid fa-circle-check text-3xl mb-2 block"></i>Tuyệt vời! Bé không làm sai câu nào trong bài thi này!</div>`;
    } else {
        let html = '';
        quizWrongAnswers.forEach((item, idx) => {
            html += `
                <div class="bg-purple-50/40 border border-purple-200 rounded-2xl p-3.5 space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="px-2.5 py-0.5 bg-purple-100 text-purple-800 font-black text-xs rounded-lg">CÂU ${item.question_number || (idx + 1)}</span>
                        <span class="text-xs font-bold text-slate-500">${escapeHtml(beautifySubtopicName(item.sub_topic_label) || 'Chủ đề tổng hợp')}</span>
                    </div>
                    <p class="font-extrabold text-slate-800 text-sm">${escapeHtml(item.question_text)}</p>
                    <div class="text-xs space-y-1 font-semibold">
                        <p class="text-purple-600"><i class="fa-solid fa-xmark mr-1"></i> Đáp án con chọn: <strong>${escapeHtml(item.dap_an_chon)}</strong></p>
                        <p class="text-emerald-700"><i class="fa-solid fa-check mr-1"></i> Đáp án đúng chuẩn: <strong>${escapeHtml(item.dap_an_dung)}</strong></p>
                    </div>
                    ${Array.isArray(item.lesson_titles) && item.lesson_titles.length ? `
                    <div class="p-2.5 bg-sky-50/80 border border-sky-200 rounded-xl text-xs text-sky-900 font-semibold flex items-start gap-2">
                        <i class="fa-solid fa-book-open text-sky-600 mt-0.5"></i>
                        <span><strong>Nên ôn lại:</strong> ${escapeHtml(item.lesson_titles.join(' · '))}${item.sub_code ? ` <span class="text-sky-600">(${escapeHtml(item.sub_code)})</span>` : ''}</span>
                    </div>` : ''}
                    <div class="p-2.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold flex items-start gap-2">
                        <i class="fa-solid fa-lightbulb text-amber-600 mt-0.5"></i>
                        <span><strong>Lời giải sư phạm:</strong> ${escapeHtml(item.explanation)}</span>
                    </div>
                </div>
            `;
        });
        content.innerHTML = html;
    }
    modal.classList.remove('hidden');
}

function closeReviewWrongModal() {
    document.getElementById('modal-review-wrong').classList.add('hidden');
}

// ==========================================
// LƯU KẾT QUẢ & ĐỒNG BỘ ĐIỂM C1-C6 LÊN GOOGLE SHEETS
// ==========================================
async function saveExamResultToSheet() {
    const { categoryKey, examIndex } = activeExamContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    
    // Mỗi đề chỉ đánh giá những năng lực thật sự có câu hỏi trong đề.
    // Lưu cả số câu đúng và tổng số câu của từng năng lực để 0/0 được hiểu là
    // "chưa có dữ liệu", tuyệt đối không biến thành 0% năng lực.
    const skillScores = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 }; // điểm có trọng số, giữ tương thích cũ
    const skillCorrect = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    const skillTotal = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    quizAnsweredLog.forEach(item => {
        let rawTag = String(item.skill_tag || 'C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        let tag = m ? 'C' + m[1] : 'C1';
        if (skillTotal[tag] === undefined) return;
        skillTotal[tag]++;
        if (item.isCorrect) {
            skillCorrect[tag]++;
            skillScores[tag] += (item.diem || 0.5);
        }
    });

    const payload = {
        maHS: currentUser.maHS,
        token: currentUser.token, // bắt buộc để server xác nhận đúng chủ tài khoản mới cho ghi điểm
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        examCategory: categoryKey,
        examId: activeExamContext?.examId ?? null,
        assessmentTrack: activeExamContext?.assessmentTrack || 'standard',
        includeInStandardCompetency: activeExamContext?.includeInStandardCompetency !== false,
        scope: activeExamContext?.scope || '',
        sheetName: examFileMap[categoryKey]?.sheet || 'LichSuBaiThiHK1',
        deSo: examIndex + 1,
        thoiGianLamBai,
        tongDiem: score.toFixed(1),
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        tongCauHoi: activeQuestionsList.length,
        diemC1: skillScores.C1.toFixed(1),
        diemC2: skillScores.C2.toFixed(1),
        diemC3: skillScores.C3.toFixed(1),
        diemC4: skillScores.C4.toFixed(1),
        diemC5: skillScores.C5.toFixed(1),
        diemC6: skillScores.C6.toFixed(1),
        wrongQuestions: quizWrongAnswers
    };
    // Ghi điểm từng nhóm năng lực vào ĐÚNG tên cột khai báo trong SKILL_TAXONOMY (C1_NhanBiet, C2_PhepTinh...)
    // — không hard-code tên cột, tránh lệch dữ liệu nếu sau này đổi lại taxonomy.
    Object.keys(SKILL_TAXONOMY).forEach(k => {
        // Hai cột này là cặp correct/attempted. Nếu total = 0 thì lịch sử hiển thị --,
        // không coi năng lực chưa được hỏi là học sinh làm sai.
        payload[SKILL_TAXONOMY[k].sheetCol] = skillCorrect[k];
        payload[SKILL_TAXONOMY[k].totalCol] = skillTotal[k];
    });
    try { await callAppsScript('saveExamResult', payload); } catch (e) {}
}

async function saveWeeklyProgressToSheet(percent, starCount, scoreVal) {
    const { week, topicId, chuDe } = activeRoadmapContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    const scoreThang10 = (scoreVal ?? ((score / activeQuestionsList.length) * 10)).toFixed(1);

    // Đếm CHÍNH XÁC số câu đúng / tổng số câu của từng nhóm năng lực, dựa theo skill_tag
    // (TOAN_C1-C6) mà mỗi câu tự mang sẵn — không ước lượng chia đều, không suy luận gián tiếp qua chủ đề Mục lớn.
    const skillCorrect = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    const skillTotal = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    quizAnsweredLog.forEach(item => {
        let rawTag = String(item.skill_tag || 'TOAN_C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        const tag = m ? 'C' + m[1] : 'C1';
        if (skillTotal[tag] === undefined) return;
        skillTotal[tag]++;
        if (item.isCorrect) skillCorrect[tag]++;
    });
    const payload = {
        student_id: currentUser.maHS,
        maHS: currentUser.maHS,
        token: currentUser.token, // bắt buộc để server xác nhận đúng chủ tài khoản mới cho ghi điểm
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        sheetName: 'LichSuTienTrinhTuan',
        week_completed: week,
        tuan: week,
        chuDe,
        topicId,
        score: scoreThang10,
        stars_earned: starCount,
        tongCauHoi: activeQuestionsList.length,
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        percent,
        thoiGianLamBai,
        wrongQuestions: quizWrongAnswers
    };
    Object.keys(SKILL_TAXONOMY).forEach(k => {
        payload[SKILL_TAXONOMY[k].sheetCol] = skillCorrect[k];
        payload[SKILL_TAXONOMY[k].totalCol] = skillTotal[k];
    });

    try {
        await callAppsScript('saveWeeklyProgress', payload);
        if (percent >= 80) {
            const nextWeek = week + 1;
            if (nextWeek > (Number(currentUser.tuanHienTai) || 1) && nextWeek <= TOTAL_ROADMAP_WEEKS) {
                currentUser.tuanHienTai = nextWeek;
                setTimeout(() => showAppNotice(`🎉 Chúc mừng bé đạt ${percent}% điểm! Tuần ${nextWeek} đã được mở khóa trên bản đồ!`, { okText:'Tuyệt quá!' }), 500);
            }
        }
    } catch (e) {}
}

async function openHistoryModal(sheetName = 'LichSuTienTrinhTuan') {
    if (!currentUser || currentUser.isGuest) {
        return showAppNotice('Bé vui lòng đăng nhập để xem lịch sử tiến trình nhé!', { okText:'Đã hiểu' });
    }

    const modal = document.getElementById('modal-history-progress');
    modal.classList.remove('hidden');

    document.getElementById('hist-info-name').textContent = currentUser.hoTen || '--';
    document.getElementById('hist-info-class').textContent = currentUser.lop || '--';
    document.getElementById('hist-info-code').textContent = currentUser.maHS || '--';
    document.getElementById('hist-info-dob').textContent = currentUser.ngaySinh || '03/09/2019';
    document.getElementById('hist-report-date').textContent = new Date().toLocaleDateString('vi-VN');

    const titleMap = {
        LichSuTienTrinhTuan: "Báo cáo tiến trình 24 tuần học tập",
        LichSuBaiThiHK1: "Báo cáo kết quả đấu trường — Học kỳ 1",
        LichSuBaiThiHK2: "Báo cáo kết quả đấu trường — Học kỳ 2",
        LichSuBaiThiHSG: "Báo cáo kết quả đấu trường — Học sinh giỏi"
    };
    document.getElementById('hist-modal-title').textContent = titleMap[sheetName] || "Kết quả tiến trình học tập";

    showLoadingOverlay('Đang trích xuất dữ liệu và vẽ biểu đồ năng lực...');
    try {
        const res = await callAppsScript('getHistory', { maHS: currentUser.maHS, sheetName, token: currentUser.token });
        hideLoadingOverlay();
        if (res && res.ok === false) {
            // Token hết hạn/không hợp lệ hoặc không đúng chủ - đóng modal, báo rõ thay vì âm thầm
            // hiện báo cáo trống (dễ gây hiểu lầm là bé chưa học gì).
            closeHistoryModal();
            showAppNotice(res.error || 'Không thể tải lịch sử - bé đăng nhập lại nhé!');
            return;
        }
        const rows = (res && res.history) ? res.history : [];
        renderHistoryReport(rows, sheetName);
    } catch (err) {
        hideLoadingOverlay();
        showAppNotice('Không thể tải lịch sử: ' + err.message);
    }
}

function closeHistoryModal() {
    document.getElementById('modal-history-progress').classList.add('hidden');
    if (histLineChartInstance) { histLineChartInstance.destroy(); histLineChartInstance = null; }
    if (histBarChartInstance) { histBarChartInstance.destroy(); histBarChartInstance = null; }
}

// ==========================================
// BIỂU ĐỒ THANH NGANG & BẢNG KÈM HÀNG TRUNG BÌNH
// ==========================================
function getSkillCell(row, skillKey) {
    const taxo = SKILL_TAXONOMY[skillKey];
    const correct = Number(row[taxo.sheetCol]);
    const total = Number(row[taxo.totalCol]);
    if (!row[taxo.totalCol] || isNaN(total) || total <= 0) return null;
    return { correct: isNaN(correct) ? 0 : correct, total };
}

function formatDateOnly(value) {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return String(value).split('T')[0] || String(value);
    return d.toLocaleDateString('vi-VN');
}

function formatDateShort(value) {
    const d = value ? new Date(value) : null;
    if (!d || isNaN(d.getTime())) return '';
    return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function renderHistoryReport(rows, sheetName) {
    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const labels = rows.map((r, i) => {
        const dm = formatDateShort(r.Timestamp || r.ngayLam);
        const label = isWeekly ? `Tuần ${r.tuan || i + 1}` : (r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || i + 1}`);
        return dm ? `${dm} ${label}` : label;
    });
    const scores = rows.map(r => Number(r.score || r.tongDiem || ((r.soCauDung / (r.tongCauHoi || 30)) * 10).toFixed(1)));

    const ctxLine = document.getElementById('progressChartCanvas').getContext('2d');
    if (histLineChartInstance) histLineChartInstance.destroy();

    histLineChartInstance = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: labels.length ? labels : ['Chưa có bài thi'],
            datasets: [{
                label: 'Điểm số (/10)',
                data: scores.length ? scores : [0],
                borderColor: '#ea580c',
                backgroundColor: 'rgba(255, 237, 213, 0.5)',
                borderWidth: 3.5,
                pointBackgroundColor: '#c2410c',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0, max: 10.5,
                    ticks: { stepSize: 2, color: '#000000', font: { family: 'Quicksand', weight: 'bold' } }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#000000',
                        font: { family: 'Quicksand', weight: 'bold', size: 11 },
                        maxRotation: 90,
                        minRotation: 90
                    }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    const skillAverages = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    const touchedSkills = [];
    const hasCompetencyTotals = rows.some(r => skillKeys.some(k => {
        const total = Number(r[SKILL_TAXONOMY[k].totalCol]);
        return Number.isFinite(total) && total > 0;
    }));

    if (rows.length && hasCompetencyTotals) {
        // Dùng đúng correct/attempted cho cả Bài tập và Đề thi. Nhóm không xuất hiện
        // trong đề có total = 0 nên không tham gia trung bình và không bị xem là 0%.
        skillKeys.forEach((k) => {
            let sumCorrect = 0, sumTotal = 0;
            rows.forEach(r => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                sumCorrect += cell.correct;
                sumTotal += cell.total;
            });
            if (sumTotal > 0) {
                skillAverages[k] = Math.min(100, Math.round((sumCorrect / sumTotal) * 100));
                touchedSkills.push(k);
            }
        });
    }

    const ctxBar = document.getElementById('topicRadarChartCanvas').getContext('2d');
    if (histBarChartInstance) histBarChartInstance.destroy();

    histBarChartInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: skillKeys.map(k => SKILL_TAXONOMY[k].name),
            datasets: [{
                label: 'Độ thành thạo (%)',
                data: skillKeys.map(k => touchedSkills.includes(k) ? skillAverages[k] : null),
                backgroundColor: ['#f472b6', '#fb7185', '#f59e0b', '#a855f7', '#ec4899', '#e11d48'],
                borderRadius: 8,
                borderSkipped: false,
                barThickness: 16
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    min: 0,
                    max: 100,
                    ticks: { stepSize: 20, callback: (v) => v + '%', color: '#000000', font: { family: 'Quicksand', weight: 'bold' } },
                    grid: { color: 'rgba(254, 240, 138, 0.3)' }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { family: 'Quicksand', weight: 'bold', size: 14 }, color: '#000000' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: (ctx) => ctx.raw == null ? ' Chưa đủ dữ liệu' : ` Độ thành thạo: ${ctx.raw}%` } }
            }
        },
        plugins: [{
            id: 'barValueLabels',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;
                chart.data.datasets[0].data.forEach((val, i) => {
                    if (val == null) return;
                    const meta = chart.getDatasetMeta(0).data[i];
                    if (!meta) return;
                    ctx.save();
                    ctx.font = 'bold 12px Quicksand, sans-serif';
                    ctx.fillStyle = '#1e293b';
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`${val}%`, meta.x + 6, meta.y);
                    ctx.restore();
                });
            }
        }]
    });

    renderPedagogicalEvaluation(rows, skillAverages, touchedSkills);
    renderHistoryTable(rows, sheetName);
}

function renderPedagogicalEvaluation(rows, skillAverages, touchedSkills) {
    const box = document.getElementById('pedagogical-evaluation-box');
    if (!box) return;

    const studentName = getStudentFirstName();
    const count = rows.length;
    const avgScore = count ? (rows.reduce((acc, r) => acc + Number(r.score || r.tongDiem || 0), 0) / count) : 0;
    const avgScoreStr = avgScore.toFixed(1);

    // 1. Đánh giá tổng quan — phải khớp thật với điểm số, không khen chung chung bất kể kết quả
    let overviewText;
    if (avgScore >= 8) {
        overviewText = `Con nắm rất vững kiến thức trọng tâm, làm bài nghiêm túc và đạt kết quả xuất sắc.`;
    } else if (avgScore >= 6.5) {
        overviewText = `Con nắm khá tốt kiến thức trọng tâm, tuy nhiên vẫn còn một vài chỗ cần luyện thêm để đạt kết quả cao hơn.`;
    } else if (avgScore >= 5) {
        overviewText = `Con đã nắm được kiến thức cơ bản nhưng chưa thật chắc, cần ôn luyện thêm để tiến bộ hơn.`;
    } else {
        overviewText = `Con còn gặp khó khăn với nội dung này, ba mẹ nên đồng hành ôn luyện thêm cùng con nhé.`;
    }

    // 2 & 3. Thế mạnh / điểm cần khắc phục — CHỈ lấy từ những nhóm bé đã thực sự luyện tập,
    // tuyệt đối không nhận xét về nhóm bé chưa hề động tới (tránh nói sai với thực tế).
    const validSkills = (touchedSkills && touchedSkills.length) ? touchedSkills : [];
    const sortedValid = [...validSkills].sort((a, b) => skillAverages[b] - skillAverages[a]);

    let strengthHtml, weaknessHtml;
    if (sortedValid.length >= 2) {
        const top1 = SKILL_TAXONOMY[sortedValid[0]].name;
        const top2 = SKILL_TAXONOMY[sortedValid[1]].name;
        strengthHtml = `Con đạt độ thành thạo tốt ở các nhóm: <strong>${escapeHtml(top1)}</strong> (${skillAverages[sortedValid[0]]}%) và <strong>${escapeHtml(top2)}</strong> (${skillAverages[sortedValid[1]]}%).`;

        const weak1 = sortedValid[sortedValid.length - 1];
        weaknessHtml = `Con cần luyện thêm ở mảng: <strong>${escapeHtml(SKILL_TAXONOMY[weak1].name)}</strong> (${skillAverages[weak1]}%). ${escapeHtml(SKILL_TAXONOMY[weak1].advice)}`;
    } else if (sortedValid.length === 1) {
        const only1 = sortedValid[0];
        strengthHtml = `Con đạt ${skillAverages[only1]}% ở nhóm <strong>${escapeHtml(SKILL_TAXONOMY[only1].name)}</strong> — mảng duy nhất bé đã luyện tập tới thời điểm này.`;
        weaknessHtml = `Bé mới luyện tập 1 nhóm kỹ năng, cô chưa đủ dữ liệu để đánh giá toàn diện. Ba mẹ khuyến khích con hoàn thành thêm các tuần khác nhé!`;
    } else {
        strengthHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá thế mạnh.`;
        weaknessHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá điểm cần khắc phục.`;
    }

    box.innerHTML = `
        <div class="bg-white/80 p-3 rounded-xl border border-amber-200">
            <span class="text-amber-700 font-extrabold block mb-0.5">🌟 1. Đánh giá tổng quan năng lực & xu hướng tiến bộ:</span>
            <p class="text-gray-700">Học sinh <strong>${escapeHtml(currentUser.hoTen)}</strong> đã hoàn thành <strong>${count} bài kiểm tra</strong> với điểm số trung bình tích lũy đạt <strong class="text-pink-600">${avgScoreStr}/10 điểm</strong>. ${overviewText}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div class="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
                <span class="text-emerald-700 font-extrabold block mb-0.5">✅ 2. Khen ngợi & thế mạnh nổi trội:</span>
                <p class="text-gray-700">${strengthHtml}</p>
            </div>

            <div class="bg-purple-50/70 p-3 rounded-xl border border-purple-200">
                <span class="text-purple-700 font-extrabold block mb-0.5">⚠️ 3. Điểm cần lưu ý & khắc phục:</span>
                <p class="text-gray-700">${weaknessHtml}</p>
            </div>
        </div>

        <div class="bg-white/80 p-3 rounded-xl border border-purple-200">
            <span class="text-purple-700 font-extrabold block mb-0.5">💡 4. Kế hoạch bồi dưỡng & hướng dẫn phụ huynh:</span>
            <p class="text-gray-700">Ba mẹ nên dành 15 phút mỗi tối cùng con ôn lại các phép tính, đặt câu hỏi gợi mở và khen ngợi kịp thời để giúp ${studentName} giữ vững niềm yêu thích môn Toán nhé!</p>
        </div>
    `;
}

function renderHistoryTable(rows, sheetName) {
    const tbody = document.getElementById('hist-table-body');
    if (!tbody) return;

    if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="11" class="py-4 text-gray-400">Chưa ghi nhận lịch sử bài làm nào</td></tr>`;
        return;
    }

    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];

    const getScoreVal = (r, num, colName) => {
        const val = r[`diemC${num}`] ?? r[colName] ?? r[`diem_c${num}`] ?? r[`C${num}`];
        return (val !== undefined && val !== null && val !== '') ? Number(val) : 0;
    };

    const totalRows = rows.length;
    let sumTongDiem = 0;
    rows.forEach(r => { sumTongDiem += Number(r.tongDiem || r.score || 0); });
    const avgTong = (sumTongDiem / totalRows).toFixed(1);

    let summaryCells = '';
    let bodyRows = '';

    const hasCompetencyTotals = rows.some(r => skillKeys.some(k => {
        const total = Number(r[SKILL_TAXONOMY[k].totalCol]);
        return Number.isFinite(total) && total > 0;
    }));

    if (hasCompetencyTotals) {
        // Tổng hợp: % = tổng câu đúng / tổng câu đã làm THẬT của đúng nhóm năng lực đó.
        // Áp dụng cho cả bài tập lẫn đề thi mới.
        const agg = {};
        skillKeys.forEach(k => { agg[k] = { correct: 0, total: 0 }; });
        rows.forEach(r => {
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                agg[k].correct += cell.correct;
                agg[k].total += cell.total;
            });
        });
        skillKeys.forEach(k => {
            const a = agg[k];
            summaryCells += `<td class="py-2 px-1">${a.total > 0 ? Math.round((a.correct / a.total) * 100) + '%' : '--'}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let skillCells = '';
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) { skillCells += `<td class="py-2 px-1 text-gray-300">--</td>`; return; }
                const pct = cell.total > 0 ? Math.round((cell.correct / cell.total) * 100) : 0;
                skillCells += `<td class="py-2 px-1">${cell.correct}/${cell.total} <span class="text-gray-400">(${pct}%)</span></td>`;
            });

            bodyRows += `
                <tr class="hover:bg-pink-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">${isWeekly ? `Tuần ${r.tuan || (idx + 1)}` : (r.deSo ? `Đề ${r.deSo}` : `Đề ${idx + 1}`)}</td>
                    <td class="py-2.5 px-2 font-black text-purple-600">${itemDiem}</td>
                    ${skillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    } else {
        // Dữ liệu đề thi cũ chưa có cột tổng số câu theo năng lực: không suy đoán %
        // vì dễ biến "chưa được hỏi" thành "làm sai". Chỉ giữ tổng điểm lịch sử.
        skillKeys.forEach(() => { summaryCells += `<td class="py-2 px-1 text-gray-300">--</td>`; });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let examSkillCells = '';
            skillKeys.forEach(() => {
                examSkillCells += `<td class="py-2 px-1 text-gray-300">--</td>`;
            });

            bodyRows += `
                <tr class="hover:bg-pink-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">${r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || (idx + 1)}`}</td>
                    <td class="py-2.5 px-2 font-black text-purple-600">${itemDiem}</td>
                    ${examSkillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    }

    const html = `
        <tr class="bg-amber-100/90 text-amber-950 font-black border-b-2 border-amber-200">
            <td class="py-2.5 px-2" colspan="2">Điểm trung bình</td>
            <td class="py-2.5 px-2 text-purple-600">${avgTong}</td>
            ${summaryCells}
            <td class="py-2.5 px-2" colspan="2">--</td>
        </tr>
        ${bodyRows}
    `;
    tbody.innerHTML = html;
}

function exportReportToPDF() {
    const area = document.getElementById('printable-report-area');
    if (!area) return;
    showLoadingOverlay('Đang khởi tạo file PDF chuẩn in ấn...');
    
    const opt = {
        margin: [5, 5, 5, 5],
        filename: `Bao_Cao_Tien_Trinh_${currentUser?.maHS || 'HocSinh'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(area).save().then(() => {
        hideLoadingOverlay();
    }).catch(err => {
        hideLoadingOverlay();
        window.print();
    });
}

// ==========================================
// ĐỘNG CƠ ÂM THANH: GOOGLE TTS CHỊ BAN MAI
// ==========================================
function stopSpeaking() {
    try {
        if (banMaiAudio) {
            banMaiAudio.pause();
            banMaiAudio.currentTime = 0;
            banMaiAudio.onended = null;
        }
    } catch (e) {}
}

function speakVietnamese(text, rate = 0.96) {
    if (!text) return;
    try {
        stopSpeaking();

        let cleanText = String(text)
            .replace(/<[^>]*>/g, '')
            .replace(/b-a/g, 'bờ a ba')
            .replace(/c\/k/g, 'cờ hoặc ca')
            .replace(/g\/gh/g, 'gờ đơn hoặc gờ kép')
            .replace(/ng\/ngh/g, 'ngờ đơn hoặc ngờ kép')
            .trim();

        if (!cleanText) return;

        if (cleanText.length <= 180) {
            const encoded = encodeURIComponent(cleanText);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
            return;
        }

        const sentences = cleanText.match(/[^.!?\n]+[.!?\n]*/g) || [cleanText];
        let sIdx = 0;
        function playSentence() {
            if (sIdx >= sentences.length) return;
            const s = sentences[sIdx++].trim();
            if (!s) { playSentence(); return; }
            const encoded = encodeURIComponent(s);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            banMaiAudio.onended = playSentence;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
        }
        playSentence();
    } catch (err) {}
}

function speakCurrentQuestion() {
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;
    const textToRead = q.audio_text || q.reading_passage || q.question_text;
    speakVietnamese(textToRead, 0.96);
}

// Đọc to toàn bộ phần "Nhận xét sư phạm & kế hoạch bồi dưỡng" trong báo cáo tiến trình
// (gộp text từ mọi khối con bên trong, theo đúng thứ tự hiển thị trên màn hình).
function speakEvaluationBox() {
    const box = document.getElementById('pedagogical-evaluation-box');
    if (!box) return;
    const fullText = box.innerText || box.textContent || '';
    if (!fullText.trim()) return;
    speakVietnamese(fullText, 0.96);
}

function playAudio(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
        if (!audioCtx) return;

        const now = audioCtx.currentTime;

        if (type === 'correct') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12);
            osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.25);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'wrong') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'square';
            osc.frequency.setValueAtTime(300, now);
            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.01);
            gain.gain.setValueAtTime(0.22, now + 0.09);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.1);
            gain.gain.setValueAtTime(0.001, now + 0.14);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.15);
            gain.gain.setValueAtTime(0.22, now + 0.23);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.24);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'win') {
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                setTimeout(() => {
                    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
                    o.connect(g); g.connect(audioCtx.destination);
                    o.frequency.value = freq; g.gain.setValueAtTime(0.2, audioCtx.currentTime);
                    g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
                    o.start(); o.stop(audioCtx.currentTime + 0.3);
                }, i * 150);
            });
        }
    } catch (e) {}
}

function initQuizPallet() {
    updateQuizPalletUI();
}

function updateQuizPalletUI() {
    const container = document.getElementById('quiz-pallet-container');
    if (!container) return;
    if (!activeQuestionsList || !activeQuestionsList.length) { container.innerHTML = ''; return; }

    const isRoadmap = !!activeRoadmapContext;
    const isExam = !!activeExamContext;
    const total = activeQuestionsList.length;

    if (isExam) {
        container.className = `grid gap-1 max-w-xl mx-2`;
        container.style.gridTemplateColumns = `repeat(${total}, minmax(0, 1fr))`;
    } else {
        container.className = 'grid grid-cols-10 gap-1.5 max-w-xl mx-2';
        container.style.gridTemplateColumns = '';
    }

    const btnSize = isExam ? 'w-6 h-6 md:w-7 md:h-7 text-[10px] md:text-xs' : 'w-8 h-8 text-xs';

    let html = '';
    activeQuestionsList.forEach((q, idx) => {
        const answer = userAnswers[idx];
        const isAnswered = answer !== undefined;
        const isCurrent = idx === currentQIndex;
        let cls = 'bg-white text-pink-400 border-pink-200 hover:bg-pink-50';

        if (isAnswered) {
            if (isRoadmap) {
                const isCorrect = answer === q.answer;
                cls = isCorrect
                    ? 'bg-emerald-400 text-white border-emerald-500 hover:bg-emerald-500'
                    : 'bg-red-200 text-red-800 border-red-400 hover:bg-red-300';
            } else {
                // Chế độ thi: không lộ đúng/sai, nhưng câu ĐÃ TRẢ LỜI phải đổi màu KHÁC HẲN
                // với câu ĐANG LÀM (đang dùng gradient pink->purple) để không bị lẫn khi nhìn nhanh.
                cls = 'bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600';
            }
        }
        if (isCurrent) cls = 'bg-gradient-to-br from-pink-500 to-purple-500 text-white border-pink-500 shadow-md';
        html += `<button onclick="jumpToQuestion(${idx})" class="${btnSize} shrink-0 rounded-xl border-2 font-black flex items-center justify-center transition-colors duration-150 ${cls}">${idx + 1}</button>`;
    });
    container.innerHTML = html;
}

function jumpToQuestion(idx) {
    stopSpeaking();
    if (idx < 0 || idx >= activeQuestionsList.length) return;
    currentQIndex = idx;
    loadQuestion();
}

function formatDuration(ms) {
    const s = Math.round(ms / 1000);
    return `${Math.floor(s / 60)} phút ${s % 60} giây`;
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function showLoadingOverlay(msg) {
    let el = document.getElementById('loading-overlay');
    if (!el) {
        el = document.createElement('div');
        el.id = 'loading-overlay';
        el.className = 'fixed inset-0 bg-black/30 flex items-center justify-center z-50';
        el.innerHTML = `<div class="bg-white px-6 py-4 rounded-2xl shadow-xl font-extrabold text-pink-600 flex items-center space-x-3"><i class="fa-solid fa-spinner fa-spin"></i><span id="loading-overlay-text"></span></div>`;
        document.body.appendChild(el);
    }
    document.getElementById('loading-overlay-text').textContent = msg;
    el.classList.remove('hidden');
}
function hideLoadingOverlay() { document.getElementById('loading-overlay')?.classList.add('hidden'); }

function toggleAutoSpeech() {
    autoSpeechEnabled = !autoSpeechEnabled;
    localStorage.setItem('autoSpeechEnabled', autoSpeechEnabled ? 'true' : 'false');
    if (!autoSpeechEnabled) stopSpeaking();
    updateAutoSpeechButtonUI();
}

function updateAutoSpeechButtonUI() {
    const btn = document.getElementById('btn-toggle-autospeech');
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (autoSpeechEnabled) {
        icon.className = 'fa-solid fa-volume-high';
        btn.title = 'Đang BẬT tự động đọc câu hỏi — bấm để tắt';
        btn.classList.remove('bg-gray-100', 'text-gray-400', 'border-gray-200');
        btn.classList.add('bg-pink-50', 'text-pink-600', 'border-pink-200');
    } else {
        icon.className = 'fa-solid fa-volume-xmark';
        btn.title = 'Đang TẮT tự động đọc câu hỏi — bấm để bật';
        btn.classList.remove('bg-pink-50', 'text-pink-600', 'border-pink-200');
        btn.classList.add('bg-gray-100', 'text-gray-400', 'border-gray-200');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-mapin')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });
    document.getElementById('login-mahs')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });

    window.addEventListener('click', () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    }, { once: true });

    updateAutoSpeechButtonUI();
});

// Khởi động xác thực:
// - Có token: restore từ backend, không nháy về Khách.
// - Không có token: vào chế độ Khách.
// - Lỗi mạng: giữ token, không tự logout.
tryAutoLogin();
// Service Worker tạm không đăng ký ở build v12.2 để tránh giữ app.js cũ khi nâng cấp Mục 1.
// ============================================================
// TOÁN 3 V2 - BÀI HỌC <-> BÀI TẬP THEO SGK/SBT
// 58 bài học chính; loại Luyện tập chung và các bài Ôn tập cuối kỳ/cuối năm.
// Bài học mở toàn bộ. Bài tập mở tuần tự theo ngưỡng >=80%.
// TOAN3_C1-C6 tiếp tục là trục đánh giá xuyên suốt.
// ============================================================
const TOAN3_BAI_HOC_DATA_FILE = 'assets/data/bai_hoc_toan_3.json';
let toan3BaiHocDataCache_ = null;
let activeBaiHocToan3_ = { data: null, lesson: null, pageIndex: 0 };

async function loadBaiHocToan3Data_() {
    if (toan3BaiHocDataCache_) return toan3BaiHocDataCache_;
    const res = await fetch(`${TOAN3_BAI_HOC_DATA_FILE}?v=20260920-sgk-sbt-v1`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Không thể tải dữ liệu Bài học/Bài tập Toán 3');
    toan3BaiHocDataCache_ = await res.json();
    return toan3BaiHocDataCache_;
}

function switchAppView(viewId) {
    stopSpeaking();
    ['view-dashboard-grid','view-lecture','view-quiz','view-bai-hoc-hub','view-bai-hoc-detail','view-roadmap','view-minigame-hub','view-game-play','view-exam-hub','view-result','view-admin'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.toggle('hidden', id !== viewId);
    });
}

function getBaiTapUnlockKeyToan3_() {
    const id = currentUser?.maHS || 'KHACH';
    return `toan3_bai_tap_unlocked_v1_${String(id).toUpperCase()}`;
}
function getUnlockedBaiTapToan3_() {
    try { return Math.max(1, Number(localStorage.getItem(getBaiTapUnlockKeyToan3_()) || 1)); }
    catch (e) { return 1; }
}
function saveUnlockedBaiTapToan3_(n) {
    try { localStorage.setItem(getBaiTapUnlockKeyToan3_(), String(Math.max(1, Number(n) || 1))); }
    catch (e) {}
}
function getNextBaiTapToan3_(data, bai) {
    return (data?.bai_tap || []).map(x => Number(x.bai)).sort((a,b)=>a-b).find(x => x > Number(bai)) || null;
}
function isBaiTapUnlockedToan3_(data, bai) {
    return Number(bai) <= getUnlockedBaiTapToan3_();
}

function semesterSwitchButtonsToan3_(hostId, activeSem, fnName) {
    const host = document.getElementById(hostId);
    if (!host) return;
    host.innerHTML = [1,2].map(s => `<button onclick="${fnName}(${s})" class="px-4 py-2 rounded-xl border-2 font-black text-xs md:text-sm transition-all ${Number(s)===Number(activeSem)?'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-purple-400 shadow-sm':'bg-white text-purple-700 border-pink-200 hover:bg-pink-50'}">Học kỳ ${s}</button>`).join('');
}

async function clickLessonModule(semesterNumber = 1) {
    if (!requirePremium('Bài học')) return;
    inMiniGameFlow = false;
    stopSpeaking();
    activeExamContext = null; activeRoadmapContext = null; activeTopicId = null; pendingTopicQuiz = null;
    updateNavTabs('Bài học', '📖', null);
    switchAppView('view-bai-hoc-hub');
    showLoadingOverlay('Đang mở Bài học...');
    try {
        const data = await loadBaiHocToan3Data_();
        renderBaiHocGridToan3_(data, semesterNumber);
    } catch (err) {
        showAppNotice(`Không thể mở Bài học: ${err.message}`);
    } finally { hideLoadingOverlay(); }
}

function renderBaiHocGridToan3_(data, semesterNumber) {
    semesterSwitchButtonsToan3_('lesson-semester-tabs', semesterNumber, 'clickLessonModule');
    const container = document.getElementById('bai-hoc-grid-container');
    if (!container) return;
    const arr = (data?.bai_hoc || []).filter(x => Number(x.semester) === Number(semesterNumber));
    const palette = [
        ['#fff7ed','#fdba74','#c2410c'],['#fefce8','#fde047','#a16207'],['#f0fdf4','#86efac','#15803d'],
        ['#eff6ff','#93c5fd','#1d4ed8'],['#faf5ff','#d8b4fe','#7e22ce'],['#fff1f2','#fda4af','#be123c']
    ];
    container.innerHTML = `<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 md:gap-3">${arr.map((bh,idx)=>{
        const c=palette[idx%palette.length];
        return `<button onclick="selectBaiHocToan3_(${bh.bai})" class="text-left min-h-[106px] rounded-2xl border-2 p-3 transition-all hover:-translate-y-0.5 hover:shadow-lg flex flex-col" style="background:${c[0]};border-color:${c[1]}"><div class="font-black text-base md:text-lg" style="color:${c[2]}">Bài ${bh.bai}</div><div class="text-[11px] font-black text-slate-400 mt-0.5">SGK bài ${bh.source_lesson_no}</div><div class="text-[13px] md:text-sm font-extrabold text-slate-700 mt-1.5 leading-snug">${escapeHtml(bh.source_title||'')}</div></button>`;
    }).join('')}</div>`;
}

async function selectBaiHocToan3_(bai) {
    if (!requirePremium('Bài học')) return;
    try {
        const data = await loadBaiHocToan3Data_();
        const lesson = (data?.bai_hoc || []).find(x => Number(x.bai) === Number(bai));
        if (!lesson) throw new Error(`Không tìm thấy dữ liệu Bài ${bai}`);
        activeBaiHocToan3_ = { data, lesson, pageIndex: 0 };
        renderBaiHocDetailToan3_();
    } catch (err) {
        showAppNotice(`Không thể mở Bài học: ${err.message}`);
    }
}

function renderBaiHocDetailToan3_() {
    const ctx = activeBaiHocToan3_;
    const lesson = ctx.lesson;
    if (!lesson) return;
    switchAppView('view-bai-hoc-detail');
    updateNavTabs('Bài học', '📖', `Bài ${lesson.bai}`);
    const meta = document.getElementById('bai-hoc-detail-meta');
    const title = document.getElementById('bai-hoc-detail-title');
    const tabs = document.getElementById('bai-hoc-detail-tabs');
    const body = document.getElementById('bai-hoc-detail-body');
    if (meta) meta.textContent = `Bài ${lesson.bai} · SGK bài ${lesson.source_lesson_no} · ${lesson.theme || 'Toán 3'}`;
    if (title) title.textContent = lesson.source_title || `Bài ${lesson.bai}`;
    const pages = Array.isArray(lesson.pages) ? lesson.pages : [];
    if (tabs) tabs.innerHTML = pages.map((pg,idx)=>`<button onclick="openBaiHocPageToan3_(${idx})" class="px-3 py-2 rounded-xl border-2 font-black text-xs md:text-sm ${idx===ctx.pageIndex?'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-purple-400 shadow-sm':'bg-white text-purple-700 border-pink-200 hover:bg-pink-50'}">${escapeHtml(pg.title||`Trang ${idx+1}`)}</button>`).join('');
    if (body) body.innerHTML = renderBaiHocPageBodyToan3_(pages[ctx.pageIndex]||{}) + renderBaiHocBottomNavToan3_(ctx.pageIndex,pages.length);
}

function renderBaiHocPageBodyToan3_(page) {
    const safe = escapeHtml;
    if (page.page_type === 'explore') {
        const cards=(page.knowledge_cards||[]).map(c=>`<div class="rounded-2xl border border-pink-200 bg-white p-3"><div class="font-black text-purple-700 mb-1">${safe(c.title)}</div><div class="text-sm font-bold text-slate-700 leading-relaxed">${safe(c.text)}</div></div>`).join('');
        const examples=(page.worked_examples||[]).map(x=>`<li>${safe(x)}</li>`).join('');
        const steps=(page.micro_steps||[]).map((x,i)=>`<div class="flex gap-2 items-start"><span class="w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center font-black shrink-0">${i+1}</span><span class="font-bold text-slate-700">${safe(x)}</span></div>`).join('');
        return `<div class="space-y-3"><div class="rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 via-white to-purple-50 p-4 md:p-5"><div class="text-sm md:text-base font-extrabold text-slate-700 leading-relaxed">${safe(page.intro||'')}</div><div class="mt-3 text-base md:text-lg font-black text-slate-800 leading-relaxed">${safe(page.story||'')}</div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-2.5">${cards}</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-3"><div class="rounded-3xl border-2 border-sky-100 bg-sky-50/50 p-4"><div class="font-black text-sky-700 mb-2">👀 Hình dung trực quan</div><div class="whitespace-pre-line text-center text-lg font-black text-slate-700 leading-relaxed">${safe(page.visual_scene||'')}</div></div><div class="rounded-3xl border-2 border-purple-100 bg-white p-4"><div class="font-black text-purple-700 mb-2">🧩 Làm từng bước</div><div class="space-y-2">${steps}</div></div></div><div class="rounded-2xl bg-emerald-50 border border-emerald-200 p-4"><div class="font-black text-emerald-700 mb-1">Ví dụ</div><ul class="list-disc pl-5 space-y-1 text-sm font-bold text-slate-700">${examples}</ul></div><div class="grid grid-cols-1 md:grid-cols-2 gap-2"><div class="rounded-2xl bg-rose-50 border border-rose-200 p-3 text-sm font-bold text-rose-700">⚠️ ${safe(page.common_mistake||'')}</div><div class="rounded-2xl bg-violet-50 border border-violet-200 p-3 text-sm font-bold text-violet-700">✅ ${safe(page.self_check||'')}</div></div><button onclick="speakLessonTeacherToan3_()" class="w-full md:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black text-sm shadow-sm">🔊 Nghe Cô Ong Vàng giảng</button></div>`;
    }
    if (page.page_type === 'practice') {
        const items=(page.items||[]).map((it,i)=>`<div class="rounded-2xl border-2 border-pink-100 bg-white p-4"><div class="text-xs font-black text-purple-500 mb-1">Câu ${i+1}</div><div class="font-extrabold text-slate-800 mb-2">${safe(it.prompt||'')}</div><div class="flex flex-wrap gap-2">${(it.options||[]).map(o=>`<button onclick="lessonPracticeAnswerToan3_(this,'${String(o).replace(/'/g,"\\'")}','${String(it.answer).replace(/'/g,"\\'")}')" class="px-3 py-2 rounded-xl border border-pink-200 bg-pink-50 text-slate-700 font-black text-sm hover:bg-pink-100">${safe(o)}</button>`).join('')}</div><div class="lesson-practice-feedback mt-2 text-sm font-bold"></div></div>`).join('');
        const strategy=(page.practice_strategy||[]).map((x,i)=>`<li><b>${i+1}.</b> ${safe(x)}</li>`).join('');
        return `<div class="space-y-3"><div class="grid grid-cols-1 md:grid-cols-3 gap-3">${items}</div><div class="rounded-2xl bg-purple-50 border border-purple-200 p-4"><div class="font-black text-purple-700 mb-2">Cách làm chắc chắn</div><ul class="space-y-1 text-sm font-bold text-slate-700">${strategy}</ul></div><div class="grid grid-cols-1 md:grid-cols-2 gap-2">${(page.extra_examples||[]).map(x=>`<div class="rounded-2xl bg-white border border-pink-100 p-3 text-sm font-bold text-slate-700">${safe(x)}</div>`).join('')}</div></div>`;
    }
    const pts=(page.key_points||[]).map((x,i)=>`<div class="flex gap-3 items-start rounded-2xl border border-pink-100 bg-white p-3"><span class="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center font-black shrink-0">${i+1}</span><div class="font-extrabold text-slate-700 leading-relaxed">${safe(x)}</div></div>`).join('');
    const checks=(page.quick_check||[]).map(x=>`<li>${safe(x)}</li>`).join('');
    return `<div class="space-y-3"><div class="rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 via-white to-purple-50 p-4 md:p-5"><div class="text-lg font-black text-purple-700 mb-3">🌟 Điều con cần ghi nhớ</div><div class="grid grid-cols-1 gap-2">${pts}</div></div><div class="rounded-2xl bg-violet-50 border border-violet-200 p-4"><div class="font-black text-violet-700 mb-2">Tự kiểm cuối bài</div><ul class="list-disc pl-5 text-sm font-bold text-slate-700 space-y-1">${checks}</ul></div><div class="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 font-extrabold text-emerald-700">${safe(page.finish_prompt||'')}</div></div>`;
}

function lessonPracticeAnswerToan3_(btn, value, answer) {
    const wrap = btn.closest('.rounded-2xl');
    const fb = wrap?.querySelector('.lesson-practice-feedback');
    wrap?.querySelectorAll('button').forEach(b=>b.disabled=true);
    if (String(value)===String(answer)) {
        btn.classList.add('bg-emerald-100','border-emerald-300','text-emerald-700');
        if (fb) { fb.textContent='✅ Chính xác!'; fb.className='lesson-practice-feedback mt-2 text-sm font-black text-emerald-600'; }
    } else {
        btn.classList.add('bg-rose-100','border-rose-300','text-rose-700');
        if (fb) { fb.textContent=`Chưa đúng. Đáp án đúng: ${answer}`; fb.className='lesson-practice-feedback mt-2 text-sm font-black text-rose-600'; }
    }
}
function openBaiHocPageToan3_(idx) { activeBaiHocToan3_.pageIndex=Math.max(0,Number(idx)||0); renderBaiHocDetailToan3_(); }
function renderBaiHocBottomNavToan3_(idx,count) {
    const prev=idx>0?`<button onclick="openBaiHocPageToan3_(${idx-1})" class="px-4 py-2.5 rounded-xl bg-white border border-pink-200 text-purple-700 font-black text-sm">← Trang trước</button>`:'<span></span>';
    const next=idx<count-1?`<button onclick="openBaiHocPageToan3_(${idx+1})" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black text-sm shadow-sm">Trang tiếp →</button>`:`<button onclick="openRoadmap(${activeBaiHocToan3_.lesson?.semester||1})" class="px-5 py-2.5 rounded-xl bg-emerald-500 text-white font-black text-sm shadow-sm">Làm Bài tập →</button>`;
    return `<div class="flex items-center justify-between gap-3 pt-4 mt-4 border-t border-pink-100">${prev}<div class="text-sm font-black text-slate-400">${idx+1}/${count}</div>${next}</div>`;
}
function speakLessonTeacherToan3_() {
    const lesson=activeBaiHocToan3_?.lesson; const page=lesson?.pages?.[activeBaiHocToan3_.pageIndex||0];
    const text=String(page?.teacher_script||page?.intro||'').trim(); if(text) speakVietnamese(text,0.92);
}
function backToBaiHocHubToan3_() { clickLessonModule(Number(activeBaiHocToan3_.lesson?.semester||1)); }

function clickProgressOrExam(type) {
    if (type==='progress') { if(!requirePremium('Bài tập')) return; openRoadmap(1); }
    else if (type==='exam') { if(!requirePremium('Đấu trường đề thi')) return; openExamHub(); }
}

async function openRoadmap(semesterNumber = 1) {
    setAppShellRootMode_(true);
    setMainTabActive_('exercises');
    inMiniGameFlow = false;
    stopSpeaking();
    if (!requirePremium('Bài tập')) return;
    activeExamContext=null; activeTopicId=null; pendingTopicQuiz=null;
    updateNavTabs('Bài tập','✏️',null);
    switchAppView('view-roadmap');
    showLoadingOverlay('Đang mở Bài tập...');
    try {
        const data=await loadBaiHocToan3Data_();
        renderBaiTapGridToan3_(data,semesterNumber);
    } catch(err) { showAppNotice(`Không thể mở Bài tập: ${err.message}`); }
    finally { hideLoadingOverlay(); }
}

function renderBaiTapGridToan3_(data, semesterNumber) {
    semesterSwitchButtonsToan3_('roadmap-semester-tabs',semesterNumber,'openRoadmap');
    const container=document.getElementById('roadmap-svg-container'); if(!container)return;
    const unlocked=getUnlockedBaiTapToan3_();
    const arr=(data?.bai_tap||[]).filter(x=>Number(x.semester)===Number(semesterNumber));
    container.className='w-full bg-gradient-to-b from-pink-50/30 to-purple-50/30 rounded-2xl border-2 border-pink-100 p-3 md:p-4';
    const palette=[['#fff7ed','#fdba74','#c2410c'],['#fefce8','#fde047','#a16207'],['#f0fdf4','#86efac','#15803d'],['#eff6ff','#93c5fd','#1d4ed8'],['#faf5ff','#d8b4fe','#7e22ce'],['#fff1f2','#fda4af','#be123c']];
    container.innerHTML=`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 md:gap-3">${arr.map((bt,idx)=>{
        const open=Number(bt.bai)<=unlocked; const c=palette[idx%palette.length];
        return `<button onclick="${open?`selectBaiTapToan3_(${bt.bai})`:`showLockedBaiTapToan3_(${bt.bai})`}" class="relative text-left min-h-[116px] rounded-2xl border-2 p-3 transition-all ${open?'hover:-translate-y-0.5 hover:shadow-lg':'opacity-55'} flex flex-col" style="background:${open?c[0]:'#f8fafc'};border-color:${open?c[1]:'#cbd5e1'}"><span class="absolute top-2 right-2">${open?'':'🔒'}</span><div class="font-black text-base md:text-lg pr-5" style="color:${open?c[2]:'#94a3b8'}">Bài ${bt.bai}</div><div class="text-[10px] font-black text-slate-400">SGK bài ${bt.source_lesson_no}</div><div class="text-[13px] font-extrabold ${open?'text-slate-700':'text-slate-400'} mt-1 leading-snug">${escapeHtml(bt.title||'')}</div><div class="text-[11px] mt-auto pt-2 ${open?'text-emerald-600':'text-slate-400'} font-black">${open?'20 câu / lượt':'Cần ≥80% bài trước'}</div></button>`;
    }).join('')}</div>`;
}
function showLockedBaiTapToan3_(bai) { showAppNotice(`🔒 Bài tập ${bai} chưa mở. Bé cần đạt từ 80% ở Bài tập trước để mở khóa nhé!`); }

function normalizeEmbeddedQuestionToan3_(q) {
    const raw={...q,sub_code:q.sub_id||q.sub_code,tag:q.skill_tag||q.competency||q.tag};
    const n=normalizeQuestion(raw);
    n.sub_id=String(q.sub_id||n.sub_topic||'');
    n.lesson_refs=Array.isArray(q.lesson_refs)?q.lesson_refs.map(String):[];
    n.skill_tag=q.skill_tag||q.competency||n.skill_tag||'TOAN3_C1';
    return n;
}
function getQuestionsForBaiTapToan3_(bt) {
    if(!bt)return[];
    const embedded=Array.isArray(bt.embedded_questions)?bt.embedded_questions.map(normalizeEmbeddedQuestionToan3_).filter(Boolean):[];
    let candidate=shuffleArray(embedded).slice(0,Math.min(Number(bt.candidate_pool_target||30),embedded.length));
    if(candidate.length<20 && allQuestionsFlatCache){
        const subIds=(bt.sub_ids||[]).map(String);
        const fallback=allQuestionsFlatCache.filter(q=>subIds.includes(String(q.sub_topic||q.sub_id||'')) && !candidate.some(x=>String(x.question_id)===String(q.question_id)));
        candidate=candidate.concat(shuffleArray(fallback).slice(0,30-candidate.length));
    }
    const by={}; candidate.forEach(q=>{const m=String(q.skill_tag||'TOAN3_C1').match(/C([1-6])/i);const k=m?`C${m[1]}`:'C1';(by[k]||=[]).push(q);});
    const out=[],used=new Set(); let progress=true;
    while(out.length<20&&progress){progress=false;for(const k of ['C1','C2','C3','C4','C5','C6']){const a=by[k]||[];while(a.length&&used.has(a[0].question_id))a.shift();if(a.length&&out.length<20){const q=a.shift();used.add(q.question_id);out.push(q);progress=true;}}}
    for(const q of candidate){if(out.length>=20)break;if(!used.has(q.question_id)){used.add(q.question_id);out.push(q);}}
    return shuffleArray(out.slice(0,20));
}
async function selectBaiTapToan3_(bai) {
    setAppShellRootMode_(false);
    stopSpeaking(); showLoadingOverlay(`Đang chuẩn bị Bài tập ${bai}...`);
    try {
        const data=await loadBaiHocToan3Data_(); const bt=(data?.bai_tap||[]).find(x=>Number(x.bai)===Number(bai));
        if(!bt)throw new Error('Không tìm thấy Bài tập'); if(!isBaiTapUnlockedToan3_(data,bai)){showLockedBaiTapToan3_(bai);return;}
        try{await fetchAllTopicsData();}catch(e){}
        const qs=getQuestionsForBaiTapToan3_(bt); if(qs.length<20)throw new Error(`Kho câu hỏi phù hợp hiện chỉ có ${qs.length} câu; cần tối thiểu 20 câu.`);
        activeRoadmapContext={week:Number(bai),bai:Number(bai),semester:Number(bt.semester||1),topicId:`BT${bai}`,chuDe:`Bài tập ${bai} · ${bt.title||''}`};
        pendingTopicQuiz=null; activeExamContext=null; updateNavTabs('Bài tập','✏️',`Bài ${bai}`);
        startTopicQuiz(bai,activeRoadmapContext.chuDe,qs,null);
    } catch(err){showAppNotice(`Không thể mở Bài tập: ${err.message}`);} finally{hideLoadingOverlay();}
}

// Giữ API/sheet backend hiện tại để không đổi Apps Script ở bước này.
// Trường Tuan/week được dùng như số Bài tập trong kiến trúc mới.
async function saveWeeklyProgressToSheet(percent, starCount, scoreVal) {
    if(!activeRoadmapContext||!currentUser||currentUser.isGuest)return;
    const {week,bai,topicId,chuDe}=activeRoadmapContext; const baiSo=Number(bai||week);
    const thoiGianLamBai=quizStartTime?formatDuration(Date.now()-quizStartTime):''; const scoreThang10=Number(scoreVal??0).toFixed(1);
    const skillCorrect={C1:0,C2:0,C3:0,C4:0,C5:0,C6:0},skillTotal={C1:0,C2:0,C3:0,C4:0,C5:0,C6:0};
    quizAnsweredLog.forEach(item=>{const m=String(item.skill_tag||'TOAN3_C1').toUpperCase().match(/C([1-6])/);const tag=m?`C${m[1]}`:'C1';skillTotal[tag]++;if(item.isCorrect)skillCorrect[tag]++;});
    const payload={student_id:currentUser.maHS,maHS:currentUser.maHS,token:currentUser.token,hoTen:currentUser.hoTen,lop:currentUser.lop,sheetName:'LichSuTienTrinhTuan',week_completed:baiSo,tuan:baiSo,chuDe,topicId,score:scoreThang10,stars_earned:starCount,tongCauHoi:activeQuestionsList.length,soCauDung:quizAnsweredLog.filter(x=>x.isCorrect).length,percent,thoiGianLamBai,wrongQuestions:quizWrongAnswers};
    Object.keys(SKILL_TAXONOMY).forEach(k=>{payload[SKILL_TAXONOMY[k].sheetCol]=skillCorrect[k];payload[SKILL_TAXONOMY[k].totalCol]=skillTotal[k];});
    try{
        await callAppsScript('saveWeeklyProgress',payload);
        if(percent>=80){const data=await loadBaiHocToan3Data_();const nextBai=getNextBaiTapToan3_(data,baiSo);if(nextBai&&nextBai>getUnlockedBaiTapToan3_()){saveUnlockedBaiTapToan3_(nextBai);setTimeout(()=>{if(typeof showAppNotice==='function')showAppNotice(`🎉 Chúc mừng bé đạt ${percent}%! Bài tập ${nextBai} đã được mở khóa.`);},500);}}
    }catch(e){}
}

// Điều hướng trở lại đúng học kỳ sau khi làm Bài tập.
function returnToTopicLecture() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    if (Number(activeTopicId) === 12) {
        openMathLab();
    } else if (activeExamContext) {
        openExamHub();
    } else if (activeRoadmapContext) {
        openRoadmap(Number(activeRoadmapContext.semester || 1));
    } else if (pendingTopicQuiz) {
        // Mục 1 và Mục 2 dùng hub học để hiểu riêng.
        if (Number(pendingTopicQuiz.topicNum) === 1) {
            return showNumberSenseHub_(pendingTopicQuiz);
        }
        if (Number(pendingTopicQuiz.topicNum) === 2) {
            return showAddSubHub_(pendingTopicQuiz);
        }
        if (Number(pendingTopicQuiz.topicNum) === 3) {
            return showMulDivHub_(pendingTopicQuiz);
        }
        if (Number(pendingTopicQuiz.topicNum) === 4) {
            return showGeometryHub_(pendingTopicQuiz);
        }
        if (Number(pendingTopicQuiz.topicNum) === 5) {
            return showMeasureHub_(pendingTopicQuiz);
        }
        updateNavTabs(
            pendingTopicQuiz.topicName,
            TOPICS_CONFIG.find(t => t.id === pendingTopicQuiz.topicNum)?.icon,
            null
        );
        switchAppView('view-lecture');
    } else if (inMiniGameFlow) {
        openMiniGameHub();
    } else if (activeBaiHocToan3_?.lesson) {
        renderBaiHocDetailToan3_();
    }
}
function handleNextExamFromReport() {
    stopSpeaking();
    if (activeRoadmapContext) {
        const sem = Number(activeRoadmapContext.semester || 1);
        activeRoadmapContext = null;
        openRoadmap(sem);
    } else if (activeExamContext) {
        activeExamContext = null;
        openExamHub();
    } else {
        goHome();
    }
}


// ============================================================
// TOAN 3 APP SHELL 2026: banner chinh o root tab, banner phu + breadcrumb khi vao noi dung.
// Presentation only; khong doi nghiep vu/du lieu.
// ============================================================
let appShellRootMode_ = true;
function setAppShellRootMode_(isRoot) {
    appShellRootMode_ = !!isRoot;
    const mainBanner = document.getElementById('app-main-banner');
    const contextBanner = document.getElementById('app-context-banner');
    if (mainBanner) mainBanner.classList.toggle('hidden', !appShellRootMode_);
    if (contextBanner) contextBanner.classList.toggle('hidden', appShellRootMode_);
}

// ============================================================
// UI 6 TAB + PINK/PURPLE THEME - TOAN 3
// Bám giao diện Toán 2; giữ nguyên mascot Cô Ong Vàng và logic Toán 3.
// ============================================================
function setMainTabActive_(tabName) {
    document.querySelectorAll('.main-module-tab').forEach(btn => btn.classList.toggle('is-active', btn.dataset.tab === tabName));
}
function getActiveMainModuleMeta_() {
    const active=document.querySelector('.main-module-tab.is-active')?.dataset?.tab||'discover';
    const map={discover:{label:'Khám phá',icon:'🧭',target:'discover'},lessons:{label:'Bài học',icon:'📖',target:'lessons'},exercises:{label:'Bài tập',icon:'✏️',target:'exercises'},review:{label:'Ôn tập',icon:'🧠',target:'review'},exams:{label:'Đề thi',icon:'🏆',target:'exams'},games:{label:'Mini games',icon:'🎮',target:'games'}};
    return map[active]||map.discover;
}
function refreshMainTabLocksToan3_(){
    const unlocked=canAccessPremium();
    ['bai-hoc-lock-icon','roadmap-lock-icon','review-lock-icon','exam-lock-icon','minigame-lock-icon'].forEach(id=>document.getElementById(id)?.classList.toggle('hidden',unlocked));
}
function openMainTab(tabName){
    if(tabName!=='games') stopActiveMiniGame_();
    stopSpeaking(); clearInterval(quizTimerInterval);
    if(tabName==='discover'){goHome();return;}
    if(tabName==='lessons'){if(!requirePremium('Bài học'))return;setMainTabActive_('lessons');clickLessonModule(1);return;}
    if(tabName==='exercises'){if(!requirePremium('Bài tập'))return;setMainTabActive_('exercises');openRoadmap(1);return;}
    if(tabName==='review'){
        if(!requirePremium('Ôn tập'))return; setMainTabActive_('review');
        // Toán 3 hiện vẫn dùng chuyên mục ôn tập trong kho học liệu.
        const reviewTopic=TOPICS_CONFIG.find(t=>/ôn tập/i.test(String(t.title||'')));
        if(reviewTopic){openTopic(reviewTopic.id,reviewTopic.title,reviewTopic.icon);setMainTabActive_('review');setAppShellRootMode_(true);}
        else showAppNotice('Phần Ôn tập đang được cập nhật.');
        return;
    }
    if(tabName==='exams'){if(!requirePremium('Đấu trường đề thi'))return;setMainTabActive_('exams');openExamHub();return;}
    if(tabName==='games'){if(!requirePremium('Mini Game'))return;setMainTabActive_('games');openMiniGameHub();return;}
    goHome();
}
function updateNavTabs(level2Title, level2Icon, level3Title, level4Title){
    const tab2=document.getElementById('header-level2-tab'),tab3=document.getElementById('header-level3-tab'),tab4=document.getElementById('header-level4-tab');
    const meta=getActiveMainModuleMeta_();
    if(!level2Title){
        [tab2,tab3,tab4].forEach(el=>{if(el){el.classList.add('hidden');el.classList.remove('flex');}});
        return;
    }
    if(tab2){const t2=document.getElementById('header-level2-title');if(t2)t2.textContent=level2Title;const i2=document.getElementById('header-level2-icon');if(i2)i2.textContent=level2Icon||meta.icon;const b=tab2.querySelector('button');if(b)b.setAttribute('onclick','returnToTopicLecture()');tab2.classList.remove('hidden');tab2.classList.add('flex');}
    if(tab3){const t3=document.getElementById('header-level3-title');if(level3Title){if(t3)t3.textContent=level3Title;tab3.classList.remove('hidden');tab3.classList.add('flex');}else{tab3.classList.add('hidden');tab3.classList.remove('flex');}}
    if(tab4){const t4=document.getElementById('header-level4-title');if(level4Title){if(t4)t4.textContent=level4Title;tab4.classList.remove('hidden');tab4.classList.add('flex');}else{tab4.classList.add('hidden');tab4.classList.remove('flex');}}
}
function goHome(){
    stopActiveMiniGame_();
    setAppShellRootMode_(true);
    stopSpeaking();clearInterval(quizTimerInterval);inMiniGameFlow=false;activeTopicId=null;activeExamContext=null;activeRoadmapContext=null;pendingTopicQuiz=null;
    setMainTabActive_('discover');updateNavTabs(null,null,null);renderDashboardGrid();switchAppView('view-dashboard-grid');refreshMainTabLocksToan3_();
}
function clickLessonModule(semesterNumber=1){
    setAppShellRootMode_(true);
    if(!requirePremium('Bài học'))return;inMiniGameFlow=false;stopSpeaking();setMainTabActive_('lessons');activeExamContext=null;activeRoadmapContext=null;activeTopicId=null;pendingTopicQuiz=null;updateNavTabs(null,null,null);switchAppView('view-bai-hoc-hub');showLoadingOverlay('Đang mở Bài học...');loadBaiHocToan3Data_().then(data=>renderBaiHocGridToan3_(data,semesterNumber)).catch(err=>showAppNotice(`Không thể mở Bài học: ${err.message}`)).finally(()=>hideLoadingOverlay());
}
function semesterSwitchButtonsToan3_(hostId,activeSem,fnName){const host=document.getElementById(hostId);if(!host)return;host.innerHTML=[1,2].map(s=>`<button onclick="${fnName}(${s})" class="semester-switch-btn ${Number(s)===Number(activeSem)?'is-active':'is-inactive'}">Học kỳ ${s}</button>`).join('');}
function renderBaiHocGridToan3_(data,semesterNumber){
    semesterSwitchButtonsToan3_('lesson-semester-tabs',semesterNumber,'clickLessonModule');
    const container=document.getElementById('bai-hoc-grid-container');if(!container)return;
    const arr=(data?.bai_hoc||[]).filter(x=>Number(x.semester)===Number(semesterNumber));
    const palette=[
      {bg:'linear-gradient(145deg,#fff1f7 0%,#fdf4ff 100%)',border:'#f9a8d4',title:'#be185d'},
      {bg:'linear-gradient(145deg,#faf5ff 0%,#f5f3ff 100%)',border:'#d8b4fe',title:'#7e22ce'},
      {bg:'linear-gradient(145deg,#fdf2f8 0%,#fff7ed 100%)',border:'#fbcfe8',title:'#db2777'},
      {bg:'linear-gradient(145deg,#f5f3ff 0%,#fdf2f8 100%)',border:'#c4b5fd',title:'#6d28d9'},
      {bg:'linear-gradient(145deg,#fff7fb 0%,#fce7f3 100%)',border:'#f9a8d4',title:'#c026d3'},
      {bg:'linear-gradient(145deg,#faf5ff 0%,#fff1f7 100%)',border:'#e9d5ff',title:'#9333ea'}];
    container.style.background='linear-gradient(135deg,#fff7fb 0%,#faf5ff 50%,#fdf2f8 100%)';container.style.borderColor='#f0abfc';
    container.innerHTML=`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 md:gap-3">${arr.map((bh,idx)=>{const c=palette[idx%palette.length];return `<button onclick="selectBaiHocToan3_(${bh.bai})" class="text-left min-h-[96px] md:min-h-[104px] rounded-2xl border-2 p-3 md:p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg flex flex-col items-start justify-start" style="background:${c.bg};border-color:${c.border};box-shadow:0 4px 12px rgba(168,85,247,.08)"><div class="font-black text-base md:text-[17px] leading-tight" style="color:${c.title}">Bài ${bh.bai}</div><div class="text-[13px] md:text-[14px] font-extrabold text-slate-700 mt-2 leading-snug text-left w-full">${escapeHtml(bh.source_title||bh.title||'')}</div></button>`}).join('')}</div>`;
}
function renderBaiTapGridToan3_(data,semesterNumber){
    semesterSwitchButtonsToan3_('roadmap-semester-tabs',semesterNumber,'openRoadmap');const container=document.getElementById('roadmap-svg-container');if(!container)return;const unlocked=getUnlockedBaiTapToan3_();const arr=(data?.bai_tap||[]).filter(x=>Number(x.semester)===Number(semesterNumber));
    container.className='w-full rounded-3xl border-2 p-3 md:p-4 shadow-sm';container.style.background='linear-gradient(135deg,#fff7fb 0%,#faf5ff 50%,#fdf2f8 100%)';container.style.borderColor='#f0abfc';
    const palette=[['#fff1f7','#f9a8d4','#be185d'],['#faf5ff','#d8b4fe','#7e22ce'],['#fdf2f8','#fbcfe8','#db2777'],['#f5f3ff','#c4b5fd','#6d28d9']];
    container.innerHTML=`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 md:gap-3">${arr.map((bt,idx)=>{const open=Number(bt.bai)<=unlocked,c=palette[idx%palette.length];return `<button onclick="${open?`selectBaiTapToan3_(${bt.bai})`:`showLockedBaiTapToan3_(${bt.bai})`}" class="relative text-left min-h-[106px] rounded-2xl border-2 p-3 transition-all ${open?'hover:-translate-y-0.5 hover:shadow-lg':'opacity-55'} flex flex-col" style="background:${open?c[0]:'#f8fafc'};border-color:${open?c[1]:'#cbd5e1'}"><span class="absolute top-2 right-2">${open?'':'🔒'}</span><div class="font-black text-base md:text-[17px] pr-5" style="color:${open?c[2]:'#94a3b8'}">Bài ${bt.bai}</div><div class="text-[13px] md:text-[14px] font-extrabold ${open?'text-slate-700':'text-slate-400'} mt-2 leading-snug">${escapeHtml(bt.title||'')}</div><div class="text-[11px] mt-auto pt-2 ${open?'text-pink-600':'text-slate-400'} font-black">${open?'20 câu':'Cần ≥80% bài trước'}</div></button>`}).join('')}</div>`;
}
function renderBaiHocDetailToan3_(){
    setAppShellRootMode_(false);
    const ctx=activeBaiHocToan3_,lesson=ctx.lesson;if(!lesson)return;switchAppView('view-bai-hoc-detail');setMainTabActive_('lessons');updateNavTabs(`Bài ${lesson.bai}`,'📖',null);
    const meta=document.getElementById('bai-hoc-detail-meta'),title=document.getElementById('bai-hoc-detail-title'),tabs=document.getElementById('bai-hoc-detail-tabs'),body=document.getElementById('bai-hoc-detail-body');
    if(meta)meta.textContent=`Bài ${lesson.bai} · ${lesson.theme||'Toán 3'}`;if(title)title.textContent=lesson.source_title||`Bài ${lesson.bai}`;const pages=Array.isArray(lesson.pages)?lesson.pages:[];
    const labels=['Bài đọc','Câu hỏi','Tổng kết'];
    if(tabs)tabs.innerHTML=pages.map((pg,idx)=>`<button onclick="openBaiHocPageToan3_(${idx})" class="px-3 py-2 rounded-xl border font-black text-sm md:text-base ${idx===ctx.pageIndex?'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-purple-400 shadow-sm':'bg-white text-purple-700 border-purple-200 hover:bg-purple-50'}">${labels[idx]||escapeHtml(pg.title||`Trang ${idx+1}`)}</button>`).join('');
    if(body)body.innerHTML=renderBaiHocPageBodyToan3_(pages[ctx.pageIndex]||{})+renderBaiHocBottomNavToan3_(ctx.pageIndex,pages.length);
}
function enterDashboard(isSilent=false){document.getElementById('screen-dashboard')?.classList.remove('hidden');updateUserInfoBox();resetStars();renderDashboardGrid();renderExamHubGrid();refreshMainTabLocksToan3_();goHome();if(!isSilent&&currentUser&&!currentUser.isGuest){setTimeout(()=>{const template=GREETINGS_STUDENT[Math.floor(Math.random()*GREETINGS_STUDENT.length)];speakVietnamese(template.replace('{name}',currentUser.hoTen),0.96);},350);}}
