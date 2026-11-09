import React, { useState, useEffect, useRef } from 'react';
import logoBhxh from '../assets/logo_bhxh.png';
import logoVneid from '../assets/logo_vneid.png';
import frameDashboard from '../assets/frame_dashboard.png';
import frameInsurance from '../assets/frame_insurance.png';
import bgLogin from '../assets/bg_login.png';

// Official Google Play 4-color triangle SVG
const PlayTriangleLogo = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path d="M7.3 4.2C6.8 4.7 6.5 5.6 6.5 6.7V33.3C6.5 34.4 6.8 35.3 7.3 35.8L7.5 36L22.4 21.1V19.8V18.9L7.5 4L7.3 4.2Z" fill="#4285F4" />
    <path d="M27.4 25.1L22.4 20.1V19.9L27.4 14.9L27.6 15L33.5 18.4C35.2 19.3 35.2 20.8 33.5 21.8L27.6 25.1H27.4Z" fill="#FBBC05" />
    <path d="M27.6 25L22.4 19.9L7.3 35C7.9 35.6 8.8 35.7 10 35L27.6 25Z" fill="#EA4335" />
    <path d="M27.6 15L10 5C8.8 4.3 7.9 4.4 7.3 5L22.4 20.1L27.6 15Z" fill="#34A853" />
  </svg>
);

const PlayProtectIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L4 5.5V11.5C4 16.8 7.4 21.6 12 23C16.6 21.6 20 16.8 20 11.5V5.5L12 2Z"
      fill="#146c2e"
    />
    <path
      d="M10.2 15.6L6.8 12.2L8.2 10.8L10.2 12.8L15.8 7.2L17.2 8.6L10.2 15.6Z"
      fill="#ffffff"
    />
  </svg>
);

const OTHER_APPS = [
  {
    id: 'vneid',
    name: 'VNeID',
    dev: 'Trung tâm dữ liệu Quốc gia về dân cư',
    rating: '4,2',
    size: '62 MB',
    downloads: '50 Tr+',
    category: 'Năng suất',
    iconBg: '#d91811',
    iconImg: logoVneid
  },
  {
    id: 'zalo',
    name: 'Zalo',
    dev: 'Zalo Group',
    rating: '4,4',
    size: '95 MB',
    downloads: '100 Tr+',
    category: 'Liên lạc',
    iconBg: '#0068ff',
    iconText: 'Zalo'
  },
  {
    id: 'vcb',
    name: 'VCB Digibank',
    dev: 'Vietcombank',
    rating: '4,6',
    size: '118 MB',
    downloads: '10 Tr+',
    category: 'Tài chính',
    iconBg: '#00713d',
    iconText: 'VCB'
  },
  {
    id: 'mbbank',
    name: 'MB Bank',
    dev: 'MBBank',
    rating: '4,7',
    size: '134 MB',
    downloads: '10 Tr+',
    category: 'Tài chính',
    iconBg: '#141ed2',
    iconText: 'MB'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    dev: 'TikTok Pte. Ltd.',
    rating: '4,5',
    size: '142 MB',
    downloads: '1 T+',
    category: 'Giải trí',
    iconBg: '#000000',
    iconText: '♪'
  },
  {
    id: 'shopee',
    name: 'Shopee VN: Mua Sắm Online',
    dev: 'Shopee',
    rating: '4,6',
    size: '84 MB',
    downloads: '100 Tr+',
    category: 'Mua sắm',
    iconBg: '#ee4d2d',
    iconText: 'S'
  }
];

const SUGGESTIONS = [
  'vssid',
  'vssid bảo hiểm xã hội số',
  'vssid bhxh việt nam',
  'vneid định danh điện tử',
  'bảo hiểm xã hội'
];

const CHPlay = ({ onOpenVssID }) => {
  // Views: 'home' | 'search-input' | 'search-results' | 'app-detail'
  const [view, setView] = useState('home');
  const [bottomTab, setBottomTab] = useState('apps'); // 'games' | 'apps' | 'search' | 'books'
  const [homeSubTab, setHomeSubTab] = useState('for-you'); // 'for-you' | 'top-charts' | 'kids' | 'categories'
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('vssid');

  // Install state: 'not_installed' | 'pending' | 'downloading' | 'installing' | 'installed'
  const [installState, setInstallState] = useState('not_installed');
  const [progress, setProgress] = useState(0);
  const [launchingApp, setLaunchingApp] = useState(false);

  const searchInputRef = useRef(null);
  const timerRefs = useRef([]);

  const clearTimers = () => {
    timerRefs.current.forEach(clearTimeout);
    timerRefs.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  useEffect(() => {
    if (view === 'search-input' && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 60);
    }
  }, [view]);

  const startInstallSimulation = (e) => {
    if (e) e.stopPropagation();
    if (installState !== 'not_installed') return;

    clearTimers();
    setInstallState('pending');
    setProgress(0);

    // Step 1: Pending (600ms) -> Downloading
    timerRefs.current.push(
      setTimeout(() => {
        setInstallState('downloading');
        setProgress(8);
      }, 600)
    );

    const steps = [
      { delay: 950, pct: 21 },
      { delay: 1300, pct: 39 },
      { delay: 1650, pct: 58 },
      { delay: 2000, pct: 76 },
      { delay: 2350, pct: 92 },
      { delay: 2650, pct: 100 }
    ];

    steps.forEach(({ delay, pct }) => {
      timerRefs.current.push(
        setTimeout(() => {
          setProgress(pct);
        }, delay)
      );
    });

    // Step 2: Installing (at 2800ms)
    timerRefs.current.push(
      setTimeout(() => {
        setInstallState('installing');
      }, 2800)
    );

    // Step 3: Installed (at 4000ms)
    timerRefs.current.push(
      setTimeout(() => {
        setInstallState('installed');
        localStorage.setItem('chplay_vssid_installed', 'true');
      }, 4000)
    );
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
    setInstallState('not_installed');
    setProgress(0);
    localStorage.removeItem('chplay_vssid_installed');
  };

  const handleOpenApp = (e) => {
    if (e) e.stopPropagation();
    setLaunchingApp(true);
    setTimeout(() => {
      onOpenVssID();
    }, 260);
  };

  const handleSearchSubmit = (q) => {
    const finalQuery = (q ?? searchQuery).trim() || 'vssid';
    setSearchQuery(finalQuery);
    setSubmittedQuery(finalQuery);
    setView('search-results');
  };

  const renderAppIcon = (app, size = 56, radius = 12) => {
    if (app.iconImg) {
      return (
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: `${radius}px`,
            background: '#ffffff',
            border: '1px solid #e0e3e7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            flexShrink: 0
          }}
        >
          <img
            src={app.iconImg}
            alt={app.name}
            style={{ width: '88%', height: '88%', objectFit: 'contain' }}
            draggable={false}
          />
        </div>
      );
    }
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: `${radius}px`,
          background: app.iconBg || '#0b57d0',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: `${Math.round(size * 0.34)}px`,
          flexShrink: 0,
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)'
        }}
      >
        {app.iconText}
      </div>
    );
  };

  const renderVssIDIcon = (size = 56, radius = 12) => (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${radius}px`,
        background: 'linear-gradient(180deg, #01aef2 0%, #0072c8 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        position: 'relative'
      }}
    >
      <img
        src={logoBhxh}
        alt="VssID"
        style={{
          width: `${Math.round(size * 0.62)}px`,
          height: `${Math.round(size * 0.62)}px`,
          objectFit: 'contain',
          borderRadius: '50%',
          background: '#ffffff',
          padding: '1px'
        }}
        draggable={false}
      />
      <span
        style={{
          color: '#ffffff',
          fontSize: `${Math.max(8, Math.round(size * 0.17))}px`,
          fontWeight: 700,
          letterSpacing: '0.2px',
          marginTop: '2px',
          lineHeight: 1
        }}
      >
        VssID
      </span>
    </div>
  );

  // Circular download ring around VssID icon on Detail / Search page
  const renderAnimatedVssIDIcon = (boxSize = 72) => {
    const isBusy = installState === 'pending' || installState === 'downloading' || installState === 'installing';
    if (!isBusy) {
      return renderVssIDIcon(boxSize, Math.round(boxSize * 0.22));
    }

    const r = (boxSize - 6) / 2;
    const c = 2 * Math.PI * r;
    const dashOffset = installState === 'downloading' ? c - (progress / 100) * c : c * 0.72;
    const innerSize = Math.round(boxSize * 0.62);

    return (
      <div
        style={{
          position: 'relative',
          width: `${boxSize}px`,
          height: `${boxSize}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <svg
          width={boxSize}
          height={boxSize}
          className={installState !== 'downloading' ? 'chplay-spin' : ''}
          style={{
            position: 'absolute',
            inset: 0,
            transform: 'rotate(-90deg)'
          }}
        >
          <circle
            cx={boxSize / 2}
            cy={boxSize / 2}
            r={r}
            fill="none"
            stroke="#d3e3fd"
            strokeWidth="3.5"
          />
          <circle
            cx={boxSize / 2}
            cy={boxSize / 2}
            r={r}
            fill="none"
            stroke="#0b57d0"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={dashOffset}
            style={{
              transition: installState === 'downloading' ? 'stroke-dashoffset 0.3s ease-out' : 'none'
            }}
          />
        </svg>
        <div style={{ transition: 'transform 0.2s ease', transform: 'scale(0.95)' }}>
          {renderVssIDIcon(innerSize, Math.round(innerSize * 0.24))}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        clipPath: 'inset(-300px 0px -300px 0px)',
        background: '#ffffff',
        fontFamily: 'Inter, Roboto, sans-serif',
        color: '#1f1f1f',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        userSelect: 'none',
        transform: launchingApp ? 'scale(1.06)' : 'scale(1)',
        opacity: launchingApp ? 0 : 1,
        transition: 'transform 0.25s ease-in, opacity 0.25s ease-in'
      }}
    >
      <style>{`
        @keyframes chplay-rotate {
          0% { transform: rotate(-90deg); }
          100% { transform: rotate(270deg); }
        }
        .chplay-spin {
          animation: chplay-rotate 1.1s linear infinite;
        }
        @keyframes chplay-slide-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .chplay-view-anim {
          animation: chplay-slide-in 0.18s ease-out;
        }
      `}</style>

      {/* Top & Bottom Bleed Extensions for Tall Android Screens */}
      <div
        style={{
          position: 'absolute',
          top: '-250px',
          left: 0,
          width: '100%',
          height: '252px',
          background: '#ffffff',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '250px',
          background: 'transparent',
          boxShadow: `0 250px 0 0 ${view === 'home' ? '#f0f4f9' : '#ffffff'}`,
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* ==================== 1. HOME VIEW ==================== */}
      {view === 'home' && (
        <div
          className="chplay-view-anim"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            paddingTop: '34px'
          }}
        >
          {/* Top Search Bar Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '6px 16px 8px',
              gap: '10px'
            }}
          >
            {/* Search Pill */}
            <div
              onClick={() => setView('search-input')}
              style={{
                flex: 1,
                height: '46px',
                background: '#f0f4f9',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 14px',
                gap: '10px',
                cursor: 'pointer'
              }}
            >
              <PlayTriangleLogo size={22} />
              <span
                style={{
                  flex: 1,
                  fontSize: '14.5px',
                  color: '#444746',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                Tìm kiếm ứng dụng và...
              </span>
              {/* Mic icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14ZM17.91 11C17.91 14.3 15.2 17 12 17C8.8 17 6.09 14.3 6.09 11H4.3C4.3 14.92 7.28 18.14 11.1 18.63V22H12.9V18.63C16.72 18.14 19.7 14.92 19.7 11H17.91Z"
                  fill="#444746"
                />
              </svg>
            </div>

            {/* Notification Bell */}
            <div
              style={{
                position: 'relative',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
                  fill="#444746"
                />
              </svg>
              <span
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#b3261e'
                }}
              />
            </div>

            {/* Google Account Avatar */}
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#0b57d0',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              T
            </div>
          </div>

          {/* Sub-navigation Tabs */}
          <div
            className="scrollbar-none"
            style={{
              display: 'flex',
              borderBottom: '1px solid #e0e3e7',
              padding: '0 12px',
              gap: '20px',
              overflowX: 'auto'
            }}
          >
            {[
              { id: 'for-you', label: 'Cho bạn' },
              { id: 'top-charts', label: 'Bảng xếp hạng' },
              { id: 'kids', label: 'Trẻ em' },
              { id: 'categories', label: 'Danh mục' }
            ].map((t) => {
              const active = homeSubTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setHomeSubTab(t.id)}
                  style={{
                    position: 'relative',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    padding: '10px 2px 11px',
                    fontSize: '14px',
                    fontWeight: active ? 600 : 500,
                    color: active ? '#0b57d0' : '#444746',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer'
                  }}
                >
                  {t.label}
                  {active && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '4px',
                        right: '4px',
                        height: '3px',
                        background: '#0b57d0',
                        borderRadius: '3px 3px 0 0'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Scrollable Home Feed */}
          <div
            className="scrollbar-none"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '14px 16px 20px'
            }}
          >
            {/* Featured Government / Essential Apps Banner Card */}
            <div
              onClick={() => setView('app-detail')}
              style={{
                background: 'linear-gradient(135deg, #005fa8 0%, #0195df 100%)',
                borderRadius: '16px',
                padding: '16px',
                color: '#ffffff',
                marginBottom: '20px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(1, 115, 198, 0.18)'
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 600, opacity: 0.9, marginBottom: '4px' }}>
                ỨNG DỤNG THIẾT YẾU QUỐC GIA
              </div>
              <div style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px' }}>
                VssID - Bảo hiểm xã hội số
              </div>
              <div style={{ fontSize: '12.5px', opacity: 0.92, marginBottom: '14px', lineHeight: 1.35 }}>
                Tra cứu quá trình tham gia BHXH, BHTN, BHYT và thẻ BHYT điện tử nhanh chóng.
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.14)',
                  borderRadius: '12px',
                  padding: '10px 12px',
                  gap: '12px'
                }}
              >
                {renderVssIDIcon(44, 10)}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>VssID</div>
                  <div style={{ fontSize: '11.5px', opacity: 0.9 }}>
                    Bảo hiểm xã hội Việt Nam • 3,9 ★
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (installState === 'installed') {
                      handleOpenApp(e);
                    } else {
                      setView('app-detail');
                    }
                  }}
                  style={{
                    background: '#ffffff',
                    color: '#0b57d0',
                    border: 'none',
                    borderRadius: '18px',
                    padding: '7px 16px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {installState === 'installed' ? 'Mở' : 'Cài đặt'}
                </button>
              </div>
            </div>

            {/* Section: Đề xuất cho bạn */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}
            >
              <span style={{ fontSize: '16px', fontWeight: 600, color: '#1f1f1f' }}>
                Đề xuất cho bạn
              </span>
              <span style={{ fontSize: '18px', color: '#444746' }}>→</span>
            </div>

            {/* Horizontal App Strip */}
            <div
              className="scrollbar-none"
              style={{
                display: 'flex',
                gap: '14px',
                overflowX: 'auto',
                paddingBottom: '18px'
              }}
            >
              {/* VssID Card */}
              <div
                onClick={() => setView('app-detail')}
                style={{ width: '96px', flexShrink: 0, cursor: 'pointer' }}
              >
                {renderVssIDIcon(96, 20)}
                <div
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 500,
                    marginTop: '7px',
                    color: '#1f1f1f',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  VssID
                </div>
                <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '2px' }}>
                  3,9 ★
                </div>
              </div>

              {OTHER_APPS.map((app) => (
                <div
                  key={app.id}
                  onClick={() => {
                    if (app.id === 'vneid') {
                      handleSearchSubmit('vssid');
                    }
                  }}
                  style={{ width: '96px', flexShrink: 0, cursor: 'pointer' }}
                >
                  {renderAppIcon(app, 96, 20)}
                  <div
                    style={{
                      fontSize: '12.5px',
                      fontWeight: 500,
                      marginTop: '7px',
                      color: '#1f1f1f',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {app.name}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '2px' }}>
                    {app.rating} ★
                  </div>
                </div>
              ))}
            </div>

            {/* Section: Bảng xếp hạng hàng đầu */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '6px 0 12px'
              }}
            >
              <span style={{ fontSize: '16px', fontWeight: 600, color: '#1f1f1f' }}>
                Bảng xếp hạng phổ biến
              </span>
              <span style={{ fontSize: '18px', color: '#444746' }}>→</span>
            </div>

            {/* Ranked List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Rank 1: VssID */}
              <div
                onClick={() => setView('app-detail')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  cursor: 'pointer'
                }}
              >
                <span style={{ width: '16px', fontSize: '14px', color: '#444746', fontWeight: 500 }}>
                  1
                </span>
                {renderVssIDIcon(56, 12)}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14.5px', fontWeight: 500, color: '#1f1f1f' }}>
                    VssID
                  </div>
                  <div style={{ fontSize: '12px', color: '#444746', marginTop: '2px' }}>
                    Bảo hiểm xã hội Việt Nam
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '2px' }}>
                    3,9 ★ • 18 MB
                  </div>
                </div>
              </div>

              {OTHER_APPS.slice(0, 4).map((app, idx) => (
                <div
                  key={app.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px'
                  }}
                >
                  <span style={{ width: '16px', fontSize: '14px', color: '#444746', fontWeight: 500 }}>
                    {idx + 2}
                  </span>
                  {renderAppIcon(app, 56, 12)}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '14.5px',
                        fontWeight: 500,
                        color: '#1f1f1f',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {app.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#444746', marginTop: '2px' }}>
                      {app.category}
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '2px' }}>
                      {app.rating} ★ • {app.size}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================== 2. SEARCH INPUT VIEW ==================== */}
      {view === 'search-input' && (
        <div
          className="chplay-view-anim"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '34px',
            background: '#ffffff'
          }}
        >
          {/* Top Search Input Header */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearchSubmit(searchQuery);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '54px',
              padding: '0 12px',
              borderBottom: '1px solid #e0e3e7',
              gap: '8px'
            }}
          >
            <button
              type="button"
              onClick={() => setView('home')}
              style={{
                width: '36px',
                height: '36px',
                background: 'transparent',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="#444746"
                />
              </svg>
            </button>

            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm ứng dụng và trò chơi"
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '16px',
                color: '#1f1f1f',
                background: 'transparent'
              }}
            />

            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  width: '34px',
                  height: '34px',
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#444746"
                  />
                </svg>
              </button>
            ) : null}

            <button
              type="submit"
              style={{
                width: '36px',
                height: '36px',
                background: 'transparent',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Tìm kiếm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                  fill="#0b57d0"
                />
              </svg>
            </button>
          </form>

          {/* Direct App Match Row when typing "vs" / "vssid" / "bhxh" */}
          {searchQuery.trim().length > 0 &&
            'vssid bảo hiểm xã hội bhxh'.includes(searchQuery.trim().toLowerCase()) && (
              <div
                onClick={() => setView('app-detail')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 16px',
                  gap: '14px',
                  borderBottom: '1px solid #f0f4f9',
                  cursor: 'pointer'
                }}
              >
                {renderVssIDIcon(40, 9)}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14.5px', fontWeight: 500, color: '#1f1f1f' }}>
                    VssID
                  </div>
                  <div style={{ fontSize: '12px', color: '#444746' }}>
                    Bảo hiểm xã hội Việt Nam
                  </div>
                </div>
                <span style={{ fontSize: '12px', color: '#0b57d0', fontWeight: 500 }}>
                  Ứng dụng
                </span>
              </div>
            )}

          {/* Suggestions List */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {SUGGESTIONS.filter(
              (s) => !searchQuery.trim() || s.toLowerCase().includes(searchQuery.trim().toLowerCase())
            ).map((item) => (
              <div
                key={item}
                onClick={() => handleSearchSubmit(item)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '13px 16px',
                  gap: '16px',
                  cursor: 'pointer'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                    fill="#444746"
                  />
                </svg>
                <span style={{ flex: 1, fontSize: '15px', color: '#1f1f1f' }}>{item}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z"
                    fill="#747775"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================== 3. SEARCH RESULTS VIEW ==================== */}
      {view === 'search-results' && (
        <div
          className="chplay-view-anim"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '34px',
            background: '#ffffff',
            overflow: 'hidden'
          }}
        >
          {/* Search Bar Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '54px',
              padding: '0 12px',
              borderBottom: '1px solid #e0e3e7',
              gap: '8px'
            }}
          >
            <button
              onClick={() => setView('home')}
              style={{
                width: '36px',
                height: '36px',
                background: 'transparent',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="#444746"
                />
              </svg>
            </button>

            <div
              onClick={() => setView('search-input')}
              style={{
                flex: 1,
                fontSize: '16px',
                color: '#1f1f1f',
                cursor: 'pointer'
              }}
            >
              {submittedQuery}
            </div>

            <button
              onClick={() => {
                setSearchQuery('');
                setView('search-input');
              }}
              style={{
                width: '34px',
                height: '34px',
                background: 'transparent',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="#444746"
                />
              </svg>
            </button>
          </div>

          {/* Results Scroll Container */}
          <div
            className="scrollbar-none"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px'
            }}
          >
            {/* Primary VssID Search Result Block */}
            <div
              onClick={() => setView('app-detail')}
              style={{
                cursor: 'pointer',
                marginBottom: '22px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '14px'
                }}
              >
                {renderAnimatedVssIDIcon(60)}

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '16.5px', fontWeight: 500, color: '#1f1f1f' }}>
                    VssID
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: '#0b57d0',
                      fontWeight: 500,
                      marginTop: '2px'
                    }}
                  >
                    Bảo hiểm xã hội Việt Nam
                  </div>
                  {installState === 'not_installed' && (
                    <div style={{ fontSize: '12px', color: '#444746', marginTop: '3px' }}>
                      3,9 ★ • 18 MB • 10 Tr+
                    </div>
                  )}
                  {installState === 'pending' && (
                    <div style={{ fontSize: '12px', color: '#444746', marginTop: '3px' }}>
                      Đang chờ...
                    </div>
                  )}
                  {installState === 'downloading' && (
                    <div
                      style={{
                        fontSize: '12px',
                        color: '#146c2e',
                        marginTop: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <PlayProtectIcon size={13} />
                      <span>{progress}% của 18,3 MB</span>
                    </div>
                  )}
                  {installState === 'installing' && (
                    <div style={{ fontSize: '12px', color: '#444746', marginTop: '3px' }}>
                      Đang cài đặt...
                    </div>
                  )}
                  {installState === 'installed' && (
                    <div style={{ fontSize: '12px', color: '#444746', marginTop: '3px' }}>
                      Đã cài đặt • 3,9 ★
                    </div>
                  )}
                </div>

                {/* Action Button on Search Result */}
                {installState === 'not_installed' && (
                  <button
                    onClick={startInstallSimulation}
                    style={{
                      background: '#0b57d0',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '8px 18px',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                  >
                    Cài đặt
                  </button>
                )}
                {(installState === 'pending' || installState === 'downloading') && (
                  <button
                    onClick={handleCancelInstall}
                    style={{
                      background: '#ffffff',
                      color: '#0b57d0',
                      border: '1px solid #747775',
                      borderRadius: '20px',
                      padding: '7px 16px',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                  >
                    Hủy
                  </button>
                )}
                {installState === 'installing' && (
                  <button
                    disabled
                    style={{
                      background: '#e3e3e3',
                      color: '#8e918f',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '8px 18px',
                      fontSize: '13.5px',
                      fontWeight: 500
                    }}
                  >
                    Mở
                  </button>
                )}
                {installState === 'installed' && (
                  <button
                    onClick={handleOpenApp}
                    style={{
                      background: '#0b57d0',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '8px 20px',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                  >
                    Mở
                  </button>
                )}
              </div>

              {/* 3 Preview Screenshots Row */}
              <div
                className="scrollbar-none"
                style={{
                  display: 'flex',
                  gap: '10px',
                  overflowX: 'auto'
                }}
              >
                {[bgLogin, frameDashboard, frameInsurance].map((imgSrc, i) => (
                  <div
                    key={i}
                    style={{
                      width: '112px',
                      height: '208px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid #e0e3e7',
                      flexShrink: 0,
                      background: '#f8fafc'
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`VssID preview ${i + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: '#e0e3e7', margin: '16px 0' }} />

            <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '14px', color: '#1f1f1f' }}>
              Kết quả có liên quan
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {OTHER_APPS.slice(0, 3).map((app) => (
                <div
                  key={app.id}
                  style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
                >
                  {renderAppIcon(app, 52, 12)}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14.5px', fontWeight: 500, color: '#1f1f1f' }}>
                      {app.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#444746', marginTop: '2px' }}>
                      {app.dev}
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '2px' }}>
                      {app.rating} ★ • {app.size}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================== 4. APP DETAIL VIEW (VssID) ==================== */}
      {view === 'app-detail' && (
        <div
          className="chplay-view-anim"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '34px',
            background: '#ffffff',
            overflow: 'hidden'
          }}
        >
          {/* Detail Top Navigation Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '52px',
              padding: '0 8px'
            }}
          >
            <button
              onClick={() => setView('search-results')}
              style={{
                width: '40px',
                height: '40px',
                background: 'transparent',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="#444746"
                />
              </svg>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button
                onClick={() => setView('search-input')}
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                    fill="#444746"
                  />
                </svg>
              </button>
              <button
                onClick={handleUninstall}
                title="Đặt lại trạng thái cài đặt"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                    fill="#444746"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable Detail Body */}
          <div
            className="scrollbar-none"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '6px 20px 28px'
            }}
          >
            {/* App Icon + Title + Developer / Download Status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '20px' }}>
              {renderAnimatedVssIDIcon(72)}

              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 500,
                    color: '#1f1f1f',
                    lineHeight: 1.2
                  }}
                >
                  VssID
                </div>

                {(installState === 'not_installed' || installState === 'installed') && (
                  <>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#0b57d0',
                        marginTop: '4px'
                      }}
                    >
                      Bảo hiểm xã hội Việt Nam
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '12px',
                        color: '#444746',
                        marginTop: '5px'
                      }}
                    >
                      <PlayProtectIcon size={14} />
                      <span>Đã xác minh bởi Play Protect</span>
                    </div>
                  </>
                )}

                {installState === 'pending' && (
                  <>
                    <div style={{ fontSize: '13.5px', color: '#444746', marginTop: '5px' }}>
                      Đang chờ...
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '12px',
                        color: '#146c2e',
                        marginTop: '4px'
                      }}
                    >
                      <PlayProtectIcon size={14} />
                      <span>Đã xác minh bởi Play Protect</span>
                    </div>
                  </>
                )}

                {installState === 'downloading' && (
                  <>
                    <div
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 500,
                        color: '#1f1f1f',
                        marginTop: '5px'
                      }}
                    >
                      {progress}% của 18,30 MB
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '12px',
                        color: '#146c2e',
                        marginTop: '4px'
                      }}
                    >
                      <PlayProtectIcon size={14} />
                      <span>Đã xác minh bởi Play Protect</span>
                    </div>
                  </>
                )}

                {installState === 'installing' && (
                  <>
                    <div
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 500,
                        color: '#1f1f1f',
                        marginTop: '5px'
                      }}
                    >
                      Đang cài đặt...
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '12px',
                        color: '#146c2e',
                        marginTop: '4px'
                      }}
                    >
                      <PlayProtectIcon size={14} />
                      <span>Đã xác minh bởi Play Protect</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 4-Column Metadata Strip */}
            <div
              className="scrollbar-none"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
                overflowX: 'auto'
              }}
            >
              <div style={{ flex: 1, textAlign: 'center', minWidth: '78px' }}>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#1f1f1f' }}>3,9 ★</div>
                <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '3px' }}>
                  64 N đánh giá
                </div>
              </div>
              <div style={{ width: '1px', height: '24px', background: '#e0e3e7' }} />
              <div style={{ flex: 1, textAlign: 'center', minWidth: '78px' }}>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#1f1f1f' }}>18 MB</div>
                <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '3px' }}>
                  Dung lượng
                </div>
              </div>
              <div style={{ width: '1px', height: '24px', background: '#e0e3e7' }} />
              <div style={{ flex: 1, textAlign: 'center', minWidth: '72px' }}>
                <div
                  style={{
                    display: 'inline-block',
                    border: '1.5px solid #1f1f1f',
                    borderRadius: '3px',
                    padding: '0 4px',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    lineHeight: 1.3
                  }}
                >
                  3+
                </div>
                <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '3px' }}>
                  Độ tuổi 3+
                </div>
              </div>
              <div style={{ width: '1px', height: '24px', background: '#e0e3e7' }} />
              <div style={{ flex: 1, textAlign: 'center', minWidth: '78px' }}>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#1f1f1f' }}>10 Tr+</div>
                <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '3px' }}>
                  Lượt tải xuống
                </div>
              </div>
            </div>

            {/* Install / Cancel / Open Action Buttons */}
            <div style={{ marginBottom: '22px' }}>
              {installState === 'not_installed' && (
                <button
                  onClick={startInstallSimulation}
                  style={{
                    width: '100%',
                    height: '40px',
                    background: '#0b57d0',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer'
                  }}
                >
                  Cài đặt
                </button>
              )}

              {(installState === 'pending' || installState === 'downloading') && (
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
                      cursor: 'pointer'
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
                      fontWeight: 500
                    }}
                  >
                    Mở
                  </button>
                </div>
              )}

              {installState === 'installing' && (
                <div style={{ display: 'flex', gap: '10px' }}>
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
                      fontWeight: 500
                    }}
                  >
                    Gỡ cài đặt
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
                      fontWeight: 500
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
                      cursor: 'pointer'
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
                      cursor: 'pointer'
                    }}
                  >
                    Mở
                  </button>
                </div>
              )}
            </div>

            {/* Screenshots Gallery */}
            <div
              className="scrollbar-none"
              style={{
                display: 'flex',
                gap: '12px',
                overflowX: 'auto',
                marginBottom: '22px'
              }}
            >
              {[bgLogin, frameDashboard, frameInsurance].map((imgSrc, i) => (
                <div
                  key={i}
                  style={{
                    width: '132px',
                    height: '246px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e0e3e7',
                    flexShrink: 0,
                    background: '#f8fafc'
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={`VssID screen ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* About this app */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '8px'
              }}
            >
              <span style={{ fontSize: '16px', fontWeight: 600, color: '#1f1f1f' }}>
                Về ứng dụng này
              </span>
              <span style={{ fontSize: '18px', color: '#444746' }}>→</span>
            </div>
            <p
              style={{
                fontSize: '13.5px',
                color: '#444746',
                lineHeight: 1.5,
                margin: '0 0 14px'
              }}
            >
              VssID - Bảo hiểm xã hội số là ứng dụng trên nền tảng thiết bị di động của Bảo hiểm xã
              hội Việt Nam, giúp người tham gia tra cứu thẻ BHYT điện tử, quá trình tham gia BHXH,
              BHTN, BHTNLĐ-BNN và thông tin hưởng các chế độ bảo hiểm.
            </p>

            {/* Category Chips */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '22px' }}>
              {['Năng suất', 'Bảo hiểm xã hội', 'Dịch vụ công'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    border: '1px solid #c4c7c5',
                    borderRadius: '8px',
                    padding: '5px 12px',
                    fontSize: '12.5px',
                    color: '#444746',
                    fontWeight: 500
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Ratings & Reviews Summary */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}
            >
              <span style={{ fontSize: '16px', fontWeight: 600, color: '#1f1f1f' }}>
                Xếp hạng và đánh giá
              </span>
              <span style={{ fontSize: '18px', color: '#444746' }}>→</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div>
                <div style={{ fontSize: '42px', fontWeight: 500, lineHeight: 1, color: '#1f1f1f' }}>
                  3,9
                </div>
                <div style={{ color: '#0b57d0', fontSize: '13px', marginTop: '4px' }}>★★★★☆</div>
                <div style={{ fontSize: '11.5px', color: '#444746', marginTop: '4px' }}>64.280</div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {[
                  { star: 5, pct: '62%' },
                  { star: 4, pct: '16%' },
                  { star: 3, pct: '7%' },
                  { star: 2, pct: '4%' },
                  { star: 1, pct: '11%' }
                ].map((r) => (
                  <div
                    key={r.star}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}
                  >
                    <span style={{ width: '10px', color: '#444746' }}>{r.star}</span>
                    <div
                      style={{
                        flex: 1,
                        height: '8px',
                        background: '#e0e3e7',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          width: r.pct,
                          height: '100%',
                          background: '#0b57d0',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== BOTTOM NAVIGATION BAR (Home View) ==================== */}
      {view === 'home' && (
        <div
          style={{
            height: '64px',
            background: '#f0f4f9',
            borderTop: '1px solid #e4e8ee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexShrink: 0,
            zIndex: 20
          }}
        >
          {[
            {
              id: 'games',
              label: 'Trò chơi',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 6H3C1.9 6 1 6.9 1 8V16C1 17.1 1.9 18 3 18H21C22.1 18 23 17.1 23 16V8C23 6.9 22.1 6 21 6ZM11 13H8V16H6V13H3V11H6V8H8V11H11V13ZM15.5 15C14.67 15 14 14.33 14 13.5C14 12.67 14.67 12 15.5 12C16.33 12 17 12.67 17 13.5C17 14.33 16.33 15 15.5 15ZM19.5 12C18.67 12 18 11.33 18 10.5C18 9.67 18.67 9 19.5 9C20.33 9 21 9.67 21 10.5C21 11.33 20.33 12 19.5 12Z"
                    fill="currentColor"
                  />
                </svg>
              )
            },
            {
              id: 'apps',
              label: 'Ứng dụng',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z"
                    fill="currentColor"
                  />
                </svg>
              )
            },
            {
              id: 'search',
              label: 'Tìm kiếm',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                    fill="currentColor"
                  />
                </svg>
              )
            },
            {
              id: 'books',
              label: 'Sách',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z"
                    fill="currentColor"
                  />
                </svg>
              )
            }
          ].map((tab) => {
            const active = bottomTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setBottomTab(tab.id);
                  if (tab.id === 'search') {
                    setView('search-input');
                  }
                }}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '3px',
                  cursor: 'pointer',
                  color: active ? '#001d35' : '#444746'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '28px',
                    borderRadius: '14px',
                    background: active ? '#c2e7ff' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.15s ease'
                  }}
                >
                  {tab.icon}
                </div>
                <span style={{ fontSize: '11.5px', fontWeight: active ? 600 : 500 }}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CHPlay;
