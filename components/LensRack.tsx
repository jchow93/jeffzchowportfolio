"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Lens, LensId, lenses, getLens } from "@/lib/lenses";

interface LensRackProps {
  lens: LensId | null;
  onChange: (lens: LensId | null) => void;
}

/** One pair of glasses, drawn as a line icon. Each lens has its own frame shape. */
export function Glasses({ frame, worn = false, className = "" }: { frame: Lens["frame"]; worn?: boolean; className?: string }) {
  const fill = worn ? "rgba(127,152,121,0.35)" : "rgba(255,255,255,0.6)";
  const shape = (x: number) => {
    switch (frame) {
      case "round":
        return <circle cx={x + 17} cy="20" r="14" />;
      case "square":
        return <rect x={x + 2} y="6" width="30" height="27" rx="5" />;
      case "rect":
        return <rect x={x} y="10" width="34" height="19" rx="4" />;
      case "aviator":
        return <path d={`M${x + 2} 9 h30 q3 0 2 5 q-2 19 -17 19 q-15 0 -17 -19 q-1 -5 2 -5 z`} />;
      default: // browline
        return <path d={`M${x} 9 h34 v10 q0 13 -17 13 q-17 0 -17 -13 z`} />;
    }
  };
  return (
    <svg viewBox="0 0 100 40" className={className} aria-hidden="true" fill={fill} stroke="#10231D" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
      {shape(6)}
      {shape(60)}
      <path d="M40 17 q10 -7 20 0" fill="none" />
      {frame === "browline" && <path d="M4 9 h38 M58 9 h38" strokeWidth="5" fill="none" />}
    </svg>
  );
}

export default function LensRack({ lens, onChange }: LensRackProps) {
  const faceRef = useRef<HTMLButtonElement>(null);
  const dragged = useRef(false);
  const [drag, setDrag] = useState<{ id: LensId; x: number; y: number } | null>(null);
  const [overFace, setOverFace] = useState(false);

  const worn = getLens(lens);

  const isOverFace = (x: number, y: number) => {
    const rect = faceRef.current?.getBoundingClientRect();
    if (!rect) return false;
    const pad = 28;
    return x > rect.left - pad && x < rect.right + pad && y > rect.top - pad && y < rect.bottom + pad;
  };

  // Drag is tracked on the window so it keeps working once the pointer leaves the button.
  const onPointerDown = (event: React.PointerEvent<HTMLButtonElement>, id: LensId) => {
    if (event.button !== 0) return;
    const origin = { x: event.clientX, y: event.clientY };
    dragged.current = false;

    const move = (e: PointerEvent) => {
      if (!dragged.current && Math.hypot(e.clientX - origin.x, e.clientY - origin.y) < 6) return;
      dragged.current = true;
      setDrag({ id, x: e.clientX, y: e.clientY });
      setOverFace(isOverFace(e.clientX, e.clientY));
    };

    const end = (e: PointerEvent) => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      if (dragged.current && e.type === "pointerup" && isOverFace(e.clientX, e.clientY)) onChange(id);
      setDrag(null);
      setOverFace(false);
      // Let the click that follows a drag be ignored, then accept clicks again.
      setTimeout(() => {
        dragged.current = false;
      }, 0);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
  };

  // Click and keyboard: put the pair on, or take it off if it is already on.
  const onClick = (id: LensId) => {
    if (dragged.current) {
      dragged.current = false;
      return;
    }
    onChange(lens === id ? null : id);
  };

  const dragging = drag ? getLens(drag.id) : null;

  return (
    <div className="mb-10 flex flex-col gap-6 border-y border-black/10 py-6 sm:flex-row sm:items-center sm:gap-10">
      <div className="flex items-center gap-4 sm:w-72 sm:flex-shrink-0">
        <button
          ref={faceRef}
          id="lens-face"
          type="button"
          onClick={() => onChange(null)}
          disabled={!worn}
          aria-label={worn ? `Take off the ${worn.label.toLowerCase()} glasses` : "No glasses on"}
          className={`relative h-[112px] w-[100px] flex-shrink-0 rounded-md transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-filament ${
            overFace ? "scale-110" : ""
          }`}
        >
          <Image src="/assets/logo.png" alt="" fill sizes="100px" className="object-contain" />
          {worn && (
            <Glasses
              key={worn.id}
              frame={worn.frame}
              worn
              className="lens-on absolute left-[9%] top-[40%] w-[56%] -rotate-[5deg]"
            />
          )}
        </button>
        <div aria-live="polite" className="min-w-0">
          <div className="field-label">{worn ? "Reading as" : "Read it your way"}</div>
          <div className="mt-1 font-display text-lg font-bold leading-snug text-pine">
            {worn ? worn.reader : "Drag a pair onto me"}
          </div>
          {worn && (
            <button
              type="button"
              onClick={() => onChange(null)}
              className="mt-1 text-sm font-medium text-pine underline underline-offset-4 hover:text-[#5F7A5A]"
            >
              Take them off
            </button>
          )}
        </div>
      </div>

      <ul className="grid flex-1 grid-cols-3 gap-x-2 gap-y-4 sm:grid-cols-5">
        {lenses.map((item) => {
          const isWorn = lens === item.id;
          const isDragged = drag?.id === item.id;
          return (
            <li key={item.id}>
              <button
                id={`lens-${item.id}`}
                type="button"
                aria-pressed={isWorn}
                aria-label={`Read as ${item.reader}`}
                onPointerDown={(event) => onPointerDown(event, item.id)}
                onClick={() => onClick(item.id)}
                className="flex w-full cursor-grab touch-none select-none flex-col items-center gap-2 rounded-md px-1 py-2 transition-colors hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-filament active:cursor-grabbing"
              >
                <span className="flex h-9 w-full items-center justify-center">
                  {isWorn || isDragged ? (
                    <span className="block h-7 w-16 rounded border border-dashed border-black/25" />
                  ) : (
                    <Glasses frame={item.frame} className="h-9 w-[72px] transition-transform duration-200 hover:-translate-y-0.5" />
                  )}
                </span>
                <span className={`field-label ${isWorn ? "!text-pine" : ""}`}>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {drag && dragging && (
        <div
          className="pointer-events-none fixed z-[60] -translate-x-1/2 -translate-y-1/2"
          style={{ left: drag.x, top: drag.y }}
        >
          <Glasses frame={dragging.frame} worn={overFace} className="h-11 w-[88px] rotate-[-6deg] drop-shadow-md" />
        </div>
      )}
    </div>
  );
}
