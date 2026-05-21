import React, { useState } from 'react';
import bgLogin from '../assets/bg_login.png';
import logoBhxh from '../assets/logo_bhxh.png';
import logoVneid from '../assets/logo_vneid.png';
import fingerprint from '../assets/fingerprint.png';
import bgFooter from '../assets/bg_footer.png';
import flagVn from '../assets/vietnamese_flag.png';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', fontFamily: 'Inter, sans-serif' }}>
      {/* Background p1 1 - full frame */}
      <img src={bgLogin} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />

      {/* Content layer */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

        {/* Top bar: bell icon left, flag + "Tiếng Việt" right (from screenshot) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px 0' }}>
          {/* Bell icon (Vector 24x26, fill white) */}
          <svg width="24" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
          {/* Flag + Tiếng Việt (image 2: 31x21) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <img src={flagVn} alt="" style={{ width: '31px', height: '21px', objectFit: 'cover' }} />
          </div>
        </div>

        {/* BHXH Logo (Group 7): Ellipse 1 w=103 h=103 + logo 99x99, centered */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '18px', marginBottom: '18px' }}>
          <div style={{
            width: '103px', height: '103px', borderRadius: '50%',
            background: 'white',
            boxShadow: '0px 3px 4px rgba(0,0,0,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <img src={logoBhxh} alt="BHXH" style={{ width: '99px', height: '99px', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Form inputs area */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0', padding: '0 32px' }}>

          {/* Input 1: Mã số BHXH - Rectangle 1 (338x39, r=5, border #c8c5c5) + Rectangle 2 blue (39x39) */}
          <div style={{
            position: 'relative', width: '338px', height: '39px',
            background: 'white', borderRadius: '5px',
            border: '1px solid #c8c5c5', display: 'flex', alignItems: 'center',
            marginBottom: '10px', overflow: 'hidden'
          }}>
            {/* Blue icon box (Rectangle 2: 39x39, fill #0069ad) + icon "2 1" (27x27) */}
            <div style={{ width: '39px', height: '39px', background: '#0069ad', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {/* Vector icon (2 1 - CCCD icon, fill white) */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
                <circle cx="8" cy="12" r="2" fill="white"/>
                <line x1="12.5" y1="9" x2="20" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="12.5" y1="12" x2="18" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="12.5" y1="15" x2="20" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Mã số BHXH/Số ĐDCN/CCCD"
              style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', fontFamily: 'Inter', fontWeight: '500', color: '#948c8c', padding: '0 8px' }}
            />
          </div>

          {/* Input 2: Mật khẩu - Rectangle 3 (338x39, r=5, border #c8c5c5) + Rectangle 4 blue (39x39) */}
          <div style={{
            position: 'relative', width: '338px', height: '39px',
            background: 'white', borderRadius: '5px',
            border: '1px solid #c8c5c5', display: 'flex', alignItems: 'center',
            marginBottom: '8px', overflow: 'hidden'
          }}>
            <div style={{ width: '39px', height: '39px', background: '#0069ad', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="11" width="14" height="10" rx="2" fill="white"/>
                <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Mật khẩu"
              style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', fontFamily: 'Inter', fontWeight: '500', color: '#948c8c', padding: '0 8px' }}
            />
          </div>

          {/* Quên mật khẩu (left, fs=12, #0069ad) + Đăng ký tài khoản (right, fs=12, #0069ad) */}
          <div style={{ width: '338px', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: '#0069ad', fontFamily: 'Inter', cursor: 'pointer' }}>Quên mật khẩu ?</span>
            <span style={{ fontSize: '12px', color: '#0069ad', fontFamily: 'Inter', cursor: 'pointer' }}>Đăng ký tài khoản</span>
          </div>

          {/* Action row: Đăng nhập button (287x44, border #0069ad 2px, r=5, text #0069ad bold 16px) + fingerprint (80x80) */}
          <div style={{ width: '338px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            {/* Đăng nhập button - Group 15: Rectangle 5 (287x44, fill white, border 2px #0069ad, r=5) */}
            <button
              onClick={handleLogin}
              style={{
                width: '287px', height: '44px', background: 'white',
                border: '2px solid #0069ad', borderRadius: '5px',
                fontSize: '16px', fontWeight: 'bold', color: '#0069ad',
                fontFamily: 'Inter', cursor: 'pointer'
              }}
            >
              Đăng nhập
            </button>
            {/* Fingerprint "1 1" (80x80) */}
            <img src={fingerprint} alt="vân tay" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
          </div>

          {/* VNeID button - Rectangle 6 (340x67, fill #d91811, r=12) */}
          <button
            onClick={onLoginSuccess}
            style={{
              position: 'relative', width: '340px', height: '67px',
              background: '#d91811', borderRadius: '12px',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            {/* Text: "Đăng nhập bằng tài khoản\nđịnh danh điện tử" - fs=16, bold, white, center */}
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', fontFamily: 'Inter', textAlign: 'center', lineHeight: '1.3', paddingRight: '70px' }}>
              Đăng nhập bằng tài khoản{'\n'}định danh điện tử
            </span>
            {/* VNeID logo "image 1" (55x55, r=13) positioned right */}
            <img src={logoVneid} alt="VNeID" style={{ position: 'absolute', right: '8px', top: '6px', width: '55px', height: '55px', borderRadius: '13px', objectFit: 'contain' }} />
          </button>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Bottom section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Mời cài đặt VssID (fs=14, #0069ad, center) */}
          <span style={{ fontSize: '14px', color: '#0069ad', fontFamily: 'Inter', marginBottom: '4px', cursor: 'pointer' }}>Mời cài đặt VssID</span>
          {/* Chính sách quyền riêng tư (fs=13, #0069ad) */}
          <span style={{ fontSize: '13px', color: '#0069ad', fontFamily: 'Inter', marginBottom: '8px', cursor: 'pointer' }}>Chính sách quyền riêng tư</span>

          {/* p2 1 footer image (402x64) */}
          <img src={bgFooter} alt="" style={{ width: '100%', height: '64px', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
};

export default Login;
