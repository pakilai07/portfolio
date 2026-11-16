# Implementation plan

1. Scaffold Next.js App Router, TypeScript and Tailwind 4 in the empty repository. Keep personal content in `lib/content.ts`.
2. Build semantic sections in `app/page.tsx`; global responsive styles and reduced-motion support in `app/globals.css`.
3. Isolate browser interactions in `components/interactions.tsx`: scroll percentage, native scroll-snap experience carousel with touch, keyboard and button navigation.
4. Verify `npm run build` and `npm run typecheck`. Run browser checks at 320, 390, 768, 1024 and 1440px; check overflow, carousel controls, progress endpoints, reduced motion, and links.
5. Document setup and draft-content replacement. Commit and push to the user-specified GitHub repository.
