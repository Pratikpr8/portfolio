import React from 'react';
import '../css/app.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Portfolio from './PortFolio';
import Skill from './Skill';
import Contact from './Contact';
import Footer from './Footer';



function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skill/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App; 
