import Link from "next/link";
import { curly } from "../../../data/curly";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-rule bg-paper pb-[5.5rem] pt-[var(--space-3xl)] md:pb-[var(--space-2xl)]">
      <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-gutter)]">
        <div className="grid min-w-0 grid-cols-1 gap-[var(--space-2xl)] md:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0">
            <Logo href="/" size="md" variant="white" />
            <p className="mt-4 text-[length:var(--text-sm)] text-ink-muted">
              {curly.brandTagline}
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="font-display text-[length:var(--text-lg)] capitalize text-accent">
              Навигация
            </h3>
            <ul className="mt-4 space-y-3">
              {curly.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="font-display text-[length:var(--text-lg)] capitalize text-accent">
              Контакти
            </h3>
            <address className="mt-4 not-italic text-[length:var(--text-sm)] leading-relaxed text-ink-2">
              {curly.contact.address}
              <br />
              {curly.city}
            </address>
            <p className="mt-4">
              <a href={curly.contact.phoneHref} className="link-accent">
                {curly.contact.phoneDisplay}
              </a>
            </p>
            <Link
              href={curly.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link mt-4 inline-flex"
            >
              Как да стигнете
            </Link>
          </div>

          <div className="min-w-0">
            <h3 className="font-display text-[length:var(--text-lg)] capitalize text-accent">
              Работно време
            </h3>
            <p className="mt-4 text-[length:var(--text-sm)] text-ink-2">
              {curly.openingHours.notice}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={curly.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Instagram
              </Link>
              <Link
                href={curly.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-[var(--space-2xl)] border-t border-rule pt-[var(--space-lg)]">
          <p className="text-[length:var(--text-xs)] text-ink-muted">
            © {new Date().getFullYear()} {curly.fullName}
          </p>
        </div>
      </div>
    </footer>
  );
}
