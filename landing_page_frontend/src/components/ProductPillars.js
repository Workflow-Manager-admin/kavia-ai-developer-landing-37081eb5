import React from "react";

// PUBLIC_INTERFACE
function ProductPillars() {
  const pillars = [
    {
      icon: "⚡",
      title: "End-to-end Automation",
      desc: "From idea to production, agents automate coding, reviews, and deploys.",
      link: "#automation"
    },
    {
      icon: "🛡️",
      title: "Build Securely",
      desc: "Automatic compliance, testing, dependency updates, and vulnerability checks.",
      link: "#security"
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      desc: "Integrates with GitHub, Slack, and your stack for seamless reviews.",
      link: "#collaboration"
    },
  ];

  return (
    <section className="pillars" aria-labelledby="pillars-title">
      <h2 id="pillars-title" className="pillars-title">Why Kavia?</h2>
      <div className="pillars-grid">
        {pillars.map((pillar, idx) => (
          <div className="pillar-card" key={pillar.title}>
            <span className="pillar-icon" aria-hidden="true">{pillar.icon}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.desc}</p>
            <a href={pillar.link} className="pillar-link" aria-label={`Learn more about ${pillar.title}`}>Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductPillars;
