import frameDashboard from '../assets/frame_dashboard.png';

// Figma frame: 402x874
const W = 402;
const H = 874;

const Dashboard = ({ onOpenSidebar, onNavigate }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Full frame background from Figma - objectFit: fill ensures exact stretch */}
      <img src={frameDashboard} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }} draggable={false} />

      {/* Interactive hotspots - positions from Figma tree coordinates */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
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

        {/* THẺ BHYT row: y385-448 (Line 1 at y448) */}
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

        {/* QUÁ TRÌNH THAM GIA row: y448-513 (Line 3 at y513) → navigate */}
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
