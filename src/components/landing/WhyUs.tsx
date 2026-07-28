import { guarantees } from "./data";
import { Reveal, SectionLabel } from "./Reveal";
import { cn } from "@/lib/utils";

export function WhyUs() {
  return (
    <section
      id="agencia"
      aria-labelledby="agencia-title"
      className="relative overflow-hidden bg-paper text-paper-foreground"
    >
      <div aria-hidden="true" className="dot-bg-paper absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionLabel index="02" text="Por que a PrimeCode" onPaper />
                <h2
                  id="agencia-title"
                  className="mb-6 font-display text-4xl leading-[1.06] font-semibold tracking-[-0.025em] md:text-5xl"
                >
                  Você já foi <span className="serif-it">enganado</span> antes. Aqui é diferente —
                  e no papel.
                </h2>
                <p className="mb-8 max-w-md leading-relaxed text-paper-muted">
                  A maioria das agências promete o mundo e some depois do primeiro pagamento. Nós
                  trabalhamos do jeito oposto: compromissos objetivos, escritos e assinados antes
                  de qualquer linha de código.
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-muted">
                  — Garantias com força de contrato
                </p>
              </Reveal>
            </div>
          </div>

          {/* Asymmetric guarantee cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {guarantees.map((g, i) => (
              <Reveal
                key={g.code}
                delay={i * 90}
                className={cn(i === 0 && "sm:col-span-2")}
              >
                <article
                  className={cn(
                    "h-full transition-transform duration-500 hover:-translate-y-1",
                    i === 0
                      ? "rounded-[28px] bg-paper-foreground p-8 text-paper md:p-10"
                      : "rounded-3xl border border-paper-border bg-paper p-7 md:p-8",
                    i === 3 && "border-primary-ink/25 bg-primary-ink/5"
                  )}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span
                      className={cn(
                        "grid size-11 place-items-center rounded-2xl",
                        i === 0 ? "bg-paper/10 text-accent" : "bg-primary-ink/10 text-primary-ink"
                      )}
                    >
                      <g.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[11px] tracking-widest",
                        i === 0 ? "text-paper/50" : "text-paper-muted"
                      )}
                    >
                      {g.code}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "mb-2.5 font-display text-xl font-semibold tracking-tight",
                      i === 0 && "text-2xl md:text-[1.7rem]"
                    )}
                  >
                    {g.title}
                  </h3>
                  <p
                    className={cn(
                      "leading-relaxed",
                      i === 0 ? "max-w-lg text-paper/75" : "text-sm text-paper-muted"
                    )}
                  >
                    {g.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Editorial pull-quote */}
        <Reveal delay={120}>
          <figure className="mx-auto mt-24 max-w-4xl text-center md:mt-32">
            <blockquote className="serif-it text-3xl leading-[1.25] text-paper-foreground/90 md:text-[2.6rem]">
              "Tecnologia boa é aquela que some — você nem percebe que ela está{" "}
              <span className="text-primary-ink">trabalhando por você</span>."
            </blockquote>
            <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-paper-muted">
              — Princípio nº 1 da PrimeCode
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
