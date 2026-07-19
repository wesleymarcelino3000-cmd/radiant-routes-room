import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Clock, Lock } from "lucide-react";
import { DiagnosticForm } from "@/components/DiagnosticForm";
import primecodeLogo from "@/assets/primecode-logo.png";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico Gratuito — PrimeCode" },
      {
        name: "description",
        content:
          "Responda 8 perguntas rápidas e receba um diagnóstico personalizado do seu projeto digital. Grátis, sem compromisso e sem cartão.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Diagnóstico Gratuito — PrimeCode" },
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
          <Link to="/" className="flex items-center" aria-label="PrimeCode — voltar ao site">
            <img src={primecodeLogo} alt="PrimeCode" className="h-10 w-auto md:h-12" />
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
