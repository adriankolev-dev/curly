"use client";

import Link from "next/link";
import { curly } from "../../../data/curly";

export function MobileReservationBar() {
  return (
    <aside className="fixed inset-x-0 bottom-0 z-[var(--z-sticky)] border-t border-rule bg-paper px-[var(--page-gutter)] py-3 md:hidden">
      <Link href={curly.contact.phoneHref} className="btn-primary w-full">
        Запази маса
      </Link>
    </aside>
  );
}
