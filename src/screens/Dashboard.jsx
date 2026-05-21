import React from 'react';
import avatarImg from '../assets/avatar.png';

// Bottom nav icons exported from Figma (Group 2 / 3 1 bottom bar)
const navBhytIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="12" stroke="#0069ad" strokeWidth="1.5" fill="none"/>
    <path d="M9 14h10M14 9v10" stroke="#0069ad" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Chevron right (Vector 3/4/5/6: 8x17, stroke #616161 1.5)
const ChevronRight = () => (
  <svg width="8" height="17" viewBox="0 0 8 17" fill="none">
    <path d="M1 1l6 7.5L1 16" stroke="#616161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Bottom nav icons matching "3 1" image bar (Group 2 in Figma)
const NavIcon1 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#0069ad" strokeWidth="1.5"/>
    <path d="M8 10h8M8 14h5" stroke="#0069ad" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const NavIcon2 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#616161" strokeWidth="1.5" fill="none"/>
    <line x1="7" y1="9" x2="17" y2="9" stroke="#616161" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="7" y1="13" x2="13" y2="13" stroke="#616161" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const NavIcon3 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke="#616161" strokeWidth="1.5"/>
    <path d="M16.5 16.5l4 4" stroke="#616161" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const NavIcon4 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="3" stroke="#616161" strokeWidth="1.5"/>
    <path d="M6 20v-1a6 6 0 0 1 12 0v1" stroke="#616161" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="19" cy="6" r="2" fill="#0069ad"/>
    <path d="M18 6h2M19 5v2" stroke="white" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const menuItems = [
  { title: 'THẺ BHYT',           action: null },
  { title: 'QUÁ TRÌNH THAM GIA', action: 'insurance-list' },
  { title: 'THÔNG TIN HƯỞNG',    action: null },
  { title: 'SỔ KHÁM CHỮA BỆNH', action: null },
];

const Dashboard = ({ onOpenSidebar, onNavigate }) => {
  const S = {
    root: { width: '100%', height: '100%', background: '#ffffff', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', overflow: 'hidden' },
    // Header: Rectangle 7 (403x67, gradient #0069ad image) — replicate with solid blue
    header: {
      width: '100%', height: '67px', background: '#0069ad',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 14px', flexShrink: 0
    },
    headerTitle: { fontSize: '20px', fontWeight: '400', color: '#ffffff', fontFamily: 'Inter', letterSpacing: '0.5px' },
    // Hamburger (Group 1: 3 rectangles 25x3 white)
    hamburger: { display: 'flex', flexDirection: 'column', gap: '5px', cursor: 'pointer', padding: '4px' },
    hamburgerLine: { width: '25px', height: '3px', background: '#ffffff', borderRadius: '1px' },
    // Bell vector (white, 24x26)
    bellWrap: { cursor: 'pointer' },
    // Content area (scrollable)
    content: { flex: 1, overflowY: 'auto', padding: '20px 19px 0' },
    // Profile card: Rectangle 11 (364x276, fill #eaeff3)
    card: { width: '364px', background: '#eaeff3', padding: '18px 18px 12px', marginBottom: '12px' },
    // Avatar row: Ellipse 6 (62x62, fill #d9d9d9, shadow)
    avatarRow: { display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '12px' },
    avatar: {
      width: '62px', height: '62px', borderRadius: '50%',
      background: '#d9d9d9', overflow: 'hidden', flexShrink: 0,
      boxShadow: '0px 2px 4px rgba(0,0,0,0.25)'
    },
    name: { fontSize: '14px', fontWeight: '700', color: '#000000', fontFamily: 'Inter', marginBottom: '2px' },
    bhxhCode: { fontSize: '14px', fontWeight: '400', color: '#4d4d4d', fontFamily: 'Inter' },
    // Divider: Line (width varies, stroke #948c8c 1px) — full width here
    divider: { height: '1px', background: '#948c8c', margin: '0', width: '100%' },
    // Info rows (fs=14, Regular, #616161)
    infoRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', fontSize: '14px', color: '#616161', fontFamily: 'Inter' },
    // Menu items: each row with icon (69x60) + text (fs=17, Regular, #3f3f3f) + chevron
    menuWrap: { flex: 1, overflow: 'hidden' },
    menuItem: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 19px', borderBottom: '1px solid #c8c5c5', cursor: 'pointer',
      background: '#ffffff'
    },
    menuLeft: { display: 'flex', alignItems: 'center', gap: '12px' },
    menuIcon: { width: '34px', height: '34px', flexShrink: 0 },
    menuText: { fontSize: '17px', fontWeight: '400', color: '#3f3f3f', fontFamily: 'Inter' },
    // Bottom nav: Group 2 (402x65, fill #d9d9d9) with "3 1" image (402x50)
    bottomNav: {
      width: '100%', height: '65px', background: '#d9d9d9',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      flexShrink: 0
    },
    navItem: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', flex: 1, cursor: 'pointer' },
    navLabel: { fontSize: '11px', color: '#3f3f3f', fontFamily: 'Inter' },
    navLabelActive: { fontSize: '11px', color: '#0069ad', fontFamily: 'Inter', fontWeight: '600' },
  };

  const menuIcons = [
    // THẺ BHYT icon
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="16" stroke="#0069ad" strokeWidth="1.5" fill="none"/>
      <rect x="8" y="13" width="18" height="11" rx="2" stroke="#0069ad" strokeWidth="1.5" fill="none"/>
      <line x1="8" y1="17" x2="26" y2="17" stroke="#0069ad" strokeWidth="1.5"/>
    </svg>,
    // QUÁ TRÌNH icon
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="16" stroke="#0069ad" strokeWidth="1.5" fill="none"/>
      <path d="M17 11v6l4 4" stroke="#0069ad" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 17a8 8 0 1 0 8-8" stroke="#0069ad" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,
    // THÔNG TIN HƯỞNG icon
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="16" stroke="#0069ad" strokeWidth="1.5" fill="none"/>
      <circle cx="17" cy="13" r="3" stroke="#0069ad" strokeWidth="1.5" fill="none"/>
      <path d="M10 26v-1a7 7 0 0 1 14 0v1" stroke="#0069ad" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,
    // SỔ KHÁM icon
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="16" stroke="#0069ad" strokeWidth="1.5" fill="none"/>
      <path d="M12 9h14v18H12z" stroke="#0069ad" strokeWidth="1.5" fill="none"/>
      <line x1="8" y1="9" x2="12" y2="9" stroke="#0069ad" strokeWidth="1.5"/>
      <line x1="8" y1="27" x2="12" y2="27" stroke="#0069ad" strokeWidth="1.5"/>
      <line x1="8" y1="9" x2="8" y2="27" stroke="#0069ad" strokeWidth="1.5"/>
    </svg>
  ];

  return (
    <div style={S.root}>
      {/* Header */}
      <div style={S.header}>
        {/* Hamburger menu (Group 1: 3 rectangles) */}
        <div style={S.hamburger} onClick={onOpenSidebar}>
          <div style={S.hamburgerLine} />
          <div style={S.hamburgerLine} />
          <div style={S.hamburgerLine} />
        </div>
        {/* Title: "QUẢN LÝ CÁ NHÂN" */}
        <span style={S.headerTitle}>QUẢN LÝ CÁ NHÂN</span>
        {/* Bell icon (Vector: 24x26, fill white) */}
        <div style={S.bellWrap}>
          <svg width="24" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={S.content}>
        {/* Profile card: Rectangle 11 (364x276, #eaeff3) */}
        <div style={S.card}>
          <div style={S.avatarRow}>
            {/* Ellipse 6 (62x62, fill #d9d9d9, shadow 0 2 4 rgba(0,0,0,0.25)) */}
            <div style={S.avatar}>
              <img src={avatarImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              {/* "Nguyễn Hữu Hoàng" fs=14 bold black */}
              <div style={S.name}>Nguyễn Hữu Hoàng</div>
              {/* "Mã BHXH: 4217247030" fs=14 regular #4d4d4d */}
              <div style={S.bhxhCode}>Mã BHXH: 4217247030</div>
            </div>
          </div>

          {/* Divider Line 1 (stroke #948c8c 1px) */}
          <div style={S.divider} />

          {/* Info rows (fs=14, Regular, #616161) */}
          <div style={S.infoRow}>
            <span>Ngày sinh</span>
            <span>24/05/1999</span>
          </div>
          <div style={S.divider} />
          <div style={S.infoRow}>
            <span>ĐDCN/CCCD/Hộ chiếu</span>
            <span>040299010346</span>
          </div>
          <div style={S.divider} />
          <div style={S.infoRow}>
            <span>Số điện thoại</span>
            <span>0896511373</span>
          </div>
          <div style={S.divider} />
          <div style={S.infoRow}>
            <span>Địa chỉ</span>
            <span style={{ textAlign: 'right', maxWidth: '210px' }}>xóm Đông Lam, Xã Trường Lưu,</span>
          </div>
        </div>

        {/* Menu items */}
        {menuItems.map((item, i) => (
          <div
            key={i}
            style={{ ...S.menuItem, borderTop: i === 0 ? '1px solid #c8c5c5' : 'none' }}
            onClick={() => item.action ? onNavigate(item.action) : null}
          >
            <div style={S.menuLeft}>
              <div style={S.menuIcon}>{menuIcons[i]}</div>
              <span style={S.menuText}>{item.title}</span>
            </div>
            <ChevronRight />
          </div>
        ))}
      </div>

      {/* Bottom nav: Group 2 (402x65, fill #d9d9d9) */}
      <div style={S.bottomNav}>
        <div style={S.navItem} onClick={() => onNavigate('dashboard')}>
          <NavIcon1 />
          <span style={S.navLabelActive}>QL cá nhân</span>
        </div>
        <div style={S.navItem}>
          <NavIcon2 />
          <span style={S.navLabel}>Dịch vụ công</span>
        </div>
        <div style={S.navItem}>
          <NavIcon3 />
          <span style={S.navLabel}>Tra cứu</span>
        </div>
        <div style={S.navItem}>
          <NavIcon4 />
          <span style={S.navLabel}>Trợ giúp</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
