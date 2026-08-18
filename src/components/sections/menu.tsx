"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { curly } from "../../../data/curly";

function formatPrice(price: number | null | undefined) {
  if (price == null) return "—";
  return `${price.toFixed(2)} лв.`;
}

export function MenuSection() {
  const items = useMemo(
    () =>
      curly.menu.categories.flatMap((category) =>
        category.items.map((item) => ({
          ...item,
          category: category.name,
        })),
      ),
    [],
  );

  return (
    <section id="menu" className="bg-paper-2 py-[var(--space-3xl)]">
      <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-gutter)]">
        <div className="text-center">
          <p className="section-subtitle">Специална селекция</p>
          <h2 className="section-title mt-3">Меню</h2>
        </div>

        {curly.menu.notice ? (
          <p className="mx-auto mt-6 max-w-2xl text-center text-[length:var(--text-sm)] text-ink-muted">
            {curly.menu.notice}
          </p>
        ) : null}

        <div className="food-menu-list mt-[var(--space-2xl)]">
          {items.map((item) => (
            <article key={item.id} className="food-menu-entry group">
              {item.image ? (
                <div className="food-menu-entry__hover-image hidden md:block">
                  <Image
                    src={item.image}
                    alt=""
                    width={144}
                    height={144}
                    className="size-36 rounded-full object-cover"
                    aria-hidden
                  />
                </div>
              ) : null}

              <div className="food-menu style-1 min-w-0">
                <div className="food-menu-row-1">
                  <div className="food-menu-title">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="food-menu-hrs" aria-hidden>
                    <span />
                    <span />
                  </div>
                  <div className="food-menu-price">
                    <p>{formatPrice(item.price)}</p>
                  </div>
                </div>

                <div className="food-menu-row-2">
                  {item.description ? (
                    <p className="food-menu-desc">{item.description}</p>
                  ) : (
                    <span className="food-menu-desc" aria-hidden />
                  )}
                  <p className="food-menu-meta">{item.category}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-[var(--space-xl)] text-center">
          <Link href={curly.contact.phoneHref} className="btn-elegencia">
            Обади се за актуално меню
          </Link>
        </div>
      </div>
    </section>
  );
}
