import React, { useState } from 'react';
import frameLogin from '../assets/frame_login.png';

// Frame is 402x874 (exported at 2x = 804x1748)
// All coordinates below are from Figma at 1x scale
const W = 402;
const H = 874;

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Full frame background - pixel perfect from Figma */}
      <img src={frameLogin} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} draggable={false} />

      {/* Interactive overlay layer - positioned using % from Figma coords */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {/* Username input: x33,y248 338x39 - overlay transparent input on top of the Figma image */}
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder=""
          style={{
            position: 'absolute',
            left: `${(33 + 39) / W * 100}%`,
            top: `${248 / H * 100}%`,
            width: `${(338 - 39) / W * 100}%`,
            height: `${39 / H * 100}%`,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: '14px',
            fontWeight: 500,
            color: '#333',
            fontFamily: 'Inter, sans-serif',
            padding: '0 8px',
            boxSizing: 'border-box'
          }}
        />

        {/* Password input: x32,y306 338x39 (blue box 39px on left) */}
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder=""
          style={{
            position: 'absolute',
            left: `${(32 + 39) / W * 100}%`,
            top: `${306 / H * 100}%`,
            width: `${(338 - 39) / W * 100}%`,
            height: `${39 / H * 100}%`,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: '14px',
            fontWeight: 500,
            color: '#333',
            fontFamily: 'Inter, sans-serif',
            padding: '0 8px',
            boxSizing: 'border-box'
          }}
        />

        {/* "Đăng nhập" button hotspot: Group 15 at x33,y390 287x44 */}
        <div
          onClick={onLoginSuccess}
          style={{
            position: 'absolute',
            left: `${33 / W * 100}%`,
            top: `${390 / H * 100}%`,
            width: `${287 / W * 100}%`,
            height: `${44 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* Fingerprint/FaceID hotspot: "1 1" at x309,y372 80x80 */}
        <div
          onClick={onLoginSuccess}
          style={{
            position: 'absolute',
            left: `${309 / W * 100}%`,
            top: `${372 / H * 100}%`,
            width: `${80 / W * 100}%`,
            height: `${80 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* VNeID button hotspot: Rectangle 6 at x31,y456 340x67 */}
        <div
          onClick={onLoginSuccess}
          style={{
            position: 'absolute',
            left: `${31 / W * 100}%`,
            top: `${456 / H * 100}%`,
            width: `${340 / W * 100}%`,
            height: `${67 / H * 100}%`,
            cursor: 'pointer'
          }}
        />
      </div>
    </div>
  );
};

export default Login;
