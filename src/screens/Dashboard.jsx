import React from 'react';
import frameDashboard from '../assets/frame_dashboard.png';

const W = 402;
const H = 874;

const Dashboard = ({ onOpenSidebar, onNavigate }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Full frame background from Figma */}
      <img src={frameDashboard} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} draggable={false} />

      {/* Interactive hotspots */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {/* Hamburger menu: Group 1 (8:39) at approx x16,y24 40x30 */}
        <div
          onClick={onOpenSidebar}
          style={{
            position: 'absolute',
            left: `${10 / W * 100}%`,
            top: `${15 / H * 100}%`,
            width: `${50 / W * 100}%`,
            height: `${40 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* QUÁ TRÌNH THAM GIA row: approximately y=640..700 in frame coords */}
        {/* From Figma tree: the menu section is below the profile card */}
        {/* Profile card ends around y=480. Menu items start around y=510 */}
        {/* Each menu item is approx 70px tall */}
        {/* THẺ BHYT hotspot: y~510-580 */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: `${510 / H * 100}%`,
            width: '100%',
            height: `${70 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* QUÁ TRÌNH THAM GIA hotspot: y~580-650 → navigate to insurance-list */}
        <div
          onClick={() => onNavigate('insurance-list')}
          style={{
            position: 'absolute',
            left: 0,
            top: `${580 / H * 100}%`,
            width: '100%',
            height: `${70 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* THÔNG TIN HƯỞNG hotspot: y~650-720 */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: `${650 / H * 100}%`,
            width: '100%',
            height: `${70 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* SỔ KHÁM CHỮA BỆNH hotspot: y~720-790 */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: `${720 / H * 100}%`,
            width: '100%',
            height: `${70 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* Bottom nav: y~809-874, 4 equal zones */}
        <div style={{ position: 'absolute', left: 0, top: `${809 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, display: 'flex' }}>
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
