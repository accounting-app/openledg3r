import { SlideShell } from "./SlideShell";

export const title = "Cover";
export const variant = "slide hero";

export function CoverSlide({ className }: { className: string }) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> SERIES SEED · CONFIDENTIAL
      </div>
      <h1 className="display reveal reveal-2" style={{ marginTop: "3vh" }}>
        The books
        <br />
        should <em>keep themselves.</em>
      </h1>
      <div className="sub reveal reveal-3">
        The general ledger{" "}
        <em>of the accountants, by the accountants, for the accountants.</em>{" "}
        Open-source, agent-native, built for the world after QuickBooks.
        Auditable. Self-hosted. MCP-native. Free. Governed by a US accountant
        community foundation—not a vendor.
      </div>
      <div className="meta reveal reveal-5">
        <div className="col">
          <strong>WHAT</strong>OpenLedger — Agentic GL
        </div>
        <div className="col">
          <strong>WHO</strong>Founding team · US accountant foundation
        </div>
        <div className="col">
          <strong>WHERE</strong>github.com/openledger
        </div>
        <div className="col">
          <strong>WHY NOW</strong>QBO at $275/mo · MCP at scale
        </div>
      </div>
    </SlideShell>
  );
}
