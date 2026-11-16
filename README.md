# Pakilai portfolio

Next.js App Router + React + TypeScript + Tailwind CSS 4. Responsive English portfolio with a reading progress bar, touch/keyboard experience carousel, CSS toolkit animations, case studies and a four-step collaboration process.

## Run

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production: `npm run build` then `npm start`. Type checking: `npm run typecheck`.

## Personalize before publishing

Edit `lib/content.ts`:

- `profile`: name, actual personal Upwork URL, GitHub URL, email. Current Upwork link goes to the platform homepage; email remains non-clickable until an address is supplied.
- `experiences`: replace clearly marked draft roles and responsibilities. Blank image areas in `components/interactions.tsx` are intentional; replace with your own images when ready.
- `stack`: verify the listed example technologies match your real skills.
- `cases`: replace draft prompts with your real problem, role, solution and verified results. Add an optional `demo` URL to show a live-project link.
- `steps`: adjust the proposed collaboration process.

Update page metadata in `app/layout.tsx`. No fictional customers, employment history, testimonials or metrics are included. No external fonts or images are needed. No backend, analytics or email service is configured.

The carousel uses native touch scrolling, arrow buttons, dots and arrow-key navigation when focused. Animations respect `prefers-reduced-motion`. The progress bar recalculates on scrolling and content/window resizing.

## Browser verification

With Google Chrome installed and `npm start` running, execute `node scripts/verify.cjs`. It checks 320, 390, 768, 1024 and 1440px widths, horizontal overflow, progress endpoints, carousel buttons/dots/wrapping, and browser runtime errors. Screenshots are saved to the system temporary directory. These checks and production build/type checking passed on 2026-11-16. Touch scrolling and normal-motion appearance still merit testing on a physical phone.

Builds explicitly use webpack because Turbopack's PostCSS worker could not bind a port in the original development environment.
