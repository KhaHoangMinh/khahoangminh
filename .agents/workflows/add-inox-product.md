---
description: Automates adding new stainless-steel products or CNC services to the catalog:
---

1. Invokes the inox-domain-spec skill to validate authentic SUS grades (304, 316, 201, 430), standards (ASTM A240, JIS G4303, DIN), and surface finishes (2B, BA, No.1, HL, 8K).   

2. Populates `vi` and `en` catalog entries in `LanguageProvider.tsx` so search matching works across both `name` and technical `description`.

3. Configures the `next/image` asset with explicit `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"` and localized `alt` text.   

4. Wires the card CTA to `/contact?product=<slug>` with zero hardcoded prices.