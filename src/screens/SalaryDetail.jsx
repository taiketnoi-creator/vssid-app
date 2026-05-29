import React from 'react';

/**
 * SalaryDetail — rebuilt 100% from Figma MCP live scan
 * Frame: "iPhone 17 - 4"  (ID: 13:2)
 * Canvas size: 402 × 874 px
 *
 * Layout strategy:
 * - Header (back + title) and date row → absolute positioned (pixel-perfect from Figma)
 * - Blue info card + salary table → normal flow starting at y=165
 *   so card auto-expands with content and table follows naturally, never overlapping
 */

const W = 402;
const H = 874;

const fw = (figmaWeight) => ({
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
}[figmaWeight] || 400);

const SalaryDetail = ({ onNavigate, rowData }) => {

  const formatSalary = (val) => {
    if (!val) return '0';
    if (typeof val === 'string' && val.includes('.')) return val;
    const num = parseInt(String(val).replace(/\D/g, ''), 10);
    return isNaN(num) ? String(val) : new Intl.NumberFormat('vi-VN').format(num);
  };

  const salary = formatSalary(rowData?.salary || '14.500.000');

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      backgroundColor: '#ffffff',
      fontFamily: 'Inter, sans-serif',
    }}>

      {/* ── Back button: x=27, y=76, w=9, h=18 ── */}
      <button
        onClick={() => onNavigate('insurance-list', { transition: 'slide-up', direction: 'right' })}
        aria-label="Quay lại"
        style={{
          position: 'absolute',
          left: `${(10 / W) * 100}%`,
          top: `${(58 / H) * 100}%`,
          width: `${(50 / W) * 100}%`,
          height: `${(42 / H) * 100}%`,
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
        <svg width="9" height="18" viewBox="0 0 9 18" fill="none">
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

      {/* ── Title "Chi tiết": x=169, y=67, fontSize=18, Bold, #38679f ── */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        top: `${(67 / H) * 100}%`,
        fontSize: '18px',
        fontWeight: fw('Bold'),
        color: '#38679f',
        whiteSpace: 'nowrap',
        zIndex: 5,
      }}>
        Chi tiết
      </div>

      {/* ── Date Row: y=125 ── */}
      <div style={{
        position: 'absolute',
        left: `${(45 / W) * 100}%`,
        top: `${(125 / H) * 100}%`,
        fontSize: '14px',
        fontWeight: fw('Regular'),
        color: '#2a2b2b',
        whiteSpace: 'nowrap',
        zIndex: 5,
      }}>
        Từ tháng:&nbsp;{rowData?.from || '04/2025'}
      </div>

      <div style={{
        position: 'absolute',
        left: `${(226 / W) * 100}%`,
        top: `${(125 / H) * 100}%`,
        fontSize: '14px',
        fontWeight: fw('Regular'),
        color: '#2a2b2b',
        whiteSpace: 'nowrap',
        zIndex: 5,
      }}>
        Đến tháng:&nbsp;{rowData?.to || '03/2026'}
      </div>

      {/* ══════════════════════════════════════════════════
          CONTENT FLOW BLOCK: blue card + salary table
          Starts at y=165 (Figma: Rectangle 20 top)
          Uses normal document flow so card auto-expands
          ══════════════════════════════════════════════════ */}
      <div style={{
        position: 'absolute',
        left: `${(20 / W) * 100}%`,
        top: `${(165 / H) * 100}%`,
        width: `${(362 / W) * 100}%`,
        zIndex: 5,
      }}>

        {/* ── Blue info card ── */}
        <div style={{
          width: '100%',
          backgroundColor: '#38679f',
          boxSizing: 'border-box',
          padding: '9px 10px',
          color: '#ffffff',
          fontSize: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}>

          {/* Row 1: Chức vụ */}
          <div style={{ lineHeight: '1.3', marginBottom: '5px' }}>
            <span style={{ fontWeight: 400 }}>Chức vụ: </span>
            <span style={{ fontWeight: 700 }}>{rowData?.position || 'Nhân viên kỹ thuật'}</span>
          </div>

          {/* Row 2: Đơn vị công tác */}
          <div style={{ lineHeight: '1.3', marginBottom: '5px' }}>
            <span style={{ fontWeight: 400 }}>Đơn vị công tác: </span>
            <span style={{ fontWeight: 700 }}>{rowData?.company || 'Công ty TNHH EO TECHNICS Việt Nam'}</span>
          </div>

          {/* Row 3: Nơi làm việc */}
          <div style={{ lineHeight: '1.3', marginBottom: '5px' }}>
            <span style={{ fontWeight: 400 }}>Nơi làm việc: </span>
            <span style={{ fontWeight: 700 }}>{rowData?.workAddress || 'BT22, khu đô thị hud võ cường-Tp Bắc Ninh-Bắc Ninh'}</span>
          </div>

          {/* Row 4: Loại tiền */}
          <div style={{ lineHeight: '1.3' }}>
            <span style={{ fontWeight: 400 }}>Loại tiền: </span>
            <span style={{ fontWeight: 700 }}>VND</span>
          </div>
        </div>

        {/* ── Salary Table (flows directly after blue card) ── */}
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px',
          color: '#2a2b2b',
          backgroundColor: '#fefefe',
        }}>
          <tbody>
            {/* Row 1: Tiền lương đóng BHXH */}
            <tr style={{ height: '28px' }}>
              <td style={{
                width: '50%',
                border: '1px solid #aaa9ae',
                textAlign: 'center',
                fontWeight: fw('Medium'),
                padding: '0 6px',
              }}>
                Tiền lương đóng BHXH
              </td>
              <td style={{
                width: '50%',
                border: '1px solid #aaa9ae',
                textAlign: 'right',
                fontWeight: fw('Medium'),
                padding: '0 6px',
              }}>
                {salary}
              </td>
            </tr>

            {/* Row 2: Mức lương */}
            <tr style={{ height: '28px' }}>
              <td style={{
                width: '50%',
                border: '1px solid #aaa9ae',
                textAlign: 'center',
                fontWeight: fw('Medium'),
                padding: '0 6px',
              }}>
                Mức lương
              </td>
              <td style={{
                width: '50%',
                border: '1px solid #aaa9ae',
                textAlign: 'right',
                fontWeight: fw('Medium'),
                padding: '0 6px',
              }}>
                {salary}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default SalaryDetail;
