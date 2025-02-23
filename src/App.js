import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Services from './components/Services';
import Intro from './components/Intro';

function App() {
  return (
    <div>
      <Navbar />
      <Intro/>
      <Experience />
      <Services />
      <AboutMe id="about" />
      <Contact />
    
     
    </div>
  );
}

export default App;