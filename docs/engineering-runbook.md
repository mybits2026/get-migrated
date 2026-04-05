# Engineering Runbook

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create local environment file:

```bash
cp .env.example .env.local
```

3. Run app locally:

```bash
npm run dev
```

## Quality Gates

Before pushing code:

```bash
npm run lint
npm run build
```

Expected: both commands pass without errors.

## Security Notes

- Do not commit real secrets. Keep keys in `.env.local` and hosted environment settings.
- `RESEND_API_KEY` is server-side only and must never be exposed in client code.
- Prefer verified sender domains for production email deliverability.
- API returns generic server errors to avoid leaking internal details.

## Contact Flow Verification

Manual API test:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello"}'
```

Expected response:

```json
{"ok":true,"message":"Lead submitted successfully."}
```

## Deployment Checklist

1. Set required environment variables in hosting provider:
   - `NEXT_PUBLIC_SITE_URL`
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - Optional: `CONTACT_FROM_EMAIL`
2. Run CI or local quality gates (`lint`, `build`).
3. Deploy.
4. Submit one live contact form message and verify inbox delivery.

## Ownership Guidance

- Product/UI updates: `src/app/page.tsx`, `src/components/`
- API contract and behavior: `src/app/api/contact/route.ts`
- External service integration: `src/lib/email.ts`
- Shared payload/state types: `src/types/contact.ts`