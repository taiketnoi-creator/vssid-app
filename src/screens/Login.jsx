import React, { useState } from 'react';
import bgLogin from '../assets/bg_login.png';
import logoBhxh from '../assets/logo_bhxh.png';
import logoVneid from '../assets/logo_vneid.png';
import bgFooter from '../assets/bg_footer.png';
import flagVn from '../assets/login_icon_flag.png';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Icon người (bust) - matching Figma CCCD input icon exactly
  const PersonIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6v1" />
    </svg>
  );

  // Icon ổ khóa - matching Figma password input icon
  const LockIcon = () => (
    <svg width="18" height="20" viewBox="0 0 18 22" fill="white">
      <rect x="2" y="10" width="14" height="11" rx="2" />
      <path d="M5 10V7a4 4 0 0 1 8 0v3" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );

  // Icon vân tay (fingerprint) - matching Figma exactly (curved lines pattern)
  const FingerprintIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      {/* Outer curves */}
      <path d="M10 35C10 22 16 12 25 12C34 12 40 22 40 35" stroke="#0069ad" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M15 35C15 25 19 17 25 17C31 17 35 25 35 35" stroke="#0069ad" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M20 35C20 28 22 22 25 22C28 22 30 28 30 35" stroke="#0069ad" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Center line */}
      <path d="M25 27V38" stroke="#0069ad" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', fontFamily: 'Inter, sans-serif' }}>
      {/* Background - full frame */}
      <img src={bgLogin} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} draggable={false} />

      {/* Content layer */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

        {/* Top bar: bell left, flag right */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px 0' }}>
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
            <path d="M18 8.5a7 7 0 0 0-14 0c0 4-1.8 6.5-2.8 8h19.6c-1-1.5-2.8-4-2.8-8z" fill="#e0c84a"/>
            <path d="M13 20a2.2 2.2 0 0 1-4 0" stroke="#e0c84a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
          <img src={flagVn} alt="" style={{ width: '34px', height: '22px', objectFit: 'contain' }} />
        </div>

        {/* BHXH Logo centered */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', marginBottom: '24px' }}>
          <div style={{ width: '103px', height: '103px', borderRadius: '50%', background: 'white', boxShadow: '0 3px 4px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logoBhxh} alt="BHXH" style={{ width: '99px', height: '99px', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Form area */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 32px' }}>

          {/* Username input: 338x39, r=5, border #c8c5c5, blue box 39x39 with person icon */}
          <div style={{ width: '100%', maxWidth: '338px', height: '39px', background: 'white', borderRadius: '5px', border: '1px solid #c8c5c5', display: 'flex', alignItems: 'center', marginBottom: '10px', overflow: 'hidden' }}>
            <div style={{ width: '39px', height: '39px', background: '#0069ad', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRight: '1px solid #c8c5c5' }}>
              <PersonIcon />
            </div>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Mã số BHXH/Số ĐDCN/CCCD"
              style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', fontWeight: 500, color: '#333', padding: '0 10px', fontFamily: 'Inter, sans-serif' }} />
          </div>

          {/* Password input: same structure with lock icon */}
          <div style={{ width: '100%', maxWidth: '338px', height: '39px', background: 'white', borderRadius: '5px', border: '1px solid #c8c5c5', display: 'flex', alignItems: 'center', marginBottom: '8px', overflow: 'hidden' }}>
            <div style={{ width: '39px', height: '39px', background: '#0069ad', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRight: '1px solid #c8c5c5' }}>
              <LockIcon />
            </div>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mật khẩu"
              style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', fontWeight: 500, color: '#333', padding: '0 10px', fontFamily: 'Inter, sans-serif' }} />
          </div>

          {/* Links row */}
          <div style={{ width: '100%', maxWidth: '338px', display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontSize: '12px', color: '#0069ad', cursor: 'pointer' }}>Quên mật khẩu ?</span>
            <span style={{ fontSize: '12px', color: '#0069ad', cursor: 'pointer' }}>Đăng ký tài khoản</span>
          </div>

          {/* Đăng nhập button + Fingerprint icon */}
          <div style={{ width: '100%', maxWidth: '338px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', gap: '8px' }}>
            <button onClick={onLoginSuccess} style={{ width: '260px', height: '44px', background: 'white', border: '2px solid #0069ad', borderRadius: '5px', fontSize: '16px', fontWeight: 700, color: '#0069ad', fontFamily: 'Inter, sans-serif', cursor: 'pointer', flexShrink: 0 }}>
              Đăng nhập
            </button>
            <div onClick={onLoginSuccess} style={{ cursor: 'pointer', flexShrink: 0 }}>
              <FingerprintIcon />
            </div>
          </div>

          {/* VNeID red button */}
          <div onClick={onLoginSuccess} style={{ position: 'relative', width: '100%', maxWidth: '340px', height: '67px', background: '#d91811', borderRadius: '12px', display: 'flex', alignItems: 'center', cursor: 'pointer', overflow: 'hidden' }}>
            <span style={{ fontSize: '16px', fontWeight: 700, color: 'white', textAlign: 'center', lineHeight: 1.3, flex: 1, paddingLeft: '16px', paddingRight: '70px', whiteSpace: 'pre-line' }}>
              {'Đăng nhập bằng tài khoản\nđịnh danh điện tử'}
            </span>
            <img src={logoVneid} alt="VNeID" style={{ position: 'absolute', right: '8px', top: '6px', width: '55px', height: '55px', borderRadius: '13px', objectFit: 'contain' }} />
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Bottom section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#0069ad', marginBottom: '4px', cursor: 'pointer' }}>Mời cài đặt VssID</span>
          <span style={{ fontSize: '13px', color: '#0069ad', marginBottom: '10px', cursor: 'pointer' }}>Chính sách quyền riêng tư</span>
          {/* Footer image (p2 1: 402x64) */}
          <img src={bgFooter} alt="" style={{ width: '100%', height: '64px', objectFit: 'contain', objectPosition: 'bottom' }} draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default Login;
