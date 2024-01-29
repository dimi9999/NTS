// import logo from './logo.svg';
import React  from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AuthProvider } from './context/AuthContext';

// 1. Importing Components
import NavBar from '../src/components/Navbar'
import Footer from '../src/components/Footer';
import Logos from '../src/components/Logos';
import Copyright from '../src/components/Copyright';

// 2. Import Graphics
import EWRLogo from '../src/assets/images/EWR_Logo_CMYK_Black.png';
import NTSLogo from '../src/assets/images/EWRNeedToSell2.png';

// 3. Import Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Step from './pages/Step'
import Logout from './pages/Logout';
import Forgot from './pages/Forgot';
import Contact from './pages/Contact';
import Success from './pages/Success';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

  /* Static Steps will be Dynamically merged to Step.js} */
import StepB from './pages/StepB';
import StepC from './pages/StepC';
import StepD from './pages/StepD';
import StepE from './pages/StepE';
import StepF from './pages/StepF';

/* Desicion States */
import Rejected from './pages/Rejected';
import Accepted from './pages/Accepted';

// 4. Import Routes
import { Router, Routes, Route } from 'react-router-dom';

// 5. Import Fabric UI
import { setRTL } from '@fluentui/react/lib/Utilities';

function App() {
  
  // Header
  return (     
    <div className="App">
      {/* Header (to be changed) */}
      <NavBar />
      {/* Main Components */}
      <AuthProvider>
      <Routes>
      
          <Route path="/" element={<Login />} />
          <Route path="/step" element={<Step />} />
          
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          {/* Application Steps */}     
          <Route path="/stepB" element={<StepB />} />
          <Route path="/stepC" element={<StepC />} />
          <Route path="/stepD" element={<StepD />} />
          <Route path="/stepE" element={<StepE />} />
          <Route path="/stepF" element={<StepF />} />

          {/* Decision Status */}
          <Route path="/rejected" element={<Rejected />} />
          <Route path="/accepted" element={<Accepted />} />

          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
          
      </Routes>
      </AuthProvider>
        {/* Footer */}
        <Footer />
    </div>
  );
}

export default App;

