import { cn } from '@/lib/cn';

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'center',
  light = false,
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: 'center' | 'left';
  light?: boolean;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className={cn('mb-12 max-w-2xl', align === 'center' ? 'mx-auto text-center' : '')}>
      {eyebrow && <span className={cn('eyebrow mb-3', light && 'eyebrow-light')}>{eyebrow}</span>}
      <Tag className={cn('text-3xl font-bold leading-tight sm:text-4xl', light && 'text-white')}>
        {title}
      </Tag>
      {lede && <p className={cn('mt-4 text-lg', light ? 'text-slate-300' : 'text-slate-600')}>{lede}</p>}
    </div>
  );
}
