import { SlideShell } from "./SlideShell";

export const title = "Business Model";
export const variant = "slide ruled";

export function BusinessModelSlide({ className }: { className: string }) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CHAPTER VII — BUSINESS MODEL
      </div>
      <h2 className="section reveal reveal-2" style={{ marginTop: "1vh" }}>
        Open core. Paid <em>cloud</em>.
      </h2>
      <p className="lede reveal reveal-3" style={{ marginTop: "0.6vh" }}>
        Two revenue streams, each defensible by something other than feature
        gating.
      </p>
      <div className="bizmodel">
        <div className="biz-card reveal reveal-4">
          <span className="label">Tier 01 · Self-Hosted Edition</span>
          <h3>The whole product, self-hosted, forever.</h3>
          <div className="price">
            Free<span className="small">/ forever</span>
          </div>
          <ul>
            <li>Full ledger, all 7 agents, MCP server, mobile capture</li>
            <li>Connect any LLM you own — bring your own keys</li>
            <li>Single-tenant Docker / k8s · run on your hardware</li>
            <li>AGPLv3 — share improvements back if you SaaS it</li>
          </ul>
          <p
            style={{
              fontSize: "0.75rem",
              marginTop: "4px",
              lineHeight: "1.4",
              color: "var(--ink-50)",
            }}
          >
            A product tier, not governance. Ownership and standards sit with the
            OpenLedger Foundation — council-elected by US accountants.
          </p>
        </div>
        <div className="biz-card highlight reveal reveal-5">
          <span className="label">Tier 02 · OpenLedger Cloud</span>
          <h3>Managed, scaled, with the models included.</h3>
          <div className="price">
            $29<span className="small">/ entity / mo</span>
          </div>
          <ul>
            <li>Hosted MCP host, frontier model included</li>
            <li>Bank feeds, e-filing, payroll partners pre-wired</li>
            <li>SOC 2 Type II inherited from us</li>
            <li>Multi-entity, multi-currency, unlimited users</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  );
}
