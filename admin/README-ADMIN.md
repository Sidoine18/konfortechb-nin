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
