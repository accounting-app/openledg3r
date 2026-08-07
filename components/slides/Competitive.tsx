import { COMPARE_HEADERS, COMPARE_ROWS } from "@/lib/pitch-content";
import type { ComparePill } from "@/lib/pitch-types";
import { SlideShell } from "./SlideShell";

export const title = "Competitive";
export const variant = "slide";

function Pill({ pill }: { pill: ComparePill }) {
  return <span className={`pill ${pill.tone}`}>{pill.label}</span>;
}

export function CompetitiveSlide({ className }: { className: string }) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CHAPTER VI — THE FIELD
        <span className="eyebrow-slot">Competition</span>
      </div>
      <h2 className="section reveal reveal-2" style={{ marginTop: "2vh" }}>
        Open <em>or</em> agentic. <em>Never both.</em>
      </h2>
      <p className="lede reveal reveal-3" style={{ marginTop: "1vh" }}>
        The competitive landscape sorts cleanly along two axes: openness and
        agentic depth. The upper-right is empty.
      </p>
      <div className="compare-scroll reveal reveal-4">
        <table className="compare">
          <thead>
            <tr>
              <th></th>
              {COMPARE_HEADERS.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((row) => (
              <tr className={row.highlight ? "us" : undefined} key={row.name}>
                <td>{row.name}</td>
                <td>
                  <Pill pill={row.openSource} />
                </td>
                <td>
                  <Pill pill={row.agentic} />
                </td>
                <td>
                  <Pill pill={row.selfHost} />
                </td>
                <td>
                  <Pill pill={row.audit} />
                </td>
                <td>
                  {row.priceStrong ? (
                    <strong>{row.price}</strong>
                  ) : (
                    row.price
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideShell>
  );
}
