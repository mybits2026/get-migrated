# AGENTS.md

## Purpose
- This file is for agentic coding assistants operating in this repository.
- Prefer small, targeted changes that match the existing codebase.

## Repository Summary
- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4.
- UI primitives: `@base-ui/react` plus local wrappers in `src/components/ui`.
- Styling: Tailwind utility classes, `globals.css`, and theme tokens defined with `@theme inline`.
- Path alias: `@/*` maps to `./src/*`.
- Source root: `src/`.

## Important Existing Instructions
- Always read `DESIGN.md` before making visual or UI decisions.
- All font choices, colors, spacing, and aesthetic direction are defined in `DESIGN.md`.
- Do not deviate from `DESIGN.md` without explicit user approval.
- In QA mode, flag any code that does not match `DESIGN.md`.

## Cursor And Copilot Rules
- No `.cursor/rules/` directory was found.
- No `.cursorrules` file was found.
- No `.github/copilot-instructions.md` file was found.
- If any of those files are added later, update this document and follow them.

## Project Layout
- `src/app`: Next.js App Router entrypoints such as `layout.tsx` and `page.tsx`.
- `src/components/ui`: shared UI primitives and local wrappers.
- `src/tests`: present but currently empty except for `.gitkeep`.

## Build, Lint, And Test Commands
- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Create production build: `npm run build`
- Start production server after build: `npm run start`
- Run repository lint: `npm run lint`

## File-Scoped Validation Commands
- Lint a specific file: `npx eslint src/app/page.tsx`
- Lint multiple paths: `npx eslint src/app/page.tsx src/components/ui/button.tsx`
- Type and build validation currently happens through `npm run build`.

## Test Status
- There is currently no configured test runner in `package.json`.
- There are currently no `*.test.*` or `*.spec.*` files in the repository.
- Because of that, there is no supported command today for running the full test suite.
- There is also no supported command today for running a single test.

## Single-Test Guidance
- If the user asks to run a single test, first note that no test framework is configured yet.
- Do not invent Jest, Vitest, Playwright, or Cypress commands unless the repo is updated to include them.
- `npx eslint <path>` for a targeted lint pass.
- `npm run build` for end-to-end compile and type validation.

## Environment Notes
- TypeScript is `strict: true` in `tsconfig.json`.
- Module resolution is `bundler`.
- ESLint uses `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
- `next.config.ts` is minimal and does not currently add custom build behavior.

## General Coding Style
- Match the surrounding file before introducing new stylistic choices.
- Prefer the smallest correct change over broad refactors.
- Keep logic inline unless extraction clearly improves reuse or readability.
- Prefer explicit code over clever code.

## Formatting Conventions
- This repo currently has mixed semicolon usage across files.
- Preserve the local punctuation style of the file you edit instead of mass-reformatting.
- Use double quotes in TypeScript and TSX, matching the current files.
- Keep JSX class strings readable; avoid rewrapping unrelated lines.

## Imports
- Order imports in a stable, readable way.
- Typical order used here: framework and third-party imports first, then a blank line, then local `@/` imports.
- Prefer named imports when the module already exposes named exports.
- Use the `@/` alias for internal imports instead of long relative paths.
- Avoid unused imports; lint will catch them.

## TypeScript Guidelines
- Prefer explicit domain types when they add clarity.
- Reuse inferred types when the source of truth already exists.
- Common local pattern: derive state types from objects, for example `type FormState = typeof initialForm`.
- Use `Partial<Record<...>>` for keyed error maps when appropriate.
- Prefer `React.ComponentProps<"input">` and similar helpers for wrapper components.
- Prefer narrowing and typed helpers over assertions.
- Keep strict-mode compatibility in mind.

## React And Next.js Guidelines
- Use function components and named exports for shared UI pieces.
- Default page export in App Router should remain the route component.
- Add `"use client";` only when the file actually needs client-side hooks or browser APIs.
- Do not convert server components to client components without a clear reason.
- Keep route files focused on page composition and local interaction logic.

## State And Logic
- Prefer simple local state with `useState` when the behavior is page-local.
- Use memoization sparingly.
- In this repo, `useMemo` is used where it derives UI text from state; do not add memoization by default.
- Prefer early returns for validation and branching.

## Naming Conventions
- Components: PascalCase, for example `Button`, `AccordionTrigger`.
- Variables and functions: camelCase.
- Constants arrays and config-like data: camelCase with descriptive nouns such as `heroSignals`.
- Types: PascalCase, for example `FormState`, `FormErrors`.
- Use names that describe product meaning, not implementation trivia.

## Error Handling And Validation
- Validate user input close to where it is submitted.
- Store user-facing validation messages as plain strings.
- Prefer predictable failure states over silent catches.
- If you add async code, handle loading, success, and failure states explicitly.
- Surface actionable errors to the UI when the user can recover.

## Styling Guidelines
- Read `DESIGN.md` first for any visual work.
- Tailwind v4 is in use.
- Prefer Tailwind utility classes over bespoke CSS unless global styling is the right layer.
- Theme tokens live in `src/app/globals.css` under `:root` and `@theme inline`.
- Prefer the existing stable custom-property pattern such as `bg-[var(--color-action)]` for color tokens.
- Reuse existing semantic tokens like `primary`, `secondary`, `accent`, and local color variables instead of hardcoding new colors.

## UI Component Patterns
- Shared primitives live under `src/components/ui`.
- Wrapper components typically accept `className`, set a `data-slot` attribute, merge classes with `cn()`, and export the component directly plus any variants helper when relevant.
- Follow existing `cva` patterns for variants instead of inventing a new API.

## Comments And Documentation
- Keep comments sparse and useful.
- Explain non-obvious intent, not obvious syntax.
- Update docs when behavior or workflow meaningfully changes.

## Verification Expectations
- For code changes, run the narrowest real validation first.
- Minimum useful checks in this repo are usually `npx eslint <changed-path>` for targeted edits.
- `npm run build` when the change could affect compile, types, routes, or Tailwind output.
- If a command cannot be run, say so explicitly in the handoff.

## Git And Change Scope
- Expect a dirty worktree; do not revert unrelated user changes.
- Ignore unrelated modified files unless they conflict with your task.
- Do not create commits unless the user explicitly asks.

## When Adding Tests Later
- Add the test command to `package.json`.
- Update this file with full-suite and single-test commands.
- Document the canonical locations and naming patterns for tests.
- Until then, do not claim test coverage that does not exist.

## Practical Agent Workflow
- Inspect the relevant files before editing.
- Check `DESIGN.md` before UI changes.
- Make the smallest correct patch.
- Summarize what changed, what was verified, and any remaining gaps.
