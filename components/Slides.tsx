/* Auto-generated from openledger_pitch.html — run: node scripts/migrate.mjs */

import type { RefObject } from "react";
import type { DemoLine } from "@/lib/demo";

type SlidesProps = {
  slideClass: (index: number, variant: string) => string;
  goTo: (index: number) => void;
  loadPreset: (index: number) => void;
  runDemo: () => void;
  toggleOverview: () => void;
  demoInputRef: RefObject<HTMLTextAreaElement | null>;
  demoPanelRef: RefObject<HTMLDivElement | null>;
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
      <section
        className={slideClass(0, "slide hero")}
        data-title="Cover"
      >
        <div className="pad">
                <div className="eyebrow reveal reveal-1"><span className="dot"></span> SERIES SEED · CONFIDENTIAL</div>
                <h1 className="display reveal reveal-2" style={{ marginTop: '3vh' }}>
                  The books<br />
                  should <em>keep themselves.</em>
                </h1>
                <div className="sub reveal reveal-3">
                  An open-source, agent-native general ledger built for the world after QuickBooks.
                  Auditable. Self-hosted. MCP-native. Free.
                </div>
                <div className="stamp reveal reveal-4">
                  <div className="num"><em>50</em></div>
                  <div className="lbl">expert lenses</div>
                  <div className="yr">v1.0 — 2026</div>
                </div>
                <div className="meta reveal reveal-5">
                  <div className="col"><strong>WHAT</strong>OpenLedger — Agentic GL</div>
                  <div className="col"><strong>WHO</strong>Founder · 2026 cohort</div>
                  <div className="col"><strong>WHERE</strong>github.com/openledger</div>
                  <div className="col"><strong>WHY NOW</strong>QBO at $275/mo · MCP at scale</div>
                </div>
              </div>
      </section>

      <section
        className={slideClass(1, "slide")}
        data-title="Contents"
      >
        <div className="pad">
                <div className="eyebrow reveal reveal-1"><span className="dot"></span> CONTENTS</div>
                <h2 className="section reveal reveal-2" style={{ marginTop: '2vh' }}>A <em>book</em> in eleven pages.</h2>
                <div className="toc reveal reveal-3">
                  <div className="toc-row" onClick={() => goTo(2)}><span className="num">II.</span><span className="ttl">The <em>bet</em>: ledgers
                      are software, books are operations</span><span className="meta">3 min</span></div>
                  <div className="toc-row" onClick={() => goTo(3)}><span className="num">III.</span><span className="ttl">The <em>incumbent</em> &
                      the cracks in QuickBooks</span><span className="meta">4 min</span></div>
                  <div className="toc-row" onClick={() => goTo(4)}><span className="num">IV.</span><span className="ttl">The <em>fifty</em>: what
                      we asked the experts</span><span className="meta">2 min</span></div>
                  <div className="toc-row" onClick={() => goTo(5)}><span className="num">V.</span><span className="ttl">The <em>architecture</em>:
                      deterministic core, agentic shell</span><span className="meta">5 min</span></div>
                  <div className="toc-row" onClick={() => goTo(6)}><span className="num">VI.</span><span className="ttl">The <em>three
                        pillars</em> that make it un-clone-able</span><span className="meta">3 min</span></div>
                  <div className="toc-row" onClick={() => goTo(7)}><span className="num">VII.</span><span className="ttl">The <em>agent fleet</em>
                      — what they each do</span><span className="meta">4 min</span></div>
                  <div className="toc-row" onClick={() => goTo(8)}><span className="num">VIII.</span><span className="ttl">A <em>demo</em>: speak
                      a transaction into existence</span><span className="meta">live</span></div>
                  <div className="toc-row" onClick={() => goTo(9)}><span className="num">IX.</span><span className="ttl">Versus the
                      <em>field</em>: where we win</span><span className="meta">3 min</span></div>
                  <div className="toc-row" onClick={() => goTo(10)}><span className="num">X.</span><span className="ttl">The <em>business</em> —
                      open core, paid cloud, paid trust</span><span className="meta">3 min</span></div>
                  <div className="toc-row" onClick={() => goTo(11)}><span className="num">XI.</span><span className="ttl">The
                      <em>ask</em></span><span className="meta">1 min</span></div>
                </div>
              </div>
      </section>

      <section
        className={slideClass(2, "slide ruled")}
        data-title="The Bet"
      >
        <div className="pad">
                <div className="eyebrow reveal reveal-1"><span className="dot"></span> CHAPTER II — THE BET</div>
                <div className="two-col">
                  <div className="col-left reveal reveal-2">
                    <h2 className="section">The general ledger is now <em>a runtime</em>, not a record.</h2>
                    <p className="lede" style={{ marginTop: '2vh' }}>
                      For 500 years the ledger was a passive record an accountant wrote into. In 2026 the ledger
                      became something else: a system the <em>business itself runs through</em>. Agents propose journal
                      entries. Vendors stream invoices into AP queues. Banks push transactions in real time.
                    </p>
                    <p className="body" style={{ marginTop: '1.5vh' }}>
                      QuickBooks figured this out and shipped seven AI agents in eighteen months. They also raised prices
                      83% in six years, locked the agents behind tiers, and tied every customer's books to a closed
                      cloud. The opportunity isn't to <em>copy</em> them. It's to build what an agent-native ledger
                      looks like when nobody owns the rails.
                    </p>
                  </div>
                  <div className="col-right reveal reveal-3">
                    <div className="quote-box">
                      "It doesn't have to get everything right on its own, as long as it knows what things it should ask about."
                      <cite>— Ian Crosby, founder, Bench → Synthetic</cite>
                    </div>
                    <div className="stat-grid" style={{ marginTop: '1vh' }}>
                      <div className="stat">
                        <div className="n">82<em>%</em></div>
                        <div className="lbl">SMB accounting share held by QuickBooks (2026)</div>
                      </div>
                      <div className="stat">
                        <div className="n">$275</div>
                        <div className="lbl">QBO Advanced — up from $150 in 2020</div>
                      </div>
                      <div className="stat">
                        <div className="n">7</div>
                        <div className="lbl">AI agents inside QuickBooks — all paywalled</div>
                      </div>
                      <div className="stat">
                        <div className="n">6,400+</div>
                        <div className="lbl">MCP servers in the registry (Feb 2026)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </section>

      <section
        className={slideClass(3, "slide dark")}
        data-title="The Incumbent"
      >
        <div className="moss-bg"></div>
              <div className="pad">
                <div className="eyebrow reveal reveal-1"><span className="dot"></span> CHAPTER III — THE INCUMBENT</div>
                <h2 className="section reveal reveal-2" style={{ marginTop: '2vh', color: 'var(--paper)' }}>
                  QuickBooks has the data.<br />
                  We have <em>everything else.</em>
                </h2>
                <p className="lede reveal reveal-3" style={{ marginTop: '2vh' }}>
                  Five fault lines we can drive a wedge into — each one a feature QuickBooks structurally cannot ship.
                </p>
                <div className="why-now">
                  <div className="why-list reveal reveal-4">
                    <div className="why-item">
                      <div className="badge">i</div>
                      <div>
                        <h4>Their agents are <em>add-ons</em>. Ours is the ledger.</h4>
                        <p>Intuit grafted agents onto a 25-year-old codebase. Agent intelligence sits beside the books, not
                          inside them. Ours posts directly to the ledger's transaction model.</p>
                      </div>
                    </div>
                    <div className="why-item">
                      <div className="badge">ii</div>
                      <div>
                        <h4>Closed cloud + rising prices.</h4>
                        <p>QBO Advanced is $275/mo and rising 12–17% per year. There is no self-host. There is no
                          export-without-pain. Customer data is hostage to the rails.</p>
                      </div>
                    </div>
                    <div className="why-item">
                      <div className="badge">iii</div>
                      <div>
                        <h4>No real MCP surface.</h4>
                        <p>Customers' own agents — Claude, ChatGPT, custom — cannot read QBO data the way they want. Intuit's
                          interest is to keep them out.</p>
                      </div>
                    </div>
                    <div className="why-item">
                      <div className="badge">iv</div>
                      <div>
                        <h4>Accountants are tired of being the platform's hostage.</h4>
                        <p>The QBO Accountant sunset at end of 2026 and the new Intuit Accountant Suite is forcing every firm to
                          re-platform. The switching cost is already being paid.</p>
                      </div>
                    </div>
                    <div className="why-item">
                      <div className="badge">v</div>
                      <div>
                        <h4>Open beats closed when the substrate is models.</h4>
                        <p>An open codebase + open data format means every new model — local, frontier, fine-tuned — improves
                          the product. Closed competitors are locked to one provider.</p>
                      </div>
                    </div>
                  </div>
                  <div className="callout-stat reveal reveal-5">
                    <div className="lbl">QBO Advanced — 6-year price drift</div>
                    <div className="big">+83<em>%</em></div>
                    <div className="lbl" style={{ color: 'rgba(242,239,232,0.6)' }}>$150 → $275 since 2020. Customers are paying for AI
                      they didn't ask to fund.</div>
                  </div>
                </div>
              </div>
      </section>

      <section
        className={slideClass(4, "slide")}
        data-title="The 50 Experts"
      >
        <div className="pad">
                <div className="eyebrow reveal reveal-1"><span className="dot"></span> CHAPTER IV — THE METHOD</div>
                <h2 className="section reveal reveal-2" style={{ marginTop: '2vh' }}>
                  Fifty <em>expert lenses</em> — one ledger.
                </h2>
                <p className="lede reveal reveal-3" style={{ marginTop: '2vh' }}>
                  We modeled the questions a future-proof open ledger has to answer through fifty disciplines —
                  from forensic auditors to LLM safety researchers to nonprofit treasurers. Hover any tile.
                </p>
                <div className="experts reveal reveal-4">
                  <div className="expert"><span className="n">01</span>GL Architecture</div>
                  <div className="expert"><span className="n">02</span>Double-Entry Theory</div>
                  <div className="expert"><span className="n">03</span>GAAP / FASB</div>
                  <div className="expert"><span className="n">04</span>IFRS / IASB</div>
                  <div className="expert"><span className="n">05</span>Audit / SOC 1</div>
                  <div className="expert"><span className="n">06</span>SOC 2 Type II</div>
                  <div className="expert"><span className="n">07</span>Tax — US Multi-state</div>
                  <div className="expert"><span className="n">08</span>Tax — VAT / Intl</div>
                  <div className="expert"><span className="n">09</span>Sales Tax / Avalara</div>
                  <div className="expert"><span className="n">10</span>Payroll Tax</div>
                  <div className="expert"><span className="n">11</span>Bank Feeds / Plaid</div>
                  <div className="expert"><span className="n">12</span>OBP / FDX Standards</div>
                  <div className="expert"><span className="n">13</span>Cash vs Accrual</div>
                  <div className="expert"><span className="n">14</span>Revenue Rec — ASC 606</div>
                  <div className="expert"><span className="n">15</span>Lease — ASC 842</div>
                  <div className="expert"><span className="n">16</span>Inventory / WAC / FIFO</div>
                  <div className="expert"><span className="n">17</span>Multi-Currency / FX</div>
                  <div className="expert"><span className="n">18</span>Multi-Entity Conslidation</div>
                  <div className="expert"><span className="n">19</span>Fund Accounting (Non-Profit)</div>
                  <div className="expert"><span className="n">20</span>Cost Accounting</div>
                  <div className="expert"><span className="n">21</span>Project / Job Costing</div>
                  <div className="expert"><span className="n">22</span>Cash Flow Forecasting</div>
                  <div className="expert"><span className="n">23</span>AP Automation</div>
                  <div className="expert"><span className="n">24</span>AR / Collections</div>
                  <div className="expert"><span className="n">25</span>Fraud Detection</div>
                  <div className="expert"><span className="n">26</span>Forensic Accounting</div>
                  <div className="expert"><span className="n">27</span>Internal Controls / SOX</div>
                  <div className="expert"><span className="n">28</span>Document OCR / IDP</div>
                  <div className="expert"><span className="n">29</span>LLM Safety / Eval</div>
                  <div className="expert"><span className="n">30</span>Agent Orchestration</div>
                  <div className="expert"><span className="n">31</span>MCP Protocol Design</div>
                  <div className="expert"><span className="n">32</span>RAG / Vector Search</div>
                  <div className="expert"><span className="n">33</span>Event-Sourced Systems</div>
                  <div className="expert"><span className="n">34</span>Database — Postgres</div>
                  <div className="expert"><span className="n">35</span>API Design — REST/GraphQL</div>
                  <div className="expert"><span className="n">36</span>Webhooks / Event Bus</div>
                  <div className="expert"><span className="n">37</span>OAuth 2.1 / OIDC</div>
                  <div className="expert"><span className="n">38</span>Zero-Trust Auth</div>
                  <div className="expert"><span className="n">39</span>Encryption at Rest</div>
                  <div className="expert"><span className="n">40</span>Self-Hosting / k8s</div>
                  <div className="expert"><span className="n">41</span>Open-Source Licensing</div>
                  <div className="expert"><span className="n">42</span>OSS Community Ops</div>
                  <div className="expert"><span className="n">43</span>UX — Accountants</div>
                  <div className="expert"><span className="n">44</span>UX — SMB Owners</div>
                  <div className="expert"><span className="n">45</span>Mobile-First Capture</div>
                  <div className="expert"><span className="n">46</span>Reporting / BI</div>
                  <div className="expert"><span className="n">47</span>SMB GTM</div>
                  <div className="expert"><span className="n">48</span>Accountant Channel</div>
                  <div className="expert"><span className="n">49</span>Vertical Specialization</div>
                  <div className="expert"><span className="n">50</span>Migrations from QBO</div>
                </div>
              </div>
      </section>

      <section
        className={slideClass(5, "slide")}
        data-title="Architecture"
      >
        <div className="pad">
                <div className="eyebrow reveal reveal-1"><span className="dot"></span> CHAPTER V — ARCHITECTURE</div>
                <h2 className="section reveal reveal-2" style={{ marginTop: '2vh' }}>
                  A <em>deterministic core</em>. An <em>agentic shell</em>. Never inverted.
                </h2>
                <p className="lede reveal reveal-3" style={{ marginTop: '1.5vh', maxWidth: '80ch' }}>
                  The single design rule: LLMs <em>never</em> mutate the ledger directly. They draft proposals.
                  The deterministic core validates, balances, and posts. Hallucination becomes a UX problem, not an audit one.
                </p>
                <div className="arch reveal reveal-4">
                  <div className="layer foundation">
                    <span className="name">L0 · IMMUTABLE LEDGER CORE</span>
                    <span className="desc">Append-only journal · double-entry enforced · cryptographic chain · Postgres + event
                      sourcing</span>
                    <span className="tag">CORE</span>
                  </div>
                  <div className="layer">
                    <span className="name">L1 · DOMAIN ENGINE</span>
                    <span className="desc">Chart of accounts · COGS · accruals · multi-currency · tax periods · close cycle ·
                      GAAP/IFRS reporting</span>
                    <span className="tag">CORE</span>
                  </div>
                  <div className="layer">
                    <span className="name">L2 · DATA INGEST</span>
                    <span className="desc">Bank feeds (Plaid/FDX) · OCR (Dext-class) · email parsers · webhook bus · CSV importers ·
                      QBO migrator</span>
                    <span className="tag">CORE</span>
                  </div>
                  <div className="layer">
                    <span className="name">L3 · POLICY & GUARDRAILS</span>
                    <span className="desc">Approval rules · spending limits · segregation of duties · agent permission matrix ·
                      SOX-style controls</span>
                    <span className="tag">CORE</span>
                  </div>
                  <div className="layer head">
                    <span className="name">L4 · MCP SERVER + AGENT FLEET</span>
                    <span className="desc">First-class MCP host · OAuth 2.1 scopes · 7 native agents · BYO model (Claude / GPT /
                      Llama / local)</span>
                    <span className="tag">SHELL</span>
                  </div>
                  <div className="layer head">
                    <span className="name">L5 · INTERFACES</span>
                    <span className="desc">Web app · mobile capture · accountant cockpit · CLI · chat (any LLM via MCP) · embedded
                      for partners</span>
                    <span className="tag">SHELL</span>
                  </div>
                </div>
              </div>
      </section>

      <section
        className={slideClass(6, "slide moss")}
        data-title="Three Pillars"
      >
        <div className="moss-bg"></div>
              <div className="pad">
                <div className="eyebrow reveal reveal-1"><span className="dot"></span> CHAPTER VI — THE MOAT</div>
                <h2 className="section reveal reveal-2" style={{ marginTop: '2vh', color: 'var(--paper)' }}>
                  Three pillars they <em>can't copy</em>.
                </h2>
                <div className="pillars">
                  <div className="pillar reveal reveal-3">
                    <div className="num">i.</div>
                    <h3>Open by license, open by data.</h3>
                    <p>AGPLv3 + commercial dual license. Every journal entry exportable as open JSON-LD. Self-host on your
                      laptop or your cluster. Lock-in is impossible by construction.</p>
                    <p>Accountants and regulators can audit the codebase. No incumbent can match that promise without
                      dismantling their business model.</p>
                    <div className="tagline">Differentiator vs. QBO, Digits, Pilot, Synthetic</div>
                  </div>
                  <div className="pillar reveal reveal-4">
                    <div className="num">ii.</div>
                    <h3>Provable books, not probable ones.</h3>
                    <p>Every agent action is a <em>proposal</em> with a citation trail. The deterministic engine balances debits
                      and credits. Cryptographic hash chain over every entry — tamper-evident by default.</p>
                    <p>An auditor's first question — "show me the audit trail" — gets answered with a git-log-like view that no
                      closed competitor can match.</p>
                    <div className="tagline">Differentiator vs. closed AI bookkeepers</div>
                  </div>
                  <div className="pillar reveal reveal-5">
                    <div className="num">iii.</div>
                    <h3>MCP-native, model-agnostic.</h3>
                    <p>The whole product is an MCP server first. Bring Claude, ChatGPT, Gemini, or a local Llama. Customers' own
                      agents can read, propose, reconcile — under fine-grained OAuth scopes.</p>
                    <p>The 6,400+ MCP server ecosystem becomes our distribution. Every new model release improves OpenLedger
                      automatically.</p>
                    <div className="tagline">Differentiator vs. ERPNext, Odoo, Akaunting</div>
                  </div>
                </div>
              </div>
      </section>

      <section
        className={slideClass(7, "slide")}
        data-title="Agent Fleet"
      >
        <div className="pad">
                <div className="eyebrow reveal reveal-1"><span className="dot"></span> CHAPTER VII — THE FLEET</div>
                <h2 className="section reveal reveal-2" style={{ marginTop: '2vh' }}>
                  Seven <em>open agents</em>. One ledger. No subscription tier.
                </h2>
                <p className="lede reveal reveal-3" style={{ marginTop: '1.5vh' }}>
                  QuickBooks gates each agent behind a paywall ranging from Essentials to Advanced. We ship all
                  seven in the open-source core. Differentiation moves to <em>quality of execution</em>, not access.
                </p>
                <div className="fleet reveal reveal-4">
                  <div className="agent">
                    <div className="agent-icon">B</div>
                    <div className="agent-tag">books</div>
                    <div className="agent-name">Bookkeeper</div>
                    <div className="agent-desc">Categorizes transactions, proposes journal entries, flags missing context, learns
                      from corrections.</div>
                  </div>
                  <div className="agent">
                    <div className="agent-icon">R</div>
                    <div className="agent-tag">reconcile</div>
                    <div className="agent-name">Reconciler</div>
                    <div className="agent-desc">Three-way matches statements ↔ bank feed ↔ ledger. Explains discrepancies in plain
                      English.</div>
                  </div>
                  <div className="agent">
                    <div className="agent-icon">P</div>
                    <div className="agent-tag">accounts payable</div>
                    <div className="agent-name">Payables</div>
                    <div className="agent-desc">Reads invoices from email, OCRs, drafts bill payments, routes for approval per
                      policy.</div>
                  </div>
                  <div className="agent">
                    <div className="agent-icon">$</div>
                    <div className="agent-tag">accounts receivable</div>
                    <div className="agent-name">Collector</div>
                    <div className="agent-desc">Sends invoices, chases late payers with on-brand reminders, reconciles inbound
                      payments.</div>
                  </div>
                  <div className="agent">
                    <div className="agent-icon">T</div>
                    <div className="agent-tag">tax</div>
                    <div className="agent-name">Tax Counsel</div>
                    <div className="agent-desc">Tracks nexus, computes sales/VAT, drafts filings, surfaces deduction opportunities
                      mid-quarter.</div>
                  </div>
                  <div className="agent">
                    <div className="agent-icon">A</div>
                    <div className="agent-tag">audit</div>
                    <div className="agent-name">Auditor</div>
                    <div className="agent-desc">Continuous anomaly detection — Benford's law, unusual vendor patterns, suspicious
                      round numbers.</div>
                  </div>
                  <div className="agent" style={{ gridColumn: 'span 3' }}>
                    <div className="agent-icon">C</div>
                    <div className="agent-tag">close · finance</div>
                    <div className="agent-name">Closer — coordinates the rest at month-end.</div>
                    <div className="agent-desc">Orchestrates the month-end close: queues accruals, prompts the reconciler, prepares
                      the management pack, drafts the variance commentary. The agent every CFO has been trying to hire.</div>
                  </div>
                </div>
              </div>
      </section>

      <section
        className={slideClass(8, "slide")}
        data-title="Live Demo"
      >
        <div className="pad">
                <div className="eyebrow reveal reveal-1"><span className="dot"></span> CHAPTER VIII — INTERACTIVE DEMO</div>
                <h2 className="section reveal reveal-2" style={{ marginTop: '2vh' }}>
                  Speak a transaction. <em>Watch it post.</em>
                </h2>
                <p className="lede reveal reveal-3" style={{ marginTop: '1vh' }}>
                  Type a transaction in plain English. Our Bookkeeper agent will propose journal entries — and the
                  deterministic core will validate them. This is the actual flow, locally simulated.
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
                      <button className="preset" onClick={() => loadPreset(0)}>AWS bill</button>
                      <button className="preset" onClick={() => loadPreset(1)}>Client invoice paid</button>
                      <button className="preset" onClick={() => loadPreset(2)}>Payroll run</button>
                      <button className="preset" onClick={() => loadPreset(3)}>Cash from sale</button>
                      <button className="preset" onClick={() => loadPreset(4)}>Equipment purchase</button>
                    </div>
                    <button className="go" onClick={runDemo}>Post to ledger</button>
                  </div>
                  <div className="demo-panel" ref={demoPanelRef}>
                    <div className="tag-row">
                      <span><span className="dot"></span>BOOKKEEPER AGENT · IDLE</span>
                      <span>{demoStatus}</span>
                    </div>
                    <div>
                      {demoLines.length === 0 ? (
                        <>
                          <div className="demo-line show">
                            <span className="c">// agent inactive — type a transaction and press post</span>
                          </div>
                          <div className="demo-line show">
                            <span className="c">// the ledger will validate the proposal before it commits</span>
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
              </div>
      </section>

      <section
        className={slideClass(9, "slide")}
        data-title="Competitive"
      >
        <div className="pad">
                <div className="eyebrow reveal reveal-1"><span className="dot"></span> CHAPTER IX — THE FIELD</div>
                <h2 className="section reveal reveal-2" style={{ marginTop: '2vh' }}>
                  Open <em>or</em> agentic. <em>Never both.</em>
                </h2>
                <p className="lede reveal reveal-3" style={{ marginTop: '1vh' }}>
                  The competitive landscape sorts cleanly along two axes: openness and agentic depth. The upper-right is empty.
                </p>
                <table className="compare reveal reveal-4">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Open Source</th>
                      <th>Agentic AI</th>
                      <th>MCP-Native</th>
                      <th>Self-Host</th>
                      <th>Audit Trail</th>
                      <th>Price (1 user)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="us">
                      <td>OpenLedger</td>
                      <td><span className="pill yes">AGPL+Commercial</span></td>
                      <td><span className="pill yes">7 agents</span></td>
                      <td><span className="pill yes">First-class</span></td>
                      <td><span className="pill yes">Yes</span></td>
                      <td><span className="pill yes">Cryptographic</span></td>
                      <td><strong>$0 OSS / $29 cloud</strong></td>
                    </tr>
                    <tr>
                      <td>QuickBooks Online</td>
                      <td><span className="pill no">Closed</span></td>
                      <td><span className="pill yes">7 agents (paywall)</span></td>
                      <td><span className="pill no">No</span></td>
                      <td><span className="pill no">No</span></td>
                      <td><span className="pill partial">App-level</span></td>
                      <td>$38–$275</td>
                    </tr>
                    <tr>
                      <td>Digits (AGL)</td>
                      <td><span className="pill no">Closed</span></td>
                      <td><span className="pill yes">Autonomous GL</span></td>
                      <td><span className="pill no">No</span></td>
                      <td><span className="pill no">No</span></td>
                      <td><span className="pill partial">App-level</span></td>
                      <td>Bundled w/ svc</td>
                    </tr>
                    <tr>
                      <td>Pilot / Synthetic</td>
                      <td><span className="pill no">Closed</span></td>
                      <td><span className="pill yes">Autonomous</span></td>
                      <td><span className="pill no">No</span></td>
                      <td><span className="pill no">No</span></td>
                      <td><span className="pill partial">App-level</span></td>
                      <td>Service pricing</td>
                    </tr>
                    <tr>
                      <td>Xero</td>
                      <td><span className="pill no">Closed</span></td>
                      <td><span className="pill partial">Copilot only</span></td>
                      <td><span className="pill no">No</span></td>
                      <td><span className="pill no">No</span></td>
                      <td><span className="pill partial">App-level</span></td>
                      <td>$15–$78</td>
                    </tr>
                    <tr>
                      <td>Odoo Accounting</td>
                      <td><span className="pill yes">LGPL</span></td>
                      <td><span className="pill no">None</span></td>
                      <td><span className="pill no">No</span></td>
                      <td><span className="pill yes">Yes</span></td>
                      <td><span className="pill yes">Yes</span></td>
                      <td>$0 / €31+</td>
                    </tr>
                    <tr>
                      <td>ERPNext</td>
                      <td><span className="pill yes">GPLv3</span></td>
                      <td><span className="pill no">None</span></td>
                      <td><span className="pill no">No</span></td>
                      <td><span className="pill yes">Yes</span></td>
                      <td><span className="pill yes">Yes</span></td>
                      <td>$0 / $50</td>
                    </tr>
                    <tr>
                      <td>Akaunting</td>
                      <td><span className="pill yes">GPLv3</span></td>
                      <td><span className="pill no">None</span></td>
                      <td><span className="pill no">No</span></td>
                      <td><span className="pill yes">Yes</span></td>
                      <td><span className="pill partial">Basic</span></td>
                      <td>$0 / $9+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
      </section>

      <section
        className={slideClass(10, "slide ruled")}
        data-title="Business Model"
      >
        <div className="pad">
                <div className="eyebrow reveal reveal-1"><span className="dot"></span> CHAPTER X — BUSINESS MODEL</div>
                <h2 className="section reveal reveal-2" style={{ marginTop: '2vh' }}>
                  Open core. Paid <em>cloud</em>. Paid <em>trust</em>.
                </h2>
                <p className="lede reveal reveal-3" style={{ marginTop: '1vh' }}>
                  Three revenue streams, each defensible by something other than feature gating.
                </p>
                <div className="bizmodel">
                  <div className="biz-card reveal reveal-4">
                    <span className="label">Tier 01 · OpenLedger Community</span>
                    <h3>The whole product, self-hosted, forever.</h3>
                    <div className="price">Free<span className="small">/ forever</span></div>
                    <ul>
                      <li>Full ledger, all 7 agents, MCP server, mobile capture</li>
                      <li>Connect any LLM you own — bring your own keys</li>
                      <li>Single-tenant Docker / k8s · run on your hardware</li>
                      <li>AGPLv3 — share improvements back if you SaaS it</li>
                    </ul>
                  </div>
                  <div className="biz-card highlight reveal reveal-5">
                    <span className="label">Tier 02 · OpenLedger Cloud</span>
                    <h3>Managed, scaled, with the models included.</h3>
                    <div className="price">$29<span className="small">/ entity / mo</span></div>
                    <ul>
                      <li>Hosted MCP host, frontier model included</li>
                      <li>Bank feeds, e-filing, payroll partners pre-wired</li>
                      <li>SOC 2 Type II inherited from us</li>
                      <li>Multi-entity, multi-currency, unlimited users</li>
                    </ul>
                  </div>
                  <div className="biz-card reveal reveal-5" style={{ gridColumn: 'span 2' }}>
                    <span className="label">Tier 03 · OpenLedger Trust — for accountants & regulated entities</span>
                    <h3>Audit-grade compliance, vertical packs, accountant cockpit.</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '18px', marginTop: '8px' }}>
                      <div><strong style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem' }}>For firms</strong>
                        <p style={{ fontSize: '0.85rem', marginTop: '4px', lineHeight: '1.4', color: 'var(--ink-50)' }}>Multi-client
                          cockpit. Bulk close. Workpapers export. ProAdvisor-style channel.</p>
                      </div>
                      <div><strong style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem' }}>For verticals</strong>
                        <p style={{ fontSize: '0.85rem', marginTop: '4px', lineHeight: '1.4', color: 'var(--ink-50)' }}>Construction /
                          non-profit / e-comm / SaaS metric packs. Built once, shared open.</p>
                      </div>
                      <div><strong style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem' }}>For regulated</strong>
                        <p style={{ fontSize: '0.85rem', marginTop: '4px', lineHeight: '1.4', color: 'var(--ink-50)' }}>SOC 1 attestation.
                          GAAP/IFRS reporting packs. SOX control templates.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </section>

      <section
        className={slideClass(11, "slide closing")}
        data-title="The Ask"
      >
        <div className="pad">
                <div className="eyebrow reveal reveal-1"><span className="dot"></span> CHAPTER XI — THE ASK</div>
                <h1 className="display reveal reveal-2" style={{ marginTop: '3vh' }}>
                  Help us build the <em>open</em> ledger every accountant is waiting for.
                </h1>
                <p className="lede reveal reveal-3" style={{ marginTop: '3vh', color: 'rgba(242,239,232,0.85)', maxWidth: '60ch' }}>
                  We're raising a $3M seed to ship v1.0 (Q4 2026), reach 10,000 GitHub stars,
                  and convert 250 accounting firms onto OpenLedger Cloud. The 18-month plan ↓
                </p>
                <div className="timeline reveal reveal-4">
                  <div className="tl-item">
                    <div className="dot"></div>
                    <div className="qtr">Q3 2026</div>
                    <div className="title">v0.5 · public beta</div>
                    <div className="desc">Core ledger, Bookkeeper + Reconciler agents, QBO migration tool, Plaid feeds.</div>
                  </div>
                  <div className="tl-item">
                    <div className="dot"></div>
                    <div className="qtr">Q4 2026</div>
                    <div className="title">v1.0 · GA</div>
                    <div className="desc">Full agent fleet, SOC 2 Type I, Cloud launch, accountant cockpit beta.</div>
                  </div>
                  <div className="tl-item">
                    <div className="dot"></div>
                    <div className="qtr">Q2 2027</div>
                    <div className="title">v1.5 · vertical packs</div>
                    <div className="desc">Non-profit fund accounting, construction job costing, multi-entity consolidation.</div>
                  </div>
                  <div className="tl-item">
                    <div className="dot"></div>
                    <div className="qtr">Q4 2027</div>
                    <div className="title">v2.0 · Trust tier</div>
                    <div className="desc">SOC 2 Type II + SOC 1, GAAP/IFRS attestation, 1,000 firms on Cloud.</div>
                  </div>
                </div>
                <div className="cta-row reveal reveal-5">
                  <button className="cta primary" onClick={() => goTo(0)}>Restart the deck</button>
                  <button className="cta" onClick={toggleOverview}>See all slides</button>
                  <button className="cta" onClick={() => goTo(8)}>Run the demo again</button>
                </div>
              </div>
      </section>
    </>
  );
}

export const SLIDE_TITLES = ["Cover","Contents","The Bet","The Incumbent","The 50 Experts","Architecture","Three Pillars","Agent Fleet","Live Demo","Competitive","Business Model","The Ask"] as const;

export const SLIDE_VARIANTS = ["slide hero","slide","slide ruled","slide dark","slide","slide","slide moss","slide","slide","slide","slide ruled","slide closing"] as const;
