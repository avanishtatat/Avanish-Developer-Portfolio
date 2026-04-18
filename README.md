# Avanish Tiwari Portfolio

A modern, animated developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

This project showcases my profile, skills, projects, experience, and a working contact form powered by EmailJS.

## Live Preview

-https://avanishtiwari.vercel.app

## Highlights

- Clean single-page portfolio with smooth section navigation.
- Interactive hero section with animated role typing effect.
- Dedicated sections for About, Skills, Projects, Experience, and Contact.
- Mobile-first responsive design with glassmorphism + neon visual theme.
- Animated UI using Framer Motion.
- Working contact form integration using EmailJS.
- SEO-friendly metadata and custom favicon support.

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- Framer Motion
- shadcn/ui + Radix UI primitives
- React Router
- Sonner (toast notifications)
- EmailJS Browser SDK

## Project Structure

```text
neon-nexus-portfolio/
	public/
		at-favicon.svg
		favicon.ico
	src/
		components/portfolio/
			Navbar.tsx
			Hero.tsx
			About.tsx
			Skills.tsx
			Projects.tsx
			Experience.tsx
			Contact.tsx
			Footer.tsx
			LoadingScreen.tsx
			ParticleBackground.tsx
		pages/
			Index.tsx
			NotFound.tsx
```

## Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd neon-nexus-portfolio
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Run locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## Available Scripts

- `npm run dev` - Start development server.
- `npm run build` - Create production build.
- `npm run preview` - Preview production build locally.
- `npm run lint` - Run ESLint checks.
- `npm run test` - Run Vitest tests.
- `npm run test:watch` - Run Vitest in watch mode.

## Contact Form (EmailJS)

The contact form sends messages using `@emailjs/browser` in the Contact section.

Before using it in production:

- Enable and verify your EmailJS service/template.
- Restrict allowed origins in EmailJS dashboard.
- Keep `VITE_` keys in environment variables, not hardcoded.

## Customization Guide

- Update personal copy and profile links in `src/components/portfolio/Hero.tsx`.
- Update contact details in `src/components/portfolio/Contact.tsx`.
- Update project cards in `src/components/portfolio/Projects.tsx`.
- Update skills in `src/components/portfolio/Skills.tsx`.
- Update work timeline in `src/components/portfolio/Experience.tsx`.
- Update page metadata in `index.html` and `src/pages/Index.tsx`.

## Deployment

Build the app:

```bash
npm run build
```

Then deploy the `dist/` folder to platforms like:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Author

Avanish Tiwari

- GitHub: https://github.com/avanishtatat
- LinkedIn: https://www.linkedin.com/in/avanishtiwari18/
- Email: avanisht.at.at@gmail.com
