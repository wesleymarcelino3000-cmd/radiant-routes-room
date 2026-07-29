import { benefits } from "./data";
import { Reveal, SectionLabel } from "./Reveal";

export function Benefits() {
  return (
    <section id="beneficios" aria-labelledby="beneficios-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="dot-bg absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-28">
        <Reveal>
          <div className="mb-12 max-w-3xl md:mb-16">
            <SectionLabel index="01" text="Por que escolher a Space Ads" />
            <h2
              id="beneficios-title"
              className="font-display text-4xl leading-[1.06] font-semibold tracking-[-0.025em] md:text-5xl"
            >
              Tudo que o seu site precisa para{" "}
              <span className="serif-it text-gradient">vender mais.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <article className="group h-full rounded-3xl border border-border bg-card/40 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card">
                <span className="mb-5 grid size-11 place-items-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <b.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-display text-lg font-semibold tracking-tight">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
