"use client";

import Image from "next/image";
import Link from "next/link";
import { curly } from "../../../data/curly";

export function FoodShowcaseSection() {
  return (
    <section id="gallery" className="bg-paper py-[var(--space-3xl)]">
      <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-gutter)]">
        <div className="text-center">
          <p className="section-subtitle">Ястия</p>
          <h2 className="section-title mt-3">Галерия</h2>
        </div>

        <div className="mt-[var(--space-2xl)] grid min-w-0 grid-cols-1 gap-[var(--space-md)] md:grid-cols-3">
          {curly.showcase.map((item) => (
            <article key={item.id} className="group relative min-w-0">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-[8%] flex flex-col items-center justify-center bg-paper/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
                  <span className="mb-8 text-3xl text-accent" aria-hidden>
                    +
                  </span>
                  <div className="text-center">
                    <h3 className="font-display text-[length:var(--text-xl)] capitalize text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[length:var(--text-sm)] uppercase tracking-[0.14em] text-ink-2">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-[var(--space-xl)] text-center">
          <Link href="#menu" className="text-link">
            Виж менюто
          </Link>
        </div>
      </div>
    </section>
  );
}
