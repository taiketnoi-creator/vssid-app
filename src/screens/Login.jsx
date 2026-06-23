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
import artboard1 from '../assets/artboard_1.png';
import artboard2 from '../assets/artboard_2.png';
import artboard3 from '../assets/artboard_3.png';
import artboard4 from '../assets/artboard_4.png';

const W = 402;
const H = 874;

const Login = ({ accounts, onLogin, onOpenAccountManager }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toastMsg, setToastMsg] = useState('');
  const [logoClicks, setLogoClicks] = useState(0);
  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showFingerprintDialog, setShowFingerprintDialog] = useState(false);
  const [showBiometricPrompt, setShowBiometricPrompt] = useState(false);
  const [biometricPromptState, setBiometricPromptState] = useState('idle'); // 'idle' | 'failed' | 'success'
  const [fingerprintAttempts, setFingerprintAttempts] = useState(0);

  const showToast = (msg) => {
    setToastMsg(msg);
    const t = setTimeout(() => setToastMsg(''), 3000);
    return () => clearTimeout(t);
  };

  const handleLoginSubmit = async () => {
    if (loading) return;
    if (!username) {
      showToast('Vui lòng điền Mã số BHXH để đăng nhập!');
      return;
    }

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const result = await onLogin(username);
    setLoading(false);

    if (result && !result.success) {
      showToast(result.message || 'Mã số BHXH không tồn tại trong hệ thống!');
    }
  };

  // Fingerprint SVGs for UI
  const FingerprintSVG = ({ color = '#0072c8', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s' }}>
      <path d="M12 2a10 10 0 0 0-7.38 16.75" />
      <path d="M10.43 5.4a6 6 0 0 1 7.14 7.14" />
      <path d="M6.3 10.5a8.5 8.5 0 0 1 12.3 0" />
      <path d="M9.5 15.5a3.5 3.5 0 0 0 5 0" />
      <path d="M12 8a4 4 0 0 1 3.92 3.26" />
      <path d="M12 12v.01" />
      <path d="M12 18.01v.01" />
      <path d="M19.07 19.07a10 10 0 0 1-14.14 0" />
    </svg>
  );

  const KnoxSVG = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '3px', opacity: 0.45 }}>
      <svg width="10" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
      <span style={{ fontSize: '8px', fontWeight: 600, color: '#ffffff', letterSpacing: '0.3px', textTransform: 'uppercase' }}>Secured by Knox</span>
    </div>
  );

  const handleBiometricSuccess = async () => {
    if (!username) {
      showToast('Vui lòng điền Mã số BHXH để đăng nhập bằng vân tay!');
      return;
    }
    
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const result = await onLogin(username);
    setLoading(false);

    if (result && !result.success) {
      showToast(result.message || 'Mã số BHXH không tồn tại trong hệ thống!');
    }
  };

  const handleBiometricClick = () => {
    if (biometricPromptState === 'success') return;

    if (biometricPromptState === 'idle') {
      setBiometricPromptState('failed');
      setFingerprintAttempts(1);
    } else if (biometricPromptState === 'failed') {
      setBiometricPromptState('success');
      setFingerprintAttempts(2);
      setTimeout(() => {
        setShowBiometricPrompt(false);
        setShowFingerprintDialog(false); // Dismiss Artboard 1 underneath
        handleBiometricSuccess();
      }, 800);
    }
  };

  // Biometric fingerprint/Face ID login: shows the custom simulated prompt (Dialog 1)
  const handleBiometricLogin = () => {
    if (!username) {
      showToast('Vui lòng điền Mã số BHXH để đăng nhập bằng vân tay!');
      return;
    }
    setShowFingerprintDialog(true); // Open Artboard 1 underneath (zIndex 90)
    setShowBiometricPrompt(true); // Open Artboard 2/3/4 on top (zIndex 100)
    setBiometricPromptState('idle');
    setFingerprintAttempts(0);
  };

  // VNeID login: shows a secure alert that it is not linked or under maintenance
  const handleVneidLogin = () => {
    showToast('Thiết bị chưa được liên kết tài khoản Định danh điện tử (VNeID)!');
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
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
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

        {/* Logo BHXH: x=147, y=110, w=107, h=107 */}
        <div 
          onClick={handleLogoClick}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: `${(110 / H) * 100}%`,
            width: `${(107 / W) * 100}%`,
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
          @keyframes ripple-effect {
            0% { transform: scale(0.6); opacity: 1; }
            100% { transform: scale(1.4); opacity: 0; }
          }
          .vssid-ripple-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid #8ab4f8;
            box-sizing: border-box;
            animation: ripple-effect 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
            pointer-events: none;
          }
          @keyframes vssid-text-shake {
            0%, 100% { transform: translate3d(0, 0, 0); }
            15% { transform: translate3d(-6px, 0, 0); }
            30% { transform: translate3d(5px, 0, 0); }
            45% { transform: translate3d(-4px, 0, 0); }
            60% { transform: translate3d(3px, 0, 0); }
            75% { transform: translate3d(-1.5px, 0, 0); }
            90% { transform: translate3d(0.5px, 0, 0); }
          }
          .vssid-biometric-text-failed {
            animation: vssid-text-shake 0.45s cubic-bezier(.36,.07,.19,.97) both;
            backface-visibility: hidden;
            transform: translate3d(0, 0, 0);
          }
        `}</style>

        <div style={{
          position: 'absolute',
          left: `${(32 / W) * 100}%`,
          top: `${(246 / H) * 100}%`,
          width: `${(338 / W) * 100}%`,
          height: `${(52 / H) * 100}%`,
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
            width: '42px',
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
              padding: '0 12px 0 13px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Password input: x32,y306 338x39 */}
        <div style={{
          position: 'absolute',
          left: `${(32 / W) * 100}%`,
          top: `${(308 / H) * 100}%`,
          width: `${(338 / W) * 100}%`,
          height: `${(52 / H) * 100}%`,
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
            width: '42px',
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
              padding: '0 12px 0 13px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Links: Quên mật khẩu ? (x=33, y=373) & Đăng ký tài khoản (x=268, y=373) */}
        <div
          onClick={() => showToast("Tính năng đang phát triển!")}
          style={{
            position: 'absolute',
            left: `${(33 / W) * 100}%`,
            top: `${(373 / H) * 100}%`,
            fontSize: '12px',
            color: '#0069ad',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap'
          }}
        >
          Quên mật khẩu ?
        </div>

        <div
          onClick={() => showToast("Tính năng đang phát triển!")}
          style={{
            position: 'absolute',
            right: `${(33 / W) * 100}%`, // Symmetric right offset (33px)
            top: `${(373 / H) * 100}%`,
            fontSize: '12px',
            color: '#0069ad',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right',
            whiteSpace: 'nowrap'
          }}
        >
          Đăng ký tài khoản
        </div>

        {/* "Đăng nhập" button: x33,y409 273x47 */}
        <div
          onClick={handleLoginSubmit}
          style={{
            position: 'absolute',
            left: `${(33 / W) * 100}%`,
            top: `${(409 / H) * 100}%`,
            width: `${(273 / W) * 100}%`,
            height: `${(47 / H) * 100}%`,
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
          Đăng nhập
        </div>

        {/* Fingerprint/FaceID button: x315,y408 56x56 */}
        <div
          onClick={handleBiometricLogin}
          style={{
            position: 'absolute',
            left: `${(315 / W) * 100}%`,
            top: `${(408 / H) * 100}%`,
            width: `${(56 / W) * 100}%`,
            height: `${(56 / H) * 100}%`,
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <img src={fingerprintIcon} alt="Vân tay" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>

        {/* VNeID button: x31,y477 340x67 */}
        <div
          onClick={handleVneidLogin}
          style={{
            position: 'absolute',
            left: `${(31 / W) * 100}%`,
            top: `${(477 / H) * 100}%`,
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
            left: '12px',
            right: '76px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            fontWeight: 'bold',
            textAlign: 'center',
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
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
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
          left: '50%',
          transform: 'translateX(-50%)',
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
            right: `${(33 / W) * 100}%`, // Align perfectly on the right with other elements (33px)
            top: `${(779 / H) * 100}%`,
            color: '#0069ad',
            fontSize: '13px',
            fontWeight: 500,
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            textAlign: 'right'
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

        {/* Loading Spinner matching Figma exact spec: x=177, y=388, w=49, h=49 */}
        {loading && (
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: `${(388 / H) * 100}%`,
            width: `${(49 / W) * 100}%`,
            aspectRatio: '1 / 1',
            zIndex: 100,
            pointerEvents: 'none'
          }}>
            {/* Outer rotating ring (Ellipse 6) */}
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
              left: '9.18%',
              top: '9.18%',
              width: '81.63%',
              height: '81.63%',
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

        {/* Custom Fingerprint Dialog Overlay (Artboard 1) */}
        {showFingerprintDialog && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.65)',
            zIndex: 90, // Underneath Biometric Prompt overlay
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            boxSizing: 'border-box',
            backdropFilter: 'blur(3px)'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1 / 1',
              background: 'transparent',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <img 
                src={artboard1} 
                alt="Xác nhận vân tay thất bại" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
              {/* Clickable overlay for CANCEL button (bottom-right area of Artboard 1) */}
              <div 
                onClick={() => setShowFingerprintDialog(false)}
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  right: '10%',
                  width: '25%',
                  height: '10%',
                  cursor: 'pointer',
                  borderRadius: '6px'
                }}
              />
              {/* Clickable overlay for Blue Fingerprint icon in Artboard 1 to retry/reopen scanning */}
              <div 
                onClick={() => {
                  setShowBiometricPrompt(true);
                  setBiometricPromptState('idle');
                  setFingerprintAttempts(0);
                }}
                style={{
                  position: 'absolute',
                  top: '38%',
                  left: '24%',
                  width: '13%',
                  height: '14%',
                  cursor: 'pointer',
                  borderRadius: '50%'
                }}
              />
            </div>
          </div>
        )}

        {/* Samsung Biometric Prompt Overlay (Dialog 1 - Artboards 2/3/4) */}
        {showBiometricPrompt && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: showFingerprintDialog ? 'transparent' : 'rgba(0, 0, 0, 0.65)',
            zIndex: 100, // On top of Artboard 1 overlay
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: '16px 16px 100px 16px',
            boxSizing: 'border-box',
            backdropFilter: showFingerprintDialog ? 'none' : 'blur(3px)'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1 / 1',
              background: 'transparent',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <img 
                src={
                  biometricPromptState === 'failed' 
                    ? artboard3 
                    : biometricPromptState === 'success' 
                      ? artboard4 
                      : artboard2
                } 
                alt="Xác thực danh tính" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
              
              {/* Dynamic text cover & animation for Artboard 3 (failed state) */}
              {biometricPromptState === 'failed' && (
                <div style={{
                  position: 'absolute',
                  top: '44.5%',
                  left: '20%',
                  width: '60%',
                  height: '6.0%',
                  background: '#2a2d31', // Solid background matching card exactly
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 5,
                  pointerEvents: 'none'
                }}>
                  <span 
                    className="vssid-biometric-text-failed"
                    style={{
                      color: '#ffffff', // White to match image
                      fontSize: '13.5px',
                      fontWeight: '500',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    Vân tay không khớp
                  </span>
                </div>
              )}

              {/* Clickable overlay for "Thoát" button */}
              <div 
                onClick={() => {
                  setShowBiometricPrompt(false); // Hide Artboard 2/3/4, revealing Artboard 1 underneath
                }}
                style={{
                  position: 'absolute',
                  top: biometricPromptState === 'failed' ? '54%' : '45%',
                  left: '35%',
                  width: '30%',
                  height: '8%',
                  cursor: 'pointer',
                  borderRadius: '12px'
                }}
              />
              
              {/* Clickable overlay for fingerprint sensor icon (bottom center) */}
              <div 
                onClick={handleBiometricClick}
                style={{
                  position: 'absolute',
                  top: '64%',
                  left: '38%',
                  width: '24%',
                  height: '22%',
                  cursor: 'pointer',
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

