import React, { useState } from 'react';
import bgLogin from '../assets/bg_login.png';
import logoBhxh from '../assets/logo_bhxh.png';
import logoVneid from '../assets/logo_vneid.png';
import fingerprint from '../assets/fingerprint.png';
import bgFooter from '../assets/bg_footer.png';
import flagVn from '../assets/vietnamese_flag.png';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('4217247030');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Vui lòng nhập Mã số BHXH/CCCD');
      return;
    }
    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess();
    }, 800);
  };

  const handleVNeIDLogin = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess();
    }, 1000);
  };

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden select-none">
      {/* Background image - p1 1 from Figma */}
      <img
        src={bgLogin}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-top"
        draggable={false}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col w-full h-full">

        {/* Top bar: Flag + Language + Trợ giúp + Liên hệ */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <div className="flex items-center gap-1.5">
            <img src={flagVn} alt="Tiếng Việt" className="w-6 h-4 rounded-[2px] object-cover" />
            <span className="text-[13px] font-semibold text-[#0069ad]">Tiếng Việt</span>
          </div>
          <div className="flex gap-4 text-[13px] font-semibold text-[#0069ad]">
            <span className="cursor-pointer hover:underline">Trợ giúp</span>
            <span className="cursor-pointer hover:underline">Liên hệ</span>
          </div>
        </div>

        {/* BHXH Logo + Title */}
        <div className="flex flex-col items-center mt-4 mb-2">
          {/* Logo Group 7: Ellipse 1 (shadow circle) + logo-bao-hiem-xa-hoi-viet-nam 1 */}
          <div className="relative">
            {/* Outer white shadow circle like Figma Ellipse 1 */}
            <div className="w-[76px] h-[76px] rounded-full bg-white shadow-[0_4px_20px_rgba(0,105,173,0.35)] flex items-center justify-center">
              <img
                src={logoBhxh}
                alt="Logo BHXH"
                className="w-[68px] h-[68px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col items-center px-6 gap-0">

          {/* Username input */}
          <div className="relative w-full max-w-[338px] h-[39px] flex items-center bg-white rounded-[5px] border border-[#c8c5c5] shadow-sm focus-within:border-[#0069ad] transition-all mb-3">
            {/* Blue icon box */}
            <div className="flex items-center justify-center w-[39px] h-[39px] bg-[#0069ad] rounded-l-[4px] shrink-0">
              {/* CCCD icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
                <circle cx="8" cy="12" r="2.5" fill="white"/>
                <line x1="12" y1="9" x2="20" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="12" y1="12" x2="18" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="12" y1="15" x2="20" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Mã số BHXH/Số ĐDCN/CCCD"
              className="flex-1 px-3 text-[13px] font-medium text-gray-700 placeholder-[#948c8c] bg-transparent border-none outline-none"
            />
          </div>

          {/* Password input */}
          <div className="relative w-full max-w-[338px] h-[39px] flex items-center bg-white rounded-[5px] border border-[#c8c5c5] shadow-sm focus-within:border-[#0069ad] transition-all mb-2">
            <div className="flex items-center justify-center w-[39px] h-[39px] bg-[#0069ad] rounded-l-[4px] shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="11" width="14" height="10" rx="2" fill="white"/>
                <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1.5" fill="#0069ad"/>
              </svg>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
              className="flex-1 px-3 text-[13px] font-medium text-gray-700 placeholder-[#948c8c] bg-transparent border-none outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-2 text-gray-400 hover:text-[#0069ad] transition-colors focus:outline-none"
            >
              {showPassword ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
          </div>

          {error && <p className="text-xs font-semibold text-red-600 self-start max-w-[338px] w-full mb-1 px-1">{error}</p>}

          {/* Links: Đăng ký & Quên mật khẩu */}
          <div className="flex justify-between w-full max-w-[338px] text-[13px] font-semibold text-[#0069ad] mb-5">
            <span className="cursor-pointer hover:underline">Đăng ký tài khoản</span>
            <span className="cursor-pointer hover:underline">Quên mật khẩu ?</span>
          </div>

          {/* Action Row: Đăng nhập button + Fingerprint */}
          <div className="flex items-center justify-between w-full max-w-[338px] mb-6">
            {/* Đăng nhập button - Rectangle 5 style: border #0069ad, bg opacity 0.45 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[240px] h-[44px] flex items-center justify-center rounded-[5px] border border-[#0069ad] text-[#0069ad] text-[16px] font-bold transition-all duration-200 active:scale-95"
              style={{ background: 'rgba(255,255,255,0.45)' }}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-[#0069ad]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Đang đăng nhập...
                </span>
              ) : 'Đăng nhập'}
            </button>

            {/* Fingerprint icon - "1 1" from Figma (80x80 in design) */}
            <button
              type="button"
              onClick={onLoginSuccess}
              className="w-[60px] h-[60px] flex items-center justify-center active:scale-90 transition-transform duration-200"
              title="Đăng nhập bằng vân tay"
            >
              <img
                src={fingerprint}
                alt="Vân tay"
                className="w-full h-full object-contain"
              />
            </button>
          </div>
        </form>

        {/* VNeID Red Button - w=340, h=67, br=12, color #d91811 */}
        <div className="flex flex-col items-center px-6 mb-3">
          <button
            type="button"
            onClick={handleVNeIDLogin}
            className="relative w-full max-w-[340px] h-[67px] rounded-[12px] flex items-center pl-5 pr-[80px] active:scale-95 transition-all duration-200 shadow-md"
            style={{ background: '#d91811' }}
          >
            <div className="flex flex-col justify-center">
              <span className="text-[14px] font-bold text-white leading-tight">
                Đăng nhập bằng tài khoản
              </span>
              <span className="text-[14px] font-bold text-white leading-tight">
                định danh điện tử
              </span>
            </div>
            {/* VNeID logo - "image 1" from Figma */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <img
                src={logoVneid}
                alt="VNeID"
                className="w-[55px] h-[55px] object-contain"
              />
            </div>
          </button>
        </div>

        {/* Footer area - p2 1 from Figma (y=810, h=64) */}
        <div className="mt-auto flex flex-col items-center">
          {/* p2 1 footer image */}
          <img
            src={bgFooter}
            alt="footer"
            className="w-full object-cover"
            style={{ height: '64px' }}
            draggable={false}
          />

          {/* Bottom links */}
          <div className="flex flex-col items-center gap-1 py-2 bg-white/60 w-full">
            <span className="text-[13px] font-semibold text-[#0069ad] cursor-pointer hover:underline">
              Mời cài đặt VssID
            </span>
            <span className="text-[12px] text-[#0069ad] cursor-pointer hover:underline">
              Chính sách quyền riêng tư
            </span>
            <span className="text-[10px] text-gray-500 font-medium">
              Phiên bản 2.0.4 • Bảo hiểm xã hội Việt Nam
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
