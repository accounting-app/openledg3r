import type { RefObject } from "react";
import type { DemoLine } from "@/lib/demo";

export type SlidesProps = {
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
