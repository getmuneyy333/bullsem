import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import ClientShell from "@/components/ClientShell";
import { assetPath } from "@/lib/utils";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_PAGES === "true"
      ? "https://getmuneyy333.github.io/bullsem"
      : "http://localhost:3000",
  ),
  title: "$BULLSEM | Ansem's Bull on Solana",
  description:
    "The Black Bull of Solana. Born from Ansem's call. Charged by the Army.",
  openGraph: {
    title: "$BULLSEM | Ansem's Bull",
    description: "Conviction has a mascot. The black bull runs on Solana.",
    images: [assetPath("/images/bullsemlogo.jpg")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${inter.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body className="min-h-full bg-bull antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
