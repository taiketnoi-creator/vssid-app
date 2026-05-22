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
        {/* --- Date Row (Từ tháng / Đến tháng) --- */}
        {/* Cover static "Từ tháng: 04/2025" */}
        <div style={{
          position: 'absolute',
          left: `${(40 / W) * 100}%`,
          top: `${(120 / H) * 100}%`,
          width: `${(140 / W) * 100}%`,
          height: `${(22 / H) * 100}%`,
          background: '#ffffff'
        }} />
        <div style={{
          position: 'absolute',
          left: `${(40 / W) * 100}%`,
          top: `${(120 / H) * 100}%`,
          width: `${(140 / W) * 100}%`,
          height: `${(22 / H) * 100}%`,
          fontSize: '13.5px',
          color: '#2a2b2b',
          fontWeight: 500,
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          alignItems: 'center'
        }}>
          Từ tháng: <strong style={{ 
            color: '#000000', 
            fontWeight: 700, 
            marginLeft: '4px',
            borderBottom: '1.5px solid #2a2b2b',
            paddingBottom: '1px',
            lineHeight: '1.1'
          }}>{rowData?.from || '04/2025'}</strong>
        </div>

        {/* Cover static "Đến tháng: 03/2026" */}
        <div style={{
          position: 'absolute',
          left: `${(220 / W) * 100}%`,
          top: `${(120 / H) * 100}%`,
          width: `${(150 / W) * 100}%`,
          height: `${(22 / H) * 100}%`,
          background: '#ffffff'
        }} />
        <div style={{
          position: 'absolute',
          left: `${(220 / W) * 100}%`,
          top: `${(120 / H) * 100}%`,
          width: `${(150 / W) * 100}%`,
          height: `${(22 / H) * 100}%`,
          fontSize: '13.5px',
          color: '#2a2b2b',
          fontWeight: 500,
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          alignItems: 'center'
        }}>
          Đến tháng: <strong style={{ 
            color: '#000000', 
            fontWeight: 700, 
            marginLeft: '4px',
            borderBottom: '1.5px solid #2a2b2b',
            paddingBottom: '1px',
            lineHeight: '1.1'
          }}>{rowData?.to || '03/2026'}</strong>
        </div>


        {/* --- Blue Card Info Overlay (100% Pure Vector HTML/CSS) --- */}
        <div style={{
          position: 'absolute',
          left: `${(24 / W) * 100}%`,
          top: `${(153 / H) * 100}%`,
          width: `${(354 / W) * 100}%`,
          height: `${(133 / H) * 100}%`,
          backgroundColor: '#38679f',
          boxSizing: 'border-box',
          padding: '12px 14px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          fontSize: '12.5px',
          lineHeight: '1.4'
        }}>
          <div>
            <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 400 }}>Chức vụ: </span>
            <span style={{ fontWeight: 700 }}>{rowData?.position || 'Nhân viên kỹ thuật'}</span>
          </div>

          <div style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 400 }}>Đơn vị công tác: </span>
            <span style={{ fontWeight: 700 }}>{rowData?.company || 'Công ty TNHH EO TECHNICS Việt Nam'}</span>
          </div>

          <div style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 400 }}>Nơi làm việc: </span>
            <span style={{ fontWeight: 700 }}>{rowData?.workAddress || 'BT22, khu đô thị hud võ cường-Tp Bắc Ninh-Bắc Ninh'}</span>
          </div>

          <div>
            <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 400 }}>Loại tiền: </span>
            <span style={{ fontWeight: 700 }}>VND</span>
          </div>
        </div>

        {/* --- Salary Table (100% Pure Vector HTML/CSS standard table) --- */}
        <div style={{
          position: 'absolute',
          left: `${(24 / W) * 100}%`,
          top: `${(286 / H) * 100}%`,
          width: `${(354 / W) * 100}%`,
          boxSizing: 'border-box'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#3f3f3f',
            backgroundColor: '#ffffff'
          }}>
            <tbody>
              <tr style={{ height: '44px' }}>
                <td style={{ 
                  border: '0.5px solid #d9d9d9', 
                  padding: '0 12px', 
                  textAlign: 'left',
                  fontWeight: 500
                }}>
                  Tiền lương đóng BHXH
                </td>
                <td style={{ 
                  border: '0.5px solid #d9d9d9', 
                  padding: '0 12px', 
                  textAlign: 'right',
                  color: '#000000',
                  fontWeight: 700
                }}>
                  {formattedSalary}
                </td>
              </tr>
              <tr style={{ height: '44px' }}>
                <td style={{ 
                  border: '0.5px solid #d9d9d9', 
                  padding: '0 12px', 
                  textAlign: 'left',
                  fontWeight: 500
                }}>
                  Mức lương
                </td>
                <td style={{ 
                  border: '0.5px solid #d9d9d9', 
                  padding: '0 12px', 
                  textAlign: 'right',
                  color: '#000000',
                  fontWeight: 700
                }}>
                  {formattedSalary}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default SalaryDetail;
