# Kate Loginova — personal website

Six static pages for Kate's personal website, separate from Signal & Sense.
Plain HTML, CSS and a small navigation script; no installation or build step.

## Preview and checks

Open `index.html` directly, or run from this directory:

```sh
python -m http.server 8766 --bind 127.0.0.1
python tools/check_site.py
node --check site.js
```

The public files are the six HTML pages, `style.css`, `site.js`, `assets/`,
`robots.txt`, `sitemap.xml` and `.nojekyll`. Create a clean static ZIP with:

```sh
python tools/package_site.py ../kate-personal-site-review.zip
```

## Content and photography

Keep the typography-led homepage, Neon Noir colours, restrained hexagonal
motifs and raccoon signature. The novel is private; do not publish its content.
About and After Hours use selected, metadata-free WebP derivatives at 480 and
960 pixels wide. Original photos and review contact sheets stay outside Git.

Signal & Sense's domain could not be verified during this continuation. The
business links currently reach a separate business contact section and an email
with a business-specific subject. Restore the external URL after verification.

The original portfolio supports the historical work descriptions. The Dedalus
end year was removed because the starter's 2026 date was unconfirmed. Publication
still requires owner review of the new photography and factual content.

## GitHub Pages and rollback

Verified on 29 October 2026: GitHub Pages uses `master`, directory `/`, with
legacy branch publishing. Updating `main` will not publish this candidate.
The working branch is `codex/personal-neon-noir`; it is for local review first.

The original site remains at commit
`22e9c039dd0a7b823316f9e80dd9e984f6b72b2a` on
`backup-before-personal-redesign-2026-10-29`. Its old React source remains on
`origin/main`. The deliberate replacement removes the obsolete compiled assets
from the new release; Git history and the backup preserve them.

After owner approval, push the feature branch, merge its reviewed contents into
`master` and verify both the GitHub Pages build and live URL. Do not merge the old
`main` build workflow into this static site. A release can be rolled back by
reverting its merge/replacement commit on `master` with a normal commit and
verifying the subsequent Pages build. Do not force-push or delete the backup.
