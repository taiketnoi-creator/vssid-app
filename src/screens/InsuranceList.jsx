import React, { useState } from 'react';
import frameInsurance from '../assets/frame_insurance.png';

const W = 402;
const H = 874;

const EyeIcon = () => (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0.5C5 0.5 1.6 2.8 0 6C1.6 9.2 5 11.5 9 11.5C13 11.5 16.4 9.2 18 6C16.4 2.8 13 0.5 9 0.5ZM9 9.5C7.1 9.5 5.5 7.9 5.5 6C5.5 4.1 7.1 2.5 9 2.5C10.9 2.5 12.5 4.1 12.5 6C12.5 7.9 10.9 9.5 9 9.5ZM9 4.2C8 4.2 7.2 5 7.2 6C7.2 7 8 7.8 9 7.8C10 7.8 10.8 7 10.8 6C10.8 5 10 4.2 9 4.2Z" fill="#0069ad"/>
  </svg>
);

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

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#f5f8fa' }}>
      <img src={frameInsurance} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }} draggable={false} />

      {/* Single content overlay covering from below tabs (y=145) to above bottom nav (y=823) */}
      {/* Completely hides the static data in the Figma image and renders dynamic content */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: `${145 / H * 100}%`,
          width: '100%',
          height: `${(823 - 145) / H * 100}%`,
          background: '#ffffff',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 10,
          overflowY: 'hidden',
        }}
      >
        {activeTab === 'BHXH' ? (
          <>
            {/* Summary box — matching Figma light blue bordered box */}
            <div style={{
              margin: '12px 14px 10px 14px',
              border: '1px solid #0069ad',
              background: '#f0f7fc',
              padding: '10px 12px',
              flexShrink: 0,
            }}>
              <div style={{ fontSize: '13px', color: '#0069ad', fontWeight: 700, fontFamily: 'Inter, sans-serif', marginBottom: '3px' }}>
                Quá trình tham gia Bảo hiểm xã hội
              </div>
              <div style={{ fontSize: '13px', color: '#1a1a1a', fontWeight: 700, fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>
                Tổng thời gian tham gia: {years > 0 ? `${years} năm ` : ''}{months} tháng
              </div>
              <div style={{ fontSize: '13px', color: '#c1191a', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>
                Tổng thời gian chậm đóng: 0 tháng
              </div>
            </div>

            {/* Table header row — matching Figma blue header */}
            <div style={{
              display: 'flex',
              background: '#3f6fa8',
              flexShrink: 0,
              marginLeft: '14px',
              marginRight: '14px',
            }}>
              <div style={{ width: '52px', padding: '8px 2px', fontSize: '11px', fontWeight: 600, color: '#fff', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.25)', boxSizing: 'border-box', lineHeight: '1.2' }}>Từ tháng</div>
              <div style={{ width: '52px', padding: '8px 2px', fontSize: '11px', fontWeight: 600, color: '#fff', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.25)', boxSizing: 'border-box', lineHeight: '1.2' }}>Đến tháng</div>
              <div style={{ flex: 1, padding: '8px 4px', fontSize: '11px', fontWeight: 600, color: '#fff', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.25)', boxSizing: 'border-box', lineHeight: '1.2' }}>Đơn vị</div>
              <div style={{ width: '70px', padding: '8px 2px', fontSize: '11px', fontWeight: 600, color: '#fff', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.25)', boxSizing: 'border-box', lineHeight: '1.2' }}>Nghề nghiệp/ Chức vụ</div>
              <div style={{ width: '32px', boxSizing: 'border-box' }} />
            </div>

            {/* Scrollable data rows */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              marginLeft: '14px',
              marginRight: '14px',
            }} className="scrollbar-none">
              {history.length === 0 ? (
                <div style={{ padding: '40px 0', textAlign: 'center', color: '#888', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>
                  Chưa có dữ liệu đóng BHXH
                </div>
              ) : (
                history.map((row, i) => (
                  <div
                    key={i}
                    onClick={() => onNavigate('salary-detail', { rowData: row })}
                    style={{
                      display: 'flex',
                      alignItems: 'stretch',
                      borderBottom: '1px solid #e2e8f0',
                      cursor: 'pointer',
                      background: i % 2 === 0 ? '#ffffff' : '#f8fafc',
                    }}
                  >
                    <div style={{ width: '52px', padding: '10px 2px', fontSize: '11px', color: '#334155', fontWeight: 500, textAlign: 'center', borderRight: '1px solid #e2e8f0', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{row.from}</div>
                    <div style={{ width: '52px', padding: '10px 2px', fontSize: '11px', color: '#334155', fontWeight: 500, textAlign: 'center', borderRight: '1px solid #e2e8f0', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{row.to}</div>
                    <div style={{
                      flex: 1,
                      padding: '10px 6px',
                      fontSize: '11px',
                      color: '#0f172a',
                      fontWeight: 600,
                      textAlign: 'left',
                      borderRight: '1px solid #e2e8f0',
                      boxSizing: 'border-box',
                      lineHeight: '1.3',
                      wordBreak: 'break-word',
                    }}>{row.company}</div>
                    <div style={{
                      width: '70px',
                      padding: '10px 2px',
                      fontSize: '11px',
                      color: '#475569',
                      textAlign: 'center',
                      borderRight: '1px solid #e2e8f0',
                      boxSizing: 'border-box',
                      lineHeight: '1.3',
                      wordBreak: 'break-word',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>{row.position}</div>
                    <div style={{ width: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
                      <EyeIcon />
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        ) : (
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94a3b8',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
          }}>
            Chưa có dữ liệu tham gia {activeTab}
          </div>
        )}
      </div>

      {/* Interactive hotspot layer (always on top) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 15, pointerEvents: 'none' }}>
        {/* Back arrow */}
        <div
          onClick={() => onNavigate('dashboard', { transition: 'slide', direction: 'right' })}
          style={{
            position: 'absolute',
            left: 0,
            top: `${5 / H * 100}%`,
            width: `${60 / W * 100}%`,
            height: `${55 / H * 100}%`,
            cursor: 'pointer',
            pointerEvents: 'auto',
          }}
        />

        {/* Tab hotspots: y=67 to y=145 */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: `${67 / H * 100}%`,
          width: '100%',
          height: `${78 / H * 100}%`,
          display: 'flex',
          pointerEvents: 'auto',
        }}>
          <div onClick={() => setActiveTab('BHXH')} style={{ flex: 1, cursor: 'pointer' }} />
          <div onClick={() => setActiveTab('BHTN')} style={{ flex: 1, cursor: 'pointer' }} />
          <div onClick={() => setActiveTab('BHTNLD')} style={{ flex: 1, cursor: 'pointer' }} />
          <div onClick={() => setActiveTab('BHYT')} style={{ flex: 1, cursor: 'pointer' }} />
          <div onClick={() => setActiveTab('C14TS')} style={{ flex: 1, cursor: 'pointer' }} />
        </div>

        {/* Bottom nav: y=823, h=65 */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: `${823 / H * 100}%`,
          width: '100%',
          height: `${65 / H * 100}%`,
          display: 'flex',
          pointerEvents: 'auto',
        }}>
          <div onClick={() => onNavigate('dashboard', { transition: 'instant' })} style={{ flex: 1, cursor: 'pointer' }} />
          <div style={{ flex: 1, cursor: 'pointer' }} />
          <div style={{ flex: 1, cursor: 'pointer' }} />
          <div style={{ flex: 1, cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default InsuranceList;
