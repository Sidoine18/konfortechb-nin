import Link from 'next/link';
import { cn } from '@/lib/cn';

export function Card({
  href,
  className,
  children,
  dark = false,
}: {
  href?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  const base = cn(
    'group block h-full rounded-xl border p-7 transition-all duration-200 hover:-translate-y-1',
    dark
      ? 'border-white/10 bg-white/[.04] hover:border-white/20'
      : 'border-line bg-white hover:border-transparent hover:shadow-[0_8px_24px_rgba(18,22,28,.10)]',
    className
  );
  return href ? <Link href={href} className={base}>{children}</Link> : <div className={base}>{children}</div>;
}
