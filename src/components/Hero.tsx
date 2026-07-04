"use client";

import { BURST_TEXTS, CONTRACT_ADDRESS, LINKS, PUMP_URL, TAGLINES } from "@/lib/constants";
import { useSite } from "@/context/SiteContext";
import BullLogo from "@/components/BullLogo";

export default function Hero() {
  const { copyCA, openModal, conviction, bumpConviction, burstAt, spawnCharge } = useSite();

  const handleConvictionClick = () => {
    const amount = Math.floor(Math.random() * 8) + 3;
    bumpConviction(amount);
    if (conviction + amount >= 100) {
      const btn = document.getElementById("conviction-btn");
      if (btn) {
        const rect = btn.getBoundingClientRect();
        burstAt(rect.left + rect.width / 2, rect.top + rect.height / 2, "MAX CONVICTION");
      }
    }
  };

  const handleBullClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = BURST_TEXTS[Math.floor(Math.random() * BURST_TEXTS.length)];
    burstAt(e.clientX, e.clientY, text);
    spawnCharge(e.clientX, e.clientY);
    bumpConviction(5);
  };

  return (
    <section id="launch" className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
            <span className="font-mono text-[0.6rem] tracking-[0.3em] text-purple/70 uppercase">
              Ansem Army · Solana · July 2026
            </span>
          </div>

          <h1 className="hero-title text-7xl sm:text-8xl md:text-9xl">$BULLSEM</h1>
          <p className="mt-2 font-display text-xl tracking-wide text-purple-glow sm:text-2xl">
            Ansem&apos;s Bull
          </p>
          <p className="mt-3 text-lg italic text-muted sm:text-xl">{TAGLINES[2]}</p>
          <p className="mt-2 font-mono text-sm text-green/80">The Black Bull Runs on Solana</p>

          <div className="mt-6 inline-block w-full max-w-xs text-left">
            <button
              type="button"
              id="conviction-btn"
              onClick={handleConvictionClick}
              className="panel w-full rounded-xl p-4 transition hover:border-purple/40"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[0.65rem] tracking-wider text-purple/80">Conviction Meter</span>
                <span className="font-mono text-xs text-green">{conviction >= 100 ? "MAX" : `${conviction}%`}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-void-light">
                <div
                  className="conviction-fill h-full rounded-full bg-gradient-to-r from-purple to-green"
                  style={{ width: `${conviction}%` }}
                />
              </div>
              <p className="mt-2 font-mono text-[0.55rem] text-muted">Click to charge conviction</p>
            </button>
          </div>

          <div className="panel mx-auto mt-6 max-w-md rounded-xl p-4 lg:mx-0">
            <p className="font-mono mb-2 text-[0.55rem] tracking-widest text-purple/70 uppercase">
              Contract · Fair launch pump.fun → Raydium
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <code className="flex-1 break-all font-mono text-[0.68rem] text-text/90 sm:text-xs">{CONTRACT_ADDRESS}</code>
              <button type="button" onClick={copyCA} className="btn-charge shrink-0 rounded-lg px-4 py-2 text-[0.6rem]">Copy CA</button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
            <button type="button" onClick={openModal} className="btn-charge rounded-full px-7 py-3.5 text-xs">Join the Stampede</button>
            <a href={PUMP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost rounded-full px-7 py-3.5 text-center text-xs">View Chart</a>
            <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer" className="btn-ghost rounded-full px-7 py-3.5 text-center text-xs">Join the Army</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-8 rounded-full bg-purple/15 blur-3xl" aria-hidden />
          <div className="bull-frame relative bg-void-mid p-4 sm:p-6">
            <button
              type="button"
              id="hero-bull"
              onClick={handleBullClick}
              className="block w-full"
              aria-label="Charge the bull"
            >
              <BullLogo priority className="mx-auto w-full max-w-sm" />
            </button>
          </div>
          <p className="mt-4 text-center font-mono text-[0.6rem] tracking-[0.2em] text-purple/50 uppercase lg:text-left">
            Click to charge · The Black Bull
          </p>
          <div className="mt-4 flex justify-center gap-2 lg:justify-start">
            {[40, 65, 50, 80, 55].map((h, i) => (
              <div key={i} className="candle-bar w-2 rounded-sm" style={{ height: `${h * 0.4}px` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
