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

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of service">
        Last updated November 12, 2026. These terms cover appointments booked online or by phone.
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="max-w-[680px]">
          <Section title="Appointments">
            <p>
              A request sent through this site is a request, not a confirmed slot. Your appointment
              is confirmed when you receive a text from the studio. Online prices are starting
              points; your stylist confirms the total during the consultation and before any work
              begins.
            </p>
          </Section>
          <Section title="Cancelling and rescheduling">
            <p>
              You can cancel or move an appointment free of charge up to 24 hours before. Inside 24
              hours we charge 50 percent of the service, because your stylist held the chair and
              often turned others away. No shows are charged the same 50 percent.
            </p>
          </Section>
          <Section title="Results and aftercare">
            <p>
              Hair and nail services depend on hair history, home care and honest disclosure. Tell
              us about box dye, previous color, allergies or nail damage before we start. If a gel
              nail lifts within five days of your visit, the repair is free. Color concerns raised
              within 14 days are reviewed and corrected at no charge when the plan was followed.
            </p>
          </Section>
          <Section title="Consultations">
            <p>
              New color and nail plans start with a free 15 minute consultation. Bridal trials are
              booked at least three weeks ahead and include a written style plan for the day.
            </p>
          </Section>
          <Section title="Questions">
            <p>
              Anything unclear, ask before your appointment. Email{" "}
              <a href={`mailto:${brand.email}`} className="text-primary transition-colors duration-300 hover:text-brass-text">
                {brand.email}
              </a>{" "}
              or call {brand.phone}.
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
