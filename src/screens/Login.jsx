import { useState } from 'react';
import bgLogin from '../assets/bg_login.png';
import loginIconBell from '../assets/login_icon_bell.png';
import loginIconFlag from '../assets/login_icon_flag.png';
import logoBhxh from '../assets/logo_bhxh.png';
import loginIconCccd from '../assets/login_icon_cccd.png';
import loginIconLock from '../assets/login_icon_lock.png';
import fingerprintIcon from '../assets/fingerprint.png';
import logoVneid from '../assets/logo_vneid.png';
import bgFooter from '../assets/bg_footer.png';

const W = 402;
const H = 874;

const Login = ({ accounts, onLogin, onOpenAccountManager }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toastMsg, setToastMsg] = useState('');
  const [logoClicks, setLogoClicks] = useState(0);
  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);

  const showToast = (msg) => {
    setToastMsg(msg);
    const t = setTimeout(() => setToastMsg(''), 3000);
    return () => clearTimeout(t);
  };

  const handleLoginSubmit = async () => {
    if (loading) return;
    if (!username || !password) {
      showToast('Vui lòng điền đầy đủ tài khoản & mật khẩu!');
      return;
    }

    setLoading(true);
    // Add a simulated network authentication delay of 1.5s for authentic VssID premium experience
    await new Promise(resolve => setTimeout(resolve, 1500));
    const result = await onLogin(username, password);
    setLoading(false);

    if (result && !result.success) {
      showToast(result.message || 'Lỗi đăng nhập!');
    }
  };

  // VNeID or Fingerprint login defaults to first available account for instant convenience
  const handleQuickLogin = async () => {
    if (loading) return;
    setLoading(true);
    // Add a simulated biometric connection delay of 1.5s for authentic experience
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Try to login online with the default seed account
    const result = await onLogin('123456789', '123');
    setLoading(false);

    if (result && !result.success) {
      // If online/database login fails (unconfigured or offline), fallback to the local offline seed
      if (accounts && accounts.length > 0) {
        onLogin(accounts[0]);
      } else {
        showToast('Không có tài khoản nào để đăng nhập!');
      }
    }
  };

  // Hidden feature: Tapping BHXH logo 5 times opens Account Manager
  const handleLogoClick = () => {
    const nextClicks = logoClicks + 1;
    if (nextClicks >= 5) {
      onOpenAccountManager();
      setLogoClicks(0);
    } else {
      setLogoClicks(nextClicks);
      // Reset counter after 2 seconds
      setTimeout(() => setLogoClicks(0), 2000);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', fontFamily: 'Inter, sans-serif' }}>
      {/* 1. Clean Background Gradient (without any printed static text) */}
      <img 
        src={bgLogin} 
        alt="" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} 
        draggable={false} 
      />

      {/* Custom Toast Alert bubble inside screen */}
      {toastMsg && (
        <div style={{
          position: 'absolute',
          top: '120px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#fee2e2',
          border: '1px solid #fca5a5',
          color: '#b91c1c',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 600,
          zIndex: 50,
          boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
          textAlign: 'center',
          width: '80%',
          boxSizing: 'border-box'
        }}>
          ⚠️ {toastMsg}
        </div>
      )}

      {/* Interactive overlay layer */}
      <div style={{
        position: 'absolute',
        top: 'var(--safe-area-top)',
        left: 'var(--safe-area-left)',
        right: 'var(--safe-area-right)',
        width: 'calc(100% - var(--safe-area-left) - var(--safe-area-right))',
        height: 'calc(100% - var(--safe-area-top) - var(--safe-area-bottom))',
        zIndex: 2
      }}>
        
        {/* Bell Icon: x=21, y=53, w=24, h=26 */}
        <img 
          src={loginIconBell} 
          alt="Bell" 
          style={{
            position: 'absolute',
            left: `${(21 / W) * 100}%`,
            top: `${(53 / H) * 100}%`,
            width: `${(24 / W) * 100}%`,
            height: `${(26 / H) * 100}%`,
            objectFit: 'contain',
            cursor: 'pointer'
          }} 
          onClick={() => showToast("Không có thông báo mới!")}
        />

        {/* Flag Icon: x=352, y=53, w=31, h=21 */}
        <img 
          src={loginIconFlag} 
          alt="Flag" 
          style={{
            position: 'absolute',
            left: `${(352 / W) * 100}%`,
            top: `${(53 / H) * 100}%`,
            width: `${(31 / W) * 100}%`,
            height: `${(21 / H) * 100}%`,
            objectFit: 'contain',
            cursor: 'pointer'
          }} 
        />

        {/* Logo BHXH: x=149, y=116, w=103, h=103 */}
        <div 
          onClick={handleLogoClick}
          style={{
            position: 'absolute',
            left: `${(149 / W) * 100}%`,
            top: `${(116 / H) * 100}%`,
            width: `${(103 / W) * 100}%`,
            aspectRatio: '1 / 1', // Guarantees perfect square circle aspect ratio regardless of container height
            borderRadius: '50%',
            background: '#ffffff',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <img 
            src={logoBhxh} 
            alt="Logo BHXH" 
            style={{
              width: '96%',
              height: '96%',
              objectFit: 'contain',
              borderRadius: '50%'
            }} 
          />
        </div>

        {/* Username input: x33,y248 338x39 */}
        <style>{`
          .vssid-input::placeholder {
            color: #94a3b8 !important;
            font-weight: 500 !important;
            opacity: 0.95 !important;
          }
          .vssid-input {
            color: #1e293b !important;
            font-weight: 600 !important;
            font-size: 14.5px !important;
          }
          @keyframes spin-loader {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .vssid-spinner-ring {
            animation: spin-loader 1s linear infinite;
          }
        `}</style>

        <div style={{
          position: 'absolute',
          left: `${(33 / W) * 100}%`,
          top: `${(248 / H) * 100}%`,
          width: `${(338 / W) * 100}%`,
          height: `${(39 / H) * 100}%`,
          border: focusedField === 'username' ? '1.5px solid #0069ad' : '1px solid #c8c5c5',
          borderRadius: '5px',
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          boxShadow: focusedField === 'username' ? '0 0 4px rgba(0, 105, 173, 0.25)' : 'none',
          transition: 'all 0.15s ease'
        }}>
          <div style={{
            width: '39px',
            height: '100%',
            background: '#0069ad',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            {/* Pure white Silhouette User Avatar silhouette icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="7.5" r="4.5" fill="white" />
              <path d="M12 13.5C8 13.5 4.5 16.5 4.5 21C4.5 21.6 4.9 22 5.5 22H18.5C19.1 22 19.5 21.6 19.5 21C19.5 16.5 16 13.5 12 13.5Z" fill="white" />
            </svg>
          </div>
          <input
            type="text"
            className="vssid-input"
            value={username}
            onChange={e => setUsername(e.target.value)}
            onFocus={() => setFocusedField('username')}
            onBlur={() => setFocusedField(null)}
            placeholder="Mã số BHXH/Số ĐDCN/CCCD"
            style={{
              flex: 1,
              height: '100%',
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontFamily: 'Inter, sans-serif',
              padding: '0 12px 0 16px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Password input: x32,y306 338x39 */}
        <div style={{
          position: 'absolute',
          left: `${(32 / W) * 100}%`,
          top: `${(306 / H) * 100}%`,
          width: `${(338 / W) * 100}%`,
          height: `${(39 / H) * 100}%`,
          border: focusedField === 'password' ? '1.5px solid #0069ad' : '1px solid #c8c5c5',
          borderRadius: '5px',
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          boxShadow: focusedField === 'password' ? '0 0 4px rgba(0, 105, 173, 0.25)' : 'none',
          transition: 'all 0.15s ease'
        }}>
          <div style={{
            width: '39px',
            height: '100%',
            background: '#0069ad',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            {/* Pure white Padlock lock icon */}
            <svg width="18" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10V6.5C7 3.8 9.2 1.5 12 1.5C14.8 1.5 17 3.8 17 6.5V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <rect x="4" y="10" width="16" height="12.5" rx="2.5" fill="white" />
            </svg>
          </div>
          <input
            type="password"
            className="vssid-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onFocus={() => setFocusedField('password')}
            onBlur={() => setFocusedField(null)}
            placeholder="Mật khẩu"
            style={{
              flex: 1,
              height: '100%',
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontFamily: 'Inter, sans-serif',
              padding: '0 12px 0 16px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Links: Quên mật khẩu ? (x=33, y=355) & Đăng ký tài khoản (x=268, y=355) */}
        <div
          onClick={() => showToast("Tính năng đang phát triển!")}
          style={{
            position: 'absolute',
            left: `${(33 / W) * 100}%`,
            top: `${(355 / H) * 100}%`,
            fontSize: '12px',
            color: '#0069ad',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Quên mật khẩu ?
        </div>

        <div
          onClick={() => showToast("Tính năng đang phát triển!")}
          style={{
            position: 'absolute',
            left: `${(268 / W) * 100}%`,
            top: `${(355 / H) * 100}%`,
            fontSize: '12px',
            color: '#0069ad',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Đăng ký tài khoản
        </div>

        {/* "Đăng nhập" button: x33,y390 287x44 */}
        <div
          onClick={handleLoginSubmit}
          style={{
            position: 'absolute',
            left: `${(33 / W) * 100}%`,
            top: `${(390 / H) * 100}%`,
            width: `${(287 / W) * 100}%`,
            height: `${(44 / H) * 100}%`,
            background: 'rgba(255, 255, 255, 0.45)',
            border: '2px solid #0069ad',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#0069ad',
            fontFamily: 'Inter, sans-serif',
            transition: 'all 0.2s',
            userSelect: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.45)'}
        >
          {loading ? 'Đang kết nối...' : 'Đăng nhập'}
        </div>

        {/* Fingerprint/FaceID button: x309,y372 80x80 */}
        <div
          onClick={handleQuickLogin}
          style={{
            position: 'absolute',
            left: `${(309 / W) * 100}%`,
            top: `${(372 / H) * 100}%`,
            width: `${(80 / W) * 100}%`,
            height: `${(80 / H) * 100}%`,
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <img src={fingerprintIcon} alt="Vân tay" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>

        {/* VNeID button: x31,y456 340x67 */}
        <div
          onClick={handleQuickLogin}
          style={{
            position: 'absolute',
            left: `${(31 / W) * 100}%`,
            top: `${(456 / H) * 100}%`,
            width: `${(340 / W) * 100}%`,
            height: `${(67 / H) * 100}%`,
            background: '#d91811',
            borderRadius: '12px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div style={{
            position: 'absolute',
            left: `${(65 - 31) / 340 * 100}%`,
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            fontWeight: 'bold',
            textAlign: 'left',
            lineHeight: '1.3',
            whiteSpace: 'pre-line'
          }}>
            {`Đăng nhập bằng tài khoản
định danh điện tử`}
          </div>
          <img 
            src={logoVneid} 
            alt="VNeID" 
            style={{
              position: 'absolute',
              left: `${(306 - 31) / 340 * 100}%`,
              top: `${(462 - 456) / 67 * 100}%`,
              width: `${(55 / 340) * 100}%`,
              height: `${(55 / 67) * 100}%`,
              borderRadius: '12px',
              objectFit: 'contain'
            }} 
          />
        </div>

        {/* Footer Text 1: "Mời cài đặt VssID" (x=144, y=740) */}
        <div style={{
          position: 'absolute',
          left: `${(144 / W) * 100}%`,
          top: `${(740 / H) * 100}%`,
          color: '#0069ad',
          fontSize: '14px',
          fontWeight: 500,
          fontFamily: 'Inter, sans-serif',
          whiteSpace: 'nowrap'
        }}>
          Mời cài đặt VssID
        </div>

        {/* Footer Text 2: "Chính sách quyền riêng tư" (x=223, y=779) */}
        <div 
          onClick={() => showToast("Tính năng đang phát triển!")}
          style={{
            position: 'absolute',
            left: `${(223 / W) * 100}%`,
            top: `${(779 / H) * 100}%`,
            color: '#0069ad',
            fontSize: '13px',
            fontWeight: 500,
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap',
            cursor: 'pointer'
          }}
        >
          Chính sách quyền riêng tư
        </div>

        {/* Footer Image Background: x=0, y=810, w=402, h=64 */}
        <img 
          src={bgFooter} 
          alt="" 
          style={{
            position: 'absolute',
            left: 0,
            top: `${(810 / H) * 100}%`,
            width: '100%',
            height: `${(64 / H) * 100}%`,
            objectFit: 'cover'
          }} 
          draggable={false} 
        />

        {/* Loading Spinner matching Figma exact spec: x=178, y=418, w=48, h=48 */}
        {loading && (
          <div style={{
            position: 'absolute',
            left: `${(178 / W) * 100}%`,
            top: `${(418 / H) * 100}%`,
            width: `${(48 / W) * 100}%`,
            aspectRatio: '1 / 1',
            zIndex: 100,
            pointerEvents: 'none'
          }}>
            {/* Outer rotating ring (Ellipse 5) */}
            <div 
              className="vssid-spinner-ring"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #01aef2 0%, rgba(1, 174, 242, 0.15) 80%, transparent 100%)'
              }}
            />
            {/* Inner static white circle with shadow & logo (Ellipse 1 + BHXH Logo) */}
            <div style={{
              position: 'absolute',
              left: '8.33%',
              top: '8.33%',
              width: '83.33%',
              height: '83.33%',
              borderRadius: '50%',
              background: '#ffffff',
              boxShadow: '0px 1.5px 3px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2
            }}>
              <img 
                src={logoBhxh} 
                alt="BHXH" 
                style={{
                  width: '95%',
                  height: '95%',
                  objectFit: 'contain',
                  borderRadius: '50%'
                }} 
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;

