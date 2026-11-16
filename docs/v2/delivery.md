# V2 Delivery

Branch: codex/portfolio-v2. No production deployment and no push to main.

Homepage order: header, supplied hero, featured projects, services, experience, process, FAQ, final CTA/footer. Reuses existing visual palette, supplied screenshots, avatar, employment dates and Upwork link. Autoplay, celebration and phone animation are removed from the rendered V2 page. Public homepage retains email and GitHub. `/upwork/` and its nested project pages expose only the Upwork contact route.

Project data: `lib/projects.ts`. Shared homepage: `components/portfolio-home.tsx`. Shared detail template: `components/project-detail.tsx`. Each project is statically exported at `/projects/<slug>/` and `/upwork/projects/<slug>/`. Demo/source URLs remain empty strings; no blank href is rendered. Missing content is visibly marked per the owner's instruction. SHEIN identifies employer ownership; HR/CRM ownership remains explicitly unconfirmed.

Missing owner information: business challenges, solution details, personal responsibilities, technical decisions, implementation challenges and verified outcomes for every project; live demo URLs and source permissions. No invented metrics or customer testimonials.

Analytics: created the Web Analytics site for portfolio.patricklai.workers.dev through the connected account. Its public site token is embedded in the production-domain-only beacon; it is not an API credential. Web Analytics does not support custom events (https://developers.cloudflare.com/web-analytics/faq/), so custom visit, project-view, Upwork-click and future demo-click events use workers/site.ts and Analytics Engine dataset portfolio_events. Wrangler binds ASSETS and PORTFOLIO_EVENTS and sends only /api/events to Worker code first. Dataset binding becomes active only on a future approved deployment. No production code was deployed. NEXT_PUBLIC_ENABLE_EVENTS=false disables custom collection. Local previews do not send events. Do Not Track suppresses custom events. Server accepts only enumerated event names and enumerated public page paths, rejects foreign origins and bodies over 512 characters, and never stores free-text fields, email, query strings or referrer. Public analytics can still be spoofed; these are usage counts, not billing or security records.

Upwork policy verified with the official Help Center tool. Before a contract starts, communication should generally remain on Upwork; documented exceptions apply. Source: https://support.upwork.com/hc/en-us/articles/360051749534-How-to-keep-your-contact-information-safe-on-Upwork. The dedicated Upwork entry has no email, GitHub contact action or public-home escape link.

Run locally: `npm run dev`. Static production build: `npm run build` writes `out/`. A static server can serve that directory. `npm start` now runs the dependency-free static preview server in scripts/serve-static.cjs. Default address: http://127.0.0.1:3000; use PORT=3100 npm start for an alternate port. Cloudflare Worker portfolio still serves out/; it now also handles the explicitly scoped analytics endpoint. No account domain changed.

Verification:

- Production export and TypeScript passed with 8 homepage/detail routes.
- scripts/verify-v2.cjs passed direct visits, refresh, internal links, image loading, no empty links, 320/390/768/1024/1440 widths, Upwork contact isolation, FAQ interaction, 404 responses and no runtime exceptions.
- scripts/verify-worker.cjs passed event allowlist, path privacy constraints, origin rejection, missing-binding response, and static asset forwarding.
- scripts/verify-analytics.cjs passed actual browser beacon dispatch for visits, project views and Upwork clicks against a mocked production origin. No live demo URL exists, so demo clicks have no live destination yet.
- Wrangler 4.162.0 deploy --dry-run passed, reading 126 static assets and listing both bindings. This is packaging evidence, not production deployment validation.
- Screenshots: shots/v2/home-desktop.png, home-mobile.png and case-mobile.png. Desktop screenshot reviewed.
- The initial design-gate port failure was sandbox-related; running outside the sandbox resolved it. The gate then reported style failures. No waivers or hidden content were used. Final reports are saved alongside this document; no claim of design-gate PASS.
- The first performance run found a local beacon request failure. Beacon loading was subsequently restricted to the production hostname. Thumbnail WebPs and lazy footer icons address reported image warnings.

Deployment after owner approval: npm ci, npm run build, npx wrangler deploy. The existing Cloudflare build/deploy commands stay the same. Keep Analytics Engine enabled for the binding; reporting is queryable through the dataset, separate from Web Analytics. The optional .env.example settings are build-time values. No production deployment, account-subdomain change, or merge to main has occurred.

Remaining owner inputs: actual project responsibilities, project business context and verified outcomes, demo URLs, source-code publication permissions. Placeholders intentionally remain visible at the owner's request.

Final design status: GATE: OPEN 69 (rounds used up). No waivers. Full findings and all 16 retained warnings: design-gate.txt. Remaining categories include the intentionally requested placeholders and supplied headline, section-height/screen alignment, text-led sections lacking the skill's required visuals, caption restrictions, heading heuristics, focus/tap-size heuristics and dealt-moment requirements. These remain open, not automatically dismissed. The functional browser suite is separate evidence and does not override this design report. The skill explicitly directs stopping design-fix rounds at this point.

Visual system: service portfolio, existing paper #f7f7f0 / ink #232820 / green #c5ed87 palette retained for continuity, Arial with Georgia italics. Editorial text-led hero, screenshot-led project section, flat service band and milestone process. No shader, 3D scene, stock photography, invented brand or assumed metrics. Copy uses the supplied headline and subtitle; unknown project claims stay visible as owner-requested placeholders. No new photographs are needed; three screenshots and avatar are owner-provided.

Final performance retest: 0 FAIL, 2 WARN (JavaScript parse size at desktop/mobile). Total transfer about 281.9 KiB, image transfer 109.5 KiB, largest thumbnail 67.8 KiB, zero broken requests, zero measured layout shift. These are local CPU-relative measurements, not field Core Web Vitals. Full report: performance.txt. The remaining JS warning comes from the Next.js client runtime and is retained rather than replacing the established framework.

Quick review: http://localhost:3000/ and http://localhost:3000/upwork/. Tests use the static server at port 3100: PORT=3100 npm start; then npm run test:v2, npm run test:analytics, npm run test:worker. Playwright checks use installed Google Chrome. Test screenshots are regenerated under shots/v2/.

Final browser rerun: all eight routes and five widths passed after updating image checks to scroll each lazy-loaded image into view and wait for successful loading. This corrects the test's old eager-load assumption without weakening the broken-image check. Full browser analytics and Worker endpoint tests also passed. The new scripts and reports are committed with V2 rather than changing the V1 legacy test expectations.
