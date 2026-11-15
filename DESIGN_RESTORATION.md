# Original design restoration with targeted improvements

## Baseline and preservation

The confirmed visual baseline is **758c48df4708f1bc92188f97d3efc117a8eb8473**,
the parent of the usability redesign. That commit contains the recovered original
appearance and the approved SEO changes.

Before editing, the complete redesign commit
**cd38ba22188c408866f05c889ad3e0a73e04a900** was preserved on local branch
**archive/usability-redesign-cd38ba2**. It also remains in the development branch's
Git history on GitHub. No original backup/archive has been overwritten.

## Restored, rather than redesigned

Home, Arabic, About, Services, Contact and the base stylesheet were restored
from 758c48d before applying the limited changes below. This returns the original
hero, photographic collage, company-profile image, About composition, decorative
backgrounds, typography, desktop section padding, colour scheme, project-card
layout, contact panels, and certificate image frames/hover treatments.

No image was removed, replaced, edited or re-encoded. The entire public/ tree
matches the baseline. The original ten project names, services and locations
and all English/Arabic service descriptions remain. Projects use their original
card presentation; the later plain project-brief layout is no longer rendered.
The About page is its original design, not the rejected new hero/timeline layout.

## Retained, narrow improvements

- Working keyboard-accessible English/Arabic mobile navigation, RTL, Escape
  dismissal, focus return/containment and body-scroll cleanup. The shared header
  uses the original full-width spacing, branding, type and colours, with tablet
  navigation using the mobile menu where the desktop links would not fit.
- Consistent Request a Quotation actions, WhatsApp destinations and localized
  draft-form validation/handoff. Contact retains a quotation form; homepage forms
  remain in their original contact-panel positions and visual treatment.
- Unsupported 500+/100+ project totals remain removed. The original statistic
  card designs now describe actual portfolio entries and services listed.
  History is explicitly company-provided. No new outcomes, dates or clients
  are asserted.
- All six actual certificate names, issuers, types and printed dates remain,
  integrated into the original 220px scan frames and light caption panels.
  Full-size original scans remain available. No current-validity claim is made.
- Expandable service, project and certificate collections use the original grid
  classes and original service/project card markup. No new card redesign is
  introduced. Extra cards remain in HTML, are inert while collapsed, and become
  accessible when opened. An initial three-card view limits mobile page length.
- Targeted small-screen heading sizing and 16px form inputs prevent overflow and
  unwanted mobile input zoom; original desktop type/spacing remain intact.

## Expansion behaviour

The collection's measured height animates in both directions over 460ms with a
soft ease-out curve. Newly revealed card wrappers fade in and lift gently over
280ms, staggered by 35ms (capped at 180ms). Closing fades cards out while height
contracts. There is no instant scroll-to-top on collapse. ResizeObserver updates
the measured heights for viewport, image and content changes. Reduced-motion
users get immediate height/opacity changes and no nested card transforms.

## SEO and source preservation

app/layout.tsx, app/page.tsx, app/robots.ts, app/sitemap.ts, lib/seo.ts, and public/
are unchanged from 758c48d. Canonicals, sitemap, robots, reciprocal homepage
hreflang, structured data, Arabic support and the official domain are preserved.
The source restoration is forward work on development/seo-improvements; no
branch reset, force push, merge, production promotion or production-setting
change is involved.

## Validation and preview

Required checks: production build, TypeScript, ESLint and the existing generated
SEO checks. Playwright covers six widths (320, 375, 390, 768, 1024, 1440px), both
languages, all pages, keyboard/mobile navigation, images, quotation draft URLs,
collection visibility, full-size certificate scans and original project details.
Frame-by-frame motion tests verify intermediate opening/closing heights and
staggered opacity under normal motion; the other tests use reduced motion.

Screenshots of the restored About page were inspected at 390px and 1440px. Local
screenshots/reports/traces remain outside Git or ignored. Original certificate
transcription limits and owner review needs remain documented in UX_AUDIT.md;
its visual-redesign description is historical, superseded by this document.

Only the development branch will be pushed to trigger the configured Vercel
Preview integration. The commit, Preview readiness and unchanged production
branch/deployment will be checked through read-only Git/Vercel operations.
