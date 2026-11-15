> Historical redesign audit for cd38ba2. Its visual changes have been superseded
> by the original-design restoration; see DESIGN_RESTORATION.md. Certificate
> transcriptions and evidence limitations below still apply.

# Mobile and desktop review

## Scope and evidence

Changes are on development/seo-improvements, for Preview only. Original source
and recovered archives remain preserved. Production branch/settings were not
changed. The owner confirmed that there is no approved project total or complete
set of completion records, and authorized neutral wording where evidence is missing.

Sources reviewed: recovered English/Arabic source, company profile about-us.png,
project collage, all six original certificate scans (visually inspected, with OCR
as a transcription aid). These establish what the supplied material says; they
are not independent verification of project completion or issuer status.

## Findings and changes

- Replaced inconsistent headers with one shared navigation system on all five
  pages. Both languages have a mobile menu, quotation action, complete navigation,
  focus containment, Escape close, focus return and body-scroll cleanup. Desktop
  navigation starts at 1024px so tablet widths are not overcrowded.
- Reduced large mobile section spacing and oversized headings. Service lists,
  project briefs and certificate records initially show three entries, with clear
  expand/collapse controls. All content stays in the HTML, and a no-JavaScript
  fallback exposes the full collections. Supplemental service lists use native
  disclosure controls instead of another long repeated stack.
- Redesigned About with project imagery, concise introduction, company-provided
  2005/2023 timeline, optional full company profile, sector cards and a quotation
  CTA. The profile image is no longer a full-height mobile hero.
- Removed unsupported 500+/100+ delivered-project totals and repeated numerical
  experience badges. Shared statistics now count the actual 10 portfolio entries
  and six certificate scans, with labels explicitly describing those records.
- Retained all 10 company-provided project names, locations and listed scopes in
  a shared bilingual dataset. Project briefs offer scope disclosures and a
  scope-specific quotation link. No completion dates, costs, outcomes, client
  endorsements or photo-to-project associations were invented. Full outcome-led
  case studies remain dependent on owner-supplied completion evidence.
- Replaced generic certificate numbers with manufacturer, system, document type
  and printed dates. Original scans can be opened at full size. Training and QMS
  records are no longer labelled as applicator certificates. No current approval
  or accreditation status is asserted.
- Added one localized quotation form to English/Arabic homepages and Contact.
  The primary navigation takes visitors directly to a quotation form. Required
  fields use native validation; optional location/email improve the inquiry.
  Original service options remain available on each homepage. Values stay in the
  form after opening a draft. WhatsApp/email handoff is explicit; no misleading
  "sent successfully" message or backend delivery claim is shown.
- Kept the existing dark/cyan visual language, English/Arabic content, original
  images, phone/email/WhatsApp destinations, SEO canonicals and static rendering.

## Certificate transcription and review needs

| Scan | Visible issuer and document | Printed dates / limitations |
| --- | --- | --- |
| certificate1.jpeg | Royal Industries — Approved Applicator Certificate, NEO Membrane Waterproofing | 16 Nov 2025–16 Nov 2026; issuer status not independently checked |
| certificate2.jpeg | Sheridan Specialized Products — Approved Applicator Certificate, Wet Area Waterproofing | 02 Oct 2024–02 Oct 2025; printed end date is in the past |
| certificate3.jpeg | Royal Industries — Approved Applicator Certificate, Crack Injection System | 16 Nov 2025–16 Nov 2026; issuer status not independently checked |
| certificate4.jpeg | LEMS — Certificate of Registration, ISO 9001:2015 QMS | Printed certificate expiry 02 Jun 2025; separate recertification-due date 02 Jun 2027 does not override that expiry |
| certificate5.jpeg | Henkel Polybit — Training Certification, Polyflex + Bituplus torch-applied membranes | Issued 02 May 2023; no expiry printed; employee training record, not blanket current company approval |
| certificate6.jpeg | SOPREMA — Certificate of Approved Applicator, Conventional Torch-Applied Waterproofing System | Issued 01 Jan 2026; scan states one-year term; no independent issuer check |

Review needs: refreshed Sheridan and LEMS records, and renewal/status confirmation
for the Royal records whose printed end date is 16 November 2026. Company history
is labelled company-provided. Named project entries remain company-provided
portfolio information rather than independently verified completion claims.
The English source has 19 service entries and Arabic has 18; existing translations
were preserved, without creating new unsupported service content.

## Validation

- Frozen npm installation, production build, TypeScript no-emit and ESLint checks.
- Playwright regression suite: 24 tests across 320, 375, 390, 768, 1024 and 1440px.
  Covers all five routes, responsive overflow, mobile menu, language switching,
  keyboard focus and Escape, quote anchors, collection expansion, all six scan
  images, project scopes, localized form validation and draft-URL generation.
- Existing SEO checks validate rendered metadata, canonicals, hreflang, sitemap,
  robots, structured data, heading hierarchy and missing-page handling.
- External messaging/map requests are intercepted in browser tests. No real
  inquiry is sent. This does not verify delivery through WhatsApp/email apps or
  Google Maps availability.
- At 390×900, initial page height fell from baseline screenshots of 20,045px to
  11,174px (English) and 18,253px to 10,167px (Arabic), approximately 44% shorter
  with collections collapsed. This measures initial section length, not loading
  speed, search ranking or conversion rate. Original records remain expandable.
- About screenshots were inspected at mobile and desktop widths. Local evidence:
  /workspace/isfs-ux-validation/. Reports/traces are excluded from Git.

Reproduce after npm ci and npm run build:

```sh
npm run test:responsive
# Uses system Chromium at /usr/bin/chromium in this environment.
# Else set CHROMIUM_PATH to an installed Chromium executable.
npm run start -- --hostname 127.0.0.1 --port 3003
python3 tests/verify_seo.py http://127.0.0.1:3003
```

Only the development branch is to be pushed for its configured Vercel Preview
integration. Deployment readiness and URL are verified through read-only Vercel
API requests after the push. No merge or production promotion is authorized.
