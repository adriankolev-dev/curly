"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { curly } from "../../../data/curly";

function QuoteMark({ flip }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 120"
      width="48"
      height="120"
      aria-hidden
      className={`shrink-0 text-accent/35 ${flip ? "scale-x-[-1]" : ""}`}
    >
      <path
        d="M8 4 C8 40 28 52 28 88 L28 116"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M36 4 C36 40 20 52 20 88 L20 116"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const enterEase = [0.7, -0.56, 0.27, 1.6] as const;

export function TestimonialsSection() {
  const reduced = useReducedMotion();
  const slides = curly.testimonials;
  const [index, setIndex] = useState(0);
  const slide = slides[index] ?? slides[0];

  const next = useCallback(() => {
    setIndex((current) => (current + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setIndex((current) => (current - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(next, 7000);
    return () => window.clearInterval(timer);
  }, [next, reduced]);

  const item = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: enterEase },
    }),
  };

  return (
    <section className="bg-paper py-[var(--space-3xl)]">
      <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-gutter)]">
        <div className="flex min-w-0 items-end justify-between gap-6">
          <QuoteMark />

          <div className="min-w-0 flex-1 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={reduced ? false : "hidden"}
                animate="visible"
                exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
              >
                <motion.p
                  variants={item}
                  custom={0.6}
                  className="font-display text-[length:var(--text-xl)] capitalize text-accent"
                >
                  {slide.source}
                </motion.p>
                <motion.p
                  variants={item}
                  custom={1}
                  className="mt-1 text-[length:var(--text-sm)] text-ink"
                >
                  {slide.meta}
                </motion.p>
                <motion.blockquote
                  variants={item}
                  custom={1.2}
                  className="mx-auto mt-8 max-w-[36rem] font-display text-[length:var(--text-lg)] italic leading-relaxed text-ink md:text-[length:var(--text-xl)]"
                >
                  &ldquo;{slide.quote}&rdquo;
                </motion.blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          <QuoteMark flip />
        </div>

        <div className="mt-[var(--space-xl)] flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="group relative flex size-12 items-center justify-center text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
            aria-label="Предишен отзив"
          >
            <span className="absolute inset-0 rounded-full border border-rule transition-transform group-hover:scale-110" />
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            onClick={next}
            className="group relative flex size-12 items-center justify-center text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
            aria-label="Следващ отзив"
          >
            <span className="absolute inset-0 rounded-full border border-rule transition-transform group-hover:scale-110" />
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
