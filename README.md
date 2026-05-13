# PM Portfolio

Single-page portfolio for a Product Manager, built with **Next.js 15** (App Router), **Geist** typography, and a **Sanity-only** runtime content layer.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server uses Turbopack (`next dev --turbopack`).

## Production (static export)

This repo uses [`output: "export"`](next.config.ts): `next build` emits plain files under **`out/`**, including **`out/index.html`** for the home page. You do not maintain a hand-written `index.html` in source; Next generates it at build time.

```bash
npm run build
# Preview the exported site locally (optional):
npx --yes serve out
```

With static export, `next start` is not used (there is no Node server—only static files).

## Deploy

### Netlify

[`netlify.toml`](netlify.toml) is configured so Netlify runs **`npm run build`** and publishes **`out/`**.

1. In [Netlify](https://www.netlify.com/), add a new site from this Git repo (settings are usually picked up from `netlify.toml`).
2. Default **Build command**: `npm run build`  
3. Default **Publish directory**: `out`

After deploy, `/` is served from the generated `index.html`; project pages are emitted as HTML under `out/projects/`.

### Other hosts

Any static host (S3, GitHub Pages, etc.) can upload the contents of **`out/`** after `npm run build`. See Next.js [static exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports).

You can also deploy to [Vercel](https://vercel.com) with the same repo; Vercel runs `next build` and does not require the `out/` folder when using their Next.js runtime (this project is optimized for Netlify static publish via `out/`).

## Content workflow (Sanity-only)

Runtime content is loaded only from Sanity:

- [`lib/sanity/client.ts`](lib/sanity/client.ts)
- [`lib/sanity/queries.ts`](lib/sanity/queries.ts)
- [`lib/applications.ts`](lib/applications.ts)
- [`lib/projects.ts`](lib/projects.ts)

Validation is enforced by Zod schemas in [`lib/content/schemas.ts`](lib/content/schemas.ts).

If Sanity is unavailable or returns invalid data, the app renders safe empty states (instead of local JSON fallback).

## Sanity integration

### Environment

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Set:

- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION`

For **private / read-restricted** datasets (recommended), also set:

- `SANITY_READ_TOKEN` (read-only token from Sanity Manage)

### Sanity + Studio

Sanity Studio lives in a **separate repo**. This app only reads the API. See [`docs/SANITY.md`](docs/SANITY.md) for env vars, outage handling, and schema/query alignment rules.

## Structure

- [`app/page.tsx`](app/page.tsx) — home sections
- [`app/applications/page.tsx`](app/applications/page.tsx), [`app/applications/[slug]/page.tsx`](app/applications/[slug]/page.tsx) — applications views
- [`app/projects/page.tsx`](app/projects/page.tsx) — case-study archive
- [`components/`](components/) — UI sections and client motion (`Hero` spotlight, `Reveal` on scroll)
- [`lib/content/`](lib/content/) — validation schemas
- [`lib/projects.ts`](lib/projects.ts), [`lib/applications.ts`](lib/applications.ts), [`lib/skills.ts`](lib/skills.ts) — data adapters
- [`lib/sanity/`](lib/sanity/) — Sanity client and typed queries
- [`lib/site-settings.ts`](lib/site-settings.ts) — runtime site settings (badge + resume URL)

## License

Private / your choice.
