import React, { useState } from 'react';
import bgLogin from '../assets/bg_login.png';
import logoBhxh from '../assets/logo_bhxh.png';
import logoVneid from '../assets/logo_vneid.png';
import fingerprint from '../assets/fingerprint.png';
import bgFooter from '../assets/bg_footer.png';
import flagVn from '../assets/login_icon_flag.png';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', fontFamily: 'Inter, sans-serif' }}>
      <img src={bgLogin} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} draggable={false} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px 0' }}>
          <svg width="24" height="26" viewBox="0 0 24 26" fill="none">
            <path d="M20 9.5a8 8 0 0 0-16 0c0 4.5-2 7-3 8.5h22c-1-1.5-3-4-3-8.5z" fill="white"/>
            <path d="M14 22a2.5 2.5 0 0 1-4 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
          <img src={flagVn} alt="" style={{ width: '31px', height: '21px', objectFit: 'cover' }} />
        </div>

        {/* Logo BHXH */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '22px' }}>
          <div style={{ width: '103px', height: '103px', borderRadius: '50%', background: 'white', boxShadow: '0 3px 4px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logoBhxh} alt="BHXH" style={{ width: '99px', height: '99px', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 32px' }}>
          {/* Username */}
          <div style={{ width: '338px', height: '39px', background: 'white', borderRadius: '5px', border: '1px solid #c8c5c5', display: 'flex', alignItems: 'center', marginBottom: '10px', overflow: 'hidden' }}>
            <div style={{ width: '39px', height: '39px', background: '#0069ad', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <rect x="0.5" y="0.5" width="19" height="15" rx="2" stroke="white" strokeWidth="1" fill="none"/>
                <circle cx="6.5" cy="7" r="2.5" fill="white"/>
                <line x1="11" y1="4" x2="18" y2="4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="11" y1="7.5" x2="16.5" y2="7.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="11" y1="11" x2="18" y2="11" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Mã số BHXH/Số ĐDCN/CCCD" style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', fontWeight: 500, color: '#333', padding: '0 10px', fontFamily: 'Inter, sans-serif' }} />
          </div>

          {/* Password */}
          <div style={{ width: '338px', height: '39px', background: 'white', borderRadius: '5px', border: '1px solid #c8c5c5', display: 'flex', alignItems: 'center', marginBottom: '8px', overflow: 'hidden' }}>
            <div style={{ width: '39px', height: '39px', background: '#0069ad', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                <rect x="1" y="9" width="14" height="10" rx="2" fill="white"/>
                <path d="M4 9V6a4 4 0 0 1 8 0v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mật khẩu" style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', fontWeight: 500, color: '#333', padding: '0 10px', fontFamily: 'Inter, sans-serif' }} />
          </div>

          {/* Links */}
          <div style={{ width: '338px', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: '#0069ad', fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}>Quên mật khẩu ?</span>
            <span style={{ fontSize: '12px', color: '#0069ad', fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}>Đăng ký tài khoản</span>
          </div>

          {/* Đăng nhập + Fingerprint */}
          <div style={{ width: '338px', display: 'flex', alignItems: 'center', gap: '0px', marginBottom: '24px' }}>
            <button onClick={handleLogin} style={{ width: '287px', height: '44px', background: 'white', border: '2px solid #0069ad', borderRadius: '5px', fontSize: '16px', fontWeight: 700, color: '#0069ad', fontFamily: 'Inter, sans-serif', cursor: 'pointer', flexShrink: 0 }}>
              Đăng nhập
            </button>
            <div onClick={onLoginSuccess} style={{ width: '80px', height: '80px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-14px', marginTop: '-18px' }}>
              <img src={fingerprint} alt="" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
            </div>
          </div>

          {/* VNeID button */}
          <div onClick={onLoginSuccess} style={{ position: 'relative', width: '340px', height: '67px', background: '#d91811', borderRadius: '12px', display: 'flex', alignItems: 'center', cursor: 'pointer', overflow: 'hidden' }}>
            <span style={{ fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif', textAlign: 'center', lineHeight: 1.3, flex: 1, paddingLeft: '16px', paddingRight: '70px', whiteSpace: 'pre-line' }}>
              {'Đăng nhập bằng tài khoản\nđịnh danh điện tử'}
            </span>
            <img src={logoVneid} alt="VNeID" style={{ position: 'absolute', right: '8px', top: '6px', width: '55px', height: '55px', borderRadius: '13px', objectFit: 'contain' }} />
          </div>
        </div>

        <div style={{ flex: 1 }} />

        {/* Bottom */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#0069ad', fontFamily: 'Inter, sans-serif', marginBottom: '4px', cursor: 'pointer' }}>Mời cài đặt VssID</span>
          <span style={{ fontSize: '13px', color: '#0069ad', fontFamily: 'Inter, sans-serif', marginBottom: '8px', cursor: 'pointer' }}>Chính sách quyền riêng tư</span>
          <img src={bgFooter} alt="" style={{ width: '100%', height: '64px', objectFit: 'cover' }} draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default Login;
