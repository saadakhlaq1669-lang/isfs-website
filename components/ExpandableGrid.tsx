"use client";

import { Children, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Keeps the original grid, card markup and row alignment while animating its
 * measured clipping height. Extra cards remain inert while collapsed. */
export default function ExpandableGrid({ children, label, arabic = false, className = "", tone = "dark" }: { children: ReactNode; label: string; arabic?: boolean; className?: string; tone?: "light" | "dark" }) {
  const items = Children.toArray(children);
  const [expanded, setExpanded] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [size, setSize] = useState<{ closed: number; open: number } | null>(null);
  const grid = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const reduced = useReducedMotion();
  const id = useId();
  const margins = className.split(" ").filter(token => /^(?:\w+:)?mt-/.test(token)).join(" ");
  const classes = className.split(" ").filter(token => !/^(?:\w+:)?mt-/.test(token)).join(" ");

  useLayoutEffect(() => {
    const element = grid.current;
    if (!element) return;
    element.dataset.measured = "true";
    const measure = () => {
      const cards = Array.from(element.children) as HTMLElement[];
      const last = cards[Math.min(2, cards.length - 1)];
      if (!last) return;
      const next = { closed: last.offsetTop + last.offsetHeight, open: element.offsetHeight };
      // Next.js resolves hash navigation in layout effects. Clip synchronously
      // before it can read the temporary full grid height during hydration.
      if (!initialized.current && element.parentElement) {
        element.parentElement.style.height = `${next.closed + 24}px`;
        initialized.current = true;
      }
      setSize(previous => previous?.closed === next.closed && previous?.open === next.open ? previous : next);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    for (const card of element.children) observer.observe(card);
    return () => observer.disconnect();
  }, [items.length]);

  return <div className={`expandable-collection ${margins}`}>
    <noscript><style>{".collection[data-measured=false] > :nth-child(n+4) { display:block!important; opacity:1!important; transform:none!important } .collection-item > * { opacity:1!important; transform:none!important }"}</style></noscript>
    <motion.div
      className="collection-viewport -m-3 p-3"
      initial={false}
      animate={{ height: size ? (expanded ? size.open + 24 : size.closed + 24) : "auto" }}
      transition={{ duration: reduced || !toggled ? 0 : 0.46, ease: [0.22, 1, 0.36, 1] }}
      style={{ overflow: "hidden" }}
    >
      <div id={id} ref={grid} data-measured="false" className={`collection relative ${classes}`}>
        {items.map((child, index) => <motion.div
          key={index}
          data-collection-item
          className="collection-item min-w-0"
          aria-hidden={index >= 3 && !expanded && size ? true : undefined}
          inert={index >= 3 && !expanded && size ? true : undefined}
          initial={false}
          animate={{ opacity: index < 3 || expanded ? 1 : 0, y: index < 3 || expanded ? 0 : 10 }}
          transition={{ duration: reduced || !toggled ? 0 : (expanded ? 0.28 : 0.18), delay: reduced || !expanded || !toggled ? 0 : Math.min(Math.max(index - 3, 0) * 0.035, 0.18), ease: "easeOut" }}
        >{child}</motion.div>)}
      </div>
    </motion.div>
    {items.length > 3 && <button type="button" aria-expanded={expanded} aria-controls={id} onClick={() => { setToggled(true); setExpanded(value => !value); }} className={`animated-pill mt-8 min-h-11 rounded-full border px-7 py-3.5 text-[14px] font-bold ${tone === "light" ? "border-cyan-200 bg-cyan-50 text-cyan-700 hover:border-cyan-400" : "border-cyan-400/25 bg-cyan-400/10 text-cyan-300 hover:border-cyan-400"}`}>
      {expanded ? (arabic ? "عرض أقل" : "Show Less") : label}
    </button>}
  </div>;
}
