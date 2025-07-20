import React from "react";

// PUBLIC_INTERFACE
function FinalCTA() {
  return (
    <section className="final-cta" id="final-cta" role="region" aria-label="Get Started Now">
      <div className="final-cta-content">
        <h2>
          Try Kavia today.<br/>
          <span className="contrast-text">Let agents do the heavy lifting.</span>
        </h2>
        <a href="#hero" className="btn btn-cta" tabIndex={0}>
          Get Started Now
        </a>
        <div className="cta-note">
          <span>No credit card required • Developer accounts are free</span>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
