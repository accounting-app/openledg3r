# OpenLedger Pitch Deck (Next.js)

Interactive pitch deck for OpenLedger, migrated from `openledger_pitch.html`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Keyboard shortcuts

- `←` / `→` or `Space` — navigate slides
- `O` — slide overview
- `F` — fullscreen
- `Home` / `End` — first / last slide

## Regenerating slides from HTML

If you edit `openledger_pitch.html`, regenerate slide components:

```bash
npm run migrate
```

Then review `components/Slides.tsx` (especially the Live Demo slide).

## Production

```bash
npm run build
npm start
```
