"use client";

import Image from "next/image";
import {
  ArrowRight,
  CalendarBlank,
  CheckCircle,
  Hand,
  Palette,
  Quotes,
  Scissors,
  Star,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, RevealLi } from "../reveal";
import { TaglineReveal } from "../tagline-reveal";
import { assetPath, brand, faqs, services, stats, testimonials } from "@/lib/site";

const benefits = [
  {
    icon: Palette,
    title: "Color planned for the grow out",
    body: "Balayage and lived in color are mapped to your regrowth, so month three still looks deliberate, not due.",
  },
  {
    icon: Scissors,
    title: "A chair you keep",
    body: "One stylist owns your cut and formula, with notes on file. Visit nine looks like visit one.",
  },
  {
    icon: Hand,
    title: "Nails that survive the week",
    body: "Gel goes on in thin sealed layers. If a nail lifts within five days, the repair is free.",
  },
  {
    icon: CalendarBlank,
    title: "Booking that takes under a minute",
    body: "Real openings on the calendar, confirmation by text, and free rescheduling up to 24 hours before.",
  },
];

const steps = [
  {
    num: "01",
    title: "Pick your service",
    body: "Browse the menu with durations and starting prices. Not sure what you need? Book the free consultation.",
  },
  {
    num: "02",
    title: "Grab a real opening",
    body: "Choose from live openings Tuesday to Saturday. Your confirmation arrives by text within the day.",
  },
  {
    num: "03",
    title: "Walk out ready",
    body: "Leave with a style you can repeat at home and a date for your next visit already in the book.",
  },
];

const pains = [
  "A different stylist every visit",
  "Prices that shift at checkout",
  "Color that looks new for two weeks, then turns",
  "Nails that chip before the weekend",
];

const answers = [
  "The same stylist each visit, with your formulas on file",
  "Starting prices published and confirmed before we mix",
  "Color mapped to your grow out, planned three visits ahead",
  "Gel sealed in thin layers, repaired free within five days",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="caption-3 uppercase text-brass-text">Hair and nail studio in Austin, Texas</p>
              <h1 className="hero-gradient heading-1 mt-6 max-w-[680px]">
                <span className="block">Hair that behaves</span>
                <span className="block">Nails that last</span>
              </h1>
              <p className="body-3 mt-6 max-w-[680px] text-muted-foreground">
                [Salon name] is a hair and nail studio on South Congress. One stylist owns your look
                from consultation to finish, and every visit starts with an honest chat about what
                your hair and nails can actually do.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#/book" className="btn btn-primary btn-lg-size">
                  Book an appointment
                </a>
                <a href="#/services" className="btn btn-secondary btn-lg-size">
                  See services
                </a>
              </div>
              <p className="caption-1 mt-8 flex items-center gap-2 text-muted-foreground">
                <Star className="h-4 w-4 fill-brass text-brass" aria-hidden="true" />
                4.9 average across 237 Google reviews
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Image
              src={assetPath("/images/hero-salon.png")}
              alt="Sunlit styling chairs and arched brass mirrors inside [Salon name] on South Congress"
              width={1344}
              height={768}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full rounded-2xl border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Proof strip */}
      <section aria-label="Studio numbers" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <p className="title-1 font-semibold">{s.value}</p>
              <p className="caption-2 mt-1 text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Problem to solution */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <h2 className="heading-3 max-w-[680px]">Salon visits feel like a gamble. They should not.</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-border bg-muted p-8">
              <p className="caption-3 uppercase text-muted-foreground">The usual runaround</p>
              <ul className="mt-6 space-y-4">
                {pains.map((p) => (
                  <li key={p} className="body-5 flex items-start gap-3 text-muted-foreground">
                    <WarningCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="h-full rounded-2xl bg-primary p-8 text-primary-foreground">
              <p className="caption-3 uppercase text-primary-foreground/70">How [Salon name] runs</p>
              <ul className="mt-6 space-y-4">
                {answers.map((a) => (
                  <li key={a} className="body-5 flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <p className="caption-3 uppercase text-brass-text">Why clients stay</p>
            <h2 className="heading-3 mt-4 max-w-[480px]">Built for the weeks after the appointment</h2>
            <p className="body-3 mt-6 max-w-[480px] text-muted-foreground">
              Anyone can make you look good on the day. The measure of a salon is how things wear
              while you live your life between visits. Everything below is engineered for that.
            </p>
            <a href="#/book" className="btn btn-secondary mt-8">
              Book an appointment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
          <div>
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <div className={`flex gap-6 py-8 ${i > 0 ? "border-t border-border" : "pt-0"}`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <b.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="title-1">{b.title}</h3>
                    <p className="body-6 mt-2 max-w-[520px] text-muted-foreground">{b.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <Reveal>
          <p className="caption-3 uppercase text-brass-text">How it works</p>
          <h2 className="heading-3 mt-4 max-w-[680px]">Booking takes about a minute</h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 60}>
              <p className="title-1 text-brass-text">{s.num}</p>
              <h3 className="heading-6 mt-4">{s.title}</h3>
              <p className="body-6 mt-2 max-w-[420px] text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tagline reveal, its own moment mid page */}
      <section aria-label="Our promise" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <TaglineReveal
          lines={["You should love your hair", "on day nine, not just day one."]}
          className="heading-3 max-w-[680px]"
        />
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <Reveal>
          <p className="caption-3 uppercase text-brass-text">The menu</p>
          <h2 className="heading-3 mt-4 max-w-[680px]">Hair and nails, one address</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="h-full lg:col-span-7">
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <h3 className="title-2">Hair</h3>
              <ul className="mt-6">
                {services.hair.slice(0, 5).map((s, i) => (
                  <RevealLi key={s.name} delay={i * 60} className={`py-4 ${i > 0 ? "border-t border-border" : ""}`}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="body-2">{s.name}</p>
                      <p className="body-2 tabular-nums">{s.price}</p>
                    </div>
                    <div className="caption-2 mt-1 flex justify-between gap-4 text-muted-foreground">
                      <p>{s.note}</p>
                      <p className="shrink-0">{s.duration}</p>
                    </div>
                  </RevealLi>
                ))}
              </ul>
              <a href="#/services" className="btn btn-ghost mt-6 px-3">
                See the full menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
              <h3 className="title-2">Nails</h3>
              <ul className="mt-6">
                {services.nails.slice(0, 4).map((s, i) => (
                  <RevealLi key={s.name} delay={i * 60} className={`py-4 ${i > 0 ? "border-t border-border" : ""}`}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="body-2">{s.name}</p>
                      <p className="body-2 tabular-nums">{s.price}</p>
                    </div>
                    <p className="caption-2 mt-1 text-muted-foreground">{s.note}</p>
                  </RevealLi>
                ))}
              </ul>
              <a href="#/book" className="btn btn-primary mt-auto">
                Book nails
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <p className="caption-2 mt-6 max-w-[680px] text-muted-foreground">
            Every price is a starting point. Your stylist confirms the total before mixing color or
            starting the service, and the consultation is free.
          </p>
        </Reveal>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <Reveal>
          <p className="caption-3 uppercase text-brass-text">Reviews</p>
          <h2 className="heading-3 mt-4 max-w-[680px]">From the chairs</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="h-full lg:col-span-7">
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
              <Quotes className="h-6 w-6 text-brass" aria-hidden="true" />
              <blockquote className="body-2 mt-6 text-foreground">{testimonials[0].quote}</blockquote>
              <figcaption className="mt-auto flex items-center gap-4 pt-8">
                <span className="caption-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {testimonials[0].initials}
                </span>
                <span>
                  <span className="title-4 block">{testimonials[0].name}</span>
                  <span className="caption-2 block text-muted-foreground">{testimonials[0].detail}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid gap-6 lg:col-span-5">
            {testimonials.slice(1).map((t, i) => (
              <Reveal key={t.name} delay={(i + 1) * 60} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                  <blockquote className="body-6 text-foreground">{t.quote}</blockquote>
                  <figcaption className="mt-auto flex items-center gap-4 pt-6">
                    <span className="caption-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      {t.initials}
                    </span>
                    <span>
                      <span className="title-4 block">{t.name}</span>
                      <span className="caption-2 block text-muted-foreground">{t.detail}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <Reveal>
          <p className="caption-3 uppercase text-brass-text">Questions</p>
          <h2 className="heading-3 mt-4 max-w-[680px]">Before you book</h2>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="mt-8 rounded-2xl border border-border bg-card px-8">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="title-3 text-left hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="body-6 text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* Final CTA, identical action to the top */}
      <section className="bg-band">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Reveal>
            <h2 className="heading-3 max-w-[680px] text-band-foreground">Ready when you are</h2>
            <p className="body-3 mt-6 max-w-[680px] text-band-muted">
              Book online in about a minute. The consultation is free, no card is required to book,
              and you can cancel or reschedule up to 24 hours before.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#/book" className="btn btn-on-band btn-lg-size">
                Book an appointment
              </a>
              <a href={brand.phoneHref} className="btn btn-ghost-band btn-lg-size">
                Call {brand.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
