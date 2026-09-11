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

        {/* Dynamic Profile Card Box: x=19, y=87, 364x284 */}
        <div style={{
          position: 'absolute',
          left: `${(19 / W) * 100}%`,
          top: `${(87 / H) * 100}%`,
          width: `${(364 / W) * 100}%`,
          height: `${(284 / H) * 100}%`,
          background: '#eaeff3', // Matches Figma card background perfectly
          borderRadius: '12px',
          boxSizing: 'border-box',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden'
        }}>
          {/* Avatar Circle: x=43, y=108, w=62, h=62 (relative left=24, top=21) */}
          <div style={{
            position: 'absolute',
            left: `${(24 / 364) * 100}%`,
            top: `${(21 / 284) * 100}%`,
            width: `${(62 / 364) * 100}%`,
            aspectRatio: '1 / 1',
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

          {/* Full Name: x=120, y=118, w=224, h=17 (relative left=101, top=31) */}
          <div style={{
            position: 'absolute',
            left: `${(101 / 364) * 100}%`,
            top: `${(31 / 284) * 100}%`,
            width: `${(224 / 364) * 100}%`,
            height: `${(17 / 284) * 100}%`,
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

          {/* BHXH Code: x=120, y=144, w=224, h=17 (relative left=101, top=57) */}
          <div style={{
            position: 'absolute',
            left: `${(101 / 364) * 100}%`,
            top: `${(57 / 284) * 100}%`,
            width: `${(224 / 364) * 100}%`,
            height: `${(17 / 284) * 100}%`,
            fontSize: '14px',
            fontWeight: 400,
            color: '#4d4d4d',
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            alignItems: 'center'
          }}>
            Mã BHXH: {currentAccount?.bhxhCode || '4217247030'}
          </div>

          {/* Line 1 (Divider under Avatar): relative top=94 */}
          <div style={{
            position: 'absolute',
            left: `${(20 / 364) * 100}%`,
            right: `${(20 / 364) * 100}%`,
            top: `${(94 / 284) * 100}%`,
            height: '1px',
            background: '#948c8c',
            opacity: 0.35
          }} />

          {/* ──── Field 1: Ngày sinh (relative top=105) ──── */}
          <div style={{
            position: 'absolute',
            left: `${(23 / 364) * 100}%`,
            top: `${(105 / 284) * 100}%`,
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif'
          }}>
            Ngày sinh
          </div>
          <div style={{
            position: 'absolute',
            right: `${(22 / 364) * 100}%`,
            top: `${(105 / 284) * 100}%`,
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right'
          }}>
            {currentAccount?.birthday || '24/05/1999'}
          </div>

          {/* Line 2 (Divider 2): relative top=128 */}
          <div style={{
            position: 'absolute',
            left: `${(20 / 364) * 100}%`,
            right: `${(20 / 364) * 100}%`,
            top: `${(128 / 284) * 100}%`,
            height: '1px',
            background: '#948c8c',
            opacity: 0.35
          }} />

          {/* ──── Field 2: ĐDCN/CCCD/Hộ chiếu (relative top=139) ──── */}
          <div style={{
            position: 'absolute',
            left: `${(23 / 364) * 100}%`,
            top: `${(139 / 284) * 100}%`,
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif'
          }}>
            ĐDCN/CCCD/Hộ chiếu
          </div>
          <div style={{
            position: 'absolute',
            right: `${(22 / 364) * 100}%`,
            top: `${(139 / 284) * 100}%`,
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right'
          }}>
            {currentAccount?.cccd || '040299010346'}
          </div>

          {/* Line 3 (Divider 3): relative top=162 */}
          <div style={{
            position: 'absolute',
            left: `${(20 / 364) * 100}%`,
            right: `${(20 / 364) * 100}%`,
            top: `${(162 / 284) * 100}%`,
            height: '1px',
            background: '#948c8c',
            opacity: 0.35
          }} />

          {/* ──── Field 3: Số điện thoại (relative top=173) ──── */}
          <div style={{
            position: 'absolute',
            left: `${(23 / 364) * 100}%`,
            top: `${(173 / 284) * 100}%`,
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif'
          }}>
            Số điện thoại
          </div>
          <div style={{
            position: 'absolute',
            right: `${(22 / 364) * 100}%`,
            top: `${(173 / 284) * 100}%`,
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right'
          }}>
            {currentAccount?.phone || '0896511373'}
          </div>

          {/* Line 4 (Divider 4): relative top=196 */}
          <div style={{
            position: 'absolute',
            left: `${(20 / 364) * 100}%`,
            right: `${(20 / 364) * 100}%`,
            top: `${(196 / 284) * 100}%`,
            height: '1px',
            background: '#948c8c',
            opacity: 0.35
          }} />

          {/* ──── Field 4: Địa chỉ (relative top=205) ──── */}
          <div style={{
            position: 'absolute',
            left: `${(23 / 364) * 100}%`,
            top: `${(205 / 284) * 100}%`,
            fontSize: '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif'
          }}>
            Địa chỉ
          </div>
          <div style={{
            position: 'absolute',
            right: `${(20 / 364) * 100}%`,
            top: `${(205 / 284) * 100}%`,
            width: `${(262 / 364) * 100}%`,
            maxHeight: `${(72 / 284) * 100}%`,
            overflowY: 'auto',
            fontSize: (currentAccount?.address?.length || 0) > 55 ? '12.5px' : '13.5px',
            fontWeight: 400,
            color: '#616161',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right',
            lineHeight: '1.25',
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
