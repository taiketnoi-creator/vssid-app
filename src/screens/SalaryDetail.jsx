import React from 'react';
import frameSalary from '../assets/frame_salary.png';

// Figma frame: 402 x 874
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

  // Helper: position as percentage of Figma frame
  const px = (x) => `${(x / W) * 100}%`;
  const py = (y) => `${(y / H) * 100}%`;
  const pw = (w) => `${(w / W) * 100}%`;
  const ph = (h) => `${(h / H) * 100}%`;

  // Cover block style: erases background image text with solid color
  const cover = (x, y, w, h, color) => ({
    position: 'absolute',
    left: px(x), top: py(y),
    width: pw(w), height: ph(h),
    backgroundColor: color,
    zIndex: 5,
  });

  // Text overlay style: renders dynamic text at exact Figma position
  const text = (x, y, w, h, style = {}) => ({
    position: 'absolute',
    left: px(x), top: py(y),
    width: pw(w), height: ph(h),
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    alignItems: 'center',
    zIndex: 10,
    lineHeight: `${ph(h)}`,
    ...style,
  });

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: '#ffffff',
      fontFamily: 'Inter, sans-serif',
    }}>

      {/* ── Background image (full frame_salary.png) ── */}
      <img
        src={frameSalary}
        alt="Salary Background"
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'fill',
          zIndex: 1,
          pointerEvents: 'none',
        }}
        draggable={false}
      />

      {/* ── Back button hotspot ── */}
      <button
        onClick={() => onNavigate('insurance-list', { transition: 'slide-up', direction: 'right' })}
        style={{
          position: 'absolute',
          left: px(10), top: py(25),
          width: pw(45), height: ph(45),
          background: 'transparent',
          border: 'none', outline: 'none',
          cursor: 'pointer', zIndex: 30,
        }}
        aria-label="Back"
      />

      {/* ════════════════════════════════════════════
          COVER + OVERLAY LAYER  (zIndex 5-10)
          ════════════════════════════════════════════ */}

      {/*
        ─── DATE ROW ───
        Figma: "Từ tháng: 04/2025"  x=45 y=125 w=124 h=17
               "Đến tháng: 03/2026" x=226 y=125 w=134 h=17
        Strategy: cover entire date value area with white, then overlay dynamic text.
        The background image already has "Từ tháng:" and "Đến tháng:" labels printed.
        Only the DATE VALUES need to be replaced.
        "Từ tháng:" label text ends at approx x=108 in the image.
        "Đến tháng:" label text ends at approx x=295.
        So cover the VALUE portions only.
      */}
      {/* Cover "04/2025" value (right part of left date block) */}
      <div style={cover(108, 122, 62, 20, '#ffffff')} />
      {/* Cover "03/2026" value (right part of right date block) */}
      <div style={cover(292, 122, 70, 20, '#ffffff')} />

      {/* Overlay: date values only (bold, positioned right after label) */}
      <div style={text(108, 124, 62, 17, { fontSize: '14px', color: '#2a2b2b', fontWeight: 700 })}>
        {rowData?.from || '04/2025'}
      </div>
      <div style={text(292, 124, 78, 17, { fontSize: '14px', color: '#2a2b2b', fontWeight: 700 })}>
        {rowData?.to || '03/2026'}
      </div>


      {/*
        ─── BLUE CARD ───
        Background image has ALL card content baked in as static text.
        Strategy: cover the ENTIRE card interior with solid #38679f,
        then re-render ALL text rows (both labels and values) as dynamic HTML.

        Figma card text spans y=174 to y=276 (with 17px line height).
        Card itself likely starts y≈160, ends y≈283 (adding ~8-10px padding each side).
        Use y=157 to y=283 as cover, full width x=30 to x=372.
      */}
      <div style={cover(30, 157, 342, 126, '#38679f')} />

      {/* Row 1: Chức vụ — Figma: label x=30,y=174,w=59 | value x=96,y=174,w=128 */}
      <div style={text(30, 174, 59, 17, { fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontWeight: 400 })}>
        Chức vụ:
      </div>
      <div style={text(96, 174, 276, 17, { fontSize: '14px', color: '#ffffff', fontWeight: 700 })}>
        {rowData?.position || 'Nhân viên kỹ thuật'}
      </div>

      {/* Row 2: Đơn vị công tác — Figma: label x=30,y=191,w=108 | value x=141,y=191,w=197 / line2 x=30,y=208 */}
      <div style={text(30, 191, 108, 17, { fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontWeight: 400 })}>
        Đơn vị công tác:
      </div>
      <div style={text(141, 191, 231, 17, { fontSize: '14px', color: '#ffffff', fontWeight: 700, overflow: 'hidden' })}>
        {company.line1}
      </div>
      {company.line2 && (
        <div style={text(30, 208, 342, 17, { fontSize: '14px', color: '#ffffff', fontWeight: 700 })}>
          {company.line2}
        </div>
      )}

      {/* Row 3: Nơi làm việc — Figma: label x=30,y=225,w=85 | value x=119,y=225,w=232 / line2 x=30,y=242 */}
      <div style={text(30, 225, 85, 17, { fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontWeight: 400 })}>
        Nơi làm việc:
      </div>
      <div style={text(119, 225, 253, 17, { fontSize: '14px', color: '#ffffff', fontWeight: 700, overflow: 'hidden' })}>
        {address.line1}
      </div>
      {address.line2 && (
        <div style={text(30, 242, 342, 17, { fontSize: '14px', color: '#ffffff', fontWeight: 700 })}>
          {address.line2}
        </div>
      )}

      {/* Row 4: Loại tiền — Figma: label x=30,y=259,w=60 | value x=96,y=259,w=31 */}
      <div style={text(30, 259, 60, 17, { fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontWeight: 400 })}>
        Loại tiền:
      </div>
      <div style={text(96, 259, 60, 17, { fontSize: '14px', color: '#ffffff', fontWeight: 700 })}>
        VND
      </div>


      {/*
        ─── SALARY TABLE ───
        Background image has "14.500.000" values baked in.
        Strategy: cover only the VALUE cells (right column), keep labels and borders.
        Figma: value col x=290, y=295 / 323, w=77, h=17
        Cover from x=242 (after vertical border) to x=372 (right table edge).
      */}
      {/* Cover row 1 value cell */}
      <div style={cover(242, 287, 128, 27, '#ffffff')} />
      {/* Cover row 2 value cell */}
      <div style={cover(242, 315, 128, 27, '#ffffff')} />

      {/* Overlay: row 1 value — Figma: x=290 y=295 w=77 h=17 */}
      <div style={text(242, 295, 122, 17, {
        fontSize: '14px', color: '#2a2b2b', fontWeight: 500,
        justifyContent: 'flex-end', paddingRight: pw(8),
      })}>
        {formattedSalary}
      </div>

      {/* Overlay: row 2 value — Figma: x=290 y=323 w=77 h=17 */}
      <div style={text(242, 323, 122, 17, {
        fontSize: '14px', color: '#2a2b2b', fontWeight: 500,
        justifyContent: 'flex-end', paddingRight: pw(8),
      })}>
        {formattedSalary}
      </div>

    </div>
  );
};

export default SalaryDetail;
