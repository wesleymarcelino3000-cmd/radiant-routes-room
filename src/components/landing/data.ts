import {
  Code2,
  Layers,
  Smartphone,
  Zap,
  ShieldCheck,
  Rocket,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

import projectFintech from "@/assets/project-fintech.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectSaas from "@/assets/project-saas.jpg";
import projectBrand from "@/assets/project-brand.jpg";

export type Service = {
  tag: string;
  title: string;
  short: string;
  desc: string;
  tech: string[];
};

export const services: Service[] = [
  {
    tag: "01",
    title: "Sites que convertem visitantes em clientes",
    short: "um site profissional",
    desc: "Chega de site bonito que não vende. Páginas rápidas, otimizadas para o Google e projetadas para transformar cada visita em oportunidade real de negócio.",
    tech: ["React", "Next.js", "SEO", "Performance"],
  },
  {
    tag: "02",
    title: "Sistemas sob medida que economizam horas",
    short: "um sistema sob medida",
    desc: "Automatize o que hoje consome o seu dia: pedidos, estoque, agendamentos, financeiro. Um sistema pensado para o seu negócio — não um pacote genérico.",
    tech: ["Node.js", "PostgreSQL", "APIs", "Cloud"],
  },
  {
    tag: "03",
    title: "Aplicativos que seus clientes vão usar",
    short: "um aplicativo",
    desc: "Apps rápidos e intuitivos, feitos para gerar recorrência. Do iOS ao Android, com foco em retenção e resultado — não só em download.",
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
];

export type Guarantee = {
  icon: LucideIcon;
  code: string;
  title: string;
  desc: string;
};

export const guarantees: Guarantee[] = [
  {
    icon: ShieldCheck,
    code: "G.01",
    title: "90 dias de garantia total",
    desc: "Qualquer bug ou ajuste após a entrega, resolvemos sem custo. Compromisso por escrito no contrato.",
  },
  {
    icon: Rocket,
    code: "G.02",
    title: "Pensado para escalar com você",
    desc: "Nasce preparado para 10 ou 10 mil clientes por dia. Sem retrabalho quando o seu negócio crescer.",
  },
  {
    icon: MessagesSquare,
    code: "G.03",
    title: "Você fala direto com o dev",
    desc: "Sem intermediário e sem gerente enrolando. Contato direto no WhatsApp com quem constrói o seu projeto.",
  },
];

export type Step = { n: string; t: string; d: string; duration: string };

export const steps: Step[] = [
  {
    n: "01",
    t: "Conversa gratuita",
    d: "Você conta o problema, nós escutamos e mapeamos a solução. Sem custo, sem compromisso e sem pressão de venda.",
    duration: "30 min",
  },
  {
    n: "02",
    t: "Proposta clara",
    d: "Escopo, prazo e investimento no papel. Você sabe exatamente o que recebe, quando e por quanto.",
    duration: "em 48h",
  },
  {
    n: "03",
    t: "Acompanhamento semanal",
    d: "Toda semana você vê o que foi feito em ambiente de teste e opina antes de seguirmos. Sem caixa-preta.",
    duration: "toda sexta",
  },
  {
    n: "04",
    t: "Entrega + garantia",
    d: "Projeto no ar dentro do prazo combinado. Qualquer ajuste nos 90 dias seguintes sai por nossa conta.",
    duration: "90 dias",
  },
];

export type Project = {
  img: string;
  tag: string;
  filter: "web" | "mobile" | "software";
  title: string;
  desc: string;
  year: string;
};

export const projects: Project[] = [
  {
    img: projectFintech,
    tag: "Fintech",
    filter: "web",
    title: "Atlas Capital",
    desc: "Plataforma de gestão de patrimônio com dashboards em tempo real.",
    year: "2024",
  },
  {
    img: projectMobile,
    tag: "Mobile",
    filter: "mobile",
    title: "Aura Lifestyle",
    desc: "Marketplace mobile premium com checkout de um toque.",
    year: "2024",
  },
  {
    img: projectSaas,
    tag: "SaaS B2B",
    filter: "web",
    title: "Orbit Analytics",
    desc: "Suíte de analytics para operações industriais complexas.",
    year: "2023",
  },
  {
    img: projectBrand,
    tag: "Software",
    filter: "software",
    title: "Cromo Studio",
    desc: "Ferramenta de criação 3D colaborativa baseada em WebGL.",
    year: "2023",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Precisava de um site pra minha clínica que passasse mais confiança. Eles entenderam rápido o que eu queria e o resultado ficou ótimo. Já recebi vários pacientes novos que disseram ter marcado pelo site.",
    name: "Dra. Patrícia Mendes",
    initials: "PM",
    role: "Clínica odontológica · Divinópolis, MG",
  },
  {
    quote:
      "Meu restaurante ainda anotava pedidos no papel. Fizeram um sistema de comandas que qualquer garçom aprende em 10 minutos. Economizo umas duas horas por dia no fechamento do caixa.",
    name: "Carlos Ferreira",
    initials: "CF",
    role: "Cantina do Carlão · Itaúna, MG",
  },
  {
    quote:
      "Sou meio leiga em tecnologia e tinha medo de contratar. Explicaram tudo com paciência, sem enrolar. O e-commerce ficou pronto no prazo e as vendas online já superam a loja física.",
    name: "Juliana Rocha",
    initials: "JR",
    role: "Loja de roupas infantis · Pará de Minas, MG",
  },
];

export const faqs = [
  {
    q: "Como funciona o orçamento de um projeto?",
    a: "Cada projeto é único, então preferimos entender antes de falar em valores. Marcamos uma conversa inicial de 30 minutos, sem compromisso, para conhecer seu negócio e objetivos. Depois enviamos uma proposta detalhada com escopo, prazo e investimento sob medida.",
  },
  {
    q: "Em quanto tempo meu site ou sistema fica pronto?",
    a: "Sites institucionais entre 2 e 4 semanas. E-commerces e sistemas sob medida entre 6 e 12 semanas. Aplicativos entre 2 e 4 meses. Definimos o prazo real logo na proposta — e cumprimos.",
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
    a: "Sim. Oferecemos planos mensais com atualizações, backups, monitoramento e pequenos ajustes. Também atendemos sob demanda quando você preferir.",
  },
  {
    q: "Atendem clientes de qualquer região?",
    a: "Sim. Atendemos todo o Brasil de forma 100% remota, com reuniões por videoconferência e comunicação por WhatsApp e e-mail.",
  },
];

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Swift",
  "Kotlin",
  "Flutter",
  "AWS",
  "Vercel",
  "Figma",
  "GraphQL",
  "Prisma",
  "Rust",
];

export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#agencia", label: "Agência" },
  { href: "#processo", label: "Processo" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#faq", label: "Dúvidas" },
];
