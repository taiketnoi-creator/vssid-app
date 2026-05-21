import React, { useState } from 'react';
import bgLogin from '../assets/bg_login.png';
import logoBhxh from '../assets/logo_bhxh.png';
import logoVneid from '../assets/logo_vneid.png';
import icFingerprint from '../assets/ic_login_fingerprint.png';
import bgFooter from '../assets/bg_footer.png';
import flagVn from '../assets/login_icon_flag.png';
import icCccd from '../assets/ic_login_cccd.png';
import icLock from '../assets/ic_login_lock.png';
import icBell from '../assets/ic_login_bell.png';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', fontFamily: 'Inter, sans-serif' }}>
      {/* Full BG from Figma (p1 1: 402x871) */}
      <img src={bgLogin} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} draggable={false} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Top bar: bell(1:43) at x21,y53 24x26 white | flag(1:40) at x352,y53 31x21 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px 0' }}>
          <img src={icBell} alt="" style={{ width: '24px', height: '26px', objectFit: 'contain' }} />
          <img src={flagVn} alt="" style={{ width: '31px', height: '21px', objectFit: 'contain' }} />
        </div>

        {/* Logo BHXH (Group 7: Ellipse 103x103 white shadow + logo 99x99) at x149,y116 */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', marginBottom: '24px' }}>
          <div style={{ width: '103px', height: '103px', borderRadius: '50%', background: 'white', boxShadow: '0px 3px 4px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logoBhxh} alt="" style={{ width: '99px', height: '99px', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Username input (Text input INSTANCE at x33,y248 338x39) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 32px' }}>
          <div style={{ width: '338px', maxWidth: '100%', height: '39px', background: '#ffffff', borderRadius: '5px', border: '1px solid #c8c5c5', display: 'flex', alignItems: 'center', marginBottom: '10px', overflow: 'hidden' }}>
            <div style={{ width: '39px', height: '39px', background: '#0069ad', border: '1px solid #c8c5c5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <img src={icCccd} alt="" style={{ width: '27px', height: '27px', objectFit: 'contain' }} />
            </div>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Mã số BHXH/Số ĐDCN/CCCD" style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', fontWeight: 500, color: '#333', padding: '0 10px', fontFamily: 'Inter, sans-serif' }} />
          </div>

          {/* Password input (Rectangle 3+4 at x32,y306 338x39) */}
          <div style={{ width: '338px', maxWidth: '100%', height: '39px', background: '#ffffff', borderRadius: '5px', border: '1px solid #c8c5c5', display: 'flex', alignItems: 'center', marginBottom: '8px', overflow: 'hidden' }}>
            <div style={{ width: '39px', height: '39px', background: '#0069ad', border: '1px solid #c8c5c5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <img src={icLock} alt="" style={{ width: '16px', height: '20px', objectFit: 'contain' }} />
            </div>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mật khẩu" style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', fontWeight: 500, color: '#333', padding: '0 10px', fontFamily: 'Inter, sans-serif' }} />
          </div>

          {/* Links (Quên mật khẩu x33,y355 | Đăng ký tài khoản x268,y355) */}
          <div style={{ width: '338px', maxWidth: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontSize: '12px', color: '#0069ad', cursor: 'pointer' }}>Quên mật khẩu ?</span>
            <span style={{ fontSize: '12px', color: '#0069ad', cursor: 'pointer' }}>Đăng ký tài khoản</span>
          </div>

          {/* Đăng nhập button (Group 15: Rectangle 5 x33,y390 287x44 white/45% border #0069ad r=5) + fingerprint (1 1: x309,y372 80x80 IMAGE) */}
          <div style={{ width: '338px', maxWidth: '100%', display: 'flex', alignItems: 'center', gap: '0', marginBottom: '20px' }}>
            <button onClick={onLoginSuccess} style={{ width: '287px', height: '44px', background: 'rgba(255,255,255,0.45)', border: '2px solid #0069ad', borderRadius: '5px', fontSize: '16px', fontWeight: 700, color: '#0069ad', fontFamily: 'Inter, sans-serif', cursor: 'pointer', flexShrink: 0 }}>
              Đăng nhập
            </button>
            <div onClick={onLoginSuccess} style={{ width: '80px', height: '80px', cursor: 'pointer', flexShrink: 0, marginLeft: '-14px', marginTop: '-18px' }}>
              <img src={icFingerprint} alt="" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
            </div>
          </div>

          {/* VNeID button (Rectangle 6: x31,y456 340x67 fill #d91811 r=12) */}
          <div onClick={onLoginSuccess} style={{ position: 'relative', width: '340px', maxWidth: '100%', height: '67px', background: '#d91811', borderRadius: '12px', display: 'flex', alignItems: 'center', cursor: 'pointer', overflow: 'hidden' }}>
            <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff', textAlign: 'center', lineHeight: 1.3, flex: 1, paddingLeft: '16px', paddingRight: '70px', whiteSpace: 'pre-line' }}>
              {'Đăng nhập bằng tài khoản\nđịnh danh điện tử'}
            </span>
            <img src={logoVneid} alt="" style={{ position: 'absolute', right: '8px', top: '6px', width: '55px', height: '55px', borderRadius: '13px', objectFit: 'contain' }} />
          </div>
        </div>

        <div style={{ flex: 1 }} />

        {/* Bottom texts */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#0069ad', marginBottom: '4px', cursor: 'pointer' }}>Mời cài đặt VssID</span>
          <span style={{ fontSize: '13px', color: '#0069ad', marginBottom: '10px', cursor: 'pointer' }}>Chính sách quyền riêng tư</span>
          {/* Footer image (p2 1: x0,y810 402x64 IMAGE) */}
          <img src={bgFooter} alt="" style={{ width: '100%', height: '64px', objectFit: 'contain', objectPosition: 'bottom' }} draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default Login;
