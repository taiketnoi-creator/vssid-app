import React from 'react';
import frameSalary from '../assets/frame_salary.png';

const W = 402;
const H = 874;

const SalaryDetail = ({ onNavigate }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Full frame background from Figma */}
      <img src={frameSalary} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }} draggable={false} />

      {/* Interactive hotspots */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {/* Back arrow: Vector 8 (13:3) at approx x18,y50 24x24 — expand hitzone */}
        <div
          onClick={() => onNavigate('insurance-list')}
          style={{
            position: 'absolute',
            left: `${5 / W * 100}%`,
            top: `${35 / H * 100}%`,
            width: `${60 / W * 100}%`,
            height: `${50 / H * 100}%`,
            cursor: 'pointer'
          }}
        />
      </div>
    </div>
  );
};

export default SalaryDetail;
