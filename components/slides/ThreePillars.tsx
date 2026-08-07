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
        <div className="pillar reveal reveal-3">
          <div className="num">i.</div>
          <h3>Open by license, open by data.</h3>
          <p>
            AGPLv3 + commercial dual license. Every journal entry exportable as
            open JSON-LD. Self-host on your laptop or your cluster. Lock-in is
            impossible by construction.
          </p>
          <p>
            Accountants and regulators can audit the codebase. No incumbent can
            match that promise without dismantling their business model.
          </p>
          <p>
            Of the accountants, by the accountants, for the accountants: the
            OpenLedger Foundation is accountable to a council of US accounting
            practitioners and firm leaders — they set COA packs, audit policies,
            and release priorities. An operating company ships Cloud and Trust
            under charter; execution without capture.
          </p>
          <div className="tagline">
            Differentiator vs. QBO, Digits, Pilot, Synthetic
          </div>
        </div>
        <div className="pillar reveal reveal-4">
          <div className="num">ii.</div>
          <h3>Provable books, not probable ones.</h3>
          <p>
            Every agent action is a <em>proposal</em> with a citation trail. The
            deterministic engine balances debits and credits. Cryptographic hash
            chain over every entry — tamper-evident by default.
          </p>
          <p>
            An auditor&apos;s first question — &quot;show me the audit
            trail&quot; — gets answered with a git-log-like view that no closed
            competitor can match.
          </p>
          <div className="tagline">Differentiator vs. closed AI bookkeepers</div>
        </div>
        <div className="pillar reveal reveal-5">
          <div className="num">iii.</div>
          <h3>MCP-native, model-agnostic.</h3>
          <p>
            The whole product is an MCP server first. Bring Claude, ChatGPT,
            Gemini, or a local Llama. Customers&apos; own agents can read,
            propose, reconcile — under fine-grained OAuth scopes.
          </p>
          <p>
            The 6,400+ MCP server ecosystem becomes our distribution. Every new
            model release improves OpenLedger automatically.
          </p>
          <div className="tagline">
            Differentiator vs. ERPNext, Odoo, Akaunting
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
