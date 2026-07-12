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
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


import heroVisual from "@/assets/hero-visual.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectSaas from "@/assets/project-saas.jpg";
import projectBrand from "@/assets/project-brand.jpg";
import primecodeLogo from "@/assets/primecode-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrimeCode — Transformando ideias em soluções digitais" },
      {
        name: "description",
        content:
          "Construímos web, software sob medida e apps móveis com engenharia rigorosa e design cinematográfico. Transformamos ideias em produtos digitais que escalam.",
      },
      { property: "og:title", content: "PrimeCode — Transformando ideias em soluções digitais" },
      {
        property: "og:description",
        content:
          "Web, software e mobile de alto padrão. Estratégia, design e engenharia sob um mesmo teto.",
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
    title: "Desenvolvimento Web",
    desc: "Aplicações SPA e plataformas escaláveis com Next.js, React e arquitetura headless de alta performance.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    icon: Layers,
    tag: "02",
    title: "Software Sob Medida",
    desc: "Backends robustos, integrações complexas e automações que sustentam operações críticas do seu negócio.",
    tech: ["Node.js", "Python", "PostgreSQL", "Cloud"],
  },
  {
    icon: Smartphone,
    tag: "03",
    title: "Aplicativos Móveis",
    desc: "Apps nativos e cross-platform com experiência fluida, foco em retenção e performance nativa real.",
    tech: ["Swift", "Kotlin", "React Native", "Flutter"],
  },
];

const differentiators = [
  { icon: Zap, title: "Velocidade Cirúrgica", desc: "Sprints curtos, entregas semanais. Você vê progresso real, não relatórios." },
  { icon: ShieldCheck, title: "Engenharia Rigorosa", desc: "Código auditável, testes automatizados e segurança em cada camada." },
  { icon: Rocket, title: "Escalável desde o dia 1", desc: "Arquitetura que aguenta 100 ou 100 milhões de usuários sem reescrita." },
  { icon: Users, title: "Time Sênior Dedicado", desc: "Sem terceirização opaca. Você conversa direto com quem constrói." },
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
    </div>
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
          href="#contato"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Orçamento
          <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="relative aurora-bg pt-32 pb-24 md:pt-40 md:pb-28 overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-rise">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="size-1.5 rounded-full bg-lime" />
            <span className="font-mono uppercase tracking-widest">ISO 27001</span>
            <span className="w-px h-3 bg-border" />
            Parceiro certificado AWS
          </div>

          <h1 className="font-display font-semibold tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
            Soluções digitais de nível corporativo para empresas que exigem <span className="text-primary">resultado</span>.
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Desenvolvemos web, software sob medida e aplicativos móveis para operações de missão crítica. Governança, previsibilidade e engenharia de padrão internacional.
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Solicitar proposta
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3.5 text-sm font-medium hover:bg-card transition-colors"
            >
              Ver casos de sucesso
            </a>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <Stat value="120+" label="Projetos entregues" />
            <div className="w-px bg-border" />
            <Stat value="8+" label="Anos de operação" />
            <div className="w-px bg-border" />
            <Stat value="97%" label="Retenção de clientes" />
            <div className="w-px bg-border" />
            <Stat value="24/7" label="Suporte SLA" />
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-rise [animation-delay:200ms]">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent blur-2xl" />
          <div className="relative rounded-xl overflow-hidden border border-border bg-card">
            <img
              src={heroVisual}
              alt="Infraestrutura digital corporativa"
              width={1400}
              height={1600}
              className="w-full h-auto"
            />
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
        <SectionHeader label="Serviços" title="Três pilares. Uma execução impecável." />

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
                <a href="#contato" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                  Iniciar projeto <ArrowUpRight className="size-4" />
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
          <SectionHeader label="Por que PrimeCode" title="Diferenciais que aparecem no produto final." align="left" />
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
            <div className="font-mono text-xs text-muted-foreground mb-6">// nosso processo</div>
            <ol className="space-y-6">
              {[
                { n: "01", t: "Descoberta", d: "Imersão no negócio, KPIs e restrições técnicas." },
                { n: "02", t: "Estratégia & Design", d: "Wireframes, protótipos e sistema de design proprietário." },
                { n: "03", t: "Engenharia", d: "Sprints semanais com entregas em ambiente de staging." },
                { n: "04", t: "Lançamento & Evolução", d: "Deploy, monitoramento e evolução contínua pós-launch." },
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
          <SectionHeader label="Portfólio" title="Trabalhos em destaque." align="left" />
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
        <SectionHeader label="Clientes" title="O que dizem sobre trabalhar com a PrimeCode." />
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
            Resposta em até 24h
          </div>
          <h2 className="font-display font-semibold tracking-tight text-4xl md:text-6xl mb-6">
            Vamos discutir seu próximo projeto.
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Conte seu desafio. Em uma call de 30 minutos, mapeamos escopo, prazo e orçamento — sem compromisso.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="mailto:primecode321@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium glow-primary hover:scale-[1.02] transition-transform"
            >
              primecode321@gmail.com
              <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 font-medium hover:bg-white/10 transition-colors"
            >
              Agendar call
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Mail className="size-4" /> primecode321@gmail.com</span>
            <span className="inline-flex items-center gap-2"><Phone className="size-4" /> +55 11 9999-9999</span>
            
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
            Transformando ideias em soluções digitais. Web, software e apps móveis com engenharia rigorosa e design de padrão internacional.
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
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><Instagram className="size-4" /> Instagram</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><Music2 className="size-4" /> TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <div>© 2026 PrimeCode. Todos os direitos reservados.</div>
        <div className="font-mono uppercase tracking-widest">Engenheirado com rigor</div>
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
    <div className={`mb-16 ${align === "center" ? "text-center max-w-2xl mx-auto" : ""}`}>
      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary mb-4">
        <span className="size-1 rounded-full bg-primary" />
        {label}
      </div>
      <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl leading-[1.1]">{title}</h2>
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
        <SectionHeader label="FAQ" title="Perguntas frequentes." />
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
            href="#contato"
            className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Fale conosco
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

