import { SlideShell } from "./SlideShell";

export const title = "The Plan";
export const variant = "slide ruled";

export function ThePlanSlide({ className }: { className: string }) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CHAPTER VIII — THE PLAN
      </div>
      <h2 className="section reveal reveal-2" style={{ marginTop: "1vh" }}>
        $100k. Eighteen months. <em>Four bets.</em>
      </h2>
      <p
        className="lede reveal reveal-3"
        style={{ marginTop: "0.6vh", maxWidth: "62ch" }}
      >
        Seed capital funds execution — beta, agents, cloud, and firm adoption.
        Governance stays with the US accountant community foundation.
      </p>
      <div className="funds reveal reveal-4">
        <div className="fund">
          <div className="pct">35%</div>
          <div className="name">Public beta</div>
          <div className="desc">
            Core ledger, Bookkeeper + first subagents, QBO migration, Plaid feeds
            — ship v0.5.
          </div>
        </div>
        <div className="fund">
          <div className="pct">25%</div>
          <div className="name">Agent fleet</div>
          <div className="desc">
            Complete the three-agent system through GA: Bookkeeper subagents,
            Tax Counsel, Auditor.
          </div>
        </div>
        <div className="fund">
          <div className="pct">25%</div>
          <div className="name">Cloud &amp; trust</div>
          <div className="desc">
            Hosted MCP, SOC 2 Type I, Cloud launch, accountant cockpit beta.
          </div>
        </div>
        <div className="fund">
          <div className="pct">15%</div>
          <div className="name">Firm adoption</div>
          <div className="desc">
            10,000 GitHub stars and 250 accounting firms onto OpenLedger Cloud.
          </div>
        </div>
      </div>
      <div className="timeline reveal reveal-5">
        <div className="tl-item">
          <div className="dot"></div>
          <div className="qtr">Q4 2026</div>
          <div className="title">v0.5 · public beta</div>
          <div className="desc">
            Core ledger, Bookkeeper with Reconciler subagent, QBO migration
            tool, Plaid feeds.
          </div>
        </div>
        <div className="tl-item">
          <div className="dot"></div>
          <div className="qtr">Q1 2027</div>
          <div className="title">v1.0 · GA</div>
          <div className="desc">
            Full agent fleet, SOC 2 Type I, Cloud launch, accountant cockpit
            beta.
          </div>
        </div>
        <div className="tl-item">
          <div className="dot"></div>
          <div className="qtr">Q3 2027</div>
          <div className="title">v1.5 · vertical packs</div>
          <div className="desc">
            Non-profit fund accounting, construction job costing, multi-entity
            consolidation.
          </div>
        </div>
        <div className="tl-item">
          <div className="dot"></div>
          <div className="qtr">Q1 2028</div>
          <div className="title">v2.0 · Trust tier</div>
          <div className="desc">
            SOC 2 Type II + SOC 1, GAAP/IFRS attestation, 1,000 firms on Cloud.
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
