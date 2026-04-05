# Project Structure

This project follows a src-first Next.js App Router structure.

## Folder Overview

- `src/app/`: Routes, layouts, page files, and route segments (App Router).
- `src/components/`: Reusable UI components.
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Shared helpers, utilities, API clients, and service wrappers.
- `src/styles/`: Shared styles, tokens, and style utilities.
- `src/types/`: TypeScript type definitions and shared interfaces.
- `src/tests/`: Unit and integration tests.
- `src/assets/`: Non-public app assets imported into code.
- `public/`: Static assets served from site root.
- `docs/`: Project documentation.
	- `docs/endpoints.md`: Route inventory and API contracts.
	- `docs/engineering-runbook.md`: Setup, quality gates, security, and deployment checklist.
	- `docs/project-structure.md`: Folder structure and architectural conventions.

## Conventions

- Keep route-specific components close to their route in `src/app/` when they are not reused.
- Move truly reusable UI into `src/components/`.
- Keep business logic in `src/lib/` and presentation logic in components.
- Prefer importing shared modules via `@/` alias (mapped to `src`).

## Example Paths

- Home page: `src/app/page.tsx`
- Root layout: `src/app/layout.tsx`
- Global styles: `src/app/globals.css`
