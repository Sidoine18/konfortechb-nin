# Dashboard admin KONFORTECH BÉNIN

Dashboard d'administration en HTML/CSS/JS pur (aucun framework, aucun `npm install`
requis) — dans le même esprit que le site public : ouvrir un fichier, ça marche.
Connecté à Firebase (Auth + Firestore) et Cloudinary (upload d'images).

## 1. Ce que ce dashboard permet de faire

- **Connexion / création de compte** (`login.html`)
- **Demandes de devis** (`devis.html`) — mini-CRM avec statuts (Nouveau → Contacté → Devis envoyé → Négociation → Gagné/Perdu → Archivé), alimenté automatiquement par le formulaire *Devis* du site public
- **Messages** (`messages.html`) — boîte de réception, alimentée par le formulaire *Contact* du site public
- **Avis clients** (`avis.html`) — modération stricte, rien n'est publié automatiquement
- **Réalisations** (`realisations.html`) — création/modification/suppression, galerie multi-photos, SEO
- **Blog** (`blog.html`) — articles complets (titre, catégorie, tags, contenu, temps de lecture auto, image, SEO)
- **Notre équipe** (`equipe.html`) — membres avec photo, fonction, bio, ordre d'affichage
- **Page CEO** (`ceo.html`) — éditeur dédié à la page publique `/ceo`

## 2. Comment ça marche (aucune installation)

Ce sont des fichiers HTML statiques classiques : ouvrez-les tels quels dans un
navigateur, ou déposez-les sur n'importe quel hébergement (le même hébergement
que le site public convient très bien — le dossier `admin/` peut être publié
à côté des autres pages).

Chaque page charge Firebase directement depuis son CDN officiel
(`gstatic.com`) via `<script type="module">` — pas de build, pas de bundler.

## 3. Donner l'accès admin à un compte (vous le faites vous-même dans Firebase)

1. Un compte se crée depuis `login.html` → onglet **Créer un compte**. Il est
   automatiquement créé avec le rôle `client` (jamais admin par défaut — c'est
   une règle de sécurité, pas une limitation technique).
2. Allez dans la console Firebase → **Firestore Database** → collection `users`
   → ouvrez le document correspondant à cet utilisateur (son UID, visible
   aussi dans Authentication → Users).
3. Modifiez le champ `role` pour lui donner l'une de ces valeurs :
   `superadmin`, `editeur`, `commercial` ou `technicien`.
4. Reconnectez-vous sur `login.html` : l'accès au dashboard est immédiat.

**Important** : le rôle n'est jamais modifiable depuis le dashboard lui-même
ni depuis le navigateur — uniquement depuis la console Firestore. C'est ce qui
empêche un visiteur de s'auto-attribuer les droits admin.

## 4. Sécurité réelle : `firestore.rules`

Le fichier `firestore.rules` (à la racine de ce dossier `admin/`) contient les
vraies règles de sécurité. Elles doivent être déployées sur le projet Firebase
`konfortechbenin-4a084` :

```bash
npm install -g firebase-tools
firebase login
firebase use konfortechbenin-4a084
firebase deploy --only firestore:rules
```

Sans ce déploiement, Firestore utilise ses règles par défaut, généralement
beaucoup trop permissives ou trop restrictives — **ne mettez jamais ce
dashboard en production sans avoir déployé ces règles au moins une fois.**

## 5. Connexion au site public

Les formulaires *Demander un devis* et *Contact* du site public
(`konfortech-benin/devis.html` et `contact.html`) écrivent déjà directement
dans les collections Firestore `devis_requests` et `messages` — aucune
configuration supplémentaire n'est nécessaire, tout est déjà branché.

**Ce qui n'est pas encore branché** : les pages publiques *Réalisations*,
*Blog*, *À propos* (équipe) et *CEO* du site public sont pour l'instant
statiques — elles n'affichent pas encore automatiquement ce que vous ajoutez
ici. Le contenu est bien enregistré et prêt dans Firestore ; il manque juste
le script côté site public qui va le lire et l'afficher. Dites-le si vous
voulez que je fasse ce branchement — c'est une suite naturelle et rapide à
ajouter.

## 6. Cloudinary

Cloud name : `kwgmoeqy` — upload preset (non signé) : `konfortech`. Vérifiez
dans la console Cloudinary que ce preset est bien en mode **Unsigned**, avec
une taille maximale raisonnable. Aucune clé secrète Cloudinary n'est utilisée
ici.

## 7. Ajouter un nouveau module admin

Chaque page suit le même schéma (visible dans `realisations.html`, `blog.html`,
`equipe.html`, `partenaires.html`) :
1. `onSnapshot` sur une collection pour afficher la liste en temps réel.
2. Un formulaire modal (`openForm`) pour créer/modifier, avec upload
   Cloudinary optionnel.
3. `addDoc` / `updateDoc` / `deleteDoc` pour écrire.

Dupliquer un de ces fichiers est le moyen le plus rapide d'ajouter un module
(ex. Ressources/PDF).

## 8. Dépannage — « le compte apparaît dans Authentication mais pas dans Firestore »

C'est le symptôme classique d'une base Firestore pas encore prête. La création
du compte (Authentication) et l'enregistrement de son profil (Firestore) sont
deux étapes séparées — la première peut réussir sans la seconde. Vérifiez dans
l'ordre :

1. **La base Firestore existe-t-elle ?** Dans la console Firebase du projet
   `konfortechbenin-4a084` → menu **Firestore Database** → si vous voyez un
   bouton **Créer une base de données**, c'est qu'elle n'a jamais été créée.
   Cliquez dessus, choisissez une région (ex. `eur3`), et démarrez en **mode
   production**.
2. **Les règles de sécurité sont-elles déployées ?** Sans ça, Firestore refuse
   toutes les écritures par défaut (mode production) — la base Firestore
   fonctionne, mais bloque le `setDoc` du profil, avec une erreur
   `permission-denied`. Déployez `firestore.rules` :
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase use konfortechbenin-4a084
   firebase deploy --only firestore:rules
   ```
   (si `firebase use` échoue car le dossier n'est pas initialisé, lancez
   d'abord `firebase init firestore` dans ce dossier `admin/`, en pointant
   vers le fichier `firestore.rules` déjà présent ici quand on vous le demande).
3. **Refaites le test de création de compte.** Le formulaire affiche
   désormais le message d'erreur réel (ex. `permission-denied`,
   `not-found`) au lieu d'un message générique — ce qui confirme la cause
   exacte si le problème persiste.
4. Une fois corrigé, le compte déjà créé dans Authentication n'a pas de
   profil Firestore : recréez-le simplement à la main dans la console
   Firestore (collection `users`, document dont l'ID est l'UID visible dans
   Authentication → Users), avec les champs `email`, `displayName`, `role`
   (`client` par défaut), `createdAt`.

## 9. Dépannage général

- **Erreur CORS / script Firebase qui ne charge pas** : vérifiez que la page
  est bien servie via `http://` ou `https://` (pas en ouvrant le fichier
  directement avec `file://`) — les modules ES et Firebase exigent un vrai
  serveur, même local (`python3 -m http.server`, par exemple).
- **« Votre compte n'a pas encore les droits d'administration »** :
  comportement normal pour tout nouveau compte — voir § 3 de ce document
  pour lui donner un rôle admin depuis Firestore.
- **Les listes (Réalisations, Blog…) restent vides** : vérifiez que vous êtes
  bien connecté avec un compte ayant un rôle admin, et que Firestore est
  bien créé et ses règles déployées (§ 8).
