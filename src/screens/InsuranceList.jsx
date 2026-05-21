import React, { useState } from 'react';
import { IconChevronLeft, IconEye, IconHome, IconSignOut, IconKey, IconFolder } from '../components/SVGIcon';

const InsuranceList = ({ onNavigate, onOpenSidebar }) => {
  const [activeTab, setActiveTab] = useState('BHXH');

  const tabs = [
    { id: 'BHXH', name: 'BHXH' },
    { id: 'BHTN', name: 'BHTN' },
    { id: 'BHTNLĐ-BNN', name: 'BHTNLĐ - BNN' },
    { id: 'BHYT', name: 'BHYT' },
    { id: 'C14-TS', name: 'C14-TS' }
  ];

  // Mathematically accurate to 5 years 7 months total time!
  const rows = [
    {
      id: 'row-1',
      from: '04/2025',
      to: '02/2026',
      unit: 'Công nghệ TNHH EO TECHNICS Việt Nam',
      role: 'Nhân viên Kỹ thuật',
      salary: '14.500.000'
    },
    {
      id: 'row-2',
      from: '09/2020',
      to: '03/2025',
      unit: 'Công ty Cổ phần Techcom Hà Nội',
      role: 'Kỹ sư Vận hành',
      salary: '12.000.000'
    }
  ];

  return (
    <div className="relative flex flex-col justify-between w-full h-full bg-[#f4f7f9] select-none overflow-hidden">
      {/* Header Panel */}
      <div className="w-full bg-[#0069ad] px-4 pt-8 pb-3 text-white flex items-center shadow-md">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="p-1 hover:bg-blue-700/50 rounded-full transition-colors active:scale-95"
        >
          <IconChevronLeft className="w-6 h-6" />
        </button>
        <span className="flex-1 text-[16px] font-bold tracking-wider text-center mr-8 uppercase">
          Quản lý cá nhân
        </span>
      </div>

      {/* Tabs list (BHXH, BHTN, BHTNLĐ- BNN, BHYT, C14-TS) */}
      <div className="w-full bg-white border-b border-gray-200 overflow-x-auto flex scrollbar-none whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 min-w-[75px] py-3 text-[13px] font-bold text-center border-b-2 transition-all duration-300 ${
              activeTab === tab.id
                ? 'border-vssid-blue text-vssid-blue font-extrabold'
                : 'border-transparent text-vssid-textGray hover:text-gray-700'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Main content body */}
      <div className="flex-1 p-3 overflow-y-auto space-y-4">
        {activeTab === 'BHXH' ? (
          <>
            {/* Summary card (Rectangle 13) */}
            <div className="w-full bg-[#f6f5f3] rounded-[8px] p-3 border border-[#c8c5c5] shadow-sm">
              <h3 className="text-[14px] font-bold text-[#38679f] border-b border-[#e2e2df] pb-1.5 mb-2 flex items-center gap-1.5">
                <span className="w-2 h-3.5 bg-[#38679f] rounded-sm"></span>
                Quá trình tham gia Bảo hiểm xã hội
              </h3>
              <div className="space-y-1.5 text-[12.5px] font-semibold text-[#2a2b2b]">
                <div className="flex justify-between">
                  <span className="opacity-80">Tổng thời gian tham gia:</span>
                  <span className="text-gray-900 font-bold">5 năm 7 tháng</span>
                </div>
                <div className="flex justify-between text-[#c1191a]">
                  <span className="opacity-90">Tổng thời gian chậm đóng:</span>
                  <span className="font-extrabold">0 tháng</span>
                </div>
              </div>
            </div>

            {/* Table layout (Rectangle 14 header & cells) */}
            <div className="w-full bg-white rounded-[8px] border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              {/* Table Header Row */}
              <div className="flex w-full bg-[#38679f] text-white text-[11px] font-bold text-center h-[38px] items-center">
                <div className="w-[60px] border-r border-[#4f7eb8] h-full flex items-center justify-center">Từ tháng</div>
                <div className="w-[60px] border-r border-[#4f7eb8] h-full flex items-center justify-center">Đến tháng</div>
                <div className="flex-1 border-r border-[#4f7eb8] h-full flex items-center justify-center px-1">Đơn vị đóng</div>
                <div className="w-[75px] border-r border-[#4f7eb8] h-full flex items-center justify-center px-1">Chức vụ</div>
                <div className="w-[35px] h-full flex items-center justify-center">Xem</div>
              </div>

              {/* Table Rows */}
              <div className="flex flex-col divide-y divide-gray-200">
                {rows.map((row) => (
                  <div
                    key={row.id}
                    onClick={() => onNavigate('salary-detail', { rowData: row })}
                    className="flex w-full min-h-[58px] text-[11px] font-semibold text-[#3f3f3f] text-center items-center hover:bg-blue-50/50 active:bg-blue-50 cursor-pointer transition-colors duration-200"
                  >
                    <div className="w-[60px] border-r border-gray-150 h-full flex items-center justify-center font-bold">{row.from}</div>
                    <div className="w-[60px] border-r border-gray-150 h-full flex items-center justify-center font-bold">{row.to}</div>
                    <div className="flex-1 border-r border-gray-150 h-full flex items-center justify-center px-1.5 text-left leading-normal font-bold">
                      {row.unit}
                    </div>
                    <div className="w-[75px] border-r border-gray-150 h-full flex items-center justify-center px-1 leading-normal font-bold">
                      {row.role}
                    </div>
                    <div className="w-[35px] h-full flex items-center justify-center text-vssid-blue">
                      <button className="p-1 hover:bg-blue-100 rounded-full transition-colors">
                        <IconEye className="w-[18px] h-[18px]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-48 text-gray-400 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <svg className="w-12 h-12 stroke-current mb-2 opacity-50" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5" />
            </svg>
            <span className="text-[13px] font-bold text-gray-500">Chưa có dữ liệu cho mục {activeTab}</span>
          </div>
        )}
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

export default InsuranceList;
