// ==========================================
// CẤU HÌNH 11 MỤC KHO HỌC LIỆU & MA TRẬN NĂNG LỰC TOAN_C1-C6 (TOÁN LỚP 2)
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
    { id: 11, title: "11. Ôn tập", desc: "Ôn tập học kỳ I, học kỳ II và Nhà thông thái nhí", icon: "📚", color: "purple" }
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
    C1: { code: 'C1', sheetCol: 'C1_NhanBiet', totalCol: 'C1_NhanBiet_Tong', name: 'Nhận biết Số và Hình học trực quan', advice: 'Cần ôn lại cách đọc viết, so sánh, làm tròn số phạm vi 100.000, số La Mã, và nhận diện điểm giữa/trung điểm, hình tròn, góc vuông, khối lập phương/khối hộp.' },
    C2: { code: 'C2', sheetCol: 'C2_PhepTinh', totalCol: 'C2_PhepTinh_Tong', name: 'Phép tính và Tính nhẩm thuần túy', advice: 'Rèn luyện thêm kỹ năng đặt tính rồi tính cộng/trừ/nhân/chia và tính nhẩm nhanh với số tròn chục, tròn trăm, tròn nghìn.' },
    C3: { code: 'C3', sheetCol: 'C3_DoLuong', totalCol: 'C3_DoLuong_Tong', name: 'Đo lường, Thời gian & Thống kê Xác suất', advice: 'Luyện tập thêm về quy đổi mm/g/ml, xem đồng hồ chính xác từng phút, đọc nhiệt kế, đọc bảng thống kê và nhận định khả năng xảy ra của sự kiện.' },
    C4: { code: 'C4', sheetCol: 'C4_BieuThuc', totalCol: 'C4_BieuThuc_Tong', name: 'Quy luật, Biểu thức & Ẩn số', advice: 'Cần luyện thêm về tính giá trị biểu thức có/không dấu ngoặc, các dạng bài tìm x và phát hiện quy luật dãy số.' },
    C5: { code: 'C5', sheetCol: 'C5_GiaiToan', totalCol: 'C5_GiaiToan_Tong', name: 'Giải Toán có lời văn - Đọc hiểu ngữ cảnh', advice: 'Tăng cường đọc hiểu ngữ cảnh bài toán đố, luyện gấp/giảm số lần và giải toán 2 bước tính dạng "Rút về đơn vị".' },
    C6: { code: 'C6', sheetCol: 'C6_TuDuy', totalCol: 'C6_TuDuy_Tong', name: 'Tư duy Toán nâng cao & IQ Hình học', advice: 'Rèn kỹ năng tính chu vi, diện tích hình phẳng và giải các bài toán tư duy logic (toán trồng cây, tuổi tác, đếm hình phức tạp).' }
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
    return {
        question_id: q.id ?? q.question_id ?? q.question_no ?? 0,
        sub_topic: subCode,
        sub_topic_label: String(q.sub ?? q.sub_code ?? subCode).trim(),
        week: q.week ?? q.w ?? null,
        question_text: q.q ?? q.question_text ?? '',
        options: Array.isArray(q.o) ? q.o : (Array.isArray(q.options) ? q.options : []),
        answer: q.a ?? q.answer ?? '',
        hint: q.h ?? q.hint ?? '',
        image_url: q.img ?? q.image_url ?? '',
        audio_text: q.aud ?? q.audio_text ?? '',
        reading_title: q.r_title ?? q.reading_title ?? '',
        reading_passage: q.r_passage ?? q.reading_passage ?? q.passage_text ?? '',
        skill_tag: q.skill_tag ?? q.tag ?? 'TOAN_C1',
        diem: Number(q.diem ?? q.score ?? 0.5),
        explanation: q.explanation ?? q.h ?? 'Không có giải thích chi tiết.'
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

// Kho học liệu Toán 2 là MẢNG PHẲNG câu hỏi (mỗi câu tự mang "sub": "X.Y" và "tag": "TOAN_Cx"),
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
    
    let topicsData = [];
    try { topicsData = await fetchAllTopicsData(); } catch (e) {}

    let html = '';
    TOPICS_CONFIG.forEach(t => {
        const topicObj = topicsData.find(item => Number(item.topic_id) === Number(t.id));
        const totalCount = topicObj && topicObj.questions ? topicObj.questions.length : 0;
        const countLabel = totalCount > 0 ? `${totalCount} câu` : 'Đang cập nhật';

        const iconHtml = t.isCustomTextIcon 
            ? `<div class="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center text-[11px] font-black text-orange-600 shadow-inner group-hover:scale-110 transition-transform shrink-0 tracking-tight">S/X</div>`
            : `<div class="w-8 h-8 bg-${t.color}-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-${t.color}-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">${t.icon}</div>`;

        html += `
            <div onclick="openTopic(${t.id}, '${t.title}', '${t.icon}')" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-${t.color}-400 transition-all group min-h-[92px]">
                <div class="flex items-center space-x-2.5">
                    ${iconHtml}
                    <h3 class="font-extrabold text-${t.color}-700 text-sm md:text-base leading-tight">${t.title}</h3>
                </div>
                <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-yellow-100 text-[11px] font-bold text-gray-500">
                    <span>${t.desc}</span>
                    <span class="bg-${t.color}-50 text-${t.color}-600 px-2 py-0.5 rounded-full">${countLabel}</span>
                </div>
            </div>
        `;
    });

    let totalExamsCount = 3;
    try {
        const examData = await loadExamDataFile('de_thi_toan_3.json');
        if (examData && examData.exams) totalExamsCount = examData.exams.length;
    } catch (e) {}

    html += `
        <div onclick="openExamHub()" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-amber-400 transition-all group bg-gradient-to-br from-white to-amber-50/50 min-h-[92px]">
            <div class="flex items-center space-x-2.5">
                <div class="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-amber-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">🏆</div>
                <h3 class="font-extrabold text-amber-700 text-sm md:text-base leading-tight">12. Đấu trường đề thi</h3>
            </div>
            <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-amber-100 text-[11px] font-bold text-gray-500">
                <span>HK1, HK2, HSG</span>
                <span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">${totalExamsCount} đề thi</span>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

async function startRandomExam(categoryKey) {
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

        activeExamContext = { categoryKey, examIndex, examTitle };
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
    quizRemainingSeconds = 40 * 60;
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
    stopSpeaking();
    activeExamContext = null;
    activeRoadmapContext = null;
    activeTopicId = null;
    pendingTopicQuiz = null;
    updateNavTabs("12. Đấu trường đề thi", "🏆", null);
    switchAppView('view-exam-hub');
    showLoadingOverlay("Đang tải kho đề thi...");
    renderExamHubGrid().finally(() => hideLoadingOverlay());
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
        <div class="bg-yellow-50/70 p-5 rounded-3xl border-2 border-yellow-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">🔢</div>
                <h3 class="font-extrabold text-yellow-600 text-lg mb-1">Học kỳ 1</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK1</p>
                <span class="inline-block bg-yellow-100 text-yellow-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK1} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky1')" class="w-full py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHK1')" class="w-full py-2 bg-white text-yellow-700 border border-yellow-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-yellow-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-orange-50/70 p-5 rounded-3xl border-2 border-orange-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">⭐</div>
                <h3 class="font-extrabold text-orange-600 text-lg mb-1">Học kỳ 2</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK2</p>
                <span class="inline-block bg-orange-100 text-orange-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK2} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky2')" class="w-full py-2.5 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHK2')" class="w-full py-2 bg-white text-orange-700 border border-orange-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-orange-50">
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
                <button onclick="startRandomExam('hsg')" class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
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
    if (activeExamContext) {
        openExamHub();
    } else if (activeRoadmapContext) {
        openRoadmap();
    } else if (pendingTopicQuiz) {
        updateNavTabs(pendingTopicQuiz.topicName, TOPICS_CONFIG.find(t => t.id === pendingTopicQuiz.topicNum)?.icon, null);
        switchAppView('view-lecture');
    }
}

function switchAppView(viewId) {
    stopSpeaking();
    ['view-dashboard-grid', 'view-lecture', 'view-quiz', 'view-roadmap', 'view-exam-hub', 'view-result'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === viewId) el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
}

function goHome() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
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
    document.getElementById('tab-btn-login').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${isLogin ? 'bg-white text-yellow-600 shadow-sm' : 'text-gray-400'}`;
    document.getElementById('tab-btn-register').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${!isLogin ? 'bg-white text-yellow-600 shadow-sm' : 'text-gray-400'}`;
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
    const maHSInput = document.getElementById('login-mahs');
    const maPinInput = document.getElementById('login-mapin');
    const maHS = (maHSInput?.value || '').trim().toUpperCase();
    const maPin = (maPinInput?.value || '').trim();

    if (!maHS || !maPin) {
        const msg = 'Bé nhập đủ mã ID và mã PIN nhé!';
        showAuthError(msg);
        alert(msg);
        return;
    }

    const btn = document.getElementById('btn-do-login');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng nhập...';

    try {
        const result = await callAppsScript('login', { maHS, maPin });
        if (!result.ok) {
            const errMsg = result.error || 'Mã ID thẻ học sinh hoặc mã PIN không đúng!';
            showAuthError(errMsg);
            alert(errMsg);
            return;
        }
        currentUser = { ...result.student, isGuest: false };
        localStorage.setItem('tv1_mahs', maHS);
        localStorage.setItem('tv1_mapin', maPin);
        enterDashboard();
    } catch (err) {
        const connErr = 'Lỗi kết nối máy chủ: ' + err.message;
        showAuthError(connErr);
        alert(connErr);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-right-to-bracket mr-1"></i> Đăng nhập';
    }
}

async function doRegister() {
    hideAuthError();
    const hoTen = document.getElementById('reg-hoten').value.trim();
    const ngaySinhRaw = document.getElementById('reg-ngaysinh').value;
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const soThuTu = document.getElementById('reg-stt').value.trim();
    const maPin = document.getElementById('reg-mapin').value.trim();

    if (!hoTen || !ngaySinhRaw || !lop || !soThuTu || !maPin) {
        const msg = 'Bé điền đủ tất cả các ô có dấu * nhé!';
        showAuthError(msg);
        alert(msg);
        return;
    }
    if (!/^\d{4}$/.test(maPin)) {
        const msg = 'Mã PIN phải gồm đúng 4 chữ số!';
        showAuthError(msg);
        alert(msg);
        return;
    }

    const [y, m, d] = ngaySinhRaw.split('-');
    const ngaySinh = `${d}-${m}-${y.slice(2)}`;
    const btn = document.getElementById('btn-do-register');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng ký...';

    try {
        const result = await callAppsScript('register', { hoTen, ngaySinh, lop, soThuTu, maPin });
        if (!result.ok) {
            showAuthError(result.error);
            alert(result.error);
            return;
        }
        alert(`Đã gửi đăng ký thành công, vui lòng chờ Admin duyệt! Mã ID của bé là: ${result.student.maHS}`);
        document.getElementById('login-mahs').value = result.student.maHS;
        switchAuthTab('login');
    } catch (err) {
        const connErr = 'Lỗi kết nối: ' + err.message;
        showAuthError(connErr);
        alert(connErr);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-user-plus mr-1"></i> Đăng ký ngay';
    }
}

async function tryAutoLogin() {
    const maHS = localStorage.getItem('tv1_mahs');
    const maPin = localStorage.getItem('tv1_mapin');
    if (!maHS || !maPin) return;

    // Ẩn ngay màn hình đăng nhập và hiện loading, tránh hiện "chớp" màn hình đăng nhập
    // rồi mới chuyển sang trang chủ khi đã có sẵn thông tin đăng nhập.
    const loginScreen = document.getElementById('screen-login');
    if (loginScreen) loginScreen.classList.add('hidden');
    showLoadingOverlay('Đang đăng nhập lại cho bé...');

    try {
        const res = await callAppsScript('login', { maHS: maHS.toUpperCase(), maPin });
        if (res.ok) {
            currentUser = { ...res.student, isGuest: false };
            enterDashboard(true);
        } else {
            if (loginScreen) loginScreen.classList.remove('hidden');
        }
    } catch (e) {
        if (loginScreen) loginScreen.classList.remove('hidden');
    } finally {
        hideLoadingOverlay();
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('tv1_mahs');
    localStorage.removeItem('tv1_mapin');
    document.getElementById('screen-dashboard').classList.add('hidden');
    document.getElementById('screen-login').classList.remove('hidden');
    const mahsInput = document.getElementById('login-mahs');
    const mapinInput = document.getElementById('login-mapin');
    if (mahsInput) mahsInput.value = '';
    if (mapinInput) mapinInput.value = '';
    hideAuthError();
}

function handleGuestMode() {
    currentUser = { name: "Khách (Guest)", isGuest: true, tuanHienTai: 1, hoTen: "Bé Khách", lop: "1A", maHS: "KHACH" };
    enterDashboard();
}

function enterDashboard(isSilent = false) {
    document.getElementById('screen-login').classList.add('hidden');
    document.getElementById('screen-dashboard').classList.remove('hidden');
    updateUserInfoBox();
    resetStars();
    renderDashboardGrid();
    renderExamHubGrid();
    goHome();

    // Phát ngẫu nhiên lời chào sư phạm (Không nhạc)
    if (!isSilent) {
        setTimeout(() => {
            if (currentUser && !currentUser.isGuest) {
                const template = GREETINGS_STUDENT[Math.floor(Math.random() * GREETINGS_STUDENT.length)];
                const msg = template.replace('{name}', currentUser.hoTen);
                speakVietnamese(msg, 0.96);
            } else {
                const msg = GREETINGS_GUEST[Math.floor(Math.random() * GREETINGS_GUEST.length)];
                speakVietnamese(msg, 0.96);
            }
        }, 450);
    }
}

function updateUserInfoBox() {
    const box = document.getElementById('user-info-box');
    if (!box) return;
    if (currentUser && !currentUser.isGuest) {
        box.innerHTML = `
            <div class="flex items-center space-x-2">
                <div class="text-right">
                    <div class="text-yellow-600 font-extrabold text-xs md:text-sm leading-tight">${escapeHtml(currentUser.hoTen)}</div>
                    <div class="text-gray-500 font-semibold text-[10px]">ID: ${escapeHtml(currentUser.maHS)} | Lớp ${escapeHtml(currentUser.lop)}</div>
                </div>
                <button onclick="logout()" title="Đăng xuất" class="w-8 h-8 flex items-center justify-center bg-orange-100 hover:bg-orange-200 text-orange-500 rounded-xl border border-orange-200 text-xs transition-shadow duration-200 hover:shadow-[0_0_12px_rgba(249,115,22,0.55)]"><i class="fa-solid fa-right-from-bracket"></i></button>
            </div>`;
    } else {
        box.innerHTML = `<span class="text-amber-600 font-extrabold text-xs">Khách (Guest)</span><br><span class="text-gray-400 font-semibold text-[10px]">Chưa đăng nhập</span>`;
    }
}

function resetStars() {
    starGreenCount = 0; starRedCount = 0;
    const greenEl = document.getElementById('star-green-count');
    const redEl = document.getElementById('star-red-count');
    if (greenEl) greenEl.textContent = 0;
    if (redEl) redEl.textContent = 0;
}

function clickProgressOrExam(type) {
    if (!currentUser || currentUser.isGuest) return alert('Bé vui lòng đăng nhập để sử dụng tính năng này nhé!');
    if (type === 'progress') openRoadmap();
    else if (type === 'exam') openExamHub();
}

// ==========================================
// CHỦ ĐỀ 1: BẢNG CHỮ CÁI TƯƠNG TÁC (1.1 ĐẾN 1.4)
// ==========================================
function openTopic(topicNum, topicName, icon) {
    stopSpeaking();
    activeTopicId = topicNum; activeExamContext = null; activeRoadmapContext = null;
    updateNavTabs(topicName, icon || '🐝', null);

    showLoadingOverlay(`Đang tải chủ đề "${topicName}"...`);
    fetchAllTopicsData().then(topics => {
        hideLoadingOverlay();
        const topicObj = topics.find(t => Number(t.topic_id) === Number(topicNum));
        if (!topicObj || !topicObj.questions || !topicObj.questions.length) throw new Error("Chủ đề không có câu hỏi nào");
        showLectureAndSubtopics(topicNum, topicName, topicObj);
    }).catch(err => {
        hideLoadingOverlay();
        // Tải lỗi thì đưa header về đúng trạng thái trang chủ (không để lại tab/gạch breadcrumb thừa)
        activeTopicId = null;
        updateNavTabs(null, null, null);
        alert(`Không thể tải chủ đề: ${err.message}`);
    });
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
    stopSpeaking();
    updateNavTabs("Bản đồ tiến trình tuần", "🗺️", null);
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
        <div class="w-full max-w-3xl bg-yellow-50/70 border-2 border-yellow-200 rounded-2xl p-3 mb-1.5 text-left shadow-xs">
            ${pTitle ? `<p class="font-black text-yellow-700 text-sm md:text-base mb-1">${escapeHtml(pTitle)}</p>` : ''}
            <p class="text-gray-800 text-sm md:text-base font-bold whitespace-pre-line leading-relaxed ${useTwoColumns ? 'md:columns-2 md:gap-6' : ''}">${escapeHtml(pText)}</p>
        </div>` : '';

    const practiceSpeakerBtnHtml = !isEvaluationMode ? `
        <div class="flex items-center justify-center mt-1 mb-1">
            <button onclick="speakCurrentQuestion()" class="px-4 py-1.5 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border border-yellow-200 rounded-2xl text-xs md:text-sm font-extrabold flex items-center space-x-1.5 pastel-btn shadow-xs">
                <i class="fa-solid fa-volume-high text-yellow-600"></i>
                <span>Nghe câu hỏi</span>
            </button>
        </div>
    ` : '';

    const isLetterListen = q.render_style === 'letter_listen';

    let html;
    if (isLetterListen) {
        html = `
            ${mediaHtml}
            <div class="w-full max-w-3xl border-2 border-dashed border-yellow-200 bg-yellow-50/40 rounded-3xl px-4 py-4 md:py-5 flex flex-col items-center text-center mb-3">
                <div class="text-3xl md:text-4xl mb-1.5 space-x-2">
                    <span>🎧</span><span>👂</span><span>🔢</span>
                </div>
                <p class="text-sm md:text-base lg:text-lg font-black text-orange-600 leading-snug">${escapeHtml(q.question_text)}</p>
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
                <div class="mt-4 inline-flex items-center space-x-1.5 bg-yellow-50 border border-yellow-200 rounded-full px-3.5 py-1.5">
                    <span>🐝</span>
                    <span class="text-xs md:text-sm font-extrabold text-orange-600">${escapeHtml(q.mascot_text)}</span>
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
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-2.5 md:p-3 bg-white hover:bg-yellow-50/50 border border-yellow-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs">
                    <div class="flex items-center space-x-2.5">
                        <span class="opt-badge w-7 h-7 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center font-black text-sm shrink-0">${letter}</span>
                        <span class="opt-text">${escapeHtml(formattedOpt)}</span>
                    </div>
                    <span class="option-icon text-yellow-500 text-base md:text-lg"></span>
                </button>`;
        } else {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-3 md:p-3.5 bg-yellow-50/40 hover:bg-yellow-100/70 border-2 border-yellow-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs pastel-btn">
                    <span><strong class="text-yellow-600 mr-2 text-base md:text-lg">${letter}.</strong> ${escapeHtml(formattedOpt)}</span>
                    <span class="option-icon text-yellow-500 text-base md:text-lg"></span>
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
                b.className = "option-btn w-full p-2.5 md:p-3 bg-yellow-50/30 border-2 border-yellow-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-yellow-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-yellow-50/50 border border-yellow-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center font-black text-sm shrink-0";
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
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (!isCorrect && bOpt === completedAnswer) {
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });
        return;
    }

    if (wrongAttempts.length > 0) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (wrongAttempts.includes(bOpt)) {
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });
    }

    if (completedAnswer !== undefined) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === completedAnswer) {
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
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
                b.className = "option-btn w-full p-2.5 md:p-3 bg-yellow-50/30 border-2 border-yellow-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-yellow-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-yellow-50/50 border border-yellow-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center font-black text-sm shrink-0";
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
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (bOpt === selectedOpt) {
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
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
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
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
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
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
                sub_topic: q.sub_topic || 'Chủ đề tổng hợp',
                skill_tag: q.skill_tag || 'C1',
                dap_an_chon: studentAns || 'Chưa trả lời',
                dap_an_dung: q.answer,
                explanation: q.explanation || 'Không có giải thích chi tiết.'
            });
        }
        quizAnsweredLog.push({
            question_id: q.question_id,
            question_text: q.question_text,
            skill_tag: q.skill_tag || 'C1',
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
        nextActionLabel.textContent = activeRoadmapContext ? '🔙 Quay lại tiến trình tuần' : '🚀 Làm đề thi tiếp theo';
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
    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    const skillStats = {};
    skillKeys.forEach(k => {
        skillStats[k] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
    });

    activeQuestionsList.forEach((q, idx) => {
        let rawTag = String(q.skill_tag || 'TOAN_C1').toUpperCase();
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
    skillKeys.forEach(k => {
        const data = skillStats[k];
        const pct = isRoadmap
            ? (data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0)
            : (data.maxScore > 0 ? Math.round((data.earnedScore / data.maxScore) * 100) : 0);
        const isPassed = pct >= 50;
        const badgeClass = isPassed ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-orange-50 text-orange-700 border border-orange-200';
        const badgeText = isPassed ? 'Đạt yêu cầu' : 'Cần luyện tập thêm';
        const barColor = isPassed ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-yellow-400 to-orange-400';
        const scoreLine = isRoadmap
            ? `<span>Số câu đúng: <strong class="text-yellow-600">${data.correct}/${data.total} câu</strong></span>`
            : `<span>Điểm đạt: <strong class="text-yellow-600">${data.earnedScore.toFixed(1)} / ${data.maxScore.toFixed(1)}đ</strong></span>`;

        html += `
            <div class="bg-yellow-50/40 border border-yellow-100 rounded-2xl p-3 flex flex-col justify-between space-y-2">
                <div class="flex items-center justify-between">
                    <span class="font-black text-slate-800 text-xs sm:text-sm">${SKILL_TAXONOMY[k].name}</span>
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${badgeClass}">${badgeText}</span>
                </div>
                <div class="flex items-center justify-between text-xs font-bold text-slate-600">
                    ${scoreLine}
                    <span class="font-math font-black">${pct}%</span>
                </div>
                <div class="w-full bg-yellow-100 rounded-full h-2 overflow-hidden">
                    <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${pct}%"></div>
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
                <div class="bg-orange-50/40 border border-orange-200 rounded-2xl p-3.5 space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="px-2.5 py-0.5 bg-orange-100 text-orange-800 font-black text-xs rounded-lg">CÂU ${item.question_number || (idx + 1)}</span>
                        <span class="text-xs font-bold text-slate-500">${escapeHtml(beautifySubtopicName(item.sub_topic_label) || 'Chủ đề tổng hợp')}</span>
                    </div>
                    <p class="font-extrabold text-slate-800 text-sm">${escapeHtml(item.question_text)}</p>
                    <div class="text-xs space-y-1 font-semibold">
                        <p class="text-orange-600"><i class="fa-solid fa-xmark mr-1"></i> Đáp án con chọn: <strong>${escapeHtml(item.dap_an_chon)}</strong></p>
                        <p class="text-emerald-700"><i class="fa-solid fa-check mr-1"></i> Đáp án đúng chuẩn: <strong>${escapeHtml(item.dap_an_dung)}</strong></p>
                    </div>
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
    
    const skillScores = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    quizAnsweredLog.forEach(item => {
        let rawTag = String(item.skill_tag || 'C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        let tag = m ? 'C' + m[1] : 'C1';

        if (item.isCorrect && skillScores[tag] !== undefined) {
            skillScores[tag] += (item.diem || 0.5);
        }
    });

    const payload = {
        maHS: currentUser.maHS,
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        examCategory: categoryKey,
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
        payload[SKILL_TAXONOMY[k].sheetCol] = skillScores[k].toFixed(1);
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
        const res = await callAppsScript('getHistory', { maHS: currentUser.maHS, sheetName });
        hideLoadingOverlay();
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
    const skillAverages = isWeekly
        ? { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 }
        : { C1: 85, C2: 78, C3: 92, C4: 70, C5: 80, C6: 75 };
    const touchedSkills = [];

    if (rows.length && isWeekly) {
        // Tiến trình tuần: % = tổng số câu đúng / tổng số câu đã làm THẬT của nhóm kỹ năng đó
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
    } else if (rows.length) {
        skillKeys.forEach((k) => {
            const colName = SKILL_TAXONOMY[k].sheetCol;
            const vals = rows.map(r => {
                const val = r[`diem${k}`] ?? r[colName] ?? r[`diem_${k.toLowerCase()}`] ?? r[k];
                return (val !== undefined && val !== null && val !== '--') ? Number(val) : 0;
            });
            const sum = vals.reduce((a, b) => a + b, 0);
            if (vals.length > 0) {
                skillAverages[k] = Math.min(100, Math.round((sum / (vals.length * 1.5)) * 100)) || 75;
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
                data: skillKeys.map(k => skillAverages[k]),
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
                tooltip: { callbacks: { label: (ctx) => ` Độ thành thạo: ${ctx.raw}%` } }
            }
        },
        plugins: [{
            id: 'barValueLabels',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;
                chart.data.datasets[0].data.forEach((val, i) => {
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
            <p class="text-gray-700">Học sinh <strong>${escapeHtml(currentUser.hoTen)}</strong> đã hoàn thành <strong>${count} bài kiểm tra</strong> với điểm số trung bình tích lũy đạt <strong class="text-yellow-600">${avgScoreStr}/10 điểm</strong>. ${overviewText}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div class="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
                <span class="text-emerald-700 font-extrabold block mb-0.5">✅ 2. Khen ngợi & thế mạnh nổi trội:</span>
                <p class="text-gray-700">${strengthHtml}</p>
            </div>

            <div class="bg-orange-50/70 p-3 rounded-xl border border-orange-200">
                <span class="text-orange-700 font-extrabold block mb-0.5">⚠️ 3. Điểm cần lưu ý & khắc phục:</span>
                <p class="text-gray-700">${weaknessHtml}</p>
            </div>
        </div>

        <div class="bg-white/80 p-3 rounded-xl border border-orange-200">
            <span class="text-orange-700 font-extrabold block mb-0.5">💡 4. Kế hoạch bồi dưỡng & hướng dẫn phụ huynh:</span>
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

    if (isWeekly) {
        // Tổng hợp: % = tổng câu đúng / tổng câu đã làm THẬT của đúng nhóm kỹ năng đó
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
                <tr class="hover:bg-yellow-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">Tuần ${r.tuan || (idx + 1)}</td>
                    <td class="py-2.5 px-2 font-black text-orange-600">${itemDiem}</td>
                    ${skillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    } else {
        skillKeys.forEach((k, i) => {
            const sum = rows.reduce((acc, r) => acc + getScoreVal(r, i + 1, SKILL_TAXONOMY[k].sheetCol), 0);
            summaryCells += `<td class="py-2 px-1">${(sum / totalRows).toFixed(1)}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let examSkillCells = '';
            skillKeys.forEach((k, i) => {
                examSkillCells += `<td class="py-2 px-1">${getScoreVal(r, i + 1, SKILL_TAXONOMY[k].sheetCol)}</td>`;
            });

            bodyRows += `
                <tr class="hover:bg-yellow-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">${r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || (idx + 1)}`}</td>
                    <td class="py-2.5 px-2 font-black text-orange-600">${itemDiem}</td>
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
            <td class="py-2.5 px-2 text-orange-600">${avgTong}</td>
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
        let cls = 'bg-white text-yellow-400 border-yellow-200 hover:bg-yellow-50';

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
        if (isCurrent) cls = 'bg-gradient-to-br from-yellow-500 to-orange-500 text-white border-yellow-500 shadow-md';
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
        el.innerHTML = `<div class="bg-white px-6 py-4 rounded-2xl shadow-xl font-extrabold text-yellow-600 flex items-center space-x-3"><i class="fa-solid fa-spinner fa-spin"></i><span id="loading-overlay-text"></span></div>`;
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
        btn.classList.add('bg-yellow-50', 'text-yellow-600', 'border-yellow-200');
    } else {
        icon.className = 'fa-solid fa-volume-xmark';
        btn.title = 'Đang TẮT tự động đọc câu hỏi — bấm để bật';
        btn.classList.remove('bg-yellow-50', 'text-yellow-600', 'border-yellow-200');
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

tryAutoLogin();