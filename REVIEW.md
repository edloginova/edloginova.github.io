# Review candidate — 29 October 2026

Status: implemented and checked locally; no public push or deployment.

## Changes

Recovered the six-page static candidate from the supplied starter ZIP. Replaced
the old compiled DeveloperFolio output deliberately on the feature branch, while
preserving the original remote branches and Git history.

Integrated two selected photos: DSC_1745 on About and DSC_1656 on After Hours and
the homepage's After Hours teaser. Exports have 480- and 960-pixel variants,
explicit dimensions and no source EXIF metadata. Originals remain outside Git.
Retained the supplied coast image as a small About accent. Removed unused images,
old colour-theme experiments, photo-wall CSS and the badge on the large portrait.

Navigation now announces its state, focuses the first menu link when opened,
returns focus on Escape and closes after link selection or outside interaction.
When the script is unavailable, the mobile links remain visible in normal flow.
Business links currently reach a distinct contact section and email subject.

## Verification

- `python tools/check_site.py`: six pages; local links, anchors, srcsets, image
  alt attributes, menu controls, sitemap and reduced-motion rule pass.
- `node --check site.js`: passes. Browser console checked with no captured errors.
- All six pages checked in the browser at 320, 390, 768, 960 and 1280 pixels.
  No document overflow, missing visible images or duplicate main headings found.
- Desktop screenshots inspected for Home, About and After Hours; phone views
  inspected for Home, About, After Hours and the expanded navigation.
- Mobile open, Escape/focus return, business-anchor navigation and closed-menu
  state verified through actual browser interactions.
- Simulated script failure using a separate local preview route: navigation
  remains visible, the redundant menu button is hidden and no overflow occurs.
- The browser parses the reduced-motion media rule with animations/transitions
  disabled and smooth scrolling removed. OS-level reduced-motion emulation was
  unavailable; its active runtime behaviour has not been independently exercised.
- Responsive WebP exports verified as readable and without source EXIF metadata.
- GitHub Pages API confirms legacy publishing from `master` at `/`. Remote
  `master` and the backup still point to the original commit.

Browser evidence is retained locally alongside the checkout in `../qa-review/`;
it is excluded from the public static ZIP and repository.

## Factual and external-link checks

The historical employment descriptions, dates and component-speed figure were
cross-checked against the original portfolio source at `origin/main:src/portfolio.js`.
The starter's Dedalus end year was unconfirmed and replaced with its verified
start year. These are historical source checks, not fresh employment attestation
or independent measurement of performance claims.

The [university dissertation record](https://biblio.ugent.be/publication/8769989)
confirms the 2022 doctorate. The
[attention article](https://medium.com/@edloginova/attention-in-nlp-734c6fa9d983),
[research repository](https://github.com/edloginova/neural_mlqa) and
[Teplitsa page](https://te-st.org/about-en/) were retrieved successfully.
The readability article returned 403 to the web reader, and the Medium profile
could not be retrieved there. Their source-backed URLs remain; those responses
do not establish whether an ordinary visitor can open them. LinkedIn was not
independently revalidated.

`https://signalandsense.solutions/` could not be retrieved through the web tool;
a separate HTTPS attempt timed out. It is intentionally absent from live CTAs
until the owner confirms an accessible destination. The business email route is
already available.

## Publication gate

Owner review of the new photo placements and factual copy remains outstanding.
Do not push the feature branch publicly until that review is approved. Then use
the existing Pages branch, check its build and visit the live pages before
reporting publication. Keep the original backup branch intact.
