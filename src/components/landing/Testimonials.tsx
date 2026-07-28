import { testimonials } from "./data";
import { Reveal, SectionLabel } from "./Reveal";

export function Testimonials() {
  return (
    <section aria-labelledby="depoimentos-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-32">
        <Reveal>
          <div className="mb-10 max-w-2xl md:mb-16">
            <SectionLabel index="05" text="Quem já confiou" />
            <h2
              id="depoimentos-title"
              className="font-display text-4xl leading-[1.06] font-semibold tracking-[-0.025em] md:text-5xl"
            >
              Empresários reais.{" "}
              <span className="serif-it text-gradient">Resultados reais.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure
                className="flex h-full flex-col rounded-[26px] border border-border bg-card/60 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 md:p-8 lg:[transform:var(--stagger)]"
                style={{ ["--stagger" as any]: `translateY(${i % 2 === 1 ? "1.5rem" : "0"})` }}
              >
                <span
                  aria-hidden="true"
                  className="mb-6 font-serif text-6xl leading-none text-primary/70"
                >
                  &ldquo;
                </span>
                <blockquote className="mb-8 flex-1 text-[15px] leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-6">
                  <span
                    aria-hidden="true"
                    className="grid size-11 place-items-center rounded-full bg-linear-to-br from-primary/30 to-accent/30 font-mono text-xs font-semibold text-foreground"
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
