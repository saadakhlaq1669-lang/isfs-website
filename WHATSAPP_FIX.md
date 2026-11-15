# Targeted floating WhatsApp fix

## Cause

At 1440px, the old English anchor computed to position:relative and width:1440px.
The unlayered .animated-pill rule overrides Tailwind's layered fixed utility.
The fix deliberately leaves that shared rule untouched so other controls retain
their approved design and behaviour.

## Changes

- Replaced only the two homepage floating anchors with FloatingWhatsApp.
- A client portal places the anchor directly under body, outside page grids,
  transforms and RTL layout containers. A hydration-safe snapshot avoids rendering
  a browser-only portal on the server.
- Dedicated CSS fixes the physical right/bottom offsets in both languages,
  explicitly constrains dimensions and prevents icon shrinkage or clipping.
- Mobile: 56px circular target. Tablet/desktop: compact labelled pill, capped at
  180px. Safe-area insets are included in the 16px right and 20px bottom spacing.
- A small end-of-page clearance after the existing footer lets its final text
  scroll above the control. Footer markup, styling and content are unchanged.
- The navigation's higher stacking order keeps this control from covering the
  mobile menu. Only one floating control is mounted for the active page.
- Added a 320ms entrance and subtle hover lift/scale. Reduced-motion preferences
  disable movement. Keyboard focus styling and new-tab labels are preserved.
- The original number (971506752786) and exact quotation message are unchanged.

## Verification

Production build, TypeScript, ESLint and generated SEO checks passed. All 48
responsive browser tests passed across 320, 375, 390, 768, 1024 and 1440px.
New checks cover both locales, fixed positioning, compact bounds, icon containment,
right/bottom offsets, visibility while scrolling, footer clearance, actual click
and popup wiring, and precedence of the mobile menu. WhatsApp popup requests are
intercepted at browser-context level; no actual message is sent.

A supplementary browser frame recording verified intermediate entrance opacity
and hover movement with normal motion. Arabic mobile was also checked with
reduced motion: animation disabled and hover transform absent. Control screenshots
were visually inspected and remain outside Git at /workspace/isfs-whatsapp-validation/.

Everything before the floating-control marker in each homepage was compared
against the prior commit and is unchanged apart from the new component import.
No navigation, contact, footer, About, collection, certificate, image or shared SEO
redesign is included. Deployment is Preview only via the development branch.
