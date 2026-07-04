"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { CONTRACT_ADDRESS } from "@/lib/constants";

type SiteContextValue = {
  copyCA: () => Promise<void>;
  toastMessage: string | null;
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
  conviction: number;
  bumpConviction: (amount?: number) => void;
  burstAt: (x: number, y: number, text: string) => void;
  spawnCharge: (x: number, y: number) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [conviction, setConviction] = useState(84);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2800);
  }, []);

  const copyCA = useCallback(async () => {
    if (CONTRACT_ADDRESS.startsWith("TBA")) {
      showToast("Contract launching soon — stay locked in");
      return;
    }
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      showToast("✓ Contract copied");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = CONTRACT_ADDRESS;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast("✓ Contract copied");
    }
  }, [showToast]);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  }, []);

  const bumpConviction = useCallback((amount = 5) => {
    setConviction((prev) => Math.min(100, prev + amount));
  }, []);

  const burstAt = useCallback((x: number, y: number, text: string) => {
    const el = document.createElement("div");
    el.className = "charge-burst";
    el.textContent = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }, []);

  const spawnCharge = useCallback((x: number, y: number) => {
    const chars = ["▲", "◆", "⬡", "↑", "▲"];
    for (let i = 0; i < 14; i++) {
      const s = document.createElement("div");
      s.className = "charge-particle";
      s.textContent = chars[Math.floor(Math.random() * chars.length)];
      s.style.left = `${x}px`;
      s.style.top = `${y}px`;
      s.style.color = Math.random() > 0.5 ? "#9945FF" : "#22c55e";
      const angle = (Math.PI * 2 * i) / 14;
      const dist = 60 + Math.random() * 80;
      s.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
      s.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1000);
    }
  }, []);

  return (
    <SiteContext.Provider
      value={{
        copyCA,
        toastMessage,
        openModal,
        closeModal,
        isModalOpen,
        conviction,
        bumpConviction,
        burstAt,
        spawnCharge,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}
