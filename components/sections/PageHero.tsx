import { FrostBackdrop } from './HeroVisual';

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-night py-16 sm:py-20">
      <FrostBackdrop />
      <div className="container-page relative z-10">
        {eyebrow && <span className="eyebrow eyebrow-light mb-3">{eyebrow}</span>}
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lede && <p className="mt-5 max-w-2xl text-lg text-slate-300">{lede}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
