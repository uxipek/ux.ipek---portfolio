# Notes for coding agents

- Read `DESIGN.md` before touching any page, component, style or copy. It holds the color and type tokens, the naming and CTA glossary, and the voice rules.
- Stack: Vite + React 19 + Tailwind v4 (`src/index.css` `@theme`), deployed on Vercel from `main`.
- Verify with `npx tsc --noEmit && npx vite build`.
- The `*.cjs` scripts in the repo root are old one-off migration scripts. Do not run them; they predate the token system and would undo it.
