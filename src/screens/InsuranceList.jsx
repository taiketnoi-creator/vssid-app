import React from 'react';
import frameInsurance from '../assets/frame_insurance.png';

const W = 402;
const H = 874;

const InsuranceList = ({ onNavigate }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Full frame background from Figma */}
      <img src={frameInsurance} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} draggable={false} />

      {/* Interactive hotspots */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {/* Back arrow: approx x10,y15 50x40 */}
        <div
          onClick={() => onNavigate('dashboard')}
          style={{
            position: 'absolute',
            left: `${5 / W * 100}%`,
            top: `${10 / H * 100}%`,
            width: `${60 / W * 100}%`,
            height: `${55 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* Table row 1 eye icon: approx x350,y455 40x70 */}
        <div
          onClick={() => onNavigate('salary-detail')}
          style={{
            position: 'absolute',
            left: 0,
            top: `${430 / H * 100}%`,
            width: '100%',
            height: `${80 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* Table row 2: approx y510-590 */}
        <div
          onClick={() => onNavigate('salary-detail')}
          style={{
            position: 'absolute',
            left: 0,
            top: `${510 / H * 100}%`,
            width: '100%',
            height: `${80 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* Bottom nav: y~809-874 */}
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

export default InsuranceList;
