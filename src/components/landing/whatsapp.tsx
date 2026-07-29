export const WHATSAPP_NUMBER = "5537920008631";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.09-1.32A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.51c-.22.63-1.1 1.16-1.54 1.23-.41.07-.8.1-1.17-.03-.27-.09-.61-.24-1.04-.47-1.83-1-3.02-2.33-3.75-3.43-.42-.63-.7-1.3-.82-1.95-.13-.7.07-1.07.27- SVGPathSegCurvetoCubicSmoothRel.35 1.21.74 1.72 1.06 2.2.1.15.2.31.28.47.15.29.29.59.4.86.2.49.17.9-.04 1.18l-.06.08c-.23.29-.52.52-.85.67-.36.17-.76.25-1.15.25-.64 0-1.27-.21-1.78-.6-.53-.4-.99-.9-1.35-1.47-.36-.56-.63-1.17-.81-1.8-.17-.6-.26-1.23-.26-1.86 0-.7.12-1.39.36-2.04.24-.66.6-1.26 1.06-1.77.47-.53 1.03-.95 1.66-1.23.64-.29 1.33-.44 2.04-.44.84 0 1.64.22 2.35.63.7.4 1.28.98 1.69 1.67.4.67.63 1.44.66 2.23.02.6-.08 1.19-.29 1.75z"
      />
      <path
        fill="currentColor"
        d="M16.8 14.35c-.1-.17-.23-.32-.38-.44-.22-.17-.47-.3-.74-.38-.27-.08-.55-.12-.84-.12-.29 0-.57.04-.84.12-.27.08-.52.21-.74.38-.15.12-.28.27-.38.44-.1.17-.17.35-.21.54-.04.19-.05.38-.03.57.02.19.07.38.16.55.09.17.21.32.36.44.15.12.32.21.51.26.19.05.39.07.59.05.2-.02.39-.08.57-.18.18-.1.33-.23.46-.39.13-.16.22-.34.28-.54.06-.2.08-.4.06-.61-.02-.2-.08-.4-.18-.57-.1-.17-.23-.32-.39-.44z"
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
