/** Shape definitions for structured pitch-deck content. */

export type RichPart = string | { em: string };

export type TocItem = {
  num: string;
  slideIndex: number;
  duration: string;
  /** Classic pitch-deck slot(s) this chapter maps to. */
  classic: string;
  label: readonly RichPart[];
};

export type StatItem = {
  value: string;
  suffix?: string;
  label: string;
};

export type WhyItem = {
  badge: string;
  heading: readonly RichPart[];
  body: string;
};

export type Pillar = {
  num: string;
  reveal: string;
  heading: string;
  paragraphs: readonly (string | readonly RichPart[])[];
  tagline: string;
};

export type Subagent = {
  name: string;
  desc: string;
};

export type FleetAgent = {
  icon: string;
  tag: string;
  name: string;
  desc: string;
  wide?: boolean;
  subagents?: readonly Subagent[];
};

export type ComparePillTone = "yes" | "no" | "partial";

export type ComparePill = {
  label: string;
  tone: ComparePillTone;
};

export type CompareRow = {
  name: string;
  highlight?: boolean;
  openSource: ComparePill;
  agentic: ComparePill;
  selfHost: ComparePill;
  audit: ComparePill;
  price: string;
  priceStrong?: boolean;
};

export type BizTier = {
  label: string;
  headline: string;
  price: string;
  priceNote: string;
  highlight?: boolean;
  reveal: string;
  features: readonly string[];
  footnote?: string;
};

export type FundAllocation = {
  pct: string;
  name: string;
  desc: string;
};

export type TimelineItem = {
  quarter: string;
  title: string;
  desc: string;
};

export type AskMilestone = {
  strong: string;
  label: string;
};

export type MetaCol = {
  label: string;
  value: string;
};
