"use client";

import { CONTRACT_ADDRESS, PUMP_URL } from "@/lib/constants";
import { useSite } from "@/context/SiteContext";
import BullLogo from "@/components/BullLogo";

export default function Acquire() {
  const { copyCA, openModal } = useSite();

  return (
    <section id="acquire" className="border-t border-purple/10 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <BullLogo className="mx-auto mb-8 h-28 w-28" alt="Bullsem" />
        <header className="mb-10">
          <p className="font-mono mb-3 text-[0.65rem] tracking-[0.35em] text-purple/70 uppercase">Final Charge</p>
          <h2 className="section-title text-4xl sm:text-5xl">Acquire $BULLSEM</h2>
          <p className="mt-4 text-base italic text-muted">Join the stampede. Hold conviction.</p>
        </header>

        <div className="panel mb-8 rounded-2xl p-6 text-left">
          <p className="font-mono mb-3 text-[0.6rem] tracking-widest text-purple uppercase">Contract Address</p>
          <code className="mb-4 block break-all font-mono text-sm text-text">{CONTRACT_ADDRESS}</code>
          <button type="button" onClick={copyCA} className="btn-charge mb-3 w-full rounded-xl py-3.5 text-xs">
            Copy Contract Address
          </button>
          <button type="button" onClick={openModal} className="btn-ghost mb-3 w-full rounded-xl py-3.5 text-xs">
            How to Buy
          </button>
          <a href={PUMP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost block w-full rounded-xl py-3.5 text-center text-xs">
            Open on pump.fun →
          </a>
        </div>

        <ol className="space-y-4 text-left text-sm text-muted">
          <li className="panel flex gap-4 rounded-xl p-4">
            <span className="font-mono text-purple">1</span>
            <span>Copy the contract address above.</span>
          </li>
          <li className="panel flex gap-4 rounded-xl p-4">
            <span className="font-mono text-purple">2</span>
            <span>Connect wallet on pump.fun. Swap SOL for $BULLSEM.</span>
          </li>
          <li className="panel flex gap-4 rounded-xl p-4">
            <span className="font-mono text-green">3</span>
            <span>Hold. Rally. You&apos;re part of the Ansem Army stampede now.</span>
          </li>
        </ol>
      </div>
    </section>
  );
}
