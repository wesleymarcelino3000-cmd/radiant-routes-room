import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { Services } from "@/components/landing/Services";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { CtaBlock, Footer } from "@/components/landing/Cta";
import { WhatsAppFab } from "@/components/landing/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Space Ads — Site profissional para sua empresa vender mais" },
      {
        name: "description",
        content:
          "Criamos sites profissionais, rápidos e acessíveis para pequenas empresas. Preço que cabe no seu bolso, sem complicação. Peça um orçamento sem compromisso.",
      },
      {
        property: "og:title",
        content: "Space Ads — Site profissional para sua empresa vender mais",
      },
      {
        property: "og:description",
        content:
          "Site profissional para pequenas empresas: aparece no Google, funciona no celular e ajuda seu negócio a vender mais. Preço acessível.",
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
        <HowItWorks />
        <Testimonials />
        <Faq />
        <CtaBlock />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
