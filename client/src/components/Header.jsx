import React from "react";
import "./Header.css";

function Header({ toggleTheme, darkMode }) {
  return (
    <header>
      <h1>Ilansezhiane A</h1>
      <nav className="nav-links">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" className="resume-btn" download>
          Download Resume
        </a>
        <button onClick={toggleTheme} title="Toggle Theme">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
