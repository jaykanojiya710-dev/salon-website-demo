"use client";

import { Reveal } from "../reveal";

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start justify-center px-6 pb-24 pt-40 md:pt-48">
      <Reveal>
        <p className="caption-3 uppercase text-brass-text">404</p>
        <h1 className="heading-3 mt-4 max-w-[680px]">This page slipped out of the chair</h1>
        <p className="body-3 mt-6 max-w-[680px] text-muted-foreground">
          The link leads nowhere. Head back to the studio and pick up where you left off.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#/" className="btn btn-primary btn-lg-size">
            Back to home
          </a>
          <a href="#/book" className="btn btn-secondary btn-lg-size">
            Book an appointment
          </a>
        </div>
      </Reveal>
    </section>
  );
}
