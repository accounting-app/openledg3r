import { TOC_ITEMS } from "@/lib/pitch-content";
import { RichText } from "./RichText";
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
        {TOC_ITEMS.map((item) => (
          <div
            className="toc-row"
            key={item.num}
            onClick={() => goTo(item.slideIndex)}
          >
            <span className="num">{item.num}</span>
            <span className="ttl">
              <RichText parts={item.label} />
            </span>
            <span className="meta">{item.duration}</span>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
