import { whatsappLink, SITE } from '@/lib/site';

/** Bouton WhatsApp flottant — remonté sur mobile pour ne pas masquer la barre CTA. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contacter ${SITE.name} sur WhatsApp`}
      className="fixed bottom-[88px] right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_26px_rgba(37,211,102,.45)] transition-transform hover:scale-110 sm:bottom-6 sm:h-14 sm:w-14"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white sm:h-7 sm:w-7" aria-hidden>
        <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.2 9 9.7 7.8 9.5 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z" />
      </svg>
    </a>
  );
}
