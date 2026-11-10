/**
 * Configuration du module MEB 2026 (version Next.js).
 * La clé Web3Forms est écrite directement ici (pas besoin de variable
 * d'environnement Vercel). Une variable NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
 * si elle existe un jour, prend le dessus.
 */
export const MEB_CONFIG = {
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "92cc696b-9f01-4fa6-96af-b7df3b80acd4",
  sheetsWebhookUrl: process.env.NEXT_PUBLIC_MEB_SHEETS_WEBHOOK_URL ?? "",
  basePath: "/meb-2026",
};
