import React from 'react';
import avatarImg from '../assets/avatar.png';
import icQuatrinh from '../assets/dash_icon_quatrinh.png';
import icTheBhyt from '../assets/dash_avatar2.png';
import icPersonInfo from '../assets/dash_avatar.png';
import imgBottomNav from '../assets/dash_bottom_nav_img.png';

const Dashboard = ({ onOpenSidebar, onNavigate }) => {
  // Menu items with correct icon mapping from Figma
  const menuItems = [
    {
      title: 'THẺ BHYT',
      icon: icTheBhyt, // Thẻ bảo hiểm icon (card with cross)
      iconStyle: { width: '100%', height: '100%', objectFit: 'contain' },
      action: null
    },
    {
      title: 'QUÁ TRÌNH THAM GIA',
      icon: icQuatrinh, // Clock/history icon
      iconStyle: { width: '100%', height: '100%', objectFit: 'contain' },
      action: 'insurance-list'
    },
    {
      title: 'THÔNG TIN HƯỞNG',
      icon: icPersonInfo, // Person + info icon (top of combined image)
      iconStyle: { width: '100%', height: '200%', objectFit: 'cover', objectPosition: 'top center' },
      action: null
    },
    {
      title: 'SỔ KHÁM CHỮA BỆNH',
      icon: icPersonInfo, // Cross in circle icon (bottom of combined image)
      iconStyle: { width: '100%', height: '200%', objectFit: 'cover', objectPosition: 'bottom center' },
      action: null
    },
  ];

  return (
    <div style={{ width: '100%', height: '100%', background: '#ffffff', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', overflow: 'hidden' }}>

      {/* Header: 67px, blue #0069ad */}
      <div style={{ width: '100%', height: '67px', background: '#0069ad', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', flexShrink: 0, boxSizing: 'border-box' }}>
        {/* Hamburger menu (3 white bars 25x3) */}
        <div onClick={onOpenSidebar} style={{ cursor: 'pointer', padding: '6px' }}>
          <div style={{ width: '25px', height: '3px', background: '#fff', marginBottom: '5px', borderRadius: '1px' }} />
          <div style={{ width: '25px', height: '3px', background: '#fff', marginBottom: '5px', borderRadius: '1px' }} />
          <div style={{ width: '25px', height: '3px', background: '#fff', borderRadius: '1px' }} />
        </div>
        <span style={{ fontSize: '20px', color: '#ffffff' }}>QUẢN LÝ CÁ NHÂN</span>
        {/* Bell icon */}
        <div style={{ padding: '4px' }}>
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
            <path d="M18 8.5a7 7 0 0 0-14 0c0 4-1.8 6.5-2.8 8h19.6c-1-1.5-2.8-4-2.8-8z" fill="white"/>
            <path d="M13 20a2.2 2.2 0 0 1-4 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Profile card */}
        <div style={{ margin: '16px 19px 0', background: '#eaeff3', padding: '18px 16px 10px' }}>
          {/* Avatar row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '14px' }}>
            <div style={{ width: '62px', height: '62px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, boxShadow: '0 2px 4px rgba(0,0,0,0.25)', background: '#d9d9d9' }}>
              <img src={avatarImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ paddingTop: '10px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#000' }}>Nguyễn Hữu Hoàng</div>
              <div style={{ fontSize: '14px', color: '#4d4d4d', marginTop: '3px' }}>Mã BHXH: 4217247030</div>
            </div>
          </div>

          {/* Info rows with dividers */}
          {[
            ['Ngày sinh', '24/05/1999'],
            ['ĐDCN/CCCD/Hộ chiếu', '040299010346'],
            ['Số điện thoại', '0896511373'],
            ['Địa chỉ', 'xóm Đông Lam, Xã Trường Lưu,'],
          ].map(([label, value], i) => (
            <React.Fragment key={i}>
              <div style={{ height: '1px', background: '#948c8c' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: '14px', color: '#616161' }}>
                <span>{label}</span>
                <span style={{ textAlign: 'right' }}>{value}</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Menu items */}
        <div style={{ padding: '8px 0' }}>
          {menuItems.map((item, i) => (
            <div
              key={i}
              onClick={() => item.action ? onNavigate(item.action) : null}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 19px',
                borderBottom: '1px solid #c8c5c5',
                cursor: item.action ? 'pointer' : 'default'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                {/* Icon circle from Figma PNG */}
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={item.icon} alt="" style={item.iconStyle} />
                </div>
                <span style={{ fontSize: '17px', color: '#3f3f3f' }}>{item.title}</span>
              </div>
              {/* Chevron right */}
              <svg width="8" height="17" viewBox="0 0 8 17" fill="none">
                <path d="M1 1l6 7.5L1 16" stroke="#616161" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav: #d9d9d9, 65px, with bottom nav image from Figma */}
      <div style={{ width: '100%', height: '65px', background: '#d9d9d9', flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={imgBottomNav} alt="" style={{ width: '100%', height: '50px', objectFit: 'contain' }} />
        {/* Clickable zones overlaid */}
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

export default Dashboard;
