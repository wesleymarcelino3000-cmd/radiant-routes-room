import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/landing/Nav";
import { Hero, TechMarquee } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { WhyUs } from "@/components/landing/WhyUs";
import { Process } from "@/components/landing/Process";
import { Portfolio } from "@/components/landing/Portfolio";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { CtaBlock, Footer } from "@/components/landing/Cta";
import { WhatsAppFab } from "@/components/landing/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Space Ads — Sites e sistemas que vendem mais todos os dias" },
      {
        name: "description",
        content:
          "Criamos sites, sistemas e apps que transformam visitantes em clientes. Diagnóstico gratuito em 30 minutos, prazo por escrito e garantia de 90 dias.",
      },
      {
        property: "og:title",
        content: "Space Ads — Sites e sistemas que vendem mais todos os dias",
      },
      {
        property: "og:description",
        content:
          "Do primeiro clique à venda: sites, sistemas e apps sob medida, entregues no prazo e com garantia.",
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
        <TechMarquee />
        <Services />
        <WhyUs />
        <Process />
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
