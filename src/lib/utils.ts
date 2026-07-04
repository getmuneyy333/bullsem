const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix public asset paths for GitHub Pages subpath deploys. */
export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

export function smoothScrollTo(hash: string) {
  const target = document.querySelector(hash);
  if (!target) return;
  const offset = window.innerWidth >= 640 ? 72 : 56;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
