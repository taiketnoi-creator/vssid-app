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
      {/* Full frame background from Figma — keeps the header bar */}
      <img src={frameSalary} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }} draggable={false} />

      {/* Single content overlay covering from below header (y=67) to bottom of content */}
      {/* Hides ALL static data in the Figma image and renders dynamic content exactly matching Figma design */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: `${67 / H * 100}%`,
        width: '100%',
        height: `${(874 - 67) / H * 100}%`,
        background: '#ffffff',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        fontFamily: 'Inter, sans-serif',
      }} className="scrollbar-none">

        {/* "Từ tháng / Đến tháng" row — white background, matching Figma layout */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 20px',
          background: '#ffffff',
          flexShrink: 0,
        }}>
          <span style={{ fontSize: '13px', color: '#333333', fontWeight: 500 }}>
            Từ tháng: <strong>{rowData?.from || '04/2025'}</strong>
          </span>
          <span style={{ fontSize: '13px', color: '#333333', fontWeight: 500 }}>
            Đến tháng: <strong>{rowData?.to || '03/2026'}</strong>
          </span>
        </div>

        {/* Blue info card — matching Figma #38679f card */}
        <div style={{
          margin: '0 14px 0 14px',
          background: '#38679f',
          padding: '12px 14px 14px 14px',
          flexShrink: 0,
        }}>
          {/* Chức vụ */}
          <div style={{ marginBottom: '6px', fontSize: '13px', color: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ fontWeight: 400 }}>Chức vụ: </span>
            <span style={{ fontWeight: 700 }}>{rowData?.position || 'Nhân viên kỹ thuật'}</span>
          </div>
          {/* Đơn vị công tác */}
          <div style={{ marginBottom: '6px', fontSize: '13px', color: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ fontWeight: 400 }}>Đơn vị công tác: </span>
            <span style={{ fontWeight: 700 }}>{rowData?.company || 'Công ty TNHH EO TECHNICS Việt Nam'}</span>
          </div>
          {/* Nơi làm việc */}
          <div style={{ marginBottom: '6px', fontSize: '13px', color: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ fontWeight: 400 }}>Nơi làm việc: </span>
            <span style={{ fontWeight: 700 }}>{rowData?.workAddress || 'BT22, khu đô thị hud võ cường-tp bắc ninh-bắc ninh'}</span>
          </div>
          {/* Loại tiền */}
          <div style={{ fontSize: '13px', color: '#ffffff', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>
            VND
          </div>
        </div>

        {/* Salary table */}
        <div style={{ margin: '0 14px', flexShrink: 0 }}>
          {/* Row 1: Tiền lương đóng BHXH */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 8px',
            borderBottom: '1px solid #e2e8f0',
            background: '#ffffff',
          }}>
            <span style={{ fontSize: '13px', color: '#1a1a1a', fontWeight: 400, fontFamily: 'Inter, sans-serif' }}>
              Tiền lương đóng BHXH
            </span>
            <span style={{ fontSize: '13px', color: '#1a1a1a', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
              {formattedSalary}
            </span>
          </div>
          {/* Row 2: Mức lương */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 8px',
            background: '#f8fafc',
          }}>
            <span style={{ fontSize: '13px', color: '#1a1a1a', fontWeight: 400, fontFamily: 'Inter, sans-serif' }}>
              Mức lương
            </span>
            <span style={{ fontSize: '13px', color: '#1a1a1a', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
              {formattedSalary}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive hotspots (higher zIndex to stay clickable) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 20, pointerEvents: 'none' }}>
        {/* Back arrow */}
        <div
          onClick={() => onNavigate('insurance-list', { transition: 'slide-up', direction: 'right' })}
          style={{
            position: 'absolute',
            left: `${5 / W * 100}%`,
            top: `${35 / H * 100}%`,
            width: `${60 / W * 100}%`,
            height: `${50 / H * 100}%`,
            cursor: 'pointer',
            pointerEvents: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default SalaryDetail;
