"use client";

import React, { useEffect, useRef } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/services';
import type { SpecialEvent } from '@/config';

// ─── Per-event particle canvas renderer ────────────────────────────────────────
function EventCanvas({ particleType, accentColor }: { particleType: string, accentColor: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resize();
        window.addEventListener('resize', resize);

        const W = () => canvas.offsetWidth;
        const H = () => canvas.offsetHeight;

        // ── Particle factory per event type ──────────────────────────────────
        const factories: Record<string, () => any[]> = {
            lanterns: () => {
                const count = 14;
                return Array.from({ length: count }, () => ({
                    x: Math.random() * W(),
                    y: H() + Math.random() * H(),
                    size: 8 + Math.random() * 14,
                    speed: 0.35 + Math.random() * 0.5,
                    sway: (Math.random() - 0.5) * 1.5,
                    opacity: 0.4 + Math.random() * 0.6
                }));
            },
            snowflakes: () => {
                const count = 30;
                return Array.from({ length: count }, () => ({
                    x: Math.random() * W(),
                    y: -Math.random() * H(),
                    size: 1 + Math.random() * 3,
                    speedY: 0.5 + Math.random(),
                    speedX: (Math.random() - 0.5) * 0.5,
                    opacity: 0.3 + Math.random() * 0.7
                }));
            },
            stars: () => {
                const count = 25;
                return Array.from({ length: count }, () => ({
                    x: Math.random() * W(),
                    y: Math.random() * H(),
                    size: 1 + Math.random() * 2,
                    pulse: Math.random() * Math.PI * 2,
                    speed: 0.02 + Math.random() * 0.03
                }));
            },
            petals: () => {
                const count = 20;
                return Array.from({ length: count }, () => ({
                    x: Math.random() * W(),
                    y: -Math.random() * H(),
                    size: 4 + Math.random() * 6,
                    speedY: 0.4 + Math.random() * 0.8,
                    speedX: (Math.random() - 0.5),
                    rotation: Math.random() * 360,
                    rotSpeed: (Math.random() - 0.5) * 2
                }));
            },
            fireflies: () => {
                const count = 25;
                return Array.from({ length: count }, () => ({
                    x: Math.random() * W(),
                    y: Math.random() * H(),
                    size: 2 + Math.random() * 3,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    pulse: Math.random() * Math.PI * 2
                }));
            },
            confetti: () => {
                const count = 40;
                const colors = [accentColor, '#ffffff', '#fcd34d', '#f472b6'];
                return Array.from({ length: count }, () => ({
                    x: Math.random() * W(),
                    y: -Math.random() * H(),
                    sizeX: 4 + Math.random() * 4,
                    sizeY: 6 + Math.random() * 6,
                    speedY: 1 + Math.random() * 2,
                    speedX: (Math.random() - 0.5) * 2,
                    rotation: Math.random() * 360,
                    rotSpeed: (Math.random() - 0.5) * 5,
                    color: colors[Math.floor(Math.random() * colors.length)]
                }));
            }
        };

        const factory = factories[particleType] || factories['lanterns'];
        let particles = factory();

        // ── Render loop ──────────────────────────────────────────────────────
        const render = () => {
            ctx.clearRect(0, 0, W(), H());

            particles.forEach((p) => {
                ctx.save();
                
                if (particleType === 'lanterns') {
                    p.y -= p.speed;
                    p.x += Math.sin(p.y * 0.02) * p.sway;
                    if (p.y < -30) p.y = H() + 30;
                    
                    ctx.globalAlpha = p.opacity;
                    ctx.fillStyle = accentColor;
                    ctx.beginPath();
                    ctx.ellipse(p.x, p.y, p.size * 0.8, p.size, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = '#fff';
                    ctx.globalAlpha = p.opacity * 0.5;
                    ctx.fillRect(p.x - p.size * 0.4, p.y + p.size, p.size * 0.8, 3);
                } 
                else if (particleType === 'snowflakes') {
                    p.y += p.speedY;
                    p.x += p.speedX;
                    if (p.y > H()) { p.y = -10; p.x = Math.random() * W(); }
                    
                    ctx.globalAlpha = p.opacity;
                    ctx.fillStyle = '#fff';
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                }
                else if (particleType === 'stars') {
                    p.pulse += p.speed;
                    ctx.globalAlpha = 0.2 + (Math.sin(p.pulse) + 1) * 0.4;
                    ctx.fillStyle = accentColor;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                }
                else if (particleType === 'petals') {
                    p.y += p.speedY;
                    p.x += Math.sin(p.y * 0.01) + p.speedX;
                    p.rotation += p.rotSpeed;
                    if (p.y > H()) { p.y = -20; p.x = Math.random() * W(); }
                    
                    ctx.translate(p.x, p.y);
                    ctx.rotate(p.rotation * Math.PI / 180);
                    ctx.globalAlpha = 0.7;
                    ctx.fillStyle = accentColor;
                    ctx.beginPath();
                    ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, Math.PI * 2);
                    ctx.fill();
                }
                else if (particleType === 'fireflies') {
                    p.x += p.vx;
                    p.y += p.vy;
                    p.pulse += 0.05;
                    
                    if (p.x < 0 || p.x > W()) p.vx *= -1;
                    if (p.y < 0 || p.y > H()) p.vy *= -1;
                    
                    const alpha = 0.3 + (Math.sin(p.pulse) + 1) * 0.35;
                    ctx.globalAlpha = alpha;
                    
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = accentColor;
                    ctx.fillStyle = accentColor;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
                else if (particleType === 'confetti') {
                    p.y += p.speedY;
                    p.x += Math.sin(p.y * 0.02) + p.speedX;
                    p.rotation += p.rotSpeed;
                    if (p.y > H()) { p.y = -20; p.x = Math.random() * W(); }
                    
                    ctx.translate(p.x, p.y);
                    ctx.rotate(p.rotation * Math.PI / 180);
                    ctx.fillStyle = p.color;
                    ctx.fillRect(-p.sizeX/2, -p.sizeY/2, p.sizeX, p.sizeY);
                }

                ctx.restore();
            });

            rafRef.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [particleType, accentColor]);

    return (
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-60" 
        />
    );
}

// ─── Main Modal Component ──────────────────────────────────────────────────────

interface SpecialEventModalProps {
    event?: SpecialEvent | null;
    isOpen: boolean;
    onClose: () => void;
}

export function SpecialEventModal({ event, isOpen, onClose }: SpecialEventModalProps) {
    const { t, language } = useLanguage();

    if (!isOpen || !event) return null;

    const currentLang = language === 'en' ? 'en' : 'vi';
    const translations = event.translations[currentLang];
    
    // Destructure theme tokens
    const { 
        gradient, 
        titleGradient, 
        accentHex, 
        badgeBg, 
        buttonBg, 
        particles, 
        shimmer 
    } = event.theme;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ animation: 'se-fade-in 0.4s ease-out forwards' }}>
            
            {/* Backdrop: Deep, slightly desaturated blur */}
            <div 
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal Container */}
            <div 
                className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[2rem] shadow-2xl bg-white dark:bg-[#182234] border border-slate-200/70 dark:border-slate-700/80 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                style={{ animation: 'se-scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
            >
                {/* Close Button - Floats top right */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/10 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-black/20 dark:hover:bg-white/20 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row h-full">
                    
                    {/* ── LEFT PANE: Visual / Thematic Area ── */}
                    <div className={`relative md:w-5/12 p-8 md:p-12 flex flex-col items-center justify-center overflow-hidden ${gradient}`}>
                        
                        {/* Shimmer Overlay (Optional) */}
                        {shimmer && (
                            <div className={`absolute inset-0 bg-gradient-to-tr ${shimmer} pointer-events-none`} />
                        )}

                        {/* Animated Canvas Layer */}
                        <EventCanvas particleType={particles} accentColor={accentHex} />

                        {/* Graphic focal point */}
                        <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 mb-6 flex items-center justify-center">
                            {/* Outer Glow Ring */}
                            <div 
                                className="absolute inset-0 rounded-full animate-pulse opacity-40 blur-xl"
                                style={{ backgroundColor: accentHex }}
                            />
                            {/* Inner Circle container */}
                            <div className="relative w-full h-full rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                                <Sparkles className="w-16 h-16 md:w-24 md:h-24 text-white drop-shadow-md" style={{ color: accentHex === '#ffffff' ? '#fcd34d' : '#fff' }} />
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT PANE: Content Area ── */}
                    <div className="relative md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-[#182234]">
                        
                        {/* Eyebrow Badge */}
                        <div className="mb-6 flex">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${badgeBg}`}>
                                <Sparkles className="w-3.5 h-3.5" />
                                {t('events.specialEventTag') || 'Special Event'}
                            </span>
                        </div>

                        {/* Main Typography */}
                        <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${titleGradient}`}>
                            {translations.title}
                        </h2>

                        {/* Divider */}
                        <div 
                            className="w-12 h-1.5 rounded-full mb-6"
                            style={{ backgroundColor: accentHex }}
                        />

                        {/* Quote/Message */}
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-medium mb-10">
                            {translations.quote}
                        </p>

                        {/* Actions */}
                        <div className="mt-auto">
                            <button
                                onClick={onClose}
                                className={`group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${buttonBg}`}
                                style={{ boxShadow: `0 8px 24px -4px ${accentHex}55` }}
                            >
                                <span>{t('common.continueToSite') || 'Continue to site'}</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>

                        </div>

                        {/* Subtle corner accent */}
                        <div
                            className="absolute bottom-0 right-0 w-48 h-48 rounded-tl-full opacity-[0.04] pointer-events-none"
                            style={{ background: accentHex }}
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>

            {/* Keyframe styles */}
            <style>{`
                @keyframes se-fade-in {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes se-scale-in {
                    from { opacity: 0; transform: scale(0.9) translateY(16px); }
                    to   { opacity: 1; transform: scale(1)   translateY(0);    }
                }
            `}</style>
        </div>
    );
}