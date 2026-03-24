# get-migrated

Everything you need to migrate around the world; be it for study, work, permanently or whatever clicks.

This project uses a **src-first Next.js App Router structure**.

## Project Structure

```text
.
├── docs/
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
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

Detailed structure documentation: `docs/project-structure.md`.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Start editing the homepage in `src/app/page.tsx`.

## Path Aliases

TypeScript alias is configured as:

```ts
@/* -> ./src/*
```

Example import:

```ts
import Button from "@/components/Button";
```

## Learn More

- https://nextjs.org/docs
- https://nextjs.org/learn
