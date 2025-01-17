import React from 'react';
import {  BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

import './App.css';
import { Home } from './components/Home';
import { BodyComponent } from './components/Body';

const App: React.FC = () => {
  return (
    <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/body" element={<BodyComponent />} />
          </Routes>
          </Router>

  );
}

export default App;
