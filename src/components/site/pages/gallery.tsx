"use client";

import Image from "next/image";
import { PageHero } from "../page-hero";
import { Reveal } from "../reveal";
import { galleryItems } from "@/lib/site";

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Recent work from the chairs">
        A look at the studio and the work that walks out of it. Every image below was taken on the
        floor at [Salon name], between real appointments.
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {galleryItems.map((g, i) => (
            <Reveal key={g.src} delay={i * 60} className={`col-span-1 ${g.span}`}>
              <figure>
                <div className={`relative w-full overflow-hidden rounded-2xl border border-border ${g.aspect}`}>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <p className="title-4">{g.title}</p>
                  <p className="caption-3 uppercase text-brass-text">{g.tag}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
