import React from 'react';

const SalaryDetail = ({ onNavigate, rowData }) => {
  const data = rowData || {};

  return (
    <div style={{ width: '100%', height: '100%', background: '#ffffff', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', overflow: 'hidden' }}>
      {/* Header: white bg, blue back arrow, "Chi tiết" in blue italic */}
      <div style={{ width: '100%', height: '67px', background: '#fff', display: 'flex', alignItems: 'center', padding: '0 14px', borderBottom: '2px solid #0069ad', flexShrink: 0 }}>
        <div onClick={() => onNavigate('insurance-list')} style={{ cursor: 'pointer', padding: '4px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#0069ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span style={{ flex: 1, fontSize: '20px', color: '#0069ad', textAlign: 'center', marginRight: '30px', fontStyle: 'italic', fontWeight: 600 }}>Chi tiết</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
        {/* Date row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '14px', color: '#3f3f3f' }}>
          <span>Từ tháng: {data.from || '04/2025'}</span>
          <span>Đến tháng: {data.to || '03/2026'}</span>
        </div>

        {/* Blue info card */}
        <div style={{ background: '#3f6fa8', padding: '14px', color: 'white', fontSize: '13px', lineHeight: 1.6 }}>
          <div>Chức vụ: <strong>Nhân viên kỹ thuật</strong></div>
          <div>Đơn vị công tác: <strong>Công ty TNHH EO TECHNICS Việt Nam</strong></div>
          <div>Nơi làm việc: <strong>BT22, khu đô thị hud võ  cường-tp bắc ninh-bắc ninh</strong></div>
          <div style={{ textAlign: 'center', marginTop: '6px', fontWeight: 700 }}>VND</div>
        </div>

        {/* Salary table */}
        <div style={{ border: '1px solid #c8c5c5' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #c8c5c5' }}>
            <div style={{ flex: 1, padding: '10px 12px', fontSize: '13px', color: '#3f3f3f' }}>Tiền lương đóng BHXH</div>
            <div style={{ padding: '10px 12px', fontSize: '13px', color: '#3f3f3f', textAlign: 'right', minWidth: '110px' }}>14.500.000</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, padding: '10px 12px 10px 30px', fontSize: '13px', color: '#3f3f3f' }}>Mức lương</div>
            <div style={{ padding: '10px 12px', fontSize: '13px', color: '#3f3f3f', textAlign: 'right', minWidth: '110px' }}>14.500.000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryDetail;
