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

      {/* Dynamic Profile Card Overlay to cover the static figma image card */}
      <div 
        style={{
          position: 'absolute',
          left: `${19 / W * 100}%`,
          top: `${83 / H * 100}%`,
          width: `${364 / W * 100}%`,
          height: `${258 / H * 100}%`,
          background: '#eaeff3', // matching background to seamlessly block the image text underneath
          padding: '16px 14px 10px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 10,
          borderRadius: '4px' // very subtle curve to align with figma card shape
        }}
      >
        {/* Avatar and Name/Code header row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
          {/* Circular avatar wrapper */}
          <div style={{ 
            width: '58px', 
            height: '58px', 
            borderRadius: '50%', 
            overflow: 'hidden', 
            flexShrink: 0, 
            boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
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

          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#000000', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {currentAccount?.fullName || 'Nguyễn Hữu Hoàng'}
            </span>
            <span style={{ fontSize: '13px', color: '#4d4d4d', marginTop: '2px', fontWeight: 500 }}>
              Mã BHXH: {currentAccount?.bhxhCode || '4217247030'}
            </span>
          </div>
        </div>

        {/* Dynamic Detail rows */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
          {profileDetails.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {/* Divider bar */}
              <div style={{ height: '1px', background: '#cbd5e1', opacity: 0.5, width: '100%' }} />
              
              {/* Text elements row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', fontSize: '13px', color: '#475569' }}>
                <span style={{ color: '#64748b', fontWeight: 500 }}>{item.label}</span>
                <span 
                  style={{ 
                    color: '#0f172a', 
                    fontWeight: 600, 
                    textAlign: 'right', 
                    maxWidth: '65%',
                    lineHeight: '1.2',
                    fontSize: item.label === 'Địa chỉ' && item.value.length > 25 ? '11px' : '13px',
                    wordBreak: 'break-word'
                  }}
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
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
