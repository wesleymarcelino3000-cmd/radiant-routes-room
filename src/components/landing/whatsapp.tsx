export const WHATSAPP_NUMBER = "5537920008631";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 10c0 4.42-3.58 8-8 8-1.45 0-2.81-.4-3.97-1.08L4 18l1.04-3.77C4.37 13.12 4 11.62 4 10c0-4.42 3.58-8 8-8s8 3.58 8 8z" />
    </svg>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Olá! Quero falar com a Space Ads.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-float transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40"
    >
      <WhatsAppIcon className="size-7" />
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-whatsapp opacity-50 animate-ping [animation-iteration-count:3]"
      />
    </a>
  );
}
