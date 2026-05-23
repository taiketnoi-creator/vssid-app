import { useEffect, useState } from 'react';
import frameSidebar from '../assets/frame_sidebar.png';

const W = 402;
const H = 874;

const Sidebar = ({ isOpen, onClose, onNavigate, currentAccount, onOpenAccountManager, onLogout, logoutText = 'Đăng xuất' }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animClass, setAnimClass] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const t1 = setTimeout(() => setShouldRender(true), 0);
      const t2 = setTimeout(() => setAnimClass(true), 20);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      const t1 = setTimeout(() => setAnimClass(false), 0);
      const t2 = setTimeout(() => setShouldRender(false), 300);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  // Sidebar drawer is 311px wide in a 402px frame = 77.4%
  const sidebarWidthPct = 311 / W * 100;

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50 }}>
      {/* Dark overlay - click to close */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(55,55,55,0.5)',
          opacity: animClass ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Sidebar frame image - slides from left */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0,
        width: `${sidebarWidthPct}%`,
        overflow: 'hidden',
        transform: animClass ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease'
      }}>
        <img
          src={frameSidebar}
          alt=""
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: `${W / 311 * 100}%`,
            height: '100%',
            objectFit: 'fill',
            maxWidth: 'none'
          }}
          draggable={false}
        />

        {/* Dynamic User Profile Overlay in Sidebar Header — 100% Pixel-exact Figma standard */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: `${183 / H * 100}%`,
          background: 'linear-gradient(to bottom, #0072c8 0%, #0079cd 100%)', // Seamless gradient matching frame_sidebar.png perfectly
          zIndex: 10
        }}>
          {/* Ellipse 4: Outer Circle (White border) x=121, y=51, w=64, h=64 */}
          <div style={{
            position: 'absolute',
            left: `${(121 / 311) * 100}%`,
            top: `${(51 / 183) * 100}%`,
            width: `${(64 / 311) * 100}%`,
            aspectRatio: '1 / 1',
            borderRadius: '50%',
            border: '1.5px solid #ffffff',
            boxSizing: 'border-box'
          }} />

          {/* Ellipse 6: Inner Avatar Circle x=127, y=57, w=52, h=52 */}
          <div style={{
            position: 'absolute',
            left: `${(127 / 311) * 100}%`,
            top: `${(57 / 183) * 100}%`,
            width: `${(52 / 311) * 100}%`,
            aspectRatio: '1 / 1',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
            boxSizing: 'border-box'
          }}>
            {currentAccount?.avatar ? (
              <img src={currentAccount.avatar} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #004d80, #01aef2)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {currentAccount?.fullName ? currentAccount.fullName.split(' ').pop().slice(0, 2).toUpperCase() : 'VS'}
              </div>
            )}
          </div>

          {/* Name Text x=0, y=128, w=100% */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: `${(128 / 183) * 100}%`,
            width: '100%',
            height: `${(18 / 183) * 100}%`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            fontWeight: 700,
            textAlign: 'center',
            padding: '0 20px',
            boxSizing: 'border-box',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {currentAccount?.fullName}
          </div>

          {/* Code Text x=0, y=153, w=100% */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: `${(153 / 183) * 100}%`,
            width: '100%',
            height: `${(18 / 183) * 100}%`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            fontWeight: 700,
            textAlign: 'center',
            padding: '0 20px',
            boxSizing: 'border-box',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {currentAccount?.bhxhCode}
          </div>
        </div>

        {/* Interactive hotspots on the sidebar */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 15 }}>
          {/* Menu items area - sidebar menu starts approx at y=260 in 874 frame */}
          {/* Each item is approximately 65px tall */}
          {/* Thông báo: y~260 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${260 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Tin tức: y~325 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${325 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Quản lý cá nhân: y~390 */}
          <div onClick={() => { onNavigate('dashboard'); onClose(); }} style={{ position: 'absolute', left: 0, top: `${390 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Dịch vụ công: y~455 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${455 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Tra cứu: y~520 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${520 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Trợ giúp: y~585 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${585 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Cài đặt: y~650 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${650 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Đổi mật khẩu: y~745 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${745 / H * 100}%`, width: '100%', height: `${55 / H * 100}%`, cursor: 'pointer' }} />
          {/* Dynamic Logout Button Overlay: y~800 */}
          <div 
            onClick={() => {
              if (onLogout) {
                onLogout();
              } else {
                onNavigate('login');
              }
              onClose();
            }} 
            style={{ 
              position: 'absolute', 
              left: 0, 
              top: `${800 / H * 100}%`, 
              width: '100%', 
              height: `${55 / H * 100}%`, 
              backgroundColor: '#009be1', // Perfectly covers the static text in frame_sidebar.png
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '24px',
              boxSizing: 'border-box',
              cursor: 'pointer',
              zIndex: 20
            }}
          >
            {/* White Power Icon SVG matching VssID style */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '16px' }}>
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
              <line x1="12" y1="2" x2="12" y2="12" />
            </svg>
            
            {/* Dynamic Logout Text */}
            <span style={{
              color: '#ffffff',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 500
            }}>
              {logoutText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
