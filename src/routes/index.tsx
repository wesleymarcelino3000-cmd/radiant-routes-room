import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { Services } from "@/components/landing/Services";
import { Portfolio } from "@/components/landing/Portfolio";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { CtaBlock, Footer } from "@/components/landing/Cta";
import { WhatsAppFab } from "@/components/landing/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Space Ads — Criação de sites profissionais que vendem" },
      {
        name: "description",
        content:
          "Especialistas em criação de sites profissionais, rápidos e otimizados para o Google. Também desenvolvemos sistemas e aplicativos sob medida. Solicite seu orçamento.",
      },
      {
        property: "og:title",
        content: "Space Ads — Criação de sites profissionais que vendem",
      },
      {
        property: "og:description",
        content:
          "Sites modernos, rápidos e otimizados para SEO. Design exclusivo, integração com WhatsApp, hospedagem e suporte inclusos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden font-sans">
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Portfolio />
        <Testimonials />
        <Faq />
        <CtaBlock />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
