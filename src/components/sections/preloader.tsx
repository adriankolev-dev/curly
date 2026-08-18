"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const LETTERS = ["C", "U", "R", "L", "Y"];

export function Preloader() {
  const reduced = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (reduced) {
      setLoaded(true);
      setHidden(true);
      return;
    }

    const timer = window.setTimeout(() => setLoaded(true), 2200);
    const hideTimer = window.setTimeout(() => setHidden(true), 3200);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(hideTimer);
    };
  }, [reduced]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[var(--z-preloader)] ${loaded ? "pointer-events-none" : ""}`}
      aria-hidden={loaded}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative z-10 flex flex-col items-center">
          <div className="preloader-spinner mb-10" />
          <div className="flex gap-1 font-display text-[2rem] md:text-[3.5rem]">
            {LETTERS.map((letter) => (
              <span key={letter} className="preloader-letter inline-block" data-letter={letter}>
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-paper transition-transform duration-700 ease-[cubic-bezier(0.1,0.1,0.1,1)] ${
          loaded ? "-translate-x-full delay-300" : "translate-x-0"
        }`}
      />
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-paper transition-transform duration-700 ease-[cubic-bezier(0.1,0.1,0.1,1)] ${
          loaded ? "translate-x-full delay-300" : "translate-x-0"
        }`}
      />
    </div>
  );
}
