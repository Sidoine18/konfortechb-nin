/**
 * PARTENAIRES — source unique de vérité.
 * ⚠️ N'ajoutez QUE des partenariats réels et confirmés. Aucun logo fictif.
 */

export type Partner = {
  name: string;
  description?: string;
  url?: string;
  logo?: string;
  category?: string;
  active: boolean;
};

/** Aucun partenariat publié pour l'instant. */
export const partners: Partner[] = [];

export const activePartners = () => partners.filter((p) => p.active);
