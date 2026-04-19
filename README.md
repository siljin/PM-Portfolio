# PM Portfolio

Single-page portfolio for a Product Manager, built with **Next.js 15** (App Router), **Geist** typography, and static content in `lib/`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server uses Turbopack (`next dev --turbopack`).

## Production

```bash
npm run build
npm start
```

## Deploy

The app is fully static-friendly: home and all `/projects/[slug]` routes are prerendered. Deploy to [Vercel](https://vercel.com) by importing the repo, or use any host that runs `next build` / `next start`, or configure [static export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) if you prefer plain HTML output.

## Content: add a project

1. Add an entry to [`lib/projects.ts`](lib/projects.ts) (slug, title, descriptor, tag, `coverSrc`, `sections`).
2. Put a cover image under [`public/images/projects/`](public/images/projects/) and set `coverSrc` (for example `/images/projects/my-cover.jpg`).
3. Run `npm run build` to confirm the new slug is picked up by `generateStaticParams`.

Optional longer-form writing later: add MDX files under [`content/projects/`](content/projects/) and wire a loader when you need it.

## Structure

- [`app/page.tsx`](app/page.tsx) — home sections
- [`app/projects/[slug]/page.tsx`](app/projects/[slug]/page.tsx) — project detail pages
- [`components/`](components/) — UI sections and client motion (`Hero` spotlight, `Reveal` on scroll)
- [`lib/projects.ts`](lib/projects.ts), [`lib/demos.ts`](lib/demos.ts), [`lib/skills.ts`](lib/skills.ts) — data

## License

Private / your choice.
