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
    { label: 'Địa chỉ', value: currentAccount?.address || 'xóm Đông Lam, Xã Trường Lưu,\nHuyện Lộc Hà, Tỉnh Hà Tĩnh' }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#eaeff3' }}>
      {/* Full frame background from Figma */}
      <img src={frameDashboard} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }} draggable={false} />

      {/* Single card overlay covering entire profile card area (y=87 to y=363 in Figma) */}
      {/* Exactly matches Figma dimensions 364x276 and removes duplicate shadow for perfect alignment */}
      <div style={{
        position: 'absolute',
        left: `${19 / W * 100}%`,
        top: `${87 / H * 100}%`,
        width: `${364 / W * 100}%`,
        height: `${276 / H * 100}%`,
        background: '#ffffff', // Clean white background to cover static text
        borderRadius: '12px', // Premium smooth card corners
        boxShadow: 'none', // Letting the background image's natural shadow display cleanly
        zIndex: 10,
        boxSizing: 'border-box',
        padding: '21px 22px 14px 23px', // Exact Figma paddings (left: 23px, right: 22px, top: 21px)
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Row: Avatar + Name + BHXH code */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
          {/* Avatar circle (Figma: 62x62) */}
          <div style={{
            width: '62px',
            height: '62px',
            borderRadius: '50%',
            background: '#0069ad', // Perfect solid blue matching VssID exactly
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '18px',
            fontFamily: 'Inter, sans-serif',
            flexShrink: 0,
            overflow: 'hidden'
          }}>
            {currentAccount?.avatar ? (
              <img src={currentAccount.avatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              currentAccount?.fullName ? currentAccount.fullName.split(' ').pop().slice(0, 2).toUpperCase() : 'TA'
            )}
          </div>

          {/* Name + BHXH code */}
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, textAlign: 'left' }}>
            {/* Name: Bold 14px Black (Figma Node 9:45) */}
            <span style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#000000',
              fontFamily: 'Inter, sans-serif',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              {currentAccount?.fullName || 'Nguyễn Hữu Hoàng'}
            </span>
            {/* BHXH Code: Regular 14px #4d4d4d Grey (Figma Node 9:46) */}
            <span style={{
              fontSize: '14px',
              color: '#4d4d4d',
              fontWeight: 'normal',
              fontFamily: 'Inter, sans-serif',
              marginTop: '6px',
            }}>
              Mã BHXH: {currentAccount?.bhxhCode || '4217247030'}
            </span>
          </div>
        </div>

        {/* Separator line (Figma: y=185) */}
        <div style={{ height: '0.5px', background: '#e2e8f0', margin: '12px 0' }} />

        {/* Field rows (Figma details: Regular 14px #616161 Grey) */}
        {fields.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: i < fields.length - 1 ? '14px' : 0,
            minHeight: '20px',
          }}>
            {/* Label: Regular 14px #616161 (Figma Nodes 9:47-9:50) */}
            <span style={{
              fontSize: '14px',
              color: '#616161',
              fontWeight: 'normal',
              fontFamily: 'Inter, sans-serif',
              flexShrink: 0,
              lineHeight: '1.4',
            }}>
              {item.label}
            </span>
            {/* Value: Regular 14px #616161 (Figma Nodes 9:51-9:54) */}
            <span style={{
              fontSize: '14px',
              color: '#616161',
              fontWeight: 'normal',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'right',
              maxWidth: '68%',
              lineHeight: '1.4',
              whiteSpace: 'pre-line', // Allow preformatted newlines
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
