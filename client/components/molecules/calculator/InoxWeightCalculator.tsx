"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { 
    Calculator, 
    Copy, 
    Check, 
    Send, 
    RotateCcw,
    Layers,
    CircleDot,
    Square,
    Disc,
    CornerDownRight,
    X,
    Sparkles
} from 'lucide-react';
import { Button, Input } from '@/components/atoms';
import { useLanguage } from '@/services';
import { createPageUrl } from '@/lib';

export type InoxShape = 'sheet' | 'pipe' | 'box' | 'roundBar' | 'angle';
export type InoxGrade = 'sus304' | 'sus316' | 'sus201' | 'sus430';

const GRADE_DATA: Record<InoxGrade, { name: string; density: number }> = {
    sus304: { name: 'SUS 304', density: 7.93 },
    sus316: { name: 'SUS 316', density: 7.98 },
    sus201: { name: 'SUS 201', density: 7.93 },
    sus430: { name: 'SUS 430', density: 7.75 },
};

interface Preset {
    label: string;
    apply: () => void;
}

interface InoxWeightCalculatorProps {
    onCloseModal?: () => void;
}

export function InoxWeightCalculator({ onCloseModal }: InoxWeightCalculatorProps) {
    const { t, language } = useLanguage();
    const router = useRouter();

    const [shape, setShape] = useState<InoxShape>('sheet');
    const [grade, setGrade] = useState<InoxGrade>('sus304');

    // Dimensions in millimeters (mm)
    const [thickness, setThickness] = useState<number | ''>(1.5);
    const [width, setWidth] = useState<number | ''>(1220);
    const [height, setHeight] = useState<number | ''>(40);
    const [length, setLength] = useState<number | ''>(2440);
    const [outerDiameter, setOuterDiameter] = useState<number | ''>(50.8);
    const [quantity, setQuantity] = useState<number | ''>(1);

    const [isCopied, setIsCopied] = useState(false);

    const activeGrade = GRADE_DATA[grade] || GRADE_DATA.sus304;
    const density = activeGrade.density;

    // Reset defaults per shape
    const handleShapeChange = (newShape: InoxShape) => {
        setShape(newShape);
        if (newShape === 'pipe') {
            setOuterDiameter(50.8);
            setThickness(1.5);
            setLength(6000);
            setQuantity(1);
        } else if (newShape === 'box') {
            setWidth(40);
            setHeight(40);
            setThickness(1.5);
            setLength(6000);
            setQuantity(1);
        } else if (newShape === 'roundBar') {
            setOuterDiameter(25);
            setLength(6000);
            setQuantity(1);
        } else if (newShape === 'angle') {
            setWidth(40);
            setHeight(40);
            setThickness(3);
            setLength(6000);
            setQuantity(1);
        } else {
            // Sheet
            setWidth(1220);
            setThickness(1.5);
            setLength(2440);
            setQuantity(1);
        }
    };

    const handleReset = () => {
        handleShapeChange(shape);
        setGrade('sus304');
    };

    // Quick presets
    const presets: Preset[] = useMemo(() => {
        if (shape === 'sheet') {
            return [
                { label: '1.2 × 1220 × 2440', apply: () => { setThickness(1.2); setWidth(1220); setLength(2440); } },
                { label: '1.5 × 1220 × 2440', apply: () => { setThickness(1.5); setWidth(1220); setLength(2440); } },
                { label: '2.0 × 1220 × 2440', apply: () => { setThickness(2.0); setWidth(1220); setLength(2440); } },
                { label: '3.0 × 1500 × 3000', apply: () => { setThickness(3.0); setWidth(1500); setLength(3000); } },
            ];
        } else if (shape === 'pipe') {
            return [
                { label: 'Ø21.3 × 1.5', apply: () => { setOuterDiameter(21.3); setThickness(1.5); setLength(6000); } },
                { label: 'Ø27.2 × 1.5', apply: () => { setOuterDiameter(27.2); setThickness(1.5); setLength(6000); } },
                { label: 'Ø34 × 1.5', apply: () => { setOuterDiameter(34); setThickness(1.5); setLength(6000); } },
                { label: 'Ø60.5 × 2.0', apply: () => { setOuterDiameter(60.5); setThickness(2.0); setLength(6000); } },
            ];
        } else if (shape === 'box') {
            return [
                { label: '20 × 20 × 1.2', apply: () => { setWidth(20); setHeight(20); setThickness(1.2); setLength(6000); } },
                { label: '30 × 30 × 1.5', apply: () => { setWidth(30); setHeight(30); setThickness(1.5); setLength(6000); } },
                { label: '40 × 40 × 1.5', apply: () => { setWidth(40); setHeight(40); setThickness(1.5); setLength(6000); } },
                { label: '50 × 50 × 2.0', apply: () => { setWidth(50); setHeight(50); setThickness(2.0); setLength(6000); } },
            ];
        } else if (shape === 'roundBar') {
            return [
                { label: 'Ø16 × 6m', apply: () => { setOuterDiameter(16); setLength(6000); } },
                { label: 'Ø20 × 6m', apply: () => { setOuterDiameter(20); setLength(6000); } },
                { label: 'Ø25 × 6m', apply: () => { setOuterDiameter(25); setLength(6000); } },
                { label: 'Ø32 × 6m', apply: () => { setOuterDiameter(32); setLength(6000); } },
            ];
        } else {
            return [
                { label: 'V 30 × 30 × 3', apply: () => { setWidth(30); setHeight(30); setThickness(3); setLength(6000); } },
                { label: 'V 40 × 40 × 3', apply: () => { setWidth(40); setHeight(40); setThickness(3); setLength(6000); } },
                { label: 'V 40 × 40 × 4', apply: () => { setWidth(40); setHeight(40); setThickness(4); setLength(6000); } },
                { label: 'V 50 × 50 × 4', apply: () => { setWidth(50); setHeight(50); setThickness(4); setLength(6000); } },
            ];
        }
    }, [shape]);

    // Unit label: "tấm" for sheet/plate, "cây" for bars/tubes
    const unitName = shape === 'sheet' 
        ? (language === 'vi' ? 'tấm' : 'sheet') 
        : (language === 'vi' ? 'cây' : 'piece');

    // Calculation result logic
    const { singleWeight, totalWeight, formulaShort } = useMemo(() => {
        const qty = typeof quantity === 'number' && quantity > 0 ? quantity : 1;
        const T = typeof thickness === 'number' ? thickness : 0;
        const W = typeof width === 'number' ? width : 0;
        const H = typeof height === 'number' ? height : 0;
        const L_m = typeof length === 'number' ? length / 1000 : 0;
        const OD = typeof outerDiameter === 'number' ? outerDiameter : 0;

        let single = 0;
        let formula = '';

        if (shape === 'sheet') {
            const W_m = W / 1000;
            single = T * W_m * L_m * density;
            formula = `T (${T}mm) × W (${W_m}m) × L (${L_m}m) × ${density}`;
        } else if (shape === 'pipe') {
            const factor = (Math.PI * density) / 1000;
            single = (OD - T) * T * factor * L_m;
            formula = `(${OD} - ${T}) × ${T} × ${factor.toFixed(4)} × ${L_m}m`;
        } else if (shape === 'box') {
            const perimeter = 2 * (W + H) - 4 * T;
            single = perimeter * T * (density / 1000) * L_m;
            formula = `[2×(${W}+${H}) - 4×${T}] × ${T} × ${(density / 1000).toFixed(5)} × ${L_m}m`;
        } else if (shape === 'roundBar') {
            const radius = OD / 2;
            single = Math.PI * radius * radius * (density / 1000) * L_m;
            formula = `(${OD}/2)² × π × ${(density / 1000).toFixed(5)} × ${L_m}m`;
        } else if (shape === 'angle') {
            single = (W + H - T) * T * (density / 1000) * L_m;
            formula = `(${W} + ${H} - ${T}) × ${T} × ${(density / 1000).toFixed(5)} × ${L_m}m`;
        }

        const validSingle = Math.max(0, single);
        const validTotal = validSingle * qty;

        return {
            singleWeight: validSingle.toFixed(2),
            totalWeight: validTotal.toFixed(2),
            formulaShort: formula
        };
    }, [shape, thickness, width, height, length, outerDiameter, quantity, density]);

    // Format spec for clipboard / RFQ
    const specDescription = useMemo(() => {
        let shapeName = '';
        let dims = '';

        if (shape === 'sheet') {
            shapeName = 'Tấm Inox';
            dims = `${thickness}mm × ${width}mm × ${length}mm`;
        } else if (shape === 'pipe') {
            shapeName = 'Ống tròn Inox';
            dims = `Ø${outerDiameter}mm × dày ${thickness}mm × dài ${length}mm`;
        } else if (shape === 'box') {
            shapeName = 'Hộp Inox';
            dims = `${width}mm × ${height}mm × dày ${thickness}mm × dài ${length}mm`;
        } else if (shape === 'roundBar') {
            shapeName = 'Láp đặc Inox';
            dims = `Ø${outerDiameter}mm × dài ${length}mm`;
        } else if (shape === 'angle') {
            shapeName = 'Thanh V Inox';
            dims = `V ${width}mm × ${height}mm × dày ${thickness}mm × dài ${length}mm`;
        }

        return `${shapeName} ${activeGrade.name} (${dims}) - SL: ${quantity} ${unitName}, Ước tính: ${totalWeight} kg`;
    }, [shape, activeGrade.name, thickness, width, height, length, outerDiameter, quantity, unitName, totalWeight]);

    const handleCopySpecs = () => {
        navigator.clipboard.writeText(specDescription);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const handleRequestQuote = () => {
        if (onCloseModal) onCloseModal();
        const contactUrl = `${createPageUrl('contact')}?product=${encodeURIComponent(specDescription)}`;
        router.push(contactUrl);
    };

    const shapeOptions: Array<{ id: InoxShape; labelVi: string; labelEn: string; icon: React.ReactNode }> = [
        { id: 'sheet', labelVi: 'Tấm & Cuộn', labelEn: 'Sheet & Coil', icon: <Layers className="w-4 h-4 shrink-0" /> },
        { id: 'pipe', labelVi: 'Ống tròn', labelEn: 'Round Pipe', icon: <CircleDot className="w-4 h-4 shrink-0" /> },
        { id: 'box', labelVi: 'Hộp Inox', labelEn: 'Box Tube', icon: <Square className="w-4 h-4 shrink-0" /> },
        { id: 'roundBar', labelVi: 'Láp đặc', labelEn: 'Solid Bar', icon: <Disc className="w-4 h-4 shrink-0" /> },
        { id: 'angle', labelVi: 'Thanh Vê', labelEn: 'Angle Bar', icon: <CornerDownRight className="w-4 h-4 shrink-0" /> },
    ];

    return (
        <div className="w-full space-y-4 text-slate-900 dark:text-slate-100">
            {/* Header: Title + Controls */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                        <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-snug">
                            {t('calculator.title')}
                        </h2>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {language === 'vi' ? 'Tiêu chuẩn ASTM A240 / JIS G4303' : 'ASTM A240 / JIS G4303 Standard'}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-1.5">
                    <button
                        type="button"
                        onClick={handleReset}
                        title={language === 'vi' ? 'Đặt lại' : 'Reset'}
                        className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <RotateCcw className="w-4 h-4" />
                    </button>

                    {onCloseModal && (
                        <button
                            type="button"
                            onClick={onCloseModal}
                            aria-label="Close"
                            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>

            {/* Shape Selector: Horizontal icon pills */}
            <div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {shapeOptions.map((opt) => {
                        const isSelected = shape === opt.id;
                        return (
                            <button
                                key={opt.id}
                                type="button"
                                onClick={() => handleShapeChange(opt.id)}
                                className={`flex-1 min-w-[calc(33.333%-0.5rem)] md:min-w-0 flex items-center justify-center gap-1.5 py-2 px-2 sm:px-2.5 rounded-xl text-xs font-semibold border transition-all ${
                                    isSelected
                                        ? 'bg-orange-600 border-orange-600 text-white shadow-xs'
                                        : 'bg-slate-100/80 dark:bg-[#182234] border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400'
                                }`}
                            >
                                <span className={`shrink-0 ${isSelected ? 'text-white' : 'text-orange-600 dark:text-orange-400'}`}>
                                    {opt.icon}
                                </span>
                                <span className="whitespace-nowrap">
                                    {language === 'vi' ? opt.labelVi : opt.labelEn}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Inox Grade Selector & Presets in One Clean Row */}
            <div className="space-y-2">
                {/* Grades Segmented Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {(['sus304', 'sus316', 'sus201', 'sus430'] as InoxGrade[]).map((g) => {
                        const isSelected = grade === g;
                        const item = GRADE_DATA[g];
                        return (
                            <button
                                key={g}
                                type="button"
                                onClick={() => setGrade(g)}
                                className={`py-1.5 px-2.5 rounded-xl text-xs font-semibold border text-center transition-all flex items-center justify-between ${
                                    isSelected
                                        ? 'bg-orange-500/15 dark:bg-orange-500/25 border-orange-500 text-orange-950 dark:text-orange-200 ring-1 ring-orange-500'
                                        : 'bg-white dark:bg-[#182234] border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                                }`}
                            >
                                <span className="font-bold">{item.name}</span>
                                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                                    {item.density} g/cm³
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                        {language === 'vi' ? 'Quy cách nhanh:' : 'Quick sizes:'}
                    </span>
                    {presets.map((p, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={p.apply}
                            className="px-2 py-0.5 rounded-lg text-[11px] font-medium bg-slate-100 hover:bg-slate-200 dark:bg-[#182234] dark:hover:bg-[#1e2a40] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Inputs: Clean 2-to-4 Column Grid */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {/* Thickness (T) */}
                    {shape !== 'roundBar' && (
                        <div>
                            <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                                {t('calculator.fields.thickness')}
                            </label>
                            <div className="relative">
                                <Input
                                    type="number"
                                    step="0.05"
                                    min="0.1"
                                    value={thickness}
                                    onChange={(e) => setThickness(e.target.value === '' ? '' : parseFloat(e.target.value))}
                                    className="h-9 pr-8 text-xs font-mono font-semibold bg-white dark:bg-[#0B0F17] rounded-lg border-slate-200 dark:border-slate-700"
                                />
                                <span className="absolute right-2.5 top-2 text-[10px] text-slate-400 font-mono pointer-events-none">mm</span>
                            </div>
                        </div>
                    )}

                    {/* Width (W) or Flange A */}
                    {(shape === 'sheet' || shape === 'box' || shape === 'angle') && (
                        <div>
                            <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                                {shape === 'angle' ? 'Cạnh A' : t('calculator.fields.width')}
                            </label>
                            <div className="relative">
                                <Input
                                    type="number"
                                    step="1"
                                    min="1"
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value === '' ? '' : parseFloat(e.target.value))}
                                    className="h-9 pr-8 text-xs font-mono font-semibold bg-white dark:bg-[#0B0F17] rounded-lg border-slate-200 dark:border-slate-700"
                                />
                                <span className="absolute right-2.5 top-2 text-[10px] text-slate-400 font-mono pointer-events-none">mm</span>
                            </div>
                        </div>
                    )}

                    {/* Height (H) or Flange B */}
                    {(shape === 'box' || shape === 'angle') && (
                        <div>
                            <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                                {shape === 'angle' ? 'Cạnh B' : t('calculator.fields.height')}
                            </label>
                            <div className="relative">
                                <Input
                                    type="number"
                                    step="1"
                                    min="1"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value === '' ? '' : parseFloat(e.target.value))}
                                    className="h-9 pr-8 text-xs font-mono font-semibold bg-white dark:bg-[#0B0F17] rounded-lg border-slate-200 dark:border-slate-700"
                                />
                                <span className="absolute right-2.5 top-2 text-[10px] text-slate-400 font-mono pointer-events-none">mm</span>
                            </div>
                        </div>
                    )}

                    {/* Outer Diameter (OD) or Round Bar Diameter */}
                    {(shape === 'pipe' || shape === 'roundBar') && (
                        <div>
                            <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                                {shape === 'roundBar' ? 'Đường kính Ø' : 'ĐK ngoài Ø'}
                            </label>
                            <div className="relative">
                                <Input
                                    type="number"
                                    step="0.1"
                                    min="1"
                                    value={outerDiameter}
                                    onChange={(e) => setOuterDiameter(e.target.value === '' ? '' : parseFloat(e.target.value))}
                                    className="h-9 pr-8 text-xs font-mono font-semibold bg-white dark:bg-[#0B0F17] rounded-lg border-slate-200 dark:border-slate-700"
                                />
                                <span className="absolute right-2.5 top-2 text-[10px] text-slate-400 font-mono pointer-events-none">mm</span>
                            </div>
                        </div>
                    )}

                    {/* Length (L) */}
                    <div>
                        <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                            {t('calculator.fields.length')}
                        </label>
                        <div className="relative">
                            <Input
                                type="number"
                                step="10"
                                min="1"
                                value={length}
                                onChange={(e) => setLength(e.target.value === '' ? '' : parseFloat(e.target.value))}
                                className="h-9 pr-8 text-xs font-mono font-semibold bg-white dark:bg-[#0B0F17] rounded-lg border-slate-200 dark:border-slate-700"
                            />
                            <span className="absolute right-2.5 top-2 text-[10px] text-slate-400 font-mono pointer-events-none">mm</span>
                        </div>
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                            {t('calculator.fields.quantity')} ({unitName})
                        </label>
                        <div className="relative">
                            <Input
                                type="number"
                                step="1"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
                                className="h-9 pr-12 text-xs font-mono font-bold text-orange-600 dark:text-orange-400 bg-white dark:bg-[#0B0F17] rounded-lg border-slate-200 dark:border-slate-700"
                            />
                            <span className="absolute right-2.5 top-2 text-[10px] text-slate-400 font-mono pointer-events-none">{unitName}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clean Result Gauge & Actions */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-orange-50/70 via-white to-amber-50/40 dark:from-[#182234] dark:via-[#141D2D] dark:to-[#111827] border border-orange-200/90 dark:border-slate-700/80 shadow-md space-y-3.5">
                <div className="grid grid-cols-2 gap-4 items-center divide-x divide-slate-200 dark:divide-slate-700">
                    {/* Unit Weight */}
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            1 {unitName}
                        </span>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                            <span className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-slate-50">
                                {singleWeight}
                            </span>
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                                kg
                            </span>
                        </div>
                    </div>

                    {/* Total Weight */}
                    <div className="pl-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                            {language === 'vi' ? 'Tổng' : 'Total'} ({quantity || 1} {unitName})
                        </span>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                            <span className="text-2xl sm:text-3xl font-black font-mono text-orange-600 dark:text-orange-400">
                                {totalWeight}
                            </span>
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                kg
                            </span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-mono">
                            ≈ {(parseFloat(totalWeight) / 1000).toFixed(3)} {language === 'vi' ? 'tấn' : 'tons'}
                        </p>
                    </div>
                </div>

                {/* Subtitle Formula */}
                <div className="text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-200/70 dark:border-slate-700/70 pt-2 flex items-center justify-between">
                    <span className="font-mono truncate pr-2">
                        {formulaShort}
                    </span>
                    <span className="text-[10px] text-slate-400 shrink-0 font-medium">
                        {activeGrade.name} • D={density}
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-0.5">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleCopySpecs}
                        className="h-10 px-3 rounded-xl border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-semibold shrink-0"
                    >
                        {isCopied ? <Check className="w-3.5 h-3.5 mr-1 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                        {isCopied 
                            ? (language === 'vi' ? 'Đã sao chép' : 'Copied') 
                            : (language === 'vi' ? 'Sao chép' : 'Copy')}
                    </Button>

                    <Button
                        type="button"
                        onClick={handleRequestQuote}
                        className="flex-1 h-10 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 active:scale-[0.98] transition-all"
                    >
                        <Send className="w-3.5 h-3.5 mr-1.5" />
                        {language === 'vi' ? 'Báo giá quy cách này' : 'Quote this spec'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
