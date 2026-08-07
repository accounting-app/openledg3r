import { SlideShell } from "./SlideShell";

/** Hidden slide — re-add to the registry in index.ts to restore. */
export const title = "Architecture";
export const variant = "slide";

export function ArchitectureSlide({ className }: { className: string }) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CHAPTER III — ARCHITECTURE
      </div>
      <h2 className="section reveal reveal-2" style={{ marginTop: "2vh" }}>
        A <em>deterministic core</em>. An <em>agentic shell</em>. Never inverted.
      </h2>
      <p
        className="lede reveal reveal-3"
        style={{ marginTop: "1.5vh", maxWidth: "80ch" }}
      >
        The single design rule: LLMs <em>never</em> mutate the ledger directly.
        They draft proposals. The deterministic core validates, balances, and
        posts. Hallucination becomes a UX problem, not an audit one.
      </p>
      <div className="arch reveal reveal-4">
        <div className="layer foundation">
          <span className="name">L0 · IMMUTABLE LEDGER CORE</span>
          <span className="desc">
            Append-only journal · double-entry enforced · cryptographic chain ·
            Postgres + event sourcing
          </span>
          <span className="tag">CORE</span>
        </div>
        <div className="layer">
          <span className="name">L1 · DOMAIN ENGINE</span>
          <span className="desc">
            Chart of accounts · COGS · accruals · multi-currency · tax periods ·
            close cycle · GAAP/IFRS reporting
          </span>
          <span className="tag">CORE</span>
        </div>
        <div className="layer">
          <span className="name">L2 · DATA INGEST</span>
          <span className="desc">
            Bank feeds (Plaid/FDX) · OCR (Dext-class) · email parsers · webhook
            bus · CSV importers · QBO migrator
          </span>
          <span className="tag">CORE</span>
        </div>
        <div className="layer">
          <span className="name">L3 · POLICY & GUARDRAILS</span>
          <span className="desc">
            Approval rules · spending limits · segregation of duties · agent
            permission matrix · SOX-style controls
          </span>
          <span className="tag">CORE</span>
        </div>
        <div className="layer head">
          <span className="name">L4 · MCP SERVER + AGENT FLEET</span>
          <span className="desc">
            First-class MCP host · OAuth 2.1 scopes · 3 native agents · BYO model
            (Claude / GPT / Llama / local)
          </span>
          <span className="tag">SHELL</span>
        </div>
        <div className="layer head">
          <span className="name">L5 · INTERFACES</span>
          <span className="desc">
            Web app · mobile capture · accountant cockpit · CLI · chat (any LLM
            via MCP) · embedded for partners
          </span>
          <span className="tag">SHELL</span>
        </div>
      </div>
    </SlideShell>
  );
}
