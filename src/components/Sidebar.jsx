import React, { useEffect, useState } from 'react';
import avatarSidebarImg from '../assets/avatar_sidebar.png';
import { IconHome, IconSignOut, IconKey, IconFolder } from './SVGIcon';

// Menu icon SVGs matching Figma Vector shapes
const IconVector1 = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="9 22 9 12 15 12 15 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconVector2 = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
    <path d="M12 7v5l3 3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconVector3 = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="8" height="8" rx="1" stroke="white" strokeWidth="2"/>
    <rect x="13" y="3" width="8" height="8" rx="1" stroke="white" strokeWidth="2"/>
    <rect x="3" y="13" width="8" height="8" rx="1" stroke="white" strokeWidth="2"/>
    <rect x="13" y="13" width="8" height="8" rx="1" stroke="white" strokeWidth="2"/>
  </svg>
);

const IconVector4 = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="14 2 14 8 20 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="9" y1="13" x2="15" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="9" y1="17" x2="12" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconLogout = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="16 17 21 12 16 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="21" y1="12" x2="9" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Sidebar = ({ isOpen, onClose, onNavigate, currentScreen }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) setShouldRender(false);
  };

  if (!shouldRender) return null;

  const menuItems = [
    {
      name: 'TRANG CHỦ',
      icon: <IconVector1 />,
      action: () => { onNavigate('dashboard'); onClose(); },
      active: currentScreen === 'dashboard'
    },
    {
      name: 'QUÁ TRÌNH THAM GIA',
      icon: <IconVector2 />,
      action: () => { onNavigate('insurance-list'); onClose(); },
      active: currentScreen === 'insurance-list'
    },
    {
      name: 'DỊCH VỤ CÔNG',
      icon: <IconVector3 />,
      action: () => { alert('Dịch vụ công trực tuyến!'); onClose(); },
      active: false
    },
    {
      name: 'TIN TỨC',
      icon: <IconVector4 />,
      action: () => { alert('Tin tức đang cập nhật!'); onClose(); },
      active: false
    },
    {
      name: 'ĐĂNG XUẤT',
      icon: <IconLogout />,
      action: () => { onNavigate('login'); onClose(); },
      active: false,
      isLogout: true
    }
  ];

  return (
    <div
      className={`absolute inset-0 z-50 flex select-none transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onTransitionEnd={handleAnimationEnd}
    >
      {/* Dark Overlay - Rectangle 26: #373737 opacity 0.5 */}
      <div
        onClick={onClose}
        className="absolute inset-0"
        style={{ background: 'rgba(55,55,55,0.5)' }}
      />

      {/* Sidebar Drawer - Group 11: 311px wide, gradient #0072c8 → #01aef2 */}
      <div
        className={`relative flex flex-col shadow-2xl transition-transform duration-300 ease-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{
          width: '311px',
          height: '100%',
          background: 'linear-gradient(180deg, #0072c8 0%, #01aef2 100%)'
        }}
      >
        {/* Profile Header - matching Group 11 in Figma */}
        <div className="flex flex-col items-center pt-14 pb-6 border-b border-white/20 relative overflow-hidden">

          {/* Avatar - 6 1 image from Figma */}
          <div className="relative mb-3">
            {/* Ellipse 4 - white border circle */}
            <div
              className="rounded-full border-[3px] border-white shadow-md overflow-hidden"
              style={{ width: '72px', height: '72px' }}
            >
              <img
                src={avatarSidebarImg}
                alt="avatar"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Name - Nguyễn Hữu Hoàng */}
          <h2 className="text-[16px] font-bold text-white tracking-wide">
            Nguyễn Hữu Hoàng
          </h2>
          {/* BHXH Code - 4217247030 */}
          <span className="text-[13px] font-semibold text-white/90 mt-1">
            4217247030
          </span>
        </div>

        {/* Menu items */}
        <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className={`flex items-center gap-4 w-full px-4 py-3.5 rounded-[8px] transition-all duration-200 ${
                item.active
                  ? 'bg-white/20 border-l-4 border-white'
                  : 'hover:bg-white/10'
              }`}
            >
              <div className="opacity-95 shrink-0">{item.icon}</div>
              <span className="text-[14px] font-bold text-white tracking-wider">
                {item.name}
              </span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/15 flex items-center justify-between text-[11px] text-white/70 font-semibold">
          <span>Phiên bản VssID 2.0</span>
          <span>BHXH Việt Nam</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
