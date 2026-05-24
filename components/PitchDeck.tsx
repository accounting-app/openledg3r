"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { Slides, SLIDE_TITLES } from "@/components/Slides";
import { buildDemoLines, DEMO_PRESETS, type DemoLine } from "@/lib/demo";
import {
  slideIndexFromPath,
  slidePath,
  TOTAL_SLIDES as TOTAL,
} from "@/lib/slides";

export function PitchDeck() {
  const pathname = usePathname();
  const router = useRouter();
  const current = slideIndexFromPath(pathname);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [demoStatus, setDemoStatus] = useState("awaiting input");
  const [demoLines, setDemoLines] = useState<DemoLine[]>([]);
  const demoInputRef = useRef<HTMLTextAreaElement>(null);
  const demoPanelRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchSwipeActive = useRef(false);
  const demoTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const shouldIgnoreSwipe = useCallback((target: EventTarget | null) => {
    if (!(target instanceof Element)) return true;
    return !!target.closest(
      "textarea, input, button, select, a, .overview, .demo-input, .toc-row, .compare-scroll"
    );
  }, []);

  const showSlide = useCallback(
    (idx: number, { push = false }: { push?: boolean } = {}) => {
      const normalized = ((idx % TOTAL) + TOTAL) % TOTAL;
      const path = slidePath(normalized);
      if (path === pathname) return;
      if (push) router.push(path, { scroll: false });
      else router.replace(path, { scroll: false });
    },
    [pathname, router]
  );

  const next = useCallback(() => showSlide(current + 1), [current, showSlide]);
  const prev = useCallback(() => showSlide(current - 1), [current, showSlide]);

  const goTo = useCallback(
    (idx: number) => {
      setOverviewOpen(false);
      showSlide(idx, { push: true });
    },
    [showSlide]
  );

  const toggleOverview = useCallback(() => {
    setOverviewOpen((o) => !o);
  }, []);

  const slideClass = useCallback(
    (index: number, variant: string) =>
      `${variant}${current === index ? " active" : ""}`,
    [current]
  );

  const loadPreset = useCallback((i: number) => {
    if (demoInputRef.current) {
      demoInputRef.current.value = DEMO_PRESETS[i];
    }
  }, []);

  const runDemo = useCallback(() => {
    demoTimers.current.forEach(clearTimeout);
    demoTimers.current = [];

    const input = demoInputRef.current?.value.trim() ?? "";
    setDemoLines([]);
    setDemoStatus("parsing intent…");

    const { lines, committedAt } = buildDemoLines(input);
    setDemoLines(lines);

    lines.forEach((_, i) => {
      const t = setTimeout(() => {
        setDemoLines((prev) =>
          prev.map((line, li) =>
            li === i ? { ...line, visible: true } : line
          )
        );
      }, 110 + i * 65);
      demoTimers.current.push(t);
    });

    const statusTimer = setTimeout(() => {
      setDemoStatus(`committed · ${new Date().toLocaleTimeString()}`);
    }, committedAt);
    demoTimers.current.push(statusTimer);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        next();
        e.preventDefault();
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        prev();
        e.preventDefault();
      }
      if (e.key === "Home") showSlide(0);
      if (e.key === "End") showSlide(TOTAL - 1);
      if (e.key === "o" || e.key === "O") toggleOverview();
      if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) {
          void document.documentElement.requestFullscreen();
        } else {
          void document.exitFullscreen();
        }
      }
      if (e.key === "Escape") setOverviewOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [next, prev, showSlide, toggleOverview]);

  useEffect(() => {
    const active = document.querySelector(".slide.active");
    if (active instanceof HTMLElement) {
      active.scrollTop = 0;
    }
  }, [current]);

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      if (overviewOpen || shouldIgnoreSwipe(e.target)) {
        touchSwipeActive.current = false;
        return;
      }
      touchSwipeActive.current = true;
      touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (!touchSwipeActive.current || shouldIgnoreSwipe(e.target)) {
        touchSwipeActive.current = false;
        return;
      }
      touchSwipeActive.current = false;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 50) {
        if (dx < 0) next();
        else prev();
      }
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev, shouldIgnoreSwipe, overviewOpen]);

  useEffect(() => {
    return () => demoTimers.current.forEach(clearTimeout);
  }, []);

  const progressPct = ((current + 1) / TOTAL) * 100;
  const slideNum = String(current + 1).padStart(2, "0");
  const totalNum = String(TOTAL).padStart(2, "0");
  const slideLabel = `${slideNum} / ${totalNum} — ${SLIDE_TITLES[current]}`;

  return (
    <>
      <div className="chrome-brand">
        {/* <Logo className="brand-logo" variant="full" /> */}
        <span className="chrome-brand-text">
          <span className="brand">OPEN·LEDGER</span>
          <span className="chrome-brand-extra"> · PITCH DECK</span>
        </span>
      </div>

      <div className="chrome-top">
        <span>22 MAY 2026</span>
      </div>

      <div className="chrome-bottom">
        <span>
          <span className="slide-label-full">{slideLabel}</span>
          <span className="slide-label-short">
            {slideNum} / {totalNum}
          </span>
        </span>
        <div className="progress">
          <span style={{ width: `${progressPct}%` }} />
        </div>
        <span>FOR REVIEW</span>
      </div>

      <div className="hint">
        <kbd>←</kbd>
        <kbd>→</kbd> navigate · <kbd>O</kbd> overview · <kbd>F</kbd> fullscreen
      </div>

      <div className="nav">
        <button type="button" className="menu" onClick={toggleOverview}>
          Slides
        </button>
        <button type="button" onClick={prev}>
          ‹
        </button>
        <button type="button" onClick={next}>
          ›
        </button>
      </div>

      <div className="stage" id="stage">
        <Slides
          slideClass={slideClass}
          goTo={goTo}
          loadPreset={loadPreset}
          runDemo={runDemo}
          toggleOverview={toggleOverview}
          demoInputRef={demoInputRef}
          demoPanelRef={demoPanelRef}
          demoStatus={demoStatus}
          demoLines={demoLines}
        />
      </div>

      <div className={`overview${overviewOpen ? " show" : ""}`} id="overview">
        <button type="button" className="close" onClick={toggleOverview}>
          ×
        </button>
        <h2>Eleven chapters · one ledger.</h2>
        <div className="grid" id="overviewGrid">
          {SLIDE_TITLES.map((title, i) => (
            <Link
              key={title}
              href={slidePath(i)}
              className="card"
              onClick={() => setOverviewOpen(false)}
            >
              <div className="n">{String(i + 1).padStart(2, "0")}</div>
              <div className="t">{title}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
