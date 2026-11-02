# UXipek Design System

The rules behind uxipek.com. Read this before changing any page, component or copy.
Tokens live in `src/index.css` (`@theme`). If a value is not here or in that file, it is not part of the system.

## 1. Color

Five brand colors, one role each.

| Token | Value | Role |
|---|---|---|
| `ink` | `#28002C` | Text, dark sections, footer |
| `accent` | `#CA006C` | CTAs and one emphasis word per heading |
| `canvas` | `#FEFCFD` | Page background |
| `mist` | `#BFCDE0` | Small highlights: icon chips, tags |
| `ink-muted` | `#5E4A60` | Secondary text on light backgrounds |

Supporting tokens: `mist-soft` `#EBEFF5` (alternate sections, inputs), `on-ink` `#FFFFFF` and `on-ink-muted` `#CDBFCF` (text on `ink`), `success` `#047857` (positive data only).

Rules
- **Text never uses opacity.** Use `text-ink`, `text-ink-muted`, `text-on-ink` or `text-on-ink-muted`. Opacity is allowed only on borders, dividers and decorative fills.
- **Accent is never small text on `ink` or `mist`** (3.3:1 and 3.5:1). On dark sections use `text-on-ink` and an accent underline instead.
- **Every heading inside a dark section needs `text-on-ink`.** `.text-h1/.text-h2` default to ink; on `bg-brand-primary` that makes them invisible.
- **Never define `--color-base`.** In Tailwind v4 it collides with the `text-base` size utility and turns text white.
- Legacy names (`brand-primary`, `brand-transformation`, `background`, `pink`…) still work as aliases. Use the primitive names in new code.

Measured contrast: ink/canvas 18.3 · ink-muted/canvas 7.8 · ink-muted/mist 5.0 · accent/canvas 5.5 · white/accent 5.6 · on-ink-muted/ink 10.6.

## 2. Typography

Two families: **Playfair Display** for display and section titles, **DM Sans** for everything else. No third family.

| Token | Size | Use |
|---|---|---|
| `text-display` | 40–72px fluid | Page H1, big numbers |
| `text-title` | 32–48px fluid | Section H2 |
| `text-heading` | 24px | Card and sub-section titles (H3) |
| `text-lead` | 18–20px fluid | Intro paragraphs |
| `text-body` | 16px | Body copy, buttons, inputs |
| `text-small` | 14px | Card copy, meta, nav |
| `text-caption` | 12px | Eyebrows, tags, legal |

Rules
- Tailwind's default sizes are switched off. `text-sm`, `text-xl`, `text-[11px]` do nothing. Use the seven tokens.
- Nothing below 12px. Weight 300 only at `title` size and up.
- Italic serif: one emphasis phrase per heading at most, never a whole H1.
- Paragraphs: cap at `max-w-[56ch]`. In DM Sans that is about 75 characters per line (`ch` is the width of "0", wider than an average letter, so 65ch would give ~87).
- Headings descend without skipping levels (h1 → h2 → h3). If a section has no visible H2, add `<h2 className="sr-only">`.

## 3. Naming

| Concept | TR | EN |
|---|---|---|
| Brand | UXipek | UXipek |
| Service | UX Analizi | UX Audit |
| Free offer | Ücretsiz Mini UX Analizi | Free Mini UX Audit |
| Product | UXipek OS | UXipek OS |
| Product module | UX Röntgeni | UX X-Ray |
| Methodology | Kelebek Modeli | The Butterfly Model |
| Phase 01 | Tırtıl — Sürtünme ve Keşif | Caterpillar — Friction & Discovery |
| Phase 02 | Koza — Strateji ve Sistem Kurgusu | Cocoon — Strategy & System Design |
| Phase 03 | Kelebek — Büyüme ve Dönüşüm | Butterfly — Growth & Transformation |

"UX Analizi" is the service İpek delivers. "UX Röntgeni" is the tool inside UXipek OS. Do not swap them.

## 4. Calls to action

Exactly two actions, with fixed labels:

| | TR | EN | Target |
|---|---|---|---|
| Primary | 15 Dakikalık Görüşme Planla | Book a 15-Min Call | cal.com booking link |
| Secondary | Ücretsiz Mini UX Analizi İste | Request a Free Mini UX Audit | `/:lang/ux-audit` form |

Browse links: "Projeleri İncele / View Projects" (portfolio), "Projeyi İncele / View Case Study" (one project), "Örnek Analizi İncele / View Sample Audit" (Akademi Ozalit). The mobile header may shorten the primary CTA to "Görüşme / Call".

## 5. Voice

- First person singular. İpek works alone: "yapıyorum", "Sürecim". Not "biz", not "stüdyo". (Legal pages are the exception.)
- TR pages are fully Turkish. Industry terms that the design community uses in English (UX, UI, wireframe, persona) are fine; English sentences and labels are not.
- No unsupported numbers. A metric appears only with its source project. No animated counters.
- No quote marks around ordinary copy. Quotes are for real quotes and the Process page motto.

## 6. Portfolio

Four projects, in this order: Akademi Ozalit, EventGO, WedJuno, WaffleWanted (`src/data/projects.ts`). The rest of the archive lives on Behance.
- Facts (role, tools, timeline) come from the case study itself. Leave a field empty rather than guess; empty fields are hidden.
- Covers are real project images in `public/projects/` as WebP, never stock photos.

## 7. Patterns to avoid

These read as generated templates (flagged by `npx impeccable detect`):
- A square icon tile above every card heading. Use icons only where they carry meaning.
- An uppercase eyebrow above every heading. Keep them for page heroes and the Butterfly phases.
- Gradient text, decorative grid backgrounds, pulsing dots, glass cards.
- Content that is invisible until a scroll animation runs. Motion respects `prefers-reduced-motion` (`MotionConfig` in `App.tsx`).

## 8. Checking your work

```bash
npx tsc --noEmit && npx vite build
npx vite preview --port 4173
npx impeccable detect --no-advisory http://localhost:4173/tr        # template and quality patterns
```

Before merging a visual change, check contrast of any new text against its real background (WCAG AA: 4.5:1, or 3:1 at 24px+ / 18.66px bold).
