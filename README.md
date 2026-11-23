# anitaihuman.dev

My personal site: writing, talks, research, and the work I take on.

Live at **[anitaihuman.dev](https://anitaihuman.dev)**.

## Running it locally

```sh
npm install
npm run dev      # http://localhost:8080
```

Other scripts:

```sh
npm run build    # production build into dist/
npm run preview  # serve the built output
npm run lint
```

## Built with

Vite, React, TypeScript, Tailwind CSS, shadcn/ui, framer-motion, React Router.

## How it's organised

Page content lives in `src/data/` rather than inside components, so the home
page and the listing pages can't drift apart:

| File | Holds |
| --- | --- |
| `src/data/articles.ts` | Every published article, with the year used for grouping |
| `src/data/engagements.ts` | Talks, podcasts, panels and workshops, plus YouTube episodes |
| `src/data/profile.ts` | Projects, leadership, committees, clients, testimonials |

To add an article or a talk, add an entry to the relevant file. The home page
preview, the year groupings and the filters all follow from it.

- Mark an article `featured: true` to surface it in the home page's Writing
  section, which shows the first five.
- Same for engagements and the Speaking section.
- `INCLUDE_HASHNODE_ARCHIVE` in `articles.ts` gates the 2021–22 Hashnode posts.
  They stay hidden while `anitaihuman.blog` does not resolve, because every
  `movi.hashnode.dev` link redirects there.

Shared pieces live in `src/components/shared/` (`ArticleRow`, `EngagementRow`,
`CalloutBand`, `LogoMarquee`, `PortraitFrame`, `SectionHeader`), and the type
scale, spacing and colour tokens are defined in `src/index.css` and
`tailwind.config.ts`.

## Images

Full-resolution photos stay in `originals/`, which is gitignored. Anything in
`public/` is copied verbatim into the build, so only web-sized files belong
there. Current sizes: portraits are 1200px wide as WebP with a JPEG fallback;
`og-image.jpg` is 1200x630 for link previews.

## Deploying

`npm run build` outputs static files to `dist/`. Because it is a single-page
app, the host needs to rewrite unknown routes to `index.html` so deep links
like `/work-with-me` resolve.
