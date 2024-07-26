// portfolio-react\frontend\src\app.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'

import Books from './pages/Books'
import Contact from './pages/Contact'
import Hobbies from './pages/Hobbies'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Project from './pages/Project'

import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Header />
        <div className='content-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<Books />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/hobbies' element={<Hobbies />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/project' element={<Project />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App