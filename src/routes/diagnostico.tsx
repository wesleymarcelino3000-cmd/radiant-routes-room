import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Clock, Lock } from "lucide-react";
import { DiagnosticForm } from "@/components/DiagnosticForm";
import spaceAdsLogo from "@/assets/space-ads-logo.png.asset.json";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico Gratuito — Space Ads" },
      {
        name: "description",
        content:
          "Responda 8 perguntas rápidas e receba um diagnóstico personalizado do seu projeto digital. Grátis, sem compromisso e sem cartão.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Diagnóstico Gratuito — Space Ads" },
      {
        property: "og:description",
        content: "Responda 8 perguntas rápidas e receba um plano sob medida para o seu negócio.",
      },
    ],
  }),
  component: DiagnosticoPage,
});

function DiagnosticoPage() {
  return (
    <main className="min-h-screen aurora-bg">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 py-10 md:py-16">
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="group flex items-center gap-2.5" aria-label="Space Ads — voltar ao site">
            <span className="relative grid size-11 place-items-center rounded-full bg-gradient-to-br from-primary/25 to-primary/5 ring-1 ring-border transition-all duration-500 group-hover:ring-primary/50 md:size-12">
              <span aria-hidden="true" className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img src={spaceAdsLogo.url} alt="" className="relative size-9 object-contain md:size-10" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-base font-semibold tracking-tight md:text-lg">Space Ads</span>
              <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground">Digital Studio</span>
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
          >
            ← Voltar ao site
          </Link>
        </div>

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="size-1.5 rounded-full bg-lime animate-pulse" />
            Diagnóstico exclusivo · Vagas limitadas
          </div>
          <h1 className="font-display font-semibold tracking-[-0.02em] text-4xl md:text-5xl leading-[1.05] mb-5">
            Descubra em 2 minutos o que <span className="text-gradient">seu negócio</span> precisa para vender mais.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Responda 8 perguntas rápidas e receba uma análise personalizada com escopo, prazo e caminho recomendado.
          </p>
        </div>

        <DiagnosticForm />

        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-center text-xs text-muted-foreground">
          <div className="glass rounded-xl px-4 py-3 inline-flex items-center justify-center gap-2">
            <Clock className="size-4 text-primary" /> Leva menos de 2 minutos
          </div>
          <div className="glass rounded-xl px-4 py-3 inline-flex items-center justify-center gap-2">
            <ShieldCheck className="size-4 text-lime" /> 100% gratuito
          </div>
          <div className="glass rounded-xl px-4 py-3 inline-flex items-center justify-center gap-2">
            <Lock className="size-4 text-primary" /> Dados protegidos
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-muted-foreground">
          Prefere falar antes?{" "}
          <a
            href="https://wa.me/5537920008631"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Chame no WhatsApp <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>
    </main>
  );
}
