# Digital Showcase

Muhammad Noman Khan's personal portfolio — a CV-led, responsive single-page site with a supporting API.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/portfolio run dev` — run the portfolio site
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19, Vite, Tailwind CSS, Radix UI
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

```
apps/
  portfolio/       # React + Vite portfolio site
  api-server/       # Express API
packages/
  api-client-react/ # Generated React Query hooks
  api-spec/          # OpenAPI spec + codegen
  api-zod/           # Generated Zod schemas/types
  db/                # Drizzle ORM schema
assets/              # Source assets (e.g. CV)
screenshots/         # Reference screenshots of the site
scripts/             # Repo maintenance scripts
```

## Architecture decisions

- Static, CV-led presentation rather than a data-backed dashboard — the CV is the
  source of truth for identity, projects, education, certifications, and contact
  details, with direct links as the primary interaction model.
- Responsive single-page layout with light/dark theming and rounded interactive
  surfaces.
