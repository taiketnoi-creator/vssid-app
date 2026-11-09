import { useState, useEffect, useRef } from 'react';

// Cropped authentic Google Play assets from video
import bannerTiktok from '../assets/chplay/banner_tiktok.jpg';
import bannerTocChien from '../assets/chplay/banner_tocchien.jpg';
import icTiktok from '../assets/chplay/ic_tiktok.jpg';
import icDola from '../assets/chplay/ic_dola.jpg';
import icShopee from '../assets/chplay/ic_shopee.jpg';
import icBlockBlast from '../assets/chplay/ic_blockblast.jpg';
import icTiktokLite from '../assets/chplay/ic_tiktoklite.jpg';
import icMessenger from '../assets/chplay/ic_messenger.jpg';
import icIqiyi from '../assets/chplay/ic_iqiyi.jpg';
import icFbLite from '../assets/chplay/ic_fblite.jpg';
import icTocChien from '../assets/chplay/ic_tocchien.jpg';
import icSwordStaff from '../assets/chplay/ic_swordstaff.jpg';
import icShopeePay from '../assets/chplay/ic_shopeepay.jpg';
import icBigoLive from '../assets/chplay/ic_bigolive.jpg';
import icDuolingo from '../assets/chplay/ic_duolingo.jpg';
import icAliExpress from '../assets/chplay/ic_aliexpress.jpg';
import icCrunchyroll from '../assets/chplay/ic_crunchyroll.jpg';
import icVssidStore from '../assets/chplay/ic_vssid_store.jpg';

import vssidShot1 from '../assets/chplay/vssid_shot1.jpg';
import vssidShot2 from '../assets/chplay/vssid_shot2.jpg';
import vssidShot3 from '../assets/chplay/vssid_shot3.jpg';
import vssidShot2Full from '../assets/chplay/vssid_shot2_full.jpg';

import you3dRight from '../assets/chplay/you_3d_right.jpg';
import youGame1 from '../assets/chplay/you_game1.jpg';
import youGame2 from '../assets/chplay/you_game2.jpg';

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

// Fisher-Yates shuffle so each session shows apps in random non-repetitive order
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const SPONSORED_APPS_POOL = [
  {
    id: 'dola',
    name: 'Dola: Smart AI Assistant',
    developer: 'SPRING (SG) PTE. LTD.',
    categories: 'Công cụ • Năng suất • Trợ lý cá nhân',
    rating: '4,6',
    size: '203 MB',
    downloads: 'Hơn 10 Tr',
    icon: icDola,
  },
  {
    id: 'shopee',
    name: 'Shopee 11.11 Đại Tiệc Ưu Đãi',
    developer: 'Shopee VN',
    categories: 'Mua sắm • Chợ trực tuyến',
    rating: '4,2',
    size: '105 MB',
    downloads: 'Hơn 100 Tr',
    icon: icShopee,
  },
  {
    id: 'blockblast',
    name: 'Block Blast!',
    developer: 'Hungry Studio',
    categories: 'Giải đố • Xếp hình • Vui tươi',
    rating: '4,7',
    size: '105 MB',
    downloads: 'Hơn 100 Tr',
    icon: icBlockBlast,
  },
  {
    id: 'duolingo',
    name: 'Duolingo: Ngoại ngữ & Cờ vua',
    developer: 'Duolingo',
    categories: 'Duolingo • Giáo dục',
    rating: '4,7',
    size: '110 MB',
    downloads: 'Hơn 500 Tr',
    icon: icDuolingo,
  },
  {
    id: 'aliexpress',
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
    name: 'ShopeePay - Tài Chính...',
    developer: 'ShopeePay VN',
    categories: 'Tài chính • Ví điện tử',
    rating: '4,5',
    size: '64 MB',
    downloads: 'Hơn 10 Tr',
    icon: icShopeePay,
  },
  {
    id: 'bigolive',
    name: 'Bigo Live – Live Strea...',
    developer: 'BIGO TECHNOLOGY',
    categories: 'Giải trí • Phát trực tiếp',
    rating: '4,1',
    size: '92 MB',
    downloads: 'Hơn 500 Tr',
    icon: icBigoLive,
  },
];

const POPULAR_SQUARE_POOL = [
  { id: 'tiktoklite', name: 'TikTok Lite - Tiết kiệm bộ nhớ', rating: '4,1', icon: icTiktokLite },
  { id: 'messenger', name: 'Messenger', rating: '4,5', icon: icMessenger },
  { id: 'iqiyi', name: 'iQIYI - Phim & Anime', rating: '4,6', icon: icIqiyi },
  { id: 'shopeepay2', name: 'ShopeePay - Tài Chính', rating: '4,5', icon: icShopeePay },
  { id: 'bigolive2', name: 'Bigo Live – Live Stream', rating: '4,1', icon: icBigoLive },
  { id: 'duolingo2', name: 'Duolingo: Ngoại ngữ', rating: '4,7', icon: icDuolingo },
];

const SOCIAL_APPS_POOL = [
  {
    id: 'fblite',
    name: 'Facebook Lite',
    desc: 'Phiên bản này sử dụng ít dữ liệu hơn và hoạt động với tất cả các điều kiện mạng.',
    rating: '4,4',
    size: '3,5 MB',
    icon: icFbLite,
  },
  {
    id: 'messenger_soc',
    name: 'Messenger',
    desc: 'Nhắn tin, gọi thoại và gọi video miễn phí tới bạn bè và gia đình mọi lúc.',
    rating: '4,5',
    size: '54 MB',
    icon: icMessenger,
  },
  {
    id: 'tiktoklite_soc',
    name: 'TikTok Lite - Tiết kiệm bộ nhớ',
    desc: 'Cộng đồng video ngắn toàn cầu, tải nhanh và tiết kiệm dung lượng bộ nhớ.',
    rating: '4,1',
    size: '18 MB',
    icon: icTiktokLite,
  },
];

const GAMES_LIST_POOL = [
  {
    id: 'dola_g',
    name: 'Dola: Smart AI Assistant',
    categories: 'Công cụ • Năng suất • Trợ lý cá nhân',
    rating: '4,6',
    size: '203 MB',
    icon: icDola,
  },
  {
    id: 'swordstaff',
    name: 'Sword x Staff',
    categories: 'Phiêu lưu',
    rating: '4,8',
    size: '681 MB',
    icon: icSwordStaff,
  },
  {
    id: 'shopee_g',
    name: 'Shopee 11.11 Đại Tiệc Ưu Đãi',
    categories: 'Mua sắm • Chợ trực tuyến',
    rating: '4,2',
    size: '105 MB',
    icon: icShopee,
  },
  {
    id: 'blockblast_g',
    name: 'Block Blast!',
    categories: 'Giải đố • Xếp hình • Vui tươi',
    rating: '4,7',
    size: '105 MB',
    icon: icBlockBlast,
  },
];

const BOOKS_POOL = [
  { id: 'b1', title: 'Đắc Nhân Tâm', author: 'Dale Carnegie', rating: '4,8', price: '65.000 ₫', color: '#1e3a8a' },
  { id: 'b2', title: 'Nhà Giả Kim', author: 'Paulo Coelho', rating: '4,9', price: '59.000 ₫', color: '#b45309' },
  { id: 'b3', title: 'Tư Duy Nhanh Và Chậm', author: 'Daniel Kahneman', rating: '4,7', price: '95.000 ₫', color: '#0f766e' },
  { id: 'b4', title: 'Muôn Kiếp Nhân Sinh', author: 'Nguyên Phong', rating: '4,9', price: '78.000 ₫', color: '#4c1d95' },
  { id: 'b5', title: 'Cây Cam Ngọt Của Tôi', author: 'José Mauro', rating: '4,8', price: '62.000 ₫', color: '#be123c' },
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
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3.61 1.814L13.793 12 3.61 22.186a1.48 1.48 0 0 1-.41-1.028V2.842c0-.4.15-.762.41-1.028z" fill="#32BBFF" />
    <path d="M17.267 8.526L13.793 12l3.474 3.474 3.922-2.238c.77-.44.77-1.552 0-1.992l-3.922-2.718z" fill="#FFCE00" />
    <path d="M17.267 15.474L13.793 12 3.61 22.186c.42.43 1.09.51 1.65.19l12.007-6.902z" fill="#F43249" />
    <path d="M3.61 1.814L13.793 12l3.474-3.474L5.26 1.624c-.56-.32-1.23-.24-1.65.19z" fill="#00EE76" />
  </svg>
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
  const [accountName] = useState('Joystar');
  const [accountEmail] = useState('joystar.vn@gmail.com');

  // Install state for VssID: 'not_installed' | 'pending' | 'downloading' | 'installing' | 'installed'
  const [installState, setInstallState] = useState(() => {
    return localStorage.getItem('chplay_vssid_installed') === 'true'
      ? 'installed'
      : 'not_installed';
  });
  const [progress, setProgress] = useState(0);

  // Randomized app lists generated once per mount so every visit shows fresh non-repetitive order
  const [randomAppsSponsored] = useState(() => shuffleArray(SPONSORED_APPS_POOL).slice(0, 3));
  const [randomPopularSquares] = useState(() => shuffleArray(POPULAR_SQUARE_POOL).slice(0, 4));
  const [randomSocialApps] = useState(() => shuffleArray(SOCIAL_APPS_POOL).slice(0, 2));
  const [randomGamesList] = useState(() => shuffleArray(GAMES_LIST_POOL).slice(0, 3));
  const [randomSearchStrip] = useState(() => shuffleArray(SPONSORED_APPS_POOL).slice(0, 5));
  const [randomSearchInputAds] = useState(() => shuffleArray(SPONSORED_APPS_POOL).slice(0, 2));
  const [randomLimitedEvents] = useState(() =>
    shuffleArray([
      SPONSORED_APPS_POOL[3], // Duolingo
      SPONSORED_APPS_POOL[4], // AliExpress
      SPONSORED_APPS_POOL[5], // Crunchyroll
      SPONSORED_APPS_POOL[1], // Shopee
    ]).slice(0, 3)
  );
  const [randomBooks] = useState(() => shuffleArray(BOOKS_POOL).slice(0, 4));

  const searchInputRef = useRef(null);
  const timersRef = useRef([]);

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

    const steps = [
      { delay: 450, state: 'downloading', pct: 12 },
      { delay: 900, state: 'downloading', pct: 31 },
      { delay: 1350, state: 'downloading', pct: 56 },
      { delay: 1800, state: 'downloading', pct: 82 },
      { delay: 2200, state: 'downloading', pct: 100 },
      { delay: 2500, state: 'installing', pct: 100 },
      { delay: 3300, state: 'installed', pct: 100 },
    ];

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
    setSearchQuery(finalQuery);
    setSubmittedQuery(finalQuery);
    setBottomTab('search');
    setView('search_loading');
    const t = setTimeout(() => {
      setView('search_results');
    }, 420);
    timersRef.current.push(t);
  };

  // Switch bottom tab
  const handleSelectBottomTab = (tabId) => {
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
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1.5px solid #ffffff',
          }}>
            1
          </span>
        </div>

        {/* Orange "J" Google Account Avatar */}
        <div
          onClick={() => setAccountModalOpen(true)}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: '#e8710a',
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
          J
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
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '82px', background: '#ffffff' }}>
      {renderPlayTopHeader()}
      {renderFilterChips('apps')}

      {/* Featured Banner Card (TikTok Fantopia from frame_03.5.png) */}
      <div style={{ padding: '4px 16px 14px' }}>
        <div style={{
          background: '#f8fafd',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
          <img
            src={bannerTiktok}
            alt="TikTok Featured"
            style={{ width: '100%', height: '190px', objectFit: 'cover', display: 'block', borderRadius: '16px' }}
          />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 12px 14px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={icTiktok}
                alt="TikTok"
                style={{ width: '46px', height: '46px', borderRadius: '11px', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 500, color: '#1f1f1f' }}>TikTok</div>
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
              </div>
            </div>
            <button
              style={{
                background: '#0b57d0',
                color: '#ffffff',
                border: 'none',
                borderRadius: '999px',
                padding: '8px 20px',
                fontSize: '13.5px',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Mở
            </button>
          </div>
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

  // TAB 1: TRÒ CHƠI (Matching frame_10.5.png)
  const renderGamesTab = () => (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '82px', background: '#ffffff' }}>
      {renderPlayTopHeader()}
      {renderFilterChips('games')}

      {/* Featured Game Card: LMHT: Tốc Chiến (frame_10.5.png) */}
      <div style={{ padding: '4px 16px 14px' }}>
        <div style={{ background: '#f8fafd', borderRadius: '16px', overflow: 'hidden' }}>
          <img
            src={bannerTocChien}
            alt="LMHT Tốc Chiến"
            style={{ width: '100%', height: '190px', objectFit: 'cover', display: 'block', borderRadius: '16px' }}
          />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 12px 14px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
              <img
                src={icTocChien}
                alt="LMHT: Tốc Chiến"
                style={{ width: '46px', height: '46px', borderRadius: '11px', objectFit: 'cover', flexShrink: 0 }}
              />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: '15px', fontWeight: 500, color: '#1f1f1f' }}>LMHT: Tốc Chiến</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '3px', fontSize: '12px', color: '#444746' }}>
                  <span>VNG G...</span>
                  <span>•</span>
                  <span style={{ border: '1px solid #444746', fontSize: '9.5px', fontWeight: 700, padding: '0 2px', lineHeight: '12px' }}>16+</span>
                  <RatingPill rating="2,5" />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                <button style={{
                  background: '#0b57d0',
                  color: '#ffffff',
                  border: 'none',
                  borderTopLeftRadius: '18px',
                  borderBottomLeftRadius: '18px',
                  borderTopRightRadius: '4px',
                  borderBottomRightRadius: '4px',
                  height: '34px',
                  padding: '0 14px',
                  fontSize: '13px',
                  fontWeight: 500,
                }}>
                  Cài đặt
                </button>
                <button style={{
                  background: '#0b57d0',
                  color: '#ffffff',
                  border: 'none',
                  borderTopLeftRadius: '4px',
                  borderBottomLeftRadius: '4px',
                  borderTopRightRadius: '18px',
                  borderBottomRightRadius: '18px',
                  height: '34px',
                  width: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
              <span style={{ fontSize: '9.5px', color: '#444746', marginTop: '3px' }}>Mua hàng trong ứng dụng</span>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );

  // TAB 3: TÌM KIẾM (Matching frame_12.5.png & frame_15.0.png)
  const renderSearchTabMain = () => (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '82px', background: '#ffffff' }}>
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
            background: '#e8710a',
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
          J
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

  // TAB 4: SÁCH (Basic clean Google Play Books tab)
  const renderBooksTab = () => (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '82px', background: '#ffffff' }}>
      {renderPlayTopHeader()}
      {renderFilterChips('books')}

      <div style={{ padding: '8px 16px' }}>
        <div style={{ fontSize: '17px', fontWeight: 500, color: '#1f1f1f', marginBottom: '12px' }}>
          Sách bán chạy nhất
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {randomBooks.map((b, idx) => (
            <div key={b.id} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ width: '16px', fontSize: '14px', color: '#444746', fontWeight: 500 }}>{idx + 1}</span>
              <div style={{
                width: '48px',
                height: '68px',
                borderRadius: '6px',
                background: b.color,
                color: '#ffffff',
                padding: '6px',
                fontSize: '10px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'flex-end',
                boxShadow: '0 2px 6px rgba(0,0,0,0.14)',
                flexShrink: 0,
              }}>
                {b.title}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', color: '#1f1f1f', fontWeight: 500 }}>{b.title}</div>
                <div style={{ fontSize: '12.5px', color: '#444746', marginTop: '2px' }}>{b.author}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
                  <RatingPill rating={b.rating} />
                  <span style={{ fontSize: '12.5px', color: '#1f1f1f', fontWeight: 500 }}>{b.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // TAB 5: BẠN (Matching frame_49.2.png & frame_56.0.png)
  const renderYouTab = () => (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '82px', background: '#ffffff' }}>
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
        <div style={{ flex: 1, overflowY: 'auto' }}>
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
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#ffffff', overflowY: 'auto', paddingBottom: '82px' }}>
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
              onClick={() => setView('vssid_detail')}
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
                    ? `${progress}% của 18,30 MB`
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
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '20px',
            marginBottom: '16px',
          }}>
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
              { thumb: vssidShot1, full: vssidShot1 },
              { thumb: vssidShot2, full: vssidShot2Full },
              { thumb: vssidShot3, full: vssidShot3 },
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
          <div style={{
            fontSize: '12.8px',
            color: '#444746',
            lineHeight: '1.45',
            marginTop: '12px',
          }}>
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
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            marginTop: '18px',
            color: '#0b57d0',
            fontSize: '13.5px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>
            <span>Xem thêm</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b57d0" strokeWidth="2.2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  // VssID FULL DETAIL VIEW (When clicking into VssID icon/title)
  const renderVssIDDetailView = () => {
    const isWorking = installState === 'pending' || installState === 'downloading' || installState === 'installing';
    const radius = 34;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div style={{ flex: 1, overflowY: 'auto', background: '#ffffff', paddingBottom: '32px' }}>
        {/* Top bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '56px',
          padding: '0 12px',
          position: 'sticky',
          top: 0,
          background: '#ffffff',
          zIndex: 10,
        }}>
          <button
            onClick={() => setView('search_results')}
            style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setView('search_input')}
              style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="20" y1="20" x2="16.2" y2="16.2" strokeLinecap="round" />
              </svg>
            </button>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1f1f1f">
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </div>
        </div>

        <div style={{ padding: '8px 20px' }}>
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
                  width: isWorking ? '48px' : '70px',
                  height: isWorking ? '48px' : '70px',
                  borderRadius: isWorking ? '50%' : '16px',
                  objectFit: 'cover',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                  transition: 'all 0.25s ease',
                }}
              />
            </div>

            <div>
              <div style={{ fontSize: '22px', fontWeight: 500, color: '#1f1f1f' }}>VssID</div>
              <div style={{ fontSize: '14px', color: '#0b57d0', fontWeight: 500, marginTop: '2px' }}>
                Bảo hiểm xã hội Việt Nam
              </div>
              {isWorking && (
                <div style={{ fontSize: '12.5px', color: '#444746', marginTop: '4px' }}>
                  {installState === 'pending'
                    ? 'Đang chờ...'
                    : installState === 'downloading'
                    ? `${progress}% của 18,30 MB`
                    : 'Đang cài đặt...'}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ marginTop: '22px' }}>
            {installState === 'not_installed' && (
              <div style={{ display: 'flex', gap: '3px' }}>
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

          {/* 3-Column Stats */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '22px',
            marginBottom: '18px',
          }}>
            <div style={{ flex: 1.1, textAlign: 'center' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#1f1f1f' }}>
                3,0 <span style={{ color: '#0b57d0' }}>★</span>
              </div>
              <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '3px' }}>154 N bài đánh giá</div>
            </div>
            <div style={{ width: '1px', height: '24px', background: '#e0e3e7' }} />
            <div style={{ flex: 1, textAlign: 'center' }}>
              <span style={{ border: '1.5px solid #1f1f1f', borderRadius: '2px', fontSize: '10.5px', fontWeight: 700, padding: '0 3px' }}>3+</span>
              <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '4px' }}>3 tuổi trở lên ⓘ</div>
            </div>
            <div style={{ width: '1px', height: '24px', background: '#e0e3e7' }} />
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="2">
                  <path d="M3 10l9-6 9 6M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 18h18M2 21h20" />
                </svg>
              </div>
              <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '3px' }}>Chính phủ ⓘ</div>
            </div>
          </div>

          {/* Screenshots */}
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {[
              { thumb: vssidShot1, full: vssidShot1 },
              { thumb: vssidShot2, full: vssidShot2Full },
              { thumb: vssidShot3, full: vssidShot3 },
            ].map((s, idx) => (
              <img
                key={idx}
                src={s.thumb}
                alt="VssID"
                onClick={() => setPreviewShot(s.full)}
                style={{ width: '112px', height: '200px', borderRadius: '10px', objectFit: 'cover', border: '1px solid #e6e9ef', cursor: 'pointer', flexShrink: 0 }}
              />
            ))}
          </div>

          <div style={{ marginTop: '18px', fontSize: '16px', fontWeight: 500, color: '#1f1f1f' }}>
            Về ứng dụng này
          </div>
          <div style={{ marginTop: '8px', fontSize: '13.5px', color: '#444746', lineHeight: '1.5' }}>
            VssID là ứng dụng trên nền tảng di động chính thức của Bảo hiểm xã hội Việt Nam phục vụ mục đích thiết lập kênh giao tiếp, tiếp cận thông tin, thực hiện dịch vụ công cho cá nhân tham gia BHXH, BHYT, BHTN.
          </div>
        </div>
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
      overflow: 'hidden',
      userSelect: 'none',
    }}>
      <style>{`
        @keyframes chplaySpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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

      {view === 'vssid_detail' && renderVssIDDetailView()}

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
              top: '14px',
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
              padding: '10px 20px 22px',
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
              { key: 'tablet1', name: 'Joystar J16', type: 'Máy tính bảng', icon: 'tablet' },
              { key: 'phone2', name: 'JoyStar JoyStar_S10', type: 'Điện thoại', icon: 'phone' },
              { key: 'tablet2', name: 'Joystar J16', type: 'Máy tính bảng', icon: 'tablet' },
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
            padding: '18px 12px',
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
                    background: '#e8710a',
                    color: '#ffffff',
                    fontSize: '18px',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    J
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
                { title: 'Thông báo và ưu đãi', badge: '1' },
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
