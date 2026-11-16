# Patrick Lai Portfolio

Next.js App Router + React + TypeScript + Tailwind CSS 4. Responsive English portfolio with a reading progress bar, touch/keyboard experience carousel, CSS toolkit animations, case studies and a four-step collaboration process.

## Run

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Static production build: `npm run build`; deploy the resulting `out/` directory. Use `npm run dev` for local development. `next start` is not compatible with static export. Type checking: `npm run typecheck`.

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

## Profile Update (2026-11-16)

Identity, contact links, employment titles, technology list and four-step process now come from Patrick Lai's Upwork profile and the contact details provided in chat. Employment dates and detailed role responsibilities were not returned by Upwork and are not invented. Public portfolio images for SHEIN and the Human Resources Management System are stored in `public/images/`. Other employment images and detailed case-study evidence are still awaiting Patrick's materials.

The experience section separates the four employment records from the project-image gallery, so project screenshots are not attributed to unrelated employers. Gallery images use square frames. The active gallery item advances every three seconds only while the gallery is visible; hover, keyboard focus, the pause control, a hidden browser tab or reduced-motion preferences suspend playback.

Reading progress uses cat paw prints. In a browser's first visit, reaching the actual page bottom displays confetti and `Thanks for watching` for three seconds. `localStorage` records the visit, so subsequent visits do not replay it; clearing site storage starts a new first visit. Reduced motion removes the moving confetti. If browser storage is unavailable, first-visit persistence cannot be guaranteed.

Run `node scripts/verify-profile.cjs` with Chrome and the local server running to check the profile-specific interactions.

## Visual Update

Removed the separate case-study section. Three Upwork portfolio titles appear in the gallery; the CRM thumbnail remains explicitly pending. Employer descriptions were removed and the company names link to their websites. The profile avatar is Patrick's supplied artwork, shown uncropped inside a circular thumbnail. Desktop content is capped at 1120px.

Technology icons are from Simple Icons (https://simpleicons.org/); company icons are website favicons. Brand marks belong to their respective owners. The pink reading paws use #BE728C and stay hidden until their scroll threshold. The first-visit celebration retains its three-second duration but displays only a bottom-left party popper and confetti. Contact includes a CSS phone vibration illustration. Reduced-motion settings disable movement.

## Cloudflare Workers Deployment

The site uses Next.js static export (`next.config.ts`) and Workers Static Assets (`wrangler.jsonc`). It does not require OpenNext or a server runtime.

Workers Builds settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (existing setting is compatible)
- Project root: repository root

The build writes deployable HTML, JavaScript, CSS and images to `out/`. `.next/` is not the deployment directory. Keep the Worker name `portfolio` aligned with the connected Workers project. Push the configuration commit and retry the failed build using the latest commit. If server-side features are added later, reassess the deployment adapter before removing static export.
