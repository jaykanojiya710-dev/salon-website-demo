"use client";

import {
  ArrowRight,
  EnvelopeSimple,
  InstagramLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "../page-hero";
import { Reveal } from "../reveal";
import { brand } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Find us on South Congress">
        Questions about a service, a bridal party or a gift card? Call, write, or step in. The
        fastest route to an appointment is the booking page.
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <h2 className="title-2">The studio</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="title-4">Address</p>
                    <p className="body-6 mt-1 text-muted-foreground">
                      {brand.address[0]}
                      <br />
                      {brand.address[1]}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="title-4">Phone</p>
                    <a href={brand.phoneHref} className="body-6 lift-link mt-1 block text-muted-foreground hover:text-foreground">
                      {brand.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <EnvelopeSimple className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="title-4">Email</p>
                    <a href={`mailto:${brand.email}`} className="body-6 lift-link mt-1 block text-muted-foreground hover:text-foreground">
                      {brand.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <InstagramLogo className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="title-4">Instagram</p>
                    <a
                      href={brand.instagram.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="body-6 lift-link mt-1 block text-muted-foreground hover:text-foreground"
                    >
                      {brand.instagram.label}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
              <h2 className="title-2">Hours and getting here</h2>
              <dl className="mt-6">
                {brand.hours.map((h) => (
                  <div key={h.day} className="body-6 flex items-baseline justify-between gap-6 border-b border-border py-3 last:border-b-0">
                    <dt className="text-muted-foreground">{h.day}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="body-6 mt-6 text-muted-foreground">
                Parking sits behind the studio off West Johanna Street, with metered spots along
                South Congress Avenue. The front entrance is step free, and the nail room is at the
                back for a quieter visit.
              </p>
              <a href="#/book" className="btn btn-primary mt-auto w-fit">
                Book an appointment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
