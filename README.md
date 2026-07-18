# SAFECHAIN 安全鏈 — Forged Link by Link

A premium, bilingual (EN / 繁體中文) single-page brand website concept
for SAFECHAIN, a Taiwan-forged load-chain hardware identity. Cinematic
and restrained: a porcelain-white certificate field, ink typography,
and one seal-vermilion mark.

## Design system

- **North Star** — "The Test Certificate": every surface behaves like a
  calibrated lab document. Full doctrine in `DESIGN.md`.
- **Typography** — Archivo (variable width/weight) for display,
  Instrument Serif for editorial italics, Space Grotesk for technical
  micro-labels, and Noto Sans TC (four weights, subset to the exact
  262 glyphs the copy uses) for Traditional Chinese. All self-hosted.
- **Palette** — porcelain white `#FAFAF7`, ink `#131410`, seal
  vermilion `#E8492B` with deep seal `#B0300F` for small text — the
  red chop that attests a Taiwanese certificate.
- **Imagery** — original dimensioned engineering line drawings
  (interlocked chain links with callouts), not stock photography.
- **i18n** — a nav toggle swaps every string via a `data-i18n`
  dictionary in `script.js`, switches `<html lang>`, retunes CJK
  typography, and persists in `localStorage`.
- **Motion** — scroll reveals (armed only when JS is present), stat
  counters, kinetic marquee, hero parallax; all disabled under
  `prefers-reduced-motion`.

## Stack

Zero dependencies — hand-written HTML/CSS/JS, self-hosted fonts,
nothing external at runtime.

## Deploy

Pushes to `claude/premium-brand-website-korgyl` deploy automatically to
GitHub Pages via `.github/workflows/deploy.yml`.

## Note on content

This is a test-site design. All copy, statistics, certifications and
contact details in both languages are original placeholder content —
replace with real, verified information before production use.
