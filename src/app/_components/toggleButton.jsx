"use client"

import React, { useEffect, useState } from 'react';
import './ToggleSwitch.css'; // Import the CSS

const ToggleSwitch = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [darkMode]);
   
    return (
        <input
            type="checkbox"
            className="theme-checkbox"
            // checked={isChecked}
            onChange={() => setDarkMode(!darkMode)}
        />
    );
};

export default ToggleSwitch;
