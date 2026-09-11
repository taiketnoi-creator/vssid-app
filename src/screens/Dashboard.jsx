import React, { useState, useRef, useLayoutEffect } from 'react';
import frameDashboard from '../assets/frame_dashboard.png';

const W = 402;
const H = 874;

const Dashboard = ({ currentAccount, onOpenSidebar, onNavigate }) => {
  const addressRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(276);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (addressRef.current) {
        const h = addressRef.current.offsetHeight;
        // Base distance from card top to address is 203px + address height + 18px bottom padding
        const needed = 203 + h + 18;
        setCardHeight(Math.max(276, needed));
      }
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    if (addressRef.current) {
      observer.observe(addressRef.current);
    }
    return () => observer.disconnect();
  }, [currentAccount?.address]);

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
      background: '#ffffff',
      fontFamily: 'Inter, sans-serif',
      boxSizing: 'border-box'
    }}>
      {/* 1. Flawless 100% Figma Frame Background */}
      <img
        src={frameDashboard}
        alt="Dashboard Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          zIndex: 1,
          pointerEvents: 'none'
        }}
        draggable={false}
      />

      {/* 2. Interactive Overlay Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10
      }}>
        {/* Hamburger Menu Hotspot: x=18, y=34, w=25, h=18 */}
        <button
          onClick={onOpenSidebar}
          style={{
            position: 'absolute',
            left: `${(18 / W) * 100}%`,
            top: `${(34 / H) * 100}%`,
            width: `${(30 / W) * 100}%`,
            height: `${(25 / H) * 100}%`,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer'
          }}
          aria-label="Menu"
        />

        {/* Notification Bell Hotspot: x=359, y=32, w=24, h=26 */}
        <button
          onClick={() => alert('Không có thông báo mới!')}
          style={{
            position: 'absolute',
            left: `${(350 / W) * 100}%`,
            top: `${(30 / H) * 100}%`,
            width: `${(35 / W) * 100}%`,
            height: `${(35 / H) * 100}%`,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer'
          }}
          aria-label="Notifications"
        />

        {/* Dynamic Profile Card Box: x=19, y=87, 364x(cardHeight) */}
        <div style={{
          position: 'absolute',
          left: `${(19 / W) * 100}%`,
          top: `${(87 / H) * 100}%`,
          width: `${(364 / W) * 100}%`,
          height: `${cardHeight}px`,
          background: '#eaeff3', // Matches Figma card background perfectly
          borderRadius: '12px 12px 0 0',
          boxSizing: 'border-box',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          transition: 'height 0.2s ease-out'
        }}>
          {/* Avatar Circle: left=24px, top=21px, 62x62 */}
          <div style={{
            position: 'absolute',
            left: '24px',
            top: '21px',
            width: '62px',
            height: '62px',
            borderRadius: '50%',
            background: '#ffffff',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
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

          {/* Full Name: left=101px, top=31px, w=224px, h=17px */}
          <div style={{
            position: 'absolute',
            left: '101px',
            top: '31px',
            width: '224px',
            height: '17px',
            fontSize: '14px',
            fontWeight: 700,
            color: '#000000',
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'flex',
            alignItems: 'center'
          }}>
            {currentAccount?.fullName || 'Nguyễn Hữu Hoàng'}
          </div>

          {/* BHXH Code: left=101px, top=57px, w=224px, h=17px */}
          <div style={{
            position: 'absolute',
            left: '101px',
            top: '57px',
            width: '224px',
            height: '17px',
            fontSize: '14px',
            fontWeight: 400,
            color: '#4d4d4d',
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            alignItems: 'center'
          }}>
            Mã BHXH: {currentAccount?.bhxhCode || '4217247030'}
          </div>

          {/* Line 1 (Divider under Avatar): top=94px */}
          <div style={{
            position: 'absolute',
            left: '20px',
            right: '20px',
            top: '94px',
            height: '1px',
            background: '#948c8c',
            opacity: 0.35
          }} />

          {/* ──── Field 1: Ngày sinh (top=105px) ──── */}
          <div style={{
            position: 'absolute',
            left: '23px',
            top: '105px',
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif'
          }}>
            Ngày sinh
          </div>
          <div style={{
            position: 'absolute',
            right: '22px',
            top: '105px',
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right'
          }}>
            {currentAccount?.birthday || '24/05/1999'}
          </div>

          {/* Line 2 (Divider 2): top=128px */}
          <div style={{
            position: 'absolute',
            left: '20px',
            right: '20px',
            top: '128px',
            height: '1px',
            background: '#948c8c',
            opacity: 0.35
          }} />

          {/* ──── Field 2: ĐDCN/CCCD/Hộ chiếu (top=139px) ──── */}
          <div style={{
            position: 'absolute',
            left: '23px',
            top: '139px',
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif'
          }}>
            ĐDCN/CCCD/Hộ chiếu
          </div>
          <div style={{
            position: 'absolute',
            right: '22px',
            top: '139px',
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right'
          }}>
            {currentAccount?.cccd || '040299010346'}
          </div>

          {/* Line 3 (Divider 3): top=162px */}
          <div style={{
            position: 'absolute',
            left: '20px',
            right: '20px',
            top: '162px',
            height: '1px',
            background: '#948c8c',
            opacity: 0.35
          }} />

          {/* ──── Field 3: Số điện thoại (top=173px) ──── */}
          <div style={{
            position: 'absolute',
            left: '23px',
            top: '173px',
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif'
          }}>
            Số điện thoại
          </div>
          <div style={{
            position: 'absolute',
            right: '22px',
            top: '173px',
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right'
          }}>
            {currentAccount?.phone || '0896511373'}
          </div>

          {/* Line 4 (Divider 4): top=196px */}
          <div style={{
            position: 'absolute',
            left: '20px',
            right: '20px',
            top: '196px',
            height: '1px',
            background: '#948c8c',
            opacity: 0.35
          }} />

          {/* ──── Field 4: Địa chỉ (top=203px) ──── */}
          <div style={{
            position: 'absolute',
            left: '23px',
            top: '203px',
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif'
          }}>
            Địa chỉ
          </div>
          <div 
            ref={addressRef}
            style={{
              position: 'absolute',
              right: '20px',
              top: '203px',
              width: '215px',
              fontSize: '13px',
              fontWeight: 400,
              color: '#616161',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'right',
              lineHeight: '1.35',
              whiteSpace: 'pre-line',
              wordBreak: 'break-word'
            }}>
            {currentAccount?.address || 'xóm Đông Lam, Xã Trường Lưu,\nHuyện Lộc Hà, Tỉnh Hà Tĩnh'}
          </div>
        </div>

        {/* 3. Transparent Menu Row Hotspots (y=378 to y=642) */}
        {/* THẺ BHYT Row Hotspot (y=378 to 443) */}
        <div
          onClick={() => alert('Tính năng Thẻ BHYT đang phát triển!')}
          style={{
            position: 'absolute',
            left: 0,
            top: `${(378 / H) * 100}%`,
            width: '100%',
            height: `${(65 / H) * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* QUÁ TRÌNH THAM GIA Row Hotspot (y=443 to 508) */}
        <div
          onClick={() => onNavigate('insurance-list', { transition: 'slide', direction: 'left' })}
          style={{
            position: 'absolute',
            left: 0,
            top: `${(443 / H) * 100}%`,
            width: '100%',
            height: `${(65 / H) * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* THÔNG TIN HƯỞNG Row Hotspot (y=508 to 573) */}
        <div
          onClick={() => alert('Tính năng Thông tin hưởng đang phát triển!')}
          style={{
            position: 'absolute',
            left: 0,
            top: `${(508 / H) * 100}%`,
            width: '100%',
            height: `${(65 / H) * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* SỔ KHÁM CHỮA BỆNH Row Hotspot (y=573 to 638) */}
        <div
          onClick={() => alert('Tính năng Sổ khám chữa bệnh đang phát triển!')}
          style={{
            position: 'absolute',
            left: 0,
            top: `${(573 / H) * 100}%`,
            width: '100%',
            height: `${(65 / H) * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* 4. Bottom Nav Bar Zone Hotspots (y=823 to 874) */}
        <div style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: `${(65 / H) * 100}%`,
          display: 'flex'
        }}>
          {/* Column 1: Trang chủ */}
          <div
            onClick={() => onNavigate('dashboard')}
            style={{ flex: 1, cursor: 'pointer' }}
          />
          {/* Column 2: Dịch vụ công */}
          <div
            onClick={() => alert('Dịch vụ công đang phát triển!')}
            style={{ flex: 1, cursor: 'pointer' }}
          />
          {/* Column 3: Tra cứu */}
          <div
            onClick={() => alert('Tra cứu trực tuyến đang phát triển!')}
            style={{ flex: 1, cursor: 'pointer' }}
          />
          {/* Column 4: Trợ giúp / Sidebar */}
          <div
            onClick={onOpenSidebar}
            style={{ flex: 1, cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
