import React from "react";

// PUBLIC_INTERFACE
function Timeline() {
  const steps = [
    {
      step: "1",
      title: "Connect your repo",
      desc: "Plug in your GitHub repo and let Kavia analyze your codebase."
    },
    {
      step: "2",
      title: "Describe the task",
      desc: "Submit an issue, ticket or prompt via API/UI."
    },
    {
      step: "3",
      title: "AI Agents Go to Work",
      desc: "Agents write, review and ship code automatically."
    },
    {
      step: "4",
      title: "Audit & Approve",
      desc: "Review results, approve, and merge instantly."
    },
    {
      step: "5",
      title: "Deploy Continuously",
      desc: "CI/CD and deploys handled — so you focus on real work."
    },
  ];

  return (
    <section className="timeline" aria-labelledby="timeline-title">
      <h2 id="timeline-title" className="timeline-title">How Kavia Works</h2>
      <ol className="timeline-list">
        {steps.map((item, idx) => (
          <li key={item.step} className="timeline-step">
            <div className="timeline-dot" aria-hidden="true">{item.step}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            {idx !== steps.length - 1 && (
              <div className="timeline-line" aria-hidden="true"></div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Timeline;
