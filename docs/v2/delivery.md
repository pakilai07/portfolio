# V2 Delivery

Branch: codex/portfolio-v2. No production deployment and no push to main.

Homepage order: header, supplied hero, featured projects, services, experience, process, FAQ, final CTA/footer. Reuses existing visual palette, supplied screenshots, avatar, employment dates and Upwork link. Autoplay, celebration and phone animation are removed from the rendered V2 page. Public homepage retains email and GitHub. `/upwork/` and its nested project pages expose only the Upwork contact route.

Project data: `lib/projects.ts`. Shared homepage: `components/portfolio-home.tsx`. Shared detail template: `components/project-detail.tsx`. Each project is statically exported at `/projects/<slug>/` and `/upwork/projects/<slug>/`. Demo/source URLs remain empty strings; no blank href is rendered. Missing content is visibly marked per the owner's instruction. SHEIN identifies employer ownership; HR/CRM ownership remains explicitly unconfirmed.

Missing owner information: business challenges, solution details, personal responsibilities, technical decisions, implementation challenges and verified outcomes for every project; live demo URLs and source permissions. No invented metrics or customer testimonials.

Analytics: no Cloudflare Web Analytics token was supplied, and no analytics integration or custom click-event collection was configured. Visits, project views, demo clicks and CTA clicks are not claimed as tracked. Cloudflare analytics configuration and Upwork policy verification remain outstanding.

Run locally: `npm run dev`. Static production build: `npm run build` writes `out/`. A static server can serve that directory. `npm start` remains the pre-existing Next.js server command and is incompatible with static export; do not use it. Cloudflare configuration still serves `out/` via Worker portfolio. No account domain changed.

Verification: production build and TypeScript passed. All eight public/Upwork homepage and project routes generated. Design gate returned GATE: ERROR because local checking servers could not bind a free port in 5200-5299; layout and consistency checks did not execute. The copy checker reported one nonblocking copy-eyebrows warning. Full browser QA, visual screenshots, external URL checks and remote deployment verification remain outstanding. This is an implementation draft, not an acceptance claim.
