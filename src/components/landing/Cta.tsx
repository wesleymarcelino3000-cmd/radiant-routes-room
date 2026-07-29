import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram } from "lucide-react";

import { navLinks } from "./data";
import { waLink, WhatsAppIcon } from "./whatsapp";
import { Reveal } from "./Reveal";

const spaceAdsLogo = "/space-ads-logo.png";

export function CtaBlock() {
  return (
    <section id="contato" aria-labelledby="cta-title" className="relative px-5 py-16 sm:px-6 md:py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-border bg-card">
        <div aria-hidden="true" className="aurora-bg absolute inset-0 opacity-90" />
        <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-40" />
        <div
          aria-hidden="true"
          className="animate-drift absolute -top-24 -right-24 size-80 rounded-full bg-primary/20 blur-3xl"
        />

        <div className="relative grid gap-10 p-7 sm:p-10 md:grid-cols-12 md:gap-12 md:p-16 lg:p-20">
          <div className="md:col-span-8">
            <Reveal>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-lime/25 bg-lime/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-lime">
                <span className="size-1.5 rounded-full bg-lime animate-pulse" />
                Últimas vagas · Resposta em minutos
              </div>
              <h2
                id="cta-title"
                className="mb-6 font-display text-[clamp(1.9rem,7vw,3.75rem)] leading-[1.05] font-semibold tracking-[-0.03em] md:leading-[1.02]"
              >
                Cada dia parado é dinheiro indo para o{" "}
                <span className="serif-it text-gradient">concorrente.</span>
              </h2>
              <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Em 30 minutos você sai com clareza total do que precisa, quanto custa e em quanto
                tempo fica pronto. Grátis, sem enrolação e sem pressão de venda.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  to="/diagnostico"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 glow-primary hover:-translate-y-0.5 sm:w-auto sm:px-7 sm:py-4"
                >
                  Começar meu diagnóstico
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                </Link>
                <a
                  href={waLink("Olá! Quero conversar com a Space Ads sobre um projeto.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:border-foreground/25 sm:w-auto sm:px-7 sm:py-4"
                >
                  <WhatsAppIcon className="size-4" />
                  Prefiro pelo WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="md:col-span-4" delay={120}>
            <div className="rounded-3xl border border-border bg-background/40 p-7 backdrop-blur">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Contato direto
              </div>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:spaceads.tech@gmail.com"
                    className="group flex items-start gap-3 text-sm"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                      <Mail className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">E-mail</span>
                      <span className="link-underline">contato@spaceads</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={waLink("Olá! Quero falar com a Space Ads.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-sm"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-whatsapp/15 text-whatsapp">
                      <WhatsAppIcon className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">WhatsApp</span>
                      <span className="link-underline">+55 37 92000-8631</span>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="mt-6 border-t border-border pt-5 text-xs text-muted-foreground">
                Atendimento remoto para todo o Brasil.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:gap-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <div className="mb-5 flex items-center gap-3">
            <span className="relative grid size-14 place-items-center rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent ring-1 ring-border">
              <span aria-hidden="true" className="absolute inset-0 rounded-full bg-primary/15 blur-lg" />
              <img src={spaceAdsLogo} alt="" className="relative size-11 rounded-full object-cover" />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-semibold tracking-tight">Space Ads</span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Transformando ideias em soluções digitais</span>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sites, sistemas e apps sob medida para empresas que querem vender mais e trabalhar
            menos. Prazo por escrito, garantia de 90 dias e contato direto com quem constrói.
          </p>
        </div>
        <div className="md:col-span-4">
          <h5 className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Explorar
          </h5>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h5 className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Social
          </h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.instagram.com/spaceads.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Instagram className="size-4" aria-hidden="true" /> @spaceads.tech
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Space Ads. Todos os direitos reservados.</span>
          <span className="font-mono uppercase tracking-[0.22em]">
            Feito para quem quer resultado
          </span>
        </div>
      </div>
    </footer>
  );
}
