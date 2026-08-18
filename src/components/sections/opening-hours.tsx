"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { curly } from "../../../data/curly";

const revealEase = [0.65, 0, 0.35, 1] as const;
const popEase = [0.7, -0.56, 0.27, 1.6] as const;

export function OpeningHoursSection() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="bg-paper py-[var(--space-3xl)]">
      <div className="mx-auto grid max-w-[var(--page-max)] min-w-0 grid-cols-1 items-center gap-[var(--space-2xl)] px-[var(--page-gutter)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-[var(--space-3xl)]">
        <figure className="relative min-h-[18rem] overflow-hidden lg:min-h-[34rem]">
          <motion.div
            className="absolute inset-0"
            initial={reduced ? false : { scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, ease: revealEase }}
          >
            <Image
              src={curly.images.garden}
              alt="Градината на CURly Gabrovo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </motion.div>
          {!reduced && (
            <motion.div
              className="absolute inset-0 z-10 bg-paper"
              initial={{ y: "0%" }}
              whileInView={{ y: "-100%" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.85, ease: revealEase }}
              aria-hidden
            />
          )}
        </figure>

        <div className="min-w-0 lg:py-[var(--space-lg)]">
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: popEase }}
            className="font-display text-[length:var(--text-display-s)] capitalize text-accent"
          >
            Работно време
          </motion.h2>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.7, -0.56, 0.27, 1.6] }}
            className="mt-6 max-w-prose text-[length:var(--text-md)] leading-relaxed text-ink-2"
          >
            {curly.location.context}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.7, -0.56, 0.27, 1.6] }}
            className="mt-10 max-w-md space-y-4"
          >
            <div>
              <p className="text-[length:var(--text-lg)] uppercase tracking-[0.06em] text-ink">
                {curly.openingHours.notice}
              </p>
              <div className="mt-3 h-px w-full max-w-[22rem] bg-accent/25" />
            </div>
            <div>
              <p className="text-[length:var(--text-md)] uppercase tracking-[0.06em] text-ink-2">
                {curly.contact.addressFull}
              </p>
              <div className="mt-3 h-px w-full max-w-[22rem] bg-accent/25" />
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.7, -0.56, 0.27, 1.6] }}
            className="mt-12"
          >
            <Link href="#reserve" className="text-link inline-flex">
              Резервация
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
