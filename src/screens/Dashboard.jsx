import React from 'react';
import avatarImg from '../assets/avatar.png';
import icQuatrinh from '../assets/dash_icon_quatrinh.png';
import icSokham from '../assets/dash_avatar2.png';
import icMenuCol from '../assets/dash_avatar.png';
import imgBottomNav from '../assets/dash_bottom_nav_img.png';

const Dashboard = ({ onOpenSidebar, onNavigate }) => {
  return (
    <div style={{ width: '100%', height: '100%', background: '#ffffff', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', overflow: 'hidden' }}>

      {/* Header 67px #0069ad */}
      <div style={{ width: '100%', height: '67px', background: '#0069ad', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px', flexShrink: 0 }}>
        {/* Hamburger */}
        <div onClick={onOpenSidebar} style={{ cursor: 'pointer', padding: '6px' }}>
          <div style={{ width: '25px', height: '3px', background: '#fff', marginBottom: '5px' }} />
          <div style={{ width: '25px', height: '3px', background: '#fff', marginBottom: '5px' }} />
          <div style={{ width: '25px', height: '3px', background: '#fff' }} />
        </div>
        <span style={{ fontSize: '20px', color: '#ffffff', fontFamily: 'Inter, sans-serif' }}>QUẢN LÝ CÁ NHÂN</span>
        {/* Bell */}
        <div style={{ padding: '4px' }}>
          <svg width="24" height="26" viewBox="0 0 24 26" fill="none">
            <path d="M20 9.5a8 8 0 0 0-16 0c0 4.5-2 7-3 8.5h22c-1-1.5-3-4-3-8.5z" fill="white"/>
            <path d="M14 22a2.5 2.5 0 0 1-4 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Profile card #eaeff3 */}
        <div style={{ margin: '20px 19px 0', background: '#eaeff3', padding: '18px 18px 12px' }}>
          {/* Avatar + Name */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '14px' }}>
            <div style={{ width: '62px', height: '62px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, boxShadow: '0 2px 4px rgba(0,0,0,0.25)', background: '#d9d9d9' }}>
              <img src={avatarImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ paddingTop: '8px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#000000' }}>Nguyễn Hữu Hoàng</div>
              <div style={{ fontSize: '14px', color: '#4d4d4d', marginTop: '2px' }}>Mã BHXH: 4217247030</div>
            </div>
          </div>

          {/* Profile outline border (Vector 1 was 320x114 stroke #948c8c) - just use divider lines */}
          <div style={{ height: '1px', background: '#948c8c' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: '14px', color: '#616161' }}>
            <span>Ngày sinh</span><span>24/05/1999</span>
          </div>
          <div style={{ height: '1px', background: '#948c8c' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: '14px', color: '#616161' }}>
            <span>ĐDCN/CCCD/Hộ chiếu</span><span>040299010346</span>
          </div>
          <div style={{ height: '1px', background: '#948c8c' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: '14px', color: '#616161' }}>
            <span>Số điện thoại</span><span>0896511373</span>
          </div>
          <div style={{ height: '1px', background: '#948c8c' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: '14px', color: '#616161' }}>
            <span>Địa chỉ</span><span style={{ textAlign: 'right' }}>xóm Đông Lam, Xã Trường Lưu,</span>
          </div>
        </div>

        {/* Menu items */}
        {[
          { icon: icMenuCol, iconStyle: { width: '40px', height: '40px', objectFit: 'cover', objectPosition: 'top' }, title: 'THẺ BHYT', action: null },
          { icon: icQuatrinh, iconStyle: { width: '40px', height: '40px', objectFit: 'contain' }, title: 'QUÁ TRÌNH THAM GIA', action: 'insurance-list' },
          { icon: icMenuCol, iconStyle: { width: '40px', height: '40px', objectFit: 'cover', objectPosition: 'bottom' }, title: 'THÔNG TIN HƯỞNG', action: null },
          { icon: icSokham, iconStyle: { width: '40px', height: '40px', objectFit: 'contain' }, title: 'SỔ KHÁM CHỮA BỆNH', action: null },
        ].map((item, i) => (
          <div
            key={i}
            onClick={() => item.action ? onNavigate(item.action) : null}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px 19px', borderBottom: '1px solid #948c8c',
              cursor: item.action ? 'pointer' : 'default'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <img src={item.icon} alt="" style={item.iconStyle} />
              </div>
              <span style={{ fontSize: '17px', color: '#3f3f3f', fontFamily: 'Inter, sans-serif' }}>{item.title}</span>
            </div>
            <svg width="8" height="17" viewBox="0 0 8 17" fill="none">
              <path d="M1 1l6 7.5L1 16" stroke="#616161" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Bottom nav: gray bg #d9d9d9, 65px, with nav image inside */}
      <div style={{ width: '100%', height: '65px', background: '#d9d9d9', flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
        <img src={imgBottomNav} alt="" style={{ width: '100%', height: '50px', objectFit: 'contain' }} />
        {/* Clickable zones */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
          <div onClick={() => onNavigate('dashboard')} style={{ flex: 1, cursor: 'pointer' }} />
          <div onClick={() => alert('Dịch vụ công')} style={{ flex: 1, cursor: 'pointer' }} />
          <div onClick={() => alert('Tra cứu')} style={{ flex: 1, cursor: 'pointer' }} />
          <div onClick={() => alert('Trợ giúp')} style={{ flex: 1, cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
