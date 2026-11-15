> Restoration update: the original application now lives at the repository root.
> Build, TypeScript, lint and browser checks passed; see RESTORATION.md.
> The recovery history below documents the preceding retrieval work.

# Original source successfully recovered

Authenticated read-only Vercel API requests recovered all **41 of 41 files**
listed under deployment `dpl_Em4kiRg5wRz5DM7Q2ndaAvNY6mbj` → `src`.
The `dpl_` prefix is required by the deployment-file endpoints. The deployment
metadata also resolves `isfs-website.vercel.app` to this exact deployment.

Files are preserved byte-for-byte under `recovery/original-source/`, without
restructuring, cleaning, or merging into the repository root. Every downloaded
file matches the SHA-1 identifier supplied by Vercel; additional SHA-256 hashes
and a complete file inventory are in `recovery/original-source-manifest.json`.
`recovery/isfs-original-source.zip` contains the same 41 files with their relative
paths preserved; its archive integrity check passed.

Recovered original application files include homepage, about, services, contact,
Arabic page and Reveal component, layout/template, global CSS, robots/sitemap,
favicon, and additional top-level about/Arabic page files. Package manifest,
lockfile, Next.js/TypeScript/PostCSS/ESLint configuration, project documentation,
14 public assets, and retained build metadata/empty files are also preserved.
No listed source file failed to download. No .env files or Git history were
listed in the retained source tree; deployment-level secrets/settings are not
part of this source recovery and were not exported.

The original manifest pins Next.js 16.2.6 and React 19.2.4, with Tailwind CSS 4,
TypeScript and Framer Motion. Dependencies have not yet been installed, and
build/runtime behavior has not been tested in this recovery pass. The source
was downloaded directly, not reconstructed from compiled JavaScript.

Only GET requests were used. No production changes, GitHub pushes, deployment
connections, or configuration publications were performed. Credentials were
neither printed nor placed in the recovered source or archive. The temporary
Vercel token can now be revoked if no further API recovery is needed.

## Earlier public recovery findings (superseded where noted above)

# ISFS original source recovery — current findings

## Access and repository

Both https://www.isfsuae.com and https://isfs-website.vercel.app now return
HTTP 200. Their homepage HTML is byte-identical (87,060 bytes). The former
network blocker is resolved. The initial Git repository contained no files,
commits, or objects; no remote references were returned by `git ls-remote`.

## Recovered material

`public/` contains original publicly served files, without image optimization:

- `logo.jpg`
- `about-us.png` (team/site photograph)
- `projects-collage.png`
- `certificate1.jpeg` through `certificate6.jpeg`
- `favicon.ico`

`recovery/pages/` preserves HTML for `/`, `/about`, `/services`, `/contact`,
and `/ar`, plus robots.txt and sitemap.xml. These are all five routes declared
in the public sitemap. Projects and certifications are homepage sections.
`recovery/compiled/` preserves 14 JavaScript chunks and one CSS file from those
pages. These files are compiled deployment output, not original source.
`recovery/manifest.json` records source URLs, HTTP status, local paths, byte
counts, and SHA-256 hashes for successful downloads, including unsuccessful
source-map probes for transparency. Only GET requests were used.

The archive is reference material, not a runnable Next.js project. No package
manifest or dependency lockfile has been recovered. No app build, installation,
or application tests have been claimed. Local file signatures confirm the
recovered assets are JPEG, PNG and ICO files.

## Original source investigation

None of the downloaded JavaScript chunks contains `sourcesContent` or a
`sourceMappingURL` reference. Probing matching `.js.map` and `.css.map` URLs on
the main domain returned HTTP 403. A matching map request to the Vercel alias
also returned HTTP 403 with `x-matched-path: /_next/static/not-found.txt`,
indicating a deployment response rather than the earlier CONNECT denial.
No original TypeScript/TSX source was recovered by these checks. This does not
prove that Vercel has no retained source.

Public HTML and bundles preserve visible content and compiled client behavior,
but cannot establish the original component files, dependency versions, server
handlers, private configuration, or complete source tree. Do not reconstruct
these yet: first inspect the owner's deployment source browser.

## Access needed next

Provide the Vercel dashboard link for the deployment currently serving this
site (including its team/project identity). An account with permission to view
that project's deployment Source/Files is needed; ability to redeploy, change
settings or edit production is not needed for this investigation. No Vercel
secret/variable binding or exported Vercel credential name was present here.
GitHub authentication does not provide Vercel access.

The preferred route is to open that deployment in your signed-in Vercel
Dashboard, inspect its Source view, and provide a downloaded source archive if
available. If no archive download is offered, provide the retained source files
or an original project backup. Include hidden configuration files such as
.gitignore and dependency lockfiles, but exclude .env files, tokens and secrets.
The presence and completeness of retained source must be verified there.

For direct authenticated API investigation, access would need to be configured
securely through environment settings for the relevant Vercel team/project,
with read access to deployment metadata and deployment files. Do not paste a
token in chat. Dashboard/API domains would also need network access; no such
network changes have been made in this investigation. This chat currently has
no shared-browser control tool for a signed-in dashboard session.

## Production and next decision

No production settings, deployment files, form submissions, Git pushes, automatic
deployment connections, or environment configuration changes were made during
this recovery pass. No rebuild was attempted. Original-source recovery remains
pending Vercel deployment source inspection; reconstruction is not yet justified.
