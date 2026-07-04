import { LINKS, META_PILLARS, STAMPEDE_SLOTS } from "@/lib/constants";
import BullLogo from "@/components/BullLogo";

export default function Stampede() {
  return (
    <section id="stampede" className="border-t border-purple/10 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 text-center">
          <p className="font-mono mb-3 text-[0.65rem] tracking-[0.35em] text-purple/70 uppercase">The Army</p>
          <h2 className="section-title text-4xl sm:text-5xl">The Stampede</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base italic text-muted sm:text-lg">
            While they tokenize, we stampede.
          </p>
        </header>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {META_PILLARS.map((pillar) => (
            <article key={pillar.title} className="panel rounded-2xl p-6">
              <p className="font-mono mb-2 text-[0.6rem] tracking-widest text-purple uppercase">{pillar.title}</p>
              <p className="text-sm leading-relaxed text-muted">{pillar.body}</p>
            </article>
          ))}
        </div>

        <div className="panel mb-8 rounded-2xl p-6 text-center sm:p-8">
          <BullLogo className="mx-auto mb-4 h-24 w-24 rounded-full object-cover" alt="Bullsem logo" />
          <h3 className="font-display mb-3 text-2xl tracking-wide text-text">Bullsem Belongs to the Army</h3>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted">
            Bullsem is not just another meme. It is the on-chain representation of &ldquo;we are going higher&rdquo; energy that Ansem has been preaching. Something the Army can actually hold and rally behind instead of just following calls.
          </p>
          <a
            href={LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-mono text-xs text-purple-glow hover:text-purple"
          >
            Rally with the Army →
          </a>
        </div>

        <p className="font-mono mb-4 text-center text-[0.6rem] tracking-widest text-purple/50 uppercase">
          Army slots · filling on launch
        </p>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: STAMPEDE_SLOTS }, (_, i) => (
            <div key={i} className="stampede-tile relative flex aspect-square flex-col items-center justify-center gap-1 overflow-hidden rounded-xl p-2">
              <BullLogo
                className="absolute inset-0 h-full w-full object-cover opacity-10"
                alt=""
              />
              <span className="relative font-mono text-[0.5rem] tracking-widest text-purple/50 uppercase">
                Army {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative font-mono text-[0.55rem] text-green/40">awaiting charge</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
