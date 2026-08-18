import Link from "next/link";
import { curly } from "../../../data/curly";

export function ReservationSection() {
  return (
    <section id="reserve" className="bg-paper py-[var(--space-3xl)]">
      <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-gutter)]">
        <div className="grid min-w-0 grid-cols-1 gap-[var(--space-2xl)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="min-w-0">
            <p className="section-subtitle">Резервации</p>
            <h2 className="section-title mt-3">Запази маса</h2>
            <p className="mt-6 max-w-prose text-[length:var(--text-md)] leading-relaxed text-ink-2">
              {curly.booking.cta}
            </p>
          </div>

          <div className="min-w-0 border border-rule bg-paper-2 p-[var(--space-xl)]">
            <ol className="grid grid-cols-3 gap-4 border-b border-rule pb-[var(--space-lg)]">
              {["Обади се", "Избери час", "Ела при нас"].map((step, index) => (
                <li key={step} className="min-w-0 text-center">
                  <span className="font-display text-[length:var(--text-2xl)] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-[length:var(--text-xs)] uppercase tracking-[0.12em] text-ink-muted">
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-[var(--space-lg)] font-display text-[length:var(--text-2xl)] text-accent">
              {curly.contact.phoneDisplay}
            </p>
            <p className="mt-2 text-[length:var(--text-sm)] text-ink-muted">
              {curly.contact.address}, {curly.city}
            </p>
            <Link href={curly.contact.phoneHref} className="btn-elegencia mt-8 inline-flex">
              Резервация
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
