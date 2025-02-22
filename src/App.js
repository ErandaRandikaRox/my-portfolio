import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe id="about" />
      <Contact />
      <Experience />
      <Services />
    </div>
  );
}

export default App;