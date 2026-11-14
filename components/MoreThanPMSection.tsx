"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

const SOUNDCLOUD_URL = "https://soundcloud.com/thisisroem";
const WIDGET_SRC = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
  SOUNDCLOUD_URL
)}&auto_play=true&hide_related=true&show_comments=false&show_user=false&visual=false`;
const WIDGET_API = "https://w.soundcloud.com/player/api.js";

const photos = [
  { src: "/assets/photos/train-window.jpg", alt: "A passenger reading a phone, seen through a train window", portrait: true },
  { src: "/assets/photos/bookshop-cat.jpg", alt: "A tabby cat sitting in a box in a bookshop window", portrait: false },
  { src: "/assets/photos/wall-light.jpg", alt: "Late sunlight falling across a wall behind pine needles", portrait: true },
  { src: "/assets/photos/tram-stop.jpg", alt: "A person waiting at a tram stop under a web of overhead wires", portrait: false },
  { src: "/assets/photos/lasers.jpg", alt: "A crowd under red lasers and green stage lights", portrait: true },
  { src: "/assets/photos/shrine-gate.jpg", alt: "A stone gate framed by pine trees, with people walking toward a red bridge", portrait: false },
  { src: "/assets/photos/wing.jpg", alt: "An aircraft wing at dusk through a cabin window", portrait: false },
];

type PlayerState = "idle" | "loading" | "playing" | "paused";

/** The thread again: a straight line at rest, a waveform while the music plays. */
function Waveform({ playing }: { playing: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const playingRef = useRef(playing);
  playingRef.current = playing;

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let amp = 0;

    const size = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * ratio;
      canvas.height = canvas.clientHeight * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (ms: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const t = still ? 0 : ms / 1000;
      const target = playingRef.current ? 1 : 0;
      amp = still ? target : amp + (target - amp) * 0.08;

      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      for (let x = 0; x <= w; x += 2) {
        const envelope = Math.sin((x / w) * Math.PI); // quiet at both ends
        const wave = Math.sin(x * 0.045 + t * 5) * Math.sin(x * 0.011 + t * 1.3) + 0.4 * Math.sin(x * 0.13 + t * 8);
        const y = h / 2 + amp * envelope * h * 0.3 * wave;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineWidth = 1.8;
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#D9541A";
      ctx.stroke();

      if (!still) frame = requestAnimationFrame(draw);
    };

    const onResize = () => {
      size();
      if (still) draw(0);
    };

    size();
    if (still) draw(0);
    else frame = requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
    // Redraw the still frame when play state changes under reduced motion.
  }, [playing]);

  return <canvas ref={ref} aria-hidden="true" className="block h-20 w-full" />;
}

function MusicPlayer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const widgetRef = useRef<any>(null);
  const [state, setState] = useState<PlayerState>("idle");
  const [track, setTrack] = useState<string | null>(null);
  const [slow, setSlow] = useState(false);

  // The SoundCloud player is only loaded after the first press of Play.
  useEffect(() => {
    if (state !== "loading" || widgetRef.current) return;

    const connect = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SC = (window as any).SC;
      if (!SC || !iframeRef.current) return;
      const widget = SC.Widget(iframeRef.current);
      widgetRef.current = widget;
      const showTrack = () =>
        widget.getCurrentSound((sound: { title?: string } | null) => setTrack(sound?.title ?? null));
      widget.bind(SC.Widget.Events.READY, showTrack);
      widget.bind(SC.Widget.Events.PLAY, () => {
        setState("playing");
        setSlow(false);
        showTrack();
      });
      widget.bind(SC.Widget.Events.PAUSE, () => setState("paused"));
      widget.bind(SC.Widget.Events.FINISH, () => setState("paused"));
    };

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_API}"]`);
    if (existing) connect();
    else {
      const script = document.createElement("script");
      script.src = WIDGET_API;
      script.onload = connect;
      document.body.appendChild(script);
    }

    const timer = setTimeout(() => setSlow(true), 7000);
    return () => clearTimeout(timer);
  }, [state]);

  const toggle = () => {
    if (state === "idle") setState("loading");
    else widgetRef.current?.toggle();
  };

  const playing = state === "playing";

  return (
    <div>
      <div className="flex items-center gap-5">
        <button
          id="music-toggle"
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause the music" : "Play my music"}
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-pine text-mist transition-colors hover:bg-[#1D3A30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-filament"
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
        </button>
        <div className="min-w-0 flex-1">
          <Waveform playing={playing} />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-6 gap-y-1" aria-live="polite">
        <span className="field-label">
          {state === "loading" ? "Loading from SoundCloud" : playing ? "Now playing" : "Press play"}
        </span>
        {track && <span className="font-mono text-sm text-pine">{track}</span>}
        {slow && state === "loading" && (
          <span className="text-sm text-gray-600">Taking a while. The link below opens it directly.</span>
        )}
      </div>

      {state !== "idle" && (
        <iframe
          ref={iframeRef}
          title="SoundCloud player"
          src={WIDGET_SRC}
          allow="autoplay"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute h-px w-px opacity-0"
        />
      )}
    </div>
  );
}

export default function MoreThanPMSection() {
  return (
    <section id="more-than-pm" className="scroll-mt-20 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="field-label mb-4">Outside work</div>
        <h2 className="mb-12 text-3xl font-bold leading-tight text-pine md:text-5xl">Off the clock</h2>

        {/* Music */}
        <div className="relative grid gap-6 border-t border-black/10 py-10 md:grid-cols-[220px_1fr] md:gap-12">
          <div>
            <h3 className="text-xl font-bold text-pine">Music</h3>
            <p className="field-label mt-2">DJ and producer · since 2017</p>
          </div>
          <div>
            <p className="mb-6 max-w-xl text-lg leading-relaxed text-gray-700">
              I produce and DJ. The tracks have been played more than 750,000 times across Spotify and SoundCloud.
            </p>
            <MusicPlayer />
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <a
                href={SOUNDCLOUD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pine underline underline-offset-4 hover:text-[#5F7A5A]"
              >
                SoundCloud
              </a>
              <a
                href="https://open.spotify.com/artist/1f0n7cFsvYawQBuzj6EAfD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pine underline underline-offset-4 hover:text-[#5F7A5A]"
              >
                Spotify
              </a>
            </div>
          </div>
        </div>

        {/* Photography */}
        <div className="grid gap-6 border-t border-black/10 py-10 md:grid-cols-[220px_1fr] md:gap-12">
          <div>
            <h3 className="text-xl font-bold text-pine">Photography</h3>
            <p className="field-label mt-2">Street and travel</p>
          </div>
          <div className="columns-2 gap-4 md:columns-3">
            {photos.map((photo) => (
              <figure key={photo.src} className="mb-4 break-inside-avoid">
                <div
                  className={`relative overflow-hidden rounded-sm bg-black/5 ${
                    photo.portrait ? "aspect-[2/3]" : "aspect-[3/2]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>

        {/* The short ones */}
        <div className="grid gap-6 border-y border-black/10 py-10 md:grid-cols-[220px_1fr] md:gap-12">
          <div>
            <h3 className="text-xl font-bold text-pine">Also</h3>
          </div>
          <ul className="max-w-xl space-y-4 text-lg leading-relaxed text-gray-700">
            <li>
              <span className="font-semibold text-pine">Cooking.</span> I’m allergic to dairy and eggs, so most recipes
              start as a problem to solve.
            </li>
            <li>
              <span className="font-semibold text-pine">Basketball.</span> I was on the practice squad for Cal women’s
              basketball. The job was making the starters better.
            </li>
            <li>
              <span className="font-semibold text-pine">Training.</span> Boxing, calisthenics and lifting.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
