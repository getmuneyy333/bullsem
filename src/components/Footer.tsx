"use client";

import { LINKS, PUMP_URL, TAGLINES } from "@/lib/constants";
import { useSite } from "@/context/SiteContext";
import BullLogo from "@/components/BullLogo";

export default function Footer() {
  const { copyCA } = useSite();

  return (
    <footer className="border-t border-purple/10 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-2 flex items-center justify-center gap-3">
          <h2 className="section-title text-4xl sm:text-5xl">Join the Stampede</h2>
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-purple/40">
            <BullLogo fill className="object-cover" alt="Bullsem" />
          </div>
        </div>
        <p className="font-display text-lg tracking-wide text-green sm:text-xl">{TAGLINES[4]}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer" className="btn-ghost rounded-lg px-4 py-2.5 text-[0.65rem]">X · Army</a>
          <a href={PUMP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost rounded-lg px-4 py-2.5 text-[0.65rem]">pump.fun</a>
          <a href="#acquire" className="btn-ghost rounded-lg px-4 py-2.5 text-[0.65rem]">Acquire</a>
          <button type="button" onClick={copyCA} className="btn-ghost rounded-lg px-4 py-2.5 text-[0.65rem]">Copy CA</button>
        </div>

        <BullLogo className="mx-auto mt-10 h-32 w-32 opacity-80" alt="Bullsem logo" />

        <p className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-muted/60 italic">
          Disclaimer: $BULLSEM is a memecoin for entertainment. Not financial advice. Crypto is volatile — you can lose everything. DYOR. Not affiliated with Ansem or any institution. The bull charges. You decide.
        </p>
        <p className="mt-4 font-mono text-[0.55rem] tracking-widest text-purple/25 uppercase">
          © {new Date().getFullYear()} $BULLSEM · Ansem&apos;s Bull on Solana
        </p>
      </div>
    </footer>
  );
}
