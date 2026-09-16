import { cn } from '@/lib/cn';

type BaseProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  className?: string;
};

export function Field({
  id,
  label,
  required,
  hint,
  className,
  children,
}: BaseProps & { children: React.ReactNode }) {
  return (
    <div className={cn('mb-4', className)}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-brand-night">
        {label} {required && <span className="text-brand-orange" aria-hidden>*</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

export const inputClass =
  'w-full rounded-lg border-[1.5px] border-line bg-fog-100 px-3.5 py-2.5 text-[15px] transition-colors focus:border-brand-blue focus:bg-white focus:outline-none';

/** Champ piège anti-bot : invisible pour l'humain, rempli par les robots. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="botcheck">Ne pas remplir</label>
      <input id="botcheck" name="botcheck" type="checkbox" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
