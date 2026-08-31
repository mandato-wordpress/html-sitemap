# HTML Page Sitemap — working notes for Claude

WordPress plugin that renders an HTML (not XML) sitemap of pages via the
`[html_sitemap]` shortcode and the HTML Sitemap block.

## Responding to GitHub pull request feedback

When feedback arrives on a pull request — review comments, review-bot findings,
or CI failures — **do not push changes straight away**. Instead:

1. Investigate the feedback and determine what is actually needed.
2. Outline the recommended change(s) here in the conversation: what the feedback
   says, whether it is valid, and the specific fix proposed for each item.
3. Wait for a decision on what to act on.
4. Implement only what is approved, then commit and push.

## Layout

- `html-sitemap.php` — main plugin file: shortcode handler, constants, activation hook.
- `html-sitemap-admin.class.php` — `HtmlSitemapAdmin` singleton, admin-only (block
  registration, dashboard review notice).
- `src/html-sitemap-block/` — block source; `build/` holds the compiled output
  (`npm run build`) and is committed.
- `readme.txt` — WordPress.org readme. `CHANGELOG.md` — full change log.

## Conventions

- Version bumps touch the `html-sitemap.php` header, `readme.txt` (`Stable tag`
  and a `= x.y =` changelog entry with a release date), and `CHANGELOG.md`.
  Unreleased work is recorded under `## [Unreleased]` in `CHANGELOG.md` only.
- Follow the existing style in each file: tabs in `html-sitemap.php`, four spaces
  in `html-sitemap-admin.class.php`.
- Escape all output (`esc_html_e`, `esc_attr`, `esc_url`) and sanitize all input.
- Files excluded from the distributed plugin are listed in `.distignore`, and
  mirrored as `export-ignore` entries in `.gitattributes`.
