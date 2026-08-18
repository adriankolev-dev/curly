"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { curly } from "../../../data/curly";

export function Hero() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const slides = curly.heroSlides;
  const slide = slides[index] ?? slides[0];

  const next = useCallback(() => {
    setIndex((current) => (current + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setIndex((current) => (current - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(next, 6000);
    return () => window.clearInterval(timer);
  }, [next, reduced]);

  return (
    <section className="relative min-h-svh overflow-hidden bg-hero text-ink">
      <div className="absolute inset-0">
        <Image
          src={curly.heroImage.src}
          alt={curly.heroImage.alt}
          fill
          priority
          quality={90}
          className="object-cover object-[center_45%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/75 via-hero/40 to-hero/25" />
      </div>

      <div className="pointer-events-none absolute right-[var(--page-gutter)] top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
        <p className="font-display text-[length:var(--text-caption)] uppercase tracking-[0.3em] text-ink/70 [writing-mode:vertical-rl]">
          Последвай ни
        </p>
        <div className="h-16 w-px bg-rule" />
        <div className="pointer-events-auto flex flex-col gap-3">
          <Link
            href={curly.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
            aria-label="Facebook"
          >
            FB
          </Link>
          <Link
            href={curly.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
            aria-label="Instagram"
          >
            IG
          </Link>
        </div>
      </div>

      <div className="relative z-10 flex min-h-svh flex-col justify-center px-[var(--page-gutter)] pb-28 pt-[calc(var(--header-top-height)+4rem)] md:pt-[calc(var(--banner-height)+5rem)]">
        <div key={slide.id} className="mx-auto w-full max-w-[var(--page-max)]">
          <p
            className={`max-w-xl text-[length:var(--text-lg)] text-ink/85 ${
              reduced ? "" : "hero-enter hero-enter-delay-1"
            }`}
          >
            {slide.kicker}
          </p>
          <h1 className="mt-6 uppercase">
            <span
              className={`block font-display text-[length:var(--text-hero)] leading-[1.02] text-ink ${
                reduced ? "" : "hero-enter hero-enter-delay-2"
              }`}
            >
              {slide.title}
            </span>
            <span
              className={`mt-2 block font-display text-[length:var(--text-hero)] leading-[1.02] text-accent md:ml-[10%] ${
                reduced ? "" : "hero-enter hero-enter-delay-3"
              }`}
            >
              {slide.titleLine2}
            </span>
          </h1>
          <div
            className={`mt-10 flex flex-wrap items-center gap-5 ${
              reduced ? "" : "hero-enter hero-enter-delay-4"
            }`}
          >
            <Link href="#menu" className="btn-elegencia">
              Към менюто
            </Link>
            <Link href="#reserve" className="btn-ghost">
              Резервация
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-[var(--page-gutter)] z-20 flex items-center gap-4">
        <button
          type="button"
          onClick={prev}
          className="group relative flex size-14 items-center justify-center text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
          aria-label="Предишен слайд"
        >
          <span className="absolute inset-0 rounded-full border border-rule transition-transform group-hover:scale-110" />
          <span aria-hidden>←</span>
        </button>
        <button
          type="button"
          onClick={next}
          className="group relative flex size-14 items-center justify-center text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
          aria-label="Следващ слайд"
        >
          <span className="absolute inset-0 rounded-full border border-rule transition-transform group-hover:scale-110" />
          <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}
