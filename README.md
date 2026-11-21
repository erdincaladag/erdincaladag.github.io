# erdincaladag.github.io

Personal academic website of Erdinç Aladağ — <https://erdincaladag.github.io>

Built with Jekyll and published by GitHub Pages straight from the `master` branch (no build step needed).

## Where to edit things

| What | File |
|---|---|
| Name, title, affiliation, profile links | `_config.yml` → `author:` |
| Bio and research-interest tags (home page) | `_pages/about.md` |
| Publications | `_data/publications.yml` (`selected: true` = shown on the home page; upload each PDF to `files/` with the name given in `pdf:`) |
| Talks | `_data/talks.yml` |
| News (home page + /news/) | `_data/news.yml` (newest first) |
| Notes — figures, code, short write-ups | `_posts/` (copy the template in `_drafts/example-note.md`) |
| Students | `_data/students.yml` |
| Courses | `_data/teaching.yml` |
| CV page | `_data/cv.yml`; upload the PDF as `files/CV.pdf` and set `show_pdf: true` |
| Menu | `_data/navigation.yml` |
| Colours / layout | `assets/css/site.css` (variables at the top; dark mode under `[data-theme="dark"]`) |

## Research metrics

`_data/metrics.yml` is refreshed every Monday by the GitHub Action in
`.github/workflows/update-metrics.yml`, using the free OpenAlex API and the ORCID in `_config.yml`.
Run it any time from **Actions → Update research metrics → Run workflow**.
To show Google Scholar numbers instead, edit the file by hand and disable the workflow.

## Local preview (optional)

```bash
bundle install
bundle exec jekyll serve
```
