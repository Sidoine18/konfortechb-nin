/**
 * Configuration du module MEB 2026.
 * Version Vite/TanStack : variables `VITE_*`.
 * Adapter la lecture des variables pour une intégration dans une autre stack.
 */
export const MEB_CONFIG = {
  web3formsKey: (import.meta.env['VITE_WEB3FORMS_ACCESS_KEY'] as string | undefined) ?? "",
  sheetsWebhookUrl: (import.meta.env['VITE_MEB_SHEETS_WEBHOOK_URL'] as string | undefined) ?? "",
  basePath: "/meb-2026",
};
