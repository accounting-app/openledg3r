import { BET_STATS } from "@/lib/pitch-content";
import { SlideShell } from "./SlideShell";

export const title = "The Bet";
export const variant = "slide ruled";

export function TheBetSlide({ className }: { className: string }) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CHAPTER I — THE BET
        <span className="eyebrow-slot">Problem · Market</span>
      </div>
      <div className="two-col">
        <div className="col-left reveal reveal-2">
          <h2 className="section">
            The general ledger is now <em>a runtime</em>, not a record.
          </h2>
          <p className="lede" style={{ marginTop: "2vh" }}>
            For 500 years the ledger was a passive record an accountant wrote
            into. In 2026 the ledger became something else: a system the{" "}
            <em>business itself runs through</em>. Agents propose journal
            entries. Vendors stream invoices into AP queues. Banks push
            transactions in real time.
          </p>
          <p className="body" style={{ marginTop: "1.5vh" }}>
            QuickBooks figured this out and shipped seven AI agents in eighteen
            months. They also raised prices 83% in six years, locked the agents
            behind tiers, and tied every customer&apos;s books to a closed cloud.
            The opportunity isn&apos;t to <em>copy</em> them. It&apos;s to build
            the general ledger of the accountants, by the accountants, for the
            accountants — when nobody owns the rails and the <em>profession</em>{" "}
            owns governance: standards, roadmap, and trademark policy through a
            US accountant community foundation, not a vendor cap table.
          </p>
        </div>
        <div className="col-right reveal reveal-3">
          <div className="quote-box">
            &quot;It doesn&apos;t have to get everything right on its own, as
            long as it knows what things it should ask about.&quot;
            <cite>— Ian Crosby, founder, Bench → Synthetic</cite>
          </div>
          <div className="stat-grid" style={{ marginTop: "1vh" }}>
            {BET_STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="n">
                  {stat.value}
                  {stat.suffix ? <em>{stat.suffix}</em> : null}
                </div>
                <div className="lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
