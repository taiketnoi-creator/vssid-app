import React from 'react';
import { IconFolder, IconHome, IconSignOut, IconKey } from '../components/SVGIcon';

const IconChevronLeft = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const SalaryDetail = ({ onNavigate, rowData }) => {
  // Default exact data from iPhone 17 - 4 in Figma
  const data = rowData || {
    from: '04/2025',
    to: '02/2026',
    unit: 'Công ty TNHH EO TECHNICS',
    role: 'Nhân viên kỹ thuật',
    salary: '14.500.000'
  };

  return (
    <div className="relative flex flex-col w-full h-full bg-[#f4f7f9] select-none overflow-hidden">
      {/* Header */}
      <div className="w-full bg-[#0069ad] px-4 pt-10 pb-3 text-white flex items-center shadow-md shrink-0">
        <button
          onClick={() => onNavigate('insurance-list')}
          className="p-1 hover:bg-white/10 rounded-full transition-colors active:scale-95"
        >
          <IconChevronLeft className="w-6 h-6" />
        </button>
        <span className="flex-1 text-[16px] font-semibold tracking-wider text-center uppercase mr-7">
          Chi tiết
        </span>
      </div>

      {/* Main Body */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">

        {/* Date Range row - Rectangle 21/23/22/24 */}
        <div className="bg-white border border-gray-200 rounded-[8px] overflow-hidden shadow-sm divide-y divide-gray-200">
          <div className="flex items-center px-4 py-2.5 text-[13px]">
            <span className="text-gray-500 font-semibold w-[130px] shrink-0">Từ tháng:</span>
            <span className="font-bold text-gray-800">{data.from}</span>
          </div>
          <div className="flex items-center px-4 py-2.5 text-[13px]">
            <span className="text-gray-500 font-semibold w-[130px] shrink-0">Đến tháng:</span>
            <span className="font-bold text-gray-800">{data.to}</span>
          </div>
        </div>

        {/* Detail card - Rectangle 20 (blue) */}
        <div className="w-full bg-[#38679f] text-white rounded-[10px] p-4 shadow-md space-y-3">
          {/* Chức vụ */}
          <div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-blue-200">Chức vụ:</span>
            <p className="text-[15px] font-extrabold tracking-wide mt-0.5">{data.role}</p>
          </div>

          {/* Đơn vị công tác */}
          <div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-blue-200">Đơn vị công tác:</span>
            <p className="text-[14px] font-bold leading-snug mt-0.5">{data.unit}</p>
          </div>

          {/* Nơi làm việc */}
          <div className="border-t border-white/20 pt-2.5">
            <span className="text-[11px] font-bold tracking-wider uppercase text-blue-200">Nơi làm việc:</span>
            <p className="text-[13px] font-semibold leading-normal text-blue-50 mt-0.5">
              BT22, khu đô thị hud võ cường-tp bắc ninh-bắc ninh
            </p>
            <p className="text-[13px] font-semibold text-blue-50">Việt Nam</p>
          </div>
        </div>

        {/* Salary detail table */}
        <div className="bg-white rounded-[8px] border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-200">
          {/* Tiền lương đóng BHXH */}
          <div className="flex items-center px-4 py-3.5">
            <span className="flex-1 text-[13px] font-bold text-gray-600">Tiền lương đóng BHXH</span>
            <span className="text-[14px] font-extrabold text-[#0069ad] select-all">
              {data.salary} <span className="text-[11px] font-bold text-gray-400">VND</span>
            </span>
          </div>

          {/* Mức lương */}
          <div className="flex items-center px-4 py-3.5">
            <span className="flex-1 text-[13px] font-bold text-gray-600">Mức lương</span>
            <span className="text-[14px] font-extrabold text-[#0069ad] select-all">
              {data.salary} <span className="text-[11px] font-bold text-gray-400">VND</span>
            </span>
          </div>
        </div>

        {/* Note */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-800 leading-relaxed font-semibold">
          💡 <span className="font-extrabold">Chú ý:</span> Chi tiết quá trình đóng BHXH được hệ thống cập nhật tự động từ cơ sở dữ liệu quốc gia. Mọi thông tin phản hồi xin gửi về cơ quan BHXH quản lý trực tiếp.
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="w-full bg-[#e2e8f0] border-t border-gray-300/80 flex items-center justify-around h-[60px] px-2 text-[#0069ad] shrink-0">
        <button
          onClick={() => alert('Tin tức đang cập nhật!')}
          className="flex flex-col items-center justify-center flex-1 h-full py-1 hover:bg-gray-200/50 transition-colors active:scale-95"
        >
          <IconFolder className="w-5 h-5 text-gray-500 opacity-60" />
          <span className="text-[10px] font-bold mt-0.5 text-gray-500">Tin tức</span>
        </button>

        <button
          onClick={() => alert('Dịch vụ công trực tuyến!')}
          className="flex flex-col items-center justify-center flex-1 h-full py-1 hover:bg-gray-200/50 transition-colors active:scale-95"
        >
          <IconKey className="w-5 h-5 text-gray-500 opacity-60" />
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

export default SalaryDetail;
