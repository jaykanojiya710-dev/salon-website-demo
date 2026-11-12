"use client";

import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "../page-hero";
import { Reveal } from "../reveal";
import { BookingForm } from "../booking-form";
import { brand } from "@/lib/site";

const nextSteps = [
  {
    num: "01",
    title: "You send the request",
    body: "The form takes a minute. No card and no account, just what you need and when.",
  },
  {
    num: "02",
    title: "We confirm by text",
    body: "The front desk matches your slot with the right stylist and texts a confirmation within one business day.",
  },
  {
    num: "03",
    title: "You show up and settle in",
    body: "Come five minutes early. Your stylist has read the notes and pulls your formula card before you sit.",
  },
];

const reassurance = [
  "The 15 minute consultation is free for new color and nail plans",
  "No card is required to book",
  "Cancel or reschedule free up to 24 hours before",
  "Prices are confirmed before any service starts",
];

export default function BookPage() {
  return (
    <>
      <PageHero eyebrow="Book" title="Book an appointment">
        Tell us what you need and when you need it. We confirm by text within one business day, and
        you can reschedule free up to 24 hours before.
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <BookingForm />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="title-2">What happens next</h2>
                <ol className="mt-6 space-y-6">
                  {nextSteps.map((s) => (
                    <li key={s.num} className="flex gap-4">
                      <p className="title-1 shrink-0 text-brass-text">{s.num}</p>
                      <div>
                        <h3 className="title-4">{s.title}</h3>
                        <p className="body-6 mt-1 text-muted-foreground">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="title-2">The fine print, kindly</h2>
                <ul className="mt-6 space-y-3">
                  {reassurance.map((r) => (
                    <li key={r} className="body-6 flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="body-6 mt-6 text-muted-foreground">
                  Prefer to talk it through? Call{" "}
                  <a href={brand.phoneHref} className="text-primary transition-colors duration-300 hover:text-brass-text">
                    {brand.phone}
                  </a>
                  , Tuesday to Saturday.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
