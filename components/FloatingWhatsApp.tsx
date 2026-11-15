"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

/** Isolated from page grids, RTL inset rules and the shared animated-pill styles. */
export default function FloatingWhatsApp({ href, arabic = false }: { href: string; arabic?: boolean }) {
  const mounted = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);

  return <>
    {/* Lets the final footer text scroll clear of the control without changing it. */}
    <div className="isfs-whatsapp-clearance" aria-hidden="true" />
    {mounted && createPortal(
      <a data-floating-whatsapp className="isfs-floating-whatsapp" href={href} target="_blank" rel="noopener noreferrer" aria-label={arabic ? "طلب عرض سعر عبر واتساب (يفتح في نافذة جديدة)" : "WhatsApp quotation (opens in a new tab)"} dir={arabic ? "rtl" : "ltr"}>
        <svg viewBox="0 0 24 24" width="25" height="25" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-4.9A8.5 8.5 0 1 1 20.5 11.5Z" />
          <path d="m8.1 7.2 1.1-.2 1.1 2.5-1 1c.7 1.5 1.7 2.5 3.2 3.2l1-1 2.5 1.1-.2 1.1c-.2 1.2-1.6 1.5-2.6 1.1-3.3-1-5.5-3.2-6.5-6.5-.4-1 .1-2.1 1.4-2.3Z" />
        </svg>
        <span className="isfs-floating-whatsapp-label" lang={arabic ? "ar" : "en"}>{arabic ? "واتساب" : "WhatsApp"}</span>
      </a>, document.body,
    )}
  </>;
}
