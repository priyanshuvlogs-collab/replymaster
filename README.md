# ReplyMaster

ReplyMaster is a SaaS app that helps brands craft on-tone replies to reviews, comments, and mentions across every platform — in seconds.

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) + [Shadcn UI](https://ui.shadcn.com)
- [Prisma](https://www.prisma.io) + PostgreSQL
- [NextAuth.js v5](https://authjs.dev) (credentials auth with bcrypt)
- [Zod](https://zod.dev) for validation

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Then set `DATABASE_URL` to your PostgreSQL connection string and generate an auth secret:

   ```bash
   npx auth secret
   ```

3. **Set up the database**

   ```bash
   npm run db:push       # push the schema to your database
   # or, for versioned migrations:
   npm run db:migrate
   ```

4. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000), sign up at `/signup`, and you'll land in the dashboard.

## Scripts

| Script               | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start the development server             |
| `npm run build`      | Production build                         |
| `npm run start`      | Start the production server              |
| `npm run lint`       | Run ESLint                               |
| `npm run db:generate`| Regenerate the Prisma client             |
| `npm run db:push`    | Push the Prisma schema to the database   |
| `npm run db:migrate` | Create/apply a development migration     |
| `npm run db:studio`  | Open Prisma Studio                       |

## Project structure

```
prisma/
  schema.prisma          # Users, brands, replies + NextAuth models
src/
  app/
    (marketing)/         # Public landing page (navbar + footer layout)
    (auth)/              # /login and /signup (split-panel layout)
    (dashboard)/         # /dashboard — protected app shell
      dashboard/
        brands/          # Brand management
        replies/         # Reply inbox & statuses
        settings/        # Profile & plan settings
    api/
      auth/[...nextauth] # NextAuth route handlers
      auth/signup        # Credentials signup endpoint
  components/
    ui/                  # Shadcn UI primitives
    marketing/           # Landing page sections
    dashboard/           # Sidebar, header, user menu
    auth/                # Login / signup forms
  lib/
    auth.ts              # NextAuth config (Prisma adapter + credentials)
    auth.config.ts       # Edge-safe auth config used by middleware
    prisma.ts            # Prisma client singleton
    validations/         # Zod schemas
  middleware.ts          # Route protection for /dashboard
  types/                 # Module augmentation for session types
```

## Data model

- **User** — account with hashed password, plan (`FREE` / `PRO` / `BUSINESS`), and NextAuth relations.
- **Brand** — belongs to a user; carries voice settings (tone, instructions) used when generating replies.
- **Reply** — an inbound message (review/comment/mention) with platform + sentiment, plus the drafted reply text and workflow status (`DRAFT` → `PENDING_REVIEW` → `APPROVED` → `PUBLISHED`).
