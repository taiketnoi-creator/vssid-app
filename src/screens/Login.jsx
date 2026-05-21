import { useState } from 'react';
import frameLogin from '../assets/frame_login.png';

const W = 402;
const H = 874;

const Login = ({ accounts, onLogin, onOpenAccountManager }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg) => {
    setToastMsg(msg);
    const t = setTimeout(() => setToastMsg(''), 3000);
    return () => clearTimeout(t);
  };

  const handleLoginSubmit = () => {
    if (!username || !password) {
      showToast('Vui lòng điền đầy đủ tài khoản & mật khẩu!');
      return;
    }

    const matched = accounts.find(a => a.username === username && a.password === password);
    if (matched) {
      onLogin(matched);
    } else {
      showToast('Tài khoản hoặc mật khẩu không chính xác!');
    }
  };

  // VNeID or Fingerprint login defaults to first available account for instant convenience
  const handleQuickLogin = () => {
    if (accounts && accounts.length > 0) {
      onLogin(accounts[0]);
    } else {
      showToast('Không có tài khoản nào để đăng nhập!');
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Full frame background - pixel perfect from Figma */}
      <img src={frameLogin} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }} draggable={false} />


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

      {/* Interactive overlay layer - positioned using % from Figma coords */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {/* Username input: x33,y248 338x39 */}
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder=""
          style={{
            position: 'absolute',
            left: `${(33 + 39) / W * 100}%`,
            top: `${248 / H * 100}%`,
            width: `${(338 - 39) / W * 100}%`,
            height: `${39 / H * 100}%`,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: '14px',
            fontWeight: 500,
            color: '#333',
            fontFamily: 'Inter, sans-serif',
            padding: '0 8px',
            boxSizing: 'border-box'
          }}
        />

        {/* Password input: x32,y306 338x39 */}
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder=""
          style={{
            position: 'absolute',
            left: `${(32 + 39) / W * 100}%`,
            top: `${306 / H * 100}%`,
            width: `${(338 - 39) / W * 100}%`,
            height: `${39 / H * 100}%`,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: '14px',
            fontWeight: 500,
            color: '#333',
            fontFamily: 'Inter, sans-serif',
            padding: '0 8px',
            boxSizing: 'border-box'
          }}
        />

        {/* "Đăng nhập" button hotspot: Group 15 at x33,y390 287x44 */}
        <div
          onClick={handleLoginSubmit}
          style={{
            position: 'absolute',
            left: `${33 / W * 100}%`,
            top: `${390 / H * 100}%`,
            width: `${287 / W * 100}%`,
            height: `${44 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* Fingerprint/FaceID hotspot: "1 1" at x309,y372 80x80 */}
        <div
          onClick={handleQuickLogin}
          style={{
            position: 'absolute',
            left: `${309 / W * 100}%`,
            top: `${372 / H * 100}%`,
            width: `${80 / W * 100}%`,
            height: `${80 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* VNeID button hotspot: Rectangle 6 at x31,y456 340x67 */}
        <div
          onClick={handleQuickLogin}
          style={{
            position: 'absolute',
            left: `${31 / W * 100}%`,
            top: `${456 / H * 100}%`,
            width: `${340 / W * 100}%`,
            height: `${67 / H * 100}%`,
            cursor: 'pointer'
          }}
        />
      </div>
    </div>
  );
};

export default Login;
