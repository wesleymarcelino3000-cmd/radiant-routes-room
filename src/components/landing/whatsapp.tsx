export const WHATSAPP_NUMBER = "5537920008631";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.09-1.32A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.63 0-3.16-.48-4.45-1.3l-.32-.2-3.22.83.86-3.13-.2-.33A7.94 7.94 0 014 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.39-5.67c-.22-.11-1.3-.64-1.5-.72-.2-.08-.35-.12-.5.11-.14.22-.56.71-.69.86-.13.14-.26.16-.48.07-.22-.1-.93-.34-1.77-1.09-.66-.59-1.1-1.31-1.23-1.53-.13-.22-.01-.34.1-.45.1-.09.22-.25.33-.38.1-.13.14-.22.21-.37.07-.15.03-.28-.02-.38-.05-.1-.43-1.03-.6-1.41-.16-.38-.33-.33-.45-.33-.12 0-.25-.01-.39-.01-.14 0-.36.06-.55.29-.19.23-.74.73-.74 1.79 0 1.06.77 2.09.88 2.25.11.15 1.54 2.35 3.73 3.31.52.22.92.36 1.24.45.52.17.99.15 1.36.08.42-.06 1.29-.53 1.47-1.05.2-.51.18-.95.13-1.05-.06-.1-.2-.15-.41-.26z"
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
