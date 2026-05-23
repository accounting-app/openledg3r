import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "openledger_pitch.html"), "utf8");

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) throw new Error("no <style>");
fs.writeFileSync(path.join(root, "app/globals.css"), styleMatch[1].trim());

const stageMatch = html.match(
  /<div class="stage" id="stage">([\s\S]*?)<\/div>\s*\n\s*<!-- ============ OVERVIEW/
);
if (!stageMatch) throw new Error("no stage");

const sections = [...stageMatch[1].matchAll(/<section class="([^"]+)" data-title="([^"]+)">([\s\S]*?)<\/section>/g)];

const slideVariants = sections.map((m) =>
  m[1].replace(/\s+active\b/, "").trim()
);

function toJsx(inner, slideIndex) {
  let s = inner.trim();
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  s = s.replace(/\bclass=/g, "className=");
  s = s.replace(/<br>/g, "<br />");
  s = s.replace(/style="([^"]*)"/g, (_, css) => {
    const style = css
      .split(";")
      .filter(Boolean)
      .map((rule) => {
        const [prop, val] = rule.split(":").map((x) => x.trim());
        const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        return `${camel}: '${val}'`;
      })
      .join(", ");
    return `style={{ ${style} }}`;
  });
  s = s.replace(/onclick="goTo\((\d+)\)"/g, 'onClick={() => goTo($1)}');
  s = s.replace(/onclick="loadPreset\((\d+)\)"/g, 'onClick={() => loadPreset($1)}');
  s = s.replace(/onclick="runDemo\(\)"/g, "onClick={runDemo}");
  s = s.replace(/onclick="toggleOverview\(\)"/g, "onClick={toggleOverview}");
  s = s.replace(/onclick="goTo\(0\)"/g, "onClick={() => goTo(0)}");
  s = s.replace(/onclick="goTo\(8\)"/g, "onClick={() => goTo(8)}");

  if (slideIndex === 8) {
    s = s.replace(
      /<textarea id="demoInput"([^>]*)>/,
      "<textarea ref={demoInputRef}$1>"
    );
    s = s.replace(/id="demoPanel"/g, 'ref={demoPanelRef}');
    s = s.replace(/id="demoOutput"/g, "");
    s = s.replace(/id="demoStatus"/g, "");
    s = s.replace(
      /<span id="demoStatus">awaiting input<\/span>/,
      "<span>{demoStatus}</span>"
    );
    s = s.replace(
      /<div className="demo-panel" ref={demoPanelRef}>\s*<div className="tag-row">[\s\S]*?<div className="" >\s*<div className="demo-line show">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
      `<div className="demo-panel" ref={demoPanelRef}>
            <div className="tag-row">
              <span><span className="dot"></span>BOOKKEEPER AGENT · IDLE</span>
              <span>{demoStatus}</span>
            </div>
            <div>
              {demoLines.length === 0 ? (
                <>
                  <div className="demo-line show"><span className="c">// agent inactive — type a transaction and press post</span></div>
                  <div className="demo-line show"><span className="c">// the ledger will validate the proposal before it commits</span></div>
                </>
              ) : (
                demoLines.map((line, li) => (
                  <div key={li} className={\`demo-line \${line.visible ? 'show' : ''}\`} dangerouslySetInnerHTML={{ __html: line.html }} />
                ))
              )}
            </div>
          </div>`
    );
  }

  return s;
}

const slideBlocks = sections
  .map((m, i) => {
    const variant = slideVariants[i];
    const title = m[2];
    const inner = toJsx(m[3], i);
    return `      <section
        className={slideClass(${i}, "${variant}")}
        data-title="${title}"
      >
${inner.split("\n").map((l) => "        " + l).join("\n")}
      </section>`;
  })
  .join("\n\n");

const slidesTsx = `/* Auto-generated from openledger_pitch.html — run: node scripts/migrate.mjs */

import type { DemoLine } from "@/lib/demo";

type SlidesProps = {
  slideClass: (index: number, variant: string) => string;
  goTo: (index: number) => void;
  loadPreset: (index: number) => void;
  runDemo: () => void;
  toggleOverview: () => void;
  demoInputRef: React.RefObject<HTMLTextAreaElement | null>;
  demoPanelRef: React.RefObject<HTMLDivElement | null>;
  demoStatus: string;
  demoLines: DemoLine[];
};

export function Slides({
  slideClass,
  goTo,
  loadPreset,
  runDemo,
  toggleOverview,
  demoInputRef,
  demoPanelRef,
  demoStatus,
  demoLines,
}: SlidesProps) {
  return (
    <>
${slideBlocks}
    </>
  );
}

export const SLIDE_TITLES = ${JSON.stringify(sections.map((m) => m[2]))} as const;

export const SLIDE_VARIANTS = ${JSON.stringify(slideVariants)} as const;
`;

fs.writeFileSync(path.join(root, "components/Slides.tsx"), slidesTsx);
console.log(`Wrote ${sections.length} slides`);
