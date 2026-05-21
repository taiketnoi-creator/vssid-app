import React, { useState } from 'react';
import imgBottomNav from '../assets/dash_bottom_nav_img.png';

const InsuranceList = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('BHXH');
  const tabLabels = ['BHXH', 'BHTN', 'BHTNLĐ-\nBNN', 'BHYT', 'C14-TS'];
  const tabIds = ['BHXH', 'BHTN', 'BHTNLD', 'BHYT', 'C14TS'];

  // Tab icons matching Figma screenshot exactly (blue circles with icons inside)
  const tabIcons = [
    // BHXH - shield/cross icon (active = blue)
    (active) => <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="16" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.5"/><path d="M13 18h10M18 13v10" stroke={active ? '#0069ad' : '#888'} strokeWidth="2" strokeLinecap="round"/></svg>,
    // BHTN - people icon
    (active) => <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="16" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.5"/><circle cx="15" cy="14" r="3" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.3"/><path d="M9 26v-1a6 6 0 0 1 12 0v1" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.3" strokeLinecap="round"/><circle cx="22" cy="13" r="2.5" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.3"/><path d="M24 26v-1a4 4 0 0 0-3-3.9" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.3" strokeLinecap="round"/></svg>,
    // BHTNLĐ-BNN - shield people
    (active) => <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="16" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.5"/><circle cx="18" cy="14" r="3" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.3"/><path d="M11 27v-1a7 7 0 0 1 14 0v1" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.3" strokeLinecap="round"/><path d="M14 23l2 2 4-4" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    // BHYT - cross/plus
    (active) => <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="16" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.5"/><path d="M13 18h10M18 13v10" stroke={active ? '#0069ad' : '#888'} strokeWidth="2" strokeLinecap="round"/></svg>,
    // C14-TS - document
    (active) => <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="16" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.5"/><rect x="11" y="10" width="14" height="16" rx="1.5" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.3"/><line x1="14" y1="15" x2="22" y2="15" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.2" strokeLinecap="round"/><line x1="14" y1="19" x2="20" y2="19" stroke={active ? '#0069ad' : '#888'} strokeWidth="1.2" strokeLinecap="round"/></svg>,
  ];

  const rows = [
    { from: '04/2025', to: '02/2026', unit: 'Công nghệ TNHH EO TECHNICS Việt Nam', role: 'Nhân viên Kỹ thuật' },
    { from: '04/2025', to: '02/2026', unit: 'Công nghệ TNHH EO TECHNICS Việt Nam', role: 'Nhân viên Kỹ thuật' },
  ];

  const eyeIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#0069ad" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="#0069ad" strokeWidth="1.5"/></svg>;

  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ width: '100%', height: '67px', background: '#0069ad', display: 'flex', alignItems: 'center', padding: '0 14px', flexShrink: 0 }}>
        <div onClick={() => onNavigate('dashboard')} style={{ cursor: 'pointer', padding: '4px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <span style={{ flex: 1, fontSize: '20px', color: '#fff', textAlign: 'center', marginRight: '30px' }}>QUẢN LÝ CÁ NHÂN</span>
      </div>

      {/* Tabs with icons */}
      <div style={{ display: 'flex', borderBottom: '2px solid #e0e0e0', background: '#fff', flexShrink: 0, padding: '8px 4px 0' }}>
        {tabLabels.map((label, i) => {
          const active = activeTab === tabIds[i];
          return (
            <div key={i} onClick={() => setActiveTab(tabIds[i])} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', paddingBottom: '6px', cursor: 'pointer', borderBottom: active ? '3px solid #0069ad' : '3px solid transparent', marginBottom: '-2px' }}>
              {tabIcons[i](active)}
              <span style={{ fontSize: '11px', textAlign: 'center', whiteSpace: 'pre-line', lineHeight: 1.2, color: active ? '#0069ad' : '#888', fontWeight: active ? 600 : 400 }}>{label}</span>
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 12px' }}>
        {activeTab === 'BHXH' ? (
          <>
            {/* Summary */}
            <div style={{ border: '1px solid #0069ad', padding: '10px 12px', marginBottom: '12px', background: '#f0f7fc' }}>
              <div style={{ fontSize: '14px', color: '#0069ad', marginBottom: '4px' }}>Quá trình tham gia Bảo hiểm xã hội</div>
              <div style={{ fontSize: '13px', color: '#3f3f3f', fontWeight: 700 }}>Tổng thời gian tham gia: 5 năm 7 tháng</div>
              <div style={{ fontSize: '13px', color: '#c1191a', fontWeight: 700 }}>Tổng thời gian chậm đóng: 0 tháng</div>
            </div>

            {/* Table */}
            <div style={{ border: '1px solid #c8c5c5', width: '100%' }}>
              <div style={{ display: 'flex', background: '#3f6fa8' }}>
                <div style={{ width: '50px', padding: '8px 2px', fontSize: '11px', color: '#fff', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.3)' }}>Từ tháng</div>
                <div style={{ width: '50px', padding: '8px 2px', fontSize: '11px', color: '#fff', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.3)' }}>Đến tháng</div>
                <div style={{ flex: 1, padding: '8px 4px', fontSize: '11px', color: '#fff', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.3)' }}>Đơn vị</div>
                <div style={{ width: '65px', padding: '8px 2px', fontSize: '11px', color: '#fff', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.3)' }}>Nghề nghiệp Chức vụ</div>
                <div style={{ width: '30px', padding: '8px 2px', fontSize: '11px', color: '#fff', textAlign: 'center' }}></div>
              </div>
              {rows.map((row, i) => (
                <div key={i} onClick={() => onNavigate('salary-detail', { rowData: row })} style={{ display: 'flex', borderTop: '1px solid #c8c5c5', cursor: 'pointer' }}>
                  <div style={{ width: '50px', padding: '10px 2px', fontSize: '11px', color: '#3f3f3f', textAlign: 'center', borderRight: '1px solid #c8c5c5' }}>{row.from}</div>
                  <div style={{ width: '50px', padding: '10px 2px', fontSize: '11px', color: '#3f3f3f', textAlign: 'center', borderRight: '1px solid #c8c5c5' }}>{row.to}</div>
                  <div style={{ flex: 1, padding: '10px 4px', fontSize: '11px', color: '#3f3f3f', textAlign: 'center', borderRight: '1px solid #c8c5c5' }}>{row.unit}</div>
                  <div style={{ width: '65px', padding: '10px 2px', fontSize: '11px', color: '#3f3f3f', textAlign: 'center', borderRight: '1px solid #c8c5c5' }}>{row.role}</div>
                  <div style={{ width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{eyeIcon}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{ padding: '40px 0', textAlign: 'center', color: '#888', fontSize: '14px' }}>Chưa có dữ liệu</div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ width: '100%', height: '65px', background: '#d9d9d9', flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
        <img src={imgBottomNav} alt="" style={{ width: '100%', height: '50px', objectFit: 'contain' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
          <div onClick={() => onNavigate('dashboard')} style={{ flex: 1, cursor: 'pointer' }} />
          <div style={{ flex: 1, cursor: 'pointer' }} />
          <div style={{ flex: 1, cursor: 'pointer' }} />
          <div style={{ flex: 1, cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default InsuranceList;
