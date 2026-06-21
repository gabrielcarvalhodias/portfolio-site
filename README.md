# Gabriel Dias — Freelance Video Editor Portfolio

A premium portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally (development)

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the next available port).

### Build for production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
├── data/             # Editable content (videos, clients, contact, carousel, nav)
├── styles.css        # All custom CSS
├── App.tsx           # Main layout
└── main.tsx          # Entry point

public/
├── assets/           # Profile photo
├── clients/          # Client images
└── videos/           # Video thumbnails
```

## Editing Content

- **Contact links:** `src/data/contact.ts`
- **Client names & YouTube URLs:** `src/data/clients.ts`
- **Portfolio videos:** `src/data/videos.ts`
- **Cinematic carousel:** `src/data/carousel.ts`
- **Navigation links:** `src/data/navigation.ts`
- **About Me text & photo:** `src/components/AboutMe.tsx` (config at top)
- **Profile photo:** `public/assets/profile.jpeg`

## Tech Stack

- React 18+
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
