import type { RefObject } from "react";
import type { DemoLine } from "@/lib/demo";
import { SlideShell } from "./SlideShell";

export const title = "Live Demo";
export const variant = "slide";

type LiveDemoSlideProps = {
  className: string;
  loadPreset: (index: number) => void;
  runDemo: () => void;
  demoInputRef: RefObject<HTMLTextAreaElement | null>;
  demoPanelRef: RefObject<HTMLDivElement | null>;
  demoStatus: string;
  demoLines: DemoLine[];
};

export function LiveDemoSlide({
  className,
  loadPreset,
  runDemo,
  demoInputRef,
  demoPanelRef,
  demoStatus,
  demoLines,
}: LiveDemoSlideProps) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CHAPTER V — INTERACTIVE DEMO
        <span className="eyebrow-slot">Solution · Proof</span>
      </div>
      <h2 className="section reveal reveal-2" style={{ marginTop: "1vh" }}>
        Speak a transaction. <em>Watch it post.</em>
      </h2>
      <p
        className="lede reveal reveal-3"
        style={{
          marginTop: "0.6vh",
          fontSize: "clamp(0.95rem, 1.3vw, 1.2rem)",
        }}
      >
        Type a transaction in plain English. Our Bookkeeper agent will propose
        journal entries — and the deterministic core will validate them. This is
        the actual flow, locally simulated.
      </p>
      <div className="demo reveal reveal-4">
        <div className="demo-input">
          <label>Describe a transaction</label>
          <textarea
            ref={demoInputRef}
            defaultValue="Paid AWS $487.22 from Chase business checking ending 4421 — this was May production infra for the SaaS product."
            placeholder="e.g. Paid AWS $487.22 from Chase ending 4421 for May infra…"
          />
          <div className="preset-row">
            <button className="preset" onClick={() => loadPreset(0)}>
              AWS bill
            </button>
            <button className="preset" onClick={() => loadPreset(1)}>
              Client invoice paid
            </button>
            <button className="preset" onClick={() => loadPreset(2)}>
              Payroll run
            </button>
            <button className="preset" onClick={() => loadPreset(3)}>
              Cash from sale
            </button>
            <button className="preset" onClick={() => loadPreset(4)}>
              Equipment purchase
            </button>
          </div>
          <button className="go" onClick={runDemo}>
            Post to ledger
          </button>
        </div>
        <div className="demo-panel" ref={demoPanelRef}>
          <div className="tag-row">
            <span>
              <span className="dot"></span>BOOKKEEPER AGENT · IDLE
            </span>
            <span>{demoStatus}</span>
          </div>
          <div>
            {demoLines.length === 0 ? (
              <>
                <div className="demo-line show">
                  <span className="c">
                    // agent inactive — type a transaction and press post
                  </span>
                </div>
                <div className="demo-line show">
                  <span className="c">
                    // the ledger will validate the proposal before it commits
                  </span>
                </div>
              </>
            ) : (
              demoLines.map((line, li) => (
                <div
                  key={li}
                  className={`demo-line${line.visible ? " show" : ""}`}
                  dangerouslySetInnerHTML={{ __html: line.html }}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
