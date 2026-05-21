import React, { useState } from 'react';
import { LogoVssID, LogoVNeID, IconCCCD, IconLock, IconFingerprint, IconEye, IconEyeSlash } from '../components/SVGIcon';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('4217247030'); // Prefilled with Nguyễn Hữu Hoàng's BHXH ID
  const [password, setPassword] = useState('••••••••');
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

    // Subtle micro-animation simulation for high-quality feel
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
    <div className="relative flex flex-col items-center justify-between w-full h-full p-6 select-none bg-gradient-to-b from-[#eaf3f9] via-[#ffffff] to-[#d9eafd] overflow-y-auto">
      {/* Top Language & Status bar region */}
      <div className="flex justify-between items-center w-full mt-2 mb-4 text-xs font-semibold text-vssid-blue">
        <span className="cursor-pointer hover:underline">Tiếng Việt</span>
        <div className="flex gap-3">
          <span className="cursor-pointer hover:underline opacity-80">Trợ giúp</span>
          <span className="cursor-pointer hover:underline opacity-80">Liên hệ</span>
        </div>
      </div>

      {/* Main Logo Container */}
      <div className="flex flex-col items-center mt-4 mb-6">
        <div className="relative p-1 bg-white rounded-full shadow-lg border border-[#e2e8f0]">
          <LogoVssID className="w-24 h-24 transform hover:rotate-12 transition-transform duration-500 cursor-pointer" />
        </div>
        <h1 className="mt-3 text-lg font-bold tracking-wider text-vssid-blue text-center">
          VssID
        </h1>
        <p className="text-[10px] text-vssid-textGray font-semibold tracking-widest text-center mt-0.5">
          BẢO HIỂM XÃ HỘI SỐ
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="w-full flex flex-col items-center gap-4">
        {/* Username Input Container */}
        <div className="relative w-[338px] h-[39px] flex items-center bg-white rounded-[5px] border border-[#c8c5c5] shadow-sm focus-within:border-vssid-blue focus-within:ring-1 focus-within:ring-vssid-blue transition-all duration-300">
          <div className="flex items-center justify-center w-[39px] h-[39px] bg-vssid-blue text-white rounded-l-[4px]">
            <IconCCCD className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Mã số BHXH/Số ĐDCN/CCCD"
            className="flex-1 px-3 text-sm font-medium text-gray-700 placeholder-[#948c8c] bg-transparent border-none outline-none"
          />
        </div>

        {/* Password Input Container */}
        <div className="relative w-[338px] h-[39px] flex items-center bg-white rounded-[5px] border border-[#c8c5c5] shadow-sm focus-within:border-vssid-blue focus-within:ring-1 focus-within:ring-vssid-blue transition-all duration-300">
          <div className="flex items-center justify-center w-[39px] h-[39px] bg-vssid-blue text-white rounded-l-[4px]">
            <IconLock className="w-5 h-5" />
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
            className="flex-1 px-3 text-sm font-medium text-gray-700 placeholder-[#948c8c] bg-transparent border-none outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="px-2 text-gray-400 hover:text-vssid-blue transition-colors focus:outline-none"
          >
            {showPassword ? <IconEyeSlash className="w-5 h-5" /> : <IconEye className="w-5 h-5" />}
          </button>
        </div>

        {error && <p className="text-xs font-semibold text-red-600 self-start px-8">{error}</p>}

        {/* Links: Đăng ký & Quên mật khẩu */}
        <div className="flex justify-between w-[338px] px-1 text-xs font-semibold text-vssid-blue mt-1">
          <span className="cursor-pointer hover:underline">Đăng ký tài khoản</span>
          <span className="cursor-pointer hover:underline">Quên mật khẩu ?</span>
        </div>

        {/* Action Row: Login Button + Fingerprint */}
        <div className="flex items-center justify-between w-[338px] mt-6 px-1">
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-[240px] h-[44px] bg-white border border-vssid-blue hover:bg-[#f0f7fc] text-vssid-blue text-[16px] font-bold rounded-[5px] shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 flex items-center justify-center"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-vssid-blue" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Đang đăng nhập...
              </span>
            ) : (
              'Đăng nhập'
            )}
          </button>

          {/* Fingerprint Button */}
          <button
            type="button"
            onClick={onLoginSuccess}
            className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-md hover:shadow-lg hover:border-vssid-blue text-vssid-blue transform active:scale-90 transition-all duration-300"
            title="Đăng nhập bằng vân tay"
          >
            <IconFingerprint className="w-8 h-8 animate-pulse text-vssid-blue" />
          </button>
        </div>
      </form>

      {/* VNeID Red Login Button */}
      <div className="w-full flex flex-col items-center mt-8 mb-4">
        <button
          type="button"
          onClick={handleVNeIDLogin}
          className="relative w-[340px] h-[67px] bg-[#d91811] hover:bg-[#c1150f] text-white rounded-[12px] shadow-lg hover:shadow-xl transform active:scale-95 transition-all duration-300 flex items-center pl-6 pr-[70px] text-left"
        >
          <div className="flex flex-col justify-center">
            <span className="text-[14px] font-bold leading-tight">
              Đăng nhập bằng tài khoản
            </span>
            <span className="text-[14px] font-bold leading-tight uppercase text-yellow-400">
              định danh điện tử
            </span>
          </div>
          <div className="absolute right-3 top-1.5 p-0.5 bg-white rounded-full shadow-md border border-[#eab308]">
            <LogoVNeID className="w-[45px] h-[45px]" />
          </div>
        </button>
      </div>

      {/* Bottom Footer Links */}
      <div className="flex flex-col items-center gap-1.5 mt-auto mb-2 text-xs font-semibold text-vssid-blue">
        <span className="cursor-pointer hover:underline">Mời cài đặt VssID</span>
        <span className="cursor-pointer hover:underline text-[11px] opacity-80">
          Chính sách quyền riêng tư
        </span>
        <div className="text-[9px] text-vssid-textGray mt-1 font-medium">
          Phiên bản 2.0.4 • Bảo hiểm xã hội Việt Nam
        </div>
      </div>
    </div>
  );
};

export default Login;
