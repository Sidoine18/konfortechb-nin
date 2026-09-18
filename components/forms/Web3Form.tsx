'use client';

import { useRef, useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitToWeb3Forms, type SubmitState } from '@/lib/web3forms';
import { Field, inputClass, Honeypot } from './FormField';
import { Button } from '@/components/ui/Button';

export type FieldSpec = {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date';
  required?: boolean;
  options?: string[];
  hint?: string;
  half?: boolean;
  autoComplete?: string;
  placeholder?: string;
};

/**
 * Formulaire générique connecté à Web3Forms.
 * Utilisé par Contact, Devis, Candidature et Partenariat — une seule
 * implémentation à maintenir, avec validation, états et anti-spam intégrés.
 */
export function Web3Form({
  fields,
  subject,
  submitLabel = 'Envoyer',
  consentLabel,
  hiddenFields,
}: {
  fields: FieldSpec[];
  subject: string;
  submitLabel?: string;
  consentLabel?: string;
  /** Champs envoyés avec le formulaire mais non affichés (ex: poste pré-rempli). */
  hiddenFields?: Record<string, string>;
}) {
  const [state, setState] = useState<SubmitState>('idle');
  const [message, setMessage] = useState('');
  const mountedAt = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Anti-spam 1 : honeypot rempli => robot.
    if (data.botcheck) return;
    // Anti-spam 2 : soumission en moins de 3 s => très probablement un robot.
    if (Date.now() - mountedAt.current < 3000) {
      setState('error');
      setMessage('Envoi trop rapide détecté. Merci de réessayer.');
      return;
    }
    delete data.botcheck;

    setState('loading');
    const res = await submitToWeb3Forms(data, subject);
    setState(res.ok ? 'success' : 'error');
    setMessage(res.message);
    if (res.ok) form.reset();
  }

  if (state === 'success') {
    return (
      <div
        role="status"
        className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-emerald-600" aria-hidden />
        <h2 className="mb-2 text-lg font-bold text-emerald-900">Demande envoyée</h2>
        <p className="text-sm text-emerald-800">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative rounded-xl border border-line bg-white p-6 sm:p-8">
      <Honeypot />
      {hiddenFields &&
        Object.entries(hiddenFields).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} />
        ))}
      <div className="grid gap-x-5 sm:grid-cols-2">
        {fields.map((f) => {
          const id = `f-${f.name}`;
          return (
            <Field
              key={f.name}
              id={id}
              label={f.label}
              required={f.required}
              hint={f.hint}
              className={f.half ? '' : 'sm:col-span-2'}
            >
              {f.type === 'textarea' ? (
                <textarea
                  id={id}
                  name={f.name}
                  required={f.required}
                  placeholder={f.placeholder}
                  rows={5}
                  className={`${inputClass} resize-y`}
                />
              ) : f.type === 'select' ? (
                <select id={id} name={f.name} required={f.required} className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Choisir…
                  </option>
                  {f.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  name={f.name}
                  type={f.type ?? 'text'}
                  required={f.required}
                  autoComplete={f.autoComplete}
                  placeholder={f.placeholder}
                  className={inputClass}
                />
              )}
            </Field>
          );
        })}
      </div>

      {consentLabel && (
        <label className="mb-4 flex items-start gap-2.5 text-sm text-slate-600">
          <input type="checkbox" name="consentement" required className="mt-1" />
          <span>
            {consentLabel} <span className="text-brand-orange" aria-hidden>*</span>
          </span>
        </label>
      )}

      {state === 'error' && (
        <p role="alert" className="mb-4 flex items-start gap-2 text-sm text-red-600">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          {message}
        </p>
      )}

      <Button className="w-full" disabled={state === 'loading'}>
        {state === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Envoi en cours…
          </>
        ) : (
          submitLabel
        )}
      </Button>
    </form>
  );
}
