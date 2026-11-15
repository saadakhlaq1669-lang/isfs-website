"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Progressive enhancement: content is visible without JavaScript. */
export default function AboutReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pending, setPending] = useState(false);
  useEffect(() => {
    const element = ref.current;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || media.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setPending(false); observer.disconnect(); }
    }, { threshold: 0.08 });
    if (element.getBoundingClientRect().top > window.innerHeight) setPending(true);
    observer.observe(element);
    const preference = () => { if (media.matches) { setPending(false); observer.disconnect(); } };
    media.addEventListener("change", preference);
    return () => { observer.disconnect(); media.removeEventListener("change", preference); };
  }, []);
  return <div ref={ref} className={`about-reveal ${className}`} data-pending={pending}>{children}</div>;
}
