"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "../page-hero";
import { Reveal } from "../reveal";
import { assetPath, team } from "@/lib/site";

const values = [
  {
    num: "01",
    title: "Say the real number first",
    body: "Prices are published, and your stylist confirms the total before mixing color or starting the service. No checkout surprises.",
  },
  {
    num: "02",
    title: "One stylist, one chair",
    body: "You see the same person every visit. Formulas, notes and preferences stay on file, so results repeat.",
  },
  {
    num: "03",
    title: "Built for the weeks after",
    body: "Color is planned around your grow out and gel is sealed to last. What matters is day nine, not just day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Nine years on South Congress">
        [Salon name] opened in 2017 with three chairs and a simple idea: honest timing, color planned
        for the grow out, and nails built to last the week.
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <Reveal>
          <Image
            src={assetPath("/images/about-studio.png")}
            alt="A stylist walking a client through color swatches at an oak cart during a consultation"
            width={1152}
            height={864}
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="w-full rounded-2xl border border-border object-cover"
          />
          <p className="caption-2 mt-4 text-muted-foreground">
            A color consultation at the oak cart. Every new plan starts here, not at the basin.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="heading-4">How the studio works</h2>
            <div className="mt-6 space-y-5">
              <p className="body-3 text-muted-foreground">
                Rosa Whitfield spent a decade behind the chair in Dallas before opening [Salon name]
                two blocks off the Congress drag. The studio now runs 12 stylists and nail artists
                across eight chairs, with a separate quiet room for manicures and pedicures.
              </p>
              <p className="body-3 text-muted-foreground">
                The rules are plain. Consultations are free and take 15 minutes. Every color plan is
                written down with the price before anyone mixes. Your stylist keeps a formula card,
                so the next visit starts from history instead of guesses.
              </p>
              <p className="body-3 text-muted-foreground">
                The nail room runs the same way. Gel goes on in thin sealed layers, and if a nail
                lifts within five days, the repair is on the house.
              </p>
            </div>
          </Reveal>
          <div>
            {values.map((v, i) => (
              <Reveal key={v.num} delay={i * 60}>
                <div className={`flex gap-6 py-8 ${i > 0 ? "border-t border-border" : "pt-0"}`}>
                  <p className="title-1 shrink-0 text-brass-text">{v.num}</p>
                  <div>
                    <h3 className="title-1">{v.title}</h3>
                    <p className="body-6 mt-2 max-w-[520px] text-muted-foreground">{v.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <h2 className="heading-4">The chairs</h2>
            <p className="body-3 mt-4 max-w-[680px] text-muted-foreground">
              Twelve people work the floor. These four lead the color room, the cut room and the
              nail room.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 60} className="h-full">
                <div className="flex h-full gap-6 rounded-2xl border border-border bg-background p-8">
                  <span className="caption-3 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {m.initials}
                  </span>
                  <div>
                    <h3 className="title-2">{m.name}</h3>
                    <p className="caption-3 mt-1 uppercase text-brass-text">{m.role}</p>
                    <p className="body-6 mt-3 text-muted-foreground">{m.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <a href="#/book" className="btn btn-primary btn-lg-size mt-12">
              Book an appointment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
