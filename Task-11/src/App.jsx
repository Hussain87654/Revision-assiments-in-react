import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import FuturisticFooter from './components/Footer';

// A wrapper to handle conditional Layout elements
const AppLayout = ({ children }) => {
  const location = useLocation();
  
  // We don't want the Navbar or Footer on the Login/Signup page 
  // to keep the user focused on the form.
  const isAuthPage = location.pathname === '/auth';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main>{children}</main>
      {!isAuthPage && <FuturisticFooter />}
    </>
  );
};
const App = () => {
 
 return (
  <><Router>
      <AppLayout>
        <Routes>
          {/* Main Landing Page Route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Auth Portal Route */}
          <Route path="/auth" element={<AuthPage />} />
          
          {/* 404 Redirect - Optional senior move */}
          <Route path="*" element={<div className="h-screen bg-[#020617] flex items-center justify-center text-white">404 | TERMINAL_NOT_FOUND</div>} />
        </Routes>
      </AppLayout>
    </Router>
  </>
 );
};
export default App;