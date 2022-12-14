import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Api from './components/Api';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="about" element={<About />} />
    <Route path="api" element={<Api />} />
  </Routes>
</Router>
);


