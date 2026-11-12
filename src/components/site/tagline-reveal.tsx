"use client";

import { useEffect, useRef, useState } from "react";

/* Mandatory tagline reveal: words start at 30% opacity of the base text color
   and turn full color one at a time as they cross a trigger line. Scroll work
   is throttled through requestAnimationFrame, never a raw scroll listener. */
export function TaglineReveal({ lines, className }: { lines: string[]; className?: string }) {
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const words = wordRefs.current.filter(Boolean);
    if (words.length === 0) return;
    let raf = 0;
    const update = () => {
      const trigger = window.innerHeight * 0.78;
      let count = 0;
      for (let i = 0; i < words.length; i++) {
        if (words[i].getBoundingClientRect().top < trigger) count = i + 1;
      }
      setActiveCount(count);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  let wordIndex = 0;
  return (
    <div className={className}>
      {lines.map((line, li) => (
        <span key={li} className={li > 0 ? "mt-3 block" : "block"}>
          {line.split(" ").map((w) => {
            const idx = wordIndex++;
            return (
              <span
                key={idx}
                ref={(el) => {
                  if (el) wordRefs.current[idx] = el;
                }}
                className={`tagline-word ${idx < activeCount ? "tagline-word-on" : ""}`}
              >
                {w}{" "}
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
}
