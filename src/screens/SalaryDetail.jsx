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

  const company = splitCompany(rowData?.company);
  const address = splitAddress(rowData?.workAddress);

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
      {/* 1. Figma Frame Background Image */}
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

      {/* 2. Transparent Back Button: x=10, y=25, w=45, h=45 */}
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

      {/* 3. Dynamic Overlay Layer */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        pointerEvents: 'none'
      }}>

        {/* ===== COVER BLOCKS: Erase static Figma-printed text from the background image ===== */}

        {/* Cover: Date row (Figma prints static "Từ tháng: 04/2025" and "Đến tháng: 03/2026") */}
        {/* Figma y=125, h=17 → cover from y=122 to y=144 with white */}
        <div style={{
          position: 'absolute',
          left: `${(44 / W) * 100}%`,
          top: `${(122 / H) * 100}%`,
          width: `${(320 / W) * 100}%`,
          height: `${(20 / H) * 100}%`,
          backgroundColor: '#ffffff',
          zIndex: 6
        }} />

        {/* Cover: Entire blue card area (Figma has all static white text on blue card background)
            Blue card: from y≈155 to y≈280 (text range 174 to 259+17=276, card starts ~155)
            Cover starts at y=155 so we don't erase the card's own rounded border corner arc */}
        <div style={{
          position: 'absolute',
          left: `${(30 / W) * 100}%`,
          top: `${(155 / H) * 100}%`,
          width: `${(342 / W) * 100}%`,
          height: `${(125 / H) * 100}%`,
          backgroundColor: '#38679f',
          zIndex: 6
        }} />

        {/* Cover: Table value cells only — leave native Figma table grid lines intact
            Row 1 value: x=240→372 (right of vertical divider at x≈240), y=287 to y=314
            Row 2 value: same x range, y=315 to y=342 */}
        <div style={{
          position: 'absolute',
          left: `${(241 / W) * 100}%`,
          top: `${(287 / H) * 100}%`,
          width: `${(128 / W) * 100}%`,
          height: `${(27 / H) * 100}%`,
          backgroundColor: '#ffffff',
          zIndex: 6
        }} />
        <div style={{
          position: 'absolute',
          left: `${(241 / W) * 100}%`,
          top: `${(315 / H) * 100}%`,
          width: `${(128 / W) * 100}%`,
          height: `${(27 / H) * 100}%`,
          backgroundColor: '#ffffff',
          zIndex: 6
        }} />


        {/* ===== DYNAMIC TEXT OVERLAYS: Exact Figma coordinates ===== */}

        {/* DATE ROW — Figma: 13:7 x=45 y=125 w=124 h=17  |  13:8 x=226 y=125 w=134 h=17 */}
        {/* "Từ tháng: 04/2025" — rendered as label + bold value inline */}
        <div style={{
          position: 'absolute',
          left: `${(45 / W) * 100}%`,
          top: `${(125 / H) * 100}%`,
          width: `${(124 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '14px',
          color: '#2a2b2b',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          zIndex: 10,
          whiteSpace: 'nowrap'
        }}>
          Từ tháng: <span style={{ fontWeight: 700, marginLeft: '2px' }}>{rowData?.from || '04/2025'}</span>
        </div>

        {/* "Đến tháng: 03/2026" */}
        <div style={{
          position: 'absolute',
          left: `${(226 / W) * 100}%`,
          top: `${(125 / H) * 100}%`,
          width: `${(134 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '14px',
          color: '#2a2b2b',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          zIndex: 10,
          whiteSpace: 'nowrap'
        }}>
          Đến tháng: <span style={{ fontWeight: 700, marginLeft: '2px' }}>{rowData?.to || '03/2026'}</span>
        </div>


        {/* BLUE CARD — Row 1: Chức vụ */}
        {/* Label: 13:10 x=30 y=174 w=59 h=17  Regular #fff */}
        <div style={{
          position: 'absolute',
          left: `${(30 / W) * 100}%`,
          top: `${(174 / H) * 100}%`,
          width: `${(59 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '14px',
          color: 'rgba(255,255,255,0.85)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          zIndex: 10
        }}>
          Chức vụ:
        </div>
        {/* Value: 13:11 x=96 y=174 w=128 h=17  Bold #fff */}
        <div style={{
          position: 'absolute',
          left: `${(96 / W) * 100}%`,
          top: `${(174 / H) * 100}%`,
          width: `${(276 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '14px',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          zIndex: 10
        }}>
          {rowData?.position || 'Nhân viên kỹ thuật'}
        </div>

        {/* BLUE CARD — Row 2: Đơn vị công tác */}
        {/* Label: 13:15 x=30 y=191 w=108 h=17  Regular #fff */}
        <div style={{
          position: 'absolute',
          left: `${(30 / W) * 100}%`,
          top: `${(191 / H) * 100}%`,
          width: `${(108 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '14px',
          color: 'rgba(255,255,255,0.85)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          zIndex: 10
        }}>
          Đơn vị công tác:
        </div>
        {/* Value Line 1: 13:16 x=141 y=191 w=197 h=17  Bold #fff */}
        <div style={{
          position: 'absolute',
          left: `${(141 / W) * 100}%`,
          top: `${(191 / H) * 100}%`,
          width: `${(231 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '14px',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          zIndex: 10,
          overflow: 'hidden'
        }}>
          {company.line1}
        </div>
        {/* Value Line 2: 13:17 x=30 y=208 w=63 h=17  Bold #fff */}
        {company.line2 && (
          <div style={{
            position: 'absolute',
            left: `${(30 / W) * 100}%`,
            top: `${(208 / H) * 100}%`,
            width: `${(342 / W) * 100}%`,
            height: `${(17 / H) * 100}%`,
            fontSize: '14px',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            lineHeight: '17px',
            display: 'flex',
            alignItems: 'center',
            zIndex: 10
          }}>
            {company.line2}
          </div>
        )}

        {/* BLUE CARD — Row 3: Nơi làm việc */}
        {/* Label: 13:18 x=30 y=225 w=85 h=17  Regular #fff */}
        <div style={{
          position: 'absolute',
          left: `${(30 / W) * 100}%`,
          top: `${(225 / H) * 100}%`,
          width: `${(85 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '14px',
          color: 'rgba(255,255,255,0.85)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          zIndex: 10
        }}>
          Nơi làm việc:
        </div>
        {/* Value Line 1: 13:19 x=119 y=225 w=232 h=17  Bold #fff */}
        <div style={{
          position: 'absolute',
          left: `${(119 / W) * 100}%`,
          top: `${(225 / H) * 100}%`,
          width: `${(253 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '14px',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          zIndex: 10,
          overflow: 'hidden'
        }}>
          {address.line1}
        </div>
        {/* Value Line 2: 13:20 x=30 y=242 w=128 h=17  Bold #fff */}
        {address.line2 && (
          <div style={{
            position: 'absolute',
            left: `${(30 / W) * 100}%`,
            top: `${(242 / H) * 100}%`,
            width: `${(342 / W) * 100}%`,
            height: `${(17 / H) * 100}%`,
            fontSize: '14px',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            lineHeight: '17px',
            display: 'flex',
            alignItems: 'center',
            zIndex: 10
          }}>
            {address.line2}
          </div>
        )}

        {/* BLUE CARD — Row 4: Loại tiền */}
        {/* Label: 165:20 x=30 y=259 w=60 h=17  Regular #fff */}
        <div style={{
          position: 'absolute',
          left: `${(30 / W) * 100}%`,
          top: `${(259 / H) * 100}%`,
          width: `${(60 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '14px',
          color: 'rgba(255,255,255,0.85)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          zIndex: 10
        }}>
          Loại tiền:
        </div>
        {/* Value: 13:22 x=96 y=259 w=31 h=17  Bold #fff */}
        <div style={{
          position: 'absolute',
          left: `${(96 / W) * 100}%`,
          top: `${(259 / H) * 100}%`,
          width: `${(60 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '14px',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          zIndex: 10
        }}>
          VND
        </div>


        {/* SALARY TABLE — Row 1: Tiền lương đóng BHXH */}
        {/* Value: 13:32 x=290 y=295 w=77 h=17  Medium #2a2b2b — right-aligned */}
        <div style={{
          position: 'absolute',
          left: `${(241 / W) * 100}%`,
          top: `${(295 / H) * 100}%`,
          width: `${(128 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '14px',
          color: '#2a2b2b',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: `${(7 / W) * 100}%`,
          zIndex: 10
        }}>
          {formattedSalary}
        </div>

        {/* SALARY TABLE — Row 2: Mức lương */}
        {/* Value: 13:33 x=290 y=323 w=77 h=17  Medium #2a2b2b — right-aligned */}
        <div style={{
          position: 'absolute',
          left: `${(241 / W) * 100}%`,
          top: `${(323 / H) * 100}%`,
          width: `${(128 / W) * 100}%`,
          height: `${(17 / H) * 100}%`,
          fontSize: '14px',
          color: '#2a2b2b',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: `${(7 / W) * 100}%`,
          zIndex: 10
        }}>
          {formattedSalary}
        </div>

      </div>
    </div>
  );
};

export default SalaryDetail;
