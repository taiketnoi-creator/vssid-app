import React, { useEffect, useState } from 'react';
import avatarSidebar from '../assets/avatar_sidebar.png';

const Sidebar = ({ isOpen, onClose, onNavigate, currentScreen }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  useEffect(() => { if (isOpen) setShouldRender(true); }, [isOpen]);
  const handleTransitionEnd = () => { if (!isOpen) setShouldRender(false); };
  if (!shouldRender) return null;

  const mainMenu = [
    { name: 'Thông báo', action: null, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="1.5"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="white" strokeWidth="1.5"/></svg> },
    { name: 'Tin tức', action: null, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5"/><line x1="7" y1="8" x2="17" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="7" y1="12" x2="14" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
    { name: 'Quản lý cá nhân', action: () => { onNavigate('dashboard'); onClose(); }, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/><path d="M12 1v2m0 18v2m-9-11h2m18 0h2m-3.3-7.7-1.4 1.4M6.7 17.3l-1.4 1.4m0-14.1 1.4 1.4m10.6 10.6 1.4 1.4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
    { name: 'Dịch vụ công', action: null, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="16" height="20" rx="2" stroke="white" strokeWidth="1.5"/><line x1="8" y1="7" x2="16" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="8" y1="11" x2="16" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="8" y1="15" x2="12" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
    { name: 'Tra cứu', action: null, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="white" strokeWidth="1.5"/><path d="M16.5 16.5 21 21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
    { name: 'Trợ giúp', action: null, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 18V9a8 8 0 0 1 16 0v9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><rect x="1" y="14" width="4" height="7" rx="1" stroke="white" strokeWidth="1.5"/><rect x="19" y="14" width="4" height="7" rx="1" stroke="white" strokeWidth="1.5"/></svg> },
    { name: 'Cài đặt', action: null, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.18V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 7.18 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.82 15a1.65 1.65 0 0 0-1.18-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-2.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 3.82V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 2.82 1.51l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0 .33 1.82V10a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="white" strokeWidth="1.2"/></svg> },
  ];

  const bottomMenu = [
    { name: 'Đổi mật khẩu', action: null, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="white" strokeWidth="1.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
    { name: 'Đăng xuất', action: () => { onNavigate('login'); onClose(); }, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  ];

  const Arrow = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M4 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const renderItem = (item, i) => (
    <div key={i} onClick={item.action || undefined} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 20px', cursor: item.action ? 'pointer' : 'default', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {item.icon}
        <span style={{ fontSize: '15px', color: 'white', fontFamily: 'Inter, sans-serif' }}>{item.name}</span>
      </div>
      <Arrow />
    </div>
  );

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50, display: 'flex', opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'all' : 'none', transition: 'opacity 0.3s' }} onTransitionEnd={handleTransitionEnd}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(55,55,55,0.5)' }} />
      <div style={{ position: 'relative', width: '311px', height: '100%', background: 'linear-gradient(180deg, #0072c8, #01aef2)', display: 'flex', flexDirection: 'column', transform: isOpen ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.3s ease', fontFamily: 'Inter, sans-serif', overflowY: 'auto' }}>

        {/* Profile */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px 0 20px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '3px solid rgba(255,255,255,0.7)', overflow: 'hidden', marginBottom: '12px', background: '#d9d9d9' }}>
            <img src={avatarSidebar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <span style={{ fontSize: '16px', fontWeight: 700, color: 'white' }}>Nguyễn Hữu Hoàng</span>
          <span style={{ fontSize: '14px', color: 'white', marginTop: '2px' }}>4217247030</span>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.25)' }} />

        {mainMenu.map(renderItem)}

        <div style={{ flex: 1 }} />

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', margin: '0 16px' }} />
        {bottomMenu.map(renderItem)}

        <div style={{ padding: '16px 20px 20px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          <div style={{ fontSize: '13px', color: 'white', marginBottom: '4px' }}>Phiên bản 2.6</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.4 }}>© Bản quyền thuộc về  Bảo hiểm xã hội Việt Nam.</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
