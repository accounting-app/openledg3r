import { FUND_ALLOCATIONS, TIMELINE } from "@/lib/pitch-content";
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
        {FUND_ALLOCATIONS.map((fund) => (
          <div className="fund" key={fund.name}>
            <div className="pct">{fund.pct}</div>
            <div className="name">{fund.name}</div>
            <div className="desc">{fund.desc}</div>
          </div>
        ))}
      </div>
      <div className="timeline reveal reveal-5">
        {TIMELINE.map((item) => (
          <div className="tl-item" key={item.quarter}>
            <div className="dot"></div>
            <div className="qtr">{item.quarter}</div>
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
