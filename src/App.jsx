import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import InsuranceList from './screens/InsuranceList';
import SalaryDetail from './screens/SalaryDetail';
import Sidebar from './components/Sidebar';
import AccountManager from './components/AccountManager';
import './App.css';
import userAvatar from './assets/A1.png';
import bgLogin from './assets/bg_login.png';
import logoBhxh from './assets/logo_bhxh.png';



const SEED_ACCOUNTS = [
  {
    username: "123456789",
    password: "123",
    fullName: "Cao Thành Tai",
    bhxhCode: "123456789999",
    birthday: "24/05/1994",
    cccd: "040299010346",
    phone: "0864777665",
    address: "Thôn 7, Ngọc Đường, Hồng Châu, Yên Lạc, Vĩnh Phúc",
    avatar: userAvatar,
    insuranceHistory: [
      {
        from: "09/2025",
        to: "09/2026",
        company: "Công ty Cổ phần Masscom Việt Nam",
        position: "Kỹ sư\ncơ khí",
        salary: "14.500.000",
        workAddress: "48 Tố Hữu, Phường Tố Hữu, Thanh Xuân, Hà Nội"
      },
      {
        from: "01/2026",
        to: "09/2026",
        company: "Công ty Cổ phần Masscom Việt Nam",
        position: "Kỹ sư\ncơ khí",
        salary: "14.500.000",
        workAddress: "48 Tố Hữu, Phường Tố Hữu, Thanh Xuân, Hà Nội"
      },
      {
        from: "01/2026",
        to: "09/2026",
        company: "Công ty Cổ phần Masscom Việt Nam",
        position: "Kỹ sư\ncơ khí",
        salary: "14.500.000",
        workAddress: "48 Tố Hữu, Phường Tố Hữu, Thanh Xuân, Hà Nội"
      },
      {
        from: "01/2026",
        to: "09/2026",
        company: "Công ty Cổ phần Masscom Việt Nam",
        position: "Kỹ sư\ncơ khí",
        salary: "21.500.000",
        workAddress: "48 Tố Hữu, Phường Tố Hữu, Thanh Xuân, Hà Nội"
      }
    ]
  }
];

function App() {
  const [screen, setScreen] = useState('login');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigationData, setNavigationData] = useState(null);
  const [tryWebMode, setTryWebMode] = useState(false);

  // 100% BULLETPROOF DEV SYNC:
  // If the developer makes ANY change to SEED_ACCOUNTS in the code (usernames, names, history, commas, etc.),
  // we immediately detect it by comparing the raw string hash and reset/sync the localStorage cache instantly.
  const currentSeedRaw = JSON.stringify(SEED_ACCOUNTS);
  const lastSyncedSeedRaw = localStorage.getItem('vssid_seed_accounts_raw');
  const isSeedChanged = currentSeedRaw !== lastSyncedSeedRaw;

  // Load and manage dynamic accounts
  const [accounts, setAccounts] = useState(() => {
    if (isSeedChanged) {
      localStorage.setItem('vssid_accounts', JSON.stringify(SEED_ACCOUNTS));
      localStorage.setItem('vssid_seed_accounts_raw', currentSeedRaw);
      return SEED_ACCOUNTS;
    }

    const saved = localStorage.getItem('vssid_accounts');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    localStorage.setItem('vssid_accounts', JSON.stringify(SEED_ACCOUNTS));
    localStorage.setItem('vssid_seed_accounts_raw', currentSeedRaw);
    return SEED_ACCOUNTS;
  });

  const [currentAccount, setCurrentAccount] = useState(() => {
    if (isSeedChanged) {
      // If code changed, dynamically update the logged-in session to the new seed account
      const newDefault = SEED_ACCOUNTS[0];
      localStorage.setItem('vssid_current_account', JSON.stringify(newDefault));
      return newDefault;
    }

    const saved = localStorage.getItem('vssid_current_account');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Verify current account still exists in current seed list
        const matched = SEED_ACCOUNTS.find(s => s.username === parsed.username);
        if (matched) {
          return parsed;
        }
      } catch (e) {}
    }
    return null;
  });

  const [accountManagerOpen, setAccountManagerOpen] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('config') === 'true' || 
           params.get('admin') === 'true' || 
           params.get('settings') === 'true' || 
           params.get('manage') === 'true';
  });

  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const shouldOpen = params.get('config') === 'true' || 
                         params.get('admin') === 'true' || 
                         params.get('settings') === 'true' || 
                         params.get('manage') === 'true';
      setAccountManagerOpen(shouldOpen);
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    const interval = setInterval(handleUrlChange, 1000);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      clearInterval(interval);
    };
  }, []);

  const [scale, setScale] = useState(1);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' && window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth > 1024;
      setIsDesktop(isNowDesktop);
      
      if (!isNowDesktop) {
        setScale(window.innerWidth / 402);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animation states for premium native iOS transitions
  const [transitioning, setTransitioning] = useState(false);
  const [prevScreen, setPrevScreen] = useState(null);
  const [slideDirection, setSlideDirection] = useState('left'); // 'left' = forward, 'right' = back
  const [transitionType, setTransitionType] = useState('instant'); // 'slide' | 'fade' | 'instant'

  const screenOrder = ['login', 'dashboard', 'insurance-list', 'salary-detail'];

  const saveAccounts = (newAccounts) => {
    setAccounts(newAccounts);
    localStorage.setItem('vssid_accounts', JSON.stringify(newAccounts));
    // Also update currentAccount if it was modified
    if (currentAccount) {
      const updatedCurrent = newAccounts.find(a => a.username === currentAccount.username);
      if (updatedCurrent) {
        setCurrentAccount(updatedCurrent);
        localStorage.setItem('vssid_current_account', JSON.stringify(updatedCurrent));
      } else {
        // If logged in account was deleted
        setCurrentAccount(null);
        localStorage.removeItem('vssid_current_account');
        navigateTo('login', { transition: 'fade' });
      }
    }
  };

  const handleLogin = async (username, password) => {
    // If called with a full account object (e.g. from AccountManager quick login or biometric)
    if (username && typeof username === 'object') {
      const account = username;
      setCurrentAccount(account);
      localStorage.setItem('vssid_current_account', JSON.stringify(account));
      navigateTo('dashboard');
      return { success: true };
    }

    // 1. ALWAYS check local accounts first for instant offline/seed login!
    const matched = accounts.find(a => a.username === username);
    if (matched) {
      setCurrentAccount(matched);
      localStorage.setItem('vssid_current_account', JSON.stringify(matched));
      navigateTo('dashboard');
      return { success: true };
    }

    const isSupabaseConfigured = 
      supabase && supabase.supabaseUrl && !supabase.supabaseUrl.includes('YOUR_SUPABASE_URL');

    if (!isSupabaseConfigured) {
      return { success: false, message: 'Mã số BHXH không tồn tại trong hệ thống!' };
    }

    try {
      const { data, error } = await supabase
        .from('accounts')
        .select('*')
        .eq('username', username)
        .single();

      if (error || !data) {
        return { success: false, message: 'Mã số BHXH không tồn tại trong hệ thống!' };
      }

      // Convert snake_case fields from database to camelCase for full compatibility with React UI
      const formattedAcc = {
        username: data.username,
        password: data.password,
        fullName: data.full_name,
        bhxhCode: data.bhxh_code,
        birthday: data.birthday,
        cccd: data.cccd,
        phone: data.phone,
        address: data.address,
        avatar: data.avatar,
        insuranceHistory: data.insurance_history || []
      };

      setCurrentAccount(formattedAcc);
      localStorage.setItem('vssid_current_account', JSON.stringify(formattedAcc));
      navigateTo('dashboard');
      return { success: true };
    } catch (err) {
      console.error('Supabase login error:', err);
      return { success: false, message: 'Lỗi kết nối mạng đến máy chủ database!' };
    }
  };

  const handleLogout = () => {
    setCurrentAccount(null);
    localStorage.removeItem('vssid_current_account');
    navigateTo('login', { transition: 'fade' });
  };

  const navigateTo = (targetScreen, options = null) => {
    if (targetScreen === screen || transitioning) return;

    let data = null;
    let transition = 'instant';
    let direction = 'left';

    // Parse options
    if (options) {
      if (options.rowData) {
        data = options;
      } else {
        data = options.data || null;
      }
      transition = options.transition || 'instant';
      direction = options.direction || 'left';
    }

    // Default transition heuristics if not explicitly specified
    if (!options || !options.transition) {
      const isStackScreen = (s) => ['dashboard', 'insurance-list', 'salary-detail'].includes(s);
      if (isStackScreen(screen) && isStackScreen(targetScreen)) {
        if (screen === 'salary-detail' || targetScreen === 'salary-detail') {
          transition = 'slide-up';
        } else {
          transition = 'slide';
        }
        const curIdx = screenOrder.indexOf(screen);
        const targetIdx = screenOrder.indexOf(targetScreen);
        direction = targetIdx > curIdx ? 'left' : 'right';
      } else if (screen === 'login' && targetScreen === 'dashboard') {
        transition = 'fade';
      } else if (targetScreen === 'login') {
        transition = 'fade';
      } else {
        transition = 'instant';
      }
    }

    setSlideDirection(direction);
    setTransitionType(transition);
    setPrevScreen(screen);
    setNavigationData(data);

    if (transition === 'instant') {
      setScreen(targetScreen);
      setPrevScreen(null);
    } else {
      setTransitioning(true);
      setScreen(targetScreen);

      // End transition state after animation finishes (300ms matching CSS duration)
      setTimeout(() => {
        setTransitioning(false);
        setPrevScreen(null);
      }, 300);
    }
  };

  const getScreen = (screenName) => {
    const defaultAcc = currentAccount || accounts[0] || SEED_ACCOUNTS[0];
    switch (screenName) {
      case 'login':
        return (
          <Login 
            accounts={accounts}
            onLogin={handleLogin}
            onOpenAccountManager={() => setAccountManagerOpen(true)}
          />
        );
      case 'dashboard':
        return (
          <Dashboard 
            currentAccount={defaultAcc}
            onOpenSidebar={() => setSidebarOpen(true)} 
            onNavigate={navigateTo} 
          />
        );
      case 'insurance-list':
        return (
          <InsuranceList 
            currentAccount={defaultAcc}
            onNavigate={navigateTo} 
            onOpenSidebar={() => setSidebarOpen(true)} 
          />
        );
      case 'salary-detail':
        return (
          <SalaryDetail 
            onNavigate={navigateTo} 
            rowData={navigationData?.rowData} 
          />
        );
      default:
        return (
          <Login 
            accounts={accounts}
            onLogin={handleLogin}
            onOpenAccountManager={() => setAccountManagerOpen(true)}
          />
        );
    }
  };

  if (accountManagerOpen) {
    const handleCloseManager = () => {
      const url = new URL(window.location.href);
      url.searchParams.delete('config');
      url.searchParams.delete('manage');
      url.searchParams.delete('admin');
      url.searchParams.delete('settings');
      window.history.pushState({}, '', url.pathname + url.search);
      setAccountManagerOpen(false);
    };

    const handleQuickLoginManager = (acc) => {
      const url = new URL(window.location.href);
      url.searchParams.delete('config');
      url.searchParams.delete('manage');
      url.searchParams.delete('admin');
      url.searchParams.delete('settings');
      window.history.pushState({}, '', url.pathname + url.search);
      setAccountManagerOpen(false);
      handleLogin(acc);
    };

    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        background: '#0f172a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Glow circles also for the admin panel */}
        <div className="glow-circle glow-blue" style={{ zIndex: 1, opacity: 0.6 }} />
        <div className="glow-circle glow-cyan" style={{ zIndex: 1, opacity: 0.6 }} />
        
        <div style={{
          width: '90%',
          maxWidth: '850px',
          height: '85vh',
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 10,
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <AccountManager 
            isOpen={true} 
            onClose={handleCloseManager} 
            accounts={accounts}
            onUpdateAccounts={saveAccounts}
            onQuickLogin={handleQuickLoginManager}
            isStandalone={true}
          />
        </div>
      </div>
    );
  }

  if (!isDesktop) {
    const isNative = typeof window !== 'undefined' && (!!window.Capacitor || window.location.hostname === 'localhost');
    const isZalo = typeof navigator !== 'undefined' && (/zalo/i.test(navigator.userAgent) || /fbav/i.test(navigator.userAgent) || /messenger/i.test(navigator.userAgent) || /instagram/i.test(navigator.userAgent));

    // Show Zalo / Facebook in-app browser redirection guide overlay
    if (!isNative && isZalo) {
      return (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#090d16',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          padding: '40px 24px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 10000,
          overflow: 'hidden'
        }}>
          {/* Pulsing Arrow pointing to top-right corner where Zalo browser menu button is */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            animation: 'pulse-arrow 1.5s infinite',
            zIndex: 10001
          }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#01aef2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
          
          <style>{`
            @keyframes pulse-arrow {
              0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
              50% { transform: translate(8px, -8px) scale(1.1); opacity: 1; stroke: #0072c8; }
              100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
            }
          `}</style>

          {/* Warning Icon */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255, 170, 0, 0.1)',
            border: '2px dashed #ffaa00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px',
            marginBottom: '20px'
          }}>
            ⚠️
          </div>

          <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 16px 0', color: '#ffaa00' }}>
            Trình duyệt Zalo bị chặn tải file
          </h2>

          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', margin: '0 0 24px 0' }}>
            Trình duyệt tích hợp của Zalo không hỗ trợ tải xuống trực tiếp và cài đặt file ứng dụng <strong>VssID 12.2.apk</strong> để bảo mật.
          </p>

          {/* Instructions Box */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '20px',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            textAlign: 'left'
          }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#01aef2', display: 'flex', alignItems: 'center', gap: '8px' }}>
              👉 HƯỚNG DẪN 2 BƯỚC ĐƠN GIẢN:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#cbd5e1', lineHeight: '1.45' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: '#01aef2', fontWeight: 'bold' }}>1.</span>
                <span>Nhấn vào biểu tượng <strong>dấu 3 chấm (•••)</strong> ở góc trên cùng bên phải màn hình Zalo.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: '#01aef2', fontWeight: 'bold' }}>2.</span>
                <span>Chọn <strong>"Mở bằng trình duyệt" (Open in Browser)</strong> để tự động chuyển sang Chrome/Safari và tải file cài đặt thành công!</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Show Mobile Landing Page if accessed from mobile browser and not in live web preview mode
    if (!isNative && !tryWebMode) {
      return (
        <div style={{
          position: 'fixed',
          inset: 0,
          overflowY: 'auto',
          background: '#090d16',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          padding: '30px 24px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          WebkitOverflowScrolling: 'touch',
          zIndex: 1000
        }}>
          {/* Decorative glowing backdrops */}
          <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(2, 132, 199, 0.22)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.22)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />

          {/* Brand Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', zIndex: 1 }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 16px rgba(0, 105, 173, 0.35)'
            }}>
              <img src={logoBhxh} alt="BHXH" style={{ width: '90%', height: '90%', objectFit: 'contain', borderRadius: '50%' }} />
            </div>
            <div>
              <div style={{
                fontSize: '22px',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #01aef2 0%, #0072c8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                VssID VIP Pro
              </div>
              <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Ứng dụng Bảo hiểm xã hội số
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 800, margin: 0, lineHeight: '1.3' }}>
              Trải nghiệm bản <span style={{ color: '#01aef2' }}>VssID VIP</span> mượt mà nhất.
            </h1>
            <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>
              Mô hình thử nghiệm giao diện (UI/UX Mockup & Prototype) cao cấp của hệ thống Bảo hiểm xã hội số. Dự án giả lập toàn diện các tính năng cốt lõi như đăng nhập sinh trắc học giả định, quản lý danh sách nhiều tài khoản và đồng bộ dữ liệu nghiên cứu thời gian thực.
            </p>
          </div>

          {/* Action CTAs */}
          <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
            {/* Big Download Button */}
            <a 
               href="./VssID 12.2.apk"
               download="VssID 12.2.apk"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #0072c8 0%, #01aef2 100%)',
                color: '#ffffff',
                padding: '16px 20px',
                borderRadius: '14px',
                fontSize: '15px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(1, 174, 242, 0.35)',
                textAlign: 'center'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Tải ngay bản APK Android
            </a>

            {/* Try Web Option Button */}
            <button 
              onClick={() => setTryWebMode(true)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                padding: '14px 20px',
                borderRadius: '14px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              🌐 Dùng thử bản Web trực tuyến
            </button>
          </div>

          {/* Detailed Legal Disclaimer */}
          <div style={{
            zIndex: 1,
            background: 'rgba(245, 158, 11, 0.03)',
            border: '1px solid rgba(245, 158, 11, 0.15)',
            borderRadius: '16px',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '8px' }}>
              ⚠️ TUYÊN BỐ MIỄN TRỪ TRÁCH NHIỆM PHÁP LÝ
            </div>
            <div style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.6', fontWeight: 500 }}>
              <p style={{ margin: '0 0 8px 0', color: '#e2e8f0' }}>
                Ứng dụng <strong>VssID VIP Pro</strong> này được thiết kế và phát triển <strong>DUY NHẤT</strong> cho mục đích học tập nghiên cứu, thử nghiệm công nghệ UI/UX và tối ưu hóa tính năng kỹ thuật. Đây <strong>KHÔNG</strong> phải ứng dụng chính thức của Bảo Hiểm Xã Hội Việt Nam và không đại diện cho bất kỳ cơ quan tổ chức chính phủ nào.
              </p>
              <p style={{ margin: 0, color: '#94a3b8' }}>
                Nhà phát triển <strong>hoàn toàn miễn trừ mọi trách nhiệm pháp lý</strong> đối với bất kỳ hành vi sử dụng ứng dụng này sai mục đích (như cố ý giả mạo thông tin, lưu trữ sai dữ liệu hoặc phân phối trái phép ứng dụng bên ngoài phạm vi thử nghiệm). Việc bạn tiếp tục tải xuống, cài đặt hoặc chạy thử đồng nghĩa với việc bạn đã đọc kỹ, thấu hiểu và hoàn toàn đồng ý miễn trừ mọi trách nhiệm cho đội ngũ phát triển.
              </p>
            </div>
          </div>

          {/* Comprehensive Illustrated Guide */}
          <div style={{
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}>
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#01aef2', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              📖 Hướng Dẫn Cài Đặt Chi Tiết
            </div>

            {/* Step 1: Zalo Redirect */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#01aef2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, color: '#ffffff' }}>
                  1
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#cbd5e1' }}>Vượt chặn Zalo / Facebook</div>
              </div>
              <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                Trình duyệt tích hợp của Zalo/Facebook sẽ chặn tải file apk. Hãy nhấn nút <strong>ba chấm (•••)</strong> ở góc trên bên phải màn hình Zalo, rồi chọn <strong>"Mở bằng trình duyệt"</strong> (Open in Browser) để tải file thành công qua Chrome/Safari.
              </p>
              {/* Illustration Image */}
              <div style={{
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(1, 174, 242, 0.2)',
                boxShadow: '0 4px 15px rgba(1, 174, 242, 0.1)',
                background: '#0d1321'
              }}>
                <img 
                  src="./guide_zalo_redirect.png" 
                  alt="Zalo Redirect Guide" 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
            </div>

            {/* Step 2: Android APK Unknown Sources */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#00cc88', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, color: '#ffffff' }}>
                  2
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#cbd5e1' }}>Cho phép nguồn không xác định</div>
              </div>
              <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                Mở file <code>VssID 12.2.apk</code> vừa tải. Nếu điện thoại Android hiện thông báo bảo mật chặn ứng dụng từ nguồn ngoài, hãy nhấn <strong>Cài đặt (Settings)</strong> và kích hoạt nút <strong>"Cho phép từ nguồn này"</strong> (Allow from this source) như hình bên dưới để ứng dụng được tự động kích hoạt.
              </p>
              {/* Illustration Image */}
              <div style={{
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 204, 136, 0.2)',
                boxShadow: '0 4px 15px rgba(0, 204, 136, 0.1)',
                background: '#0d1321'
              }}>
                <img 
                  src="./guide_android_install.png" 
                  alt="Android Security Toggle Guide" 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    const containerHeight = 874 * scale;
    const fitsVertically = typeof window !== 'undefined' && containerHeight <= window.innerHeight;

    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        overflowY: fitsVertically ? 'hidden' : 'auto',
        overflowX: 'hidden',
        background: screen === 'login' ? '#072b61' : '#ffffff',
        display: fitsVertically ? 'flex' : 'block',
        alignItems: 'center',
        justifyContent: 'center',
        WebkitOverflowScrolling: 'touch'
      }}>
        {/* Floating Download Button on mobile browser only (to go back to Landing Page) */}
        {!isNative && (
          <button 
            onClick={() => setTryWebMode(false)}
            style={{
              position: 'fixed',
              right: '16px',
              top: '16px',
              zIndex: 9999,
              background: 'linear-gradient(135deg, #0072c8 0%, #01aef2 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              boxShadow: '0 4px 12px rgba(0, 105, 173, 0.4)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            📥 Tải APK
          </button>
        )}
        {/* Full-screen background image for Login screen only */}
        {screen === 'login' && (
          <img 
            src={bgLogin} 
            alt="" 
            style={{
              position: 'fixed',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              pointerEvents: 'none'
            }} 
            draggable={false}
          />
        )}

        {/* Wrapper matching the exact visual scaled height of the app */}
        <div style={{
          width: `${402 * scale}px`,
          height: `${containerHeight}px`,
          position: 'relative',
          overflow: 'hidden',
          margin: fitsVertically ? '0' : '0 auto',
          background: screen === 'login' ? 'transparent' : '#ffffff',
          zIndex: 1,
          flexShrink: 0
        }}>
          {/* Main 402x874 content container, scaled and positioned at top-left of the wrapper */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '402px',
            height: '874px',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            overflow: 'hidden',
            background: 'transparent'
          }}>
            {/* Previous screen sliding out */}
            {transitioning && prevScreen && (
              <div 
                className={
                  transitionType === 'slide'
                    ? (slideDirection === 'left' ? 'screen-push-leave' : 'screen-pop-leave')
                    : transitionType === 'slide-up'
                      ? (slideDirection === 'left' ? 'screen-slideup-leave' : 'screen-slidedown-leave')
                      : (transitionType === 'fade' ? 'screen-fade-leave' : '')
                }
                style={{
                  position: 'absolute',
                  inset: 0
                }}
              >
                {getScreen(prevScreen)}
                {transitionType === 'slide' && slideDirection === 'left' && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'black',
                    animation: 'dimmerFadeIn 0.3s cubic-bezier(0.1, 0.76, 0.55, 0.94) forwards',
                    pointerEvents: 'none',
                    zIndex: 10
                  }} />
                )}
              </div>
            )}

            {/* Current screen sliding in */}
            <div 
              className={
                transitioning
                  ? (transitionType === 'slide'
                      ? (slideDirection === 'left' ? 'screen-push-enter' : 'screen-pop-enter')
                      : transitionType === 'slide-up'
                        ? (slideDirection === 'left' ? 'screen-slideup-enter' : 'screen-slidedown-enter')
                        : (transitionType === 'fade' ? 'screen-fade-enter' : ''))
                  : ''
              }
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: transitioning ? (slideDirection === 'left' || transitionType === 'fade' ? 2 : 1) : 2
              }}
            >
              {getScreen(screen)}
              {transitioning && transitionType === 'slide' && slideDirection === 'right' && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'black',
                  animation: 'dimmerFadeOut 0.3s cubic-bezier(0.1, 0.76, 0.55, 0.94) forwards',
                  pointerEvents: 'none',
                  zIndex: 10
                }} />
              )}
            </div>

            {/* Overlay Sidebar Drawer */}
            <Sidebar 
              isOpen={sidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
              currentAccount={currentAccount || accounts[0] || SEED_ACCOUNTS[0]}
              onOpenAccountManager={() => {
                setSidebarOpen(false);
                setTimeout(() => {
                  setAccountManagerOpen(true);
                }, 300);
              }}
              onNavigate={(target) => {
                setSidebarOpen(false);
                setTimeout(() => {
                  if (target === 'login') {
                    handleLogout();
                  } else {
                    navigateTo(target, { transition: 'instant' });
                  }
                }, 300);
              }}
            />

            {/* Account Manager Modal Sheet overlay */}
            <AccountManager 
              isOpen={accountManagerOpen} 
              onClose={() => setAccountManagerOpen(false)} 
              accounts={accounts}
              onUpdateAccounts={saveAccounts}
              onQuickLogin={handleLogin}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-viewport" style={{
      background: '#090d16',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '80px',
      padding: '40px',
      boxSizing: 'border-box',
      overflowY: 'auto',
      flexWrap: 'wrap'
    }}>
      {/* Decorative neon backdrop glowing elements positioned absolutely so they don't break flex layout */}
      <div className="glow-circle glow-blue" style={{ position: 'absolute', top: '5%', left: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(2, 132, 199, 0.18)', filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none', display: 'block' }} />
      <div className="glow-circle glow-cyan" style={{ position: 'absolute', bottom: '5%', right: '5%', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.18)', filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none', display: 'block' }} />

      {/* LEFT COLUMN: Landing Page & Download Info */}
      <div style={{
        maxWidth: '550px',
        color: '#ffffff',
        fontFamily: 'Inter, sans-serif',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        {/* VssID Pro Logo Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(0, 105, 173, 0.4)'
          }}>
            <img src={logoBhxh} alt="BHXH" style={{ width: '90%', height: '90%', objectFit: 'contain', borderRadius: '50%' }} />
          </div>
          <div>
            <div style={{
              fontSize: '28px',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #01aef2 0%, #0072c8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '1px'
            }}>
              VssID VIP Pro
            </div>
            <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '2px' }}>
              Ứng dụng Bảo hiểm xã hội số
            </div>
          </div>
        </div>

        {/* Catchy headline */}
        <h1 style={{
          fontSize: '38px',
          fontWeight: 800,
          lineHeight: '1.25',
          margin: 0,
          color: '#ffffff'
        }}>
          Trải nghiệm bản <span style={{ color: '#01aef2' }}>VssID VIP</span> mượt mà nhất.
        </h1>

        <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
          Mô hình thử nghiệm giao diện (UI/UX Mockup & Prototype) cao cấp của hệ thống Bảo hiểm xã hội số. Dự án giả lập toàn diện các tính năng cốt lõi như đăng nhập sinh trắc học giả định, quản lý danh sách nhiều tài khoản và đồng bộ dữ liệu nghiên cứu thời gian thực.
        </p>

        {/* Feature badges list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '4px 0' }}>
          {[
            '🎨 Bản mô phỏng giao diện chuẩn Figma chính xác đến từng pixel',
            '⚡ Minh họa tính năng đăng nhập sinh trắc học (Vân tay/FaceID) tiện lợi',
            '💾 Giả lập quản lý không giới hạn số lượng tài khoản BHXH thử nghiệm',
            '☁️ Kết nối cơ sở dữ liệu học tập thời gian thực thông qua Supabase',
            '📲 Cập nhật nóng giao diện (Live Update) tức thì để thử nghiệm nhanh'
          ].map((feat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#cbd5e1' }}>
              <span style={{ color: '#00cc88', fontWeight: 'bold' }}>✓</span> {feat}
            </div>
          ))}
        </div>

        {/* Detailed Legal Disclaimer */}
        <div style={{
          background: 'rgba(245, 158, 11, 0.03)',
          border: '1px solid rgba(245, 158, 11, 0.15)',
          borderRadius: '16px',
          padding: '18px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ⚠️ TUYÊN BỐ MIỄN TRỪ TRÁCH NHIỆM PHÁP LÝ
          </div>
          <div style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.6', fontWeight: 500 }}>
            <p style={{ margin: '0 0 8px 0', color: '#e2e8f0' }}>
              Ứng dụng <strong>VssID VIP Pro</strong> này được thiết kế và phát triển <strong>DUY NHẤT</strong> cho mục đích học tập nghiên cứu, thử nghiệm công nghệ UI/UX và tối ưu hóa tính năng kỹ thuật. Đây <strong>KHÔNG</strong> phải ứng dụng chính thức của Bảo Hiểm Xã Hội Việt Nam và không đại diện cho bất kỳ cơ quan tổ chức chính phủ nào.
            </p>
            <p style={{ margin: 0, color: '#94a3b8' }}>
              Nhà phát triển <strong>hoàn toàn miễn trừ mọi trách nhiệm pháp lý</strong> đối với bất kỳ hành vi sử dụng ứng dụng này sai mục đích (như cố ý giả mạo thông tin, lưu trữ sai dữ liệu hoặc phân phối trái phép ứng dụng bên ngoài phạm vi thử nghiệm). Việc bạn tiếp tục tải xuống, cài đặt hoặc chạy thử đồng nghĩa với việc bạn đã đọc kỹ, thấu hiểu và hoàn toàn đồng ý miễn trừ mọi trách nhiệm cho đội ngũ phát triển.
            </p>
          </div>
        </div>

        {/* Action Download Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '4px', flexWrap: 'wrap' }}>
          {/* Main pulsing download APK button */}
          <a 
            href="./VssID 12.2.apk"
            download="VssID 12.2.apk"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'linear-gradient(135deg, #0072c8 0%, #01aef2 100%)',
              color: '#ffffff',
              padding: '16px 28px',
              borderRadius: '16px',
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(1, 174, 242, 0.4)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            className="pulse-button-hover"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Tải bản APK Android
          </a>

          {/* QR Code and Quick Scan info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Real high-res scannable QR code generator linking directly to the hosted APK */}
            <div style={{
              width: '74px',
              height: '74px',
              background: '#ffffff',
              padding: '6px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}>
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://vssid-app.vercel.app/VssID%2012.2.apk" 
                alt="QR Code" 
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px' }} 
              />
            </div>
            <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.4' }}>
              Quét mã QR<br />
              <strong style={{ color: '#ffffff' }}>để tải trực tiếp</strong><br />
              về điện thoại
            </div>
          </div>
        </div>

        {/* Comprehensive Illustrated Guide for Desktop */}
        <div style={{
          marginTop: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{ fontSize: '15px', fontWeight: 800, color: '#01aef2', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            📖 Hướng Dẫn Cài Đặt Chi Tiết
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '18px'
          }}>
            {/* Step 1: Zalo Redirect */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#01aef2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, color: '#ffffff' }}>
                    1
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#cbd5e1' }}>Vượt chặn Zalo / Facebook</div>
                </div>
                <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                  Trình duyệt tích hợp Zalo/FB chặn tải file apk. Hãy nhấn vào biểu tượng <strong>ba chấm (•••)</strong> ở góc trên bên phải, rồi chọn <strong>"Mở bằng trình duyệt"</strong> (Open in Browser) để tải file thành công về Chrome/Safari.
                </p>
              </div>
              {/* Illustration Image */}
              <div style={{
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(1, 174, 242, 0.2)',
                boxShadow: '0 4px 15px rgba(1, 174, 242, 0.1)',
                background: '#0d1321',
                marginTop: '10px'
              }}>
                <img 
                  src="./guide_zalo_redirect.png" 
                  alt="Zalo Redirect Guide" 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
            </div>

            {/* Step 2: Android APK Unknown Sources */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#00cc88', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, color: '#ffffff' }}>
                    2
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#cbd5e1' }}>Nguồn không xác định</div>
                </div>
                <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                  Mở file <code>VssID 12.2.apk</code> đã tải. Nếu điện thoại Android báo bảo mật, hãy chọn <strong>Cài đặt (Settings)</strong> và bật tùy chọn <strong>"Cho phép từ nguồn này"</strong> (Allow from this source) như hình dưới.
                </p>
              </div>
              {/* Illustration Image */}
              <div style={{
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 204, 136, 0.2)',
                boxShadow: '0 4px 15px rgba(0, 204, 136, 0.1)',
                background: '#0d1321',
                marginTop: '10px'
              }}>
                <img 
                  src="./guide_android_install.png" 
                  alt="Android Security Toggle Guide" 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Smartphone frame chassis wrapper */}
      <div className="phone-chassis" style={{ margin: '0', zIndex: 1 }}>
        {/* Mock notch / dynamic island */}
        <div className="phone-notch" />
        
        {/* Core app viewport container */}
        <div className="phone-screen relative" style={{ background: '#0c101b' }}>
          
          <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            background: '#fff'
          }}>
            {/* Previous screen sliding out */}
            {transitioning && prevScreen && (
              <div 
                className={
                  transitionType === 'slide'
                    ? (slideDirection === 'left' ? 'screen-push-leave' : 'screen-pop-leave')
                    : transitionType === 'slide-up'
                      ? (slideDirection === 'left' ? 'screen-slideup-leave' : 'screen-slidedown-leave')
                      : (transitionType === 'fade' ? 'screen-fade-leave' : '')
                }
                style={{
                  position: 'absolute',
                  inset: 0
                }}
              >
                {getScreen(prevScreen)}
                {/* Dimming overlay when leaving forward (it goes underneath) */}
                {transitionType === 'slide' && slideDirection === 'left' && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'black',
                    animation: 'dimmerFadeIn 0.3s cubic-bezier(0.1, 0.76, 0.55, 0.94) forwards',
                    pointerEvents: 'none',
                    zIndex: 10
                  }} />
                )}
              </div>
            )}

            {/* Current screen sliding in */}
            <div 
              className={
                transitioning
                  ? (transitionType === 'slide'
                      ? (slideDirection === 'left' ? 'screen-push-enter' : 'screen-pop-enter')
                      : transitionType === 'slide-up'
                        ? (slideDirection === 'left' ? 'screen-slideup-enter' : 'screen-slidedown-enter')
                        : (transitionType === 'fade' ? 'screen-fade-enter' : ''))
                  : ''
              }
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: transitioning ? (slideDirection === 'left' || transitionType === 'fade' ? 2 : 1) : 2
              }}
            >
              {getScreen(screen)}
              {/* Dimming overlay when entering backward (it enters underneath) */}
              {transitioning && transitionType === 'slide' && slideDirection === 'right' && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'black',
                  animation: 'dimmerFadeOut 0.3s cubic-bezier(0.1, 0.76, 0.55, 0.94) forwards',
                  pointerEvents: 'none',
                  zIndex: 10
                }} />
              )}
            </div>

            {/* Overlay Sidebar Drawer */}
            <Sidebar 
              isOpen={sidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
              currentAccount={currentAccount || accounts[0] || SEED_ACCOUNTS[0]}
              onOpenAccountManager={() => {
                setSidebarOpen(false);
                setTimeout(() => {
                  setAccountManagerOpen(true);
                }, 300);
              }}
              onNavigate={(target) => {
                setSidebarOpen(false);
                // Wait for sidebar slide-close transition (300ms) before navigating to avoid transition clash
                setTimeout(() => {
                  if (target === 'login') {
                    handleLogout();
                  } else {
                    navigateTo(target, { transition: 'instant' });
                  }
                }, 300);
              }}
            />

            {/* Account Manager Modal Sheet overlay */}
            <AccountManager 
              isOpen={accountManagerOpen} 
              onClose={() => setAccountManagerOpen(false)} 
              accounts={accounts}
              onUpdateAccounts={saveAccounts}
              onQuickLogin={handleLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
