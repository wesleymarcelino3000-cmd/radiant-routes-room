import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import primecodeLogo from "@/assets/primecode-logo.png";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigado! — PrimeCode" },
      { name: "description", content: "Recebemos seu diagnóstico. Em instantes retornaremos o contato." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds <= 0) {
      navigate({ to: "/" });
      return;
    }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, navigate]);

  const progress = ((5 - seconds) / 5) * 100;

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-60" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-xl w-full glass rounded-3xl p-10 md:p-14 text-center shadow-elegant">
        <img src={primecodeLogo} alt="PrimeCode" className="h-16 w-auto mx-auto mb-8" />

        <div className="inline-flex items-center justify-center size-16 rounded-full bg-[#25D366]/15 text-[#25D366] mx-auto mb-6">
          <CheckCircle2 className="size-9" />
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Obrigado pelo seu diagnóstico!
        </h1>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          Recebemos todas as suas respostas. Nossa equipe já está analisando e
          em breve entraremos em contato com uma proposta sob medida para o seu negócio.
        </p>

        <div className="glass rounded-2xl p-5 mb-6">
          <p className="text-sm text-muted-foreground mb-3">
            Voltando ao site em <span className="font-display font-bold text-foreground text-lg">{seconds}</span>{" "}
            {seconds === 1 ? "segundo" : "segundos"}...
          </p>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium hover:bg-white/10 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Voltar agora
        </Link>
      </div>
    </main>
  );
}
