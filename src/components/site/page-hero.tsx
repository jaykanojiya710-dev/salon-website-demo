import { Reveal } from "./reveal";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 pt-32 md:pb-14 md:pt-40">
      <Reveal>
        <p className="caption-3 uppercase text-brass-text">{eyebrow}</p>
        <h1 className="heading-3 mt-4 max-w-[680px]">{title}</h1>
        {children ? (
          <div className="body-3 mt-6 max-w-[680px] text-muted-foreground">{children}</div>
        ) : null}
      </Reveal>
    </section>
  );
}
