# -*- coding: utf-8 -*-
"""
Générateur statique du site KONFORTECH BÉNIN.
Produit des pages HTML autonomes (pas de framework, pas de build) —
priorité SEO, vitesse, simplicité, maintenance facile.
"""
import os, re

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE_NAME = "KONFORTECH BÉNIN"
BASELINE = "Concepteur de Solutions Techniques | Développement Web • Froid & Climatisation"
PHONE_DISPLAY = "+229 54 16 30 67"
PHONE_TEL = "+22954163067"
EMAIL = "konfortechbenin@gmail.com"
WA_NUMBER = "22954163067"
WA_MSG = "Bonjour KONFORTECH BÉNIN, je souhaite obtenir des informations concernant vos services."
DOMAIN_PLACEHOLDER = "https://www.konfortech-benin.com"  # à remplacer lors de l'achat du domaine — voir README

# ---------------------------------------------------------------- icônes
def icon(name, cls=""):
    paths = {
        "code": '<polyline points="8 6 3 12 8 18"/><polyline points="16 6 21 12 16 18"/>',
        "snow": '<line x1="12" y1="2" x2="12" y2="22"/><line x1="4" y1="7" x2="20" y2="17"/><line x1="20" y1="7" x2="4" y2="17"/>',
        "bolt": '<polygon points="13 2 3 14 11 14 9 22 21 10 13 10 13 2"/>',
        "sun": '<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.9" y1="4.9" x2="7" y2="7"/><line x1="17" y1="17" x2="19.1" y2="19.1"/><line x1="4.9" y1="19.1" x2="7" y2="17"/><line x1="17" y1="7" x2="19.1" y2="4.9"/>',
        "drop": '<path d="M12 2c4 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3-8 7-13z"/>',
        "camera": '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7l1.6-3h4.8L16 7"/><circle cx="12" cy="13.5" r="3.4"/>',
        "wrench": '<path d="M14.7 6.3a4 4 0 1 0-5 5L4 18l2 2 6.7-5.7a4 4 0 0 0 5-5l-2.7 2.7-2-2z"/>',
        "chart": '<line x1="4" y1="20" x2="20" y2="20"/><rect x="6" y="12" width="3" height="8"/><rect x="11" y="8" width="3" height="12"/><rect x="16" y="4" width="3" height="16"/>',
        "shield": '<path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z"/>',
        "building": '<rect x="4" y="3" width="16" height="18" rx="1"/><line x1="8" y1="8" x2="8" y2="8"/><line x1="8" y1="8" x2="9" y2="8"/><line x1="8" y1="12" x2="9" y2="12"/><line x1="8" y1="16" x2="9" y2="16"/><line x1="12" y1="8" x2="16" y2="8"/><line x1="12" y1="12" x2="16" y2="12"/><line x1="12" y1="16" x2="16" y2="16"/>',
        "gear": '<circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.1 5.9l-1.7 1.7M7.6 16.5l-1.7 1.7M18.1 18.1l-1.7-1.7M7.6 7.5 5.9 5.8"/>',
        "target": '<circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="4.2"/><circle cx="12" cy="12" r=".6" fill="currentColor"/>',
        "phone": '<path d="M6 3h3.6l1.2 5-2.6 1.7a12.4 12.4 0 0 0 6.1 6.1l1.7-2.6 5 1.2V19a2 2 0 0 1-2.2 2C10.4 20.6 3.4 13.6 3 5.2A2 2 0 0 1 5 3z"/>',
        "mail": '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
        "pin": '<path d="M12 22s7-7.6 7-12.2a7 7 0 1 0-14 0C5 14.4 12 22 12 22z"/><circle cx="12" cy="9.8" r="2.4"/>',
        "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3.2 2"/>',
        "arrow": '<line x1="4" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>',
        "check": '<path d="M4 12.5l5 5L20 6"/>',
        "layers": '<polygon points="12 3 21 8 12 13 3 8 12 3"/><polyline points="3 13 12 18 21 13"/><polyline points="3 17.5 12 22.5 21 17.5"/>',
        "search": '<circle cx="10.5" cy="10.5" r="6.5"/><line x1="15.3" y1="15.3" x2="21" y2="21"/>',
        "cart": '<circle cx="9" cy="20" r="1.2" fill="currentColor" stroke="none"/><circle cx="17" cy="20" r="1.2" fill="currentColor" stroke="none"/><path d="M2.5 3h2.5l2.4 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7.5H6"/>',
        "server": '<rect x="3" y="4" width="18" height="6" rx="1.4"/><rect x="3" y="14" width="18" height="6" rx="1.4"/><line x1="7" y1="7" x2="7.01" y2="7"/><line x1="7" y1="17" x2="7.01" y2="17"/>',
        "graduation": '<path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5z"/><path d="M6 11.5V17c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5"/>',
        "factory": '<path d="M3 21V10l6 4v-4l6 4v-4l6 4v7H3z"/>',
        "store": '<path d="M4 9.5V21h16V9.5"/><path d="M2.5 9.5 4 4h16l1.5 5.5a2.6 2.6 0 0 1-5 1 2.6 2.6 0 0 1-5-1 2.6 2.6 0 0 1-5 1 2.6 2.6 0 0 1-5-1z"/>',
        "home": '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v10h12V10"/>',
        "hotel": '<path d="M3 21V6h5v15"/><path d="M8 21V3h13v18"/><line x1="11" y1="7" x2="11.01" y2="7"/><line x1="15" y1="7" x2="15.01" y2="7"/><line x1="11" y1="11" x2="11.01" y2="11"/><line x1="15" y1="11" x2="15.01" y2="11"/><line x1="3" y1="21" x2="21" y2="21"/>',
        "whatsapp": '<path fill="currentColor" stroke="none" d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.2 9 9.7 7.8 9.5 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"/>',
    }
    return '<svg class="{cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">{p}</svg>'.format(cls=cls, p=paths.get(name, ""))

# ---------------------------------------------------------------- decor SVG (motif givre-circuit, signature du site)
def frost_lines(seed=1, stroke="rgba(255,255,255,.14)", accent="rgba(255,122,0,.55)"):
    """Ligne givre + circuit, réutilisée en fond de section — clin d'œil au logo."""
    return '''<svg viewBox="0 0 900 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="{s}" stroke-width="1.4">
        <line x1="120" y1="60" x2="120" y2="440"/>
        <line x1="60" y1="140" x2="180" y2="360"/>
        <line x1="180" y1="140" x2="60" y2="360"/>
        <line x1="120" y1="60" x2="90" y2="20"/><line x1="120" y1="60" x2="150" y2="20"/>
        <line x1="120" y1="440" x2="90" y2="480"/><line x1="120" y1="440" x2="150" y2="480"/>
        <path d="M420 250 L520 250 L560 210 L680 210 L720 170" />
        <path d="M420 300 L560 300 L600 340 L700 340 L740 380"/>
        <path d="M420 200 L500 200 L540 160 L640 160"/>
        <circle cx="720" cy="170" r="7" stroke="{a}"/>
        <circle cx="740" cy="380" r="7" stroke="{a}"/>
        <circle cx="640" cy="160" r="7"/>
        <circle cx="420" cy="250" r="4" fill="{a}" stroke="none" class="pulse-dot"/>
        <circle cx="420" cy="300" r="4" fill="{a}" stroke="none" class="pulse-dot" style="animation-delay:.8s"/>
      </g>
    </svg>'''.format(s=stroke, a=accent)

def hero_visual():
    return '''<svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Motif givre et circuit imprimé KONFORTECH BÉNIN">
      <defs>
        <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#3D9BFF"/><stop offset="1" stop-color="#0066CC"/>
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#gBlue)" stroke-width="3" stroke-linecap="round">
        <line x1="150" y1="70" x2="150" y2="410"/>
        <line x1="70" y1="150" x2="230" y2="330"/>
        <line x1="230" y1="150" x2="70" y2="330"/>
        <line x1="150" y1="70" x2="110" y2="30"/><line x1="150" y1="70" x2="190" y2="30"/>
        <line x1="150" y1="410" x2="110" y2="450"/><line x1="150" y1="410" x2="190" y2="450"/>
        <line x1="70" y1="150" x2="30" y2="130"/><line x1="70" y1="150" x2="45" y2="185"/>
        <line x1="230" y1="330" x2="270" y2="350"/><line x1="230" y1="330" x2="255" y2="295"/>
      </g>
      <g fill="none" stroke="#FF7A00" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <path class="dash-travel" d="M260 180 L340 180 L375 145 L440 145"/>
        <path class="dash-travel" d="M260 260 L360 260 L395 295 L440 295" style="animation-delay:1.2s"/>
        <path class="dash-travel" d="M260 340 L320 340 L350 310 L410 310" style="animation-delay:2.1s"/>
      </g>
      <circle cx="440" cy="145" r="8" fill="#0E141B" stroke="#FF7A00" stroke-width="2.4" class="pulse-dot"/>
      <circle cx="440" cy="295" r="8" fill="#0E141B" stroke="#FF7A00" stroke-width="2.4" class="pulse-dot" style="animation-delay:.6s"/>
      <circle cx="410" cy="310" r="5" fill="#FF7A00" stroke="none" class="pulse-dot" style="animation-delay:1.4s"/>
      <circle cx="150" cy="240" r="5" fill="#3D9BFF" stroke="none" class="pulse-dot" style="animation-delay:.3s"/>
    </svg>'''

# ---------------------------------------------------------------- navigation data
SERVICES = [
    ("developpement-web", "Développement Web", "Sites, apps métier, e-commerce", "code"),
    ("creation-site-web-benin", "Création de site web", "Sites professionnels au Bénin", "layers"),
    ("application-web", "Application Web", "Outils métier sur mesure", "server"),
    ("seo", "SEO & Visibilité", "Référencement Google local", "search"),
    ("froid-climatisation", "Froid & Climatisation", "Installation, entretien, dépannage", "snow"),
    ("maintenance-industrielle", "Maintenance industrielle", "Préventive et corrective", "gear"),
    ("electricite", "Électricité", "Installations et dépannage", "bolt"),
    ("energie-solaire", "Énergie solaire", "Étude et installation photovoltaïque", "sun"),
    ("plomberie", "Plomberie", "Installation et réparation", "drop"),
    ("videosurveillance", "Vidéosurveillance", "Caméras et contrôle d'accès", "camera"),
]
SECTORS = [
    ("hotels", "Hôtels", "hotel"),
    ("restaurants", "Restaurants", "store"),
    ("entreprises", "Entreprises", "building"),
    ("ecoles", "Écoles & centres de formation", "graduation"),
    ("industries", "Industries", "factory"),
    ("commerces", "Commerces", "cart"),
    ("particuliers", "Particuliers", "home"),
]
SERVICES_DICT = {s[0]: s for s in SERVICES}

NAV_MAIN = [
    ("/", "Accueil"),
    ("/a-propos.html", "À propos"),
    ("__services__", "Services"),
    ("/realisations.html", "Réalisations"),
    ("/secteurs.html", "Secteurs"),
    ("/blog.html", "Blog"),
    ("/contact.html", "Contact"),
]

print("helpers loaded")

# ---------------------------------------------------------------- page shell
def rel(path_from_root):
    """chemin relatif vers assets selon la profondeur de la page"""
    depth = path_from_root.count("/")
    return "../" * depth if depth else ""

def render_header(path, active):
    r = rel(path)
    services_links = "\n".join(
        '<a href="{r}services/{slug}.html"><strong>{label}</strong><span>{desc}</span></a>'.format(
            r=r, slug=s, label=l, desc=d) for s, l, d, i in SERVICES
    )
    nav_items = []
    for href, label in NAV_MAIN:
        if href == "__services__":
            nav_items.append('''<div class="has-mega">
              <a href="{r}services.html" aria-haspopup="true">Services</a>
              <div class="mega">{links}</div>
            </div>'''.format(r=r, links=services_links))
        else:
            target = (r + href.lstrip("/")) if href != "/" else (r + "index.html" if r else "/")
            cur = ' aria-current="page"' if active == href else ''
            nav_items.append('<a href="{t}"{c}>{l}</a>'.format(t=target if href != "/" else (r if r else "./"), c=cur, l=label))
    nav_desktop = "\n".join(nav_items)

    mobile_items = []
    for href, label in NAV_MAIN:
        if href == "__services__":
            sub = "\n".join('<a href="{r}services/{slug}.html">{l}</a>'.format(r=r, slug=s, l=l) for s, l, d, i in SERVICES)
            mobile_items.append('<a href="{r}services.html">Services</a><div class="sub">{sub}</div>'.format(r=r, sub=sub))
        else:
            target = (r + href.lstrip("/")) if href != "/" else (r if r else "./")
            mobile_items.append('<a href="{t}">{l}</a>'.format(t=target, l=label))
    mobile_nav = "\n".join(mobile_items)

    logo_href = r if r else "./"
    return '''<a class="skip-link" href="#main">Aller au contenu</a>
<header class="site-header">
  <div class="container">
    <a class="brand" href="{logo_href}">
      <img src="{r}assets/img/logo.png" alt="Logo KONFORTECH BÉNIN" width="42" height="42">
      <span>KONFORTECH <span style="color:var(--blue)">BÉNIN</span><small>Tech &amp; Froid</small></span>
    </a>
    <nav class="nav-desktop" aria-label="Navigation principale">
      {nav_desktop}
    </nav>
    <div class="header-actions">
      <a class="header-phone" href="tel:{tel}">{icon_phone} {phone}</a>
      <a class="btn btn-primary btn-sm" href="{r}devis.html">Demander un devis</a>
      <button class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
<div class="mobile-nav">
  {mobile_nav}
  <a class="btn btn-primary btn-block" href="{r}devis.html">Demander un devis</a>
  <a class="btn btn-ghost btn-block" style="margin-top:10px" href="tel:{tel}">{icon_phone} Appeler {phone}</a>
</div>'''.format(logo_href=logo_href, r=r, nav_desktop=nav_desktop, mobile_nav=mobile_nav,
                     tel=PHONE_TEL, phone=PHONE_DISPLAY, icon_phone=icon("phone"))

def render_footer(path):
    r = rel(path)
    services_col = "\n".join('<a href="{r}services/{s}.html">{l}</a>'.format(r=r, s=s, l=l) for s, l, d, i in SERVICES[:7])
    sectors_col = "\n".join('<a href="{r}secteurs/{s}.html">{l}</a>'.format(r=r, s=s, l=l) for s, l, i in SECTORS)
    return '''<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div>
        <div class="footer-brand">
          <img src="{r}assets/img/logo.png" alt="KONFORTECH BÉNIN" width="38" height="38">
          <b>KONFORTECH BÉNIN</b>
        </div>
        <p style="max-width:280px;font-size:.88rem">{baseline}</p>
        <ul class="footer-contact" style="margin-top:16px">
          <li>{icon_phone} <a href="tel:{tel}">{phone}</a></li>
          <li>{icon_mail} <a href="mailto:{email}">{email}</a></li>
          <li>{icon_pin} Abomey, Zou — Bénin</li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        {services_col}
        <a href="{r}services.html">Tous les services →</a>
      </div>
      <div class="footer-col">
        <h4>Secteurs</h4>
        {sectors_col}
      </div>
      <div class="footer-col">
        <h4>Entreprise</h4>
        <a href="{r}index.html">Accueil</a>
        <a href="{r}a-propos.html">À propos</a>
        <a href="{r}realisations.html">Réalisations</a>
        <a href="{r}blog.html">Blog</a>
        <a href="{r}devis.html">Demander un devis</a>
        <a href="{r}contact.html">Contact</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 KONFORTECH BÉNIN — Tous droits réservés.</span>
      <span>Conçu et développé par KONFORTECH BÉNIN — Abomey, Bénin</span>
    </div>
  </div>
</footer>
<a class="wa-float" href="https://wa.me/{wa}?text={wa_msg}" target="_blank" rel="noopener" aria-label="Contacter KONFORTECH BÉNIN sur WhatsApp">
  {icon_wa}
</a>
<script src="{r}assets/js/main.js" defer></script>'''.format(
        r=r, baseline=BASELINE, icon_phone=icon("phone"), tel=PHONE_TEL, phone=PHONE_DISPLAY,
        icon_mail=icon("mail"), email=EMAIL, icon_pin=icon("pin"), services_col=services_col,
        sectors_col=sectors_col, wa=WA_NUMBER, wa_msg=WA_MSG.replace(" ", "%20").replace(",", "%2C"),
        icon_wa=icon("whatsapp"))

def breadcrumbs(path, items):
    """items: list of (label, href|None) — dernier élément sans href"""
    r = rel(path)
    parts = ['<a href="{r}index.html">Accueil</a>'.format(r=r)]
    for label, href in items:
        if href:
            parts.append('<span>/</span><a href="{r}{h}">{l}</a>'.format(r=r, h=href, l=label))
        else:
            parts.append('<span>/</span><span aria-current="page">{l}</span>'.format(l=label))
    ld = {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": []
    }
    return '<nav class="breadcrumbs"><div class="container">' + " ".join(parts) + "</div></nav>"

def page(path, title, description, active, body, schema="", og_image=None):
    r = rel(path)
    canonical = DOMAIN_PLACEHOLDER + "/" + path.replace("index.html", "")
    if canonical.endswith("/") and path != "index.html":
        canonical = canonical.rstrip("/")
    og_img = og_image or (DOMAIN_PLACEHOLDER + "/assets/img/logo.png")
    return '''<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{canonical}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0066CC">
<link rel="icon" href="{r}assets/img/logo.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="KONFORTECH BÉNIN">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:image" content="{og_img}">
<meta property="og:locale" content="fr_FR">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{description}">
<meta name="twitter:image" content="{og_img}">
<link rel="stylesheet" href="{r}assets/css/style.css">
{schema}
</head>
<body>
{header}
<main id="main">
{body}
</main>
{footer}
</body>
</html>'''.format(title=title, description=description, canonical=canonical, r=r, og_img=og_img,
                   schema=schema, header=render_header(path, active), body=body, footer=render_footer(path))

print("shell loaded")

# ---------------------------------------------------------------- blocs réutilisables
def _resolve_href(r, h):
    if h.startswith(("http://", "https://", "tel:", "mailto:", "#")):
        return h
    return r + h

def cta_band(path, title, text, primary_label="Demander un devis", primary_href="devis.html", secondary_label=None, secondary_href=None):
    r = rel(path)
    sec = ""
    if secondary_label:
        sec = '<a class="btn btn-secondary" href="{h}" style="border-color:rgba(255,255,255,.5);color:#fff">{l}</a>'.format(h=_resolve_href(r, secondary_href), l=secondary_label)
    return '''<section>
  <div class="container">
    <div class="cta-band reveal">
      <div class="container-flex">
        <div>
          <h2>{title}</h2>
          <p style="max-width:480px">{text}</p>
        </div>
        <div class="cta-row" style="margin-top:0">
          <a class="btn btn-primary" href="{ph}">{pl}</a>
          {sec}
        </div>
      </div>
    </div>
  </div>
</section>'''.format(title=title, text=text, ph=_resolve_href(r, primary_href), pl=primary_label, sec=sec)

def faq_block(path, items, heading="Questions fréquentes"):
    rows = "\n".join('<details class="faq-item"><summary>{q}</summary><p>{a}</p></details>'.format(q=q, a=a) for q, a in items)
    schema_items = [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in items]
    return '''<section>
  <div class="container-narrow">
    <div class="section-head left reveal"><span class="eyebrow">FAQ</span><h2>{heading}</h2></div>
    <div class="reveal">{rows}</div>
  </div>
</section>'''.format(heading=heading, rows=rows), schema_items

def steps_block():
    steps = [
        ("Comprendre", "Écoute du besoin, visite technique ou audit digital, cahier des charges clair."),
        ("Concevoir", "Proposition technique et devis détaillé, choix des solutions les plus adaptées."),
        ("Installer", "Mise en œuvre par des techniciens qualifiés, dans le respect des délais annoncés."),
        ("Maintenir", "Suivi, entretien préventif et support réactif après livraison."),
        ("Améliorer", "Recommandations d'optimisation continue — performance, économie, évolutivité."),
    ]
    items = "\n".join('<div class="step reveal"><span class="num">0{n}</span><h3>{t}</h3><p>{d}</p></div>'.format(n=i+1, t=t, d=d) for i, (t, d) in enumerate(steps))
    return '<div class="steps">{items}</div>'.format(items=items)

def service_grid(path, exclude=None, limit=6):
    r = rel(path)
    items = [s for s in SERVICES if s[0] != exclude][:limit]
    cards = "\n".join('''<a class="card reveal" href="{r}services/{slug}.html">
      <div class="icon">{icon}</div><h3>{label}</h3><p>{desc}</p>
      <span class="card-link">En savoir plus {arrow}</span>
    </a>'''.format(r=r, slug=s, label=l, desc=d, icon=icon(i, "icon"), arrow=icon("arrow")) for s, l, d, i in items)
    return '<div class="grid grid-3">{cards}</div>'.format(cards=cards)

def sector_grid(path, limit=7):
    r = rel(path)
    cards = "\n".join('''<a class="card reveal" href="{r}secteurs/{slug}.html">
      <div class="icon">{icon}</div><h3>{label}</h3><p>Des solutions techniques et digitales pensées pour votre activité.</p>
      <span class="card-link">Découvrir {arrow}</span>
    </a>'''.format(r=r, slug=s, label=l, icon=icon(i, "icon"), arrow=icon("arrow")) for s, l, i in SECTORS[:limit])
    return '<div class="grid grid-3">{cards}</div>'.format(cards=cards)

def stats_block():
    return '''<div class="stats reveal">
      <div class="stat"><b>2</b><span>Pôles d'expertise intégrés : Tech &amp; Froid</span></div>
      <div class="stat"><b>10+</b><span>Domaines de solutions techniques couverts</span></div>
      <div class="stat"><b>7</b><span>Secteurs accompagnés au quotidien</span></div>
      <div class="stat"><b>100%</b><span>Interventions béninoises, exigence internationale</span></div>
    </div>'''

def org_schema():
    import json
    data = {
        "@context": "https://schema.org", "@type": "Organization",
        "name": "KONFORTECH BÉNIN", "url": DOMAIN_PLACEHOLDER,
        "logo": DOMAIN_PLACEHOLDER + "/assets/img/logo.png",
        "description": "KONFORTECH BÉNIN conçoit des solutions techniques modernes : développement web, applications, SEO, froid et climatisation, électricité, énergie solaire, maintenance industrielle.",
        "email": EMAIL, "telephone": PHONE_TEL,
        "address": {"@type": "PostalAddress", "addressRegion": "Zou", "addressLocality": "Abomey", "addressCountry": "BJ"},
        "sameAs": []
    }
    return '<script type="application/ld+json">' + json.dumps(data, ensure_ascii=False) + "</script>"

def local_business_schema(city=None):
    import json
    data = {
        "@context": "https://schema.org", "@type": "LocalBusiness",
        "name": "KONFORTECH BÉNIN", "url": DOMAIN_PLACEHOLDER,
        "image": DOMAIN_PLACEHOLDER + "/assets/img/logo.png",
        "telephone": PHONE_TEL, "email": EMAIL,
        "address": {"@type": "PostalAddress", "addressRegion": "Zou", "addressLocality": city or "Abomey", "addressCountry": "BJ"},
        "areaServed": city or "Bénin",
        "priceRange": "$$"
    }
    return '<script type="application/ld+json">' + json.dumps(data, ensure_ascii=False) + "</script>"

def faq_schema(items):
    import json
    data = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": items}
    return '<script type="application/ld+json">' + json.dumps(data, ensure_ascii=False) + "</script>"

def service_schema(name, description, url):
    import json
    data = {"@context": "https://schema.org", "@type": "Service", "serviceType": name,
            "provider": {"@type": "Organization", "name": "KONFORTECH BÉNIN"},
            "areaServed": "Bénin", "description": description, "url": url}
    return '<script type="application/ld+json">' + json.dumps(data, ensure_ascii=False) + "</script>"

PAGES_WRITTEN = []
def write_page(path, html):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(html)
    PAGES_WRITTEN.append(path)

print("blocks loaded")

# ================================================================ HOMEPAGE
def build_home():
    path = "index.html"
    hero = '''<section class="hero">
      <div class="frost-bg">{frost}</div>
      <div class="container">
        <div>
          <span class="eyebrow on-dark">Bénin · Développement Web · Froid &amp; Climatisation</span>
          <h1>Des solutions techniques modernes, pensées pour durer.</h1>
          <p class="lede">KONFORTECH BÉNIN conçoit et installe ce dont votre activité a besoin pour fonctionner mieux&nbsp;: sites et applications professionnels d'un côté, froid, climatisation et installations techniques de l'autre. Un seul interlocuteur, deux expertises complémentaires.</p>
          <div class="cta-row">
            <a class="btn btn-primary" href="devis.html">Demander un devis</a>
            <a class="btn btn-secondary" href="contact.html">Parler à un conseiller</a>
          </div>
          <div class="hero-badges">
            <span class="hero-badge">Sites &amp; applications web</span>
            <span class="hero-badge">Climatisation &amp; froid industriel</span>
            <span class="hero-badge">Électricité · Solaire · Vidéosurveillance</span>
          </div>
        </div>
        <div class="hero-visual reveal">{visual}</div>
      </div>
    </section>'''.format(frost=frost_lines(), visual=hero_visual())

    intro = '''<section>
      <div class="container two-col">
        <div class="reveal">
          <span class="eyebrow">Qui sommes-nous</span>
          <h2>Une entreprise béninoise, à la croisée de la technologie et du confort technique.</h2>
          <p class="muted">KONFORTECH BÉNIN accompagne particuliers, PME, hôtels, écoles, industries et institutions dans la conception de solutions techniques fiables. Nous ne faisons pas qu'une prestation ponctuelle : nous comprenons un besoin, concevons la bonne réponse, l'installons proprement et la maintenons dans le temps.</p>
          <ul class="check-list">
            <li>Deux pôles d'expertise intégrés sous un même toit : digital et technique</li>
            <li>Une méthode claire, du diagnostic à la maintenance</li>
            <li>Des interventions adaptées à la réalité du terrain béninois</li>
          </ul>
        </div>
        <div class="reveal">
          <div class="card-domain">
            <div class="tag">Pôle Technologie</div>
            <h3>Développement Web &amp; Solutions digitales</h3>
            <p>Sites internet, applications métier, e-commerce, tableaux de bord, SEO et maintenance web.</p>
          </div>
          <div style="height:18px"></div>
          <div class="card-domain alt">
            <div class="tag">Pôle Confort technique</div>
            <h3>Froid, Climatisation &amp; Installations</h3>
            <p>Climatisation, froid industriel, électricité, énergie solaire, plomberie, vidéosurveillance.</p>
          </div>
        </div>
      </div>
    </section>'''

    services = '''<section class="bg-fog">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Nos services</span>
          <h2>Un domaine d'expertise pour chaque besoin technique</h2>
          <p class="lede" style="margin:0 auto">Dix domaines de solutions, une seule exigence de qualité.</p>
        </div>
        {grid}
      </div>
    </section>'''.format(grid=service_grid(path, limit=9))

    why = '''<section>
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Pourquoi nous choisir</span>
          <h2>Ce qui distingue KONFORTECH BÉNIN</h2>
        </div>
        <div class="grid grid-3">
          <div class="card reveal"><div class="icon">{i1}</div><h3>Double expertise, un seul contact</h3><p>Vous n'avez plus besoin de gérer un prestataire web et un technicien froid séparément : une seule équipe coordonne les deux.</p></div>
          <div class="card reveal"><div class="icon">{i2}</div><h3>Méthode structurée</h3><p>Chaque projet suit le même processus rigoureux : comprendre, concevoir, installer, maintenir, améliorer.</p></div>
          <div class="card reveal"><div class="icon">{i3}</div><h3>Transparence totale</h3><p>Devis clair, délais annoncés, communication directe — sans surprise à la facturation.</p></div>
          <div class="card reveal"><div class="icon">{i4}</div><h3>Réactivité de terrain</h3><p>Une équipe disponible par téléphone et WhatsApp pour répondre vite, même en cas d'urgence technique.</p></div>
          <div class="card reveal"><div class="icon">{i5}</div><h3>Vision long terme</h3><p>Nous pensons chaque installation et chaque site pour qu'il reste fiable et évolutif dans la durée.</p></div>
          <div class="card reveal"><div class="icon">{i6}</div><h3>Ancrage local, standards internationaux</h3><p>Une entreprise béninoise qui applique des méthodes de travail et des outils au niveau international.</p></div>
        </div>
      </div>
    </section>'''.format(i1=icon("shield"), i2=icon("target"), i3=icon("chart"), i4=icon("phone"), i5=icon("gear"), i6=icon("layers"))

    method = '''<section class="bg-fog">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Notre méthode</span>
          <h2>Comprendre → Concevoir → Installer → Maintenir → Améliorer</h2>
        </div>
        {steps}
      </div>
    </section>'''.format(steps=steps_block())

    realisations = '''<section>
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Réalisations</span>
          <h2>Nos projets récents</h2>
        </div>
        <div class="empty-state reveal">
          {icon}
          <p><strong>Le portfolio de KONFORTECH BÉNIN est en cours de constitution.</strong></p>
          <p style="margin:0">Les projets réels seront publiés au fur et à mesure de leur livraison, avec l'accord des clients concernés.</p>
          <a class="btn btn-outline btn-sm" style="margin-top:16px" href="realisations.html">Voir la page réalisations</a>
        </div>
      </div>
    </section>'''.format(icon=icon("layers"))

    sectors = '''<section class="bg-ink">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow on-dark">Secteurs d'activité</span>
          <h2>Nous accompagnons des réalités très différentes</h2>
        </div>
        <div class="grid grid-4">
          {cards}
        </div>
      </div>
    </section>'''.format(cards="".join(
        '<a class="card card-dark reveal" href="secteurs/{s}.html"><div class="icon">{i}</div><h3 style="font-size:1rem">{l}</h3></a>'.format(s=s, l=l, i=icon(i, "icon")) for s, l, i in SECTORS
    ))

    testi = '''<section>
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Témoignages</span>
          <h2>Ce qu'en disent nos clients</h2>
        </div>
        <div class="empty-state reveal">
          {icon}
          <p><strong>Les premiers témoignages clients seront publiés ici prochainement.</strong></p>
          <p style="margin:0">Nous ne publions que des avis réellement recueillis auprès de nos clients.</p>
        </div>
      </div>
    </section>'''.format(icon=icon("check"))

    cta = cta_band(path, "Un projet technique en tête ?", "Décrivez votre besoin, nous revenons vers vous avec une solution concrète et un devis clair.", secondary_label="Appeler maintenant", secondary_href="tel:" + PHONE_TEL)

    faq_items = [
        ("KONFORTECH BÉNIN intervient-elle dans toutes les régions du Bénin ?", "Nous sommes basés à Abomey, dans le Zou, et intervenons naturellement dans cette région. Selon la nature du projet, nous nous déplaçons aussi dans d'autres villes du Bénin — précisez votre localisation lors de votre demande de devis."),
        ("Faites-vous à la fois du développement web et de la climatisation ?", "Oui. KONFORTECH BÉNIN réunit deux pôles complémentaires : les solutions digitales (sites, applications, SEO) et les solutions techniques (froid, climatisation, électricité, énergie solaire). C'est ce qui distingue notre approche."),
        ("Combien de temps pour recevoir un devis ?", "Après réception de votre demande via le formulaire, par téléphone ou WhatsApp, nous revenons généralement vers vous sous 24 à 48h ouvrées avec une première estimation."),
        ("Proposez-vous un contrat de maintenance ?", "Oui, aussi bien pour vos installations techniques (climatisation, électricité) que pour vos outils digitaux (site web, application). Contactez-nous pour discuter d'une formule adaptée."),
    ]
    faq_html, faq_data = faq_block(path, faq_items)

    contact_section = '''<section class="bg-fog">
      <div class="container two-col">
        <div class="reveal">
          <span class="eyebrow">Contact</span>
          <h2>Discutons de votre projet</h2>
          <p class="muted">Que ce soit pour un site web, une climatisation à installer ou un besoin technique plus large, notre équipe vous répond rapidement.</p>
          <ul class="check-list" style="margin-top:10px">
            <li>{ip} {phone}</li>
            <li>{im} {email}</li>
            <li>{ic} Abomey, Zou — Bénin</li>
          </ul>
          <div class="cta-row">
            <a class="btn btn-primary" href="devis.html">Demander un devis</a>
            <a class="btn btn-outline" href="contact.html">Voir la page contact</a>
          </div>
        </div>
        <div class="card reveal">
          <h3>Envoi rapide</h3>
          <p class="muted" style="font-size:.9rem">Pour une demande détaillée, utilisez notre formulaire de devis. Pour une question simple, écrivez-nous directement sur WhatsApp.</p>
          <a class="btn btn-block btn-ghost" style="margin-top:10px" href="https://wa.me/{wa}?text={wam}" target="_blank" rel="noopener">{iw} Écrire sur WhatsApp</a>
        </div>
      </div>
    </section>'''.format(ip=icon("phone"), phone=PHONE_DISPLAY, im=icon("mail"), email=EMAIL, ic=icon("pin"),
                          wa=WA_NUMBER, wam=WA_MSG.replace(" ", "%20").replace(",", "%2C"), iw=icon("whatsapp"))

    body = hero + intro + services + why + method + realisations + sectors + testi + cta + faq_html + contact_section
    schema = org_schema() + local_business_schema() + faq_schema(faq_data)
    html = page(path, "KONFORTECH BÉNIN — Développement Web, Froid & Climatisation au Bénin",
                "KONFORTECH BÉNIN conçoit des solutions techniques modernes : sites web, applications, SEO, climatisation, froid industriel, électricité et énergie solaire, pour particuliers et entreprises au Bénin.",
                "/", body, schema)
    write_page(path, html)

build_home()
print("home built")

# ================================================================ A PROPOS
def build_apropos():
    path = "a-propos.html"
    hero = '''<section class="page-hero">
      <div class="frost-bg">{frost}</div>
      <div class="container">
        <span class="eyebrow on-dark">À propos</span>
        <h1>Une entreprise béninoise qui conçoit des solutions techniques modernes.</h1>
        <p class="lede">À la croisée de la technologie, du confort et de la performance.</p>
      </div>
    </section>'''.format(frost=frost_lines())

    bc = breadcrumbs(path, [("À propos", None)])

    content = '''<section>
      <div class="container two-col">
        <div class="reveal">
          <span class="eyebrow">Présentation</span>
          <h2>Deux expertises, une seule ambition</h2>
          <p class="muted">KONFORTECH BÉNIN est née d'un constat simple : les entreprises et particuliers béninois ont besoin à la fois d'outils digitaux fiables et d'installations techniques bien conçues, mais trouvent rarement les deux réunis chez un seul prestataire sérieux.</p>
          <p class="muted">Nous avons construit une structure capable de répondre aux deux : un pôle technologie tourné vers le développement web et les solutions digitales, et un pôle confort technique dédié au froid, à la climatisation et aux installations techniques. Deux univers, une seule exigence de qualité.</p>
        </div>
        <div class="reveal">
          <div class="card">
            <div class="icon">{i}</div>
            <h3>Notre positionnement</h3>
            <p class="muted">KONFORTECH BÉNIN ne se présente pas comme une simple entreprise de dépannage. Nous concevons des solutions techniques modernes, pensées pour durer — pas uniquement pour réparer dans l'urgence.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-fog">
      <div class="container">
        <div class="grid grid-2">
          <div class="card reveal">
            <div class="icon">{i2}</div>
            <h3>Notre mission</h3>
            <p class="muted">Rendre accessibles, à toute organisation au Bénin, des solutions techniques et digitales de qualité professionnelle — conçues pour la réalité du terrain local.</p>
          </div>
          <div class="card reveal">
            <div class="icon">{i3}</div>
            <h3>Notre vision</h3>
            <p class="muted">Devenir une référence béninoise reconnue pour sa capacité à réunir technologie et solutions techniques au service de la performance de ses clients.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Nos valeurs</span>
          <h2>Ce qui guide chacune de nos interventions</h2>
        </div>
        <div class="grid grid-4">
          <div class="card reveal"><div class="icon">{v1}</div><h3>Sérieux</h3><p>Des engagements tenus, du premier échange à la maintenance.</p></div>
          <div class="card reveal"><div class="icon">{v2}</div><h3>Expertise</h3><p>Des solutions choisies pour leur pertinence technique, pas pour leur facilité.</p></div>
          <div class="card reveal"><div class="icon">{v3}</div><h3>Transparence</h3><p>Des devis clairs et une communication directe, sans zones d'ombre.</p></div>
          <div class="card reveal"><div class="icon">{v4}</div><h3>Innovation</h3><p>Une veille constante sur les meilleures pratiques technologiques et techniques.</p></div>
        </div>
      </div>
    </section>
    <section class="bg-ink">
      <div class="container two-col">
        <div class="reveal">
          <span class="eyebrow on-dark">Notre approche</span>
          <h2>Comprendre avant de proposer</h2>
          <p class="lede">Chaque projet démarre par une écoute réelle du besoin — qu'il s'agisse d'un site web ou d'une installation de climatisation. Nous concevons ensuite la solution la plus adaptée, l'installons avec rigueur, puis restons disponibles pour la maintenir et l'améliorer.</p>
        </div>
        <div class="reveal">{steps}</div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Notre équipe</span>
          <h2>Des professionnels au service de vos projets</h2>
        </div>
        <div class="empty-state reveal">
          {iteam}
          <p><strong>Les profils de l'équipe KONFORTECH BÉNIN seront présentés ici prochainement.</strong></p>
          <p style="margin:0">Nous préférons présenter notre équipe avec des informations exactes plutôt que des contenus génériques.</p>
        </div>
      </div>
    </section>'''.format(i=icon("target"), i2=icon("target"), i3=icon("chart"), v1=icon("shield"), v2=icon("gear"),
                          v3=icon("chart"), v4=icon("bolt"), steps=steps_block(), iteam=icon("layers"))

    cta = cta_band(path, "Envie de travailler avec nous ?", "Parlons de votre projet, digital ou technique — nous vous répondons rapidement.")
    body = hero + bc + content + cta
    schema = org_schema()
    html = page(path, "À propos de KONFORTECH BÉNIN — Notre mission, nos valeurs",
                "Découvrez KONFORTECH BÉNIN : une entreprise béninoise qui conçoit des solutions techniques modernes entre technologie, froid et climatisation. Mission, vision, valeurs et méthode.",
                "/a-propos.html", body, schema)
    write_page(path, html)

build_apropos()
print("apropos built")

# ================================================================ SERVICES HUB
def build_services_hub():
    path = "services.html"
    hero = '''<section class="page-hero">
      <div class="frost-bg">{frost}</div>
      <div class="container">
        <span class="eyebrow on-dark">Nos services</span>
        <h1>Des solutions techniques et digitales, sous un même toit.</h1>
        <p class="lede">Deux pôles d'expertise, dix domaines d'intervention — chacun avec sa propre page dédiée pour comprendre précisément ce que nous faisons.</p>
      </div>
    </section>'''.format(frost=frost_lines())
    bc = breadcrumbs(path, [("Services", None)])

    tech = [s for s in SERVICES if s[0] in ("developpement-web", "creation-site-web-benin", "application-web", "seo")]
    froid = [s for s in SERVICES if s[0] not in ("developpement-web", "creation-site-web-benin", "application-web", "seo")]

    def grid_for(items):
        return '<div class="grid grid-3">' + "".join(
            '''<a class="card reveal" href="services/{slug}.html"><div class="icon">{icon}</div><h3>{label}</h3><p>{desc}</p><span class="card-link">Découvrir {arrow}</span></a>'''.format(
                slug=s, label=l, desc=d, icon=icon(i, "icon"), arrow=icon("arrow")) for s, l, d, i in items
        ) + '</div>'

    body = hero + bc + '''<section>
      <div class="container">
        <div class="section-head left reveal"><span class="eyebrow">Pôle Technologie</span><h2>Développement Web &amp; Solutions digitales</h2></div>
        {g1}
      </div>
    </section>
    <section class="bg-fog">
      <div class="container">
        <div class="section-head left reveal"><span class="eyebrow">Pôle Confort technique</span><h2>Froid, Climatisation &amp; Installations</h2></div>
        {g2}
      </div>
    </section>'''.format(g1=grid_for(tech), g2=grid_for(froid))
    body += cta_band(path, "Vous ne savez pas par où commencer ?", "Décrivez-nous simplement votre besoin — nous identifions ensemble le bon service.")
    html = page(path, "Nos Services — KONFORTECH BÉNIN",
                "Développement web, applications, SEO, climatisation, froid industriel, électricité, énergie solaire, plomberie et vidéosurveillance : découvrez tous les services de KONFORTECH BÉNIN.",
                "/services.html", body, org_schema())
    write_page(path, html)

build_services_hub()
print("services hub built")

# ================================================================ SERVICE PAGE TEMPLATE
def service_page(slug, seo_title, h1, eyebrow, lede, intro_paras, offerings, benefits, faqs, meta_description, cta_text=None, extra_local=None):
    path = "services/{}.html".format(slug)
    _, label, _, ic = SERVICES_DICT[slug]
    hero = '''<section class="page-hero">
      <div class="frost-bg">{frost}</div>
      <div class="container">
        <span class="eyebrow on-dark">{eyebrow}</span>
        <h1>{h1}</h1>
        <p class="lede">{lede}</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="../devis.html">Demander un devis {icon}</a>
        </div>
      </div>
    </section>'''.format(frost=frost_lines(), eyebrow=eyebrow, h1=h1, lede=lede, icon=icon("arrow"))

    bc = breadcrumbs(path, [("Services", "services.html"), (label, None)])

    intro_html = "".join('<p class="muted">{}</p>'.format(p) for p in intro_paras)
    intro = '''<section>
      <div class="container-narrow reveal">
        {intro}
      </div>
    </section>'''.format(intro=intro_html)

    offer_cards = "".join('<div class="card reveal"><div class="icon">{i}</div><h3>{t}</h3><p>{d}</p></div>'.format(
        i=icon(ic), t=t, d=d) for t, d in offerings)
    offer_section = '''<section class="bg-fog">
      <div class="container">
        <div class="section-head left reveal"><span class="eyebrow">Ce que nous proposons</span><h2>Notre offre {label}</h2></div>
        <div class="grid grid-3">{cards}</div>
      </div>
    </section>'''.format(label=label.lower(), cards=offer_cards)

    ben_items = "".join('<li>{}</li>'.format(b) for b in benefits)
    benefits_section = '''<section>
      <div class="container two-col">
        <div class="reveal">
          <span class="eyebrow">Pourquoi nous confier ce projet</span>
          <h2>Les avantages KONFORTECH BÉNIN</h2>
          <ul class="check-list">{items}</ul>
        </div>
        <div class="reveal">{steps}</div>
      </div>
    </section>'''.format(items=ben_items, steps=steps_block())

    related = [s for s in SERVICES if s[0] != slug][:3]
    related_html = "".join('''<a class="card reveal" href="{s}.html"><div class="icon">{i}</div><h3>{l}</h3><p>{d}</p></a>'''.format(
        s=s, l=l, d=d, i=icon(i2, "icon")) for s, l, d, i2 in related)
    related_section = '''<section class="bg-fog">
      <div class="container">
        <div class="section-head left reveal"><span class="eyebrow">Autres services</span><h2>Ils complètent souvent ce projet</h2></div>
        <div class="grid grid-3">{cards}</div>
      </div>
    </section>'''.format(cards=related_html)

    faq_html, faq_data = faq_block(path, faqs)
    cta = cta_band(path, cta_text or "Prêt à lancer votre projet {}\u00a0?".format(label.lower()),
                    "Recevez un devis détaillé sous 24 à 48h ouvrées.", primary_href="devis.html", secondary_label="Appeler", secondary_href="tel:" + PHONE_TEL)

    body = hero + bc + intro + offer_section + benefits_section + (extra_local or "") + related_section + cta + faq_html
    schema = service_schema(label, meta_description, DOMAIN_PLACEHOLDER + "/" + path) + faq_schema(faq_data)
    html = page(path, seo_title, meta_description, "__services__", body, schema)
    write_page(path, html)

print("service template loaded")

# ================================================================ 10 SERVICE PAGES — données
service_page(
  slug="developpement-web",
  seo_title="Développement Web au Bénin — Sites & Applications | KONFORTECH BÉNIN",
  h1="Des sites et applications web pensés pour faire avancer votre activité.",
  eyebrow="Développement Web",
  lede="Sites professionnels, applications métier, e-commerce et tableaux de bord — conçus avec une exigence de performance et de référencement dès la première ligne de code.",
  intro_paras=[
    "Un site internet n'est pas une simple vitrine : c'est souvent le premier point de contact entre votre activité et vos futurs clients. KONFORTECH BÉNIN conçoit des sites et applications web rapides, sécurisés et pensés pour être trouvés sur Google.",
    "Que vous ayez besoin d'un site vitrine, d'une boutique en ligne ou d'un outil métier interne, nous adaptons la solution technique à votre besoin réel — sans complexité inutile.",
  ],
  offerings=[
    ("Sites internet professionnels", "Sites vitrines rapides, responsives et optimisés pour le référencement naturel."),
    ("Applications web", "Outils métier sur mesure pour organiser, suivre et automatiser vos processus internes."),
    ("E-commerce", "Boutiques en ligne pensées pour la conversion, avec un parcours d'achat simple et sécurisé."),
    ("Tableaux de bord", "Interfaces claires pour suivre vos indicateurs clés en temps réel."),
    ("SEO intégré", "Chaque site est construit avec les fondamentaux du référencement dès la conception."),
    ("Maintenance web", "Mises à jour, sauvegardes et support technique après la mise en ligne."),
  ],
  benefits=[
    "Un site conçu pour la vitesse — un critère décisif pour Google et pour vos visiteurs",
    "Une architecture propre, facile à faire évoluer plus tard",
    "Un accompagnement qui ne s'arrête pas à la mise en ligne",
    "Un interlocuteur unique du cahier des charges à la maintenance",
  ],
  faqs=[
    ("Combien de temps faut-il pour créer un site professionnel ?", "Cela dépend de la complexité du projet. Un site vitrine simple peut être livré en quelques semaines ; une application métier plus complexe demande davantage de temps. Nous vous donnons un délai précis dès le devis."),
    ("Le site sera-t-il optimisé pour Google ?", "Oui. Chaque site que nous développons intègre les bonnes pratiques SEO techniques dès sa conception : vitesse, structure, balises, données structurées."),
    ("Proposez-vous la maintenance après la livraison ?", "Oui, nous proposons des formules de maintenance web pour garder votre site à jour, sécurisé et performant dans la durée."),
  ],
  meta_description="Création de sites internet, applications web et e-commerce au Bénin par KONFORTECH BÉNIN. Des solutions rapides, sécurisées et optimisées pour Google.",
)

service_page(
  slug="creation-site-web-benin",
  seo_title="Création de Site Web au Bénin — Agence Web | KONFORTECH BÉNIN",
  h1="Création de site web professionnel au Bénin.",
  eyebrow="Création de site web · Bénin",
  lede="KONFORTECH BÉNIN accompagne particuliers, PME et institutions dans la création de leur site internet professionnel — de la conception à la mise en ligne.",
  intro_paras=[
    "De plus en plus d'entreprises et d'indépendants au Bénin cherchent à exister sérieusement sur Google. Créer un site internet professionnel est aujourd'hui une étape presque incontournable pour gagner en crédibilité et se faire trouver par de nouveaux clients.",
    "En tant qu'agence web basée à Abomey, KONFORTECH BÉNIN conçoit des sites internet adaptés à la réalité du marché béninois : rapides même avec une connexion limitée, clairs sur mobile, et construits pour apparaître dans les résultats de recherche locaux.",
    "Nous travaillons avec des particuliers, des PME, des hôtels, des écoles et des professions libérales partout où notre accompagnement est pertinent, avec un ancrage particulier sur Abomey et sa région.",
  ],
  offerings=[
    ("Site vitrine professionnel", "Une présentation claire de votre activité, de vos services et de vos coordonnées."),
    ("Site pour indépendants et PME", "Une solution simple, rapide à mettre en ligne, sans complexité superflue."),
    ("Refonte de site existant", "Modernisation d'un site déjà en ligne : design, vitesse, référencement."),
    ("Nom de domaine & hébergement", "Accompagnement dans le choix et la configuration de votre présence en ligne."),
    ("Référencement local", "Un site pensé pour apparaître dans les recherches liées à votre ville et votre secteur."),
    ("Formation à la prise en main", "Vous apprenez à mettre à jour les informations essentielles de votre site."),
  ],
  benefits=[
    "Une agence web basée au Bénin, qui comprend le contexte local",
    "Des sites légers, adaptés aux connexions mobiles",
    "Un accompagnement en français, clair et sans jargon technique inutile",
    "Un site pensé pour le référencement dès sa construction",
  ],
  faqs=[
    ("Combien coûte la création d'un site web au Bénin avec KONFORTECH BÉNIN ?", "Le tarif dépend du type de site souhaité (vitrine, e-commerce, application) et de son niveau de complexité. Demandez un devis gratuit pour recevoir une estimation précise et détaillée."),
    ("Intervenez-vous uniquement à Abomey ?", "Nous sommes basés à Abomey, dans le Zou, et intervenons naturellement dans cette zone. Selon les projets, nous accompagnons aussi des clients situés dans d'autres villes du Bénin — précisez votre situation lors de votre demande."),
    ("Puis-je modifier mon site moi-même après la livraison ?", "Oui, selon la solution retenue, nous pouvons vous former à la mise à jour des contenus essentiels (textes, images, informations de contact)."),
  ],
  meta_description="Agence de création de site web au Bénin. KONFORTECH BÉNIN conçoit votre site internet professionnel à Abomey et partout au Bénin : vitrine, e-commerce, référencement local.",
)

service_page(
  slug="application-web",
  seo_title="Développement d'Applications Web & Outils Métier | KONFORTECH BÉNIN",
  h1="Des applications web sur mesure pour vos process métier.",
  eyebrow="Application Web",
  lede="Gestion, suivi, automatisation : nous développons des outils web adaptés à votre organisation, simples à utiliser au quotidien.",
  intro_paras=[
    "Chaque organisation a ses propres processus — parfois encore gérés sur papier ou via des fichiers dispersés. KONFORTECH BÉNIN conçoit des applications web sur mesure pour centraliser, suivre et automatiser ces processus.",
    "Nous privilégions des outils simples, réellement utilisés par vos équipes, plutôt que des systèmes complexes qui restent inutilisés.",
  ],
  offerings=[
    ("Applications de gestion interne", "Suivi de stocks, de clients, de commandes ou de dossiers, adapté à votre activité."),
    ("Plateformes métier", "Outils pensés pour un secteur précis : hôtellerie, éducation, santé, industrie."),
    ("Espaces clients / portails", "Interfaces dédiées pour vos clients ou partenaires, avec accès sécurisé."),
    ("Automatisation de tâches", "Réduction des tâches répétitives grâce à des workflows automatisés."),
    ("Tableaux de bord de pilotage", "Une vision claire de vos indicateurs, actualisée en temps réel."),
    ("Intégrations", "Connexion de votre application à d'autres outils que vous utilisez déjà."),
  ],
  benefits=[
    "Une application conçue autour de vos processus réels, pas d'un modèle générique",
    "Une interface simple, pensée pour vos équipes sur le terrain",
    "Une architecture évolutive, prête à grandir avec votre activité",
    "Un accompagnement dans la durée, formation comprise",
  ],
  faqs=[
    ("Quelle différence entre un site web et une application web ?", "Un site web présente votre activité. Une application web permet à vos équipes ou vos clients d'agir : saisir, suivre, gérer des données au quotidien."),
    ("L'application fonctionnera-t-elle sur mobile ?", "Oui, nos applications sont conçues pour être utilisables aussi bien sur ordinateur que sur smartphone ou tablette."),
    ("Peut-on faire évoluer l'application après la livraison ?", "Oui, nous concevons des architectures évolutives pour ajouter de nouvelles fonctionnalités progressivement."),
  ],
  meta_description="Développement d'applications web sur mesure au Bénin : gestion interne, plateformes métier, tableaux de bord et automatisation, par KONFORTECH BÉNIN.",
)

service_page(
  slug="seo",
  seo_title="SEO & Référencement Google au Bénin | KONFORTECH BÉNIN",
  h1="Être trouvé sur Google, durablement.",
  eyebrow="SEO & Visibilité",
  lede="Référencement technique, local et éditorial : nous positionnons progressivement votre site sur les recherches qui comptent pour votre activité.",
  intro_paras=[
    "Avoir un site internet ne suffit pas s'il n'apparaît jamais dans les résultats de recherche. Le SEO — référencement naturel — consiste à optimiser un site pour qu'il gagne la confiance de Google et de vos visiteurs, sur le long terme.",
    "KONFORTECH BÉNIN travaille le SEO technique (vitesse, structure, code), le SEO local (Google Business Profile, cohérence des informations) et le contenu, pour construire une visibilité durable plutôt qu'un résultat artificiel et éphémère.",
  ],
  offerings=[
    ("Audit SEO technique", "Analyse complète de votre site : vitesse, structure, erreurs, indexation."),
    ("SEO local", "Optimisation de votre présence sur les recherches géolocalisées et sur Google Business Profile."),
    ("Optimisation on-page", "Titres, balises, structure de contenu et maillage interne."),
    ("Stratégie de contenu", "Un blog et des pages pensés pour répondre aux questions réelles de vos futurs clients."),
    ("Performance & Core Web Vitals", "Amélioration de la vitesse de chargement, facteur clé pour Google et pour l'expérience utilisateur."),
    ("Suivi & reporting", "Un suivi régulier de votre positionnement et de votre trafic."),
  ],
  benefits=[
    "Une approche honnête, sans promesse de résultat artificiel ou de raccourci risqué",
    "Un travail à la fois technique, local et éditorial",
    "Une cohérence assurée entre votre site et votre fiche Google Business Profile",
    "Un accompagnement progressif, mesurable dans le temps",
  ],
  faqs=[
    ("En combien de temps voit-on des résultats en SEO ?", "Le référencement naturel est un travail de fond. Les premiers effets sont généralement visibles après plusieurs semaines à quelques mois, selon la concurrence sur vos mots-clés."),
    ("Le SEO est-il inclus dans la création de mon site ?", "Les fondamentaux techniques du SEO sont intégrés dans chaque site que nous créons. Un accompagnement SEO continu (contenu, suivi, optimisation) peut être ajouté en complément."),
    ("Travaillez-vous le référencement local pour Abomey et le Bénin ?", "Oui, c'est une de nos priorités : aider les entreprises béninoises à apparaître dans les recherches locales de leurs futurs clients."),
  ],
  meta_description="Services SEO au Bénin : référencement technique, local et éditorial par KONFORTECH BÉNIN. Positionnez durablement votre site sur Google.",
)

service_page(
  slug="froid-climatisation",
  seo_title="Froid & Climatisation au Bénin — Installation, Entretien, Dépannage | KONFORTECH BÉNIN",
  h1="Installation, entretien et dépannage de vos systèmes de climatisation.",
  eyebrow="Froid & Climatisation",
  lede="Du climatiseur résidentiel au froid commercial et industriel, KONFORTECH BÉNIN installe et entretient vos équipements pour un confort fiable toute l'année.",
  intro_paras=[
    "La chaleur au Bénin rend la climatisation indispensable, dans les foyers comme dans les commerces, hôtels ou industries. Une installation mal réalisée ou un entretien négligé se traduisent vite par des pannes, une surconsommation d'électricité et un inconfort évitable.",
    "KONFORTECH BÉNIN installe, entretient et dépanne vos systèmes de climatisation et de froid, avec un diagnostic précis avant toute intervention.",
  ],
  offerings=[
    ("Installation de climatiseurs", "Split, multi-split ou gainable — installation propre et conforme aux normes."),
    ("Entretien préventif", "Nettoyage, contrôle du gaz réfrigérant et vérification des performances."),
    ("Dépannage", "Intervention rapide en cas de panne ou de baisse de performance."),
    ("Diagnostic technique", "Identification précise de l'origine d'un dysfonctionnement avant toute réparation."),
    ("Climatisation résidentielle", "Solutions adaptées aux maisons et appartements."),
    ("Froid commercial & industriel", "Chambres froides, vitrines réfrigérées et systèmes pour l'agroalimentaire et l'industrie."),
  ],
  benefits=[
    "Des techniciens qui diagnostiquent avant d'intervenir, sans remplacement systématique",
    "Un entretien préventif qui réduit les pannes et la consommation électrique",
    "Des interventions aussi bien résidentielles que professionnelles et industrielles",
    "Une disponibilité rapide en cas de dépannage urgent",
  ],
  faqs=[
    ("À quelle fréquence faut-il entretenir un climatiseur ?", "Un entretien tous les 6 mois est généralement recommandé pour préserver les performances et la durée de vie de l'appareil, surtout dans un climat chaud et poussiéreux."),
    ("Intervenez-vous pour du froid industriel ?", "Oui, nous intervenons aussi bien sur la climatisation résidentielle que sur le froid commercial et industriel : chambres froides, vitrines réfrigérées, systèmes de production."),
    ("Que faire en cas de panne urgente ?", "Contactez-nous par téléphone ou WhatsApp — nous vous indiquons les premières vérifications à faire et organisons une intervention rapide."),
  ],
  meta_description="Installation, entretien et dépannage de climatisation et froid industriel au Bénin par KONFORTECH BÉNIN. Intervention résidentielle, commerciale et industrielle.",
)

service_page(
  slug="maintenance-industrielle",
  seo_title="Maintenance Industrielle au Bénin | KONFORTECH BÉNIN",
  h1="Une maintenance industrielle qui prévient plutôt que subit.",
  eyebrow="Maintenance industrielle",
  lede="Maintenance préventive et corrective de vos équipements techniques, pour limiter les arrêts de production et prolonger leur durée de vie.",
  intro_paras=[
    "Dans un environnement industriel, une panne non anticipée coûte toujours plus cher qu'un entretien régulier. KONFORTECH BÉNIN accompagne les industries et unités de production dans la mise en place d'une maintenance structurée de leurs équipements techniques.",
    "Notre approche combine surveillance préventive, intervention corrective rapide et recommandations d'optimisation continue.",
  ],
  offerings=[
    ("Maintenance préventive", "Contrôles réguliers pour anticiper l'usure et éviter les pannes."),
    ("Maintenance corrective", "Intervention rapide en cas de panne pour limiter l'arrêt de production."),
    ("Diagnostic d'équipements", "Analyse technique précise avant toute décision de réparation."),
    ("Contrats de maintenance", "Un suivi planifié et contractualisé, adapté à votre rythme de production."),
    ("Optimisation des installations", "Recommandations concrètes pour améliorer fiabilité et performance."),
    ("Suivi technique", "Historique des interventions pour un pilotage clair de vos équipements."),
  ],
  benefits=[
    "Moins d'arrêts de production imprévus",
    "Une meilleure durée de vie de vos équipements techniques",
    "Un interlocuteur technique unique et disponible",
    "Des contrats de maintenance adaptés à votre activité",
  ],
  faqs=[
    ("Quelle différence entre maintenance préventive et corrective ?", "La maintenance préventive anticipe les pannes par des contrôles réguliers. La maintenance corrective intervient après une panne pour la résoudre. Les deux sont complémentaires."),
    ("Proposez-vous des contrats annuels ?", "Oui, nous pouvons mettre en place un contrat de maintenance planifié, adapté au rythme et aux besoins de votre unité de production."),
  ],
  meta_description="Maintenance industrielle préventive et corrective au Bénin par KONFORTECH BÉNIN : diagnostic, contrats de maintenance et optimisation d'équipements.",
)

service_page(
  slug="electricite",
  seo_title="Électricité Bâtiment & Professionnelle au Bénin | KONFORTECH BÉNIN",
  h1="Des installations électriques sûres, aux normes.",
  eyebrow="Électricité",
  lede="Installation, dépannage et maintenance de vos systèmes électriques, pour particuliers et professionnels.",
  intro_paras=[
    "Une installation électrique mal réalisée est un risque autant qu'une source de pannes récurrentes. KONFORTECH BÉNIN réalise des installations électriques neuves, des dépannages et des mises aux normes pour particuliers et professionnels.",
  ],
  offerings=[
    ("Installations neuves", "Câblage et installation électrique pour constructions neuves ou rénovations."),
    ("Dépannage électrique", "Intervention rapide en cas de panne ou de dysfonctionnement."),
    ("Tableaux électriques", "Installation et mise aux normes de vos tableaux de distribution."),
    ("Installations professionnelles", "Solutions adaptées aux bureaux, commerces et sites industriels."),
    ("Maintenance électrique", "Contrôles réguliers pour prévenir les risques et les pannes."),
    ("Diagnostic électrique", "Vérification de la conformité et de la sécurité de votre installation."),
  ],
  benefits=[
    "Des installations réalisées dans le respect des règles de sécurité",
    "Une intervention rapide en cas de panne",
    "Un accompagnement pour particuliers comme pour professionnels",
    "Une approche préventive pour limiter les risques électriques",
  ],
  faqs=[
    ("Intervenez-vous en urgence pour une panne électrique ?", "Oui, contactez-nous par téléphone ou WhatsApp pour organiser une intervention rapide."),
    ("Proposez-vous la mise aux normes d'anciennes installations ?", "Oui, nous réalisons des diagnostics et des mises aux normes d'installations électriques existantes."),
  ],
  meta_description="Installation, dépannage et maintenance électrique au Bénin par KONFORTECH BÉNIN : tableaux électriques, mises aux normes, installations professionnelles.",
)

service_page(
  slug="energie-solaire",
  seo_title="Énergie Solaire au Bénin — Installation Photovoltaïque | KONFORTECH BÉNIN",
  h1="Des solutions solaires étudiées pour votre consommation réelle.",
  eyebrow="Énergie solaire",
  lede="Étude, dimensionnement et installation de solutions photovoltaïques, pour réduire votre dépendance au réseau et vos coûts d'électricité.",
  intro_paras=[
    "L'énergie solaire représente une opportunité concrète au Bénin, aussi bien pour les particuliers que pour les entreprises confrontées à des coupures ou à des coûts électriques élevés. KONFORTECH BÉNIN étudie et installe des solutions photovoltaïques réellement dimensionnées pour votre consommation.",
  ],
  offerings=[
    ("Étude de faisabilité", "Analyse de votre consommation pour dimensionner une solution adaptée."),
    ("Dimensionnement photovoltaïque", "Choix des panneaux, batteries et onduleurs selon vos besoins réels."),
    ("Installation solaire", "Pose et raccordement de votre installation par des techniciens qualifiés."),
    ("Solutions hybrides", "Combinaison solaire et réseau pour une continuité d'alimentation."),
    ("Maintenance solaire", "Contrôle et entretien de votre installation pour préserver ses performances."),
    ("Solutions pour professionnels", "Installations adaptées aux commerces, hôtels et sites industriels."),
  ],
  benefits=[
    "Un dimensionnement basé sur votre consommation réelle, pas sur une estimation générique",
    "Une installation réalisée par des techniciens formés",
    "Une réduction progressive de votre dépendance au réseau électrique",
    "Un suivi de maintenance pour préserver la performance dans le temps",
  ],
  faqs=[
    ("Combien coûte une installation solaire ?", "Le coût dépend de votre consommation et du type de solution retenue (solaire seul ou hybride). Demandez une étude pour recevoir une estimation précise."),
    ("L'énergie solaire peut-elle remplacer totalement le réseau électrique ?", "Cela dépend du dimensionnement retenu. Une solution hybride, combinant solaire et réseau, offre souvent le meilleur équilibre entre coût et fiabilité."),
  ],
  meta_description="Étude, dimensionnement et installation de solutions solaires photovoltaïques au Bénin par KONFORTECH BÉNIN, pour particuliers et professionnels.",
)

service_page(
  slug="plomberie",
  seo_title="Plomberie au Bénin — Installation & Réparation | KONFORTECH BÉNIN",
  h1="Des installations de plomberie fiables, sans fuite ni mauvaise surprise.",
  eyebrow="Plomberie",
  lede="Installation, réparation et entretien de vos systèmes de plomberie, pour particuliers et professionnels.",
  intro_paras=[
    "Une fuite ou une installation mal réalisée peut rapidement causer des dégâts coûteux. KONFORTECH BÉNIN intervient pour l'installation, la réparation et l'entretien de vos systèmes de plomberie.",
  ],
  offerings=[
    ("Installation sanitaire", "Pose de canalisations, robinetterie et équipements sanitaires."),
    ("Réparation de fuites", "Diagnostic et intervention rapide en cas de fuite."),
    ("Entretien préventif", "Contrôles réguliers pour éviter les incidents."),
    ("Installations professionnelles", "Solutions adaptées aux hôtels, restaurants et commerces."),
  ],
  benefits=[
    "Une intervention rapide en cas de fuite ou de panne",
    "Des installations réalisées avec des matériaux durables",
    "Un accompagnement pour particuliers comme pour professionnels",
  ],
  faqs=[
    ("Intervenez-vous en urgence pour une fuite d'eau ?", "Oui, contactez-nous par téléphone ou WhatsApp pour une intervention rapide."),
    ("Proposez-vous un entretien préventif ?", "Oui, un contrôle régulier de vos installations permet d'éviter la plupart des incidents coûteux."),
  ],
  meta_description="Installation, réparation et entretien de plomberie au Bénin par KONFORTECH BÉNIN, pour particuliers et professionnels.",
)

service_page(
  slug="videosurveillance",
  seo_title="Vidéosurveillance & Sécurité Électronique au Bénin | KONFORTECH BÉNIN",
  h1="Sécurisez vos locaux avec des solutions de vidéosurveillance fiables.",
  eyebrow="Vidéosurveillance",
  lede="Caméras de surveillance, contrôle d'accès et sécurité électronique, installés et configurés pour une protection efficace de vos locaux.",
  intro_paras=[
    "Protéger un domicile, un commerce ou un site professionnel passe aujourd'hui par des solutions de sécurité électronique fiables. KONFORTECH BÉNIN installe des systèmes de vidéosurveillance et de contrôle d'accès adaptés à la configuration de vos locaux.",
  ],
  offerings=[
    ("Caméras de vidéosurveillance", "Installation de caméras intérieures et extérieures, avec ou sans enregistrement à distance."),
    ("Contrôle d'accès", "Solutions pour sécuriser l'entrée de vos locaux professionnels."),
    ("Sécurité électronique", "Systèmes complémentaires adaptés à vos besoins de sécurité."),
    ("Installation & configuration", "Mise en place complète, avec paramétrage pour un usage simple au quotidien."),
    ("Maintenance", "Contrôle régulier du bon fonctionnement de vos équipements de sécurité."),
  ],
  benefits=[
    "Des solutions dimensionnées selon la configuration réelle de vos locaux",
    "Une installation propre et une configuration pensée pour la simplicité d'usage",
    "Un accompagnement pour particuliers, commerces et entreprises",
  ],
  faqs=[
    ("Puis-je consulter mes caméras à distance ?", "Selon le système installé, un accès à distance depuis votre smartphone peut être configuré."),
    ("Combien de caméras faut-il pour sécuriser mon local ?", "Cela dépend de la configuration de vos locaux. Nous réalisons une évaluation avant de vous proposer un dimensionnement adapté."),
  ],
  meta_description="Installation de caméras de vidéosurveillance et solutions de sécurité électronique au Bénin par KONFORTECH BÉNIN, pour particuliers et professionnels.",
)

print("10 service pages built")

# ================================================================ SECTEURS HUB
def build_secteurs_hub():
    path = "secteurs.html"
    hero = '''<section class="page-hero">
      <div class="frost-bg">{frost}</div>
      <div class="container">
        <span class="eyebrow on-dark">Secteurs d'activité</span>
        <h1>Des solutions adaptées à la réalité de votre secteur.</h1>
        <p class="lede">Chaque secteur a ses contraintes propres. Nous adaptons nos solutions techniques et digitales en conséquence.</p>
      </div>
    </section>'''.format(frost=frost_lines())
    bc = breadcrumbs(path, [("Secteurs", None)])
    body = hero + bc + '<section><div class="container">{grid}</div></section>'.format(grid=sector_grid(path))
    body += cta_band(path, "Votre secteur n'est pas listé ?", "Contactez-nous : nous accompagnons aussi les ONG, institutions et promoteurs immobiliers.")
    html = page(path, "Secteurs d'activité — KONFORTECH BÉNIN",
                "KONFORTECH BÉNIN accompagne hôtels, restaurants, entreprises, écoles, industries, commerces et particuliers avec des solutions techniques et digitales adaptées.",
                "/secteurs.html", body, org_schema())
    write_page(path, html)

build_secteurs_hub()

# ================================================================ SECTOR PAGE TEMPLATE
def sector_page(slug, seo_title, h1, lede, problems, solutions, services_used, meta_description):
    path = "secteurs/{}.html".format(slug)
    _, label, ic = [x for x in SECTORS if x[0] == slug][0]
    hero = '''<section class="page-hero">
      <div class="frost-bg">{frost}</div>
      <div class="container">
        <span class="eyebrow on-dark">Secteur</span>
        <h1>{h1}</h1>
        <p class="lede">{lede}</p>
        <div class="cta-row"><a class="btn btn-primary" href="../devis.html">Demander un devis</a></div>
      </div>
    </section>'''.format(frost=frost_lines(), h1=h1, lede=lede)
    bc = breadcrumbs(path, [("Secteurs", "secteurs.html"), (label, None)])

    prob_html = "".join('<li>{}</li>'.format(p) for p in problems)
    sol_html = "".join('<li>{}</li>'.format(s) for s in solutions)
    ps = '''<section>
      <div class="container">
        <div class="ps-grid reveal">
          <div class="ps-col problem"><h3>Défis fréquents</h3><ul class="check-list">{p}</ul></div>
          <div class="ps-col solution"><h3>Notre réponse</h3><ul class="check-list">{s}</ul></div>
        </div>
      </div>
    </section>'''.format(p=prob_html, s=sol_html)

    used = [s for s in SERVICES if s[0] in services_used]
    used_html = "".join('''<a class="card reveal" href="../services/{s}.html"><div class="icon">{i}</div><h3>{l}</h3><p>{d}</p></a>'''.format(
        s=s, l=l, d=d, i=icon(i2, "icon")) for s, l, d, i2 in used)
    used_section = '''<section class="bg-fog">
      <div class="container">
        <div class="section-head left reveal"><span class="eyebrow">Services mobilisés</span><h2>Ce que nous mettons en œuvre pour ce secteur</h2></div>
        <div class="grid grid-3">{cards}</div>
      </div>
    </section>'''.format(cards=used_html)

    cta = cta_band(path, "Un projet pour votre {}\u00a0?".format(label.lower()), "Décrivez votre contexte, nous vous proposons une solution concrète.", primary_href="devis.html", secondary_label="Appeler", secondary_href="tel:" + PHONE_TEL)
    body = hero + bc + ps + used_section + cta
    html = page(path, seo_title, meta_description, "/secteurs.html", body, org_schema())
    write_page(path, html)

sector_page("hotels", "Solutions pour Hôtels au Bénin | KONFORTECH BÉNIN", "Hôtels : confort client et efficacité opérationnelle.",
  "Climatisation fiable, site de réservation clair, sécurité électronique — pour une expérience client irréprochable.",
  ["Climatisation qui tombe en panne pendant la haute saison", "Site internet peu visible sur Google face à la concurrence", "Sécurité des locaux et des biens des clients"],
  ["Contrats d'entretien préventif pour vos systèmes de climatisation", "Sites web et présence en ligne optimisés pour attirer des réservations", "Installation de vidéosurveillance et contrôle d'accès"],
  ["froid-climatisation", "developpement-web", "videosurveillance"],
  "KONFORTECH BÉNIN accompagne les hôtels au Bénin : climatisation, site de réservation, sécurité électronique et maintenance technique."
)
sector_page("restaurants", "Solutions pour Restaurants au Bénin | KONFORTECH BÉNIN", "Restaurants : froid maîtrisé et visibilité en ligne.",
  "Une chaîne du froid fiable et une présence digitale qui donne envie de pousser la porte.",
  ["Rupture de la chaîne du froid, risque pour les denrées", "Difficulté à être trouvé par de nouveaux clients en ligne", "Installations électriques sous tension en cuisine"],
  ["Installation et entretien de froid commercial adapté à la restauration", "Site web ou fiche Google optimisés pour le référencement local", "Mises aux normes et dépannage électrique réactif"],
  ["froid-climatisation", "seo", "electricite"],
  "KONFORTECH BÉNIN accompagne les restaurants au Bénin : froid commercial, visibilité Google et installations électriques fiables."
)
sector_page("entreprises", "Solutions pour Entreprises & PME au Bénin | KONFORTECH BÉNIN", "Entreprises : des outils digitaux et un environnement de travail fiable.",
  "Sites, applications métier et confort thermique des locaux, pour des équipes qui travaillent dans de bonnes conditions.",
  ["Outils internes dispersés, peu efficaces", "Site web qui ne reflète pas le sérieux de l'entreprise", "Climatisation des bureaux mal entretenue"],
  ["Applications web sur mesure pour centraliser vos processus", "Un site professionnel pensé pour la crédibilité et la conversion", "Contrats de maintenance pour vos installations techniques"],
  ["application-web", "developpement-web", "froid-climatisation"],
  "KONFORTECH BÉNIN accompagne les entreprises et PME au Bénin : applications métier, sites web professionnels et maintenance technique."
)
sector_page("ecoles", "Solutions pour Écoles & Centres de Formation au Bénin | KONFORTECH BÉNIN", "Écoles : environnement d'apprentissage confortable et digitalisé.",
  "Des salles de classe et bureaux administratifs bien climatisés, une présence en ligne claire pour les familles.",
  ["Salles de classe inconfortables en saison chaude", "Communication avec les parents peu structurée en ligne", "Installations électriques vieillissantes"],
  ["Installation et entretien de climatisation pour salles de classe et bureaux", "Site internet clair pour présenter l'établissement et ses programmes", "Mise aux normes des installations électriques"],
  ["froid-climatisation", "developpement-web", "electricite"],
  "KONFORTECH BÉNIN accompagne les écoles et centres de formation au Bénin : climatisation, site internet et installations électriques."
)
sector_page("industries", "Solutions pour Industries au Bénin | KONFORTECH BÉNIN", "Industries : fiabilité technique et continuité de production.",
  "Maintenance industrielle, froid technique et énergie — pour limiter les arrêts de production.",
  ["Arrêts de production liés à des pannes non anticipées", "Dépendance forte au réseau électrique", "Besoin de froid industriel fiable"],
  ["Contrats de maintenance préventive et corrective", "Étude et installation de solutions solaires complémentaires", "Installation et entretien de systèmes de froid industriel"],
  ["maintenance-industrielle", "energie-solaire", "froid-climatisation"],
  "KONFORTECH BÉNIN accompagne les industries au Bénin : maintenance industrielle, énergie solaire et froid technique."
)
sector_page("commerces", "Solutions pour Commerces au Bénin | KONFORTECH BÉNIN", "Commerces : visibilité, confort et sécurité au quotidien.",
  "Vitrine en ligne, climatisation du point de vente et sécurité électronique adaptées aux commerces.",
  ["Peu de visibilité en ligne face à la concurrence", "Climatisation du point de vente peu performante", "Risques liés au vol ou à l'intrusion"],
  ["Sites web et référencement local pour attirer plus de clients", "Installation et entretien de climatisation pour points de vente", "Vidéosurveillance adaptée à votre commerce"],
  ["seo", "froid-climatisation", "videosurveillance"],
  "KONFORTECH BÉNIN accompagne les commerces au Bénin : référencement local, climatisation et sécurité électronique."
)
sector_page("particuliers", "Solutions pour Particuliers au Bénin | KONFORTECH BÉNIN", "Particuliers : confort et sécurité pour votre domicile.",
  "Climatisation, électricité, plomberie, énergie solaire et sécurité — pour un foyer fiable au quotidien.",
  ["Climatiseur qui consomme trop ou tombe souvent en panne", "Installations électriques ou de plomberie vieillissantes", "Coupures de courant fréquentes"],
  ["Installation et entretien de climatisation résidentielle", "Dépannage électrique et plomberie réactif", "Étude de solutions solaires adaptées à votre consommation"],
  ["froid-climatisation", "electricite", "energie-solaire"],
  "KONFORTECH BÉNIN accompagne les particuliers au Bénin : climatisation, électricité, plomberie et énergie solaire pour votre domicile."
)

print("secteurs built")

# ================================================================ CLIMATISATION LOCALE (SEO local)
def local_climate_page(path, seo_title, h1, lede, city, intro_paras, faqs, meta_description):
    hero = '''<section class="page-hero">
      <div class="frost-bg">{frost}</div>
      <div class="container">
        <span class="eyebrow on-dark">Climatisation</span>
        <h1>{h1}</h1>
        <p class="lede">{lede}</p>
        <div class="cta-row"><a class="btn btn-primary" href="devis.html">Demander un devis</a>
        <a class="btn btn-secondary" href="tel:{tel}">{ip} Appeler {phone}</a></div>
      </div>
    </section>'''.format(frost=frost_lines(), h1=h1, lede=lede, tel=PHONE_TEL, ip=icon("phone"), phone=PHONE_DISPLAY)
    bc = breadcrumbs(path, [("Climatisation " + city, None)])
    intro_html = "".join('<p class="muted">{}</p>'.format(p) for p in intro_paras)
    intro = '<section><div class="container-narrow reveal">{}</div></section>'.format(intro_html)

    offer = '''<section class="bg-fog">
      <div class="container">
        <div class="section-head left reveal"><span class="eyebrow">Nos interventions à {city}</span><h2>Installation, entretien et dépannage de climatiseurs</h2></div>
        <div class="grid grid-3">
          <div class="card reveal"><div class="icon">{i1}</div><h3>Installation climatiseur</h3><p>Pose de climatiseurs split ou multi-split, résidentiels et professionnels.</p></div>
          <div class="card reveal"><div class="icon">{i2}</div><h3>Maintenance climatisation</h3><p>Entretien préventif régulier pour préserver performance et durée de vie.</p></div>
          <div class="card reveal"><div class="icon">{i3}</div><h3>Dépannage climatiseur</h3><p>Diagnostic et réparation rapide en cas de panne.</p></div>
        </div>
      </div>
    </section>'''.format(city=city, i1=icon("snow"), i2=icon("gear"), i3=icon("wrench"))

    faq_html, faq_data = faq_block(path, faqs, heading="Questions fréquentes — Climatisation " + city)
    cta = cta_band(path, "Besoin d'un technicien climatisation à {}\u00a0?".format(city), "Demandez un devis ou appelez-nous directement.")
    body = hero + bc + intro + offer + cta + faq_html
    schema = local_business_schema(city) + faq_schema(faq_data)
    html = page(path, seo_title, meta_description, None, body, schema)
    write_page(path, html)

local_climate_page(
  "climatisation-abomey.html",
  "Climatisation Abomey — Installation, Entretien, Dépannage | KONFORTECH BÉNIN",
  "Climatisation à Abomey : installation, entretien et dépannage.",
  "KONFORTECH BÉNIN, basée à Abomey, installe et entretient vos climatiseurs pour un confort fiable toute l'année.",
  "Abomey",
  ["Basée à Abomey, KONFORTECH BÉNIN intervient au quotidien auprès des particuliers, commerces et institutions de la ville pour l'installation, l'entretien et le dépannage de climatiseurs.",
   "Notre proximité avec le terrain nous permet d'intervenir rapidement en cas de panne, et de proposer un suivi régulier pour éviter les mauvaises surprises en pleine saison chaude."],
  [("Intervenez-vous rapidement en cas de panne de climatiseur à Abomey ?", "Oui, étant basés à Abomey, nous pouvons généralement organiser une intervention rapide. Contactez-nous par téléphone ou WhatsApp pour connaître notre disponibilité."),
   ("Proposez-vous un contrat d'entretien pour mon climatiseur ?", "Oui, nous proposons un suivi d'entretien préventif régulier, adapté à votre usage et à votre équipement.")],
  "Installation, entretien et dépannage de climatiseurs à Abomey par KONFORTECH BÉNIN. Intervention rapide pour particuliers et professionnels."
)

local_climate_page(
  "climatisation-benin.html",
  "Climatisation au Bénin — Installation & Entretien | KONFORTECH BÉNIN",
  "Climatisation au Bénin : des solutions fiables pour particuliers et professionnels.",
  "KONFORTECH BÉNIN installe et entretient des systèmes de climatisation partout où notre intervention est pertinente au Bénin.",
  "Bénin",
  ["La climatisation est devenue un équipement essentiel au Bénin, aussi bien pour le confort des foyers que pour le bon fonctionnement des commerces, hôtels et industries.",
   "KONFORTECH BÉNIN accompagne ses clients dans le choix, l'installation et l'entretien de leurs systèmes de climatisation, avec un ancrage particulier sur Abomey, Bohicon et le Zou, et une capacité d'intervention élargie selon les projets."],
  [("Intervenez-vous dans toutes les villes du Bénin ?", "Nous sommes basés à Abomey et intervenons naturellement dans le Zou. Selon la nature et l'ampleur du projet, nous pouvons également intervenir dans d'autres villes du Bénin — précisez votre localisation lors de votre demande de devis."),
   ("Quelle est la différence entre climatisation résidentielle et commerciale ?", "La climatisation résidentielle concerne les logements ; la climatisation commerciale et industrielle répond à des besoins plus importants (surface, continuité de fonctionnement, froid commercial). Nous intervenons sur les deux.")],
  "Installation, entretien et dépannage de climatisation au Bénin par KONFORTECH BÉNIN, pour particuliers, commerces et industries."
)

print("climatisation locale built")

# ================================================================ REALISATIONS
def build_realisations():
    path = "realisations.html"
    hero = '''<section class="page-hero">
      <div class="frost-bg">{frost}</div>
      <div class="container">
        <span class="eyebrow on-dark">Réalisations</span>
        <h1>Nos projets, présentés avec exactitude.</h1>
        <p class="lede">Chaque réalisation publiée ici correspond à un projet réellement mené par KONFORTECH BÉNIN, avec l'accord du client concerné.</p>
      </div>
    </section>'''.format(frost=frost_lines())
    bc = breadcrumbs(path, [("Réalisations", None)])
    filters = '''<div class="filters reveal">
      <button data-filter="all" class="active">Tous les projets</button>
      <button data-filter="web">Développement Web</button>
      <button data-filter="froid">Froid &amp; Climatisation</button>
      <button data-filter="electricite">Électricité &amp; Solaire</button>
      <button data-filter="securite">Vidéosurveillance</button>
    </div>'''
    empty = '''<div class="empty-state reveal">
      {icon}
      <p><strong>Le portfolio de KONFORTECH BÉNIN est en cours de constitution.</strong></p>
      <p>Conformément à notre engagement de transparence, nous ne publions ici que des projets réellement réalisés — avec titre, client, localisation, problème, solution et résultats vérifiables. Les premières réalisations seront ajoutées dès qu'elles seront prêtes à être partagées.</p>
      <div class="cta-row" style="justify-content:center;margin-top:20px">
        <a class="btn btn-primary" href="devis.html">Démarrer votre projet</a>
      </div>
    </div>'''.format(icon=icon("layers"))
    body = hero + bc + '<section><div class="container">{f}{e}</div></section>'.format(f=filters, e=empty)
    body += cta_band(path, "Votre projet pourrait être le prochain ici.", "Parlons de ce que vous voulez construire ou installer.")
    html = page(path, "Réalisations — KONFORTECH BÉNIN",
                "Découvrez les réalisations de KONFORTECH BÉNIN au Bénin : projets de développement web, climatisation, électricité et sécurité électronique.",
                "/realisations.html", body, org_schema())
    write_page(path, html)

build_realisations()

# ================================================================ BLOG
BLOG_CATEGORIES = ["Climatisation", "Développement Web", "SEO", "Énergie solaire", "Conseils PME"]
def build_blog_hub():
    path = "blog.html"
    hero = '''<section class="page-hero">
      <div class="frost-bg">{frost}</div>
      <div class="container">
        <span class="eyebrow on-dark">Blog</span>
        <h1>Conseils techniques et digitaux, sans jargon inutile.</h1>
        <p class="lede">Climatisation, énergie, développement web, SEO — des articles pratiques pour les particuliers et les PME béninoises.</p>
      </div>
    </section>'''.format(frost=frost_lines())
    bc = breadcrumbs(path, [("Blog", None)])
    cats = "".join('<span class="tag-pill">{}</span>'.format(c) for c in BLOG_CATEGORIES)
    intro = '<section class="section-tight"><div class="container reveal">{cats}</div></section>'.format(cats=cats)
    card = '''<a class="post-card reveal" href="blog/entretenir-climatiseur-saison-chaude.html">
      <div class="thumb">{svg}</div>
      <div class="body">
        <div class="meta">Climatisation · 6 min de lecture</div>
        <h3>Bien entretenir son climatiseur avant la saison chaude</h3>
        <p>Les gestes simples qui prolongent la durée de vie de votre climatiseur et réduisent votre facture d'électricité.</p>
      </div>
    </a>'''.format(svg=frost_lines(stroke="rgba(255,255,255,.25)"))
    empty = '''<div class="empty-state reveal" style="margin-top:26px">
      {icon}
      <p><strong>D'autres articles arrivent bientôt.</strong></p>
      <p>Nous publions régulièrement sur l'entretien technique, l'énergie, la digitalisation des entreprises et le SEO local.</p>
    </div>'''.format(icon=icon("layers"))
    grid = '<section><div class="container"><div class="grid grid-3">{card}</div>{empty}</div></section>'.format(card=card, empty=empty)
    body = hero + bc + intro + grid
    body += cta_band(path, "Une question technique ou digitale ?", "Écrivez-nous, nous pourrions même en faire un futur article.")
    html = page(path, "Blog — Conseils Techniques & Digitaux | KONFORTECH BÉNIN",
                "Le blog de KONFORTECH BÉNIN : conseils sur la climatisation, l'énergie solaire, le développement web et le SEO pour les particuliers et PME au Bénin.",
                "/blog.html", body, org_schema())
    write_page(path, html)

build_blog_hub()

def build_blog_article():
    path = "blog/entretenir-climatiseur-saison-chaude.html"
    hero = '''<section class="page-hero">
      <div class="frost-bg">{frost}</div>
      <div class="container-narrow" style="position:relative;z-index:2">
        <span class="eyebrow on-dark">Climatisation · 6 min de lecture</span>
        <h1>Bien entretenir son climatiseur avant la saison chaude</h1>
        <p class="lede">Par l'équipe KONFORTECH BÉNIN — publié le 9 août 2026</p>
      </div>
    </section>'''.format(frost=frost_lines())
    bc = breadcrumbs(path, [("Blog", "blog.html"), ("Bien entretenir son climatiseur", None)])
    article = '''<section>
      <div class="container-narrow reveal" style="font-size:1.02rem">
        <p>Un climatiseur mal entretenu consomme davantage d'électricité, refroidit moins efficacement et tombe en panne plus souvent — généralement au pire moment. Voici les vérifications essentielles à faire avant l'arrivée de la saison chaude.</p>
        <h2>1. Nettoyer les filtres régulièrement</h2>
        <p>Les filtres encrassés réduisent fortement le débit d'air et forcent l'appareil à travailler plus pour un résultat moindre. Un nettoyage toutes les quelques semaines, selon l'environnement, permet de préserver la performance de l'appareil.</p>
        <h2>2. Vérifier le niveau de gaz réfrigérant</h2>
        <p>Un climatiseur qui refroidit moins bien qu'avant peut simplement manquer de gaz réfrigérant, souvent à cause d'une micro-fuite. Cette vérification demande un technicien équipé du matériel adapté.</p>
        <h2>3. Contrôler l'unité extérieure</h2>
        <p>Poussière, feuilles ou obstacles autour de l'unité extérieure réduisent l'échange thermique. Un espace dégagé autour de l'appareil facilite son bon fonctionnement.</p>
        <h2>4. Planifier un entretien préventif</h2>
        <p>Un contrôle professionnel tous les six mois permet de repérer les signes d'usure avant qu'ils ne deviennent une panne coûteuse — surtout avant les périodes de forte chaleur.</p>
        <h2>En résumé</h2>
        <p>Un entretien régulier coûte toujours moins cher qu'une panne en pleine saison chaude. Notre équipe peut prendre en charge l'ensemble de ces vérifications dans le cadre d'un contrat d'entretien.</p>
        <div class="cta-row"><a class="btn btn-primary" href="../services/froid-climatisation.html">Voir nos services climatisation</a></div>
      </div>
    </section>'''
    body = hero + bc + article
    body += cta_band(path, "Besoin d'un entretien professionnel ?", "Nos techniciens interviennent pour l'entretien préventif de votre climatiseur.", primary_href="devis.html")
    html = page(path, "Bien entretenir son climatiseur avant la saison chaude — Blog KONFORTECH BÉNIN",
                "Les gestes essentiels pour entretenir votre climatiseur avant la saison chaude : filtres, gaz réfrigérant, unité extérieure et entretien préventif.",
                None, body, org_schema())
    write_page(path, html)

build_blog_article()
print("blog built")

# ================================================================ DEVIS
def build_devis():
    path = "devis.html"
    hero = '''<section class="page-hero" style="padding-bottom:0">
      <div class="frost-bg">{frost}</div>
      <div class="container">
        <span class="eyebrow on-dark">Demande de devis</span>
        <h1>Décrivez votre projet, recevez une estimation claire.</h1>
        <p class="lede">Un membre de l'équipe KONFORTECH BÉNIN revient vers vous sous 24 à 48h ouvrées.</p>
      </div>
    </section>'''.format(frost=frost_lines())
    bc = breadcrumbs(path, [("Devis", None)])

    service_options = "".join('<option value="{s}">{l}</option>'.format(s=s, l=l) for s, l, d, i in SERVICES)
    form = '''<section>
      <div class="container" style="max-width:900px">
        <form class="form-card reveal" data-demo-form novalidate>
          <div class="form-grid">
            <div class="field"><label for="nom">Nom complet <span class="req">*</span></label><input id="nom" name="nom" required autocomplete="name"></div>
            <div class="field"><label for="entreprise">Entreprise (si applicable)</label><input id="entreprise" name="entreprise" autocomplete="organization"></div>
            <div class="field"><label for="tel">Téléphone <span class="req">*</span></label><input id="tel" name="tel" type="tel" required autocomplete="tel"></div>
            <div class="field"><label for="email">Email <span class="req">*</span></label><input id="email" name="email" type="email" required autocomplete="email"></div>
            <div class="field"><label for="loc">Localisation <span class="req">*</span></label><input id="loc" name="loc" placeholder="Ville, quartier" required></div>
            <div class="field"><label for="service">Type de service <span class="req">*</span></label>
              <select id="service" name="service" required>
                <option value="">Choisir un service</option>
                {opts}
                <option value="autre">Autre / je ne sais pas encore</option>
              </select>
            </div>
            <div class="field full"><label for="besoin">Description du besoin <span class="req">*</span></label>
              <textarea id="besoin" name="besoin" required placeholder="Décrivez votre projet ou votre besoin le plus précisément possible"></textarea>
            </div>
            <div class="field"><label for="budget">Budget indicatif</label>
              <select id="budget" name="budget">
                <option value="">Non défini</option>
                <option>Moins de 200 000 FCFA</option>
                <option>200 000 – 500 000 FCFA</option>
                <option>500 000 – 1 500 000 FCFA</option>
                <option>Plus de 1 500 000 FCFA</option>
              </select>
            </div>
            <div class="field"><label for="delai">Délai souhaité</label>
              <select id="delai" name="delai">
                <option value="">Non défini</option>
                <option>Urgent (sous 1 semaine)</option>
                <option>Sous 1 mois</option>
                <option>Dans les 3 mois</option>
                <option>Pas de contrainte de délai</option>
              </select>
            </div>
            <div class="field full"><label for="fichier">Pièce jointe (plan, photo, cahier des charges…)</label>
              <input id="fichier" name="fichier" type="file">
              <p class="hint">Formats acceptés : PDF, JPG, PNG — 10 Mo max.</p>
            </div>
            <div class="field full">
              <label class="consent"><input type="checkbox" required> J'accepte que KONFORTECH BÉNIN me contacte au sujet de ma demande. <span class="req">*</span></label>
            </div>
          </div>
          <button class="btn btn-primary btn-block" type="submit" style="margin-top:22px">Envoyer ma demande de devis</button>
          <p class="hint center" style="margin-top:10px">Vous pouvez aussi nous écrire directement sur WhatsApp ou par téléphone.</p>
          <div class="form-note" role="status">Merci ! Votre demande a bien été enregistrée. Notre équipe vous recontacte sous 24 à 48h ouvrées.</div>
        </form>
        <div class="center reveal" style="margin-top:28px">
          <a class="btn btn-ghost" href="https://wa.me/{wa}?text={wam}" target="_blank" rel="noopener">{iw} Écrire sur WhatsApp</a>
          <a class="btn btn-ghost" href="tel:{tel}">{ip} Appeler {phone}</a>
        </div>
      </div>
    </section>'''.format(opts=service_options, wa=WA_NUMBER, wam=WA_MSG.replace(" ", "%20").replace(",", "%2C"),
                          iw=icon("whatsapp"), ip=icon("phone"), tel=PHONE_TEL, phone=PHONE_DISPLAY)
    body = hero + bc + form
    html = page(path, "Demander un Devis — KONFORTECH BÉNIN",
                "Demandez un devis gratuit à KONFORTECH BÉNIN pour votre projet de développement web, climatisation, électricité ou énergie solaire au Bénin.",
                "/devis.html", body, org_schema())
    write_page(path, html)

build_devis()

# ================================================================ CONTACT
def build_contact():
    path = "contact.html"
    hero = '''<section class="page-hero">
      <div class="frost-bg">{frost}</div>
      <div class="container">
        <span class="eyebrow on-dark">Contact</span>
        <h1>Parlons de votre projet.</h1>
        <p class="lede">Par téléphone, WhatsApp, email ou formulaire — choisissez ce qui vous convient le mieux.</p>
      </div>
    </section>'''.format(frost=frost_lines())
    bc = breadcrumbs(path, [("Contact", None)])
    info = '''<section>
      <div class="container two-col">
        <div class="reveal">
          <div class="grid grid-2">
            <a class="card reveal" href="tel:{tel}"><div class="icon">{ip}</div><h3>Téléphone</h3><p>{phone}</p></a>
            <a class="card reveal" href="mailto:{email}"><div class="icon">{im}</div><h3>Email</h3><p>{email}</p></a>
            <a class="card reveal" href="https://wa.me/{wa}?text={wam}" target="_blank" rel="noopener"><div class="icon">{iw}</div><h3>WhatsApp</h3><p>Réponse rapide aux questions simples</p></a>
            <div class="card reveal"><div class="icon">{ic}</div><h3>Localisation</h3><p>Abomey, Zou — Bénin</p></div>
          </div>
          <div class="card reveal" style="margin-top:22px">
            <div class="icon">{iclock}</div>
            <h3>Horaires</h3>
            <p class="muted">Lundi – Vendredi : 8h00 – 18h00<br>Samedi : 9h00 – 14h00<br>Dépannages urgents : contactez-nous par téléphone ou WhatsApp</p>
          </div>
        </div>
        <div class="form-card reveal">
          <h3>Envoyer un message</h3>
          <form data-demo-form novalidate>
            <div class="form-grid" style="margin-top:16px">
              <div class="field"><label for="c-nom">Nom <span class="req">*</span></label><input id="c-nom" required autocomplete="name"></div>
              <div class="field"><label for="c-tel">Téléphone</label><input id="c-tel" type="tel" autocomplete="tel"></div>
              <div class="field full"><label for="c-email">Email <span class="req">*</span></label><input id="c-email" type="email" required autocomplete="email"></div>
              <div class="field full"><label for="c-msg">Message <span class="req">*</span></label><textarea id="c-msg" required></textarea></div>
            </div>
            <button class="btn btn-primary btn-block" type="submit" style="margin-top:18px">Envoyer le message</button>
            <div class="form-note" role="status">Merci pour votre message ! Nous vous répondons rapidement.</div>
          </form>
        </div>
      </div>
    </section>'''.format(tel=PHONE_TEL, phone=PHONE_DISPLAY, email=EMAIL, wa=WA_NUMBER,
                          wam=WA_MSG.replace(" ", "%20").replace(",", "%2C"), ip=icon("phone"), im=icon("mail"),
                          iw=icon("whatsapp"), ic=icon("pin"), iclock=icon("clock"))
    body = hero + bc + info
    schema = local_business_schema()
    html = page(path, "Contact — KONFORTECH BÉNIN",
                "Contactez KONFORTECH BÉNIN par téléphone, WhatsApp, email ou formulaire pour votre projet technique ou digital au Bénin.",
                "/contact.html", body, schema)
    write_page(path, html)

build_contact()

# ================================================================ 404
def build_404():
    path = "404.html"
    body = '''<section style="padding:120px 0;text-align:center">
      <div class="container-narrow">
        <span class="eyebrow" style="justify-content:center">Erreur 404</span>
        <h1>Cette page n'existe pas ou plus.</h1>
        <p class="lede" style="margin:0 auto">Le lien que vous avez suivi est peut-être incorrect ou la page a été déplacée.</p>
        <div class="cta-row" style="justify-content:center">
          <a class="btn btn-primary" href="index.html">Retour à l'accueil</a>
          <a class="btn btn-outline" href="contact.html">Nous contacter</a>
        </div>
      </div>
    </section>'''
    html = page(path, "Page introuvable (404) — KONFORTECH BÉNIN", "Cette page n'existe pas ou plus sur le site de KONFORTECH BÉNIN.", None, body)
    write_page(path, html)

build_404()
print("devis/contact/404 built")

# ================================================================ ROBOTS.TXT + SITEMAP.XML
def build_seo_files():
    robots = '''User-agent: *
Allow: /
Disallow: /assets/js/
Sitemap: {domain}/sitemap.xml
'''.format(domain=DOMAIN_PLACEHOLDER)
    with open(os.path.join(ROOT, "robots.txt"), "w", encoding="utf-8") as f:
        f.write(robots)

    urls = []
    for p in PAGES_WRITTEN:
        if p == "404.html":
            continue
        url_path = "" if p == "index.html" else p
        priority = "1.0" if p == "index.html" else ("0.9" if p.count("/") == 0 else "0.7")
        urls.append("  <url><loc>{domain}/{path}</loc><priority>{pr}</priority></url>".format(
            domain=DOMAIN_PLACEHOLDER, path=url_path, pr=priority))
    sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "\n".join(urls) + "\n</urlset>\n"
    with open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(sitemap)
    print("robots.txt + sitemap.xml written — {} URLs".format(len(urls)))

build_seo_files()
print("TOTAL PAGES:", len(PAGES_WRITTEN))
