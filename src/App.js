import React from 'react';
import '../src/assets/styles/reset.css';
import Share from './pages/share';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Folder from './pages/folder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/share" element={<Share />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
