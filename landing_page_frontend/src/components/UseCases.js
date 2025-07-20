import React from "react";

// PUBLIC_INTERFACE
function UseCases() {
  const cases = [
    {
      icon: "🔄",
      title: "Legacy App Modernization",
      desc: "Refactor and update legacy codebases with zero manual effort.",
      link: "#"
    },
    {
      icon: "📦",
      title: "API Creation",
      desc: "Generate robust APIs and microservices fast, with tests.",
      link: "#"
    },
    {
      icon: "🔬",
      title: "Code Research",
      desc: "Mine, analyze, and document complex/largest repos instantly.",
      link: "#"
    },
    {
      icon: "👁️‍🗨️",
      title: "Security Fixes",
      desc: "AI scans, patches, and audits vulnerabilities on autopilot.",
      link: "#"
    },
    {
      icon: "🤖",
      title: "Bot Automation",
      desc: "Configure agents to handle IT ops, onboarding, support, and more.",
      link: "#"
    },
    {
      icon: "🧑‍💻",
      title: "Dev Experience",
      desc: "Streamline repetitive developer tasks: PRs, reviews, tests.",
      link: "#"
    },
  ];

  return (
    <section className="usecases" aria-labelledby="usecases-title">
      <h2 id="usecases-title" className="usecases-title">Use Cases</h2>
      <div className="usecases-grid">
        {cases.map((uc, idx) => (
          <a
            className="usecase-card"
            key={uc.title}
            href={uc.link}
            tabIndex={0}
            aria-label={uc.title}
          >
            <span className="usecase-icon" aria-hidden="true">{uc.icon}</span>
            <div>
              <h3>{uc.title}</h3>
              <p>{uc.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default UseCases;
