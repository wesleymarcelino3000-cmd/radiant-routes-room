export const WHATSAPP_NUMBER = "5537920008631";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.09-1.32A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 17.5c-1.45 0-2.81-.4-3.97-1.08l-.29-.17-3.75.97.99-3.6-.19-.32C4.37 14.62 4 13.12 4 11.5 4 7.36 7.36 4 11.5 4S19 7.36 19 11.5 15.64 19.5 11.5 19.5z"
        clipRule="evenodd"
      />
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
