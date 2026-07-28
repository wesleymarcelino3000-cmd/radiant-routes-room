import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "./data";
import { waLink, WhatsAppIcon } from "./whatsapp";
import { Reveal, SectionLabel } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionLabel index="06" text="Antes de decidir" />
              <h2
                id="faq-title"
                className="mb-6 font-display text-4xl leading-[1.06] font-semibold tracking-[-0.025em] md:text-5xl"
              >
                Dúvidas honestas,{" "}
                <span className="serif-it text-gradient">respostas honestas.</span>
              </h2>
              <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
                As perguntas que todo cliente faz — respondidas sem enrolação, sem letra miúda e
                sem promessa de vendedor.
              </p>
              <a
                href={waLink("Olá! Tenho uma dúvida específica sobre os serviços da PrimeCode.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="size-4" />
                Pergunte no WhatsApp
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal className="lg:col-span-7" delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border last:border-0"
              >
                <AccordionTrigger className="group py-6 text-left font-display text-lg font-semibold tracking-tight hover:no-underline data-[state=open]:text-primary md:text-xl">
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] text-muted-foreground/70">
                      0{i + 1}
                    </span>
                    <span>{item.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-9 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
