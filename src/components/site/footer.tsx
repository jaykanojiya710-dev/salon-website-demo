import { ArchMark } from "./nav";
import { brand, navLinks } from "@/lib/site";
import { EnvelopeSimple, InstagramLogo, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="mt-auto bg-band text-band-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <a href="#/" className="title-3 flex items-center gap-2 text-band-foreground">
            <ArchMark className="h-6 w-6" />
            {brand.name}
          </a>
          <p className="body-6 mt-4 max-w-[280px] text-band-muted">
            {brand.tagline}. Color planned for the grow out, nails built to last the week.
          </p>
          <a
            href={brand.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="caption-1 lift-link mt-6 inline-flex items-center gap-2 text-band-foreground hover:text-brass"
          >
            <InstagramLogo className="h-4 w-4" aria-hidden="true" />
            {brand.instagram.label}
          </a>
        </div>

        <div>
          <p className="caption-3 uppercase text-band-muted">Visit</p>
          <address className="body-6 mt-4 not-italic text-band-foreground">
            <span className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {brand.address[0]}
                <br />
                {brand.address[1]}
              </span>
            </span>
            <a href={brand.phoneHref} className="lift-link mt-3 flex items-center gap-2 hover:text-brass">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} className="lift-link mt-3 flex items-center gap-2 hover:text-brass">
              <EnvelopeSimple className="h-4 w-4" aria-hidden="true" />
              {brand.email}
            </a>
          </address>
        </div>

        <div>
          <p className="caption-3 uppercase text-band-muted">Hours</p>
          <dl className="mt-4">
            {brand.hours.map((h) => (
              <div key={h.day} className="caption-2 flex items-baseline justify-between gap-6 py-1">
                <dt className="text-band-muted">{h.day}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <p className="caption-3 uppercase text-band-muted">Explore</p>
          <nav aria-label="Footer" className="mt-4 flex flex-col items-start gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={`#${l.href}`} className="body-6 lift-link hover:text-brass">
                {l.label}
              </a>
            ))}
            <a href="#/book" className="body-6 lift-link hover:text-brass">
              Book
            </a>
          </nav>
          <p className="caption-3 uppercase mt-8 text-band-muted">Legal</p>
          <div className="mt-4 flex flex-col items-start gap-3">
            <a href="#/privacy" className="body-6 lift-link hover:text-brass">
              Privacy policy
            </a>
            <a href="#/terms" className="body-6 lift-link hover:text-brass">
              Terms of service
            </a>
          </div>
        </div>
      </div>

      <div className="divider-band" />
      <div
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 pt-6"
        style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
      >
        <p className="caption-4 text-band-muted">© 2026 {brand.legalName}. All rights reserved.</p>
        <p className="caption-4 text-band-muted">Made in Austin, Texas</p>
      </div>
    </footer>
  );
}
