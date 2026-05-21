import { useState, useEffect } from 'react';

const AccountManager = ({ isOpen, onClose, accounts, onUpdateAccounts, onQuickLogin, isStandalone = false }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animClass, setAnimClass] = useState(false);
  const [activeView, setActiveView] = useState('list'); // 'list' | 'form'
  const [editingIndex, setEditingIndex] = useState(null); // null if adding new

  // Form State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [bhxhCode, setBhxhCode] = useState('');
  const [birthday, setBirthday] = useState('');
  const [cccd, setCccd] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [avatar, setAvatar] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const t = setTimeout(() => setAnimClass(true), 20);
      return () => clearTimeout(t);
    } else {
      setAnimClass(false);
      const t = setTimeout(() => {
        setShouldRender(false);
        setActiveView('list');
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleOpenForm = (index = null) => {
    if (index !== null) {
      // Edit mode
      const acc = accounts[index];
      setEditingIndex(index);
      setUsername(acc.username || '');
      setPassword(acc.password || '');
      setFullName(acc.fullName || '');
      setBhxhCode(acc.bhxhCode || '');
      setBirthday(acc.birthday || '');
      setCccd(acc.cccd || '');
      setPhone(acc.phone || '');
      setAddress(acc.address || '');
      setAvatar(acc.avatar || '');
      setHistory(acc.insuranceHistory ? JSON.parse(JSON.stringify(acc.insuranceHistory)) : []);
    } else {
      // Create mode
      setEditingIndex(null);
      setUsername('');
      setPassword('');
      setFullName('');
      setBhxhCode('');
      setBirthday('');
      setCccd('');
      setPhone('');
      setAddress('');
      setAvatar('');
      setHistory([
        { from: '01/2026', to: '12/2026', company: 'Công ty TNHH Mới', position: 'Nhân viên', salary: '10.000.000', workAddress: 'Hà Nội' }
      ]);
    }
    setActiveView('form');
  };

  const handleAddHistoryRow = () => {
    setHistory([
      ...history,
      { from: '', to: '', company: '', position: '', salary: '', workAddress: '' }
    ]);
  };

  const handleRemoveHistoryRow = (index) => {
    const updated = [...history];
    updated.splice(index, 1);
    setHistory(updated);
  };

  const handleHistoryChange = (index, field, value) => {
    const updated = [...history];
    updated[index][field] = value;
    setHistory(updated);
  };

  const handleSave = () => {
    if (!username || !password || !fullName) {
      alert('Vui lòng điền đầy đủ Tài khoản, Mật khẩu và Họ tên!');
      return;
    }

    const newAccount = {
      username,
      password,
      fullName,
      bhxhCode: bhxhCode || username, // default to username if empty
      birthday: birthday || '01/01/2000',
      cccd: cccd || '000000000000',
      phone: phone || '0000000000',
      address: address || 'Chưa cập nhật',
      avatar,
      insuranceHistory: history.filter(h => h.from && h.company) // filter out blank ones
    };

    let updatedAccounts = [...accounts];
    if (editingIndex !== null) {
      updatedAccounts[editingIndex] = newAccount;
    } else {
      // Check duplicate username
      if (accounts.some(a => a.username === username)) {
        alert('Tên tài khoản này đã tồn tại! Vui lòng chọn tài khoản khác.');
        return;
      }
      updatedAccounts.push(newAccount);
    }

    onUpdateAccounts(updatedAccounts);
    setActiveView('list');
  };

  const handleDelete = (index, e) => {
    e.stopPropagation();
    if (accounts.length <= 1) {
      alert('Không thể xóa tài khoản duy nhất!');
      return;
    }
    if (confirm(`Bạn có chắc chắn muốn xóa tài khoản "${accounts[index].fullName}"?`)) {
      const updated = [...accounts];
      updated.splice(index, 1);
      onUpdateAccounts(updated);
    }
  };

  return (
    <div style={isStandalone ? { width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' } : { position: 'absolute', inset: 0, zIndex: 60, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Dark blurry backdrop overlay (only when not standalone) */}
      {!isStandalone && (
        <div
          onClick={onClose}
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(4px)',
            opacity: animClass ? 1 : 0,
            transition: 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      )}

      {/* Main Container / Bottom Sheet */}
      <div style={isStandalone ? {
        width: '100%',
        height: '100%',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        color: '#1e293b'
      } : {
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '85%',
        background: '#ffffff',
        borderRadius: '24px 24px 0 0',
        boxShadow: '0 -15px 30px -10px rgba(0,0,0,0.3)',
        transform: animClass ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        color: '#1e293b'
      }}>
        
        {/* Handle bar for dragging (only when not standalone) */}
        {!isStandalone && <div style={{ width: '40px', height: '5px', background: '#cbd5e1', borderRadius: '3px', margin: '10px auto 4px', flexShrink: 0 }} />}

        {/* Modal/Standalone Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isStandalone ? '18px 24px' : '10px 20px', borderBottom: '1px solid #f1f5f9', flexShrink: 0 }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isStandalone && '💼 '}
            {activeView === 'list' 
              ? (isStandalone ? 'Hệ thống Quản lý Tài khoản (VssID Admin)' : 'Quản lý Tài khoản') 
              : (editingIndex !== null ? 'Sửa Tài khoản' : 'Thêm Tài khoản')}
          </h2>
          <button 
            onClick={onClose}
            style={isStandalone ? {
              border: 'none', background: '#f1f5f9', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '13px', color: '#64748b', transition: 'background 0.2s'
            } : {
              border: 'none', background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 'bold', color: '#64748b'
            }}
          >
            {isStandalone ? 'Quay lại Simulator ➔' : '✕'}
          </button>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: isStandalone ? '24px' : '16px 20px', boxSizing: 'border-box' }} className="scrollbar-none">
          {activeView === 'list' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Add Account Button */}
              <button
                onClick={() => handleOpenForm(null)}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #0069ad 0%, #004d80 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(0, 105, 173, 0.2)'
                }}
              >
                <span>+</span> Thêm tài khoản mới
              </button>

              <div style={{ color: '#64748b', fontSize: '12px', margin: '4px 0' }}>DANH SÁCH TÀI KHOẢN ({accounts.length})</div>

              {accounts.map((acc, i) => (
                <div 
                  key={i}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '14px',
                    padding: '12px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                    {/* Avatar circle */}
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #0069ad, #01aef2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '16px', flexShrink: 0, overflow: 'hidden' }}>
                      {acc.avatar ? (
                        <img src={acc.avatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        acc.fullName ? acc.fullName.split(' ').pop().slice(0, 2).toUpperCase() : 'VS'
                      )}
                    </div>
                    {/* Details */}
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {acc.fullName}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px', display: 'flex', gap: '8px' }}>
                        <span>TK: <strong>{acc.username}</strong></span>
                        <span>|</span>
                        <span>BHXH: <strong>{acc.bhxhCode}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                    <button
                      onClick={() => onQuickLogin(acc)}
                      style={{
                        background: '#e0f2fe',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '6px 10px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#0369a1',
                        cursor: 'pointer'
                      }}
                    >
                      Vào nhanh
                    </button>
                    <button
                      onClick={() => handleOpenForm(i)}
                      style={{
                        background: '#f1f5f9',
                        border: 'none',
                        borderRadius: '8px',
                        width: '28px',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '12px',
                        color: '#475569'
                      }}
                      title="Sửa"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={(e) => handleDelete(i, e)}
                      style={{
                        background: '#fee2e2',
                        border: 'none',
                        borderRadius: '8px',
                        width: '28px',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '12px',
                        color: '#ef4444'
                      }}
                      title="Xóa"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Edit / Add Form View
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#475569', margin: '0 0 4px' }}>🔑 THÔNG TIN ĐĂNG NHẬP</h3>
                
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#64748b', marginBottom: '4px' }}>Tài khoản *</label>
                    <input 
                      type="text" 
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      disabled={editingIndex !== null}
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', background: editingIndex !== null ? '#f1f5f9' : '#fff', boxSizing: 'border-box' }}
                      placeholder="Số BHXH làm tài khoản..."
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#64748b', marginBottom: '4px' }}>Mật khẩu *</label>
                    <input 
                      type="password" 
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                      placeholder="Mật khẩu..."
                    />
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#475569', margin: '0 0 4px' }}>👤 THÔNG TIN CÁ NHÂN</h3>
                
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#64748b', marginBottom: '4px' }}>Họ và tên *</label>
                  <input 
                    type="text" 
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                    placeholder="Nguyễn Văn A..."
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#64748b', marginBottom: '4px' }}>Mã số BHXH</label>
                    <input 
                      type="text" 
                      value={bhxhCode}
                      onChange={e => setBhxhCode(e.target.value)}
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                      placeholder="421724..."
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#64748b', marginBottom: '4px' }}>Ngày sinh</label>
                    <input 
                      type="text" 
                      value={birthday}
                      onChange={e => setBirthday(e.target.value)}
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                      placeholder="DD/MM/YYYY"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#64748b', marginBottom: '4px' }}>CCCD / CMT</label>
                    <input 
                      type="text" 
                      value={cccd}
                      onChange={e => setCccd(e.target.value)}
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                      placeholder="040299..."
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#64748b', marginBottom: '4px' }}>Điện thoại</label>
                    <input 
                      type="text" 
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                      placeholder="0896..."
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#64748b', marginBottom: '4px' }}>Địa chỉ thường trú</label>
                  <input 
                    type="text" 
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                    placeholder="xóm Đông Lam, Xã Trường Lưu, Huyện Lộc Hà, Tỉnh Hà Tĩnh..."
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#64748b', marginBottom: '4px' }}>Link ảnh đại diện (để trống dùng avatar mặc định)</label>
                  <input 
                    type="text" 
                    value={avatar}
                    onChange={e => setAvatar(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
              </div>

              {/* BHXH History Row Section */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#475569', margin: 0 }}>🏢 LỊCH SỬ ĐÓNG BHXH & LƯƠNG CHI TIẾT</h3>
                  <button
                    type="button"
                    onClick={handleAddHistoryRow}
                    style={{
                      background: '#f0f9ff',
                      border: '1px solid #bae6fd',
                      borderRadius: '8px',
                      padding: '4px 8px',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#0284c7',
                      cursor: 'pointer'
                    }}
                  >
                    + Thêm dòng
                  </button>
                </div>

                {history.length === 0 ? (
                  <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center', color: '#94a3b8', fontSize: '13px' }}>
                    Chưa có lịch sử. Vui lòng bấm "Thêm dòng" để thiết lập.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {history.map((row, idx) => (
                      <div 
                        key={idx}
                        style={{
                          background: '#f8fafc',
                          border: '1px dashed #cbd5e1',
                          borderRadius: '12px',
                          padding: '14px',
                          position: 'relative'
                        }}
                      >
                        {/* Remove Row Button */}
                        <button
                          type="button"
                          onClick={() => handleRemoveHistoryRow(idx)}
                          style={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            border: 'none',
                            background: '#fee2e2',
                            color: '#ef4444',
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '11px',
                            fontWeight: 'bold'
                          }}
                        >
                          ✕
                        </button>

                        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', width: '90%' }}>
                          <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', fontSize: '10px', fontWeight: 600, color: '#64748b', marginBottom: '2px' }}>Từ tháng</label>
                            <input 
                              type="text" 
                              value={row.from}
                              onChange={e => handleHistoryChange(idx, 'from', e.target.value)}
                              placeholder="04/2025"
                              style={{ width: '100%', padding: '6px 8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }}
                            />
                          </div>
                          <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', fontSize: '10px', fontWeight: 600, color: '#64748b', marginBottom: '2px' }}>Đến tháng</label>
                            <input 
                              type="text" 
                              value={row.to}
                              onChange={e => handleHistoryChange(idx, 'to', e.target.value)}
                              placeholder="03/2026"
                              style={{ width: '100%', padding: '6px 8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }}
                            />
                          </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '10px', fontWeight: 600, color: '#64748b', marginBottom: '2px' }}>Tên đơn vị đóng (Công ty)</label>
                            <input 
                              type="text" 
                              value={row.company}
                              onChange={e => handleHistoryChange(idx, 'company', e.target.value)}
                              placeholder="Công ty TNHH EO TECHNICS Việt Nam..."
                              style={{ width: '100%', padding: '6px 8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }}
                            />
                          </div>

                          <div style={{ display: 'flex', gap: '10px' }}>
                            <div style={{ flex: 1 }}>
                              <label style={{ display: 'block', fontSize: '10px', fontWeight: 600, color: '#64748b', marginBottom: '2px' }}>Chức vụ</label>
                              <input 
                                type="text" 
                                value={row.position}
                                onChange={e => handleHistoryChange(idx, 'position', e.target.value)}
                                placeholder="Nhân viên kỹ thuật"
                                style={{ width: '100%', padding: '6px 8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }}
                              />
                            </div>
                            <div style={{ flex: 1 }}>
                              <label style={{ display: 'block', fontSize: '10px', fontWeight: 600, color: '#64748b', marginBottom: '2px' }}>Mức lương đóng</label>
                              <input 
                                type="text" 
                                value={row.salary}
                                onChange={e => handleHistoryChange(idx, 'salary', e.target.value)}
                                placeholder="14.500.000"
                                style={{ width: '100%', padding: '6px 8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }}
                              />
                            </div>
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: '10px', fontWeight: 600, color: '#64748b', marginBottom: '2px' }}>Địa chỉ nơi làm việc</label>
                            <input 
                              type="text" 
                              value={row.workAddress}
                              onChange={e => handleHistoryChange(idx, 'workAddress', e.target.value)}
                              placeholder="BT22, khu đô thị hud võ cường-Tp Bắc Ninh..."
                              style={{ width: '100%', padding: '6px 8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Form Actions */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                <button
                  type="button"
                  onClick={() => setActiveView('list')}
                  style={{
                    flex: 1,
                    background: '#f1f5f9',
                    color: '#475569',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '12px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Hủy
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '12px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(2, 132, 199, 0.2)'
                  }}
                >
                  Lưu tài khoản
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountManager;
