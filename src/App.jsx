import { useState, useEffect } from 'react';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import InsuranceList from './screens/InsuranceList';
import SalaryDetail from './screens/SalaryDetail';
import Sidebar from './components/Sidebar';
import AccountManager from './components/AccountManager';
import './App.css';

const SEED_ACCOUNTS = [
  {
    username: "4217247030",
    password: "123",
    fullName: "Cao thanh tai",
    bhxhCode: "4217247030",
    birthday: "24/05/1999",
    cccd: "040299010346",
    phone: "0896511373",
    address: "xóm Đông Lam, Xã Trường Lưu, Huyện Lộc Hà, Tỉnh Hà Tĩnh",
    avatar: "",
    insuranceHistory: [
      {
        from: "04/2025",
        to: "03/2026",
        company: "Công ty TNHH EO TECHNICS Việt Nam",
        position: "Nhân viên kỹ thuật",
        salary: "14.500.000",
        workAddress: "BT22, khu đô thị hud võ cường-Tp Bắc Ninh-Bắc Ninh"
      },
      {
        from: "09/2020",
        to: "03/2025",
        company: "Công ty TNHH EO TECHNICS Việt Nam",
        position: "Nhân viên kỹ thuật",
        salary: "14.500.000",
        workAddress: "BT22, khu đô thị hud võ cường-Tp Bắc Ninh-Bắc Ninh"
      }
    ]
  }
];

function App() {
  const [screen, setScreen] = useState('login');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigationData, setNavigationData] = useState(null);

  // Load and manage dynamic accounts with auto-sync from code edits
  const [accounts, setAccounts] = useState(() => {
    const saved = localStorage.getItem('vssid_accounts');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // SMART DEV SYNC: If the developer updated hardcoded SEED_ACCOUNTS in code,
        // we automatically detect the difference and update the localStorage cache.
        let hasChanges = false;
        const updated = parsed.map(acc => {
          const seed = SEED_ACCOUNTS.find(s => s.username === acc.username);
          if (seed) {
            if (
              seed.fullName !== acc.fullName ||
              seed.phone !== acc.phone ||
              seed.cccd !== acc.cccd ||
              seed.address !== acc.address ||
              seed.birthday !== acc.birthday ||
              seed.password !== acc.password ||
              JSON.stringify(seed.insuranceHistory) !== JSON.stringify(acc.insuranceHistory)
            ) {
              hasChanges = true;
              return { ...acc, ...seed }; // Merge new code seed edits
            }
          }
          return acc;
        });

        if (hasChanges) {
          localStorage.setItem('vssid_accounts', JSON.stringify(updated));
          return updated;
        }
        return parsed;
      } catch (e) {
        console.error(e);
      }
    }
    localStorage.setItem('vssid_accounts', JSON.stringify(SEED_ACCOUNTS));
    return SEED_ACCOUNTS;
  });

  const [currentAccount, setCurrentAccount] = useState(() => {
    const saved = localStorage.getItem('vssid_current_account');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const seed = SEED_ACCOUNTS.find(s => s.username === parsed.username);
        if (seed) {
          // Sync current logged-in account if its seed values in code changed
          if (
            seed.fullName !== parsed.fullName ||
            seed.phone !== parsed.phone ||
            seed.cccd !== parsed.cccd ||
            seed.address !== parsed.address ||
            seed.birthday !== parsed.birthday ||
            seed.password !== parsed.password ||
            JSON.stringify(seed.insuranceHistory) !== JSON.stringify(parsed.insuranceHistory)
          ) {
            const updated = { ...parsed, ...seed };
            localStorage.setItem('vssid_current_account', JSON.stringify(updated));
            return updated;
          }
        }
        return parsed;
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

  const handleLogin = (account) => {
    setCurrentAccount(account);
    localStorage.setItem('vssid_current_account', JSON.stringify(account));
    navigateTo('dashboard');
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

  return (
    <div className="app-viewport">
      {/* Decorative neon backdrop glowing elements for premium aesthetics */}
      <div className="glow-circle glow-blue" />
      <div className="glow-circle glow-cyan" />

      {/* Smartphone frame chassis wrapper */}
      <div className="phone-chassis">
        {/* Mock notch / dynamic island */}
        <div className="phone-notch" />
        
        {/* Core app viewport container */}
        <div className="phone-screen relative">
          
          <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#fff' }}>
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
  );
}

export default App;
