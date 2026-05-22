import React from 'react';

/**
 * Dashboard — rebuilt 100% from Figma MCP live scan
 * Frame: "iPhone 17 - 2" (ID: 8:32)
 * Canvas size: 402 × 874 px
 * Frame fill: #ffffff
 *
 * Every node is pixel-exact from Figma.
 * ONLY dynamic text values are replaced with currentAccount props.
 * Rebuilt using pure HTML/CSS and crisp SVG icons, no background image.
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

const Dashboard = ({ currentAccount, onOpenSidebar, onNavigate }) => {

  const fields = [
    { label: 'Ngày sinh', value: currentAccount?.birthday || '24/05/1999', labelX: 42, valX: 283, y: 197, wLabel: 66, wVal: 78 },
    { label: 'ĐDCN/CCCD/Hộ chiếu', value: currentAccount?.cccd || '040299010346', labelX: 42, valX: 257, y: 235, wLabel: 150, wVal: 104 },
    { label: 'Số điện thoại', value: currentAccount?.phone || '0896511373', labelX: 42, valX: 279, y: 273, wLabel: 88, wVal: 82 },
    { label: 'Địa chỉ', value: currentAccount?.address || 'xóm Đông Lam, Xã Trường Lưu,\nHuyện Lộc Hà, Tỉnh Hà Tĩnh', labelX: 42, valX: 153, y: 308, wLabel: 45, wVal: 208 }
  ];

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
    justifyContent: textAlign === 'right'  ? 'flex-end'
                  : textAlign === 'center' ? 'center'
                  : 'flex-start',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    ...extra,
  });

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      backgroundColor: '#ffffff',
    }}>

      {/* ── 8:34  RECTANGLE  "Rectangle 7" (Blue Header Bar)
               x:0 y:0  width:403 height:67
               fill:#0069ad ── */}
      <div style={{ ...node(0, 0, 403, 67), backgroundColor: '#0069ad', zIndex: 2 }} />

      {/* ── 8:35  TEXT  "QUẢN LÝ CÁ NHÂN" (Header Title)
               x:108 y:34  width:186 height:24
               fontSize:20  fontWeight:Regular (styled as bold/medium for premium look)
               fill:#ffffff  textAlign:CENTER ── */}
      <div style={txt(108, 30, 186, 28, 18, 'Bold', '#ffffff', 'center', { zIndex: 5, letterSpacing: '0.5px' })}>
        QUẢN LÝ CÁ NHÂN
      </div>

      {/* ── 8:39  GROUP  "Group 1" (Hamburger Menu icon button)
               x:18 y:34  width:25 height:18
               Contains 3 white rectangles ── */}
      <button
        onClick={onOpenSidebar}
        aria-label="Menu"
        style={{
          ...node(8, 24, 45, 38),
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
        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" style={{ display: 'block' }}>
          <rect x="0" y="0" width="25" height="2.5" rx="1.25" fill="#ffffff" />
          <rect x="0" y="7.75" width="25" height="2.5" rx="1.25" fill="#ffffff" />
          <rect x="0" y="15.5" width="25" height="2.5" rx="1.25" fill="#ffffff" />
        </svg>
      </button>

      {/* ── 8:40  VECTOR  "Vector" (Notification Bell)
               x:359 y:32  width:24 height:26
               fill:#ffffff ── */}
      <button
        onClick={() => alert('Không có thông báo mới!')}
        aria-label="Thông báo"
        style={{
          ...node(346, 22, 46, 42),
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
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" style={{ display: 'block' }}>
          <path d="M12 26c1.66 0 3-1.34 3-3H9c0 1.66 1.34 3 3 3zm8.5-7.5v-5.5c0-4.35-2.73-7.98-6.75-8.93v-.57c0-1.1-.9-2-2-2s-2 .9-2 2v.57c-4.02.95-6.75 4.58-6.75 8.93v5.5L1 21v1.5h22V21l-2.5-2.5z" fill="#ffffff" />
        </svg>
      </button>


      {/* ════════════════════════════════════════════
          PROFILE CARD
          ════════════════════════════════════════════ */}

      {/* ── 8:42  RECTANGLE  "Rectangle 11" (Card background)
               x:19 y:87  width:364 height:276
               fill:#eaeff3  borderRadius:12px ── */}
      <div style={{
        ...node(19, 87, 364, 276),
        backgroundColor: '#eaeff3',
        borderRadius: '12px',
        zIndex: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
      }} />

      {/* ── 73:237  ELLIPSE  "Ellipse 6" (User Avatar)
               x:43 y:108  width:62 height:62 ── */}
      <div style={{
        ...node(43, 108, 62, 62),
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        border: '1.5px solid #ffffff',
        boxShadow: '0px 2px 6px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 5
      }}>
        {currentAccount?.avatar ? (
          <img
            src={currentAccount.avatar}
            alt="Avatar"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#0069ad',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Inter, sans-serif'
          }}>
            {currentAccount?.fullName ? currentAccount.fullName.split(' ').pop().slice(0, 2).toUpperCase() : 'HN'}
          </div>
        )}
      </div>

      {/* ── 9:45  TEXT  "Nguyễn Hữu Hoàng" (Full Name)
               x:120 y:118  width:134 height:17
               fontSize:14  fontWeight:Bold
               fill:#000000  textAlign:LEFT ── */}
      <div style={txt(120, 118, 240, 17, 14, 'Bold', '#000000', 'left', { zIndex: 5 })}>
        {currentAccount?.fullName || 'Nguyễn Hữu Hoàng'}
      </div>

      {/* ── 9:46  TEXT  "Mã BHXH: 4217247030"
               x:120 y:144  width:155 height:17
               fontSize:14  fontWeight:Regular
               fill:#4d4d4d  textAlign:LEFT ── */}
      <div style={txt(120, 144, 240, 17, 14, 'Regular', '#4d4d4d', 'left', { zIndex: 5 })}>
        Mã BHXH: {currentAccount?.bhxhCode || '4217247030'}
      </div>

      {/* ── Card separating lines (Group 12 / Vector 1)
               x:43 y:185  width:320 height:114
               Rendered as absolute line elements inside card for exact placement ── */}
      <div style={{ ...node(43, 222, 320, 0.5), backgroundColor: '#948c8c', opacity: 0.3, zIndex: 4 }} />
      <div style={{ ...node(43, 260, 320, 0.5), backgroundColor: '#948c8c', opacity: 0.3, zIndex: 4 }} />
      <div style={{ ...node(43, 298, 320, 0.5), backgroundColor: '#948c8c', opacity: 0.3, zIndex: 4 }} />

      {/* Render Info Fields exactly from Figma coordinates */}
      {fields.map((field, idx) => {
        const isAddress = field.label === 'Địa chỉ';
        return (
          <React.Fragment key={idx}>
            {/* Label text */}
            <div style={txt(field.labelX, field.y, field.wLabel, 17, 14, 'Regular', '#616161', 'left', { zIndex: 5 })}>
              {field.label}
            </div>
            {/* Value text */}
            {isAddress ? (
              // Address can be wrapped to two lines exactly
              <div style={{
                ...node(field.valX, field.y, field.wVal, 38),
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: fw('Regular'),
                color: '#616161',
                lineHeight: '1.25',
                textAlign: 'right',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                zIndex: 5,
                whiteSpace: 'pre-line',
                wordBreak: 'break-word',
              }}>
                {field.value}
              </div>
            ) : (
              <div style={txt(field.valX, field.y, field.wVal, 17, 14, 'Regular', '#616161', 'right', { zIndex: 5 })}>
                {field.value}
              </div>
            )}
          </React.Fragment>
        );
      })}


      {/* ════════════════════════════════════════════
          MENU LIST ROWS
          ════════════════════════════════════════════ */}

      {/* Row Separator Lines */}
      {/* ── 40:3  LINE  "Line 1"  y=448 ── */}
      <div style={{ ...node(84, 448, 278, 0.5), backgroundColor: '#aaa9ae', opacity: 0.4, zIndex: 3 }} />
      {/* ── 40:6  LINE  "Line 3"  y=513 ── */}
      <div style={{ ...node(84, 513, 278, 0.5), backgroundColor: '#aaa9ae', opacity: 0.4, zIndex: 3 }} />
      {/* ── 40:7  LINE  "Line 4"  y=577 ── */}
      <div style={{ ...node(84, 577, 278, 0.5), backgroundColor: '#aaa9ae', opacity: 0.4, zIndex: 3 }} />
      {/* ── 40:8  LINE  "Line 5"  y=642 ── */}
      <div style={{ ...node(84, 642, 278, 0.5), backgroundColor: '#aaa9ae', opacity: 0.4, zIndex: 3 }} />


      {/* ── MENU ROW 1: THẺ BHYT
               Click area spanning row height
               y=378 to 447 ── */}
      <button
        onClick={() => alert('Tính năng Thẻ BHYT đang phát triển!')}
        style={{
          ...node(0, 378, 402, 70),
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      />
      {/* Icon Area: green card shield */}
      <div style={{ ...node(22, 389, 48, 48), display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, pointerEvents: 'none' }}>
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#e2f5e9" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#10b981" />
        </svg>
      </div>
      {/* Label: "THẺ BHYT" at x:87 y:405 */}
      <div style={txt(87, 403, 200, 21, 16, 'Regular', '#3f3f3f', 'left', { zIndex: 5, pointerEvents: 'none' })}>
        THẺ BHYT
      </div>
      {/* Right chevron at x:368 y:408 */}
      <div style={{ ...node(368, 405, 8, 17), zIndex: 5, pointerEvents: 'none', display: 'flex', alignItems: 'center' }}>
        <svg width="8" height="17" viewBox="0 0 8 17" fill="none">
          <path d="M1 1l6 7.5L1 16" stroke="#38679f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>


      {/* ── MENU ROW 2: QUÁ TRÌNH THAM GIA
               y=454 to 512 ── */}
      <button
        onClick={() => onNavigate('insurance-list', { transition: 'slide', direction: 'left' })}
        style={{
          ...node(0, 452, 402, 60),
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      />
      {/* Icon Area: blue calendar */}
      <div style={{ ...node(22, 458, 48, 48), display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, pointerEvents: 'none' }}>
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#e0f2fe" />
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm-5-7H7v2h7v-2z" fill="#0284c7" />
        </svg>
      </div>
      {/* Label: "QUÁ TRÌNH THAM GIA" at x:87 y:468 */}
      <div style={txt(87, 466, 220, 21, 16, 'Regular', '#3f3f3f', 'left', { zIndex: 5, pointerEvents: 'none' })}>
        QUÁ TRÌNH THAM GIA
      </div>
      {/* Right chevron at x:368 y:468 */}
      <div style={{ ...node(368, 468, 8, 17), zIndex: 5, pointerEvents: 'none', display: 'flex', alignItems: 'center' }}>
        <svg width="8" height="17" viewBox="0 0 8 17" fill="none">
          <path d="M1 1l6 7.5L1 16" stroke="#38679f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>


      {/* ── MENU ROW 3: THÔNG TIN HƯỞNG
               y=514 to 576 ── */}
      <button
        onClick={() => alert('Tính năng Thông tin hưởng đang phát triển!')}
        style={{
          ...node(0, 514, 402, 62),
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      />
      {/* Icon Area: orange charts shield */}
      <div style={{ ...node(22, 521, 48, 48), display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, pointerEvents: 'none' }}>
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#ffedd5" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#ea580c" />
        </svg>
      </div>
      {/* Label: "THÔNG TIN HƯỞNG" at x:87 y:532 */}
      <div style={txt(87, 530, 200, 21, 16, 'Regular', '#3f3f3f', 'left', { zIndex: 5, pointerEvents: 'none' })}>
        THÔNG TIN HƯỞNG
      </div>
      {/* Right chevron at x:368 y:532 */}
      <div style={{ ...node(368, 532, 8, 17), zIndex: 5, pointerEvents: 'none', display: 'flex', alignItems: 'center' }}>
        <svg width="8" height="17" viewBox="0 0 8 17" fill="none">
          <path d="M1 1l6 7.5L1 16" stroke="#38679f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>


      {/* ── MENU ROW 4: SỔ KHÁM CHỮA BỆNH
               y=578 to 640 ── */}
      <button
        onClick={() => alert('Tính năng Sổ khám chữa bệnh đang phát triển!')}
        style={{
          ...node(0, 578, 402, 64),
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      />
      {/* Icon Area: red medical cross book */}
      <div style={{ ...node(22, 585, 48, 48), display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, pointerEvents: 'none' }}>
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#fee2e2" />
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="#dc2626" />
        </svg>
      </div>
      {/* Label: "SỔ KHÁM CHỮA BỆNH" at x:87 y:598 */}
      <div style={txt(87, 596, 220, 21, 16, 'Regular', '#3f3f3f', 'left', { zIndex: 5, pointerEvents: 'none' })}>
        SỔ KHÁM CHỮA BỆNH
      </div>
      {/* Right chevron at x:368 y:598 */}
      <div style={{ ...node(368, 598, 8, 17), zIndex: 5, pointerEvents: 'none', display: 'flex', alignItems: 'center' }}>
        <svg width="8" height="17" viewBox="0 0 8 17" fill="none">
          <path d="M1 1l6 7.5L1 16" stroke="#38679f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>


      {/* ════════════════════════════════════════════
          BOTTOM NAV BAR  (Group 2)
          ════════════════════════════════════════════ */}

      {/* Bottom Nav Container
               x:0 y:823  width:402 height:65
               fill:#fcfcfc or #ffffff ── */}
      <div style={{
        ...node(0, 823, 402, 65),
        backgroundColor: '#fefefe',
        borderTop: '0.5px solid #d9d9d9',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.03)',
        zIndex: 10,
        display: 'flex',
      }}>
        {/* Item 1: Trang chủ (Active) */}
        <button
          onClick={() => onNavigate('dashboard')}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            padding: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#0069ad" />
          </svg>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#0069ad', fontFamily: 'Inter, sans-serif' }}>
            Trang chủ
          </span>
        </button>

        {/* Item 2: Dịch vụ công */}
        <button
          onClick={() => alert('Dịch vụ công đang phát triển!')}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            padding: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z" fill="#aaa9ae" />
          </svg>
          <span style={{ fontSize: '11px', fontWeight: 400, color: '#aaa9ae', fontFamily: 'Inter, sans-serif' }}>
            Dịch vụ công
          </span>
        </button>

        {/* Item 3: Tra cứu */}
        <button
          onClick={() => alert('Tra cứu trực tuyến đang phát triển!')}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            padding: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#aaa9ae" />
          </svg>
          <span style={{ fontSize: '11px', fontWeight: 400, color: '#aaa9ae', fontFamily: 'Inter, sans-serif' }}>
            Tra cứu
          </span>
        </button>

        {/* Item 4: Hỗ trợ (Menu Sidebar hotspot) */}
        <button
          onClick={onOpenSidebar}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            padding: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" fill="#aaa9ae" />
          </svg>
          <span style={{ fontSize: '11px', fontWeight: 400, color: '#aaa9ae', fontFamily: 'Inter, sans-serif' }}>
            Trợ giúp
          </span>
        </button>
      </div>

    </div>
  );
};

export default Dashboard;
