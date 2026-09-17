/**
 * Configuration centralisée Web3Forms.
 *
 * ⚠️ NOTE DE SÉCURITÉ HONNÊTE : la clé Web3Forms est une clé PUBLIQUE, conçue
 * par Web3Forms pour être appelée depuis le navigateur. Elle ne donne accès à
 * aucune donnée : elle permet uniquement d'ENVOYER un message vers l'adresse
 * email configurée sur le compte Web3Forms. Ce n'est donc pas un secret à
 * protéger — c'est pourquoi une valeur de secours est définie ci-dessous :
 * le formulaire fonctionne même si la variable d'environnement n'a pas été
 * configurée sur l'hébergeur (Vercel, etc.).
 *
 * Pour la changer sans toucher au code : définissez
 * NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY dans les variables d'environnement de
 * votre hébergeur, puis redéployez (les variables NEXT_PUBLIC_ sont figées
 * dans le code au moment du build — les ajouter après coup ne suffit pas,
 * il faut redéployer pour qu'elles soient prises en compte).
 *
 * Limite réelle à connaître : une clé publique peut être réutilisée par un
 * tiers pour envoyer du spam vers votre boîte. Les protections en place ici
 * (honeypot + délai minimum de soumission) réduisent le spam automatisé mais
 * ne le rendent pas impossible. Web3Forms propose un reCAPTCHA/hCaptcha côté
 * tableau de bord : c'est la protection à activer si le spam devient un problème.
 */

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const FALLBACK_ACCESS_KEY = '050f2bfa-87c8-4bf6-8a04-a11f8e409b87';

export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || FALLBACK_ACCESS_KEY;

export type SubmitState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Envoie un formulaire à Web3Forms.
 * `subject` et `from_name` aident à identifier la source dans la boîte mail.
 */
export async function submitToWeb3Forms(
  payload: Record<string, unknown>,
  subject: string
): Promise<{ ok: boolean; message: string }> {
  if (!WEB3FORMS_ACCESS_KEY) {
    return {
      ok: false,
      message:
        "La configuration du formulaire est incomplète (clé Web3Forms absente). Contactez-nous par téléphone ou WhatsApp en attendant.",
    };
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject,
        from_name: 'Site KONFORTECH BÉNIN',
        ...payload,
      }),
    });
    const data = await res.json();
    if (res.ok && data.success) {
      return {
        ok: true,
        message:
          'Merci. Votre demande a bien été envoyée à KONFORTECH BÉNIN. Nous vous répondrons dans les meilleurs délais.',
      };
    }
    return {
      ok: false,
      message:
        "L'envoi a échoué. Réessayez, ou contactez-nous directement par téléphone ou WhatsApp.",
    };
  } catch {
    return {
      ok: false,
      message:
        "Impossible d'envoyer le formulaire (problème de connexion). Réessayez ou contactez-nous par téléphone.",
    };
  }
}
