# Nicolás Ambas — Portfolio

Personal developer portfolio built with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript (strict mode)
- **Animations:** Framer Motion
- **Deploy:** Vercel

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page — wires all sections
│   └── globals.css
├── src/
│   ├── config/
│   │   └── portfolioConfig.ts   # Single source of truth — edit your data here
│   ├── types/
│   │   └── portfolio.ts         # TypeScript interfaces
│   ├── components/
│   │   ├── NavBar.tsx
│   │   └── Icons.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Stack.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
```

## Updating Your Data

All personal data lives in `src/config/portfolioConfig.ts`. To update:

- **Bio, role, email, location** — top-level fields
- **Skills** — `skills` array, each with a `category`
- **Projects** — `projects` array with title, description, tech, and links
- **Social links** — `social` array

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and create a New Project
3. Import your repo — framework is auto-detected as Next.js
4. Click Deploy

No environment variables required.
