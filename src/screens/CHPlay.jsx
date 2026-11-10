import { useState, useEffect, useRef } from 'react';

// Cropped authentic Google Play assets & multi-banner pool
import bannerTiktok from '../assets/chplay/banner_tiktok.jpg';
import bannerWsj from '../assets/chplay/banner_wsj.jpg';
import bannerWego from '../assets/chplay/banner_wego.jpg';
import bannerElk from '../assets/chplay/banner_elk.jpg';
import bannerJourni from '../assets/chplay/banner_journi.jpg';
import bannerTeams from '../assets/chplay/banner_teams.jpg';
import bannerBox from '../assets/chplay/banner_box.jpg';
import bannerSlack from '../assets/chplay/banner_slack.jpg';
import bannerDaylio from '../assets/chplay/banner_daylio.jpg';
import bannerYarnbuddy from '../assets/chplay/banner_yarnbuddy.jpg';
import bannerRelaxsound from '../assets/chplay/banner_relaxsound.jpg';
import bannerSmartgym from '../assets/chplay/banner_smartgym.jpg';
import bannerCalm from '../assets/chplay/banner_calm.jpg';
import bannerKiddopia from '../assets/chplay/banner_kiddopia.jpg';
import bannerHypic from '../assets/chplay/banner_hypic.jpg';

import icTiktok from '../assets/chplay/ic_tiktok.jpg';
import icDola from '../assets/chplay/ic_dola.jpg';
import icBlockBlast from '../assets/chplay/ic_blockblast.jpg';
import icTiktokLite from '../assets/chplay/ic_tiktoklite.jpg';
import icMessenger from '../assets/chplay/ic_messenger.jpg';
import icIqiyi from '../assets/chplay/ic_iqiyi.jpg';
import icFbLite from '../assets/chplay/ic_fblite.jpg';
import icInstaLite from '../assets/chplay/ic_instalite.jpg';
import icRednote from '../assets/chplay/ic_rednote.jpg';
import icCandyCrush from '../assets/chplay/ic_candycrush.jpg';
import icCandySoda from '../assets/chplay/ic_candysoda.jpg';
import icTravelTown from '../assets/chplay/ic_traveltown.jpg';
import icSwordStaff from '../assets/chplay/ic_swordstaff.jpg';
import icTocChien from '../assets/chplay/ic_tocchien.jpg';
import icShopeePay from '../assets/chplay/ic_shopeepay.jpg';
import icBigoLive from '../assets/chplay/ic_bigolive.jpg';
import icDuolingo from '../assets/chplay/ic_duolingo.jpg';
import icAliExpress from '../assets/chplay/ic_aliexpress.jpg';
import icCrunchyroll from '../assets/chplay/ic_crunchyroll.jpg';
import icVssidStore from '../assets/chplay/ic_vssid_store.jpg';
import icChPlayLogo from '../assets/chplay/ic_chplay_logo.png';

// Additional real app icons for deep non-repetitive randomization
import icWsj from '../assets/chplay/ic_wsj.jpg';
import icWego from '../assets/chplay/ic_wego.jpg';
import icElk from '../assets/chplay/ic_elk.jpg';
import icJourni from '../assets/chplay/ic_journi.jpg';
import icTeams from '../assets/chplay/ic_teams.jpg';
import icBox from '../assets/chplay/ic_box.jpg';
import icSlack from '../assets/chplay/ic_slack.jpg';
import icDaylio from '../assets/chplay/ic_daylio.jpg';
import icYarnbuddy from '../assets/chplay/ic_yarnbuddy.jpg';
import icRelaxsound from '../assets/chplay/ic_relaxsound.jpg';
import icSmartgym from '../assets/chplay/ic_smartgym.jpg';
import icCalm from '../assets/chplay/ic_calm.jpg';
import icKiddopia from '../assets/chplay/ic_kiddopia.jpg';
import icTv360 from '../assets/chplay/ic_tv360.jpg';
import icVtvgo from '../assets/chplay/ic_vtvgo.jpg';
import icHypic from '../assets/chplay/ic_hypic.jpg';
import icTammi from '../assets/chplay/ic_tammi.jpg';
import icVnetraffic from '../assets/chplay/ic_vnetraffic.jpg';
import icGoodnotes from '../assets/chplay/ic_goodnotes.jpg';
import icNotboringcam from '../assets/chplay/ic_notboringcam.jpg';
import icYoutube from '../assets/chplay/ic_youtube.jpg';
import icMangoplus from '../assets/chplay/ic_mangoplus.jpg';
import icYouku from '../assets/chplay/ic_youku.jpg';
import icWetv from '../assets/chplay/ic_wetv.jpg';
import icPremierleague from '../assets/chplay/ic_premierleague.jpg';
import icLivescore from '../assets/chplay/ic_livescore.jpg';
import icOnefootball from '../assets/chplay/ic_onefootball.jpg';

import vssidShot1 from '../assets/chplay/vssid_shot1.jpg';
import vssidShot2 from '../assets/chplay/vssid_shot2.jpg';
import vssidShot3 from '../assets/chplay/vssid_shot3.jpg';
import vssidShot1Full from '../assets/chplay/vssid_shot1_full.jpg';
import vssidShot2Full from '../assets/chplay/vssid_shot2_full.jpg';
import vssidShot3Full from '../assets/chplay/vssid_shot3_full.jpg';

import you3dRight from '../assets/chplay/you_3d_right.jpg';
import youGame1 from '../assets/chplay/you_game1.jpg';
import youGame2 from '../assets/chplay/you_game2.jpg';

import book1 from '../assets/chplay/book_1.jpg';
import book2 from '../assets/chplay/book_2.jpg';
import book3 from '../assets/chplay/book_3.jpg';
import book4 from '../assets/chplay/book_4.jpg';
import book5 from '../assets/chplay/book_5.jpg';
import book6 from '../assets/chplay/book_6.jpg';

import catGAction from '../assets/chplay/cat_g_action.jpg';
import catGSim from '../assets/chplay/cat_g_sim.jpg';
import catGPuzzle from '../assets/chplay/cat_g_puzzle.jpg';
import catGAdv from '../assets/chplay/cat_g_adv.jpg';
import catGRace from '../assets/chplay/cat_g_race.jpg';
import catGRpg from '../assets/chplay/cat_g_rpg.jpg';
import catGStrat from '../assets/chplay/cat_g_strat.jpg';
import catGSport from '../assets/chplay/cat_g_sport.jpg';
import catGCard from '../assets/chplay/cat_g_card.jpg';
import catGBoard from '../assets/chplay/cat_g_board.jpg';

import catAEnt from '../assets/chplay/cat_a_ent.jpg';
import catASocial from '../assets/chplay/cat_a_social.jpg';
import catAProd from '../assets/chplay/cat_a_prod.jpg';
import catAComm from '../assets/chplay/cat_a_comm.jpg';
import catAMusic from '../assets/chplay/cat_a_music.jpg';
import catAPhoto from '../assets/chplay/cat_a_photo.jpg';
import catAShop from '../assets/chplay/cat_a_shop.jpg';
import catAEdu from '../assets/chplay/cat_a_edu.jpg';
import catAArt from '../assets/chplay/cat_a_art.jpg';
import catAPers from '../assets/chplay/cat_a_pers.jpg';
import catAWeather from '../assets/chplay/cat_a_weather.jpg';
import catABeauty from '../assets/chplay/cat_a_beauty.jpg';

// Cryptographic Fisher-Yates shuffle so each session shows apps in random non-repetitive order
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = secureRandomInt(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const GOOGLE_AVATAR_COLORS = [
  '#1a73e8', '#e8710a', '#0b8043', '#8e24aa', '#d93025', '#00897b',
  '#c2185b', '#5c6bc0', '#f4511e', '#039be5', '#689f38', '#5d4037',
];

const RANDOM_LAST_NAMES = [
  'Nguyễn', 'Trần', 'Lê', 'Phạm', 'Hoàng', 'Huỳnh', 'Phan', 'Vũ',
  'Võ', 'Đặng', 'Bùi', 'Đỗ', 'Hồ', 'Ngô', 'Dương', 'Lý',
  'Đinh', 'Đoàn', 'Lương', 'Trịnh', 'Mai', 'Tạ', 'Cao', 'Hà',
];

const RANDOM_GIVEN_NAMES = [
  'Minh Tuấn', 'Hoàng Nam', 'Quốc Huy', 'Đức Anh', 'Gia Bảo', 'Tuấn Kiệt', 'Thanh Tùng', 'Quang Hải',
  'Minh Khôi', 'Đình Phong', 'Hữu Đạt', 'Anh Dũng', 'Trung Hiếu', 'Thành Đạt', 'Tuấn Anh', 'Xuân Trường',
  'Bảo Long', 'Nhật Minh', 'Khánh Duy', 'Trọng Nghĩa', 'Hoàng Quân', 'Đức Mạnh', 'Hải Đăng', 'Việt Hoàng',
  'Mạnh Cường', 'Thế Anh', 'Phúc Hưng', 'Đăng Khoa', 'Quang Vinh', 'Thanh Bình', 'Minh Đức', 'Hoài Nam',
  'Chí Thành', 'Đức Thịnh', 'Hồng Sơn', 'Ngọc Hải', 'Tiến Dũng', 'Quốc Khánh', 'Gia Huy', 'Hoàng Long',
  'Minh Quân', 'Sơn Tùng', 'Khắc Việt', 'Lâm Bảo', 'Thu Hà', 'Khánh Linh', 'Phương Thảo', 'Thanh Trúc',
  'Ngọc Ánh', 'Minh Châu', 'Thùy Dung', 'Bảo Ngọc', 'Thanh Huyền', 'Hồng Nhung', 'Mai Phương', 'Lan Anh',
  'Kim Ngân', 'Bích Phương', 'Yến Nhi', 'Quỳnh Anh', 'Thảo Vy', 'Ngọc Hân', 'Minh Thư', 'Hải Yến',
  'Diệu Linh', 'Thu Trang', 'Thanh Hà', 'Tuyết Nhi', 'Phương Anh', 'Thùy Tiên', 'Ánh Tuyết', 'Bảo Trâm',
  'Cẩm Tú', 'Hà My', 'Hương Giang', 'Khánh Vân', 'Minh Hằng', 'Nhã Phương', 'Thanh Hằng', 'Thảo Nhi',
];

function stripVietnameseAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

function secureRandomInt(max) {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const arr = new Uint32Array(1);
    window.crypto.getRandomValues(arr);
    return arr[0] % max;
  }
  return Math.floor(Math.random() * max);
}

function createRandomGoogleProfile() {
  let prevName = '';
  let prevColor = '';
  let prevInitial = '';
  let prevNotif = '1';
  try {
    const saved = JSON.parse(localStorage.getItem('chplay_last_random_profile') || '{}');
    prevName = saved.name || '';
    prevColor = saved.color || '';
    prevInitial = saved.initial || '';
    prevNotif = saved.notifBadge || '1';
  } catch (e) {}

  let displayName = '';
  let fullName = '';
  let initial = '';
  let emailSlug = '';

  for (let attempt = 0; attempt < 25; attempt++) {
    const last = RANDOM_LAST_NAMES[secureRandomInt(RANDOM_LAST_NAMES.length)];
    const given = RANDOM_GIVEN_NAMES[secureRandomInt(RANDOM_GIVEN_NAMES.length)];
    const style = secureRandomInt(3);
    if (style === 0) {
      // e.g. "Minh Tuấn" (popup: "Nguyễn Minh Tuấn")
      displayName = given;
      fullName = `${last} ${given}`;
    } else if (style === 1) {
      // e.g. "Tuấn Nguyễn"
      const firstWord = given.split(' ').pop();
      displayName = `${firstWord} ${last}`;
      fullName = `${last} ${given}`;
    } else {
      // e.g. "Nguyễn Minh Tuấn"
      displayName = `${last} ${given}`;
      fullName = `${last} ${given}`;
    }

    initial = stripVietnameseAccents(displayName.trim()).charAt(0).toUpperCase() || 'A';
    if (displayName !== prevName && initial !== prevInitial) {
      const cleanGiven = stripVietnameseAccents(given).toLowerCase().replace(/\s+/g, '');
      const cleanLast = stripVietnameseAccents(last).toLowerCase().replace(/\s+/g, '');
      const numSuffix = 10 + secureRandomInt(890);
      emailSlug = `${cleanGiven}.${cleanLast}${numSuffix}@gmail.com`;
      break;
    }
  }

  let color = GOOGLE_AVATAR_COLORS[secureRandomInt(GOOGLE_AVATAR_COLORS.length)];
  if (color === prevColor) {
    const filtered = GOOGLE_AVATAR_COLORS.filter((c) => c !== prevColor);
    color = filtered[secureRandomInt(filtered.length)];
  }

  const notifOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '9+'].filter((n) => n !== prevNotif);
  const notifBadge = notifOptions[secureRandomInt(notifOptions.length)] || '3';

  const profile = {
    name: displayName,
    fullName,
    initial,
    color,
    email: emailSlug || 'nguoidung.vn@gmail.com',
    notifBadge,
  };

  try {
    localStorage.setItem('chplay_last_random_profile', JSON.stringify({
      name: profile.name,
      color: profile.color,
      initial: profile.initial,
      notifBadge: profile.notifBadge,
    }));
  } catch (e) {}

  return profile;
}

const SESSION_GOOGLE_PROFILE = createRandomGoogleProfile();

// 15 distinct featured banners for the Apps tab top carousel (zero duplicate guarantee)
const FEATURED_BANNERS_POOL = [
  {
    id: 'bn_wsj',
    appKey: 'wsj',
    name: 'The Wall Street Journal',
    subtitle: 'Tin tức & Tạp chí',
    rating: '4,6',
    banner: bannerWsj,
    icon: icWsj,
  },
  {
    id: 'bn_wego',
    appKey: 'wego',
    name: 'Wego Chuyến Bay & Khách sạn',
    subtitle: 'Du lịch • Ưu đãi giá tốt',
    rating: '4,7',
    banner: bannerWego,
    icon: icWego,
  },
  {
    id: 'bn_elk',
    appKey: 'elk',
    name: 'Elk Currency Converter',
    subtitle: 'Du lịch • Tỷ giá nhanh',
    rating: '4,8',
    banner: bannerElk,
    icon: icElk,
  },
  {
    id: 'bn_journi',
    appKey: 'journi',
    name: 'Journi Blog - Travel Tracker',
    subtitle: 'Nhiếp ảnh • Album du lịch',
    rating: '4,7',
    banner: bannerJourni,
    icon: icJourni,
  },
  {
    id: 'bn_teams',
    appKey: 'teams',
    name: 'Microsoft Teams',
    subtitle: 'Gọi. Trò chuyện. Cộng tác',
    rating: '4,6',
    banner: bannerTeams,
    icon: icTeams,
  },
  {
    id: 'bn_box',
    appKey: 'box',
    name: 'Box: The Power of Content',
    subtitle: 'Năng suất • Đám mây',
    rating: '4,5',
    banner: bannerBox,
    icon: icBox,
  },
  {
    id: 'bn_slack',
    appKey: 'slack',
    name: 'Slack',
    subtitle: 'Kinh doanh • Làm việc nhóm',
    rating: '4,6',
    banner: bannerSlack,
    icon: icSlack,
  },
  {
    id: 'bn_daylio',
    appKey: 'daylio',
    name: 'Daylio Nhật ký tâm trạng',
    subtitle: 'Nhật ký riêng tư, sức khỏe',
    rating: '4,8',
    banner: bannerDaylio,
    icon: icDaylio,
  },
  {
    id: 'bn_yarnbuddy',
    appKey: 'yarnbuddy',
    name: 'YarnBuddy – Knit & Crochet',
    subtitle: 'Lối sống • Đan móc sáng tạo',
    rating: '4,7',
    banner: bannerYarnbuddy,
    icon: icYarnbuddy,
  },
  {
    id: 'bn_relaxsound',
    appKey: 'relaxsound',
    name: 'Relaxing Sounds & Meditation',
    subtitle: 'Sức khỏe • Giảm căng thẳng',
    rating: '4,7',
    banner: bannerRelaxsound,
    icon: icRelaxsound,
  },
  {
    id: 'bn_smartgym',
    appKey: 'smartgym',
    name: 'SmartGym: Gym & Home',
    subtitle: 'Sức khỏe & Thể hình',
    rating: '4,8',
    banner: bannerSmartgym,
    icon: icSmartgym,
  },
  {
    id: 'bn_calm',
    appKey: 'calm',
    name: 'Calm - Thiền & Giấc ngủ',
    subtitle: 'Sức khỏe & Thể hình',
    rating: '4,6',
    banner: bannerCalm,
    icon: icCalm,
  },
  {
    id: 'bn_kiddopia',
    appKey: 'kiddopia',
    name: 'Kiddopia: Trò chơi giáo dục',
    subtitle: 'Giáo dục • Tư duy cho bé',
    rating: '4,5',
    banner: bannerKiddopia,
    icon: icKiddopia,
  },
  {
    id: 'bn_hypic',
    appKey: 'hypic',
    name: 'Hypic - Chỉnh ảnh & Thiết kế AI',
    subtitle: 'Nhiếp ảnh • Hiệu ứng AI',
    rating: '4,6',
    banner: bannerHypic,
    icon: icHypic,
  },
  {
    id: 'bn_tiktok',
    appKey: 'tiktok',
    name: 'TikTok',
    subtitle: 'Đã cài đặt',
    rating: '4,4',
    installed: true,
    banner: bannerTiktok,
    icon: icTiktok,
  },
];

const BANNER_DECK_STORAGE_KEY = 'chplay_banner_deck_v2';
let memoryBannerDeckState = { deck: [], lastShown: [] };

// Non-repeating deck queue: guarantees 5 distinct banners per view AND zero overlap with the previous draw
function drawUniqueBanners(count = 5) {
  const byKey = new Map(FEATURED_BANNERS_POOL.map((b) => [b.appKey, b]));
  const allKeys = FEATURED_BANNERS_POOL.map((b) => b.appKey);

  let deck = [];
  let lastShown = [];
  try {
    const raw = localStorage.getItem(BANNER_DECK_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.deck)) deck = parsed.deck.filter((k) => byKey.has(k));
      if (Array.isArray(parsed.lastShown)) lastShown = parsed.lastShown.filter((k) => byKey.has(k));
    } else {
      deck = memoryBannerDeckState.deck;
      lastShown = memoryBannerDeckState.lastShown;
    }
  } catch (e) {
    deck = memoryBannerDeckState.deck;
    lastShown = memoryBannerDeckState.lastShown;
  }

  // Deduplicate existing deck just in case
  deck = [...new Set(deck)];

  let pickedKeys = [];
  let nextDeck = [];

  if (deck.length >= count) {
    pickedKeys = deck.slice(0, count);
    nextDeck = deck.slice(count);
  } else {
    // Take remaining unseen cards first, then fill needed slots from cards NOT in lastShown
    const carry = [...deck];
    const needed = count - carry.length;
    const freshCandidates = shuffleArray(
      allKeys.filter((k) => !carry.includes(k) && !lastShown.includes(k))
    );
    const extra = freshCandidates.slice(0, needed);
    pickedKeys = shuffleArray([...carry, ...extra]);

    // Refill deck with all remaining banners not currently on screen
    nextDeck = shuffleArray(allKeys.filter((k) => !pickedKeys.includes(k)));
  }

  memoryBannerDeckState = { deck: nextDeck, lastShown: pickedKeys };
  try {
    localStorage.setItem(BANNER_DECK_STORAGE_KEY, JSON.stringify(memoryBannerDeckState));
  } catch (e) {}

  return pickedKeys.map((k) => byKey.get(k)).filter(Boolean);
}

// Pick N unique apps from a pool while avoiding any appKey already placed on the same screen
function pickUniqueApps(pool, count, usedKeysSet) {
  const shuffled = shuffleArray(pool);
  const selected = [];
  const localSeen = new Set();

  for (const item of shuffled) {
    const key = item.appKey || item.id;
    if (!usedKeysSet.has(key) && !localSeen.has(key)) {
      selected.push(item);
      localSeen.add(key);
      usedKeysSet.add(key);
      if (selected.length === count) return selected;
    }
  }

  // Fallback if pool is smaller than requested after exclusions
  for (const item of shuffled) {
    const key = item.appKey || item.id;
    if (!localSeen.has(key)) {
      selected.push(item);
      localSeen.add(key);
      if (selected.length === count) break;
    }
  }
  return selected;
}

const SPONSORED_APPS_POOL = [
  {
    id: 'dola',
    appKey: 'dola',
    name: 'Dola: Smart AI Assistant',
    developer: 'SPRING (SG) PTE. LTD.',
    categories: 'Công cụ • Năng suất • Trợ lý AI',
    rating: '4,6',
    size: '203 MB',
    downloads: 'Hơn 10 Tr',
    icon: icDola,
  },
  {
    id: 'duolingo',
    appKey: 'duolingo',
    name: 'Duolingo: Ngoại ngữ & Cờ vua',
    developer: 'Duolingo',
    categories: 'Duolingo • Giáo dục',
    rating: '4,7',
    size: '110 MB',
    downloads: 'Hơn 500 Tr',
    icon: icDuolingo,
  },
  {
    id: 'tv360',
    appKey: 'tv360',
    name: 'TV360: Phim, Thể Thao, TV',
    developer: 'Viettel Telecom',
    categories: 'Giải trí • Truyền hình trực tuyến',
    rating: '4,6',
    size: '68 MB',
    downloads: 'Hơn 10 Tr',
    icon: icTv360,
  },
  {
    id: 'vtvgo',
    appKey: 'vtvgo',
    name: 'VTVgo - Truyền hình số Quốc gia',
    developer: 'VTV Digital',
    categories: 'Giải trí • Xem truyền hình VTV',
    rating: '4,4',
    size: '45 MB',
    downloads: 'Hơn 10 Tr',
    icon: icVtvgo,
  },
  {
    id: 'hypic',
    appKey: 'hypic',
    name: 'Hypic: Retouch & Design AI',
    developer: 'Bytedance Pte. Ltd.',
    categories: 'Nhiếp ảnh • Filter & Makeup',
    rating: '4,6',
    size: '138 MB',
    downloads: 'Hơn 50 Tr',
    icon: icHypic,
  },
  {
    id: 'tammi',
    appKey: 'tammi',
    name: 'Viettel Tammi',
    developer: 'Viettel Group',
    categories: 'Lối sống • Nền tảng cuộc sống số',
    rating: '4,7',
    size: '74 MB',
    downloads: 'Hơn 1 Tr',
    icon: icTammi,
  },
  {
    id: 'vnetraffic',
    appKey: 'vnetraffic',
    name: 'VNeTraffic',
    developer: 'Bộ Công an',
    categories: 'Bản đồ & Dẫn đường • Giao thông thông minh',
    rating: '4,5',
    size: '52 MB',
    downloads: 'Hơn 5 Tr',
    icon: icVnetraffic,
  },
  {
    id: 'goodnotes',
    appKey: 'goodnotes',
    name: 'Goodnotes: Ghi chú AI, PDF',
    developer: 'Goodnotes Limited',
    categories: 'Năng suất • Ghi chú & Bảng trắng',
    rating: '4,6',
    size: '164 MB',
    downloads: 'Hơn 10 Tr',
    icon: icGoodnotes,
  },
  {
    id: 'notboringcam',
    appKey: 'notboringcam',
    name: '(Not Boring) Camera',
    developer: 'Not Boring Software',
    categories: 'Nhiếp ảnh • Ảnh & Video chuyên nghiệp',
    rating: '4,7',
    size: '89 MB',
    downloads: 'Hơn 1 Tr',
    icon: icNotboringcam,
  },
  {
    id: 'youtube',
    appKey: 'youtube',
    name: 'YouTube',
    developer: 'Google LLC',
    categories: 'Xem và sửa video • Phát trực tuyến',
    rating: '4,4',
    size: '48 MB',
    downloads: 'Hơn 10 Tỷ',
    icon: icYoutube,
  },
  {
    id: 'mangoplus',
    appKey: 'mangoplus',
    name: 'MangoPlus - Show, Phim HD',
    developer: 'YeaH1',
    categories: 'Giải trí • Ứng dụng giải trí YeaH1',
    rating: '4,5',
    size: '62 MB',
    downloads: 'Hơn 1 Tr',
    icon: icMangoplus,
  },
  {
    id: 'youku',
    appKey: 'youku',
    name: 'YOUKU - Phim, Giải trí Châu Á',
    developer: 'Youku',
    categories: 'Giải trí • Phim HD phụ đề tiếng Việt',
    rating: '4,5',
    size: '84 MB',
    downloads: 'Hơn 50 Tr',
    icon: icYouku,
  },
  {
    id: 'wetv',
    appKey: 'wetv',
    name: 'WeTV - Asian Contents',
    developer: 'Image Future',
    categories: 'Giải trí • Ứng dụng giải trí Châu Á',
    rating: '4,6',
    size: '79 MB',
    downloads: 'Hơn 100 Tr',
    icon: icWetv,
  },
  {
    id: 'premierleague',
    appKey: 'premierleague',
    name: 'Premier League - Official App',
    developer: 'Premier League',
    categories: 'Thể thao • Ngoại hạng Anh',
    rating: '4,7',
    size: '56 MB',
    downloads: 'Hơn 50 Tr',
    icon: icPremierleague,
  },
  {
    id: 'livescore',
    appKey: 'livescore',
    name: 'LiveScore: Tỷ số trực tiếp',
    developer: 'LiveScore',
    categories: 'Thể thao • Tin bóng đá & Thống kê',
    rating: '4,6',
    size: '49 MB',
    downloads: 'Hơn 50 Tr',
    icon: icLivescore,
  },
  {
    id: 'onefootball',
    appKey: 'onefootball',
    name: 'OneFootball - Football Scores',
    developer: 'OneFootball GmbH',
    categories: 'Thể thao • Tin tức & Lịch thi đấu',
    rating: '4,7',
    size: '64 MB',
    downloads: 'Hơn 50 Tr',
    icon: icOnefootball,
  },
  {
    id: 'wsj',
    appKey: 'wsj',
    name: 'The Wall Street Journal',
    developer: 'Dow Jones & Company',
    categories: 'Tin tức & Tạp chí • Tài chính',
    rating: '4,6',
    size: '42 MB',
    downloads: 'Hơn 5 Tr',
    icon: icWsj,
  },
  {
    id: 'wego',
    appKey: 'wego',
    name: 'Wego Chuyến Bay & Khách sạn',
    developer: 'Wego Pte Ltd',
    categories: 'Du lịch & Địa phương • Đặt vé',
    rating: '4,7',
    size: '59 MB',
    downloads: 'Hơn 10 Tr',
    icon: icWego,
  },
  {
    id: 'elk',
    appKey: 'elk',
    name: 'Elk Currency Converter',
    developer: 'Clean Shaven Apps',
    categories: 'Du lịch & Địa phương • Đổi ngoại tệ',
    rating: '4,8',
    size: '24 MB',
    downloads: 'Hơn 1 Tr',
    icon: icElk,
  },
  {
    id: 'journi',
    appKey: 'journi',
    name: 'Journi Blog - Travel Tracker',
    developer: 'Journi GmbH',
    categories: 'Nhiếp ảnh • Nhật ký hành trình',
    rating: '4,7',
    size: '95 MB',
    downloads: 'Hơn 5 Tr',
    icon: icJourni,
  },
  {
    id: 'teams',
    appKey: 'teams',
    name: 'Microsoft Teams',
    developer: 'Microsoft Corporation',
    categories: 'Kinh doanh • Gọi & Cộng tác',
    rating: '4,6',
    size: '118 MB',
    downloads: 'Hơn 500 Tr',
    icon: icTeams,
  },
  {
    id: 'box',
    appKey: 'box',
    name: 'Box: Lưu trữ đám mây',
    developer: 'Box, Inc.',
    categories: 'Năng suất • Quản lý dữ liệu',
    rating: '4,5',
    size: '76 MB',
    downloads: 'Hơn 50 Tr',
    icon: icBox,
  },
  {
    id: 'slack',
    appKey: 'slack',
    name: 'Slack',
    developer: 'Salesforce',
    categories: 'Kinh doanh • Tin nhắn công việc',
    rating: '4,6',
    size: '92 MB',
    downloads: 'Hơn 100 Tr',
    icon: icSlack,
  },
  {
    id: 'daylio',
    appKey: 'daylio',
    name: 'Daylio Nhật ký tâm trạng',
    developer: 'Habitics',
    categories: 'Lối sống • Sức khỏe tinh thần',
    rating: '4,8',
    size: '38 MB',
    downloads: 'Hơn 10 Tr',
    icon: icDaylio,
  },
  {
    id: 'yarnbuddy',
    appKey: 'yarnbuddy',
    name: 'YarnBuddy – Knit and Crochet',
    developer: 'YarnBuddy',
    categories: 'Lối sống • Đan móc thủ công',
    rating: '4,7',
    size: '31 MB',
    downloads: 'Hơn 500 N',
    icon: icYarnbuddy,
  },
  {
    id: 'relaxsound',
    appKey: 'relaxsound',
    name: 'Relaxing Sounds & Thiền',
    developer: 'Wellness Studio',
    categories: 'Sức khỏe • Ngủ ngon & Giảm lo âu',
    rating: '4,7',
    size: '54 MB',
    downloads: 'Hơn 5 Tr',
    icon: icRelaxsound,
  },
  {
    id: 'smartgym',
    appKey: 'smartgym',
    name: 'SmartGym: Gym & Home Workouts',
    developer: 'Mateus Abras',
    categories: 'Sức khỏe & Thể hình • Huấn luyện AI',
    rating: '4,8',
    size: '86 MB',
    downloads: 'Hơn 5 Tr',
    icon: icSmartgym,
  },
  {
    id: 'calm',
    appKey: 'calm',
    name: 'Calm - Thiền & Giấc ngủ',
    developer: 'Calm.com, Inc.',
    categories: 'Sức khỏe & Thể hình • Thiền định',
    rating: '4,6',
    size: '112 MB',
    downloads: 'Hơn 50 Tr',
    icon: icCalm,
  },
  {
    id: 'aliexpress',
    appKey: 'aliexpress',
    name: 'AliExpress - Shopping App',
    developer: 'Alibaba Mobile',
    categories: 'Alibaba Mobile • Mua sắm',
    rating: '4,1',
    size: '28 MB',
    downloads: 'Hơn 500 Tr',
    icon: icAliExpress,
  },
  {
    id: 'crunchyroll',
    appKey: 'crunchyroll',
    name: 'Crunchyroll: Anime Streaming',
    developer: 'Crunchyroll, LLC',
    categories: 'Crunchyroll, LLC • Giải trí',
    rating: '4,1',
    size: '110 MB',
    downloads: 'Hơn 100 Tr',
    icon: icCrunchyroll,
  },
  {
    id: 'shopeepay',
    appKey: 'shopeepay',
    name: 'ShopeePay - Ví điện tử',
    developer: 'ShopeePay VN',
    categories: 'Tài chính • Thanh toán nhanh',
    rating: '4,5',
    size: '64 MB',
    downloads: 'Hơn 10 Tr',
    icon: icShopeePay,
  },
  {
    id: 'bigolive',
    appKey: 'bigolive',
    name: 'Bigo Live – Live Stream',
    developer: 'BIGO TECHNOLOGY',
    categories: 'Giải trí • Phát trực tiếp',
    rating: '4,1',
    size: '92 MB',
    downloads: 'Hơn 500 Tr',
    icon: icBigoLive,
  },
  {
    id: 'iqiyi_sp',
    appKey: 'iqiyi',
    name: 'iQIYI - Phim & Anime',
    developer: 'iQIYI',
    categories: 'Giải trí • Xem phim trực tuyến',
    rating: '4,6',
    size: '58 MB',
    downloads: 'Hơn 100 Tr',
    icon: icIqiyi,
  },
  {
    id: 'messenger_sp',
    appKey: 'messenger',
    name: 'Messenger',
    developer: 'Meta Platforms, Inc.',
    categories: 'Liên lạc • Nhắn tin & Gọi điện',
    rating: '4,5',
    size: '54 MB',
    downloads: 'Hơn 5 Tỷ',
    icon: icMessenger,
  },
  {
    id: 'instalite_sp',
    appKey: 'instalite',
    name: 'Instagram Lite',
    developer: 'Meta Platforms, Inc.',
    categories: 'Xã hội • Chia sẻ ảnh & Video',
    rating: '4,2',
    size: '3,8 MB',
    downloads: 'Hơn 500 Tr',
    icon: icInstaLite,
  },
  {
    id: 'rednote_sp',
    appKey: 'rednote',
    name: 'rednote',
    developer: 'Xingin',
    categories: 'Xã hội • Cộng đồng sáng tạo',
    rating: '4,4',
    size: '192 MB',
    downloads: 'Hơn 100 Tr',
    icon: icRednote,
  },
  {
    id: 'blockblast',
    appKey: 'blockblast',
    name: 'Block Blast!',
    developer: 'Hungry Studio',
    categories: 'Giải đố • Xếp hình • Vui tươi',
    rating: '4,7',
    size: '105 MB',
    downloads: 'Hơn 100 Tr',
    icon: icBlockBlast,
  },
];

const POPULAR_SQUARE_POOL = [
  { id: 'pop_tv360', appKey: 'tv360', name: 'TV360: Phim, Thể Thao, TV', rating: '4,6', icon: icTv360 },
  { id: 'pop_vtvgo', appKey: 'vtvgo', name: 'VTVgo Truyền hình số', rating: '4,4', icon: icVtvgo },
  { id: 'pop_hypic', appKey: 'hypic', name: 'Hypic: Chỉnh ảnh AI', rating: '4,6', icon: icHypic },
  { id: 'pop_tammi', appKey: 'tammi', name: 'Viettel Tammi', rating: '4,7', icon: icTammi },
  { id: 'pop_vnetraffic', appKey: 'vnetraffic', name: 'VNeTraffic', rating: '4,5', icon: icVnetraffic },
  { id: 'pop_goodnotes', appKey: 'goodnotes', name: 'Goodnotes: Ghi chú AI', rating: '4,6', icon: icGoodnotes },
  { id: 'pop_youtube', appKey: 'youtube', name: 'YouTube', rating: '4,4', icon: icYoutube },
  { id: 'pop_mangoplus', appKey: 'mangoplus', name: 'MangoPlus - Show, Phim', rating: '4,5', icon: icMangoplus },
  { id: 'pop_youku', appKey: 'youku', name: 'YOUKU - Phim Châu Á', rating: '4,5', icon: icYouku },
  { id: 'pop_wetv', appKey: 'wetv', name: 'WeTV - Asian Contents', rating: '4,6', icon: icWetv },
  { id: 'pop_epl', appKey: 'premierleague', name: 'Premier League', rating: '4,7', icon: icPremierleague },
  { id: 'pop_livescore', appKey: 'livescore', name: 'LiveScore: Tỷ số trực tiếp', rating: '4,6', icon: icLivescore },
  { id: 'pop_onefootball', appKey: 'onefootball', name: 'OneFootball - Bóng đá', rating: '4,7', icon: icOnefootball },
  { id: 'pop_notboring', appKey: 'notboringcam', name: '(Not Boring) Camera', rating: '4,7', icon: icNotboringcam },
  { id: 'pop_teams', appKey: 'teams', name: 'Microsoft Teams', rating: '4,6', icon: icTeams },
  { id: 'pop_slack', appKey: 'slack', name: 'Slack', rating: '4,6', icon: icSlack },
  { id: 'pop_wego', appKey: 'wego', name: 'Wego Chuyến Bay', rating: '4,7', icon: icWego },
  { id: 'pop_calm', appKey: 'calm', name: 'Calm - Thiền & Ngủ', rating: '4,6', icon: icCalm },
  { id: 'pop_daylio', appKey: 'daylio', name: 'Daylio Nhật ký', rating: '4,8', icon: icDaylio },
  { id: 'tiktoklite', appKey: 'tiktoklite', name: 'TikTok Lite - Tiết kiệm bộ nhớ', rating: '4,1', icon: icTiktokLite },
  { id: 'messenger', appKey: 'messenger', name: 'Messenger', rating: '4,5', icon: icMessenger },
  { id: 'iqiyi', appKey: 'iqiyi', name: 'iQIYI - Phim & Anime', rating: '4,6', icon: icIqiyi },
  { id: 'shopeepay2', appKey: 'shopeepay', name: 'ShopeePay - Tài Chính', rating: '4,5', icon: icShopeePay },
  { id: 'bigolive2', appKey: 'bigolive', name: 'Bigo Live – Live Stream', rating: '4,1', icon: icBigoLive },
  { id: 'duolingo2', appKey: 'duolingo', name: 'Duolingo: Ngoại ngữ', rating: '4,7', icon: icDuolingo },
  { id: 'instalite2', appKey: 'instalite', name: 'Instagram Lite', rating: '4,2', icon: icInstaLite },
  { id: 'rednote2', appKey: 'rednote', name: 'rednote', rating: '4,4', icon: icRednote },
];

const SOCIAL_APPS_POOL = [
  {
    id: 'fblite',
    appKey: 'fblite',
    name: 'Facebook Lite',
    desc: 'Phiên bản này sử dụng ít dữ liệu hơn và hoạt động với tất cả các điều kiện mạng.',
    rating: '4,4',
    size: '3,5 MB',
    icon: icFbLite,
  },
  {
    id: 'instalite',
    appKey: 'instalite',
    name: 'Instagram Lite',
    desc: 'Xem và chia sẻ ảnh, tin, video ngắn, thước phim với ít dữ liệu hơn.',
    rating: '4,2',
    size: '3,8 MB',
    icon: icInstaLite,
  },
  {
    id: 'rednote',
    appKey: 'rednote',
    name: 'rednote',
    desc: 'Khám phá phong cách sống, mẹo hay và kết nối cộng đồng sáng tạo trẻ.',
    rating: '4,4',
    size: '192 MB',
    icon: icRednote,
  },
  {
    id: 'messenger_soc',
    appKey: 'messenger',
    name: 'Messenger',
    desc: 'Nhắn tin, gọi thoại và gọi video miễn phí tới bạn bè và gia đình mọi lúc.',
    rating: '4,5',
    size: '54 MB',
    icon: icMessenger,
  },
  {
    id: 'tiktoklite_soc',
    appKey: 'tiktoklite',
    name: 'TikTok Lite - Tiết kiệm bộ nhớ',
    desc: 'Cộng đồng video ngắn toàn cầu, tải nhanh và tiết kiệm dung lượng bộ nhớ.',
    rating: '4,1',
    size: '18 MB',
    icon: icTiktokLite,
  },
  {
    id: 'teams_soc',
    appKey: 'teams',
    name: 'Microsoft Teams',
    desc: 'Trò chuyện nhóm, họp video HD và cộng tác tài liệu mọi lúc mọi nơi.',
    rating: '4,6',
    size: '118 MB',
    icon: icTeams,
  },
  {
    id: 'slack_soc',
    appKey: 'slack',
    name: 'Slack',
    desc: 'Kết nối đội ngũ, kênh trao đổi công việc và chia sẻ tệp tức thì.',
    rating: '4,6',
    size: '92 MB',
    icon: icSlack,
  },
  {
    id: 'bigolive_soc',
    appKey: 'bigolive',
    name: 'Bigo Live – Live Stream',
    desc: 'Phát trực tiếp, trò chuyện video và giao lưu cùng bạn bè bốn phương.',
    rating: '4,1',
    size: '92 MB',
    icon: icBigoLive,
  },
  {
    id: 'journi_soc',
    appKey: 'journi',
    name: 'Journi Blog - Nhật ký du lịch',
    desc: 'Lưu giữ và chia sẻ hành trình khám phá qua bản đồ và album ảnh đẹp mắt.',
    rating: '4,7',
    size: '95 MB',
    icon: icJourni,
  },
  {
    id: 'youtube_soc',
    appKey: 'youtube',
    name: 'YouTube',
    desc: 'Thưởng thức video, Shorts, âm nhạc và theo dõi các nhà sáng tạo yêu thích.',
    rating: '4,4',
    size: '48 MB',
    icon: icYoutube,
  },
];

const GAMES_LIST_POOL = [
  {
    id: 'blockblast_g',
    appKey: 'blockblast',
    name: 'Block Blast!',
    categories: 'Giải đố • Xếp hình • Vui tươi',
    rating: '4,7',
    size: '105 MB',
    icon: icBlockBlast,
  },
  {
    id: 'swordstaff',
    appKey: 'swordstaff',
    name: 'Sword x Staff',
    categories: 'Nhập vai • Phiêu lưu',
    rating: '4,8',
    size: '681 MB',
    icon: icSwordStaff,
  },
  {
    id: 'tocchien_g',
    appKey: 'tocchien',
    name: 'Liên Minh: Tốc Chiến',
    categories: 'Hành động • Đấu trường MOBA 5v5',
    rating: '4,3',
    size: '1,4 GB',
    icon: icTocChien,
  },
  {
    id: 'candycrush_g',
    appKey: 'candycrush',
    name: 'Candy Crush Saga',
    categories: 'Giải đố • Xếp kẹo • Phổ thông',
    rating: '4,6',
    size: '98 MB',
    icon: icCandyCrush,
  },
  {
    id: 'candysoda_g',
    appKey: 'candysoda',
    name: 'Candy Crush Soda Saga',
    categories: 'Giải đố • Ghép 3 • Vui nhộn',
    rating: '4,5',
    size: '104 MB',
    icon: icCandySoda,
  },
  {
    id: 'traveltown_g',
    appKey: 'traveltown',
    name: 'Travel Town - VTC Game',
    categories: 'Phổ thông • Hợp nhất • Phiêu lưu',
    rating: '4,2',
    size: '142 MB',
    icon: icTravelTown,
  },
  {
    id: 'kiddopia_g',
    appKey: 'kiddopia',
    name: 'Kiddopia: Trò chơi sáng tạo',
    categories: 'Giáo dục • Trò chơi tư duy',
    rating: '4,5',
    size: '185 MB',
    icon: icKiddopia,
  },
  {
    id: 'duolingo_g',
    appKey: 'duolingo',
    name: 'Duolingo: Ngoại ngữ & Cờ vua',
    categories: 'Cờ bàn • Trí tuệ • Giáo dục',
    rating: '4,7',
    size: '110 MB',
    icon: icDuolingo,
  },
];

const HANDY_GAMES_POOL = [
  { id: 'candycrush', appKey: 'candycrush', name: 'Candy Crush Saga', rating: '4,6', icon: icCandyCrush },
  { id: 'candysoda', appKey: 'candysoda', name: 'Candy Crush Soda Saga', rating: '4,5', icon: icCandySoda },
  { id: 'traveltown', appKey: 'traveltown', name: 'Travel Town - VTC Game', rating: '4,2', icon: icTravelTown },
  { id: 'blockblast_sq', appKey: 'blockblast', name: 'Block Blast!', rating: '4,7', icon: icBlockBlast },
  { id: 'swordstaff_sq', appKey: 'swordstaff', name: 'Sword x Staff', rating: '4,8', icon: icSwordStaff },
  { id: 'tocchien_sq', appKey: 'tocchien', name: 'Liên Minh: Tốc Chiến', rating: '4,3', icon: icTocChien },
  { id: 'kiddopia_sq', appKey: 'kiddopia', name: 'Kiddopia Toddler Games', rating: '4,5', icon: icKiddopia },
];

function formatDaysAgoDate(daysAgo) {
  const d = new Date(Date.now() - daysAgo * 86400000);
  return `${d.getDate()}/${d.getMonth() + 1}/${String(d.getFullYear()).slice(-2)}`;
}

const VSSID_REVIEWS_POOL = [
  {
    id: 'rv_tichnguyen',
    author: 'tich nguyen',
    initial: 'T',
    avatarBg: 'linear-gradient(145deg, #1e6b5c 0%, #3d9970 55%, #88c999 100%)',
    avatarFg: '#ffffff',
    stars: 1,
    daysAgo: 7,
    relTime: '7 ngày trước',
    helpfulBase: 40,
    featured: true,
    content: 'ứng dụng xử lý thông tin rất chậm.báo lỗi liên tục.đề nghị cơ quan bảo hiểm lên xoá bỏ app đi',
  },
  {
    id: 'rv_didongthegioi',
    author: 'Di Động Thế Giới',
    initial: 'D',
    avatarBg: 'linear-gradient(145deg, #d4e157 0%, #afb42b 100%)',
    avatarFg: '#1f1f1f',
    stars: 1,
    daysAgo: 15,
    relTime: '2 tuần trước',
    helpfulBase: 54,
    featured: true,
    content: 'Đăng nhập xong load mãi không xem được gì. mất cả cơ sở dữ liệu cũ mà không biết lí do, yêu cầu xử lí thì không giải quyết cho dân, đẩy trách nhiệm từ bên này qua bên khác, còn đổ lỗi cho dân. nói chung bhxh rất tệ, không đảm bảo quyền lợi gì cho dân cả',
  },
  {
    id: 'rv_gaunhoibom',
    author: 'Gấu Nhồi Bơm',
    initial: 'G',
    avatarBg: 'linear-gradient(145deg, #6d4c41 0%, #4e342e 100%)',
    avatarFg: '#ffffff',
    stars: 1,
    daysAgo: 19,
    relTime: '2 tuần trước',
    helpfulBase: 90,
    featured: true,
    content: 'tệ, lỗi liên tục, chưa thấy app nào tệ như app này làm đủ các thể loại xong rồi vẫn lỗi không vào được',
  },
  {
    id: 'rv_minhhoang',
    author: 'Minh Hoàng Nguyễn',
    initial: 'M',
    avatarBg: '#1a73e8',
    avatarFg: '#ffffff',
    stars: 5,
    daysAgo: 4,
    relTime: '4 ngày trước',
    helpfulBase: 28,
    featured: false,
    content: 'Ứng dụng rất tiện lợi khi đi khám chữa bệnh bằng thẻ BHYT điện tử, không cần mang thẻ giấy. Tra cứu quá trình đóng BHXH và BHTN đầy đủ, rõ ràng.',
  },
  {
    id: 'rv_thuha',
    author: 'Trần Thu Hà',
    initial: 'H',
    avatarBg: '#c2185b',
    avatarFg: '#ffffff',
    stars: 5,
    daysAgo: 9,
    relTime: '9 ngày trước',
    helpfulBase: 19,
    featured: false,
    content: 'Đăng nhập bằng VNeID nhanh, xem được chi tiết mức đóng BHXH từng tháng của công ty, rất hữu ích cho người lao động.',
  },
  {
    id: 'rv_vandung',
    author: 'Lê Văn Dũng',
    initial: 'D',
    avatarBg: '#00796b',
    avatarFg: '#ffffff',
    stars: 4,
    daysAgo: 12,
    relTime: '12 ngày trước',
    helpfulBase: 14,
    featured: false,
    content: 'Tra cứu sổ khám chữa bệnh và thẻ BHYT khá ổn, tuy nhiên giờ cao điểm đôi lúc tải hơi lâu một chút.',
  },
  {
    id: 'rv_quocbao',
    author: 'Phạm Quốc Bảo',
    initial: 'B',
    avatarBg: '#ef6c00',
    avatarFg: '#ffffff',
    stars: 3,
    daysAgo: 23,
    relTime: '3 tuần trước',
    helpfulBase: 11,
    featured: false,
    content: 'Giao diện dễ nhìn, đầy đủ thông tin bảo hiểm xã hội nhưng cần cải thiện thêm tốc độ phản hồi máy chủ.',
  },
  {
    id: 'rv_yennhi',
    author: 'Hoàng Yến Nhi',
    initial: 'N',
    avatarBg: '#7b1fa2',
    avatarFg: '#ffffff',
    stars: 5,
    daysAgo: 27,
    relTime: '3 tuần trước',
    helpfulBase: 22,
    featured: false,
    content: 'Tiện ích thiết thực, đi viện chỉ cần mở hình ảnh thẻ BHYT trên VssID là quét mã được ngay.',
  },
];

// Build synchronized, cross-deduplicated store layout so NO two banners or visible apps collide on the same screen
function buildFreshStoreLayout(existingBanners = null) {
  const featuredBanners = existingBanners || drawUniqueBanners(5);

  // Deduplicate across the entire Apps tab (5 banners + 3 sponsored + 6 popular + 3 social = 17 completely distinct apps!)
  const usedOnAppsTab = new Set(featuredBanners.map((b) => b.appKey));
  const randomAppsSponsored = pickUniqueApps(SPONSORED_APPS_POOL, 3, usedOnAppsTab);
  const randomPopularSquares = pickUniqueApps(POPULAR_SQUARE_POOL, 6, usedOnAppsTab);
  const randomSocialApps = pickUniqueApps(SOCIAL_APPS_POOL, 3, usedOnAppsTab);

  // Deduplicate across the Games tab
  const usedOnGamesTab = new Set();
  const randomGamesList = pickUniqueApps(GAMES_LIST_POOL, 3, usedOnGamesTab);
  const randomHandyGames = pickUniqueApps(HANDY_GAMES_POOL, 5, usedOnGamesTab);

  // Deduplicate across Search & Search Results
  const usedOnSearch = new Set();
  const randomSearchStrip = pickUniqueApps(SPONSORED_APPS_POOL, 6, usedOnSearch);
  const randomSearchInputAds = pickUniqueApps(SPONSORED_APPS_POOL, 3, usedOnSearch);
  const randomLimitedEvents = pickUniqueApps(SPONSORED_APPS_POOL, 4, new Set());

  // Deduplicate across VssID Detail Page (2 spotlight banners + 6 sponsored stack apps + 8 similar apps = 16 distinct apps!)
  const usedOnDetail = new Set();
  const sponsoredByKey = new Map(SPONSORED_APPS_POOL.map((a) => [a.appKey, a]));
  const detailSponsoredBanners = shuffleArray(FEATURED_BANNERS_POOL)
    .slice(0, 2)
    .map((b) => {
      usedOnDetail.add(b.appKey);
      const matched = sponsoredByKey.get(b.appKey);
      return {
        ...b,
        developer: matched ? matched.developer : 'Google Play Partner',
        categories: matched ? matched.categories : b.subtitle,
      };
    });
  const detailSponsoredCol1 = pickUniqueApps(SPONSORED_APPS_POOL, 3, usedOnDetail);
  const detailSponsoredCol2 = pickUniqueApps(SPONSORED_APPS_POOL, 3, usedOnDetail);
  const detailSimilarApps = pickUniqueApps(POPULAR_SQUARE_POOL, 8, usedOnDetail);

  return {
    featuredBanners,
    randomAppsSponsored,
    randomPopularSquares,
    randomSocialApps,
    randomGamesList,
    randomHandyGames,
    randomSearchStrip,
    randomSearchInputAds,
    randomLimitedEvents,
    detailSponsoredBanners,
    detailSponsoredCol1,
    detailSponsoredCol2,
    detailSimilarApps,
    randomBestsellerBooks: shuffleArray(BOOKS_BESTSELLERS_POOL),
    randomDiscountBooks: shuffleArray(BOOKS_DISCOUNT_POOL),
  };
}

const BOOKS_BESTSELLERS_POOL = [
  { id: 'b1', title: 'Tư Duy Nhanh Và Chậm - Thi...', sub: '', price: '110.962', cover: book1 },
  { id: 'b2', title: 'Hell Mode ~ Triệ...', sub: 'Tập 9', price: '49.500', cover: book2 },
  { id: 'b3', title: 'Đắc Nhân Tâm', sub: '', price: '49.500', cover: book3 },
];

const BOOKS_DISCOUNT_POOL = [
  { id: 'b4', title: 'The Wolf King...', sub: 'Sách 1', price: '233.322', cover: book4 },
  { id: 'b5', title: 'Starving Anony...', sub: 'Tập 6', price: '171.146', cover: book5 },
  { id: 'b6', title: 'Ajin: Demi Hum...', sub: 'Tập 1', price: '28.286', cover: book6 },
];

const GAME_CATEGORIES = [
  { name: 'Hành động', icon: catGAction },
  { name: 'Mô phỏng', icon: catGSim },
  { name: 'Giải đố', icon: catGPuzzle },
  { name: 'Phiêu lưu', icon: catGAdv },
  { name: 'Đua xe', icon: catGRace },
  { name: 'Nhập vai', icon: catGRpg },
  { name: 'Chiến thuật', icon: catGStrat },
  { name: 'Thể thao', icon: catGSport },
  { name: 'Thẻ bài', icon: catGCard },
  { name: 'Cờ bàn', icon: catGBoard },
];

const APP_CATEGORIES = [
  { name: 'Giải trí', icon: catAEnt },
  { name: 'Xã hội', icon: catASocial },
  { name: 'Năng suất', icon: catAProd },
  { name: 'Liên lạc', icon: catAComm },
  { name: 'Nhạc và Âm\nthanh', icon: catAMusic },
  { name: 'Nhiếp ảnh', icon: catAPhoto },
  { name: 'Mua sắm', icon: catAShop },
  { name: 'Giáo dục', icon: catAEdu },
  { name: 'Nghệ thuật và\nthiết kế', icon: catAArt },
  { name: 'Cá nhân hóa', icon: catAPers },
  { name: 'Thời tiết', icon: catAWeather },
  { name: 'Làm đẹp', icon: catABeauty },
];

// Material 3 Expressive 12-scallop badge spinner (exact match to frame_27.2.png & frame_49.2.png)
const PlayScallopSpinner = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    minHeight: '360px',
  }}>
    <svg
      width="42"
      height="42"
      viewBox="0 0 100 100"
      style={{ animation: 'chplaySpin 1.35s linear infinite' }}
    >
      <path
        fill="#0b57d0"
        d="M50 4 C54 4, 57 8, 61 7 C65 6, 69 3, 73 5 C77 7, 77 12, 80 15 C83 18, 88 18, 90 22 C92 26, 89 30, 90 34 C91 38, 96 41, 96 45 C96 49, 91 52, 90 56 C89 60, 92 64, 90 68 C88 72, 83 72, 80 75 C77 78, 77 83, 73 85 C69 87, 65 84, 61 85 C57 86, 54 90, 50 90 C46 90, 43 86, 39 85 C35 84, 31 87, 27 85 C23 83, 23 78, 20 75 C17 72, 12 72, 10 68 C8 64, 11 60, 10 56 C9 52, 4 49, 4 45 C4 41, 9 38, 10 34 C11 30, 8 26, 10 22 C12 18, 17 18, 20 15 C23 12, 23 7, 27 5 C31 3, 35 6, 39 7 C43 8, 46 4, 50 4 Z"
      />
    </svg>
  </div>
);

// Official 4-color Google Play triangle logo
const PlayLogoTriangle = ({ size = 26 }) => (
  <img
    src={icChPlayLogo}
    alt="CH Play"
    style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain', display: 'block', flexShrink: 0 }}
    draggable={false}
  />
);

// Small rating pill [4,6 ★] matching video
const RatingPill = ({ rating }) => (
  <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2px',
    background: '#f0f4f9',
    borderRadius: '6px',
    padding: '1px 6px',
    fontSize: '11.5px',
    color: '#444746',
    fontWeight: 500,
    lineHeight: '16px',
  }}>
    {rating}
    <span style={{ color: '#0b57d0', fontSize: '11px' }}>★</span>
  </span>
);

// Small downloads pill [↓ Hơn 500 Tr] matching video
const DownloadsPill = ({ text }) => (
  <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '3px',
    background: '#f0f4f9',
    borderRadius: '6px',
    padding: '1px 6px',
    fontSize: '11.5px',
    color: '#444746',
    fontWeight: 500,
    lineHeight: '16px',
  }}>
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0b57d0" strokeWidth="2.5">
      <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    {text}
  </span>
);

export default function CHPlay({ onOpenVssID }) {
  // Default bottom tab is 'apps' ('Ứng dụng') just like frame_03.5.png
  const [bottomTab, setBottomTab] = useState('apps'); // 'games' | 'apps' | 'search' | 'books' | 'you'
  // Sub-views inside CH Play: 'main' | 'search_input' | 'search_loading' | 'search_results' | 'vssid_detail'
  const [view, setView] = useState('main');
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('vssid bảo hiểm y tế');
  const [youTabLoading, setYouTabLoading] = useState(false);

  // Fullscreen screenshot lightbox state (frame_35.5.png)
  const [previewShot, setPreviewShot] = useState(null);

  // "Cài đặt trên thiết bị khác" bottom sheet state (frame_42.5.png)
  const [otherDevicesSheetOpen, setOtherDevicesSheetOpen] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState({
    thisPhone: true,
    tablet1: false,
    phone2: false,
    tablet2: false,
  });

  // Google Play Account Popup state ("phần tài khoản gg play")
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [accountName] = useState(() => SESSION_GOOGLE_PROFILE.name);
  const [accountEmail] = useState(() => SESSION_GOOGLE_PROFILE.email);
  const [accountInitial] = useState(() => SESSION_GOOGLE_PROFILE.initial);
  const [accountColor] = useState(() => SESSION_GOOGLE_PROFILE.color);
  const [notifBadge] = useState(() => SESSION_GOOGLE_PROFILE.notifBadge);

  // Install state for VssID: 'not_installed' | 'pending' | 'downloading' | 'installing' | 'installed'
  const [installState, setInstallState] = useState(() => {
    return localStorage.getItem('chplay_vssid_installed') === 'true'
      ? 'installed'
      : 'not_installed';
  });
  const [progress, setProgress] = useState(0);

  // Synchronized, non-repeating randomized banners & app lists
  const [storeLayout, setStoreLayout] = useState(() => buildFreshStoreLayout());
  const [activeBannerIdx, setActiveBannerIdx] = useState(0);
  const bannerCarouselRef = useRef(null);

  const {
    featuredBanners,
    randomAppsSponsored,
    randomPopularSquares,
    randomSocialApps,
    randomGamesList,
    randomHandyGames,
    randomSearchStrip,
    randomSearchInputAds,
    randomLimitedEvents,
    detailSponsoredBanners,
    detailSponsoredCol1,
    detailSponsoredCol2,
    detailSimilarApps,
    randomBestsellerBooks,
    randomDiscountBooks,
  } = storeLayout;

  // Interactive states for VssID Full Detail View (matching d:\vss 2 reference video)
  const [detailDeviceChip, setDetailDeviceChip] = useState('phone'); // 'phone' | 'xr' | 'pc' | 'tablet'
  const [userRating, setUserRating] = useState(0);
  const [writeReviewOpen, setWriteReviewOpen] = useState(false);
  const [userReviewDraft, setUserReviewDraft] = useState('');
  const [submittedUserReview, setSubmittedUserReview] = useState(null);
  const [helpfulVotes, setHelpfulVotes] = useState({}); // { [reviewId]: 'yes' | 'no' }
  const [supportExpanded, setSupportExpanded] = useState(false);
  const [detailSubSheet, setDetailSubSheet] = useState(null); // null | 'about' | 'reviews' | 'datasafety' | 'similar'
  const [reviewsStarFilter, setReviewsStarFilter] = useState('all'); // 'all' | 5 | 4 | 3 | 2 | 1
  const [detailMenuOpen, setDetailMenuOpen] = useState(false);
  const [autoUpdateEnabled, setAutoUpdateEnabled] = useState(true);
  const [wishlisted, setWishlisted] = useState(false);
  const [detailInfoDialog, setDetailInfoDialog] = useState(null); // null | 'gov' | 'age' | 'verified' | 'refund'
  const detailScrollRef = useRef(null);

  const openVssidDetail = () => {
    reshuffleAllLists(false);
    setDetailSubSheet(null);
    setDetailMenuOpen(false);
    setSupportExpanded(false);
    setView('vssid_detail');
    setTimeout(() => {
      if (detailScrollRef.current) {
        detailScrollRef.current.scrollTop = 0;
      }
    }, 0);
  };

  const reshuffleAllLists = (rotateBanners = false) => {
    setStoreLayout((prev) => buildFreshStoreLayout(rotateBanners ? null : prev.featuredBanners));
    if (rotateBanners) {
      setActiveBannerIdx(0);
      if (bannerCarouselRef.current) {
        bannerCarouselRef.current.scrollLeft = 0;
      }
    }
  };

  const searchInputRef = useRef(null);
  const timersRef = useRef([]);

  // Sync Android SystemBars safe-area insets (3-button touch nav ||| O <, gesture bar, camera notch)
  useEffect(() => {
    const syncSystemBars = () => {
      try {
        window.CapacitorSystemBarsAndroidInterface?.onDOMReady?.();
        window.Capacitor?.Plugins?.SystemBars?.setStyle?.({ style: 'LIGHT' });
      } catch (err) {
        // Ignore on standard web browsers
      }
    };

    syncSystemBars();
    const t1 = setTimeout(syncSystemBars, 150);
    const t2 = setTimeout(syncSystemBars, 500);
    window.addEventListener('resize', syncSystemBars);
    document.addEventListener('visibilitychange', syncSystemBars);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', syncSystemBars);
      document.removeEventListener('visibilitychange', syncSystemBars);
    };
  }, []);

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (view === 'search_input' && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 60);
    }
  }, [view]);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const handleStartInstall = (e) => {
    if (e) e.stopPropagation();
    if (installState !== 'not_installed') return;
    setOtherDevicesSheetOpen(false);
    clearTimers();
    setInstallState('pending');
    setProgress(0);

    // Randomize total download + install duration between 3.3s (3300ms) and 7.7s (7700ms) each install
    const totalDurationMs = Math.floor(3300 + Math.random() * (7700 - 3300 + 1));
    const pendingEndMs = Math.min(700, Math.max(380, Math.round(totalDurationMs * (0.11 + Math.random() * 0.03))));
    const installDurationMs = Math.min(1400, Math.max(750, Math.round(totalDurationMs * (0.21 + Math.random() * 0.04))));
    const hold100Ms = 260;
    const downloadCompleteMs = totalDurationMs - installDurationMs - hold100Ms;
    const downloadSpanMs = Math.max(1200, downloadCompleteMs - pendingEndMs);

    const tickCount = Math.max(5, Math.min(13, Math.round(downloadSpanMs / 380)));
    const weights = Array.from({ length: tickCount }, () => 0.45 + Math.random() * 1.1);
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);

    const steps = [];
    let accWeight = 0;
    let prevPct = 0;
    for (let i = 0; i < tickCount; i++) {
      accWeight += weights[i];
      const isLast = i === tickCount - 1;
      const delay = isLast
        ? downloadCompleteMs
        : Math.round(pendingEndMs + (downloadSpanMs * i) / (tickCount - 1));
      const rawPct = isLast ? 100 : Math.round((accWeight / totalWeight) * 100);
      const pct = isLast
        ? 100
        : Math.min(99 - (tickCount - 1 - i), Math.max(prevPct + 1, rawPct));
      prevPct = pct;
      steps.push({ delay, state: 'downloading', pct });
    }
    steps.push({ delay: totalDurationMs - installDurationMs, state: 'installing', pct: 100 });
    steps.push({ delay: totalDurationMs, state: 'installed', pct: 100 });

    steps.forEach((step) => {
      const t = setTimeout(() => {
        setInstallState(step.state);
        setProgress(step.pct);
        if (step.state === 'installed') {
          localStorage.setItem('chplay_vssid_installed', 'true');
        }
      }, step.delay);
      timersRef.current.push(t);
    });
  };

  const handleCancelInstall = (e) => {
    if (e) e.stopPropagation();
    clearTimers();
    setInstallState('not_installed');
    setProgress(0);
  };

  const handleUninstall = (e) => {
    if (e) e.stopPropagation();
    clearTimers();
    localStorage.removeItem('chplay_vssid_installed');
    setInstallState('not_installed');
    setProgress(0);
  };

  const handleOpenApp = (e) => {
    if (e) e.stopPropagation();
    if (onOpenVssID) {
      onOpenVssID();
    }
  };

  // Trigger search with 0.4s blue 12-scallop spinner just like frame_27.2.png
  const executeSearch = (qText) => {
    const finalQuery = (qText || searchQuery || 'vssid').trim();
    reshuffleAllLists();
    setSearchQuery(finalQuery);
    setSubmittedQuery(finalQuery);
    setBottomTab('search');
    setView('search_loading');
    const t = setTimeout(() => {
      setView('search_results');
    }, 420);
    timersRef.current.push(t);
  };

  // Switch bottom tab — reshuffles app lists and rotates non-repeating banners when visiting Apps!
  const handleSelectBottomTab = (tabId) => {
    reshuffleAllLists(tabId === 'apps');
    setBottomTab(tabId);
    setView('main');
    if (tabId === 'you') {
      setYouTabLoading(true);
      const t = setTimeout(() => setYouTabLoading(false), 360);
      timersRef.current.push(t);
    }
  };

  // Dynamic autocomplete suggestions matching frame_24.5.png ("vs") and frame_26.0.png ("vss")
  const getAutocompleteSuggestions = (raw) => {
    const q = raw.trim().toLowerCase();
    if (!q) return [];
    if (q === 'v' || q === 'vs') {
      return [
        'viettel tammi',
        'vneid',
        'vietcombank',
        'vnetraffic',
        'vssid',
      ];
    }
    if (q.startsWith('vss') || q.includes('bhxh') || q.includes('bảo hiểm')) {
      return [
        'vsss',
        'vssid',
        'vssid phiên bản mới nhất',
        'vssid vneid',
        'vssid bảo hiểm y tế',
      ];
    }
    return [
      q,
      `${q} phiên bản mới nhất`,
      'vssid',
      'vssid bảo hiểm y tế',
      'vneid',
    ];
  };

  // Top Header for Apps / Games / Books / You (Play triangle left, Bell '1' + Orange 'J' avatar right)
  const renderPlayTopHeader = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 18px 8px',
      background: '#ffffff',
    }}>
      <PlayLogoTriangle size={27} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Notification Bell with red badge "1" */}
        <div
          onClick={() => setAccountModalOpen(true)}
          style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="1.9">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{
            position: 'absolute',
            top: '-3px',
            right: '-4px',
            background: '#b3261e',
            color: '#ffffff',
            fontSize: '10px',
            fontWeight: 700,
            minWidth: '16px',
            padding: '0 3px',
            boxSizing: 'border-box',
            height: '16px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1.5px solid #ffffff',
            borderRadius: '999px',
          }}>
            {notifBadge}
          </span>
        </div>

        {/* Orange "J" Google Account Avatar */}
        <div
          onClick={() => setAccountModalOpen(true)}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: accountColor,
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          {accountInitial}
        </div>
      </div>
    </div>
  );

  // Filter chips row for Apps / Games / Books
  const renderFilterChips = (mode) => {
    const chips = mode === 'games'
      ? [
          { label: 'Bảng xếp hạng', icon: 'chart' },
          { label: 'Có tính phí', icon: 'diamond' },
          { label: 'Thiết bị khác', icon: 'devices' },
          { label: 'Trẻ em', icon: 'star' },
        ]
      : mode === 'books'
      ? [
          { label: 'Bảng xếp hạng', icon: 'chart' },
          { label: 'Sách mới phát hành', icon: 'star' },
          { label: 'Thể loại', icon: 'devices' },
        ]
      : [
          { label: 'Bảng xếp hạng', icon: 'chart' },
          { label: 'Thiết bị khác', icon: 'devices' },
          { label: 'Trẻ em', icon: 'star' },
          { label: 'Danh mục', icon: 'grid' },
        ];

    const renderChipIcon = (type) => {
      if (type === 'chart') {
        return (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0b57d0" strokeWidth="2">
            <rect x="3" y="12" width="5" height="8" rx="1" />
            <rect x="9.5" y="6" width="5" height="14" rx="1" />
            <rect x="16" y="10" width="5" height="10" rx="1" />
          </svg>
        );
      }
      if (type === 'diamond') {
        return (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0b57d0" strokeWidth="2">
            <path d="M6 3h12l4 6-10 12L2 9z" strokeLinejoin="round" />
            <path d="M2 9h20" />
          </svg>
        );
      }
      if (type === 'devices') {
        return (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0b57d0" strokeWidth="2">
            <rect x="2" y="5" width="14" height="11" rx="1.5" />
            <rect x="16" y="9" width="6" height="10" rx="1" />
            <path d="M2 19h12" />
          </svg>
        );
      }
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0b57d0" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinejoin="round" />
        </svg>
      );
    };

    return (
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        padding: '6px 16px 12px',
        scrollbarWidth: 'none',
        background: '#ffffff',
      }}>
        {chips.map((c, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#f0f4f9',
              padding: '8px 15px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#1f1f1f',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {renderChipIcon(c.icon)}
            {c.label}
          </div>
        ))}
      </div>
    );
  };

  // TAB 2: ỨNG DỤNG (Default view matching frame_03.5.png & frame_07.0.png)
  const renderAppsTab = () => (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 'calc(84px + var(--chplay-safe-bottom, 0px))', background: '#ffffff' }}>
      {renderPlayTopHeader()}
      {renderFilterChips('apps')}

      {/* Multi-Banner Non-Repeating Horizontal Snap Carousel */}
      <div style={{ paddingBottom: '12px' }}>
        <div
          ref={bannerCarouselRef}
          className="chplay-hide-scroll"
          onScroll={(e) => {
            const el = e.currentTarget;
            if (!el.firstElementChild) return;
            const cardW = el.firstElementChild.getBoundingClientRect().width + 12;
            if (cardW > 0) {
              const idx = Math.max(0, Math.min(featuredBanners.length - 1, Math.round(el.scrollLeft / cardW)));
              if (idx !== activeBannerIdx) setActiveBannerIdx(idx);
            }
          }}
          style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollPaddingLeft: '16px',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            padding: '4px 16px 8px',
          }}
        >
          {featuredBanners.map((bn) => (
            <div
              key={bn.id}
              style={{
                flex: '0 0 88%',
                maxWidth: '364px',
                scrollSnapAlign: 'start',
                background: '#f8fafd',
                borderRadius: '16px',
                border: '1px solid #edf2f9',
                overflow: 'hidden',
                boxSizing: 'border-box',
              }}
            >
              <img
                src={bn.banner}
                alt={bn.name}
                style={{
                  width: '100%',
                  height: '184px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '15px',
                }}
                draggable={false}
              />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
                padding: '11px 12px 13px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '11px', minWidth: 0, flex: 1 }}>
                  <img
                    src={bn.icon}
                    alt={bn.name}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '11px',
                      objectFit: 'cover',
                      flexShrink: 0,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    }}
                    draggable={false}
                  />
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{
                      fontSize: '14.5px',
                      fontWeight: 500,
                      color: '#1f1f1f',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {bn.name}
                    </div>
                    {bn.installed ? (
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: '#f0f4f9',
                        padding: '2px 7px',
                        borderRadius: '6px',
                        marginTop: '3px',
                        fontSize: '11.5px',
                        color: '#444746',
                      }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0b57d0" strokeWidth="2.4">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        Đã cài đặt
                      </div>
                    ) : (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginTop: '3px',
                        minWidth: 0,
                      }}>
                        <RatingPill rating={bn.rating} />
                        <span style={{
                          fontSize: '12px',
                          color: '#444746',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}>
                          {bn.subtitle}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  style={{
                    background: '#0b57d0',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '8px 18px',
                    fontSize: '13.5px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                >
                  {bn.installed ? 'Mở' : 'Cài đặt'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Material 3 Carousel Page Indicators */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          marginTop: '4px',
        }}>
          {featuredBanners.map((bn, idx) => {
            const isActive = idx === activeBannerIdx;
            return (
              <button
                key={bn.id}
                type="button"
                aria-label={`Banner ${idx + 1}`}
                onClick={() => {
                  const el = bannerCarouselRef.current;
                  if (el && el.children[idx]) {
                    el.scrollTo({ left: el.children[idx].offsetLeft - 16, behavior: 'smooth' });
                    setActiveBannerIdx(idx);
                  }
                }}
                style={{
                  width: isActive ? '18px' : '6px',
                  height: '6px',
                  borderRadius: '999px',
                  background: isActive ? '#0b57d0' : '#d3dbe5',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.22s ease',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Section: Được tài trợ • Được đề xuất cho bạn (Randomized on each visit) */}
      <div style={{ padding: '4px 16px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ color: '#1f1f1f' }}>
            <span style={{ fontSize: '12px', fontWeight: 600 }}>Được tài trợ</span>
            <span style={{ margin: '0 5px', fontSize: '12px' }}>•</span>
            <span style={{ fontSize: '17px', fontWeight: 600 }}>Được đề xuất cho bạn</span>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#444746">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {randomAppsSponsored.map((app) => (
            <div key={app.id} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src={app.icon}
                alt={app.name}
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '14px',
                  objectFit: 'cover',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#1f1f1f',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {app.name}
                </div>
                <div style={{
                  fontSize: '12.5px',
                  color: '#444746',
                  marginTop: '2px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {app.categories}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                  <RatingPill rating={app.rating} />
                  <span style={{ fontSize: '12px', color: '#444746' }}>{app.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Ứng dụng phổ biến (frame_07.0.png, Randomized) */}
      <div style={{ padding: '14px 16px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '17px', fontWeight: 500, color: '#1f1f1f' }}>Ứng dụng phổ biến</span>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: '#f0f4f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '6px' }}>
          {randomPopularSquares.map((item) => (
            <div key={item.id} style={{ width: '102px', flexShrink: 0 }}>
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  width: '102px',
                  height: '102px',
                  borderRadius: '22px',
                  objectFit: 'cover',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                }}
              />
              <div style={{
                fontSize: '13px',
                color: '#1f1f1f',
                marginTop: '6px',
                lineHeight: '1.3',
                height: '34px',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}>
                {item.name}
              </div>
              <div style={{ marginTop: '4px' }}>
                <RatingPill rating={item.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Mạng xã hội (frame_07.0.png, Randomized) */}
      <div style={{ padding: '14px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '17px', fontWeight: 500, color: '#1f1f1f' }}>Mạng xã hội</span>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: '#f0f4f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {randomSocialApps.map((soc) => (
            <div key={soc.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <img
                src={soc.icon}
                alt={soc.name}
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '14px',
                  objectFit: 'cover',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: 400, color: '#1f1f1f' }}>{soc.name}</div>
                <div style={{
                  fontSize: '12.5px',
                  color: '#444746',
                  marginTop: '2px',
                  lineHeight: '1.35',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {soc.desc}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
                  <RatingPill rating={soc.rating} />
                  <span style={{ fontSize: '12px', color: '#444746' }}>{soc.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // TAB 1: TRÒ CHƠI (Matching screenshot 09 in d:\vss — no date-bound banner)
  const renderGamesTab = () => (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 'calc(84px + var(--chplay-safe-bottom, 0px))', background: '#ffffff' }}>
      {renderPlayTopHeader()}
      {renderFilterChips('games')}

      {/* Section: Được tài trợ • Được đề xuất cho bạn */}
      <div style={{ padding: '4px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ color: '#1f1f1f' }}>
            <span style={{ fontSize: '12px', fontWeight: 600 }}>Được tài trợ</span>
            <span style={{ margin: '0 5px', fontSize: '12px' }}>•</span>
            <span style={{ fontSize: '17px', fontWeight: 600 }}>Được đề xuất cho bạn</span>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#444746">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {randomGamesList.map((g) => (
            <div key={g.id} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src={g.icon}
                alt={g.name}
                style={{ width: '58px', height: '58px', borderRadius: '14px', objectFit: 'cover', flexShrink: 0 }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', color: '#1f1f1f' }}>{g.name}</div>
                <div style={{ fontSize: '12.5px', color: '#444746', marginTop: '2px' }}>{g.categories}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                  <RatingPill rating={g.rating} />
                  <span style={{ fontSize: '12px', color: '#444746' }}>{g.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Ngay trong tầm tay (Matching screenshot 09 in d:\vss) */}
      <div style={{ padding: '10px 16px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <div style={{ fontSize: '17px', fontWeight: 500, color: '#1f1f1f' }}>Ngay trong tầm tay</div>
            <div style={{ fontSize: '12.5px', color: '#444746', marginTop: '1px' }}>Tải những trò chơi này xuống</div>
          </div>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: '#f0f4f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '4px' }}>
          {randomHandyGames.map((item) => (
            <div key={item.id} style={{ width: '102px', flexShrink: 0 }}>
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  width: '102px',
                  height: '102px',
                  borderRadius: '22px',
                  objectFit: 'cover',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                }}
              />
              <div style={{
                fontSize: '13px',
                color: '#1f1f1f',
                marginTop: '6px',
                lineHeight: '1.3',
                height: '34px',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}>
                {item.name}
              </div>
              <div style={{ marginTop: '4px' }}>
                <RatingPill rating={item.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // TAB 3: TÌM KIẾM (Matching frame_12.5.png & frame_15.0.png)
  const renderSearchTabMain = () => (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 'calc(84px + var(--chplay-safe-bottom, 0px))', background: '#ffffff' }}>
      {/* Search Pill Top Bar + Avatar J */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 16px 12px',
        position: 'sticky',
        top: 0,
        background: '#ffffff',
        zIndex: 10,
      }}>
        <div
          onClick={() => {
            setSearchQuery('');
            setView('search_input');
          }}
          style={{
            flex: 1,
            height: '46px',
            background: '#edf2fc',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 15px',
            gap: '12px',
            cursor: 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.2" y2="16.2" strokeLinecap="round" />
          </svg>
          <span style={{
            flex: 1,
            fontSize: '15px',
            color: '#444746',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            Tìm kiếm ứng dụng v...
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 10v1a7 7 0 0 0 14 0v-1M12 18v4" strokeLinecap="round" />
          </svg>
        </div>

        <div
          onClick={() => setAccountModalOpen(true)}
          style={{
            width: '33px',
            height: '33px',
            borderRadius: '50%',
            background: accountColor,
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          {accountInitial}
        </div>
      </div>

      {/* Section 1: Khám phá trò chơi (frame_12.5.png) */}
      <div style={{ padding: '4px 14px 16px' }}>
        <div style={{ fontSize: '16.5px', fontWeight: 500, color: '#1f1f1f', marginBottom: '12px', paddingLeft: '2px' }}>
          Khám phá trò chơi
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6px',
        }}>
          {GAME_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => executeSearch('vssid')}
              style={{
                background: '#f0f4f9',
                borderRadius: '12px',
                height: '62px',
                padding: '0 8px 0 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '13.5px', fontWeight: 500, color: '#1f1f1f' }}>{cat.name}</span>
              <img
                src={cat.icon}
                alt={cat.name}
                style={{ width: '44px', height: '44px', objectFit: 'contain', borderRadius: '6px' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Được tài trợ • Được đề xuất cho bạn (horizontal strip in frame_12.5.png) */}
      <div style={{ padding: '4px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ color: '#1f1f1f' }}>
            <span style={{ fontSize: '12px', fontWeight: 600 }}>Được tài trợ</span>
            <span style={{ margin: '0 5px', fontSize: '12px' }}>•</span>
            <span style={{ fontSize: '17px', fontWeight: 600 }}>Được đề xuất cho bạn</span>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#444746">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </div>

        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {randomSearchStrip.map((app) => (
            <div key={app.id} style={{ width: '80px', flexShrink: 0 }}>
              <img
                src={app.icon}
                alt={app.name}
                style={{
                  width: '78px',
                  height: '78px',
                  borderRadius: '18px',
                  objectFit: 'cover',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                }}
              />
              <div style={{
                fontSize: '12.5px',
                color: '#1f1f1f',
                marginTop: '6px',
                lineHeight: '1.28',
                height: '32px',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}>
                {app.name}
              </div>
              <div style={{ marginTop: '4px' }}>
                <RatingPill rating={app.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Khám phá ứng dụng (frame_15.0.png) */}
      <div style={{ padding: '4px 14px 18px' }}>
        <div style={{ fontSize: '16.5px', fontWeight: 500, color: '#1f1f1f', marginBottom: '12px', paddingLeft: '2px' }}>
          Khám phá ứng dụng
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6px',
        }}>
          {APP_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => executeSearch('vssid')}
              style={{
                background: '#f0f4f9',
                borderRadius: '12px',
                height: '62px',
                padding: '0 8px 0 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '13.5px', fontWeight: 500, color: '#1f1f1f', whiteSpace: 'pre-line', lineHeight: '1.25' }}>
                {cat.name}
              </span>
              <img
                src={cat.icon}
                alt={cat.name}
                style={{ width: '44px', height: '44px', objectFit: 'contain', borderRadius: '6px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // TAB 4: SÁCH (Exact pixel match to screenshot 10 in d:\vss)
  const renderBooksTab = () => (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 'calc(84px + var(--chplay-safe-bottom, 0px))', background: '#ffffff' }}>
      {/* Top Search Pill Header ("Tìm kiếm sách") + Avatar J */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 16px 8px',
        position: 'sticky',
        top: 0,
        background: '#ffffff',
        zIndex: 10,
      }}>
        <div
          onClick={() => {
            setSearchQuery('');
            setView('search_input');
          }}
          style={{
            flex: 1,
            height: '46px',
            background: '#edf2fc',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 15px',
            gap: '12px',
            cursor: 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.2" y2="16.2" strokeLinecap="round" />
          </svg>
          <span style={{ flex: 1, fontSize: '15px', color: '#444746' }}>
            Tìm kiếm sách
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 10v1a7 7 0 0 0 14 0v-1M12 18v4" strokeLinecap="round" />
          </svg>
        </div>

        <div
          onClick={() => setAccountModalOpen(true)}
          style={{
            width: '33px',
            height: '33px',
            borderRadius: '50%',
            background: accountColor,
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          {accountInitial}
        </div>
      </div>

      {/* Sub-tabs: Sách điện tử | Sách nói | Thể loại | Bán chạy */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #e0e3e7',
        padding: '0 16px',
        gap: '24px',
        overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
        {['Sách điện tử', 'Sách nói', 'Thể loại', 'Bán chạy'].map((tabName, idx) => (
          <div
            key={tabName}
            style={{
              position: 'relative',
              padding: '12px 0 10px',
              fontSize: '14px',
              fontWeight: 500,
              color: idx === 0 ? '#0b57d0' : '#444746',
              whiteSpace: 'nowrap',
            }}
          >
            {tabName}
            {idx === 0 && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: '#0b57d0',
                borderTopLeftRadius: '3px',
                borderTopRightRadius: '3px',
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Section 1: Sách bán chạy nhất */}
      <div style={{ padding: '16px 16px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <span style={{ fontSize: '17px', fontWeight: 500, color: '#1f1f1f' }}>Sách bán chạy nhất</span>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: '#f0f4f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {randomBestsellerBooks.map((b) => (
            <div key={b.id} style={{ width: '104px', flexShrink: 0 }}>
              <img
                src={b.cover}
                alt={b.title}
                style={{
                  width: '104px',
                  height: '158px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
                }}
              />
              <div style={{
                fontSize: '12.5px',
                color: '#1f1f1f',
                marginTop: '6px',
                lineHeight: '1.3',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {b.title}
              </div>
              {b.sub && (
                <div style={{ fontSize: '12px', color: '#444746', marginTop: '2px' }}>{b.sub}</div>
              )}
              <div style={{ marginTop: '4px' }}>
                <span style={{
                  display: 'inline-block',
                  background: '#f0f4f9',
                  borderRadius: '6px',
                  padding: '2px 7px',
                  fontSize: '11.5px',
                  color: '#1f1f1f',
                  fontWeight: 500,
                }}>
                  {b.price} <span style={{ textDecoration: 'underline' }}>đ</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Sách điện tử mới giảm giá */}
      <div style={{ padding: '14px 16px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div>
            <div style={{ fontSize: '17px', fontWeight: 500, color: '#1f1f1f' }}>Sách điện tử mới giảm giá</div>
            <div style={{ fontSize: '12.5px', color: '#444746', marginTop: '2px' }}>Ưu đãi mới nhất</div>
          </div>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: '#f0f4f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {randomDiscountBooks.map((b) => (
            <div key={b.id} style={{ width: '104px', flexShrink: 0 }}>
              <img
                src={b.cover}
                alt={b.title}
                style={{
                  width: '104px',
                  height: '158px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
                }}
              />
              <div style={{
                fontSize: '12.5px',
                color: '#1f1f1f',
                marginTop: '6px',
                lineHeight: '1.3',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {b.title}
              </div>
              {b.sub && (
                <div style={{ fontSize: '12px', color: '#444746', marginTop: '2px' }}>{b.sub}</div>
              )}
              <div style={{ marginTop: '4px' }}>
                <span style={{
                  display: 'inline-block',
                  background: '#f0f4f9',
                  borderRadius: '6px',
                  padding: '2px 7px',
                  fontSize: '11.5px',
                  color: '#1f1f1f',
                  fontWeight: 500,
                }}>
                  {b.price} <span style={{ textDecoration: 'underline' }}>đ</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // TAB 5: BẠN (Matching frame_49.2.png & frame_56.0.png)
  const renderYouTab = () => (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 'calc(84px + var(--chplay-safe-bottom, 0px))', background: '#ffffff' }}>
      {renderPlayTopHeader()}

      {/* Greeting + Google Play Games Profile Pill */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px 16px 18px' }}>
        <div style={{ fontSize: '23px', fontWeight: 500, color: '#1f1f1f', marginBottom: '12px' }}>
          Xin chào {accountName}!
        </div>

        <div
          onClick={() => setAccountModalOpen(true)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: '#f0f4f9',
            borderRadius: '999px',
            padding: '8px 20px 8px 10px',
            cursor: 'pointer',
          }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1.8px dashed #aeb5c0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b57d0" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '11.5px', color: '#444746' }}>Google Play Games</div>
            <div style={{ fontSize: '14px', color: '#1f1f1f', fontWeight: 500 }}>Tạo hồ sơ người chơi</div>
          </div>
        </div>
      </div>

      {youTabLoading ? (
        <div style={{ height: '240px' }}>
          <PlayScallopSpinner />
        </div>
      ) : (
        <>
          {/* Section: Khai thác tối đa thẻ Bạn (with exact 3D Play icons on the right from frame_56.0.png) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 0 16px 22px',
            borderTop: '4px solid #f3f6fc',
            borderBottom: '4px solid #f3f6fc',
          }}>
            <div style={{ flex: 1, paddingRight: '8px' }}>
              <div style={{ fontSize: '21px', fontWeight: 500, color: '#1f1f1f', lineHeight: '1.28' }}>
                Khai thác tối đa thẻ Bạn
              </div>
              <div style={{ fontSize: '13.5px', color: '#444746', lineHeight: '1.45', marginTop: '10px' }}>
                Khi chơi trò chơi, bạn sẽ thấy số liệu thống kê, thành tích của mình và sự kiện và ưu đãi mới nhất ngay tại đây
              </div>
              <button
                onClick={() => handleSelectBottomTab('games')}
                style={{
                  marginTop: '16px',
                  background: '#ffffff',
                  border: '1px solid #747775',
                  borderRadius: '999px',
                  padding: '9px 18px',
                  color: '#0b57d0',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Khám phá trò chơi
              </button>
            </div>
            <img
              src={you3dRight}
              alt="Play 3D"
              style={{ width: '118px', height: 'auto', objectFit: 'contain', flexShrink: 0 }}
            />
          </div>

          {/* Card: Bạn không biết nên chơi gì? (frame_56.0.png) */}
          <div style={{ padding: '14px 12px 20px' }}>
            <div style={{
              background: '#f0f4f9',
              borderRadius: '24px',
              padding: '22px 16px 18px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '19px', fontWeight: 500, color: '#1f1f1f' }}>
                Bạn không biết nên chơi gì?
              </div>
              <div style={{ fontSize: '13.5px', color: '#444746', lineHeight: '1.45', marginTop: '6px', padding: '0 6px' }}>
                Thử những trò chơi tức thì này và khám phá điều bạn thích – không cần tải về, chỉ cần nhấn để chơi
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '18px' }}>
                <img
                  src={youGame1}
                  alt="Instant Game 1"
                  style={{ flex: 1, height: '105px', borderRadius: '14px', objectFit: 'cover', minWidth: 0 }}
                />
                <img
                  src={youGame2}
                  alt="Instant Game 2"
                  style={{ flex: 1, height: '105px', borderRadius: '14px', objectFit: 'cover', minWidth: 0 }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // SEARCH INPUT VIEW (Matching frame_20.5.png, frame_24.5.png, frame_26.0.png — NO search history saved!)
  const renderSearchInputView = () => {
    const suggestions = getAutocompleteSuggestions(searchQuery);

    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
        {/* Top Search Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          height: '56px',
          padding: '0 12px',
          borderBottom: '1px solid #e0e3e7',
          gap: '10px',
        }}>
          <button
            onClick={() => setView('main')}
            style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              executeSearch(searchQuery || 'vssid');
            }}
            style={{ flex: 1, display: 'flex' }}
          >
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm ứng dụng và trò chơi"
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                fontSize: '16px',
                color: '#1f1f1f',
                background: 'transparent',
              }}
            />
          </form>

          {searchQuery ? (
            <button
              onClick={() => {
                setSearchQuery('');
                searchInputRef.current?.focus();
              }}
              style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => executeSearch('vssid')}
              style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
                <rect x="9" y="2" width="6" height="12" rx="3" />
                <path d="M5 10v1a7 7 0 0 0 14 0v-1M12 18v4" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>

        {/* Body: When empty -> Sponsored suggestions only (NO browser/search history saved!). When typing -> Autocomplete rows */}
        <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 'calc(16px + var(--chplay-safe-bottom, 0px))' }}>
          {!searchQuery.trim() ? (
            <div style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ color: '#1f1f1f' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 600 }}>Được tài trợ</span>
                  <span style={{ margin: '0 5px', fontSize: '12px' }}>•</span>
                  <span style={{ fontSize: '13.5px', fontWeight: 600 }}>Được đề xuất cho bạn</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#444746">
                  <circle cx="12" cy="5" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="19" r="2" />
                </svg>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {randomSearchInputAds.map((app) => (
                  <div key={app.id} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <img
                      src={app.icon}
                      alt={app.name}
                      style={{ width: '42px', height: '42px', borderRadius: '10px', objectFit: 'cover' }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '14.5px', fontWeight: 500, color: '#1f1f1f' }}>{app.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                        <span style={{ fontSize: '12px', color: '#444746' }}>{app.developer}</span>
                        <RatingPill rating={app.rating} />
                        {app.downloads && <DownloadsPill text={app.downloads} />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ padding: '6px 0' }}>
              {suggestions.map((sug, i) => (
                <div
                  key={i}
                  onClick={() => executeSearch(sug)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 16px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#f0f4f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="20" y1="20" x2="16.2" y2="16.2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '15.5px', color: '#1f1f1f' }}>{sug}</span>
                  </div>

                  {/* North-West arrow ↖ (fills input when clicked) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSearchQuery(sug);
                      searchInputRef.current?.focus();
                    }}
                    style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
                      <path d="M17 17L7 7M7 7h8M7 7v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // SEARCH RESULTS VIEW WITH VssID (Exact pixel match to frame_29.0.png, frame_30.3.png, frame_35.5.png, frame_42.5.png)
  const renderSearchResultsView = () => {
    const isWorking = installState === 'pending' || installState === 'downloading' || installState === 'installing';
    const radius = 31;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#ffffff', overflowY: 'auto', paddingBottom: 'calc(84px + var(--chplay-safe-bottom, 0px))' }}>
        {/* Top Search Result Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          height: '56px',
          padding: '0 12px',
          borderBottom: '1px solid #e0e3e7',
          gap: '10px',
          position: 'sticky',
          top: 0,
          background: '#ffffff',
          zIndex: 10,
        }}>
          <button
            onClick={() => setView('search_input')}
            style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            onClick={() => setView('search_input')}
            style={{ flex: 1, fontSize: '16px', color: '#1f1f1f', cursor: 'pointer', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {submittedQuery}
          </div>

          <button
            onClick={() => setView('search_input')}
            style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="20" y1="20" x2="16.2" y2="16.2" strokeLinecap="round" />
            </svg>
          </button>

          <button
            onClick={() => setView('search_input')}
            style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
              <rect x="9" y="2" width="6" height="12" rx="3" />
              <path d="M5 10v1a7 7 0 0 0 14 0v-1M12 18v4" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* VssID Main App Listing Section (frame_29.0.png) */}
        <div style={{ padding: '16px 16px 12px' }}>
          {/* Row 1: Icon + VssID Title/Subtitle + Split Blue [ Cài đặt | ⌄ ] Button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
            <div
              onClick={openVssidDetail}
              style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0, cursor: 'pointer' }}
            >
              {/* VssID Icon with Circular Download Ring */}
              <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {isWorking && (
                  <svg
                    width="68"
                    height="68"
                    style={{
                      position: 'absolute',
                      top: '-2px',
                      left: '-2px',
                      transform: 'rotate(-90deg)',
                      animation: installState === 'pending' || installState === 'installing' ? 'chplaySpin 1.2s linear infinite' : 'none',
                    }}
                  >
                    <circle cx="34" cy="34" r={radius} stroke="#e0e3e7" strokeWidth="3.5" fill="none" />
                    <circle
                      cx="34"
                      cy="34"
                      r={radius}
                      stroke="#0b57d0"
                      strokeWidth="3.5"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={installState === 'pending' || installState === 'installing' ? circumference * 0.7 : strokeDashoffset}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 0.25s ease' }}
                    />
                  </svg>
                )}
                <img
                  src={icVssidStore}
                  alt="VssID"
                  style={{
                    width: isWorking ? '44px' : '62px',
                    height: isWorking ? '44px' : '62px',
                    borderRadius: isWorking ? '50%' : '14px',
                    objectFit: 'cover',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
                    transition: 'all 0.25s ease',
                  }}
                />
              </div>

              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '17px', fontWeight: 500, color: '#1f1f1f' }}>VssID</div>
                <div style={{
                  fontSize: '13px',
                  color: isWorking ? '#0b57d0' : '#444746',
                  marginTop: '2px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontWeight: isWorking ? 500 : 400,
                }}>
                  {installState === 'pending'
                    ? 'Đang chờ...'
                    : installState === 'downloading'
                    ? `${progress}% của 25 MB`
                    : installState === 'installing'
                    ? 'Đang cài đặt...'
                    : 'Bảo hiểm xã hội Việt N...'}
                </div>
              </div>
            </div>

            {/* Right Action Button: Split [ Cài đặt | ⌄ ] or [ Hủy ] or [ Mở ] */}
            {installState === 'not_installed' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
                <button
                  onClick={handleStartInstall}
                  style={{
                    background: '#0b57d0',
                    color: '#ffffff',
                    border: 'none',
                    borderTopLeftRadius: '20px',
                    borderBottomLeftRadius: '20px',
                    borderTopRightRadius: '4px',
                    borderBottomRightRadius: '4px',
                    height: '38px',
                    padding: '0 16px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Cài đặt
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOtherDevicesSheetOpen(true);
                  }}
                  style={{
                    background: '#0b57d0',
                    color: '#ffffff',
                    border: 'none',
                    borderTopLeftRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                    height: '38px',
                    width: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
            )}

            {isWorking && (
              <button
                onClick={handleCancelInstall}
                style={{
                  background: '#ffffff',
                  color: '#0b57d0',
                  border: '1px solid #747775',
                  borderRadius: '999px',
                  height: '36px',
                  padding: '0 18px',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                Hủy
              </button>
            )}

            {installState === 'installed' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <button
                  onClick={handleUninstall}
                  style={{
                    background: '#ffffff',
                    color: '#0b57d0',
                    border: '1px solid #c4c7c5',
                    borderRadius: '999px',
                    height: '36px',
                    padding: '0 12px',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Gỡ
                </button>
                <button
                  onClick={handleOpenApp}
                  style={{
                    background: '#0b57d0',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '999px',
                    height: '38px',
                    padding: '0 22px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Mở
                </button>
              </div>
            )}
          </div>

          {/* Row 2: 3-Column Stats (3,0 ★ | 3+ | Chính phủ — exact match to frame_29.0.png) */}
          <div
            onClick={openVssidDetail}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '20px',
              marginBottom: '16px',
              cursor: 'pointer',
            }}
          >
            <div style={{ flex: 1.1, textAlign: 'center' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#1f1f1f', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                3,0 <span style={{ color: '#0b57d0', fontSize: '13px' }}>★</span>
              </div>
              <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '3px' }}>154 N bài đánh giá</div>
            </div>

            <div style={{ width: '1px', height: '24px', background: '#e0e3e7' }} />

            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{
                  border: '1.5px solid #1f1f1f',
                  borderRadius: '2px',
                  fontSize: '10.5px',
                  fontWeight: 700,
                  padding: '0 3px',
                  lineHeight: '14px',
                  color: '#1f1f1f',
                }}>
                  3+
                </span>
              </div>
              <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '4px' }}>3 tuổi trở lên ⓘ</div>
            </div>

            <div style={{ width: '1px', height: '24px', background: '#e0e3e7' }} />

            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
                  <path d="M3 10l9-6 9 6M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 18h18M2 21h20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '3px' }}>Chính phủ ⓘ</div>
            </div>
          </div>

          {/* Row 3: 3 Authentic VssID Screenshots (tapping opens full-screen viewer like frame_35.5.png) */}
          <div style={{
            display: 'flex',
            gap: '10px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            paddingBottom: '4px',
          }}>
            {[
              { thumb: vssidShot1, full: vssidShot1Full },
              { thumb: vssidShot2, full: vssidShot2Full },
              { thumb: vssidShot3, full: vssidShot3Full },
            ].map((shot, i) => (
              <img
                key={i}
                src={shot.thumb}
                alt={`VssID Screenshot ${i + 1}`}
                onClick={() => setPreviewShot(shot.full)}
                style={{
                  width: '106px',
                  height: '190px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  border: '1px solid #e6e9ef',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          {/* Row 4: Official Description Tagline */}
          <div
            onClick={openVssidDetail}
            style={{
              fontSize: '12.8px',
              color: '#444746',
              lineHeight: '1.45',
              marginTop: '12px',
              cursor: 'pointer',
            }}
          >
            VssID là ứng dụng trên nền tảng di động chính thức của Bảo hiểm xã hội Việt Nam
          </div>
        </div>

        {/* Section: Sự kiện trong thời gian có hạn (frame_29.0.png & frame_30.3.png) */}
        <div style={{ padding: '14px 16px 18px' }}>
          <div style={{ fontSize: '17px', fontWeight: 500, color: '#1f1f1f', marginBottom: '14px' }}>
            Sự kiện trong thời gian có hạn
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {randomLimitedEvents.map((ev) => (
              <div key={ev.id} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img
                  src={ev.icon}
                  alt={ev.name}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '13px',
                    objectFit: 'cover',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: '15px',
                    color: '#1f1f1f',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {ev.name}
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#444746', marginTop: '2px' }}>
                    {ev.categories}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', flexWrap: 'wrap' }}>
                    <RatingPill rating={ev.rating} />
                    <span style={{ fontSize: '12px', color: '#444746' }}>{ev.size}</span>
                    {ev.downloads && <DownloadsPill text={ev.downloads} />}
                  </div>
                </div>

                {/* Right circular chevron button matching frame_29.0.png */}
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: '#f0f4f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Xem thêm v (frame_30.3.png) */}
          <div
            onClick={() => reshuffleAllLists(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginTop: '18px',
              color: '#0b57d0',
              fontSize: '13.5px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            <span>Xem thêm</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b57d0" strokeWidth="2.2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  // VssID FULL DETAIL VIEW (Exact 1:1 match to Google Play reference video in d:\vss 2)
  const renderVssIDDetailView = () => {
    const isWorking = installState === 'pending' || installState === 'downloading' || installState === 'installing';
    const radius = 34;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const featuredReviews = VSSID_REVIEWS_POOL.filter((r) => r.featured);
    const filteredAllReviews =
      reviewsStarFilter === 'all'
        ? VSSID_REVIEWS_POOL
        : VSSID_REVIEWS_POOL.filter((r) => r.stars === reviewsStarFilter);

    const toggleHelpfulVote = (reviewId, voteType) => {
      setHelpfulVotes((prev) => ({
        ...prev,
        [reviewId]: prev[reviewId] === voteType ? undefined : voteType,
      }));
    };

    const renderStarsRow = (count, size = 12) => (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5px' }}>
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} width={size} height={size} viewBox="0 0 24 24" fill={s <= count ? '#0b57d0' : '#e0e2e7'}>
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
          </svg>
        ))}
      </span>
    );

    // Sub-sheets inside VssID Detail ('about' | 'reviews' | 'datasafety' | 'similar')
    if (detailSubSheet === 'about') {
      return (
        <div style={{ flex: 1, overflowY: 'auto', background: '#ffffff', paddingBottom: 'calc(92px + var(--chplay-safe-bottom, 0px))' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            height: '56px',
            padding: '0 12px',
            position: 'sticky',
            top: 0,
            background: '#ffffff',
            borderBottom: '1px solid #e8eaed',
            zIndex: 12,
          }}>
            <button
              onClick={() => setDetailSubSheet(null)}
              style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <img src={icVssidStore} alt="VssID" style={{ width: '30px', height: '30px', borderRadius: '7px', objectFit: 'cover' }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '15.5px', fontWeight: 500, color: '#1f1f1f' }}>VssID</div>
              <div style={{ fontSize: '12px', color: '#444746' }}>Về ứng dụng này</div>
            </div>
          </div>

          <div style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: '14px', color: '#303030', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
              {`VssID - Bảo hiểm xã hội số là ứng dụng trên nền tảng thiết bị di động chính thức của Bảo hiểm xã hội Việt Nam nhằm thiết lập kênh giao tiếp, tiếp cận thông tin, thực hiện dịch vụ công cho cá nhân tham gia giao dịch với cơ quan Bảo hiểm xã hội một cách tiện lợi, nhanh chóng và an toàn.

Các tính năng chính trên VssID:
• Sử dụng hình ảnh thẻ BHYT trên ứng dụng khi đi khám, chữa bệnh thay thế thẻ BHYT giấy.
• Quản lý cá nhân: Tra cứu mã số BHXH, thẻ BHYT, quá trình tham gia BHXH, BHTN, BHTNLĐ-BNN, BHYT, thông tin hưởng các chế độ và sổ khám chữa bệnh.
• Dịch vụ công trực tuyến: Cấp lại thẻ BHYT, chuyển địa bàn hưởng lương hưu/trợ cấp BHXH, đăng ký tài khoản cho con dưới 18 tuổi.
• Tra cứu trực tuyến: Mã số BHXH, cơ quan BHXH, cơ sở khám chữa bệnh BHYT, điểm thu và đại lý thu trên toàn quốc.
• Hỗ trợ tổng đài chăm sóc khách hàng 1900.9068 trực tuyến 24/7.`}
            </div>

            <div style={{ height: '1px', background: '#e8eaed', margin: '22px 0' }} />

            <div style={{ fontSize: '16px', fontWeight: 500, color: '#1f1f1f', marginBottom: '8px' }}>Có gì mới</div>
            <div style={{ fontSize: '13.5px', color: '#444746', lineHeight: '1.5' }}>
              • Tối ưu hóa tốc độ đồng bộ dữ liệu quá trình tham gia BHXH, BHTN và thẻ BHYT điện tử.<br />
              • Nâng cấp xác thực đăng nhập liên thông tài khoản định danh điện tử VNeID.<br />
              • Cải thiện độ ổn định và giao diện người dùng.
            </div>

            <div style={{ height: '1px', background: '#e8eaed', margin: '22px 0' }} />

            <div style={{ fontSize: '16px', fontWeight: 500, color: '#1f1f1f', marginBottom: '14px' }}>Thông tin ứng dụng</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                ['Phiên bản', '1.7.1'],
                ['Kích thước tải xuống', '25 MB'],
                ['Lượt tải xuống', 'Hơn 10.000.000'],
                ['Yêu cầu hệ điều hành', 'Android 6.0 trở lên'],
                ['Đơn vị cung cấp', 'Bảo hiểm xã hội Việt Nam'],
                ['Ngày phát hành', '3 thg 11, 2020'],
                ['Quyền của ứng dụng', 'Máy ảnh, Bộ nhớ, Thông báo, Sinh trắc học'],
              ].map(([label, val]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', fontSize: '13.5px' }}>
                  <span style={{ color: '#444746' }}>{label}</span>
                  <span style={{ color: '#1f1f1f', fontWeight: 500, textAlign: 'right' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (detailSubSheet === 'reviews') {
      return (
        <div style={{ flex: 1, overflowY: 'auto', background: '#ffffff', paddingBottom: 'calc(92px + var(--chplay-safe-bottom, 0px))' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            height: '56px',
            padding: '0 12px',
            position: 'sticky',
            top: 0,
            background: '#ffffff',
            borderBottom: '1px solid #e8eaed',
            zIndex: 12,
          }}>
            <button
              onClick={() => setDetailSubSheet(null)}
              style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <img src={icVssidStore} alt="VssID" style={{ width: '30px', height: '30px', borderRadius: '7px', objectFit: 'cover' }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '15.5px', fontWeight: 500, color: '#1f1f1f' }}>Điểm xếp hạng và bài đánh giá</div>
              <div style={{ fontSize: '12px', color: '#444746' }}>VssID • 3,0 ★ (154.670)</div>
            </div>
          </div>

          {/* Star Filter Chips */}
          <div className="chplay-hide-scroll" style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '14px 20px 8px', scrollbarWidth: 'none' }}>
            {[
              { id: 'all', label: 'Tất cả' },
              { id: 5, label: '5 ★' },
              { id: 4, label: '4 ★' },
              { id: 3, label: '3 ★' },
              { id: 2, label: '2 ★' },
              { id: 1, label: '1 ★' },
            ].map((chip) => {
              const active = reviewsStarFilter === chip.id;
              return (
                <button
                  key={String(chip.id)}
                  onClick={() => setReviewsStarFilter(chip.id)}
                  style={{
                    background: active ? '#d3e3fd' : '#ffffff',
                    color: active ? '#041e49' : '#444746',
                    border: active ? '1px solid #d3e3fd' : '1px solid #c4c7c5',
                    borderRadius: '8px',
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>

          <div style={{ padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {submittedUserReview && (reviewsStarFilter === 'all' || reviewsStarFilter === submittedUserReview.stars) && (
              <div style={{ paddingBottom: '18px', borderBottom: '1px solid #e8eaed' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: accountColor,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: 600,
                    }}>
                      {accountInitial}
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#1f1f1f' }}>{accountName} (Bạn)</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                  {renderStarsRow(submittedUserReview.stars, 12)}
                  <span style={{ fontSize: '12px', color: '#444746' }}>{formatDaysAgoDate(0)}  Vừa xong</span>
                </div>
                <div style={{ fontSize: '13.5px', color: '#303030', lineHeight: '1.48', marginTop: '8px' }}>
                  {submittedUserReview.text}
                </div>
              </div>
            )}

            {filteredAllReviews.map((rv) => {
              const vote = helpfulVotes[rv.id];
              const count = rv.helpfulBase + (vote === 'yes' ? 1 : 0);
              return (
                <div key={rv.id} style={{ paddingBottom: '18px', borderBottom: '1px solid #f0f2f5' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: rv.avatarBg,
                        color: rv.avatarFg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '13.5px',
                        fontWeight: 600,
                      }}>
                        {rv.initial}
                      </div>
                      <span style={{ fontSize: '14px', color: '#1f1f1f', fontWeight: 400 }}>{rv.author}</span>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#444746">
                      <circle cx="12" cy="5" r="1.8" />
                      <circle cx="12" cy="12" r="1.8" />
                      <circle cx="12" cy="19" r="1.8" />
                    </svg>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                    {renderStarsRow(rv.stars, 12)}
                    <span style={{ fontSize: '12px', color: '#444746' }}>
                      {formatDaysAgoDate(rv.daysAgo)}&nbsp;&nbsp;{rv.relTime}
                    </span>
                  </div>

                  <div style={{ fontSize: '13.5px', color: '#303030', lineHeight: '1.48', marginTop: '8px' }}>
                    {rv.content}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
                    <span style={{ fontSize: '12px', color: '#444746' }}>Bài đánh giá này có hữu ích không?</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button
                        onClick={() => toggleHelpfulVote(rv.id, 'yes')}
                        style={{
                          background: vote === 'yes' ? '#d3e3fd' : 'transparent',
                          border: 'none',
                          borderRadius: '14px',
                          padding: '4px 8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          cursor: 'pointer',
                          color: vote === 'yes' ? '#0b57d0' : '#444746',
                          fontSize: '12.5px',
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{count}</span>
                      </button>
                      <button
                        onClick={() => toggleHelpfulVote(rv.id, 'no')}
                        style={{
                          background: vote === 'no' ? '#e8eaed' : 'transparent',
                          border: 'none',
                          borderRadius: '14px',
                          padding: '4px 6px',
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer',
                          color: '#444746',
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    if (detailSubSheet === 'datasafety') {
      return (
        <div style={{ flex: 1, overflowY: 'auto', background: '#ffffff', paddingBottom: 'calc(92px + var(--chplay-safe-bottom, 0px))' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            height: '56px',
            padding: '0 12px',
            position: 'sticky',
            top: 0,
            background: '#ffffff',
            borderBottom: '1px solid #e8eaed',
            zIndex: 12,
          }}>
            <button
              onClick={() => setDetailSubSheet(null)}
              style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <img src={icVssidStore} alt="VssID" style={{ width: '30px', height: '30px', borderRadius: '7px', objectFit: 'cover' }} />
            <div>
              <div style={{ fontSize: '15.5px', fontWeight: 500, color: '#1f1f1f' }}>An toàn dữ liệu</div>
              <div style={{ fontSize: '12px', color: '#444746' }}>VssID • Bảo hiểm xã hội Việt Nam</div>
            </div>
          </div>

          <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ fontSize: '13.5px', color: '#444746', lineHeight: '1.5' }}>
              Sự an toàn bắt đầu từ việc nắm được cách nhà phát triển thu thập và chia sẻ dữ liệu của bạn. Các biện pháp bảo mật và bảo vệ quyền riêng tư đối với dữ liệu có thể thay đổi tùy theo cách sử dụng, khu vực và độ tuổi.
            </div>

            {[
              {
                title: 'Không chia sẻ dữ liệu với bên thứ ba',
                desc: 'Nhà phát triển cho biết ứng dụng này không chia sẻ dữ liệu người dùng với các công ty hoặc tổ chức khác.',
              },
              {
                title: 'Không thu thập dữ liệu nào',
                desc: 'Nhà phát triển cho biết ứng dụng này không thu thập dữ liệu người dùng cho mục đích thương mại.',
              },
              {
                title: 'Dữ liệu được mã hóa trong quá trình truyền',
                desc: 'Dữ liệu của bạn được truyền qua kết nối bảo mật HTTPS/TLS.',
              },
              {
                title: 'Có thể yêu cầu xóa dữ liệu',
                desc: 'Nhà phát triển cung cấp cách thức để bạn có thể yêu cầu xóa dữ liệu tài khoản theo quy định.',
              },
            ].map((item) => (
              <div key={item.title} style={{ border: '1px solid #dadce0', borderRadius: '12px', padding: '14px 16px' }}>
                <div style={{ fontSize: '14.5px', fontWeight: 500, color: '#1f1f1f' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: '#444746', lineHeight: '1.45', marginTop: '4px' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (detailSubSheet === 'similar') {
      return (
        <div style={{ flex: 1, overflowY: 'auto', background: '#ffffff', paddingBottom: 'calc(92px + var(--chplay-safe-bottom, 0px))' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            height: '56px',
            padding: '0 12px',
            position: 'sticky',
            top: 0,
            background: '#ffffff',
            borderBottom: '1px solid #e8eaed',
            zIndex: 12,
          }}>
            <button
              onClick={() => setDetailSubSheet(null)}
              style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div style={{ fontSize: '17px', fontWeight: 500, color: '#1f1f1f' }}>Các ứng dụng tương tự</div>
          </div>

          <div style={{ padding: '16px 20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px 14px' }}>
            {detailSimilarApps.map((app) => (
              <div key={app.id} style={{ minWidth: 0 }}>
                <img
                  src={app.icon}
                  alt={app.name}
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '20px',
                    objectFit: 'cover',
                    border: '1px solid rgba(0,0,0,0.08)',
                    display: 'block',
                  }}
                />
                <div style={{
                  fontSize: '12.5px',
                  color: '#1f1f1f',
                  marginTop: '7px',
                  lineHeight: '1.3',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {app.name}
                </div>
                <div style={{ fontSize: '12px', color: '#444746', marginTop: '2px' }}>{app.rating} ★</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={detailScrollRef}
        onClick={() => {
          if (detailMenuOpen) setDetailMenuOpen(false);
        }}
        style={{
          flex: 1,
          overflowY: 'auto',
          background: '#ffffff',
          paddingBottom: 'calc(92px + var(--chplay-safe-bottom, 0px))',
          position: 'relative',
        }}
      >
        {/* Sticky Top App Bar: ← on left, ⋮ on right (exact match to 00:06–00:41) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '52px',
          padding: '0 10px',
          position: 'sticky',
          top: 0,
          background: '#ffffff',
          zIndex: 15,
        }}>
          <button
            onClick={() => setView('search_results')}
            style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', display: 'flex', borderRadius: '50%' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div style={{ position: 'relative' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDetailMenuOpen((v) => !v);
              }}
              style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', display: 'flex', borderRadius: '50%' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1f1f1f">
                <circle cx="12" cy="5" r="1.9" />
                <circle cx="12" cy="12" r="1.9" />
                <circle cx="12" cy="19" r="1.9" />
              </svg>
            </button>

            {detailMenuOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: 'absolute',
                  top: '42px',
                  right: '4px',
                  width: '238px',
                  background: '#f8fafd',
                  borderRadius: '12px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.16)',
                  border: '1px solid #e3e7ed',
                  padding: '6px 0',
                  zIndex: 30,
                }}
              >
                <div
                  onClick={() => {
                    setWishlisted((w) => !w);
                    setDetailMenuOpen(false);
                  }}
                  style={{ padding: '11px 16px', fontSize: '14px', color: '#1f1f1f', cursor: 'pointer' }}
                >
                  {wishlisted ? 'Xóa khỏi danh sách yêu thích' : 'Thêm vào danh sách yêu thích'}
                </div>
                <div
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: 'VssID', url: window.location.href }).catch(() => {});
                    }
                    setDetailMenuOpen(false);
                  }}
                  style={{ padding: '11px 16px', fontSize: '14px', color: '#1f1f1f', cursor: 'pointer' }}
                >
                  Chia sẻ
                </div>
                <div
                  onClick={() => {
                    setAutoUpdateEnabled((v) => !v);
                  }}
                  style={{
                    padding: '11px 16px',
                    fontSize: '14px',
                    color: '#1f1f1f',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Bật tự động cập nhật</span>
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '3px',
                    background: autoUpdateEnabled ? '#0b57d0' : 'transparent',
                    border: autoUpdateEnabled ? '1.5px solid #0b57d0' : '1.5px solid #444746',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}>
                    {autoUpdateEnabled ? '✓' : ''}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Block A: Hero Icon + App Name + Developer (00:06–00:09) */}
        <div style={{ padding: '4px 20px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div style={{ position: 'relative', width: '72px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {isWorking && (
                <svg
                  width="76"
                  height="76"
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    left: '-2px',
                    transform: 'rotate(-90deg)',
                    animation: installState === 'pending' || installState === 'installing' ? 'chplaySpin 1.2s linear infinite' : 'none',
                  }}
                >
                  <circle cx="38" cy="38" r={radius} stroke="#e0e3e7" strokeWidth="3.5" fill="none" />
                  <circle
                    cx="38"
                    cy="38"
                    r={radius}
                    stroke="#0b57d0"
                    strokeWidth="3.5"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={installState === 'pending' || installState === 'installing' ? circumference * 0.7 : strokeDashoffset}
                    strokeLinecap="round"
                  />
                </svg>
              )}
              <img
                src={icVssidStore}
                alt="VssID"
                style={{
                  width: isWorking ? '48px' : '72px',
                  height: isWorking ? '48px' : '72px',
                  borderRadius: isWorking ? '50%' : '16px',
                  objectFit: 'cover',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  transition: 'all 0.25s ease',
                }}
              />
            </div>

            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: '22px', fontWeight: 500, color: '#1f1f1f', lineHeight: '1.25' }}>VssID</div>
              <div style={{ fontSize: '14px', color: '#0b57d0', fontWeight: 500, marginTop: '4px' }}>
                Bảo hiểm xã hội Việt Nam
              </div>
              {isWorking && (
                <div style={{ fontSize: '12.5px', color: '#0b57d0', fontWeight: 500, marginTop: '4px' }}>
                  {installState === 'pending'
                    ? 'Đang chờ...'
                    : installState === 'downloading'
                    ? `${progress}% của 25 MB`
                    : 'Đang cài đặt...'}
                </div>
              )}
            </div>
          </div>

          {/* Block B: 3-Column Metrics Strip ABOVE Install Button (exact match to 00:06–00:10) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '20px',
            marginBottom: '18px',
          }}>
            <div
              onClick={() => setDetailSubSheet('reviews')}
              style={{ flex: 1.15, textAlign: 'center', cursor: 'pointer' }}
            >
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#1f1f1f', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                3,0 <span style={{ color: '#1f1f1f', fontSize: '12.5px' }}>★</span>
              </div>
              <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '4px' }}>154 N bài đánh giá</div>
            </div>

            <div style={{ width: '1px', height: '24px', background: '#e0e3e7' }} />

            <div
              onClick={() => setDetailInfoDialog('age')}
              style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{
                  border: '1.5px solid #1f1f1f',
                  borderRadius: '2.5px',
                  fontSize: '10.5px',
                  fontWeight: 700,
                  padding: '0 3.5px',
                  lineHeight: '14px',
                  color: '#1f1f1f',
                }}>
                  3+
                </span>
              </div>
              <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '4px' }}>3 tuổi trở lên ⓘ</div>
            </div>

            <div style={{ width: '1px', height: '24px', background: '#e0e3e7' }} />

            <div
              onClick={() => setDetailInfoDialog('gov')}
              style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
                  <path d="M3 10l9-6 9 6M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 18h18M2 21h20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '4px' }}>Chính phủ ⓘ</div>
            </div>
          </div>

          {/* Block C: Full-Width Split [ Cài đặt | ⌄ ] Pill Button + Device Subtext (00:06–00:11) */}
          <div>
            {installState === 'not_installed' && (
              <>
                <div style={{ display: 'flex', gap: '2px' }}>
                  <button
                    onClick={handleStartInstall}
                    style={{
                      flex: 1,
                      height: '40px',
                      background: '#0b57d0',
                      color: '#ffffff',
                      border: 'none',
                      borderTopLeftRadius: '20px',
                      borderBottomLeftRadius: '20px',
                      borderTopRightRadius: '4px',
                      borderBottomRightRadius: '4px',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                    }}
                  >
                    Cài đặt
                  </button>
                  <button
                    onClick={() => setOtherDevicesSheetOpen(true)}
                    style={{
                      width: '42px',
                      height: '40px',
                      background: '#0b57d0',
                      color: '#ffffff',
                      border: 'none',
                      borderTopLeftRadius: '4px',
                      borderBottomLeftRadius: '4px',
                      borderTopRightRadius: '20px',
                      borderBottomRightRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>
                <div
                  onClick={() => setOtherDevicesSheetOpen(true)}
                  style={{
                    fontSize: '12px',
                    color: '#444746',
                    textAlign: 'center',
                    marginTop: '10px',
                    cursor: 'pointer',
                  }}
                >
                  Cài đặt trên điện thoại. Còn thiết bị khác.
                </div>
              </>
            )}

            {isWorking && (
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={handleCancelInstall}
                  style={{
                    flex: 1,
                    height: '40px',
                    background: '#ffffff',
                    color: '#0b57d0',
                    border: '1px solid #747775',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Hủy
                </button>
                <button
                  disabled
                  style={{
                    flex: 1,
                    height: '40px',
                    background: '#e3e3e3',
                    color: '#8e918f',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 500,
                  }}
                >
                  Mở
                </button>
              </div>
            )}

            {installState === 'installed' && (
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={handleUninstall}
                  style={{
                    flex: 1,
                    height: '40px',
                    background: '#ffffff',
                    color: '#0b57d0',
                    border: '1px solid #747775',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Gỡ cài đặt
                </button>
                <button
                  onClick={handleOpenApp}
                  style={{
                    flex: 1,
                    height: '40px',
                    background: '#0b57d0',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Mở
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Block D: Large Portrait Screenshots Carousel (00:06–00:12) */}
        <div
          className="chplay-hide-scroll"
          style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            padding: '18px 20px 6px',
            scrollSnapType: 'x mandatory',
          }}
        >
          {[vssidShot1Full, vssidShot2Full, vssidShot3Full].map((shot, idx) => (
            <img
              key={idx}
              src={shot}
              alt={`VssID màn hình ${idx + 1}`}
              onClick={() => setPreviewShot(shot)}
              style={{
                width: '162px',
                height: '292px',
                borderRadius: '12px',
                objectFit: 'cover',
                border: '1px solid #e4e7ec',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                flexShrink: 0,
                scrollSnapAlign: 'start',
              }}
            />
          ))}
        </div>

        {/* Block E: Về ứng dụng này + Category Ranking Chips (00:11–00:16) */}
        <div style={{ padding: '16px 20px 0' }}>
          <div
            onClick={() => setDetailSubSheet('about')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '18px', fontWeight: 500, color: '#1f1f1f' }}>Về ứng dụng này</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div
            onClick={() => setDetailSubSheet('about')}
            style={{
              marginTop: '12px',
              fontSize: '17.5px',
              color: '#303030',
              lineHeight: '1.42',
              cursor: 'pointer',
            }}
          >
            VssID là ứng dụng trên nền tảng di động chính thức của Bảo hiểm xã hội Việt Nam
          </div>

          {/* Ranking chip row 1 */}
          <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid #c4c7c5',
              borderRadius: '8px',
              padding: '6px 12px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#444746',
            }}>
              #3 miễn phí phổ biến trong doanh nghiệp
            </span>
          </div>
        </div>

        {/* Category chips row 2 (horizontally scrollable, exact match to 00:13–00:15) */}
        <div
          className="chplay-hide-scroll"
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            padding: '10px 20px 4px',
          }}
        >
          {['Du lịch và địa phương', 'Dịch vụ của chính phủ', 'Doanh nghiệp'].map((tag) => (
            <span
              key={tag}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid #c4c7c5',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '13px',
                fontWeight: 500,
                color: '#444746',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Block F: Device Rating Filter Chips (00:13–00:17) */}
        <div
          className="chplay-hide-scroll"
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            padding: '18px 20px 4px',
          }}
        >
          {[
            {
              id: 'phone',
              label: 'Điện thoại • 3,0 ★',
              icon: (active) =>
                active ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="6" y="2" width="12" height="20" rx="2.5" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                ),
            },
            {
              id: 'xr',
              label: 'XR',
              icon: () => (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <rect x="2" y="7" width="20" height="10" rx="3.5" />
                  <path d="M9.5 17l2.5-3 2.5 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              id: 'pc',
              label: 'Máy tính',
              icon: () => (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <rect x="3" y="4" width="18" height="12" rx="2" />
                  <line x1="2" y1="20" x2="22" y2="20" strokeLinecap="round" />
                </svg>
              ),
            },
            {
              id: 'tablet',
              label: 'Máy tính bảng',
              icon: () => (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <rect x="4" y="2" width="16" height="20" rx="2.5" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              ),
            },
          ].map((dev) => {
            const active = detailDeviceChip === dev.id;
            return (
              <button
                key={dev.id}
                onClick={() => setDetailDeviceChip(dev.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: active ? '#d3e3fd' : '#ffffff',
                  color: active ? '#041e49' : '#444746',
                  border: active ? '1px solid #d3e3fd' : '1px solid #c4c7c5',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  fontSize: '13px',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {dev.icon(active)}
                <span>{dev.label}</span>
              </button>
            );
          })}
        </div>

        {/* Block G: Xếp hạng ứng dụng này (00:13–00:18) */}
        <div style={{ padding: '20px 20px 0' }}>
          <div style={{ fontSize: '16px', fontWeight: 500, color: '#1f1f1f' }}>Xếp hạng ứng dụng này</div>
          <div style={{ fontSize: '12px', color: '#444746', marginTop: '2px' }}>
            Cho người khác biết suy nghĩ của bạn
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 6px 14px',
          }}>
            {[1, 2, 3, 4, 5].map((star) => {
              const filled = star <= userRating;
              return (
                <button
                  key={star}
                  onClick={() => {
                    setUserRating(star);
                    setWriteReviewOpen(true);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                  }}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill={filled ? '#0b57d0' : 'none'}
                    stroke={filled ? '#0b57d0' : '#444746'}
                    strokeWidth="1.6"
                  >
                    <path
                      d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              );
            })}
          </div>

          <div
            onClick={() => setWriteReviewOpen(true)}
            style={{
              display: 'inline-block',
              fontSize: '13.5px',
              fontWeight: 500,
              color: '#0b57d0',
              cursor: 'pointer',
            }}
          >
            {submittedUserReview ? 'Chỉnh sửa bài đánh giá của bạn' : 'Viết bài đánh giá'}
          </div>
        </div>

        {/* Block H: Điểm xếp hạng và bài đánh giá + 3,0 Histogram + Horizontal Review Cards (00:16–00:26) */}
        <div style={{ padding: '24px 20px 0' }}>
          <div
            onClick={() => setDetailSubSheet('reviews')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '18px', fontWeight: 500, color: '#1f1f1f' }}>Điểm xếp hạng và bài đánh giá</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div
            onClick={() => setDetailInfoDialog('verified')}
            style={{
              fontSize: '12px',
              color: '#444746',
              lineHeight: '1.42',
              marginTop: '8px',
              cursor: 'pointer',
            }}
          >
            Điểm xếp hạng và bài đánh giá đã được xác minh và do những người sử dụng cùng loại thiết bị với bạn đưa ra ⓘ
          </div>

          {/* Giant 3,0 Score + 5-Bar Distribution */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '22px', marginTop: '16px' }}>
            <div style={{ width: '92px', flexShrink: 0 }}>
              <div style={{ fontSize: '50px', fontWeight: 400, color: '#1f1f1f', lineHeight: '1.02', letterSpacing: '-1px' }}>
                3,0
              </div>
              <div style={{ marginTop: '6px' }}>{renderStarsRow(3, 14)}</div>
              <div style={{ fontSize: '12px', color: '#444746', marginTop: '5px' }}>154.670</div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {[
                { label: '5', pct: '48%' },
                { label: '4', pct: '8%' },
                { label: '3', pct: '5%' },
                { label: '2', pct: '4%' },
                { label: '1', pct: '38%' },
              ].map((bar) => (
                <div key={bar.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '12px', color: '#1f1f1f', width: '8px', fontWeight: 500 }}>{bar.label}</span>
                  <div style={{ flex: 1, height: '8px', borderRadius: '999px', background: '#e8eaed', overflow: 'hidden' }}>
                    <div style={{ width: bar.pct, height: '100%', borderRadius: '999px', background: '#0b57d0' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Swipable Review Cards Carousel + "Xem tất cả bài đánh giá" (00:18–00:25) */}
        <div
          className="chplay-hide-scroll"
          style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: '12px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            padding: '18px 20px 6px',
            scrollSnapType: 'x mandatory',
          }}
        >
          {featuredReviews.map((rv) => {
            const vote = helpfulVotes[rv.id];
            const count = rv.helpfulBase + (vote === 'yes' ? 1 : 0);
            return (
              <div
                key={rv.id}
                style={{
                  width: '296px',
                  flexShrink: 0,
                  background: '#f8f9fa',
                  borderRadius: '16px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  scrollSnapAlign: 'start',
                  border: '1px solid #eef1f5',
                }}
              >
                <div>
                  {/* Reviewer Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: rv.avatarBg,
                        color: rv.avatarFg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '13.5px',
                        fontWeight: 600,
                      }}>
                        {rv.initial}
                      </div>
                      <span style={{ fontSize: '14px', color: '#1f1f1f', fontWeight: 400 }}>{rv.author}</span>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#444746">
                      <circle cx="12" cy="5" r="1.7" />
                      <circle cx="12" cy="12" r="1.7" />
                      <circle cx="12" cy="19" r="1.7" />
                    </svg>
                  </div>

                  {/* Stars + Date + Relative Time */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
                    {renderStarsRow(rv.stars, 12)}
                    <span style={{ fontSize: '12px', color: '#444746' }}>
                      {formatDaysAgoDate(rv.daysAgo)}&nbsp;&nbsp;{rv.relTime}
                    </span>
                  </div>

                  {/* Review Body */}
                  <div style={{
                    fontSize: '13.5px',
                    color: '#303030',
                    lineHeight: '1.46',
                    marginTop: '10px',
                  }}>
                    {rv.content}
                  </div>
                </div>

                {/* Helpful Footer */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '16px',
                  gap: '8px',
                }}>
                  <span style={{ fontSize: '11.8px', color: '#444746', lineHeight: '1.3' }}>
                    Bài đánh giá này có hữu ích không?
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <button
                      onClick={() => toggleHelpfulVote(rv.id, 'yes')}
                      style={{
                        background: vote === 'yes' ? '#d3e3fd' : 'transparent',
                        border: 'none',
                        borderRadius: '14px',
                        padding: '4px 6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        cursor: 'pointer',
                        color: vote === 'yes' ? '#0b57d0' : '#444746',
                        fontSize: '12.5px',
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{count}</span>
                    </button>
                    <button
                      onClick={() => toggleHelpfulVote(rv.id, 'no')}
                      style={{
                        background: vote === 'no' ? '#e8eaed' : 'transparent',
                        border: 'none',
                        borderRadius: '14px',
                        padding: '4px 5px',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        color: '#444746',
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* End-of-carousel "Xem tất cả bài đánh giá" link (exact match to 00:22) */}
          <div
            onClick={() => setDetailSubSheet('reviews')}
            style={{
              minWidth: '175px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 16px',
              color: '#0b57d0',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              flexShrink: 0,
              scrollSnapAlign: 'start',
            }}
          >
            Xem tất cả bài đánh giá
          </div>
        </div>

        {/* Block I: Hỗ trợ ứng dụng Collapsible Accordion (00:25–00:27) */}
        <div style={{ padding: '20px 20px 4px' }}>
          <div
            onClick={() => setSupportExpanded((v) => !v)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              padding: '4px 0',
            }}
          >
            <span style={{ fontSize: '18px', fontWeight: 500, color: '#1f1f1f' }}>Hỗ trợ ứng dụng</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#444746"
              strokeWidth="2"
              style={{
                transform: supportExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            >
              <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {supportExpanded && (
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '14px', paddingBottom: '6px' }}>
              {[
                {
                  label: 'Trang web',
                  sub: 'https://baohiemxahoi.gov.vn',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="1.9">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                },
                {
                  label: 'Email hỗ trợ',
                  sub: 'lienhe@vss.gov.vn',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="1.9">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 7L2 7" />
                    </svg>
                  ),
                },
                {
                  label: 'Địa chỉ',
                  sub: 'Số 6 Cương Kiên, Mễ Trì, Nam Từ Liêm, Hà Nội',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="1.9">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
                {
                  label: 'Chính sách quyền riêng tư',
                  sub: 'https://baohiemxahoi.gov.vn/chinh-sach-bao-mat',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="1.9">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                },
              ].map((row) => (
                <div key={row.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ marginTop: '2px', flexShrink: 0 }}>{row.icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#1f1f1f' }}>{row.label}</div>
                    <div style={{ fontSize: '12.5px', color: '#444746', marginTop: '1px', wordBreak: 'break-word' }}>{row.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Block J: Được tài trợ • Được đề xuất cho bạn — Spotlight Banner + 3-App Stack Carousel (00:26–00:30 & 00:37–00:40) */}
        <div style={{ paddingTop: '18px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px 12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#1f1f1f' }}>Được tài trợ</span>
              <span style={{ fontSize: '12px', color: '#444746' }}>•</span>
              <span style={{ fontSize: '16.5px', fontWeight: 500, color: '#1f1f1f' }}>Được đề xuất cho bạn</span>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#444746">
              <circle cx="12" cy="5" r="1.8" />
              <circle cx="12" cy="12" r="1.8" />
              <circle cx="12" cy="19" r="1.8" />
            </svg>
          </div>

          <div
            className="chplay-hide-scroll"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              padding: '0 20px 4px',
              scrollSnapType: 'x mandatory',
            }}
          >
            {/* Slide 1: Spotlight Banner Card 1 (matches 00:26–00:30) */}
            {detailSponsoredBanners[0] && (
              <div style={{ width: '312px', flexShrink: 0, scrollSnapAlign: 'start' }}>
                <img
                  src={detailSponsoredBanners[0].banner}
                  alt={detailSponsoredBanners[0].name}
                  style={{
                    width: '100%',
                    height: '168px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    display: 'block',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
                  <img
                    src={detailSponsoredBanners[0].icon}
                    alt={detailSponsoredBanners[0].name}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                      border: '1px solid rgba(0,0,0,0.08)',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: '14.5px',
                      fontWeight: 500,
                      color: '#1f1f1f',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {detailSponsoredBanners[0].name}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#444746',
                      marginTop: '1px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {detailSponsoredBanners[0].developer} • {detailSponsoredBanners[0].rating} ★
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#444746',
                      marginTop: '1px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {detailSponsoredBanners[0].subtitle}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <button
                      style={{
                        background: '#ffffff',
                        color: '#0b57d0',
                        border: '1px solid #747775',
                        borderRadius: '18px',
                        padding: '6px 16px',
                        fontSize: '13.5px',
                        fontWeight: 500,
                        cursor: 'pointer',
                      }}
                    >
                      Cài đặt
                    </button>
                    <span style={{ fontSize: '9.5px', color: '#444746', marginTop: '3px', whiteSpace: 'nowrap' }}>
                      Mua hàng trong ứng dụng
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 2: 3-App Vertical Stack (matches 00:38 when swiping right!) */}
            <div style={{
              width: '306px',
              flexShrink: 0,
              scrollSnapAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              paddingTop: '2px',
            }}>
              {detailSponsoredCol1.map((app) => (
                <div key={app.id} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    src={app.icon}
                    alt={app.name}
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '12px',
                      objectFit: 'cover',
                      border: '1px solid rgba(0,0,0,0.08)',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: '14.5px',
                      color: '#1f1f1f',
                      fontWeight: 400,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {app.name}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#444746',
                      marginTop: '2px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {app.categories}
                    </div>
                    <div style={{ fontSize: '12px', color: '#444746', marginTop: '2px' }}>
                      {app.rating} ★ &nbsp;&nbsp;{app.size}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide 3: Spotlight Banner Card 2 */}
            {detailSponsoredBanners[1] && (
              <div style={{ width: '312px', flexShrink: 0, scrollSnapAlign: 'start' }}>
                <img
                  src={detailSponsoredBanners[1].banner}
                  alt={detailSponsoredBanners[1].name}
                  style={{
                    width: '100%',
                    height: '168px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    display: 'block',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
                  <img
                    src={detailSponsoredBanners[1].icon}
                    alt={detailSponsoredBanners[1].name}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                      border: '1px solid rgba(0,0,0,0.08)',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: '14.5px',
                      fontWeight: 500,
                      color: '#1f1f1f',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {detailSponsoredBanners[1].name}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#444746',
                      marginTop: '1px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {detailSponsoredBanners[1].developer} • {detailSponsoredBanners[1].rating} ★
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#444746',
                      marginTop: '1px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {detailSponsoredBanners[1].subtitle}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <button
                      style={{
                        background: '#ffffff',
                        color: '#0b57d0',
                        border: '1px solid #747775',
                        borderRadius: '18px',
                        padding: '6px 16px',
                        fontSize: '13.5px',
                        fontWeight: 500,
                        cursor: 'pointer',
                      }}
                    >
                      Cài đặt
                    </button>
                    <span style={{ fontSize: '9.5px', color: '#444746', marginTop: '3px', whiteSpace: 'nowrap' }}>
                      Mua hàng trong ứng dụng
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 4: 3-App Vertical Stack 2 */}
            <div style={{
              width: '306px',
              flexShrink: 0,
              scrollSnapAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              paddingTop: '2px',
            }}>
              {detailSponsoredCol2.map((app) => (
                <div key={app.id} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    src={app.icon}
                    alt={app.name}
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '12px',
                      objectFit: 'cover',
                      border: '1px solid rgba(0,0,0,0.08)',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: '14.5px',
                      color: '#1f1f1f',
                      fontWeight: 400,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {app.name}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#444746',
                      marginTop: '2px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {app.categories}
                    </div>
                    <div style={{ fontSize: '12px', color: '#444746', marginTop: '2px' }}>
                      {app.rating} ★ &nbsp;&nbsp;{app.size}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Block K: Các ứng dụng tương tự (00:27–00:33) */}
        <div style={{ paddingTop: '24px' }}>
          <div
            onClick={() => setDetailSubSheet('similar')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px 14px',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '18px', fontWeight: 500, color: '#1f1f1f' }}>Các ứng dụng tương tự</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div
            className="chplay-hide-scroll"
            style={{
              display: 'flex',
              gap: '14px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              padding: '0 20px 4px',
            }}
          >
            {detailSimilarApps.map((app) => (
              <div key={app.id} style={{ width: '104px', flexShrink: 0 }}>
                <img
                  src={app.icon}
                  alt={app.name}
                  style={{
                    width: '104px',
                    height: '104px',
                    borderRadius: '20px',
                    objectFit: 'cover',
                    border: '1px solid rgba(0,0,0,0.08)',
                    display: 'block',
                  }}
                />
                <div style={{
                  fontSize: '13px',
                  color: '#1f1f1f',
                  marginTop: '8px',
                  lineHeight: '1.3',
                  height: '34px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {app.name}
                </div>
                <div style={{ fontSize: '12px', color: '#444746', marginTop: '2px' }}>
                  {app.rating} ★
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block L: An toàn dữ liệu + Disclaimer + Chính sách hoàn tiền của Google Play (00:30–00:33) */}
        <div style={{ paddingTop: '24px' }}>
          <div
            onClick={() => setDetailSubSheet('datasafety')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px 14px',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '18px', fontWeight: 500, color: '#1f1f1f' }}>An toàn dữ liệu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* 3 Horizontal Rounded Data Safety Cards (exact match to 00:31–00:32) */}
          <div
            className="chplay-hide-scroll"
            style={{
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              padding: '0 20px 14px',
            }}
          >
            {/* Card 1: Không chia sẻ dữ liệu với bên thứ ba */}
            <div style={{
              width: '162px',
              minHeight: '178px',
              border: '1px solid #c4c7c5',
              borderRadius: '12px',
              padding: '15px 14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexShrink: 0,
              boxSizing: 'border-box',
            }}>
              <div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="1.9">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                <div style={{ fontSize: '13px', color: '#1f1f1f', lineHeight: '1.36', marginTop: '10px', fontWeight: 400 }}>
                  Không chia sẻ dữ liệu với bên thứ ba
                </div>
              </div>
              <div
                onClick={() => setDetailSubSheet('datasafety')}
                style={{ fontSize: '11.5px', color: '#444746', lineHeight: '1.38', marginTop: '14px', cursor: 'pointer' }}
              >
                <span style={{ color: '#0b57d0', textDecoration: 'underline' }}>Tìm hiểu thêm</span> về cách nhà phát triển khai báo thông tin về hoạt động chia sẻ dữ liệu
              </div>
            </div>

            {/* Card 2: Không thu thập dữ liệu nào */}
            <div style={{
              width: '162px',
              minHeight: '178px',
              border: '1px solid #c4c7c5',
              borderRadius: '12px',
              padding: '15px 14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexShrink: 0,
              boxSizing: 'border-box',
            }}>
              <div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="1.9">
                  <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m8 16 4-4 4 4M12 12v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div style={{ fontSize: '13px', color: '#1f1f1f', lineHeight: '1.36', marginTop: '10px', fontWeight: 400 }}>
                  Không thu thập dữ liệu nào
                </div>
              </div>
              <div
                onClick={() => setDetailSubSheet('datasafety')}
                style={{ fontSize: '11.5px', color: '#444746', lineHeight: '1.38', marginTop: '14px', cursor: 'pointer' }}
              >
                <span style={{ color: '#0b57d0', textDecoration: 'underline' }}>Tìm hiểu thêm</span> về cách nhà phát triển khai báo thông tin về hoạt động thu thập dữ liệu
              </div>
            </div>

            {/* Card 3: Mã hóa + Xóa dữ liệu (stacked inside Card 3 matching right edge of 00:31–00:32) */}
            <div style={{
              width: '174px',
              minHeight: '178px',
              border: '1px solid #c4c7c5',
              borderRadius: '12px',
              padding: '15px 14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexShrink: 0,
              boxSizing: 'border-box',
            }}>
              <div>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="1.9">
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <div style={{ fontSize: '12.5px', color: '#1f1f1f', lineHeight: '1.35', marginTop: '8px' }}>
                  Dữ liệu được mã hóa trong quá trình truyền
                </div>
              </div>
              <div style={{ marginTop: '12px' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="1.9">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                <div style={{ fontSize: '12.5px', color: '#1f1f1f', lineHeight: '1.35', marginTop: '6px' }}>
                  Có thể yêu cầu xóa dữ liệu
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer Paragraph */}
          <div style={{
            padding: '2px 20px 14px',
            fontSize: '12.8px',
            color: '#444746',
            lineHeight: '1.48',
          }}>
            Các biện pháp bảo mật và bảo vệ quyền riêng tư đối với dữ liệu có thể thay đổi tùy theo cách sử dụng, khu vực và độ tuổi. Nhà phát triển đã cung cấp thông tin này và có thể cập nhật theo thời gian.
          </div>

          {/* Google Play Refund Policy Row */}
          <div
            onClick={() => setDetailInfoDialog('refund')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 20px 16px',
              cursor: 'pointer',
            }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
              <polyline points="9 14 4 9 9 4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 20v-7a4 4 0 0 0-4-4H4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: '13.5px', fontWeight: 500, color: '#1f1f1f' }}>
              Chính sách hoàn tiền của Google Play
            </span>
          </div>
        </div>

        {/* Interactive Write-a-Review Modal */}
        {writeReviewOpen && (
          <div
            onClick={() => setWriteReviewOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.45)',
              zIndex: 70,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '356px',
                background: '#ffffff',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.22)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={icVssidStore} alt="VssID" style={{ width: '40px', height: '40px', borderRadius: '9px' }} />
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 500, color: '#1f1f1f' }}>VssID</div>
                  <div style={{ fontSize: '12px', color: '#444746' }}>Bài đánh giá công khai với tên {accountName}</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '16px 0' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    onClick={() => setUserRating(s)}
                    style={{ background: 'none', border: 'none', padding: '4px', cursor: 'pointer' }}
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill={s <= (userRating || 5) ? '#0b57d0' : 'none'} stroke="#0b57d0" strokeWidth="1.8">
                      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                    </svg>
                  </button>
                ))}
              </div>

              <textarea
                value={userReviewDraft}
                onChange={(e) => setUserReviewDraft(e.target.value)}
                placeholder="Mô tả trải nghiệm của bạn (không bắt buộc)"
                rows={3}
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  border: '1px solid #c4c7c5',
                  padding: '10px 12px',
                  fontSize: '13.5px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  resize: 'none',
                  outline: 'none',
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '14px' }}>
                <button
                  onClick={() => setWriteReviewOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#0b57d0',
                    fontSize: '14px',
                    fontWeight: 500,
                    padding: '8px 12px',
                    cursor: 'pointer',
                  }}
                >
                  Hủy
                </button>
                <button
                  onClick={() => {
                    const stars = userRating || 5;
                    setUserRating(stars);
                    setSubmittedUserReview({
                      stars,
                      text: userReviewDraft.trim() || 'Ứng dụng hữu ích để tra cứu BHXH và thẻ BHYT.',
                    });
                    setWriteReviewOpen(false);
                  }}
                  style={{
                    background: '#0b57d0',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '18px',
                    fontSize: '14px',
                    fontWeight: 500,
                    padding: '8px 18px',
                    cursor: 'pointer',
                  }}
                >
                  Đăng
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Info Dialog for Chính phủ / 3+ / Verified / Refund */}
        {detailInfoDialog && (
          <div
            onClick={() => setDetailInfoDialog(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.45)',
              zIndex: 70,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '340px',
                background: '#ffffff',
                borderRadius: '22px',
                padding: '22px',
                boxShadow: '0 10px 28px rgba(0,0,0,0.2)',
              }}
            >
              <div style={{ fontSize: '17px', fontWeight: 500, color: '#1f1f1f' }}>
                {detailInfoDialog === 'gov'
                  ? 'Ứng dụng chính thức của Chính phủ'
                  : detailInfoDialog === 'age'
                  ? '3 tuổi trở lên'
                  : detailInfoDialog === 'verified'
                  ? 'Giới thiệu về điểm xếp hạng và bài đánh giá'
                  : 'Chính sách hoàn tiền của Google Play'}
              </div>
              <div style={{ fontSize: '13.5px', color: '#444746', lineHeight: '1.5', marginTop: '10px' }}>
                {detailInfoDialog === 'gov'
                  ? 'Google Play đã xác minh ứng dụng này trực thuộc Bảo hiểm xã hội Việt Nam — cơ quan nhà nước chính thức cung cấp dịch vụ công và thông tin bảo hiểm xã hội.'
                  : detailInfoDialog === 'age'
                  ? 'Nội dung phù hợp với mọi lứa tuổi từ 3 tuổi trở lên theo tiêu chuẩn phân loại nội dung quốc tế trên Google Play.'
                  : detailInfoDialog === 'verified'
                  ? 'Điểm xếp hạng được tính từ các bài đánh giá mới nhất của người dùng tại khu vực của bạn trên cùng loại thiết bị (Điện thoại).'
                  : 'VssID là ứng dụng hoàn toàn miễn phí của Bảo hiểm xã hội Việt Nam và không thu bất kỳ khoản phí tải xuống nào trên Google Play.'}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                <button
                  onClick={() => setDetailInfoDialog(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#0b57d0',
                    fontSize: '14px',
                    fontWeight: 500,
                    padding: '6px 12px',
                    cursor: 'pointer',
                  }}
                >
                  Đã hiểu
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // BOTTOM NAVIGATION BAR (5 Tabs matching frame_03.5.png, frame_12.5.png, frame_56.0.png)
  const renderBottomNav = () => {
    const navItems = [
      {
        id: 'games',
        label: 'Trò chơi',
        icon: (active) => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#004a77' : 'none'} stroke={active ? '#004a77' : '#444746'} strokeWidth="1.9">
            <path d="M6 11h4M8 9v4M15 12h.01M18 10h.01M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        id: 'apps',
        label: 'Ứng dụng',
        icon: (active) => (
          <svg width="21" height="21" viewBox="0 0 24 24" fill={active ? '#004a77' : 'none'} stroke={active ? '#004a77' : '#444746'} strokeWidth="1.9">
            <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
            <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
            <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
            <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
          </svg>
        ),
      },
      {
        id: 'search',
        label: 'Tìm kiếm',
        icon: (active) => (
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={active ? '#004a77' : '#444746'} strokeWidth={active ? '2.4' : '1.9'}>
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.2" y2="16.2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        id: 'books',
        label: 'Sách',
        icon: (active) => (
          <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? '#004a77' : 'none'} stroke={active ? '#004a77' : '#444746'} strokeWidth="1.9">
            <path d="M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
            <path d="M12 3v7l2.5-1.5L17 10V3" fill={active ? '#c2e7ff' : 'none'} />
          </svg>
        ),
      },
      {
        id: 'you',
        label: 'Bạn',
        icon: (active) => (
          <svg width="21" height="21" viewBox="0 0 24 24" fill={active ? '#004a77' : 'none'} stroke={active ? '#004a77' : '#444746'} strokeWidth="1.9">
            <circle cx="12" cy="8" r="4" />
            <path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" strokeLinecap="round" />
          </svg>
        ),
      },
    ];

    return (
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '68px',
        background: '#f3f6fc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTop: '1px solid #e7ecf4',
        paddingBottom: 'var(--chplay-safe-bottom, 0px)',
        boxSizing: 'content-box',
        zIndex: 25,
      }}>
        {navItems.map((item) => {
          const active = bottomTab === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleSelectBottomTab(item.id)}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <div style={{
                width: '56px',
                height: '30px',
                borderRadius: '15px',
                background: active ? '#c2e7ff' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.18s ease',
              }}>
                {item.icon(active)}
              </div>
              <span style={{
                fontSize: '11.5px',
                fontWeight: active ? 600 : 500,
                color: active ? '#004a77' : '#444746',
              }}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: '#ffffff',
      fontFamily: 'Roboto, Inter, -apple-system, sans-serif',
      '--chplay-safe-top': 'max(var(--safe-area-inset-top, 0px), env(safe-area-inset-top, 0px))',
      '--chplay-safe-bottom': 'max(var(--safe-area-inset-bottom, 0px), env(safe-area-inset-bottom, 0px))',
      paddingTop: 'var(--chplay-safe-top, 0px)',
      boxSizing: 'border-box',
      overflow: 'hidden',
      userSelect: 'none',
    }}>
      <style>{`
        @keyframes chplaySpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .chplay-hide-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Main Content Switcher */}
      {view === 'search_input' && renderSearchInputView()}

      {view === 'search_loading' && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
          {/* Top Search Result Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '56px',
            padding: '0 12px',
            borderBottom: '1px solid #e0e3e7',
            gap: '10px',
          }}>
            <button
              onClick={() => setView('search_input')}
              style={{ background: 'none', border: 'none', padding: '6px', display: 'flex' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div style={{ flex: 1, fontSize: '16px', color: '#1f1f1f' }}>{submittedQuery}</div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2" style={{ marginRight: '8px' }}>
              <circle cx="11" cy="11" r="7" />
              <line x1="20" y1="20" x2="16.2" y2="16.2" strokeLinecap="round" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
              <rect x="9" y="2" width="6" height="12" rx="3" />
              <path d="M5 10v1a7 7 0 0 0 14 0v-1M12 18v4" strokeLinecap="round" />
            </svg>
          </div>
          <PlayScallopSpinner />
          {renderBottomNav()}
        </div>
      )}

      {view === 'search_results' && (
        <>
          {renderSearchResultsView()}
          {renderBottomNav()}
        </>
      )}

      {view === 'vssid_detail' && (
        <>
          {renderVssIDDetailView()}
          {renderBottomNav()}
        </>
      )}

      {view === 'main' && (
        <>
          {bottomTab === 'apps' && renderAppsTab()}
          {bottomTab === 'games' && renderGamesTab()}
          {bottomTab === 'search' && renderSearchTabMain()}
          {bottomTab === 'books' && renderBooksTab()}
          {bottomTab === 'you' && renderYouTab()}
          {renderBottomNav()}
        </>
      )}

      {/* FULL-SCREEN SCREENSHOT LIGHTBOX VIEWER (Exact match to frame_35.5.png) */}
      {previewShot && (
        <div
          onClick={() => setPreviewShot(null)}
          style={{
            position: 'absolute',
            inset: 0,
            background: '#0f1113',
            zIndex: 60,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            onClick={() => setPreviewShot(null)}
            style={{
              position: 'absolute',
              top: 'calc(14px + var(--chplay-safe-top, 0px))',
              left: '14px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(20, 48, 56, 0.78)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 65,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <img
            src={previewShot}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxHeight: '88%',
              objectFit: 'contain',
              background: '#ffffff',
            }}
          />
        </div>
      )}

      {/* BOTTOM SHEET: "Cài đặt trên thiết bị khác" (Exact match to frame_42.5.png) */}
      {otherDevicesSheetOpen && (
        <div
          onClick={() => setOtherDevicesSheetOpen(false)}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 55,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderTopLeftRadius: '26px',
              borderTopRightRadius: '26px',
              padding: '10px 20px calc(22px + var(--chplay-safe-bottom, 0px))',
            }}
          >
            {/* Top drag handle */}
            <div style={{
              width: '36px',
              height: '4px',
              borderRadius: '2px',
              background: '#444746',
              margin: '0 auto 18px',
            }} />

            <div style={{ fontSize: '18px', fontWeight: 500, color: '#1f1f1f', marginBottom: '16px' }}>
              Cài đặt trên thiết bị khác
            </div>

            {[
              { key: 'thisPhone', name: 'Thiết bị này', type: 'Điện thoại', icon: 'phone' },



            ].map((dev) => {
              const checked = selectedDevices[dev.key];
              return (
                <div
                  key={dev.key}
                  onClick={() => setSelectedDevices((prev) => ({ ...prev, [dev.key]: !prev[dev.key] }))}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 0',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#f0f4f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {dev.icon === 'phone' ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="1.8">
                          <rect x="6" y="2" width="12" height="20" rx="2" />
                          <line x1="6" y1="5" x2="18" y2="5" />
                          <line x1="6" y1="19" x2="18" y2="19" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="1.8">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <circle cx="12" cy="8" r="0.8" fill="#444746" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', color: '#1f1f1f' }}>{dev.name}</div>
                      <div style={{ fontSize: '12.5px', color: '#444746' }}>{dev.type}</div>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '3px',
                    background: checked ? '#0b57d0' : 'transparent',
                    border: checked ? '2px solid #0b57d0' : '2px solid #444746',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {checked && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
              );
            })}

            <button
              onClick={handleStartInstall}
              style={{
                width: '100%',
                height: '44px',
                background: '#0b57d0',
                color: '#ffffff',
                border: 'none',
                borderRadius: '999px',
                fontSize: '14.5px',
                fontWeight: 500,
                marginTop: '14px',
                cursor: 'pointer',
              }}
            >
              Cài đặt
            </button>
          </div>
        </div>
      )}

      {/* GOOGLE PLAY ACCOUNT MODAL POPUP ("phần tài khoản gg play") */}
      {accountModalOpen && (
        <div
          onClick={() => setAccountModalOpen(false)}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 70,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 'calc(18px + var(--chplay-safe-top, 0px)) 12px calc(18px + var(--chplay-safe-bottom, 0px))',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              background: '#e9eef6',
              borderRadius: '28px',
              padding: '12px 12px 16px',
              boxShadow: '0 12px 36px rgba(0,0,0,0.28)',
              maxHeight: '92%',
              overflowY: 'auto',
            }}
          >
            {/* Header: Close X + Google wordmark */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '38px', marginBottom: '6px' }}>
              <button
                onClick={() => setAccountModalOpen(false)}
                style={{
                  position: 'absolute',
                  left: '6px',
                  background: 'none',
                  border: 'none',
                  padding: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <span style={{ fontSize: '19px', fontWeight: 600, letterSpacing: '-0.3px' }}>
                <span style={{ color: '#4285F4' }}>G</span>
                <span style={{ color: '#EA4335' }}>o</span>
                <span style={{ color: '#FBBC05' }}>o</span>
                <span style={{ color: '#4285F4' }}>g</span>
                <span style={{ color: '#34A853' }}>l</span>
                <span style={{ color: '#EA4335' }}>e</span>
              </span>
            </div>

            {/* White Inner Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: '22px',
              padding: '14px',
            }}>
              {/* Account Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: accountColor,
                    color: '#ffffff',
                    fontSize: '18px',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {accountInitial}
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#1f1f1f' }}>{accountName}</div>
                    <div style={{ fontSize: '12.5px', color: '#444746' }}>{accountEmail}</div>
                  </div>
                </div>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  border: '1px solid #c4c7c5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <button
                style={{
                  marginTop: '12px',
                  marginLeft: '52px',
                  background: '#ffffff',
                  border: '1px solid #747775',
                  borderRadius: '999px',
                  padding: '6px 14px',
                  fontSize: '12.5px',
                  fontWeight: 500,
                  color: '#1f1f1f',
                  cursor: 'pointer',
                }}
              >
                Quản lý Tài khoản Google của bạn
              </button>

              <div style={{ height: '1px', background: '#e9eef6', margin: '14px -14px 8px' }} />

              {/* Menu Items */}
              {[
                {
                  title: 'Quản lý ứng dụng và thiết bị',
                  sub: installState === 'installed' ? 'Đã cài đặt VssID • Nhấn để đặt lại' : 'Không tìm thấy hành động có hại nào',
                  action: () => {
                    if (installState === 'installed') {
                      handleUninstall();
                    }
                  },
                },
                { title: 'Thông báo và ưu đãi', badge: notifBadge },
                { title: 'Thanh toán và gói thuê bao' },
                { title: 'Play Protect', sub: 'Đã quét lúc 14:29' },
                { title: 'Thư viện' },
                { title: 'Play Pass' },
                { title: 'Play Points' },
                { title: 'Cài đặt' },
                { title: 'Trợ giúp và phản hồi' },
              ].map((m, idx) => (
                <div
                  key={idx}
                  onClick={m.action}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 6px',
                    cursor: 'pointer',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '14px', color: '#1f1f1f', fontWeight: 500 }}>{m.title}</div>
                    {m.sub && <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '1px' }}>{m.sub}</div>}
                  </div>
                  {m.badge && (
                    <span style={{
                      background: '#b3261e',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '1px 7px',
                      borderRadius: '999px',
                    }}>
                      {m.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div style={{
              textAlign: 'center',
              fontSize: '11.5px',
              color: '#444746',
              marginTop: '12px',
            }}>
              Chính sách quyền riêng tư • Điều khoản dịch vụ
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
