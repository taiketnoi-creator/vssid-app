import React, { useEffect, useState } from 'react';
import { IconAvatar, IconHome, IconSignOut, IconKey, IconFolder } from './SVGIcon';

const Sidebar = ({ isOpen, onClose, onNavigate, currentScreen }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setShouldRender(false);
    }
  };

  if (!shouldRender) return null;

  const menuItems = [
    {
      name: 'TRANG CHỦ',
      icon: <IconHome className="w-5 h-5" />,
      action: () => {
        onNavigate('dashboard');
        onClose();
      },
      active: currentScreen === 'dashboard'
    },
    {
      name: 'QUÁ TRÌNH THAM GIA',
      icon: <IconFolder className="w-5 h-5" />,
      action: () => {
        onNavigate('insurance-list');
        onClose();
      },
      active: currentScreen === 'insurance-list'
    },
    {
      name: 'DỊCH VỤ CÔNG',
      icon: <IconKey className="w-5 h-5" />,
      action: () => {
        alert('Dịch vụ công trực tuyến!');
        onClose();
      },
      active: false
    },
    {
      name: 'TIN TỨC',
      icon: <IconFolder className="w-5 h-5" />,
      action: () => {
        alert('Tin tức đang được cập nhật!');
        onClose();
      },
      active: false
    },
    {
      name: 'ĐĂNG XUẤT',
      icon: <IconSignOut className="w-5 h-5 text-red-100" />,
      action: () => {
        onNavigate('login');
        onClose();
      },
      active: false,
      isLogout: true
    }
  ];

  return (
    <div 
      className={`absolute inset-0 z-50 flex select-none transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onTransitionEnd={handleAnimationEnd}
    >
      {/* Dark Overlay (Rectangle 26) - opacity 0.5, #373737 */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#373737]/50 backdrop-blur-[2px] transition-all duration-300"
      />

      {/* Sidebar Drawer Container (Group 11) */}
      <div 
        className={`relative w-[311px] h-full flex flex-col shadow-2xl transition-transform duration-300 ease-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(to bottom, #0072c8, #01aef2)'
        }}
      >
        {/* Profile Info Header Panel */}
        <div className="flex flex-col items-center pt-14 pb-8 border-b border-white/20 relative overflow-hidden">
          {/* Subtle light sparkles behind avatar */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

          {/* Centered Avatar (Ellipse 6) */}
          <div className="relative p-1 bg-white/10 rounded-full border border-white/20 backdrop-blur-md mb-3 transform hover:scale-105 transition-transform duration-300">
            <IconAvatar className="w-[64px] h-[64px] rounded-full border-2 border-white" />
          </div>

          {/* Name & Code */}
          <h2 className="text-[16px] font-bold text-white tracking-wide">
            Nguyễn Hữu Hoàng
          </h2>
          <span className="text-[13px] font-semibold text-white/90 bg-white/15 px-3 py-0.5 rounded-full border border-white/20 mt-1.5 shadow-inner select-all">
            4217247030
          </span>
        </div>

        {/* Sidebar Menu Items List (Frame 6 1 area) */}
        <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className={`flex items-center gap-4 w-full px-4 py-3.5 rounded-[8px] transition-all duration-200 ${
                item.active 
                  ? 'bg-white/20 text-white font-extrabold shadow-inner border-l-4 border-white' 
                  : item.isLogout 
                    ? 'hover:bg-red-500/20 text-red-100 hover:text-white font-semibold'
                    : 'hover:bg-white/10 text-white/90 hover:text-white font-semibold'
              }`}
            >
              <div className="opacity-95">{item.icon}</div>
              <span className="text-[14px] tracking-wider uppercase font-bold">
                {item.name}
              </span>
            </button>
          ))}
        </div>

        {/* Footer Area */}
        <div className="p-4 border-t border-white/15 flex items-center justify-between text-[11px] text-white/70 font-semibold bg-blue-950/20">
          <span>Phiên bản VssID 2.0</span>
          <span>BHXH Việt Nam</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
