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
          <div className="why-item">
            <div className="badge">i</div>
            <div>
              <h4>
                Their agents are <em>add-ons</em>. Ours is the ledger.
              </h4>
              <p>
                Intuit grafted agents onto a 25-year-old codebase. Agent
                intelligence sits beside the books, not inside them. Ours posts
                directly to the ledger&apos;s transaction model.
              </p>
            </div>
          </div>
          <div className="why-item">
            <div className="badge">ii</div>
            <div>
              <h4>Closed cloud + rising prices.</h4>
              <p>
                QBO Advanced is $275/mo and rising 12–17% per year. There is no
                self-host. There is no export-without-pain. Customer data is
                hostage to the rails.
              </p>
            </div>
          </div>
          <div className="why-item">
            <div className="badge">iii</div>
            <div>
              <h4>No real MCP surface.</h4>
              <p>
                Customers&apos; own agents — Claude, ChatGPT, custom — cannot
                read QBO data the way they want. Intuit&apos;s interest is to
                keep them out.
              </p>
            </div>
          </div>
          <div className="why-item">
            <div className="badge">iv</div>
            <div>
              <h4>Accountants are tired of being the platform&apos;s hostage.</h4>
              <p>
                The QBO Accountant sunset at end of 2026 and the new Intuit
                Accountant Suite is forcing every firm to re-platform. The
                switching cost is already being paid.
              </p>
            </div>
          </div>
          <div className="why-item">
            <div className="badge">v</div>
            <div>
              <h4>Open beats closed when the substrate is models.</h4>
              <p>
                An open codebase + open data format means every new model —
                local, frontier, fine-tuned — improves the product. Closed
                competitors are locked to one provider.
              </p>
            </div>
          </div>
        </div>
        <div className="callout-stat reveal reveal-5">
          <div className="lbl">QBO Advanced — 6-year price drift</div>
          <div className="big">
            +83<em>%</em>
          </div>
          <div className="lbl" style={{ color: "rgba(253,244,247,0.6)" }}>
            $150 → $275 since 2020. Customers are paying for AI they didn&apos;t
            ask to fund.
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
