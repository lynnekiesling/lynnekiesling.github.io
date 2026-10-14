# lynnekiesling.com

Source for Lynne Kiesling's academic website. Built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages by a GitHub Action on every push to `main`.

## Updating content

All content lives in `src/_data/*.yaml`. Edit a file, commit, and push; the site rebuilds in about a minute.

| File | What it holds |
| --- | --- |
| `publications.yaml` | Peer-reviewed articles (add new ones at the top of the right year) |
| `books.yaml`, `chapters.yaml` | Books, edited volumes, chapters |
| `projects.yaml` | Working papers and current funded projects (shown on Home and Research) |
| `appointments.yaml` | Current/past appointments, education, awards |
| `leadership.yaml` | Workshops directed, editorial/society roles, advisory roles |
| `policy.yaml` | Policy reports and op-eds |
| `teaching.yaml` | Courses taught and professional service |
| `site.yaml` | Name, emails, footer links, navigation, CV file path |

To update the CV, replace `src/assets/Lynne-Kiesling-CV.pdf` and edit `cv_date` in `site.yaml`.

Colors are defined once at the top of `src/assets/css/style.css` (`--kp-green`, `--kp-gray`). The current values are placeholders; swap in the exact Knowledge Problem logo colors there.

## Previewing locally (optional)

```
npm install
npm start
```

## Custom domain

Not configured yet. When ready to cut over, set the custom domain `lynnekiesling.com` under Settings → Pages in this repo and update DNS at the registrar. See the project spec for the record values. Do not add the domain before DNS is ready, or the github.io address will redirect to the old site.
