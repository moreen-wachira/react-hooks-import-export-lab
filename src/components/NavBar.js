import React from 'react';
import NavBar from './NavBar'; // Adjust the path based on your folder structure
import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
      {/* Display the NavBar component */}
      <NavBar />

      {/* Display the Home component */}
      <Home />

      {/* Display the About component */}
      <About />
    </div>
  );
}

export default App;