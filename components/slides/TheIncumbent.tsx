import { INCUMBENT_CALLOUT, INCUMBENT_WHYS } from "@/lib/pitch-content";
import { RichText } from "./RichText";
import { SlideShell } from "./SlideShell";

export const title = "The Incumbent";
export const variant = "slide dark";

export function TheIncumbentSlide({ className }: { className: string }) {
  return (
    <SlideShell
      className={className}
      title={title}
      decor={<div className="moss-bg"></div>}
    >
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CHAPTER II — THE INCUMBENT
      </div>
      <h2
        className="section reveal reveal-2"
        style={{ marginTop: "2vh", color: "var(--paper)" }}
      >
        QuickBooks has the data.
        <br />
        We have <em>everything else.</em>
      </h2>
      <p className="lede reveal reveal-3" style={{ marginTop: "2vh" }}>
        Five fault lines we can drive a wedge into — each one a feature
        QuickBooks structurally cannot ship.
      </p>
      <div className="why-now">
        <div className="why-list reveal reveal-4">
          {INCUMBENT_WHYS.map((item) => (
            <div className="why-item" key={item.badge}>
              <div className="badge">{item.badge}</div>
              <div>
                <h4>
                  <RichText parts={item.heading} />
                </h4>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="callout-stat reveal reveal-5">
          <div className="lbl">{INCUMBENT_CALLOUT.label}</div>
          <div className="big">
            {INCUMBENT_CALLOUT.value}
            <em>{INCUMBENT_CALLOUT.suffix}</em>
          </div>
          <div className="lbl" style={{ color: "rgba(253,244,247,0.6)" }}>
            {INCUMBENT_CALLOUT.detail}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
