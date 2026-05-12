# Sanity and this repo

**Sanity Studio lives in a separate repository.** This app only needs runtime reads plus a small import helper.

## What lives here

| Path | Purpose |
|------|---------|
| `lib/sanity/client.ts` | Sanity API client (env + optional read token). |
| `lib/sanity/queries.ts` | GROQ queries and Zod parsing for API responses. |
| `lib/sanity/warn-fallback.ts` | Shared log when Sanity fails and JSON fallback runs. |
| `lib/content/schemas.ts` | **Keep in sync** with document fields in your Studio repo. |
| `scripts/generate-sanity-import.mjs` | Builds NDJSON from `content/*.json` for `sanity dataset import`. |

## Environment

Copy `.env.example` → `.env.local` and set `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_VERSION`. For private datasets, set `SANITY_READ_TOKEN` (read-only).

## Import workflow (from this repo)

```bash
npm run sanity:generate-import
```

Writes **gitignored** files under `import/sanity/*.ndjson`. Import from your machine (Studio repo or any folder with Sanity CLI logged in):

```bash
npx sanity@latest dataset import import/sanity/applications.ndjson production --replace
npx sanity@latest dataset import import/sanity/projects.ndjson production --replace
npx sanity@latest dataset import import/sanity/demos.ndjson production --replace
npx sanity@latest dataset import import/sanity/site-settings.ndjson production --replace
```

Use `--project <id>` if the CLI targets the wrong project.

## Maintenance rule

When you add or rename fields in Studio, update **both**:

1. Studio schema (other repo)  
2. `lib/content/schemas.ts` and `lib/sanity/queries.ts` (this repo)

That keeps builds predictable and avoids silent shape mismatches.
