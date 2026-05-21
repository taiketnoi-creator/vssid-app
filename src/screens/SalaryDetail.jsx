import React from 'react';

const SalaryDetail = ({ onNavigate, rowData }) => {
  const data = rowData || {
    from: '04/2025',
    to: '03/2026',
    role: 'Nhân viên kỹ thuật',
    unit: 'Công ty TNHH EO TECHNICS',
    salary: '14.500.000'
  };

  const S = {
    root: { width: '100%', height: '100%', background: '#ffffff', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', overflow: 'hidden' },
    // Header: white background, "Chi tiết" centered in blue
    header: { width: '100%', height: '67px', background: '#ffffff', display: 'flex', alignItems: 'center', padding: '0 14px', borderBottom: '1px solid #e0e0e0', flexShrink: 0 },
    backBtn: { cursor: 'pointer', marginRight: '16px' },
    headerTitle: { fontSize: '20px', fontWeight: '400', color: '#0069ad', fontFamily: 'Inter', flex: 1, textAlign: 'center', marginRight: '30px' },
    content: { flex: 1, overflowY: 'auto', padding: '16px' },
    // Date row: "Từ tháng: 04/2025   Đến tháng: 03/2026"
    dateRow: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '14px', color: '#3f3f3f', fontFamily: 'Inter' },
    // Blue detail card: Rectangle 20 (fill #3f6fa8)
    detailCard: { background: '#3f6fa8', padding: '14px', marginBottom: '0', color: 'white' },
    detailLabel: { fontSize: '13px', fontFamily: 'Inter', display: 'inline' },
    detailValue: { fontSize: '13px', fontWeight: '700', fontFamily: 'Inter', display: 'inline' },
    // Salary table
    table: { width: '100%', border: '1px solid #c8c5c5', marginTop: '0' },
    tableRow: { display: 'flex', borderBottom: '1px solid #c8c5c5' },
    tableCell: { padding: '10px 12px', fontSize: '13px', fontFamily: 'Inter', color: '#3f3f3f' },
  };

  return (
    <div style={S.root}>
      {/* Header: white bg, back arrow, "Chi tiết" in blue */}
      <div style={S.header}>
        <div style={S.backBtn} onClick={() => onNavigate('insurance-list')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#0069ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span style={S.headerTitle}>Chi tiết</span>
      </div>

      <div style={S.content}>
        {/* Date row: "Từ tháng: 04/2025   Đến tháng: 03/2026" */}
        <div style={S.dateRow}>
          <span>Từ tháng: {data.from}</span>
          <span>Đến tháng: {data.to || '03/2026'}</span>
        </div>

        {/* Blue detail card - Rectangle 20 */}
        <div style={S.detailCard}>
          {/* "Chức vụ: Nhân viên kỹ thuật" - label regular, value bold */}
          <div style={{ fontSize: '13px', fontFamily: 'Inter', color: 'white', marginBottom: '4px', lineHeight: '1.5' }}>
            <span>Chức vụ: </span>
            <strong>{data.role || 'Nhân viên kỹ thuật'}</strong>
          </div>
          {/* "Đơn vị công tác: Công ty TNHH EO TECHNICS" */}
          <div style={{ fontSize: '13px', fontFamily: 'Inter', color: 'white', marginBottom: '4px', lineHeight: '1.5' }}>
            <span>Đơn vị công tác: </span>
            <strong>{data.unit || 'Công ty TNHH EO TECHNICS'}</strong>
            {data.unit && !data.unit.includes('Việt Nam') && <><br /><strong>Việt Nam</strong></>}
          </div>
          {/* "Nơi làm việc: BT22, khu đô thị hud võ cường-tp bắc ninh-bắc ninh" */}
          <div style={{ fontSize: '13px', fontFamily: 'Inter', color: 'white', lineHeight: '1.5' }}>
            <span>Nơi làm việc: </span>
            <strong>BT22, khu đô thị hud võ  cường-tp bắc ninh-bắc ninh</strong>
          </div>
        </div>

        {/* Salary table */}
        <div style={S.table}>
          <div style={S.tableRow}>
            <div style={{ ...S.tableCell, flex: 1 }}>Tiền lương đóng BHXH</div>
            <div style={{ ...S.tableCell, textAlign: 'right', minWidth: '120px' }}>{data.salary || '14.500.000'}</div>
          </div>
          <div style={{ ...S.tableRow, borderBottom: 'none' }}>
            <div style={{ ...S.tableCell, flex: 1, paddingLeft: '30px' }}>Mức lương</div>
            <div style={{ ...S.tableCell, textAlign: 'right', minWidth: '120px' }}>{data.salary || '14.500.000'}</div>
          </div>
          {/* "VND" label below */}
          <div style={{ padding: '2px 12px 8px', fontSize: '12px', color: '#3f3f3f', fontFamily: 'Inter' }}>VND</div>
        </div>
      </div>
    </div>
  );
};

export default SalaryDetail;
