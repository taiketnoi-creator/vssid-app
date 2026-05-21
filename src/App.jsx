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
  const [transitionType, setTransitionType] = useState('instant'); // 'slide' | 'fade' | 'instant'

  const screenOrder = ['login', 'dashboard', 'insurance-list', 'salary-detail'];

  const navigateTo = (targetScreen, options = null) => {
    if (targetScreen === screen || transitioning) return;

    let data = null;
    let transition = 'instant';
    let direction = 'left';

    // Parse options
    if (options) {
      if (options.rowData) {
        data = options;
      } else {
        data = options.data || null;
      }
      transition = options.transition || 'instant';
      direction = options.direction || 'left';
    }

    // Default transition heuristics if not explicitly specified
    if (!options || !options.transition) {
      const isStackScreen = (s) => ['dashboard', 'insurance-list', 'salary-detail'].includes(s);
      if (isStackScreen(screen) && isStackScreen(targetScreen)) {
        transition = 'slide';
        const curIdx = screenOrder.indexOf(screen);
        const targetIdx = screenOrder.indexOf(targetScreen);
        direction = targetIdx > curIdx ? 'left' : 'right';
      } else if (screen === 'login' && targetScreen === 'dashboard') {
        transition = 'fade';
      } else if (targetScreen === 'login') {
        transition = 'fade';
      } else {
        transition = 'instant';
      }
    }

    setSlideDirection(direction);
    setTransitionType(transition);
    setPrevScreen(screen);
    setNavigationData(data);

    if (transition === 'instant') {
      setScreen(targetScreen);
      setPrevScreen(null);
    } else {
      setTransitioning(true);
      setScreen(targetScreen);

      // End transition state after animation finishes (300ms matching CSS duration)
      setTimeout(() => {
        setTransitioning(false);
        setPrevScreen(null);
      }, 300);
    }
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
                className={
                  transitionType === 'slide'
                    ? (slideDirection === 'left' ? 'screen-push-leave' : 'screen-pop-leave')
                    : (transitionType === 'fade' ? 'screen-fade-leave' : '')
                }
                style={{
                  position: 'absolute',
                  inset: 0
                }}
              >
                {getScreen(prevScreen)}
                {/* Dimming overlay when leaving forward (it goes underneath) */}
                {transitionType === 'slide' && slideDirection === 'left' && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'black',
                    animation: 'dimmerFadeIn 0.3s cubic-bezier(0.1, 0.76, 0.55, 0.94) forwards',
                    pointerEvents: 'none',
                    zIndex: 10
                  }} />
                )}
              </div>
            )}

            {/* Current screen sliding in */}
            <div 
              className={
                transitioning
                  ? (transitionType === 'slide'
                      ? (slideDirection === 'left' ? 'screen-push-enter' : 'screen-pop-enter')
                      : (transitionType === 'fade' ? 'screen-fade-enter' : ''))
                  : ''
              }
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: transitioning ? (slideDirection === 'left' || transitionType === 'fade' ? 2 : 1) : 2
              }}
            >
              {getScreen(screen)}
              {/* Dimming overlay when entering backward (it enters underneath) */}
              {transitioning && transitionType === 'slide' && slideDirection === 'right' && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'black',
                  animation: 'dimmerFadeOut 0.3s cubic-bezier(0.1, 0.76, 0.55, 0.94) forwards',
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
              setTimeout(() => {
                if (target === 'login') {
                  navigateTo(target, { transition: 'fade' });
                } else {
                  navigateTo(target, { transition: 'instant' });
                }
              }, 300);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
