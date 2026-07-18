---
name: SAFECHAIN 安全鏈 — Forged Link by Link
description: Porcelain-white single-page brand site where typographic precision stands in for metallurgical precision.
colors:
  porcelain-white: "#FAFAF7"
  raised-porcelain: "#F1F0EA"
  warm-porcelain: "#F4F3EE"
  ink: "#131410"
  ink-body: "#131410C2"
  ink-muted: "#1314109E"
  hairline: "#13141024"
  hairline-soft: "#13141012"
  seal-vermilion: "#E8492B"
  deep-seal-vermilion: "#B0300F"
typography:
  display:
    fontFamily: "Archivo, Noto Sans TC, sans-serif"
    fontSize: "clamp(2.9rem, 7.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 116, 'wght' 800"
  headline:
    fontFamily: "Archivo, Noto Sans TC, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.5rem)"
    fontWeight: 780
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 116, 'wght' 780"
  body:
    fontFamily: "Archivo, Noto Sans TC, sans-serif"
    fontSize: "1rem"
    fontWeight: 420
    lineHeight: 1.6
  serif-accent:
    fontFamily: "Instrument Serif, Noto Sans TC, serif"
    fontWeight: 400
  label:
    fontFamily: "Space Grotesk, monospace"
    fontSize: "0.8rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  focus: "3px"
  card: "14px"
  section-cap: "20px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 5vw, 72px)"
  section: "clamp(72px, 12vh, 140px)"
  nav: "72px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.warm-porcelain}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.deep-seal-vermilion}"
    textColor: "#FFFFFF"
  button-ghost:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.warm-porcelain}"
  card-step:
    backgroundColor: "{colors.porcelain-white}"
    rounded: "{rounded.card}"
    padding: "clamp(24px, 3vw, 40px)"
---

# Design System: SAFECHAIN 安全鏈 — Forged Link by Link

## 1. Overview

**Creative North Star: "The Test Certificate"**

Every surface behaves like a calibrated laboratory document: measured, stated, and signed off. Nothing decorates; everything attests. The porcelain page is the certificate paper, ink is the recorded data, and Seal Vermilion is the certifier's mark — rare, deliberate, and always meaning "this has been verified." The register is brand, but the voice is a lab that happens to be beautiful: proof over adjectives, strength through restraint.

The system explicitly rejects the three worlds named in PRODUCT.md: generic corporate B2B (template heroes, stock handshake photos, blue-gradient trust badges), flashy SaaS startup (gradient glows, floating glass cards, hero metrics), and the dense industrial catalog (spec-table walls with no story). It also rejects AI-scaffold grammar: no numbered eyebrow labels above sections, no gradient text, no glassmorphism.

**Key Characteristics:**
- Porcelain-white field with near-black ink; one vermilion voice used like a certifier's seal
- Wide variable grotesque (Archivo wdth 116) does the talking; serif italic interjects; mono records
- Depth is drawn, not cast: hairlines, tonal shifts, and one full ink inversion at the finale
- Motion is quiet and exponential; every animation has a reduced-motion fallback
- WCAG AA is a floor, not a target
- Fully bilingual: a nav toggle swaps EN/繁體中文, retuning tracking, leading and weight for CJK
- Imagery is drawn, not photographed: dimensioned engineering line drawings in the patent-figure tradition

## 2. Colors

A near-monochrome certificate palette with a single vermilion attestation mark — the red chop (印章) that certifies a Taiwanese document.

### Primary
- **Seal Vermilion** (#E8492B): the certifier's mark. Catalog indices, the proof dot, marquee separators, stat superscripts, focus rings, and label headings on ink. Graphic marks and large type only — never small text on light.
- **Deep Seal Vermilion** (#B0300F): the only vermilion permitted for small text on light surfaces (6.1:1 on porcelain) and the hover fill of the primary button.

### Neutral
- **Porcelain White** (#FAFAF7): the page field. Warm-tinted near-white; never pure white.
- **Raised Porcelain** (#F1F0EA): quiet elevation for bands (marquee, quote) and hover fills.
- **Warm Porcelain** (#F4F3EE): text and surfaces on ink.
- **Ink** (#131410): headings, primary text, and the inverted contact finale. Never pure black.
- **Ink Body** (#131410C2) / **Ink Muted** (#1314109E): body copy and secondary labels; Ink Muted is the floor for small-text contrast (4.8:1).
- **Hairline** (#13141024) / **Hairline Soft** (#13141012): 1px rules and borders. Structure is drawn with these, not with shadows.

### Named Rules
**The Seal Rule.** Seal Vermilion appears only where something is being attested — an index, a proof point, a focus, a hover. It never exceeds roughly 5% of a viewport, and #E8492B never sets type smaller than 18px on light; small vermilion text is always Deep Seal Vermilion.

**The No-Pure Rule.** Pure #000 and #FFF are forbidden. The warm ink/porcelain pair is the brand's material.

## 3. Typography

**Display Font:** Archivo variable (with Noto Sans TC, sans-serif)
**Body Font:** Archivo variable (with Noto Sans TC, sans-serif)
**Accent Font:** Instrument Serif italic (with Noto Sans TC, serif)
**Label/Mono Font:** Space Grotesk (with monospace)

**Character:** A wide-set engineering grotesque speaks in calm capitals; a serif italic interrupts it like a handwritten counter-signature; a grotesque-mono records the data. Traditional Chinese accents (Noto Sans TC, wide-tracked) are identity, not decoration.

### Hierarchy
- **Display** (800, wdth 116, clamp(2.9rem–6rem), lh 0.96): hero and contact finale only. Uppercase, letter-spacing -0.025em. 6rem is a hard ceiling.
- **Headline** (780, wdth 116, clamp(1.7rem–2.5rem), lh 1.05): section h2s and catalog row names. Uppercase.
- **Serif accent** (Instrument Serif italic, 1.0–1.12em of its context): at most one italic phrase per fold — the counter-signature, not a second voice.
- **Body** (420, 1rem, lh 1.6): Ink Body color, max width ~44–65ch, `text-wrap: pretty` on long prose.
- **Label** (Space Grotesk 400–500, 0.72–0.85rem, tracking 0.05–0.18em, uppercase): micro-labels, catalog codes, the spec strip. Data voice only — never paragraphs.

### Named Rules
**The Three-Voices Rule.** Archivo states, Instrument Serif reflects, Space Grotesk records; in Chinese, Noto Sans TC speaks all three (900 for display, 500–700 for prose, upright with accent color where English would italicise). No voice borrows another's job.

**The Width-Not-Size Rule.** Impact comes from the wdth axis and weight, never from exceeding the 6rem ceiling or tightening tracking past -0.025em.

## 4. Elevation

Flat at rest. Depth is drawn — hairlines separate, Raised Porcelain lifts, and the ink inversion of the contact section is the page's single deep plane. Small state shadows are permitted strictly as press/hover feedback on solid-filled elements.

### Shadow Vocabulary
- **State lift** (`box-shadow: 0 4px 8px -4px rgba(19,20,16,0.35)`): hover feedback on solid buttons only.

### Named Rules
**The Flat-At-Rest Rule.** No element casts a shadow at rest. State shadows stay at or under 8px blur and never attach to hairline-bordered elements — a border is a drawing, a shadow is a light source, and an element gets one or the other.

## 5. Components

Refined and restrained: gentle transitions, quiet confidence, tolerances you can feel.

### Buttons
- **Shape:** full pill (999px), mono uppercase label (0.85rem, tracking 0.06em)
- **Primary:** ink fill, warm-porcelain text, 16px 28px padding
- **Hover / Focus:** primary fills Deep Seal Vermilion with the state-lift shadow and a -2px translate; focus is a 2px Seal Vermilion outline offset 3px
- **Ghost:** hairline-free ink border, transparent fill; hovers to full ink inversion
- **Light (on ink):** porcelain border and text; hovers to porcelain fill

### Cards / Containers
- **Corner Style:** 14px (cards top out here; the contact section cap is 20px)
- **Background:** Porcelain White at rest, Raised Porcelain on hover
- **Shadow Strategy:** none — see Flat-At-Rest
- **Border:** 1px Hairline, darkening to Ink on hover
- **Internal Padding:** clamp(24px, 3vw, 40px)

### Navigation
- Fixed, transparent until scroll, then blurred porcelain with a hairline base. Mono uppercase links with a left-to-right underline sweep on hover. Collapses to a full-screen porcelain overlay with display-scale links under 980px; 44px minimum touch targets.

### Catalog Rows (signature)
- Full-bleed hairline-separated list rows: Seal Vermilion code (Deep Seal Vermilion on light), headline-scale name, mono tag list, arrow. Hover inverts the entire row to ink and translates content 10px right — the system's boldest state change, reserved for the product catalog.

### Spec Strip (signature)
- The hero's bottom rule of mono microdata (EST. 2001 · ISO 9001 · 100% BATCH-TESTED) — the certificate's margin data. Reusable as a section closer.

## 6. Do's and Don'ts

### Do:
- **Do** hold every text/background pair to WCAG AA: 4.5:1 minimum for small text (Ink Muted #1314109E is the floor), 3:1 for large display.
- **Do** draw structure with 1px hairlines and tonal porcelain shifts before reaching for any other device.
- **Do** keep Seal Vermilion scarce — if vermilion exceeds ~5% of a viewport, it is no longer a seal.
- **Do** give every animation a `prefers-reduced-motion` fallback and keep easing on the exponential family (`cubic-bezier(0.22, 1, 0.36, 1)`).
- **Do** keep the bilingual accents (安全鏈, 台灣・精工) — identity, not decoration.

### Don't:
- **Don't** produce "generic corporate B2B": template heroes, stock handshake photos, blue-gradient trust badges (PRODUCT.md anti-reference, verbatim).
- **Don't** produce "flashy SaaS startup": gradient glows, floating glass cards, hero metrics, dark-purple everything (PRODUCT.md anti-reference).
- **Don't** produce a "dense industrial catalog": spec-table walls and part numbers with no story or craft (PRODUCT.md anti-reference).
- **Don't** use gradient text, glassmorphism, side-stripe borders, or numbered eyebrow labels above sections — catalog codes (S·01) and the three method gates (M·01–03) are the only sanctioned numbering, because their order carries meaning.
- **Don't** exceed the 6rem display ceiling or pair a 1px border with a cast shadow on the same element.
- **Don't** let placeholder statistics ship as fact: every number on the page is unverified until the real business replaces it (PRODUCT.md, Conversion & proof).
