import { PILLARS } from "@/lib/pitch-content";
import { RichText } from "./RichText";
import { SlideShell } from "./SlideShell";

export const title = "Three Pillars";
export const variant = "slide moss";

export function ThreePillarsSlide({ className }: { className: string }) {
  return (
    <SlideShell
      className={className}
      title={title}
      decor={<div className="moss-bg"></div>}
    >
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CHAPTER III — THE MOAT
      </div>
      <h2
        className="section reveal reveal-2"
        style={{ marginTop: "2vh", color: "var(--paper)" }}
      >
        Three pillars they <em>can&apos;t copy</em>.
      </h2>
      <div className="pillars">
        {PILLARS.map((pillar) => (
          <div
            className={`pillar reveal ${pillar.reveal}`}
            key={pillar.num}
          >
            <div className="num">{pillar.num}</div>
            <h3>{pillar.heading}</h3>
            {pillar.paragraphs.map((para, i) => (
              <p key={i}>
                {typeof para === "string" ? (
                  para
                ) : (
                  <RichText parts={para} />
                )}
              </p>
            ))}
            <div className="tagline">{pillar.tagline}</div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
