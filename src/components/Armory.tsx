import { TOKENOMICS } from "@/lib/constants";
import BullLogo from "@/components/BullLogo";

const ARMORY_ITEMS = [
  { icon: "🐂", title: "Fair Launch", body: "pump.fun → Raydium. No presale. No team allocation. Pure community." },
  { icon: "🔥", title: "LP Burned", body: "Liquidity burned. Contract renounced. 0/0 taxes. Nothing held back." },
  { icon: "⚡", title: "Solana Speed", body: "Charges through resistance at the fastest chain in crypto." },
  { icon: "🟢", title: "Green Candles", body: "Neon green energy. Flex on the chart. Lead the Army." },
] as const;

export default function Armory() {
  return (
    <section id="armory" className="border-t border-purple/10 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 text-center">
          <p className="font-mono mb-3 text-[0.65rem] tracking-[0.35em] text-purple/70 uppercase">Token Intel</p>
          <h2 className="section-title text-4xl sm:text-5xl">The Armory</h2>
          <p className="mt-4 text-base italic text-muted sm:text-lg">
            Pure community-driven. No team allocation.
          </p>
        </header>

        <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {TOKENOMICS.map((t) => (
            <div key={t.label} className="panel rounded-2xl p-5 text-center">
              <p className="font-display text-3xl text-green">{t.value}</p>
              <p className="mt-1 font-mono text-[0.6rem] tracking-widest text-purple/70 uppercase">{t.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ARMORY_ITEMS.map((item) => (
            <div key={item.title} className="panel rounded-2xl p-6 text-center">
              <div className="mb-3 text-3xl">{item.icon}</div>
              <h3 className="font-display mb-2 text-xl tracking-wide text-text">{item.title}</h3>
              <p className="text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <div className="bull-frame bg-void-mid p-4 sm:p-6">
            <BullLogo className="mx-auto w-full max-w-xs" />
            <span className="mt-4 block text-center font-mono text-[0.55rem] tracking-widest text-green/60 uppercase">
              Flexing on green candles
            </span>
          </div>
          <div className="panel rounded-2xl p-6 sm:p-8">
            <p className="font-mono mb-4 text-[0.6rem] tracking-[0.28em] text-purple/70 uppercase">
              Positioning · July 2026 Meta
            </p>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex gap-3">
                <span className="text-purple">▸</span>
                <span><strong className="text-text">Ansem Army momentum</strong> — growing influence, calls landing with force.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green">▸</span>
                <span><strong className="text-text">Solana RWA explosion</strong> — institutional inflows above $3.4B TVL.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple">▸</span>
                <span><strong className="text-text">Meme heat returns</strong> — degen energy rotating back to Solana.</span>
              </li>
            </ul>
            <p className="mt-6 text-sm font-medium text-purple-glow">
              Bullsem sits at the intersection. The Army has its bull.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
