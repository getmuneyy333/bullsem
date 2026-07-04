"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

const LOAD_MS = 4000;
const FADE_MS = 3500;

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fadeTimer = window.setTimeout(() => setFadeOut(true), FADE_MS);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, LOAD_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`loader-overlay fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-void px-6 ${fadeOut ? "loader-fade-out" : ""}`}
      aria-live="polite"
      aria-label="Loading Bullsem"
    >
      <div className="loader-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="loader-spin relative mx-auto w-[min(72vw,340px)] max-w-full">
        <Image
          src={assetPath("/images/bullsemtransparent.png")}
          alt="Bullsem loading"
          width={680}
          height={680}
          priority
          className="h-auto w-full object-contain drop-shadow-[0_0_40px_rgba(153,69,255,0.45)]"
        />
      </div>

      <div className="loader-oval mt-10 w-[min(300px,82vw)]">
        <div className="loader-oval-inner">
          <div className="loader-ansem-track">
            <span className="loader-ansem-word">ansem</span>
            <span className="loader-ansem-word" aria-hidden>
              ansem
            </span>
            <span className="loader-ansem-word" aria-hidden>
              ansem
            </span>
          </div>
        </div>
      </div>

      <p className="mt-5 font-mono text-[0.6rem] tracking-[0.35em] text-purple/50 uppercase">
        Charging conviction
      </p>
    </div>
  );
}
