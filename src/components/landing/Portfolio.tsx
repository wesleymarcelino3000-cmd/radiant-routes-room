import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { projects, type Project } from "./data";
import { Reveal, SectionLabel } from "./Reveal";
import { cn } from "@/lib/utils";

const filters = [
  { id: "todos", label: "Tudo" },
  { id: "web", label: "Web" },
  { id: "software", label: "Software" },
  { id: "mobile", label: "Mobile" },
] as const;
type FilterId = (typeof filters)[number]["id"];

export function Portfolio() {
  const [active, setActive] = useState<FilterId>("todos");
  const list: Project[] = active === "todos" ? projects : projects.filter((p) => p.filter === active);

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-xl">
              <SectionLabel index="04" text="Portfólio" />
              <h2
                id="portfolio-title"
                className="font-display text-4xl leading-[1.06] font-semibold tracking-[-0.025em] md:text-5xl"
              >
                Projetos no ar,{" "}
                <span className="serif-it text-gradient">gerando resultado.</span>
              </h2>
            </div>
            <div
              role="tablist"
              aria-label="Filtrar projetos"
              className="flex flex-wrap gap-1.5 rounded-full border border-border bg-card/50 p-1.5 backdrop-blur"
            >
              {filters.map((f) => (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={active === f.id}
                  onClick={() => setActive(f.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-all",
                    active === f.id
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-6">
          {list.map((p, i) => {
            const span =
              i % 3 === 0 ? "md:col-span-4" : i % 3 === 1 ? "md:col-span-2" : "md:col-span-3";
            return (
              <Reveal key={p.title} delay={i * 70} className={cn(span, i % 4 === 2 && "md:col-span-3")}>
                <article className="group panel relative h-full overflow-hidden rounded-[26px]">
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent"
                    />
                    <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                      <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white backdrop-blur">
                        {p.tag}
                      </span>
                      <span className="font-mono text-[11px] tracking-widest text-white/70">
                        {p.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-5 px-6 py-6">
                    <div className="min-w-0">
                      <h3 className="mb-1.5 truncate font-display text-xl font-semibold tracking-tight md:text-2xl">
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-full border border-border transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
