import React from 'react';
import frameDashboard from '../assets/frame_dashboard.png';

// Figma frame: 402x874
const W = 402;
const H = 874;

const Dashboard = ({ currentAccount, onOpenSidebar, onNavigate }) => {
  const fields = [
    { label: 'Ngày sinh', value: currentAccount?.birthday || '24/05/1999' },
    { label: 'ĐDCN/CCCD/Hộ chiếu', value: currentAccount?.cccd || '040299010346' },
    { label: 'Số điện thoại', value: currentAccount?.phone || '0896511373' },
    { label: 'Địa chỉ', value: currentAccount?.address || 'xóm Đông Lam, Xã Trường Lưu,' }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#eaeff3' }}>
      {/* Full frame background from Figma */}
      <img src={frameDashboard} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }} draggable={false} />

      {/* Single card overlay covering entire profile card area (y=85 to y=345) */}
      {/* This hides ALL static data text in the image and renders dynamic content */}
      <div style={{
        position: 'absolute',
        left: `${19 / W * 100}%`,
        top: `${85 / H * 100}%`,
        width: `${364 / W * 100}%`,
        height: `${262 / H * 100}%`,
        background: '#eaeff3',
        zIndex: 10,
        boxSizing: 'border-box',
        padding: '14px 16px 12px 16px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Row: Avatar + Name + BHXH code */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
          {/* Avatar circle */}
          <div style={{
            width: '58px',
            height: '58px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0069ad, #01aef2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: '18px',
            fontFamily: 'Inter, sans-serif',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
            {currentAccount?.avatar ? (
              <img src={currentAccount.avatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              currentAccount?.fullName ? currentAccount.fullName.split(' ').pop().slice(0, 2).toUpperCase() : 'VS'
            )}
          </div>

          {/* Name + BHXH code */}
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#000000',
              fontFamily: 'Inter, sans-serif',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              {currentAccount?.fullName || 'Nguyễn Hữu Hoàng'}
            </span>
            <span style={{
              fontSize: '12px',
              color: '#555555',
              fontWeight: 500,
              fontFamily: 'Inter, sans-serif',
              marginTop: '2px',
            }}>
              Mã BHXH: {currentAccount?.bhxhCode || '4217247030'}
            </span>
          </div>
        </div>

        {/* Separator line */}
        <div style={{ height: '1px', background: '#c8d3da', marginBottom: '8px' }} />

        {/* Field rows */}
        {fields.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: i < fields.length - 1 ? '7px' : 0,
            minHeight: item.label === 'Địa chỉ' ? '34px' : '22px',
          }}>
            <span style={{
              fontSize: '12.5px',
              color: '#555555',
              fontFamily: 'Inter, sans-serif',
              flexShrink: 0,
              lineHeight: '1.4',
            }}>
              {item.label}
            </span>
            <span style={{
              fontSize: item.value && item.value.length > 18 ? '11.5px' : '12.5px',
              color: '#0f172a',
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              textAlign: 'right',
              maxWidth: '58%',
              lineHeight: '1.3',
              wordBreak: 'break-word',
            }}>
              {item.value}
            </span>
          </div>
        ))}
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
