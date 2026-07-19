import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export type DiagnosticAnswers = {
  servico: string;
  segmento: string;
  siteAtual: string;
  dor: string;
  objetivo: string;
  orcamento: string;
  urgencia: string;
  nome: string;
  email: string;
  telefone: string;
};

const STEPS: {
  key: keyof DiagnosticAnswers;
  title: string;
  subtitle: string;
  type: "options" | "contact";
  options?: string[];
}[] = [
  {
    key: "servico",
    title: "O que você precisa criar ou melhorar?",
    subtitle: "Escolha o que mais se aproxima do seu projeto.",
    type: "options",
    options: [
      "Site institucional / landing page",
      "Loja virtual (e-commerce)",
      "Sistema web sob medida",
      "Aplicativo mobile",
      "Ainda não sei — quero uma recomendação",
    ],
  },
  {
    key: "segmento",
    title: "Qual é o segmento do seu negócio?",
    subtitle: "Isso ajuda a gente a entender seu público.",
    type: "options",
    options: [
      "Saúde / Clínica / Estética",
      "Alimentação / Restaurante",
      "Varejo / Loja física",
      "Serviços / Consultoria",
      "Indústria / Construção",
      "Outro",
    ],
  },
  {
    key: "siteAtual",
    title: "Você já tem site ou sistema hoje?",
    subtitle: "Sem julgamentos — só pra saber o ponto de partida.",
    type: "options",
    options: [
      "Não tenho nada ainda",
      "Tenho, mas está desatualizado",
      "Tenho e funciona, mas não converte",
      "Só uso redes sociais",
    ],
  },
  {
    key: "dor",
    title: "Qual é a sua principal dor hoje?",
    subtitle: "O que mais atrapalha seu negócio crescer?",
    type: "options",
    options: [
      "Poucos clientes chegando",
      "Perco tempo com tarefas manuais",
      "Não passo credibilidade online",
      "Concorrência está na frente",
      "Não sei medir resultados",
    ],
  },
  {
    key: "objetivo",
    title: "Qual resultado você quer nos próximos 90 dias?",
    subtitle: "Seja realista — nosso plano é sob medida pra isso.",
    type: "options",
    options: [
      "Aumentar vendas / faturamento",
      "Gerar mais leads qualificados",
      "Automatizar processos internos",
      "Melhorar minha imagem no mercado",
      "Escalar a operação",
    ],
  },
  {
    key: "orcamento",
    title: "Faixa de investimento prevista?",
    subtitle: "Sem compromisso — só pra sugerir o escopo certo.",
    type: "options",
    options: [
      "Até R$ 3.000",
      "R$ 3.000 – R$ 8.000",
      "R$ 8.000 – R$ 20.000",
      "Acima de R$ 20.000",
      "Ainda estou avaliando",
    ],
  },
  {
    key: "urgencia",
    title: "Quando você quer começar?",
    subtitle: "Definimos prioridade da agenda com base nisso.",
    type: "options",
    options: [
      "O quanto antes (essa semana)",
      "Nos próximos 30 dias",
      "Em 1 a 3 meses",
      "Ainda estou planejando",
    ],
  },
  {
    key: "nome",
    title: "Falta pouco. Onde enviamos seu diagnóstico?",
    subtitle: "Preparamos uma análise personalizada com base nas suas respostas.",
    type: "contact",
  },
];

const emptyAnswers: DiagnosticAnswers = {
  servico: "",
  segmento: "",
  siteAtual: "",
  dor: "",
  objetivo: "",
  orcamento: "",
  urgencia: "",
  nome: "",
  email: "",
  telefone: "",
};

export function DiagnosticForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<DiagnosticAnswers>(emptyAnswers);
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();

  const total = STEPS.length;
  const current = STEPS[step];
  const progress = Math.round(((step + 1) / total) * 100);

  const pickOption = (value: string) => {
    setAnswers((prev) => ({ ...prev, [current.key]: value }));
    setTimeout(() => {
      if (step < total - 1) setStep(step + 1);
    }, 180);
  };

  const goBack = () => step > 0 && setStep(step - 1);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!answers.nome || !answers.email || !answers.telefone) return;
    setSending(true);
    const message = [
      `Serviço: ${answers.servico}`,
      `Segmento: ${answers.segmento}`,
      `Situação atual: ${answers.siteAtual}`,
      `Principal dor: ${answers.dor}`,
      `Objetivo em 90 dias: ${answers.objetivo}`,
      `Orçamento: ${answers.orcamento}`,
      `Urgência: ${answers.urgencia}`,
    ].join("\n");

    // Tenta enviar por email (funciona quando hospedado no Lovable).
    // Se falhar (ex.: deploy estático no Vercel), cai pro WhatsApp — nunca perde lead.
    let emailOk = false;
    try {
      const res = await fetch("/api/public/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: answers.nome.trim(),
          email: answers.email.trim(),
          phone: answers.telefone.trim(),
          serviceType: `Diagnóstico — ${answers.servico}`,
          message,
        }),
      });
      emailOk = res.ok;
    } catch {
      emailOk = false;
    }

    if (!emailOk) {
      const wpp = [
        `*Novo diagnóstico — ${answers.nome.trim()}*`,
        `Email: ${answers.email.trim()}`,
        `WhatsApp: ${answers.telefone.trim()}`,
        ``,
        message,
      ].join("\n");
      window.open(
        `https://wa.me/5537920008631?text=${encodeURIComponent(wpp)}`,
        "_blank",
        "noopener,noreferrer",
      );
    }

    navigate({ to: "/obrigado" });
  };


  const inputCls =
    "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition";

  return (
    <div className="max-w-2xl mx-auto text-left glass rounded-2xl p-6 md:p-10">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-2">
          <span>Diagnóstico gratuito</span>
          <span>{step + 1} / {total}</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div key={step} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
          {current.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-6">{current.subtitle}</p>

        {current.type === "options" && current.options && (
          <div className="grid gap-3">
            {current.options.map((opt) => {
              const selected = answers[current.key] === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => pickOption(opt)}
                  className={`text-left px-5 py-4 rounded-xl border transition-all group ${
                    selected
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-white/10 bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm md:text-base">{opt}</span>
                    <ArrowUpRight
                      className={`size-4 transition-all ${
                        selected ? "text-primary rotate-45" : "text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {current.type === "contact" && (
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">Nome completo</label>
              <input
                required
                maxLength={100}
                placeholder="Seu nome"
                value={answers.nome}
                onChange={(e) => setAnswers({ ...answers, nome: e.target.value })}
                className={inputCls}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">E-mail</label>
                <input
                  required
                  type="email"
                  maxLength={150}
                  placeholder="voce@email.com"
                  value={answers.email}
                  onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                  className={inputCls}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">WhatsApp</label>
                <input
                  required
                  maxLength={30}
                  placeholder="(37) 90000-0000"
                  value={answers.telefone}
                  onChange={(e) => setAnswers({ ...answers, telefone: e.target.value })}
                  className={inputCls}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover:scale-[1.01] transition-transform shadow-lg shadow-primary/20 disabled:opacity-70"
            >
              {sending ? "Enviando…" : "Receber meu diagnóstico"}
              <ArrowUpRight className="size-4" />
            </button>
            <p className="text-[11px] text-center text-muted-foreground">
              Seus dados são usados apenas para preparar seu diagnóstico. Sem spam.
            </p>
          </form>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 0}
          className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-0 transition-opacity"
        >
          ← Voltar
        </button>
        <div className="flex gap-1.5">
          {STEPS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === step ? "w-6 bg-primary" : i < step ? "w-1.5 bg-primary/60" : "w-1.5 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
