import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate, useNavigationType, type Location } from "react-router-dom";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useIsPresent,
  usePresenceData,
  useReducedMotion,
  type MotionValue,
  type Variants,
} from "motion/react";

/**
 * Web adaptation of snail-z/DawnTransition (iOS).
 *
 *  push / pull      → navigating between top-level sections. The new page slides
 *                     in from the right while the old one parallaxes 28% to the
 *                     left with an edge shadow; going back reverses it.
 *  pageIn / pageOut → opening a case study. The page underneath scales to 0.95,
 *                     rounds its corners and dims 10% while the detail page
 *                     covers it (iOS modal). Going back uncovers it.
 *  fade             → prefers-reduced-motion.
 *
 * Lazy routes: there is deliberately no Suspense boundary inside a layer. React
 * Router wraps navigations in startTransition, so React keeps the current page
 * on screen until the next page's chunk has loaded and the transition then
 * plays with real content instead of a loading placeholder.
 *
 * Plus the library's signature interactive swipe-back: on touch devices drag from
 * the left edge to pull the current page away; release past 50% (translation +
 * velocity, same rule as DawnPanGestureRecognizer) to go back, otherwise it snaps.
 */

export type DawnKind = "push" | "pull" | "pageIn" | "pageOut" | "fade";

interface DawnCustom {
  kind: DawnKind;
  /** window.scrollY at the moment the outgoing page was left */
  scrollY: number;
  /** layout width in px — slides use px so a swipe can hand over to the exit animation */
  w: number;
}

// DawnTransitionAdjustable defaults: 0.295s easeInOut. Slightly longer on web.
const DURATION = 0.32;
const EASE = [0.42, 0, 0.58, 1] as const;
const PARALLAX = 0.28; // .defaultHorizontalOffset → 28% of the screen width
const MODAL_SCALE = 0.95; // .pageIn / .pageOut default scale
const MODAL_OVERLAY = 0.1; // .defaultOverlay → (black, 0.1)
const MODAL_RADIUS = 12; // .defaultCorner (6pt on iOS)
const EDGE_SHADOW = "-8px 0 24px rgba(40, 0, 44, 0.12)";
const NO_SHADOW = "-8px 0 24px rgba(40, 0, 44, 0)";
const NAV_HEIGHT = "5rem"; // must match <main className="pt-20">
const EDGE_ZONE = 32; // px from the left edge that starts a swipe-back
const SWIPE_LOCK = 8; // px of movement before a gesture is claimed
// DawnPanGestureRecognizer commits when (translation + velocity) / width > 0.5
// with velocity in pt/s. Browsers report much higher touch velocities than
// UIKit, so the velocity is projected over 200ms instead of a full second.
const SWIPE_PROJECTION = 0.2;

const base = { duration: DURATION, ease: EASE };

const variants: Variants = {
  initial: (c: DawnCustom) => {
    switch (c.kind) {
      case "push":
        return { x: c.w, scale: 1, opacity: 1, boxShadow: EDGE_SHADOW, "--dawn-overlay": 0 };
      case "pageIn":
        return { x: c.w, scale: 1, opacity: 1, boxShadow: EDGE_SHADOW, "--dawn-overlay": 0 };
      case "pull":
        return { x: -c.w * PARALLAX, scale: 1, opacity: 1, boxShadow: NO_SHADOW, "--dawn-overlay": 0 };
      case "pageOut":
        return { x: 0, scale: MODAL_SCALE, opacity: 1, boxShadow: NO_SHADOW, "--dawn-overlay": MODAL_OVERLAY };
      default:
        return { x: 0, scale: 1, opacity: 0, boxShadow: NO_SHADOW, "--dawn-overlay": 0 };
    }
  },
  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    borderRadius: 0,
    boxShadow: NO_SHADOW,
    "--dawn-overlay": 0,
    transition: base,
  },
  exit: (c: DawnCustom) => {
    switch (c.kind) {
      case "push":
        return { x: -c.w * PARALLAX, transition: base };
      case "pageIn":
        return { scale: MODAL_SCALE, borderRadius: MODAL_RADIUS, "--dawn-overlay": MODAL_OVERLAY, transition: base };
      case "pull":
        return { x: c.w, boxShadow: EDGE_SHADOW, transition: base };
      case "pageOut":
        return { x: c.w, borderRadius: 0, boxShadow: EDGE_SHADOW, transition: base };
      default:
        return { opacity: 0, transition: { duration: 0.18 } };
    }
  },
};

function stripLang(pathname: string) {
  return pathname.replace(/^\/(en|tr)(?=\/|$)/, "") || "/";
}

/** 0 = home, 1 = section page, 2 = case study (opens as a "modal" over its parent) */
function depth(pathname: string) {
  const p = stripLang(pathname);
  if (p === "/") return 0;
  if (/^\/(projects|case-study)\//.test(p)) return 2;
  return 1;
}

function resolveKind(from: string, to: string, isBack: boolean): DawnKind {
  const df = depth(from);
  const dt = depth(to);
  if (isBack || dt < df) return df >= 2 ? "pageOut" : "pull";
  return dt >= 2 ? "pageIn" : "push";
}

function historyIndex(): number {
  const idx = (window.history.state as { idx?: number } | null)?.idx;
  return typeof idx === "number" ? idx : 0;
}

function layoutWidth() {
  return document.documentElement.clientWidth;
}

// ---------------------------------------------------------------------------

interface NavState {
  key: string; // pathname without the language prefix — switching EN/TR is not a transition
  idx: number;
  kind: DawnKind;
  scrollY: number;
}

export function DawnTransition({ children }: { children: (location: Location) => React.ReactNode }) {
  const location = useLocation();
  const navigationType = useNavigationType();
  const reduced = useReducedMotion();
  const key = stripLang(location.pathname);

  // Derived during render so AnimatePresence gets the direction *before* the
  // outgoing page starts its exit. Only mutates when the route key changes, so
  // it is stable across StrictMode's double render.
  const state = useRef<NavState>({ key, idx: historyIndex(), kind: "push", scrollY: 0 });
  if (state.current.key !== key) {
    const prev = state.current;
    const idx = historyIndex();
    const isBack = navigationType === "POP" && idx < prev.idx;
    state.current = {
      key,
      idx,
      kind: reduced ? "fade" : resolveKind(prev.key, key, isBack),
      scrollY: window.scrollY,
    };
  } else {
    state.current.idx = historyIndex();
  }

  const custom: DawnCustom = {
    kind: state.current.kind,
    scrollY: state.current.scrollY,
    w: typeof window === "undefined" ? 0 : layoutWidth(),
  };

  // The browser must not restore the old scroll position on back/forward:
  // the outgoing layer is pinned where the user left it and the new page
  // always enters at the top, like a freshly pushed view controller.
  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
  }, []);

  // New page: start at the top. Same page with a hash: scroll to the section.
  useLayoutEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="sync" initial={false} custom={custom}>
      <Layer key={key} custom={custom}>
        {children(location)}
      </Layer>
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------

function Layer({ custom, children }: { key?: string; custom: DawnCustom; children: React.ReactNode }) {
  const isPresent = useIsPresent();
  // For the outgoing page AnimatePresence re-renders us with stale props; the
  // fresh direction/scroll snapshot arrives through presence data instead.
  const ctx = (usePresenceData() as DawnCustom | undefined) ?? custom;
  const x = useMotionValue(0);
  const boxShadow = useMotionValue(NO_SHADOW);
  const navigate = useNavigate();
  const layerRef = useRef<HTMLDivElement>(null);

  // Outgoing page: pin it to the viewport where the user left it, on top of or
  // beneath the incoming page depending on the direction (DawnTransition's
  // subviewsHierarchy: push/pageIn → [.from, .to], pull/pageOut → [.to, .from]).
  const exiting = !isPresent;
  const above = ctx.kind === "pull" || ctx.kind === "pageOut";

  useSwipeBack(layerRef, x, boxShadow, isPresent, ctx.w, () => navigate(-1));

  return (
    <motion.div
      ref={layerRef}
      className="dawn-layer"
      custom={ctx}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        x,
        boxShadow,
        position: exiting ? "absolute" : "relative",
        top: exiting ? NAV_HEIGHT : undefined,
        left: 0,
        right: 0,
        height: exiting ? `calc(100vh - ${NAV_HEIGHT})` : undefined,
        overflow: exiting ? "hidden" : undefined,
        zIndex: exiting ? (above ? 2 : 0) : 1,
        transformOrigin: exiting ? "50% 50%" : `50% calc(50vh - ${NAV_HEIGHT} / 2)`,
        backgroundColor: "var(--color-surface)",
        willChange: "transform",
      }}
    >
      <div style={exiting ? { transform: `translateY(-${ctx.scrollY}px)` } : undefined}>{children}</div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------

/**
 * Interactive swipe-back, after DawnPanGestureRecognizer:
 *  - recognised only from the left edge, only when the gesture is more
 *    horizontal than vertical, and only when there is history to go back to
 *  - the page follows the finger (x and the edge shadow are the same
 *    MotionValues the exit animation drives, so releasing past the threshold
 *    hands over seamlessly)
 *  - commit when the projected position passes half the width, else snap back
 *    at a speed proportional to how far it was dragged (completionSpeed)
 */
function useSwipeBack(
  ref: React.RefObject<HTMLDivElement | null>,
  x: MotionValue<number>,
  boxShadow: MotionValue<string>,
  enabled: boolean,
  width: number,
  onBack: () => void,
) {
  const onBackRef = useRef(onBack);
  onBackRef.current = onBack;

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    if (!window.matchMedia("(pointer: coarse)").matches) return;

    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastT = 0;
    let velocity = 0; // px/s
    let phase: "idle" | "pending" | "tracking" | "rejected" = "idle";

    const onStart = (e: TouchEvent) => {
      if (e.touches.length !== 1 || historyIndex() === 0) return;
      const t = e.touches[0];
      if (t.clientX > EDGE_ZONE) return;
      startX = lastX = t.clientX;
      startY = t.clientY;
      lastT = e.timeStamp;
      velocity = 0;
      phase = "pending";
    };

    const onMove = (e: TouchEvent) => {
      if (phase === "idle" || phase === "rejected") return;
      const t = e.touches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;

      if (phase === "pending") {
        if (Math.abs(dx) < SWIPE_LOCK && Math.abs(dy) < SWIPE_LOCK) return;
        if (dx <= 0 || Math.abs(dy) > Math.abs(dx)) {
          phase = "rejected";
          return;
        }
        phase = "tracking";
        boxShadow.set(EDGE_SHADOW);
      }

      e.preventDefault();
      const dt = e.timeStamp - lastT;
      if (dt > 0) velocity = ((t.clientX - lastX) / dt) * 1000;
      lastX = t.clientX;
      lastT = e.timeStamp;
      x.set(Math.max(0, dx));
    };

    const onEnd = () => {
      if (phase !== "tracking") {
        phase = "idle";
        return;
      }
      phase = "idle";
      const w = width || layoutWidth();
      const translation = x.get();
      const progress = Math.min(1, translation / w);

      if ((translation + velocity * SWIPE_PROJECTION) / w > 0.5) {
        onBackRef.current();
      } else {
        animate(x, 0, { duration: Math.max(0.12, DURATION * progress), ease: EASE }).then(() => {
          boxShadow.set(NO_SHADOW);
        });
      }
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", onEnd);
    el.addEventListener("touchcancel", onEnd);
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("touchcancel", onEnd);
    };
  }, [ref, x, boxShadow, enabled, width]);
}
