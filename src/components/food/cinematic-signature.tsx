"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { curly } from "../../../data/curly";
import { useDesktop } from "@/lib/use-desktop";

function SignatureStill() {
  const beat = curly.cinematic.signature;
  return (
    <section id="cocktails" className="bg-hero px-[var(--page-gutter)] py-[var(--space-3xl)] text-ink">
      <div className="mx-auto max-w-[var(--page-max)]">
        <p className="section-subtitle text-accent">{beat.kicker}</p>
        <h2 className="mt-4 font-display text-[length:var(--text-display-s)] capitalize text-accent">
          {beat.title}
        </h2>
        <p className="mt-4 max-w-[16ch] font-display text-[length:var(--text-2xl)] capitalize leading-[1.05] text-ink">
          {beat.line}
        </p>
        <div className="relative mt-[var(--space-xl)] aspect-[4/5] overflow-hidden bg-paper-2 md:aspect-[16/9]">
          <Image
            src={beat.image}
            alt={beat.imageAlt}
            fill
            className="object-contain p-6 md:p-10"
            sizes="100vw"
          />
        </div>
        <p className="mt-5 font-display text-[length:var(--text-xl)] capitalize text-accent">
          {beat.dish}
        </p>
        <p className="mt-1 text-[length:var(--text-sm)] text-ink-2">{beat.note}</p>
        <p className="mt-4 text-[length:var(--text-caption)] uppercase tracking-[0.14em] text-ink-muted">
          {curly.stockNotice}
        </p>
      </div>
    </section>
  );
}

export function CinematicSignature() {
  const reduced = useReducedMotion();
  const desktop = useDesktop();
  const ref = useRef<HTMLElement>(null);
  const beat = curly.cinematic.signature;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  if (reduced || !desktop) {
    return <SignatureStill />;
  }

  return (
    <section ref={ref} id="cocktails" className="relative h-[180vh] bg-hero text-ink">
      <div className="sticky top-[var(--banner-height)] h-[calc(100svh-var(--banner-height))] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <Image
            src={beat.image}
            alt={beat.imageAlt}
            fill
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hero/90 via-hero/50 to-hero/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-hero/70 via-transparent to-hero/20" />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="relative z-10 flex h-full flex-col justify-between px-[var(--page-gutter)] py-[var(--space-3xl)]"
        >
          <div className="mx-auto flex w-full max-w-[var(--page-max)] items-start justify-between gap-8">
            <p className="section-subtitle text-accent">{beat.kicker}</p>
            <p className="section-subtitle text-accent">{beat.title}</p>
          </div>

          <div className="mx-auto w-full max-w-[var(--page-max)]">
            <h2 className="max-w-[12ch] font-display text-[length:var(--text-display)] capitalize leading-[1.05] text-ink">
              {beat.line}
            </h2>
            <p className="mt-8 font-display text-[length:var(--text-xl)] capitalize text-accent">
              {beat.dish}
            </p>
            <p className="mt-2 text-[length:var(--text-sm)] text-ink-2">{beat.note}</p>
            <p className="mt-6 text-[length:var(--text-caption)] uppercase tracking-[0.14em] text-ink-muted">
              {curly.stockNotice}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
