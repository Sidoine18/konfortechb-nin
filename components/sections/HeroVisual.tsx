/**
 * Motif signature « givre + circuit » — fusion de la branche de flocon et de
 * la piste de circuit imprimé, directement inspiré du logo KONFORTECH BÉNIN.
 * SVG inline : aucun coût réseau, animable, et net sur tous les écrans.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      role="img"
      aria-label="Motif graphique associant flocon de givre et circuit imprimé"
    >
      <defs>
        <linearGradient id="kfx-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3D9BFF" />
          <stop offset="1" stopColor="#0066CC" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#kfx-blue)" strokeWidth="3" strokeLinecap="round">
        <line x1="150" y1="70" x2="150" y2="410" />
        <line x1="70" y1="150" x2="230" y2="330" />
        <line x1="230" y1="150" x2="70" y2="330" />
        <line x1="150" y1="70" x2="110" y2="30" />
        <line x1="150" y1="70" x2="190" y2="30" />
        <line x1="150" y1="410" x2="110" y2="450" />
        <line x1="150" y1="410" x2="190" y2="450" />
        <line x1="70" y1="150" x2="30" y2="130" />
        <line x1="70" y1="150" x2="45" y2="185" />
        <line x1="230" y1="330" x2="270" y2="350" />
        <line x1="230" y1="330" x2="255" y2="295" />
      </g>
      <g fill="none" stroke="#FF7A00" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M260 180 L340 180 L375 145 L440 145" strokeDasharray="6 10" className="animate-dash" />
        <path d="M260 260 L360 260 L395 295 L440 295" strokeDasharray="6 10" className="animate-dash [animation-delay:1.2s]" />
        <path d="M260 340 L320 340 L350 310 L410 310" strokeDasharray="6 10" className="animate-dash [animation-delay:2.1s]" />
      </g>
      <circle cx="440" cy="145" r="8" fill="#0E1724" stroke="#FF7A00" strokeWidth="2.4" className="animate-pulse-dot" />
      <circle cx="440" cy="295" r="8" fill="#0E1724" stroke="#FF7A00" strokeWidth="2.4" className="animate-pulse-dot [animation-delay:.6s]" />
      <circle cx="410" cy="310" r="5" fill="#FF7A00" className="animate-pulse-dot [animation-delay:1.4s]" />
      <circle cx="150" cy="240" r="5" fill="#3D9BFF" className="animate-pulse-dot [animation-delay:.3s]" />
    </svg>
  );
}

/** Décor de fond discret réutilisé sur les hero de pages internes. */
export function FrostBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
      viewBox="0 0 900 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <g fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1.4">
        <line x1="120" y1="60" x2="120" y2="440" />
        <line x1="60" y1="140" x2="180" y2="360" />
        <line x1="180" y1="140" x2="60" y2="360" />
        <path d="M420 250 L520 250 L560 210 L680 210 L720 170" />
        <path d="M420 300 L560 300 L600 340 L700 340 L740 380" />
        <path d="M420 200 L500 200 L540 160 L640 160" />
        <circle cx="720" cy="170" r="7" stroke="rgba(255,122,0,.55)" />
        <circle cx="740" cy="380" r="7" stroke="rgba(255,122,0,.55)" />
        <circle cx="640" cy="160" r="7" />
      </g>
    </svg>
  );
}
