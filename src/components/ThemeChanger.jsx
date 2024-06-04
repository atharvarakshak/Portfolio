"use client";

import React, { useState, useEffect } from "react";
import "./ThemeChanger.css";

const ThemeChanger = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // If no saved theme, check for user's OS preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <label className="ui-switch ">
        <input type="checkbox" onClick={handleThemeSwitch} checked={theme === "dark"} />
        <div className="slider">
          <div className="circle "></div>
        </div>
      </label>
    </div>
  );
};

export default ThemeChanger;
