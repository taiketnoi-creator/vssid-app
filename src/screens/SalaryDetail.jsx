import React from 'react';
import frameSalary from '../assets/frame_salary.png';

const W = 402;
const H = 874;

const SalaryDetail = ({ onNavigate, rowData }) => {
  const formatSalary = (val) => {
    if (!val) return '0';
    if (typeof val === 'string' && val.includes('.')) return val;
    const num = parseInt(String(val).replace(/\D/g, ''), 10);
    if (isNaN(num)) return val;
    return new Intl.NumberFormat('vi-VN').format(num);
  };

  const formattedSalary = formatSalary(rowData?.salary || '14.500.000');

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#ffffff' }}>
      {/* Full frame background from Figma */}
      <img src={frameSalary} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }} draggable={false} />

      {/* Dynamic Targeted Overlays exactly positioned over static image fields */}
      
      {/* 1. Thời gian */}
      <div style={{
        position: 'absolute',
        left: `${19 / W * 100}%`,
        top: `${94 / H * 100}%`,
        width: `${364 / W * 100}%`,
        height: `${24 / H * 100}%`,
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        zIndex: 10
      }}>
        <span style={{ fontSize: '13px', fontWeight: '700', color: '#0069ad', fontFamily: 'Inter, sans-serif' }}>
          Thời gian: {rowData?.from || '04/2025'} - {rowData?.to || '03/2026'}
        </span>
      </div>

      {/* 2. Chức vụ */}
      <div style={{
        position: 'absolute',
        left: `${34 / W * 100}%`,
        top: `${162 / H * 100}%`,
        width: `${334 / W * 100}%`,
        height: `${22 / H * 100}%`,
        background: '#38679f',
        display: 'flex',
        alignItems: 'center',
        zIndex: 10
      }}>
        <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', fontFamily: 'Inter, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {rowData?.position || 'Nhân viên kỹ thuật'}
        </span>
      </div>

      {/* 3. Đơn vị công tác */}
      <div style={{
        position: 'absolute',
        left: `${34 / W * 100}%`,
        top: `${217 / H * 100}%`,
        width: `${334 / W * 100}%`,
        height: `${22 / H * 100}%`,
        background: '#38679f',
        display: 'flex',
        alignItems: 'center',
        zIndex: 10
      }}>
        <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', fontFamily: 'Inter, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {rowData?.company || 'Công ty TNHH EO TECHNICS Việt Nam'}
        </span>
      </div>

      {/* 4. Nơi làm việc */}
      <div style={{
        position: 'absolute',
        left: `${34 / W * 100}%`,
        top: `${272 / H * 100}%`,
        width: `${334 / W * 100}%`,
        height: `${38 / H * 100}%`,
        background: '#38679f',
        display: 'flex',
        alignItems: 'center',
        zIndex: 10
      }}>
        <span style={{ 
          fontSize: '12px', 
          fontWeight: '500', 
          color: '#ffffff', 
          fontFamily: 'Inter, sans-serif', 
          lineHeight: '1.3',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {rowData?.workAddress || 'BT22, khu đô thị hud võ cường-Tp Bắc Ninh-Bắc Ninh'}
        </span>
      </div>

      {/* 5. Tiền lương đóng BHXH */}
      <div style={{
        position: 'absolute',
        left: `${240 / W * 100}%`,
        top: `${362 / H * 100}%`,
        width: `${140 / W * 100}%`,
        height: `${24 / H * 100}%`,
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 10
      }}>
        <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#0069ad', fontFamily: 'Inter, sans-serif' }}>
          {formattedSalary}
        </span>
      </div>

      {/* 6. Mức lương */}
      <div style={{
        position: 'absolute',
        left: `${240 / W * 100}%`,
        top: `${406 / H * 100}%`,
        width: `${140 / W * 100}%`,
        height: `${24 / H * 100}%`,
        background: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 10
      }}>
        <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#0069ad', fontFamily: 'Inter, sans-serif' }}>
          {formattedSalary}
        </span>
      </div>

      {/* Interactive hotspots (higher zIndex to stay clickable) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 20, pointerEvents: 'none' }}>
        {/* Back arrow: Vector 8 (13:3) at approx x18,y50 24x24 — expand hitzone */}
        <div
          onClick={() => onNavigate('insurance-list', { transition: 'slide-up', direction: 'right' })}
          style={{
            position: 'absolute',
            left: `${5 / W * 100}%`,
            top: `${35 / H * 100}%`,
            width: `${60 / W * 100}%`,
            height: `${50 / H * 100}%`,
            cursor: 'pointer',
            pointerEvents: 'auto'
          }}
        />
      </div>
    </div>
  );
};

export default SalaryDetail;
