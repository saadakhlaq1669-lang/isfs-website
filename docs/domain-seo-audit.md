# Canonical domain audit — 16 November 2026

## Live findings

- `https://www.isfsuae.com` and `https://isfs-website.vercel.app` return HTTP 200 with byte-identical HTML on `/`, `/ar`, `/about`, `/services`, and `/contact`. The old domain does not redirect.
- The official site's five pages already have correct HTTPS www canonicals, Open Graph URLs, unique titles/descriptions, and Organization structured data. English/Arabic home hreflang references are correct. Other pages have no invented translations.
- Sitemap entries and robots.txt's sitemap reference use the official domain. Important pages allow indexing; Googlebot receives their rendered HTML. Missing pages return 404 with noindex.
- Internal navigation uses relative URLs or the official HTTPS domain, with no old Vercel-domain links. Relative links resolve on the official domain after redirection; they need no content changes.
- All five favicon/Apple icon responses match the approved ISFS icon assets. Old Google branding can remain cached; its current search presentation and Search Console status were not independently inspected.
- `https://isfsuae.com` currently returns a temporary 307 to `https://www.isfsuae.com`, preserving tested paths. The www destination returns 200 without redirecting back. This release does not change the apex configuration.

## Proposed change

Based on the deployed favicon release `f344d2b1e085cda0d8bd024f88511f2b8626e68d`, add one Next.js permanent (308) redirect conditional on the exact host `isfs-website.vercel.app`. All paths go to the equivalent `https://www.isfsuae.com` path, with query values retained. The domain's dots are escaped to avoid matching lookalike hosts.

This does not redirect the official domain, localhost, or other Preview hosts. It changes no page content, design, metadata, icons, DNS, production branch settings, or Vercel aliases. Do not block crawling of the old host: crawlers need to see the redirect.

## Completed pre-deployment validation

- Production build, TypeScript (`tsc --noEmit`), and lint passed.
- `tests/verify_domain_redirect.py` passed against the built production server: home, English/Arabic routes, nested missing paths, robots, sitemap, images/icons, repeated query keys, escaped query characters, and Arabic query values.
- Official-domain, localhost, Preview-host, and lookalike-host requests bypass the redirect and serve HTTP 200 on the tested existing pages/icons. There is no application redirect back to the old host.
- `tests/verify_seo.py` passed against both live www and the local release.
- All five local page bodies, styles, images, links, and ISFS icon responses matched the saved live baseline.

## Release gate — not deployed

After the environment credential update, authenticated read-only project, domains, alias, and deployment API requests succeeded. Verified against the existing project `prj_nKQf93ujzn7gqFjbdqH1Ri8xSzZp`:

- Current Production deployment: `dpl_5QD9DMtE1sF5nQuLvFgP4m6zpPid`, READY, Git SHA `f344d2b1e085cda0d8bd024f88511f2b8626e68d` in both deployment source and commit metadata.
- Both `www.isfsuae.com` and `isfs-website.vercel.app` aliases point to that deployment. Both are verified project domains with no configured domain redirect.
- `isfsuae.com` is verified and redirects to `www.isfsuae.com`. Public HTTP checks confirm that this is currently a 307 preserving tested paths/query values. No change to that setting is included.
- Production branch configuration remains `recovery/original-isfs-website`.
- The redirect release's base is exactly the current live Git SHA. The release changes only `next.config.ts`, a redirect regression test, and this audit. No page, asset, dependency, or metadata changes are included. Unpublished development commit `ebd7360` is not an ancestor of this release.

The configuration check found no redirect back to the old host and no loop conflicting with the proposed host-specific rule. Obtain the user's release approval before deploying. No branch was pushed and no Preview or Production deployment was created by this audit. Recheck the live deployment SHA immediately before an approved release; if production has changed, stop and rebase the isolated change onto the new live version rather than replacing it with this baseline.

After approval, deploy this isolated change through the existing ISFS project without changing production branch configuration. Verify public old-domain requests return 308 to www with paths/query values retained, and that www pages, SEO routes, and icons still return 200. Confirm that Vercel actually assigned the new deployment to the old project alias too; public verification is required even if a deployment is READY.

Then submit the official sitemap in Google Search Console and request indexing of the official homepage and important pages. Google controls recrawl timing and search-result branding; updates are not immediate or guaranteed by a deployment.
