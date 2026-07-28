import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navLinks } from "./data";
import { cn } from "@/lib/utils";
import spaceAdsLogo from "@/assets/space-ads-logo.png.asset.json";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled && !open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Space Ads — voltar ao topo">
          <span className="relative grid size-10 place-items-center rounded-full bg-gradient-to-br from-primary/25 to-primary/5 ring-1 ring-border transition-all duration-500 group-hover:ring-primary/50 md:size-11">
            <span aria-hidden="true" className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <img src={spaceAdsLogo.url} alt="" className="relative size-8 rounded-full object-cover md:size-9" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-semibold tracking-tight md:text-base">Space Ads</span>
            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">Transformando ideias em soluções digitais</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/diagnostico"
            className="group hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Diagnóstico grátis
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto border-t border-border bg-background/95 backdrop-blur-2xl lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-6 py-10">
            {navLinks.map((l, i) => (
              <li key={l.href} className="border-b border-border">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-5 font-display text-2xl font-medium tracking-tight animate-rise"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span>{l.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </a>
              </li>
            ))}
            <li className="pt-8">
              <Link
                to="/diagnostico"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground"
              >
                Começar diagnóstico grátis
                <ArrowUpRight className="size-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
