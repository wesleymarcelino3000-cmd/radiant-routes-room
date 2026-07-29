import {
  ShieldCheck,
  Search,
  MapPin,
  Clock,
  Sparkles,
  MessageCircle,
  Phone,
  Lightbulb,
  Hammer,
  Rocket,
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
  featured?: boolean;
  badge?: string;
};

export const services: Service[] = [
  {
    tag: "01",
    title: "Criação de sites profissionais",
    short: "um site profissional",
    desc: "Nossa especialidade. Sites bonitos, rápidos e feitos para o seu cliente encontrar você no Google e entrar em contato.",
    tech: ["Design exclusivo", "Aparece no Google", "Funciona no celular", "Botão de WhatsApp"],
    featured: true,
    badge: "Mais procurado",
  },
  {
    tag: "02",
    title: "Sistemas para automatizar sua empresa",
    short: "um sistema para minha empresa",
    desc: "Para quem quer parar de anotar tudo no papel. Controle pedidos, agendamentos, estoque e clientes em um único lugar.",
    tech: ["Feito sob medida", "Fácil de usar", "Acesso de qualquer lugar"],
  },
  {
    tag: "03",
    title: "Aplicativos para celular",
    short: "um aplicativo",
    desc: "Para empresas que querem ter o próprio app na Play Store e App Store, com a sua marca e as suas regras.",
    tech: ["Android", "iPhone", "Sua marca", "Notificações"],
  },
];

export type Benefit = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const benefits: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Passa mais confiança",
    desc: "Uma empresa com site é levada a sério. Ponto.",
  },
  {
    icon: Search,
    title: "Aparece no Google",
    desc: "Seu cliente pesquisa e encontra a sua empresa antes do concorrente.",
  },
  {
    icon: MapPin,
    title: "Fica fácil de achar",
    desc: "Endereço, horário e WhatsApp — tudo em um lugar só.",
  },
  {
    icon: Clock,
    title: "Vende 24 horas por dia",
    desc: "Mesmo quando você está dormindo, o site continua trabalhando.",
  },
  {
    icon: Sparkles,
    title: "Mais profissional",
    desc: "Sua empresa passa a ter a cara de quem entrega qualidade.",
  },
  {
    icon: MessageCircle,
    title: "Cliente fala com você",
    desc: "Botão de WhatsApp em destaque para não perder nenhuma venda.",
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
    icon: MessageCircle,
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
    q: "Preciso pagar tudo de uma vez?",
    a: "Não. A gente parcela do jeito que caber no seu bolso. É só falar com a gente que a gente encontra um plano que funcione para o seu momento.",
  },
  {
    q: "Quanto tempo demora para o site ficar pronto?",
    a: "Um site simples fica pronto entre 1 e 2 semanas. Sites com mais páginas ou vendas online levam de 3 a 6 semanas. A gente combina o prazo antes de começar e cumpre.",
  },
  {
    q: "Vocês dão suporte depois que o site fica pronto?",
    a: "Sim. Depois da entrega, você tem 90 dias de suporte gratuito para qualquer ajuste. Depois disso, oferecemos planos mensais bem em conta para cuidar do seu site.",
  },
  {
    q: "Meu site vai aparecer no Google?",
    a: "Sim. Todo site que fazemos já sai preparado para aparecer nas pesquisas do Google. Com o tempo, sua empresa vai subindo nos resultados.",
  },
  {
    q: "Consigo atualizar o site sozinho depois?",
    a: "Sim, se você quiser. A gente pode deixar um painel simples para você mesmo trocar textos, fotos e preços. Se preferir, a gente atualiza para você.",
  },
  {
    q: "Preciso entender de tecnologia?",
    a: "Não precisa entender nada. A gente conversa em português claro, sem palavra difícil, e explica cada passo. Você só precisa saber o que quer para sua empresa.",
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
  { href: "#beneficios", label: "Benefícios" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#faq", label: "Dúvidas" },
];
