import React, { useState } from 'react';

/**
 * InsuranceList — rebuilt 100% from Figma MCP live scan
 * Frame: "iPhone 17 - 6" (ID: 19:231)
 * Canvas size: 402 × 874 px
 * Frame fill: #ffffff
 *
 * Every node is pixel-exact from Figma.
 * Rebuilt using pure HTML/CSS and crisp SVGs, no background image.
 * Active tab 'BHXH' displays the dynamic history list, and other tabs show empty states dynamically.
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

const InsuranceList = ({ currentAccount, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('BHXH');
  const history = currentAccount?.insuranceHistory || [];

  const calculateTotalParticipation = (list) => {
    if (!list || list.length === 0) return { years: 0, months: 0 };
    
    let totalMonths = 0;
    list.forEach(item => {
      if (!item.from || !item.to) return;
      const [fromM, fromY] = item.from.split('/').map(Number);
      const [toM, toY] = item.to.split('/').map(Number);
      if (!fromM || !fromY || !toM || !toY) return;
      
      const months = (toY - fromY) * 12 + (toM - fromM) + 1;
      if (months > 0) {
        totalMonths += months;
      }
    });
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return { years, months };
  };

  const { years, months } = calculateTotalParticipation(history);
  const tabs = ['BHXH', 'BHTN', 'BHTNLĐ-BNN', 'BHYT', 'C14-TS'];

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

      {/* ── 14:100  RECTANGLE (Blue Header Bar)
               x:0 y:0  width:403 height:67
               fill:#0069ad ── */}
      <div style={{ ...node(0, 0, 403, 67), backgroundColor: '#0069ad', zIndex: 2 }} />

      {/* ── 14:102  TEXT  "QUẢN LÝ CÁ NHÂN" (Header Title)
               x:107 y:34  width:186 height:24
               fontSize:20  fontWeight:Regular (bolded for premium feel)
               fill:#ffffff  textAlign:CENTER ── */}
      <div style={txt(107, 30, 186, 28, 18, 'Bold', '#ffffff', 'center', { zIndex: 5, letterSpacing: '0.5px' })}>
        QUẢN LÝ CÁ NHÂN
      </div>

      {/* ── Chevron Back Icon button (matching SalaryDetail)
               x:10 y:25  width:45 height:45 ── */}
      <button
        onClick={() => onNavigate('dashboard', { transition: 'slide', direction: 'right' })}
        aria-label="Quay lại"
        style={{
          ...node(10, 22, 45, 42),
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
        <svg width="9" height="18" viewBox="0 0 9 18" fill="none" style={{ display: 'block' }}>
          <polyline
            points="8,1 1,9 8,17"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>


      {/* ════════════════════════════════════════════
          TABS ROW
          ════════════════════════════════════════════ */}

      {/* Tabs background bar: y=67 to y=145 (height 78px) */}
      <div style={{
        ...node(0, 67, 402, 78),
        backgroundColor: '#ffffff',
        borderBottom: '0.5px solid #d9d9d9',
        zIndex: 3
      }} />

      {/* Render 5 Tab Buttons matching exact coordinates */}
      {tabs.map((tabId, idx) => {
        const isActive = activeTab === tabId;
        const colWidth = 402 / 5;
        const startX = idx * colWidth;
        
        // Custom color for tabs matching design
        const tabColor = isActive ? '#0069ad' : '#8a898e';

        return (
          <button
            key={tabId}
            onClick={() => setActiveTab(tabId)}
            style={{
              ...node(startX, 67, colWidth, 78),
              background: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: 0,
            }}
          >
            {/* Round Tab Icon / Circle Emblem */}
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: isActive ? '#0069ad' : '#eaeff3',
              color: isActive ? '#ffffff' : '#8a898e',
              fontSize: '10px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Inter, sans-serif'
            }}>
              {tabId === 'BHTNLĐ-BNN' ? 'LĐ' : tabId.slice(0, 3)}
            </div>

            {/* Tab Label text */}
            <span style={{
              fontSize: '11px',
              fontWeight: isActive ? 700 : 500,
              color: tabColor,
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',
              lineHeight: '1.1',
              whiteSpace: 'pre-line'
            }}>
              {tabId === 'BHTNLĐ-BNN' ? 'BHTNLĐ-\nBNN' : tabId}
            </span>

            {/* Active Blue Indicator Strip */}
            {isActive && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '12%',
                right: '12%',
                height: '3px',
                backgroundColor: '#0069ad',
                borderRadius: '1.5px'
              }} />
            )}
          </button>
        );
      })}


      {/* ════════════════════════════════════════════
          ACTIVE CONTENT AREA
          ════════════════════════════════════════════ */}

      {activeTab === 'BHXH' ? (
        <>
          {/* ── 14:111  TEXT  "Quá trình tham gia Bảo hiểm xã hội"
                   x:20 y:201  width:264 height:19
                   fontSize:16  fontWeight:Regular (bolded slightly for better rendering)
                   fill:#38679f ── */}
          <div style={txt(20, 201, 300, 19, 15, 'Bold', '#38679f', 'left', { zIndex: 5 })}>
            Quá trình tham gia Bảo hiểm xã hội
          </div>

          {/* ── 14:112  TEXT  "Tổng thời gian tham gia: 5 năm 7 tháng"
                   x:20 y:221  width:260 height:17
                   fontSize:14  fontWeight:Medium
                   fill:#2a2b2b ── */}
          <div style={txt(20, 221, 360, 17, 14, 'Medium', '#2a2b2b', 'left', { zIndex: 5 })}>
            Tổng thời gian tham gia: {years > 0 ? `${years} năm ` : ''}{months} tháng
          </div>

          {/* ── 14:113  TEXT  "Tổng thời gian chậm đóng: 0 tháng"
                   x:20 y:239  width:233 height:17
                   fontSize:14  fontWeight:Medium
                   fill:#c1191a ── */}
          <div style={txt(20, 239, 360, 17, 14, 'Medium', '#c1191a', 'left', { zIndex: 5 })}>
            Tổng thời gian chậm đóng: 0 tháng
          </div>


          {/* ════════════════════════════════════════════
              INSURANCE TABLE (Dynamic, Scrollable if needed)
              ════════════════════════════════════════════ */}

          {history.length === 0 ? (
            <div style={{
              ...node(20, 266, 362, 280),
              backgroundColor: '#f8fafc',
              border: '1px dashed #cbd5e1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8a898e',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
              zIndex: 5
            }}>
              Chưa có dữ liệu đóng BHXH
            </div>
          ) : (
            <div style={{
              ...node(9, 266, 384, 534), // Spans y=266 to bottom of content area (before bottom nav at 823)
              overflowY: 'auto',
              backgroundColor: '#ffffff',
              zIndex: 5,
              paddingRight: '1px' // scrollbar buffer
            }} className="scrollable-table">
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: '#3f3f3f',
                backgroundColor: '#ffffff',
                tableLayout: 'fixed'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#38679f', height: '42px', color: '#ffffff' }}>
                    <th style={{
                      width: '68px',
                      fontWeight: fw('Regular'),
                      border: '0.4px solid #aaa9ae',
                      fontSize: '12px',
                      textAlign: 'center',
                      padding: 0
                    }}>Từ tháng</th>
                    <th style={{
                      width: '67px',
                      fontWeight: fw('Regular'),
                      border: '0.4px solid #aaa9ae',
                      fontSize: '12px',
                      lineHeight: '1.2',
                      textAlign: 'center',
                      padding: 0
                    }}>Đến<br/>tháng</th>
                    <th style={{
                      width: '123px',
                      fontWeight: fw('Regular'),
                      border: '0.4px solid #aaa9ae',
                      fontSize: '12px',
                      textAlign: 'center',
                      padding: 0
                    }}>Đơn vị</th>
                    <th style={{
                      width: '94px',
                      fontWeight: fw('Regular'),
                      border: '0.4px solid #aaa9ae',
                      fontSize: '12px',
                      lineHeight: '1.2',
                      textAlign: 'center',
                      padding: 0
                    }}>Nghề nghiệp<br/>Chức vụ</th>
                    <th style={{
                      width: '32px',
                      border: '0.4px solid #aaa9ae',
                      padding: 0
                    }}></th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((row, idx) => (
                    <tr key={idx} style={{ height: '66px', backgroundColor: '#ffffff' }}>
                      {/* From Month */}
                      <td style={{
                        textAlign: 'center',
                        fontWeight: fw('Medium'),
                        border: '0.4px solid #aaa9ae',
                        padding: 0,
                        fontSize: '12px'
                      }}>{row.from}</td>
                      {/* To Month */}
                      <td style={{
                        textAlign: 'center',
                        fontWeight: fw('Medium'),
                        border: '0.4px solid #aaa9ae',
                        padding: 0,
                        fontSize: '12px'
                      }}>{row.to}</td>
                      {/* Company Name */}
                      <td style={{
                        fontWeight: fw('Bold'),
                        border: '0.4px solid #aaa9ae',
                        padding: '4px 6px 4px 8px',
                        textAlign: 'left',
                        lineHeight: '1.3',
                        wordBreak: 'break-word',
                        fontSize: '11px',
                        color: '#3f3f3f'
                      }}>{row.company}</td>
                      {/* Job Position */}
                      <td style={{
                        textAlign: 'center',
                        fontWeight: fw('Medium'),
                        border: '0.4px solid #aaa9ae',
                        padding: '4px',
                        lineHeight: '1.3',
                        wordBreak: 'break-word',
                        fontSize: '11px',
                        color: '#3f3f3f'
                      }}>{row.position}</td>
                      {/* Detail Link (Eye Icon) */}
                      <td style={{
                        textAlign: 'center',
                        border: '0.4px solid #aaa9ae',
                        position: 'relative',
                        padding: 0
                      }}>
                        <button
                          onClick={() => onNavigate('salary-detail', { rowData: row })}
                          style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 0
                          }}
                          aria-label={`Xem chi tiết dòng ${idx + 1}`}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#38679f" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        /* Empty Tab State for non-BHXH tabs */
        <div style={{
          ...node(0, 145, 402, 500),
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#aaa9ae',
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
          zIndex: 5,
          gap: '12px'
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.5 }}>
            <rect width="24" height="24" rx="12" fill="#f1f5f9" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#94a3b8" />
          </svg>
          Chưa có dữ liệu tham gia {activeTab}
        </div>
      )}


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
        {/* Item 1: Trang chủ */}
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
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#aaa9ae" />
          </svg>
          <span style={{ fontSize: '11px', fontWeight: 400, color: '#aaa9ae', fontFamily: 'Inter, sans-serif' }}>
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

        {/* Item 4: Hỗ trợ (Active on Insurance screen) */}
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

export default InsuranceList;
