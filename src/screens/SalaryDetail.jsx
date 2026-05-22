import React from 'react';

// ─── Figma Frame: iPhone 17 - 4  (ID: 13:2) ───
// Size: 402 × 874 px
// Source: Figma MCP live scan — all coordinates are pixel-exact from Figma

const W = 402;
const H = 874;

// ─── Pixel helpers ───
const px = (v) => `${(v / W) * 100}%`;
const py = (v) => `${(v / H) * 100}%`;
const pw = (v) => `${(v / W) * 100}%`;
const ph = (v) => `${(v / H) * 100}%`;

const SalaryDetail = ({ onNavigate, rowData }) => {

  // ─── Format salary number ───
  const formatSalary = (val) => {
    if (!val) return '0';
    if (typeof val === 'string' && val.includes('.')) return val;
    const num = parseInt(String(val).replace(/\D/g, ''), 10);
    if (isNaN(num)) return val;
    return new Intl.NumberFormat('vi-VN').format(num);
  };

  const formattedSalary = formatSalary(rowData?.salary || '14.500.000');

  // ─── Split company name into 2 lines (matching Figma layout) ───
  const splitCompany = (s) => {
    if (!s) return { line1: 'Công ty TNHH EO TECHNICS', line2: 'Việt Nam' };
    if (s.includes('EO TECHNICS Việt Nam')) {
      return { line1: s.replace('Việt Nam', '').trim(), line2: 'Việt Nam' };
    }
    if (s.length <= 24) return { line1: s, line2: '' };
    const idx = s.lastIndexOf(' ', 24);
    return idx > 0
      ? { line1: s.slice(0, idx), line2: s.slice(idx).trim() }
      : { line1: s.slice(0, 24), line2: s.slice(24) };
  };

  // ─── Split address into 2 lines ───
  const splitAddress = (s) => {
    if (!s) return { line1: 'BT22, khu đô thị hud võ cường-Tp', line2: 'Bắc Ninh-Bắc Ninh' };
    if (s.includes('Bắc Ninh-Bắc Ninh')) {
      const line1 = s.replace('Bắc Ninh-Bắc Ninh', '').trim().replace(/[-,]$/, '').trim();
      return { line1, line2: 'Bắc Ninh-Bắc Ninh' };
    }
    if (s.length <= 32) return { line1: s, line2: '' };
    const idx = s.lastIndexOf(' ', 32);
    return idx > 0
      ? { line1: s.slice(0, idx), line2: s.slice(idx).trim() }
      : { line1: s.slice(0, 32), line2: s.slice(32) };
  };

  const company = splitCompany(rowData?.company);
  const address = splitAddress(rowData?.workAddress);

  // ─── Common style builders ───
  const abs = (x, y, w, h, extra = {}) => ({
    position: 'absolute',
    left: px(x), top: py(y),
    width: pw(w), height: ph(h),
    boxSizing: 'border-box',
    ...extra,
  });

  const figmaText = (x, y, w, h, fontSize, fontWeight, color, extra = {}) => ({
    ...abs(x, y, w, h),
    fontFamily: 'Inter, sans-serif',
    fontSize: `${fontSize}px`,
    fontWeight: fontWeight,
    color: color,
    display: 'flex',
    alignItems: 'center',
    lineHeight: '1',
    ...extra,
  });

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      backgroundColor: '#ffffff',   // Figma frame fill: #ffffff
      fontFamily: 'Inter, sans-serif',
    }}>

      {/* ══════════════════════════════════════════════════════════
          HEADER  (blue gradient — Figma: top navigation area)
          Figma shows "QUẢN LÝ CÁ NHÂN" style blue header at y=0–105
          Header background: blue gradient like other screens
          ══════════════════════════════════════════════════════════ */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0,
        width: '100%',
        height: py(105),
        background: 'linear-gradient(180deg, #01aef2 0%, #0073c6 100%)',
        zIndex: 1,
      }} />

      {/* ── Back Arrow (Figma: Vector 8, x=27 y=76 w=9 h=18, stroke=#416aa0→white on gradient) ── */}
      <button
        onClick={() => onNavigate('insurance-list', { transition: 'slide-up', direction: 'right' })}
        style={{
          position: 'absolute',
          left: px(10), top: py(60),
          width: pw(45), height: ph(40),
          background: 'transparent',
          border: 'none', outline: 'none',
          cursor: 'pointer', zIndex: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        aria-label="Back"
      >
        {/* Chevron left icon */}
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
          <path d="M9 1L1 9L9 17" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Title: "Chi tiết" — Figma: 13:4  x=169 y=67 w=64 h=22  fontSize=18 Bold #38679f
          On gradient header → use white text instead ── */}
      <div style={figmaText(169, 67, 64, 22, 18, 700, '#ffffff', { justifyContent: 'center', zIndex: 10 })}>
        Chi tiết
      </div>

      {/* ══════════════════════════════════════════════════════════
          DATE ROW
          Figma: 13:7  "Từ tháng: 04/2025"   x=45  y=125 w=124 h=17  Regular  #2a2b2b
                 13:8  "Đến tháng: 03/2026"  x=226 y=125 w=134 h=17  Regular  #2a2b2b
          ══════════════════════════════════════════════════════════ */}
      {/* Left: "Từ tháng:" label + dynamic value */}
      <div style={figmaText(45, 125, 124, 17, 14, 400, '#2a2b2b', { zIndex: 5 })}>
        Từ tháng:&nbsp;
        <span style={{ fontWeight: 700 }}>{rowData?.from || '04/2025'}</span>
      </div>

      {/* Right: "Đến tháng:" label + dynamic value */}
      <div style={figmaText(226, 125, 134, 17, 14, 400, '#2a2b2b', { zIndex: 5 })}>
        Đến tháng:&nbsp;
        <span style={{ fontWeight: 700 }}>{rowData?.to || '03/2026'}</span>
      </div>

      {/* ══════════════════════════════════════════════════════════
          BLUE INFO CARD
          Figma: 13:9  Rectangle 20  x=20 y=165 w=362 h=124 fill=#38679f
          ══════════════════════════════════════════════════════════ */}
      <div style={{
        ...abs(20, 165, 362, 124),
        backgroundColor: '#38679f',
        zIndex: 2,
      }} />

      {/* Row 1 — Chức vụ
          Label:  13:10  x=30 y=174 w=59  h=17  Regular  rgba(255,255,255,0.85)
          Value:  13:11  x=96 y=174 w=128 h=17  Bold     #ffffff              */}
      <div style={figmaText(30, 174, 59, 17, 14, 400, 'rgba(255,255,255,0.85)', { zIndex: 5 })}>
        Chức vụ:
      </div>
      <div style={figmaText(96, 174, 276, 17, 14, 700, '#ffffff', { zIndex: 5 })}>
        {rowData?.position || 'Nhân viên kỹ thuật'}
      </div>

      {/* Row 2 — Đơn vị công tác
          Label: 13:15  x=30  y=191  w=108  Regular  rgba(255,255,255,0.85)
          Value: 13:16  x=141 y=191  w=197  Bold     #ffffff  (line 1)
                 13:17  x=30  y=208  w=63   Bold     #ffffff  (line 2)        */}
      <div style={figmaText(30, 191, 108, 17, 14, 400, 'rgba(255,255,255,0.85)', { zIndex: 5 })}>
        Đơn vị công tác:
      </div>
      <div style={figmaText(141, 191, 231, 17, 14, 700, '#ffffff', { zIndex: 5, overflow: 'hidden' })}>
        {company.line1}
      </div>
      {company.line2 && (
        <div style={figmaText(30, 208, 342, 17, 14, 700, '#ffffff', { zIndex: 5 })}>
          {company.line2}
        </div>
      )}

      {/* Row 3 — Nơi làm việc
          Label: 13:18  x=30  y=225  w=85   Regular  rgba(255,255,255,0.85)
          Value: 13:19  x=119 y=225  w=232  Bold     #ffffff  (line 1)
                 13:20  x=30  y=242  w=128  Bold     #ffffff  (line 2)        */}
      <div style={figmaText(30, 225, 85, 17, 14, 400, 'rgba(255,255,255,0.85)', { zIndex: 5 })}>
        Nơi làm việc:
      </div>
      <div style={figmaText(119, 225, 253, 17, 14, 700, '#ffffff', { zIndex: 5, overflow: 'hidden' })}>
        {address.line1}
      </div>
      {address.line2 && (
        <div style={figmaText(30, 242, 342, 17, 14, 700, '#ffffff', { zIndex: 5 })}>
          {address.line2}
        </div>
      )}

      {/* Row 4 — Loại tiền
          Label: 165:20  x=30 y=259  w=60   Regular  rgba(255,255,255,0.85)
          Value: 13:22   x=96 y=259  w=31   Bold     #ffffff                 */}
      <div style={figmaText(30, 259, 60, 17, 14, 400, 'rgba(255,255,255,0.85)', { zIndex: 5 })}>
        Loại tiền:
      </div>
      <div style={figmaText(96, 259, 60, 17, 14, 700, '#ffffff', { zIndex: 5 })}>
        VND
      </div>

      {/* ══════════════════════════════════════════════════════════
          SALARY TABLE  (4 rectangles = 2 rows × 2 cols)
          Figma:
            13:27  Rectangle 21  x=20  y=289  w=181 h=28  fill=#fefefe stroke=#aaa9ae 0.4
            13:29  Rectangle 22  x=201 y=289  w=181 h=28  fill=#fefefe stroke=#aaa9ae 0.4
            13:28  Rectangle 23  x=20  y=317  w=181 h=28  fill=#fefefe stroke=#aaa9ae 0.4
            13:30  Rectangle 24  x=201 y=317  w=181 h=28  fill=#fefefe stroke=#aaa9ae 0.4

          Text:
            13:21  "Tiền lương đóng BHXH"  x=32  y=295  w=152 h=17  Medium  #2a2b2b
            13:32  "14.500.000"             x=290 y=295  w=77  h=17  Medium  #2a2b2b
            13:31  "Mức lương"              x=72  y=323  w=72  h=17  Medium  #2a2b2b
            13:33  "14.500.000"             x=290 y=323  w=77  h=17  Medium  #2a2b2b
          ══════════════════════════════════════════════════════════ */}

      {/* Row 1, Col 1 — label cell */}
      <div style={{
        ...abs(20, 289, 181, 28),
        backgroundColor: '#fefefe',
        border: '0.4px solid #aaa9ae',
        zIndex: 2,
      }} />
      {/* Row 1, Col 2 — value cell */}
      <div style={{
        ...abs(201, 289, 181, 28),
        backgroundColor: '#fefefe',
        border: '0.4px solid #aaa9ae',
        zIndex: 2,
      }} />
      {/* Row 2, Col 1 — label cell */}
      <div style={{
        ...abs(20, 317, 181, 28),
        backgroundColor: '#fefefe',
        border: '0.4px solid #aaa9ae',
        zIndex: 2,
      }} />
      {/* Row 2, Col 2 — value cell */}
      <div style={{
        ...abs(201, 317, 181, 28),
        backgroundColor: '#fefefe',
        border: '0.4px solid #aaa9ae',
        zIndex: 2,
      }} />

      {/* Table text — Row 1 */}
      {/* 13:21  x=32 y=295 w=152 h=17  Medium  #2a2b2b */}
      <div style={figmaText(32, 295, 152, 17, 14, 500, '#2a2b2b', { zIndex: 5 })}>
        Tiền lương đóng BHXH
      </div>
      {/* 13:32  x=290 y=295 w=77 h=17  Medium  #2a2b2b (right-aligned in its cell 201–382) */}
      <div style={figmaText(201, 295, 181, 17, 14, 500, '#2a2b2b', { zIndex: 5, justifyContent: 'flex-end', paddingRight: pw(8) })}>
        {formattedSalary}
      </div>

      {/* Table text — Row 2 */}
      {/* 13:31  x=72 y=323 w=72 h=17  Medium  #2a2b2b */}
      <div style={figmaText(72, 323, 130, 17, 14, 500, '#2a2b2b', { zIndex: 5 })}>
        Mức lương
      </div>
      {/* 13:33  x=290 y=323 w=77 h=17  Medium  #2a2b2b */}
      <div style={figmaText(201, 323, 181, 17, 14, 500, '#2a2b2b', { zIndex: 5, justifyContent: 'flex-end', paddingRight: pw(8) })}>
        {formattedSalary}
      </div>

    </div>
  );
};

export default SalaryDetail;
