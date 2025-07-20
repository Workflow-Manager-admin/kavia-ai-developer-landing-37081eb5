import React from "react";

// PUBLIC_INTERFACE
function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>
          Automate the SDLC.<br />
          <span className="highlight">Ship software 10x faster</span>
        </h1>
        <p className="subheadline">
          Kavia.ai uses intelligent AI agents to automate your entire development lifecycle—from idea to production.
        </p>
        <div className="cta-buttons">
          <a href="#cta" className="btn btn-primary">Start Free Trial</a>
          <a href="#pillars" className="btn btn-secondary">How it Works</a>
        </div>
      </div>
      <div className="hero-bg-graphic" aria-hidden="true" />
    </header>
  );
}

export default HeroSection;
