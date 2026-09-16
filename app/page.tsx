import Link from 'next/link';
import {
  Code2, Layers, Server, Search, Snowflake, Cog, Zap, Sun, Droplet, Camera,
  ArrowRight, ShieldCheck, Target, BarChart3, Phone, Building2, Hotel,
  Store, GraduationCap, Factory, ShoppingCart, Home as HomeIcon,
} from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { services, servicesByPillar } from '@/data/services';
import { featuredRealizations } from '@/data/realizations';
import { sectors } from '@/data/sectors';
import { faqs } from '@/data/faqs';
import { sortedArticles } from '@/data/blog';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HeroVisual, FrostBackdrop } from '@/components/sections/HeroVisual';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqLd } from '@/lib/jsonld';

export const metadata = pageMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  path: '/',
});

const serviceIcons: Record<string, React.ElementType> = {
  'developpement-web': Code2,
  'application-web': Server,
  seo: Search,
  'froid-climatisation': Snowflake,
  'maintenance-industrielle': Cog,
  electricite: Zap,
  'energie-solaire': Sun,
  plomberie: Droplet,
  videosurveillance: Camera,
};

const sectorIcons: Record<string, React.ElementType> = {
  hotels: Hotel,
  restaurants: Store,
  entreprises: Building2,
  ecoles: GraduationCap,
  industries: Factory,
  commerces: ShoppingCart,
  particuliers: HomeIcon,
};

const method = [
  { step: 'Comprendre', detail: 'Écoute du besoin, visite technique ou audit digital, cahier des charges clair.' },
  { step: 'Concevoir', detail: 'Proposition technique et devis détaillé, avec les solutions les plus adaptées.' },
  { step: 'Installer', detail: 'Mise en œuvre par des techniciens qualifiés, dans le respect des délais annoncés.' },
  { step: 'Maintenir', detail: 'Suivi, entretien préventif et support réactif après la livraison.' },
  { step: 'Améliorer', detail: "Recommandations d'optimisation continue : performance, économie, évolutivité." },
];

const why = [
  { icon: ShieldCheck, title: 'Double expertise, un seul contact', text: "Plus besoin de gérer séparément un prestataire web et un technicien froid : une seule équipe coordonne les deux." },
  { icon: Target, title: 'Méthode structurée', text: 'Chaque projet suit le même processus rigoureux, du diagnostic à la maintenance.' },
  { icon: BarChart3, title: 'Transparence totale', text: 'Devis clair, délais annoncés, communication directe — sans surprise à la facturation.' },
  { icon: Phone, title: 'Réactivité de terrain', text: 'Une équipe joignable par téléphone et WhatsApp pour répondre vite, même en urgence technique.' },
  { icon: Cog, title: 'Vision long terme', text: 'Chaque installation et chaque site est pensé pour rester fiable et évolutif dans la durée.' },
  { icon: Layers, title: 'Ancrage local, standards internationaux', text: 'Une entreprise béninoise qui applique des méthodes de travail et des outils de niveau international.' },
];

export default function HomePage() {
  const digital = servicesByPillar('digital');
  const technique = servicesByPillar('technique');
  const projects = featuredRealizations();
  const homeFaqs = faqs.slice(0, 5);
  const latestArticles = sortedArticles().slice(0, 3);

  return (
    <>
      <JsonLd data={faqLd(homeFaqs)} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-night py-16 sm:py-24">
        <FrostBackdrop />
        <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <span className="eyebrow eyebrow-light mb-4">
              Bénin · Développement Web · Froid &amp; Climatisation
            </span>
            <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
              Des solutions techniques modernes, pensées pour durer.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {SITE.name} conçoit et installe ce dont votre activité a besoin pour fonctionner
              mieux : sites et applications professionnels d&apos;un côté, froid, climatisation et
              installations techniques de l&apos;autre. Un seul interlocuteur, deux expertises
              complémentaires.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/demander-un-devis">Demander un devis</Button>
              <Button href="/services" variant="light">Découvrir nos services</Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {['Sites & applications web', 'Climatisation & froid industriel', 'Électricité · Solaire · Vidéosurveillance'].map(
                (badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-[#8FC1FF]/35 bg-brand-blue/20 px-3 py-2 font-mono text-[11px] text-blue-100"
                  >
                    {badge}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <HeroVisual className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow mb-3">Qui sommes-nous</span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Une entreprise béninoise, à la croisée de la technologie et du confort technique.
            </h2>
            <p className="mt-5 text-slate-600">
              {SITE.name} accompagne particuliers, PME, hôtels, écoles, industries et institutions
              dans la conception de solutions techniques fiables. Nous ne faisons pas qu&apos;une
              prestation ponctuelle : nous comprenons un besoin, concevons la bonne réponse,
              l&apos;installons proprement et la maintenons dans le temps.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Deux pôles d’expertise intégrés sous un même toit : digital et technique',
                'Une méthode claire, du diagnostic à la maintenance',
                'Des interventions adaptées à la réalité du terrain béninois',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[15px]">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/a-propos" variant="outline">En savoir plus sur nous</Button>
            </div>
          </div>
          <div className="space-y-5">
            <PillarCard
              tag="Pôle Technologie"
              title="Développement Web & Solutions digitales"
              text="Sites internet, applications métier, e-commerce, tableaux de bord, SEO et maintenance web."
              items={digital}
            />
            <PillarCard
              tag="Pôle Confort technique"
              title="Froid, Climatisation & Installations"
              text="Climatisation, froid industriel, électricité, énergie solaire, plomberie, vidéosurveillance."
              items={technique}
              dark
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-fog-100 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nos services"
            title="Un domaine d'expertise pour chaque besoin technique"
            lede={`${services.length} domaines de solutions, une seule exigence de qualité.`}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.slug] ?? Layers;
              return (
                <Card key={s.slug} href={`/services/${s.slug}`}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-fog-100 text-brand-blue">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Pourquoi nous choisir" title={`Ce qui distingue ${SITE.name}`} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {why.map(({ icon: Icon, title, text }) => (
              <Card key={title}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-fog-100 text-brand-blue">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-slate-600">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="bg-fog-100 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Notre méthode"
            title="Comprendre → Concevoir → Installer → Maintenir → Améliorer"
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {method.map((m, i) => (
              <li key={m.step} className="rounded-xl border border-line bg-white p-6">
                <span className="font-mono text-xs tracking-wide text-brand-orange">
                  0{i + 1}
                </span>
                <h3 className="mb-2 mt-2 text-base font-semibold">{m.step}</h3>
                <p className="text-sm text-slate-600">{m.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Réalisations" title="Nos projets récents" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.slug} href={`/realisations/${p.slug}`}>
                <span className="font-mono text-[11px] uppercase tracking-wider text-brand-orange">
                  {p.category}
                </span>
                <h3 className="mb-2 mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                  Voir le projet
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/realisations" variant="outline">Voir toutes les réalisations</Button>
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="bg-brand-night py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Secteurs d'activité"
            title="Nous accompagnons des réalités très différentes"
            light
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => {
              const Icon = sectorIcons[s.slug] ?? Building2;
              return (
                <Card key={s.slug} href={`/secteurs/${s.slug}`} dark>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-brand-blue/25 text-[#8FC1FF]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{s.excerpt}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOG */}
      {latestArticles.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="container-page">
            <SectionHeading eyebrow="Blog" title="Conseils techniques et digitaux" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((a) => (
                <Card key={a.slug} href={`/blog/${a.slug}`}>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-brand-orange">
                    {a.category} · {a.readingMinutes} min
                  </span>
                  <h3 className="mb-2 mt-2 text-lg font-semibold">{a.title}</h3>
                  <p className="text-sm text-slate-600">{a.excerpt}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />

      {/* FAQ */}
      <section className="pb-16 sm:pb-24">
        <div className="container-page max-w-3xl">
          <span className="eyebrow mb-3">FAQ</span>
          <h2 className="mb-8 text-3xl font-bold">Questions fréquentes</h2>
          <div>
            {homeFaqs.map((f) => (
              <details key={f.question} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display font-semibold [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <span className="shrink-0 text-2xl font-light text-brand-orange transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="pb-5 text-slate-600">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/faq" className="font-semibold text-brand-blue hover:underline">
              Voir toutes les questions →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PillarCard({
  tag, title, text, items, dark = false,
}: {
  tag: string; title: string; text: string;
  items: { slug: string; title: string }[]; dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        dark
          ? 'bg-gradient-to-br from-brand-night to-[#1B222B]'
          : 'bg-gradient-to-br from-brand-blue to-brand-deep'
      }`}
    >
      <span className="font-mono text-[11px] uppercase tracking-wider text-white/70">{tag}</span>
      <h3 className="mb-2 mt-2.5 text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-white/80">{text}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((i) => (
          <Link
            key={i.slug}
            href={`/services/${i.slug}`}
            className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white transition-colors hover:bg-white/20"
          >
            {i.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
