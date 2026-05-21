import React, { useEffect, useState } from 'react';
import avatarSidebarImg from '../assets/avatar_sidebar.png';

const Sidebar = ({ isOpen, onClose, onNavigate, currentScreen }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpen) setShouldRender(false);
  };

  if (!shouldRender) return null;

  // Exact menu from Figma sidebar screenshot:
  // Thông báo, Tin tức, Quản lý cá nhân, Dịch vụ công, Tra cứu, Trợ giúp, Cài đặt, [gap], Đổi mật khẩu, Đăng xuất
  const menuItems = [
    { name: 'Thông báo',      action: null },
    { name: 'Tin tức',        action: null },
    { name: 'Quản lý cá nhân', action: () => { onNavigate('dashboard'); onClose(); } },
    { name: 'Dịch vụ công',   action: null },
    { name: 'Tra cứu',        action: null },
    { name: 'Trợ giúp',       action: null },
    { name: 'Cài đặt',        action: null },
  ];

  const bottomItems = [
    { name: 'Đổi mật khẩu', action: null },
    { name: 'Đăng xuất',    action: () => { onNavigate('login'); onClose(); } },
  ];

  // Arrow right icon (same for all items, small, white/light)
  const Arrow = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const menuIcons = [
    // Thông báo (bell)
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="1.5" fill="none"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="white" strokeWidth="1.5" fill="none"/></svg>,
    // Tin tức (newspaper)
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="18" rx="2" stroke="white" strokeWidth="1.5" fill="none"/><line x1="6" y1="8" x2="18" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="6" y1="12" x2="14" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    // Quản lý cá nhân (settings gear)
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    // Dịch vụ công (document)
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="16" height="20" rx="2" stroke="white" strokeWidth="1.5" fill="none"/><line x1="8" y1="8" x2="16" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="8" y1="16" x2="12" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    // Tra cứu (search)
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="white" strokeWidth="1.5"/><path d="M16.5 16.5l4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    // Trợ giúp (headset)
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><rect x="3" y="16" width="4" height="6" rx="1" stroke="white" strokeWidth="1.5" fill="none"/><rect x="17" y="16" width="4" height="6" rx="1" stroke="white" strokeWidth="1.5" fill="none"/></svg>,
    // Cài đặt (gear)
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="white" strokeWidth="1.5"/></svg>,
  ];

  const bottomIcons = [
    // Đổi mật khẩu (lock)
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="white" strokeWidth="1.5" fill="none"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    // Đăng xuất (power)
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ];

  return (
    <div
      style={{
        position: 'absolute', inset: 0, zIndex: 50,
        display: 'flex',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none',
        transition: 'opacity 0.3s ease'
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      {/* Dark overlay: Rectangle 26 (#373737, opacity 0.5) */}
      <div
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, background: 'rgba(55,55,55,0.5)' }}
      />

      {/* Sidebar drawer: 311px wide, gradient linear #0072c8 → #01aef2 */}
      <div
        style={{
          position: 'relative',
          width: '311px',
          height: '100%',
          background: 'linear-gradient(180deg, #0072c8 0%, #01aef2 100%)',
          display: 'flex',
          flexDirection: 'column',
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          fontFamily: 'Inter, sans-serif',
          overflowY: 'auto'
        }}
      >
        {/* Profile header: Ellipse 4 (avatar circle) + name + code */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px 0 24px' }}>
          {/* Ellipse 4: white border circle */}
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%',
            border: '3px solid rgba(255,255,255,0.7)',
            overflow: 'hidden', marginBottom: '12px',
            background: '#d9d9d9'
          }}>
            <img src={avatarSidebarImg} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          {/* "Nguyễn Hữu Hoàng" */}
          <span style={{ fontSize: '16px', fontWeight: '700', color: 'white', fontFamily: 'Inter' }}>Nguyễn Hữu Hoàng</span>
          {/* "4217247030" */}
          <span style={{ fontSize: '14px', fontWeight: '400', color: 'white', fontFamily: 'Inter', marginTop: '2px' }}>4217247030</span>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.3)', margin: '0 16px' }} />

        {/* Main menu items */}
        {menuItems.map((item, i) => (
          <div
            key={i}
            onClick={item.action || undefined}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 20px', cursor: item.action ? 'pointer' : 'default'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              {menuIcons[i]}
              <span style={{ fontSize: '15px', color: 'white', fontFamily: 'Inter' }}>{item.name}</span>
            </div>
            <Arrow />
          </div>
        ))}

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Bottom items: Đổi mật khẩu, Đăng xuất */}
        {bottomItems.map((item, i) => (
          <div
            key={i}
            onClick={item.action || undefined}
            style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              padding: '14px 20px', cursor: item.action ? 'pointer' : 'default'
            }}
          >
            {bottomIcons[i]}
            <span style={{ fontSize: '15px', color: 'white', fontFamily: 'Inter' }}>{item.name}</span>
          </div>
        ))}

        {/* Footer text */}
        <div style={{ padding: '16px 20px 20px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ fontSize: '13px', color: 'white', fontFamily: 'Inter', marginBottom: '4px' }}>Phiên bản 2.6</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter', lineHeight: '1.4' }}>© Bản quyền thuộc về  Bảo hiểm xã hội Việt Nam.</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
