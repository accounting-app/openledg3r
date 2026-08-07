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
        Help us ship it. We&apos;re raising a $100,000 seed to ship v1.0 by Q1
        2027, reach 10,000 GitHub stars, and onboard 250 accounting firms.
      </p>
      <div className="ask-milestones reveal reveal-4">
        <div className="ask-ms">
          <strong>v1.0</strong>
          <span>Q1 2027</span>
        </div>
        <div className="ask-ms">
          <strong>10k stars</strong>
          <span>community proof</span>
        </div>
        <div className="ask-ms">
          <strong>250 firms</strong>
          <span>on Cloud</span>
        </div>
      </div>
      <div className="cta-row reveal reveal-5">
        <button className="cta primary" onClick={() => goTo(0)}>
          Restart the deck
        </button>
        <button className="cta" onClick={toggleOverview}>
          See all slides
        </button>
        <button className="cta" onClick={() => goTo(6)}>
          Run the demo again
        </button>
      </div>
    </SlideShell>
  );
}
