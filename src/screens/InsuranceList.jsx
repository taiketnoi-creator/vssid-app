import React, { useState } from 'react';

const tabIcons = [
  // BHXH
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="#0069ad" strokeWidth="1.5" fill="none"/>
    <path d="M14 20h12M20 14v12" stroke="#0069ad" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // BHTN
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="#888" strokeWidth="1.5" fill="none"/>
    <circle cx="20" cy="16" r="4" stroke="#888" strokeWidth="1.5" fill="none"/>
    <path d="M11 32v-2a9 9 0 0 1 18 0v2" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 23l2 2 4-4" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // BHTNLĐ-BNN
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="#888" strokeWidth="1.5" fill="none"/>
    <circle cx="20" cy="16" r="4" stroke="#888" strokeWidth="1.5" fill="none"/>
    <path d="M11 32v-2a9 9 0 0 1 18 0v2" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // BHYT
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="#888" strokeWidth="1.5" fill="none"/>
    <path d="M14 20h12M20 14v12" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // C14-TS
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="#888" strokeWidth="1.5" fill="none"/>
    <rect x="12" y="14" width="16" height="12" rx="1" stroke="#888" strokeWidth="1.5" fill="none"/>
  </svg>,
];

const InsuranceList = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('BHXH');
  const tabs = ['BHXH', 'BHTN', 'BHTNLĐ-\nBNN', 'BHYT', 'C14-TS'];
  const tabIds = ['BHXH', 'BHTN', 'BHTNLĐ-BNN', 'BHYT', 'C14-TS'];

  const rows = [
    { from: '04/2025', to: '02/2026', unit: 'Công nghệ TNHH EO TECHNICS Việt Nam', role: 'Nhân viên Kỹ thuật' },
    { from: '04/2025', to: '02/2026', unit: 'Công nghệ TNHH EO TECHNICS Việt Nam', role: 'Nhân viên Kỹ thuật' },
  ];

  const S = {
    root: { width: '100%', height: '100%', background: '#ffffff', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', overflow: 'hidden' },
    // Header: blue #0069ad (same as dashboard)
    header: { width: '100%', height: '67px', background: '#0069ad', display: 'flex', alignItems: 'center', padding: '0 14px', flexShrink: 0 },
    backBtn: { marginRight: '16px', cursor: 'pointer' },
    headerTitle: { fontSize: '20px', fontWeight: '400', color: '#ffffff', fontFamily: 'Inter', flex: 1, textAlign: 'center', marginRight: '30px' },
    // Tabs row: 5 icon+label tabs
    tabsRow: { display: 'flex', borderBottom: '1px solid #e0e0e0', background: '#ffffff', flexShrink: 0, padding: '8px 4px 0' },
    tab: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '0 2px 8px', cursor: 'pointer' },
    tabLabel: { fontSize: '11px', textAlign: 'center', lineHeight: '1.2', fontFamily: 'Inter', whiteSpace: 'pre-line' },
    tabLabelActive: { color: '#0069ad', fontWeight: '600' },
    tabLabelInactive: { color: '#888888' },
    // Content
    content: { flex: 1, overflowY: 'auto', padding: '12px 16px' },
    // Summary box
    summaryBox: { border: '1px solid #c8c5c5', padding: '12px', marginBottom: '10px', background: '#ffffff' },
    summaryTitle: { fontSize: '14px', fontWeight: '400', color: '#0069ad', fontFamily: 'Inter', marginBottom: '6px' },
    summaryRow: { fontSize: '13px', fontFamily: 'Inter', color: '#3f3f3f', marginBottom: '2px' },
    summaryRowRed: { fontSize: '13px', fontFamily: 'Inter', color: '#c1191a', fontWeight: '700' },
    // Table
    table: { border: '1px solid #c8c5c5', background: '#ffffff', width: '100%', borderCollapse: 'collapse' },
    theadRow: { background: '#3f6fa8', display: 'flex' },
    th: { fontSize: '12px', fontWeight: '400', color: '#ffffff', fontFamily: 'Inter', textAlign: 'center', padding: '8px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.3)' },
    tdRow: { display: 'flex', borderBottom: '1px solid #c8c5c5', cursor: 'pointer' },
    td: { fontSize: '12px', color: '#3f3f3f', fontFamily: 'Inter', textAlign: 'center', padding: '10px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid #c8c5c5', flexWrap: 'wrap' },
    // Bottom nav
    bottomNav: { width: '100%', height: '65px', background: '#d9d9d9', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexShrink: 0 },
    navItem: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', flex: 1, cursor: 'pointer' },
    navLabel: { fontSize: '11px', color: '#3f3f3f', fontFamily: 'Inter' },
    navLabelActive: { fontSize: '11px', color: '#0069ad', fontFamily: 'Inter', fontWeight: '600' },
  };

  const eyeIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#0069ad" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="3" stroke="#0069ad" strokeWidth="1.5"/>
    </svg>
  );

  const colFromTo = { width: '50px', flexShrink: 0 };
  const colUnit = { flex: 1 };
  const colRole = { width: '65px', flexShrink: 0 };
  const colView = { width: '32px', flexShrink: 0 };

  return (
    <div style={S.root}>
      {/* Header */}
      <div style={S.header}>
        <div style={S.backBtn} onClick={() => onNavigate('dashboard')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span style={S.headerTitle}>QUẢN LÝ CÁ NHÂN</span>
      </div>

      {/* Tabs with icons */}
      <div style={S.tabsRow}>
        {tabs.map((label, i) => {
          const active = activeTab === tabIds[i];
          return (
            <div key={i} style={S.tab} onClick={() => setActiveTab(tabIds[i])}>
              <div style={{ opacity: active ? 1 : 0.5 }}>{tabIcons[i]}</div>
              <span style={{ ...S.tabLabel, ...(active ? S.tabLabelActive : S.tabLabelInactive) }}>{label}</span>
              {active && <div style={{ position: 'absolute', bottom: 0, width: '20%', height: '2px', background: '#0069ad' }} />}
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div style={S.content}>
        {activeTab === 'BHXH' ? (
          <>
            {/* Summary box */}
            <div style={S.summaryBox}>
              <div style={S.summaryTitle}>Quá trình tham gia Bảo hiểm xã hội</div>
              <div style={S.summaryRow}>Tổng thời gian tham gia: 5 năm 7 tháng</div>
              <div style={S.summaryRowRed}>Tổng thời gian chậm đóng: 0 tháng</div>
            </div>

            {/* Table */}
            <div style={{ border: '1px solid #c8c5c5', background: '#ffffff', width: '100%', overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ display: 'flex', background: '#3f6fa8' }}>
                <div style={{ ...S.th, ...colFromTo }}>Từ tháng</div>
                <div style={{ ...S.th, ...colFromTo }}>Đến tháng</div>
                <div style={{ ...S.th, ...colUnit }}>Đơn vị</div>
                <div style={{ ...S.th, ...colRole }}>Nghề nghiệp Chức vụ</div>
                <div style={{ ...S.th, ...colView, borderRight: 'none' }}></div>
              </div>

              {/* Rows */}
              {rows.map((row, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', borderTop: '1px solid #c8c5c5', cursor: 'pointer' }}
                  onClick={() => onNavigate('salary-detail', { rowData: row })}
                >
                  <div style={{ ...S.td, ...colFromTo }}>{row.from}</div>
                  <div style={{ ...S.td, ...colFromTo }}>{row.to}</div>
                  <div style={{ ...S.td, ...colUnit, textAlign: 'left', padding: '10px 6px' }}>{row.unit}</div>
                  <div style={{ ...S.td, ...colRole }}>{row.role}</div>
                  <div style={{ ...S.td, ...colView, borderRight: 'none' }}>{eyeIcon}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{ padding: '40px 0', textAlign: 'center', color: '#888', fontSize: '14px', fontFamily: 'Inter' }}>
            Chưa có dữ liệu
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={S.bottomNav}>
        <div style={S.navItem} onClick={() => onNavigate('dashboard')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#0069ad" strokeWidth="1.5"/><path d="M8 10h8M8 14h5" stroke="#0069ad" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span style={S.navLabelActive}>QL cá nhân</span>
        </div>
        <div style={S.navItem}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#616161" strokeWidth="1.5" fill="none"/><line x1="7" y1="9" x2="17" y2="9" stroke="#616161" strokeWidth="1.5" strokeLinecap="round"/><line x1="7" y1="13" x2="13" y2="13" stroke="#616161" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span style={S.navLabel}>Dịch vụ công</span>
        </div>
        <div style={S.navItem}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#616161" strokeWidth="1.5"/><path d="M16.5 16.5l4 4" stroke="#616161" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span style={S.navLabel}>Tra cứu</span>
        </div>
        <div style={S.navItem}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="#616161" strokeWidth="1.5" strokeLinecap="round"/><rect x="3" y="16" width="4" height="6" rx="1" stroke="#616161" strokeWidth="1.5" fill="none"/><rect x="17" y="16" width="4" height="6" rx="1" stroke="#616161" strokeWidth="1.5" fill="none"/></svg>
          <span style={S.navLabel}>Trợ giúp</span>
        </div>
      </div>
    </div>
  );
};

export default InsuranceList;
