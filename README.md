# get-migrated

Everything you need to migrate around the world; be it for study, work, permanently or whatever clicks.

This project uses a src-first Next.js App Router structure.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Resend (lead notification email delivery)

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Set up environment:

```bash
cp .env.example .env.local
```

3. Run development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Environment Variables

Environment template: `.env.example`

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL for metadata/SEO routes. |
| `RESEND_API_KEY` | Yes | Auth key for Resend API calls from server endpoints. |
| `CONTACT_TO_EMAIL` | Yes | Inbox that receives lead notification emails. |
| `CONTACT_FROM_EMAIL` | No | Sender address. Defaults to `onboarding@resend.dev`. |

Notes:

- With free/test setup, `onboarding@resend.dev` is acceptable for development.
- For production deliverability, verify a sending domain in Resend and set `CONTACT_FROM_EMAIL` to that domain.

## Scripts

```bash
npm run dev    # start local development server
npm run lint   # run ESLint
npm run build  # build for production
npm run start  # run production build locally
```

## API and Route Documentation

- Endpoint contracts and route inventory: `docs/endpoints.md`
- Engineering runbook (quality gates, deployment, security): `docs/engineering-runbook.md`
- Folder conventions: `docs/project-structure.md`

## Lead Capture Overview

- UI form lives on the home page and submits to `POST /api/contact`.
- Backend validates payload and sends email notifications via Resend.
- API route implementation: `src/app/api/contact/route.ts`
- Email integration implementation: `src/lib/email.ts`

## Deployment Notes

Before deploying:

1. Configure required environment variables in your hosting platform.
2. Run `npm run lint` and `npm run build`.
3. Validate a real form submission on the deployed URL.

## Project Structure

```text
.
├── docs/
│   ├── engineering-runbook.md
│   ├── endpoints.md
│   └── project-structure.md
├── public/
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   ├── tests/
│   └── types/
├── .env.example
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```
