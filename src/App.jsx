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

  const navigateTo = (targetScreen, data = null) => {
    setNavigationData(data);
    setScreen(targetScreen);
  };


  const handleLoginSuccess = () => {
    navigateTo('dashboard');
  };

  const renderActiveScreen = () => {
    switch (screen) {
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
          
          {/* Main active screen */}
          <div className="w-full h-full relative overflow-hidden bg-white">
            {renderActiveScreen()}
          </div>

          {/* Overlay Sidebar Drawer */}
          <Sidebar 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
            onNavigate={navigateTo}
            currentScreen={screen}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
