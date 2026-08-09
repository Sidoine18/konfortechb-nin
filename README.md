# Site KONFORTECH BÉNIN

Site corporate statique (HTML / CSS / JS, sans framework) — rapide, léger, optimisé SEO,
facile à héberger n'importe où (aucune base de données, aucun serveur applicatif requis).

## 1. Structure du projet

```
konfortech/
├── generate.py            ← générateur du site (source unique de vérité du contenu)
├── index.html, a-propos.html, services.html, secteurs.html,
│   realisations.html, blog.html, devis.html, contact.html, 404.html
├── services/               ← 10 pages service (une par domaine d'expertise)
├── secteurs/                ← 7 pages secteur (hôtels, restaurants, entreprises…)
├── blog/                    ← articles de blog (1 article d'exemple fourni)
├── climatisation-abomey.html, climatisation-benin.html   ← pages SEO locales
├── assets/
│   ├── css/style.css        ← design system complet (couleurs, typographie, composants)
│   ├── js/main.js           ← menu mobile, formulaires, animations, filtres
│   └── img/logo.png          ← logo officiel
├── robots.txt
└── sitemap.xml
```

Le site est généré par un script Python (`generate.py`) qui centralise le contenu de
toutes les pages (textes, méta-descriptions, FAQ, données structurées). **C'est le
fichier à modifier pour tout changement de contenu** — il régénère ensuite les fichiers
HTML statiques. Vous pouvez aussi éditer directement un fichier `.html` si vous
préférez une retouche ponctuelle, mais elle sera écrasée si vous relancez le générateur.

## 2. Lancer le projet en local

Aucune installation n'est nécessaire (pas de Node, pas de build). Il faut seulement
Python 3 (déjà présent sur la plupart des systèmes) pour servir les fichiers :

```bash
cd konfortech
python3 -m http.server 8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

Pour régénérer le site après une modification de `generate.py` :

```bash
python3 generate.py
```

## 3. Modifier le contenu

- **Textes d'une page existante** : ouvrez `generate.py`, cherchez la fonction
  correspondante (ex. `build_home()`, `service_page(slug="froid-climatisation", ...)`,
  `sector_page("hotels", ...)`), modifiez les chaînes de caractères, puis relancez
  `python3 generate.py`.
- **Coordonnées de l'entreprise** (téléphone, email, adresse, message WhatsApp) :
  modifiez les constantes en haut de `generate.py` (`PHONE_DISPLAY`, `EMAIL`,
  `WA_NUMBER`, etc.). Elles sont utilisées automatiquement sur toutes les pages.
- **Couleurs / typographie / style visuel** : tout se trouve dans
  `assets/css/style.css`, avec des variables CSS en haut de fichier (`:root { --blue:
  ...; --orange: ...; }`).

## 4. Ajouter un article de blog

1. Dans `generate.py`, dupliquez la fonction `build_blog_article()` (renommez-la, ex.
   `build_blog_article_2()`), changez le `path` (ex. `"blog/mon-nouvel-article.html"`),
   le titre, le texte et la méta-description.
2. Ajoutez une carte pour ce nouvel article dans `build_blog_hub()` (section `blog.html`),
   en dupliquant le bloc `card = '''<a class="post-card"...`.
3. Appelez votre nouvelle fonction en bas du fichier, comme les autres.
4. Relancez `python3 generate.py`.
5. Le nouvel article et sa page seront automatiquement ajoutés à `sitemap.xml` au
   prochain lancement du script (la génération du sitemap parcourt toutes les pages
   écrites).

## 5. Ajouter une réalisation (projet réel)

La page `/realisations.html` affiche actuellement un état vide honnête, en attendant
de vrais projets à publier (conformément à la consigne : ne jamais inventer de client
ou de réalisation). Pour ajouter un projet réel :

1. Rassemblez les informations exactes : titre, catégorie, client (avec son accord),
   localisation, description, problème, solution, résultats, photos.
2. Dans `generate.py`, remplacez le bloc `empty` de `build_realisations()` par une
   grille de cartes (`<div class="card" data-category="web">…</div>`), sur le modèle
   des cartes déjà utilisées ailleurs sur le site (voir `service_grid()` pour
   l'exemple de structure).
3. Les boutons de filtre (`.filters [data-filter]`) fonctionnent déjà en JavaScript
   (voir `assets/js/main.js`) : ils masquent/affichent les cartes selon l'attribut
   `data-category`.

## 6. Connecter le nom de domaine

Le site n'a **aucun domaine codé en dur** dans les pages elles-mêmes (les liens
internes sont tous relatifs). Une seule constante centralise le domaine, utilisée
uniquement pour les balises `canonical`, Open Graph et le `sitemap.xml` :

```python
# en haut de generate.py
DOMAIN_PLACEHOLDER = "https://www.konfortech-benin.com"
```

Une fois le nom de domaine définitif acheté :

1. Remplacez cette valeur par le domaine réel.
2. Relancez `python3 generate.py`.
3. Chez votre hébergeur, pointez le domaine vers le dossier contenant ces fichiers
   (hébergement statique : Netlify, Vercel, GitHub Pages, ou un hébergement
   mutualisé classique).
4. Activez le HTTPS (automatique chez la plupart des hébergeurs modernes, ou via
   Let's Encrypt sur un hébergement classique).

## 7. Google Search Console

1. Une fois le domaine connecté et le site en ligne, allez sur
   [search.google.com/search-console](https://search.google.com/search-console).
2. Ajoutez une propriété avec votre domaine.
3. Validez la propriété (méthode recommandée : enregistrement DNS, ou upload d'un
   fichier de vérification à la racine du site — le dossier racine de ce projet
   convient parfaitement pour cela).
4. Dans Search Console, soumettez `https://votre-domaine.com/sitemap.xml`.

## 8. Google Analytics (et/ou Google Tag Manager)

1. Créez une propriété sur [analytics.google.com](https://analytics.google.com).
2. Récupérez l'identifiant de mesure (`G-XXXXXXX`).
3. Ajoutez le script de suivi standard de Google juste avant `</head>` — le plus
   simple est de l'ajouter une seule fois dans la fonction `page()` de
   `generate.py` (dans le template partagé par toutes les pages), puis de relancer
   `python3 generate.py`.
4. Attendez 24 à 48h pour voir les premières données remonter.

Aucun tracker n'est installé par défaut sur ce site, conformément à la consigne de
ne pas ajouter de trackers inutiles.

## 9. Générer / mettre à jour le sitemap

Le `sitemap.xml` est généré automatiquement à chaque exécution de
`python3 generate.py`, à partir de la liste réelle des pages écrites. Il n'y a rien
à faire manuellement — ajoutez simplement vos nouvelles pages dans `generate.py`
(voir sections 4 et 5) et relancez le script.

## 10. Déployer le site

Ce site étant 100% statique, il peut être déployé sur n'importe quel hébergeur
statique ou mutualisé classique :

- **Hébergement mutualisé classique (cPanel, etc.)** : uploadez tout le contenu de
  ce dossier (sauf `generate.py` et ce `README.md`, qui sont des outils internes)
  dans le dossier public du site (souvent `public_html/`).
- **Netlify / Vercel / GitHub Pages** : glissez-déposez ce dossier, ou connectez un
  dépôt Git — aucune commande de build n'est nécessaire (dossier statique direct).

## 11. Ce qui a été volontairement laissé de côté (première version)

Conformément à la consigne de livrer un site rapide, simple et fiable en première
étape (le système plus complet étant prévu séparément sur Lovable) :

- **Pas d'administration back-office** : les contenus se modifient via `generate.py`
  (voir sections 3 à 5). L'architecture est volontairement simple pour rester facile
  à maintenir sans expertise technique poussée.
- **Réalisations et témoignages** : affichés avec un état vide honnête, en attendant
  de vrais projets et avis clients à publier — aucun contenu n'a été inventé.
- **Équipe** : la page "À propos" prévoit un emplacement pour présenter l'équipe,
  à compléter avec de vraies informations.
- **Formulaires (devis / contact)** : fonctionnels côté navigateur (validation,
  message de confirmation), mais **non connectés à un service d'envoi d'e-mail ou à
  une base de données** — il s'agit d'une démonstration front-end. Pour recevoir
  réellement les demandes par e-mail, il faut connecter un service comme Formspree,
  EmailJS, ou un petit script serveur (PHP/Node) chez votre hébergeur. Dites-le si
  vous voulez que cette connexion soit ajoutée.

## 12. Checklist de vérification (déjà réalisée sur cette version)

- [x] 28 pages générées, toutes accessibles (aucune erreur 404 interne)
- [x] Tous les liens internes vérifiés automatiquement (0 lien cassé)
- [x] Toutes les images référencées existent
- [x] Formulaires de devis et de contact fonctionnels (validation + confirmation)
- [x] Site responsive testé (mobile, avec menu mobile fonctionnel)
- [x] Métadonnées SEO sur chaque page (title, description, canonical, Open Graph,
      Twitter Card)
- [x] `robots.txt` et `sitemap.xml` générés
- [x] Données structurées Schema.org : `Organization`, `LocalBusiness`, `Service`,
      `BreadcrumbList` (implicite via balisage), `FAQPage`
- [x] Fil d'Ariane (breadcrumbs) sur les pages profondes
- [x] Bouton WhatsApp flottant avec message pré-rempli
- [x] Aucune information inventée (clients, chiffres, témoignages, adresse précise)
- [x] Accessibilité de base : lien d'évitement, focus visible, respect de
      `prefers-reduced-motion`, contenu visible même sans JavaScript

À vérifier après mise en ligne réelle : Lighthouse / PageSpeed Insights sur le
domaine définitif (les résultats en local ne sont pas représentatifs des conditions
réseau réelles), et validation de la fiche Google Business Profile pour la
cohérence NAP (nom, adresse, téléphone) mentionnée au point 26 du brief.
