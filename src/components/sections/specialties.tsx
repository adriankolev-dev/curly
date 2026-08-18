"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { curly } from "../../../data/curly";

const revealEase = [0.65, 0, 0.35, 1] as const;
const popEase = [0.7, -0.56, 0.27, 1.6] as const;

function StarDivider() {
  return (
    <div className="flex flex-col items-center justify-end gap-6 py-4 md:gap-8 md:py-8">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.55,
            delay: 0.2 + i * 0.12,
            ease: popEase,
          }}
          className="font-display text-[length:var(--text-2xl)] text-accent md:text-[length:var(--text-display-s)]"
          aria-hidden
        >
          ✦
        </motion.span>
      ))}
    </div>
  );
}

function RevealImage({
  src,
  alt,
  aspect,
  priority = false,
}: {
  src: string;
  alt: string;
  aspect: "landscape" | "portrait";
  priority?: boolean;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${
        aspect === "landscape" ? "aspect-[5/3] w-full" : "aspect-[4/5] w-full md:aspect-[3/4]"
      }`}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduced ? false : { scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.1, ease: revealEase }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes={
            aspect === "portrait"
              ? "(max-width: 768px) 100vw, 40vw"
              : "(max-width: 768px) 100vw, 30vw"
          }
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
    </div>
  );
}

export function SpecialtiesSection() {
  const feature = curly.specialtiesFeature;
  const reduced = useReducedMotion();

  return (
    <section id="specialties" className="overflow-x-clip bg-paper-2 py-[var(--space-3xl)]">
      <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-gutter)]">
        <div className="flex min-w-0 flex-col gap-[var(--space-2xl)] lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 lg:max-w-[40%] lg:flex-[0_0_40%]">
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: popEase }}
              className="section-subtitle"
            >
              {feature.subtitle}
            </motion.p>

            <motion.h2
              initial={reduced ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1, ease: popEase }}
              className="mt-4 min-w-0 font-display text-[length:var(--text-display-s)] capitalize leading-[1.05] md:text-[length:var(--text-display)] [overflow-wrap:normal]"
            >
              <span className="block whitespace-nowrap text-ink">{feature.titleLine1}</span>
              <span className="mt-1 block whitespace-nowrap text-accent">{feature.titleLine2}</span>
            </motion.h2>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2, ease: popEase }}
              className="mt-6 max-w-prose text-[length:var(--text-md)] leading-relaxed text-ink-2"
            >
              {feature.body}
            </motion.p>

            <div className="mt-10">
              <RevealImage
                src={feature.smallImage}
                alt={feature.smallImageAlt}
                aspect="landscape"
              />
            </div>

            <p className="mt-4 text-[length:var(--text-caption)] uppercase tracking-[0.14em] text-ink-muted">
              {curly.stockNotice}
            </p>

            <Link href="#menu" className="text-link mt-8 inline-flex">
              Виж менюто
            </Link>
          </div>

          <div className="hidden shrink-0 lg:block lg:flex-[0_0_10%]">
            <StarDivider />
          </div>

          <div className="flex min-w-0 justify-center gap-8 py-6 lg:hidden">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="font-display text-[length:var(--text-2xl)] text-accent"
                aria-hidden
              >
                ✦
              </span>
            ))}
          </div>

          <div className="min-w-0 lg:flex-[0_0_45%] lg:self-end">
            <RevealImage
              src={feature.largeImage}
              alt={feature.largeImageAlt}
              aspect="portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
