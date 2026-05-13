# Sanity and this repo

**Sanity Studio lives in a separate repository.** This app is Sanity-only at runtime and does not maintain local JSON fallback data.

## What lives here

| Path | Purpose |
|------|---------|
| `lib/sanity/client.ts` | Sanity API client (env + optional read token). |
| `lib/sanity/queries.ts` | GROQ queries and Zod parsing for API responses. |
| `lib/sanity/warn-fallback.ts` | Shared log when Sanity fails; app serves empty states. |
| `lib/content/schemas.ts` | **Keep in sync** with document fields in your Studio repo. |

## Environment

Copy `.env.example` → `.env.local` and set `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_VERSION`. For private datasets, set `SANITY_READ_TOKEN` (read-only).

## Outage behavior

- If Sanity is misconfigured or unavailable, app routes render graceful empty states.
- Runtime no longer falls back to local JSON content.
- Warnings are logged through `lib/sanity/warn-fallback.ts`.

## Maintenance rule

When you add or rename fields in Studio, update **both**:

1. Studio schema (other repo)  
2. `lib/content/schemas.ts` and `lib/sanity/queries.ts` (this repo)

That keeps builds predictable and avoids silent shape mismatches.
