import React from "react";

// PUBLIC_INTERFACE
function AgentIllustration() {
  // SVG illustration: stylized, abstract agent and code flow
  return (
    <div className="agent-illustration" aria-label="AI agent abstract flow illustration" tabIndex={0}>
      <svg width="320" height="110" viewBox="0 0 320 110" role="img" aria-label="Agent and code flow">
        {/* Central agent hexagon */}
        <polygon
          points="160,30 180,40 180,60 160,70 140,60 140,40"
          fill="#A963FF"
          stroke="#4B33E5"
          strokeWidth="2"
        />
        {/* Circular "code blocks" with lines */}
        <circle cx="100" cy="90" r="14" fill="#EDEDF3" stroke="#4B33E5" strokeWidth="2" />
        <circle cx="220" cy="90" r="14" fill="#EDEDF3" stroke="#4B33E5" strokeWidth="2" />
        <circle cx="60" cy="40" r="12" fill="#EDEDF3" stroke="#A963FF" strokeWidth="2" />
        <circle cx="260" cy="40" r="12" fill="#EDEDF3" stroke="#A963FF" strokeWidth="2" />
        {/* Agent lines */}
        <line x1="150" y1="50" x2="112" y2="90" stroke="#A963FF" strokeWidth="2" />
        <line x1="170" y1="50" x2="208" y2="90" stroke="#A963FF" strokeWidth="2" />
        <line x1="140" y1="50" x2="60" y2="40" stroke="#A963FF" strokeWidth="2" />
        <line x1="180" y1="50" x2="260" y2="40" stroke="#A963FF" strokeWidth="2" />
        {/* Animated "flow dots" */}
        <circle className="flow-dot animate-dot" cx="160" cy="30" r="4" fill="#fff" opacity="0.8" />
      </svg>
      <span className="illustration-caption">AI Agent orchestrates the code flow</span>
    </div>
  );
}

export default AgentIllustration;
