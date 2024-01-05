import React from 'react';
import '../src/assets/styles/reset.css';

import Index from './pages/indexPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Folder from './pages/folder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
