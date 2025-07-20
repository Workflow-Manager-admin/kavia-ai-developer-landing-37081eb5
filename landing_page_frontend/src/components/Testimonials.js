import React from "react";

// PUBLIC_INTERFACE
function Testimonials() {
  const testimonials = [
    {
      quote: "Kavia freed our devs to work on strategic projects while the platform took care of the rest.",
      user: "CTO, Rocket Labs",
      logoAlt: "Rocket Labs logo",
      logo: "🚀"
    },
    {
      quote: "Reduced review cycle time by 90%. The agents are better than most contractors we've hired.",
      user: "VP Engineering, NextGen",
      logoAlt: "NextGen logo",
      logo: "🧬"
    },
    {
      quote: "The agent-powered workflow is magical. Merged PRs every hour, no burnout!",
      user: "Lead Engineer, Codexio",
      logoAlt: "Codexio logo",
      logo: "🦾"
    },
  ];

  // Simulate GitHub stars
  const githubStars = 2137;

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className="testimonials-title">What Our Users Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <figure className="testimonial-card" key={idx}>
            <span className="testimonial-logo" aria-label={t.logoAlt}>{t.logo}</span>
            <blockquote>
              <p>“{t.quote}”</p>
            </blockquote>
            <figcaption>
              <span className="testimonial-user">{t.user}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="partners-logos">
        <span aria-label="Trusted by forward-thinking teams" className="partners-heading">Trusted partners:</span>
        <span className="partner-badge">Rocket Labs</span>
        <span className="partner-badge">NextGen</span>
        <span className="partner-badge">Codexio</span>
        {/* Add screen reader text for images/logos */}
      </div>
      <div className="github-stars" aria-label="GitHub stars">
        ⭐ <span className="star-count">{githubStars}</span> GitHub Stars
      </div>
    </section>
  );
}

export default Testimonials;
