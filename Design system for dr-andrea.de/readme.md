# Dr. Andrea — Design System

A rebrand of **dr-andrea.de**, the site of Dr. Andrea Anschütz — a German practice
for Persönlichkeitsentwicklung (personal development) and Beziehungstherapie
(relationship therapy), with 15+ years of experience. The original content and
structure are kept; the visual identity is fresh.

**Source:** https://dr-andrea.de (live site, German). Original look: thin cursive
script headlines, teal-outline pill buttons, coral client names, teal→sand gradient
bands. This system replaces all of that.

## Design direction — "Calm, grounded, warm-editorial"
Warm and human, never clinical. Built to make someone feel safe enough to reach out.

- **Surfaces:** warm cream neutrals (no cold whites).
- **Primary — Sage:** a muted green for calm, growth, nature. The main CTA color.
- **Accent — Clay:** a soft terracotta for warmth and the personal touch (eyebrows,
  client names, emotional moments).
- **Ink:** warm charcoal, used solid for high-trust "invitation" sections.
- **Type:** **Newsreader** serif — and especially its **italic** — carries headlines.
  It's a legible, contemporary nod to the practice's original script voice.
  **Hanken Grotesk** handles all body + UI; **Spline Sans Mono** for labels/meta.

---

## CONTENT FUNDAMENTALS
- **Language:** German.
- **Address:** always **du** (informal). This is a deliberate therapeutic choice —
  the site itself explains that "Duzen" builds nearness and trust. Never "Sie".
- **Tone:** warm, encouraging, plain. No pressure, no fear, no jargon, no hype or
  cure-promises. Short, human sentences.
- **Voice examples:** "Finde dich selbst." · "Gib dir eine Chance." · "Kann ich dir
  helfen?" · "Schreib mir." · sign-off "Deine Andrea".
- **Eyebrows** are short uppercase orienting phrases ("Jetzt dein Leben verändern",
  "Echte Stimmen") sitting above a serif-italic headline.
- **No emoji.**

## VISUAL FOUNDATIONS
- **Color:** low chroma everywhere. Sage primary, clay accent share a calm, earthy
  register. Sections alternate: cream page → sage-tint band → cream card → solid ink.
  At most 1–2 background tones per view; ink is used for emphasis sections only.
- **Type:** serif italic for emotional/hero headings, serif roman for structural
  ones (e.g. client names in clay). Body in Hanken Grotesk 17px / 1.55. Eyebrows
  600, uppercase, 0.16em tracking. Numbers & meta in mono.
- **Backgrounds:** flat warm fills + hairline dividers. Imagery sits in soft-rounded
  frames or circles. No gradients (the original's teal/yellow gradients are gone).
- **Imagery:** warm, candid portrait & lifestyle photography. Until real assets are
  supplied, use `MediaSlot` (striped warm placeholder + mono caption).
- **Corners:** soft, not bubbly — `sm 6 / md 10 / lg 18 / xl 28`; pill reserved for
  buttons, chips, number discs.
- **Cards:** flat cream + 1px hairline by default; `raised` = white + soft warm
  shadow; tints `sage` / `clay`; `inverse` = ink with cream text.
- **Shadows:** soft and warm (tinted toward ink, never blue/black). Used sparingly.
- **Buttons:** pill, flat fill. Primary = sage, accent = clay, secondary = sage
  outline, ghost = quiet. Hover lightens the fill; press nudges down 1px.
- **Focus:** 3px sage ring at 35%.
- **Motion:** gentle, 120–360ms ease; opacity/position fades. No bounces.

## ICONOGRAPHY
The original site uses almost no icons (a couple of inline social/message glyphs).
This system is **type-led and icon-light** by design — eyebrows, numbers, and serif
headlines do the work that icons usually do. When an icon is genuinely needed
(social links, form affordances), use **Lucide** (https://lucide.dev) at a 1.5px
stroke to match the hairline weight — load from CDN. No icon font is bundled. No
emoji. Unicode is used only for the em-dash and curly quotes “ ”.

> ⚠️ **Fonts are Google-hosted** (Newsreader, Hanken Grotesk, Spline Sans Mono) via
> `tokens/fonts.css`. If you need self-hosted/offline binaries or a different
> pairing, let me know and I'll swap them in.

---

## Index / manifest
- `styles.css` — global entry (consumers link this). `@import`s the token files.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/core/` — `Button`, `Input`, `Textarea`, `Card`, `Badge`, `Eyebrow`.
- `components/marketing/` — `TestimonialCard`, `StepItem`, `MediaSlot`.
- `ui_kits/website/` — the rebranded homepage (`index.html` + `Homepage.jsx`).
- `SKILL.md` — portable skill manifest.

Each component is `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`. The
`_ds_bundle.js` referenced by the component/UI-kit HTML is generated automatically
once this project is set as a Design System (see below).
