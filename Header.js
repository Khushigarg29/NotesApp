import React from 'react';

// Here we have functional component "Header", passed with a prop handleToggleDarkMode, which is passed from a parent component.
const Header = ({ handleToggleDarkMode }) => {
  // This line decalares a function, toggleDarkMode, when called it invoke the embedded callback function.

  // receives the previous mode and return it's opposite (Toggling it).
  const toggleDarkMode = () => {
    handleToggleDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="header">
      {/* displaying Notes App */}
      <h1>Notes App</h1>
      <div className="dark-mode-toggle">
        <input
          type="checkbox"
          id="dark-mode-toggle"
          onChange={toggleDarkMode}
        />
        {/* displaying Dark Mode text */}
        <label htmlFor="dark-mode-toggle">Dark Mode</label>
      </div>
    </div>
  );
};

export default Header;

