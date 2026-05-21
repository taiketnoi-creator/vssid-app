import React from 'react';
import avatarImg from '../assets/ic_dash_avatar.png';
import icMenu12 from '../assets/dash_avatar.png';
import icQuatrinh from '../assets/dash_icon_quatrinh.png';
import icSokham from '../assets/dash_avatar2.png';
import imgBottomNav from '../assets/ic_dash_bottomnav.png';
import icBell from '../assets/ic_dash_bell.png';
import icHamburger from '../assets/ic_dash_hamburger.png';

const Dashboard = ({ onOpenSidebar, onNavigate }) => {
  return (
    <div style={{ width: '100%', height: '100%', background: '#ffffff', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', overflow: 'hidden' }}>

      {/* Header: Rectangle 7 (402x67, fill #0069ad) */}
      <div style={{ width: '100%', height: '67px', background: '#0069ad', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', flexShrink: 0, boxSizing: 'border-box' }}>
        {/* Hamburger (Group 1, 8:39): 25x18, three white bars from PNG */}
        <div onClick={onOpenSidebar} style={{ cursor: 'pointer', padding: '6px' }}>
          <img src={icHamburger} alt="" style={{ width: '25px', height: '18px', objectFit: 'contain' }} />
        </div>
        <span style={{ fontSize: '20px', color: '#ffffff' }}>QUẢN LÝ CÁ NHÂN</span>
        {/* Bell (8:40 Vector): 24x26, white from PNG */}
        <div style={{ padding: '4px' }}>
          <img src={icBell} alt="" style={{ width: '24px', height: '26px', objectFit: 'contain' }} />
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Profile card: Rectangle 11 (8:42), background #eaeff3 */}
        <div style={{ margin: '16px 19px 0', background: '#eaeff3', padding: '18px 16px 10px' }}>
          {/* Avatar row: Ellipse 6 (73:237) 62x62 circle */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '14px' }}>
            <div style={{ width: '62px', height: '62px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, boxShadow: '0 2px 4px rgba(0,0,0,0.25)', background: '#d9d9d9' }}>
              <img src={avatarImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ paddingTop: '10px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#000' }}>Nguyễn Hữu Hoàng</div>
              <div style={{ fontSize: '14px', color: '#4d4d4d', marginTop: '3px' }}>Mã BHXH: 4217247030</div>
            </div>
          </div>

          {/* Info rows */}
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

        {/* Menu items: using Figma PNG icons directly */}
        <div style={{ padding: '8px 0' }}>
          {/* Row 1: THẺ BHYT - icon is TOP half of "4 1" (9:55, 75x129) = dash_avatar.png contains person+info on top, cross on bottom */}
          {[
            { title: 'THẺ BHYT', icon: icSokham, iconStyle: { width: '42px', height: '42px', objectFit: 'contain' } },
            { title: 'QUÁ TRÌNH THAM GIA', icon: icQuatrinh, iconStyle: { width: '42px', height: '42px', objectFit: 'contain' }, action: 'insurance-list' },
            { title: 'THÔNG TIN HƯỞNG', icon: icMenu12, iconStyle: { width: '42px', height: '84px', objectFit: 'cover', objectPosition: 'top center' } },
            { title: 'SỔ KHÁM CHỮA BỆNH', icon: icMenu12, iconStyle: { width: '42px', height: '84px', objectFit: 'cover', objectPosition: 'bottom center' } },
          ].map((item, i) => (
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
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={item.icon} alt="" style={item.iconStyle} />
                </div>
                <span style={{ fontSize: '17px', color: '#3f3f3f' }}>{item.title}</span>
              </div>
              {/* Chevron from Figma: Vector 3-6 are simple arrows */}
              <svg width="8" height="17" viewBox="0 0 8 17" fill="none">
                <path d="M1 1l6 7.5L1 16" stroke="#616161" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav: Group 2 (9:68) = Rectangle 12 (fill #d9d9d9) 402x65 + "3 1" (9:56) image 402x50 */}
      <div style={{ width: '100%', height: '65px', background: '#d9d9d9', flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

export default Dashboard;
