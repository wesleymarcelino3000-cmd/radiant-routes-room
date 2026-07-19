import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Sparkle,
  Code2,
  Smartphone,
  Layers,
  Zap,
  ShieldCheck,
  Rocket,
  Users,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Music2,
  MessageCircle,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


import heroVisual from "@/assets/hero-visual.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectSaas from "@/assets/project-saas.jpg";
import projectBrand from "@/assets/project-brand.jpg";
import primecodeLogo from "@/assets/primecode-logo.png";

const WHATSAPP_NUMBER = "5537920008631";
const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const WhatsAppIcon = ({ className = "size-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.02 2C6.484 2 2 6.484 2 12.02c0 1.762.464 3.483 1.345 4.997L2 22l5.117-1.328a9.96 9.96 0 004.902 1.267h.004c5.535 0 10.019-4.484 10.02-10.019a9.955 9.955 0 00-2.929-7.087A9.958 9.958 0 0012.02 2z" />
  </svg>
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrimeCode — Sites e Sistemas que Vendem Mais Todos os Dias" },
      {
        name: "description",
        content:
          "Criamos sites, sistemas e apps que transformam visitantes em clientes. Diagnóstico gratuito em 30 minutos. Garantia de satisfação. Fale agora no WhatsApp.",
      },
      { property: "og:title", content: "PrimeCode — Sites e Sistemas que Vendem Mais Todos os Dias" },
      {
        property: "og:description",
        content:
          "Do primeiro clique à venda: sites, sistemas e apps sob medida, entregues no prazo e com garantia. Diagnóstico gratuito.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),

  component: HomePage,
});

const services = [
  {
    icon: Code2,
    tag: "01",
    title: "Sites que Convertem Visitantes em Clientes",
    desc: "Chega de site bonito que não vende. Criamos páginas rápidas, otimizadas para Google e projetadas para transformar cada visita em oportunidade real de negócio.",
    tech: ["Next.js", "React", "SEO", "Performance"],
  },
  {
    icon: Layers,
    tag: "02",
    title: "Sistemas Sob Medida que Economizam Horas",
    desc: "Automatize o que hoje consome seu dia: pedidos, estoque, agendamentos, financeiro. Um sistema pensado para o seu negócio, não um pacote genérico.",
    tech: ["Node.js", "Python", "PostgreSQL", "Cloud"],
  },
  {
    icon: Smartphone,
    tag: "03",
    title: "Aplicativos que seus Clientes Vão Usar",
    desc: "Apps rápidos, intuitivos e feitos para gerar recorrência. Do iOS ao Android, com foco em retenção e resultado — não só download.",
    tech: ["Swift", "Kotlin", "React Native", "Flutter"],
  },
];

const differentiators = [
  { icon: Zap, title: "Entrega no Prazo — ou Você Não Paga", desc: "Cronograma claro assinado antes de começar. Se atrasarmos por nossa culpa, o custo é nosso." },
  { icon: ShieldCheck, title: "90 Dias de Garantia Total", desc: "Qualquer bug ou ajuste após a entrega, resolvemos sem custo. Compromisso por escrito." },
  { icon: Rocket, title: "Pensado para Escalar com Você", desc: "Nasce preparado para 10 ou 10 mil clientes por dia. Sem retrabalho quando seu negócio crescer." },
  { icon: Users, title: "Você Fala Direto com o Dev", desc: "Sem intermediário, sem gerente enrolando. Contato direto no WhatsApp com quem constrói." },
];


const projects = [
  { img: projectFintech, tag: "Fintech", title: "Atlas Capital", desc: "Plataforma de gestão de patrimônio com dashboards em tempo real.", year: "2024" },
  { img: projectMobile, tag: "Mobile", title: "Aura Lifestyle", desc: "Marketplace mobile premium com checkout de 1 toque.", year: "2024" },
  { img: projectSaas, tag: "SaaS B2B", title: "Orbit Analytics", desc: "Suíte de analytics para operações industriais complexas.", year: "2023" },
  { img: projectBrand, tag: "Software", title: "Cromo Studio", desc: "Ferramenta de criação 3D colaborativa baseada em WebGL.", year: "2023" },
];

const testimonials = [
  {
    quote:
      "Precisava de um site pra minha clínica que passasse mais confiança. Eles entenderam rápido o que eu queria e o resultado ficou ótimo. Já recebi vários pacientes novos que disseram ter marcado pelo site.",
    name: "Dra. Patrícia Mendes",
    role: "Clínica Odontológica, Divinópolis - MG",
  },
  {
    quote:
      "Meu restaurante ainda anotava pedidos no papel. Fizeram um sistema simples de comandas que qualquer garçom aprende em 10 minutos. Economizo pelo menos duas horas por dia no fechamento do caixa.",
    name: "Carlos Ferreira",
    role: "Proprietário, Cantina do Carlão - Itaúna - MG",
  },
  {
    quote:
      "Sou meio leiga em tecnologia e tinha medo de contratar. Explicaram tudo com paciência, sem enrolar. Meu e-commerce ficou pronto no prazo combinado e as vendas online já superam a loja física.",
    name: "Juliana Rocha",
    role: "Loja de Roupas Infantis, Pará de Minas - MG",
  },
];


const stack = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Swift", "Kotlin", "Flutter", "AWS", "Vercel", "Figma", "Rust", "GraphQL", "Prisma"];

function HomePage() {
  const [active, setActive] = useState<"todos" | "web" | "mobile" | "software">("todos");
  const filtered = projects.filter((p) => {
    if (active === "todos") return true;
    if (active === "web") return p.tag === "SaaS B2B" || p.tag === "Fintech";
    if (active === "mobile") return p.tag === "Mobile";
    return p.tag === "Software";
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Nav />
      <Hero />
      <TechMarquee />
      <Services />
      <WhyUs />
      <Portfolio active={active} setActive={setActive} projects={filtered} />
      <Testimonials />
      <Faq />
      <Cta />

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={waLink("Olá! Quero falar com a PrimeCode.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <WhatsAppIcon className="size-7" />
      <span className="sr-only">Fale conosco no WhatsApp</span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" aria-hidden="true" />
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center" aria-label="PrimeCode — início">
          <img src={primecodeLogo} alt="PrimeCode" className="h-10 w-auto md:h-12" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Portfólio</a>
          <a href="#agencia" className="hover:text-foreground transition-colors">Agência</a>
          <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
        </div>
        <a
          href={waLink("Olá! Quero meu diagnóstico gratuito de 30 minutos com a PrimeCode.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Diagnóstico gratuito no WhatsApp"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <WhatsAppIcon className="size-4" />
          Diagnóstico grátis
        </a>

      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="relative aurora-bg pt-36 pb-28 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 animate-rise">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 backdrop-blur px-3.5 py-1.5 text-xs text-muted-foreground mb-10">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-lime opacity-60 animate-ping" />
              <span className="relative inline-flex size-1.5 rounded-full bg-lime" />
            </span>
            <span className="font-mono uppercase tracking-[0.18em]">Vagas abertas em Julho</span>
            <span className="w-px h-3 bg-border" />
            +120 projetos entregues
          </div>

          <h1 className="font-display font-semibold tracking-[-0.03em] text-[2.75rem] leading-[1.02] md:text-6xl lg:text-[4.5rem] mb-8">
            Seu concorrente já está vendendo online.{" "}
            <span className="text-gradient">Está na hora de você virar o jogo.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
            Criamos sites, sistemas e aplicativos que atraem clientes 24 horas por dia — mesmo enquanto você dorme. Sem promessa vazia: prazo por escrito, garantia de 90 dias e você fala direto com quem desenvolve.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href={waLink("Olá! Quero meu diagnóstico gratuito de 30 minutos para o meu projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Diagnóstico gratuito no WhatsApp"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all glow-primary hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="size-4" />
              Quero meu diagnóstico grátis
              <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3.5 text-sm font-medium hover:bg-card hover:border-primary/30 transition-colors"
            >
              Ver resultados reais
            </a>
          </div>

          <p className="text-xs text-muted-foreground mb-16 flex items-center gap-2">
            <ShieldCheck className="size-3.5 text-lime" />
            Sem compromisso · Resposta em minutos · 100% humano
          </p>

          <div className="flex flex-wrap gap-x-10 gap-y-6">
            <Stat value="+120" label="Projetos no ar" />
            <div className="w-px bg-border self-stretch" />
            <Stat value="8 anos" label="Entregando resultado" />
            <div className="w-px bg-border self-stretch" />
            <Stat value="97%" label="Clientes que ficam" />
            <div className="w-px bg-border self-stretch" />
            <Stat value="24h" label="Resposta garantida" />
          </div>

        </div>

        <div className="lg:col-span-5 relative animate-rise [animation-delay:200ms]">
          <div className="absolute -inset-8 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent blur-3xl" />
          <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-card shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
            <img
              src={heroVisual}
              alt="Infraestrutura digital corporativa"
              width={1400}
              height={1600}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </header>
  );
}



function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display font-semibold text-3xl md:text-4xl text-foreground">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}


function TechMarquee() {
  return (
    <section className="border-y border-border py-8 overflow-hidden bg-card/30">
      <div className="flex whitespace-nowrap animate-marquee gap-16 text-2xl md:text-3xl font-display font-medium text-muted-foreground/50">
        {[...stack, ...stack].map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            {t}
            <span className="size-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="O que fazemos por você" title="Tecnologia que trabalha enquanto você cuida do seu negócio." />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-3xl glass p-8 hover:-translate-y-1 transition-all duration-500 hover:border-primary/40"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all" />
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="grid place-items-center size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <s.icon className="size-6" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">/{s.tag}</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-border px-3 py-1 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={waLink(`Olá! Tenho interesse no serviço de ${s.title}. Podemos conversar?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Iniciar projeto de ${s.title} pelo WhatsApp`}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                >
                  <WhatsAppIcon className="size-3.5" /> Quero começar agora <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="agencia" className="py-32 px-6 relative">
      <div className="absolute inset-0 aurora-bg opacity-40" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader label="Por que escolher a PrimeCode" title="Você já foi enganado antes. Aqui é diferente — e no papel." align="left" />
          <div className="grid sm:grid-cols-2 gap-6 mt-4">
            {differentiators.map((d) => (
              <div key={d.title} className="glass rounded-2xl p-6">
                <div className="grid place-items-center size-11 rounded-xl bg-primary/15 text-primary mb-4">
                  <d.icon className="size-5" />
                </div>
                <h4 className="font-display font-bold mb-2">{d.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="glass rounded-3xl p-8">
            <div className="font-mono text-xs text-muted-foreground mb-6">// como trabalhamos com você</div>
            <ol className="space-y-6">
              {[
                { n: "01", t: "Conversa gratuita de 30min", d: "Você conta o problema. Nós escutamos e mapeamos a solução — sem custo, sem compromisso." },
                { n: "02", t: "Proposta clara em 48h", d: "Escopo, prazo e investimento no papel. Nada de surpresa depois." },
                { n: "03", t: "Você acompanha semana a semana", d: "Toda sexta você vê o que foi feito. Ajustamos com você antes de continuar." },
                { n: "04", t: "Entrega + garantia de 90 dias", d: "No ar no prazo. Qualquer ajuste nos 3 meses seguintes: por nossa conta." },

              ].map((step) => (
                <li key={step.n} className="flex gap-5 pb-6 last:pb-0 border-b border-border last:border-0">
                  <div className="font-display text-primary text-xl font-bold shrink-0">{step.n}</div>
                  <div>
                    <div className="font-display font-bold mb-1">{step.t}</div>
                    <div className="text-sm text-muted-foreground">{step.d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

type Project = { img: string; tag: string; title: string; desc: string; year: string };

function Portfolio({
  active,
  setActive,
  projects,
}: {
  active: string;
  setActive: (v: "todos" | "web" | "mobile" | "software") => void;
  projects: Project[];
}) {
  const filters: Array<{ id: "todos" | "web" | "mobile" | "software"; label: string }> = [
    { id: "todos", label: "Todos" },
    { id: "web", label: "Web" },
    { id: "software", label: "Software" },
    { id: "mobile", label: "Mobile" },
  ];
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <SectionHeader label="Projetos que geram resultado" title="Veja o que já colocamos no ar." align="left" />
          <div className="flex gap-2 glass rounded-full p-1.5">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  active === f.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative rounded-3xl overflow-hidden glass ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <span className="absolute top-4 left-4 text-xs rounded-full glass px-3 py-1">{p.tag}</span>
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-bold mb-1 truncate">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs text-muted-foreground mb-2">{p.year}</div>
                  <div className="grid place-items-center size-10 rounded-full bg-primary text-primary-foreground group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Quem já confiou" title="Empresários reais. Resultados reais." />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-3xl p-8 flex flex-col">
              <div className="text-primary text-4xl font-display leading-none mb-6">"</div>
              <p className="text-foreground/90 leading-relaxed mb-8 flex-1">{t.quote}</p>
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="size-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="contato" className="py-32 px-6">
      <div className="max-w-6xl mx-auto relative rounded-[2.5rem] overflow-hidden glass p-12 md:p-20 text-center">
        <div className="absolute inset-0 aurora-bg opacity-80" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="size-1.5 rounded-full bg-lime animate-pulse" />
            Últimas vagas de Julho · Resposta em minutos
          </div>
          <h2 className="font-display font-semibold tracking-tight text-4xl md:text-6xl mb-6">
            Cada dia parado é dinheiro que vai para o concorrente.
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Em 30 minutos no WhatsApp você sai com clareza total do que precisa, quanto custa e em quanto tempo fica pronto. Grátis, sem enrolação e sem pressão de venda.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <a
              href={waLink("Olá! Quero garantir minha vaga e fazer o diagnóstico gratuito com a PrimeCode.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Garantir vaga no WhatsApp"
              className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-4 font-medium hover:scale-[1.02] transition-transform shadow-lg shadow-[#25D366]/20"
            >
              <WhatsAppIcon className="size-5" />
              Quero minha vaga agora
              <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="mailto:primecode321@gmail.com"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 font-medium hover:bg-white/10 transition-colors"
            >
              <Mail className="size-4" />
              Prefiro por e-mail
            </a>
          </div>
          <p className="text-xs text-muted-foreground mb-10">100% gratuito · Sem cartão · Sem compromisso</p>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Mail className="size-4" /> primecode321@gmail.com</span>
            <a href="https://wa.me/5537920008631" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition-colors"><Phone className="size-4" /> +55 37 92000-8631</a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="mb-4">
            <img src={primecodeLogo} alt="PrimeCode" className="h-14 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Sites, sistemas e apps sob medida para empresas que querem vender mais e trabalhar menos. Prazo por escrito, garantia de 90 dias e você fala direto com quem constrói.
          </p>
        </div>
        <div>
          <h5 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Explorar</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a></li>
            <li><a href="#agencia" className="hover:text-primary transition-colors">Agência</a></li>
            <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Social</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.instagram.com/primecode321/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><Instagram className="size-4" /> Instagram</a></li>
            <li><a href="https://www.tiktok.com/@primecode43" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><Music2 className="size-4" /> TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <div>© 2026 PrimeCode. Todos os direitos reservados.</div>
        <div className="font-mono uppercase tracking-widest">Feito para quem quer resultado</div>
      </div>
    </footer>
  );
}

function SectionHeader({
  label,
  title,
  align = "center",
}: {
  label: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-20 ${align === "center" ? "text-center max-w-2xl mx-auto" : ""}`}>
      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-primary mb-5">
        <span className="size-1 rounded-full bg-primary" />
        {label}
      </div>
      <h2 className="font-display font-semibold tracking-[-0.02em] text-4xl md:text-5xl leading-[1.08]">{title}</h2>
    </div>
  );
}

const faqs = [
  {
    q: "Como funciona o orçamento de um projeto?",
    a: "Cada projeto é único, então preferimos entender antes de falar em valores. Marcamos uma conversa inicial de 30 minutos, sem compromisso, para conhecer seu negócio e objetivos. Depois enviamos uma proposta detalhada com escopo, prazo e investimento sob medida.",
  },
  {
    q: "Em quanto tempo meu site ou sistema fica pronto?",
    a: "Sites institucionais entre 2 e 4 semanas. E-commerces e sistemas sob medida entre 6 e 12 semanas. Aplicativos móveis entre 2 e 4 meses. Definimos o prazo real logo na proposta e cumprimos.",
  },
  {
    q: "Preciso entender de tecnologia para trabalhar com vocês?",
    a: "Não. Conversamos em linguagem simples, sem jargão. Explicamos cada etapa e mostramos o progresso em ambiente de teste toda semana para você acompanhar e opinar.",
  },
  {
    q: "O código e o site ficam no meu nome?",
    a: "Sim, sempre. Tudo que produzimos é seu: código-fonte, domínio, contas de hospedagem e acessos. Você não fica preso a nós.",
  },
  {
    q: "Vocês dão manutenção depois de entregar?",
    a: "Sim. Oferecemos planos mensais de manutenção que incluem atualizações, backups, monitoramento e pequenos ajustes. Também atendemos sob demanda quando preferir.",
  },
  {
    q: "Atendem clientes de qualquer região?",
    a: "Sim. Atendemos todo o Brasil de forma 100% remota. Reuniões por videoconferência e comunicação por WhatsApp e e-mail.",
  },
];

function Faq() {
  return (
    <section id="faq" className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Antes de você decidir" title="As dúvidas que todo cliente faz — respondidas com honestidade." />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display font-medium text-lg hover:no-underline hover:text-primary py-6">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <a
            href={waLink("Olá! Tenho uma dúvida sobre os serviços da PrimeCode.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tirar dúvidas pelo WhatsApp"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover:bg-[#20bd5a] transition-colors"
          >
            <WhatsAppIcon className="size-4" />
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

