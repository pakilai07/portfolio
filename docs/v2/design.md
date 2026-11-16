# Portfolio V2 Design And Audit

Kind: service. Existing warm paper, green accent and editorial typography remain the brand system.

## Current Application

Next.js 16 App Router, React 19, TypeScript and Tailwind 4. One homepage, global CSS, shared profile/project data, and client-side gallery/celebration interactions. Three real project screenshots, supplied avatar, brand icons, confirmed employment dates and verified Upwork URL are reusable.

Static export writes `out/`; Cloudflare Worker `portfolio` serves that directory. Preserve this configuration. No server APIs or verified demo URLs are currently configured. `npm start` still invokes `next start`, which is incompatible with static export and needs a static preview replacement. Existing browser scripts assume removed progress elements and need updating.

## Homepage

Header/navigation, supplied hero headline and subtitle, featured projects, four service offerings, professional experience, working process, FAQ, final Upwork CTA/footer. Use existing palette, restrained hover motion and the actual screenshots. Replace autoplay gallery with static project cards. Keep the supplied avatar. Remove decorative celebration and phone animation for the V2 focus on evidence and restrained motion.

Primary hero CTA scrolls to featured projects. Owner requested empty demo data with visible placeholders. Hero uses the supplied View Live Projects label and an adjacent note explaining demo links are pending. Secondary CTA opens the verified Upwork profile.

## Project Routes

Data-driven statically generated `/projects/[slug]/` pages for SHEIN, HR management and CRM. Generate all paths at build time and metadata per project. Use trailing slashes for explicit exported directory routes. Show verified title, screenshot and supplied stack. Label SHEIN as professional employment work; do not imply sole ownership. HR/CRM ownership, personal contributions, business challenges, technical choices and outcomes remain data TODOs pending owner confirmation; show explicit placeholder statements for unsupported sections, as requested by the owner. No invented demos or source links.

## Contact And Analytics

Create a separate Upwork-focused `/upwork/` entry sharing the homepage component but offering only Upwork contact actions. Preserve existing public email/GitHub flows on `/` and document the distinction. Verify current Upwork policy before implementation.

Check Cloudflare Web Analytics availability and token. Enable only with a real token. Do not claim Web Analytics natively tracks arbitrary CTA events; verify event support and document any missing click-event instrumentation separately. Never invent a token or add tracking that leaks personal information.

## Verification

Build and typecheck; serve static `out/`; check homepage, Upwork entry and all project routes with direct navigation/refresh. Verify screenshots and internal targets, mobile/desktop overflow, keyboard focus and browser errors. Use design-taste gate on exported output and report unresolved findings. No production deployment or push to the auto-deploy main branch without explicit approval. Deliver on codex/portfolio-v2 with screenshots and a missing-data list.
