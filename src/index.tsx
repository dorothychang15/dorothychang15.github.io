import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Nav from './Nav';
import ImageCarouselModal from './ImageCarouselModal';
import Snow from './Snow';
import Skincare from './skincare';
import Makeup from './makeup';

export function App() {
  return ( 
    <div>
      <Nav activeTab="home" />
      <div className="main-container">
        <div className="main-inner-container">
          <h1>hello!</h1>
          <ImageCarouselModal />
        </div>
      </div>
      <Snow numDrops={30} />
    </div>
  );
}

ReactDOM.render((
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/skincare" element={<Skincare />} />
      <Route path="/makeup" element={<Makeup />} />
    </Routes>
  </HashRouter>
), document.querySelectorAll('div')[0]);