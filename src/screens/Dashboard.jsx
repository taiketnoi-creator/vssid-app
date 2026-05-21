import React from 'react';
import frameDashboard from '../assets/frame_dashboard.png';

// Figma frame: 402x874
const W = 402;
const H = 874;

const Dashboard = ({ currentAccount, onOpenSidebar, onNavigate }) => {
  const profileDetails = [
    { label: 'Ngày sinh', value: currentAccount?.birthday || '24/05/1999' },
    { label: 'ĐDCN/CCCD/Hộ chiếu', value: currentAccount?.cccd || '040299010346' },
    { label: 'Số điện thoại', value: currentAccount?.phone || '0896511373' },
    { label: 'Địa chỉ', value: currentAccount?.address || 'xóm Đông Lam, Xã Trường Lưu,' }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#eaeff3' }}>
      {/* Full frame background from Figma - objectFit: fill ensures exact stretch */}
      <img src={frameDashboard} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }} draggable={false} />

      {/* Dynamic Profile Overlays exactly positioned over static image card text */}
      {/* 1. Avatar circle */}
      <div style={{ 
        position: 'absolute',
        left: `${33 / W * 100}%`,
        top: `${99 / H * 100}%`,
        width: `${58 / W * 100}%`,
        height: `${58 / H * 100}%`,
        borderRadius: '50%',
        overflow: 'hidden',
        zIndex: 12,
        background: 'linear-gradient(135deg, #0069ad, #01aef2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 700,
        fontSize: '18px'
      }}>
        {currentAccount?.avatar ? (
          <img src={currentAccount.avatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          currentAccount?.fullName ? currentAccount.fullName.split(' ').pop().slice(0, 2).toUpperCase() : 'VS'
        )}
      </div>

      {/* 2. Full Name */}
      <div style={{
        position: 'absolute',
        left: `${105 / W * 100}%`,
        top: `${107 / H * 100}%`,
        width: `${260 / W * 100}%`,
        height: `${20 / H * 100}%`,
        background: '#eaeff3',
        display: 'flex',
        alignItems: 'center',
        zIndex: 12
      }}>
        <span style={{ fontSize: '14px', fontWeight: 700, color: '#000000', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontFamily: 'Inter, sans-serif' }}>
          {currentAccount?.fullName || 'Nguyễn Hữu Hoàng'}
        </span>
      </div>

      {/* 3. Mã BHXH */}
      <div style={{
        position: 'absolute',
        left: `${105 / W * 100}%`,
        top: `${127 / H * 100}%`,
        width: `${260 / W * 100}%`,
        height: `${18 / H * 100}%`,
        background: '#eaeff3',
        display: 'flex',
        alignItems: 'center',
        zIndex: 12
      }}>
        <span style={{ fontSize: '13px', color: '#4d4d4d', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
          Mã BHXH: {currentAccount?.bhxhCode || '4217247030'}
        </span>
      </div>

      {/* 4. Ngày sinh value */}
      <div style={{
        position: 'absolute',
        left: `${183 / W * 100}%`,
        top: `${174 / H * 100}%`,
        width: `${190 / W * 100}%`,
        height: `${22 / H * 100}%`,
        background: '#eaeff3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 12
      }}>
        <span style={{ fontSize: '13px', color: '#0f172a', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          {currentAccount?.birthday || '24/05/1999'}
        </span>
      </div>

      {/* 5. CCCD value */}
      <div style={{
        position: 'absolute',
        left: `${183 / W * 100}%`,
        top: `${212 / H * 100}%`,
        width: `${190 / W * 100}%`,
        height: `${22 / H * 100}%`,
        background: '#eaeff3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 12
      }}>
        <span style={{ fontSize: '13px', color: '#0f172a', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          {currentAccount?.cccd || '040299010346'}
        </span>
      </div>

      {/* 6. Số điện thoại value */}
      <div style={{
        position: 'absolute',
        left: `${183 / W * 100}%`,
        top: `${250 / H * 100}%`,
        width: `${190 / W * 100}%`,
        height: `${22 / H * 100}%`,
        background: '#eaeff3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 12
      }}>
        <span style={{ fontSize: '13px', color: '#0f172a', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          {currentAccount?.phone || '0896511373'}
        </span>
      </div>

      {/* 7. Địa chỉ value */}
      <div style={{
        position: 'absolute',
        left: `${140 / W * 100}%`,
        top: `${288 / H * 100}%`,
        width: `${233 / W * 100}%`,
        height: `${36 / H * 100}%`,
        background: '#eaeff3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 12
      }}>
        <span style={{ 
          fontSize: (currentAccount?.address || 'xóm Đông Lam, Xã Trường Lưu,').length > 25 ? '11px' : '13px',
          color: '#0f172a', 
          fontWeight: 600, 
          textAlign: 'right',
          lineHeight: '1.2',
          wordBreak: 'break-word',
          fontFamily: 'Inter, sans-serif'
        }}>
          {currentAccount?.address || 'xóm Đông Lam, Xã Trường Lưu,'}
        </span>
      </div>

      {/* Interactive hotspots - positions from Figma tree coordinates */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 15 }}>
        {/* Hamburger (Group 1, 8:39): x18,y34 25x18 — enlarged hit area */}
        <div
          onClick={onOpenSidebar}
          style={{
            position: 'absolute',
            left: `${8 / W * 100}%`,
            top: `${20 / H * 100}%`,
            width: `${50 / W * 100}%`,
            height: `${45 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* THẺ BHYT row: y385-448 */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: `${385 / H * 100}%`,
            width: '100%',
            height: `${63 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* QUÁ TRÌNH THAM GIA row: y448-513 → navigate */}
        <div
          onClick={() => onNavigate('insurance-list', { transition: 'slide', direction: 'left' })}
          style={{
            position: 'absolute',
            left: 0,
            top: `${448 / H * 100}%`,
            width: '100%',
            height: `${65 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* THÔNG TIN HƯỞNG row: y513-577 */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: `${513 / H * 100}%`,
            width: '100%',
            height: `${64 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* SỔ KHÁM CHỮA BỆNH row: y577-642 */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: `${577 / H * 100}%`,
            width: '100%',
            height: `${65 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* Bottom nav (Group 2): y823, h65 — 4 equal zones */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: `${823 / H * 100}%`,
          width: '100%',
          height: `${65 / H * 100}%`,
          display: 'flex'
        }}>
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
