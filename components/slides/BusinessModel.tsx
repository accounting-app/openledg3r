import { BIZ_TIERS } from "@/lib/pitch-content";
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
        {BIZ_TIERS.map((tier) => (
          <div
            className={`biz-card${tier.highlight ? " highlight" : ""} reveal ${tier.reveal}`}
            key={tier.label}
          >
            <span className="label">{tier.label}</span>
            <h3>{tier.headline}</h3>
            <div className="price">
              {tier.price}
              <span className="small">{tier.priceNote}</span>
            </div>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            {tier.footnote ? (
              <p
                style={{
                  fontSize: "0.75rem",
                  marginTop: "4px",
                  lineHeight: "1.4",
                  color: "var(--ink-50)",
                }}
              >
                {tier.footnote}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
