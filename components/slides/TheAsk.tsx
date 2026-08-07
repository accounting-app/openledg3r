import { ASK_MILESTONES, DEMO_SLIDE_INDEX } from "@/lib/pitch-content";
import { SlideShell } from "./SlideShell";

export const title = "The Ask";
export const variant = "slide closing";

type TheAskSlideProps = {
  className: string;
  goTo: (index: number) => void;
  toggleOverview: () => void;
};

export function TheAskSlide({
  className,
  goTo,
  toggleOverview,
}: TheAskSlideProps) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CHAPTER IX — THE ASK
        <span className="eyebrow-slot">Ask · Thank you</span>
      </div>
      <h1 className="display reveal reveal-2" style={{ marginTop: "3vh" }}>
        The general ledger
        <br />
        <em>of the accountants, by the accountants, for the accountants.</em>
      </h1>
      <p
        className="lede reveal reveal-3"
        style={{
          marginTop: "2.5vh",
          color: "rgba(253,244,247,0.85)",
          maxWidth: "52ch",
        }}
      >
        Help us ship it. We&apos;re raising a $100,000 seed to ship v1.0 by Q4
        2026, reach 10,000 GitHub stars, and onboard 250 accounting firms.
        Thank you.
      </p>
      <div className="ask-milestones reveal reveal-4">
        {ASK_MILESTONES.map((ms) => (
          <div className="ask-ms" key={ms.strong}>
            <strong>{ms.strong}</strong>
            <span>{ms.label}</span>
          </div>
        ))}
      </div>
      <div className="cta-row reveal reveal-5">
        <button className="cta primary" onClick={() => goTo(0)}>
          Restart the deck
        </button>
        <button className="cta" onClick={toggleOverview}>
          See all slides
        </button>
        <button className="cta" onClick={() => goTo(DEMO_SLIDE_INDEX)}>
          Run the demo again
        </button>
      </div>
    </SlideShell>
  );
}
