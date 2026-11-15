# About-only HTML and photography update

The brochure image is no longer rendered on either homepage About section or
the standalone About page. The original public/about-us.png file is preserved,
but no application image or About social preview points to it.

## Information retained from the original company profile

- UAE engineering/technical services background and waterproofing/surface
  protection specialization for residential, commercial and industrial work.
- Establishment in Ajman in 2005 as Al Hadaf General Maintenance LLC.
- Rebranding in Dubai in 2023 as ISFS Technical Services LLC.
- Company experience rooted in those beginnings, modern application methods,
  skilled teams and quality control.
- Commitment to reliable workmanship, durable protection and client satisfaction.
- Consultation, project planning, completion, after-service support and long-term
  client relationships.

These are company-profile statements, not newly independently verified claims.
The outdated numeric experience badge inside the brochure is expressed as
experience since the stated 2005 beginnings, rather than inventing a new count.
The standalone page retains its prior sector and documentation/support lists.
English and Arabic use the same reusable structure with matching localized copy.

## Layout and images

The new About content uses actual HTML headings, paragraphs and a semantic
2005/2023 timeline. It removes the old company-history/portfolio-count statistic
boxes from About. No new statistics are introduced. Navy, white and cyan styling
is scoped to this section, with a balanced text/photo feature, compact timeline
and readable experience, quality and client-support columns.

Three individual photographic views are cropped with CSS from the existing
projects-collage.png. No image pixels were changed, generated or retouched. No
photograph was assigned to an unverified named project or completion outcome.
The photographs have constrained aspect ratios and descriptive localized alt
text rather than being displayed as a large document.

AboutReveal progressively enhances scroll reveals: offscreen content fades and
moves by 12px when entering view. Content remains visible without JavaScript,
and reduced-motion users receive no reveal movement. Preference changes are
handled without leaving content hidden.

## Scope and validation

The homepage content before About and after About was compared with the previous
commit and is unchanged (apart from the About import). Navigation, forms, service
and project collections, statistics, certificate cards, expansion animations,
original assets, robots, sitemap, canonicals and shared SEO configuration remain
unchanged. Only the About page's social image now uses project photography.

Production build, TypeScript, ESLint and rendered SEO checks pass. Responsive
browser checks cover six widths from 320px to 1440px, including no brochure image,
all three project-photo views loading, factual HTML text, both timeline years,
RTL, normal scroll reveals, reduced motion and existing site functionality.
Mobile/desktop screenshots were visually reviewed; local evidence is stored at
/workspace/isfs-about-validation/ and is not committed.

Deployment is Preview only, through development/seo-improvements. No production
promotion, branch-setting change or merge is authorized or performed.
