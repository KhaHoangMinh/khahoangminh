# Kha Hoàng Minh — Metallurgical Taxonomy & Domain Reference

> **Ground Truth Document**: This specification provides authoritative metallurgical constants, chemical compositions, physical densities, surface finish definitions, certified industrial standards, and theoretical weight calculation formulas for all stainless steel products distributed by Kha Hoàng Minh.

---

## 1. Stainless Steel (Inox) Grade Classification

```
                          METALLURGICAL ALLOY FAMILIES
┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
│ Austenitic (Non-Mag)    │ Ferritic (Magnetic)     │ Martensitic / Duplex    │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ • SUS 304 / 304L        │ • SUS 430               │ • SUS 410 / 420         │
│ • SUS 316 / 316L        │ • SUS 409L              │ • 2205 Duplex           │
│ • SUS 201 (Low-Nickel)  │                         │                         │
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

### 1.1 Detailed Alloy Specifications

| Grade Code | Crystal Structure | Typical Chemical Composition | Density ($\text{g/cm}^3$) | Key Characteristics & Applications |
|---|---|---|---|---|
| **SUS 304** | Austenitic | $18.0\text{--}20.0\%\text{ Cr}, 8.0\text{--}10.5\%\text{ Ni}, \le 0.08\%\text{ C}$ | **$7.93$** | Premier standard alloy. High corrosion resistance, food-safe hygiene, excellent formability. Used in F&B, kitchenware, architectural trim. |
| **SUS 316** | Austenitic | $16.0\text{--}18.0\%\text{ Cr}, 10.0\text{--}14.0\%\text{ Ni}, 2.0\text{--}3.0\%\text{ Mo}$ | **$7.98$** (or $7.93$) | Marine & acid grade. Molybdenum addition resists chloride pitting and harsh chemicals. Used in petrochemicals, marine equipment, pharmaceutical autoclaves. |
| **SUS 201** | Austenitic | $16.0\text{--}18.0\%\text{ Cr}, 3.5\text{--}5.5\%\text{ Ni}, 5.5\text{--}7.5\%\text{ Mn}$ | **$7.93$** | Cost-effective alternative. Nickel partially substituted with Manganese. Moderate corrosion resistance. Used in indoor furniture, handrails, decorative framing. |
| **SUS 430** | Ferritic | $16.0\text{--}18.0\%\text{ Cr}, \le 0.75\%\text{ Ni}, \le 0.12\%\text{ C}$ | **$7.75$** | Magnetic alloy with good thermal conductivity and resistance to nitric acid. Used in appliance panels, burner parts, automotive trim. |

---

## 2. Certified Surface Finishes

| Finish Code | Industry Name | Processing Technique | Surface Roughness ($Ra$) | Typical Applications |
|---|---|---|---|---|
| **No.1** | Hot-rolled & Pickled | Hot rolling, annealing, acid descaling | $Ra > 3.0\,\mu\text{m}$ | Industrial tanks, chemical plant structures, heavy pipe walls. |
| **2B** | Cold-rolled Dull | Cold rolling, annealing, pickling, light skin-pass | $Ra \approx 0.1\text{--}0.5\,\mu\text{m}$ | Standard commercial finish. Kitchen equipment, general stamping, pharmaceutical tanks. |
| **BA** | Bright Annealed | Cold rolling followed by heat treatment in an inert atmosphere furnace | $Ra < 0.1\,\mu\text{m}$ | Highly reflective. Mirrors, surgical instruments, premium household appliances. |
| **HL (Hairline)**| Hairline Brushed | Continuous grinding with 150–240 grit abrasive belts | Longitudinal uniform grain | Elevator cabins, escalator cladding, architectural building panels. |
| **8K (Mirror)** | Super Mirror | Multi-stage polishing with fine alumina/cerium oxide compounds | Optical reflection | Luxury interior decoration, cosmetic and elevator mirrors. |

---

## 3. Authoritative International Standards

All raw materials distributed by Kha Hoàng Minh comply with recognized global standards:

- **ASTM A240 / A240M**: Standard Specification for Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip for Pressure Vessels and General Applications.
- **ASTM A312 / A312M**: Standard Specification for Seamless, Welded, and Heavily Cold Worked Austenitic Stainless Steel Pipes.
- **ASTM A554**: Standard Specification for Welded Stainless Steel Mechanical Tubing (Ornamental & Structural Box Tubes).
- **JIS G4303 / G4304 / G4305**: Japanese Industrial Standards for Stainless Steel Bars, Hot-Rolled Plates, and Cold-Rolled Sheets.
- **DIN 17440 / EN 10088**: European standard for general stainless steel grades.

---

## 4. Theoretical Weight Calculation Formulas (Engineering Benchmark)

These formulas serve as the computational backend for the interactive engineering calculator at `/calculator`:

### 4.1 Tấm & Cuộn (Sheet & Coil)
$$\text{Trọng lượng (kg)} = \frac{T \times W \times L \times \rho}{1,000,000}$$
- $T$: Thickness / Độ dày ($\text{mm}$)
- $W$: Width / Khổ rộng ($\text{mm}$)
- $L$: Length / Chiều dài ($\text{mm}$)
- $\rho$: Density ($\text{g/cm}^3$) — $7.93$ for SUS 304/316/201; $7.75$ for SUS 430

### 4.2 Ống tròn công nghiệp & trang trí (Round Pipe)
$$\text{Trọng lượng (kg)} = \frac{(OD - T) \times T \times \pi \times \rho \times L}{1,000,000}$$
- $OD$: Outside Diameter / Đường kính ngoài ($\text{mm}$)
- $T$: Wall Thickness / Độ dày thành ống ($\text{mm}$)
- $L$: Pipe Length / Chiều dài ($\text{mm}$, typically $6,000\text{mm}$)

### 4.3 Hộp vuông & Chữ nhật (Square / Rectangular Box Tube)
$$\text{Trọng lượng (kg)} = \frac{[2 \times (A + B) - 4 \times T] \times T \times \rho \times L}{1,000,000}$$
- $A, B$: Outer side dimensions / Kích thước 2 cạnh ngoài ($\text{mm}$)
- $T$: Wall Thickness / Độ dày thành hộp ($\text{mm}$)
- $L$: Length / Chiều dài ($\text{mm}$, typically $6,000\text{mm}$)

### 4.4 Cây đặc tròn (Round Bar)
$$\text{Trọng lượng (kg)} = \frac{\pi \times (D / 2)^2 \times \rho \times L}{1,000,000}$$
- $D$: Diameter / Đường kính thanh tròn ($\text{mm}$)

---

## 5. Strict Zero-Hallucination Integrity Rules

1. **Zero Invented Pricing**: Stainless steel commodity prices fluctuate daily based on global nickel and LME rates. Never hardcode static VND or USD prices per kg. Always render `"Liên hệ báo giá"` / `"Contact for Quote"` routed to `/contact`.
2. **Authentic Corporate Identity**:
   - Company: **CÔNG TY TNHH MỘT THÀNH VIÊN KHA HOÀNG MINH**
   - Tax ID (MST): **0314059766** (Issued 12/10/2016 by Sở KH&ĐT TP.HCM)
   - Legal Representative: **Bà Ngô Thị Phụng Uyên** (Giám đốc)
   - Registered Office: **Số 93/16 Đường Nguyễn Thị Tú, KP. 3, P. Bình Hưng Hòa B, Q. Bình Tân, TP. HCM**
   - Factory & Processing Center: **Ấp Chiêu Liêu, Đường ĐT 743, P. Tân Đông Hiệp, TP. Dĩ An, Tỉnh Bình Dương**
   - Sales Direct Lines: **0979.866.162** (Ms. Phụng Uyên) | **0976.888.999** (Ms. Minh Hải)
