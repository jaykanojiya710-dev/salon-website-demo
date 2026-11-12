"use client";

import { PageHero } from "../page-hero";
import { brand } from "@/lib/site";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10 first:mt-0">
      <h2 className="heading-6">{title}</h2>
      <div className="body-3 mt-4 space-y-4 text-muted-foreground">{children}</div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy">
        Last updated November 12, 2026. Plain language, because this is a salon, not a bank.
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="max-w-[680px]">
          <Section title="What we collect">
            <p>
              When you book an appointment we keep your name, email, phone number, the service you
              picked and any notes you add for the stylist. If you write to us by email or social
              media, we keep that conversation too.
            </p>
          </Section>
          <Section title="What we do with it">
            <p>
              We use your details to confirm appointments, send reminders, and keep a history of
              your services and formulas so results repeat. We do not sell your information, and we
              do not send marketing texts. Occasional emails about studio news go only to clients
              who opted in, and every one of those has an unsubscribe link.
            </p>
          </Section>
          <Section title="Payments">
            <p>
              No card details are collected on this website. Payments happen in the studio, and card
              slips are handled by our payment provider, never stored by us.
            </p>
          </Section>
          <Section title="How long we keep things">
            <p>
              Booking records and formula notes stay on file for 24 months after your last visit,
              then they are deleted. You can ask us to remove them sooner at any time.
            </p>
          </Section>
          <Section title="Your choices">
            <p>
              You can ask to see, correct or delete anything we hold about you. Email{" "}
              <a href={`mailto:${brand.email}`} className="text-primary transition-colors duration-300 hover:text-brass-text">
                {brand.email}
              </a>{" "}
              or call {brand.phone} and we will sort it within a few business days.
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
