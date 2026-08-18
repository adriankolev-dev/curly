"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { curly } from "../../../data/curly";
import { Logo } from "@/components/ui/logo";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[var(--z-nav)]">
        <a href="#content" className="skip-link">
          Към съдържанието
        </a>

        <div className="border-b border-rule bg-paper/95 backdrop-blur-sm">
          <div className="mx-auto grid h-[var(--header-top-height)] max-w-[var(--page-max)] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-[var(--page-gutter)]">
            <Link
              href="#reserve"
              className="hidden whitespace-nowrap text-link md:inline-flex"
            >
              Резервация
            </Link>

            <div className="justify-self-center">
              <Logo href="/" size="sm" variant="white" />
            </div>

            <button
              type="button"
              className="justify-self-end inline-flex size-11 items-center justify-center text-accent"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="fullscreen-nav"
              aria-label={open ? "Затвори менюто" : "Отвори менюто"}
            >
              <svg viewBox="0 0 20 15" width="32" height="24" aria-hidden>
                <path d="M20,2 L2,2" stroke="currentColor" strokeWidth="1" />
                <path d="M2,7 L20,7" stroke="currentColor" strokeWidth="1" />
                <path d="M20,12 L2,12" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`hidden border-b border-rule bg-paper transition-colors duration-[var(--dur-short)] md:block ${
            scrolled ? "shadow-[0_8px_24px_rgb(0_0_0/0.35)]" : ""
          }`}
        >
          <div className="mx-auto flex h-16 max-w-[var(--page-max)] items-center justify-center px-[var(--page-gutter)]">
            <nav
              aria-label="Основна навигация"
              className="flex items-center gap-8"
            >
              {curly.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap text-[length:var(--text-sm)] uppercase tracking-[0.12em] text-ink-2 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {open && (
        <nav
          id="fullscreen-nav"
          className="fixed inset-0 z-[calc(var(--z-nav)+1)] bg-paper"
          aria-label="Пълноекранно меню"
        >
          <div className="flex h-[var(--header-top-height)] items-center justify-end px-[var(--page-gutter)]">
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center text-accent"
              onClick={() => setOpen(false)}
              aria-label="Затвори менюто"
            >
              <span className="text-2xl leading-none" aria-hidden>
                ×
              </span>
            </button>
          </div>

          <ul className="px-[var(--page-gutter)]">
            {curly.navigation.map((item) => (
              <li key={item.href} className="group border-b border-rule">
                <Link
                  href={item.href}
                  className="relative flex items-center justify-between py-6"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-display text-[length:var(--text-2xl)] capitalize text-accent">
                    {item.label}
                  </span>
                  {"image" in item && item.image ? (
                    <span className="relative hidden h-24 w-36 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="144px"
                      />
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>

          <div className="absolute inset-x-0 bottom-0 border-t border-rule px-[var(--page-gutter)] py-8">
            <Link
              href={curly.contact.phoneHref}
              className="btn-elegencia"
              onClick={() => setOpen(false)}
            >
              Запази маса
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
