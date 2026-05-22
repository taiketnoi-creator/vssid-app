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

  const splitCompany = (companyStr) => {
    const defaultVal = { line1: 'Công ty TNHH EO TECHNICS', line2: 'Việt Nam' };
    if (!companyStr) return defaultVal;
    if (companyStr.includes('EO TECHNICS Việt Nam')) {
      return {
        line1: companyStr.replace('Việt Nam', '').trim(),
        line2: 'Việt Nam'
      };
    }
    if (companyStr.length <= 24) {
      return { line1: companyStr, line2: '' };
    }
    const idx = companyStr.lastIndexOf(' ', 24);
    if (idx !== -1) {
      return { line1: companyStr.substring(0, idx), line2: companyStr.substring(idx).trim() };
    }
    return { line1: companyStr.substring(0, 24), line2: companyStr.substring(24) };
  };

  const splitAddress = (addrStr) => {
    const defaultVal = { line1: 'BT22, khu đô thị hud võ cường-Tp', line2: 'Bắc Ninh-Bắc Ninh' };
    if (!addrStr) return defaultVal;
    if (addrStr.includes('Bắc Ninh-Bắc Ninh')) {
      return {
        line1: addrStr.replace('Bắc Ninh-Bắc Ninh', '').trim().replace(/-$/, '').replace(/,$/, '').trim(),
        line2: 'Bắc Ninh-Bắc Ninh'
      };
    }
    if (addrStr.length <= 32) {
      return { line1: addrStr, line2: '' };
    }
    const idx = addrStr.lastIndexOf(' ', 32);
    if (idx !== -1) {
      return { line1: addrStr.substring(0, idx), line2: addrStr.substring(idx).trim() };
    }
    return { line1: addrStr.substring(0, 32), line2: addrStr.substring(32) };
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: '#ffffff',
      fontFamily: 'Inter, sans-serif',
      boxSizing: 'border-box'
    }}>
      {/* 1. Flawless 100% Figma Frame Background */}
      <img
        src={frameSalary}
        alt="Salary Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          zIndex: 1,
          pointerEvents: 'none'
        }}
        draggable={false}
      />

      {/* 2. Transparent Back Button Hotspot: x=10, y=25, w=45, h=45 */}
      <button
        onClick={() => onNavigate('insurance-list', { transition: 'slide-up', direction: 'right' })}
        style={{
          position: 'absolute',
          left: `${(10 / W) * 100}%`,
          top: `${(25 / H) * 100}%`,
          width: `${(45 / W) * 100}%`,
          height: `${(45 / H) * 100}%`,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          zIndex: 30
        }}
        aria-label="Back"
      />

      {/* 3. 100% FIGMA DYNAMIC TEXT OVERLAY LAYER (zIndex = 10) */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        {/* --- 3.1. Date Row (Từ tháng / Đến tháng) --- */}
        {/* Cover static months only, leaving label and underlines from background intact */}
        <div style={{
          position: 'absolute',
          left: `${(112 / W) * 100}%`,
          top: `${(124 / H) * 100}%`,
          width: `${(55 / W) * 100}%`,
          height: `${(18 / H) * 100}%`,
          background: '#ffffff'
        }} />
        <div style={{
          position: 'absolute',
          left: `${(112 / W) * 100}%`,
          top: `${(124 / H) * 100}%`,
          width: `${(55 / W) * 100}%`,
          height: `${(18 / H) * 100}%`,
          fontSize: '13.5px',
          color: '#000000',
          fontWeight: 700,
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          alignItems: 'center'
        }}>
          {rowData?.from || '04/2025'}
        </div>

        <div style={{
          position: 'absolute',
          left: `${(298 / W) * 100}%`,
          top: `${(124 / H) * 100}%`,
          width: `${(58 / W) * 100}%`,
          height: `${(18 / H) * 100}%`,
          background: '#ffffff'
        }} />
        <div style={{
          position: 'absolute',
          left: `${(298 / W) * 100}%`,
          top: `${(124 / H) * 100}%`,
          width: `${(58 / W) * 100}%`,
          height: `${(18 / H) * 100}%`,
          fontSize: '13.5px',
          color: '#000000',
          fontWeight: 700,
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          alignItems: 'center'
        }}>
          {rowData?.to || '03/2026'}
        </div>


        {/* --- 3.2. Blue Card Info Overlay (100% Pure Vector HTML/CSS) --- */}
        {/* Cover all dynamic details text area inside the blue block cleanly without breaking background margins */}
        <div style={{
          position: 'absolute',
          left: `${(30 / W) * 100}%`,
          top: `${(170 / H) * 100}%`,
          width: `${(342 / W) * 100}%`,
          height: `${(96 / H) * 100}%`,
          backgroundColor: '#38679f'
        }} />

        {/* Dynamic Texts positioned EXACTLY according to Figma specifications (x, y, w, h) */}
        {/* Row 1: Chức vụ label & value */}
        <div style={{
          position: 'absolute',
          left: `${(30 / W) * 100}%`,
          top: `${(174 / H) * 100}%`,
          width: `${(59 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '13.5px',
          color: 'rgba(255, 255, 255, 0.85)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          display: 'flex',
          alignItems: 'center'
        }}>
          Chức vụ:
        </div>
        <div style={{
          position: 'absolute',
          left: `${(96 / W) * 100}%`,
          top: `${(174 / H) * 100}%`,
          width: `${(276 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '13.5px',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center'
        }}>
          {rowData?.position || 'Nhân viên kỹ thuật'}
        </div>

        {/* Row 2: Đơn vị công tác label & value (line 1 & line 2) */}
        <div style={{
          position: 'absolute',
          left: `${(30 / W) * 100}%`,
          top: `${(191 / H) * 100}%`,
          width: `${(108 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '13.5px',
          color: 'rgba(255, 255, 255, 0.85)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          display: 'flex',
          alignItems: 'center'
        }}>
          Đơn vị công tác:
        </div>
        <div style={{
          position: 'absolute',
          left: `${(141 / W) * 100}%`,
          top: `${(191 / H) * 100}%`,
          width: `${(231 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '13.5px',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {splitCompany(rowData?.company).line1}
        </div>
        {splitCompany(rowData?.company).line2 && (
          <div style={{
            position: 'absolute',
            left: `${(30 / W) * 100}%`,
            top: `${(208 / H) * 100}%`,
            width: `${(342 / W) * 100}%`,
            height: `${(17 / H) * 100}%`,
            fontSize: '13.5px',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {splitCompany(rowData?.company).line2}
          </div>
        )}

        {/* Row 3: Nơi làm việc label & value (line 1 & line 2) */}
        <div style={{
          position: 'absolute',
          left: `${(30 / W) * 100}%`,
          top: `${(225 / H) * 100}%`,
          width: `${(85 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '13.5px',
          color: 'rgba(255, 255, 255, 0.85)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          display: 'flex',
          alignItems: 'center'
        }}>
          Nơi làm việc:
        </div>
        <div style={{
          position: 'absolute',
          left: `${(119 / W) * 100}%`,
          top: `${(225 / H) * 100}%`,
          width: `${(253 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '13.5px',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {splitAddress(rowData?.workAddress).line1}
        </div>
        {splitAddress(rowData?.workAddress).line2 && (
          <div style={{
            position: 'absolute',
            left: `${(30 / W) * 100}%`,
            top: `${(242 / H) * 100}%`,
            width: `${(342 / W) * 100}%`,
            height: `${(17 / H) * 100}%`,
            fontSize: '13.5px',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {splitAddress(rowData?.workAddress).line2}
          </div>
        )}

        {/* Row 4: Loại tiền label & value */}
        <div style={{
          position: 'absolute',
          left: `${(30 / W) * 100}%`,
          top: `${(259 / H) * 100}%`,
          width: `${(60 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '13.5px',
          color: 'rgba(255, 255, 255, 0.85)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          display: 'flex',
          alignItems: 'center'
        }}>
          Loại tiền:
        </div>
        <div style={{
          position: 'absolute',
          left: `${(96 / W) * 100}%`,
          top: `${(259 / H) * 100}%`,
          width: `${(31 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '13.5px',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center'
        }}>
          VND
        </div>


        {/* --- 3.3. Salary Table values --- */}
        {/* Cover only the static values on the right, keeping background table borders and labels 100% untouched */}
        <div style={{
          position: 'absolute',
          left: `${(280 / W) * 100}%`,
          top: `${(293 / H) * 100}%`,
          width: `${(92 / W) * 100}%`,
          height: `${(20 / H) * 100}%`,
          background: '#ffffff'
        }} />
        <div style={{
          position: 'absolute',
          left: `${(280 / W) * 100}%`,
          top: `${(293 / H) * 100}%`,
          width: `${(92 / W) * 100}%`,
          height: `${(20 / H) * 100}%`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          fontSize: '14.5px',
          color: '#000000',
          fontWeight: 700,
          fontFamily: 'Inter, sans-serif'
        }}>
          {formattedSalary}
        </div>

        <div style={{
          position: 'absolute',
          left: `${(280 / W) * 100}%`,
          top: `${(321 / H) * 100}%`,
          width: `${(92 / W) * 100}%`,
          height: `${(20 / H) * 100}%`,
          background: '#ffffff'
        }} />
        <div style={{
          position: 'absolute',
          left: `${(280 / W) * 100}%`,
          top: `${(321 / H) * 100}%`,
          width: `${(92 / W) * 100}%`,
          height: `${(20 / H) * 100}%`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          fontSize: '14.5px',
          color: '#000000',
          fontWeight: 700,
          fontFamily: 'Inter, sans-serif'
        }}>
          {formattedSalary}
        </div>
      </div>
    </div>
  );
};

export default SalaryDetail;
