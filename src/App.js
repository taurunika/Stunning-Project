import React from 'react';

import './App.css';

import Topbar from './assets/topbar'
import LandingSection from './assets/LandingSection'
import EffectsSection from './assets/EffectsSection'

function App() {
  return (
    <div className="App">
      <Topbar />
      <LandingSection />
      <EffectsSection />
    </div>
  );
}

export default App;