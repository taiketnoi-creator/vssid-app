import React from 'react';
import frameDashboard from '../assets/frame_dashboard.png';

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
        top: 'var(--safe-area-top)',
        left: 'var(--safe-area-left)',
        right: 'var(--safe-area-right)',
        width: 'calc(100% - var(--safe-area-left) - var(--safe-area-right))',
        height: 'calc(100% - var(--safe-area-top) - var(--safe-area-bottom))',
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

        {/* Dynamic Profile Card Box: x=19, y=87, 364x276 */}
        <div style={{
          position: 'absolute',
          left: '19px',
          top: '87px',
          width: '364px',
          height: '276px',
          background: '#eaeff3', // Matches Figma card background perfectly
          borderRadius: '12px',
          boxSizing: 'border-box',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden'
        }}>
          {/* Avatar Circle: x=43, y=108, w=62, h=62 (relative x=24, y=21) */}
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

          {/* Full Name: x=120, y=118, w=224, h=17 (relative x=101, y=31) */}
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

          {/* BHXH Code: x=120, y=144, w=224, h=17 (relative x=101, y=57) */}
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

          {/* Line 1 (Divider under Avatar): absolute y=182 (relative y=95) */}
          <div style={{
            position: 'absolute',
            left: '20px',
            right: '20px',
            top: '95px',
            height: '1px',
            background: '#948c8c',
            opacity: 0.35
          }} />

          {/* ──── Field 1: Ngày sinh (y=197, relative y=110) ──── */}
          <div style={{
            position: 'absolute',
            left: '23px',
            top: '110px',
            fontSize: '14px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif'
          }}>
            Ngày sinh
          </div>
          <div style={{
            position: 'absolute',
            right: '22px',
            top: '110px',
            fontSize: '14px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right'
          }}>
            {currentAccount?.birthday || '24/05/1999'}
          </div>

          {/* Line 3 (Divider 2): absolute y=224 (relative y=137) */}
          <div style={{
            position: 'absolute',
            left: '20px',
            right: '20px',
            top: '137px',
            height: '1px',
            background: '#948c8c',
            opacity: 0.35
          }} />

          {/* ──── Field 2: ĐDCN/CCCD/Hộ chiếu (y=235, relative y=148) ──── */}
          <div style={{
            position: 'absolute',
            left: '23px',
            top: '148px',
            fontSize: '14px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif'
          }}>
            ĐDCN/CCCD/Hộ chiếu
          </div>
          <div style={{
            position: 'absolute',
            right: '22px',
            top: '148px',
            fontSize: '14px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right'
          }}>
            {currentAccount?.cccd || '040299010346'}
          </div>

          {/* Line 4 (Divider 3): absolute y=262 (relative y=175) */}
          <div style={{
            position: 'absolute',
            left: '20px',
            right: '20px',
            top: '175px',
            height: '1px',
            background: '#948c8c',
            opacity: 0.35
          }} />

          {/* ──── Field 3: Số điện thoại (y=273, relative y=186) ──── */}
          <div style={{
            position: 'absolute',
            left: '23px',
            top: '186px',
            fontSize: '14px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif'
          }}>
            Số điện thoại
          </div>
          <div style={{
            position: 'absolute',
            right: '22px',
            top: '186px',
            fontSize: '14px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right'
          }}>
            {currentAccount?.phone || '0896511373'}
          </div>

          {/* Line 5 (Divider 4): absolute y=300 (relative y=213) */}
          <div style={{
            position: 'absolute',
            left: '20px',
            right: '20px',
            top: '213px',
            height: '1px',
            background: '#948c8c',
            opacity: 0.35
          }} />

          {/* ──── Field 4: Địa chỉ (y=308, relative y=221) ──── */}
          <div style={{
            position: 'absolute',
            left: '23px',
            top: '221px',
            fontSize: '14px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif'
          }}>
            Địa chỉ
          </div>
          <div style={{
            position: 'absolute',
            right: '22px',
            top: '221px',
            width: '208px',
            fontSize: '14px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right',
            lineHeight: '1.2',
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
            top: '378px',
            width: '100%',
            height: '65px',
            cursor: 'pointer'
          }}
        />

        {/* QUÁ TRÌNH THAM GIA Row Hotspot (y=443 to 508) */}
        <div
          onClick={() => onNavigate('insurance-list', { transition: 'slide', direction: 'left' })}
          style={{
            position: 'absolute',
            left: 0,
            top: '443px',
            width: '100%',
            height: '65px',
            cursor: 'pointer'
          }}
        />

        {/* THÔNG TIN HƯỞNG Row Hotspot (y=508 to 573) */}
        <div
          onClick={() => alert('Tính năng Thông tin hưởng đang phát triển!')}
          style={{
            position: 'absolute',
            left: 0,
            top: '508px',
            width: '100%',
            height: '65px',
            cursor: 'pointer'
          }}
        />

        {/* SỔ KHÁM CHỮA BỆNH Row Hotspot (y=573 to 638) */}
        <div
          onClick={() => alert('Tính năng Sổ khám chữa bệnh đang phát triển!')}
          style={{
            position: 'absolute',
            left: 0,
            top: '573px',
            width: '100%',
            height: '65px',
            cursor: 'pointer'
          }}
        />

        {/* 4. Bottom Nav Bar Zone Hotspots (y=823 to 874) */}
        <div style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '65px',
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
