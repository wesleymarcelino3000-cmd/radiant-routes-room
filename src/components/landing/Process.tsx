import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { steps } from "./data";
import { Reveal, SectionLabel } from "./Reveal";

export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="dot-bg absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Sticky header */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionLabel index="03" text="O processo" />
                <h2
                  id="processo-title"
                  className="mb-6 font-display text-4xl leading-[1.06] font-semibold tracking-[-0.025em] md:text-5xl"
                >
                  Da conversa ao deploy,{" "}
                  <span className="serif-it text-gradient">sem caixa-preta.</span>
                </h2>
                <p className="mb-9 max-w-md leading-relaxed text-muted-foreground">
                  Quatro etapas, zero surpresa. Você sabe onde o projeto está em cada dia — e o
                  código é seu desde a primeira linha.
                </p>
                <Link
                  to="/diagnostico"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <span className="link-underline">Começar pela etapa 01, de graça</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Timeline rail */}
          <ol className="relative lg:col-span-7">
            <span
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[7px] w-px bg-linear-to-b from-primary/60 via-border to-transparent"
            />
            {steps.map((step, i) => (
              <li key={step.n} className="relative pb-14 pl-12 last:pb-0">
                <Reveal delay={i * 90}>
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 left-0 size-[15px] rounded-full border-2 border-primary bg-background"
                  />
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-primary">ETAPA {step.n}</span>
                    <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mb-2.5 font-display text-2xl font-semibold tracking-tight md:text-[1.75rem]">
                    {step.t}
                  </h3>
                  <p className="max-w-lg leading-relaxed text-muted-foreground">{step.d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
