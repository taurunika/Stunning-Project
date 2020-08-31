import React from 'react';

import './App.css';

import Topbar from './assets/topbar'
import LandingSection from './assets/LandingSection'
import SubSection from './assets/SubSection'

function App() {
  return (
    <div className="App">
      <Topbar />
      <LandingSection />
      <SubSection />
    </div>
  );
}

export default App;