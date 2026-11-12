"use client";

import { useEffect, useRef, useState } from "react";
import { brand, navLinks } from "@/lib/site";

export function ArchMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#2e4c3e" />
      <path
        d="M20 45 V31 a12 12 0 0 1 24 0 V45"
        fill="none"
        stroke="#c9a35c"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="45" r="3.5" fill="#c9a35c" />
    </svg>
  );
}

function isActive(route: string, href: string) {
  return href === "/" ? route === "/" : route.startsWith(href);
}

/* Floating pill nav: rests off the top edge, translucent with backdrop blur.
   The mobile menu is an always mounted full height panel so it can animate in
   and out: the panel eases down on the base curve while its links rise 24px
   and fade in one after another (60ms apart, capped at 400ms). The burger
   morphs between its open and close states. Focus returns to the toggle when
   the menu closes. */
export function Nav({ route }: { route: string }) {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    burgerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-1/2 top-3 z-50 w-max max-w-[calc(100vw-24px)] -translate-x-1/2">
        <nav
          aria-label="Main"
          className="nav-pill flex items-center gap-1 rounded-full border border-border bg-background/75 py-1.5 pl-4 pr-1.5 shadow-[0_8px_30px_rgba(19,18,9,0.06)] backdrop-blur-md"
        >
          <a
            href="#/"
            aria-label={`${brand.name} home`}
            className="title-3 mr-2 flex items-center gap-2 whitespace-nowrap py-2"
          >
            <ArchMark className="h-5 w-5 rounded-full" />
            {brand.name}
          </a>
          <div className="hidden items-center md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={`#${l.href}`}
                aria-current={isActive(route, l.href) ? "page" : undefined}
                className="nav-link title-4 rounded-full px-3 py-2 text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#/book"
            aria-hidden={isActive(route, "/book")}
            tabIndex={isActive(route, "/book") ? -1 : 0}
            className="btn btn-primary btn-sm-size ml-2 whitespace-nowrap rounded-full"
          >
            Book
          </a>
          <button
            ref={burgerRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`relative ml-1 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 hover:bg-muted md:hidden ${
              open ? "burger-open" : ""
            }`}
          >
            <span className="burger-line burger-line-a" />
            <span className="burger-line burger-line-b" />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={`menu-panel fixed inset-0 z-40 md:hidden ${open ? "menu-panel-open" : ""}`}
      >
        <div
          className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          onClick={close}
        />
        <nav aria-label="Mobile" className="relative flex h-full flex-col items-start justify-center gap-6 px-8">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={`#${l.href}`}
              onClick={close}
              aria-current={isActive(route, l.href) ? "page" : undefined}
              className="menu-item heading-5"
              style={{ transitionDelay: open ? `${Math.min(i * 60, 400)}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#/book"
            onClick={close}
            className="menu-item btn btn-primary btn-lg-size mt-4"
            style={{ transitionDelay: open ? `${Math.min(navLinks.length * 60, 400)}ms` : "0ms" }}
          >
            Book an appointment
          </a>
        </nav>
      </div>
    </>
  );
}
