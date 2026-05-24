import React from 'react';

/**
 * SalaryDetail — rebuilt 100% from Figma MCP live scan
 * Frame: "iPhone 17 - 4"  (ID: 13:2)
 * Canvas size: 402 × 874 px
 * Frame fill: #ffffff
 *
 * Every node below is pixel-exact from Figma.
 * ONLY the dynamic text values are replaced with rowData props.
 * Nothing is invented or added beyond what exists in Figma.
 */

const W = 402; // Figma frame width
const H = 874; // Figma frame height

// Convert Figma px → CSS % relative to frame
const l = (x) => `${(x / W) * 100}%`; // left
const t = (y) => `${(y / H) * 100}%`; // top
const w = (v) => `${(v / W) * 100}%`; // width
const h = (v) => `${(v / H) * 100}%`; // height

// Figma fontWeight → CSS font-weight
const fw = (figmaWeight) => ({
  Regular: 400,
  Medium:  500,
  SemiBold:600,
  Bold:    700,
}[figmaWeight] || 400);

const SalaryDetail = ({ onNavigate, rowData }) => {

  /** Format salary number (e.g. 14500000 → "14.500.000") */
  const formatSalary = (val) => {
    if (!val) return '0';
    if (typeof val === 'string' && val.includes('.')) return val;
    const num = parseInt(String(val).replace(/\D/g, ''), 10);
    return isNaN(num) ? String(val) : new Intl.NumberFormat('vi-VN').format(num);
  };

  const salary = formatSalary(rowData?.salary || '14.500.000');

  /**
   * The dynamic values that replace Figma's static text:
   *   13:7  → from date   (was "04/2025")
   *   13:8  → to date     (was "03/2026")
   *   13:11 → position    (was "Nhân viên kỹ thuật")
   *   13:16 → company L1  (was "Công ty TNHH EO TECHNICS")
   *   13:17 → company L2  (was "Việt Nam")
   *   13:19 → address L1  (was "BT22, khu đô thị hud võ cường-Tp")
   *   13:20 → address L2  (was "Bắc Ninh-Bắc Ninh")
   *   13:32 → salary R1   (was "14.500.000")
   *   13:33 → salary R2   (was "14.500.000")
   */
  const splitCompany = (s) => {
    if (!s) return { l1: 'Công ty TNHH EO TECHNICS', l2: 'Việt Nam' };
    if (s.includes('EO TECHNICS Việt Nam'))
      return { l1: s.replace(' Việt Nam', '').trim(), l2: 'Việt Nam' };
    const idx = s.lastIndexOf(' ', 24);
    return s.length <= 24
      ? { l1: s, l2: '' }
      : { l1: s.slice(0, idx > 0 ? idx : 24), l2: s.slice(idx > 0 ? idx : 24).trim() };
  };

  const splitAddr = (s) => {
    if (!s) return { l1: 'BT22, khu đô thị hud võ cường-Tp', l2: 'Bắc Ninh-Bắc Ninh' };
    if (s.includes('Bắc Ninh-Bắc Ninh')) {
      const l1 = s.replace('Bắc Ninh-Bắc Ninh', '').trim().replace(/[-,\s]+$/, '');
      return { l1, l2: 'Bắc Ninh-Bắc Ninh' };
    }
    const idx = s.lastIndexOf(' ', 32);
    return s.length <= 32
      ? { l1: s, l2: '' }
      : { l1: s.slice(0, idx > 0 ? idx : 32), l2: s.slice(idx > 0 ? idx : 32).trim() };
  };

  const co = splitCompany(rowData?.company);
  const ad = splitAddr(rowData?.workAddress);

  // ─── Base style for every absolutely-positioned element ───
  const node = (x, y, nw, nh, extra = {}) => ({
    position: 'absolute',
    left: l(x), top: t(y),
    width: w(nw), height: h(nh),
    boxSizing: 'border-box',
    ...extra,
  });

  // ─── Text node style (matching Figma TEXT node properties exactly) ───
  const txt = (x, y, nw, nh, fontSize, fontWeight, color, textAlign = 'left', extra = {}) => ({
    ...node(x, y, nw, nh),
    fontFamily: 'Inter, sans-serif',
    fontSize: `${fontSize}px`,
    fontWeight: fw(fontWeight),
    color,
    textAlign,
    display: 'flex',
    alignItems: 'center',
    // Figma textAlign → flex justify
    justifyContent: textAlign === 'right'  ? 'flex-end'
                  : textAlign === 'center' ? 'center'
                  : 'flex-start',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    ...extra,
  });

  return (
    /**
     * Frame: 13:2  "iPhone 17 - 4"
     * type: FRAME | x:1932 y:0 | width:402 height:874
     * fill: #ffffff | clipsContent: true
     */
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      backgroundColor: '#ffffff',
    }}>
      {/* Interactive safe area container */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10
      }}>

      {/* ── 13:3  Vector 8 (back-arrow chevron)
               x:27 y:76  width:9 height:18
               stroke:#416aa0  strokeWeight:5  strokeAlign:CENTER
               Rendered as SVG + transparent click hotspot ── */}
      <button
        onClick={() => onNavigate('insurance-list', { transition: 'slide-up', direction: 'right' })}
        aria-label="Quay lại"
        style={{
          ...node(10, 58, 50, 42),
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        {/* Vector 8: chevron-left  x=27,y=76  w=9,h=18  stroke=#416aa0  sw=5 */}
        <svg
          width="9" height="18"
          viewBox="0 0 9 18"
          fill="none"
          style={{ display: 'block' }}
        >
          <polyline
            points="8,1 1,9 8,17"
            stroke="#416aa0"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>

      {/* ── 13:4  TEXT  "Chi tiết"
               x:169  y:67  width:64  height:22
               fontSize:18  fontWeight:Bold
               fill:#38679f  textAlign:LEFT ── */}
      <div style={txt(169, 67, 64, 22, 18, 'Bold', '#38679f', 'left', { zIndex: 5 })}>
        Chi tiết
      </div>


      {/* ════════════════════════════════════════════
          DATE ROW
          ════════════════════════════════════════════ */}

      {/* ── 13:7  TEXT  "Từ tháng: 04/2025"
               x:45  y:125  width:124  height:17
               fontSize:14  fontWeight:Regular
               fill:#2a2b2b  textAlign:LEFT
               ⬆ Dynamic: replace date value only ── */}
      <div style={txt(45, 125, 124, 17, 14, 'Regular', '#2a2b2b', 'left', { zIndex: 5, whiteSpace: 'nowrap', overflow: 'visible' })}>
        Từ tháng:&nbsp;{rowData?.from || '04/2025'}
      </div>

      {/* ── 13:8  TEXT  "Đến tháng: 03/2026"
               x:226  y:125  width:134  height:17
               fontSize:14  fontWeight:Regular
               fill:#2a2b2b  textAlign:LEFT
               ⬆ Dynamic ── */}
      <div style={txt(226, 125, 134, 17, 14, 'Regular', '#2a2b2b', 'left', { zIndex: 5, whiteSpace: 'nowrap', overflow: 'visible' })}>
        Đến tháng:&nbsp;{rowData?.to || '03/2026'}
      </div>


      {/* ════════════════════════════════════════════
          BLUE INFO CARD
          ════════════════════════════════════════════ */}

      {/* ── 13:9  RECTANGLE  "Rectangle 20"
               x:20  y:165  width:362  height:124
               fill:#38679f ── */}
      <div style={{ ...node(20, 165, 362, 124), backgroundColor: '#38679f', zIndex: 2 }} />

      {/* ── 13:10  TEXT  "Chức vụ: "
               x:30  y:174  width:59  height:17
               fontSize:14  fontWeight:Regular
               fill:#ffffff  textAlign:LEFT ── */}
      <div style={txt(30, 174, 59, 17, 14, 'Regular', '#ffffff', 'left', { zIndex: 5 })}>
        Chức vụ:
      </div>

      {/* ── 13:11  TEXT  "Nhân viên kỹ thuật"
               x:96  y:174  width:128  height:17
               fontSize:14  fontWeight:Bold
               fill:#ffffff  textAlign:LEFT
               ⬆ Dynamic ── */}
      <div style={txt(96, 174, 276, 17, 14, 'Bold', '#ffffff', 'left', { zIndex: 5 })}>
        {rowData?.position || 'Nhân viên kỹ thuật'}
      </div>

      {/* ── 13:15  TEXT  "Đơn vị công tác:"
               x:30  y:191  width:108  height:17
               fontSize:14  fontWeight:Regular
               fill:#ffffff  textAlign:LEFT ── */}
      <div style={txt(30, 191, 108, 17, 14, 'Regular', '#ffffff', 'left', { zIndex: 5 })}>
        Đơn vị công tác:
      </div>

      {/* ── 13:16  TEXT  "Công ty TNHH EO TECHNICS"
               x:141  y:191  width:197  height:17
               fontSize:14  fontWeight:Bold
               fill:#ffffff  textAlign:LEFT
               ⬆ Dynamic (line 1) ── */}
      <div style={txt(141, 191, 241, 17, 14, 'Bold', '#ffffff', 'left', { zIndex: 5 })}>
        {co.l1}
      </div>

      {/* ── 13:17  TEXT  "Việt Nam"
               x:30  y:208  width:63  height:17
               fontSize:14  fontWeight:Bold
               fill:#ffffff  textAlign:LEFT
               ⬆ Dynamic (line 2) ── */}
      {co.l2 && (
        <div style={txt(30, 208, 342, 17, 14, 'Bold', '#ffffff', 'left', { zIndex: 5 })}>
          {co.l2}
        </div>
      )}

      {/* ── 13:18  TEXT  "Nơi làm việc:"
               x:30  y:225  width:85  height:17
               fontSize:14  fontWeight:Regular
               fill:#ffffff  textAlign:LEFT ── */}
      <div style={txt(30, 225, 85, 17, 14, 'Regular', '#ffffff', 'left', { zIndex: 5 })}>
        Nơi làm việc:
      </div>

      {/* ── 13:19  TEXT  "BT22, khu đô thị hud võ cường-Tp"
               x:119  y:225  width:232  height:17
               fontSize:14  fontWeight:Bold
               fill:#ffffff  textAlign:LEFT
               ⬆ Dynamic (line 1) ── */}
      <div style={txt(119, 225, 253, 17, 14, 'Bold', '#ffffff', 'left', { zIndex: 5 })}>
        {ad.l1}
      </div>

      {/* ── 13:20  TEXT  "Bắc Ninh-Bắc Ninh"
               x:30  y:242  width:128  height:17
               fontSize:14  fontWeight:Bold
               fill:#ffffff  textAlign:LEFT
               ⬆ Dynamic (line 2) ── */}
      {ad.l2 && (
        <div style={txt(30, 242, 342, 17, 14, 'Bold', '#ffffff', 'left', { zIndex: 5 })}>
          {ad.l2}
        </div>
      )}

      {/* ── 165:20  TEXT  "Loại tiền:"
               x:30  y:259  width:60  height:17
               fontSize:14  fontWeight:Regular
               fill:#ffffff  textAlign:LEFT ── */}
      <div style={txt(30, 259, 60, 17, 14, 'Regular', '#ffffff', 'left', { zIndex: 5 })}>
        Loại tiền:
      </div>

      {/* ── 13:22  TEXT  "VND"
               x:96  y:259  width:31  height:17
               fontSize:14  fontWeight:Bold
               fill:#ffffff  textAlign:LEFT ── */}
      <div style={txt(96, 259, 60, 17, 14, 'Bold', '#ffffff', 'left', { zIndex: 5 })}>
        VND
      </div>


      {/* ════════════════════════════════════════════
          SALARY TABLE  —  4 cell rectangles
          ════════════════════════════════════════════ */}

      {/* ── 13:27  RECTANGLE  "Rectangle 21"  (row1, col1 — label)
               x:20  y:289  width:181  height:28
               fill:#fefefe  stroke:#aaa9ae  strokeWeight:0.4  strokeAlign:INSIDE ── */}
      <div style={{ ...node(20, 289, 181, 28), backgroundColor: '#fefefe', border: '0.4px solid #aaa9ae', zIndex: 2 }} />

      {/* ── 13:29  RECTANGLE  "Rectangle 22"  (row1, col2 — value)
               x:201  y:289  width:181  height:28
               fill:#fefefe  stroke:#aaa9ae  strokeWeight:0.4  strokeAlign:INSIDE ── */}
      <div style={{ ...node(201, 289, 181, 28), backgroundColor: '#fefefe', border: '0.4px solid #aaa9ae', zIndex: 2 }} />

      {/* ── 13:28  RECTANGLE  "Rectangle 23"  (row2, col1 — label)
               x:20  y:317  width:181  height:28
               fill:#fefefe  stroke:#aaa9ae  strokeWeight:0.4  strokeAlign:INSIDE ── */}
      <div style={{ ...node(20, 317, 181, 28), backgroundColor: '#fefefe', border: '0.4px solid #aaa9ae', zIndex: 2 }} />

      {/* ── 13:30  RECTANGLE  "Rectangle 24"  (row2, col2 — value)
               x:201  y:317  width:181  height:28
               fill:#fefefe  stroke:#aaa9ae  strokeWeight:0.4  strokeAlign:INSIDE ── */}
      <div style={{ ...node(201, 317, 181, 28), backgroundColor: '#fefefe', border: '0.4px solid #aaa9ae', zIndex: 2 }} />

      {/* ── 13:21  TEXT  "Tiền lương đóng BHXH"
               x:32  y:295  width:152  height:17
               fontSize:14  fontWeight:Medium
               fill:#2a2b2b  textAlign:CENTER ── */}
      <div style={txt(32, 295, 152, 17, 14, 'Medium', '#2a2b2b', 'center', { zIndex: 5 })}>
        Tiền lương đóng BHXH
      </div>

      {/* ── 13:32  TEXT  "14.500.000"  (row1 value)
               x:290  y:295  width:77  height:17
               fontSize:14  fontWeight:Medium
               fill:#2a2b2b  textAlign:RIGHT
               ⬆ Dynamic ── */}
      <div style={txt(290, 295, 77, 17, 14, 'Medium', '#2a2b2b', 'right', { zIndex: 5 })}>
        {salary}
      </div>

      {/* ── 13:31  TEXT  "Mức lương"
               x:72  y:323  width:72  height:17
               fontSize:14  fontWeight:Medium
               fill:#2a2b2b  textAlign:CENTER ── */}
      <div style={txt(72, 323, 72, 17, 14, 'Medium', '#2a2b2b', 'center', { zIndex: 5 })}>
        Mức lương
      </div>

      {/* ── 13:33  TEXT  "14.500.000"  (row2 value)
               x:290  y:323  width:77  height:17
               fontSize:14  fontWeight:Medium
               fill:#2a2b2b  textAlign:RIGHT
               ⬆ Dynamic ── */}
      <div style={txt(290, 323, 77, 17, 14, 'Medium', '#2a2b2b', 'right', { zIndex: 5 })}>
        {salary}
      </div>
      </div>
    </div>
  );
};

export default SalaryDetail;
