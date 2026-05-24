import React, { useState } from 'react';
import frameInsurance from '../assets/frame_insurance.png';

const W = 402;
const H = 874;

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
        src={frameInsurance}
        alt="Insurance Background"
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

      {/* Interactive safe area container */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10
      }}>
        {/* 2. Transparent Back Button Hotspot: x=10, y=25, w=45, h=45 */}
        <button
          onClick={() => onNavigate('dashboard', { transition: 'slide', direction: 'right' })}
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

      {/* 3. Transparent Tab Hotspots - Lets the perfect Figma icons & text show through */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '67px',
        width: '100%',
        height: '78px',
        zIndex: 25,
        display: 'flex',
        background: 'transparent'
      }}>
        {tabs.map((tabId) => (
          <button
            key={tabId}
            onClick={() => setActiveTab(tabId)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer'
            }}
            aria-label={tabId}
          />
        ))}
      </div>

      {/* 4. Active Tab Mask Overlays (Only if another tab is clicked, to show indicator and hide BHXH selection) */}
      {activeTab !== 'BHXH' && (
        <div style={{
          position: 'absolute',
          left: 0,
          top: '67px',
          width: '100%',
          height: '78px',
          background: '#ffffff',
          zIndex: 20,
          display: 'flex',
          borderBottom: '1px solid #e2e8f0',
          boxSizing: 'border-box'
        }}>
          {tabs.map((tabId, idx) => {
            const isActive = activeTab === tabId;
            return (
              <div
                key={tabId}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  position: 'relative'
                }}
              >
                {/* Fallback grey circular indicators only shown for non-BHXH inactive tabs */}
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: isActive ? '#0069ad' : '#aaa9ae',
                  opacity: isActive ? 1 : 0.4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '9px',
                  fontWeight: 'bold'
                }}>
                  {tabId.slice(0, 2)}
                </div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? '#0069ad' : '#aaa9ae',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}>
                  {tabId === 'BHTNLĐ-BNN' ? (
                    <span style={{ display: 'block', lineHeight: '1.1', fontSize: '11px' }}>
                      BHTNLĐ-<br />BNN
                    </span>
                  ) : tabId}
                </span>
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '15%',
                    right: '15%',
                    height: '3px',
                    background: '#0069ad',
                    borderRadius: '2px'
                  }} />
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 5. 100% FIGMA DYNAMIC TEXT OVERLAY LAYER (zIndex = 10) */}
      {/* This layer has pointerEvents = 'none' so that it doesn't block transparent hotspot clicks */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        pointerEvents: 'none'
      }}>

        {activeTab === 'BHXH' ? (
          <>
            {/* --- Summary Box Overlay --- */}
            {/* Cover and overlay "Tổng thời gian tham gia" */}
            <div style={{
              position: 'absolute',
              left: `${(20 / W) * 100}%`,
              top: `${(221 / H) * 100}%`,
              width: `${(260 / W) * 100}%`,
              height: `${(17 / H) * 100}%`,
              background: '#ffffff',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              left: `${(20 / W) * 100}%`,
              top: `${(221 / H) * 100}%`,
              width: `${(260 / W) * 100}%`,
              height: `${(17 / H) * 100}%`,
              color: '#2a2b2b',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13.5px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              pointerEvents: 'none'
            }}>
              Tổng thời gian tham gia: {years > 0 ? `${years} năm ` : ''}{months} tháng
            </div>

            {/* Cover and overlay "Tổng thời gian chậm đóng" */}
            <div style={{
              position: 'absolute',
              left: `${(20 / W) * 100}%`,
              top: `${(239 / H) * 100}%`,
              width: `${(240 / W) * 100}%`,
              height: `${(17 / H) * 100}%`,
              background: '#ffffff',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              left: `${(20 / W) * 100}%`,
              top: `${(239 / H) * 100}%`,
              width: `${(240 / W) * 100}%`,
              height: `${(17 / H) * 100}%`,
              color: '#c1191a',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13.5px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              pointerEvents: 'none'
            }}>
              Tổng thời gian chậm đóng: 0 tháng
            </div>

            {/* --- Table Rows Overlay (100% Vector HTML/CSS Figma Table) --- */}
            {history.length === 0 ? (
              /* If history is 0, cover entire table area with empty state */
              <div style={{
                position: 'absolute',
                left: `${(9 / W) * 100}%`,
                top: `${(266 / H) * 100}%`,
                width: `${(382 / W) * 100}%`,
                height: `${(534 / H) * 100}%`,
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#aaa9ae',
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                pointerEvents: 'auto',
                zIndex: 5
              }}>
                Chưa có dữ liệu đóng BHXH
              </div>
            ) : (
              /* Pure Vector HTML/CSS Figma Table covering background sample data 100% */
              <div style={{
                position: 'absolute',
                left: `${(9 / W) * 100}%`,
                top: `${(266 / H) * 100}%`,
                width: `${(382 / W) * 100}%`,
                height: `${(534 / H) * 100}%`,
                background: '#ffffff',
                zIndex: 5,
                boxSizing: 'border-box',
                pointerEvents: 'auto'
              }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  color: '#3f3f3f',
                  backgroundColor: '#ffffff'
                }}>
                  <thead>
                    <tr style={{ backgroundColor: '#38679f', height: '42px', color: '#ffffff' }}>
                      <th style={{ 
                        width: `${(68 / 382) * 100}%`, 
                        fontWeight: 400, 
                        border: '0.5px solid #d9d9d9',
                        fontSize: '12px',
                        textAlign: 'center',
                        padding: 0
                      }}>Từ tháng</th>
                      <th style={{ 
                        width: `${(67 / 382) * 100}%`, 
                        fontWeight: 400, 
                        border: '0.5px solid #d9d9d9',
                        fontSize: '12px',
                        lineHeight: '1.2',
                        textAlign: 'center',
                        padding: 0
                      }}>Đến<br/>tháng</th>
                      <th style={{ 
                        width: `${(123 / 382) * 100}%`, 
                        fontWeight: 400, 
                        border: '0.5px solid #d9d9d9',
                        fontSize: '12px',
                        textAlign: 'center',
                        padding: 0
                      }}>Đơn vị</th>
                      <th style={{ 
                        width: `${(92 / 382) * 100}%`, 
                        fontWeight: 400, 
                        border: '0.5px solid #d9d9d9',
                        fontSize: '12px',
                        lineHeight: '1.2',
                        textAlign: 'center',
                        padding: 0
                      }}>Nghề nghiệp<br/>Chức vụ</th>
                      <th style={{ 
                        width: `${(32 / 382) * 100}%`, 
                        border: '0.5px solid #d9d9d9',
                        padding: 0
                      }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.slice(0, 2).map((row, idx) => (
                      <tr key={idx} style={{ height: '66px', backgroundColor: '#ffffff' }}>
                        <td style={{ 
                          textAlign: 'center', 
                          fontWeight: 500, 
                          border: '0.5px solid #d9d9d9',
                          padding: 0 
                        }}>{row.from}</td>
                        <td style={{ 
                          textAlign: 'center', 
                          fontWeight: 500, 
                          border: '0.5px solid #d9d9d9',
                          padding: 0 
                        }}>{row.to}</td>
                        <td style={{ 
                          fontWeight: 600, 
                          border: '0.5px solid #d9d9d9', 
                          padding: '0 6px', 
                          textAlign: 'center', 
                          lineHeight: '1.3',
                          wordBreak: 'break-word'
                        }}>{row.company}</td>
                        <td style={{ 
                          textAlign: 'center', 
                          fontWeight: 500, 
                          border: '0.5px solid #d9d9d9', 
                          padding: '0 4px', 
                          lineHeight: '1.3',
                          wordBreak: 'break-word'
                        }}>{row.position}</td>
                        <td style={{ 
                          textAlign: 'center', 
                          border: '0.5px solid #d9d9d9', 
                          position: 'relative',
                          padding: 0 
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#38679f"/>
                            </svg>
                          </div>
                          <button
                            onClick={() => onNavigate('salary-detail', { rowData: row })}
                            style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'transparent',
                              border: 'none',
                              outline: 'none',
                              cursor: 'pointer',
                              pointerEvents: 'auto',
                              zIndex: 10
                            }}
                            aria-label={`Chi tiết dòng ${idx + 1}`}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        ) : (
          /* Non-BHXH empty tab states: cover entire content area below header */
          <div style={{
            position: 'absolute',
            left: 0,
            top: '145px',
            width: '100%',
            height: 'calc(100% - 145px - 65px)',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#aaa9ae',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            pointerEvents: 'auto'
          }}>
            Chưa có dữ liệu tham gia {activeTab}
          </div>
        )}
      </div>

      {/* 6. Bottom Nav Zone Hotspots (y=823 to 874) */}
      <div style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '65px',
        zIndex: 30,
        display: 'flex'
      }}>
        {/* Column 1: Trang chủ */}
        <div
          onClick={() => onNavigate('dashboard')}
          style={{ flex: 1, cursor: 'pointer' }}
        />
        {/* Column 2: Dịch vụ công */}
        <div
          onClick={() => alert('Dịch vụ công đang phát triển!')}
          style={{ flex: 1, cursor: 'pointer' }}
        />
        {/* Column 3: Tra cứu */}
        <div
          onClick={() => alert('Tra cứu trực tuyến đang phát triển!')}
          style={{ flex: 1, cursor: 'pointer' }}
        />
        {/* Column 4: Trợ giúp */}
        <div
          onClick={() => onNavigate('dashboard')}
          style={{ flex: 1, cursor: 'pointer' }}
        />
      </div>
      </div>
    </div>
  );
};

export default InsuranceList;
