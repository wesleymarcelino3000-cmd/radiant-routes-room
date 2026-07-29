import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { services } from "./data";
import { waLink, WhatsAppIcon } from "./whatsapp";
import { Reveal, SectionLabel } from "./Reveal";
import { cn } from "@/lib/utils";

export function Services() {
  const [featured, ...others] = services;

  return (
    <section id="servicos" aria-labelledby="servicos-title" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-28">
        <Reveal>
          <div className="mb-12 max-w-3xl md:mb-16">
            <SectionLabel index="02" text="Nossos serviços" />
            <h2
              id="servicos-title"
              className="font-display text-4xl leading-[1.06] font-semibold tracking-[-0.025em] md:text-5xl"
            >
              Nossa especialidade é{" "}
              <span className="serif-it text-gradient">criar sites que vendem.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Também desenvolvemos sistemas e aplicativos sob medida para empresas que precisam
              ir além.
            </p>
          </div>
        </Reveal>

        {/* Featured: Sites */}
        <Reveal>
          <article className="group relative overflow-hidden rounded-[32px] border border-primary/30 bg-gradient-to-br from-primary/10 via-card/60 to-background p-8 backdrop-blur md:p-14">
            <div aria-hidden="true" className="absolute -top-24 -right-24 size-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {featured.badge ?? "Destaque"}
                </div>
                <h3 className="mb-5 font-display text-3xl leading-[1.1] font-semibold tracking-tight md:text-[2.6rem]">
                  {featured.title}
                </h3>
                <p className="mb-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {featured.desc}
                </p>

                <ul className="mb-9 grid gap-2.5 sm:grid-cols-2">
                  {featured.tech.map((t) => (
                    <li key={t} className="inline-flex items-center gap-2.5 text-sm">
                      <span className="grid size-5 place-items-center rounded-full bg-primary/15 text-primary">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/diagnostico"
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground glow-primary transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Solicitar orçamento
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:rotate-45" />
                  </Link>
                  <a
                    href={waLink("Olá! Quero um orçamento para criação de site.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:border-foreground/25"
                  >
                    <WhatsAppIcon className="size-4" />
                    Falar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="glass relative rounded-3xl p-6 md:p-7">
                  <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Um site profissional inclui
                  </div>
                  <ul className="space-y-3.5 text-sm">
                    {[
                      "Design exclusivo para o seu negócio",
                      "Otimizado para Google (SEO)",
                      "Rápido em qualquer dispositivo",
                      "Integração com WhatsApp",
                      "Hospedagem e suporte inclusos",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <span className="mt-0.5 grid size-5 place-items-center rounded-full bg-lime/20 text-lime">
                          <Check className="size-3" aria-hidden="true" />
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Complementary services */}
        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2">
          {others.map((s, i) => (
            <Reveal key={s.tag} delay={i * 80}>
              <article
                className={cn(
                  "group h-full rounded-3xl border border-border bg-card/40 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-foreground/25 md:p-8"
                )}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Solução avançada
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/60">/{s.tag}</span>
                </div>
                <h3 className="mb-3 font-display text-2xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mb-6 flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Olá! Quero conversar sobre ${s.short} para o meu negócio.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <WhatsAppIcon className="size-3.5" />
                  <span className="link-underline">Conversar sobre projeto</span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:rotate-45" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
