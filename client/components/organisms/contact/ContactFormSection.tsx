"use client";

import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent, Button, Input, Textarea } from '@/components/atoms';
import { useLanguage } from "@/services";
import { sendEmail } from "@/hooks";
import { validateContactForm, type ContactFormData } from "@/lib";

export function ContactFormSection() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<ContactFormData>({ name: '', phone: '', email: '', message: '' });
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    const handleInputChange = (field: keyof ContactFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setStatus({ type: '', message: '' });

        const validation = validateContactForm(formData, t);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        setIsSending(true);
        try {
            await sendEmail(formData);
            setStatus({ type: 'success', message: t('contactPage.successMessage') || 'Message sent successfully!' });
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch {
            setStatus({ type: 'error', message: t('contactPage.sendError') || "Failed to send message. Please try again later." });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <Card className="h-full card-khm rounded-2xl">
            <CardContent className="p-6 sm:p-8">
                <h2 className="heading-card !text-xl sm:!text-2xl mb-1.5">
                    {t('contactPage.formTitle')}
                </h2>
                <p className="text-body !text-sm mb-6">{t('contactPage.formDesc')}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5 uppercase tracking-wider">
                            {t('contactPage.labels.name')} <span className="text-orange-600 dark:text-orange-400 ml-0.5">*</span>
                        </label>
                        <Input
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder={t('contactPage.placeholders.name')}
                            disabled={isSending}
                            className={`h-11 rounded-xl bg-slate-50 dark:bg-[#0B0F17] dark:border-slate-700 transition-all ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'focus:border-orange-500'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5 uppercase tracking-wider">
                                {t('contactPage.labels.phone')}
                            </label>
                            <Input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                placeholder={t('contactPage.placeholders.phone')}
                                disabled={isSending}
                                className={`h-11 rounded-xl bg-slate-50 dark:bg-[#0B0F17] dark:border-slate-700 transition-all ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'focus:border-orange-500'}`}
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5 uppercase tracking-wider">
                                {t('contactPage.labels.email')} <span className="text-orange-600 dark:text-orange-400 ml-0.5">*</span>
                            </label>
                            <Input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                placeholder={t('contactPage.placeholders.email')}
                                disabled={isSending}
                                className={`h-11 rounded-xl bg-slate-50 dark:bg-[#0B0F17] dark:border-slate-700 transition-all ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'focus:border-orange-500'}`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5 uppercase tracking-wider">
                            {t('contactPage.labels.message')} <span className="text-orange-600 dark:text-orange-400 ml-0.5">*</span>
                        </label>
                        <Textarea
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder={t('contactPage.placeholders.message')}
                            rows={5}
                            disabled={isSending}
                            className={`rounded-xl bg-slate-50 dark:bg-[#0B0F17] dark:border-slate-700 resize-none transition-all ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'focus:border-orange-500'}`}
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
                    </div>

                    {status.message && (
                        <div className={`p-4 rounded-xl flex items-start gap-3 text-sm ${
                            status.type === 'success'
                                ? 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 dark:text-emerald-400'
                                : 'bg-red-500/10 text-red-700 border border-red-500/20 dark:text-red-400'
                        }`}>
                            {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                            <span className="font-medium">{status.message}</span>
                        </div>
                    )}

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full h-12 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold shadow-md shadow-orange-600/20 transition-all hover:-translate-y-0.5"
                        disabled={isSending}
                    >
                        {isSending ? <Loader2 className="mr-2 w-5 h-5 animate-spin" /> : <Send className="mr-2 w-5 h-5" />}
                        {isSending ? (t('contactPage.sending') || 'Sending...') : t('contactPage.button')}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
