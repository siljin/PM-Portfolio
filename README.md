# PM Portfolio

Single-page portfolio for a Product Manager, built with **Next.js 15** (App Router), **Geist** typography, and validated JSON content under `content/`.

The app supports a **Sanity-first runtime content layer** with local JSON fallback.

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

## Content editing workflow

Content now lives in JSON files:

- [`content/applications/applications.json`](content/applications/applications.json)
- [`content/projects/projects.json`](content/projects/projects.json)
- [`content/demos/demos.json`](content/demos/demos.json) — seed data for `npm run sanity:generate-import` only (not rendered in the app)

Validation and loading are centralized in:

- [`lib/content/schemas.ts`](lib/content/schemas.ts)
- [`lib/content/loaders.ts`](lib/content/loaders.ts)

Adapter modules (`lib/*.ts`) expose stable getters used by pages/components:

- [`lib/applications.ts`](lib/applications.ts)
- [`lib/projects.ts`](lib/projects.ts)

### Required field conventions

- Keep `id` and `slug` unique within each dataset.
- Image paths must start with `/images/` (schema-enforced).
- Preserve existing field names used by UI (for example `coverSrc`, `sections`, `tag`, `descriptor`).

### Add or edit an application safely

1. Update [`content/applications/applications.json`](content/applications/applications.json).
2. Add/verify assets under [`public/images/`](public/images/).
3. Run `npm run build` to validate schemas and static route generation.
4. Run `npm run lint` to confirm no new lint issues.

If JSON is malformed or fields are invalid, the build fails with content validation errors from the loaders/schemas layer.

## Sanity integration (optional, recommended)

When Sanity env variables are configured, the app reads content from Sanity first and falls back to local JSON if Sanity is unavailable.

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

### Generate import payload

```bash
npm run sanity:generate-import
```

Generates NDJSON files under `import/sanity/` (gitignored).

### Sanity + Studio

Sanity Studio lives in a **separate repo**. This app only reads the API. See [`docs/SANITY.md`](docs/SANITY.md) for env vars, import commands, and how to keep schemas aligned with Studio.

## Structure

- [`app/page.tsx`](app/page.tsx) — home sections
- [`app/applications/page.tsx`](app/applications/page.tsx), [`app/applications/[slug]/page.tsx`](app/applications/[slug]/page.tsx) — applications views
- [`app/projects/page.tsx`](app/projects/page.tsx) — case-study archive
- [`components/`](components/) — UI sections and client motion (`Hero` spotlight, `Reveal` on scroll)
- [`content/`](content/) — editable JSON content
- [`lib/content/`](lib/content/) — validation schemas and JSON loaders
- [`lib/projects.ts`](lib/projects.ts), [`lib/applications.ts`](lib/applications.ts), [`lib/skills.ts`](lib/skills.ts) — data adapters
- [`lib/sanity/`](lib/sanity/) — Sanity client and typed queries
- [`lib/site-settings.ts`](lib/site-settings.ts) — runtime site settings (badge + resume URL)

## License

Private / your choice.
