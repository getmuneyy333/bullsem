"use client";

import { useEffect, useState } from "react";
import { useSite } from "@/context/SiteContext";
import { CONTRACT_ADDRESS } from "@/lib/constants";

export default function StickyCABar() {
  const { copyCA } = useSite();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-ca-bar fixed top-0 left-0 right-0 z-50 hidden sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs">
        <span className="shrink-0 font-mono tracking-wider text-purple/70 uppercase">CA</span>
        <code className="truncate font-mono text-[0.65rem] text-text/80 sm:text-xs">
          {CONTRACT_ADDRESS}
        </code>
        <button type="button" onClick={copyCA} className="btn-ghost shrink-0 rounded-full px-3 py-1.5 text-[0.6rem]">
          Copy
        </button>
      </div>
    </div>
  );
}
