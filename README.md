# Yiting Gao

Personal academic website for Yiting Gao, built as a lightweight static site and configured for GitHub Pages.

Live site:

```text
https://yitinggao-miao.github.io
```

## Overview

This site presents Yiting Gao's academic profile, research interests, education, and publications. It is intentionally simple: plain HTML, CSS, and JavaScript, with no build step or package manager required.

## Structure

```text
.
├── index.html                  # Page content and section structure
├── styles.css                  # Visual design and responsive layout
├── script.js                   # Mobile navigation and active section state
├── IMG_0229.jpg                # Profile photo
├── research-visual.png         # ESR-STM and quantum dot visual asset
├── photos/                     # Original travel photos
├── .nojekyll                   # Keeps GitHub Pages from applying Jekyll processing
└── .github/workflows/pages.yml # GitHub Pages deployment workflow
```

## Local Preview

Open `index.html` directly in a browser, or run a small local server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Editing

Most content updates happen in `index.html`:

- Update the biography and contact links in the Home section.
- Add publications under the `#publications` section.
- Edit research interests under the `#research` section.
- Update education details under the `#education` section.
- Update the Bio travel carousel by adding JPEG images under `photos/` and editing the `data-photos` list.

Design changes belong in `styles.css`. The only JavaScript behavior is the responsive navigation in `script.js`.

## Deployment

The site deploys through GitHub Actions whenever changes are pushed to `main`.

GitHub Pages settings:

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

If the first workflow run fails with `Get Pages site failed`, open the repository on GitHub and set:

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

Then rerun the failed workflow.

To publish updates:

```bash
git add .
git commit -m "Update website"
git push
```

## Notes

The canonical URL and sitemap currently assume the GitHub Pages repository will be:

```text
yitinggao-miao.github.io
```
