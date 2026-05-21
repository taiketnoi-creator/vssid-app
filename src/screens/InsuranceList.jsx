import React, { useState } from 'react';
import { IconHome, IconSignOut, IconKey, IconFolder } from '../components/SVGIcon';

const IconChevronLeft = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const IconEye = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const InsuranceList = ({ onNavigate, onOpenSidebar }) => {
  const [activeTab, setActiveTab] = useState('BHXH');

  const tabs = [
    { id: 'BHXH', name: 'BHXH' },
    { id: 'BHTN', name: 'BHTN' },
    { id: 'BHTNLĐ-BNN', name: 'BHTNLĐ - BNN' },
    { id: 'BHYT', name: 'BHYT' },
    { id: 'C14-TS', name: 'C14-TS' }
  ];

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
    <div className="relative flex flex-col w-full h-full bg-[#f4f7f9] select-none overflow-hidden">
      {/* Header */}
      <div className="w-full bg-[#0069ad] px-4 pt-10 pb-3 text-white flex items-center shadow-md shrink-0">
        <button
          onClick={() => onNavigate('dashboard')}
          className="p-1 hover:bg-white/10 rounded-full transition-colors active:scale-95"
        >
          <IconChevronLeft className="w-6 h-6" />
        </button>
        <span className="flex-1 text-[16px] font-semibold tracking-wider text-center uppercase mr-7">
          Quản lý cá nhân
        </span>
      </div>

      {/* Tabs - BHXH, BHTN, BHTNLĐ- BNN, BHYT, C14-TS */}
      <div className="w-full bg-white border-b border-gray-200 overflow-x-auto flex shrink-0" style={{ scrollbarWidth: 'none' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 min-w-[70px] py-3 text-[12px] font-bold text-center border-b-2 transition-all duration-200 whitespace-nowrap px-1 ${
              activeTab === tab.id
                ? 'border-[#0069ad] text-[#0069ad]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3">
        {activeTab === 'BHXH' ? (
          <>
            {/* Summary box - Rectangle 13 */}
            <div className="w-full bg-[#f6f5f3] rounded-[8px] p-3 border border-[#c8c5c5] shadow-sm">
              <h3 className="text-[13px] font-bold text-[#38679f] border-b border-[#e2e2df] pb-1.5 mb-2">
                Quá trình tham gia Bảo hiểm xã hội
              </h3>
              <div className="space-y-1 text-[12.5px]">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Tổng thời gian tham gia:</span>
                  <span className="font-bold text-gray-900">5 năm 7 tháng</span>
                </div>
                <div className="flex justify-between text-[#c1191a]">
                  <span className="font-semibold">Tổng thời gian chậm đóng:</span>
                  <span className="font-extrabold">0 tháng</span>
                </div>
              </div>
            </div>

            {/* Table - Rectangle 14 */}
            <div className="w-full bg-white rounded-[8px] border border-gray-200 shadow-sm overflow-hidden">
              {/* Table header */}
              <div className="flex w-full bg-[#38679f] text-white text-[11px] font-bold text-center" style={{ minHeight: '38px' }}>
                <div className="w-[55px] border-r border-[#4f7eb8] flex items-center justify-center shrink-0 p-1">Từ tháng</div>
                <div className="w-[55px] border-r border-[#4f7eb8] flex items-center justify-center shrink-0 p-1">Đến tháng</div>
                <div className="flex-1 border-r border-[#4f7eb8] flex items-center justify-center p-1">Đơn vị đóng</div>
                <div className="w-[70px] border-r border-[#4f7eb8] flex items-center justify-center shrink-0 p-1">Chức vụ</div>
                <div className="w-[32px] flex items-center justify-center shrink-0">Xem</div>
              </div>

              {/* Table rows */}
              <div className="flex flex-col divide-y divide-gray-200">
                {rows.map((row) => (
                  <div
                    key={row.id}
                    onClick={() => onNavigate('salary-detail', { rowData: row })}
                    className="flex w-full text-[11px] font-semibold text-[#3f3f3f] text-center items-stretch hover:bg-blue-50/50 active:bg-blue-50 cursor-pointer transition-colors duration-150"
                    style={{ minHeight: '55px' }}
                  >
                    <div className="w-[55px] border-r border-gray-200 flex items-center justify-center font-bold shrink-0 p-1">{row.from}</div>
                    <div className="w-[55px] border-r border-gray-200 flex items-center justify-center font-bold shrink-0 p-1">{row.to}</div>
                    <div className="flex-1 border-r border-gray-200 flex items-center justify-start p-1.5 text-left leading-snug">{row.unit}</div>
                    <div className="w-[70px] border-r border-gray-200 flex items-center justify-center shrink-0 p-1 leading-snug text-center">{row.role}</div>
                    <div className="w-[32px] flex items-center justify-center shrink-0">
                      <button className="p-1 hover:bg-blue-100 rounded-full transition-colors">
                        <IconEye className="w-[16px] h-[16px] text-[#0069ad]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-40 text-gray-400 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <span className="text-[13px] font-bold text-gray-500">Chưa có dữ liệu cho mục {activeTab}</span>
          </div>
        )}
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

export default InsuranceList;
