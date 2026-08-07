import { SlideShell } from "./SlideShell";

/** Hidden slide — re-add to the registry in index.ts to restore. */
export const title = "The 50 Experts";
export const variant = "slide";

export function ExpertsSlide({ className }: { className: string }) {
  return (
    <SlideShell className={className} title={title}>
      <div className="eyebrow reveal reveal-1">
        <span className="dot"></span> CHAPTER III — THE METHOD
      </div>
      <h2 className="section reveal reveal-2" style={{ marginTop: "2vh" }}>
        Fifty <em>expert lenses</em> — one ledger.
      </h2>
      <p className="lede reveal reveal-3" style={{ marginTop: "2vh" }}>
        We modeled the questions a future-proof open ledger has to answer through
        fifty disciplines — from forensic auditors to LLM safety researchers to
        nonprofit treasurers. Hover any tile.
      </p>
      <div className="experts reveal reveal-4">
        <div className="expert">
          <span className="n">01</span>GL Architecture
        </div>
        <div className="expert">
          <span className="n">02</span>Double-Entry Theory
        </div>
        <div className="expert">
          <span className="n">03</span>GAAP / FASB
        </div>
        <div className="expert">
          <span className="n">04</span>IFRS / IASB
        </div>
        <div className="expert">
          <span className="n">05</span>Audit / SOC 1
        </div>
        <div className="expert">
          <span className="n">06</span>SOC 2 Type II
        </div>
        <div className="expert">
          <span className="n">07</span>Tax — US Multi-state
        </div>
        <div className="expert">
          <span className="n">08</span>Tax — VAT / Intl
        </div>
        <div className="expert">
          <span className="n">09</span>Sales Tax / Avalara
        </div>
        <div className="expert">
          <span className="n">10</span>Payroll Tax
        </div>
        <div className="expert">
          <span className="n">11</span>Bank Feeds / Plaid
        </div>
        <div className="expert">
          <span className="n">12</span>OBP / FDX Standards
        </div>
        <div className="expert">
          <span className="n">13</span>Cash vs Accrual
        </div>
        <div className="expert">
          <span className="n">14</span>Revenue Rec — ASC 606
        </div>
        <div className="expert">
          <span className="n">15</span>Lease — ASC 842
        </div>
        <div className="expert">
          <span className="n">16</span>Inventory / WAC / FIFO
        </div>
        <div className="expert">
          <span className="n">17</span>Multi-Currency / FX
        </div>
        <div className="expert">
          <span className="n">18</span>Multi-Entity Conslidation
        </div>
        <div className="expert">
          <span className="n">19</span>Fund Accounting (Non-Profit)
        </div>
        <div className="expert">
          <span className="n">20</span>Cost Accounting
        </div>
        <div className="expert">
          <span className="n">21</span>Project / Job Costing
        </div>
        <div className="expert">
          <span className="n">22</span>Cash Flow Forecasting
        </div>
        <div className="expert">
          <span className="n">23</span>AP Automation
        </div>
        <div className="expert">
          <span className="n">24</span>AR / Collections
        </div>
        <div className="expert">
          <span className="n">25</span>Fraud Detection
        </div>
        <div className="expert">
          <span className="n">26</span>Forensic Accounting
        </div>
        <div className="expert">
          <span className="n">27</span>Internal Controls / SOX
        </div>
        <div className="expert">
          <span className="n">28</span>Document OCR / IDP
        </div>
        <div className="expert">
          <span className="n">29</span>LLM Safety / Eval
        </div>
        <div className="expert">
          <span className="n">30</span>Agent Orchestration
        </div>
        <div className="expert">
          <span className="n">31</span>MCP Protocol Design
        </div>
        <div className="expert">
          <span className="n">32</span>RAG / Vector Search
        </div>
        <div className="expert">
          <span className="n">33</span>Event-Sourced Systems
        </div>
        <div className="expert">
          <span className="n">34</span>Database — Postgres
        </div>
        <div className="expert">
          <span className="n">35</span>API Design — REST/GraphQL
        </div>
        <div className="expert">
          <span className="n">36</span>Webhooks / Event Bus
        </div>
        <div className="expert">
          <span className="n">37</span>OAuth 2.1 / OIDC
        </div>
        <div className="expert">
          <span className="n">38</span>Zero-Trust Auth
        </div>
        <div className="expert">
          <span className="n">39</span>Encryption at Rest
        </div>
        <div className="expert">
          <span className="n">40</span>Self-Hosting / k8s
        </div>
        <div className="expert">
          <span className="n">41</span>Open-Source Licensing
        </div>
        <div className="expert">
          <span className="n">42</span>OSS Community Ops
        </div>
        <div className="expert">
          <span className="n">43</span>UX — Accountants
        </div>
        <div className="expert">
          <span className="n">44</span>UX — SMB Owners
        </div>
        <div className="expert">
          <span className="n">45</span>Mobile-First Capture
        </div>
        <div className="expert">
          <span className="n">46</span>Reporting / BI
        </div>
        <div className="expert">
          <span className="n">47</span>SMB GTM
        </div>
        <div className="expert">
          <span className="n">48</span>Accountant Channel
        </div>
        <div className="expert">
          <span className="n">49</span>Vertical Specialization
        </div>
        <div className="expert">
          <span className="n">50</span>Migrations from QBO
        </div>
      </div>
    </SlideShell>
  );
}
