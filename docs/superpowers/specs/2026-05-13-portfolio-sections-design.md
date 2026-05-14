# Portfolio Sections Design

**Date:** 2026-05-13
**Stack:** Next.js 14, Tailwind CSS v4, shadcn/ui, TypeScript
**Theme:** Mocha Mousse dark (already applied — `dark` class on `<html>`)

---

## Goal

Replace the existing SaaS-template home page with a personal web developer portfolio. The page will have four sections navigable by anchor link: Hero, About, Projects, Contact. Footer and header nav are simplified to match.

---

## Page Structure

`src/app/(site)/page.tsx` is rebuilt to render only:

```tsx
<Hero />         // #hero  — updated existing component
<About />        // #about — new
<Projects />     // #projects — new
<Contact />      // #contact — new
```

All existing SaaS sections (Features, FeaturesList, Pricing, Reviews, Clients, Support, BlogSection, CallToAction, Newsletter) are removed from the page. Their component files are left untouched.

---

## Components

### Hero — `src/components/Home/Hero/index.tsx` (update in place)

- Section keeps `id="hero"`
- Replace badge text, heading, and paragraph with portfolio copy (name, title, tagline)
- Two `Button` components: "View Projects" (`href="#projects"`, default variant) and "Contact Me" (`href="#contact"`, outline variant)
- Remove the `<Image>` hero SVG block entirely
- Keep the existing shadcn `Badge` and `Button` imports — no new dependencies

### About — `src/components/Portfolio/About/index.tsx` (new)

**Layout:** Two-column on desktop (`lg:grid-cols-[auto_1fr]`), stacked on mobile.

**Left column:**
- shadcn `Avatar` (`AvatarImage` + `AvatarFallback`) — placeholder src, sized `w-32 h-32`
- Three anchor icon links (GitHub, LinkedIn, Twitter) using inline SVGs, styled `text-muted-foreground hover:text-primary`

**Right column:**
- `<h2>` — name
- `<p>` — 2–3 sentence bio (placeholder copy, easy to replace)
- `<p className="label">Tech Stack</p>` — uppercase label
- Wrapping flex row of shadcn `Badge` (secondary variant) for each skill
- Skills defined in a `const skills: string[]` array at the top of the file

**shadcn components used:** `Avatar`, `Badge`

**Animation slot:** the entire section wrapper has `id="about"` and empty `data-animate` attribute — ready for a scroll-triggered fade-in.

### Projects — `src/components/Portfolio/Projects/index.tsx` (new)

**Data file:** `src/components/Portfolio/Projects/projectsData.ts`

```ts
export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
};

export const projects: Project[] = [ /* 3 placeholder entries */ ];
```

**Featured project** (first entry with `featured: true`):
- Full-width shadcn `Card`
- Inside: two columns — left has `CardHeader` (title, description, tags as `Badge`) + two `Button` links (Live, GitHub); right has a `div` placeholder sized `aspect-video bg-muted rounded-md` — drop in a screenshot or animation component here

**Grid projects** (remaining entries):
- `grid grid-cols-1 md:grid-cols-2` wrapping smaller `Card` components
- Each card: image placeholder on top (`aspect-video bg-muted rounded-md`), then `CardHeader` (title, description, tags), then footer row with Live + GitHub `Button` links

**shadcn components used:** `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `Badge`, `Button`

**Animation slot:** each `Card` has `data-animate` attribute — ready for staggered entrance animations.

### Contact — `src/components/Portfolio/Contact/index.tsx` (new)

**Layout:** Two-column on desktop (`lg:grid-cols-2`), stacked on mobile.

**Left column:**
- `<h2>` section heading ("Get In Touch")
- Short paragraph
- Email address as an `<a>` link with a mail icon
- Three ghost `Button` icon links — GitHub, LinkedIn, Twitter

**Right column:**
- shadcn `Card` containing:
  - `Label` + `Input` for Name
  - `Label` + `Input` for Email
  - `Label` + `Textarea` for Message
  - Full-width `Button` ("Send Message")
- Form is static (no API) — add `action` or `onSubmit` handler when ready

**shadcn components used:** `Card`, `CardContent`, `Input`, `Textarea`, `Label`, `Button`

**Animation slot:** the section wrapper has `id="contact"` and `data-animate` attribute — ready for scroll-triggered entrance.

---

## Footer — `src/components/Footer/index.tsx` (update in place)

- Remove all three `FooterLinkList` columns and the `FooterLinkList` import
- Replace with a single centered row of three `Link`s: About (`#about`), Projects (`#projects`), Contact (`#contact`)
- Keep: logo, social icon links, copyright line, `Separator`
- Delete `src/components/Footer/FooterLinkList.tsx` and `src/components/Footer/linksData.ts` — no longer needed

---

## Header — `src/components/Header/menuData.ts` (update in place)

Replace all existing menu entries with:

```ts
{ id: 1, title: "About",    path: "#about"    },
{ id: 2, title: "Projects", path: "#projects" },
{ id: 3, title: "Contact",  path: "#contact"  },
```

No submenus. Existing `Header/index.tsx` logic is unchanged.

---

## File Changes Summary

| Action | File |
|--------|------|
| Update | `src/app/(site)/page.tsx` |
| Update | `src/components/Home/Hero/index.tsx` |
| Update | `src/components/Footer/index.tsx` |
| Update | `src/components/Header/menuData.ts` |
| Create | `src/components/Portfolio/About/index.tsx` |
| Create | `src/components/Portfolio/Projects/index.tsx` |
| Create | `src/components/Portfolio/Projects/projectsData.ts` |
| Create | `src/components/Portfolio/Contact/index.tsx` |
| Delete | `src/components/Footer/FooterLinkList.tsx` |
| Delete | `src/components/Footer/linksData.ts` |

---

## Out of Scope

- Actual animation implementation (slots are prepared but empty)
- Form submission / email API wiring
- Real project data, bio copy, or photos (all placeholder)
- Blog, docs, pricing, or any other existing pages
