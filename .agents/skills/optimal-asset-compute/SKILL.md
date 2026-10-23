name: optical-asset-compute
description: Compute aspect ratio (R = W/H), verify tight alpha bounding boxes, and assign KHM optical sizing categories (square, standard, wide, ultrawide) for partner logos and industrial assets.


# KHM Optical Asset Compute Skill

When adding or auditing logos in `client/public/img/partners/`:
1. Run this quick Node calculation to get exact dimensions and $R = W / H$:
   `node -e "const fs=require('fs'); /* read PNG/WebP header dimensions and print W, H, R=W/H */"`
2. Map $R$ strictly to KHM's Optical Category table:
   - `R <= 1.25` -> `square` (`w-[68px] h-[36px] sm:w-[76px] sm:h-[38px]`)
   - `1.25 < R <= 2.2` -> `standard` (`w-[92px] h-[32px] sm:w-[102px] sm:h-[34px]`)
   - `2.2 < R <= 3.5` -> `wide` (`w-[108px] h-[27px] sm:w-[118px] sm:h-[29px]`)
   - `R > 3.5` -> `ultrawide` (`w-[120px] h-[22px] sm:w-[130px] sm:h-[24px]`)
3. Wrap the logo inside the Studio-Lit Platinum stage (`bg-slate-50/85 dark:bg-[#F1F5F9]`).