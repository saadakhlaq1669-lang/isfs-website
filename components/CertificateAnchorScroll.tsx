"use client";

import { useEffect } from "react";

/** Hash scrolling must use the final hydrated grid heights, not their SSR rows. */
export default function CertificateAnchorScroll() {
  useEffect(() => {
    let frame = 0;
    const cancel = () => cancelAnimationFrame(frame);
    const align = () => {
      cancel();
      const started = performance.now();
      let previous = -1;
      let stable = 0;
      const measure = () => {
        if (performance.now() - started > 5000) return;
        const section = document.getElementById("certifications");
        if (location.hash !== "#certifications" || !section) {
          frame = requestAnimationFrame(measure);
          return;
        }
        const pending = Array.from(document.querySelectorAll('.collection[data-measured="false"]')).some(grid => Boolean(grid.compareDocumentPosition(section) & Node.DOCUMENT_POSITION_FOLLOWING));
        const top = section.getBoundingClientRect().top + window.scrollY;
        stable = !pending && document.fonts.status !== "loading" && Math.abs(top - previous) < 0.5 ? stable + 1 : 0;
        previous = top;
        if (stable >= 6) {
          const clearance = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 90;
          window.scrollTo({ top: Math.max(0, top - clearance), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        } else frame = requestAnimationFrame(measure);
      };
      frame = requestAnimationFrame(measure);
    };
    const click = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || (link.target && link.target !== "_self")) return;
      const url = new URL(link.href, location.href);
      if (url.origin === location.origin && url.pathname === location.pathname && url.hash === "#certifications") align();
    };
    const hash = () => { if (location.hash === "#certifications") align(); else cancel(); };
    const key = (event: KeyboardEvent) => { if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", "Escape"].includes(event.key)) cancel(); };
    document.addEventListener("click", click, true);
    window.addEventListener("hashchange", hash);
    window.addEventListener("popstate", hash);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("keydown", key);
    if (location.hash === "#certifications") align();
    return () => {
      cancel();
      document.removeEventListener("click", click, true);
      window.removeEventListener("hashchange", hash);
      window.removeEventListener("popstate", hash);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", key);
    };
  }, []);
  return null;
}
