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

## Editing slides

Each slide is a component under `components/slides/`. Titles and variants are
registered in `components/slides/index.tsx`.

To refresh CSS from the legacy HTML file:

```bash
npm run migrate
```

Then review `app/globals.css` if styles changed unexpectedly.

## Production

```bash
npm run build
npm start
```
