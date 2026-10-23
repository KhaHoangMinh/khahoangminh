---
description: Execute the mandatory KHM pre-delivery verification gate and scan for banned AI-slop classes.
---


1. **Banned Class Scan**: Search `client/` for forbidden patterns:
   - `dark:bg-slate-950`, `dark:text-slate-400`, `dark:text-slate-500`
   - `indigo-`, `purple-`, `violet-`
   - `href="#"` or deep relative imports (`../../`)
   - Secure `http://` asset URLs
2. **Surface Alternation Check**: Inspect modified route controllers to confirm `.surface-canvas` and `.surface-band-alt` alternate cleanly and bottom CTAs use `.surface-cta-industrial`.
3. **Production Build Gate**: Run `cd client && npm run build` and verify exit code `0` with zero TypeScript or hydration warnings.