import React, { useEffect, useState } from 'react';
import avatarSidebar from '../assets/avatar_sidebar.png';
import sidebarMenuStrip from '../assets/sidebar_menu_strip.png';

const Sidebar = ({ isOpen, onClose, onNavigate, currentScreen }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animClass, setAnimClass] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimClass(true)));
    } else {
      setAnimClass(false);
      const t = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  // The sidebar_menu_strip.png (620x1378 at 2x = 310x689) contains the ENTIRE menu
  // with icons, text, arrows, dividers - everything from Figma exactly
  // We just render it as one image and add clickable hotspot overlays

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50, fontFamily: 'Inter, sans-serif' }}>
      {/* Dark overlay */}
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0,
        background: 'rgba(55,55,55,0.5)',
        opacity: animClass ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }} />

      {/* Sidebar drawer: 311px wide, gradient bg */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0,
        width: '311px',
        background: 'linear-gradient(180deg, #0072c8, #01aef2)',
        transform: animClass ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        display: 'flex', flexDirection: 'column',
        overflowY: 'auto'
      }}>
        {/* Profile header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px 20px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '3px solid rgba(255,255,255,0.7)', overflow: 'hidden', marginBottom: '10px' }}>
            <img src={avatarSidebar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Nguyễn Hữu Hoàng</div>
          <div style={{ fontSize: '14px', color: '#fff' }}>4217247030</div>
        </div>

        {/* Menu strip image from Figma (73:285 "6 1") - contains all menu items with icons and text */}
        <div style={{ position: 'relative', width: '100%' }}>
          <img src={sidebarMenuStrip} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
          
          {/* Clickable overlay zones mapped to the strip sections */}
          {/* Strip is 310x689 at native. Each menu item is approximately 689/11 ≈ 63px tall */}
          {/* Items: Thông báo, Tin tức, Quản lý cá nhân, Dịch vụ công, Tra cứu, Trợ giúp, Cài đặt, [gap], Đổi mật khẩu, Đăng xuất, [gap+footer] */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
            {/* Thông báo */}
            <div onClick={onClose} style={{ flex: 1, cursor: 'pointer' }} />
            {/* Tin tức */}
            <div onClick={onClose} style={{ flex: 1, cursor: 'pointer' }} />
            {/* Quản lý cá nhân */}
            <div onClick={() => { onNavigate('dashboard'); onClose(); }} style={{ flex: 1, cursor: 'pointer' }} />
            {/* Dịch vụ công */}
            <div onClick={onClose} style={{ flex: 1, cursor: 'pointer' }} />
            {/* Tra cứu */}
            <div onClick={onClose} style={{ flex: 1, cursor: 'pointer' }} />
            {/* Trợ giúp */}
            <div onClick={onClose} style={{ flex: 1, cursor: 'pointer' }} />
            {/* Cài đặt */}
            <div onClick={onClose} style={{ flex: 1, cursor: 'pointer' }} />
            {/* Gap */}
            <div style={{ flex: 0.6 }} />
            {/* Đổi mật khẩu */}
            <div onClick={onClose} style={{ flex: 1, cursor: 'pointer' }} />
            {/* Đăng xuất */}
            <div onClick={() => { onNavigate('login'); onClose(); }} style={{ flex: 1, cursor: 'pointer' }} />
            {/* Footer area */}
            <div style={{ flex: 2 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
