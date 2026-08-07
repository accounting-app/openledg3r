import { SlideShell } from "./SlideShell";

export const title = "Contents";
export const variant = "slide";

type ContentsSlideProps = {
  className: string;
  goTo: (index: number) => void;
};

export function ContentsSlide({ className, goTo }: ContentsSlideProps) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CONTENTS
      </div>
      <h2 className="section reveal reveal-2" style={{ marginTop: "2vh" }}>
        A <em>book</em> in nine pages.
      </h2>
      <div className="toc reveal reveal-3">
        <div className="toc-row" onClick={() => goTo(2)}>
          <span className="num">I.</span>
          <span className="ttl">
            The <em>bet</em>: ledgers are software, books are operations
          </span>
          <span className="meta">3 min</span>
        </div>
        <div className="toc-row" onClick={() => goTo(3)}>
          <span className="num">II.</span>
          <span className="ttl">
            The <em>incumbent</em> & the cracks in QuickBooks
          </span>
          <span className="meta">4 min</span>
        </div>
        <div className="toc-row" onClick={() => goTo(4)}>
          <span className="num">III.</span>
          <span className="ttl">
            The <em>three pillars</em> that make it un-clone-able
          </span>
          <span className="meta">3 min</span>
        </div>
        <div className="toc-row" onClick={() => goTo(5)}>
          <span className="num">IV.</span>
          <span className="ttl">
            The <em>agent fleet</em> — what they each do
          </span>
          <span className="meta">4 min</span>
        </div>
        <div className="toc-row" onClick={() => goTo(6)}>
          <span className="num">V.</span>
          <span className="ttl">
            A <em>demo</em>: speak a transaction into existence
          </span>
          <span className="meta">live</span>
        </div>
        <div className="toc-row" onClick={() => goTo(7)}>
          <span className="num">VI.</span>
          <span className="ttl">
            Versus the <em>field</em>: where we win
          </span>
          <span className="meta">3 min</span>
        </div>
        <div className="toc-row" onClick={() => goTo(8)}>
          <span className="num">VII.</span>
          <span className="ttl">
            The <em>business</em> — open core, paid cloud, paid trust
          </span>
          <span className="meta">3 min</span>
        </div>
        <div className="toc-row" onClick={() => goTo(9)}>
          <span className="num">VIII.</span>
          <span className="ttl">
            The <em>plan</em> — use of funds &amp; milestones
          </span>
          <span className="meta">2 min</span>
        </div>
        <div className="toc-row" onClick={() => goTo(10)}>
          <span className="num">IX.</span>
          <span className="ttl">
            The <em>ask</em>
          </span>
          <span className="meta">1 min</span>
        </div>
      </div>
    </SlideShell>
  );
}
