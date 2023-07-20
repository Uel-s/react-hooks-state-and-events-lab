import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Your app content goes here */}
      <button onClick={handleDarkModeToggle}>Toggle Dark Mode</button>
    </div>
  );
};

export default App;