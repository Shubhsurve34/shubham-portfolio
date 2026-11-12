"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* ----------------------------------------------------------------------------
   Shared helpers
   ------------------------------------------------------------------------- */

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Marks an element with data-seen="true" the first time it scrolls into view.
 * CSS decides what "seen" means (a stamp landing, bars filling in).
 */
export function useSeen<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      el.dataset.seen = "true";
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.seen = "true";
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function Seen({
  as: Tag = "div",
  className,
  children,
}: {
  as?: "div" | "li" | "ol";
  className?: string;
  children: ReactNode;
}) {
  const ref = useSeen<HTMLElement>();
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className} data-seen="false">
      {children}
    </Tag>
  );
}

/* ----------------------------------------------------------------------------
   Hero name: letters widen near the cursor (Anybody's width axis)
   ------------------------------------------------------------------------- */

const REST = 62;
const PEAK = 112;
const REACH = 240;

export function StretchName({ lines }: { lines: string[] }) {
  const rootRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const letters = Array.from(root.querySelectorAll<HTMLSpanElement>(".name-letter"));
    let frame = 0;
    let pointer: { x: number; y: number } | null = null;

    const paint = () => {
      frame = 0;
      for (const letter of letters) {
        let width = REST;
        if (pointer) {
          const box = letter.getBoundingClientRect();
          const dx = pointer.x - (box.left + box.width / 2);
          const dy = pointer.y - (box.top + box.height / 2);
          const pull = Math.max(0, 1 - Math.hypot(dx, dy) / REACH);
          width = REST + (PEAK - REST) * pull * pull;
        }
        letter.style.fontVariationSettings = `"wdth" ${width.toFixed(1)}`;
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const hero = root.closest(".hero") ?? root;
    const onMove = (event: Event) => {
      const e = event as PointerEvent;
      if (e.pointerType !== "mouse") return;
      pointer = { x: e.clientX, y: e.clientY };
      schedule();
    };
    const onLeave = () => {
      pointer = null;
      schedule();
    };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  let index = 0;
  return (
    <h1 ref={rootRef} className="hero-name" aria-label={lines.join(" ")}>
      {lines.map((line, lineIndex) => (
        <span key={line} className="name-line" aria-hidden="true">
          {Array.from(line).map((char, charIndex) => {
            const i = index++;
            return (
              <span
                key={`${lineIndex}-${charIndex}`}
                className="name-letter"
                style={{ ["--i" as string]: i }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

/* ----------------------------------------------------------------------------
   Work pass: tilts toward the cursor, turns over to show the back
   ------------------------------------------------------------------------- */

export function WorkPass({ front, back }: { front: ReactNode; back: ReactNode }) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const tilt = tiltRef.current;
    const holder = tilt?.parentElement?.parentElement;
    if (!tilt || !holder || prefersReducedMotion()) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let target = { rx: 0, ry: 0, mx: 50, my: 30 };

    const paint = () => {
      frame = 0;
      tilt.style.setProperty("--rx", `${target.rx.toFixed(2)}deg`);
      tilt.style.setProperty("--ry", `${target.ry.toFixed(2)}deg`);
      tilt.style.setProperty("--mx", `${target.mx.toFixed(1)}%`);
      tilt.style.setProperty("--my", `${target.my.toFixed(1)}%`);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const box = tilt.getBoundingClientRect();
      const px = (event.clientX - box.left) / box.width;
      const py = (event.clientY - box.top) / box.height;
      const cx = Math.min(Math.max(px, -0.25), 1.25);
      const cy = Math.min(Math.max(py, -0.25), 1.25);
      target = {
        rx: (0.5 - cy) * 14,
        ry: (cx - 0.5) * 18,
        mx: cx * 100,
        my: cy * 100,
      };
      tilt.dataset.live = "true";
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      target = { rx: 0, ry: 0, mx: 50, my: 30 };
      tilt.dataset.live = "false";
      if (!frame) frame = requestAnimationFrame(paint);
    };

    holder.addEventListener("pointermove", onMove);
    holder.addEventListener("pointerleave", onLeave);
    return () => {
      holder.removeEventListener("pointermove", onMove);
      holder.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pass-holder">
      <div className="pass-enter">
        <div ref={tiltRef} className="pass-tilt" data-live="false">
          <div className={`pass-card${flipped ? " is-flipped" : ""}`}>
            <article className="pass pass-front" aria-label="Work pass" inert={flipped}>
              {front}
              <button
                type="button"
                className="pass-turn"
                onClick={() => setFlipped(true)}
              >
                Turn over
              </button>
              <span className="pass-sheen" aria-hidden="true" />
            </article>
            <article
              className="pass pass-back"
              aria-label="Back of the work pass"
              inert={!flipped}
            >
              {back}
              <button
                type="button"
                className="pass-turn"
                onClick={() => setFlipped(false)}
              >
                Turn back
              </button>
              <span className="pass-sheen" aria-hidden="true" />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
