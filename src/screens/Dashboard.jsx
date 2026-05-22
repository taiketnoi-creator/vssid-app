import React from 'react';

// Import pristine individual assets from Figma
import dashIconHamburger from '../assets/dash_icon_hamburger.png';
import dashIconBell from '../assets/dash_icon_bell.png';
import dashBottomNavImg from '../assets/dash_bottom_nav_img.png';

// Menu icons
import dashAvatar2 from '../assets/dash_avatar2.png'; // BHYT Icon (from Figma crop)
import icDashQuatrinh from '../assets/ic_dash_quatrinh.png'; // Quá Trình Icon
import icDashMenuCol1 from '../assets/ic_dash_menu_col1.png'; // Thông Tin Hưởng Icon (red cross / circle)
import icDashSokham from '../assets/ic_dash_sokham.png'; // Sổ Khám Icon

// Figma reference dimensions
const W = 402;
const H = 874;

const Dashboard = ({ currentAccount, onOpenSidebar, onNavigate }) => {
  const fields = [
    { label: 'Ngày sinh', value: currentAccount?.birthday || '24/05/1999' },
    { label: 'ĐDCN/CCCD/Hộ chiếu', value: currentAccount?.cccd || '040299010346' },
    { label: 'Số điện thoại', value: currentAccount?.phone || '0896511373' },
    { label: 'Địa chỉ', value: currentAccount?.address || 'xóm Đông Lam, Xã Trường Lưu,\nHuyện Lộc Hà, Tỉnh Hà Tĩnh' }
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: '#ffffff', // 100% Figma frame background is white
      fontFamily: 'Inter, sans-serif',
      boxSizing: 'border-box'
    }}>
      {/* 1. HEADER (Figma Rectangle 7: height 67px, linear-gradient) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '67px',
        background: 'linear-gradient(90deg, #01aef2 0%, #0073c6 100%)',
        zIndex: 20
      }}>
        {/* Hamburger Menu (Group 1, 8:39): x=18, y=34, 25x18 */}
        <button
          onClick={onOpenSidebar}
          style={{
            position: 'absolute',
            left: '18px',
            top: '34px',
            width: '25px',
            height: '18px',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img src={dashIconHamburger} alt="Menu" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </button>

        {/* Title: "QUẢN LÝ CÁ NHÂN" (8:35): x=108, y=34, fontSize 20, Regular */}
        <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '34px',
          height: '24px',
          margin: '0 auto',
          color: '#ffffff',
          fontSize: '20px',
          fontWeight: 400,
          textAlign: 'center',
          lineHeight: '24px',
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, sans-serif'
        }}>
          QUẢN LÝ CÁ NHÂN
        </div>

        {/* Bell Icon (Vector, 8:40): x=359, y=32, 24x26 */}
        <button
          onClick={() => alert('Không có thông báo mới!')}
          style={{
            position: 'absolute',
            right: '19px',
            top: '32px',
            width: '24px',
            height: '26px',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img src={dashIconBell} alt="Notifications" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </button>
      </div>

      {/* 2. PROFILE CARD (Rectangle 11: x=19, y=87, 364x276, background #eaeff3) */}
      <div style={{
        position: 'absolute',
        left: '19px',
        right: '19px',
        top: '87px',
        height: '276px',
        background: '#eaeff3', // Figma color: #eaeff3
        borderRadius: '12px',
        boxSizing: 'border-box',
        padding: '21px 20px 20px 20px', // Exact Figma top-padding (108 - 87 = 21px)
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)'
      }}>
        {/* Row: Avatar Circle (Ellipse 6: 62x62 at x=43, y=108 -> local x=24, y=21) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '62px' }}>
          {/* Avatar frame */}
          <div style={{
            width: '62px',
            height: '62px',
            borderRadius: '50%',
            background: '#ffffff',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            flexShrink: 0
          }}>
            {currentAccount?.avatar ? (
              <img src={currentAccount.avatar} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                background: '#0069ad',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {currentAccount?.fullName ? currentAccount.fullName.split(' ').pop().slice(0, 2).toUpperCase() : 'HN'}
              </div>
            )}
          </div>

          {/* Name & BHXH Code info */}
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', minWidth: 0 }}>
            {/* Nguyễn Hữu Hoàng (9:45): 14px Bold, color #000000 */}
            <span style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#000000',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {currentAccount?.fullName || 'Nguyễn Hữu Hoàng'}
            </span>
            {/* Mã BHXH: 4217247030 (9:46): 14px Regular, color #4d4d4d */}
            <span style={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#4d4d4d',
              marginTop: '5px'
            }}>
              Mã BHXH: {currentAccount?.bhxhCode || '4217247030'}
            </span>
          </div>
        </div>

        {/* Separator line (Vector 1: y=185 -> local y=98, so margin-top = 15px, margin-bottom = 12px) */}
        <div style={{ height: '0.5px', background: '#948c8c', opacity: 0.6, marginTop: '15px', marginBottom: '12px' }} />

        {/* Info Fields rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '21px' }}>
          {fields.map((field, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', minHeight: '17px' }}>
              {/* Label (x=42): 14px Regular, color #616161 */}
              <span style={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#616161',
                lineHeight: '1.2',
                flexShrink: 0
              }}>
                {field.label}
              </span>
              {/* Value (x=283/257/279/153): 14px Regular, color #616161 */}
              <span style={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#616161',
                lineHeight: '1.2',
                textAlign: 'right',
                maxWidth: '65%',
                wordBreak: 'break-word',
                whiteSpace: 'pre-line'
              }}>
                {field.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. MENU ITEMS LIST (y=378 to y=650) */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '378px',
        width: '100%',
        height: 'calc(100% - 378px - 65px)',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        zIndex: 10,
        overflowY: 'auto'
      }} className="scrollbar-none">
        {/* Menu rows */}
        {[
          {
            label: 'THẺ BHYT',
            icon: dashAvatar2,
            action: () => alert('Tính năng Thẻ BHYT đang phát triển!'),
            imgStyle: { objectFit: 'contain' }
          },
          {
            label: 'QUÁ TRÌNH THAM GIA',
            icon: icDashQuatrinh,
            action: () => onNavigate('insurance-list', { transition: 'slide', direction: 'left' }),
            imgStyle: { objectFit: 'contain' }
          },
          {
            label: 'THÔNG TIN HƯỞNG',
            icon: icDashMenuCol1,
            action: () => alert('Tính năng Thông tin hưởng đang phát triển!'),
            imgStyle: { width: '100%', height: '200%', objectFit: 'fill' }
          },
          {
            label: 'SỔ KHÁM CHỮA BỆNH',
            icon: icDashSokham,
            action: () => alert('Tính năng Sổ khám chữa bệnh đang phát triển!'),
            imgStyle: { objectFit: 'contain' }
          }
        ].map((item, idx) => (
          <div
            key={idx}
            onClick={item.action}
            style={{
              position: 'relative',
              width: '100%',
              height: '65px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
          >
            {/* Left Icon (Figma x=19, size ~40x40) */}
            <div style={{
              position: 'absolute',
              left: '19px',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img 
                src={item.icon} 
                alt="" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  ...item.imgStyle 
                }} 
              />
            </div>

            {/* Menu Label (Figma x=87, y=405/468/532/598): 17px Regular, color #3f3f3f */}
            <span style={{
              position: 'absolute',
              left: '87px',
              fontSize: '17px',
              fontWeight: 400,
              color: '#3f3f3f',
              fontFamily: 'Inter, sans-serif'
            }}>
              {item.label}
            </span>

            {/* Chevron Right (Figma x=368, size 8x17) */}
            <div style={{
              position: 'absolute',
              right: '26px',
              width: '8px',
              height: '17px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="8" height="17" viewBox="0 0 8 17" fill="none">
                <path d="M1 1.5L6.5 8.5L1 15.5" stroke="#616161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Separator line at bottom of row (Figma Lines: y=448/513/577/642, x=84, w=278) */}
            <div style={{
              position: 'absolute',
              left: '84px',
              bottom: 0,
              width: '278px',
              height: '1px',
              background: '#948c8c',
              opacity: 0.4
            }} />
          </div>
        ))}
      </div>

      {/* 4. BOTTOM NAV BAR (Group 2: y=823, h=65, bg #ffffff) */}
      <div style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '65px',
        background: '#ffffff', // Clean white background blends with dashBottomNavImg
        zIndex: 20,
        boxSizing: 'border-box',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
      }}>
        {/* Bottom Nav Icons strip (3 1: y=824, height 50px) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50px',
          pointerEvents: 'none'
        }}>
          <img src={dashBottomNavImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
        </div>

        {/* 4 Equal clickable zones for the nav bar */}
        <div style={{
          display: 'flex',
          width: '100%',
          height: '100%'
        }}>
          {/* Column 1: Trang chủ / Quản lý cá nhân */}
          <div
            onClick={() => onNavigate('dashboard')}
            style={{ flex: 1, cursor: 'pointer', zIndex: 30 }}
          />
          {/* Column 2: Dịch vụ công */}
          <div
            onClick={() => alert('Dịch vụ công đang phát triển!')}
            style={{ flex: 1, cursor: 'pointer', zIndex: 30 }}
          />
          {/* Column 3: Tra cứu */}
          <div
            onClick={() => alert('Tra cứu trực tuyến đang phát triển!')}
            style={{ flex: 1, cursor: 'pointer', zIndex: 30 }}
          />
          {/* Column 4: Trợ giúp / Cài đặt */}
          <div
            onClick={() => onOpenSidebar()} // Opens sidebar as options drawer
            style={{ flex: 1, cursor: 'pointer', zIndex: 30 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

