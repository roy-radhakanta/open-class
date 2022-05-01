import React from 'react';
import './App.css';

import Menu from './components/Common/Menu/Menu';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights/Highlights';
import Footer from './components/Common/Footer/Footer';
import About from './components/About/About';
import PrincipleDesk from './components/PrincipleDesk/PrincipleDesk';
import BeyoundAcademics from './components/BeyoundAcademics/BeyoundAcademics';
import Gallery from './components/Gallery/Gallery';
import BlogNews from './components/BlogNews/BlogNews';

function App() {
  return (
    <>
      <Menu/>
      <Hero/>
      <Highlights/>      
      <About/>
      <PrincipleDesk/>
      <BeyoundAcademics/>
      <Gallery/>
      <BlogNews/>
      <Footer/>
    </>
  );
}

export default App;
