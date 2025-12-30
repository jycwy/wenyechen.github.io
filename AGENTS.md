# AGENTS.md - AI Agent Instructions

This document provides context and guidelines for AI agents working on this codebase.

## Project Overview

This is **Wenye Chen's personal portfolio website**, designed to attract recruiters and hiring managers for AI Engineer, AI Platform Engineer, and MLOps roles.

- **Live URL:** https://wenyechen.github.io
- **Hosting:** GitHub Pages (static export)
- **Deployment:** Automated via GitHub Actions on push to `main`

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16 | Framework (App Router) |
| React | 19 | UI Library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling |
| GitHub Actions | - | CI/CD deployment |

### Key Configuration

- **Static Export:** `output: "export"` in `next.config.ts`
- **Trailing Slashes:** Enabled for GitHub Pages compatibility
- **Images:** Unoptimized (required for static export)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (hero + expertise + featured projects + CTA)
│   ├── about/page.tsx     # About page
│   ├── projects/page.tsx  # Projects listing
│   ├── contact/page.tsx   # Contact information
│   ├── layout.tsx         # Root layout (fonts, header, footer)
│   └── globals.css        # CSS variables + Tailwind + custom utilities
├── components/            # Reusable UI components
│   ├── Header.tsx         # Navigation (desktop + mobile responsive)
│   ├── Footer.tsx         # Site footer
│   ├── ProjectCard.tsx    # Project display card
│   ├── ExpertiseCard.tsx  # Expertise/skills card
│   ├── Button.tsx         # Reusable button component
│   └── index.ts           # Barrel export
└── content/
    └── site.ts            # ⭐ ALL EDITABLE CONTENT LIVES HERE
```

## Content Management

### Single Source of Truth: `src/content/site.ts`

**All site content is centralized in this one file.** When the user asks to update any text, bio, project, or contact info, edit this file.

The file exports `siteConfig` with these sections:

| Section | What it controls |
|---------|------------------|
| `name`, `title`, `tagline`, `description` | Site-wide metadata |
| `nav` | Navigation menu items |
| `hero` | Homepage hero section |
| `expertise` | Skills/expertise cards on homepage |
| `projects` | Project cards (problem → solution → impact format) |
| `about` | About page content |
| `contact` | Email, LinkedIn, GitHub, availability text |
| `footer` | Footer copyright |

### Adding a New Project

Add to the `projects` array in `site.ts`:

```typescript
{
  id: "unique-slug",
  title: "Project Title",
  problem: "What problem existed?",
  solution: "What did you build?",
  impact: "What measurable outcome resulted?",
  tags: ["Tech1", "Tech2", "Tech3"],
}
```

## Styling Conventions

### Design System (CSS Variables)

Defined in `src/app/globals.css`:

| Variable | Purpose |
|----------|---------|
| `--background` | Primary background (#0c0c0f) |
| `--background-secondary` | Card/section backgrounds |
| `--foreground` | Primary text |
| `--foreground-muted` | Secondary/muted text |
| `--accent` | Brand accent color (indigo #6366f1) |
| `--border`, `--border-subtle` | Border colors |

### Tailwind Theme Integration

Custom colors are mapped to Tailwind via `@theme inline` block:
- Use `bg-background`, `text-foreground`, `text-accent`, etc.
- Use `border-border` or `border-border-subtle` for borders

### Utility Classes

| Class | Purpose |
|-------|---------|
| `.gradient-bg` | Subtle radial gradient (used on hero) |
| `.card-hover` | Card lift + accent border on hover |
| `.link-underline` | Animated underline on links |

### Layout Patterns

- Max width container: `mx-auto max-w-5xl px-6`
- Section padding: `py-20` (standard) or `py-24 md:py-32` (hero)
- Card styling: `rounded-xl border border-border bg-background p-6`

## Component Patterns

### Client vs Server Components

- **Server Components (default):** Pages (`page.tsx`)
- **Client Components:** Components with interactivity (e.g., `Header.tsx` uses `"use client"` for mobile menu state)

### Import Pattern

Components use barrel export from `@/components`:

```typescript
import { Button, ExpertiseCard } from "@/components";
```

Content always imported from `@/content/site`:

```typescript
import { siteConfig } from "@/content/site";
```

### Button Component

```typescript
<Button href="/path">Label</Button>           // Primary (default)
<Button href="/path" variant="secondary">Label</Button>  // Secondary
```

## Development Workflow

### Commands

```bash
npm install    # Install dependencies
npm run dev    # Start dev server (localhost:3000)
npm run build  # Build for production (outputs to ./out)
npm run lint   # Run ESLint
```

### Testing Changes Locally

1. Run `npm run build` to generate static export
2. Preview with `npx serve out`
3. Check all pages and navigation work correctly

## Deployment

### Automatic Deployment

Push to `main` → GitHub Actions builds → Deploys to GitHub Pages

The workflow (`.github/workflows/deploy.yml`):
1. Checks out code
2. Sets up Node 20
3. Installs dependencies (`npm ci`)
4. Builds (`npm run build`)
5. Uploads `./out` directory
6. Deploys to GitHub Pages

### Manual Trigger

The workflow also supports `workflow_dispatch` for manual runs from the Actions tab.

## Common Tasks

### "Update my bio/description"
→ Edit `siteConfig.description` or `siteConfig.about` in `src/content/site.ts`

### "Add a new project"
→ Add entry to `siteConfig.projects` array in `src/content/site.ts`

### "Change contact info"
→ Edit `siteConfig.contact` in `src/content/site.ts`

### "Add a new page"
→ Create `src/app/[page-name]/page.tsx` and add nav entry to `siteConfig.nav`

### "Change colors/theme"
→ Edit CSS variables in `src/app/globals.css`

### "Add a new component"
→ Create in `src/components/`, add to `src/components/index.ts` barrel export

## Important Constraints

1. **Static Export:** No server-side features (API routes, server actions, dynamic routes without `generateStaticParams`)
2. **No Image Optimization:** Use standard `<img>` or Next.js `Image` with `unoptimized: true`
3. **GitHub Pages:** Trailing slashes required for proper routing
4. **Content Centralization:** Always edit `site.ts` for content changes, not individual page files

## Tone & Positioning

When writing content for this site, position the owner as:

- **AI Engineer / AI-native Platform Engineer**
- **Expertise:** LLM systems, evaluation, RAG, Databricks, production reliability
- **Emphasis:** Impact, systems thinking, production experience
- **Audience:** Recruiters and AI hiring managers

Use professional, technical language that demonstrates expertise without being overly academic.

