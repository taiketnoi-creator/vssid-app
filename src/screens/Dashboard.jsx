import React from 'react';
import avatarImg from '../assets/avatar.png';
import { IconBurger, IconBell, IconChevronRight, IconHome, IconSignOut, IconKey, IconFolder } from '../components/SVGIcon';

// Dashboard-specific icons using Figma's exact vector colors
const IconCard = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2.5" fill="#0069ad"/>
    <rect x="2" y="9" width="20" height="3" fill="#005291"/>
    <rect x="5" y="15" width="5" height="1.5" rx="0.75" fill="white"/>
    <rect x="12" y="15" width="5" height="1.5" rx="0.75" fill="white"/>
  </svg>
);

const IconClock = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" fill="#ff9800"/>
    <path d="M12 7v5l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconDocument = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="5" y="2" width="14" height="20" rx="2" fill="#4caf50"/>
    <line x1="8" y1="8" x2="16" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="8" y1="16" x2="13" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconBook = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16l-7-3-7 3V4z" fill="#e91e63"/>
    <line x1="9" y1="8" x2="15" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="9" y1="12" x2="13" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const Dashboard = ({ onOpenSidebar, onNavigate }) => {
  const profileInfo = {
    name: 'Nguyễn Hữu Hoàng',
    id: '4217247030',
    dob: '24/05/1999',
    cccd: '040299010346',
    phone: '0896511373',
    address: 'xóm Đông Lam, Xã Trường Lưu,'
  };

  const menuItems = [
    {
      title: 'THẺ BHYT',
      icon: <IconCard className="w-8 h-8" />,
      action: () => alert('Tính năng Thẻ BHYT đang được phát triển!')
    },
    {
      title: 'QUÁ TRÌNH THAM GIA',
      icon: <IconClock className="w-8 h-8" />,
      action: () => onNavigate('insurance-list')
    },
    {
      title: 'THÔNG TIN HƯỞNG',
      icon: <IconDocument className="w-8 h-8" />,
      action: () => alert('Tính năng Thông tin hưởng đang được phát triển!')
    },
    {
      title: 'SỔ KHÁM CHỮA BỆNH',
      icon: <IconBook className="w-8 h-8" />,
      action: () => alert('Tính năng Sổ khám chữa bệnh đang được phát triển!')
    }
  ];

  return (
    <div className="relative flex flex-col w-full h-full bg-[#f4f7f9] select-none overflow-hidden">
      {/* Blue Header bar */}
      <div className="w-full bg-[#0069ad] px-4 pt-10 pb-4 text-white flex items-center justify-between shadow-md shrink-0">
        <button
          onClick={onOpenSidebar}
          className="p-1 hover:bg-white/10 rounded-full transition-colors active:scale-95"
        >
          <IconBurger className="w-6 h-6" />
        </button>
        <span className="text-[16px] font-semibold tracking-wider uppercase">
          Quản lý cá nhân
        </span>
        <button className="relative p-1 hover:bg-white/10 rounded-full transition-colors">
          <IconBell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-[#0069ad]" />
        </button>
      </div>

      {/* Scrollable main content */}
      <div className="flex-1 overflow-y-auto">

        {/* Profile Card - Rectangle 11 from Figma */}
        <div className="mx-4 mt-4 bg-[#eaeff3] rounded-[10px] shadow-sm border border-[#d2dfeb] overflow-hidden">

          {/* Top section: Avatar + Name + Code */}
          <div className="flex items-center gap-3 p-4 pb-3">
            {/* Avatar - 4 1 from Figma (Ellipse 6 shape) */}
            <div className="relative shrink-0">
              <img
                src={avatarImg}
                alt="avatar"
                className="w-[62px] h-[62px] rounded-full object-cover border-2 border-white shadow"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#eaeff3] rounded-full" />
            </div>

            <div className="flex flex-col min-w-0">
              <h2 className="text-[15px] font-bold text-gray-900 leading-tight">{profileInfo.name}</h2>
              <span className="text-[12px] font-semibold text-gray-500 mt-0.5 select-all">
                Mã BHXH: {profileInfo.id}
              </span>
            </div>
          </div>

          {/* Separator line */}
          <div className="h-px bg-[#c8c5c5] mx-4" />

          {/* Profile details rows */}
          <div className="px-4 py-3 space-y-2 text-[13px]">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Ngày sinh:</span>
              <span className="font-semibold text-gray-800">{profileInfo.dob}</span>
            </div>
            <div className="h-px bg-[#c8c5c5]" />
            <div className="flex justify-between items-center">
              <span className="text-gray-500">ĐDCN/CCCD/Hộ chiếu:</span>
              <span className="font-semibold text-gray-800 select-all">{profileInfo.cccd}</span>
            </div>
            <div className="h-px bg-[#c8c5c5]" />
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Số điện thoại:</span>
              <span className="font-semibold text-gray-800 select-all">{profileInfo.phone}</span>
            </div>
            <div className="h-px bg-[#c8c5c5]" />
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-500">Địa chỉ:</span>
              <span className="font-semibold text-gray-800 break-words">{profileInfo.address}</span>
            </div>
          </div>
        </div>

        {/* Menu list - white card with dividers */}
        <div className="mx-4 mt-3 mb-4 bg-white rounded-[10px] shadow-sm border border-gray-200 overflow-hidden divide-y divide-[#c8c5c5]">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="flex items-center justify-between w-full p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-[14px] font-bold text-[#3f3f3f] tracking-wide">
                  {item.title}
                </span>
              </div>
              <IconChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="w-full bg-[#e2e8f0] border-t border-gray-300/80 flex items-center justify-around h-[60px] px-2 text-[#0069ad] shrink-0">
        <button
          onClick={() => alert('Tin tức đang cập nhật!')}
          className="flex flex-col items-center justify-center flex-1 h-full py-1 hover:bg-gray-200/50 transition-colors active:scale-95"
        >
          <IconFolder className="w-5 h-5 opacity-50 text-gray-600" />
          <span className="text-[10px] font-bold mt-0.5 text-gray-500">Tin tức</span>
        </button>

        <button
          onClick={() => alert('Dịch vụ công trực tuyến!')}
          className="flex flex-col items-center justify-center flex-1 h-full py-1 hover:bg-gray-200/50 transition-colors active:scale-95"
        >
          <IconKey className="w-5 h-5 opacity-50 text-gray-600" />
          <span className="text-[10px] font-bold mt-0.5 text-gray-500">DVC</span>
        </button>

        <button
          onClick={() => onNavigate('dashboard')}
          className="flex flex-col items-center justify-center flex-1 h-full py-1 bg-white/80 border-t-2 border-[#0069ad] relative active:scale-95"
        >
          <IconHome className="w-6 h-6 text-[#0069ad]" />
          <span className="text-[10px] font-extrabold mt-0.5 text-[#0069ad]">Quản lý cá nhân</span>
        </button>

        <button
          onClick={() => onNavigate('login')}
          className="flex flex-col items-center justify-center flex-1 h-full py-1 hover:bg-gray-200/50 transition-colors active:scale-95"
        >
          <IconSignOut className="w-5 h-5 text-red-500 opacity-80" />
          <span className="text-[10px] font-bold mt-0.5 text-red-500 opacity-80">Đăng xuất</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
