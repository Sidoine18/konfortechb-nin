import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'outline' | 'ghost' | 'light';

const styles: Record<Variant, string> = {
  primary: 'bg-brand-orange text-white hover:brightness-95 shadow-[0_10px_24px_rgba(255,122,0,.28)]',
  outline: 'border-[1.5px] border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
  ghost: 'bg-fog-200 text-brand-night hover:bg-line',
  light: 'border-[1.5px] border-white/40 text-white hover:bg-white/10 hover:border-white',
};

type Props = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ href, variant = 'primary', className, children, external, ...rest }: Props) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5',
    styles[variant],
    className
  );
  if (href) {
    if (external) {
      return (
        <a href={href} className={base} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }
  return (
    <button className={base} {...rest}>
      {children}
    </button>
  );
}
