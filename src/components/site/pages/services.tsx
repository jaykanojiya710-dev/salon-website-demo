"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "../page-hero";
import { Reveal, RevealLi } from "../reveal";
import { services } from "@/lib/site";

function MenuList({
  items,
}: {
  items: { name: string; price: string; duration: string; note: string }[];
}) {
  return (
    <ul className="mt-6">
      {items.map((s, i) => (
        <RevealLi key={s.name} delay={i * 60} className={`py-4 ${i > 0 ? "border-t border-border" : ""}`}>
          <div className="flex items-baseline justify-between gap-4">
            <p className="body-2">{s.name}</p>
            <p className="body-2 shrink-0 tabular-nums">{s.price}</p>
          </div>
          <div className="caption-2 mt-1 flex justify-between gap-4 text-muted-foreground">
            <p>{s.note}</p>
            <p className="shrink-0">{s.duration}</p>
          </div>
        </RevealLi>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="The full menu">
        Starting prices for hair and nails. Durations are estimates, and your stylist confirms both
        before starting. New color plans begin with a free 15 minute consultation.
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="h-full lg:col-span-7">
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <h2 className="title-2">Hair</h2>
              <MenuList items={services.hair} />
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
              <h2 className="title-2">Nails</h2>
              <MenuList items={services.nails} />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-primary p-8 text-primary-foreground md:flex-row md:items-center">
            <div>
              <h2 className="heading-6">First visit?</h2>
              <p className="body-6 mt-2 max-w-[520px] text-primary-foreground/80">
                Start with the free consultation. You leave with a written plan and a price before
                any service begins, no card required.
              </p>
            </div>
            <a href="#/book" className="btn btn-on-band shrink-0">
              Book a consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
