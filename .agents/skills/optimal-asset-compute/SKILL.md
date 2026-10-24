---
name: optical-asset-compute
description: Compute aspect ratio (R = W/H), verify tight alpha bounding boxes, and assign KHM optical sizing categories for the 24-partner LogoMarquee and local assets.
---

# KHM Optical Asset Compute Skill

When adding or auditing logos in `client/public/img/partners/` (`.png` or `.webp`):
1. Compute the exact pixel dimensions and aspect ratio $R = \text{Width} / \text{Height}$.
2. Assign the optical pod class strictly by $R$:
   - **`square`** ($R \le 1.25$): `w-[68px] h-[36px] sm:w-[76px] sm:h-[38px]`
   - **`standard`** ($1.25 < R \le 2.2$): `w-[92px] h-[32px] sm:w-[102px] sm:h-[34px]
   - **`wide`** ($2.2 < R \le 3.5$): `w-[108px] h-[27px] sm:w-[118px] sm:h-[29px]`
   - **`ultrawide`** ($R > 3.5$): `w-[120px] h-[22px] sm:w-[130px] sm:h-[24px]`
3. Pair each logo with its localized uppercase industry tag (e.g., `THÉP`, `XÂY DỰNG`, `DẦU KHÍ`, `CƠ ĐIỆN`, `ĐA NGÀNH`, `CÔNG NGHIỆP`, `BAO BÌ`, `DƯỢC PHẨM`, `SẢN XUẤT`, `THỰC PHẨM`, `ĐỒ UỐNG`, `CHẾ BIẾN`) inside the Studio-Lit Platinum stage (`bg-slate-50/85 dark:bg-[#F1F5F9]`).