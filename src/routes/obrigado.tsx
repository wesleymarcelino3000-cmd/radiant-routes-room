import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import primecodeLogo from "@/assets/primecode-logo.png";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigado! — PrimeCode" },
      { name: "description", content: "Recebemos seu contato. Em instantes responderemos no WhatsApp." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
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
          Recebemos sua mensagem!
        </h1>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          Seus dados foram enviados diretamente para o nosso WhatsApp.
          Em poucos minutos entraremos em contato para conversar sobre o seu projeto.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium hover:bg-white/10 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Voltar para o site
        </Link>

        <p className="text-xs text-muted-foreground mt-8">
          Se o WhatsApp não abriu automaticamente, verifique se seu navegador permite pop-ups.
        </p>
      </div>
    </main>
  );
}
