import { BrowserRouter } from 'react-router-dom';
import { AuthWrapper } from './auth/AuthWrapper';



import logo from './logo.svg';
import React  from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// 2. Import Routes
import { Router, Routes, Route } from 'react-router-dom';

// 3. Import Fabric UI
import { setRTL } from '@fluentui/react/lib/Utilities';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>      
    </div>
  );
}

export default App;
