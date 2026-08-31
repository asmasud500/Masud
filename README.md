# Masud — Premium Portfolio

A production-ready Next.js portfolio with an animated responsive navbar, premium UI, dynamic project case studies, validated contact API, SEO, accessibility, and deployment-ready configuration.

## Stack

- Next.js 14 + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- next-themes
- Zod
- Resend-ready contact API

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Personalize

Edit `data/portfolio.ts` for your name, biography, skills, services, projects, experience, education, testimonials, contact information, and social links.

Replace placeholder assets in `public/images/` with real optimized images.

## Contact form

The form posts to `POST /contact` and validates with Zod. For real email delivery configure:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=your@email.com
```

Never commit `.env.local` or API keys.

## Production checks

```bash
npm run typecheck
npm run build
```

## Routes

- `/` — portfolio
- `/projects/project-one` — generated case study
- `/projects/project-two` — generated case study
- `/sitemap.xml` — generated sitemap
- `/robots.txt` — generated robots rules

## GitHub

This repository is the canonical source for the portfolio project.
