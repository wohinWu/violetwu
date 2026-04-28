# Wei WU Personal Website

This is the source code for Wei WU's personal website, a bilingual portfolio for AI research, creative technology, interaction projects, education, publications, and contact information.

## Features

- Responsive one-page portfolio with section navigation
- English and Chinese content powered by i18next
- Research, project, education, output, experience, and contact sections
- Animated page sections built with Framer Motion
- Component system based on React, Tailwind CSS, and shadcn/ui

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- i18next
- Framer Motion

## Getting Started

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Project Structure

```text
src/
  assets/              Static images and media
  components/          Portfolio sections and reusable UI components
  i18n/                Language configuration and locale content
  pages/               Route-level pages
  test/                Test setup and examples
```

## Content Updates

Most website copy lives in `src/i18n/locales/en.ts` and `src/i18n/locales/zh.ts`. The homepage hero image is imported from `src/assets/hero-bg.jpg`.

## Deployment

The site can be deployed as a static Vite application. Run `npm run build` and publish the generated `dist/` directory to your preferred static hosting provider.
