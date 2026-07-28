import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, ShieldCheck, Zap } from "lucide-react";

import { stack } from "./data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className="aurora-bg relative overflow-hidden pt-28 pb-16 md:pt-44 md:pb-28"
    >
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx, 70%) var(--my, 18%), oklch(0.72 0.125 230 / 0.07), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12">
        {/* Copy */}
        <div className="lg:col-span-6 animate-rise">
          <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-lime" />
            </span>
            <span className="font-mono uppercase tracking-[0.18em]">Agenda aberta</span>
            <span aria-hidden="true" className="h-3 w-px bg-border" />
            <span>Vagas limitadas por mês</span>
          </div>

          <h1 className="mb-8 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.03] font-semibold tracking-[-0.03em]">
            Seu concorrente já vende online.{" "}
            <span className="serif-it text-gradient">Está na hora de virar o jogo.</span>
          </h1>

          <p className="mb-11 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Criamos sites, sistemas e aplicativos que atraem clientes 24 horas por dia — mesmo
            enquanto você dorme. Prazo por escrito, garantia de 90 dias e contato direto com quem
            desenvolve.
          </p>

          <div className="mb-7 flex flex-wrap items-center gap-3">
            <Link
              to="/diagnostico"
              aria-label="Começar diagnóstico gratuito"
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 glow-primary hover:-translate-y-0.5"
            >
              Quero meu diagnóstico grátis
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-4 text-sm font-medium backdrop-blur transition-colors hover:border-foreground/20 hover:bg-card"
            >
              Ver resultados reais
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {["Sem compromisso", "Resposta em minutos", "100% humano"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <ShieldCheck className="size-3.5 text-lime" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Blueprint panel */}
        <div className="relative lg:col-span-6 animate-rise [animation-delay:180ms]">
          <div
            aria-hidden="true"
            className="absolute -inset-10 rounded-full bg-linear-to-tr from-primary/15 via-violet/10 to-transparent blur-3xl"
          />

          <div className="corner-ticks relative mx-auto max-w-xl">
            <div className="glass overflow-hidden rounded-[26px]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-foreground/15" />
                <span aria-hidden="true" className="size-2.5 rounded-full bg-foreground/15" />
                <span aria-hidden="true" className="size-2.5 rounded-full bg-foreground/15" />
                <span className="ml-2 truncate font-mono text-[11px] text-muted-foreground">
                  primecode · projeto / atlas-capital
                </span>
                <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border border-lime/25 bg-lime/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-lime">
                  <span className="size-1 rounded-full bg-lime" />
                  em produção
                </span>
              </div>

              {/* Spec rows */}
              <dl className="px-5 py-2 font-mono text-xs">
                {[
                  { k: "escopo", v: "plataforma web + api" },
                  { k: "stack", v: "react · node · postgres" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-center justify-between gap-4 border-b border-dashed border-border py-3.5"
                  >
                    <dt className="text-muted-foreground">{row.k}</dt>
                    <dd className="text-foreground">{row.v}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4 border-b border-dashed border-border py-3.5">
                  <dt className="text-muted-foreground">sprint</dt>
                  <dd className="flex items-center gap-3">
                    <span
                      role="progressbar"
                      aria-valuenow={66}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label="Progresso da sprint"
                      className="h-1 w-24 overflow-hidden rounded-full bg-foreground/10"
                    >
                      <span className="block h-full w-2/3 rounded-full bg-linear-to-r from-primary to-accent" />
                    </span>
                    <span className="text-foreground">4 / 6</span>
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="text-muted-foreground">lighthouse</dt>
                  <dd className="inline-flex items-center gap-2">
                    <span className="rounded-md border border-lime/25 bg-lime/10 px-2 py-0.5 text-lime">
                      99
                    </span>
                    <span className="text-muted-foreground">/ 100</span>
                  </dd>
                </div>
              </dl>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border px-5 py-3.5 font-mono text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex size-1.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-lime opacity-60" />
                    <span className="relative size-1.5 rounded-full bg-lime" />
                  </span>
                  deploy agendado — sex 18h
                </span>
                <span aria-hidden="true">#a3f9c2</span>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div className="glass animate-float-y absolute -top-6 right-0 rounded-2xl px-4 py-3 md:-right-6">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-lime/15 text-lime">
                <Check className="size-4" aria-hidden="true" />
              </span>
              <div>
                <div className="text-xs font-semibold">Código 100% seu</div>
                <div className="text-[11px] text-muted-foreground">sem fidelidade, sem refém</div>
              </div>
            </div>
          </div>
          <div className="glass animate-float-y absolute -bottom-6 left-0 rounded-2xl px-4 py-3 [animation-delay:1.4s] md:-left-6">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                <Zap className="size-4" aria-hidden="true" />
              </span>
              <div>
                <div className="text-xs font-semibold">Entrega em semanas</div>
                <div className="text-[11px] text-muted-foreground">não em meses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TechMarquee() {
  return (
    <section
      aria-label="Tecnologias que usamos"
      className="overflow-hidden border-y border-border bg-card/30 py-6"
    >
      <div
        className="animate-marquee flex whitespace-nowrap [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
      >
        {[...stack, ...stack].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-14 pr-14 font-mono text-sm uppercase tracking-[0.22em] text-muted-foreground/60"
          >
            {t}
            <span aria-hidden="true" className="size-1 rotate-45 bg-primary/70" />
          </span>
        ))}
      </div>
    </section>
  );
}
