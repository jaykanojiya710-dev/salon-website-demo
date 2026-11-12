"use client";

import { useEffect, useRef, useState } from "react";

/* Shared one shot IntersectionObserver reveal: each element animates once when
   it enters the viewport and never replays on scrolling back up. No scroll
   listeners involved (skill B7). */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, on };
}

/* Scroll reveal: rises 32px (Spacing-400) and fades in over 700ms on the base
   curve, triggered once by IntersectionObserver. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, on } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${on ? "reveal-on" : ""} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* The same reveal for list items, so grids and lists can stagger their
   children in reading order (about 60ms apart) without breaking list
   semantics with a wrapper element. */
export function RevealLi({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, on } = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={`reveal ${on ? "reveal-on" : ""} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </li>
  );
}
