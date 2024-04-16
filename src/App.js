import React from 'react';
import './App.css';
import '../src/links/about.css'
import '../src/links/skills.css'
import '../src/links/experience.css'

import Wrapper from './wrapper';
import About from './links/about'
import Skills from './links/skills';
import Contact from './links/contact'
import Experience from './links/experience';

function App() {
  return (
    <div className="App">
      
      <Wrapper> 
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Contact></Contact>
      </Wrapper>
      
    </div>
  );
}

export default App;

