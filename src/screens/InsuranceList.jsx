import React, { useState } from 'react';
import frameInsurance from '../assets/frame_insurance.png';

// Import high-fidelity tab icons from Figma
import tabBhxh from '../assets/tab_bhxh.png';
import tabBhtn from '../assets/tab_bhtn.png';
import tabBhtnld from '../assets/tab_bhtnld.png';
import tabBhyt from '../assets/tab_bhyt.png';
import tabC14ts from '../assets/tab_c14ts.png';

import icEye from '../assets/ic_eye.png';

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

  const tabs = [
    { id: 'BHXH', label: 'BHXH', icon: tabBhxh },
    { id: 'BHTN', label: 'BHTN', icon: tabBhtn },
    { id: 'BHTNLĐ-BNN', label: 'BHTNLĐ-BNN', icon: tabBhtnld },
    { id: 'BHYT', label: 'BHYT', icon: tabBhyt },
    { id: 'C14-TS', label: 'C14-TS', icon: tabC14ts }
  ];

  const renderTabLabel = (label) => {
    if (label === 'BHTNLĐ-BNN') {
      return (
        <span style={{ display: 'block', lineHeight: '1.1', fontSize: '11px', textAlign: 'center' }}>
          BHTNLĐ-<br />BNN
        </span>
      );
    }
    return label;
  };

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

      {/* 2. Transparent Back Button Hotspot: x=18, y=32, w=24, h=24 */}
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

      {/* 3. DYNAMIC 5-TAB BAR (y=67 to y=145, h=78) - Covers Figma Static Tabs */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '67px',
        width: '100%',
        height: '78px',
        background: '#ffffff',
        display: 'flex',
        borderBottom: '1px solid #e2e8f0',
        zIndex: 20,
        boxSizing: 'border-box'
      }}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                padding: '4px 2px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                outline: 'none',
                position: 'relative'
              }}
            >
              <img
                src={tab.icon}
                alt={tab.label}
                style={{
                  width: '32px',
                  height: '32px',
                  objectFit: 'contain',
                  filter: isActive ? 'none' : 'grayscale(100%)',
                  opacity: isActive ? 1 : 0.4,
                  transition: 'all 0.2s ease'
                }}
              />
              <span style={{
                fontSize: '11px',
                fontWeight: isActive ? 700 : 400,
                color: isActive ? '#0069ad' : '#aaa9ae',
                fontFamily: 'Inter, sans-serif',
                textAlign: 'center',
                whiteSpace: 'nowrap'
              }}>
                {renderTabLabel(tab.label)}
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
            </button>
          );
        })}
      </div>

      {/* 4. DYNAMIC CONTENT AREA (y=145 to y=823) - Solid White Background Covers Figma Static Rows */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '145px',
        width: '100%',
        height: 'calc(100% - 145px - 65px)',
        background: '#ffffff',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 20,
        overflow: 'hidden'
      }}>
        {activeTab === 'BHXH' ? (
          <>
            {/* Summary Box */}
            <div style={{
              margin: '12px 14px 10px 14px',
              border: '1px solid #0069ad',
              background: '#f0f7fc',
              borderRadius: '6px',
              padding: '10px 14px',
              flexShrink: 0,
              boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
            }}>
              <div style={{
                fontSize: '14px',
                color: '#38679f',
                fontWeight: 700,
                fontFamily: 'Inter, sans-serif',
                marginBottom: '4px'
              }}>
                Quá trình tham gia Bảo hiểm xã hội
              </div>
              <div style={{
                fontSize: '13px',
                color: '#2a2b2b',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                marginBottom: '4px'
              }}>
                Tổng thời gian tham gia: {years > 0 ? `${years} năm ` : ''}{months} tháng
              </div>
              <div style={{
                fontSize: '13px',
                color: '#c1191a',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif'
              }}>
                Tổng thời gian chậm đóng: 0 tháng
              </div>
            </div>

            {/* Table Header Row */}
            <div style={{
              display: 'flex',
              background: '#3f6fa8',
              flexShrink: 0,
              marginLeft: '14px',
              marginRight: '14px',
              height: '34px',
              alignItems: 'center',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{ width: '54px', fontSize: '11px', fontWeight: 600, color: '#ffffff', textAlign: 'center', boxSizing: 'border-box', lineHeight: '1.2', borderRight: '1px solid rgba(255,255,255,0.15)' }}>Từ tháng</div>
              <div style={{ width: '54px', fontSize: '11px', fontWeight: 600, color: '#ffffff', textAlign: 'center', boxSizing: 'border-box', lineHeight: '1.2', borderRight: '1px solid rgba(255,255,255,0.15)' }}>Đến<br />tháng</div>
              <div style={{ flex: 1, paddingLeft: '8px', fontSize: '11px', fontWeight: 600, color: '#ffffff', textAlign: 'left', boxSizing: 'border-box', lineHeight: '1.2', borderRight: '1px solid rgba(255,255,255,0.15)' }}>Đơn vị</div>
              <div style={{ width: '78px', fontSize: '11px', fontWeight: 600, color: '#ffffff', textAlign: 'center', boxSizing: 'border-box', lineHeight: '1.2' }}>Nghề nghiệp<br />Chức vụ</div>
              <div style={{ width: '32px', boxSizing: 'border-box' }} />
            </div>

            {/* Scrollable Data Rows */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              marginLeft: '14px',
              marginRight: '14px',
              borderLeft: '1px solid #e2e8f0',
              borderRight: '1px solid #e2e8f0',
              borderBottom: '1px solid #e2e8f0',
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px'
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
                      minHeight: '48px',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = i % 2 === 0 ? '#ffffff' : '#f8fafc'}
                  >
                    <div style={{ width: '54px', fontSize: '11px', color: '#3f3f3f', fontWeight: 500, textAlign: 'center', borderRight: '1px solid #e2e8f0', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{row.from}</div>
                    <div style={{ width: '54px', fontSize: '11px', color: '#3f3f3f', fontWeight: 500, textAlign: 'center', borderRight: '1px solid #e2e8f0', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{row.to}</div>
                    <div style={{
                      flex: 1,
                      padding: '8px 8px',
                      fontSize: '11px',
                      color: '#3f3f3f',
                      fontWeight: 600,
                      textAlign: 'left',
                      borderRight: '1px solid #e2e8f0',
                      boxSizing: 'border-box',
                      lineHeight: '1.3',
                      display: 'flex',
                      alignItems: 'center',
                      wordBreak: 'break-word'
                    }}>{row.company}</div>
                    <div style={{
                      width: '78px',
                      padding: '4px 2px',
                      fontSize: '11px',
                      color: '#3f3f3f',
                      fontWeight: 500,
                      textAlign: 'center',
                      borderRight: '1px solid #e2e8f0',
                      boxSizing: 'border-box',
                      lineHeight: '1.3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      wordBreak: 'break-word'
                    }}>{row.position}</div>
                    <div style={{ width: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
                      <img src={icEye} alt="Xem chi tiết" style={{ width: '18px', height: '12px', objectFit: 'contain' }} />
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
            color: '#aaa9ae',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif'
          }}>
            Chưa có dữ liệu tham gia {activeTab}
          </div>
        )}
      </div>

      {/* 5. Bottom Nav Zone Hotspots (y=823 to 874) */}
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
        {/* Column 4: Trợ giúp / Dashboard Menu */}
        <div
          onClick={() => onNavigate('dashboard')}
          style={{ flex: 1, cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default InsuranceList;
