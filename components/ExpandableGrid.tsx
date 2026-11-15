"use client";

import { useId, useState, type ReactNode } from "react";

export default function ExpandableGrid({ children, label, arabic = false, className = "" }: { children: ReactNode; label: string; arabic?: boolean; className?: string }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  return <div>
    <noscript><style>{".collection--collapsed > :nth-child(n + 4) { display: block; }"}</style></noscript>
    <div id={id} className={`collection ${expanded ? "" : "collection--collapsed"} ${className}`}>{children}</div>
    <button type="button" aria-expanded={expanded} aria-controls={id} onClick={() => {
      if (expanded) document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "instant" });
      setExpanded(!expanded);
    }} className="mt-6 min-h-11 rounded-full border border-current px-6 py-3 text-sm font-bold">
      {expanded ? (arabic ? "عرض أقل" : "Show fewer") : label}
    </button>
  </div>;
}
