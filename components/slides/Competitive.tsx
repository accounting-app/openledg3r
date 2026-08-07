import { SlideShell } from "./SlideShell";

export const title = "Competitive";
export const variant = "slide";

export function CompetitiveSlide({ className }: { className: string }) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CHAPTER VI — THE FIELD
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
              <th>Open Source</th>
              <th>Agentic AI</th>
              <th>Self-Host</th>
              <th>Audit Trail</th>
              <th>Price (1 user)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="us">
              <td>OpenLedger</td>
              <td>
                <span className="pill yes">AGPL+Commercial</span>
              </td>
              <td>
                <span className="pill yes">7 agents</span>
              </td>
              <td>
                <span className="pill yes">Yes</span>
              </td>
              <td>
                <span className="pill yes">Cryptographic</span>
              </td>
              <td>
                <strong>$0 OSS / $29 cloud</strong>
              </td>
            </tr>
            <tr>
              <td>QuickBooks Online</td>
              <td>
                <span className="pill no">Closed</span>
              </td>
              <td>
                <span className="pill yes">7 agents (paywall)</span>
              </td>
              <td>
                <span className="pill no">No</span>
              </td>
              <td>
                <span className="pill partial">App-level</span>
              </td>
              <td>$38–$275</td>
            </tr>
            <tr>
              <td>Digits (AGL)</td>
              <td>
                <span className="pill no">Closed</span>
              </td>
              <td>
                <span className="pill yes">Autonomous GL</span>
              </td>
              <td>
                <span className="pill no">No</span>
              </td>
              <td>
                <span className="pill partial">App-level</span>
              </td>
              <td>Bundled w/ svc</td>
            </tr>
            <tr>
              <td>Pilot / Synthetic</td>
              <td>
                <span className="pill no">Closed</span>
              </td>
              <td>
                <span className="pill yes">Autonomous</span>
              </td>
              <td>
                <span className="pill no">No</span>
              </td>
              <td>
                <span className="pill partial">App-level</span>
              </td>
              <td>Service pricing</td>
            </tr>
            <tr>
              <td>Xero</td>
              <td>
                <span className="pill no">Closed</span>
              </td>
              <td>
                <span className="pill partial">Copilot only</span>
              </td>
              <td>
                <span className="pill no">No</span>
              </td>
              <td>
                <span className="pill partial">App-level</span>
              </td>
              <td>$15–$78</td>
            </tr>
            <tr>
              <td>Odoo Accounting</td>
              <td>
                <span className="pill yes">LGPL</span>
              </td>
              <td>
                <span className="pill no">None</span>
              </td>
              <td>
                <span className="pill yes">Yes</span>
              </td>
              <td>
                <span className="pill yes">Yes</span>
              </td>
              <td>$0 / €31+</td>
            </tr>
            <tr>
              <td>ERPNext</td>
              <td>
                <span className="pill yes">GPLv3</span>
              </td>
              <td>
                <span className="pill no">None</span>
              </td>
              <td>
                <span className="pill yes">Yes</span>
              </td>
              <td>
                <span className="pill yes">Yes</span>
              </td>
              <td>$0 / $50</td>
            </tr>
            <tr>
              <td>Akaunting</td>
              <td>
                <span className="pill yes">GPLv3</span>
              </td>
              <td>
                <span className="pill no">None</span>
              </td>
              <td>
                <span className="pill yes">Yes</span>
              </td>
              <td>
                <span className="pill partial">Basic</span>
              </td>
              <td>$0 / $9+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </SlideShell>
  );
}
