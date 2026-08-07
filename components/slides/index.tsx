import { AgentFleetSlide, title as agentFleetTitle, variant as agentFleetVariant } from "./AgentFleet";
import { BusinessModelSlide, title as businessModelTitle, variant as businessModelVariant } from "./BusinessModel";
import { CompetitiveSlide, title as competitiveTitle, variant as competitiveVariant } from "./Competitive";
import { ContentsSlide, title as contentsTitle, variant as contentsVariant } from "./Contents";
import { CoverSlide, title as coverTitle, variant as coverVariant } from "./Cover";
import { LiveDemoSlide, title as liveDemoTitle, variant as liveDemoVariant } from "./LiveDemo";
import { TheAskSlide, title as theAskTitle, variant as theAskVariant } from "./TheAsk";
import { TheBetSlide, title as theBetTitle, variant as theBetVariant } from "./TheBet";
import { TheIncumbentSlide, title as theIncumbentTitle, variant as theIncumbentVariant } from "./TheIncumbent";
import { ThePlanSlide, title as thePlanTitle, variant as thePlanVariant } from "./ThePlan";
import { ThreePillarsSlide, title as threePillarsTitle, variant as threePillarsVariant } from "./ThreePillars";
import type { SlidesProps } from "./types";

export type { SlidesProps } from "./types";

/** Active deck order. Hidden slides (Experts, Architecture) live beside these files. */
export const SLIDE_TITLES = [
  coverTitle,
  contentsTitle,
  theBetTitle,
  theIncumbentTitle,
  threePillarsTitle,
  agentFleetTitle,
  liveDemoTitle,
  competitiveTitle,
  businessModelTitle,
  thePlanTitle,
  theAskTitle,
] as const;

export const SLIDE_VARIANTS = [
  coverVariant,
  contentsVariant,
  theBetVariant,
  theIncumbentVariant,
  threePillarsVariant,
  agentFleetVariant,
  liveDemoVariant,
  competitiveVariant,
  businessModelVariant,
  thePlanVariant,
  theAskVariant,
] as const;

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
      <CoverSlide className={slideClass(0, coverVariant)} />
      <ContentsSlide className={slideClass(1, contentsVariant)} goTo={goTo} />
      <TheBetSlide className={slideClass(2, theBetVariant)} />
      <TheIncumbentSlide className={slideClass(3, theIncumbentVariant)} />
      <ThreePillarsSlide className={slideClass(4, threePillarsVariant)} />
      <AgentFleetSlide className={slideClass(5, agentFleetVariant)} />
      <LiveDemoSlide
        className={slideClass(6, liveDemoVariant)}
        loadPreset={loadPreset}
        runDemo={runDemo}
        demoInputRef={demoInputRef}
        demoPanelRef={demoPanelRef}
        demoStatus={demoStatus}
        demoLines={demoLines}
      />
      <CompetitiveSlide className={slideClass(7, competitiveVariant)} />
      <BusinessModelSlide className={slideClass(8, businessModelVariant)} />
      <ThePlanSlide className={slideClass(9, thePlanVariant)} />
      <TheAskSlide
        className={slideClass(10, theAskVariant)}
        goTo={goTo}
        toggleOverview={toggleOverview}
      />
    </>
  );
}
