import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import HomePage from './Pages/home';
import AboutPage from './Pages/about';
import SkillPage from './Pages/skill';
import ContactPage from './Pages/contact';
import DetailWork from './Pages/detailWork';
import Experience from './Pages/experience';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mywork" element={<Experience />} />
          <Route path="/myskill" element={<SkillPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/detailWork" element={<DetailWork />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
