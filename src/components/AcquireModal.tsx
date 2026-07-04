"use client";

import { useEffect } from "react";
import { useSite } from "@/context/SiteContext";
import { CONTRACT_ADDRESS, PUMP_URL } from "@/lib/constants";
import BullLogo from "@/components/BullLogo";

export default function AcquireModal() {
  const { isModalOpen, closeModal, copyCA } = useSite();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  return (
    <div
      className={`acquire-modal fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm ${isModalOpen ? "acquire-modal-open" : ""}`}
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isModalOpen}
    >
      <div
        className="modal-card panel max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-purple/30">
              <BullLogo fill className="object-cover" alt="Bullsem" />
            </div>
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.28em] text-purple/80 uppercase">
                Join the Stampede
              </p>
              <h3 className="section-title mt-1 text-3xl">Acquire $BULLSEM</h3>
            </div>
          </div>
          <button type="button" onClick={closeModal} className="btn-ghost shrink-0 rounded-lg px-3 py-1 text-lg leading-none" aria-label="Close">
            &times;
          </button>
        </div>

        <ol className="mb-6 space-y-4 text-sm text-muted">
          <li className="flex gap-3"><span className="font-mono text-purple">01</span> Copy the contract address.</li>
          <li className="flex gap-3"><span className="font-mono text-purple">02</span> Open pump.fun and find $BULLSEM.</li>
          <li className="flex gap-3"><span className="font-mono text-purple">03</span> Connect your Solana wallet.</li>
          <li className="flex gap-3"><span className="font-mono text-purple">04</span> Swap SOL. Join the Army.</li>
          <li className="flex gap-3"><span className="font-mono text-purple">05</span> Hold conviction. Ride the stampede.</li>
        </ol>

        <div className="panel mb-4 rounded-xl p-4">
          <p className="font-mono mb-2 text-[0.55rem] tracking-widest text-purple/70 uppercase">Contract Address</p>
          <code className="block break-all font-mono text-xs text-text">{CONTRACT_ADDRESS}</code>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={copyCA} className="btn-charge flex-1 rounded-xl py-3 text-xs">Copy Contract</button>
          <a href={PUMP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 rounded-xl py-3 text-center text-xs">Open pump.fun</a>
        </div>
      </div>
    </div>
  );
}
