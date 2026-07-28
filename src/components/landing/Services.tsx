import { ArrowUpRight } from "lucide-react";

import { services } from "./data";
import { waLink, WhatsAppIcon } from "./whatsapp";
import { Reveal, SectionLabel } from "./Reveal";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="mb-14 grid items-end gap-8 md:mb-20 md:grid-cols-12">
            <div className="md:col-span-8">
              <SectionLabel index="01" text="O que fazemos" />
              <h2
                id="servicos-title"
                className="font-display text-4xl leading-[1.05] font-semibold tracking-[-0.025em] md:text-[3.4rem]"
              >
                Tecnologia que trabalha{" "}
                <span className="serif-it text-gradient">enquanto você vende.</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:col-span-4 md:justify-self-end">
              Três frentes, um único objetivo: transformar a sua presença digital em canal de
              receita — não em cartão de visita parado no tempo.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-border">
          {services.map((s, i) => (
            <Reveal key={s.tag} delay={i * 80}>
              <article className="row-hover group grid items-start gap-x-8 gap-y-5 border-b border-border px-2 py-10 md:grid-cols-12 md:px-4 md:py-14">
                <div
                  aria-hidden="true"
                  className="pt-1 font-mono text-sm text-muted-foreground/60 md:col-span-1"
                >
                  /{s.tag}
                </div>

                <h3 className="font-display text-2xl leading-[1.15] font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:col-span-5 md:text-[2.1rem]">
                  {s.title}
                </h3>

                <div className="md:col-span-4">
                  <p className="mb-5 leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                    {s.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2 md:justify-self-end md:pt-1">
                  <a
                    href={waLink(`Olá! Quero conversar sobre ${s.short} para o meu negócio.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Conversar no WhatsApp sobre ${s.short}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    <WhatsAppIcon className="size-3.5" />
                    <span className="link-underline">Começar projeto</span>
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:rotate-45" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
