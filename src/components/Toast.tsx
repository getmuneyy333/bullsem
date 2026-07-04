"use client";

import { useSite } from "@/context/SiteContext";

export default function Toast() {
  const { toastMessage } = useSite();
  return (
    <div
      className={`toast fixed bottom-6 left-1/2 z-[100000] -translate-x-1/2 rounded-full border border-purple/40 bg-void-panel px-6 py-3 font-mono text-xs tracking-wider text-purple-glow shadow-lg ${toastMessage ? "toast-show" : ""}`}
      role="status"
    >
      {toastMessage ?? "Copied"}
    </div>
  );
}
