// ==========================================
// CẤU HÌNH MỤC KHÁM PHÁ TOÁN 3 & MA TRẬN NĂNG LỰC TOAN3_C1-C6
// ==========================================
const TOPICS_CONFIG = [
    { id: 1, title: "1. Số học", desc: "Số trong phạm vi 100, 1000, so sánh & tia số", icon: "🔢", color: "pink" },
    { id: 2, title: "2. Phép cộng và trừ", desc: "Không nhớ, có nhớ, đặt tính, tên gọi thành phần", icon: "➕", color: "purple" },
    { id: 3, title: "3. Phép nhân và chia", desc: "Ý nghĩa phép nhân/chia, bảng nhân chia 2 và 5", icon: "✖️", color: "indigo" },
    { id: 4, title: "4. Hình học", desc: "Đường thẳng, hình phẳng, khối hình, xếp hình", icon: "📐", color: "amber" },
    { id: 5, title: "5. Đơn vị đo và thời gian", desc: "Độ dài, khối lượng, dung tích, giờ, lịch, tiền", icon: "⏰", color: "emerald" },
    { id: 6, title: "6. Dãy số và quy luật", desc: "Quy luật dãy số, nhóm số, chuỗi hình ảnh IQ", icon: "🔗", color: "cyan" },
    { id: 7, title: "7. Tìm số chưa biết", desc: "Tìm x trong phép cộng, trừ, nhân, chia", icon: "❓", color: "violet" },
    { id: 8, title: "8. Toán có lời văn", desc: "Thêm bớt, nhiều hơn ít hơn, giải 2 bước tính", icon: "📝", color: "rose" },
    { id: 9, title: "9. Thống kê và xác suất", desc: "Kiểm đếm, biểu đồ tranh, khả năng xảy ra", icon: "📊", color: "blue" },
    { id: 10, title: "10. Toán nâng cao", desc: "Tính nhanh, cấu tạo số, hình học & IQ nâng cao", icon: "🧠", color: "yellow" },
    { id: 11, title: "11. Ôn tập", desc: "Ôn tập học kỳ I, học kỳ II và Nhà thông thái nhí", icon: "📚", color: "purple" },
    { id: 12, title: "12. Math Lab – Toán tư duy Mỹ", desc: "Khám phá • Mô hình • Nhiều cách giải", icon: "✨", color: "fuchsia" }
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
        question_text: q.q ?? q.question_text ?? '',
        options: Array.isArray(q.o) ? q.o : (Array.isArray(q.options) ? q.options : []),
        answer: q.a ?? q.answer ?? '',
        hint: q.h ?? q.hint ?? '',
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
        explanation: q.explanation ?? q.h ?? q.hint ?? 'Không có giải thích chi tiết.'
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
        const countLabel = Number(t.id)===12 ? '88 hành trình' : (totalCount > 0 ? `${totalCount} câu` : 'Đang cập nhật');
        const locked = PREMIUM_TOPIC_IDS.has(t.id) && !canAccessPremium();
        const lockHtml = locked ? '<span class="absolute right-3 top-2 text-slate-400 text-sm">🔒</span>' : '';
        html += `
            <div onclick="openTopic(${t.id}, '${t.title.replace(/'/g,"\\'")}', '${t.icon}')" class="relative pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-${t.color}-400 transition-all group min-h-[92px]">
                ${lockHtml}
                <div class="flex items-center space-x-2.5 pr-5">
                    <div class="w-8 h-8 bg-${t.color}-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-${t.color}-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">${t.icon}</div>
                    <h3 class="font-extrabold text-${t.color}-700 text-sm md:text-base leading-tight">${t.title}</h3>
                </div>
                <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-pink-100 text-[11px] font-bold text-gray-500">
                    <span>${t.desc}</span><span class="bg-${t.color}-50 text-${t.color}-600 px-2 py-0.5 rounded-full">${countLabel}</span>
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
        if (!candidates.length) return alert('Đang cập nhật thêm đề thi cho mục này, bé quay lại sau nhé!');

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
        if (!questions.length) return alert('Đề thi này chưa có câu hỏi, bé chọn đề khác nhé!');

        updateNavTabs("12. Đấu trường đề thi", "🏆", examTitle);
        startTopicQuiz(0, examTitle, shuffleArray(questions), null);
    } catch (err) {
        hideLoadingOverlay();
        alert(`Không thể tải đề thi: ${err.message}`);
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
            alert('Đã hết giờ làm bài! Bài thi sẽ được nộp lại nhé bé.');
            showResultScreen();
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
        updateNavTabs(pendingTopicQuiz.topicName, TOPICS_CONFIG.find(t => t.id === pendingTopicQuiz.topicNum)?.icon, null);
        switchAppView('view-lecture');
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
    try{const res=await callAppsScript('adminListAccounts',{token});if(!res.ok)throw new Error(res.error||'Không thể tải dữ liệu');adminAccountsCache=res.accounts||[];renderAdminAccounts(adminAccountsCache);}catch(e){alert(e.message);}finally{hideLoadingOverlay();}
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
async function adminChangeTier(maHS,tier){const token=localStorage.getItem(AUTH_TOKEN_KEY);showLoadingOverlay('Đang cập nhật hạng tài khoản...');try{const r=await callAppsScript('adminSetTier',{token,maHS,tier});if(!r.ok)throw new Error(r.error||'Cập nhật thất bại');await loadAdminAccounts();}catch(e){alert(e.message);}finally{hideLoadingOverlay();}}

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
        .ml-kicker{font-size:.72rem;font-weight:1000;letter-spacing:.18em;text-transform:uppercase;color:#c026d3}
        .ml-track-card,.ml-journey-card{border:2px solid #ead7ff;border-radius:24px;background:rgba(255,255,255,.96);box-shadow:0 4px 14px rgba(99,102,241,.06);transition:.18s ease}.ml-track-card:hover,.ml-journey-card:hover{transform:translateY(-2px);border-color:#d8b4fe;box-shadow:0 10px 24px rgba(168,85,247,.11)}
        .ml-progress{height:7px;border-radius:999px;background:#f1f5f9;overflow:hidden}.ml-progress>i{display:block;height:100%;background:linear-gradient(90deg,#d946ef,#8b5cf6,#38bdf8);border-radius:inherit}
        .ml-teacher{background:linear-gradient(135deg,#fdf4ff,#f5f3ff);border:1.5px solid #e9d5ff;border-radius:20px;padding:12px 14px;color:#6b21a8;font-weight:800;line-height:1.45}
        .ml-prompt{font-weight:1000;color:#0f172a;font-size:clamp(1.05rem,2vw,1.35rem);line-height:1.42}.ml-chip{padding:7px 11px;border-radius:999px;background:#f5f3ff;border:1.5px solid #ddd6fe;color:#6d28d9;font-weight:900}
        .ml-choice{width:100%;min-height:58px;border:2px solid #e2e8f0;border-radius:18px;background:#fff;padding:10px 12px;font-weight:900;color:#334155;text-align:left;transition:.15s ease}.ml-choice:hover{border-color:#c084fc;background:#faf5ff}.ml-choice.is-selected{border-color:#a855f7;background:#f3e8ff;color:#6b21a8;box-shadow:0 0 0 3px rgba(168,85,247,.08)}.ml-choice.is-correct{border-color:#34d399;background:#ecfdf5;color:#047857}.ml-choice.is-wrong{border-color:#fb7185;background:#fff1f2;color:#be123c}
        .ml-base10{display:flex;align-items:flex-end;justify-content:center;gap:9px;flex-wrap:wrap;min-height:96px;padding:12px;border-radius:20px;background:#f8fafc;border:1.5px dashed #cbd5e1}.ml-hundred{width:64px;height:64px;border-radius:8px;border:2px solid #38bdf8;background-color:#e0f2fe;background-image:linear-gradient(#bae6fd 1px,transparent 1px),linear-gradient(90deg,#bae6fd 1px,transparent 1px);background-size:6.4px 6.4px}.ml-ten{width:12px;height:64px;border-radius:5px;border:2px solid #a78bfa;background:repeating-linear-gradient(to bottom,#ede9fe 0 5px,#c4b5fd 5px 6px)}.ml-one{width:15px;height:15px;border-radius:4px;border:2px solid #f59e0b;background:#fef3c7}.ml-block-group{display:flex;align-items:flex-end;gap:4px;flex-wrap:wrap;justify-content:center}
        .ml-counter{display:flex;align-items:center;justify-content:center;gap:9px;padding:9px;border-radius:18px;background:#f8fafc;border:1.5px solid #e2e8f0}.ml-counter button{width:36px;height:36px;border-radius:12px;background:#fff;border:2px solid #ddd6fe;color:#7c3aed;font-size:1.15rem;font-weight:1000}.ml-counter strong{min-width:30px;text-align:center;font-size:1.2rem;color:#312e81}
        .ml-number-line{position:relative;padding:20px 8px 8px}.ml-number-line input[type=range]{width:100%;accent-color:#a855f7}.ml-number-line-labels{display:flex;justify-content:space-between;font-weight:900;color:#64748b;font-size:.8rem}.ml-number-line-value{text-align:center;font-size:1.25rem;font-weight:1000;color:#7e22ce;margin-bottom:4px}
        .ml-dot{width:10px;height:10px;border-radius:50%;background:#a78bfa;display:inline-block;margin:2px}.ml-dotbox{max-width:520px;margin:auto;text-align:center;padding:14px;border-radius:20px;background:#faf5ff;border:1.5px dashed #d8b4fe}.ml-group{display:inline-flex;gap:3px;flex-wrap:wrap;justify-content:center;align-items:center;min-width:62px;min-height:54px;padding:8px;margin:4px;border-radius:16px;background:white;border:1.5px solid #ddd6fe}.ml-array{display:grid;gap:7px;justify-content:center;margin:auto;padding:16px;border-radius:20px;background:#f8fafc;border:1.5px dashed #cbd5e1}.ml-array i{width:15px;height:15px;border-radius:50%;background:#8b5cf6}.ml-sharebox{display:flex;flex-wrap:wrap;gap:4px;align-content:flex-start;justify-content:center;min-width:92px;min-height:80px;padding:10px;border-radius:18px;background:#fff;border:2px solid #c4b5fd}
        .ml-clock{width:150px;height:150px;border-radius:50%;border:7px solid #ddd6fe;background:white;margin:auto;position:relative;box-shadow:inset 0 0 0 2px #f5f3ff}.ml-clock::after{content:'';position:absolute;width:10px;height:10px;border-radius:50%;background:#7c3aed;left:50%;top:50%;transform:translate(-50%,-50%)}.ml-hand{position:absolute;left:50%;bottom:50%;transform-origin:50% 100%;border-radius:999px}.ml-hour{width:5px;height:39px;background:#7c3aed}.ml-minute{width:3px;height:55px;background:#ec4899}.ml-clock-num{position:absolute;font-size:11px;font-weight:900;color:#64748b;transform:translate(-50%,-50%)}
        .ml-calendar{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:5px;max-width:520px;margin:auto}.ml-cal-head{font-size:10px;font-weight:1000;color:#64748b;text-align:center}.ml-cal-day{min-height:42px;border:1.5px solid #e2e8f0;border-radius:11px;background:#fff;font-weight:900;color:#475569}.ml-cal-day.selected{border-color:#a855f7;background:#f3e8ff;color:#7e22ce}.ml-cal-blank{min-height:42px}
        .ml-num-input{width:min(100%,360px);display:block;margin:0 auto;border:2px solid #ddd6fe;border-radius:18px;background:#fff;padding:14px 16px;text-align:center;font-size:1.45rem;font-weight:1000;color:#5b21b6;outline:none}.ml-num-input:focus{border-color:#a855f7;box-shadow:0 0 0 4px rgba(168,85,247,.09)}
        .ml-place-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}.ml-place-cell{border:1.5px solid #ddd6fe;border-radius:17px;background:#faf5ff;padding:9px 6px;text-align:center}.ml-place-label{font-size:.68rem;font-weight:1000;color:#7c3aed;min-height:28px;display:flex;align-items:center;justify-content:center}.ml-place-buttons{display:flex;align-items:center;justify-content:center;gap:5px;margin-top:5px}.ml-place-buttons button{width:31px;height:31px;border-radius:10px;background:#fff;border:1.5px solid #c4b5fd;color:#6d28d9;font-weight:1000}.ml-place-buttons strong{min-width:20px;color:#312e81;font-size:1.05rem}.ml-place-total{text-align:center;margin-top:9px;font-weight:1000;color:#6d28d9}
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
// CHỦ ĐỀ 1: BẢNG CHỮ CÁI TƯƠNG TÁC (1.1 ĐẾN 1.4)
// ==========================================
function openTopic(topicNum, topicName, icon) {
    setAppShellRootMode_(false);
    inMiniGameFlow = false;
    if(PREMIUM_TOPIC_IDS.has(Number(topicNum)) && !requirePremium(topicName)) return;
    stopSpeaking(); activeTopicId=topicNum; activeExamContext=null; activeRoadmapContext=null; updateNavTabs(topicName,icon||'🐝',null);
    if (Number(topicNum) === 12) return openMathLab();
    showLoadingOverlay(`Đang tải chủ đề "${topicName}"...`);
    fetchAllTopicsData().then(topics=>{hideLoadingOverlay();const topicObj=topics.find(t=>Number(t.topic_id)===Number(topicNum));if(!topicObj?.questions?.length)throw new Error('Chủ đề không có câu hỏi nào');showLectureAndSubtopics(topicNum,topicName,topicObj);}).catch(err=>{hideLoadingOverlay();activeTopicId=null;updateNavTabs(null,null,null);alert(`Không thể tải chủ đề: ${err.message}`);});
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
    document.getElementById('lecture-content').textContent = topicObj.lecture_content || topicObj.description || 'Chào mừng bé yêu! Hãy chọn một mục nhỏ bên dưới để bắt đầu luyện tập nhé.';
    document.getElementById('view-lecture').dataset.audioText = topicObj.lecture_audio_text || topicObj.lecture_content || topicObj.description || '';

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
            <button onclick="selectSubtopic(${idx})" class="p-3 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn">
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
        return alert(`Tuần ${weekNum} đang bị khóa. Bé hãy hoàn thành Tuần ${tuanHienTai} đạt từ 80% trở lên để mở khóa nhé!`);
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
        if (!weekQuestions.length) return alert('Tuần này đang chuẩn bị thêm câu hỏi, bé quay lại sau nhé!');

        startTopicQuiz(weekNum, config.name, weekQuestions, null);
    } catch (err) {
        hideLoadingOverlay();
        alert(`Lỗi tải dữ liệu tuần: ${err.message}`);
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
        alert('Bé hãy tìm đáp án đúng để hoàn thành câu này nhé!');
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
            alert(`🎉 Chúc mừng bé đã hoàn thành trọn vẹn 1 vòng luyện tập (${activeQuestionsList.length} câu)!\nBây giờ cô giáo Ong Vàng sẽ xáo trộn ngẫu nhiên để con bước vào vòng luyện tập tiếp theo nhé!`);

            const basePool = practiceCycleRawPool.length ? practiceCycleRawPool : activeQuestionsList;
            activeQuestionsList = shuffleAllQuestionOptions(shuffleArray([...basePool]));
            currentQIndex = 0;
            userAnswers = {};
            wrongAttemptsByQ = {};
            loadQuestion();
        }
    }
}

function triggerSubmitQuizPrompt() {
    const answeredCount = Object.keys(userAnswers).length;
    const total = activeQuestionsList.length;
    if (confirm(`Bé đã làm ${answeredCount}/${total} câu. Bé có chắc chắn muốn nộp bài thi ngay không?`)) {
        showResultScreen();
    }
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
                setTimeout(() => alert(`🎉 Chúc mừng bé đạt ${percent}% điểm! Tuần ${nextWeek} đã được mở khóa trên bản đồ!`), 500);
            }
        }
    } catch (e) {}
}

async function openHistoryModal(sheetName = 'LichSuTienTrinhTuan') {
    if (!currentUser || currentUser.isGuest) {
        return alert('Bé vui lòng đăng nhập để xem lịch sử tiến trình nhé!');
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
            alert(res.error || 'Không thể tải lịch sử - bé đăng nhập lại nhé!');
            return;
        }
        const rows = (res && res.history) ? res.history : [];
        renderHistoryReport(rows, sheetName);
    } catch (err) {
        hideLoadingOverlay();
        alert('Không thể tải lịch sử: ' + err.message);
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
if ('serviceWorker' in navigator) { window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {})); }
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
        typeof showAppNotice==='function' ? showAppNotice(`Không thể mở Bài học: ${err.message}`) : alert(err.message);
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
        typeof showAppNotice==='function' ? showAppNotice(`Không thể mở Bài học: ${err.message}`) : alert(err.message);
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
    } catch(err) { typeof showAppNotice==='function' ? showAppNotice(`Không thể mở Bài tập: ${err.message}`) : alert(err.message); }
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
function showLockedBaiTapToan3_(bai) { typeof showAppNotice==='function' ? showAppNotice(`🔒 Bài tập ${bai} chưa mở. Bé cần đạt từ 80% ở Bài tập trước để mở khóa nhé!`) : alert('Bài tập chưa mở'); }

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
    } catch(err){typeof showAppNotice==='function'?showAppNotice(`Không thể mở Bài tập: ${err.message}`):alert(err.message);} finally{hideLoadingOverlay();}
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
        updateNavTabs(pendingTopicQuiz.topicName, TOPICS_CONFIG.find(t => t.id === pendingTopicQuiz.topicNum)?.icon, null);
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
