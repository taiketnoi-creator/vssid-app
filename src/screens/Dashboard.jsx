import React from 'react';
import { 
  IconBurger, 
  IconAvatar, 
  IconChevronRight, 
  IconCard, 
  IconClock, 
  IconDocument, 
  IconBook, 
  IconBell, 
  IconHome, 
  IconSignOut, 
  IconKey, 
  IconFolder 
} from '../components/SVGIcon';

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
      icon: <IconCard className="w-6 h-6 text-vssid-blue" />,
      action: () => alert('Tính năng Thẻ BHYT đang được phát triển!')
    },
    {
      title: 'QUÁ TRÌNH THAM GIA',
      icon: <IconClock className="w-6 h-6 text-[#ff9800]" />,
      action: () => onNavigate('insurance-list')
    },
    {
      title: 'THÔNG TIN HƯỞNG',
      icon: <IconDocument className="w-6 h-6 text-[#4caf50]" />,
      action: () => alert('Tính năng Thông tin hưởng đang được phát triển!')
    },
    {
      title: 'SỔ KHÁM CHỮA BỆNH',
      icon: <IconBook className="w-6 h-6 text-[#e91e63]" />,
      action: () => alert('Tính năng Sổ khám chữa bệnh đang được phát triển!')
    }
  ];

  return (
    <div className="relative flex flex-col justify-between w-full h-full bg-[#f4f7f9] select-none overflow-hidden">
      {/* Sleek Blue Header */}
      <div className="w-full bg-vssid-blue px-4 pt-8 pb-4 text-white flex items-center justify-between shadow-md">
        <button 
          onClick={onOpenSidebar}
          className="p-1 hover:bg-blue-700/50 rounded-full transition-colors active:scale-95"
        >
          <IconBurger className="w-6 h-6" />
        </button>
        <span className="text-[17px] font-semibold tracking-wider uppercase">
          Quản lý cá nhân
        </span>
        <button className="relative p-1 hover:bg-blue-700/50 rounded-full transition-colors">
          <IconBell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-vssid-blue"></span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-4 py-4 overflow-y-auto space-y-4">
        
        {/* Profile Card Container (Rectangle 11) */}
        <div className="w-full bg-[#eaeff3] rounded-[10px] p-4 shadow-sm border border-[#d2dfeb] relative overflow-hidden">
          {/* Subtle elegant curve/pattern background overlay */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-y-4 translate-x-4">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
              <circle cx="100" cy="100" r="80" stroke="#0069ad" strokeWidth="10" />
              <circle cx="100" cy="100" r="50" stroke="#0069ad" strokeWidth="5" />
            </svg>
          </div>

          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="relative cursor-pointer group">
              <IconAvatar className="w-[62px] h-[62px] rounded-full shadow-md border-2 border-white group-hover:border-vssid-blue transition-colors duration-300" />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#eaeff3] rounded-full"></span>
            </div>

            {/* Profile Info Summary */}
            <div className="flex-1 flex flex-col min-w-0">
              <h2 className="text-[15px] font-bold text-gray-900 leading-tight">
                {profileInfo.name}
              </h2>
              <span className="text-[13px] font-semibold text-gray-600 mt-1 select-all bg-white/50 px-2 py-0.5 rounded border border-gray-200/50 self-start">
                Mã BHXH: {profileInfo.id}
              </span>
            </div>
          </div>

          {/* Separation line */}
          <div className="h-px bg-[#c8d8e4] my-3"></div>

          {/* Profile Details */}
          <div className="space-y-2.5 text-[13px] font-medium text-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Ngày sinh:</span>
              <span className="font-semibold text-gray-800">{profileInfo.dob}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Số CCCD:</span>
              <span className="font-semibold text-gray-800">{profileInfo.cccd}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Số điện thoại:</span>
              <span className="font-semibold text-gray-800">{profileInfo.phone}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-500">Địa chỉ:</span>
              <span className="font-semibold text-gray-800 break-words leading-relaxed select-all">
                {profileInfo.address}
              </span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid Menu Items */}
        <div className="bg-white rounded-[10px] shadow-sm border border-gray-200 overflow-hidden divide-y divide-gray-100">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="flex items-center justify-between w-full p-4 hover:bg-gray-50/80 active:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="text-[14px] font-bold text-[#3f3f3f] tracking-wide">
                  {item.title}
                </span>
              </div>
              <IconChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Premium VssID Bottom Navigation Bar */}
      <div className="w-full bg-[#e2e8f0] border-t border-gray-300/80 flex items-center justify-around h-[65px] px-2 text-vssid-blue">
        <button 
          onClick={() => alert('Tin tức đang cập nhật!')}
          className="flex flex-col items-center justify-center flex-1 h-full py-1 hover:bg-gray-200/50 transition-colors active:scale-95"
        >
          <IconFolder className="w-5 h-5 opacity-60" />
          <span className="text-[10px] font-bold mt-1 text-gray-500">Tin tức</span>
        </button>

        <button 
          onClick={() => alert('Dịch vụ công trực tuyến!')}
          className="flex flex-col items-center justify-center flex-1 h-full py-1 hover:bg-gray-200/50 transition-colors active:scale-95"
        >
          <IconKey className="w-5 h-5 opacity-60" />
          <span className="text-[10px] font-bold mt-1 text-gray-500">DVC</span>
        </button>

        <button 
          onClick={() => onNavigate('dashboard')}
          className="flex flex-col items-center justify-center flex-1 h-full py-1 bg-white/80 border-t-2 border-vssid-blue relative active:scale-95"
        >
          <IconHome className="w-6 h-6 text-vssid-blue" />
          <span className="text-[10px] font-extrabold mt-0.5 text-vssid-blue">Quản lý cá nhân</span>
        </button>

        <button 
          onClick={() => onNavigate('login')}
          className="flex flex-col items-center justify-center flex-1 h-full py-1 hover:bg-gray-200/50 transition-colors active:scale-95"
        >
          <IconSignOut className="w-5 h-5 text-red-500 opacity-80" />
          <span className="text-[10px] font-bold mt-1 text-red-500 opacity-80">Đăng xuất</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
