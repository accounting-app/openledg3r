import { COVER_META } from "@/lib/pitch-content";
import { SlideShell } from "./SlideShell";

export const title = "Cover";
export const variant = "slide hero";

export function CoverSlide({ className }: { className: string }) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        {/* <span className="dot"></span> SERIES SEED · CONFIDENTIAL */}
      </div>
      <h1 className="display reveal reveal-2">
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
        {COVER_META.map((col) => (
          <div className="col" key={col.label}>
            <strong>{col.label}</strong>
            {col.value}
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
