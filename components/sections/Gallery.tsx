'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, X, ZoomIn, ZoomOut } from 'lucide-react';

type GalleryProps = {
  /** Chemins publics des images (ex. /gallery/realizations/xxx.jpg) */
  images: string[];
  /** Nom du projet, utilisé pour les textes alternatifs (SEO + accessibilité) */
  title: string;
};

const MAX_ZOOM = 5;
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export function Gallery({ images, title }: GalleryProps) {
  const total = images.length;
  const [index, setIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const triggerRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef({ startX: 0, startDist: 0, startZoom: 1, moved: false });

  const alt = (i: number) => `${title} : capture ${i + 1} du site réalisé par KONFORTECH BÉNIN`;

  /* ---------- Zoom / déplacement ---------- */
  const clampOffset = useCallback((x: number, y: number, z: number) => {
    const stage = stageRef.current;
    const img = imgRef.current;
    if (!stage || !img || z <= 1) return { x: 0, y: 0 };
    const maxX = Math.max(0, (img.clientWidth * z - stage.clientWidth) / 2);
    const maxY = Math.max(0, (img.clientHeight * z - stage.clientHeight) / 2);
    return { x: clamp(x, -maxX, maxX), y: clamp(y, -maxY, maxY) };
  }, []);

  const applyZoom = useCallback(
    (next: number) => {
      const z = clamp(next, 1, MAX_ZOOM);
      setZoom(z);
      setOffset((o) => clampOffset(o.x, o.y, z));
    },
    [clampOffset],
  );

  const resetView = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  /* ---------- Navigation ---------- */
  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + total) % total)),
    [total],
  );

  const openAt = (i: number, el: HTMLElement) => {
    triggerRef.current = el;
    setIndex(i);
  };

  const close = useCallback(() => {
    setIndex(null);
    triggerRef.current?.focus();
  }, []);

  // Réinitialise le zoom à chaque changement d'image
  useEffect(() => {
    resetView();
  }, [index, resetView]);

  const isOpen = index !== null;

  // Blocage du scroll de la page + focus sur le bouton Fermer (une seule fois à l'ouverture)
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // Raccourcis clavier
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === '+' || e.key === '=') applyZoom(zoom * 1.4);
      else if (e.key === '-') applyZoom(zoom / 1.4);
      else if (e.key === '0') resetView();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, zoom, close, go, applyZoom, resetView]);

  // Précharge les images voisines + centre la miniature active
  useEffect(() => {
    if (index === null) return;
    [1, -1].forEach((d) => {
      const pre = new window.Image();
      pre.src = images[(index + d + total) % total];
    });
    stripRef.current
      ?.querySelector('[aria-current="true"]')
      ?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, [index, images, total]);

  /* ---------- Gestes (souris, tactile, pincement) ---------- */
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 1) {
      gesture.current.startX = e.clientX;
      gesture.current.moved = false;
    }
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      gesture.current.startDist = Math.hypot(a.x - b.x, a.y - b.y);
      gesture.current.startZoom = zoom;
    }
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const prev = pointers.current.get(e.pointerId);
    if (!prev) return;
    const cur = { x: e.clientX, y: e.clientY };
    pointers.current.set(e.pointerId, cur);
    if (Math.abs(cur.x - gesture.current.startX) > 5) gesture.current.moved = true;

    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (gesture.current.startDist > 0) {
        applyZoom((gesture.current.startZoom * dist) / gesture.current.startDist);
      }
    } else if (zoom > 1) {
      setOffset((o) => clampOffset(o.x + cur.x - prev.x, o.y + cur.y - prev.y, zoom));
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const wasSingle = pointers.current.size === 1;
    pointers.current.delete(e.pointerId);
    if (pointers.current.size === 0) setDragging(false);
    if (!wasSingle) return;

    const dx = e.clientX - gesture.current.startX;
    if (zoom <= 1 && Math.abs(dx) > 60) {
      go(dx < 0 ? 1 : -1); // balayage gauche/droite
      return;
    }
    // Clic en dehors de l'image = fermer
    if (!gesture.current.moved && imgRef.current) {
      const r = imgRef.current.getBoundingClientRect();
      const inside =
        e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) close();
    }
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    applyZoom(zoom * (e.deltaY < 0 ? 1.15 : 1 / 1.15));
  };

  const onDoubleClick = () => (zoom > 1 ? resetView() : applyZoom(2.5));

  if (total === 0) return null;

  const btn =
    'inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white disabled:opacity-40 disabled:hover:bg-white/10';

  return (
    <>
      {/* ---------- Grille de miniatures ---------- */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={(e) => openAt(i, e.currentTarget)}
            aria-label={`Agrandir l'image ${i + 1} sur ${total} : ${title}`}
            className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-fog-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            <Image
              src={src}
              alt={alt(i)}
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 480px, 100vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100 group-focus-visible:bg-black/30 group-focus-visible:opacity-100">
              <ZoomIn className="h-8 w-8 text-white" aria-hidden />
            </span>
          </button>
        ))}
      </div>

      {/* ---------- Visionneuse plein écran ---------- */}
      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galerie : ${title}`}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95"
        >
          {/* Barre du haut */}
          <div className="flex items-center justify-between gap-3 p-3 sm:p-4">
            <p className="text-sm text-white/80" aria-live="polite">
              {title} — {index + 1} / {total}
            </p>
            <div className="flex items-center gap-2">
              <button type="button" className={btn} onClick={() => applyZoom(zoom / 1.4)} disabled={zoom <= 1} aria-label="Dézoomer">
                <ZoomOut className="h-5 w-5" aria-hidden />
              </button>
              <button type="button" className={btn} onClick={() => applyZoom(zoom * 1.4)} disabled={zoom >= MAX_ZOOM} aria-label="Zoomer">
                <ZoomIn className="h-5 w-5" aria-hidden />
              </button>
              <button type="button" className={btn} onClick={resetView} disabled={zoom === 1} aria-label="Réinitialiser le zoom">
                <RotateCcw className="h-5 w-5" aria-hidden />
              </button>
              <button ref={closeBtnRef} type="button" className={btn} onClick={close} aria-label="Fermer la galerie">
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>

          {/* Zone image */}
          <div className="relative min-h-0 flex-1">
            <div
              ref={stageRef}
              className="absolute inset-0 flex touch-none select-none items-center justify-center overflow-hidden"
              style={{ cursor: zoom > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in' }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onWheel={onWheel}
              onDoubleClick={onDoubleClick}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imgRef}
                key={images[index]}
                src={images[index]}
                alt={alt(index)}
                draggable={false}
                className="max-h-full max-w-full object-contain"
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                  transition: dragging ? 'none' : 'transform 0.2s ease-out',
                }}
              />
            </div>

            {total > 1 && (
              <>
                <button
                  type="button"
                  className={`${btn} absolute left-2 top-1/2 -translate-y-1/2 sm:left-4`}
                  onClick={() => go(-1)}
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden />
                </button>
                <button
                  type="button"
                  className={`${btn} absolute right-2 top-1/2 -translate-y-1/2 sm:right-4`}
                  onClick={() => go(1)}
                  aria-label="Image suivante"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden />
                </button>
              </>
            )}
          </div>

          {/* Miniatures */}
          {total > 1 && (
            <div ref={stripRef} className="flex gap-2 overflow-x-auto p-3 sm:justify-center sm:p-4">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Afficher l'image ${i + 1}`}
                  aria-current={i === index}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                    i === index ? 'ring-2 ring-brand-orange' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={src} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
