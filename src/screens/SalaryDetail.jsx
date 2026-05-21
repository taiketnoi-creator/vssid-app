import React from 'react';
import { IconChevronLeft, IconFolder, IconHome, IconSignOut, IconKey } from '../components/SVGIcon';

const SalaryDetail = ({ onNavigate, rowData }) => {
  // Default values matching Nguyen Huu Hoang's exact Figma record in iPhone 17 - 4
  const data = rowData || {
    from: '04/2025',
    to: '02/2026',
    unit: 'Công ty TNHH EO TECHNICS',
    role: 'Nhân viên kỹ thuật',
    salary: '14.500.000'
  };

  return (
    <div className="relative flex flex-col justify-between w-full h-full bg-[#f4f7f9] select-none overflow-hidden">
      {/* Header Panel */}
      <div className="w-full bg-[#0069ad] px-4 pt-8 pb-3 text-white flex items-center shadow-md">
        <button 
          onClick={() => onNavigate('insurance-list')}
          className="p-1 hover:bg-blue-700/50 rounded-full transition-colors active:scale-95"
        >
          <IconChevronLeft className="w-6 h-6" />
        </button>
        <span className="flex-1 text-[16px] font-bold tracking-wider text-center mr-8 uppercase">
          Chi tiết đóng BHXH
        </span>
      </div>

      {/* Main Details Body */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        
        {/* Date Ranges */}
        <div className="flex justify-between items-center text-xs font-bold text-gray-500 bg-white/70 px-4 py-2 rounded-lg border border-gray-150 shadow-sm">
          <span>Từ tháng: {data.from}</span>
          <span>Đến tháng: {data.to}</span>
        </div>

        {/* blue card container (Rectangle 20) */}
        <div className="w-full bg-[#38679f] text-white rounded-[10px] p-4 shadow-md space-y-3.5 relative overflow-hidden">
          {/* Subtle logo print background */}
          <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none transform translate-y-6 translate-x-6">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
              <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="5" />
            </svg>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold tracking-wider uppercase text-blue-200">Chức vụ</span>
            <p className="text-[15px] font-extrabold tracking-wide">{data.role}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold tracking-wider uppercase text-blue-200">Đơn vị công tác</span>
            <p className="text-[14px] font-extrabold leading-snug">{data.unit}</p>
          </div>

          <div className="space-y-1 border-t border-white/20 pt-2.5">
            <span className="text-[11px] font-bold tracking-wider uppercase text-blue-200">Nơi làm việc</span>
            <p className="text-[13px] font-bold leading-normal text-blue-50">
              BT22, khu đô thị hud võ cường, TP. Bắc Ninh, Tỉnh Bắc Ninh, Việt Nam
            </p>
          </div>
        </div>

        {/* Salary table list */}
        <div className="space-y-2 mt-2">
          <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest px-1">Chi tiết lương đóng BHXH</h3>
          
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-200">
            {/* Grid row 1: Tiền lương đóng BHXH */}
            <div className="flex">
              <div className="w-[50%] p-3.5 text-[13px] font-bold text-gray-600 bg-gray-50/50">
                Tiền lương đóng BHXH
              </div>
              <div className="w-[50%] p-3.5 text-[14px] font-extrabold text-vssid-blue text-right select-all">
                {data.salary} <span className="text-[10px] font-bold text-gray-400">VND</span>
              </div>
            </div>

            {/* Grid row 2: Mức lương */}
            <div className="flex">
              <div className="w-[50%] p-3.5 text-[13px] font-bold text-gray-600 bg-gray-50/50">
                Mức lương
              </div>
              <div className="w-[50%] p-3.5 text-[14px] font-extrabold text-vssid-blue text-right select-all">
                {data.salary} <span className="text-[10px] font-bold text-gray-400">VND</span>
              </div>
            </div>
          </div>
        </div>

        {/* Extra detail info banner */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-800 leading-relaxed font-semibold">
          💡 <span className="font-extrabold">Chú ý:</span> Chi tiết quá trình đóng BHXH được hệ thống cập nhật tự động từ cơ sở dữ liệu quốc gia về Bảo hiểm xã hội. Mọi thông tin phản hồi xin gửi về cơ quan BHXH quản lý trực tiếp.
        </div>

      </div>

      {/* Bottom Nav Bar */}
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

export default SalaryDetail;
