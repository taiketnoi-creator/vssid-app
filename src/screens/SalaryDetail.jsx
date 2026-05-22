import React from 'react';

// Figma reference dimensions
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
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: '#ffffff', // Clean white background matching Figma frame iPhone 17 - 4
      fontFamily: 'Inter, sans-serif',
      boxSizing: 'border-box'
    }}>
      {/* 1. HEADER (Figma Rectangle 7: height 67px, linear-gradient) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '67px',
        background: 'linear-gradient(90deg, #01aef2 0%, #0073c6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20
      }}>
        {/* Back Chevron Left (x=18, y=34, 24x24) */}
        <button
          onClick={() => onNavigate('insurance-list', { transition: 'slide-up', direction: 'right' })}
          style={{
            position: 'absolute',
            left: '18px',
            top: '32px',
            width: '24px',
            height: '24px',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 30
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Title: "QUẢN LÝ CÁ NHÂN": x=107, y=34, fontSize 20, Regular */}
        <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '34px',
          height: '24px',
          margin: '0 auto',
          color: '#ffffff',
          fontSize: '20px',
          fontWeight: 400,
          textAlign: 'center',
          lineHeight: '24px',
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, sans-serif'
        }}>
          QUẢN LÝ CÁ NHÂN
        </div>
      </div>

      {/* 2. SUBHEADER "Chi tiết" (y=67 to y=110, h=43) */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '67px',
        width: '100%',
        height: '43px',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #e2e8f0',
        zIndex: 10
      }}>
        <span style={{
          fontSize: '18px',
          fontWeight: 700,
          color: '#38679f',
          fontFamily: 'Inter, sans-serif'
        }}>
          Chi tiết
        </span>
      </div>

      {/* 3. DYNAMIC CONTENT CONTAINER (y=110 to H) */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '110px',
        width: '100%',
        height: 'calc(100% - 110px)',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        zIndex: 10,
        boxSizing: 'border-box'
      }} className="scrollbar-none">
        {/* Date Row (Từ tháng / Đến tháng) */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 20px',
          background: '#ffffff',
          flexShrink: 0
        }}>
          <span style={{ fontSize: '13.5px', color: '#2a2b2b', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
            Từ tháng: <strong style={{ color: '#000000', fontWeight: 700 }}>{rowData?.from || '04/2025'}</strong>
          </span>
          <span style={{ fontSize: '13.5px', color: '#2a2b2b', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
            Đến tháng: <strong style={{ color: '#000000', fontWeight: 700 }}>{rowData?.to || '03/2026'}</strong>
          </span>
        </div>

        {/* Dynamic Blue Info Card (Background #38679f) */}
        <div style={{
          margin: '0 14px 14px 14px',
          background: '#38679f',
          borderRadius: '8px',
          padding: '16px',
          color: '#ffffff',
          boxSizing: 'border-box',
          boxShadow: '0 2px 6px rgba(56, 103, 159, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          flexShrink: 0
        }}>
          {/* Chức vụ */}
          <div style={{ fontSize: '13.5px', lineHeight: '1.4', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 400 }}>Chức vụ: </span>
            <span style={{ fontWeight: 700 }}>{rowData?.position || 'Nhân viên kỹ thuật'}</span>
          </div>

          {/* Đơn vị công tác */}
          <div style={{ fontSize: '13.5px', lineHeight: '1.4', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 400 }}>Đơn vị công tác: </span>
            <span style={{ fontWeight: 700 }}>{rowData?.company || 'Công ty TNHH EO TECHNICS Việt Nam'}</span>
          </div>

          {/* Nơi làm việc */}
          <div style={{ fontSize: '13.5px', lineHeight: '1.4', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 400 }}>Nơi làm việc: </span>
            <span style={{ fontWeight: 700 }}>{rowData?.workAddress || 'BT22, khu đô thị hud võ cường-tp bắc ninh-bắc ninh'}</span>
          </div>

          {/* Currency */}
          <div style={{
            fontSize: '13.5px',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            color: '#ffffff',
            marginTop: '2px'
          }}>
            VND
          </div>
        </div>

        {/* Salary details table */}
        <div style={{
          margin: '0 14px',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          overflow: 'hidden',
          background: '#ffffff',
          boxSizing: 'border-box',
          flexShrink: 0
        }}>
          {/* Row 1: Tiền lương đóng BHXH */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 16px',
            borderBottom: '1px solid #e2e8f0',
            background: '#ffffff'
          }}>
            <span style={{ fontSize: '13.5px', color: '#2a2b2b', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
              Tiền lương đóng BHXH
            </span>
            <span style={{ fontSize: '14.5px', color: '#000000', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>
              {formattedSalary}
            </span>
          </div>

          {/* Row 2: Mức lương */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 16px',
            background: '#f8fafc'
          }}>
            <span style={{ fontSize: '13.5px', color: '#2a2b2b', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
              Mức lương
            </span>
            <span style={{ fontSize: '14.5px', color: '#000000', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>
              {formattedSalary}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryDetail;
