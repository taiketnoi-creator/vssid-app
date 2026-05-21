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

      {/* Dynamic Content Overlay area (covers everything below y=67) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: `${67 / H * 100}%`,
          width: '100%',
          height: `${(874 - 67) / H * 100}%`,
          background: '#ffffff',
          padding: '16px 20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 10,
          overflowY: 'auto',
          fontFamily: 'Inter, sans-serif'
        }}
        className="scrollbar-none"
      >
        {/* Time period section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <div style={{ width: '4px', height: '18px', background: '#0069ad', borderRadius: '2px' }} />
          <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#0069ad' }}>
            Thời gian: {rowData?.from || '04/2025'} - {rowData?.to || '03/2026'}
          </div>
        </div>

        {/* Detailed Blue Card */}
        <div 
          style={{ 
            background: '#38679f', // Figma matching blue card
            borderRadius: '6px', 
            padding: '14px 16px', 
            color: '#ffffff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }}
        >
          {/* Chức vụ */}
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '3px', fontWeight: 500 }}>Chức vụ</div>
            <div style={{ fontSize: '14px', fontWeight: '700', lineHeight: '1.4' }}>{rowData?.position || 'Nhân viên kỹ thuật'}</div>
          </div>
          
          {/* Đơn vị công tác */}
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '3px', fontWeight: 500 }}>Đơn vị công tác</div>
            <div style={{ fontSize: '14px', fontWeight: '700', lineHeight: '1.4' }}>{rowData?.company || 'Công ty TNHH EO TECHNICS Việt Nam'}</div>
          </div>

          {/* Địa chỉ nơi làm việc */}
          <div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '3px', fontWeight: 500 }}>Nơi làm việc</div>
            <div style={{ fontSize: '13px', fontWeight: '500', lineHeight: '1.4', opacity: 0.95 }}>{rowData?.workAddress || 'BT22, khu đô thị hud võ cường-Tp Bắc Ninh-Bắc Ninh'}</div>
          </div>
        </div>

        {/* Breakdown section title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <div style={{ width: '4px', height: '18px', background: '#0069ad', borderRadius: '2px' }} />
          <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#0069ad' }}>
            Bảng kê chi tiết tiền lương
          </div>
        </div>

        {/* Detailed Breakdown list */}
        <div style={{ border: '1px solid #cbd5e1', borderRadius: '4px', overflow: 'hidden' }}>
          {/* Table Header */}
          <div style={{ display: 'flex', background: '#f8fafc', borderBottom: '1px solid #cbd5e1', padding: '10px 14px', fontWeight: '600', fontSize: '11px', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
            <div style={{ flex: 1 }}>Chỉ tiêu</div>
            <div style={{ width: '120px', textAlign: 'right' }}>Mức đóng (đ)</div>
          </div>
          
          {/* Table Row 1: Tiền lương đóng BHXH */}
          <div style={{ display: 'flex', borderBottom: '1px solid #cbd5e1', padding: '12px 14px', fontSize: '13px', color: '#0f172a', alignItems: 'center', background: '#ffffff' }}>
            <div style={{ flex: 1, fontWeight: '500' }}>Tiền lương đóng BHXH</div>
            <div style={{ width: '120px', textAlign: 'right', fontWeight: '700', color: '#0069ad' }}>
              {formattedSalary}
            </div>
          </div>

          {/* Table Row 2: Mức lương */}
          <div style={{ display: 'flex', padding: '12px 14px', fontSize: '13px', color: '#0f172a', alignItems: 'center', background: '#f8fafc' }}>
            <div style={{ flex: 1, fontWeight: '500' }}>Mức lương</div>
            <div style={{ width: '120px', textAlign: 'right', fontWeight: '700', color: '#0069ad' }}>
              {formattedSalary}
            </div>
          </div>
        </div>
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
