import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import './styles.css'; // Import the new CSS file

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Contact />
      <AboutMe />
    </div>
  );
}

export default App;