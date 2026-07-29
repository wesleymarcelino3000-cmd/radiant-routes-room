import { benefits } from "./data";
import { Reveal, SectionLabel } from "./Reveal";

export function Benefits() {
  return (
    <section id="beneficios" aria-labelledby="beneficios-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="dot-bg absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-28">
        <Reveal>
          <div className="mb-12 max-w-3xl md:mb-16">
            <SectionLabel index="01" text="Por que ter um site?" />
            <h2
              id="beneficios-title"
              className="font-display text-4xl leading-[1.06] font-semibold tracking-[-0.025em] md:text-5xl"
            >
              Um site muda o jogo do{" "}
              <span className="serif-it text-gradient">seu negócio.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Não importa se você tem uma loja, uma clínica, uma oficina ou presta serviço em
              casa — ter um site profissional ajuda a atrair mais clientes todos os dias.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <article className="group h-full rounded-3xl border border-border bg-card/40 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card">
                <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <b.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-display text-xl font-semibold tracking-tight">
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
