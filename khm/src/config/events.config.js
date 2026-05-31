export const SPECIAL_EVENTS = [
    // ==========================================
    // LUNAR CALENDAR EVENTS (Âm Lịch)
    // ==========================================
    {
        id: 'lunar-new-year',
        type: 'lunar',
        month: 1,
        days: [1, 2, 3], // Mùng 1, 2, 3 Tết
        theme: {
            gradient: "from-red-600 via-red-500 to-yellow-500 dark:from-red-900 dark:via-red-800 dark:to-orange-700",
            iconColor: "text-yellow-400",
            logo: "/img/logo-tet.png"
        },
        translations: {
            vi: {
                title: "Chúc Mừng Năm Mới",
                quote: "Kính chúc Quý khách hàng một năm mới An Khang Thịnh Vượng, Vạn Sự Như Ý."
            },
            en: {
                title: "Happy Lunar New Year",
                quote: "Wishing you a prosperous, healthy, and successful new year."
            }
        }
    },
    {
        id: 'hung-vuong',
        type: 'lunar',
        month: 3,
        days: [10], // Giỗ Tổ Hùng Vương
        theme: {
            gradient: "from-amber-700 via-orange-600 to-yellow-600 dark:from-amber-900 dark:via-amber-800 dark:to-yellow-800",
            iconColor: "text-amber-200",
            logo: "/img/logo-hungvuong.png"
        },
        translations: {
            vi: {
                title: "Giỗ Tổ Hùng Vương",
                quote: "Dù ai đi ngược về xuôi, nhớ ngày Giỗ Tổ mùng mười tháng ba."
            },
            en: {
                title: "Hung Kings' Commemoration Day",
                quote: "Honoring the legendary founders of our nation. Wishing you a peaceful holiday."
            }
        }
    },
    {
        id: 'mid-autumn',
        type: 'lunar',
        month: 8,
        days: [15], // Tết Trung Thu
        theme: {
            gradient: "from-indigo-900 via-purple-800 to-amber-500 dark:from-indigo-950 dark:via-purple-900 dark:to-amber-700",
            iconColor: "text-amber-400",
            logo: "/img/logo-midautumn.png"
        },
        translations: {
            vi: {
                title: "Tết Trung Thu",
                quote: "Kính chúc Quý khách một mùa Trung Thu đoàn viên, ấm áp và ngập tràn niềm vui bên gia đình."
            },
            en: {
                title: "Mid-Autumn Festival",
                quote: "Wishing you a warm and joyous Mid-Autumn Festival filled with family gatherings."
            }
        }
    },

    // ==========================================
    // SOLAR CALENDAR EVENTS (Dương Lịch)
    // ==========================================
    {
        id: 'new-year',
        type: 'solar',
        month: 1,
        days: [1], // Tết Dương Lịch
        theme: {
            gradient: "from-blue-600 via-blue-500 to-cyan-400 dark:from-blue-900 dark:via-blue-800 dark:to-cyan-700",
            iconColor: "text-cyan-200",
            logo: "/img/logo-newyear.png"
        },
        translations: {
            vi: {
                title: "Happy New Year",
                quote: "Chào đón năm mới với những khởi đầu mới, thành công mới. Chúc Quý khách một năm rực rỡ!"
            },
            en: {
                title: "Happy New Year",
                quote: "Welcoming the new year with new beginnings and success. Have a brilliant year ahead!"
            }
        }
    },
    {
        id: 'womens-day-intl',
        type: 'solar',
        month: 3,
        days: [8], // Quốc tế Phụ nữ
        theme: {
            gradient: "from-pink-500 via-rose-400 to-red-400 dark:from-pink-900 dark:via-rose-800 dark:to-red-800",
            iconColor: "text-pink-100",
            logo: "/img/logo-womensday.png"
        },
        translations: {
            vi: {
                title: "Quốc Tế Phụ Nữ 8/3",
                quote: "Kính chúc một nửa thế giới luôn xinh đẹp, hạnh phúc và thành công trong cuộc sống."
            },
            en: {
                title: "International Women's Day",
                quote: "Wishing all women a day as beautiful, inspiring, and incredible as they are."
            }
        }
    },
    {
        id: 'reunification-day',
        type: 'solar',
        month: 4,
        days: [30], // Giải phóng miền Nam
        theme: {
            gradient: "from-red-600 via-red-500 to-orange-500 dark:from-red-900 dark:via-red-800 dark:to-orange-800",
            iconColor: "text-yellow-400",
            logo: "/img/logo-reunification.png"
        },
        translations: {
            vi: {
                title: "Mừng Ngày Giải Phóng",
                quote: "Kỷ niệm 30/4 hào hùng, chúc Quý khách kỳ nghỉ lễ vui vẻ và bình an."
            },
            en: {
                title: "Reunification Day",
                quote: "Commemorating our historic day of reunification. Wishing you a peaceful and joyful holiday."
            }
        }
    },
    {
        id: 'labor-day',
        type: 'solar',
        month: 5,
        days: [1], // Quốc tế Lao động
        theme: {
            gradient: "from-sky-600 via-blue-500 to-indigo-500 dark:from-sky-900 dark:via-blue-800 dark:to-indigo-900",
            iconColor: "text-sky-200",
            logo: "/img/logo-labor.png"
        },
        translations: {
            vi: {
                title: "Quốc Tế Lao Động",
                quote: "Tri ân những cống hiến không ngừng nghỉ. Chúc Quý khách có những ngày nghỉ ngơi trọn vẹn."
            },
            en: {
                title: "International Labor Day",
                quote: "Honoring relentless dedication and hard work. Have a wonderful and restful holiday."
            }
        }
    },
    {
        id: 'national-day',
        type: 'solar',
        month: 9,
        days: [2], // Quốc khánh
        theme: {
            gradient: "from-red-600 via-red-500 to-red-400 dark:from-red-950 dark:via-red-900 dark:to-red-800",
            iconColor: "text-yellow-400",
            logo: "/img/logo-national.png"
        },
        translations: {
            vi: {
                title: "Quốc Khánh 2/9",
                quote: "Mừng Tết Độc Lập. Kính chúc Quý khách hàng một kỳ nghỉ lễ ngập tràn niềm vui và hạnh phúc."
            },
            en: {
                title: "Vietnam National Day",
                quote: "Celebrating our Independence Day. Wishing you a holiday filled with joy and happiness."
            }
        }
    },
    {
        id: 'womens-day-vn',
        type: 'solar',
        month: 10,
        days: [20], // Phụ nữ Việt Nam
        theme: {
            gradient: "from-fuchsia-600 via-pink-500 to-rose-400 dark:from-fuchsia-900 dark:via-pink-800 dark:to-rose-800",
            iconColor: "text-pink-200",
            logo: "/img/logo-womensday.png"
        },
        translations: {
            vi: {
                title: "Ngày Phụ Nữ Việt Nam 20/10",
                quote: "Tôn vinh vẻ đẹp và tài năng của phụ nữ Việt. Chúc các chị em luôn rạng rỡ như những đóa hoa."
            },
            en: {
                title: "Vietnamese Women's Day",
                quote: "Honoring the beauty and talent of Vietnamese women. May you always bloom like radiant flowers."
            }
        }
    },
    {
        id: 'christmas',
        type: 'solar',
        month: 12,
        days: [24, 25], // Giáng Sinh
        theme: {
            gradient: "from-emerald-600 via-green-500 to-red-500 dark:from-emerald-900 dark:via-green-900 dark:to-red-900",
            iconColor: "text-emerald-100",
            logo: "/img/logo-christmas.png"
        },
        translations: {
            vi: {
                title: "Merry Christmas",
                quote: "Kính chúc Quý khách một mùa Giáng Sinh an lành, ấm áp và một năm mới bình an."
            },
            en: {
                title: "Merry Christmas",
                quote: "Wishing you a warm, peaceful Christmas and a blessed New Year."
            }
        }
    }
];