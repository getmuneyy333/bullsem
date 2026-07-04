"use client";

import { SiteProvider } from "@/context/SiteContext";
import LoadingScreen from "@/components/LoadingScreen";
import Toast from "@/components/Toast";
import StickyCABar from "@/components/StickyCABar";
import AcquireModal from "@/components/AcquireModal";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <SiteProvider>
      <LoadingScreen />
      <Toast />
      <StickyCABar />
      <AcquireModal />
      {children}
    </SiteProvider>
  );
}
