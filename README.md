# Wenye Chen - Personal Portfolio

A modern, professional portfolio website for an AI Engineer, built with Next.js, TypeScript, and Tailwind CSS.

**Live Site:** [https://wenyechen.github.io](https://wenyechen.github.io)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** GitHub Pages via GitHub Actions

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── projects/page.tsx  # Projects page
│   ├── contact/page.tsx   # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── ExpertiseCard.tsx
│   └── Button.tsx
└── content/
    └── site.ts            # All editable site content
```

## Editing Content

All site content is centralized in `src/content/site.ts`. Edit this file to update:

- Personal information (name, title, description)
- Navigation items
- Hero section content
- Expertise/skills
- Projects (with problem → solution → impact format)
- About page content
- Contact information

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Initial Setup (One-time)

1. Go to your GitHub repository settings
2. Navigate to **Pages** in the sidebar
3. Under "Build and deployment", select **Source: GitHub Actions**

After this, every push to `main` will trigger an automatic deployment.

## License

MIT
