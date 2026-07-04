import BullLogo from "@/components/BullLogo";

export default function Origin() {
  return (
    <section id="origin" className="border-t border-purple/10 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 text-center">
          <p className="font-mono mb-3 text-[0.65rem] tracking-[0.35em] text-purple/70 uppercase">The Origin</p>
          <h2 className="section-title text-4xl sm:text-5xl">Born From the Call</h2>
          <p className="mt-4 text-base italic text-muted sm:text-lg">
            Born from Ansem&apos;s call. Charged by the Army.
          </p>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
            <p className="drop-cap">
              Bullsem is Ansem&apos;s bull — the physical embodiment of his conviction and the official mascot of the Ansem Army on Solana. Not a derivative. Not a copy. The black bull that charges when the call lands.
            </p>
            <p>
              In July 2026, as Solana&apos;s Real World Asset TVL hit a new all-time high above $3.4B and meme activity began heating up again, Ansem&apos;s calls started landing with maximum force. Out of that moment of pure conviction, Bullsem was born: a black bull with glowing purple horns, representing the darkest, most aggressive, and most unstoppable form of bullish energy on the fastest chain in crypto.
            </p>
            <p>
              The black color is raw, unfiltered conviction — no pastel colors, no cute animals. Just pure bull market dominance. While institutions tokenize RWAs and degens rotate through narratives, Bullsem charges straight through resistance with Solana speed.
            </p>
            <p className="font-medium text-text">
              The Ansem Army now has its own bull to ride. Everyone who holds becomes part of the stampede.
            </p>
          </div>

          <div>
            <div className="bull-frame bg-void-mid p-4 sm:p-6">
              <BullLogo className="mx-auto w-full max-w-xs" />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3 font-mono text-[0.6rem] tracking-wider text-purple/60 uppercase lg:justify-start">
              <span className="rounded border border-purple/20 px-2.5 py-1">Chain: Solana</span>
              <span className="rounded border border-purple/20 px-2.5 py-1">Army: Ansem</span>
              <span className="rounded border border-green/30 px-2.5 py-1 text-green/80">RWA TVL: $3.4B+</span>
              <span className="rounded border border-purple/20 px-2.5 py-1">Status: Charging</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
