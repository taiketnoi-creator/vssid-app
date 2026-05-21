import { useState } from 'react';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import InsuranceList from './screens/InsuranceList';
import SalaryDetail from './screens/SalaryDetail';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [screen, setScreen] = useState('login');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigationData, setNavigationData] = useState(null);

  // Animation states for premium native iOS transitions
  const [transitioning, setTransitioning] = useState(false);
  const [prevScreen, setPrevScreen] = useState(null);
  const [slideDirection, setSlideDirection] = useState('left'); // 'left' = forward, 'right' = back

  const screenOrder = ['login', 'dashboard', 'insurance-list', 'salary-detail'];

  const navigateTo = (targetScreen, data = null) => {
    if (targetScreen === screen || transitioning) return;

    const curIdx = screenOrder.indexOf(screen);
    const targetIdx = screenOrder.indexOf(targetScreen);
    const direction = targetIdx > curIdx ? 'left' : 'right';

    setSlideDirection(direction);
    setPrevScreen(screen);
    setNavigationData(data);
    setTransitioning(true);
    setScreen(targetScreen);

    // End transition state after animation finishes (350ms matching CSS duration)
    setTimeout(() => {
      setTransitioning(false);
      setPrevScreen(null);
    }, 350);
  };

  const handleLoginSuccess = () => {
    navigateTo('dashboard');
  };

  const getScreen = (screenName) => {
    switch (screenName) {
      case 'login':
        return <Login onLoginSuccess={handleLoginSuccess} />;
      case 'dashboard':
        return (
          <Dashboard 
            onOpenSidebar={() => setSidebarOpen(true)} 
            onNavigate={navigateTo} 
          />
        );
      case 'insurance-list':
        return (
          <InsuranceList 
            onNavigate={navigateTo} 
            onOpenSidebar={() => setSidebarOpen(true)} 
          />
        );
      case 'salary-detail':
        return (
          <SalaryDetail 
            onNavigate={navigateTo} 
            rowData={navigationData?.rowData} 
          />
        );
      default:
        return <Login onLoginSuccess={handleLoginSuccess} />;
    }
  };

  return (
    <div className="app-viewport">
      {/* Decorative neon backdrop glowing elements for premium aesthetics */}
      <div className="glow-circle glow-blue" />
      <div className="glow-circle glow-cyan" />

      {/* Smartphone frame chassis wrapper */}
      <div className="phone-chassis">
        {/* Mock notch / dynamic island */}
        <div className="phone-notch" />
        
        {/* Core app viewport container */}
        <div className="phone-screen relative">
          
          <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#fff' }}>
            {/* Previous screen sliding out */}
            {transitioning && prevScreen && (
              <div 
                className={slideDirection === 'left' ? 'screen-push-leave' : 'screen-pop-leave'}
                style={{
                  position: 'absolute',
                  inset: 0
                }}
              >
                {getScreen(prevScreen)}
                {/* Dimming overlay when leaving forward (it goes underneath) */}
                {slideDirection === 'left' && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'black',
                    animation: 'dimmerFadeIn 0.35s cubic-bezier(0.1, 0.76, 0.55, 0.94) forwards',
                    pointerEvents: 'none',
                    zIndex: 10
                  }} />
                )}
              </div>
            )}

            {/* Current screen sliding in */}
            <div 
              className={transitioning ? (slideDirection === 'left' ? 'screen-push-enter' : 'screen-pop-enter') : ''}
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: transitioning ? (slideDirection === 'left' ? 2 : 1) : 2
              }}
            >
              {getScreen(screen)}
              {/* Dimming overlay when entering backward (it enters underneath) */}
              {transitioning && slideDirection === 'right' && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'black',
                  animation: 'dimmerFadeOut 0.35s cubic-bezier(0.1, 0.76, 0.55, 0.94) forwards',
                  pointerEvents: 'none',
                  zIndex: 10
                }} />
              )}
            </div>
          </div>

          {/* Overlay Sidebar Drawer */}
          <Sidebar 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
            onNavigate={(target) => {
              setSidebarOpen(false);
              // Wait for sidebar slide-close transition (300ms) before navigating to avoid transition clash
              setTimeout(() => navigateTo(target), 300);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
