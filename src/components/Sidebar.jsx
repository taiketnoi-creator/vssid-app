import { useEffect, useState } from 'react';
import frameSidebar from '../assets/frame_sidebar.png';

const W = 402;
const H = 874;

const Sidebar = ({ isOpen, onClose, onNavigate }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animClass, setAnimClass] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const t1 = setTimeout(() => setShouldRender(true), 0);
      const t2 = setTimeout(() => setAnimClass(true), 20);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      const t1 = setTimeout(() => setAnimClass(false), 0);
      const t2 = setTimeout(() => setShouldRender(false), 300);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  // Sidebar drawer is 311px wide in a 402px frame = 77.4%
  const sidebarWidthPct = 311 / W * 100;

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50 }}>
      {/* Dark overlay - click to close */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(55,55,55,0.5)',
          opacity: animClass ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Sidebar frame image - slides from left */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0,
        width: `${sidebarWidthPct}%`,
        overflow: 'hidden',
        transform: animClass ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease'
      }}>
        <img
          src={frameSidebar}
          alt=""
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: `${W / 311 * 100}%`,
            height: '100%',
            objectFit: 'fill',
            maxWidth: 'none'
          }}
          draggable={false}
        />

        {/* Interactive hotspots on the sidebar */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {/* Menu items area - sidebar menu starts approx at y=260 in 874 frame */}
          {/* Each item is approximately 65px tall */}
          {/* Thông báo: y~260 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${260 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Tin tức: y~325 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${325 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Quản lý cá nhân: y~390 */}
          <div onClick={() => { onNavigate('dashboard'); onClose(); }} style={{ position: 'absolute', left: 0, top: `${390 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Dịch vụ công: y~455 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${455 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Tra cứu: y~520 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${520 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Trợ giúp: y~585 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${585 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Cài đặt: y~650 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${650 / H * 100}%`, width: '100%', height: `${65 / H * 100}%`, cursor: 'pointer' }} />
          {/* Đổi mật khẩu: y~745 */}
          <div onClick={onClose} style={{ position: 'absolute', left: 0, top: `${745 / H * 100}%`, width: '100%', height: `${55 / H * 100}%`, cursor: 'pointer' }} />
          {/* Đăng xuất: y~800 */}
          <div onClick={() => { onNavigate('login'); onClose(); }} style={{ position: 'absolute', left: 0, top: `${800 / H * 100}%`, width: '100%', height: `${55 / H * 100}%`, cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
