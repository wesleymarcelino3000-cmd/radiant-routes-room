export const WHATSAPP_NUMBER = "5537920008631";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.02 2C6.484 2 2 6.484 2 12.02c0 1.762.464 3.483 1.345 4.997L2 22l5.117-1.328a9.96 9.96 0 004.902 1.267h.004c5.535 0 10.019-4.484 10.02-10.019a9.955 9.955 0 00-2.929-7.087A9.958 9.958 0 0012.02 2z" />
    </svg>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Olá! Quero falar com a PrimeCode.")}
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
