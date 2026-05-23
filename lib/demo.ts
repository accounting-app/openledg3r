export type DemoLine = {
  html: string;
  visible: boolean;
};

export const DEMO_PRESETS = [
  "Paid AWS $487.22 from Chase business checking ending 4421 — this was May production infra for the SaaS product.",
  "Acme Corp paid invoice #1042 for $12,500 via wire to our Mercury account. It was for the March consulting engagement.",
  "Ran payroll for 6 employees today. Total gross $42,800, employer taxes $3,275, net $33,914 paid via Gusto.",
  "Cash sale at the storefront for $156.40 plus $12.78 sales tax. Customer paid by Stripe terminal.",
  "Bought a MacBook Pro for $3,499 on the Amex for the new designer. Will use it 3+ years.",
] as const;

type DemoResponse = {
  intent: string;
  proposals: Array<{
    dr?: string;
    cr?: string;
    amount: number;
    ev?: string;
  }>;
  flags: string[];
  tax: string;
};

const DEMO_RESPONSES: DemoResponse[] = [
  {
    intent: "expense / SaaS infrastructure",
    proposals: [
      {
        dr: "6210 · Cloud Infrastructure",
        amount: 487.22,
        ev: "vendor: AWS · category from 47 prior matches · 99.4% conf",
      },
      {
        cr: "1020 · Chase Business Checking (••4421)",
        amount: 487.22,
        ev: "bank-feed match: txn id PLD-2026-05-21-3389",
      },
    ],
    flags: [],
    tax: "deductible — Section 162 ordinary & necessary business expense",
  },
  {
    intent: "AR settlement · customer payment",
    proposals: [
      {
        dr: "1010 · Mercury Operating",
        amount: 12500.0,
        ev: "wire matched to inbound feed · ref: ACME-1042",
      },
      {
        cr: "1200 · Accounts Receivable — Acme Corp",
        amount: 12500.0,
        ev: "invoice #1042 marked paid · 31 days outstanding",
      },
    ],
    flags: ["DSO improved 4 days vs Acme rolling 90d avg"],
    tax: "no current tax event — accrual recognized at invoice date",
  },
  {
    intent: "payroll run · multi-account",
    proposals: [
      {
        dr: "5100 · Salaries & Wages",
        amount: 42800.0,
        ev: "Gusto export · 6 employees · pay period 2026-05-15",
      },
      {
        dr: "5110 · Employer Payroll Tax",
        amount: 3275.0,
        ev: "FICA 7.65% + FUTA + state UI",
      },
      { cr: "2100 · Payroll Liabilities", amount: 8886.0, ev: "EE+ER taxes withheld pending IRS deposit" },
      { cr: "1010 · Mercury Operating", amount: 33914.0, ev: "net pay wired via Gusto" },
      { cr: "1010 · Mercury Operating", amount: 3275.0, ev: "employer tax sweep" },
    ],
    flags: ["941 deposit due 2026-06-15 — scheduled"],
    tax: "wages deductible · withholding flows to Form 941",
  },
  {
    intent: "POS sale · sales tax liability",
    proposals: [
      { dr: "1030 · Stripe Pending", amount: 169.18, ev: "terminal txn · authorization captured" },
      { cr: "4010 · Sales Revenue", amount: 156.4, ev: "single-item POS sale" },
      { cr: "2200 · Sales Tax Payable", amount: 12.78, ev: "NYC 8.875% · nexus confirmed" },
    ],
    flags: [],
    tax: "remit to NYSDTF · quarterly filing due 2026-07-20",
  },
  {
    intent: "fixed asset · capitalization",
    proposals: [
      {
        dr: "1500 · Office Equipment",
        amount: 3499.0,
        ev: "useful life ≥ 1yr · capitalization threshold met",
      },
      {
        cr: "2300 · Amex Business CC",
        amount: 3499.0,
        ev: "card feed match · txn pending settlement",
      },
    ],
    flags: [
      "Section 179 / bonus depreciation eligible — Tax Counsel will flag at year-end",
    ],
    tax: "depreciate over 5 years MACRS · or elect §179 full expense",
  },
];

function escapeHtml(s: string): string {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c as "&" | "<" | ">" | '"' | "'"
      ] ?? c
  );
}

function lineHtml(parts: string[]): string {
  let html = "";
  for (let j = 0; j < parts.length; j += 2) {
    html += `<span class="${parts[j]}">${escapeHtml(parts[j + 1] || "")}</span>`;
  }
  return html || "&nbsp;";
}

function matchResponseIndex(input: string): number {
  const lower = input.toLowerCase();
  if (
    lower.includes("aws") ||
    lower.includes("infra") ||
    lower.includes("saas") ||
    lower.includes("cloud")
  )
    return 0;
  if (
    lower.includes("paid invoice") ||
    lower.includes("client") ||
    lower.includes("wire") ||
    lower.includes("customer paid")
  )
    return 1;
  if (
    lower.includes("payroll") ||
    lower.includes("gusto") ||
    lower.includes("employee")
  )
    return 2;
  if (
    lower.includes("sale") ||
    lower.includes("storefront") ||
    lower.includes("stripe terminal") ||
    lower.includes("cash sale")
  )
    return 3;
  if (
    lower.includes("macbook") ||
    lower.includes("equipment") ||
    lower.includes("laptop") ||
    lower.includes("amex") ||
    lower.includes("bought")
  )
    return 4;
  return Math.floor(Math.random() * DEMO_RESPONSES.length);
}

export function buildDemoLines(input: string): {
  lines: DemoLine[];
  committedAt: number;
} {
  const respIdx = matchResponseIndex(input);
  const r = DEMO_RESPONSES[respIdx];
  const parts: string[][] = [];

  parts.push(["c", "// parsing transaction…"]);
  parts.push(["k", "intent: ", "v", r.intent]);
  parts.push(["c", ""]);
  parts.push(["c", "// proposing journal entries"]);

  let totalDr = 0;
  let totalCr = 0;

  r.proposals.forEach((p) => {
    if (p.dr) {
      totalDr += p.amount;
      parts.push([
        "moss",
        "DR ",
        "v",
        `${p.dr.padEnd(38).slice(0, 38)} `,
        "k",
        `$${p.amount.toFixed(2)}`,
      ]);
      if (p.ev) parts.push(["c", `   └─ ${p.ev}`]);
    } else if (p.cr) {
      totalCr += p.amount;
      parts.push([
        "red",
        "CR ",
        "v",
        `${p.cr.padEnd(38).slice(0, 38)} `,
        "k",
        `$${p.amount.toFixed(2)}`,
      ]);
      if (p.ev) parts.push(["c", `   └─ ${p.ev}`]);
    }
  });

  parts.push(["c", ""]);
  parts.push(["c", "// deterministic core: balancing check"]);
  const balanced = Math.abs(totalDr - totalCr) < 0.01;
  parts.push(["k", "sum_debits  ", "v", `$${totalDr.toFixed(2)}`]);
  parts.push(["k", "sum_credits ", "v", `$${totalCr.toFixed(2)}`]);
  parts.push([
    balanced ? "moss" : "red",
    balanced ? "✓ balanced — posting to ledger" : "✗ unbalanced — rejected",
    "c",
    "",
  ]);

  if (r.flags.length) {
    parts.push(["c", ""]);
    parts.push(["c", "// auditor agent notes"]);
    r.flags.forEach((f) => parts.push(["k", "⚑ ", "v", f]));
  }

  parts.push(["c", ""]);
  parts.push(["c", `// tax counsel: ${r.tax}`]);
  parts.push(["c", ""]);
  parts.push([
    "moss",
    "◉ committed",
    "v",
    `  entry_id=${Math.random().toString(36).slice(2, 11).toUpperCase()}  hash=${Math.random().toString(36).slice(2, 10)}`,
  ]);

  const lines = parts.map((p) => ({ html: lineHtml(p), visible: false }));
  const committedAt = 120 + lines.length * 65;

  return { lines, committedAt };
}
