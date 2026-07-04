export const CONTRACT_ADDRESS = "TBA_LAUNCH_ON_PUMP_FUN";

export const PUMP_URL = "https://pump.fun";

export const LINKS = {
  buy: "#acquire",
  acquire: "#acquire",
  chart: PUMP_URL,
  twitter: "https://x.com",
  telegram: "https://t.me",
} as const;

export const NAV_ITEMS = [
  { label: "Origin", href: "#origin" },
  { label: "Stampede", href: "#stampede" },
  { label: "Armory", href: "#armory" },
  { label: "Charge Path", href: "#charge-path" },
  { label: "Acquire", href: "#acquire" },
] as const;

export const TAGLINES = [
  "Ansem's Bull",
  "The Black Bull Runs on Solana",
  "Conviction has a mascot",
  "Born from Ansem's call. Charged by the Army.",
  "While they tokenize, we stampede.",
] as const;

export const BURST_TEXTS = [
  "STAMPEDE MODE",
  "CONVICTION MAXIMUM",
  "CHARGE THROUGH RESISTANCE",
  "ARMY ASSEMBLED",
  "HIGHER.",
] as const;

export const STAMPEDE_SLOTS = 12;

export const TOKENOMICS = [
  { label: "Total Supply", value: "1B" },
  { label: "Tax", value: "0/0" },
  { label: "Liquidity", value: "Burned" },
  { label: "Contract", value: "Renounced" },
] as const;

export const META_PILLARS = [
  {
    title: "Ansem Army",
    body: "The Army finally has something to hold. Not just calls — a bull to rally behind.",
  },
  {
    title: "Solana RWA Wave",
    body: "Institutions tokenize RWAs. TVL above $3.4B. Bullsem charges through the noise.",
  },
  {
    title: "Meme Heat Returns",
    body: "Solana degen energy is back. The black bull leads the rotation.",
  },
] as const;

export const ROADMAP = [
  {
    phase: "Phase 01 · Launch",
    title: "Fair Launch + Army Raids",
    active: true,
    items: [
      "✓ Fair launch on pump.fun",
      "✓ Initial Ansem Army raids",
      "✓ Community stampede begins",
      "✓ Liquidity burned · contract renounced",
    ],
  },
  {
    phase: "Phase 02 · Dominance",
    title: "Meme Dominance + NFTs",
    active: false,
    items: [
      "→ Raydium migration",
      "→ Bullsem NFT collection drop",
      "→ Meme warfare across Solana CT",
    ],
  },
  {
    phase: "Phase 03 · Expansion",
    title: "CEX + Army Growth",
    active: false,
    items: [
      "→ CEX listings",
      "→ Major community expansions",
      "→ Army raids at scale",
    ],
  },
  {
    phase: "Phase 04 · Legacy",
    title: "The Symbol",
    active: false,
    items: [
      "→ Bullsem becomes the recognized symbol of Ansem Army conviction",
      "→ Black bull. Purple horns. Pure stampede.",
    ],
  },
] as const;
