import React, { useEffect, useRef } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/services';

// ─── Per-event particle canvas renderer ────────────────────────────────────────
function EventCanvas({ particleType, accentColor }) {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

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
        const factories = {
            lanterns: () => {
                const count = 14;
                return Array.from({ length: count }, (_, i) => ({
                    x: Math.random() * W(),
                    y: H() + Math.random() * H(),
                    size: 8 + Math.random() * 14,
                    speed: 0.35 + Math.random() * 0.5,
                    sway: (Math.random() - 0.5) * 0.4,
                    phase: Math.random() * Math.PI * 2,
                    opacity: 0.6 + Math.random() * 0.4,
                    color: ['#f87171', '#fbbf24', '#fb923c'][Math.floor(Math.random() * 3)],
                }));
            },
            snowflakes: () => {
                return Array.from({ length: 60 }, () => ({
                    x: Math.random() * W(),
                    y: Math.random() * H(),
                    size: 1.5 + Math.random() * 4,
                    speed: 0.4 + Math.random() * 0.9,
                    sway: (Math.random() - 0.5) * 0.8,
                    phase: Math.random() * Math.PI * 2,
                    opacity: 0.4 + Math.random() * 0.6,
                }));
            },
            stars: () => {
                return Array.from({ length: 80 }, () => ({
                    x: Math.random() * W(),
                    y: Math.random() * H(),
                    size: 0.8 + Math.random() * 2.5,
                    twinkleSpeed: 0.02 + Math.random() * 0.04,
                    phase: Math.random() * Math.PI * 2,
                    opacity: 0.2 + Math.random() * 0.8,
                }));
            },
            petals: () => {
                return Array.from({ length: 30 }, () => ({
                    x: Math.random() * W(),
                    y: Math.random() * H(),
                    size: 5 + Math.random() * 9,
                    speed: 0.5 + Math.random() * 0.8,
                    sway: (Math.random() - 0.5) * 1.2,
                    phase: Math.random() * Math.PI * 2,
                    rotation: Math.random() * Math.PI * 2,
                    rotSpeed: (Math.random() - 0.5) * 0.04,
                    opacity: 0.5 + Math.random() * 0.5,
                }));
            },
            fireflies: () => {
                return Array.from({ length: 40 }, () => ({
                    x: Math.random() * W(),
                    y: Math.random() * H(),
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: 2 + Math.random() * 3,
                    phase: Math.random() * Math.PI * 2,
                    speed: 0.03 + Math.random() * 0.05,
                    opacity: 0,
                }));
            },
            confetti: () => {
                const colors = ['#ef4444', '#3b82f6', '#22c55e', '#f59e0b', '#a855f7', '#ec4899'];
                return Array.from({ length: 45 }, () => ({
                    x: Math.random() * W(),
                    y: Math.random() * H() - H(),
                    w: 6 + Math.random() * 8,
                    h: 3 + Math.random() * 5,
                    speed: 1 + Math.random() * 1.5,
                    sway: (Math.random() - 0.5) * 1.5,
                    phase: Math.random() * Math.PI * 2,
                    rotation: Math.random() * Math.PI * 2,
                    rotSpeed: (Math.random() - 0.5) * 0.12,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    opacity: 0.7 + Math.random() * 0.3,
                }));
            },
        };

        const type = factories[particleType] ? particleType : 'stars';
        let particles = factories[type]();

        // ── Draw loops ────────────────────────────────────────────────────────
        let t = 0;

        const draw = {
            lanterns: (p) => {
                p.phase += 0.012;
                p.x += Math.sin(p.phase) * 0.4 + p.sway;
                p.y -= p.speed;
                if (p.y < -p.size * 4) {
                    p.x = Math.random() * W();
                    p.y = H() + p.size;
                }
                // lantern body
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.ellipse(p.x, p.y, p.size * 0.6, p.size, 0, 0, Math.PI * 2);
                ctx.fill();
                // glow
                const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
                grd.addColorStop(0, p.color + '66');
                grd.addColorStop(1, 'transparent');
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
                ctx.fill();
                // string
                ctx.strokeStyle = 'rgba(255,255,255,0.25)';
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y + p.size);
                ctx.lineTo(p.x, p.y + p.size * 2);
                ctx.stroke();
                ctx.restore();
            },
            snowflakes: (p) => {
                p.phase += 0.012;
                p.x += Math.sin(p.phase) * p.sway;
                p.y += p.speed;
                if (p.y > H() + p.size) {
                    p.y = -p.size;
                    p.x = Math.random() * W();
                }
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            },
            stars: (p) => {
                p.phase += p.twinkleSpeed;
                const alpha = p.opacity * (0.5 + 0.5 * Math.sin(p.phase));
                ctx.save();
                ctx.globalAlpha = alpha;
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            },
            petals: (p) => {
                p.phase += 0.008;
                p.x += Math.sin(p.phase) * p.sway;
                p.y += p.speed;
                p.rotation += p.rotSpeed;
                if (p.y > H() + p.size) {
                    p.y = -p.size;
                    p.x = Math.random() * W();
                }
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.fillStyle = accentColor || '#f9a8d4';
                ctx.beginPath();
                ctx.ellipse(0, 0, p.size * 0.4, p.size, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            },
            fireflies: (p) => {
                p.phase += p.speed;
                p.opacity = (0.5 + 0.5 * Math.sin(p.phase)) * 0.9;
                p.x += p.vx + Math.sin(p.phase * 0.5) * 0.3;
                p.y += p.vy + Math.cos(p.phase * 0.7) * 0.3;
                if (p.x < 0) p.x = W();
                if (p.x > W()) p.x = 0;
                if (p.y < 0) p.y = H();
                if (p.y > H()) p.y = 0;
                const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
                grd.addColorStop(0, (accentColor || '#fbbf24') + 'ff');
                grd.addColorStop(1, 'transparent');
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            },
            confetti: (p) => {
                p.phase += 0.06;
                p.x += Math.sin(p.phase) * p.sway;
                p.y += p.speed;
                p.rotation += p.rotSpeed;
                if (p.y > H() + 20) {
                    p.y = -20;
                    p.x = Math.random() * W();
                }
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            },
        };

        const tick = () => {
            t += 1;
            const w = W(); const h = H();
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => draw[type](p));
            rafRef.current = requestAnimationFrame(tick);
        };
        tick();

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', resize);
        };
    }, [particleType, accentColor]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
        />
    );
}

// ─── Main Modal ────────────────────────────────────────────────────────────────
export function SpecialEventModal({ event, isOpen, onClose }) {
    const { t, language } = useLanguage();
    const dialogRef = useRef(null);

    // Keyboard & scroll lock
    useEffect(() => {
        if (!isOpen) return;

        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            // trap focus inside dialog
            if (e.key === 'Tab' && dialogRef.current) {
                const focusable = dialogRef.current.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
                    e.preventDefault();
                    (e.shiftKey ? last : first).focus();
                }
            }
        };

        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        // auto-focus close btn
        setTimeout(() => dialogRef.current?.querySelector('[data-autofocus]')?.focus(), 50);

        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !event) return null;

    const lang = language === 'en' ? 'en' : 'vi';
    const content = event.translations[lang];

    const {
        gradient = 'from-slate-800 to-slate-900',
        titleGradient = 'from-slate-700 to-slate-900',
        accentHex = '#94a3b8',
        badgeBg = 'bg-slate-100 text-slate-600',
        buttonBg = 'bg-slate-800 hover:bg-slate-700',
        particles: particleType = 'stars',
        shimmer = 'from-white/5 via-white/10 to-transparent',
    } = event.theme;

    // Date display
    const dateNum = event.days[0];
    const monthName = lang === 'en'
        ? new Date(2024, event.month - 1).toLocaleString('en-US', { month: 'long' })
        : `Tháng ${event.month}`;
    const calendarType = lang === 'en'
        ? (event.type === 'lunar' ? 'Lunar Calendar' : 'Solar Calendar')
        : (event.type === 'lunar' ? 'Âm lịch' : 'Dương lịch');

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="presentation"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/75 backdrop-blur-md"
                style={{ animation: 'se-fade-in 0.4s ease both' }}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Dialog */}
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="se-title"
                className="relative z-[101] w-full"
                style={{
                    maxWidth: '960px',
                    animation: 'se-scale-in 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both',
                }}
            >
                <div className="relative flex flex-col md:flex-row overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-slate-900"
                    style={{ boxShadow: `0 32px 80px -12px ${accentHex}55, 0 0 0 1px rgba(255,255,255,0.08)` }}
                >

                    {/* ── LEFT PANE ─ Atmospheric ── */}
                    <div className={`relative flex flex-col justify-between overflow-hidden md:w-[42%] bg-gradient-to-br ${gradient}`}
                        style={{ minHeight: '340px' }}
                    >
                        {/* Particle canvas */}
                        <EventCanvas particleType={particleType} accentColor={accentHex} />

                        {/* Shimmer overlay */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${shimmer} pointer-events-none`}
                            aria-hidden="true"
                        />

                        {/* Top: calendar badge */}
                        <div className="relative z-10 flex items-start justify-between p-8">
                            <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                                <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">
                                    {calendarType}
                                </span>
                            </div>
                        </div>

                        {/* Center: date + glow */}
                        <div className="relative z-10 flex flex-col items-center justify-center py-4 px-8 flex-1">
                            {/* Glow disc */}
                            <div
                                className="absolute rounded-full blur-3xl opacity-30 pointer-events-none"
                                style={{ width: '200px', height: '200px', background: accentHex }}
                                aria-hidden="true"
                            />
                            {/* Large date numeral */}
                            <div className="relative text-center select-none">
                                <span
                                    className="block font-black text-white leading-none"
                                    style={{ fontSize: 'clamp(6rem, 18vw, 10rem)', textShadow: `0 0 60px ${accentHex}88` }}
                                >
                                    {String(dateNum).padStart(2, '0')}
                                </span>
                                <span className="block text-sm font-bold tracking-[0.25em] text-white/70 uppercase -mt-2">
                                    {monthName}
                                </span>
                            </div>
                        </div>

                        {/* Bottom: event name watermark */}
                        <div className="relative z-10 p-8">
                            <p className="text-white/20 text-xs font-mono tracking-widest uppercase select-none truncate">
                                {event.id}
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT PANE ─ Editorial ── */}
                    <div className="relative flex flex-col justify-center p-8 md:px-14 md:py-12 md:w-[58%] bg-white dark:bg-slate-950">

                        {/* Close */}
                        <button
                            data-autofocus
                            onClick={onClose}
                            className="absolute right-5 top-5 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                            aria-label={t('common.close') || 'Close'}
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="max-w-sm">

                            {/* Eyebrow badge */}
                            <div className={`mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase shadow-sm ${badgeBg}`}>
                                <Sparkles className="w-3 h-3" />
                                {t('events.specialEventTag') || 'Special Event'}
                            </div>

                            {/* Title — typographic hero */}
                            <h2
                                id="se-title"
                                className={`font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r ${titleGradient} dark:from-white dark:to-white/70`}
                                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}
                            >
                                {content.title}
                            </h2>

                            {/* Divider line */}
                            <div
                                className="mb-6 h-px w-12 rounded-full"
                                style={{ background: accentHex + 'aa' }}
                                aria-hidden="true"
                            />

                            {/* Quote */}
                            <blockquote className="mb-10">
                                <p className="text-base md:text-lg leading-relaxed text-slate-500 dark:text-slate-400 italic font-medium">
                                    &ldquo;{content.quote}&rdquo;
                                </p>
                            </blockquote>

                            {/* CTA button */}
                            <button
                                onClick={onClose}
                                className={`group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${buttonBg}`}
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