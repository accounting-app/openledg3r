import { FLEET_AGENTS } from "@/lib/pitch-content";
import { SlideShell } from "./SlideShell";

export const title = "Agent Fleet";
export const variant = "slide";

export function AgentFleetSlide({ className }: { className: string }) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CHAPTER IV — THE FLEET
      </div>
      <h2 className="section reveal reveal-2" style={{ marginTop: "1vh" }}>
        Three <em>open agents</em>. One ledger. No subscription tier.
      </h2>
      <p
        className="lede reveal reveal-3"
        style={{
          marginTop: "0.8vh",
          fontSize: "clamp(0.95rem, 1.3vw, 1.2rem)",
        }}
      >
        QuickBooks gates each agent behind a paywall ranging from Essentials to
        Advanced. We ship all three in the open-source core — Bookkeeper runs
        the day-to-day specialties as subagents. Differentiation moves to{" "}
        <em>quality of execution</em>, not access.
      </p>
      <div className="fleet reveal reveal-4">
        {FLEET_AGENTS.map((agent) => (
          <div
            className={`agent${agent.wide ? " agent-wide" : ""}`}
            key={agent.name}
          >
            <div className="agent-icon">{agent.icon}</div>
            <div className="agent-tag">{agent.tag}</div>
            <div className="agent-name">{agent.name}</div>
            <div className="agent-desc">{agent.desc}</div>
            {agent.subagents ? (
              <div className="subagents">
                {agent.subagents.map((sub) => (
                  <div className="subagent" key={sub.name}>
                    <span className="subagent-name">{sub.name}</span>
                    <span className="subagent-desc">{sub.desc}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
