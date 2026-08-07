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
        <div className="agent agent-wide">
          <div className="agent-icon">B</div>
          <div className="agent-tag">books · orchestrator</div>
          <div className="agent-name">Bookkeeper</div>
          <div className="agent-desc">
            Categorizes transactions, proposes journal entries, flags missing
            context, learns from corrections — and delegates AP, AR, recon, and
            close to specialist subagents.
          </div>
          <div className="subagents">
            <div className="subagent">
              <span className="subagent-name">Reconciler</span>
              <span className="subagent-desc">
                Three-way match statements ↔ bank ↔ ledger
              </span>
            </div>
            <div className="subagent">
              <span className="subagent-name">Payables</span>
              <span className="subagent-desc">
                Invoice OCR, bill drafts, approval routing
              </span>
            </div>
            <div className="subagent">
              <span className="subagent-name">Collector</span>
              <span className="subagent-desc">
                Invoicing, dunning, inbound payment match
              </span>
            </div>
            <div className="subagent">
              <span className="subagent-name">Closer</span>
              <span className="subagent-desc">
                Accruals, close checklist, management pack
              </span>
            </div>
          </div>
        </div>
        <div className="agent">
          <div className="agent-icon">T</div>
          <div className="agent-tag">tax</div>
          <div className="agent-name">Tax Counsel</div>
          <div className="agent-desc">
            Tracks nexus, computes sales/VAT, drafts filings, surfaces deduction
            opportunities mid-quarter.
          </div>
        </div>
        <div className="agent">
          <div className="agent-icon">A</div>
          <div className="agent-tag">audit</div>
          <div className="agent-name">Auditor</div>
          <div className="agent-desc">
            Continuous anomaly detection — Benford&apos;s law, unusual vendor
            patterns, suspicious round numbers.
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
