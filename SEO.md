# ISFS SEO audit and implementation

## Main finding

Read-only live requests on 15 November 2026 returned HTTP 200 for the custom
site homepage and Arabic page, with `index, follow` and no X-Robots-Tag noindex.
However, the custom domain's canonicals point at isfs-website.vercel.app.
Its robots.txt advertises the Vercel-hosted sitemap, and all five sitemap entries
also use that hostname. These are conflicting domain-selection/discovery signals
that can make Google prefer the Vercel hostname. The site owner additionally
confirmed five Google Search Console "URL not allowed" errors for this sitemap:
all five entries belong to the Vercel hostname instead of the sitemap host.
The generated sitemap now contains only the five official custom-domain URLs.
These sitemap errors do not establish the indexing status of individual pages.
No hard crawl prohibition was observed.

The non-www HTTPS hostname redirected to https://www.isfsuae.com/ during the
check. The Vercel alias independently serves HTTP 200. No live configuration was
changed, and the authenticated Search Console dashboard has not been accessed directly;
the five sitemap errors above were reported by the site owner.

## Implemented on development/seo-improvements

- Centralized the canonical HTTPS origin at https://www.isfsuae.com in lib/seo.ts.
- Added unique titles/descriptions, self-canonicals, Open Graph URLs/locales and
  Twitter descriptions/images to all five content routes.
- Moved the unchanged interactive English homepage into app/Home.tsx, with a
  server page wrapper to export statically rendered page metadata.
- Added reciprocal en/ar and x-default alternates for / and /ar, in both HTML
  and sitemap.xml. About, services and contact have no standalone Arabic
  equivalents, so they do not claim the Arabic homepage is their translation.
- Changed robots.txt to advertise the custom-domain sitemap while allowing
  page, JavaScript, CSS and image crawling.
- Changed sitemap.xml to list all five canonical custom-domain routes. Removed
  artificial rebuild timestamps; add lastModified only when real content dates
  are maintained. Removed unnecessary priority/changeFrequency hints.
- Added server-rendered Organization JSON-LD. Verified against the existing
  company/contact content: company name, logo, both public telephone numbers,
  email, and UAE service area. No invented street address, hours, registration
  number, social profiles or reviews. This does not claim eligibility for a
  LocalBusiness rich result or replace a Google Business Profile.
- Improved logo, company-profile graphic and certificate alt descriptions;
  annotated the Arabic main content with lang=ar while retaining RTL.
- Verified one H1 per content page and no skipped heading levels; preserved
  the existing visible heading text and hierarchy.
- Matched responsive image sizes more closely to their displayed widths, added
  missing sizes for the about-page image, and prioritized discovery of the
  homepage hero photographs. Below-fold images and map embeds remain lazy.
  No measured Core Web Vitals or ranking improvement is claimed.

## Validation

All required checks passed:

```sh
npm run build
npx tsc --noEmit
npm run lint
# With the built server running on port 3001:
npm run start -- --hostname 127.0.0.1 --port 3001
python3 tests/verify_seo.py http://127.0.0.1:3001
```

The production build prerenders all five content pages. The reusable Python
check verifies the generated HTML, unique metadata, canonicals, Open Graph URL
and locale, reciprocal homepage alternates, valid JSON-LD and expected company
fields, heading hierarchy, nonempty image descriptions, robots/sitemap agreement,
404 noindex handling, and HTML returned for a simulated Googlebot user agent.
A simulated user agent does not establish access from Google's real crawlers.

Headless Chromium checks passed on /, /ar, /about, /services and /contact at
1440px and 390px: every rendered image loaded, six certificate images on both
homepages, correct Arabic RTL, no horizontal overflow, and no uncaught JavaScript
errors. Interaction checks passed at 320, 390, 768 and 1440 pixels: language
switching, mobile menu, internal page/section navigation, and inquiry URL
formation. External requests were intercepted during interaction checks; no
actual inquiry was sent. Screenshots are local at /workspace/isfs-seo-validation/.

## Remaining indexing work after a separately approved deployment

1. Verify these generated tags and custom-domain sitemap on the deployed site.
   No source change can alter the current live metadata without deployment.
2. In the Vercel/domain settings, review a permanent redirect from the Vercel
   alias to the canonical custom hostname if supported and appropriate for this
   project. No hostname redirect or production setting was changed here.
3. Verify the domain in Google Search Console, submit the custom-domain sitemap,
   and inspect the five important URLs. Check Google's selected canonical,
   indexing exclusions, crawl errors, security issues and manual actions there.
   This task had no Search Console access and cannot establish their status.
4. Allow time for recrawling. Indexing is Google's decision and is not guaranteed
   by metadata or structured data. Evaluate mobile field Core Web Vitals after
   deployment; browser layout checks do not substitute for field performance data.

No deployment, merge, Git push, automatic deployment connection or live Vercel
change was performed. Original recovery backups and the dependency lockfile
remain unchanged.
