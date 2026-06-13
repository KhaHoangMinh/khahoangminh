/**
 * SPECIAL_EVENTS — Holiday/event configuration
 *
 * Each event supports:
 *   id           – unique slug
 *   type         – 'solar' | 'lunar'
 *   month        – numeric month (1–12)
 *   days         – array of day numbers that trigger the event
 *   theme        – visual tokens consumed by SpecialEventModal
 *   translations – { vi, en } each with { title, quote }
 *
 * theme fields:
 *   gradient      – Tailwind gradient classes for the left pane background
 *   titleGradient – Tailwind gradient classes for the right-pane title text
 *   accentHex     – hex color used for glow, divider, and button shadow
 *   badgeBg       – Tailwind classes for the top-right eyebrow badge
 *   buttonBg      – Tailwind classes for the CTA button
 *   particles     – animation preset: 'lanterns' | 'snowflakes' | 'stars' | 'petals' | 'fireflies' | 'confetti'
 *   shimmer       – Tailwind gradient classes for the shimmer overlay (optional)
 *   logo          – path to optional logo asset (unused by modal but kept for other consumers)
 */

export const SPECIAL_EVENTS = [

    // ══════════════════════════════════════════════════════════════════
    //  LUNAR CALENDAR EVENTS  (Âm Lịch)
    // ══════════════════════════════════════════════════════════════════

    {
        id: 'lunar-new-year',
        type: 'lunar',
        month: 1,
        days: [1, 2, 3],   // Mùng 1, 2, 3 Tết Nguyên Đán
        theme: {
            gradient: 'from-red-900 via-red-800 to-rose-950',
            titleGradient: 'from-red-500 to-yellow-400',
            accentHex: '#facc15',
            badgeBg: 'bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300',
            buttonBg: 'bg-gradient-to-r from-red-700 to-rose-800 hover:from-red-600 hover:to-rose-700',
            particles: 'lanterns',
            shimmer: 'from-yellow-500/10 via-red-500/5 to-transparent',
            logo: '/img/logo/logo-tet.png',
        },
        translations: {
            vi: {
                title: 'Chúc Mừng Năm Mới',
                quote: 'Kính chúc Quý khách hàng một năm mới An Khang Thịnh Vượng, Vạn Sự Như Ý.',
            },
            en: {
                title: 'Happy Lunar New Year',
                quote: 'Wishing you a prosperous, healthy, and joyful new year.',
            },
        },
    },

    {
        id: 'hung-vuong',
        type: 'lunar',
        month: 3,
        days: [10],   // Giỗ Tổ Hùng Vương
        theme: {
            gradient: 'from-amber-900 via-yellow-900 to-stone-950',
            titleGradient: 'from-amber-500 to-yellow-500',
            accentHex: '#f59e0b',
            badgeBg: 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
            buttonBg: 'bg-gradient-to-r from-amber-700 to-yellow-800 hover:from-amber-600 hover:to-yellow-700',
            particles: 'fireflies',
            shimmer: 'from-amber-400/10 via-yellow-400/5 to-transparent',
            logo: '/img/logo/logo-hungvuong.png',
        },
        translations: {
            vi: {
                title: 'Giỗ Tổ Hùng Vương',
                quote: 'Dù ai đi ngược về xuôi, nhớ ngày Giỗ Tổ mùng mười tháng ba. Kính chúc Quý khách một ngày lễ an lành và đầm ấm bên gia đình.',
            },
            en: {
                title: "Hung Kings' Commemoration Day",
                quote: 'Honoring the legendary founders of the Vietnamese nation. Wishing you a peaceful holiday.',
            },
        },
    },

    {
        id: 'mid-autumn',
        type: 'lunar',
        month: 8,
        days: [15],   // Tết Trung Thu
        theme: {
            gradient: 'from-indigo-950 via-violet-950 to-slate-950',
            titleGradient: 'from-indigo-400 to-amber-400',
            accentHex: '#fbbf24',
            badgeBg: 'bg-indigo-50 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300',
            buttonBg: 'bg-gradient-to-r from-indigo-700 to-violet-800 hover:from-indigo-600 hover:to-violet-700',
            particles: 'stars',
            shimmer: 'from-amber-400/10 via-indigo-500/5 to-transparent',
            logo: '/img/logo/logo-midautumn.png',
        },
        translations: {
            vi: {
                title: 'Tết Trung Thu',
                quote: 'Kính chúc Quý khách một mùa Trung Thu đoàn viên, ấm áp và ngập tràn niềm vui.',
            },
            en: {
                title: 'Mid-Autumn Festival',
                quote: 'Wishing you a warm and joyous Mid-Autumn Festival filled with family and moonlit moments.',
            },
        },
    },


    // ══════════════════════════════════════════════════════════════════
    //  SOLAR CALENDAR EVENTS  (Dương Lịch)
    // ══════════════════════════════════════════════════════════════════

    {
        id: 'new-year',
        type: 'solar',
        month: 1,
        days: [1],   // Tết Dương Lịch
        theme: {
            gradient: 'from-blue-900 via-cyan-900 to-slate-950',
            titleGradient: 'from-blue-400 to-cyan-400',
            accentHex: '#22d3ee',
            badgeBg: 'bg-blue-50 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300',
            buttonBg: 'bg-gradient-to-r from-blue-700 to-cyan-800 hover:from-blue-600 hover:to-cyan-700',
            particles: 'confetti',
            shimmer: 'from-cyan-400/10 via-blue-400/5 to-transparent',
            logo: '/img/logo/logo-newyear.png',
        },
        translations: {
            vi: {
                title: 'Happy New Year',
                quote: 'Chào đón năm mới với những khởi đầu mới và thành công mới. Chúc Quý khách một năm rực rỡ!',
            },
            en: {
                title: 'Happy New Year',
                quote: 'Welcoming new beginnings and bold ambitions. May the year ahead be your most brilliant yet!',
            },
        },
    },

    {
        id: 'womens-day-intl',
        type: 'solar',
        month: 3,
        days: [8],   // Quốc tế Phụ nữ
        theme: {
            gradient: 'from-pink-900 via-rose-900 to-fuchsia-950',
            titleGradient: 'from-pink-400 to-rose-400',
            accentHex: '#f472b6',
            badgeBg: 'bg-pink-50 text-pink-800 dark:bg-pink-950/60 dark:text-pink-300',
            buttonBg: 'bg-gradient-to-r from-pink-700 to-rose-800 hover:from-pink-600 hover:to-rose-700',
            particles: 'petals',
            shimmer: 'from-pink-400/15 via-rose-400/5 to-transparent',
            logo: '/img/logo/logo-womensday.png',
        },
        translations: {
            vi: {
                title: 'Quốc Tế Phụ Nữ',
                quote: 'Kính chúc một nửa thế giới luôn xinh đẹp, hạnh phúc và thành công trong cuộc sống.',
            },
            en: {
                title: "International Women's Day",
                quote: "Celebrating every woman's strength, resilience, and brilliance — today and every day.",
            },
        },
    },

    {
        id: 'reunification-day',
        type: 'solar',
        month: 4,
        days: [30],   // Ngày Giải Phóng miền Nam / Thống Nhất Đất Nước — 30/4
        theme: {
            gradient: 'from-red-900 via-orange-900 to-red-950',
            titleGradient: 'from-red-500 to-orange-400',
            accentHex: '#fb923c',
            badgeBg: 'bg-red-50 text-red-800 dark:bg-red-950/60 dark:text-red-300',
            buttonBg: 'bg-gradient-to-r from-red-700 to-orange-800 hover:from-red-600 hover:to-orange-700',
            particles: 'confetti',
            shimmer: 'from-orange-400/10 via-red-400/5 to-transparent',
            logo: '/img/logo/logo-reunification.png',
        },
        translations: {
            vi: {
                title: 'Mừng 30 Tháng Tư',
                quote: 'Kỷ niệm ngày Non Sông thu về một mối. Chúc Quý khách kỳ nghỉ lễ vui vẻ và bình an.',
            },
            en: {
                title: 'Reunification Day',
                quote: 'Commemorating the historic day that united our nation. Wishing you a peaceful and joyful holiday.',
            },
        },
    },

    {
        id: 'labor-day',
        type: 'solar',
        month: 5,
        days: [1],   // Quốc tế Lao động
        theme: {
            gradient: 'from-sky-900 via-indigo-900 to-slate-950',
            titleGradient: 'from-sky-400 to-indigo-400',
            accentHex: '#38bdf8',
            badgeBg: 'bg-sky-50 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300',
            buttonBg: 'bg-gradient-to-r from-sky-700 to-indigo-800 hover:from-sky-600 hover:to-indigo-700',
            particles: 'stars',
            shimmer: 'from-sky-400/10 via-indigo-400/5 to-transparent',
            logo: '/img/logo/logo-labor.png',
        },
        translations: {
            vi: {
                title: 'Quốc Tế Lao Động',
                quote: 'Tri ân những cống hiến không ngừng nghỉ. Chúc Quý khách những ngày nghỉ trọn vẹn.',
            },
            en: {
                title: 'International Labour Day',
                quote: 'Honouring every worker\'s dedication and spirit. Enjoy a well-deserved rest.',
            },
        },
    },

    {
        id: 'national-day',
        type: 'solar',
        month: 9,
        days: [2],   // Quốc khánh Việt Nam
        theme: {
            gradient: 'from-red-950 via-red-900 to-slate-950',
            titleGradient: 'from-red-500 to-yellow-500',
            accentHex: '#ef4444',
            badgeBg: 'bg-red-50 text-red-800 dark:bg-red-950/60 dark:text-red-300',
            buttonBg: 'bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800',
            particles: 'lanterns',
            shimmer: 'from-red-400/10 via-yellow-400/5 to-transparent',
            logo: '/img/logo/logo-national.png',
        },
        translations: {
            vi: {
                title: 'Quốc Khánh 2/9',
                quote: 'Mừng ngày Độc Lập. Kính chúc Quý khách một kỳ nghỉ lễ ngập tràn niềm vui và tự hào dân tộc.',
            },
            en: {
                title: 'Vietnam National Day',
                quote: 'Celebrating Vietnam\'s Independence Day with pride and gratitude. Wishing you a joyful holiday.',
            },
        },
    },

    {
        id: 'womens-day-vn',
        type: 'solar',
        month: 10,
        days: [20],   // Ngày Phụ nữ Việt Nam
        theme: {
            gradient: 'from-fuchsia-900 via-rose-900 to-purple-950',
            titleGradient: 'from-fuchsia-400 to-rose-400',
            accentHex: '#e879f9',
            badgeBg: 'bg-fuchsia-50 text-fuchsia-800 dark:bg-fuchsia-950/60 dark:text-fuchsia-300',
            buttonBg: 'bg-gradient-to-r from-fuchsia-700 to-rose-800 hover:from-fuchsia-600 hover:to-rose-700',
            particles: 'petals',
            shimmer: 'from-fuchsia-400/15 via-rose-400/5 to-transparent',
            logo: '/img/logo/logo-vnwomensday.png',
        },
        translations: {
            vi: {
                title: 'Ngày Phụ Nữ Việt Nam',
                quote: 'Tôn vinh vẻ đẹp và tài năng của phụ nữ Việt. Chúc các chị em luôn rạng rỡ như những đóa hoa.',
            },
            en: {
                title: "Vietnamese Women's Day",
                quote: 'Honouring the beauty, talent, and resilience of Vietnamese women everywhere.',
            },
        },
    },

    {
        id: 'christmas',
        type: 'solar',
        month: 12,
        days: [25],   // Christmas Eve + Christmas Day
        theme: {
            gradient: 'from-[#0d2b1a] via-[#143d24] to-[#0a1e12]',
            titleGradient: 'from-emerald-400 to-red-400',
            accentHex: '#dcb773',
            badgeBg: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
            buttonBg: 'bg-gradient-to-r from-[#163a24] to-[#1f5032] hover:from-[#1b4d30] hover:to-[#275f3c]',
            particles: 'snowflakes',
            shimmer: 'from-emerald-400/8 via-white/4 to-transparent',
            logo: '/img/logo/logo-christmas.png',
        },
        translations: {
            vi: {
                title: 'Merry Christmas',
                quote: 'Kính chúc Quý khách một mùa Giáng Sinh an lành, ấm áp và một năm mới bình an.',
            },
            en: {
                title: 'Merry Christmas',
                quote: 'Wishing you a warm, peaceful Christmas and a season filled with love and wonder.',
            },
        },
    },

];