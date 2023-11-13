// src/components/App.js
import React from 'react';
import NavBar from './NavBar'; // Adjust the path based on your folder structure
import Home from './Home'; // Adjust the path based on your folder structure
import About from './About'; // Adjust the path based on your folder structure

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;