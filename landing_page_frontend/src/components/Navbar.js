import React from "react";

// PUBLIC_INTERFACE
function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar" aria-label="Primary" role="navigation">
      <div className="navbar-logo">
        <a href="#hero" tabIndex={0} aria-label="Kavia Home" className="navbar-brand">
          <span className="logo-icon" aria-hidden="true">🤖</span> Kavia.ai
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#pillars">Features</a></li>
        <li><a href="#timeline">How it Works</a></li>
        <li><a href="#usecases">Use Cases</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#cta" className="navbar-cta">Get Started</a></li>
      </ul>
      <button
        onClick={onToggleTheme}
        className="theme-toggle"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}

export default Navbar;
