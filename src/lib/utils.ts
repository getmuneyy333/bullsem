export function smoothScrollTo(hash: string) {
  const target = document.querySelector(hash);
  if (!target) return;
  const offset = window.innerWidth >= 640 ? 72 : 56;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
