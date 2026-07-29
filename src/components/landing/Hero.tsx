import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

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
      className="aurora-bg relative overflow-hidden pt-28 pb-20 md:pt-44 md:pb-32"
    >
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(560px circle at var(--mx, 50%) var(--my, 20%), oklch(0.72 0.125 230 / 0.09), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background"
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-lime" />
          </span>
          Especialistas em criação de sites
        </div>

        <h1 className="mx-auto mb-7 max-w-4xl font-display text-[clamp(2.2rem,9vw,5rem)] leading-[1.02] font-semibold tracking-[-0.03em] animate-rise">
          Sites profissionais que{" "}
          <span className="serif-it text-gradient">fazem sua empresa vender mais.</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mb-12 md:text-xl">
          Criamos sites modernos, rápidos e otimizados para o Google — feitos sob medida para
          atrair clientes e gerar resultado todos os dias.
        </p>

        <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link
            to="/diagnostico"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 glow-primary hover:-translate-y-0.5 sm:w-auto"
          >
            Solicitar orçamento
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
          <a
            href="#portfolio"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-7 py-4 text-sm font-medium backdrop-blur transition-colors hover:border-foreground/25 hover:bg-card sm:w-auto"
          >
            Ver portfólio
          </a>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          {["Orçamento sem compromisso", "Prazo por escrito", "Garantia de 90 dias"].map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <ShieldCheck className="size-3.5 text-lime" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
