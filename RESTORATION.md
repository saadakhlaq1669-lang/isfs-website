# Original ISFS project restoration

The original source was retrieved using read-only Vercel deployment-file APIs
from `dpl_Em4kiRg5wRz5DM7Q2ndaAvNY6mbj`. All 41 retained source files passed
verification against Vercel's SHA-1 identifiers, with additional SHA-256 hashes
recorded in the local recovery manifest.

## Backups

Before restoring, a separate verified backup was saved at
`/workspace/isfs-recovery-backup/`: original-source/, original-source-manifest.json,
and isfs-original-source.zip. The existing recovery/original-source/ and ZIP
inside this checkout also remain unchanged. These local backup paths are not
committed; preserve or download the ZIP separately for storage outside this
cloud workspace. The Git commit contains the restored application.

## Local development

Use Node.js 24 (validated with 24.22.1) and npm:

```sh
npm ci --cache /tmp/isfs-npm-cache --no-audit --no-fund
npm run dev
```

For production validation:

```sh
npm run build
npx tsc --noEmit
npm run lint
npm run start
```

The writable npm cache override is needed in this cloud environment. Production
startup was verified on port 3000. No environment secrets are needed to build
or serve the recovered application. The Vercel recovery credential is not used
by the application and must not be committed.

## Minimal restoration changes

- Added .gitignore for dependencies, build outputs, local secrets and recovery
  archives. Generated next-env.d.ts and tsbuildinfo are not committed.
- Excluded recovery/ from TypeScript and ESLint to avoid checking duplicate
  preserved source and compiled website archives.
- Made the original Arabic page's English language link visible on mobile;
  it previously disappeared below the md breakpoint, preventing return navigation.
- Removed two empty deployment-upload artifacts (next and isfs-website@0.1.0)
  from the publishable project; unchanged originals remain in both local backups.
- Removed trailing whitespace from the retained top-level about/page.tsx copy.
- Kept original dependencies, package lock, content, assets, and visual styling.
  Additional top-level about/ and ar/ source copies remain preserved as recovered;
  the active Next.js routes live under app/.

## Validation

- Frozen dependency installation passed; package-lock.json unchanged.
- Production build passed, including static rendering of all five content routes.
- Explicit TypeScript no-emit check and ESLint passed without diagnostics.
- Headless system Chromium checked /, /ar, /about, /services and /contact at
  1440px and 390px: HTTP 200, all rendered images loaded, six certificate images
  on each homepage, Arabic main content RTL, no horizontal overflow or uncaught
  JavaScript errors. Full-page screenshots were captured outside the checkout
  at /workspace/isfs-validation/.

- Post-fix interaction checks passed at 320, 390, 768 and 1440 pixels:
  English/Arabic switching, English mobile menu open/close, navigation to about,
  services and contact, project/certificate anchors, and WhatsApp inquiry URL
  generation with window.open stubbed. No external submission occurred.

## Existing integration boundaries

The English inquiry form generates WhatsApp or email links; the Arabic form uses
mailto. There is no recovered server-side inquiry API. URL generation can be
checked locally, but actual message/email delivery depends on the user's apps
and is not verified by these checks. External Google Maps and messaging services
require network access; external requests were blocked during interaction tests
so no real inquiry could be sent. No Vercel deployment, production configuration
change, Git push, or automatic deployment connection was made.
