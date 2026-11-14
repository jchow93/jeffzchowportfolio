"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export interface StackPhoto {
  src: string;
  alt: string;
  portrait: boolean;
}

// A small fixed tilt per print so the stack looks hand-placed.
const tilts = [-2.5, 1.8, -1.2, 2.6, -1.9, 1.1, -0.6];
const SWIPE_DISTANCE = 70;

/**
 * A stack of prints. Swipe, drag or tap the top one to send it to the bottom.
 */
export default function PhotoStack({ photos }: { photos: StackPhoto[] }) {
  // order[0] is the print on top.
  const [order, setOrder] = useState(() => photos.map((_, index) => index));
  const [drag, setDrag] = useState({ x: 0, y: 0, active: false });
  const [leaving, setLeaving] = useState<null | 1 | -1>(null);
  const moved = useRef(false);

  const sendToBottom = (direction: 1 | -1) => {
    if (leaving) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finish = () => {
      setOrder((current) => [...current.slice(1), current[0]]);
      setLeaving(null);
      setDrag({ x: 0, y: 0, active: false });
    };
    if (reduce) return finish();
    setLeaving(direction);
    setTimeout(finish, 230);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || leaving) return;
    const origin = { x: event.clientX, y: event.clientY };
    moved.current = false;

    const move = (e: PointerEvent) => {
      const x = e.clientX - origin.x;
      const y = e.clientY - origin.y;
      if (!moved.current && Math.hypot(x, y) < 6) return;
      moved.current = true;
      setDrag({ x, y: y * 0.3, active: true });
    };

    const end = (e: PointerEvent) => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      const x = e.clientX - origin.x;
      if (moved.current && e.type === "pointerup" && Math.abs(x) > SWIPE_DISTANCE) sendToBottom(x > 0 ? 1 : -1);
      else setDrag({ x: 0, y: 0, active: false });
      setTimeout(() => {
        moved.current = false;
      }, 0);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
  };

  const top = order[0];

  return (
    <div className="max-w-md">
      <div
        id="photo-stack"
        className="relative mx-auto h-[400px] w-full max-w-[360px] select-none sm:h-[460px]"
        role="group"
        aria-label={`Photo ${top + 1} of ${photos.length}: ${photos[top].alt}`}
      >
        {order.map((photoIndex, depth) => {
          const photo = photos[photoIndex];
          const isTop = depth === 0;
          const tilt = tilts[photoIndex % tilts.length];

          let transform = `translateY(${depth * 7}px) scale(${1 - depth * 0.035}) rotate(${tilt}deg)`;
          if (isTop && leaving) transform = `translate(${leaving * 135}%, 20px) rotate(${leaving * 16}deg)`;
          else if (isTop && drag.active)
            transform = `translate(${drag.x}px, ${drag.y}px) rotate(${tilt + drag.x / 22}deg)`;

          return (
            <div
              key={photo.src}
              className={`absolute inset-0 flex items-center justify-center ${isTop ? "" : "pointer-events-none"}`}
              style={{ zIndex: photos.length - depth, opacity: depth > 3 ? 0 : 1 }}
            >
              <div
                onPointerDown={isTop ? onPointerDown : undefined}
                onClick={isTop ? () => !moved.current && sendToBottom(1) : undefined}
                className={`relative overflow-hidden rounded-sm border-[6px] border-white bg-white shadow-[0_6px_22px_rgba(16,35,29,0.18)] ${
                  photo.portrait ? "h-full max-h-full aspect-[2/3]" : "w-full aspect-[3/2]"
                } ${isTop ? "cursor-grab touch-pan-y active:cursor-grabbing" : ""}`}
                style={{
                  transform,
                  transition: isTop && drag.active && !leaving ? "none" : "transform 230ms ease-out",
                }}
              >
                <Image
                  src={photo.src}
                  alt={isTop ? photo.alt : ""}
                  fill
                  draggable={false}
                  loading={depth < 2 ? "eager" : "lazy"}
                  sizes="360px"
                  className="pointer-events-none object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-6 flex max-w-[360px] items-center justify-between">
        <span className="field-label" aria-hidden="true">
          {String(top + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")} · swipe or tap
        </span>
        <button
          id="photo-next"
          type="button"
          onClick={() => sendToBottom(1)}
          className="text-sm font-medium text-pine underline underline-offset-4 hover:text-[#5F7A5A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-filament"
        >
          Next photo
        </button>
      </div>
    </div>
  );
}
