import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { auth, db, ADMIN_ROLES } from "./firebase-init.js";

const NAV = [
  { group: "Aperçu", links: [{ href: "index.html", label: "Tableau de bord" }] },
  { group: "Prospection", links: [
    { href: "devis.html", label: "Demandes de devis" },
    { href: "messages.html", label: "Messages" },
    { href: "avis.html", label: "Avis clients" },
  ] },
  { group: "Contenu", links: [
    { href: "realisations.html", label: "Réalisations" },
    { href: "blog.html", label: "Blog" },
    { href: "partenaires.html", label: "Partenaires" },
  ] },
  { group: "Entreprise", links: [
    { href: "equipe.html", label: "Notre équipe" },
    { href: "ceo.html", label: "Page CEO" },
  ] },
];

/**
 * Protège une page admin : redirige vers login.html si non connecté, ou si
 * le rôle Firestore de l'utilisateur n'est pas un rôle administratif.
 * Le rôle est TOUJOURS relu depuis Firestore ici — jamais stocké/deviné
 * côté navigateur. La vraie barrière de sécurité reste firestore.rules.
 * Retourne une Promise résolue avec { user, role, profile } une fois prêt.
 */
export function requireAdmin() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        window.location.href = "login.html";
        return;
      }
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        const profile = snap.exists() ? snap.data() : {};
        const role = profile.role || "client";
        if (!ADMIN_ROLES.includes(role)) {
          alert("Votre compte n'a pas encore les droits d'administration. Contactez un Super Admin pour faire passer votre rôle à 'superadmin', 'editeur', 'commercial' ou 'technicien' dans Firestore (collection users).");
          await signOut(auth);
          window.location.href = "login.html";
          return;
        }
        buildShell(user, role, profile);
        resolve({ user, role, profile });
      } catch (err) {
        console.error(err);
        alert("Impossible de lire votre profil Firestore (" + (err.code || err.message) + "). "
          + "Vérifiez que la base Firestore est bien créée dans la console Firebase et que firestore.rules a été déployé (voir README-ADMIN.md § Dépannage).");
        window.location.href = "login.html";
      }
    });
  });
}

function buildShell(user, role, profile) {
  const current = window.location.pathname.split("/").pop() || "index.html";

  const sidebar = document.getElementById("admin-sidebar");
  if (sidebar) {
    const groups = NAV.map((g) => `
      <div class="group-label">${g.group}</div>
      ${g.links.map((l) => `<a href="${l.href}" class="${l.href === current ? "active" : ""}">${l.label}</a>`).join("")}
    `).join("");
    sidebar.innerHTML = `
      <div class="brand"><img src="../assets/img/logo.png" alt="" style="height:34px"> KONFORTECH BÉNIN</div>
      <nav>${groups}</nav>
      <button class="logout-btn" id="logout-btn">Déconnexion</button>
    `;
    document.getElementById("logout-btn").addEventListener("click", async () => {
      await signOut(auth);
      window.location.href = "login.html";
    });
  }

  const who = document.getElementById("admin-who");
  if (who) who.innerHTML = `<span class="role-badge">${role}</span> ${profile.displayName || user.email}`;

  const mobileToggle = document.getElementById("mobile-nav-toggle");
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener("click", () => sidebar.classList.toggle("open"));
  }
}
