# V2 Release Acceptance

GATE: PASS. Four documented waivers: owner-required demo/content placeholders; verified proper project headings; service icons instead of unrelated photography; one consistent four-card service layout. See quality-waivers.json and design-gate.txt. The gate retains 21 non-blocking warnings. The final tablet-only hero correction does not alter the gate's 1440px/390px viewports.

Functional acceptance: all eight public/Upwork routes passed direct access, refresh, internal-link and lazy-image checks at 320, 390, 768, 1024 and 1440px. Hero actions fit five viewport sizes. Expanded project/FAQ disclosures do not overflow. Header clearance, keyboard FAQ use, 404 handling and runtime-error checks pass. Desktop/mobile screenshots reviewed. TypeScript and git diff checks pass.

Browser analytics tests passed visit, project_view and upwork_click dispatch against a mocked production origin. Worker tests passed event allowlists, query privacy, same-origin enforcement, missing binding and static forwarding. Demo-click live verification awaits a real demo URL. These tests do not establish that production traffic has accumulated.

Next.js exports eight routes. Homepage keeps email and GitHub; /upwork/ and its case routes expose only Upwork contact actions. Project responsibilities, business problems and verified results remain explicit placeholders as requested. Demo/source URLs are empty data fields, never blank active links.

Visual system: service portfolio; existing paper #f7f7f0, ink #232820 and green #c5ed87; Arial with Georgia italics; screenshot-led hero/projects, flat service band, milestone process, official word-highlight moment with reduced-motion support. Copy is direct, factual and avoids unverified outcomes. All project screenshots and avatar are owner-provided; no stock stand-ins or invented metrics. Copy heuristic warnings about supplied headings/actions remain recorded in the gate output.

Deployment: GitHub main triggers Cloudflare Workers Builds using npm run build and npx wrangler deploy. Wrangler is pinned as a project dev dependency. Static assets and PORTFOLIO_EVENTS Analytics Engine bindings are declared in wrangler.jsonc. Web Analytics uses a public site token on the canonical production hostname only. Canonical: https://portfolio.patricklai.workers.dev/.

Pre-release rollback reference: Worker version d1c18e66-88e5-4dc3-be66-5dc0482f16d0, deployment 0d28b2b0-001a-4412-916c-4c017a0e7654. Do not change the account subdomain to deploy.

Reproduce: npm ci; npm run build; PORT=3100 npm start; npm run test:v2; npm run test:analytics; npm run test:worker; npm run typecheck. Performance findings are in performance.txt, design findings in design-gate.txt, screenshots in shots/v2/.
