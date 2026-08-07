/** Structured pitch-deck content consumed by slide components. */

import type {
  AskMilestone,
  BizTier,
  CompareRow,
  FleetAgent,
  FundAllocation,
  MetaCol,
  Pillar,
  StatItem,
  TimelineItem,
  TocItem,
  WhyItem,
} from "./pitch-types";

export type {
  AskMilestone,
  BizTier,
  ComparePill,
  ComparePillTone,
  CompareRow,
  FleetAgent,
  FundAllocation,
  MetaCol,
  Pillar,
  RichPart,
  StatItem,
  Subagent,
  TimelineItem,
  TocItem,
  WhyItem,
} from "./pitch-types";

export const COVER_META: readonly MetaCol[] = [
  { label: "WHAT", value: "OpenLedger — Agentic GL" },
  { label: "WHO", value: "Founding team · US accountant foundation" },
  { label: "WHERE", value: "github.com/openledger" },
  { label: "WHY NOW", value: "QBO at $275/mo · MCP at scale" },
];

export const TOC_ITEMS: readonly TocItem[] = [
  {
    num: "I.",
    slideIndex: 2,
    duration: "3 min",
    label: [
      "The ",
      { em: "bet" },
      ": ledgers are software, books are operations",
    ],
  },
  {
    num: "II.",
    slideIndex: 3,
    duration: "4 min",
    label: ["The ", { em: "incumbent" }, " & the cracks in QuickBooks"],
  },
  {
    num: "III.",
    slideIndex: 4,
    duration: "3 min",
    label: ["The ", { em: "three pillars" }, " that make it un-clone-able"],
  },
  {
    num: "IV.",
    slideIndex: 5,
    duration: "4 min",
    label: ["The ", { em: "agent fleet" }, " — what they each do"],
  },
  {
    num: "V.",
    slideIndex: 6,
    duration: "live",
    label: ["A ", { em: "demo" }, ": speak a transaction into existence"],
  },
  {
    num: "VI.",
    slideIndex: 7,
    duration: "3 min",
    label: ["Versus the ", { em: "field" }, ": where we win"],
  },
  {
    num: "VII.",
    slideIndex: 8,
    duration: "3 min",
    label: [
      "The ",
      { em: "business" },
      " — open core, paid cloud, paid trust",
    ],
  },
  {
    num: "VIII.",
    slideIndex: 9,
    duration: "2 min",
    label: ["The ", { em: "plan" }, " — use of funds & milestones"],
  },
  {
    num: "IX.",
    slideIndex: 10,
    duration: "1 min",
    label: ["The ", { em: "ask" }],
  },
];

export const BET_STATS: readonly StatItem[] = [
  {
    value: "82",
    suffix: "%",
    label: "SMB accounting share held by QuickBooks (2026)",
  },
  {
    value: "$275",
    label: "QBO Advanced — up from $150 in 2020",
  },
  {
    value: "7",
    label: "AI agents inside QuickBooks — all paywalled",
  },
  {
    value: "6,400+",
    label: "MCP servers in the registry (Feb 2026)",
  },
];

export const INCUMBENT_WHYS: readonly WhyItem[] = [
  {
    badge: "i",
    heading: [
      "Their agents are ",
      { em: "add-ons" },
      ". Ours is the ledger.",
    ],
    body: "Intuit grafted agents onto a 25-year-old codebase. Agent intelligence sits beside the books, not inside them. Ours posts directly to the ledger's transaction model.",
  },
  {
    badge: "ii",
    heading: ["Closed cloud + rising prices."],
    body: "QBO Advanced is $275/mo and rising 12–17% per year. There is no self-host. There is no export-without-pain. Customer data is hostage to the rails.",
  },
  {
    badge: "iii",
    heading: ["No real MCP surface."],
    body: "Customers' own agents — Claude, ChatGPT, custom — cannot read QBO data the way they want. Intuit's interest is to keep them out.",
  },
  {
    badge: "iv",
    heading: ["Accountants are tired of being the platform's hostage."],
    body: "The QBO Accountant sunset at end of 2026 and the new Intuit Accountant Suite is forcing every firm to re-platform. The switching cost is already being paid.",
  },
  {
    badge: "v",
    heading: ["Open beats closed when the substrate is models."],
    body: "An open codebase + open data format means every new model — local, frontier, fine-tuned — improves the product. Closed competitors are locked to one provider.",
  },
];

export const INCUMBENT_CALLOUT = {
  label: "QBO Advanced — 6-year price drift",
  value: "+83",
  suffix: "%",
  detail:
    "$150 → $275 since 2020. Customers are paying for AI they didn't ask to fund.",
} as const;

export const PILLARS: readonly Pillar[] = [
  {
    num: "i.",
    reveal: "reveal-3",
    heading: "Open by license, open by data.",
    paragraphs: [
      "AGPLv3 + commercial dual license. Every journal entry exportable as open JSON-LD. Self-host on your laptop or your cluster. Lock-in is impossible by construction.",
      "Accountants and regulators can audit the codebase. No incumbent can match that promise without dismantling their business model.",
      "Of the accountants, by the accountants, for the accountants: the OpenLedger Foundation is accountable to a council of US accounting practitioners and firm leaders — they set COA packs, audit policies, and release priorities. An operating company ships Cloud and Trust under charter; execution without capture.",
    ],
    tagline: "Differentiator vs. QBO, Digits, Pilot, Synthetic",
  },
  {
    num: "ii.",
    reveal: "reveal-4",
    heading: "Provable books, not probable ones.",
    paragraphs: [
      [
        "Every agent action is a ",
        { em: "proposal" },
        " with a citation trail. The deterministic engine balances debits and credits. Cryptographic hash chain over every entry — tamper-evident by default.",
      ],
      'An auditor\'s first question — "show me the audit trail" — gets answered with a git-log-like view that no closed competitor can match.',
    ],
    tagline: "Differentiator vs. closed AI bookkeepers",
  },
  {
    num: "iii.",
    reveal: "reveal-5",
    heading: "MCP-native, model-agnostic.",
    paragraphs: [
      "The whole product is an MCP server first. Bring Claude, ChatGPT, Gemini, or a local Llama. Customers' own agents can read, propose, reconcile — under fine-grained OAuth scopes.",
      "The 6,400+ MCP server ecosystem becomes our distribution. Every new model release improves OpenLedger automatically.",
    ],
    tagline: "Differentiator vs. ERPNext, Odoo, Akaunting",
  },
];

export const FLEET_AGENTS: readonly FleetAgent[] = [
  {
    icon: "B",
    tag: "books · orchestrator",
    name: "Bookkeeper",
    wide: true,
    desc: "Categorizes transactions, proposes journal entries, flags missing context, learns from corrections — and delegates AP, AR, recon, and close to specialist subagents.",
    subagents: [
      {
        name: "Reconciler",
        desc: "Three-way match statements ↔ bank ↔ ledger",
      },
      {
        name: "Payables",
        desc: "Invoice OCR, bill drafts, approval routing",
      },
      {
        name: "Collector",
        desc: "Invoicing, dunning, inbound payment match",
      },
      {
        name: "Closer",
        desc: "Accruals, close checklist, management pack",
      },
    ],
  },
  {
    icon: "T",
    tag: "tax",
    name: "Tax Counsel",
    desc: "Tracks nexus, computes sales/VAT, drafts filings, surfaces deduction opportunities mid-quarter.",
  },
  {
    icon: "A",
    tag: "audit",
    name: "Auditor",
    desc: "Continuous anomaly detection — Benford's law, unusual vendor patterns, suspicious round numbers.",
  },
];

export const COMPARE_HEADERS = [
  "Open Source",
  "Agentic AI",
  "Self-Host",
  "Audit Trail",
  "Price (1 user)",
] as const;

export const COMPARE_ROWS: readonly CompareRow[] = [
  {
    name: "OpenLedger",
    highlight: true,
    openSource: { label: "AGPL+Commercial", tone: "yes" },
    agentic: { label: "7 agents", tone: "yes" },
    selfHost: { label: "Yes", tone: "yes" },
    audit: { label: "Cryptographic", tone: "yes" },
    price: "$0 OSS / $29 cloud",
    priceStrong: true,
  },
  {
    name: "QuickBooks Online",
    openSource: { label: "Closed", tone: "no" },
    agentic: { label: "7 agents (paywall)", tone: "yes" },
    selfHost: { label: "No", tone: "no" },
    audit: { label: "App-level", tone: "partial" },
    price: "$38–$275",
  },
  {
    name: "Digits (AGL)",
    openSource: { label: "Closed", tone: "no" },
    agentic: { label: "Autonomous GL", tone: "yes" },
    selfHost: { label: "No", tone: "no" },
    audit: { label: "App-level", tone: "partial" },
    price: "Bundled w/ svc",
  },
  {
    name: "Pilot / Synthetic",
    openSource: { label: "Closed", tone: "no" },
    agentic: { label: "Autonomous", tone: "yes" },
    selfHost: { label: "No", tone: "no" },
    audit: { label: "App-level", tone: "partial" },
    price: "Service pricing",
  },
  {
    name: "Xero",
    openSource: { label: "Closed", tone: "no" },
    agentic: { label: "Copilot only", tone: "partial" },
    selfHost: { label: "No", tone: "no" },
    audit: { label: "App-level", tone: "partial" },
    price: "$15–$78",
  },
  {
    name: "Odoo Accounting",
    openSource: { label: "LGPL", tone: "yes" },
    agentic: { label: "None", tone: "no" },
    selfHost: { label: "Yes", tone: "yes" },
    audit: { label: "Yes", tone: "yes" },
    price: "$0 / €31+",
  },
  {
    name: "ERPNext",
    openSource: { label: "GPLv3", tone: "yes" },
    agentic: { label: "None", tone: "no" },
    selfHost: { label: "Yes", tone: "yes" },
    audit: { label: "Yes", tone: "yes" },
    price: "$0 / $50",
  },
  {
    name: "Akaunting",
    openSource: { label: "GPLv3", tone: "yes" },
    agentic: { label: "None", tone: "no" },
    selfHost: { label: "Yes", tone: "yes" },
    audit: { label: "Basic", tone: "partial" },
    price: "$0 / $9+",
  },
];

export const BIZ_TIERS: readonly BizTier[] = [
  {
    label: "Tier 01 · Self-Hosted Edition",
    headline: "The whole product, self-hosted, forever.",
    price: "Free",
    priceNote: "/ forever",
    reveal: "reveal-4",
    features: [
      "Full ledger, all 7 agents, MCP server, mobile capture",
      "Connect any LLM you own — bring your own keys",
      "Single-tenant Docker / k8s · run on your hardware",
      "AGPLv3 — share improvements back if you SaaS it",
    ],
    footnote:
      "A product tier, not governance. Ownership and standards sit with the OpenLedger Foundation — council-elected by US accountants.",
  },
  {
    label: "Tier 02 · OpenLedger Cloud",
    headline: "Managed, scaled, with the models included.",
    price: "$29",
    priceNote: "/ entity / mo",
    highlight: true,
    reveal: "reveal-5",
    features: [
      "Hosted MCP host, frontier model included",
      "Bank feeds, e-filing, payroll partners pre-wired",
      "SOC 2 Type II inherited from us",
      "Multi-entity, multi-currency, unlimited users",
    ],
  },
];

export const FUND_ALLOCATIONS: readonly FundAllocation[] = [
  {
    pct: "35%",
    name: "Public beta",
    desc: "Core ledger, Bookkeeper + first subagents, QBO migration, Plaid feeds — ship v0.5.",
  },
  {
    pct: "25%",
    name: "Agent fleet",
    desc: "Complete the three-agent system through GA: Bookkeeper subagents, Tax Counsel, Auditor.",
  },
  {
    pct: "25%",
    name: "Cloud & trust",
    desc: "Hosted MCP, SOC 2 Type I, Cloud launch, accountant cockpit beta.",
  },
  {
    pct: "15%",
    name: "Firm adoption",
    desc: "10,000 GitHub stars and 250 accounting firms onto OpenLedger Cloud.",
  },
];

export const TIMELINE: readonly TimelineItem[] = [
  {
    quarter: "Q4 2026",
    title: "v0.5 · public beta",
    desc: "Core ledger, Bookkeeper with Reconciler subagent, QBO migration tool, Plaid feeds.",
  },
  {
    quarter: "Q1 2027",
    title: "v1.0 · GA",
    desc: "Full agent fleet, SOC 2 Type I, Cloud launch, accountant cockpit beta.",
  },
  {
    quarter: "Q3 2027",
    title: "v1.5 · vertical packs",
    desc: "Non-profit fund accounting, construction job costing, multi-entity consolidation.",
  },
  {
    quarter: "Q1 2028",
    title: "v2.0 · Trust tier",
    desc: "SOC 2 Type II + SOC 1, GAAP/IFRS attestation, 1,000 firms on Cloud.",
  },
];

export const ASK_MILESTONES: readonly AskMilestone[] = [
  { strong: "v1.0", label: "Q1 2027" },
  { strong: "10k stars", label: "community proof" },
  { strong: "250 firms", label: "on Cloud" },
];

/** Slide index for the interactive demo (used by Ask CTAs). */
export const DEMO_SLIDE_INDEX = 6;
