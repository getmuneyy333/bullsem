import { PUMP_URL, ROADMAP } from "@/lib/constants";
import BullLogo from "@/components/BullLogo";

export default function ChargePath() {
  return (
    <section id="charge-path" className="border-t border-purple/10 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <header className="mb-14 text-center">
          <BullLogo className="mx-auto mb-6 h-20 w-20" alt="Bullsem" />
          <p className="font-mono mb-3 text-[0.65rem] tracking-[0.35em] text-purple/70 uppercase">Mission Phases</p>
          <h2 className="section-title text-4xl sm:text-5xl">Charge Path</h2>
          <p className="mt-4 text-base italic text-muted sm:text-lg">
            From fair launch to the symbol of Army conviction.
          </p>
        </header>

        <div className="relative pl-8">
          <div className="roadmap-line absolute top-2 bottom-2 left-3 w-px" aria-hidden />

          {ROADMAP.map((phase, i) => (
            <article key={phase.phase} className={`relative ${i < ROADMAP.length - 1 ? "mb-10" : ""}`}>
              <div
                className={`absolute top-1 -left-5 h-4 w-4 rounded-full border-2 bg-void ${
                  phase.active
                    ? "border-purple shadow-[0_0_10px_rgba(153,69,255,0.6)]"
                    : i === 1
                      ? "border-purple/60"
                      : "border-purple/30"
                }`}
              />
              <div className="panel rounded-2xl p-6">
                <p className="font-mono text-[0.6rem] tracking-widest text-purple uppercase">{phase.phase}</p>
                <h3 className="font-display mt-1 mb-3 text-2xl tracking-wide text-text">{phase.title}</h3>
                <ul className="space-y-2 text-sm text-muted">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono mb-4 text-center text-[0.6rem] tracking-widest text-purple/50 uppercase">
            Live chart · post launch
          </p>
          <div className="chart-viewport overflow-hidden rounded-2xl p-1.5">
            <div className="relative flex min-h-[400px] flex-col items-center justify-center rounded-xl bg-[#030303] sm:min-h-[480px]">
              <BullLogo className="absolute inset-0 h-full w-full object-contain p-12 opacity-5" alt="" />
              <div className="relative mb-4 flex gap-2">
                {[50, 80, 60, 100, 70].map((h, i) => (
                  <div key={i} className="candle-bar w-3 rounded-sm" style={{ height: `${h * 0.5}px` }} />
                ))}
              </div>
              <BullLogo className="relative mb-4 h-16 w-16" alt="Bullsem" />
              <p className="relative font-display text-lg tracking-wide text-purple/50">CHART LOADING ON LAUNCH</p>
              <p className="relative mt-2 font-mono text-xs text-muted">pump.fun → Raydium</p>
              <a
                href={PUMP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost relative mt-6 rounded-full px-6 py-2.5 text-[0.65rem]"
              >
                Open pump.fun
              </a>
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-[0.55rem] text-purple/30 uppercase">
            $BULLSEM · Solana · live chart
          </p>
        </div>
      </div>
    </section>
  );
}
