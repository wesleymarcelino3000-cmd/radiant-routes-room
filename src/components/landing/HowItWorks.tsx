import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Lightbulb, Hammer, Rocket } from "lucide-react";
import { WhatsAppIcon } from "./whatsapp";

import { Reveal, SectionLabel } from "./Reveal";

const steps = [
  {
    n: "1",
    icon: MessageCircle,
    title: "Você entra em contato",
    desc: "Manda uma mensagem no WhatsApp ou preenche o formulário. Sem compromisso.",
  },
  {
    n: "2",
    icon: Lightbulb,
    title: "Entendemos sua necessidade",
    desc: "A gente conversa para entender o seu negócio e o que você precisa.",
  },
  {
    n: "3",
    icon: Hammer,
    title: "Criamos seu projeto",
    desc: "Fazemos o site com carinho e te mostramos antes de colocar no ar.",
  },
  {
    n: "4",
    icon: Rocket,
    title: "Colocamos tudo no ar",
    desc: "Seu site fica pronto e disponível para o mundo todo ver.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-title" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-28">
        <Reveal>
          <div className="mb-12 max-w-3xl md:mb-16">
            <SectionLabel index="03" text="Como funciona" />
            <h2
              id="como-title"
              className="font-display text-4xl leading-[1.06] font-semibold tracking-[-0.025em] md:text-5xl"
            >
              Simples do começo{" "}
              <span className="serif-it text-gradient">ao fim.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <article className="relative h-full rounded-3xl border border-border bg-card/40 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                <span
                  aria-hidden="true"
                  className="absolute top-6 right-6 font-display text-5xl font-semibold text-primary/20"
                >
                  {s.n}
                </span>
                <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <s.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex justify-center">
            <Link
              to="/diagnostico"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground glow-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              Quero começar agora
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
