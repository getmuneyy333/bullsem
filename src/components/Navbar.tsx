"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { useSite } from "@/context/SiteContext";
import { smoothScrollTo } from "@/lib/utils";
import BullLogo from "@/components/BullLogo";

export default function Navbar() {
  const { openModal } = useSite();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <header className="nav-bar sticky z-40 transition-[top] duration-200" style={{ top: scrolled ? "2rem" : "0" }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#launch" onClick={(e) => handleNav(e, "#launch")} className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-purple/40 bg-void-light">
            <BullLogo fill className="object-cover" alt="" />
          </div>
          <span className="font-display text-lg tracking-wide text-text">$BULLSEM</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="rounded-full px-3 py-2 text-[0.7rem] font-medium text-muted transition-colors hover:bg-purple/10 hover:text-purple-glow xl:text-xs"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button type="button" onClick={openModal} className="btn-charge shrink-0 rounded-full px-4 py-2 text-[0.65rem] sm:text-xs">
          Buy $BULLSEM
        </button>
      </nav>

      <div className="flex gap-2 overflow-x-auto border-t border-purple/10 px-4 py-2 lg:hidden">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNav(e, item.href)}
            className="shrink-0 rounded-full border border-purple/20 px-3 py-1 text-[0.6rem] text-muted"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
