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
              background: '#f0f7fc',
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
              background: '#f0f7fc',
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


            {/* --- Table Rows Overlay --- */}
            {history.length === 0 ? (
              /* If history is 0, cover entire table area */
              <div style={{
                position: 'absolute',
                left: `${(14 / W) * 100}%`,
                top: `${(268 / H) * 100}%`,
                width: `${(374 / W) * 100}%`,
                height: `${(530 / H) * 100}%`,
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#aaa9ae',
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                pointerEvents: 'auto'
              }}>
                Chưa có dữ liệu đóng BHXH
              </div>
            ) : (
              <>
                {/* Row 1 (y=302 to 366) */}
                {/* Cover cells */}
                <div style={{ position: 'absolute', left: `${(16 / W) * 100}%`, top: `${(325 / H) * 100}%`, width: `${(52 / W) * 100}%`, height: `${(25 / H) * 100}%`, background: '#ffffff' }} />
                <div style={{ position: 'absolute', left: `${(80 / W) * 100}%`, top: `${(325 / H) * 100}%`, width: `${(52 / W) * 100}%`, height: `${(25 / H) * 100}%`, background: '#ffffff' }} />
                <div style={{ position: 'absolute', left: `${(138 / W) * 100}%`, top: `${(312 / H) * 100}%`, width: `${(132 / W) * 100}%`, height: `${(48 / H) * 100}%`, background: '#ffffff' }} />
                <div style={{ position: 'absolute', left: `${(274 / W) * 100}%`, top: `${(312 / H) * 100}%`, width: `${(76 / W) * 100}%`, height: `${(48 / H) * 100}%`, background: '#ffffff' }} />

                {/* Overlay Text */}
                <div style={{
                  position: 'absolute',
                  left: `${(16 / W) * 100}%`,
                  top: `${(325 / H) * 100}%`,
                  width: `${(52 / W) * 100}%`,
                  height: `${(25 / H) * 100}%`,
                  color: '#3f3f3f',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>{history[0]?.from}</div>

                <div style={{
                  position: 'absolute',
                  left: `${(80 / W) * 100}%`,
                  top: `${(325 / H) * 100}%`,
                  width: `${(52 / W) * 100}%`,
                  height: `${(25 / H) * 100}%`,
                  color: '#3f3f3f',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>{history[0]?.to}</div>

                <div style={{
                  position: 'absolute',
                  left: `${(138 / W) * 100}%`,
                  top: `${(312 / H) * 100}%`,
                  width: `${(132 / W) * 100}%`,
                  height: `${(48 / H) * 100}%`,
                  color: '#3f3f3f',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  lineHeight: '1.3',
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                  overflow: 'hidden'
                }}>{history[0]?.company}</div>

                <div style={{
                  position: 'absolute',
                  left: `${(274 / W) * 100}%`,
                  top: `${(312 / H) * 100}%`,
                  width: `${(76 / W) * 100}%`,
                  height: `${(48 / H) * 100}%`,
                  color: '#3f3f3f',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  lineHeight: '1.3',
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                  overflow: 'hidden'
                }}>{history[0]?.position}</div>

                {/* Hotspot Row 1 */}
                <button
                  onClick={() => onNavigate('salary-detail', { rowData: history[0] })}
                  style={{
                    position: 'absolute',
                    left: `${(352 / W) * 100}%`,
                    top: `${(302 / H) * 100}%`,
                    width: `${(38 / W) * 100}%`,
                    height: `${(64 / H) * 100}%`,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    zIndex: 35,
                    pointerEvents: 'auto'
                  }}
                  aria-label="Detail Row 1"
                />


                {/* Row 2 (y=366 to 430) */}
                {history.length > 1 ? (
                  <>
                    {/* Cover cells */}
                    <div style={{ position: 'absolute', left: `${(16 / W) * 100}%`, top: `${(389 / H) * 100}%`, width: `${(52 / W) * 100}%`, height: `${(25 / H) * 100}%`, background: '#ffffff' }} />
                    <div style={{ position: 'absolute', left: `${(80 / W) * 100}%`, top: `${(389 / H) * 100}%`, width: `${(52 / W) * 100}%`, height: `${(25 / H) * 100}%`, background: '#ffffff' }} />
                    <div style={{ position: 'absolute', left: `${(138 / W) * 100}%`, top: `${(376 / H) * 100}%`, width: `${(132 / W) * 100}%`, height: `${(48 / H) * 100}%`, background: '#ffffff' }} />
                    <div style={{ position: 'absolute', left: `${(274 / W) * 100}%`, top: `${(376 / H) * 100}%`, width: `${(76 / W) * 100}%`, height: `${(48 / H) * 100}%`, background: '#ffffff' }} />

                    {/* Overlay Text */}
                    <div style={{
                      position: 'absolute',
                      left: `${(16 / W) * 100}%`,
                      top: `${(389 / H) * 100}%`,
                      width: `${(52 / W) * 100}%`,
                      height: `${(25 / H) * 100}%`,
                      color: '#3f3f3f',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>{history[1]?.from}</div>

                    <div style={{
                      position: 'absolute',
                      left: `${(80 / W) * 100}%`,
                      top: `${(389 / H) * 100}%`,
                      width: `${(52 / W) * 100}%`,
                      height: `${(25 / H) * 100}%`,
                      color: '#3f3f3f',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>{history[1]?.to}</div>

                    <div style={{
                      position: 'absolute',
                      left: `${(138 / W) * 100}%`,
                      top: `${(376 / H) * 100}%`,
                      width: `${(132 / W) * 100}%`,
                      height: `${(48 / H) * 100}%`,
                      color: '#3f3f3f',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      textAlign: 'left',
                      lineHeight: '1.3',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      overflow: 'hidden'
                    }}>{history[1]?.company}</div>

                    <div style={{
                      position: 'absolute',
                      left: `${(274 / W) * 100}%`,
                      top: `${(376 / H) * 100}%`,
                      width: `${(76 / W) * 100}%`,
                      height: `${(48 / H) * 100}%`,
                      color: '#3f3f3f',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      lineHeight: '1.3',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      overflow: 'hidden'
                    }}>{history[1]?.position}</div>

                    {/* Hotspot Row 2 */}
                    <button
                      onClick={() => onNavigate('salary-detail', { rowData: history[1] })}
                      style={{
                        position: 'absolute',
                        left: `${(352 / W) * 100}%`,
                        top: `${(366 / H) * 100}%`,
                        width: `${(38 / W) * 100}%`,
                        height: `${(64 / H) * 100}%`,
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                        zIndex: 35,
                        pointerEvents: 'auto'
                      }}
                      aria-label="Detail Row 2"
                    />
                  </>
                ) : (
                  /* If only 1 row, cleanly cover second row area with solid white background */
                  <div style={{
                    position: 'absolute',
                    left: `${(14 / W) * 100}%`,
                    top: `${(366 / H) * 100}%`,
                    width: `${(374 / W) * 100}%`,
                    height: `${(70 / H) * 100}%`,
                    background: '#ffffff'
                  }} />
                )}

                {/* Cleanly cover any remaining vertical space below row 2 in table box (y=430 to 800) */}
                <div style={{
                  position: 'absolute',
                  left: `${(14 / W) * 100}%`,
                  top: `${(430 / H) * 100}%`,
                  width: `${(374 / W) * 100}%`,
                  height: `${(370 / H) * 100}%`,
                  background: '#ffffff'
                }} />
              </>
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
  );
};

export default InsuranceList;
