/**
 * Configuration du module MEB 2026.
 * Adapté pour Next.js (`process.env`).
 */
export const MEB_CONFIG = {
  web3formsKey: (process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string | undefined) ?? "",
  sheetsWebhookUrl: (process.env.NEXT_PUBLIC_MEB_SHEETS_WEBHOOK_URL as string | undefined) ?? "",
  basePath: "/meb-2026",
};
