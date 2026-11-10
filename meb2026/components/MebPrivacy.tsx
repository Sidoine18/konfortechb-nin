import { MebHeader } from "./MebChrome";
import { EVENT } from "../data";

export function MebPrivacy() {
  return (
    <div className="meb-root">
      <MebHeader />
      <main className="meb-section">
        <article className="meb-container meb-narrow meb-prose">
          <p className="meb-kicker">MEB 2026</p>
          <h1 className="meb-h2">Politique de confidentialité</h1>
          <p>La présente politique décrit la manière dont les données collectées via le formulaire d'inscription au {EVENT.name} sont traitées.</p>
          <h2>Responsable du traitement</h2>
          <p>KONFORTECH BÉNIN, organisateur du Business Summit dans le cadre du Mois de l'Entrepreneuriat au Bénin. Contact : {EVENT.contactPhones.join(" / ")} — <a href={EVENT.website}>konfortechbenin.online</a>.</p>
          <h2>Données collectées</h2>
          <p>Identité, coordonnées (téléphone, WhatsApp, e-mail), localisation, profil professionnel ou académique, profil entrepreneurial, attentes et informations complémentaires que tu choisis de renseigner.</p>
          <h2>Finalités</h2>
          <ul>
            <li>Gérer les inscriptions et l'accueil des participants ;</li>
            <li>Communiquer les informations pratiques liées à l'événement ;</li>
            <li>Évaluer l'événement et produire des statistiques anonymisées.</li>
          </ul>
          <h2>Base légale</h2>
          <p>Ton consentement, exprimé en cochant la case prévue dans le formulaire, conformément au Code du numérique de la République du Bénin.</p>
          <h2>Destinataires</h2>
          <p>Les données sont accessibles uniquement à l'équipe d'organisation. Elles sont transmises par e-mail via le service Web3Forms et, le cas échéant, centralisées dans un tableur sécurisé. Elles ne sont ni vendues ni cédées à des tiers.</p>
          <h2>Durée de conservation</h2>
          <p>Les données sont conservées pendant la durée nécessaire à l'organisation et à l'évaluation du MEB 2026, et au plus 12 mois après l'événement.</p>
          <h2>Tes droits</h2>
          <p>Tu peux demander l'accès, la rectification ou la suppression de tes données, ou retirer ton consentement, en contactant l'organisateur aux coordonnées ci-dessus et en indiquant ton identifiant d'inscription.</p>
          <p><a href="/meb-2026#inscription">← Retour à l'inscription</a></p>
        </article>
      </main>
    </div>
  );
}
